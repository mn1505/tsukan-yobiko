# TSUKAN YOBIKO

通関士試験向けのスマホファースト個人予備校アプリです。GitHub Pagesで動く静的アプリとして、HTML / CSS / JavaScriptのみで構成しています。

## 現在のバージョン

v2.8

v2.8は「バックアップ・復元・データ安全性強化版」です。学習データをJSONで分かりやすく退避し、復元前の確認、ローカルスナップショット、初期化保護、壊れたlocalStorageへの耐性を強化しました。

## v2.8で行ったこと

- バックアップJSON構造整理
- バックアップファイル名改善
- バックアップ対象データサマリー
- 復元前プレビュー
- 復元前確認チェック
- 古いバックアップ形式への対応
- 復元前自動退避スナップショット
- 自動スナップショット最大3件
- スナップショットからの復元
- 初期化保護
- localStorage使用状況表示
- データ整合性チェック強化
- 壊れたlocalStorageデータへの耐性

## 方針

- AI APIは使いません
- OpenAI API連携は復活させません
- Cloudflare Workers連携は使いません
- 外部通信は行いません
- 不明点や深掘りは外部ChatGPT相談文をコピーして行います
- アプリ本体はローカル教材・問題・解説・復習・模試・ドリル結果分析に集中します
- 問題バンクの問題は、市販教材や過去問本文の丸写しではないオリジナル問題です

## ファイル構成

```text
index.html
style.css
script.js
README.md
data/
  lessons.js
  question-bank.js
  mock-exams.js
  weakness-groups.js
```

教材データは `data/*.js` に分離しています。各ファイルは `window.TSUKAN_*` にデータを載せ、`script.js` が参照します。

## 中心機能

- 学ぶ：講義、重要ポイント、混同ポイント、ひっかけ注意、ミニまとめ
- 解く：確認問題、弱点別ドリル、科目別ドリル、手順・計算・資料読取ドリル、総合模試
- 直す：解説、ひっかけ解説、ミス防止ポイント、復習対象化
- 繰り返す：C判定復習、誤答復習、弱点タグ別復習、今日のメニュー
- 見る：進捗、弱点、模試結果、科目別状態、問題バンク分析

## データ保存

学習データはこのブラウザの `localStorage` に保存されます。スマホとPCは自動同期されません。ブラウザ変更、端末変更、キャッシュ削除、サイトデータ削除を行うとデータが失われる可能性があります。

定期的にJSONバックアップを取ってください。v2.8のバックアップには `appName`、`appVersion`、`schemaVersion`、`exportedAt`、`data` が含まれます。

主な保存対象:

- `units`
- `practiceLogs`
- `pastExamLogs`
- `practicalLogs`
- `aiAnalyses`
- `studyPlans`
- `curriculumProgress`
- `mockExamResults`
- `lessonOverrides`
- `drillResults`
- `userSettings`
- `pastExamMappings`
- `importedPastExamQuestions`

## 外部ChatGPT相談

アプリ内通信は行いません。必要な場合は、アプリで「外部ChatGPT相談文を作る」から相談文を作成し、外部ChatGPTに貼り付けて使います。

## 今後の予定

- v2.9：過去問マッピング機能
- v3.0：ローカル予備校版完成
