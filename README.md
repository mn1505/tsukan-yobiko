# TSUKAN YOBIKO

通関士試験向けのスマホファースト個人予備校アプリです。GitHub Pagesで動く静的アプリとして、HTML / CSS / JavaScriptのみで構成しています。

## 現在のバージョン

v2.7

v2.7は「スマホ学習UI最終整理版」です。毎日スマホで、今日の学習、レッスン、ドリル、復習、模試へ迷わず進めるように画面導線と表示量を整理しました。

## v2.7で行ったこと

- 下部ナビ整理
- ホーム画面整理
- 今日画面整理
- 学習画面整理
- ドリル画面整理
- レッスン画面改善
- 問題回答UI共通化
- ドリル・模試結果画面整理
- 復習画面整理
- 分析画面整理
- 外部ChatGPT相談文作成の脇役化
- 設定画面整理
- スマホ共通CSS整理
- 空データ時の表示改善

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

学習データはこのブラウザの `localStorage` に保存されます。スマホとPCは自動同期されません。定期的にJSONバックアップを取ってください。

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

## 外部ChatGPT相談

アプリ内通信は行いません。必要な場合は、アプリで「外部ChatGPT相談文を作る」から相談文を作成し、外部ChatGPTに貼り付けて使います。

## 今後の予定

- v2.8：バックアップ・復元・データ安全性強化
- v2.9：過去問マッピング機能
- v3.0：ローカル予備校版完成
