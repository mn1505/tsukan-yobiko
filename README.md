# TSUKAN YOBIKO

通関士試験向けのローカル学習アプリです。HTML / CSS / JavaScript のみで動作し、GitHub Pagesで公開できる静的アプリとして構成しています。

## 現在のバージョン

v2.9

v2.9は「過去問マッピング機能版」です。ユーザーが用意したローカルJSONの過去問データを取り込み、TSUKAN YOBIKO内のレッスン・問題バンク・ドリルでどこまで対応できるかをA/B/C/Dで判定できます。

## v2.9で追加された機能

- 過去問JSONインポート
- インポート前プレビュー
- インポート済み過去問一覧
- 過去問詳細表示
- 対応レッスンマッピング
- 対応問題バンクマッピング
- 教材根拠判定 A/B/C/D
- 教材根拠率集計
- 科目別・弱点タグ別・年度別A/B/C/D集計
- 不足教材リスト
- 過去問から対応レッスン・弱点別ドリル・科目別ドリルへの導線
- 外部ChatGPT相談文作成への過去問マッピング結果反映
- JSONバックアップ/復元への `importedPastExamQuestions` / `pastExamMappings` 追加
- データ整合性チェックへの過去問マッピング関連チェック追加

## データと通信方針

- AI APIは使いません。
- OpenAI API連携は復活させません。
- Cloudflare Workers連携は使いません。
- APIキー入力欄はありません。
- 外部通信は行いません。
- 過去問データはユーザーがローカルJSONファイルとして取り込みます。
- 市販教材や過去問本文をアプリに大量同梱しません。
- 外部ChatGPT相談は、コピー用の相談文を作成するだけです。

## 使い方

1. `index.html` をブラウザで開きます。
2. 「過去問マッピング」を開きます。
3. ローカルの過去問JSONを選択します。
4. プレビューで件数、科目別件数、id重複、必須項目不足を確認します。
5. インポート実行後、各過去問に対応レッスン・対応問題バンク・A/B/C/D判定を保存します。
6. 教材根拠率と不足教材リストを見て、次に補強する講義・問題・ドリルを決めます。

## 過去問JSONサンプル形式

配列形式:

```json
[
  {
    "id": "sample-past-001",
    "year": 2025,
    "examName": "サンプル通関士試験",
    "subject": "通関業法",
    "questionNo": "第1問",
    "topic": "信用失墜行為",
    "questionType": "trueFalse",
    "questionText": "信用失墜行為の禁止と罰則の有無を区別して判断する必要がある。",
    "choices": ["正しい", "誤り"],
    "answer": "正しい",
    "explanation": "義務規定と罰則規定は分けて確認します。",
    "weaknessTag": "義務規定と罰則の混同"
  }
]
```

ラッパー形式:

```json
{
  "examName": "サンプル通関士試験",
  "year": 2025,
  "sourceType": "user_import",
  "questions": [
    {
      "id": "sample-past-002",
      "subject": "関税法等",
      "questionNo": "第2問",
      "topic": "輸入許可",
      "questionType": "trueFalse",
      "questionText": "輸入申告と輸入許可は別段階として整理する。",
      "choices": ["正しい", "誤り"],
      "answer": "正しい",
      "explanation": "申告、審査、納税、許可の流れを区別します。",
      "weaknessTag": "申告と許可の混同"
    }
  ]
}
```

必須項目は `id`、`subject`、`questionNo`、`questionText`、`answer` です。

## 保存とバックアップ

学習データはこのブラウザの `localStorage` に保存されます。スマホとPCは自動同期されません。ブラウザ変更、端末変更、キャッシュ削除、サイトデータ削除を行うとデータが失われる可能性があります。

定期的にJSONバックアップを取ってください。v2.9のバックアップには `appName`、`appVersion`、`schemaVersion`、`exportedAt`、`data` が含まれます。`data` には学習進捗、ドリル結果、模試結果、レッスン追加教材、インポート済み過去問、過去問マッピングが含まれます。

## 主なlocalStorageキー

- `tsukanYobiko.curriculumProgress`
- `tsukanYobiko.drillResults`
- `tsukanYobiko.mockExamResults`
- `tsukanYobiko.lessonOverrides`
- `tsukanYobiko.importedPastExamQuestions`
- `tsukanYobiko.pastExamMappings`

## 今後の予定

- v3.0：ローカル予備校版完成
- v3.1以降：過去問マッピング結果に基づく教材補強
