# TSUKAN YOBIKO

TSUKAN YOBIKOは、通関士試験をアプリ内で体系的に学ぶスマホファースト個人予備校アプリです。現在のバージョンはv1.5です。

v1.5は「AI API連携準備版」です。従来のAIプロンプト生成・手動コピペ方式を残しながら、ユーザーが用意したAI API中継サーバーへ生成済みプロンプトを送信し、AI応答をアプリ内で表示・保存できる土台を追加しました。

## このアプリの位置づけ

- 通関士試験学習の中心に置くスマホファースト個人予備校アプリ
- 記録管理アプリではなく、講義・確認問題・解説・復習・模試をアプリ内で進める予備校アプリ
- 市販教材や過去問本文の大量複製ではなく、オリジナル要約講義と自作確認問題で論点を整理
- GitHub Pagesで公開できるHTML/CSS/JavaScriptのみの静的アプリ

## v1.5で追加した内容

- AI API連携設定
- AI中継サーバーURL設定
- AI接続テスト
- 生成プロンプトのAPI送信
- AI応答表示
- AI応答履歴保存
- AI履歴のAPI送信情報表示
- レッスン誤答からAI質問
- 模試結果からAI分析
- 今日のメニューからAI相談
- API通信履歴の簡易表示
- JSONバックアップへの`aiSettings`反映

## 既存機能

- 通関業法 基礎編20レッスン
- 関税法等 基礎編30レッスン
- 通関実務 基礎編30レッスン
- 各科目ミニ模試
- 15問ライト模試、30問標準模試、弱点集中模試
- 総合模試履歴、採点、解説、ひっかけ解説
- 横断復習、弱点タグ分析、今日の学習メニュー
- AIプロンプト生成と手動コピペ利用
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

v1.5では、AI API中継サーバー経由の通信に対応するクライアント実装を追加しました。中継サーバー本体はこのリポジトリには含めていません。

通信経路は次の想定です。

```text
TSUKAN YOBIKO
↓
ユーザーが用意したAI API中継サーバー
↓
OpenAI API
```

AI API連携がOFF、または中継サーバーURLが未設定の場合でも、従来どおり生成プロンプトをコピーしてChatGPTなどへ手動で貼り付けて使えます。

## セキュリティ方針

- OpenAI APIキーをフロントエンドに置かない
- GitHub Pages側にAPIキーを保存しない
- PublicリポジトリにAPIキーを置かない
- ブラウザからOpenAI APIへ直接Bearer token付きで通信しない
- AI通信はユーザーが設定した中継サーバー経由にする
- `.env`やsecretファイルをこのリポジトリに置かない

## Publicリポジトリ運用時の注意

- コードと初期カリキュラム、オリジナル模試問題は公開されます
- 個人の学習記録と模試結果はlocalStorageに保存され、GitHubには自動保存されません
- スマホとPCは自動同期されません
- 定期的にJSONバックアップを取ってください
- 個人情報、秘密情報、非公開情報を初期データとしてコードに書き込まないでください
- 市販教材や過去問本文をそのまま大量に初期データへ入れないでください
- 法改正があるため、最新法令は別途確認してください

## 今後の拡張予定

- v1.6：AI中継サーバー構築手順・Cloudflare Workers対応
- v1.7：AI講師モード
- v1.8：AI自動添削・弱点提案
- v1.9：試験直前モード
- v2.0：本格予備校版
- 将来：PWA対応
- 将来：スマホ・PC間同期
