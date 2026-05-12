# TSUKAN YOBIKO

TSUKAN YOBIKOは、通関士試験をアプリ内で体系的に学ぶスマホファースト個人予備校アプリです。現在のバージョンはv1.6です。

v1.6は「AI中継サーバー・Cloudflare Workers対応版」です。GitHub Pagesで公開する静的アプリ本体はそのまま維持し、Cloudflare Workers上にOpenAI API用の安全な中継サーバーを構築できるようにしました。

## このアプリの位置づけ

- 通関士試験学習の中心に置くスマホファースト個人予備校アプリ
- 記録管理アプリではなく、講義・確認問題・解説・復習・模試をアプリ内で進める予備校アプリ
- 市販教材や過去問本文の大量複製ではなく、オリジナル要約講義と自作確認問題で論点を整理
- GitHub Pagesで公開できるHTML/CSS/JavaScriptのみの静的アプリ

## v1.6で追加した内容

- Cloudflare Workers用 `worker.js`
- Wrangler設定例 `wrangler.toml.example`
- Workerの `POST /api/ai` エンドポイント
- Workerの `GET /health` エンドポイント
- CORS対応
- OPTIONSプリフライト対応
- OpenAI Responses API呼び出し
- Secretによる `OPENAI_API_KEY` 管理
- prompt最大長チェックなどの簡易入力制限
- TSUKAN YOBIKO本体からのAI送信対応強化
- Worker health確認ボタン
- CORS、Worker URL、Secret設定に関するエラー表示改善

## 既存機能

- 通関業法 基礎編20レッスン
- 関税法等 基礎編30レッスン
- 通関実務 基礎編30レッスン
- 各科目ミニ模試
- 15問ライト模試、30問標準模試、弱点集中模試
- 総合模試履歴、採点、解説、ひっかけ解説
- 横断復習、弱点タグ分析、今日の学習メニュー
- AIプロンプト生成と手動コピペ利用
- AI中継サーバーURL設定、AI接続テスト、AI応答履歴保存
- 単元管理、演習ログ、過去問ログ、実務ログ
- localStorage保存
- JSONバックアップ/復元
- 初期データリセット

## GitHub Pagesでの利用前提

このリポジトリはPublicで公開される前提です。コードと初期カリキュラム、オリジナル模試問題は公開されますが、学習記録、模試結果、回答、メモ、弱点タグ、到達判定、今日のメニュー履歴、レッスン進捗、AI履歴、AI API設定は各ブラウザのlocalStorageに保存され、GitHubには自動保存されません。

ローカルで使う場合は、リポジトリ直下の`index.html`をブラウザで開きます。GitHub Pagesで公開する場合は、GitHubのリポジトリ設定からPagesを有効にし、公開元をリポジトリのルートに設定します。React、Vue、外部ライブラリは使っていません。

## 保存方式

保存先はブラウザのlocalStorageです。

- 単元データ: `tsukanYobiko.units`
- バージョン: `tsukanYobiko.version`
- 演習ログ用: `tsukanYobiko.practiceLogs`
- 過去問ログ用: `tsukanYobiko.pastExamLogs`
- 実務ログ用: `tsukanYobiko.practicalLogs`
- AI解析ログ用: `tsukanYobiko.aiAnalyses`
- AI API設定用: `tsukanYobiko.aiSettings`
- 今日の学習メニュー用: `tsukanYobiko.studyPlans`
- レッスン進捗用: `tsukanYobiko.curriculumProgress`
- 総合模試結果用: `tsukanYobiko.mockExamResults`

`aiSettings`に保存するのは、`enabled`、`endpointUrl`、`lastTestedAt`、`lastStatus`、`lastError`のみです。APIキーは保存しません。古いバックアップに`aiSettings`がなくても復元できます。

## AI機能について

v1.6では、このリポジトリにCloudflare Workers用のAI中継サーバーコードを同梱しています。

通信経路は次の想定です。

```text
TSUKAN YOBIKO on GitHub Pages
↓
Cloudflare Worker /api/ai
↓
OpenAI Responses API
```

TSUKAN YOBIKOの設定画面には、Cloudflare Workerの `/api/ai` URLを入力します。例: `https://your-worker-name.your-subdomain.workers.dev/api/ai`

AI API連携がOFF、または中継サーバーURLが未設定の場合でも、従来どおり生成プロンプトをコピーしてChatGPTなどへ手動で貼り付けて使えます。

## セキュリティ方針

- OpenAI APIキーをGitHub Pages側に置かない
- OpenAI APIキーを`script.js`に書かない
- OpenAI APIキーをlocalStorageに保存しない
- WorkerコードにAPIキーを直書きしない
- Publicリポジトリに`.env`や`.dev.vars`をコミットしない
- ブラウザからOpenAI APIへ直接Bearer token付きで通信しない
- `OPENAI_API_KEY`はCloudflare WorkerのSecretとして設定する

## Cloudflare Workersデプロイ手順

1. Cloudflareにログインします。
2. Workers & Pagesを開きます。
3. Workerを新規作成します。
4. `worker.js`の内容を貼り付けるか、Wranglerでデプロイします。
5. WorkerのSettings → Variables and Secretsを開きます。
6. Secretとして `OPENAI_API_KEY` を追加します。本物のAPIキーをファイルには書かないでください。
7. Workerをデプロイします。
8. `https://your-worker-name.your-subdomain.workers.dev/health` にアクセスし、次のようなJSONが返ることを確認します。

```json
{
  "ok": true,
  "app": "TSUKAN_YOBIKO_AI_WORKER",
  "status": "healthy"
}
```

9. `https://your-worker-name.your-subdomain.workers.dev/api/ai` をTSUKAN YOBIKOの設定画面に入力します。
10. TSUKAN YOBIKOで「Worker health確認」と「AI接続テスト」を実行します。

## Wranglerを使う場合

`wrangler.toml.example`を参考にして、必要に応じて`wrangler.toml`を作成します。

```toml
name = "tsukan-yobiko-ai-worker"
main = "worker.js"
compatibility_date = "2026-01-01"

[vars]
ALLOWED_ORIGIN = "*"
```

`ALLOWED_ORIGIN = "*"` は開発しやすさを優先した初期値です。本番運用では、GitHub PagesのURLに限定してください。例: `https://your-github-user.github.io`

Secretはファイルに書かず、Cloudflare DashboardまたはWranglerで設定します。

```bash
wrangler secret put OPENAI_API_KEY
wrangler deploy
```

`worker.js`内のモデル名は `DEFAULT_MODEL` 定数で管理しています。利用できるモデルや運用方針に合わせて、必要なら `DEFAULT_MODEL` を変更してください。

## Worker API

### GET /health

Workerの簡易ヘルスチェックです。OpenAI APIには接続しません。

### POST /api/ai

TSUKAN YOBIKO本体から次のようなJSONを送信します。`version`は`v1.5`と`v1.6`を受け付けます。

```json
{
  "app": "TSUKAN_YOBIKO",
  "version": "v1.6",
  "mode": "chat",
  "promptType": "総合学習相談",
  "targetType": "レッスン",
  "targetTitle": "信用失墜行為と罰則トラップ",
  "prompt": "生成済みプロンプト本文",
  "metadata": {
    "subject": "通関業法",
    "lessonId": "",
    "unitId": "",
    "createdAt": ""
  }
}
```

成功時は次の形式で返します。

```json
{
  "ok": true,
  "text": "AIの回答本文",
  "model": "gpt-5.5",
  "usage": {
    "input_tokens": 0,
    "output_tokens": 0,
    "total_tokens": 0
  }
}
```

失敗時は次の形式で返します。

```json
{
  "ok": false,
  "error": "エラー内容"
}
```

## Publicリポジトリ運用時の注意

- コードと初期カリキュラム、オリジナル模試問題は公開されます
- 個人の学習記録と模試結果はlocalStorageに保存され、GitHubには自動保存されません
- スマホとPCは自動同期されません
- 定期的にJSONバックアップを取ってください
- 個人情報、秘密情報、非公開情報を初期データとしてコードに書き込まないでください
- 市販教材や過去問本文をそのまま大量に初期データへ入れないでください
- 法改正があるため、最新法令は別途確認してください

## 今後の拡張予定

- v1.7：AI講師モード
- v1.8：AI自動添削・弱点提案
- v1.9：試験直前モード
- v2.0：本格予備校版
- 将来：PWA対応
- 将来：スマホ・PC間同期
