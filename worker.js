const APP_NAME = "TSUKAN_YOBIKO_AI_WORKER";
const OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";
const DEFAULT_MODEL = "gpt-5.5";
const DEFAULT_ALLOWED_ORIGIN = "*";
const MAX_PROMPT_CHARS = 20000;

export default {
  async fetch(request, env) {
    try {
      return await handleRequest(request, env);
    } catch (error) {
      return jsonResponse(
        { ok: false, error: `想定外エラー: ${error?.message || "不明なエラー"}` },
        500,
        corsHeaders(env)
      );
    }
  }
};

async function handleRequest(request, env) {
  const url = new URL(request.url);
  const cors = corsHeaders(env);

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: cors });
  }

  if (url.pathname === "/health" && request.method === "GET") {
    return jsonResponse({ ok: true, app: APP_NAME, status: "healthy" }, 200, cors);
  }

  if (url.pathname !== "/api/ai") {
    return jsonResponse({ ok: false, error: "エンドポイントが見つかりません。" }, 404, cors);
  }

  if (request.method !== "POST") {
    return jsonResponse({ ok: false, error: "POSTメソッドで送信してください。" }, 405, cors);
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return jsonResponse({ ok: false, error: "Content-Typeはapplication/jsonで送信してください。" }, 415, cors);
  }

  let payload;
  try {
    payload = await request.json();
  } catch (error) {
    return jsonResponse({ ok: false, error: "JSONを読み取れませんでした。送信内容を確認してください。" }, 400, cors);
  }

  const validationError = validatePayload(payload);
  if (validationError) {
    return jsonResponse({ ok: false, error: validationError }, 400, cors);
  }

  if (!env.OPENAI_API_KEY) {
    return jsonResponse({ ok: false, error: "OPENAI_API_KEY Secretが設定されていません。" }, 500, cors);
  }

  // mode, promptType, targetType are kept for future logging/rate limiting.
  // For stricter production controls, add per-user/IP limits with Cloudflare KV, D1, or Durable Objects.
  const prompt = buildOpenAiInput(payload);

  try {
    const openAiResponse = await fetch(OPENAI_RESPONSES_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        input: prompt
      })
    });

    let data = null;
    try {
      data = await openAiResponse.json();
    } catch (error) {
      data = null;
    }

    if (!openAiResponse.ok) {
      const detail = data?.error?.message ? `: ${data.error.message}` : "";
      return jsonResponse(
        { ok: false, error: `OpenAI APIエラー: ${openAiResponse.status} ${openAiResponse.statusText}${detail}` },
        openAiResponse.status,
        cors
      );
    }

    return jsonResponse(
      {
        ok: true,
        text: extractResponseText(data),
        model: data?.model || DEFAULT_MODEL,
        usage: normalizeUsage(data?.usage)
      },
      200,
      cors
    );
  } catch (error) {
    return jsonResponse(
      { ok: false, error: `ネットワークエラー: ${error?.message || "OpenAI APIに接続できませんでした。"}` },
      502,
      cors
    );
  }
}

function validatePayload(payload) {
  if (!payload || typeof payload !== "object") return "JSONオブジェクトを送信してください。";
  if (!Object.prototype.hasOwnProperty.call(payload, "prompt")) return "promptを指定してください。";
  if (typeof payload.prompt !== "string") return "promptは文字列で送信してください。";
  if (!payload.prompt.trim()) return "promptが空です。内容を入力してください。";
  if (payload.prompt.length > MAX_PROMPT_CHARS) return "プロンプトが長すぎます。内容を短くしてください。";
  if (!["v1.5", "v1.6"].includes(String(payload.version || ""))) {
    return "対応していないversionです。v1.5またはv1.6で送信してください。";
  }
  return "";
}

function buildOpenAiInput(payload) {
  const prompt = payload.mode === "test"
    ? `${payload.prompt}\n\n接続テストのため、1文で短く回答してください。`
    : payload.prompt;
  return [
    `アプリ: ${safeMeta(payload.app)}`,
    `モード: ${safeMeta(payload.mode)}`,
    `プロンプト種別: ${safeMeta(payload.promptType)}`,
    `対象種別: ${safeMeta(payload.targetType)}`,
    `対象タイトル: ${safeMeta(payload.targetTitle)}`,
    "",
    prompt
  ].join("\n");
}

function extractResponseText(data) {
  if (typeof data?.output_text === "string" && data.output_text.trim()) {
    return data.output_text;
  }

  const parts = [];
  collectTextParts(data?.output, parts);
  if (parts.length) return parts.join("\n").trim();

  return JSON.stringify(data ?? {}, null, 2);
}

function collectTextParts(value, parts) {
  if (!value) return;
  if (typeof value === "string") {
    if (value.trim()) parts.push(value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => collectTextParts(item, parts));
    return;
  }
  if (typeof value === "object") {
    if (typeof value.text === "string" && value.text.trim()) parts.push(value.text);
    if (typeof value.output_text === "string" && value.output_text.trim()) parts.push(value.output_text);
    if (value.content) collectTextParts(value.content, parts);
    if (value.message) collectTextParts(value.message, parts);
  }
}

function normalizeUsage(usage) {
  const inputTokens = numberOrZero(usage?.input_tokens ?? usage?.prompt_tokens);
  const outputTokens = numberOrZero(usage?.output_tokens ?? usage?.completion_tokens);
  const totalTokens = numberOrZero(usage?.total_tokens) || inputTokens + outputTokens;
  return {
    input_tokens: inputTokens,
    output_tokens: outputTokens,
    total_tokens: totalTokens
  };
}

function numberOrZero(value) {
  return Number.isFinite(Number(value)) ? Number(value) : 0;
}

function safeMeta(value) {
  return String(value || "").slice(0, 200);
}

function corsHeaders(env) {
  const allowedOrigin = env?.ALLOWED_ORIGIN || DEFAULT_ALLOWED_ORIGIN;
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin"
  };
}

function jsonResponse(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...headers,
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}
