# TSUKAN YOBIKO

TSUKAN YOBIKOは、通関士試験をアプリ内で体系的に学ぶスマホファースト個人予備校アプリです。現在のバージョンはv1.8です。

v1.8は「AI自動添削・弱点提案版」です。AI講師の回答を読むだけで終わらせず、AIが提案した弱点タグ、A/B/C理解度、復習対象、次にやるべきレッスンを、ユーザー確認後に学習データへ反映できるようにしました。

## このアプリの位置づけ

- 通関士試験学習の中心に置くスマホファースト個人予備校アプリ
- 記録管理だけでなく、講義・確認問題・解説・復習・模試をアプリ内で進める予備校アプリ
- 市販教材や過去問本文の大量複製ではなく、オリジナル要約講義と自作確認問題で論点を整理
- GitHub Pagesで公開できるHTML/CSS/JavaScriptのみの静的アプリ

## v1.8で追加した内容

- AI添削・弱点提案モード
- 添削対象選択
- 添削タイプ選択
- AI構造化提案
- AI提案パーサー
- 弱点タグ提案
- A/B/C判定提案
- 復習対象提案
- 次にやること提案
- ユーザー確認後の反映
- AI提案履歴
- ホーム・分析画面へのAI提案サマリー

AI提案は自動反映ではありません。AI分析、提案表示、ユーザー確認、反映項目選択、反映ボタン、保存という流れで扱います。

## 既存機能

- AI API連携設定、AI中継サーバーURL設定、AI接続テスト
- AIプロンプト生成、AI講師モード、AI講師履歴、AI応答履歴保存
- レッスン中のAI質問、確認問題誤答からAI解説、模試結果からAI分析
- 通関業法、関税法等、通関実務のカリキュラム
- 今日の学習メニュー、分析画面、復習画面、設定画面
- 総合模試、横断復習、弱点タグ分析
- JSONバックアップ/復元、localStorage保存

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

エクスポートJSONには、`units`、`practiceLogs`、`pastExamLogs`、`practicalLogs`、`aiAnalyses`、`studyPlans`、`curriculumProgress`、`mockExamResults`、`aiSettings`を含めます。古いバックアップにAI提案関連フィールドがなくても復元できます。

## AI機能について

AI添削・弱点提案モードでは、AI回答末尾の `TSUKAN_YOBIKO_SUGGESTION:` ブロックからJSON風の構造化提案を抽出します。JSON.parseに成功した場合は、提案理解度、復習対象提案、弱点タグ候補、次にやるべきレッスン、具体的アクション、AIの自信度として表示します。解析に失敗してもAI回答本文は表示され、手動確認できます。

AI API連携ONかつ中継サーバーURL設定済みの場合はCloudflare Worker経由で送信します。AI API連携OFFまたは未設定の場合は、手動コピー用プロンプトを表示し、ChatGPTなどへ貼り付けて使えます。

AI提案は学習補助です。法令、通達、試験公告、公式解答などの最終確認は、必ず公式情報や信頼できる最新資料で行ってください。

## セキュリティ方針

- OpenAI APIキーをフロントエンドに置かない
- APIキー入力欄を作らない
- OpenAI APIキーを`script.js`に書かない
- OpenAI APIキーをlocalStorageに保存しない
- WorkerコードにAPIキーを直書きしない
- Publicリポジトリに`.env`や`.dev.vars`をコミットしない
- ブラウザからOpenAI APIへ直接Bearer token付きで通信しない
- `OPENAI_API_KEY`はCloudflare WorkerのSecretとして設定する

## Cloudflare Workers

このリポジトリにはCloudflare Workers用のAI中継サーバーコードを同梱しています。

```text
TSUKAN YOBIKO on GitHub Pages
↓
Cloudflare Worker /api/ai
↓
OpenAI Responses API
```

TSUKAN YOBIKOの設定画面には、Cloudflare Workerの `/api/ai` URLを入力します。例: `https://your-worker-name.your-subdomain.workers.dev/api/ai`

### POST /api/ai

TSUKAN YOBIKO本体から送信するJSONの `version` は `v1.8` です。

```json
{
  "app": "TSUKAN_YOBIKO",
  "version": "v1.8",
  "mode": "chat",
  "promptType": "AI添削・弱点提案",
  "targetType": "模試結果",
  "targetTitle": "15問ライト模試",
  "prompt": "生成済みプロンプト本文",
  "metadata": {
    "correctionType": "弱点タグ提案",
    "targetId": "",
    "createdAt": ""
  }
}
```

## Publicリポジトリ運用時の注意

- コードと初期カリキュラム、オリジナル模試問題は公開されます
- 個人の学習記録と模試結果はlocalStorageに保存され、GitHubには自動保存されません
- スマホとPCは自動同期されません
- 定期的にJSONバックアップを取ってください
- 個人情報、秘密情報、非公開情報を初期データとしてコードに書き込まないでください
- 市販教材や過去問本文をそのまま大量に初期データへ入れないでください
- AI提案だけで法令・公式情報を判断しないでください

## 今後の拡張予定

- v1.9：試験直前モード
- v2.0：本格予備校版
- v2.1：PWA対応
- v2.2：スマホ・PC間同期検討
- 将来：講義データ外部JSON化
