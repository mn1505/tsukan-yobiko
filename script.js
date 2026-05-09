const APP_VERSION = "v0.4";
const STORAGE_KEYS = {
  units: "tsukanYobiko.units",
  version: "tsukanYobiko.version",
  practiceLogs: "tsukanYobiko.practiceLogs",
  pastExamLogs: "tsukanYobiko.pastExamLogs",
  aiAnalyses: "tsukanYobiko.aiAnalyses"
};

const LEVELS = ["未判定", "A", "B", "C"];
const IMPORTANCE = ["高", "中", "低"];
const PAST_FORMATS = ["未設定", "空欄補充", "正誤選択", "すべて選択", "申告書作成", "品目分類", "計算", "資料読み取り", "その他"];
const RESULTS = ["未実施", "○", "△", "×"];
const SCORE_RESULTS = ["未採点", "○", "△", "×"];
const PRACTICE_SOURCE_TYPES = ["アプリ内例題", "青問題集", "0からの申告書", "計算ドリル", "過去問", "自作問題", "その他"];
const PRACTICE_SUBJECTS = ["通関業法", "関税法等", "通関実務", "共通", "未設定"];
const PRACTICE_QUESTION_TYPES = ["未設定", "空欄補充", "正誤選択", "すべて選択", "申告書作成", "品目分類", "計算", "資料読み取り", "記述メモ", "その他"];
const PRACTICE_RESULTS = ["未判定", "○", "△", "×"];
const PRACTICE_CONFIDENCE = ["未設定", "自信あり", "迷った", "当てた", "分からなかった"];
const PAST_EXAM_ROUNDS = ["第59回", "第58回", "第57回", "第56回", "第55回", "その他"];
const PAST_EXAM_SUBJECTS = ["通関業法", "関税法等", "通関実務", "共通", "未設定"];
const PAST_EXAM_SCORE_TYPES = ["未設定", "部分点あり", "全正解のみ", "計算式", "申告書形式", "その他"];
const PAST_EXAM_PRIORITIES = ["未設定", "高", "中", "低"];
const PAST_EXAM_QUESTION_PRESETS = {
  "通関業法": ["第1問", "第2問", "第3問", "第4問", "第5問", "第6問", "第7問", "第8問", "第9問", "第10問"],
  "関税法等": ["第1問", "第2問", "第3問", "第4問", "第5問", "第6問", "第7問", "第8問", "第9問", "第10問", "第11問", "第12問", "第13問", "第14問", "第15問"],
  "通関実務": ["第1問 輸出申告", "第2問 輸入申告", "第3問", "第4問", "第5問", "第6問", "第7問", "第8問", "第9問", "第10問", "第11問", "第12問", "第13問", "第14問", "第15問"]
};
const PRACTICAL_PAST_FORMATS = ["申告書作成", "品目分類", "計算", "資料読み取り"];
const WEAKNESS_TAGS = [
  "制度趣旨",
  "全体像理解",
  "用語混同",
  "主体の混同",
  "手続要件",
  "許可・承認・届出の混同",
  "期間・期限",
  "例外規定",
  "罰則",
  "課税価格",
  "税額計算",
  "申告書",
  "品目分類",
  "選択肢読解",
  "暗記不足",
  "理解不足",
  "ケアレスミス",
  "復習不足"
];

const state = {
  units: [],
  practiceLogs: [],
  pastExamLogs: [],
  aiAnalyses: [],
  activeView: "home",
  activeUnitId: null,
  activeTab: "basic",
  filters: {
    search: "",
    subject: "すべて",
    importance: "すべて",
    level: "すべて",
    review: "すべて",
    weakness: "すべて",
    redoOnly: false
  },
  reviewFilters: {
    subject: "すべて",
    review: "すべて",
    importance: "すべて",
    weakness: "すべて",
    redoOnly: false
  },
  practiceFilters: {
    search: "",
    subject: "すべて",
    sourceType: "すべて",
    questionType: "すべて",
    result: "すべて",
    confidence: "すべて",
    unitId: "すべて",
    weakness: "すべて",
    retryOnly: false
  },
  pastExamFilters: {
    search: "",
    examRound: "すべて",
    subject: "すべて",
    questionType: "すべて",
    result: "すべて",
    confidence: "すべて",
    unitId: "すべて",
    weakness: "すべて",
    priority: "すべて",
    retryOnly: false,
    allCorrectOnly: false,
    practicalOnly: false
  },
  editingPracticeLogId: null,
  editingPastExamLogId: null,
  practiceFormMessage: "",
  pastExamFormMessage: ""
};

const blankPracticeLog = {
  id: "",
  studiedAt: "",
  sourceType: "その他",
  sourceName: "",
  subject: "未設定",
  unitId: "",
  unitTitle: "",
  questionRef: "",
  questionType: "未設定",
  result: "未判定",
  confidence: "未設定",
  answerMemo: "",
  correctAnswerMemo: "",
  mistakeReason: "",
  weaknessTags: [],
  retry: false,
  aiAnalysisMemo: "",
  createdAt: "",
  updatedAt: ""
};

const practiceFieldLabels = {
  studiedAt: "学習日",
  sourceType: "出典種別",
  sourceName: "出典名",
  subject: "科目",
  unitId: "関連単元",
  questionType: "問題形式",
  questionRef: "問題番号・参照",
  answerMemo: "自分の回答メモ",
  correctAnswerMemo: "正答・解説メモ",
  result: "結果",
  confidence: "自信度",
  mistakeReason: "ミス理由",
  retry: "再演習対象",
  aiAnalysisMemo: "AI解析メモ"
};

const practiceFieldsets = [
  {
    title: "基本情報",
    fields: ["studiedAt", "sourceType", "sourceName", "subject", "unitId", "questionRef"]
  },
  {
    title: "問題情報",
    fields: ["questionType", "answerMemo", "correctAnswerMemo"]
  },
  {
    title: "結果・弱点",
    fields: ["result", "confidence", "mistakeReason", "weaknessTags", "retry", "aiAnalysisMemo"]
  }
];

const blankPastExamLog = {
  id: "",
  examYear: "",
  examRound: "第59回",
  examDate: "",
  subject: "未設定",
  questionNo: "",
  subQuestionNo: "",
  questionType: "未設定",
  scoreType: "未設定",
  relatedUnitId: "",
  relatedUnitTitle: "",
  topic: "",
  questionSummary: "",
  questionTextMemo: "",
  myAnswer: "",
  correctAnswer: "",
  result: "未実施",
  confidence: "未設定",
  mistakeReason: "",
  weaknessTags: [],
  retry: false,
  priority: "未設定",
  aiAnalysisMemo: "",
  sourceFileMemo: "",
  studiedAt: "",
  createdAt: "",
  updatedAt: ""
};

const pastExamFieldLabels = {
  studiedAt: "学習日",
  examRound: "試験回",
  examYear: "年度",
  examDate: "試験日",
  subject: "科目",
  questionNo: "問題番号",
  subQuestionNo: "小問番号",
  relatedUnitId: "関連単元",
  questionType: "出題形式",
  scoreType: "配点・採点方式",
  topic: "論点",
  questionSummary: "問題要約",
  questionTextMemo: "問題本文メモ",
  sourceFileMemo: "出典ファイルメモ",
  myAnswer: "自分の回答",
  correctAnswer: "正答メモ",
  result: "結果",
  confidence: "自信度",
  mistakeReason: "ミス理由",
  weaknessTags: "弱点タグ",
  retry: "再演習対象",
  priority: "優先度",
  aiAnalysisMemo: "AI解析メモ"
};

const pastExamFieldsets = [
  { title: "基本情報", fields: ["studiedAt", "examRound", "examYear", "examDate", "subject", "questionNo", "subQuestionNo", "relatedUnitId"] },
  { title: "問題情報", fields: ["questionType", "scoreType", "topic", "questionSummary", "questionTextMemo", "sourceFileMemo"] },
  { title: "回答・結果", fields: ["myAnswer", "correctAnswer", "result", "confidence", "mistakeReason"] },
  { title: "弱点・復習", fields: ["weaknessTags", "retry", "priority", "aiAnalysisMemo"] }
];

const tabDefinitions = [
  { id: "basic", label: "基本" },
  { id: "law", label: "法令" },
  { id: "exam", label: "試験" },
  { id: "past", label: "過去問" },
  { id: "practice", label: "演習" },
  { id: "weakness", label: "弱点" },
  { id: "memo", label: "メモ" }
];

function makeInitialUnits() {
  const rows = [
    ["u001", "通関業法", "通関業法の目的・定義", "高", "通関業制度の入口として、目的と主要用語を整理する単元。", "用語の定義、主体、業務範囲の区別を確認する。"],
    ["u002", "通関業法", "通関業の許可", "高", "通関業を営むための許可制度と監督の枠組みを整理する単元。", "許可権者、許可要件、営業所との関係を押さえる。"],
    ["u003", "通関業法", "欠格事由", "高", "通関業の適格性を判断する欠格事由を整理する単元。", "期間、対象者、許可拒否とのつながりを混同しない。"],
    ["u004", "通関業法", "通関業者・通関士の義務", "高", "通関業者と通関士に課される義務を分けて整理する単元。", "名義貸し、秘密保持、信用失墜行為などの主体を確認する。"],
    ["u005", "通関業法", "通関業者の記帳・届出・報告", "中", "記帳、届出、報告など継続的な管理義務を整理する単元。", "提出先、保存、届出が必要な場面を比較する。"],
    ["u006", "関税法等", "保税地域", "高", "外国貨物を扱う場所と制度の全体像を整理する単元。", "保税蔵置場、保税工場などの機能差を押さえる。"],
    ["u007", "関税法等", "保税運送", "高", "外国貨物を保税状態で運送する制度を整理する単元。", "承認、届出、期間、到着確認の流れを確認する。"],
    ["u008", "関税法等", "輸入申告と輸入の許可", "高", "輸入申告から許可までの基本手続を整理する単元。", "申告時期、必要書類、審査・検査・納税との関係を押さえる。"],
    ["u009", "関税法等", "輸出申告", "高", "輸出申告と許可の流れを整理する単元。", "輸入申告との違い、保税地域搬入との関係を比較する。"],
    ["u010", "関税法等", "課税価格の決定", "高", "関税評価の基本構造と加算・控除要素を整理する単元。", "現実支払価格、加算要素、代替評価方法の順序を確認する。"],
    ["u011", "通関実務", "品目分類", "高", "HS分類の考え方と分類判断の手順を整理する単元。", "部注、類注、通則、選択肢読解の順序を意識する。"],
    ["u012", "通関実務", "申告書作成", "高", "申告書作成に必要な情報整理と計算処理を扱う単元。", "欄ごとの意味、税額計算、資料読み取りを連動させる。"]
  ];

  return rows.map(([id, subject, title, importance, purpose, examPoint]) => ({
    id,
    subject,
    title,
    importance,
    level: "未判定",
    reviewTarget: false,
    redoTarget: false,
    updatedAt: "",
    law: {
      basis: "",
      articleSummary: "",
      purpose,
      overview: "",
      yearlySupport: "",
      checkedAt: "",
      revisionMemo: ""
    },
    exam: {
      keyPoint: examPoint,
      confusingPoints: "",
      traps: "",
      memoryPoints: "",
      understandingPoints: "",
      pastQuestionStyle: "",
      relatedPastQuestions: "",
      targetGoal: "",
      mistakePatterns: ""
    },
    pastExam: {
      questionMemo: "",
      format: "未設定",
      myAnswer: "",
      result: "未実施",
      mistakeReason: "",
      aiMemo: ""
    },
    exercises: [1, 2, 3].map((number) => ({
      question: `例題${number}の問題文メモ`,
      myAnswer: "",
      result: "未採点",
      explanation: ""
    })),
    optimization: {
      practiceHistoryMemo: "",
      workbookMemo: "",
      pastExamMemo: "",
      wrongPatternMemo: ""
    },
    ai: {
      analysisMemo: "",
      promptMemo: "",
      weaknessTags: []
    },
    freeMemo: ""
  }));
}

function loadState() {
  const savedUnits = readJson(STORAGE_KEYS.units);
  state.units = Array.isArray(savedUnits) ? savedUnits.map(normalizeUnit) : makeInitialUnits();
  state.practiceLogs = normalizeArray(readJson(STORAGE_KEYS.practiceLogs)).map(normalizePracticeLog);
  state.pastExamLogs = normalizeArray(readJson(STORAGE_KEYS.pastExamLogs)).map(normalizePastExamLog);
  state.aiAnalyses = normalizeArray(readJson(STORAGE_KEYS.aiAnalyses));
  localStorage.setItem(STORAGE_KEYS.version, APP_VERSION);
}

function normalizeArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizeUnit(unit) {
  const base = makeBlankUnit();
  return {
    ...base,
    ...unit,
    law: { ...base.law, ...(unit?.law || {}) },
    exam: { ...base.exam, ...(unit?.exam || {}) },
    pastExam: { ...base.pastExam, ...(unit?.pastExam || {}) },
    exercises: Array.isArray(unit?.exercises) && unit.exercises.length
      ? unit.exercises.map((exercise, index) => ({
          question: `例題${index + 1}の問題文メモ`,
          myAnswer: "",
          result: "未採点",
          explanation: "",
          ...exercise
        }))
      : base.exercises,
    optimization: { ...base.optimization, ...(unit?.optimization || {}) },
    ai: {
      ...base.ai,
      ...(unit?.ai || {}),
      weaknessTags: Array.isArray(unit?.ai?.weaknessTags) ? unit.ai.weaknessTags : []
    }
  };
}

function normalizePracticeLog(log) {
  const normalized = {
    ...blankPracticeLog,
    ...(log || {}),
    weaknessTags: Array.isArray(log?.weaknessTags) ? log.weaknessTags : []
  };
  if (!normalized.id) normalized.id = makePracticeLogId();
  if (!normalized.studiedAt) normalized.studiedAt = todayString();
  if (!normalized.sourceType) normalized.sourceType = "その他";
  if (!normalized.subject) normalized.subject = "未設定";
  if (!normalized.questionType) normalized.questionType = "未設定";
  if (!normalized.result) normalized.result = "未判定";
  if (!normalized.confidence) normalized.confidence = "未設定";
  const unit = state.units.find((item) => item.id === normalized.unitId);
  if (unit) normalized.unitTitle = unit.title;
  return normalized;
}

function normalizePastExamLog(log) {
  const normalized = {
    ...blankPastExamLog,
    ...(log || {}),
    weaknessTags: Array.isArray(log?.weaknessTags) ? log.weaknessTags : []
  };
  if (!normalized.id) normalized.id = makePastExamLogId();
  if (!normalized.studiedAt) normalized.studiedAt = todayString();
  if (!normalized.examRound) normalized.examRound = "第59回";
  if (!normalized.subject) normalized.subject = "未設定";
  if (!normalized.questionType) normalized.questionType = "未設定";
  if (!normalized.scoreType) normalized.scoreType = "未設定";
  if (!normalized.result) normalized.result = "未実施";
  if (!normalized.confidence) normalized.confidence = "未設定";
  if (!normalized.priority) normalized.priority = "未設定";
  const unit = state.units.find((item) => item.id === normalized.relatedUnitId);
  if (unit) normalized.relatedUnitTitle = unit.title;
  return normalized;
}

function makeBlankUnit() {
  return {
    id: "",
    subject: "",
    title: "",
    importance: "中",
    level: "未判定",
    reviewTarget: false,
    redoTarget: false,
    updatedAt: "",
    law: {
      basis: "",
      articleSummary: "",
      purpose: "",
      overview: "",
      yearlySupport: "",
      checkedAt: "",
      revisionMemo: ""
    },
    exam: {
      keyPoint: "",
      confusingPoints: "",
      traps: "",
      memoryPoints: "",
      understandingPoints: "",
      pastQuestionStyle: "",
      relatedPastQuestions: "",
      targetGoal: "",
      mistakePatterns: ""
    },
    pastExam: {
      questionMemo: "",
      format: "未設定",
      myAnswer: "",
      result: "未実施",
      mistakeReason: "",
      aiMemo: ""
    },
    exercises: [1, 2, 3].map((number) => ({
      question: `例題${number}の問題文メモ`,
      myAnswer: "",
      result: "未採点",
      explanation: ""
    })),
    optimization: {
      practiceHistoryMemo: "",
      workbookMemo: "",
      pastExamMemo: "",
      wrongPatternMemo: ""
    },
    ai: {
      analysisMemo: "",
      promptMemo: "",
      weaknessTags: []
    },
    freeMemo: ""
  };
}

function readJson(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn(`${key}を読み込めませんでした`, error);
    return null;
  }
}

function saveUnits() {
  localStorage.setItem(STORAGE_KEYS.units, JSON.stringify(state.units));
  localStorage.setItem(STORAGE_KEYS.practiceLogs, JSON.stringify(state.practiceLogs));
  localStorage.setItem(STORAGE_KEYS.pastExamLogs, JSON.stringify(state.pastExamLogs));
  localStorage.setItem(STORAGE_KEYS.aiAnalyses, JSON.stringify(state.aiAnalyses));
  localStorage.setItem(STORAGE_KEYS.version, APP_VERSION);
}

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

function makePracticeLogId() {
  const random = Math.random().toString(36).slice(2, 10);
  return `log-${Date.now().toString(36)}-${random}`;
}

function makePastExamLogId() {
  const random = Math.random().toString(36).slice(2, 10);
  return `past-${Date.now().toString(36)}-${random}`;
}

function getReviewStatus(unit) {
  const reasons = getReviewReasons(unit);
  if (
    unit.level === "C" ||
    reasons.includes("例題に×あり") ||
    reasons.includes("過去問が×") ||
    reasons.includes("関連演習ログに×あり") ||
    reasons.includes("関連過去問ログに×あり") ||
    reasons.includes("関連過去問ログに高優先度あり")
  ) {
    return { label: "最優先復習", weight: 2, className: "priority" };
  }
  if (
    unit.level === "B" ||
    reasons.includes("例題に△あり") ||
    unit.reviewTarget ||
    unit.pastExam.result === "△" ||
    reasons.includes("関連演習ログに△あり") ||
    reasons.includes("関連演習ログに再演習対象あり") ||
    reasons.includes("関連過去問ログに△あり") ||
    reasons.includes("関連過去問ログに再演習対象あり") ||
    getWeaknessCount(unit) > 0
  ) {
    return { label: "通常復習", weight: 1, className: "normal" };
  }
  return { label: "復習不要", weight: 0, className: "ok" };
}

function getReviewReasons(unit) {
  const reasons = [];
  if (unit.level === "C") reasons.push("C判定");
  if (unit.level === "B") reasons.push("B判定");
  if (unit.exercises.some((exercise) => exercise.result === "×")) reasons.push("例題に×あり");
  if (unit.exercises.some((exercise) => exercise.result === "△")) reasons.push("例題に△あり");
  if (unit.pastExam.result === "×") reasons.push("過去問が×");
  if (unit.pastExam.result === "△") reasons.push("過去問が△");
  const logs = getPracticeLogsForUnit(unit.id);
  if (logs.some((log) => log.result === "×")) reasons.push("関連演習ログに×あり");
  if (logs.some((log) => log.result === "△")) reasons.push("関連演習ログに△あり");
  if (logs.some((log) => log.retry)) reasons.push("関連演習ログに再演習対象あり");
  const pastLogs = getPastExamLogsForUnit(unit.id);
  if (pastLogs.some((log) => log.result === "×")) reasons.push("関連過去問ログに×あり");
  if (pastLogs.some((log) => log.result === "△")) reasons.push("関連過去問ログに△あり");
  if (pastLogs.some((log) => log.retry)) reasons.push("関連過去問ログに再演習対象あり");
  if (pastLogs.some((log) => log.priority === "高")) reasons.push("関連過去問ログに高優先度あり");
  if (unit.reviewTarget) reasons.push("復習対象チェックあり");
  if (getWeaknessCount(unit) > 0) reasons.push("弱点タグあり");
  return reasons;
}

function getPracticeLogsForUnit(unitId) {
  return state.practiceLogs.filter((log) => log.unitId === unitId);
}

function getPastExamLogsForUnit(unitId) {
  return state.pastExamLogs.filter((log) => log.relatedUnitId === unitId);
}

function getWeaknessCount(unit) {
  return Array.isArray(unit.ai?.weaknessTags) ? unit.ai.weaknessTags.length : 0;
}

function render() {
  renderDashboard();
  renderFilters();
  renderUnitList();
  renderPracticeView();
  renderPastExamView();
  renderReviewList();
  renderSettings();
  if (state.activeUnitId) {
    renderUnitDetail();
  }
}

function renderDashboard() {
  const counts = LEVELS.reduce((acc, level) => ({ ...acc, [level]: 0 }), {});
  state.units.forEach((unit) => {
    counts[unit.level] = (counts[unit.level] || 0) + 1;
  });
  const reviewUnits = state.units.filter((unit) => getReviewStatus(unit).weight > 0);
  const stats = [
    ["総単元数", state.units.length],
    ["A判定数", counts.A || 0],
    ["B判定数", counts.B || 0],
    ["C判定数", counts.C || 0],
    ["未判定数", counts["未判定"] || 0],
    ["要復習数", reviewUnits.length]
  ];

  document.querySelector("#dashboardStats").innerHTML = stats
    .map(([label, value]) => `<div class="stat-card"><span>${escapeHtml(label)}</span><strong>${value}</strong></div>`)
    .join("");

  const last = [...state.units].filter((unit) => unit.updatedAt).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))[0];
  document.querySelector("#lastUpdatedUnit").innerHTML = last
    ? `<button class="compact-item ghost-button" type="button" data-open-unit="${last.id}"><span>${escapeHtml(last.title)}</span><span>${escapeHtml(last.updatedAt)}</span></button>`
    : `<p class="muted">まだ保存された単元はありません。</p>`;

  const recommendations = reviewUnits
    .sort(compareReviewUnits)
    .slice(0, 3);
  document.querySelector("#recommendedReviews").innerHTML = recommendations.length
    ? recommendations.map((unit) => compactUnitButton(unit)).join("")
    : `<p class="muted">現在の条件では復習対象はありません。</p>`;

  const practiceStats = getPracticeStats(state.practiceLogs);
  const recentDate = getRecentPracticeDate();
  const recentWrongLogs = [...state.practiceLogs]
    .filter((log) => log.result === "×")
    .sort(comparePracticeLogs)
    .slice(0, 3);
  document.querySelector("#homePracticeSummary").innerHTML = `
    <dl class="summary-list">
      <div><dt>総演習数</dt><dd>${practiceStats.total}</dd></div>
      <div><dt>正答率</dt><dd>${practiceStats.accuracy}</dd></div>
      <div><dt>再演習対象数</dt><dd>${practiceStats.retry}</dd></div>
      <div><dt>最近の演習日</dt><dd>${escapeHtml(recentDate || "未記録")}</dd></div>
    </dl>
    <div class="mini-list">
      <p class="muted mini-list-title">直近の×ログ</p>
      ${recentWrongLogs.length ? recentWrongLogs.map((log) => `
        <div class="mini-item">
          <span>${escapeHtml(log.studiedAt || "日付なし")} / ${escapeHtml(log.unitTitle || "単元未設定")}</span>
          <small>${escapeHtml([log.sourceName, log.questionRef].filter(Boolean).join(" / ") || "参照未設定")}</small>
        </div>
      `).join("") : `<p class="muted">×の演習ログはありません。</p>`}
    </div>
  `;

  const pastStats = getPastExamStats(state.pastExamLogs);
  const recentPastDate = getRecentPastExamDate();
  const recentWrongPastLogs = [...state.pastExamLogs]
    .filter((log) => log.result === "×")
    .sort(comparePastExamLogs)
    .slice(0, 3);
  const subjectAccuracy = PAST_EXAM_SUBJECTS
    .filter((subject) => subject !== "未設定")
    .map((subject) => `${subject}：${pastStats.subjects[subject]?.accuracy || "0.0%"}`)
    .join(" / ");
  document.querySelector("#homePastExamSummary").innerHTML = `
    <dl class="summary-list">
      <div><dt>総過去問ログ数</dt><dd>${pastStats.total}</dd></div>
      <div><dt>過去問正答率</dt><dd>${pastStats.accuracy}</dd></div>
      <div><dt>再演習対象数</dt><dd>${pastStats.retry}</dd></div>
      <div><dt>最近の過去問学習日</dt><dd>${escapeHtml(recentPastDate || "未記録")}</dd></div>
    </dl>
    <p class="muted mini-list-title">科目別正答率</p>
    <p>${escapeHtml(subjectAccuracy || "未記録")}</p>
    <div class="mini-list">
      <p class="muted mini-list-title">直近の×過去問ログ</p>
      ${recentWrongPastLogs.length ? recentWrongPastLogs.map((log) => `
        <div class="mini-item">
          <span>${escapeHtml(log.studiedAt || "日付なし")} / ${escapeHtml(log.examRound || "試験回なし")} / ${escapeHtml(log.subject || "未設定")} / ${escapeHtml(log.questionNo || "問題番号なし")}</span>
          <small>${escapeHtml([log.relatedUnitTitle, log.topic].filter(Boolean).join(" / ") || "論点未設定")}</small>
        </div>
      `).join("") : `<p class="muted">×の過去問ログはありません。</p>`}
    </div>
  `;
}

function renderFilters() {
  const subjects = ["すべて", ...new Set(state.units.map((unit) => unit.subject))];
  fillSelect("#subjectFilter", subjects, state.filters.subject);
  fillSelect("#importanceFilter", ["すべて", ...IMPORTANCE], state.filters.importance);
  fillSelect("#levelFilter", ["すべて", ...LEVELS], state.filters.level);
  fillSelect("#reviewFilter", ["すべて", "最優先復習", "通常復習", "復習不要"], state.filters.review);
  fillSelect("#weaknessFilter", ["すべて", "弱点タグあり", "弱点タグなし"], state.filters.weakness);
  document.querySelector("#searchInput").value = state.filters.search;
  document.querySelector("#redoOnlyFilter").checked = state.filters.redoOnly;
  fillSelect("#reviewSubjectFilter", subjects, state.reviewFilters.subject);
  fillSelect("#reviewStatusFilter", ["すべて", "最優先復習", "通常復習", "復習不要"], state.reviewFilters.review);
  fillSelect("#reviewImportanceFilter", ["すべて", ...IMPORTANCE], state.reviewFilters.importance);
  fillSelect("#reviewWeaknessFilter", ["すべて", "弱点タグあり", "弱点タグなし"], state.reviewFilters.weakness);
  document.querySelector("#reviewRedoOnlyFilter").checked = state.reviewFilters.redoOnly;
}

function fillSelect(selector, options, selected) {
  const element = document.querySelector(selector);
  element.innerHTML = options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("");
  element.value = selected;
}

function filteredUnits() {
  const keyword = state.filters.search.trim().toLowerCase();
  return state.units.filter((unit) => {
    const review = getReviewStatus(unit).label;
    const hasWeakness = getWeaknessCount(unit) > 0;
    const haystack = [
      unit.title,
      unit.subject,
      unit.law.basis,
      unit.law.articleSummary,
      unit.law.purpose,
      unit.law.overview,
      unit.exam.keyPoint,
      unit.exam.confusingPoints,
      unit.exam.traps,
      unit.exam.memoryPoints,
      unit.exam.understandingPoints,
      unit.exam.pastQuestionStyle,
      unit.exam.relatedPastQuestions,
      unit.freeMemo,
      unit.ai.analysisMemo,
      unit.exam.mistakePatterns,
      unit.optimization.wrongPatternMemo,
      unit.ai.weaknessTags.join(" ")
    ].join(" ").toLowerCase();
    return (
      (!keyword || haystack.includes(keyword)) &&
      (state.filters.subject === "すべて" || unit.subject === state.filters.subject) &&
      (state.filters.importance === "すべて" || unit.importance === state.filters.importance) &&
      (state.filters.level === "すべて" || unit.level === state.filters.level) &&
      (state.filters.review === "すべて" || review === state.filters.review) &&
      (state.filters.weakness === "すべて" ||
        (state.filters.weakness === "弱点タグあり" && hasWeakness) ||
        (state.filters.weakness === "弱点タグなし" && !hasWeakness)) &&
      (!state.filters.redoOnly || unit.redoTarget)
    );
  });
}

function renderUnitList() {
  const units = filteredUnits();
  document.querySelector("#unitResultCount").textContent = `表示中：${units.length} / ${state.units.length}単元`;
  document.querySelector("#unitCards").innerHTML = units.length
    ? units.map((unit) => unitCard(unit)).join("")
    : `<div class="panel empty-state"><p class="muted">条件に合う単元はありません。</p></div>`;
}

function renderPracticeView() {
  renderPracticeStats();
  renderPracticeForm();
  renderPracticeFilters();
  renderPracticeLogList();
}

function renderPracticeStats() {
  const stats = getPracticeStats(state.practiceLogs);
  const rows = [
    ["総演習数", stats.total],
    ["○", stats.correct],
    ["△", stats.partial],
    ["×", stats.wrong],
    ["未判定", stats.pending],
    ["再演習対象", stats.retry],
    ["正答率", stats.accuracy]
  ];
  document.querySelector("#practiceStats").innerHTML = rows
    .map(([label, value]) => `<div class="stat-card"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`)
    .join("");
}

function getPracticeStats(logs) {
  const correct = logs.filter((log) => log.result === "○").length;
  const partial = logs.filter((log) => log.result === "△").length;
  const wrong = logs.filter((log) => log.result === "×").length;
  const pending = logs.filter((log) => log.result === "未判定").length;
  const retry = logs.filter((log) => log.retry).length;
  const denominator = correct + partial + wrong;
  const accuracy = denominator ? `${((correct / denominator) * 100).toFixed(1)}%` : "0.0%";
  return { total: logs.length, correct, partial, wrong, pending, retry, accuracy };
}

function getRecentPracticeDate() {
  return state.practiceLogs
    .map((log) => log.studiedAt)
    .filter(Boolean)
    .sort((a, b) => b.localeCompare(a))[0];
}

function renderPastExamView() {
  renderPastExamStats();
  renderPastExamForm();
  renderPastExamFilters();
  renderPastExamLogList();
}

function renderPastExamStats() {
  const stats = getPastExamStats(state.pastExamLogs);
  const subjectLines = PAST_EXAM_SUBJECTS
    .filter((subject) => subject !== "未設定")
    .map((subject) => {
      const subjectStats = stats.subjects[subject] || { total: 0, accuracy: "0.0%" };
      return `${subject} ${subjectStats.total}件 / ${subjectStats.accuracy}`;
    })
    .join(" / ");
  const rows = [
    ["総過去問ログ数", stats.total],
    ["○", stats.correct],
    ["△", stats.partial],
    ["×", stats.wrong],
    ["未実施", stats.pending],
    ["再演習対象", stats.retry],
    ["総正答率", stats.accuracy],
    ["科目別", subjectLines || "未記録"]
  ];
  document.querySelector("#pastExamStats").innerHTML = rows
    .map(([label, value]) => `<div class="stat-card"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`)
    .join("");
}

function getPastExamStats(logs) {
  const correct = logs.filter((log) => log.result === "○").length;
  const partial = logs.filter((log) => log.result === "△").length;
  const wrong = logs.filter((log) => log.result === "×").length;
  const pending = logs.filter((log) => log.result === "未実施").length;
  const retry = logs.filter((log) => log.retry).length;
  const denominator = correct + partial + wrong;
  const accuracy = denominator ? `${((correct / denominator) * 100).toFixed(1)}%` : "0.0%";
  const subjects = {};
  PAST_EXAM_SUBJECTS.forEach((subject) => {
    const subjectLogs = logs.filter((log) => log.subject === subject);
    const subjectCorrect = subjectLogs.filter((log) => log.result === "○").length;
    const subjectPartial = subjectLogs.filter((log) => log.result === "△").length;
    const subjectWrong = subjectLogs.filter((log) => log.result === "×").length;
    const subjectDenominator = subjectCorrect + subjectPartial + subjectWrong;
    subjects[subject] = {
      total: subjectLogs.length,
      accuracy: subjectDenominator ? `${((subjectCorrect / subjectDenominator) * 100).toFixed(1)}%` : "0.0%"
    };
  });
  return { total: logs.length, correct, partial, wrong, pending, retry, accuracy, subjects };
}

function getRecentPastExamDate() {
  return state.pastExamLogs
    .map((log) => log.studiedAt)
    .filter(Boolean)
    .sort((a, b) => b.localeCompare(a))[0];
}

function renderPastExamForm() {
  const editingLog = state.pastExamLogs.find((log) => log.id === state.editingPastExamLogId);
  const log = editingLog || { ...blankPastExamLog, studiedAt: todayString(), examRound: "第59回" };
  document.querySelector("#pastExamFormTitle").textContent = editingLog ? "過去問ログを編集" : "過去問ログを追加";
  document.querySelector("#pastExamLogForm").innerHTML = `
    ${pastExamFieldsets.map((fieldset) => `
      <fieldset class="practice-fieldset">
        <legend>${escapeHtml(fieldset.title)}</legend>
        <div class="form-grid">
          ${fieldset.fields.map((field) => renderPastExamField(field, log)).join("")}
        </div>
      </fieldset>
    `).join("")}
    <div class="form-actions">
      <button class="primary-button" type="submit">${editingLog ? "過去問ログを更新" : "過去問ログを保存"}</button>
      ${editingLog ? `<button id="cancelPastExamEditButton" class="ghost-button" type="button">キャンセル</button>` : ""}
    </div>
  `;
  document.querySelector("#pastExamFormMessage").textContent = state.pastExamFormMessage;
}

function renderPastExamField(field, log) {
  if (field === "studiedAt" || field === "examDate") return pastExamInput(field, log[field], "date");
  if (field === "examRound") return pastExamSelect(field, uniqueOptions(PAST_EXAM_ROUNDS, log[field]), log[field]);
  if (field === "subject") return pastExamSelect(field, uniqueOptions(PAST_EXAM_SUBJECTS, log[field]), log[field]);
  if (field === "questionNo") {
    const preset = PAST_EXAM_QUESTION_PRESETS[log.subject] || Object.values(PAST_EXAM_QUESTION_PRESETS).flat();
    return `
      <label>
        ${pastExamFieldLabels[field]}
        <input name="${field}" list="pastExamQuestionNoOptions" value="${escapeAttribute(log[field])}" placeholder="第1問">
        <datalist id="pastExamQuestionNoOptions">
          ${preset.map((option) => `<option value="${escapeAttribute(option)}"></option>`).join("")}
        </datalist>
      </label>
    `;
  }
  if (field === "relatedUnitId") {
    const options = [{ value: "", label: "未設定" }, ...state.units.map((unit) => ({ value: unit.id, label: `${unit.subject} / ${unit.title}` }))];
    return `
      <label class="field-wide">
        ${pastExamFieldLabels[field]}
        <select name="${field}">
          ${options.map((option) => `<option value="${escapeAttribute(option.value)}" ${option.value === log.relatedUnitId ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field === "questionType") return pastExamSelect(field, uniqueOptions(PAST_FORMATS, log[field]), log[field]);
  if (field === "scoreType") return pastExamSelect(field, uniqueOptions(PAST_EXAM_SCORE_TYPES, log[field]), log[field]);
  if (field === "result") return pastExamSelect(field, RESULTS, log[field]);
  if (field === "confidence") return pastExamSelect(field, PRACTICE_CONFIDENCE, log[field]);
  if (field === "priority") return pastExamSelect(field, PAST_EXAM_PRIORITIES, log[field]);
  if (field === "weaknessTags") {
    return `
      <div class="field-wide">
        <div class="field-label">弱点タグ</div>
        <div class="check-row practice-tag-row">
          ${WEAKNESS_TAGS.map((tag) => `
            <label class="check-card">
              <input type="checkbox" name="weaknessTags" value="${escapeAttribute(tag)}" ${log.weaknessTags.includes(tag) ? "checked" : ""}>
              ${escapeHtml(tag)}
            </label>
          `).join("")}
        </div>
      </div>
    `;
  }
  if (field === "retry") {
    return `
      <label class="check-card field-wide">
        <input type="checkbox" name="${field}" ${log.retry ? "checked" : ""}>
        ${pastExamFieldLabels[field]}
      </label>
    `;
  }
  if (["questionSummary", "questionTextMemo", "myAnswer", "correctAnswer", "mistakeReason", "aiAnalysisMemo", "sourceFileMemo"].includes(field)) {
    return `
      <label class="field-wide">
        ${pastExamFieldLabels[field]}
        <textarea name="${field}">${escapeHtml(log[field])}</textarea>
      </label>
    `;
  }
  return pastExamInput(field, log[field]);
}

function pastExamInput(field, value, type = "text") {
  return `
    <label class="${["examYear", "subQuestionNo"].includes(field) || type === "date" ? "" : "field-wide"}">
      ${pastExamFieldLabels[field]}
      <input type="${type}" name="${field}" value="${escapeAttribute(value)}">
    </label>
  `;
}

function pastExamSelect(field, options, value) {
  return `
    <label>
      ${pastExamFieldLabels[field]}
      <select name="${field}">
        ${options.map((option) => `<option value="${escapeAttribute(option)}" ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
      </select>
    </label>
  `;
}

function renderPastExamFilters() {
  const unitOptions = ["すべて", ...state.units.map((unit) => unit.id)];
  fillSelect("#pastExamRoundFilter", ["すべて", ...PAST_EXAM_ROUNDS], state.pastExamFilters.examRound);
  fillSelect("#pastExamSubjectFilter", ["すべて", ...PAST_EXAM_SUBJECTS], state.pastExamFilters.subject);
  fillSelect("#pastExamQuestionTypeFilter", ["すべて", ...PAST_FORMATS], state.pastExamFilters.questionType);
  fillSelect("#pastExamResultFilter", ["すべて", ...RESULTS], state.pastExamFilters.result);
  fillSelect("#pastExamConfidenceFilter", ["すべて", ...PRACTICE_CONFIDENCE], state.pastExamFilters.confidence);
  fillUnitFilter("#pastExamUnitFilter", unitOptions, state.pastExamFilters.unitId);
  fillSelect("#pastExamWeaknessFilter", ["すべて", "弱点タグあり", "弱点タグなし"], state.pastExamFilters.weakness);
  fillSelect("#pastExamPriorityFilter", ["すべて", ...PAST_EXAM_PRIORITIES], state.pastExamFilters.priority);
  document.querySelector("#pastExamSearchInput").value = state.pastExamFilters.search;
  document.querySelector("#pastExamRetryOnlyFilter").checked = state.pastExamFilters.retryOnly;
  document.querySelector("#pastExamAllCorrectOnlyFilter").checked = state.pastExamFilters.allCorrectOnly;
  document.querySelector("#pastExamPracticalOnlyFilter").checked = state.pastExamFilters.practicalOnly;
}

function filteredPastExamLogs() {
  const keyword = state.pastExamFilters.search.trim().toLowerCase();
  return [...state.pastExamLogs]
    .filter((log) => {
      const hasWeakness = log.weaknessTags.length > 0;
      const isPractical = log.subject === "通関実務" || PRACTICAL_PAST_FORMATS.includes(log.questionType);
      const haystack = [
        log.examRound,
        log.examYear,
        log.subject,
        log.questionNo,
        log.subQuestionNo,
        log.relatedUnitTitle,
        log.topic,
        log.questionSummary,
        log.questionTextMemo,
        log.myAnswer,
        log.correctAnswer,
        log.mistakeReason,
        log.aiAnalysisMemo,
        log.sourceFileMemo
      ].join(" ").toLowerCase();
      return (
        (!keyword || haystack.includes(keyword)) &&
        (state.pastExamFilters.examRound === "すべて" || log.examRound === state.pastExamFilters.examRound) &&
        (state.pastExamFilters.subject === "すべて" || log.subject === state.pastExamFilters.subject) &&
        (state.pastExamFilters.questionType === "すべて" || log.questionType === state.pastExamFilters.questionType) &&
        (state.pastExamFilters.result === "すべて" || log.result === state.pastExamFilters.result) &&
        (state.pastExamFilters.confidence === "すべて" || log.confidence === state.pastExamFilters.confidence) &&
        (state.pastExamFilters.unitId === "すべて" || log.relatedUnitId === state.pastExamFilters.unitId) &&
        (state.pastExamFilters.priority === "すべて" || log.priority === state.pastExamFilters.priority) &&
        (state.pastExamFilters.weakness === "すべて" ||
          (state.pastExamFilters.weakness === "弱点タグあり" && hasWeakness) ||
          (state.pastExamFilters.weakness === "弱点タグなし" && !hasWeakness)) &&
        (!state.pastExamFilters.retryOnly || log.retry) &&
        (!state.pastExamFilters.allCorrectOnly || log.scoreType === "全正解のみ") &&
        (!state.pastExamFilters.practicalOnly || isPractical)
      );
    })
    .sort(comparePastExamLogs);
}

function renderPastExamLogList() {
  const logs = filteredPastExamLogs();
  document.querySelector("#pastExamResultCount").textContent = `表示中：${logs.length} / ${state.pastExamLogs.length}件`;
  document.querySelector("#pastExamLogCards").innerHTML = logs.length
    ? logs.map((log) => pastExamLogCard(log)).join("")
    : `<div class="panel empty-state"><p class="muted">条件に合う過去問ログはありません。</p></div>`;
}

function comparePastExamLogs(a, b) {
  const dateDiff = (b.studiedAt || "").localeCompare(a.studiedAt || "");
  if (dateDiff) return dateDiff;
  return (b.updatedAt || b.createdAt || "").localeCompare(a.updatedAt || a.createdAt || "");
}

function pastExamLogCard(log) {
  return `
    <article class="practice-log-card past-exam-log-card">
      <div class="practice-log-top">
        <div>
          <p class="eyebrow">${escapeHtml(log.studiedAt || "日付なし")} / ${escapeHtml(log.examRound || "試験回なし")} / ${escapeHtml(log.subject || "未設定")}</p>
          <h3>${escapeHtml([log.questionNo, log.subQuestionNo].filter(Boolean).join(" ") || "問題番号なし")}</h3>
        </div>
        <span class="result-mark ${practiceResultClass(log.result)}">${escapeHtml(log.result)}</span>
      </div>
      <div class="card-meta">
        <span class="badge">${escapeHtml(log.relatedUnitTitle || "関連単元なし")}</span>
        <span class="badge">${escapeHtml(log.questionType || "未設定")}</span>
        <span class="badge">${escapeHtml(log.confidence || "未設定")}</span>
        <span class="badge">弱点 ${log.weaknessTags.length}</span>
        ${log.retry ? `<span class="badge priority">再演習対象</span>` : ""}
        ${log.priority === "高" ? `<span class="badge priority">優先度 高</span>` : `<span class="badge">優先度 ${escapeHtml(log.priority || "未設定")}</span>`}
      </div>
      <dl class="review-facts">
        <div><dt>論点</dt><dd>${escapeHtml(log.topic || "未入力")}</dd></div>
        <div><dt>ミス理由</dt><dd>${escapeHtml(truncateText(log.mistakeReason, 64) || "未入力")}</dd></div>
      </dl>
      <div class="card-actions">
        <button class="ghost-button" type="button" data-edit-past-exam-log="${escapeAttribute(log.id)}">編集</button>
        <button class="danger-button" type="button" data-delete-past-exam-log="${escapeAttribute(log.id)}">削除</button>
      </div>
    </article>
  `;
}

function renderPracticeForm() {
  const editingLog = state.practiceLogs.find((log) => log.id === state.editingPracticeLogId);
  const log = editingLog || { ...blankPracticeLog, studiedAt: todayString(), sourceType: "その他" };
  document.querySelector("#practiceFormTitle").textContent = editingLog ? "演習ログを編集" : "演習ログを追加";
  document.querySelector("#practiceLogForm").innerHTML = `
    ${practiceFieldsets.map((fieldset) => `
      <fieldset class="practice-fieldset">
        <legend>${escapeHtml(fieldset.title)}</legend>
        <div class="form-grid">
          ${fieldset.fields.map((field) => renderPracticeField(field, log)).join("")}
        </div>
      </fieldset>
    `).join("")}
    <div class="form-actions">
      <button class="primary-button" type="submit">${editingLog ? "演習ログを更新" : "演習ログを保存"}</button>
      ${editingLog ? `<button id="cancelPracticeEditButton" class="ghost-button" type="button">キャンセル</button>` : ""}
    </div>
  `;
  document.querySelector("#practiceFormMessage").textContent = state.practiceFormMessage;
}

function renderPracticeField(field, log) {
  if (field === "studiedAt") {
    return practiceInput(field, log[field], "date");
  }
  if (field === "sourceType") {
    return practiceSelect(field, uniqueOptions(PRACTICE_SOURCE_TYPES, log[field]), log[field]);
  }
  if (field === "subject") {
    return practiceSelect(field, uniqueOptions(PRACTICE_SUBJECTS, log[field]), log[field]);
  }
  if (field === "unitId") {
    const options = [{ value: "", label: "未設定" }, ...state.units.map((unit) => ({ value: unit.id, label: `${unit.subject} / ${unit.title}` }))];
    return `
      <label class="field-wide">
        ${practiceFieldLabels[field]}
        <select name="${field}">
          ${options.map((option) => `<option value="${escapeAttribute(option.value)}" ${option.value === log.unitId ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field === "questionType") {
    return practiceSelect(field, uniqueOptions(PRACTICE_QUESTION_TYPES, log[field]), log[field]);
  }
  if (field === "result") {
    return practiceSelect(field, PRACTICE_RESULTS, log[field]);
  }
  if (field === "confidence") {
    return practiceSelect(field, PRACTICE_CONFIDENCE, log[field]);
  }
  if (field === "weaknessTags") {
    return `
      <div class="field-wide">
        <div class="field-label">弱点タグ</div>
        <div class="check-row practice-tag-row">
          ${WEAKNESS_TAGS.map((tag) => `
            <label class="check-card">
              <input type="checkbox" name="weaknessTags" value="${escapeAttribute(tag)}" ${log.weaknessTags.includes(tag) ? "checked" : ""}>
              ${escapeHtml(tag)}
            </label>
          `).join("")}
        </div>
      </div>
    `;
  }
  if (field === "retry") {
    return `
      <label class="check-card field-wide">
        <input type="checkbox" name="${field}" ${log.retry ? "checked" : ""}>
        ${practiceFieldLabels[field]}
      </label>
    `;
  }
  if (["answerMemo", "correctAnswerMemo", "mistakeReason", "aiAnalysisMemo"].includes(field)) {
    return `
      <label class="field-wide">
        ${practiceFieldLabels[field]}
        <textarea name="${field}">${escapeHtml(log[field])}</textarea>
      </label>
    `;
  }
  return practiceInput(field, log[field]);
}

function practiceInput(field, value, type = "text") {
  return `
    <label class="${type === "date" ? "" : "field-wide"}">
      ${practiceFieldLabels[field]}
      <input type="${type}" name="${field}" value="${escapeAttribute(value)}">
    </label>
  `;
}

function practiceSelect(field, options, value) {
  return `
    <label>
      ${practiceFieldLabels[field]}
      <select name="${field}">
        ${options.map((option) => `<option value="${escapeAttribute(option)}" ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
      </select>
    </label>
  `;
}

function uniqueOptions(options, current) {
  return current && !options.includes(current) ? [...options, current] : options;
}

function renderPracticeFilters() {
  const unitOptions = ["すべて", ...state.units.map((unit) => unit.id)];
  fillSelect("#practiceSubjectFilter", ["すべて", ...PRACTICE_SUBJECTS], state.practiceFilters.subject);
  fillSelect("#practiceSourceTypeFilter", ["すべて", ...PRACTICE_SOURCE_TYPES], state.practiceFilters.sourceType);
  fillSelect("#practiceQuestionTypeFilter", ["すべて", ...PRACTICE_QUESTION_TYPES], state.practiceFilters.questionType);
  fillSelect("#practiceResultFilter", ["すべて", ...PRACTICE_RESULTS], state.practiceFilters.result);
  fillSelect("#practiceConfidenceFilter", ["すべて", ...PRACTICE_CONFIDENCE], state.practiceFilters.confidence);
  fillUnitFilter("#practiceUnitFilter", unitOptions, state.practiceFilters.unitId);
  fillSelect("#practiceWeaknessFilter", ["すべて", "弱点タグあり", "弱点タグなし"], state.practiceFilters.weakness);
  document.querySelector("#practiceSearchInput").value = state.practiceFilters.search;
  document.querySelector("#practiceRetryOnlyFilter").checked = state.practiceFilters.retryOnly;
}

function fillUnitFilter(selector, options, selected) {
  const element = document.querySelector(selector);
  element.innerHTML = options.map((option) => {
    const label = option === "すべて" ? "すべて" : state.units.find((unit) => unit.id === option)?.title || "未設定";
    return `<option value="${escapeAttribute(option)}">${escapeHtml(label)}</option>`;
  }).join("");
  element.value = selected;
}

function filteredPracticeLogs() {
  const keyword = state.practiceFilters.search.trim().toLowerCase();
  return [...state.practiceLogs]
    .filter((log) => {
      const hasWeakness = log.weaknessTags.length > 0;
      const haystack = [
        log.sourceName,
        log.subject,
        log.unitTitle,
        log.questionRef,
        log.questionType,
        log.answerMemo,
        log.correctAnswerMemo,
        log.mistakeReason,
        log.aiAnalysisMemo
      ].join(" ").toLowerCase();
      return (
        (!keyword || haystack.includes(keyword)) &&
        (state.practiceFilters.subject === "すべて" || log.subject === state.practiceFilters.subject) &&
        (state.practiceFilters.sourceType === "すべて" || log.sourceType === state.practiceFilters.sourceType) &&
        (state.practiceFilters.questionType === "すべて" || log.questionType === state.practiceFilters.questionType) &&
        (state.practiceFilters.result === "すべて" || log.result === state.practiceFilters.result) &&
        (state.practiceFilters.confidence === "すべて" || log.confidence === state.practiceFilters.confidence) &&
        (state.practiceFilters.unitId === "すべて" || log.unitId === state.practiceFilters.unitId) &&
        (state.practiceFilters.weakness === "すべて" ||
          (state.practiceFilters.weakness === "弱点タグあり" && hasWeakness) ||
          (state.practiceFilters.weakness === "弱点タグなし" && !hasWeakness)) &&
        (!state.practiceFilters.retryOnly || log.retry)
      );
    })
    .sort(comparePracticeLogs);
}

function renderPracticeLogList() {
  const logs = filteredPracticeLogs();
  document.querySelector("#practiceResultCount").textContent = `表示中：${logs.length} / ${state.practiceLogs.length}件`;
  document.querySelector("#practiceLogCards").innerHTML = logs.length
    ? logs.map((log) => practiceLogCard(log)).join("")
    : `<div class="panel empty-state"><p class="muted">条件に合う演習ログはありません。</p></div>`;
}

function comparePracticeLogs(a, b) {
  const dateDiff = (b.studiedAt || "").localeCompare(a.studiedAt || "");
  if (dateDiff) return dateDiff;
  return (b.updatedAt || b.createdAt || "").localeCompare(a.updatedAt || a.createdAt || "");
}

function practiceLogCard(log) {
  return `
    <article class="practice-log-card">
      <div class="practice-log-top">
        <div>
          <p class="eyebrow">${escapeHtml(log.studiedAt || "日付なし")} / ${escapeHtml(log.subject || "未設定")}</p>
          <h3>${escapeHtml(log.unitTitle || "関連単元なし")}</h3>
        </div>
        <span class="result-mark ${practiceResultClass(log.result)}">${escapeHtml(log.result)}</span>
      </div>
      <div class="card-meta">
        <span class="badge">${escapeHtml(log.sourceType || "未設定")}</span>
        <span class="badge">${escapeHtml(log.sourceName || "出典名なし")}</span>
        <span class="badge">${escapeHtml(log.questionType || "未設定")}</span>
        <span class="badge">${escapeHtml(log.confidence || "未設定")}</span>
        <span class="badge">弱点 ${log.weaknessTags.length}</span>
        ${log.retry ? `<span class="badge priority">再演習対象</span>` : ""}
      </div>
      <dl class="review-facts">
        <div><dt>問題番号・参照</dt><dd>${escapeHtml(log.questionRef || "未入力")}</dd></div>
        <div><dt>ミス理由</dt><dd>${escapeHtml(truncateText(log.mistakeReason, 64) || "未入力")}</dd></div>
      </dl>
      <div class="card-actions">
        <button class="ghost-button" type="button" data-edit-practice-log="${escapeAttribute(log.id)}">編集</button>
        <button class="danger-button" type="button" data-delete-practice-log="${escapeAttribute(log.id)}">削除</button>
      </div>
    </article>
  `;
}

function practiceResultClass(result) {
  if (result === "○") return "is-correct";
  if (result === "△") return "is-partial";
  if (result === "×") return "is-wrong";
  return "is-pending";
}

function truncateText(value, length) {
  const text = String(value || "");
  return text.length > length ? `${text.slice(0, length)}...` : text;
}

function renderReviewList() {
  const units = filteredReviewUnits();
  document.querySelector("#reviewResultCount").textContent = `表示中：${units.length} / ${state.units.length}単元`;
  document.querySelector("#reviewCards").innerHTML = units.length
    ? units.map((unit) => reviewCard(unit)).join("")
    : `<div class="panel empty-state"><p class="muted">条件に合う復習単元はありません。</p></div>`;
}

function filteredReviewUnits() {
  return [...state.units]
    .filter((unit) => {
      const review = getReviewStatus(unit).label;
      const hasWeakness = getWeaknessCount(unit) > 0;
      return (
        (state.reviewFilters.subject === "すべて" || unit.subject === state.reviewFilters.subject) &&
        (state.reviewFilters.review === "すべて" || review === state.reviewFilters.review) &&
        (state.reviewFilters.importance === "すべて" || unit.importance === state.reviewFilters.importance) &&
        (state.reviewFilters.weakness === "すべて" ||
          (state.reviewFilters.weakness === "弱点タグあり" && hasWeakness) ||
          (state.reviewFilters.weakness === "弱点タグなし" && !hasWeakness)) &&
        (!state.reviewFilters.redoOnly || unit.redoTarget)
      );
    })
    .sort(compareReviewUnits);
}

function compareReviewUnits(a, b) {
  const reviewDiff = getReviewStatus(b).weight - getReviewStatus(a).weight;
  if (reviewDiff) return reviewDiff;
  const dateA = a.updatedAt || "0000-00-00";
  const dateB = b.updatedAt || "0000-00-00";
  const dateDiff = dateA.localeCompare(dateB);
  if (dateDiff) return dateDiff;
  const importanceDiff = importanceWeight(b.importance) - importanceWeight(a.importance);
  if (importanceDiff) return importanceDiff;
  return a.title.localeCompare(b.title, "ja");
}

function importanceWeight(value) {
  return value === "高" ? 3 : value === "中" ? 2 : value === "低" ? 1 : 0;
}

function unitCard(unit) {
  const review = getReviewStatus(unit);
  const levelClass = unit.level === "A" ? "level-a" : unit.level === "B" ? "level-b" : unit.level === "C" ? "level-c" : "";
  const importanceClass = unit.importance === "高" ? "high" : unit.importance === "中" ? "medium" : "";
  return `
    <button class="unit-card" type="button" data-open-unit="${unit.id}">
      <div>
        <p class="eyebrow">${escapeHtml(unit.subject)}</p>
        <h3>${escapeHtml(unit.title)}</h3>
      </div>
      <div class="card-meta">
        <span class="badge ${importanceClass}">重要度 ${escapeHtml(unit.importance)}</span>
        <span class="badge ${levelClass}">到達 ${escapeHtml(unit.level)}</span>
        <span class="badge ${review.className}">${review.label}</span>
        <span class="badge">弱点 ${getWeaknessCount(unit)}</span>
      </div>
      <span class="muted">最終更新日：${escapeHtml(unit.updatedAt || "未保存")}</span>
    </button>
  `;
}

function reviewCard(unit) {
  const review = getReviewStatus(unit);
  const reasons = getReviewReasons(unit);
  const levelClass = unit.level === "A" ? "level-a" : unit.level === "B" ? "level-b" : unit.level === "C" ? "level-c" : "";
  const importanceClass = unit.importance === "高" ? "high" : unit.importance === "中" ? "medium" : "";
  return `
    <button class="unit-card review-card" type="button" data-open-unit="${unit.id}">
      <div>
        <p class="eyebrow">${escapeHtml(unit.subject)}</p>
        <h3>${escapeHtml(unit.title)}</h3>
      </div>
      <div class="card-meta">
        <span class="badge ${importanceClass}">重要度 ${escapeHtml(unit.importance)}</span>
        <span class="badge ${levelClass}">到達 ${escapeHtml(unit.level)}</span>
        <span class="badge ${review.className}">${review.label}</span>
        <span class="badge">弱点 ${getWeaknessCount(unit)}</span>
      </div>
      <dl class="review-facts">
        <div><dt>復習理由</dt><dd>${escapeHtml(reasons.length ? reasons.join(" / ") : "該当なし")}</dd></div>
        <div><dt>最終更新日</dt><dd>${escapeHtml(unit.updatedAt || "未保存")}</dd></div>
      </dl>
    </button>
  `;
}

function compactUnitButton(unit) {
  const review = getReviewStatus(unit);
  return `
    <button class="compact-item ghost-button" type="button" data-open-unit="${unit.id}">
      <span>${escapeHtml(unit.title)}</span>
      <span class="badge ${review.className}">${review.label}</span>
    </button>
  `;
}

function renderUnitDetail() {
  const unit = getActiveUnit();
  if (!unit) return;
  const review = getReviewStatus(unit);
  document.querySelector("#detailSubject").textContent = unit.subject;
  document.querySelector("#detailTitle").textContent = unit.title;
  document.querySelector("#detailBadges").innerHTML = `
    <span class="badge">重要度 ${escapeHtml(unit.importance)}</span>
    <span class="badge">到達 ${escapeHtml(unit.level)}</span>
    <span class="badge ${review.className}">${review.label}</span>
  `;
  document.querySelector("#detailTabs").innerHTML = tabDefinitions
    .map((tab) => `<button class="tab-button ${tab.id === state.activeTab ? "is-active" : ""}" type="button" data-tab="${tab.id}" role="tab" aria-selected="${tab.id === state.activeTab}">${tab.label}</button>`)
    .join("");
  document.querySelector("#unitForm").innerHTML = renderTabForm(unit, state.activeTab);
}

function renderTabForm(unit, tab) {
  if (tab === "basic") {
    return `
      <div class="form-grid">
        ${inputField("subject", "科目", unit.subject)}
        ${inputField("title", "単元名", unit.title)}
        ${selectField("importance", "重要度", IMPORTANCE, unit.importance)}
        ${selectField("level", "到達判定", LEVELS, unit.level)}
        ${checkboxField("reviewTarget", "復習対象", unit.reviewTarget)}
        ${checkboxField("redoTarget", "再演習対象", unit.redoTarget)}
      </div>
      <p class="muted">最終更新日：${escapeHtml(unit.updatedAt || "未保存")}</p>
    `;
  }
  if (tab === "law") {
    return formGrid([
      textArea("law.basis", "法令根拠", unit.law.basis),
      textArea("law.articleSummary", "条文要旨", unit.law.articleSummary),
      textArea("law.purpose", "制度趣旨", unit.law.purpose),
      textArea("law.overview", "全体像", unit.law.overview),
      inputField("law.yearlySupport", "年度対応", unit.law.yearlySupport),
      inputField("law.checkedAt", "確認日", unit.law.checkedAt, "date"),
      textArea("law.revisionMemo", "改正注意メモ", unit.law.revisionMemo)
    ]);
  }
  if (tab === "exam") {
    return formGrid([
      textArea("exam.keyPoint", "試験での重要点", unit.exam.keyPoint),
      textArea("exam.confusingPoints", "混同しやすい点", unit.exam.confusingPoints),
      textArea("exam.traps", "引っかけ", unit.exam.traps),
      textArea("exam.memoryPoints", "暗記ポイント", unit.exam.memoryPoints),
      textArea("exam.understandingPoints", "理解ポイント", unit.exam.understandingPoints),
      textArea("exam.pastQuestionStyle", "過去問での問われ方", unit.exam.pastQuestionStyle),
      textArea("exam.relatedPastQuestions", "関連過去問", unit.exam.relatedPastQuestions),
      textArea("exam.targetGoal", "本試験での到達目標", unit.exam.targetGoal),
      textArea("exam.mistakePatterns", "ミスしやすい選択肢パターン", unit.exam.mistakePatterns)
    ]);
  }
  if (tab === "past") {
    const relatedLogs = getPastExamLogsForUnit(unit.id).sort(comparePastExamLogs);
    return formGrid([
      textArea("pastExam.questionMemo", "過去問本文メモ", unit.pastExam.questionMemo),
      selectField("pastExam.format", "出題形式", PAST_FORMATS, unit.pastExam.format),
      textArea("pastExam.myAnswer", "自分の回答", unit.pastExam.myAnswer),
      selectField("pastExam.result", "正誤", RESULTS, unit.pastExam.result),
      textArea("pastExam.mistakeReason", "ミス理由", unit.pastExam.mistakeReason),
      textArea("pastExam.aiMemo", "過去問AI解析メモ", unit.pastExam.aiMemo)
    ]) + `
      <section class="related-log-panel field-wide">
        <h4>関連過去問ログ</h4>
        ${relatedLogs.length ? `
          <div class="mini-list">
            ${relatedLogs.map((log) => `
              <div class="mini-item">
                <span>${escapeHtml(log.examRound || "試験回なし")} / ${escapeHtml(log.subject || "未設定")} / ${escapeHtml(log.questionNo || "問題番号なし")} / ${escapeHtml(log.topic || "論点未設定")}</span>
                <small>結果 ${escapeHtml(log.result || "未実施")} / 再演習 ${log.retry ? "対象" : "なし"} / ${escapeHtml(truncateText(log.mistakeReason, 48) || "ミス理由なし")}</small>
              </div>
            `).join("")}
          </div>
        ` : `<p class="muted">この単元に紐づく過去問ログはまだありません。</p>`}
      </section>
    `;
  }
  if (tab === "practice") {
    return `
      ${unit.exercises.map((exercise, index) => `
        <section class="exercise-card">
          <h4>例題${index + 1}</h4>
          ${textArea(`exercises.${index}.question`, "問題文", exercise.question)}
          ${textArea(`exercises.${index}.myAnswer`, "自分の回答", exercise.myAnswer)}
          ${selectField(`exercises.${index}.result`, "採点結果", SCORE_RESULTS, exercise.result)}
          ${textArea(`exercises.${index}.explanation`, "解説", exercise.explanation)}
        </section>
      `).join("")}
      ${formGrid([
        textArea("optimization.practiceHistoryMemo", "演習履歴メモ", unit.optimization.practiceHistoryMemo),
        textArea("optimization.workbookMemo", "問題集対応メモ", unit.optimization.workbookMemo),
        textArea("optimization.pastExamMemo", "過去問対応メモ", unit.optimization.pastExamMemo),
        textArea("optimization.wrongPatternMemo", "誤答パターンメモ", unit.optimization.wrongPatternMemo)
      ])}
    `;
  }
  if (tab === "weakness") {
    return `
      ${textArea("ai.analysisMemo", "AI解析メモ", unit.ai.analysisMemo)}
      ${textArea("ai.promptMemo", "AIプロンプト用メモ", unit.ai.promptMemo)}
      <div class="field-label field-wide">弱点タグ</div>
      <div class="check-row">
        ${WEAKNESS_TAGS.map((tag) => `
          <label class="check-card">
            <input type="checkbox" data-field="ai.weaknessTags" value="${escapeHtml(tag)}" ${unit.ai.weaknessTags.includes(tag) ? "checked" : ""}>
            ${escapeHtml(tag)}
          </label>
        `).join("")}
      </div>
    `;
  }
  return textArea("freeMemo", "自由メモ", unit.freeMemo);
}

function formGrid(fields) {
  return `<div class="form-grid">${fields.join("")}</div>`;
}

function inputField(field, label, value, type = "text") {
  return `
    <label class="${type === "date" ? "" : "field-wide"}">
      ${escapeHtml(label)}
      <input type="${type}" data-field="${field}" value="${escapeAttribute(value)}">
    </label>
  `;
}

function textArea(field, label, value) {
  return `
    <label class="field-wide">
      ${escapeHtml(label)}
      <textarea data-field="${field}">${escapeHtml(value)}</textarea>
    </label>
  `;
}

function selectField(field, label, options, value) {
  return `
    <label>
      ${escapeHtml(label)}
      <select data-field="${field}">
        ${options.map((option) => `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
      </select>
    </label>
  `;
}

function checkboxField(field, label, checked) {
  return `
    <label class="check-card">
      <input type="checkbox" data-field="${field}" ${checked ? "checked" : ""}>
      ${escapeHtml(label)}
    </label>
  `;
}

function collectFormIntoUnit(unit) {
  document.querySelectorAll("#unitForm [data-field]").forEach((input) => {
    const field = input.dataset.field;
    if (field === "ai.weaknessTags") return;
    const value = input.type === "checkbox" ? input.checked : input.value;
    setNestedValue(unit, field, value);
  });
  const checkedTags = [...document.querySelectorAll('#unitForm [data-field="ai.weaknessTags"]:checked')].map((input) => input.value);
  if (document.querySelector('#unitForm [data-field="ai.weaknessTags"]')) {
    unit.ai.weaknessTags = checkedTags;
  }
}

function setNestedValue(target, path, value) {
  const keys = path.split(".");
  let current = target;
  keys.slice(0, -1).forEach((key) => {
    if (!current[key]) current[key] = {};
    current = current[key];
  });
  current[keys[keys.length - 1]] = value;
}

function openUnit(unitId) {
  state.activeUnitId = unitId;
  state.activeView = "units";
  state.activeTab = "basic";
  document.querySelector("#unitListArea").classList.add("is-hidden");
  document.querySelector("#unitDetailArea").classList.remove("is-hidden");
  document.querySelector("#backToUnitsButton").classList.remove("is-hidden");
  switchView("units", false);
  renderUnitDetail();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeDetail() {
  state.activeUnitId = null;
  document.querySelector("#unitListArea").classList.remove("is-hidden");
  document.querySelector("#unitDetailArea").classList.add("is-hidden");
  document.querySelector("#backToUnitsButton").classList.add("is-hidden");
}

function getActiveUnit() {
  return state.units.find((unit) => unit.id === state.activeUnitId);
}

function switchView(view, closeUnitDetail = true) {
  state.activeView = view;
  document.querySelectorAll(".view").forEach((section) => {
    section.classList.toggle("is-active", section.id === `view-${view}`);
  });
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  if (closeUnitDetail && view !== "units") {
    closeDetail();
  }
}

function collectPracticeForm() {
  const form = document.querySelector("#practiceLogForm");
  const formData = new FormData(form);
  const unit = state.units.find((item) => item.id === String(formData.get("unitId") || ""));
  return {
    studiedAt: String(formData.get("studiedAt") || todayString()),
    sourceType: String(formData.get("sourceType") || "その他"),
    sourceName: String(formData.get("sourceName") || "").trim(),
    subject: String(formData.get("subject") || "未設定"),
    unitId: unit?.id || "",
    unitTitle: unit?.title || "",
    questionRef: String(formData.get("questionRef") || "").trim(),
    questionType: String(formData.get("questionType") || "未設定"),
    result: String(formData.get("result") || "未判定"),
    confidence: String(formData.get("confidence") || "未設定"),
    answerMemo: String(formData.get("answerMemo") || "").trim(),
    correctAnswerMemo: String(formData.get("correctAnswerMemo") || "").trim(),
    mistakeReason: String(formData.get("mistakeReason") || "").trim(),
    weaknessTags: formData.getAll("weaknessTags").map(String),
    retry: formData.get("retry") === "on",
    aiAnalysisMemo: String(formData.get("aiAnalysisMemo") || "").trim()
  };
}

function savePracticeLogFromForm() {
  const now = new Date().toISOString();
  const values = collectPracticeForm();
  if (state.editingPracticeLogId) {
    const index = state.practiceLogs.findIndex((log) => log.id === state.editingPracticeLogId);
    if (index >= 0) {
      state.practiceLogs[index] = normalizePracticeLog({
        ...state.practiceLogs[index],
        ...values,
        updatedAt: now
      });
    }
    state.editingPracticeLogId = null;
    state.practiceFormMessage = "更新しました。";
    showToast("更新しました。");
  } else {
    state.practiceLogs.unshift(normalizePracticeLog({
      ...values,
      id: makePracticeLogId(),
      createdAt: now,
      updatedAt: now
    }));
    state.practiceFormMessage = "保存しました。";
    showToast("保存しました。");
  }
  saveUnits();
  render();
}

function editPracticeLog(logId) {
  state.editingPracticeLogId = logId;
  state.practiceFormMessage = "";
  renderPracticeView();
  switchView("practice");
  document.querySelector("#practiceFormTitle").scrollIntoView({ behavior: "smooth", block: "start" });
}

function cancelPracticeEdit() {
  state.editingPracticeLogId = null;
  state.practiceFormMessage = "";
  renderPracticeView();
}

function deletePracticeLog(logId) {
  const target = state.practiceLogs.find((log) => log.id === logId);
  if (!target) return;
  const confirmed = window.confirm("この演習ログを削除します。よろしいですか？");
  if (!confirmed) return;
  state.practiceLogs = state.practiceLogs.filter((log) => log.id !== logId);
  if (state.editingPracticeLogId === logId) state.editingPracticeLogId = null;
  state.practiceFormMessage = "";
  saveUnits();
  render();
  showToast("削除しました。");
}

function collectPastExamForm() {
  const form = document.querySelector("#pastExamLogForm");
  const formData = new FormData(form);
  const unit = state.units.find((item) => item.id === String(formData.get("relatedUnitId") || ""));
  return {
    studiedAt: String(formData.get("studiedAt") || todayString()),
    examRound: String(formData.get("examRound") || "第59回"),
    examYear: String(formData.get("examYear") || "").trim(),
    examDate: String(formData.get("examDate") || ""),
    subject: String(formData.get("subject") || "未設定"),
    questionNo: String(formData.get("questionNo") || "").trim(),
    subQuestionNo: String(formData.get("subQuestionNo") || "").trim(),
    questionType: String(formData.get("questionType") || "未設定"),
    scoreType: String(formData.get("scoreType") || "未設定"),
    relatedUnitId: unit?.id || "",
    relatedUnitTitle: unit?.title || "",
    topic: String(formData.get("topic") || "").trim(),
    questionSummary: String(formData.get("questionSummary") || "").trim(),
    questionTextMemo: String(formData.get("questionTextMemo") || "").trim(),
    myAnswer: String(formData.get("myAnswer") || "").trim(),
    correctAnswer: String(formData.get("correctAnswer") || "").trim(),
    result: String(formData.get("result") || "未実施"),
    confidence: String(formData.get("confidence") || "未設定"),
    mistakeReason: String(formData.get("mistakeReason") || "").trim(),
    weaknessTags: formData.getAll("weaknessTags").map(String),
    retry: formData.get("retry") === "on",
    priority: String(formData.get("priority") || "未設定"),
    aiAnalysisMemo: String(formData.get("aiAnalysisMemo") || "").trim(),
    sourceFileMemo: String(formData.get("sourceFileMemo") || "").trim()
  };
}

function savePastExamLogFromForm() {
  const now = new Date().toISOString();
  const values = collectPastExamForm();
  if (state.editingPastExamLogId) {
    const index = state.pastExamLogs.findIndex((log) => log.id === state.editingPastExamLogId);
    if (index >= 0) {
      state.pastExamLogs[index] = normalizePastExamLog({
        ...state.pastExamLogs[index],
        ...values,
        updatedAt: now
      });
    }
    state.editingPastExamLogId = null;
    state.pastExamFormMessage = "更新しました。";
    showToast("更新しました。");
  } else {
    state.pastExamLogs.unshift(normalizePastExamLog({
      ...values,
      id: makePastExamLogId(),
      createdAt: now,
      updatedAt: now
    }));
    state.pastExamFormMessage = "保存しました。";
    showToast("保存しました。");
  }
  saveUnits();
  render();
}

function editPastExamLog(logId) {
  state.editingPastExamLogId = logId;
  state.pastExamFormMessage = "";
  renderPastExamView();
  switchView("past-exams");
  document.querySelector("#pastExamFormTitle").scrollIntoView({ behavior: "smooth", block: "start" });
}

function cancelPastExamEdit() {
  state.editingPastExamLogId = null;
  state.pastExamFormMessage = "";
  renderPastExamView();
}

function deletePastExamLog(logId) {
  const target = state.pastExamLogs.find((log) => log.id === logId);
  if (!target) return;
  const confirmed = window.confirm("この過去問ログを削除します。よろしいですか？");
  if (!confirmed) return;
  state.pastExamLogs = state.pastExamLogs.filter((log) => log.id !== logId);
  if (state.editingPastExamLogId === logId) state.editingPastExamLogId = null;
  state.pastExamFormMessage = "";
  saveUnits();
  render();
  showToast("削除しました。");
}

function renderSettings() {
  const saved = localStorage.getItem(STORAGE_KEYS.units);
  const backupJson = JSON.stringify(makeBackupPayload());
  const sizeKb = Math.max(1, Math.ceil(backupJson.length / 1024));
  const last = getLastUpdatedUnit();
  document.querySelector("#storageStatus").textContent = `${state.units.length}単元 / 約${sizeKb}KBをこのブラウザに保存`;
  document.querySelector("#storageDetails").innerHTML = `
    <div><dt>保存中の単元数</dt><dd>${state.units.length}単元</dd></div>
    <div><dt>保存中の演習ログ数</dt><dd>${state.practiceLogs.length}件</dd></div>
    <div><dt>保存中の過去問ログ数</dt><dd>${state.pastExamLogs.length}件</dd></div>
    <div><dt>最終更新単元</dt><dd>${escapeHtml(last?.title || "未保存")}</dd></div>
    <div><dt>最終更新日</dt><dd>${escapeHtml(last?.updatedAt || "未保存")}</dd></div>
    <div><dt>おおよその保存サイズ</dt><dd>約${sizeKb}KB</dd></div>
    <div><dt>バージョン</dt><dd>${APP_VERSION}</dd></div>
  `;
  if (!saved) saveUnits();
}

function getLastUpdatedUnit() {
  return [...state.units].filter((unit) => unit.updatedAt).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))[0];
}

function makeBackupPayload() {
  return {
    appName: "TSUKAN YOBIKO",
    version: APP_VERSION,
    exportedAt: new Date().toISOString(),
    units: state.units,
    practiceLogs: state.practiceLogs,
    pastExamLogs: state.pastExamLogs,
    aiAnalyses: state.aiAnalyses
  };
}

function exportBackup() {
  const json = JSON.stringify(makeBackupPayload(), null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `tsukan-yobiko-backup-${backupTimestamp()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("バックアップを書き出しました。");
}

function backupTimestamp() {
  const date = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}`;
}

function importBackup(file) {
  const message = document.querySelector("#importMessage");
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(String(reader.result || ""));
      validateBackup(parsed);
      const confirmed = window.confirm("現在の学習データを、選択したバックアップ内容で上書きします。よろしいですか？");
      if (!confirmed) return;
      state.units = parsed.units.map(normalizeUnit);
      state.practiceLogs = normalizeArray(parsed.practiceLogs).map(normalizePracticeLog);
      state.pastExamLogs = normalizeArray(parsed.pastExamLogs).map(normalizePastExamLog);
      state.aiAnalyses = normalizeArray(parsed.aiAnalyses);
      closeDetail();
      saveUnits();
      render();
      message.textContent = "バックアップから復元しました。";
      showToast("復元しました。");
    } catch (error) {
      message.textContent = error instanceof SyntaxError ? "JSONとして読み込めません。" : error.message || "想定外の形式のため復元できません。";
    } finally {
      document.querySelector("#importInput").value = "";
    }
  });
  reader.addEventListener("error", () => {
    message.textContent = "ファイルを読み込めませんでした。";
  });
  reader.readAsText(file);
}

function validateBackup(value) {
  if (!value || typeof value !== "object") {
    throw new Error("想定外の形式のため復元できません。");
  }
  if (!Object.prototype.hasOwnProperty.call(value, "units")) {
    throw new Error("unitsが存在しないため復元できません。");
  }
  if (!Array.isArray(value.units)) {
    throw new Error("unitsが配列ではないため復元できません。");
  }
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function attachEvents() {
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });
  document.querySelector("#backToUnitsButton").addEventListener("click", closeDetail);
  document.querySelector("#searchInput").addEventListener("input", (event) => {
    state.filters.search = event.target.value;
    renderUnitList();
  });
  document.querySelector("#subjectFilter").addEventListener("change", (event) => {
    state.filters.subject = event.target.value;
    renderUnitList();
  });
  document.querySelector("#importanceFilter").addEventListener("change", (event) => {
    state.filters.importance = event.target.value;
    renderUnitList();
  });
  document.querySelector("#levelFilter").addEventListener("change", (event) => {
    state.filters.level = event.target.value;
    renderUnitList();
  });
  document.querySelector("#reviewFilter").addEventListener("change", (event) => {
    state.filters.review = event.target.value;
    renderUnitList();
  });
  document.querySelector("#weaknessFilter").addEventListener("change", (event) => {
    state.filters.weakness = event.target.value;
    renderUnitList();
  });
  document.querySelector("#redoOnlyFilter").addEventListener("change", (event) => {
    state.filters.redoOnly = event.target.checked;
    renderUnitList();
  });
  document.querySelector("#reviewSubjectFilter").addEventListener("change", (event) => {
    state.reviewFilters.subject = event.target.value;
    renderReviewList();
  });
  document.querySelector("#reviewStatusFilter").addEventListener("change", (event) => {
    state.reviewFilters.review = event.target.value;
    renderReviewList();
  });
  document.querySelector("#reviewImportanceFilter").addEventListener("change", (event) => {
    state.reviewFilters.importance = event.target.value;
    renderReviewList();
  });
  document.querySelector("#reviewWeaknessFilter").addEventListener("change", (event) => {
    state.reviewFilters.weakness = event.target.value;
    renderReviewList();
  });
  document.querySelector("#reviewRedoOnlyFilter").addEventListener("change", (event) => {
    state.reviewFilters.redoOnly = event.target.checked;
    renderReviewList();
  });
  document.querySelector("#practiceLogForm").addEventListener("submit", (event) => {
    event.preventDefault();
    savePracticeLogFromForm();
  });
  document.querySelector("#practiceSearchInput").addEventListener("input", (event) => {
    state.practiceFilters.search = event.target.value;
    renderPracticeLogList();
  });
  document.querySelector("#practiceSubjectFilter").addEventListener("change", (event) => {
    state.practiceFilters.subject = event.target.value;
    renderPracticeLogList();
  });
  document.querySelector("#practiceSourceTypeFilter").addEventListener("change", (event) => {
    state.practiceFilters.sourceType = event.target.value;
    renderPracticeLogList();
  });
  document.querySelector("#practiceQuestionTypeFilter").addEventListener("change", (event) => {
    state.practiceFilters.questionType = event.target.value;
    renderPracticeLogList();
  });
  document.querySelector("#practiceResultFilter").addEventListener("change", (event) => {
    state.practiceFilters.result = event.target.value;
    renderPracticeLogList();
  });
  document.querySelector("#practiceConfidenceFilter").addEventListener("change", (event) => {
    state.practiceFilters.confidence = event.target.value;
    renderPracticeLogList();
  });
  document.querySelector("#practiceUnitFilter").addEventListener("change", (event) => {
    state.practiceFilters.unitId = event.target.value;
    renderPracticeLogList();
  });
  document.querySelector("#practiceWeaknessFilter").addEventListener("change", (event) => {
    state.practiceFilters.weakness = event.target.value;
    renderPracticeLogList();
  });
  document.querySelector("#practiceRetryOnlyFilter").addEventListener("change", (event) => {
    state.practiceFilters.retryOnly = event.target.checked;
    renderPracticeLogList();
  });
  document.querySelector("#pastExamLogForm").addEventListener("submit", (event) => {
    event.preventDefault();
    savePastExamLogFromForm();
  });
  document.querySelector("#pastExamSearchInput").addEventListener("input", (event) => {
    state.pastExamFilters.search = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamRoundFilter").addEventListener("change", (event) => {
    state.pastExamFilters.examRound = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamSubjectFilter").addEventListener("change", (event) => {
    state.pastExamFilters.subject = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamQuestionTypeFilter").addEventListener("change", (event) => {
    state.pastExamFilters.questionType = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamResultFilter").addEventListener("change", (event) => {
    state.pastExamFilters.result = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamConfidenceFilter").addEventListener("change", (event) => {
    state.pastExamFilters.confidence = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamUnitFilter").addEventListener("change", (event) => {
    state.pastExamFilters.unitId = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamWeaknessFilter").addEventListener("change", (event) => {
    state.pastExamFilters.weakness = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamPriorityFilter").addEventListener("change", (event) => {
    state.pastExamFilters.priority = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamRetryOnlyFilter").addEventListener("change", (event) => {
    state.pastExamFilters.retryOnly = event.target.checked;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamAllCorrectOnlyFilter").addEventListener("change", (event) => {
    state.pastExamFilters.allCorrectOnly = event.target.checked;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamPracticalOnlyFilter").addEventListener("change", (event) => {
    state.pastExamFilters.practicalOnly = event.target.checked;
    renderPastExamLogList();
  });
  document.body.addEventListener("click", (event) => {
    const editPracticeButton = event.target.closest("[data-edit-practice-log]");
    if (editPracticeButton) {
      editPracticeLog(editPracticeButton.dataset.editPracticeLog);
      return;
    }
    const deletePracticeButton = event.target.closest("[data-delete-practice-log]");
    if (deletePracticeButton) {
      deletePracticeLog(deletePracticeButton.dataset.deletePracticeLog);
      return;
    }
    if (event.target.closest("#cancelPracticeEditButton")) {
      cancelPracticeEdit();
      return;
    }
    const editPastExamButton = event.target.closest("[data-edit-past-exam-log]");
    if (editPastExamButton) {
      editPastExamLog(editPastExamButton.dataset.editPastExamLog);
      return;
    }
    const deletePastExamButton = event.target.closest("[data-delete-past-exam-log]");
    if (deletePastExamButton) {
      deletePastExamLog(deletePastExamButton.dataset.deletePastExamLog);
      return;
    }
    if (event.target.closest("#cancelPastExamEditButton")) {
      cancelPastExamEdit();
      return;
    }
    const opener = event.target.closest("[data-open-unit]");
    if (opener) {
      openUnit(opener.dataset.openUnit);
      return;
    }
    const tab = event.target.closest("[data-tab]");
    if (tab) {
      const unit = getActiveUnit();
      if (unit) collectFormIntoUnit(unit);
      state.activeTab = tab.dataset.tab;
      renderUnitDetail();
    }
  });
  document.querySelector("#saveUnitButton").addEventListener("click", () => {
    const unit = getActiveUnit();
    if (!unit) return;
    collectFormIntoUnit(unit);
    unit.updatedAt = todayString();
    saveUnits();
    render();
    showToast("保存しました。");
  });
  document.querySelector("#exportButton").addEventListener("click", exportBackup);
  document.querySelector("#importInput").addEventListener("change", (event) => {
    importBackup(event.target.files[0]);
  });
  document.querySelector("#resetButton").addEventListener("click", () => {
    const confirmed = window.confirm("保存済みの学習記録を削除し、初期データに戻します。よろしいですか？");
    if (!confirmed) return;
    localStorage.removeItem(STORAGE_KEYS.units);
    localStorage.removeItem(STORAGE_KEYS.practiceLogs);
    localStorage.removeItem(STORAGE_KEYS.pastExamLogs);
    localStorage.removeItem(STORAGE_KEYS.aiAnalyses);
    state.units = makeInitialUnits();
    state.practiceLogs = [];
    state.pastExamLogs = [];
    state.aiAnalyses = [];
    state.editingPracticeLogId = null;
    state.editingPastExamLogId = null;
    closeDetail();
    saveUnits();
    render();
    showToast("初期データに戻しました。");
  });
}

loadState();
attachEvents();
render();
