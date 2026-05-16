// TSUKAN YOBIKO v3.1 data: past exam analysis reinforcement map
// This map stores topics and reinforcement status, not copyrighted exam text.
(function () {
  "use strict";

  const implementedPackId = "reinforce-59-kanzeihou-q1-refund-interest";
  const implementedLessonId = "lesson-kanzeihou-refund-additional-money";
  const implementedQuestionIds = Array.from({ length: 20 }, (_, index) => `qb-kanzeihou-refund-additional-${String(index + 1).padStart(3, "0")}`);

  const subjects = {
    "通関業法": [
      "通関業法の目的", "通関業務と関連業務", "通関業の許可", "欠格事由", "許可の消滅・取消し", "通関士の設置", "通関士の確認", "通関業者の義務", "通関士の義務", "信用失墜行為", "秘密保持義務", "名義貸し", "料金掲示", "記帳・届出・報告", "監督処分", "通関士への懲戒処分", "罰則"
    ],
    "関税法等": [
      "輸出申告", "輸入申告", "輸入の許可", "特例輸入申告", "特例申告", "輸出申告の特例", "保税地域", "指定保税地域", "保税蔵置場", "保税工場", "保税展示場", "総合保税地域", "外国貨物を置く場所の制限", "保税運送", "特定保税運送", "収容", "留置", "輸入してはならない貨物", "原産地虚偽表示等貨物", "納税申告", "修正申告", "更正の請求", "更正", "決定", "賦課決定", "納期限", "法定納期限", "延滞税", "加算税", "還付加算金", "課税物件の確定時期", "納税義務者", "課税価格", "加算要素", "不算入要素", "減免税", "戻し税", "関税率表の通則", "特恵関税", "経済連携協定", "外為法", "不服申立て", "罰則・没収・追徴"
    ],
    "通関実務": [
      "輸出申告書", "輸入申告書", "インボイス読取", "品目分類", "統計品目番号", "税番", "課税価格計算", "加算要素", "不算入要素", "為替換算", "関税額計算", "消費税計算", "地方消費税計算", "端数処理", "税率適用", "原産地", "NACCS入力項目", "申告書作成手順", "資料読取", "ミス発見", "時間配分"
    ]
  };

  function slugify(text) {
    return String(text)
      .replace(/[・／/]/g, "-")
      .replace(/[（）()]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
  }

  function defaultPriority(subject, topic) {
    if (topic === "還付加算金") return "高";
    if (/申告|更正|納期限|加算税|課税価格|品目分類|申告書|計算|罰則|通関士/.test(topic)) return "高";
    if (subject === "通関実務") return "高";
    return "中";
  }

  function defaultWeaknessTags(subject, topic) {
    const tags = [topic];
    if (/申告|更正|決定|納期限|延滞税|加算税|還付/.test(topic)) tags.push("納税申告・更正");
    if (/期限|納期限|期間|還付加算金/.test(topic)) tags.push("期間・期限");
    if (/課税価格|加算要素|不算入要素/.test(topic)) tags.push(subject === "通関実務" ? "課税価格計算" : "課税価格");
    if (/品目分類|税番|統計/.test(topic)) tags.push("品目分類");
    if (/罰則|処分|懲戒/.test(topic)) tags.push("罰則");
    return [...new Set(tags)];
  }

  const map = Object.entries(subjects).flatMap(([subject, topics]) => topics.map((topic) => {
    const implemented = topic === "還付加算金";
    return {
      id: `reinforcement-map-${slugify(subject)}-${slugify(topic)}`,
      subject,
      topic,
      priority: defaultPriority(subject, topic),
      status: implemented ? "補強済" : "未着手",
      reinforcementPackIds: implemented ? [implementedPackId] : [],
      lessonIds: implemented ? [implementedLessonId] : [],
      questionIds: implemented ? implementedQuestionIds : [],
      weaknessTags: implemented ? ["還付加算金", "還付・過誤納金", "期間・期限", "納税申告・更正", "支払決定日・支払命令日混同"] : defaultWeaknessTags(subject, topic),
      memo: implemented ? "第59回関税法等第1問の分析をもとに、講義1件・オリジナル問題20問を追加済み。" : "10年分過去問分析から頻出度、弱点タグ、ひっかけパターンを順次反映する。"
    };
  }));

  window.TSUKAN_PAST_EXAM_ANALYSIS_SUMMARY = {
    version: "v3.1",
    policy: "過去問本文を大量保存せず、論点・弱点・ひっかけパターンとして教材化する。",
    statusOptions: ["未着手", "分析中", "補強予定", "補強済", "要再検証"],
    reinforcementTargets: map
  };
})();
