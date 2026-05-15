# TSUKAN YOBIKO

通関士試験向けのスマホファースト個人予備校アプリです。GitHub Pagesで動く静的アプリとして、HTML / CSS / JavaScriptのみで構成しています。

## 現在のバージョン

v2.6

v2.6は「教材データ外部JS化・保守性改善版」です。アプリ本体ロジックと教材データを分離し、今後の教材追加、修正、過去問マッピングをしやすい構成にしました。

## v2.6で行ったこと

- `data/` フォルダを追加
- `data/lessons.js` にレッスン・カリキュラムデータを分離
- `data/question-bank.js` に問題バンクを分離
- `data/mock-exams.js` に模試定義・模試問題を分離
- `data/weakness-groups.js` に弱点タグ・弱点グループを分離
- `script.js` のアプリ本体ロジックと教材データを分離
- 設定画面に教材データ読み込み状態を表示
- 設定画面に簡易データ整合性チェックを追加
- `lessonOverrides`、`drillResults`、`mockExamResults` など既存localStorageデータとの互換性を維持

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

教材データは、GitHub Pagesとローカル確認で安定して動くようにJSファイルとして読み込みます。各ファイルは `window.TSUKAN_*` にデータを載せ、`script.js` がそれを参照します。将来的には、ローカル確認手順を整理したうえでJSON化も検討できます。

## 中心機能

- 学ぶ：講義、重要ポイント、混同ポイント、ひっかけ注意、ミニまとめ
- 解く：確認問題、弱点別ドリル、弱点グループ別ドリル、論点別ドリル、科目別ミニ模試、総合模試
- 直す：解説、ひっかけ解説、ミス防止ポイント、復習対象化
- 繰り返す：C判定復習、誤答復習、弱点タグ別復習、今日のメニュー
- 見る：進捗、弱点、模試結果、科目別状態、問題バンク分析、弱点タグ別正答率

## データ保存

学習データはこのブラウザの `localStorage` に保存されます。スマホとPCは自動同期されません。定期的にJSONバックアップを取ってください。

エクスポートJSONの主な保存対象:

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

教材データを外部JS化しても、上記の保存キーは変更していません。`lessonOverrides` は初期レッスンデータに追加表示されます。

## 外部ChatGPT相談

v2.6ではアプリ内通信を行いません。必要な場合は、アプリで相談文を作成し、外部ChatGPTに貼り付けて使います。

## 不要になったファイル

v2.0以降、Cloudflare Workers用のAI中継サーバー関連ファイルは不要です。このリポジトリでは使用しません。

- `worker.js`
- `wrangler.toml.example`
- `workers/` 配下のAI中継サーバー関連ファイル

## 今後の予定

- v2.7：スマホ学習UI最終整理
- v2.8：バックアップ・復元・データ安全性強化
- v2.9：過去問マッピング機能
- v3.0：ローカル予備校版完成
