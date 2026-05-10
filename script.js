const APP_VERSION = "v0.9";
const STORAGE_KEYS = {
  units: "tsukanYobiko.units",
  version: "tsukanYobiko.version",
  practiceLogs: "tsukanYobiko.practiceLogs",
  pastExamLogs: "tsukanYobiko.pastExamLogs",
  practicalLogs: "tsukanYobiko.practicalLogs",
  aiAnalyses: "tsukanYobiko.aiAnalyses",
  studyPlans: "tsukanYobiko.studyPlans",
  curriculumProgress: "tsukanYobiko.curriculumProgress"
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
const PRACTICAL_TYPES = ["未設定", "輸出申告", "輸入申告", "申告書作成", "品目分類", "課税価格計算", "関税額計算", "消費税等計算", "按分計算", "為替換算", "NACCS入力", "資料読み取り", "その他"];
const PRACTICAL_SOURCE_TYPES = ["第59回過去問", "過去問", "0からの申告書", "計算ドリル", "自作問題", "その他"];
const DECLARATION_TYPES = ["未設定", "輸出申告", "輸入申告", "輸入（納税）申告", "その他"];
const CALCULATION_TYPES = ["未設定", "課税価格", "関税額", "消費税", "地方消費税", "按分", "為替換算", "加算要素", "控除要素", "税率適用", "その他"];
const PRACTICAL_PRIORITIES = ["未設定", "高", "中", "低"];
const PRACTICAL_DECLARATION_TYPES = ["輸出申告", "輸入申告", "申告書作成", "NACCS入力", "資料読み取り"];
const PRACTICAL_CALCULATION_TYPES = ["課税価格計算", "関税額計算", "消費税等計算", "按分計算", "為替換算"];
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
const ANALYSIS_SUBJECTS = ["通関業法", "関税法等", "通関実務", "共通", "未設定"];
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
  "復習不足",
  "申告書欄ミス",
  "品目分類ミス",
  "統計品目番号",
  "課税価格計算",
  "加算要素",
  "控除要素",
  "税率適用",
  "関税額計算",
  "消費税計算",
  "按分計算",
  "為替換算",
  "インボイス読取",
  "別冊資料読取",
  "NACCS入力",
  "時間不足"
];
const PRACTICAL_WEAKNESS_TAGS = ["申告書欄ミス", "品目分類ミス", "統計品目番号", "課税価格計算", "加算要素", "控除要素", "税率適用", "関税額計算", "消費税計算", "按分計算", "為替換算", "インボイス読取", "別冊資料読取", "NACCS入力", "時間不足"];
const AI_PROMPT_TYPES = [
  "回答添削",
  "誤答分析",
  "弱点抽出",
  "復習指示",
  "類似問題作成",
  "到達判定",
  "単元理解チェック",
  "過去問分析",
  "総合学習相談"
];
const AI_TARGET_TYPES = ["単元", "レッスン", "演習ログ", "過去問ログ", "実務ログ", "復習対象", "全体サマリー"];
const STUDY_DURATIONS = ["15分", "30分", "1時間", "2時間", "じっくり"];
const AI_ANALYSIS_POINTS = {
  "回答添削": ["結論は合っているか", "理由づけは正しいか", "用語の使い方は正しいか", "条文・制度理解にズレはないか", "本試験ならどこで失点しそうか", "より良い回答にするにはどう修正すべきか"],
  "誤答分析": ["間違えた直接原因", "背後にある理解不足", "暗記不足か理解不足か", "混同している制度・用語", "次に復習すべき論点", "同じミスを防ぐための注意点"],
  "弱点抽出": ["弱点タグ候補", "重要な弱点上位3つ", "本試験で危険な弱点", "すぐ復習すべき単元", "短期で改善できるポイント", "長期的に積み上げるべきポイント"],
  "復習指示": ["今日やるべき復習", "優先順位", "1時間でやる場合のメニュー", "30分でやる場合のメニュー", "次に解くべき問題タイプ", "A判定に上げるための条件"],
  "類似問題作成": ["同じ論点の基礎問題", "本試験に近い選択式問題", "引っかけを含む問題", "解答", "解説", "間違えやすいポイント", "市販問題集や過去問の本文をそのまま複製せず、学習データの論点をもとにオリジナル問題を作ること"],
  "到達判定": ["現在のA/B/C判定の妥当性", "本試験で正答できる可能性", "A判定に必要な追加条件", "B判定に留まる理由", "C判定なら最初に戻るべきポイント"],
  "単元理解チェック": ["制度趣旨を説明できているか", "全体像を理解できているか", "試験上の重要点を押さえているか", "引っかけに耐えられるか", "混同ポイントが整理できているか", "確認問題を3問作る"],
  "過去問分析": ["問題の論点", "出題者が確認したい知識", "正答に必要な判断手順", "自分のミス原因", "次に復習すべき単元", "類似問題への対応力", "本試験での危険度"],
  "総合学習相談": ["現在の学習状況", "合格可能性を上げるうえでの優先課題", "科目別の危険度", "復習優先順位", "今週やるべきこと", "アプリへの記録方法の改善案"]
};
const AI_OUTPUT_FORMATS = {
  default: ["総評", "良い点", "問題点", "弱点タグ候補", "本試験での危険ポイント", "次に復習すべきこと", "A判定に上げる条件"],
  "類似問題作成": ["問題", "選択肢", "正答", "解説", "引っかけポイント", "復習すべき知識"],
  "復習指示": ["最優先", "通常復習", "余裕があれば", "30分メニュー", "1時間メニュー"]
};

const CURRICULUM_STATUS = ["未着手", "学習中", "完了", "復習中"];
const CURRICULUM_UNDERSTANDING = ["未判定", "A", "B", "C"];

function makeQuestion(id, question, choices, answer, explanation, trapExplanation, weaknessTag, type = "single") {
  return { id, type, question, choices, answer, explanation, trapExplanation, weaknessTag };
}

function makeLesson({
  id,
  courseId,
  subject,
  title,
  order,
  level = "基礎",
  estimatedMinutes = 15,
  relatedUnitId = "",
  intro,
  goal,
  lecture,
  keyPoints,
  confusingPoints,
  traps,
  examTips,
  penaltyTips = [],
  miniSummary,
  questions
}) {
  return { id, courseId, subject, title, order, level, estimatedMinutes, relatedUnitId, intro, goal, lecture, keyPoints, confusingPoints, traps, examTips, penaltyTips, miniSummary, questions };
}

const CURRICULUM_COURSES = [
  {
    id: "course-tsukangyoho-basic",
    title: "通関業法 基礎編",
    subject: "通関業法",
    description: "通関業法の目的、許可、欠格事由、義務、処分・罰則の区別を学ぶ基礎講座",
    order: 1,
    lessonIds: [
      "lesson-tsukangyoho-purpose",
      "lesson-tsukangyoho-permission",
      "lesson-tsukangyoho-disqualification",
      "lesson-tsukangyoho-duties",
      "lesson-tsukangyoho-credit-penalty-trap",
      "lesson-tsukangyoho-books-notices",
      "lesson-tsukangyoho-sanctions-penalties"
    ]
  },
  {
    id: "course-kanzeihou-intro",
    title: "関税法等 入門編",
    subject: "関税法等",
    description: "輸出入通関、保税、課税価格の入口を、手続の流れと混同ポイントから学ぶ講座",
    order: 2,
    lessonIds: [
      "lesson-kanzeihou-flow",
      "lesson-kanzeihou-import-declaration",
      "lesson-kanzeihou-bonded-area",
      "lesson-kanzeihou-bonded-transport",
      "lesson-kanzeihou-customs-value"
    ]
  },
  {
    id: "course-practical-intro",
    title: "通関実務 入門編",
    subject: "通関実務",
    description: "申告書、品目分類、課税価格計算、時間配分を実務問題の入口として学ぶ講座",
    order: 3,
    lessonIds: [
      "lesson-practical-overview",
      "lesson-practical-declaration",
      "lesson-practical-classification",
      "lesson-practical-customs-value",
      "lesson-practical-time-management"
    ]
  }
];

function makeStandardLesson(id, courseId, subject, title, order, relatedUnitId, focus, traps) {
  return makeLesson({
    id,
    courseId,
    subject,
    title,
    order,
    relatedUnitId,
    intro: `${title}では、条文や手続の名前を覚えるだけでなく、誰が、いつ、何をしなければならないかを整理します。`,
    goal: `${focus}を説明でき、似た制度との違いを選択肢で判断できる状態を目標にします。`,
    lecture: `${subject}の${title}は、本試験では用語そのものよりも、主体、手続、効果、例外の入れ替えで問われます。まず制度の目的を押さえ、次に義務や手続の発生場面を確認します。許可、承認、届出、報告、罰則、処分は同じ「制限」ではありません。許可は事前に認めてもらう仕組み、承認は個別行為を認めてもらう仕組み、届出や報告は事実を知らせる仕組みです。選択肢では、この区別をずらして誤りにする形が多くなります。`,
    keyPoints: [
      `${focus}の主体を先に決める`,
      "許可・承認・届出・報告を同じものとして扱わない",
      "禁止や義務と、処分・罰則の有無を分ける"
    ],
    confusingPoints: [
      "主体が通関業者なのか、通関士なのか、税関長なのか",
      "事前の許可・承認と、事後の届出・報告",
      "違反時の監督処分・懲戒処分・罰則"
    ],
    traps,
    examTips: [
      "「必ず」「直ちに」「罰金に処せられる」など断定語を確認する",
      "似た制度の語句が混ぜられていないか確認する",
      "手続の相手方と時期をセットで見る"
    ],
    penaltyTips: ["義務規定があることと、罰則が直結することは別に判断します。"],
    miniSummary: `${title}は、制度の名前ではなく、主体・手続・効果の3点セットで読むとひっかけに強くなります。`,
    questions: [
      makeQuestion("q1", `${title}では、制度名だけでなく主体と手続時期を確認する必要がある。`, ["正しい", "誤り"], "正しい", "通関士試験では、主体や時期の入れ替えが誤り選択肢になりやすいため正しいです。", "用語暗記だけで判断させる選択肢に注意します。", "主体の混同", "truefalse"),
      makeQuestion("q2", "許可・承認・届出・報告は、いずれも同じ法的意味を持つため、選択肢では置き換えてよい。", ["正しい", "誤り"], "誤り", "許可、承認、届出、報告は制度上の意味が異なります。置き換えられていたら誤りの可能性があります。", "「手続っぽい語なら同じ」と読ませるひっかけです。", "許可・承認・届出の混同", "truefalse"),
      makeQuestion("q3", "義務に違反した場合の効果を判断するとき、最初に見るべきものはどれか。", ["問題文の語感", "義務の主体と違反効果", "科目名", "学習した順番"], "義務の主体と違反効果", "義務の主体、違反時の処分・懲戒・罰則のどれに結びつくかを分けて確認します。", "禁止されている行為だから必ず罰則、とは限りません。", "罰則")
    ]
  });
}

const CURRICULUM_LESSONS = [
  makeStandardLesson("lesson-tsukangyoho-purpose", "course-tsukangyoho-basic", "通関業法", "通関業法の目的・定義", 1, "u001", "通関業法の目的と主要な定義", ["通関業務と関連業務を混同する", "通関業者と通関士を同じ主体として読む", "制度趣旨を罰則の話に飛ばす"]),
  makeStandardLesson("lesson-tsukangyoho-permission", "course-tsukangyoho-basic", "通関業法", "通関業の許可", 2, "u002", "通関業を営むための許可制度", ["許可権者を入れ替える", "営業所ごとの手続と業者全体の許可を混同する", "許可と届出を置き換える"]),
  makeStandardLesson("lesson-tsukangyoho-disqualification", "course-tsukangyoho-basic", "通関業法", "欠格事由", 3, "u003", "欠格事由の対象者と期間", ["本人と役員の対象範囲をずらす", "期間制限を長短で入れ替える", "許可要件と欠格事由を混同する"]),
  makeStandardLesson("lesson-tsukangyoho-duties", "course-tsukangyoho-basic", "通関業法", "通関業者・通関士の義務", 4, "u004", "通関業者と通関士に課される義務", ["秘密保持義務と信用失墜行為を混同する", "通関士だけの義務にする", "名義貸し禁止と罰則の関係を雑に読む"]),
  makeLesson({
    id: "lesson-tsukangyoho-credit-penalty-trap",
    courseId: "course-tsukangyoho-basic",
    subject: "通関業法",
    title: "信用失墜行為と罰則トラップ",
    order: 5,
    level: "基礎",
    estimatedMinutes: 18,
    relatedUnitId: "u004",
    intro: "信用失墜行為の禁止は、通関業法の義務規定の中でも、罰則との混同を狙われやすい論点です。",
    goal: "第20条の対象者、禁止内容、罰金刑に直結しない点を分けて判断できるようにします。",
    lecture: "通関業法20条は、信用失墜行為の禁止を定める規定です。対象は、通関業者、法人である通関業者の役員、通関士です。これらの者は、通関業者の信用又は品位を害するような行為をしてはならないとされています。\n\nここで重要なのは、禁止されていることと、直ちに罰金刑に処せられることは別だという点です。第20条違反そのものが罰金刑に直結するわけではありません。本試験では「法人の役員が品位を害する行為をした場合は罰金の刑に処せられることがある」のように、対象者としては含まれる事実と、罰則直結ではない事実を混ぜて誤り選択肢にします。\n\n義務規定、監督処分、懲戒処分、罰則は必ず分けて理解します。信用失墜行為は禁止されていますが、その違反効果を読むときは、通関業者への監督処分、通関士への懲戒処分、刑罰規定の有無を別々に確認します。",
    keyPoints: [
      "対象者は通関業者、法人である通関業者の役員、通関士",
      "禁止内容は信用又は品位を害する行為",
      "第20条違反そのものは罰金刑に直結しない"
    ],
    confusingPoints: [
      "信用失墜行為",
      "秘密保持義務",
      "名義貸し禁止",
      "監督処分",
      "懲戒処分",
      "罰則"
    ],
    traps: [
      "罰金の刑に処せられることがある",
      "法人の役員は対象外",
      "通関士だけが対象",
      "品位ではなく利益を害する行為",
      "義務規定なら必ず罰則がある"
    ],
    examTips: [
      "対象者として含まれるか、罰則があるかを別々に判定する",
      "「禁止される」と「罰金刑」は同時に判断しない",
      "監督処分・懲戒処分・罰則の語を見たら条文上の効果を確認する"
    ],
    penaltyTips: [
      "第20条は義務規定であり、違反そのものが罰金刑に直結する規定ではありません。",
      "罰則トラップでは、禁止規定を見せてから刑罰を断定する表現が狙われます。"
    ],
    miniSummary: "第20条は対象者と禁止内容を押さえたうえで、罰金刑に直結しない点を強く区別します。",
    questions: [
      makeQuestion("q1", "法人である通関業者の役員が、通関業法第20条に規定する通関業者の品位を害するような行為をした場合は、罰金の刑に処せられることがある。", ["正しい", "誤り"], "誤り", "法人である通関業者の役員も信用失墜行為の禁止の対象にはなります。しかし、第20条違反そのものに罰金刑が直結するわけではありません。試験では、義務規定と罰則を混同させる選択肢に注意します。", "対象者には含まれる、しかし罰金刑直結ではない、という二段階判断を崩すひっかけです。", "罰則", "truefalse"),
      makeQuestion("q2", "通関業法20条の信用失墜行為の禁止の対象に含まれるものとして最も適切な組み合わせはどれか。", ["通関士だけ", "通関業者、法人である通関業者の役員、通関士", "輸入者だけ", "税関職員だけ"], "通関業者、法人である通関業者の役員、通関士", "第20条は通関業者、法人である通関業者の役員、通関士を対象にします。", "「通関士だけ」「役員は対象外」と狭くする表現に注意します。", "主体の混同"),
      makeQuestion("q3", "信用失墜行為の禁止を学ぶとき、最も危険な読み方はどれか。", ["対象者を確認する", "禁止内容を確認する", "義務規定なら必ず罰金刑があると読む", "監督処分・懲戒処分・罰則を分ける"], "義務規定なら必ず罰金刑があると読む", "義務規定と罰則は別です。禁止されていても、罰金刑が直結するとは限りません。", "「禁止されるなら罰則」と短絡させるのが典型的な罰則トラップです。", "罰則")
    ]
  }),
  makeStandardLesson("lesson-tsukangyoho-books-notices", "course-tsukangyoho-basic", "通関業法", "記帳・届出・報告", 6, "u005", "継続的な記帳、届出、報告義務", ["保存と提出を混同する", "届出と許可を置き換える", "報告徴求と任意のメモを混同する"]),
  makeStandardLesson("lesson-tsukangyoho-sanctions-penalties", "course-tsukangyoho-basic", "通関業法", "監督処分・懲戒処分・罰則の区別", 7, "u004", "監督処分、懲戒処分、罰則の違い", ["通関業者への監督処分と通関士への懲戒処分を混同する", "行政上の処分と刑罰を同じものとして読む", "処分の主体を入れ替える"]),
  makeStandardLesson("lesson-kanzeihou-flow", "course-kanzeihou-intro", "関税法等", "輸出入通関の全体像", 1, "u008", "輸出入通関の流れ", ["申告、審査、検査、納税、許可の順序を混同する", "輸出と輸入の要件を入れ替える", "保税地域との関係を飛ばす"]),
  makeStandardLesson("lesson-kanzeihou-import-declaration", "course-kanzeihou-intro", "関税法等", "輸入申告と輸入の許可", 2, "u008", "輸入申告から許可までの基本", ["申告と許可を同一視する", "納税と許可の関係を単純化する", "必要書類の位置づけをずらす"]),
  makeStandardLesson("lesson-kanzeihou-bonded-area", "course-kanzeihou-intro", "関税法等", "保税地域の基本", 3, "u006", "保税地域の種類と機能", ["保税蔵置場と保税工場を混同する", "外国貨物と内国貨物を混同する", "置く場所と行える作業を入れ替える"]),
  makeStandardLesson("lesson-kanzeihou-bonded-transport", "course-kanzeihou-intro", "関税法等", "保税運送の基本", 4, "u007", "保税運送の承認と運送管理", ["承認と届出を置き換える", "運送期間や到着確認を落とす", "外国貨物のまま運ぶ意味を忘れる"]),
  makeStandardLesson("lesson-kanzeihou-customs-value", "course-kanzeihou-intro", "関税法等", "課税価格の基本", 5, "u010", "課税価格の基本構造", ["現実支払価格と課税価格を完全同一視する", "加算要素と控除要素を入れ替える", "代替評価方法の順序を無視する"]),
  makeStandardLesson("lesson-practical-overview", "course-practical-intro", "通関実務", "通関実務の全体像", 1, "u012", "実務問題の全体像", ["申告書、分類、計算を別々に解きすぎる", "資料読み取りの前提を飛ばす", "時間配分を記録しない"]),
  makeStandardLesson("lesson-practical-declaration", "course-practical-intro", "通関実務", "申告書作成の基本", 2, "u012", "申告書欄の意味と入力判断", ["欄の意味を暗記だけで処理する", "インボイス情報の転記ミス", "税額計算とのつながりを切る"]),
  makeStandardLesson("lesson-practical-classification", "course-practical-intro", "通関実務", "品目分類の基本", 3, "u011", "品目分類の判断手順", ["見た目だけで分類する", "部注・類注・通則の順序を飛ばす", "統計品目番号と税番を雑に扱う"]),
  makeStandardLesson("lesson-practical-customs-value", "course-practical-intro", "通関実務", "課税価格計算の基本", 4, "u010", "課税価格計算の入口", ["加算要素を落とす", "控除要素を加算する", "為替換算と端数処理を雑に行う"]),
  makeStandardLesson("lesson-practical-time-management", "course-practical-intro", "通関実務", "実務問題の時間配分", 5, "u012", "実務問題の時間配分", ["難問に時間を使い切る", "見直し時間を確保しない", "分類と計算の順序を固定しすぎる"])
];

const state = {
  units: [],
  practiceLogs: [],
  pastExamLogs: [],
  practicalLogs: [],
  aiAnalyses: [],
  studyPlans: [],
  curriculumProgress: [],
  todayMenu: null,
  activeView: "home",
  activeUnitId: null,
  activeLessonId: null,
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
  practicalFilters: {
    search: "",
    practicalType: "すべて",
    sourceType: "すべて",
    result: "すべて",
    confidence: "すべて",
    unitId: "すべて",
    calculationType: "すべて",
    weakness: "すべて",
    priority: "すべて",
    retryOnly: false,
    declarationOnly: false,
    calculationOnly: false
  },
  aiForm: {
    promptType: "単元理解チェック",
    targetType: "単元",
    targetId: "",
    additionalConditions: "",
    promptText: "",
    currentAnalysisId: ""
  },
  editingPracticeLogId: null,
  editingPastExamLogId: null,
  editingPracticalLogId: null,
  practiceFormMessage: "",
  pastExamFormMessage: "",
  practicalFormMessage: ""
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

const blankPracticalLog = {
  id: "",
  studiedAt: "",
  practicalType: "未設定",
  sourceType: "その他",
  sourceName: "",
  subject: "通関実務",
  relatedUnitId: "",
  relatedUnitTitle: "",
  questionRef: "",
  result: "未判定",
  scoreMemo: "",
  timeSpentMinutes: "",
  confidence: "未設定",
  declarationType: "未設定",
  classificationMemo: "",
  calculationType: "未設定",
  calculationMemo: "",
  invoiceMemo: "",
  exchangeRateMemo: "",
  taxRateMemo: "",
  nacssMemo: "",
  materialReadingMemo: "",
  mistakeField: "",
  mistakeReason: "",
  weaknessTags: [],
  retry: false,
  priority: "未設定",
  aiAnalysisMemo: "",
  createdAt: "",
  updatedAt: ""
};

const practicalFieldLabels = {
  studiedAt: "学習日",
  practicalType: "実務区分",
  sourceType: "出典種別",
  sourceName: "出典名",
  relatedUnitId: "関連単元",
  questionRef: "問題番号・参照",
  result: "結果",
  scoreMemo: "得点・配点メモ",
  timeSpentMinutes: "所要時間（分）",
  confidence: "自信度",
  declarationType: "申告種別",
  classificationMemo: "品目分類メモ",
  calculationType: "計算類型",
  calculationMemo: "計算過程メモ",
  invoiceMemo: "インボイス読取メモ",
  exchangeRateMemo: "為替換算メモ",
  taxRateMemo: "税率・税額メモ",
  nacssMemo: "NACCS入力項目メモ",
  materialReadingMemo: "資料読み取りメモ",
  mistakeField: "ミスした欄・項目",
  mistakeReason: "ミス理由",
  weaknessTags: "弱点タグ",
  retry: "再演習対象",
  priority: "優先度",
  aiAnalysisMemo: "AI解析メモ"
};

const practicalFieldsets = [
  { title: "基本情報", fields: ["studiedAt", "practicalType", "sourceType", "sourceName", "relatedUnitId", "questionRef", "result", "scoreMemo", "timeSpentMinutes", "confidence"] },
  { title: "申告・分類・計算メモ", fields: ["declarationType", "classificationMemo", "calculationType", "calculationMemo", "invoiceMemo", "exchangeRateMemo", "taxRateMemo", "nacssMemo", "materialReadingMemo"] },
  { title: "ミス分析", fields: ["mistakeField", "mistakeReason", "weaknessTags", "retry", "priority", "aiAnalysisMemo"] }
];

const tabDefinitions = [
  { id: "basic", label: "基本" },
  { id: "law", label: "法令" },
  { id: "exam", label: "試験" },
  { id: "past", label: "過去問" },
  { id: "practice", label: "演習" },
  { id: "practical", label: "実務" },
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
  state.practicalLogs = normalizeArray(readJson(STORAGE_KEYS.practicalLogs)).map(normalizePracticalLog);
  state.aiAnalyses = normalizeArray(readJson(STORAGE_KEYS.aiAnalyses)).map(normalizeAiAnalysis);
  state.studyPlans = normalizeArray(readJson(STORAGE_KEYS.studyPlans)).map(normalizeStudyPlan);
  state.curriculumProgress = normalizeArray(readJson(STORAGE_KEYS.curriculumProgress)).map(normalizeCurriculumProgress);
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

function normalizePracticalLog(log) {
  const normalized = {
    ...blankPracticalLog,
    ...(log || {}),
    weaknessTags: Array.isArray(log?.weaknessTags) ? log.weaknessTags : []
  };
  if (!normalized.id) normalized.id = makePracticalLogId();
  if (!normalized.studiedAt) normalized.studiedAt = todayString();
  if (!normalized.practicalType) normalized.practicalType = "未設定";
  if (!normalized.sourceType) normalized.sourceType = "その他";
  if (!normalized.subject) normalized.subject = "通関実務";
  if (!normalized.result) normalized.result = "未判定";
  if (!normalized.confidence) normalized.confidence = "未設定";
  if (!normalized.declarationType) normalized.declarationType = "未設定";
  if (!normalized.calculationType) normalized.calculationType = "未設定";
  if (!normalized.priority) normalized.priority = "未設定";
  const unit = state.units.find((item) => item.id === normalized.relatedUnitId);
  if (unit) normalized.relatedUnitTitle = unit.title;
  return normalized;
}

function normalizeAiAnalysis(item) {
  const normalized = {
    id: "",
    createdAt: "",
    promptType: "",
    targetType: "",
    targetId: "",
    targetTitle: "",
    promptText: "",
    resultMemo: "",
    ...(item || {})
  };
  if (!normalized.id) normalized.id = makeAiAnalysisId();
  if (!normalized.createdAt) normalized.createdAt = new Date().toISOString();
  if (!normalized.resultMemo) normalized.resultMemo = "";
  return normalized;
}

function normalizeStudyPlan(item) {
  const normalized = {
    id: "",
    date: "",
    selectedDuration: "",
    generatedAt: "",
    completedItems: [],
    manualItems: [],
    memo: "",
    createdAt: "",
    updatedAt: "",
    ...(item || {})
  };
  if (!normalized.id) normalized.id = makeStudyPlanId();
  if (!normalized.date) normalized.date = todayString();
  if (!STUDY_DURATIONS.includes(normalized.selectedDuration)) normalized.selectedDuration = "30分";
  if (!normalized.generatedAt) normalized.generatedAt = new Date().toISOString();
  if (!normalized.createdAt) normalized.createdAt = normalized.generatedAt;
  if (!normalized.updatedAt) normalized.updatedAt = normalized.generatedAt;
  normalized.completedItems = normalizeArray(normalized.completedItems).map((completed) => ({
    id: String(completed?.id || ""),
    type: String(completed?.type || ""),
    title: String(completed?.title || ""),
    completedAt: completed?.completedAt || new Date().toISOString()
  })).filter((completed) => completed.id);
  normalized.manualItems = normalizeArray(normalized.manualItems).map(makeTodayMenuItem).filter((item) => item.id);
  normalized.memo = String(normalized.memo || "");
  return normalized;
}

function normalizeCurriculumProgress(item) {
  const normalized = {
    lessonId: "",
    status: "未着手",
    startedAt: "",
    completedAt: "",
    lastStudiedAt: "",
    questionResults: [],
    understanding: "未判定",
    reviewNeeded: false,
    ...(item || {})
  };
  if (!getLessonById(normalized.lessonId)) normalized.lessonId = String(normalized.lessonId || "");
  if (!CURRICULUM_STATUS.includes(normalized.status)) normalized.status = "未着手";
  if (!CURRICULUM_UNDERSTANDING.includes(normalized.understanding)) normalized.understanding = "未判定";
  normalized.questionResults = normalizeArray(normalized.questionResults).map((result) => ({
    questionId: String(result?.questionId || ""),
    userAnswer: String(result?.userAnswer || ""),
    correct: Boolean(result?.correct),
    answeredAt: result?.answeredAt || ""
  })).filter((result) => result.questionId);
  normalized.reviewNeeded = Boolean(normalized.reviewNeeded || ["B", "C"].includes(normalized.understanding));
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
  localStorage.setItem(STORAGE_KEYS.practicalLogs, JSON.stringify(state.practicalLogs));
  localStorage.setItem(STORAGE_KEYS.aiAnalyses, JSON.stringify(state.aiAnalyses));
  localStorage.setItem(STORAGE_KEYS.studyPlans, JSON.stringify(state.studyPlans));
  localStorage.setItem(STORAGE_KEYS.curriculumProgress, JSON.stringify(state.curriculumProgress));
  localStorage.setItem(STORAGE_KEYS.version, APP_VERSION);
}

function todayString() {
  const date = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function makePracticeLogId() {
  const random = Math.random().toString(36).slice(2, 10);
  return `log-${Date.now().toString(36)}-${random}`;
}

function makePastExamLogId() {
  const random = Math.random().toString(36).slice(2, 10);
  return `past-${Date.now().toString(36)}-${random}`;
}

function makePracticalLogId() {
  const random = Math.random().toString(36).slice(2, 10);
  return `prac-${Date.now().toString(36)}-${random}`;
}

function makeAiAnalysisId() {
  const random = Math.random().toString(36).slice(2, 10);
  return `ai-${Date.now().toString(36)}-${random}`;
}

function makeStudyPlanId() {
  const random = Math.random().toString(36).slice(2, 10);
  return `plan-${Date.now().toString(36)}-${random}`;
}

function getReviewStatus(unit) {
  const reasons = getReviewReasons(unit);
  if (
    unit.level === "C" ||
    reasons.includes("例題に×あり") ||
    reasons.includes("過去問が×") ||
    reasons.includes("関連演習ログに×あり") ||
    reasons.includes("関連過去問ログに×あり") ||
    reasons.includes("関連過去問ログに高優先度あり") ||
    reasons.includes("関連実務ログに×あり") ||
    reasons.includes("関連実務ログに高優先度あり")
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
    reasons.includes("関連実務ログに△あり") ||
    reasons.includes("関連実務ログに再演習対象あり") ||
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
  const practicalLogs = getPracticalLogsForUnit(unit.id);
  if (practicalLogs.some((log) => log.result === "×")) reasons.push("関連実務ログに×あり");
  if (practicalLogs.some((log) => log.result === "△")) reasons.push("関連実務ログに△あり");
  if (practicalLogs.some((log) => log.retry)) reasons.push("関連実務ログに再演習対象あり");
  if (practicalLogs.some((log) => log.priority === "高")) reasons.push("関連実務ログに高優先度あり");
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

function getPracticalLogsForUnit(unitId) {
  return state.practicalLogs.filter((log) => log.relatedUnitId === unitId);
}

function getWeaknessCount(unit) {
  return Array.isArray(unit.ai?.weaknessTags) ? unit.ai.weaknessTags.length : 0;
}

function getLessonById(lessonId) {
  return CURRICULUM_LESSONS.find((lesson) => lesson.id === lessonId);
}

function getCourseById(courseId) {
  return CURRICULUM_COURSES.find((course) => course.id === courseId);
}

function getLessonsByCourse(courseId) {
  const course = getCourseById(courseId);
  const ids = course?.lessonIds || [];
  return CURRICULUM_LESSONS
    .filter((lesson) => lesson.courseId === courseId)
    .sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id) || a.order - b.order);
}

function getLessonProgress(lessonId) {
  let progress = state.curriculumProgress.find((item) => item.lessonId === lessonId);
  if (!progress) {
    progress = normalizeCurriculumProgress({ lessonId });
    state.curriculumProgress.push(progress);
  }
  return progress;
}

function touchLessonProgress(lessonId) {
  const progress = getLessonProgress(lessonId);
  const now = new Date().toISOString();
  if (!progress.startedAt) progress.startedAt = now;
  if (progress.status === "未着手") progress.status = "学習中";
  progress.lastStudiedAt = now;
  saveUnits();
  return progress;
}

function getLessonQuestionResult(lessonId, questionId) {
  const progress = getLessonProgress(lessonId);
  return progress.questionResults.find((result) => result.questionId === questionId);
}

function calculateLessonUnderstanding(lesson, progress) {
  const answered = lesson.questions.filter((question) => progress.questionResults.some((result) => result.questionId === question.id));
  if (!answered.length) return "未判定";
  const correct = lesson.questions.filter((question) => progress.questionResults.some((result) => result.questionId === question.id && result.correct)).length;
  if (correct === 3) return "A";
  if (correct === 2) return "B";
  return "C";
}

function updateLessonUnderstanding(lessonId) {
  const lesson = getLessonById(lessonId);
  const progress = getLessonProgress(lessonId);
  if (!lesson) return progress;
  progress.understanding = calculateLessonUnderstanding(lesson, progress);
  progress.reviewNeeded = ["B", "C"].includes(progress.understanding) || progress.reviewNeeded;
  return progress;
}

function getCurriculumStats() {
  const total = CURRICULUM_LESSONS.length;
  const progresses = CURRICULUM_LESSONS.map((lesson) => getLessonProgress(lesson.id));
  const countBy = (key, values) => values.reduce((acc, value) => ({ ...acc, [value]: progresses.filter((item) => item[key] === value).length }), {});
  const completed = progresses.filter((item) => item.status === "完了").length;
  const reviewLessons = getReviewLessons();
  return {
    total,
    completed,
    rate: total ? Math.round((completed / total) * 100) : 0,
    statusCounts: countBy("status", CURRICULUM_STATUS),
    understandingCounts: countBy("understanding", CURRICULUM_UNDERSTANDING),
    reviewCount: reviewLessons.length,
    nextLesson: getRecommendedLesson(),
    recentWrong: getRecentWrongLessonQuestions()
  };
}

function getReviewLessons() {
  return CURRICULUM_LESSONS
    .map((lesson) => ({ lesson, progress: getLessonProgress(lesson.id), reason: getLessonReviewReason(lesson.id) }))
    .filter(({ progress }) => progress.reviewNeeded || ["B", "C"].includes(progress.understanding) || progress.status === "復習中")
    .sort((a, b) => {
      const order = { C: 4, B: 3, "未判定": 2, A: 1 };
      return (order[b.progress.understanding] || 0) - (order[a.progress.understanding] || 0) ||
        (a.progress.lastStudiedAt || "").localeCompare(b.progress.lastStudiedAt || "") ||
        a.lesson.order - b.lesson.order;
    });
}

function getLessonReviewReason(lessonId) {
  const progress = getLessonProgress(lessonId);
  if (progress.understanding === "C") return "C判定のため最優先復習";
  if (progress.understanding === "B") return "B判定のため確認復習";
  if (progress.status === "復習中") return "復習中に設定済み";
  if (progress.reviewNeeded) return "復習対象に設定済み";
  return "定期確認";
}

function getRecommendedLesson() {
  const review = getReviewLessons();
  const cLesson = review.find((item) => item.progress.understanding === "C");
  if (cLesson) return { ...cLesson, type: "レッスン復習" };
  if (review[0]) return { ...review[0], type: "レッスン復習" };
  const next = CURRICULUM_LESSONS
    .map((lesson) => ({ lesson, progress: getLessonProgress(lesson.id), reason: "未着手の次レッスン", type: "レッスン学習" }))
    .find(({ progress }) => progress.status === "未着手");
  if (next) return next;
  const old = CURRICULUM_LESSONS
    .map((lesson) => ({ lesson, progress: getLessonProgress(lesson.id), reason: "最終学習日が古いレッスン", type: "レッスン復習" }))
    .sort((a, b) => (a.progress.lastStudiedAt || "").localeCompare(b.progress.lastStudiedAt || ""));
  return old[0] || null;
}

function getRecentWrongLessonQuestions() {
  return CURRICULUM_LESSONS.flatMap((lesson) => {
    const progress = getLessonProgress(lesson.id);
    return progress.questionResults
      .filter((result) => !result.correct)
      .map((result) => ({
        lesson,
        result,
        question: lesson.questions.find((question) => question.id === result.questionId)
      }));
  }).sort((a, b) => (b.result.answeredAt || "").localeCompare(a.result.answeredAt || "")).slice(0, 5);
}

function getTodayPlan() {
  const date = todayString();
  let plan = state.studyPlans.find((item) => item.date === date);
  if (!plan) {
    const now = new Date().toISOString();
    plan = normalizeStudyPlan({
      id: makeStudyPlanId(),
      date,
      selectedDuration: "30分",
      generatedAt: now,
      completedItems: [],
      memo: "",
      createdAt: now,
      updatedAt: now
    });
    state.studyPlans.push(plan);
    saveUnits();
  }
  return plan;
}

function updateTodayPlan(updater) {
  const plan = getTodayPlan();
  updater(plan);
  plan.updatedAt = new Date().toISOString();
  state.studyPlans = state.studyPlans
    .filter((item, index, array) => array.findIndex((candidate) => candidate.date === item.date) === index)
    .map((item) => item.date === plan.date ? plan : item);
  saveUnits();
}

function getDurationLimits(duration) {
  const limits = {
    "15分": { total: 1, priority: 1, practice: 1, past: 1, practical: 1 },
    "30分": { total: 3, priority: 2, practice: 1, past: 1, practical: 1 },
    "1時間": { total: 6, priority: 2, practice: 2, past: 2, practical: 1 },
    "2時間": { total: 9, priority: 3, practice: 3, past: 3, practical: 2 },
    "じっくり": { total: 14, priority: 5, practice: 5, past: 5, practical: 5 }
  };
  return limits[duration] || limits["30分"];
}

function generateTodayMenu(duration = "30分") {
  const plan = getTodayPlan();
  if (plan.selectedDuration !== duration) {
    updateTodayPlan((current) => {
      current.selectedDuration = duration;
      current.generatedAt = new Date().toISOString();
    });
  }
  const limits = getDurationLimits(duration);
  const lessonItems = buildTodayLessonItems();
  const unitItems = buildTodayUnitItems();
  const practiceItems = buildTodayPracticeItems().slice(0, limits.practice);
  const pastExamItems = buildTodayPastExamItems().slice(0, limits.past);
  const practicalItems = buildTodayPracticalItems().slice(0, limits.practical);
  const priorityItems = uniqueTodayItems([
    ...lessonItems.filter((item) => item.priority === "最優先"),
    ...unitItems.filter((item) => item.priority === "最優先"),
    ...practiceItems.filter((item) => item.priority === "高"),
    ...pastExamItems.filter((item) => item.priority === "高"),
    ...practicalItems.filter((item) => item.priority === "高")
  ]).slice(0, Math.max(limits.priority, 3));
  const weaknessItems = buildTodayWeaknessItems().slice(0, duration === "じっくり" ? 3 : duration === "2時間" ? 2 : 0);
  const manualItems = normalizeArray(plan.manualItems).map(makeTodayMenuItem);
  const aiItems = duration === "じっくり" ? [makeTodayMenuItem({
    id: "today-ai-consult",
    type: "AI相談",
    title: "今日のメニューをAIに相談",
    description: "未完了項目と弱点タグを含めて、30分・1時間メニューを相談する。",
    reason: "じっくり学習では方針確認まで行う",
    priority: "中",
    estimatedMinutes: 10
  })] : [];
  const recommended = uniqueTodayItems([
    ...manualItems,
    ...priorityItems,
    ...lessonItems,
    ...pastExamItems,
    ...practicalItems,
    ...practiceItems,
    ...weaknessItems,
    ...aiItems,
    ...unitItems
  ]).slice(0, limits.total);
  const allItems = uniqueTodayItems([...recommended, ...manualItems, ...priorityItems, ...lessonItems, ...practiceItems, ...pastExamItems, ...practicalItems, ...weaknessItems, ...aiItems]);
  return { duration, date: plan.date, plan, recommended, priorityItems, lessonItems, practiceItems, pastExamItems, practicalItems, weaknessItems, aiItems, manualItems, allItems };
}

function buildTodayLessonItems() {
  const items = [];
  const reviewItems = getReviewLessons().map(({ lesson, progress, reason }) => makeTodayMenuItem({
    id: `lesson-${lesson.id}`,
    type: "レッスン復習",
    title: lesson.title,
    description: `${lesson.subject} / ${lesson.estimatedMinutes}分 / 理解度 ${progress.understanding}`,
    reason,
    priority: progress.understanding === "C" ? "最優先" : "高",
    priorityScore: progress.understanding === "C" ? 90 : 70,
    estimatedMinutes: lesson.estimatedMinutes,
    relatedUnitId: lesson.relatedUnitId,
    relatedLessonId: lesson.id
  }));
  items.push(...reviewItems);
  const next = CURRICULUM_LESSONS.find((lesson) => getLessonProgress(lesson.id).status === "未着手");
  if (next) {
    const unitRisk = next.relatedUnitId ? scoreUnitRisk(state.units.find((unit) => unit.id === next.relatedUnitId) || makeBlankUnit()).score : 0;
    const trapBoost = next.traps.some((trap) => /罰則|処分|許可|承認|届出/.test(trap)) ? 12 : 0;
    items.push(makeTodayMenuItem({
      id: `lesson-${next.id}`,
      type: "レッスン学習",
      title: next.title,
      description: `${next.subject} / ${next.estimatedMinutes}分 / 理解度 ${getLessonProgress(next.id).understanding}`,
      reason: unitRisk >= 25 ? "関連単元の危険度が高い未着手レッスン" : trapBoost ? "混同しやすいレッスン" : "未着手の次レッスン",
      priority: unitRisk >= 25 ? "高" : "中",
      priorityScore: 50 + unitRisk + trapBoost,
      estimatedMinutes: next.estimatedMinutes,
      relatedUnitId: next.relatedUnitId,
      relatedLessonId: next.id
    }));
  }
  return uniqueTodayItems(items).slice(0, 6);
}

function buildTodayUnitItems() {
  return state.units.map((unit) => {
    const scored = scoreUnitRisk(unit);
    const review = getReviewStatus(unit);
    const reasons = getReviewReasons(unit);
    const oldDays = daysSince(unit.updatedAt);
    let priorityScore = scored.score;
    if (review.label === "最優先復習") priorityScore += 40;
    if (unit.level === "C") priorityScore += 30;
    if (unit.redoTarget) priorityScore += 15;
    if (oldDays > 30) priorityScore += 10;
    if (unit.importance === "高") priorityScore += 8;
    const priority = scored.risk.label === "最優先改善" || review.label === "最優先復習" || unit.level === "C" ? "最優先"
      : scored.score >= 25 || unit.importance === "高" ? "高"
      : scored.score >= 10 || review.weight > 0 ? "中"
      : "低";
    return makeTodayMenuItem({
      id: `unit-${unit.id}`,
      type: "単元復習",
      title: unit.title,
      description: `${unit.subject} / 到達判定 ${unit.level} / 危険度 ${scored.risk.label}`,
      reason: scored.reasons.join(" / ") || reasons.join(" / ") || "重要単元の定期確認",
      priority,
      priorityScore,
      estimatedMinutes: priority === "最優先" ? 20 : 15,
      relatedUnitId: unit.id
    });
  }).sort(compareTodayItems);
}

function buildTodayPracticeItems() {
  return state.practiceLogs
    .filter((log) => log.result === "×" || log.result === "△" || log.retry || ["分からなかった", "当てた"].includes(log.confidence))
    .map((log) => makeTodayMenuItem({
      id: `practice-${log.id}`,
      type: "演習見直し",
      title: log.unitTitle || log.questionRef || log.sourceName || "演習ログ",
      description: [log.sourceName, log.questionRef, log.result, log.confidence].filter(Boolean).join(" / "),
      reason: todayLogReason(log),
      priority: log.result === "×" || log.confidence === "分からなかった" ? "高" : "中",
      priorityScore: resultScore(log.result) + (log.retry ? 20 : 0) + (log.confidence === "分からなかった" ? 12 : log.confidence === "当てた" ? 8 : 0),
      estimatedMinutes: 10,
      relatedUnitId: log.unitId,
      relatedLogId: log.id
    })).sort(compareTodayItems);
}

function buildTodayPastExamItems() {
  return state.pastExamLogs
    .filter((log) => log.result === "×" || log.result === "△" || log.retry || log.priority === "高" || (log.scoreType === "全正解のみ" && ["×", "△"].includes(log.result)))
    .map((log) => makeTodayMenuItem({
      id: `past-${log.id}`,
      type: "過去問見直し",
      title: [log.examRound, log.subject, log.questionNo].filter(Boolean).join(" / ") || "過去問ログ",
      description: [log.relatedUnitTitle, log.topic, log.scoreType].filter(Boolean).join(" / "),
    reason: todayLogReason(log),
      priority: log.result === "×" || log.priority === "高" ? "高" : "中",
      priorityScore: resultScore(log.result) + (log.priority === "高" ? 18 : 0) + (log.retry ? 15 : 0) + (log.scoreType === "全正解のみ" ? 8 : 0),
      estimatedMinutes: 15,
      relatedUnitId: log.relatedUnitId,
      relatedLogId: log.id
    })).sort(compareTodayItems);
}

function buildTodayPracticalItems() {
  return state.practicalLogs
    .filter((log) => log.result === "×" || log.result === "△" || log.retry || log.priority === "高" || (log.weaknessTags || []).some((tag) => PRACTICAL_WEAKNESS_TAGS.includes(tag)))
    .map((log) => makeTodayMenuItem({
      id: `practical-${log.id}`,
      type: "実務見直し",
      title: [log.practicalType, log.relatedUnitTitle || log.questionRef].filter(Boolean).join(" / ") || "実務ログ",
      description: [log.mistakeField, log.calculationType, log.timeSpentMinutes ? `${log.timeSpentMinutes}分` : ""].filter(Boolean).join(" / "),
      reason: todayLogReason(log),
      priority: log.result === "×" || log.priority === "高" ? "高" : "中",
      priorityScore: resultScore(log.result) + (log.priority === "高" ? 18 : 0) + (log.retry ? 15 : 0) + ((log.weaknessTags || []).includes("時間不足") ? 10 : 0),
      estimatedMinutes: 15,
      relatedUnitId: log.relatedUnitId,
      relatedLogId: log.id
    })).sort(compareTodayItems);
}

function buildTodayWeaknessItems() {
  return buildWeaknessRanking().slice(0, 5).map((item) => makeTodayMenuItem({
    id: `weakness-${item.tag}`,
    type: "弱点確認",
    title: item.tag,
    description: `関連 ${item.count}件 / 単元${item.unitCount}・演習${item.practiceLogCount}・過去問${item.pastExamLogCount}・実務${item.practicalLogCount}`,
    reason: "弱点タグの出現回数が多い",
    priority: item.count >= 3 ? "高" : "中",
    priorityScore: item.count * 8,
    estimatedMinutes: 10
  }));
}

function makeTodayMenuItem(item) {
  return {
    id: "",
    type: "",
    title: "",
    description: "",
    reason: "",
    priority: "中",
    priorityScore: 0,
    estimatedMinutes: 10,
    relatedUnitId: "",
    relatedLogId: "",
    ...item
  };
}

function uniqueTodayItems(items) {
  const map = new Map();
  items.forEach((item) => {
    if (!item?.id || map.has(item.id)) return;
    map.set(item.id, item);
  });
  return [...map.values()].sort(compareTodayItems);
}

function compareTodayItems(a, b) {
  const priorityOrder = { "最優先": 4, "高": 3, "中": 2, "低": 1 };
  return (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0) ||
    (b.priorityScore || 0) - (a.priorityScore || 0) ||
    a.title.localeCompare(b.title, "ja");
}

function resultScore(result) {
  if (result === "×") return 35;
  if (result === "△") return 20;
  return 0;
}

function todayLogReason(log) {
  return [
    log.result === "×" ? "結果×" : "",
    log.result === "△" ? "結果△" : "",
    log.retry ? "再演習対象" : "",
    log.priority === "高" ? "優先度高" : "",
    log.confidence === "分からなかった" ? "自信度:分からなかった" : "",
    log.confidence === "当てた" ? "自信度:当てた" : "",
    log.scoreType === "全正解のみ" && log.result !== "○" ? "全正解のみ問題で失点" : "",
    (log.weaknessTags || []).includes("時間不足") ? "時間不足タグあり" : "",
    (log.weaknessTags || []).some((tag) => PRACTICAL_WEAKNESS_TAGS.includes(tag)) ? "実務用弱点タグあり" : ""
  ].filter(Boolean).join(" / ") || "見直し対象";
}

function daysSince(dateString) {
  if (!dateString) return 999;
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return 999;
  return Math.floor((Date.now() - date.getTime()) / 86400000);
}

function isTodayItemCompleted(itemId) {
  const plan = getTodayPlan();
  return plan.completedItems.some((item) => item.id === itemId);
}

function getTodayCompletion(menu = state.todayMenu || generateTodayMenu(getTodayPlan().selectedDuration)) {
  const total = menu.recommended.length;
  const completed = menu.recommended.filter((item) => isTodayItemCompleted(item.id)).length;
  const rate = total ? Math.round((completed / total) * 100) : 0;
  return { total, completed, rate };
}

function render() {
  state.todayMenu = generateTodayMenu(getTodayPlan().selectedDuration);
  renderDashboard();
  renderTodayView();
  renderLearningView();
  renderFilters();
  renderUnitList();
  renderPracticeView();
  renderPastExamView();
  renderPracticalView();
  renderAiView();
  renderAnalysisView();
  renderReviewList();
  renderSettings();
  if (state.activeUnitId) {
    renderUnitDetail();
  }
  if (state.activeLessonId) {
    renderLessonDetail();
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

  renderHomeTodaySummary();
  renderHomeCurriculumSummary();

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

  const practicalStats = getPracticalStats(state.practicalLogs);
  const recentPracticalDate = getRecentPracticalDate();
  const recentWrongPracticalLogs = [...state.practicalLogs]
    .filter((log) => log.result === "×")
    .sort(comparePracticalLogs)
    .slice(0, 3);
  const practicalHost = document.querySelector("#homePracticalSummary");
  if (practicalHost) {
    practicalHost.innerHTML = `
      <dl class="summary-list">
        <div><dt>総実務ログ数</dt><dd>${practicalStats.total}</dd></div>
        <div><dt>実務正答率</dt><dd>${dataAwareAccuracy(practicalStats)}</dd></div>
        <div><dt>実務系再演習対象数</dt><dd>${practicalStats.retry}</dd></div>
        <div><dt>最近の実務学習日</dt><dd>${escapeHtml(recentPracticalDate || "未記録")}</dd></div>
      </dl>
      <div class="mini-list">
        <p class="muted mini-list-title">直近の×実務ログ</p>
        ${recentWrongPracticalLogs.length ? recentWrongPracticalLogs.map((log) => `
          <div class="mini-item">
            <span>${escapeHtml(log.studiedAt || "日付なし")} / ${escapeHtml(log.practicalType || "未設定")} / ${escapeHtml(log.relatedUnitTitle || "単元未設定")}</span>
            <small>${escapeHtml([log.questionRef, log.mistakeField].filter(Boolean).join(" / ") || "参照未設定")}</small>
          </div>
        `).join("") : `<p class="muted">×の実務ログはありません。</p>`}
      </div>
    `;
  }

  const recentAi = [...state.aiAnalyses]
    .sort(compareAiAnalyses)
    .slice(0, 3);
  document.querySelector("#homeAiHistory").innerHTML = recentAi.length
    ? recentAi.map((item) => `
      <div class="mini-item">
        <span>${escapeHtml(formatDateTime(item.createdAt))} / ${escapeHtml(item.promptType || "種別なし")}</span>
        <small>${escapeHtml(item.targetTitle || "対象なし")}</small>
      </div>
    `).join("")
    : `<p class="muted">AIプロンプト生成履歴はまだありません。</p>`;

  const analysis = buildWeaknessAnalysis();
  const priorityRisks = analysis.unitRisks.filter((item) => item.risk.label === "最優先改善").slice(0, 3);
  const topTags = analysis.weaknessRanking.slice(0, 3);
  const subjectSummary = analysis.subjects
    .filter((item) => item.unitCount || item.practiceStats.total || item.pastStats.total)
    .map((item) => `${item.subject}:${item.risk.label}`)
    .join(" / ");
  document.querySelector("#homeRiskSummary").innerHTML = `
    <div class="risk-summary-card risk-${analysis.summary.risk.className}">
      <div>
        <p class="eyebrow">総合危険度</p>
        <strong>${escapeHtml(analysis.summary.risk.label)}</strong>
        ${analysis.summary.risk.dataShortage ? `<span class="data-note">データ不足</span>` : ""}
      </div>
      <button class="primary-button" type="button" data-open-analysis>弱点分析を見る</button>
    </div>
    <div class="mini-list">
      <p class="muted mini-list-title">最優先改善単元 上位3件</p>
      ${priorityRisks.length ? priorityRisks.map((item) => `
        <button class="compact-item ghost-button" type="button" data-open-unit="${escapeAttribute(item.unit.id)}">
          <span>${escapeHtml(item.unit.title)}</span>
          <span class="badge ${item.risk.className}">${item.score}</span>
        </button>
      `).join("") : `<p class="muted">最優先改善単元はまだありません。</p>`}
      <p class="muted mini-list-title">弱点タグ上位3件</p>
      <p>${escapeHtml(topTags.map((item) => `${item.tag}(${item.count})`).join(" / ") || "未記録")}</p>
      <p class="muted mini-list-title">科目別危険度</p>
      <p>${escapeHtml(subjectSummary || "未記録")}</p>
    </div>
  `;
}

function renderHomeTodaySummary() {
  const menu = state.todayMenu || generateTodayMenu(getTodayPlan().selectedDuration);
  const completion = getTodayCompletion(menu);
  const topItems = menu.priorityItems.slice(0, 3);
  document.querySelector("#homeTodaySummary").innerHTML = `
    <dl class="summary-list">
      <div><dt>選択時間</dt><dd>${escapeHtml(menu.duration)}</dd></div>
      <div><dt>メニュー数</dt><dd>${completion.total}</dd></div>
      <div><dt>完了数</dt><dd>${completion.completed}</dd></div>
      <div><dt>完了率</dt><dd>${completion.rate}%</dd></div>
    </dl>
    <div class="mini-list">
      <p class="muted mini-list-title">最優先項目 上位3件</p>
      ${topItems.length ? topItems.map((item) => `
        <div class="mini-item">
          <span>${escapeHtml(item.title)}</span>
          <small>${escapeHtml(item.reason || item.type)}</small>
        </div>
      `).join("") : `<p class="muted">最優先項目はありません。</p>`}
    </div>
    <div class="form-actions">
      <button class="primary-button" type="button" data-open-today>今日のメニューを見る</button>
    </div>
  `;
}

function renderHomeCurriculumSummary() {
  const stats = getCurriculumStats();
  const next = stats.nextLesson;
  document.querySelector("#homeCurriculumSummary").innerHTML = `
    <dl class="summary-list">
      <div><dt>総レッスン数</dt><dd>${stats.total}</dd></div>
      <div><dt>完了レッスン数</dt><dd>${stats.completed}</dd></div>
      <div><dt>進捗率</dt><dd>${stats.rate}%</dd></div>
      <div><dt>復習対象</dt><dd>${stats.reviewCount}</dd></div>
    </dl>
    <div class="progress-bar" aria-label="カリキュラム進捗"><span style="width:${stats.rate}%"></span></div>
    <div class="mini-list">
      <p class="muted mini-list-title">次に学ぶレッスン</p>
      ${next ? `
        <button class="compact-item ghost-button" type="button" data-open-lesson="${escapeAttribute(next.lesson.id)}">
          <span>${escapeHtml(next.lesson.title)}</span>
          <span>${escapeHtml(next.lesson.subject)}</span>
        </button>
      ` : `<p class="muted">レッスン候補はありません。</p>`}
      <p class="muted mini-list-title">最近間違えた確認問題</p>
      ${stats.recentWrong.length ? stats.recentWrong.slice(0, 3).map((item) => `
        <div class="mini-item">
          <span>${escapeHtml(item.lesson.title)}</span>
          <small>${escapeHtml(item.question?.weaknessTag || "弱点タグなし")}</small>
        </div>
      `).join("") : `<p class="muted">確認問題の誤答はありません。</p>`}
    </div>
    <div class="form-actions">
      <button class="primary-button" type="button" data-open-learning>学習を始める</button>
    </div>
  `;
}

function renderTodayView() {
  const plan = getTodayPlan();
  const menu = state.todayMenu || generateTodayMenu(plan.selectedDuration);
  const completion = getTodayCompletion(menu);
  document.querySelector("#todaySummary").innerHTML = `
    <div class="today-date">${escapeHtml(formatJapaneseDate(menu.date))}</div>
    <div class="today-progress">
      <strong>${completion.completed} / ${completion.total} 完了</strong>
      <span>${completion.rate}%</span>
    </div>
    <div class="progress-bar" aria-label="今日の完了率"><span style="width:${completion.rate}%"></span></div>
    <dl class="summary-list">
      <div><dt>選択時間</dt><dd>${escapeHtml(menu.duration)}</dd></div>
      <div><dt>推定時間</dt><dd>${menu.recommended.reduce((sum, item) => sum + item.estimatedMinutes, 0)}分</dd></div>
      <div><dt>最優先復習</dt><dd>${menu.priorityItems.length}件</dd></div>
      <div><dt>レッスン</dt><dd>${menu.lessonItems.length}件</dd></div>
      <div><dt>ログ見直し</dt><dd>${menu.practiceItems.length + menu.pastExamItems.length + menu.practicalItems.length}件</dd></div>
    </dl>
  `;
  document.querySelector("#durationButtons").innerHTML = STUDY_DURATIONS.map((duration) => `
    <button class="duration-button ${duration === menu.duration ? "is-active" : ""}" type="button" data-duration="${escapeAttribute(duration)}">${escapeHtml(duration)}</button>
  `).join("");
  document.querySelector("#todayRecommendedMenu").innerHTML = menu.recommended.length
    ? menu.recommended.map(todayMenuCard).join("")
    : `<div class="empty-state"><p class="muted">今日のメニュー候補はまだありません。単元やログを記録すると自動生成されます。</p></div>`;
  document.querySelector("#todayPriorityMenu").innerHTML = menu.priorityItems.length
    ? menu.priorityItems.slice(0, 8).map((item) => todayMenuCard(item, true)).join("")
    : `<div class="empty-state"><p class="muted">最優先復習はありません。</p></div>`;
  document.querySelector("#todayPracticeMenu").innerHTML = renderTodayMiniItems(menu.practiceItems);
  document.querySelector("#todayPastExamMenu").innerHTML = renderTodayMiniItems(menu.pastExamItems);
  document.querySelector("#todayPracticalMenu").innerHTML = renderTodayMiniItems(menu.practicalItems);
  document.querySelector("#todayCompletion").innerHTML = `
    <div class="today-progress">
      <strong>${completion.completed} / ${completion.total} 完了</strong>
      <span>${completion.rate}%</span>
    </div>
    <p class="muted">チェックした項目は今日のstudyPlanに保存されます。</p>
  `;
  document.querySelector("#todayMemo").value = plan.memo || "";
}

function todayMenuCard(item, compact = false) {
  const checked = isTodayItemCompleted(item.id) ? "checked" : "";
  return `
    <article class="today-menu-card ${compact ? "is-compact" : ""}">
      <label class="today-check">
        <input type="checkbox" data-today-complete="${escapeAttribute(item.id)}" ${checked}>
        <span>
          <span class="badge ${priorityClass(item.priority)}">${escapeHtml(item.priority)}</span>
          <strong>${escapeHtml(item.title)}</strong>
        </span>
      </label>
      <p>${escapeHtml(item.description || item.type)}</p>
      <dl class="review-facts">
        <div><dt>種別</dt><dd>${escapeHtml(item.type)}</dd></div>
        <div><dt>理由</dt><dd>${escapeHtml(item.reason || "今日の候補")}</dd></div>
        <div><dt>危険度</dt><dd>${escapeHtml(item.priority)}</dd></div>
        <div><dt>推定時間</dt><dd>${item.estimatedMinutes}分</dd></div>
      </dl>
      <div class="card-actions">
        ${item.relatedLessonId ? `<button class="primary-button" type="button" data-open-lesson="${escapeAttribute(item.relatedLessonId)}">開く</button>` : ""}
        ${item.relatedUnitId ? `<button class="ghost-button" type="button" data-open-unit="${escapeAttribute(item.relatedUnitId)}">開く</button>` : ""}
        ${item.relatedLogId ? `<button class="ghost-button" type="button" data-open-today-log="${escapeAttribute(item.type)}:${escapeAttribute(item.relatedLogId)}">ログを開く</button>` : ""}
      </div>
    </article>
  `;
}

function renderTodayMiniItems(items) {
  return items.length ? items.map((item) => `
    <div class="mini-item">
      <span>${escapeHtml(item.title)}</span>
      <small>${escapeHtml(`${item.reason} / ${item.estimatedMinutes}分`)}</small>
    </div>
  `).join("") : `<p class="muted">対象はありません。</p>`;
}

function priorityClass(priority) {
  if (priority === "最優先" || priority === "高") return "priority";
  if (priority === "中") return "normal";
  return "ok";
}

function formatJapaneseDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateString;
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日（${weekdays[date.getDay()]}）`;
}

function renderLearningView() {
  const listArea = document.querySelector("#learningListArea");
  const detailArea = document.querySelector("#lessonDetailArea");
  const backButton = document.querySelector("#backToLearningButton");
  const showingDetail = Boolean(state.activeLessonId);
  listArea.classList.toggle("is-hidden", showingDetail);
  detailArea.classList.toggle("is-hidden", !showingDetail);
  backButton.classList.toggle("is-hidden", !showingDetail);
  if (showingDetail) {
    renderLessonDetail();
    return;
  }

  const recommended = getRecommendedLesson();
  document.querySelector("#recommendedLesson").innerHTML = recommended
    ? renderRecommendedLesson(recommended)
    : `<p class="muted">おすすめレッスンはありません。</p>`;

  document.querySelector("#curriculumList").innerHTML = CURRICULUM_COURSES
    .sort((a, b) => a.order - b.order)
    .map(renderCourseCard)
    .join("");

  document.querySelector("#lessonList").innerHTML = CURRICULUM_COURSES
    .sort((a, b) => a.order - b.order)
    .map((course) => `
      <div class="lesson-course-block">
        <h3>${escapeHtml(course.title)}</h3>
        ${getLessonsByCourse(course.id).map(renderLessonListCard).join("")}
      </div>
    `).join("");

  const stats = getCurriculumStats();
  document.querySelector("#learningProgressSummary").innerHTML = `
    <dl class="summary-list">
      <div><dt>総レッスン</dt><dd>${stats.total}</dd></div>
      <div><dt>完了</dt><dd>${stats.completed}</dd></div>
      <div><dt>進捗率</dt><dd>${stats.rate}%</dd></div>
      <div><dt>復習対象</dt><dd>${stats.reviewCount}</dd></div>
      <div><dt>A/B/C/未判定</dt><dd>${stats.understandingCounts.A || 0}/${stats.understandingCounts.B || 0}/${stats.understandingCounts.C || 0}/${stats.understandingCounts["未判定"] || 0}</dd></div>
      <div><dt>学習中</dt><dd>${stats.statusCounts["学習中"] || 0}</dd></div>
    </dl>
    <div class="progress-bar"><span style="width:${stats.rate}%"></span></div>
  `;
  const review = getReviewLessons().slice(0, 6);
  document.querySelector("#learningReviewLessons").innerHTML = review.length
    ? review.map(({ lesson, progress, reason }) => `
      <button class="compact-item ghost-button" type="button" data-open-lesson="${escapeAttribute(lesson.id)}">
        <span>${escapeHtml(lesson.title)}</span>
        <span>${escapeHtml(progress.understanding)} / ${escapeHtml(reason)}</span>
      </button>
    `).join("")
    : `<p class="muted">復習対象レッスンはありません。</p>`;
}

function renderRecommendedLesson(item) {
  const progress = item.progress;
  return `
    <article class="recommended-lesson-card">
      <div>
        <p class="eyebrow">${escapeHtml(item.type || "おすすめ")}</p>
        <h3>${escapeHtml(item.lesson.title)}</h3>
        <p>${escapeHtml(item.lesson.subject)} / ${item.lesson.estimatedMinutes}分 / 理解度 ${escapeHtml(progress.understanding)}</p>
        <p class="muted">${escapeHtml(item.reason || getLessonReviewReason(item.lesson.id))}</p>
      </div>
      <button class="primary-button" type="button" data-open-lesson="${escapeAttribute(item.lesson.id)}">レッスン開始</button>
    </article>
  `;
}

function renderCourseCard(course) {
  const lessons = getLessonsByCourse(course.id);
  const completed = lessons.filter((lesson) => getLessonProgress(lesson.id).status === "完了").length;
  const rate = lessons.length ? Math.round((completed / lessons.length) * 100) : 0;
  return `
    <article class="course-card">
      <div>
        <p class="eyebrow">${escapeHtml(course.subject)}</p>
        <h3>${escapeHtml(course.title)}</h3>
        <p>${escapeHtml(course.description)}</p>
      </div>
      <dl class="review-facts">
        <div><dt>レッスン数</dt><dd>${lessons.length}</dd></div>
        <div><dt>完了</dt><dd>${completed}</dd></div>
        <div><dt>進捗</dt><dd>${rate}%</dd></div>
      </dl>
      <div class="progress-bar"><span style="width:${rate}%"></span></div>
    </article>
  `;
}

function renderLessonListCard(lesson) {
  const progress = getLessonProgress(lesson.id);
  const correct = lesson.questions.filter((question) => progress.questionResults.some((result) => result.questionId === question.id && result.correct)).length;
  return `
    <article class="lesson-card">
      <div>
        <p class="eyebrow">${escapeHtml(lesson.subject)} / ${escapeHtml(lesson.level)}</p>
        <h4>${escapeHtml(lesson.title)}</h4>
        <p>${escapeHtml(lesson.goal)}</p>
        <div class="badge-row">
          <span class="badge">${escapeHtml(progress.status)}</span>
          <span class="badge ${progress.understanding === "C" ? "priority" : progress.understanding === "B" ? "normal" : "ok"}">理解度 ${escapeHtml(progress.understanding)}</span>
          ${progress.reviewNeeded ? `<span class="badge priority">復習対象</span>` : ""}
        </div>
      </div>
      <dl class="review-facts compact">
        <div><dt>目安</dt><dd>${lesson.estimatedMinutes}分</dd></div>
        <div><dt>確認問題</dt><dd>${correct}/${lesson.questions.length}</dd></div>
      </dl>
      <div class="card-actions">
        <button class="primary-button" type="button" data-open-lesson="${escapeAttribute(lesson.id)}">レッスン開始</button>
      </div>
    </article>
  `;
}

function renderLessonDetail() {
  const lesson = getLessonById(state.activeLessonId);
  const detail = document.querySelector("#lessonDetailArea");
  if (!lesson) {
    detail.innerHTML = `<div class="empty-state"><p class="muted">レッスンが見つかりません。</p></div>`;
    return;
  }
  const progress = getLessonProgress(lesson.id);
  const nextLesson = getNextLesson(lesson.id);
  const correct = lesson.questions.filter((question) => progress.questionResults.some((result) => result.questionId === question.id && result.correct)).length;
  detail.innerHTML = `
    <div class="lesson-reader">
      <aside class="lesson-reader-side">
        <section class="panel">
          <div class="panel-heading"><h3>レッスン情報</h3></div>
          <div class="compact-list">
            <p class="eyebrow">${escapeHtml(lesson.subject)}</p>
            <h3>${escapeHtml(lesson.title)}</h3>
            <dl class="summary-list">
              <div><dt>目安時間</dt><dd>${lesson.estimatedMinutes}分</dd></div>
              <div><dt>状態</dt><dd>${escapeHtml(progress.status)}</dd></div>
              <div><dt>理解度</dt><dd>${escapeHtml(progress.understanding)}</dd></div>
              <div><dt>正答</dt><dd>${correct}/${lesson.questions.length}</dd></div>
            </dl>
            <div class="form-actions">
              <button class="primary-button" type="button" data-complete-lesson="${escapeAttribute(lesson.id)}">レッスン完了</button>
              <button class="ghost-button" type="button" data-review-lesson="${escapeAttribute(lesson.id)}">復習に回す</button>
              <button class="ghost-button" type="button" data-ai-lesson="${escapeAttribute(lesson.id)}">このレッスンをAIに質問</button>
              ${nextLesson ? `<button class="ghost-button" type="button" data-open-lesson="${escapeAttribute(nextLesson.id)}">次のレッスンへ進む</button>` : ""}
            </div>
          </div>
        </section>
      </aside>
      <div class="lesson-reader-main">
        <section class="panel lesson-section">
          <p class="eyebrow">${escapeHtml(lesson.subject)} / ${escapeHtml(lesson.level)}</p>
          <h3>${escapeHtml(lesson.title)}</h3>
          <h4>学習目標</h4>
          <p>${escapeHtml(lesson.goal)}</p>
          <h4>導入</h4>
          <p>${escapeHtml(lesson.intro)}</p>
          <h4>講義本文</h4>
          ${lesson.lecture.split("\n").filter(Boolean).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </section>
        ${renderLessonListSection("重要ポイント", lesson.keyPoints, "key-point-list")}
        ${renderLessonListSection("混同ポイント", lesson.confusingPoints, "confusing-list")}
        ${renderLessonListSection("引っかけ注意", lesson.traps, "trap-list")}
        ${renderLessonListSection("試験で狙われる表現", lesson.examTips, "exam-tip-list")}
        ${renderLessonListSection("罰則・処分・手続の区別メモ", lesson.penaltyTips, "penalty-list")}
        <section class="panel lesson-section"><h4>ミニまとめ</h4><p>${escapeHtml(lesson.miniSummary)}</p></section>
        <section class="panel lesson-section">
          <div class="panel-heading flush"><h3>確認問題</h3></div>
          <div class="question-list">
            ${lesson.questions.map((question, index) => renderLessonQuestion(lesson, question, index + 1)).join("")}
          </div>
          <div class="understanding-box">
            <label>
              理解度判定
              <select data-lesson-understanding="${escapeAttribute(lesson.id)}">
                ${CURRICULUM_UNDERSTANDING.map((value) => `<option value="${escapeAttribute(value)}" ${value === progress.understanding ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
              </select>
            </label>
            <p class="muted">3問正解:A / 2問正解:B / 0〜1問正解:C。B/Cは自動で復習対象になります。</p>
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderLessonListSection(title, items, className) {
  return `
    <section class="panel lesson-section ${className}">
      <h4>${escapeHtml(title)}</h4>
      <ul class="lesson-point-list">
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderLessonQuestion(lesson, question, index) {
  const result = getLessonQuestionResult(lesson.id, question.id);
  return `
    <article class="question-card">
      <div class="question-head">
        <span class="badge">問${index}</span>
        ${result ? `<span class="badge ${result.correct ? "ok" : "priority"}">${result.correct ? "正解" : "不正解"}</span>` : `<span class="badge">未回答</span>`}
      </div>
      <p class="question-text">${escapeHtml(question.question)}</p>
      <div class="choice-list">
        ${question.choices.map((choice) => `
          <label class="choice-card">
            <input type="radio" name="${escapeAttribute(lesson.id)}-${escapeAttribute(question.id)}" value="${escapeAttribute(choice)}" ${result?.userAnswer === choice ? "checked" : ""}>
            <span>${escapeHtml(choice)}</span>
          </label>
        `).join("")}
      </div>
      <div class="card-actions">
        <button class="primary-button" type="button" data-grade-question="${escapeAttribute(lesson.id)}:${escapeAttribute(question.id)}">採点する</button>
      </div>
      ${result ? `
        <div class="answer-box ${result.correct ? "is-correct" : "is-wrong"}">
          <strong>${result.correct ? "正解" : "不正解"}</strong>
          <dl class="analysis-facts">
            <div><dt>正答</dt><dd>${escapeHtml(question.answer)}</dd></div>
            <div><dt>あなたの回答</dt><dd>${escapeHtml(result.userAnswer)}</dd></div>
            <div><dt>関連弱点タグ</dt><dd>${escapeHtml(question.weaknessTag)}</dd></div>
          </dl>
          <p>${escapeHtml(question.explanation)}</p>
          <p class="trap-note">${escapeHtml(question.trapExplanation)}</p>
        </div>
      ` : ""}
    </article>
  `;
}

function getNextLesson(lessonId) {
  const index = CURRICULUM_LESSONS.findIndex((lesson) => lesson.id === lessonId);
  return index >= 0 ? CURRICULUM_LESSONS[index + 1] : null;
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
  const accuracyValue = denominator ? (correct / denominator) * 100 : null;
  const accuracy = accuracyValue === null ? "0.0%" : `${accuracyValue.toFixed(1)}%`;
  return { total: logs.length, correct, partial, wrong, pending, retry, denominator, accuracyValue, accuracy };
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
  const accuracyValue = denominator ? (correct / denominator) * 100 : null;
  const accuracy = accuracyValue === null ? "0.0%" : `${accuracyValue.toFixed(1)}%`;
  const subjects = {};
  PAST_EXAM_SUBJECTS.forEach((subject) => {
    const subjectLogs = logs.filter((log) => log.subject === subject);
    const subjectCorrect = subjectLogs.filter((log) => log.result === "○").length;
    const subjectPartial = subjectLogs.filter((log) => log.result === "△").length;
    const subjectWrong = subjectLogs.filter((log) => log.result === "×").length;
    const subjectDenominator = subjectCorrect + subjectPartial + subjectWrong;
    subjects[subject] = {
      total: subjectLogs.length,
      denominator: subjectDenominator,
      accuracyValue: subjectDenominator ? (subjectCorrect / subjectDenominator) * 100 : null,
      accuracy: subjectDenominator ? `${((subjectCorrect / subjectDenominator) * 100).toFixed(1)}%` : "0.0%"
    };
  });
  return { total: logs.length, correct, partial, wrong, pending, retry, denominator, accuracyValue, accuracy, subjects };
}

function getRecentPastExamDate() {
  return state.pastExamLogs
    .map((log) => log.studiedAt)
    .filter(Boolean)
    .sort((a, b) => b.localeCompare(a))[0];
}

function renderPracticalView() {
  renderPracticalStats();
  renderPracticalWeaknessSummary();
  renderPracticalForm();
  renderPracticalFilters();
  renderPracticalLogList();
}

function renderPracticalStats() {
  const stats = getPracticalStats(state.practicalLogs);
  const typeLines = stats.byType.length
    ? stats.byType.slice(0, 6).map((item) => `${item.label} ${item.total}件 / ${item.accuracy}`).join(" / ")
    : "データ不足";
  const calcLines = stats.byCalculationType.length
    ? stats.byCalculationType.slice(0, 6).map((item) => `${item.label} ${item.accuracy}`).join(" / ")
    : "データ不足";
  const rows = [
    ["総実務ログ数", stats.total],
    ["○", stats.correct],
    ["△", stats.partial],
    ["×", stats.wrong],
    ["未判定", stats.pending],
    ["正答率", dataAwareAccuracy(stats)],
    ["再演習対象", stats.retry],
    ["平均所要時間", stats.averageTime],
    ["実務区分別", typeLines],
    ["計算類型別", calcLines]
  ];
  document.querySelector("#practicalStats").innerHTML = rows
    .map(([label, value]) => `<div class="stat-card"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`)
    .join("");
}

function getPracticalStats(logs) {
  const correct = logs.filter((log) => log.result === "○").length;
  const partial = logs.filter((log) => log.result === "△").length;
  const wrong = logs.filter((log) => log.result === "×").length;
  const pending = logs.filter((log) => log.result === "未判定").length;
  const retry = logs.filter((log) => log.retry).length;
  const denominator = correct + partial + wrong;
  const accuracyValue = denominator ? (correct / denominator) * 100 : null;
  const numericTimes = logs.map((log) => Number(log.timeSpentMinutes)).filter((value) => Number.isFinite(value) && value > 0);
  const averageTime = numericTimes.length ? `${(numericTimes.reduce((sum, value) => sum + value, 0) / numericTimes.length).toFixed(1)}分` : "データ不足";
  return {
    total: logs.length,
    correct,
    partial,
    wrong,
    pending,
    retry,
    denominator,
    accuracyValue,
    accuracy: accuracyValue === null ? "データ不足" : `${accuracyValue.toFixed(1)}%`,
    averageTime,
    byType: groupAccuracy(logs, "practicalType", "未判定"),
    byCalculationType: groupAccuracy(logs.filter((log) => log.calculationType && log.calculationType !== "未設定"), "calculationType", "未判定")
  };
}

function getRecentPracticalDate() {
  return state.practicalLogs
    .map((log) => log.studiedAt)
    .filter(Boolean)
    .sort((a, b) => b.localeCompare(a))[0];
}

function buildPracticalWeaknessSummary() {
  const logs = state.practicalLogs;
  return {
    practicalTagRanking: rankFromValues(logs.flatMap((log) => (log.weaknessTags || []).filter((tag) => PRACTICAL_WEAKNESS_TAGS.includes(tag)))),
    mistakeFieldRanking: rankFromValues(logs.map((log) => log.mistakeField).filter(Boolean)),
    calculationMistakes: groupMistakesBy(logs, "calculationType"),
    practicalWrongByType: rankFromValues(logs.filter((log) => log.result === "×").map((log) => log.practicalType).filter(Boolean)),
    timeShortageCount: logs.filter((log) => (log.weaknessTags || []).includes("時間不足")).length,
    retryByType: rankFromValues(logs.filter((log) => log.retry).map((log) => log.practicalType).filter(Boolean))
  };
}

function rankFromValues(values) {
  return Object.entries(values.reduce((acc, value) => {
    const key = String(value || "").trim();
    if (key && key !== "未設定") acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {})).map(([label, count]) => ({ label, count })).sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, "ja"));
}

function groupMistakesBy(logs, key) {
  return rankFromValues(logs.filter((log) => log.result === "×" || log.result === "△" || log.mistakeField || log.mistakeReason).map((log) => log[key]));
}

function renderPracticalWeaknessSummary() {
  const summary = buildPracticalWeaknessSummary();
  const hasData = summary.practicalTagRanking.length ||
    summary.mistakeFieldRanking.length ||
    summary.calculationMistakes.length ||
    summary.practicalWrongByType.length ||
    summary.timeShortageCount ||
    summary.retryByType.length;
  document.querySelector("#practicalWeaknessSummary").innerHTML = hasData ? `
    <div class="analysis-card-grid three-col">
      ${practicalRankingCard("実務用弱点タグ", summary.practicalTagRanking)}
      ${practicalRankingCard("ミスした欄・項目", summary.mistakeFieldRanking)}
      ${practicalRankingCard("計算類型別ミス数", summary.calculationMistakes)}
      ${practicalRankingCard("実務区分別×数", summary.practicalWrongByType)}
      <article class="analysis-card"><h4>時間不足タグ件数</h4><strong>${summary.timeShortageCount}</strong></article>
      ${practicalRankingCard("再演習対象の多い実務区分", summary.retryByType)}
    </div>
  ` : `<p class="muted">実務弱点データはまだ記録されていません。</p>`;
}

function practicalRankingCard(title, items) {
  return `
    <article class="analysis-card">
      <h4>${escapeHtml(title)}</h4>
      ${items.length ? `
        <div class="mini-list">
          ${items.slice(0, 5).map((item) => `
            <div class="mini-item">
              <span>${escapeHtml(item.label)}</span>
              <small>${item.count}件</small>
            </div>
          `).join("")}
        </div>
      ` : `<p class="muted">データ不足</p>`}
    </article>
  `;
}

function renderLogFieldset(fieldset, index, renderField) {
  const body = `
    <fieldset class="practice-fieldset ${index > 0 ? "is-secondary" : ""}">
      <legend>${escapeHtml(fieldset.title)}</legend>
      <div class="form-grid">
        ${fieldset.fields.map((field) => renderField(field)).join("")}
      </div>
    </fieldset>
  `;
  if (index === 0) return body;
  return `
    <details class="log-detail-fields">
      <summary>${escapeHtml(fieldset.title)}を開く</summary>
      ${body}
    </details>
  `;
}

function renderPracticalForm() {
  const editingLog = state.practicalLogs.find((log) => log.id === state.editingPracticalLogId);
  const log = editingLog || { ...blankPracticalLog, studiedAt: todayString() };
  document.querySelector("#practicalFormTitle").textContent = editingLog ? "実務ログを編集" : "実務ログを追加";
  document.querySelector("#practicalLogForm").innerHTML = `
    ${practicalFieldsets.map((fieldset, index) => renderLogFieldset(fieldset, index, (field) => renderPracticalField(field, log))).join("")}
    <div class="form-actions">
      <button class="primary-button" type="submit">${editingLog ? "実務ログを更新" : "実務ログを保存"}</button>
      ${editingLog ? `<button id="cancelPracticalEditButton" class="ghost-button" type="button">キャンセル</button>` : ""}
    </div>
  `;
  document.querySelector("#practicalFormMessage").textContent = state.practicalFormMessage;
}

function renderPracticalField(field, log) {
  if (field === "studiedAt") return practicalInput(field, log[field], "date");
  if (field === "practicalType") return practicalSelect(field, uniqueOptions(PRACTICAL_TYPES, log[field]), log[field]);
  if (field === "sourceType") return practicalSelect(field, uniqueOptions(PRACTICAL_SOURCE_TYPES, log[field]), log[field]);
  if (field === "result") return practicalSelect(field, PRACTICE_RESULTS, log[field]);
  if (field === "confidence") return practicalSelect(field, PRACTICE_CONFIDENCE, log[field]);
  if (field === "declarationType") return practicalSelect(field, uniqueOptions(DECLARATION_TYPES, log[field]), log[field]);
  if (field === "calculationType") return practicalSelect(field, uniqueOptions(CALCULATION_TYPES, log[field]), log[field]);
  if (field === "priority") return practicalSelect(field, PRACTICAL_PRIORITIES, log[field]);
  if (field === "relatedUnitId") {
    const sortedUnits = [...state.units].sort((a, b) => {
      const aPractical = a.subject === "通関実務" ? 0 : 1;
      const bPractical = b.subject === "通関実務" ? 0 : 1;
      return aPractical - bPractical || a.title.localeCompare(b.title, "ja");
    });
    const options = [{ value: "", label: "未設定" }, ...sortedUnits.map((unit) => ({ value: unit.id, label: `${unit.subject} / ${unit.title}` }))];
    return `
      <label class="field-wide">
        ${practicalFieldLabels[field]}
        <select name="${field}">
          ${options.map((option) => `<option value="${escapeAttribute(option.value)}" ${option.value === log.relatedUnitId ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
      </label>
    `;
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
        ${practicalFieldLabels[field]}
      </label>
    `;
  }
  if (["classificationMemo", "calculationMemo", "invoiceMemo", "exchangeRateMemo", "taxRateMemo", "nacssMemo", "materialReadingMemo", "mistakeReason", "aiAnalysisMemo"].includes(field)) {
    return `
      <label class="field-wide">
        ${practicalFieldLabels[field]}
        <textarea name="${field}">${escapeHtml(log[field])}</textarea>
      </label>
    `;
  }
  return practicalInput(field, log[field], field === "timeSpentMinutes" ? "number" : "text");
}

function practicalInput(field, value, type = "text") {
  const extra = type === "number" ? ` min="0" step="1" inputmode="numeric"` : "";
  return `
    <label class="${type === "date" || type === "number" ? "" : "field-wide"}">
      ${practicalFieldLabels[field]}
      <input type="${type}" name="${field}" value="${escapeAttribute(value)}"${extra}>
    </label>
  `;
}

function practicalSelect(field, options, value) {
  return `
    <label>
      ${practicalFieldLabels[field]}
      <select name="${field}">
        ${options.map((option) => `<option value="${escapeAttribute(option)}" ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
      </select>
    </label>
  `;
}

function renderPracticalFilters() {
  const unitOptions = ["すべて", ...state.units.map((unit) => unit.id)];
  fillSelect("#practicalTypeFilter", ["すべて", ...PRACTICAL_TYPES], state.practicalFilters.practicalType);
  fillSelect("#practicalSourceTypeFilter", ["すべて", ...PRACTICAL_SOURCE_TYPES], state.practicalFilters.sourceType);
  fillSelect("#practicalResultFilter", ["すべて", ...PRACTICE_RESULTS], state.practicalFilters.result);
  fillSelect("#practicalConfidenceFilter", ["すべて", ...PRACTICE_CONFIDENCE], state.practicalFilters.confidence);
  fillUnitFilter("#practicalUnitFilter", unitOptions, state.practicalFilters.unitId);
  fillSelect("#practicalCalculationTypeFilter", ["すべて", ...CALCULATION_TYPES], state.practicalFilters.calculationType);
  fillSelect("#practicalWeaknessFilter", ["すべて", "弱点タグあり", "弱点タグなし"], state.practicalFilters.weakness);
  fillSelect("#practicalPriorityFilter", ["すべて", ...PRACTICAL_PRIORITIES], state.practicalFilters.priority);
  document.querySelector("#practicalSearchInput").value = state.practicalFilters.search;
  document.querySelector("#practicalRetryOnlyFilter").checked = state.practicalFilters.retryOnly;
  document.querySelector("#practicalDeclarationOnlyFilter").checked = state.practicalFilters.declarationOnly;
  document.querySelector("#practicalCalculationOnlyFilter").checked = state.practicalFilters.calculationOnly;
}

function filteredPracticalLogs() {
  const keyword = state.practicalFilters.search.trim().toLowerCase();
  return [...state.practicalLogs].filter((log) => {
    const hasWeakness = log.weaknessTags.length > 0;
    const isDeclaration = PRACTICAL_DECLARATION_TYPES.includes(log.practicalType);
    const isCalculation = PRACTICAL_CALCULATION_TYPES.includes(log.practicalType) || PRACTICAL_CALCULATION_TYPES.includes(`${log.calculationType}計算`) || ["課税価格", "関税額", "消費税", "地方消費税", "按分", "為替換算"].includes(log.calculationType);
    const haystack = [
      log.practicalType,
      log.sourceType,
      log.sourceName,
      log.relatedUnitTitle,
      log.questionRef,
      log.scoreMemo,
      log.classificationMemo,
      log.calculationMemo,
      log.invoiceMemo,
      log.exchangeRateMemo,
      log.taxRateMemo,
      log.nacssMemo,
      log.materialReadingMemo,
      log.mistakeField,
      log.mistakeReason,
      log.aiAnalysisMemo
    ].join(" ").toLowerCase();
    return (
      (!keyword || haystack.includes(keyword)) &&
      (state.practicalFilters.practicalType === "すべて" || log.practicalType === state.practicalFilters.practicalType) &&
      (state.practicalFilters.sourceType === "すべて" || log.sourceType === state.practicalFilters.sourceType) &&
      (state.practicalFilters.result === "すべて" || log.result === state.practicalFilters.result) &&
      (state.practicalFilters.confidence === "すべて" || log.confidence === state.practicalFilters.confidence) &&
      (state.practicalFilters.unitId === "すべて" || log.relatedUnitId === state.practicalFilters.unitId) &&
      (state.practicalFilters.calculationType === "すべて" || log.calculationType === state.practicalFilters.calculationType) &&
      (state.practicalFilters.priority === "すべて" || log.priority === state.practicalFilters.priority) &&
      (state.practicalFilters.weakness === "すべて" ||
        (state.practicalFilters.weakness === "弱点タグあり" && hasWeakness) ||
        (state.practicalFilters.weakness === "弱点タグなし" && !hasWeakness)) &&
      (!state.practicalFilters.retryOnly || log.retry) &&
      (!state.practicalFilters.declarationOnly || isDeclaration) &&
      (!state.practicalFilters.calculationOnly || isCalculation)
    );
  }).sort(comparePracticalLogs);
}

function renderPracticalLogList() {
  const logs = filteredPracticalLogs();
  document.querySelector("#practicalResultCount").textContent = `表示中：${logs.length} / ${state.practicalLogs.length}件`;
  document.querySelector("#practicalLogCards").innerHTML = logs.length
    ? logs.map((log) => practicalLogCard(log)).join("")
    : `<div class="panel empty-state"><p class="muted">条件に合う実務ログはありません。</p></div>`;
}

function comparePracticalLogs(a, b) {
  const dateDiff = (b.studiedAt || "").localeCompare(a.studiedAt || "");
  if (dateDiff) return dateDiff;
  return (b.updatedAt || b.createdAt || "").localeCompare(a.updatedAt || a.createdAt || "");
}

function practicalLogCard(log) {
  return `
    <article class="practice-log-card practical-log-card">
      <div class="practice-log-top">
        <div>
          <p class="eyebrow">${escapeHtml(log.studiedAt || "日付なし")} / ${escapeHtml(log.practicalType || "未設定")}</p>
          <h3>${escapeHtml(log.mistakeField || log.relatedUnitTitle || log.questionRef || "実務ログ")}</h3>
        </div>
        <span class="result-mark ${practiceResultClass(log.result)}">${escapeHtml(log.result)}</span>
      </div>
      <div class="card-meta">
        <span class="badge">${escapeHtml(log.sourceType || "未設定")}</span>
        <span class="badge">${escapeHtml(log.sourceName || "出典名なし")}</span>
        <span class="badge">${escapeHtml(log.relatedUnitTitle || "関連単元なし")}</span>
        <span class="badge">${escapeHtml(log.confidence || "未設定")}</span>
        <span class="badge">${escapeHtml(log.calculationType || "計算類型なし")}</span>
        <span class="badge">弱点 ${log.weaknessTags.length}</span>
        ${log.retry ? `<span class="badge priority">再演習対象</span>` : ""}
        ${log.priority === "高" ? `<span class="badge priority">優先度 高</span>` : `<span class="badge">優先度 ${escapeHtml(log.priority || "未設定")}</span>`}
      </div>
      <dl class="review-facts">
        <div><dt>問題番号・参照</dt><dd>${escapeHtml(log.questionRef || "未入力")}</dd></div>
        <div><dt>所要時間</dt><dd>${escapeHtml(log.timeSpentMinutes ? `${log.timeSpentMinutes}分` : "未入力")}</dd></div>
        <div><dt>ミスした欄・項目</dt><dd>${escapeHtml(log.mistakeField || "未入力")}</dd></div>
        <div><dt>ミス理由</dt><dd>${escapeHtml(truncateText(log.mistakeReason, 64) || "未入力")}</dd></div>
      </dl>
      <div class="card-actions">
        <button class="ghost-button" type="button" data-ai-practical-log="${escapeAttribute(log.id)}">AI解析</button>
        <button class="ghost-button" type="button" data-edit-practical-log="${escapeAttribute(log.id)}">編集</button>
        <button class="danger-button" type="button" data-delete-practical-log="${escapeAttribute(log.id)}">削除</button>
      </div>
    </article>
  `;
}

function renderAnalysisView() {
  const analysis = buildWeaknessAnalysis();
  document.querySelector("#analysisOverallSummary").innerHTML = renderAnalysisOverall(analysis);
  document.querySelector("#analysisSubjectCards").innerHTML = renderSubjectAnalysis(analysis.subjects);
  document.querySelector("#analysisWeaknessRanking").innerHTML = renderWeaknessRanking(analysis.weaknessRanking);
  document.querySelector("#analysisUnitRiskRanking").innerHTML = renderUnitRiskRanking(analysis.unitRisks);
  document.querySelector("#analysisPerformance").innerHTML = renderPerformanceAnalysis(analysis.performance);
  document.querySelector("#analysisPractical").innerHTML = renderPracticalAnalysis(analysis.performance.practical);
  document.querySelector("#analysisCurriculum").innerHTML = renderCurriculumAnalysis();
  document.querySelector("#analysisRetryTargets").innerHTML = renderRetryTargets(analysis.retryTargets);
  document.querySelector("#analysisAiUsage").innerHTML = renderAiUsage(analysis.aiUsage);
}

function renderCurriculumAnalysis() {
  const stats = getCurriculumStats();
  const subjectRows = ANALYSIS_SUBJECTS
    .filter((subject) => subject !== "未設定")
    .map((subject) => {
      const lessons = CURRICULUM_LESSONS.filter((lesson) => lesson.subject === subject);
      const completed = lessons.filter((lesson) => getLessonProgress(lesson.id).status === "完了").length;
      const cCount = lessons.filter((lesson) => getLessonProgress(lesson.id).understanding === "C").length;
      return `${subject}:${completed}/${lessons.length}完了 C${cCount}`;
    });
  const trapLessons = CURRICULUM_LESSONS.filter((lesson) => lesson.traps.some((trap) => /罰則|処分|許可|承認|届出|主体/.test(trap)));
  const trapAnswered = trapLessons.flatMap((lesson) => lesson.questions.map((question) => ({ lesson, question, result: getLessonQuestionResult(lesson.id, question.id) }))).filter((item) => item.result);
  const trapCorrect = trapAnswered.filter((item) => item.result.correct).length;
  const trapRate = trapAnswered.length ? `${Math.round((trapCorrect / trapAnswered.length) * 100)}%` : "未回答";
  const cLessons = CURRICULUM_LESSONS.filter((lesson) => getLessonProgress(lesson.id).understanding === "C");
  return `
    <div class="analysis-card-grid two-col">
      <article class="analysis-card">
        <h4>カリキュラム進捗</h4>
        <dl class="analysis-facts">
          <div><dt>総レッスン数</dt><dd>${stats.total}</dd></div>
          <div><dt>未着手/学習中/完了/復習中</dt><dd>${stats.statusCounts["未着手"] || 0}/${stats.statusCounts["学習中"] || 0}/${stats.statusCounts["完了"] || 0}/${stats.statusCounts["復習中"] || 0}</dd></div>
          <div><dt>A/B/C/未判定</dt><dd>${stats.understandingCounts.A || 0}/${stats.understandingCounts.B || 0}/${stats.understandingCounts.C || 0}/${stats.understandingCounts["未判定"] || 0}</dd></div>
          <div><dt>科目別レッスン進捗</dt><dd>${escapeHtml(subjectRows.join(" / "))}</dd></div>
          <div><dt>復習対象レッスン数</dt><dd>${stats.reviewCount}</dd></div>
          <div><dt>ひっかけ問題の正答率</dt><dd>${trapRate}</dd></div>
        </dl>
      </article>
      <article class="analysis-card">
        <h4>C判定レッスン一覧</h4>
        ${cLessons.length ? cLessons.map((lesson) => `
          <button class="compact-item ghost-button" type="button" data-open-lesson="${escapeAttribute(lesson.id)}">
            <span>${escapeHtml(lesson.title)}</span>
            <span>${escapeHtml(lesson.subject)}</span>
          </button>
        `).join("") : `<p class="muted">C判定レッスンはありません。</p>`}
      </article>
      <article class="analysis-card">
        <h4>罰則・処分系レッスンの理解度</h4>
        ${trapLessons.map((lesson) => {
          const progress = getLessonProgress(lesson.id);
          return `
            <button class="compact-item ghost-button" type="button" data-open-lesson="${escapeAttribute(lesson.id)}">
              <span>${escapeHtml(lesson.title)}</span>
              <span>${escapeHtml(progress.understanding)}</span>
            </button>
          `;
        }).join("")}
      </article>
    </div>
  `;
}

function buildWeaknessAnalysis() {
  const levelCounts = countLevels(state.units);
  const reviewUnits = state.units.filter((unit) => getReviewStatus(unit).weight > 0);
  const priorityReviewUnits = state.units.filter((unit) => getReviewStatus(unit).label === "最優先復習");
  const normalReviewUnits = state.units.filter((unit) => getReviewStatus(unit).label === "通常復習");
  const practiceStats = getPracticeStats(state.practiceLogs);
  const pastStats = getPastExamStats(state.pastExamLogs);
  const practicalStats = getPracticalStats(state.practicalLogs);
  const retryTargets = buildRetryTargets();
  const weaknessRanking = buildWeaknessRanking();
  const summary = {
    totalUnits: state.units.length,
    levelCounts,
    reviewCount: reviewUnits.length,
    priorityReviewCount: priorityReviewUnits.length,
    normalReviewCount: normalReviewUnits.length,
    practiceStats,
    pastStats,
    practicalStats,
    retryCount: retryTargets.units.length + retryTargets.practiceLogs.length + retryTargets.pastExamLogs.length + retryTargets.practicalLogs.length,
    weaknessTotal: weaknessRanking.reduce((sum, item) => sum + item.count, 0),
    aiCount: state.aiAnalyses.length
  };
  summary.risk = classifyLearningRisk({
    bCount: levelCounts.B || 0,
    cCount: levelCounts.C || 0,
    reviewCount: summary.reviewCount,
    priorityReviewCount: summary.priorityReviewCount,
    practiceStats,
    pastStats,
    practicalStats
  });
  return {
    summary,
    subjects: buildSubjectAnalyses(),
    weaknessRanking,
    unitRisks: state.units.map(scoreUnitRisk).sort(compareUnitRisks),
    dangerTopics: buildDangerTopics(),
    performance: buildPerformanceAnalysis(),
    retryTargets,
    aiUsage: buildAiUsage()
  };
}

function countLevels(units) {
  return LEVELS.reduce((acc, level) => {
    acc[level] = units.filter((unit) => unit.level === level).length;
    return acc;
  }, {});
}

function classifyLearningRisk({ bCount, cCount, reviewCount, priorityReviewCount, practiceStats, pastStats, practicalStats }) {
  const practiceAccuracy = practiceStats.accuracyValue;
  const pastAccuracy = pastStats.accuracyValue;
  const practicalAccuracy = practicalStats?.accuracyValue;
  const hasPracticeData = practiceStats.denominator > 0;
  const hasPastData = pastStats.denominator > 0;
  const hasPracticalData = practicalStats?.denominator > 0;
  let label = "安定";
  if (
    cCount >= 3 ||
    priorityReviewCount >= 5 ||
    (hasPastData && pastAccuracy < 50) ||
    (hasPracticeData && practiceAccuracy < 50) ||
    (hasPracticalData && practicalAccuracy < 50) ||
    (practicalStats?.wrong || 0) >= 5
  ) {
    label = "最優先改善";
  } else if (
    cCount >= 1 ||
    bCount + cCount >= 5 ||
    priorityReviewCount >= 1 ||
    (hasPastData && pastAccuracy < 60) ||
    (hasPracticeData && practiceAccuracy < 60) ||
    (hasPracticalData && practicalAccuracy < 60) ||
    (practicalStats?.wrong || 0) >= 1
  ) {
    label = "危険";
  } else if (
    bCount >= 1 ||
    reviewCount >= 1 ||
    (hasPastData && pastAccuracy < 70) ||
    (hasPracticeData && practiceAccuracy < 70) ||
    (hasPracticalData && practicalAccuracy < 70) ||
    (practicalStats?.partial || 0) >= 1
  ) {
    label = "注意";
  }
  const dataShortage = practiceStats.denominator < 3 && pastStats.denominator < 3 && (practicalStats?.denominator || 0) < 3;
  return { label, className: riskClassName(label), dataShortage };
}

function riskClassName(label) {
  if (label === "最優先改善") return "priority";
  if (label === "危険") return "danger";
  if (label === "注意") return "normal";
  return "ok";
}

function buildSubjectAnalyses() {
  return ANALYSIS_SUBJECTS.map((subject) => {
    const units = state.units.filter((unit) => normalizeSubject(unit.subject) === subject);
    const practiceLogs = state.practiceLogs.filter((log) => normalizeSubject(log.subject) === subject);
    const pastExamLogs = state.pastExamLogs.filter((log) => normalizeSubject(log.subject) === subject);
    const practicalLogs = state.practicalLogs.filter((log) => normalizeSubject(log.subject) === subject);
    const levelCounts = countLevels(units);
    const reviewUnits = units.filter((unit) => getReviewStatus(unit).weight > 0);
    const priorityReviewUnits = units.filter((unit) => getReviewStatus(unit).label === "最優先復習");
    const practiceStats = getPracticeStats(practiceLogs);
    const pastStats = getPastExamStats(pastExamLogs);
    const practicalStats = getPracticalStats(practicalLogs);
    const tags = countTags([
      ...units.flatMap((unit) => unit.ai?.weaknessTags || []),
      ...practiceLogs.flatMap((log) => log.weaknessTags || []),
      ...pastExamLogs.flatMap((log) => log.weaknessTags || []),
      ...practicalLogs.flatMap((log) => log.weaknessTags || [])
    ]);
    const retryCount = units.filter((unit) => unit.redoTarget).length +
      practiceLogs.filter((log) => log.retry).length +
      pastExamLogs.filter((log) => log.retry).length +
      practicalLogs.filter((log) => log.retry).length;
    const risk = classifyLearningRisk({
      bCount: levelCounts.B || 0,
      cCount: levelCounts.C || 0,
      reviewCount: reviewUnits.length,
      priorityReviewCount: priorityReviewUnits.length,
      practiceStats,
      pastStats,
      practicalStats
    });
    return {
      subject,
      unitCount: units.length,
      levelCounts,
      reviewCount: reviewUnits.length,
      practiceStats,
      pastStats,
      practicalStats,
      retryCount,
      topTags: Object.entries(tags).sort((a, b) => b[1] - a[1]).slice(0, 3),
      risk
    };
  });
}

function normalizeSubject(value) {
  return ANALYSIS_SUBJECTS.includes(value) ? value : "未設定";
}

function countTags(tags) {
  return tags.reduce((acc, tag) => {
    if (tag) acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
}

function buildWeaknessRanking() {
  const map = new Map();
  const ensure = (tag) => {
    if (!map.has(tag)) {
      map.set(tag, { tag, count: 0, unitIds: new Set(), practiceLogIds: new Set(), pastExamLogIds: new Set(), practicalLogIds: new Set() });
    }
    return map.get(tag);
  };
  state.units.forEach((unit) => (unit.ai?.weaknessTags || []).forEach((tag) => {
    const item = ensure(tag);
    item.count += 1;
    item.unitIds.add(unit.id);
  }));
  state.practiceLogs.forEach((log) => (log.weaknessTags || []).forEach((tag) => {
    const item = ensure(tag);
    item.count += 1;
    item.practiceLogIds.add(log.id);
  }));
  state.pastExamLogs.forEach((log) => (log.weaknessTags || []).forEach((tag) => {
    const item = ensure(tag);
    item.count += 1;
    item.pastExamLogIds.add(log.id);
  }));
  state.practicalLogs.forEach((log) => (log.weaknessTags || []).forEach((tag) => {
    const item = ensure(tag);
    item.count += 1;
    item.practicalLogIds.add(log.id);
  }));
  return [...map.values()]
    .map((item) => ({
      tag: item.tag,
      count: item.count,
      unitCount: item.unitIds.size,
      practiceLogCount: item.practiceLogIds.size,
      pastExamLogCount: item.pastExamLogIds.size,
      practicalLogCount: item.practicalLogIds.size
    }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag, "ja"));
}

function buildDangerTopics() {
  const map = new Map();
  state.pastExamLogs.forEach((log) => {
    const topic = String(log.topic || log.relatedUnitTitle || log.questionNo || "").trim();
    if (!topic) return;
    if (!map.has(topic)) {
      map.set(topic, { topic, subject: log.subject || "未設定", score: 0, count: 0, wrong: 0, partial: 0, high: 0, retry: 0 });
    }
    const item = map.get(topic);
    item.count += 1;
    if (log.result === "×") {
      item.score += 3;
      item.wrong += 1;
    }
    if (log.result === "△") {
      item.score += 2;
      item.partial += 1;
    }
    if (log.priority === "高") {
      item.score += 2;
      item.high += 1;
    }
    if (log.retry) {
      item.score += 1;
      item.retry += 1;
    }
  });
  return [...map.values()]
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || b.count - a.count || a.topic.localeCompare(b.topic, "ja"))
    .slice(0, 5);
}

function scoreUnitRisk(unit) {
  const practiceLogs = getPracticeLogsForUnit(unit.id);
  const pastExamLogs = getPastExamLogsForUnit(unit.id);
  const practicalLogs = getPracticalLogsForUnit(unit.id);
  const points = [];
  const add = (score, label, count = 1) => {
    if (score <= 0 || count <= 0) return;
    points.push({ score, label, count });
  };
  add(unit.level === "C" ? 30 : 0, "C判定");
  add(unit.level === "B" ? 15 : 0, "B判定");
  add(unit.reviewTarget ? 10 : 0, "復習対象");
  add(unit.redoTarget ? 10 : 0, "再演習対象");
  add(getWeaknessCount(unit) * 5, `弱点タグ${getWeaknessCount(unit)}件`, getWeaknessCount(unit));
  const exerciseWrong = unit.exercises.filter((exercise) => exercise.result === "×").length;
  const exercisePartial = unit.exercises.filter((exercise) => exercise.result === "△").length;
  add(exerciseWrong * 15, `例題×${exerciseWrong}件`, exerciseWrong);
  add(exercisePartial * 8, `例題△${exercisePartial}件`, exercisePartial);
  add(unit.pastExam.result === "×" ? 15 : 0, "単元過去問×");
  add(unit.pastExam.result === "△" ? 8 : 0, "単元過去問△");
  const practiceWrong = practiceLogs.filter((log) => log.result === "×").length;
  const practicePartial = practiceLogs.filter((log) => log.result === "△").length;
  const practiceRetry = practiceLogs.filter((log) => log.retry).length;
  add(practiceWrong * 10, `関連演習×${practiceWrong}件`, practiceWrong);
  add(practicePartial * 5, `関連演習△${practicePartial}件`, practicePartial);
  add(practiceRetry * 5, `演習再演習${practiceRetry}件`, practiceRetry);
  const pastWrong = pastExamLogs.filter((log) => log.result === "×").length;
  const pastPartial = pastExamLogs.filter((log) => log.result === "△").length;
  const pastRetry = pastExamLogs.filter((log) => log.retry).length;
  const pastHigh = pastExamLogs.filter((log) => log.priority === "高").length;
  add(pastWrong * 15, `関連過去問×${pastWrong}件`, pastWrong);
  add(pastPartial * 8, `関連過去問△${pastPartial}件`, pastPartial);
  add(pastRetry * 5, `過去問再演習${pastRetry}件`, pastRetry);
  add(pastHigh * 10, `過去問優先度高${pastHigh}件`, pastHigh);
  const practicalWrong = practicalLogs.filter((log) => log.result === "×").length;
  const practicalPartial = practicalLogs.filter((log) => log.result === "△").length;
  const practicalRetry = practicalLogs.filter((log) => log.retry).length;
  const practicalHigh = practicalLogs.filter((log) => log.priority === "高").length;
  const practicalWeakness = practicalLogs.flatMap((log) => log.weaknessTags || []).filter((tag) => PRACTICAL_WEAKNESS_TAGS.includes(tag)).length;
  add(practicalWrong * 15, `関連実務×${practicalWrong}件`, practicalWrong);
  add(practicalPartial * 8, `関連実務△${practicalPartial}件`, practicalPartial);
  add(practicalRetry * 5, `実務再演習${practicalRetry}件`, practicalRetry);
  add(practicalHigh * 10, `実務優先度高${practicalHigh}件`, practicalHigh);
  add(practicalWeakness * 5, `実務弱点タグ${practicalWeakness}件`, practicalWeakness);
  const score = points.reduce((sum, item) => sum + item.score, 0);
  const risk = classifyUnitRisk(score);
  return {
    unit,
    score,
    risk,
    reasons: points.sort((a, b) => b.score - a.score).map((item) => item.label).slice(0, 5),
    weaknessCount: getWeaknessCount(unit),
    practiceLogCount: practiceLogs.length,
    pastExamLogCount: pastExamLogs.length,
    practicalLogCount: practicalLogs.length
  };
}

function classifyUnitRisk(score) {
  if (score >= 50) return { label: "最優先改善", className: "priority" };
  if (score >= 25) return { label: "危険", className: "danger" };
  if (score >= 10) return { label: "注意", className: "normal" };
  return { label: "安定", className: "ok" };
}

function compareUnitRisks(a, b) {
  return b.score - a.score || a.unit.title.localeCompare(b.unit.title, "ja");
}

function buildPerformanceAnalysis() {
  return {
    practice: {
      ...getPracticeStats(state.practiceLogs),
      confidence: groupCount(state.practiceLogs, "confidence"),
      sourceTypes: groupCount(state.practiceLogs, "sourceType"),
      questionTypes: groupAccuracy(state.practiceLogs, "questionType", "未判定")
    },
    pastExam: {
      ...getPastExamStats(state.pastExamLogs),
      subjects: groupAccuracy(state.pastExamLogs, "subject", "未実施"),
      questionTypes: groupAccuracy(state.pastExamLogs, "questionType", "未実施"),
      allCorrectOnly: getPastExamStats(state.pastExamLogs.filter((log) => log.scoreType === "全正解のみ")),
      practical: getPastExamStats(state.pastExamLogs.filter((log) => PRACTICAL_PAST_FORMATS.includes(log.questionType)))
    },
    practical: {
      ...getPracticalStats(state.practicalLogs),
      practicalTypes: groupAccuracy(state.practicalLogs, "practicalType", "未判定"),
      calculationTypes: groupAccuracy(state.practicalLogs.filter((log) => log.calculationType && log.calculationType !== "未設定"), "calculationType", "未判定"),
      weaknessSummary: buildPracticalWeaknessSummary(),
      dangerousUnits: state.units.map(scoreUnitRisk).filter((item) => item.practicalLogCount > 0).sort(compareUnitRisks).slice(0, 5)
    }
  };
}

function groupCount(items, key) {
  return items.reduce((acc, item) => {
    const value = item[key] || "未設定";
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function groupAccuracy(items, key, pendingValue) {
  const groups = {};
  items.forEach((item) => {
    const value = item[key] || "未設定";
    if (!groups[value]) groups[value] = [];
    groups[value].push(item);
  });
  return Object.entries(groups)
    .map(([label, logs]) => ({ label, ...getGenericResultStats(logs, pendingValue) }))
    .sort((a, b) => b.total - a.total || a.label.localeCompare(b.label, "ja"));
}

function getGenericResultStats(logs, pendingValue) {
  const correct = logs.filter((log) => log.result === "○").length;
  const partial = logs.filter((log) => log.result === "△").length;
  const wrong = logs.filter((log) => log.result === "×").length;
  const pending = logs.filter((log) => log.result === pendingValue).length;
  const denominator = correct + partial + wrong;
  const accuracyValue = denominator ? (correct / denominator) * 100 : null;
  return {
    total: logs.length,
    correct,
    partial,
    wrong,
    pending,
    denominator,
    accuracyValue,
    accuracy: accuracyValue === null ? "データ不足" : `${accuracyValue.toFixed(1)}%`
  };
}

function buildRetryTargets() {
  return {
    units: state.units.filter((unit) => unit.redoTarget).map(scoreUnitRisk).sort(compareUnitRisks),
    practiceLogs: [...state.practiceLogs].filter((log) => log.retry).sort(comparePracticeLogs),
    pastExamLogs: [...state.pastExamLogs].filter((log) => log.retry).sort(comparePastExamLogs),
    practicalLogs: [...state.practicalLogs].filter((log) => log.retry).sort(comparePracticalLogs)
  };
}

function buildAiUsage() {
  const sorted = [...state.aiAnalyses].sort(compareAiAnalyses);
  return {
    total: sorted.length,
    promptTypes: groupCount(sorted, "promptType"),
    targetTypes: groupCount(sorted, "targetType"),
    resultMemoCount: sorted.filter((item) => String(item.resultMemo || "").trim()).length,
    recentDate: sorted[0]?.createdAt || "",
    recentItems: sorted.slice(0, 3)
  };
}

function renderAnalysisOverall(analysis) {
  const summary = analysis.summary;
  const todayMenu = state.todayMenu || generateTodayMenu(getTodayPlan().selectedDuration);
  const todayUnitIds = new Set(todayMenu.allItems.map((item) => item.relatedUnitId).filter(Boolean));
  const todayTags = getTodayMenuWeaknessTags(todayMenu);
  const todayLogCount = todayMenu.pastExamItems.length + todayMenu.practicalItems.length;
  const rows = [
    ["総単元数", summary.totalUnits],
    ["A判定数", summary.levelCounts.A || 0],
    ["B判定数", summary.levelCounts.B || 0],
    ["C判定数", summary.levelCounts.C || 0],
    ["未判定数", summary.levelCounts["未判定"] || 0],
    ["要復習数", summary.reviewCount],
    ["最優先復習数", summary.priorityReviewCount],
    ["通常復習数", summary.normalReviewCount],
    ["総演習数", summary.practiceStats.total],
    ["演習正答率", dataAwareAccuracy(summary.practiceStats)],
    ["総過去問ログ数", summary.pastStats.total],
    ["過去問正答率", dataAwareAccuracy(summary.pastStats)],
    ["総実務ログ数", summary.practicalStats.total],
    ["実務正答率", dataAwareAccuracy(summary.practicalStats)],
    ["再演習対象数", summary.retryCount],
    ["弱点タグ総数", summary.weaknessTotal],
    ["AI解析履歴数", summary.aiCount],
    ["今日メニュー反映危険単元数", todayUnitIds.size],
    ["今日メニュー内の過去問・実務ログ数", todayLogCount]
  ];
  return `
    <div class="risk-summary-card risk-${summary.risk.className}">
      <div>
        <p class="eyebrow">総合危険度</p>
        <strong>${escapeHtml(summary.risk.label)}</strong>
        ${summary.risk.dataShortage ? `<span class="data-note">データ不足</span>` : ""}
      </div>
      <button class="ghost-button" type="button" data-analysis-ai-consult>AIに相談</button>
    </div>
    <div class="analysis-stat-grid">
      ${rows.map(([label, value]) => `
        <div class="analysis-stat">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </div>
      `).join("")}
    </div>
    <div class="analysis-card">
      <h4>今日のメニュー連動</h4>
      <dl class="analysis-facts">
        <div><dt>反映されている危険単元数</dt><dd>${todayUnitIds.size}</dd></div>
        <div><dt>含まれる弱点タグ</dt><dd>${escapeHtml(todayTags.join(" / ") || "なし")}</dd></div>
        <div><dt>含まれる過去問・実務ログ数</dt><dd>${todayLogCount}</dd></div>
      </dl>
    </div>
    <div class="analysis-card">
      <h4>本試験で危険な論点</h4>
      ${analysis.dangerTopics.length ? `
        <div class="mini-list">
          ${analysis.dangerTopics.map((item) => `
            <div class="mini-item">
              <span>${escapeHtml(item.subject)} / ${escapeHtml(item.topic)}</span>
              <small>${escapeHtml([`×${item.wrong}`, `△${item.partial}`, `高優先度${item.high}`, `再演習${item.retry}`].join(" / "))}</small>
            </div>
          `).join("")}
        </div>
      ` : `<p class="muted">危険論点を判定できる過去問ログはまだありません。</p>`}
    </div>
  `;
}

function getTodayMenuWeaknessTags(menu) {
  const tags = new Set();
  menu.allItems.forEach((item) => {
    const unit = state.units.find((candidate) => candidate.id === item.relatedUnitId);
    (unit?.ai?.weaknessTags || []).forEach((tag) => tags.add(tag));
    const practice = state.practiceLogs.find((log) => log.id === item.relatedLogId);
    const past = state.pastExamLogs.find((log) => log.id === item.relatedLogId);
    const practical = state.practicalLogs.find((log) => log.id === item.relatedLogId);
    [...(practice?.weaknessTags || []), ...(past?.weaknessTags || []), ...(practical?.weaknessTags || [])].forEach((tag) => tags.add(tag));
    if (item.type === "弱点確認") tags.add(item.title);
  });
  return [...tags].slice(0, 12);
}

function renderSubjectAnalysis(subjects) {
  return `
    <div class="analysis-card-grid">
      ${subjects.map((item) => `
        <article class="analysis-card">
          <div class="analysis-card-top">
            <h4>${escapeHtml(item.subject)}</h4>
            <span class="badge ${item.risk.className}">${escapeHtml(item.risk.label)}</span>
          </div>
          ${item.risk.dataShortage ? `<p class="muted">データ不足</p>` : ""}
          <dl class="analysis-facts">
            <div><dt>単元数</dt><dd>${item.unitCount}</dd></div>
            <div><dt>A/B/C/未判定</dt><dd>${item.levelCounts.A || 0}/${item.levelCounts.B || 0}/${item.levelCounts.C || 0}/${item.levelCounts["未判定"] || 0}</dd></div>
            <div><dt>要復習数</dt><dd>${item.reviewCount}</dd></div>
            <div><dt>演習</dt><dd>${item.practiceStats.total}件 / ${dataAwareAccuracy(item.practiceStats)}</dd></div>
            <div><dt>過去問</dt><dd>${item.pastStats.total}件 / ${dataAwareAccuracy(item.pastStats)}</dd></div>
            <div><dt>実務</dt><dd>${item.practicalStats.total}件 / ${dataAwareAccuracy(item.practicalStats)}</dd></div>
            <div><dt>再演習対象</dt><dd>${item.retryCount}</dd></div>
            <div><dt>主な弱点タグ</dt><dd>${escapeHtml(item.topTags.map(([tag, count]) => `${tag}(${count})`).join(" / ") || "なし")}</dd></div>
          </dl>
        </article>
      `).join("")}
    </div>
  `;
}

function renderWeaknessRanking(items) {
  if (!items.length) return `<p class="muted">弱点タグはまだ記録されていません。</p>`;
  return `
    <div class="ranking-list">
      ${items.map((item, index) => `
        <article class="ranking-card">
          <div class="rank-number">${index + 1}</div>
          <div>
            <div class="analysis-card-top">
              <h4>${escapeHtml(item.tag)}</h4>
              ${index < 5 ? `<span class="badge priority">重点弱点</span>` : ""}
            </div>
            <dl class="analysis-facts compact">
              <div><dt>出現回数</dt><dd>${item.count}</dd></div>
              <div><dt>関連単元数</dt><dd>${item.unitCount}</dd></div>
              <div><dt>関連演習ログ数</dt><dd>${item.practiceLogCount}</dd></div>
              <div><dt>関連過去問ログ数</dt><dd>${item.pastExamLogCount}</dd></div>
              <div><dt>関連実務ログ数</dt><dd>${item.practicalLogCount}</dd></div>
            </dl>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderUnitRiskRanking(items) {
  if (!items.length) return `<p class="muted">単元データがありません。</p>`;
  const todayUnitIds = new Set((state.todayMenu || generateTodayMenu(getTodayPlan().selectedDuration)).allItems.map((item) => item.relatedUnitId).filter(Boolean));
  return `
    <div class="ranking-list">
      ${items.map((item, index) => `
        <button class="ranking-card unit-risk-card" type="button" data-open-unit="${escapeAttribute(item.unit.id)}">
          <div class="rank-number">${index + 1}</div>
          <div>
            <div class="analysis-card-top">
              <div>
                <p class="eyebrow">${escapeHtml(item.unit.subject)}</p>
                <h4>${escapeHtml(item.unit.title)}</h4>
              </div>
              <span class="badge ${item.risk.className}">${escapeHtml(item.risk.label)}</span>
              ${todayUnitIds.has(item.unit.id) ? `<span class="badge priority">今日のメニュー候補</span>` : ""}
            </div>
            <dl class="analysis-facts compact">
              <div><dt>スコア</dt><dd>${item.score}</dd></div>
              <div><dt>到達判定</dt><dd>${escapeHtml(item.unit.level)}</dd></div>
              <div><dt>主な理由</dt><dd>${escapeHtml(item.reasons.join(" / ") || "該当なし")}</dd></div>
              <div><dt>弱点タグ数</dt><dd>${item.weaknessCount}</dd></div>
              <div><dt>関連演習ログ数</dt><dd>${item.practiceLogCount}</dd></div>
              <div><dt>関連過去問ログ数</dt><dd>${item.pastExamLogCount}</dd></div>
              <div><dt>関連実務ログ数</dt><dd>${item.practicalLogCount}</dd></div>
            </dl>
          </div>
        </button>
      `).join("")}
    </div>
  `;
}

function renderPerformanceAnalysis(performance) {
  const practice = performance.practice;
  const past = performance.pastExam;
  return `
    <div class="analysis-card-grid two-col">
      <article class="analysis-card">
        <h4>演習ログ</h4>
        <dl class="analysis-facts">
          <div><dt>総数</dt><dd>${practice.total}</dd></div>
          <div><dt>○/△/×/未判定</dt><dd>${practice.correct}/${practice.partial}/${practice.wrong}/${practice.pending}</dd></div>
          <div><dt>正答率</dt><dd>${dataAwareAccuracy(practice)}</dd></div>
          <div><dt>再演習対象数</dt><dd>${practice.retry}</dd></div>
          <div><dt>自信度別件数</dt><dd>${escapeHtml(formatGroupCounts(practice.confidence))}</dd></div>
          <div><dt>出典種別別件数</dt><dd>${escapeHtml(formatGroupCounts(practice.sourceTypes))}</dd></div>
          <div><dt>問題形式別正答率</dt><dd>${escapeHtml(formatAccuracyGroups(practice.questionTypes))}</dd></div>
        </dl>
      </article>
      <article class="analysis-card">
        <h4>過去問ログ</h4>
        <dl class="analysis-facts">
          <div><dt>総数</dt><dd>${past.total}</dd></div>
          <div><dt>○/△/×/未実施</dt><dd>${past.correct}/${past.partial}/${past.wrong}/${past.pending}</dd></div>
          <div><dt>正答率</dt><dd>${dataAwareAccuracy(past)}</dd></div>
          <div><dt>再演習対象数</dt><dd>${past.retry}</dd></div>
          <div><dt>科目別正答率</dt><dd>${escapeHtml(formatAccuracyGroups(past.subjects))}</dd></div>
          <div><dt>出題形式別正答率</dt><dd>${escapeHtml(formatAccuracyGroups(past.questionTypes))}</dd></div>
          <div><dt>全正解のみ問題</dt><dd>${dataAwareAccuracy(past.allCorrectOnly)}（${past.allCorrectOnly.total}件）</dd></div>
          <div><dt>実務系問題</dt><dd>${dataAwareAccuracy(past.practical)}（${past.practical.total}件）</dd></div>
        </dl>
      </article>
    </div>
  `;
}

function renderPracticalAnalysis(practical) {
  const summary = practical.weaknessSummary;
  return `
    <div class="analysis-card-grid two-col">
      <article class="analysis-card">
        <h4>実務ログ</h4>
        <dl class="analysis-facts">
          <div><dt>総数</dt><dd>${practical.total}</dd></div>
          <div><dt>○/△/×/未判定</dt><dd>${practical.correct}/${practical.partial}/${practical.wrong}/${practical.pending}</dd></div>
          <div><dt>実務正答率</dt><dd>${dataAwareAccuracy(practical)}</dd></div>
          <div><dt>実務系再演習対象数</dt><dd>${practical.retry}</dd></div>
          <div><dt>実務区分別正答率</dt><dd>${escapeHtml(formatAccuracyGroups(practical.practicalTypes))}</dd></div>
          <div><dt>計算類型別正答率</dt><dd>${escapeHtml(formatAccuracyGroups(practical.calculationTypes))}</dd></div>
          <div><dt>実務用弱点タグ</dt><dd>${escapeHtml(summary.practicalTagRanking.slice(0, 5).map((item) => `${item.label}(${item.count})`).join(" / ") || "データ不足")}</dd></div>
        </dl>
      </article>
      <article class="analysis-card">
        <h4>実務で危険な単元 上位5件</h4>
        ${practical.dangerousUnits.length ? practical.dangerousUnits.map((item) => `
          <button class="compact-item ghost-button" type="button" data-open-unit="${escapeAttribute(item.unit.id)}">
            <span>${escapeHtml(item.unit.title)}</span>
            <span class="badge ${item.risk.className}">${item.score}</span>
          </button>
        `).join("") : `<p class="muted">実務データ不足</p>`}
      </article>
    </div>
  `;
}

function renderRetryTargets(targets) {
  return `
    <div class="analysis-card-grid three-col">
      <article class="analysis-card">
        <h4>再演習対象単元</h4>
        ${targets.units.length ? targets.units.slice(0, 10).map((item) => `
          <button class="compact-item ghost-button" type="button" data-open-unit="${escapeAttribute(item.unit.id)}">
            <span>${escapeHtml(item.unit.title)}</span>
            <span class="badge ${item.risk.className}">${item.score}</span>
          </button>
        `).join("") : `<p class="muted">対象単元はありません。</p>`}
      </article>
      <article class="analysis-card">
        <h4>再演習対象演習ログ</h4>
        ${targets.practiceLogs.length ? targets.practiceLogs.slice(0, 10).map((log) => `
          <button class="compact-item ghost-button" type="button" data-edit-practice-log="${escapeAttribute(log.id)}">
            <span>${escapeHtml(log.unitTitle || log.questionRef || log.sourceName || "演習ログ")}</span>
            <span>${escapeHtml(log.result)}</span>
          </button>
        `).join("") : `<p class="muted">対象演習ログはありません。</p>`}
      </article>
      <article class="analysis-card">
        <h4>再演習対象過去問ログ</h4>
        ${targets.pastExamLogs.length ? targets.pastExamLogs.slice(0, 10).map((log) => `
          <button class="compact-item ghost-button" type="button" data-edit-past-exam-log="${escapeAttribute(log.id)}">
            <span>${escapeHtml([log.examRound, log.subject, log.questionNo].filter(Boolean).join(" / ") || "過去問ログ")}</span>
            <span>${escapeHtml(log.result)}</span>
          </button>
        `).join("") : `<p class="muted">対象過去問ログはありません。</p>`}
      </article>
      <article class="analysis-card">
        <h4>再演習対象実務ログ</h4>
        ${targets.practicalLogs.length ? targets.practicalLogs.slice(0, 10).map((log) => `
          <button class="compact-item ghost-button" type="button" data-edit-practical-log="${escapeAttribute(log.id)}">
            <span>${escapeHtml([log.studiedAt, log.practicalType, log.questionRef].filter(Boolean).join(" / ") || "実務ログ")}</span>
            <span>${escapeHtml(log.result)}</span>
          </button>
        `).join("") : `<p class="muted">対象実務ログはありません。</p>`}
      </article>
    </div>
  `;
}

function renderAiUsage(usage) {
  if (!usage.total) return `<p class="muted">AI解析プロンプトはまだ生成されていません。</p>`;
  return `
    <div class="analysis-card-grid two-col">
      <article class="analysis-card">
        <h4>AI活用集計</h4>
        <dl class="analysis-facts">
          <div><dt>AIプロンプト生成数</dt><dd>${usage.total}</dd></div>
          <div><dt>プロンプト種別別件数</dt><dd>${escapeHtml(formatGroupCounts(usage.promptTypes))}</dd></div>
          <div><dt>対象種別別件数</dt><dd>${escapeHtml(formatGroupCounts(usage.targetTypes))}</dd></div>
          <div><dt>AI返答メモあり件数</dt><dd>${usage.resultMemoCount}</dd></div>
          <div><dt>直近のAI利用日</dt><dd>${escapeHtml(formatDateTime(usage.recentDate))}</dd></div>
        </dl>
      </article>
      <article class="analysis-card">
        <h4>直近のAI履歴3件</h4>
        ${usage.recentItems.map((item) => `
          <div class="mini-item">
            <span>${escapeHtml(formatDateTime(item.createdAt))} / ${escapeHtml(item.promptType || "種別なし")}</span>
            <small>${escapeHtml(item.targetTitle || "対象なし")}</small>
          </div>
        `).join("")}
      </article>
    </div>
  `;
}

function dataAwareAccuracy(stats) {
  return stats.denominator ? stats.accuracy : "データ不足";
}

function formatGroupCounts(groups) {
  const entries = Object.entries(groups || {}).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ja"));
  return entries.length ? entries.map(([label, count]) => `${label}:${count}`).join(" / ") : "データ不足";
}

function formatAccuracyGroups(groups) {
  return (groups || []).length
    ? groups.map((item) => `${item.label}:${item.accuracy}(${item.total}件)`).join(" / ")
    : "データ不足";
}

function renderPastExamForm() {
  const editingLog = state.pastExamLogs.find((log) => log.id === state.editingPastExamLogId);
  const log = editingLog || { ...blankPastExamLog, studiedAt: todayString(), examRound: "第59回" };
  document.querySelector("#pastExamFormTitle").textContent = editingLog ? "過去問ログを編集" : "過去問ログを追加";
  document.querySelector("#pastExamLogForm").innerHTML = `
    ${pastExamFieldsets.map((fieldset, index) => renderLogFieldset(fieldset, index, (field) => renderPastExamField(field, log))).join("")}
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
        <button class="ghost-button" type="button" data-ai-past-exam-log="${escapeAttribute(log.id)}">AI解析</button>
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
    ${practiceFieldsets.map((fieldset, index) => renderLogFieldset(fieldset, index, (field) => renderPracticeField(field, log))).join("")}
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
        <button class="ghost-button" type="button" data-ai-practice-log="${escapeAttribute(log.id)}">AI解析</button>
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

function renderAiView() {
  fillSelect("#aiPromptTypeSelect", AI_PROMPT_TYPES, state.aiForm.promptType);
  fillSelect("#aiTargetTypeSelect", AI_TARGET_TYPES, state.aiForm.targetType);
  renderAiTargetSelect();
  document.querySelector("#aiAdditionalConditions").value = state.aiForm.additionalConditions;
  document.querySelector("#aiPromptResult").value = state.aiForm.promptText;
  renderAiHistory();
}

function renderAiTargetSelect() {
  const select = document.querySelector("#aiTargetSelect");
  const label = document.querySelector("#aiTargetSelectLabel");
  const hint = document.querySelector("#aiTargetHint");
  const options = getAiTargetOptions(state.aiForm.targetType);
  const needsSelect = ["単元", "レッスン", "演習ログ", "過去問ログ", "実務ログ"].includes(state.aiForm.targetType);
  label.classList.toggle("is-hidden", !needsSelect);
  hint.textContent = needsSelect ? "" : state.aiForm.targetType === "復習対象"
    ? "現在の復習対象単元を最大10件まで使います。"
    : "単元・演習ログ・過去問ログ・実務ログ・今日のメニューの集計値を使います。";
  if (!needsSelect) {
    select.innerHTML = `<option value="">自動選択</option>`;
    state.aiForm.targetId = "";
    return;
  }
  select.innerHTML = options.length
    ? options.map((option) => `<option value="${escapeAttribute(option.value)}">${escapeHtml(option.label)}</option>`).join("")
    : `<option value="">対象データがありません</option>`;
  if (!options.some((option) => option.value === state.aiForm.targetId)) {
    state.aiForm.targetId = options[0]?.value || "";
  }
  select.value = state.aiForm.targetId;
}

function getAiTargetOptions(targetType) {
  if (targetType === "単元") {
    return state.units.map((unit) => ({ value: unit.id, label: `${unit.subject} / ${unit.title}` }));
  }
  if (targetType === "レッスン") {
    return CURRICULUM_LESSONS.map((lesson) => ({ value: lesson.id, label: `${lesson.subject} / ${lesson.title}` }));
  }
  if (targetType === "演習ログ") {
    return [...state.practiceLogs].sort(comparePracticeLogs).map((log) => ({
      value: log.id,
      label: `${log.studiedAt || "日付なし"} / ${log.unitTitle || "単元なし"} / ${log.questionRef || log.sourceName || "参照なし"}`
    }));
  }
  if (targetType === "過去問ログ") {
    return [...state.pastExamLogs].sort(comparePastExamLogs).map((log) => ({
      value: log.id,
      label: `${log.studiedAt || "日付なし"} / ${log.examRound || "試験回なし"} / ${log.subject || "未設定"} / ${log.questionNo || "問題番号なし"}`
    }));
  }
  if (targetType === "実務ログ") {
    return [...state.practicalLogs].sort(comparePracticalLogs).map((log) => ({
      value: log.id,
      label: `${log.studiedAt || "日付なし"} / ${log.practicalType || "未設定"} / ${log.relatedUnitTitle || "単元なし"} / ${log.questionRef || "参照なし"}`
    }));
  }
  return [];
}

function renderAiHistory() {
  const items = [...state.aiAnalyses].sort(compareAiAnalyses).slice(0, 20);
  document.querySelector("#aiHistoryList").innerHTML = items.length
    ? items.map((item) => `
      <article class="ai-history-card">
        <div>
          <p class="eyebrow">${escapeHtml(formatDateTime(item.createdAt))}</p>
          <h3>${escapeHtml(item.promptType || "種別なし")} / ${escapeHtml(item.targetType || "対象なし")}</h3>
        </div>
        <div class="card-meta">
          <span class="badge">${escapeHtml(item.targetTitle || "対象名なし")}</span>
        </div>
        <p class="muted">${escapeHtml(truncateText(item.promptText, 120) || "プロンプト本文なし")}</p>
        <label>
          AI返答メモ
          <textarea data-ai-result-memo="${escapeAttribute(item.id)}" placeholder="ChatGPTなどから返ってきた解析結果を必要に応じて保存">${escapeHtml(item.resultMemo || "")}</textarea>
        </label>
        <div class="card-actions">
          <button class="ghost-button" type="button" data-show-ai-analysis="${escapeAttribute(item.id)}">再表示</button>
          <button class="primary-button" type="button" data-save-ai-result-memo="${escapeAttribute(item.id)}">メモ保存</button>
          <button class="danger-button" type="button" data-delete-ai-analysis="${escapeAttribute(item.id)}">削除</button>
        </div>
      </article>
    `).join("")
    : `<div class="empty-state"><p class="muted">生成履歴はまだありません。</p></div>`;
}

function compareAiAnalyses(a, b) {
  return (b.createdAt || "").localeCompare(a.createdAt || "");
}

function generateAiPrompt() {
  const target = buildAiTargetData();
  if (!target) {
    showToast("対象データがありません。");
    return;
  }
  const promptText = buildAiPromptText(state.aiForm.promptType, target, state.aiForm.additionalConditions);
  const analysis = normalizeAiAnalysis({
    id: makeAiAnalysisId(),
    createdAt: new Date().toISOString(),
    promptType: state.aiForm.promptType,
    targetType: state.aiForm.targetType,
    targetId: target.id,
    targetTitle: target.title,
    promptText,
    resultMemo: ""
  });
  state.aiAnalyses.unshift(analysis);
  state.aiForm.promptText = promptText;
  state.aiForm.currentAnalysisId = analysis.id;
  saveUnits();
  render();
  showToast("プロンプトを生成しました。");
}

function buildAiPromptText(promptType, target, additionalConditions) {
  const points = state.aiForm.targetType === "実務ログ"
    ? ["申告書作成上のミス原因", "計算過程のどこで崩れたか", "品目分類・資料読み取りの弱点", "NACCS入力項目の理解不足", "時間配分の問題", "次に解くべき実務問題タイプ", "本試験で失点しやすいポイント", "30分でできる実務復習メニュー"]
    : (AI_ANALYSIS_POINTS[promptType] || AI_ANALYSIS_POINTS["総合学習相談"]);
  const output = AI_OUTPUT_FORMATS[promptType] || AI_OUTPUT_FORMATS.default;
  return [
    "【役割指定】",
    "あなたは通関士試験のプロ講師です。",
    "私は通関士試験の独学者です。",
    "合格レベルは、過去問を安定して解答できる状態です。",
    "以下の学習データをもとに、試験合格に直結する形で分析してください。",
    "",
    "【目的】",
    `${promptType}を行い、次の学習行動が明確になるようにしてください。`,
    "",
    "【対象データ】",
    target.body,
    "",
    "【分析してほしい観点】",
    bulletLines(points),
    "",
    "【出力形式】",
    bulletLines(output),
    "",
    "【追加条件】",
    additionalConditions.trim() || "特になし"
  ].join("\n");
}

function buildAiTargetData() {
  if (state.aiForm.targetType === "単元") {
    const unit = state.units.find((item) => item.id === state.aiForm.targetId) || state.units[0];
    return unit ? { id: unit.id, title: unit.title, body: buildUnitPromptData(unit) } : null;
  }
  if (state.aiForm.targetType === "レッスン") {
    const lesson = getLessonById(state.aiForm.targetId) || CURRICULUM_LESSONS[0];
    return lesson ? { id: lesson.id, title: lesson.title, body: buildLessonPromptData(lesson) } : null;
  }
  if (state.aiForm.targetType === "演習ログ") {
    const log = state.practiceLogs.find((item) => item.id === state.aiForm.targetId) || state.practiceLogs[0];
    return log ? { id: log.id, title: log.unitTitle || log.questionRef || "演習ログ", body: buildPracticePromptData(log) } : null;
  }
  if (state.aiForm.targetType === "過去問ログ") {
    const log = state.pastExamLogs.find((item) => item.id === state.aiForm.targetId) || state.pastExamLogs[0];
    return log ? { id: log.id, title: [log.examRound, log.subject, log.questionNo].filter(Boolean).join(" / ") || "過去問ログ", body: buildPastExamPromptData(log) } : null;
  }
  if (state.aiForm.targetType === "実務ログ") {
    const log = state.practicalLogs.find((item) => item.id === state.aiForm.targetId) || state.practicalLogs[0];
    return log ? { id: log.id, title: [log.studiedAt, log.practicalType, log.questionRef].filter(Boolean).join(" / ") || "実務ログ", body: buildPracticalPromptData(log) } : null;
  }
  if (state.aiForm.targetType === "復習対象") {
    return { id: "", title: "復習対象", body: buildReviewTargetsPromptData() };
  }
  return { id: "", title: "全体サマリー", body: buildOverallSummaryPromptData() };
}

function buildUnitPromptData(unit) {
  const review = getReviewStatus(unit);
  const exercises = unit.exercises.map((exercise, index) => [
    `例題${index + 1}`,
    `問題文: ${emptyText(exercise.question)}`,
    `自分の回答: ${emptyText(exercise.myAnswer)}`,
    `採点結果: ${emptyText(exercise.result)}`,
    `解説: ${emptyText(exercise.explanation)}`
  ].join("\n  ")).join("\n");
  return keyValueLines([
    ["科目", unit.subject],
    ["単元名", unit.title],
    ["重要度", unit.importance],
    ["到達判定", unit.level],
    ["復習状態", review.label],
    ["法令根拠", unit.law.basis],
    ["条文要旨", unit.law.articleSummary],
    ["制度趣旨", unit.law.purpose],
    ["全体像", unit.law.overview],
    ["試験での重要点", unit.exam.keyPoint],
    ["混同しやすい点", unit.exam.confusingPoints],
    ["引っかけ", unit.exam.traps],
    ["暗記ポイント", unit.exam.memoryPoints],
    ["理解ポイント", unit.exam.understandingPoints],
    ["過去問での問われ方", unit.exam.pastQuestionStyle],
    ["関連過去問", unit.exam.relatedPastQuestions],
    ["例題", exercises || "未入力"],
    ["自分の回答", unit.pastExam.myAnswer],
    ["採点結果", unit.pastExam.result],
    ["解説", unit.pastExam.aiMemo],
    ["AI解析メモ", unit.ai.analysisMemo],
    ["弱点タグ", unit.ai.weaknessTags.join(" / ")],
    ["自由メモ", unit.freeMemo]
  ]);
}

function buildLessonPromptData(lesson) {
  const progress = getLessonProgress(lesson.id);
  const results = lesson.questions.map((question) => {
    const result = progress.questionResults.find((item) => item.questionId === question.id);
    return [
      question.question,
      `正答: ${question.answer}`,
      `回答: ${result?.userAnswer || "未回答"}`,
      `結果: ${result ? (result.correct ? "正解" : "不正解") : "未回答"}`,
      `弱点タグ: ${question.weaknessTag}`
    ].join(" / ");
  }).join("\n");
  return keyValueLines([
    ["レッスンタイトル", lesson.title],
    ["科目", lesson.subject],
    ["学習目標", lesson.goal],
    ["講義本文の要約", truncateText(lesson.lecture.replaceAll("\n", " "), 420)],
    ["重要ポイント", lesson.keyPoints.join(" / ")],
    ["混同ポイント", lesson.confusingPoints.join(" / ")],
    ["引っかけ注意", lesson.traps.join(" / ")],
    ["試験で狙われる表現", lesson.examTips.join(" / ")],
    ["罰則・処分・手続メモ", lesson.penaltyTips.join(" / ")],
    ["確認問題の結果", results],
    ["理解度判定", progress.understanding],
    ["復習対象かどうか", progress.reviewNeeded ? "復習対象" : "対象外"],
    ["状態", progress.status],
    ["最終学習日", progress.lastStudiedAt]
  ]);
}

function buildPracticePromptData(log) {
  return keyValueLines([
    ["学習日", log.studiedAt],
    ["出典種別", log.sourceType],
    ["出典名", log.sourceName],
    ["科目", log.subject],
    ["関連単元", log.unitTitle],
    ["問題番号・参照", log.questionRef],
    ["問題形式", log.questionType],
    ["自分の回答メモ", log.answerMemo],
    ["正答・解説メモ", log.correctAnswerMemo],
    ["結果", log.result],
    ["自信度", log.confidence],
    ["ミス理由", log.mistakeReason],
    ["弱点タグ", log.weaknessTags.join(" / ")],
    ["再演習対象", log.retry ? "対象" : "対象外"],
    ["AI解析メモ", log.aiAnalysisMemo]
  ]);
}

function buildPastExamPromptData(log) {
  return keyValueLines([
    ["学習日", log.studiedAt],
    ["試験回", log.examRound],
    ["年度", log.examYear],
    ["試験日", log.examDate],
    ["科目", log.subject],
    ["問題番号", log.questionNo],
    ["小問番号", log.subQuestionNo],
    ["関連単元", log.relatedUnitTitle],
    ["出題形式", log.questionType],
    ["配点・採点方式", log.scoreType],
    ["論点", log.topic],
    ["問題要約", log.questionSummary],
    ["問題本文メモ", log.questionTextMemo],
    ["自分の回答", log.myAnswer],
    ["正答メモ", log.correctAnswer],
    ["結果", log.result],
    ["自信度", log.confidence],
    ["ミス理由", log.mistakeReason],
    ["弱点タグ", log.weaknessTags.join(" / ")],
    ["再演習対象", log.retry ? "対象" : "対象外"],
    ["優先度", log.priority],
    ["AI解析メモ", log.aiAnalysisMemo],
    ["出典ファイルメモ", log.sourceFileMemo]
  ]);
}

function buildPracticalPromptData(log) {
  return keyValueLines([
    ["学習日", log.studiedAt],
    ["実務区分", log.practicalType],
    ["出典種別", log.sourceType],
    ["出典名", log.sourceName],
    ["関連単元", log.relatedUnitTitle],
    ["問題番号・参照", log.questionRef],
    ["結果", log.result],
    ["得点・配点メモ", log.scoreMemo],
    ["所要時間", log.timeSpentMinutes ? `${log.timeSpentMinutes}分` : ""],
    ["自信度", log.confidence],
    ["申告種別", log.declarationType],
    ["品目分類メモ", log.classificationMemo],
    ["計算類型", log.calculationType],
    ["計算過程メモ", log.calculationMemo],
    ["インボイス読取メモ", log.invoiceMemo],
    ["為替換算メモ", log.exchangeRateMemo],
    ["税率・税額メモ", log.taxRateMemo],
    ["NACCS入力項目メモ", log.nacssMemo],
    ["資料読み取りメモ", log.materialReadingMemo],
    ["ミスした欄・項目", log.mistakeField],
    ["ミス理由", log.mistakeReason],
    ["弱点タグ", log.weaknessTags.join(" / ")],
    ["再演習対象", log.retry ? "対象" : "対象外"],
    ["優先度", log.priority],
    ["AI解析メモ", log.aiAnalysisMemo]
  ]);
}

function buildReviewTargetsPromptData() {
  const units = state.units.filter((unit) => getReviewStatus(unit).weight > 0).sort(compareReviewUnits).slice(0, 10);
  if (!units.length) return "現在の復習対象単元はありません。";
  return units.map((unit, index) => {
    const review = getReviewStatus(unit);
    return `${index + 1}. ${keyValueLines([
      ["科目", unit.subject],
      ["単元名", unit.title],
      ["重要度", unit.importance],
      ["到達判定", unit.level],
      ["復習状態", review.label],
      ["復習理由", getReviewReasons(unit).join(" / ")],
      ["弱点タグ", unit.ai.weaknessTags.join(" / ")],
      ["最終更新日", unit.updatedAt]
    ]).replaceAll("\n", "\n   ")}`;
  }).join("\n\n");
}

function buildOverallSummaryPromptData() {
  const analysis = buildWeaknessAnalysis();
  const todaySummary = buildTodayPromptSummary();
  const counts = LEVELS.reduce((acc, level) => ({ ...acc, [level]: state.units.filter((unit) => unit.level === level).length }), {});
  const reviewUnits = state.units.filter((unit) => getReviewStatus(unit).weight > 0);
  const practiceStats = getPracticeStats(state.practiceLogs);
  const pastStats = getPastExamStats(state.pastExamLogs);
  const practicalStats = getPracticalStats(state.practicalLogs);
  const subjectAccuracy = PAST_EXAM_SUBJECTS
    .filter((subject) => subject !== "未設定")
    .map((subject) => `${subject}: ${pastStats.subjects[subject]?.accuracy || "0.0%"}`)
    .join(" / ");
  return keyValueLines([
    ["総合危険度", `${analysis.summary.risk.label}${analysis.summary.risk.dataShortage ? "（データ不足）" : ""}`],
    ["総単元数", state.units.length],
    ["A/B/C/未判定数", `A:${counts.A || 0} / B:${counts.B || 0} / C:${counts.C || 0} / 未判定:${counts["未判定"] || 0}`],
    ["要復習数", reviewUnits.length],
    ["最優先復習数", analysis.summary.priorityReviewCount],
    ["演習ログ総数", practiceStats.total],
    ["演習正答率", dataAwareAccuracy(practiceStats)],
    ["過去問ログ総数", pastStats.total],
    ["過去問正答率", dataAwareAccuracy(pastStats)],
    ["実務ログ総数", practicalStats.total],
    ["実務正答率", dataAwareAccuracy(practicalStats)],
    ["科目別過去問正答率", subjectAccuracy],
    ["再演習対象数", analysis.summary.retryCount],
    ["多い弱点タグ上位", getTopWeaknessTags().join(" / ")],
    ["危険度上位単元", analysis.unitRisks.slice(0, 5).map((item) => `${item.unit.title}:${item.risk.label}/${item.score}点/${item.reasons.join("・") || "理由なし"}`).join("\n")],
    ["今日の学習メニュー", todaySummary],
    ["科目別危険度", analysis.subjects.map((item) => `${item.subject}:${item.risk.label}`).join(" / ")],
    ["本試験で危険な論点", analysis.dangerTopics.map((item) => `${item.subject} ${item.topic}（×${item.wrong} / △${item.partial} / 高優先度${item.high} / 再演習${item.retry}）`).join("\n") || "未記録"],
    ["直近の×演習ログ", summarizeRecentWrongPracticeLogs()],
    ["直近の×過去問ログ", summarizeRecentWrongPastExamLogs()],
    ["直近の×実務ログ", summarizeRecentWrongPracticalLogs()]
  ]);
}

function buildTodayPromptSummary() {
  const menu = state.todayMenu || generateTodayMenu(getTodayPlan().selectedDuration);
  const completion = getTodayCompletion(menu);
  const incomplete = menu.recommended.filter((item) => !isTodayItemCompleted(item.id));
  return keyValueLines([
    ["日付", menu.date],
    ["選択時間", menu.duration],
    ["完了状況", `${completion.completed}/${completion.total} 完了（${completion.rate}%）`],
    ["今日のおすすめ", menu.recommended.map((item) => `${item.type}:${item.title}（${item.priority}/${item.reason}）`).join("\n")],
    ["未完了項目", incomplete.map((item) => `${item.type}:${item.title}`).join("\n") || "なし"],
    ["今日のメモ", menu.plan.memo || "未入力"]
  ]);
}

function getTopWeaknessTags() {
  const counts = {};
  state.units.forEach((unit) => unit.ai.weaknessTags.forEach((tag) => counts[tag] = (counts[tag] || 0) + 1));
  state.practiceLogs.forEach((log) => log.weaknessTags.forEach((tag) => counts[tag] = (counts[tag] || 0) + 1));
  state.pastExamLogs.forEach((log) => log.weaknessTags.forEach((tag) => counts[tag] = (counts[tag] || 0) + 1));
  state.practicalLogs.forEach((log) => log.weaknessTags.forEach((tag) => counts[tag] = (counts[tag] || 0) + 1));
  return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([tag, count]) => `${tag}(${count})`);
}

function summarizeRecentWrongPracticeLogs() {
  const logs = [...state.practiceLogs].filter((log) => log.result === "×").sort(comparePracticeLogs).slice(0, 3);
  return logs.length ? logs.map((log) => `${log.studiedAt || "日付なし"} ${log.unitTitle || "単元なし"} ${log.questionRef || ""} ミス理由:${log.mistakeReason || "未入力"}`).join("\n") : "なし";
}

function summarizeRecentWrongPastExamLogs() {
  const logs = [...state.pastExamLogs].filter((log) => log.result === "×").sort(comparePastExamLogs).slice(0, 3);
  return logs.length ? logs.map((log) => `${log.studiedAt || "日付なし"} ${log.examRound || ""} ${log.subject || ""} ${log.questionNo || ""} 論点:${log.topic || "未入力"} ミス理由:${log.mistakeReason || "未入力"}`).join("\n") : "なし";
}

function summarizeRecentWrongPracticalLogs() {
  const logs = [...state.practicalLogs].filter((log) => log.result === "×").sort(comparePracticalLogs).slice(0, 3);
  return logs.length ? logs.map((log) => `${log.studiedAt || "日付なし"} ${log.practicalType || ""} ${log.relatedUnitTitle || "単元なし"} ${log.questionRef || ""} ミス欄:${log.mistakeField || "未入力"} ミス理由:${log.mistakeReason || "未入力"}`).join("\n") : "なし";
}

function keyValueLines(rows) {
  return rows.map(([key, value]) => `- ${key}: ${emptyText(value)}`).join("\n");
}

function bulletLines(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function emptyText(value) {
  const text = String(value ?? "").trim();
  return text || "未入力";
}

function showAiAnalysis(analysisId) {
  const item = state.aiAnalyses.find((analysis) => analysis.id === analysisId);
  if (!item) return;
  state.aiForm.promptType = item.promptType || state.aiForm.promptType;
  state.aiForm.targetType = item.targetType || state.aiForm.targetType;
  state.aiForm.targetId = item.targetId || "";
  state.aiForm.promptText = item.promptText || "";
  state.aiForm.currentAnalysisId = item.id;
  renderAiView();
  switchView("ai");
  document.querySelector("#aiPromptResult").scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteAiAnalysis(analysisId) {
  const confirmed = window.confirm("このAIプロンプト生成履歴を削除します。よろしいですか？");
  if (!confirmed) return;
  state.aiAnalyses = state.aiAnalyses.filter((item) => item.id !== analysisId);
  if (state.aiForm.currentAnalysisId === analysisId) state.aiForm.currentAnalysisId = "";
  saveUnits();
  render();
  showToast("削除しました。");
}

function saveAiResultMemo(analysisId) {
  const item = state.aiAnalyses.find((analysis) => analysis.id === analysisId);
  const input = [...document.querySelectorAll("[data-ai-result-memo]")]
    .find((element) => element.dataset.aiResultMemo === analysisId);
  if (!item || !input) return;
  item.resultMemo = input.value.trim();
  saveUnits();
  render();
  showToast("AI返答メモを保存しました。");
}

function saveCurrentAiPromptMemo() {
  const text = document.querySelector("#aiPromptResult").value.trim();
  if (!text) {
    showToast("保存する生成結果がありません。");
    return;
  }
  const item = state.aiAnalyses.find((analysis) => analysis.id === state.aiForm.currentAnalysisId);
  if (item) {
    item.promptText = text;
  } else {
    const analysis = normalizeAiAnalysis({
      promptType: state.aiForm.promptType,
      targetType: state.aiForm.targetType,
      targetId: state.aiForm.targetId,
      targetTitle: buildAiTargetData()?.title || "",
      promptText: text,
      resultMemo: ""
    });
    state.aiAnalyses.unshift(analysis);
    state.aiForm.currentAnalysisId = analysis.id;
  }
  state.aiForm.promptText = text;
  saveUnits();
  render();
  showToast("AI解析メモ用の履歴として保存しました。");
}

function openAiForTarget(targetType, targetId, promptType) {
  state.aiForm.targetType = targetType;
  state.aiForm.targetId = targetId || "";
  state.aiForm.promptType = promptType;
  state.aiForm.promptText = "";
  state.aiForm.currentAnalysisId = "";
  switchView("ai");
  renderAiView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function gradeLessonQuestion(lessonId, questionId) {
  const lesson = getLessonById(lessonId);
  const question = lesson?.questions.find((item) => item.id === questionId);
  if (!lesson || !question) return;
  const checked = document.querySelector(`input[name="${escapeAttribute(`${lessonId}-${questionId}`)}"]:checked`);
  if (!checked) {
    showToast("回答を選択してください。");
    return;
  }
  const progress = getLessonProgress(lessonId);
  progress.questionResults = progress.questionResults.filter((result) => result.questionId !== questionId);
  progress.questionResults.push({
    questionId,
    userAnswer: checked.value,
    correct: checked.value === question.answer,
    answeredAt: new Date().toISOString()
  });
  progress.lastStudiedAt = new Date().toISOString();
  updateLessonUnderstanding(lessonId);
  saveUnits();
  renderLessonDetail();
  showToast("採点しました。");
}

function completeLesson(lessonId) {
  const progress = updateLessonUnderstanding(lessonId);
  const now = new Date().toISOString();
  progress.status = "完了";
  progress.completedAt = now;
  progress.lastStudiedAt = now;
  progress.reviewNeeded = ["B", "C"].includes(progress.understanding);
  saveUnits();
  render();
  showToast("レッスンを完了しました。");
}

function markLessonForReview(lessonId) {
  const progress = getLessonProgress(lessonId);
  progress.reviewNeeded = true;
  progress.status = "復習中";
  progress.lastStudiedAt = new Date().toISOString();
  saveUnits();
  render();
  showToast("復習対象にしました。");
}

function setLessonUnderstanding(lessonId, understanding) {
  const progress = getLessonProgress(lessonId);
  if (!CURRICULUM_UNDERSTANDING.includes(understanding)) return;
  progress.understanding = understanding;
  progress.reviewNeeded = ["B", "C"].includes(understanding) || progress.reviewNeeded;
  progress.lastStudiedAt = new Date().toISOString();
  saveUnits();
  renderLessonDetail();
  renderHomeCurriculumSummary();
}

function openAiForLesson(lessonId) {
  openAiForTarget("レッスン", lessonId, "単元理解チェック");
}

function openAiForAnalysisConsult() {
  state.aiForm.promptType = "総合学習相談";
  state.aiForm.targetType = "全体サマリー";
  state.aiForm.targetId = "";
  state.aiForm.additionalConditions = "現在の弱点分析ダッシュボードをもとに、合格可能性を上げるために、今週やるべき学習メニューを優先順位付きで提案してください。";
  state.aiForm.promptText = "";
  state.aiForm.currentAnalysisId = "";
  switchView("ai");
  renderAiView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openAiForTodayConsult() {
  state.aiForm.promptType = "総合学習相談";
  state.aiForm.targetType = "全体サマリー";
  state.aiForm.targetId = "";
  state.aiForm.additionalConditions = "今日の学習メニュー、未完了項目、弱点タグ、過去問・実務の失点状況を踏まえて、次にやるべき学習を30分・1時間のメニューに分けて提案してください。";
  state.aiForm.promptText = "";
  state.aiForm.currentAnalysisId = "";
  switchView("ai");
  renderAiView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleTodayCompleted(itemId, checked) {
  const menu = state.todayMenu || generateTodayMenu(getTodayPlan().selectedDuration);
  const item = menu.allItems.find((candidate) => candidate.id === itemId) || menu.recommended.find((candidate) => candidate.id === itemId);
  if (!item) return;
  updateTodayPlan((plan) => {
    plan.completedItems = plan.completedItems.filter((completed) => completed.id !== itemId);
    if (checked) {
      plan.completedItems.push({
        id: item.id,
        type: item.type,
        title: item.title,
        completedAt: new Date().toISOString()
      });
    }
  });
  state.todayMenu = generateTodayMenu(getTodayPlan().selectedDuration);
  renderTodayView();
  renderHomeTodaySummary();
}

function saveTodayMemo() {
  const memo = document.querySelector("#todayMemo").value;
  updateTodayPlan((plan) => {
    plan.memo = memo;
  });
  state.todayMenu = generateTodayMenu(getTodayPlan().selectedDuration);
  document.querySelector("#todayMemoMessage").textContent = "今日のメモを保存しました";
  renderHomeTodaySummary();
  showToast("今日のメモを保存しました。");
}

function addUnitToTodayMenu(unitId) {
  const unit = state.units.find((item) => item.id === unitId);
  if (!unit) return;
  const item = makeTodayMenuItem({
    id: `unit-${unit.id}`,
    type: "単元復習",
    title: unit.title,
    description: `${unit.subject} / 復習画面から追加`,
    reason: "復習画面から今日のメニューに追加",
    priority: getReviewStatus(unit).label === "最優先復習" ? "最優先" : "高",
    estimatedMinutes: 15,
    relatedUnitId: unit.id
  });
  updateTodayPlan((plan) => {
    plan.manualItems = normalizeArray(plan.manualItems).filter((manual) => manual.id !== item.id);
    plan.manualItems.unshift(item);
    plan.completedItems = plan.completedItems.filter((completed) => completed.id !== item.id);
  });
  unit.reviewTarget = true;
  unit.updatedAt = todayString();
  state.todayMenu = generateTodayMenu(getTodayPlan().selectedDuration);
  saveUnits();
  render();
  showToast("今日のメニュー候補に追加しました。");
}

function openTodayLog(target) {
  const [type, id] = String(target || "").split(":");
  if (type === "演習見直し") {
    editPracticeLog(id);
    return;
  }
  if (type === "過去問見直し") {
    editPastExamLog(id);
    return;
  }
  if (type === "実務見直し") {
    editPracticalLog(id);
  }
}

async function copyAiPrompt() {
  const textarea = document.querySelector("#aiPromptResult");
  const text = textarea.value;
  if (!text.trim()) {
    showToast("コピーするプロンプトがありません。");
    return;
  }
  try {
    if (!navigator.clipboard?.writeText) throw new Error("clipboard unavailable");
    await navigator.clipboard.writeText(text);
    showToast("コピーしました。");
  } catch (error) {
    textarea.focus();
    textarea.select();
    showToast("コピーできませんでした。選択中の本文を手動でコピーしてください。");
  }
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
  const lessons = getReviewLessons();
  document.querySelector("#reviewLessonCards").innerHTML = lessons.length
    ? lessons.map(({ lesson, progress, reason }) => `
      <article class="lesson-card">
        <div>
          <p class="eyebrow">${escapeHtml(lesson.subject)}</p>
          <h4>${escapeHtml(lesson.title)}</h4>
          <dl class="review-facts compact">
            <div><dt>理解度</dt><dd>${escapeHtml(progress.understanding)}</dd></div>
            <div><dt>状態</dt><dd>${escapeHtml(progress.status)}</dd></div>
            <div><dt>最終学習日</dt><dd>${escapeHtml(progress.lastStudiedAt ? formatDateTime(progress.lastStudiedAt) : "未学習")}</dd></div>
            <div><dt>復習理由</dt><dd>${escapeHtml(reason)}</dd></div>
          </dl>
        </div>
        <div class="card-actions">
          <button class="primary-button" type="button" data-open-lesson="${escapeAttribute(lesson.id)}">開く</button>
        </div>
      </article>
    `).join("")
    : `<div class="empty-state"><p class="muted">復習対象レッスンはありません。</p></div>`;
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
  const riskDiff = scoreUnitRisk(b).score - scoreUnitRisk(a).score;
  if (riskDiff) return riskDiff;
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
  const risk = scoreUnitRisk(unit);
  const reasons = getReviewReasons(unit);
  const levelClass = unit.level === "A" ? "level-a" : unit.level === "B" ? "level-b" : unit.level === "C" ? "level-c" : "";
  const importanceClass = unit.importance === "高" ? "high" : unit.importance === "中" ? "medium" : "";
  const tags = (unit.ai?.weaknessTags || []).slice(0, 5).join(" / ");
  return `
    <article class="unit-card review-card">
      <div>
        <p class="eyebrow">${escapeHtml(unit.subject)}</p>
        <h3>${escapeHtml(unit.title)}</h3>
      </div>
      <div class="card-meta">
        <span class="badge ${importanceClass}">重要度 ${escapeHtml(unit.importance)}</span>
        <span class="badge ${levelClass}">到達 ${escapeHtml(unit.level)}</span>
        <span class="badge ${review.className}">${review.label}</span>
        <span class="badge ${risk.risk.className}">危険度 ${escapeHtml(risk.risk.label)}</span>
        <span class="badge">スコア ${risk.score}</span>
        <span class="badge">弱点 ${getWeaknessCount(unit)}</span>
      </div>
      <dl class="review-facts">
        <div><dt>危険理由</dt><dd>${escapeHtml(risk.reasons.join(" / ") || "該当なし")}</dd></div>
        <div><dt>主な弱点タグ</dt><dd>${escapeHtml(tags || "なし")}</dd></div>
        <div><dt>復習理由</dt><dd>${escapeHtml(reasons.length ? reasons.join(" / ") : "該当なし")}</dd></div>
        <div><dt>最終更新日</dt><dd>${escapeHtml(unit.updatedAt || "未保存")}</dd></div>
      </dl>
      <div class="card-actions">
        <button class="ghost-button" type="button" data-open-unit="${escapeAttribute(unit.id)}">開く</button>
        <button class="primary-button" type="button" data-add-today-unit="${escapeAttribute(unit.id)}">今日のメニューに追加</button>
      </div>
    </article>
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
  const risk = scoreUnitRisk(unit);
  document.querySelector("#detailSubject").textContent = unit.subject;
  document.querySelector("#detailTitle").textContent = unit.title;
  document.querySelector("#detailBadges").innerHTML = `
    <span class="badge">重要度 ${escapeHtml(unit.importance)}</span>
    <span class="badge">到達 ${escapeHtml(unit.level)}</span>
    <span class="badge ${review.className}">${review.label}</span>
    <span class="badge ${risk.risk.className}">危険度 ${escapeHtml(risk.risk.label)}</span>
    <span class="badge">スコア ${risk.score}</span>
  `;
  document.querySelector("#detailTabs").innerHTML = tabDefinitions
    .map((tab) => `<button class="tab-button ${tab.id === state.activeTab ? "is-active" : ""}" type="button" data-tab="${tab.id}" role="tab" aria-selected="${tab.id === state.activeTab}">${tab.label}</button>`)
    .join("");
  document.querySelector("#unitForm").innerHTML = renderTabForm(unit, state.activeTab);
  if (!document.querySelector("#detailAiButton")) {
    document.querySelector(".detail-header").insertAdjacentHTML("beforeend", `<button id="detailAiButton" class="ghost-button" type="button" data-ai-unit="${escapeAttribute(unit.id)}">この単元をAI解析</button>`);
  } else {
    document.querySelector("#detailAiButton").dataset.aiUnit = unit.id;
  }
}

function renderTabForm(unit, tab) {
  if (tab === "basic") {
    const risk = scoreUnitRisk(unit);
    return `
      <section class="risk-detail-panel field-wide">
        <div>
          <p class="eyebrow">単元危険度</p>
          <strong>${escapeHtml(risk.risk.label)} / ${risk.score}点</strong>
        </div>
        <p>${escapeHtml(risk.reasons.join(" / ") || "危険理由はまだありません。")}</p>
      </section>
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
  if (tab === "practical") {
    const relatedLogs = getPracticalLogsForUnit(unit.id).sort(comparePracticalLogs);
    return `
      <section class="related-log-panel field-wide">
        <h4>関連実務ログ</h4>
        ${relatedLogs.length ? `
          <div class="mini-list">
            ${relatedLogs.map((log) => `
              <div class="mini-item">
                <span>${escapeHtml(log.studiedAt || "日付なし")} / ${escapeHtml(log.practicalType || "未設定")} / ${escapeHtml(log.sourceName || "出典名なし")} / ${escapeHtml(log.questionRef || "参照なし")}</span>
                <small>結果 ${escapeHtml(log.result || "未判定")} / ミス欄 ${escapeHtml(log.mistakeField || "なし")} / 再演習 ${log.retry ? "対象" : "なし"}</small>
                <small>${escapeHtml(truncateText(log.mistakeReason, 72) || "ミス理由なし")}</small>
              </div>
            `).join("")}
          </div>
        ` : `<p class="muted">この単元に紐づく実務ログはまだありません。</p>`}
      </section>
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

function openLesson(lessonId) {
  const lesson = getLessonById(lessonId);
  if (!lesson) return;
  state.activeLessonId = lessonId;
  state.activeView = "learning";
  touchLessonProgress(lessonId);
  switchView("learning", false);
  renderLearningView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeLessonDetail() {
  state.activeLessonId = null;
  document.querySelector("#learningListArea").classList.remove("is-hidden");
  document.querySelector("#lessonDetailArea").classList.add("is-hidden");
  document.querySelector("#backToLearningButton").classList.add("is-hidden");
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
  if (view !== "learning" && state.activeLessonId) {
    closeLessonDetail();
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

function collectPracticalForm() {
  const form = document.querySelector("#practicalLogForm");
  const formData = new FormData(form);
  const unit = state.units.find((item) => item.id === String(formData.get("relatedUnitId") || ""));
  return {
    studiedAt: String(formData.get("studiedAt") || todayString()),
    practicalType: String(formData.get("practicalType") || "未設定"),
    sourceType: String(formData.get("sourceType") || "その他"),
    sourceName: String(formData.get("sourceName") || "").trim(),
    subject: "通関実務",
    relatedUnitId: unit?.id || "",
    relatedUnitTitle: unit?.title || "",
    questionRef: String(formData.get("questionRef") || "").trim(),
    result: String(formData.get("result") || "未判定"),
    scoreMemo: String(formData.get("scoreMemo") || "").trim(),
    timeSpentMinutes: String(formData.get("timeSpentMinutes") || "").trim(),
    confidence: String(formData.get("confidence") || "未設定"),
    declarationType: String(formData.get("declarationType") || "未設定"),
    classificationMemo: String(formData.get("classificationMemo") || "").trim(),
    calculationType: String(formData.get("calculationType") || "未設定"),
    calculationMemo: String(formData.get("calculationMemo") || "").trim(),
    invoiceMemo: String(formData.get("invoiceMemo") || "").trim(),
    exchangeRateMemo: String(formData.get("exchangeRateMemo") || "").trim(),
    taxRateMemo: String(formData.get("taxRateMemo") || "").trim(),
    nacssMemo: String(formData.get("nacssMemo") || "").trim(),
    materialReadingMemo: String(formData.get("materialReadingMemo") || "").trim(),
    mistakeField: String(formData.get("mistakeField") || "").trim(),
    mistakeReason: String(formData.get("mistakeReason") || "").trim(),
    weaknessTags: formData.getAll("weaknessTags").map(String),
    retry: formData.get("retry") === "on",
    priority: String(formData.get("priority") || "未設定"),
    aiAnalysisMemo: String(formData.get("aiAnalysisMemo") || "").trim()
  };
}

function savePracticalLogFromForm() {
  const now = new Date().toISOString();
  const values = collectPracticalForm();
  if (state.editingPracticalLogId) {
    const index = state.practicalLogs.findIndex((log) => log.id === state.editingPracticalLogId);
    if (index >= 0) {
      state.practicalLogs[index] = normalizePracticalLog({
        ...state.practicalLogs[index],
        ...values,
        updatedAt: now
      });
    }
    state.editingPracticalLogId = null;
    state.practicalFormMessage = "更新しました。";
    showToast("更新しました。");
  } else {
    state.practicalLogs.unshift(normalizePracticalLog({
      ...values,
      id: makePracticalLogId(),
      createdAt: now,
      updatedAt: now
    }));
    state.practicalFormMessage = "保存しました。";
    showToast("保存しました。");
  }
  saveUnits();
  render();
}

function editPracticalLog(logId) {
  state.editingPracticalLogId = logId;
  state.practicalFormMessage = "";
  renderPracticalView();
  switchView("practical");
  document.querySelector("#practicalFormTitle").scrollIntoView({ behavior: "smooth", block: "start" });
}

function cancelPracticalEdit() {
  state.editingPracticalLogId = null;
  state.practicalFormMessage = "";
  renderPracticalView();
}

function deletePracticalLog(logId) {
  const target = state.practicalLogs.find((log) => log.id === logId);
  if (!target) return;
  const confirmed = window.confirm("この実務ログを削除します。よろしいですか？");
  if (!confirmed) return;
  state.practicalLogs = state.practicalLogs.filter((log) => log.id !== logId);
  if (state.editingPracticalLogId === logId) state.editingPracticalLogId = null;
  state.practicalFormMessage = "";
  saveUnits();
  render();
  showToast("削除しました。");
}

function renderSettings() {
  const saved = localStorage.getItem(STORAGE_KEYS.units);
  const backupJson = JSON.stringify(makeBackupPayload());
  const sizeKb = Math.max(1, Math.ceil(backupJson.length / 1024));
  const last = getLastUpdatedUnit();
  document.querySelector("#storageStatus").textContent = `${state.units.length}単元・${CURRICULUM_LESSONS.length}レッスン / 約${sizeKb}KBをこのブラウザに保存`;
  document.querySelector("#storageDetails").innerHTML = `
    <div><dt>保存中の単元数</dt><dd>${state.units.length}単元</dd></div>
    <div><dt>保存中の演習ログ数</dt><dd>${state.practiceLogs.length}件</dd></div>
    <div><dt>保存中の過去問ログ数</dt><dd>${state.pastExamLogs.length}件</dd></div>
    <div><dt>保存中の実務ログ数</dt><dd>${state.practicalLogs.length}件</dd></div>
    <div><dt>保存中のAI履歴数</dt><dd>${state.aiAnalyses.length}件</dd></div>
    <div><dt>保存中の学習メニュー数</dt><dd>${state.studyPlans.length}件</dd></div>
    <div><dt>保存中のレッスン進捗数</dt><dd>${state.curriculumProgress.length}件</dd></div>
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
    practicalLogs: state.practicalLogs,
    aiAnalyses: state.aiAnalyses,
    studyPlans: state.studyPlans,
    curriculumProgress: state.curriculumProgress
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

function formatDateTime(value) {
  if (!value) return "日時なし";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const pad = (number) => String(number).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
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
      state.practicalLogs = normalizeArray(parsed.practicalLogs).map(normalizePracticalLog);
      state.aiAnalyses = normalizeArray(parsed.aiAnalyses).map(normalizeAiAnalysis);
      state.studyPlans = normalizeArray(parsed.studyPlans).map(normalizeStudyPlan);
      state.curriculumProgress = normalizeArray(parsed.curriculumProgress).map(normalizeCurriculumProgress);
      closeDetail();
      closeLessonDetail();
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
  document.querySelector("#backToLearningButton").addEventListener("click", closeLessonDetail);
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
  document.querySelector("#practicalLogForm").addEventListener("submit", (event) => {
    event.preventDefault();
    savePracticalLogFromForm();
  });
  document.querySelector("#practicalSearchInput").addEventListener("input", (event) => {
    state.practicalFilters.search = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalTypeFilter").addEventListener("change", (event) => {
    state.practicalFilters.practicalType = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalSourceTypeFilter").addEventListener("change", (event) => {
    state.practicalFilters.sourceType = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalResultFilter").addEventListener("change", (event) => {
    state.practicalFilters.result = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalConfidenceFilter").addEventListener("change", (event) => {
    state.practicalFilters.confidence = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalUnitFilter").addEventListener("change", (event) => {
    state.practicalFilters.unitId = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalCalculationTypeFilter").addEventListener("change", (event) => {
    state.practicalFilters.calculationType = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalWeaknessFilter").addEventListener("change", (event) => {
    state.practicalFilters.weakness = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalPriorityFilter").addEventListener("change", (event) => {
    state.practicalFilters.priority = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalRetryOnlyFilter").addEventListener("change", (event) => {
    state.practicalFilters.retryOnly = event.target.checked;
    renderPracticalLogList();
  });
  document.querySelector("#practicalDeclarationOnlyFilter").addEventListener("change", (event) => {
    state.practicalFilters.declarationOnly = event.target.checked;
    renderPracticalLogList();
  });
  document.querySelector("#practicalCalculationOnlyFilter").addEventListener("change", (event) => {
    state.practicalFilters.calculationOnly = event.target.checked;
    renderPracticalLogList();
  });
  document.querySelector("#aiPromptTypeSelect").addEventListener("change", (event) => {
    state.aiForm.promptType = event.target.value;
  });
  document.querySelector("#aiTargetTypeSelect").addEventListener("change", (event) => {
    state.aiForm.targetType = event.target.value;
    state.aiForm.targetId = "";
    renderAiTargetSelect();
  });
  document.querySelector("#aiTargetSelect").addEventListener("change", (event) => {
    state.aiForm.targetId = event.target.value;
  });
  document.querySelector("#aiAdditionalConditions").addEventListener("input", (event) => {
    state.aiForm.additionalConditions = event.target.value;
  });
  document.querySelector("#generateAiPromptButton").addEventListener("click", generateAiPrompt);
  document.querySelector("#copyAiPromptButton").addEventListener("click", copyAiPrompt);
  document.querySelector("#clearAiPromptButton").addEventListener("click", () => {
    state.aiForm.promptText = "";
    state.aiForm.currentAnalysisId = "";
    document.querySelector("#aiPromptResult").value = "";
  });
  document.querySelector("#saveAiPromptMemoButton").addEventListener("click", saveCurrentAiPromptMemo);
  document.querySelector("#aiPromptResult").addEventListener("input", (event) => {
    state.aiForm.promptText = event.target.value;
  });
  document.querySelector("#analysisAiConsultButton").addEventListener("click", openAiForAnalysisConsult);
  document.querySelector("#todayAiConsultButton").addEventListener("click", openAiForTodayConsult);
  document.querySelector("#saveTodayMemoButton").addEventListener("click", saveTodayMemo);
  document.querySelector("#durationButtons").addEventListener("click", (event) => {
    const button = event.target.closest("[data-duration]");
    if (!button) return;
    updateTodayPlan((plan) => {
      plan.selectedDuration = button.dataset.duration;
      plan.generatedAt = new Date().toISOString();
    });
    state.todayMenu = generateTodayMenu(button.dataset.duration);
    renderTodayView();
    renderHomeTodaySummary();
  });
  document.body.addEventListener("click", (event) => {
    if (event.target.closest("[data-open-today]")) {
      switchView("today");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (event.target.closest("[data-open-learning]")) {
      switchView("learning");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const shortcut = event.target.closest("[data-view-shortcut]");
    if (shortcut) {
      switchView(shortcut.dataset.viewShortcut);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const lessonButton = event.target.closest("[data-open-lesson]");
    if (lessonButton) {
      openLesson(lessonButton.dataset.openLesson);
      return;
    }
    const gradeButton = event.target.closest("[data-grade-question]");
    if (gradeButton) {
      const [lessonId, questionId] = gradeButton.dataset.gradeQuestion.split(":");
      gradeLessonQuestion(lessonId, questionId);
      return;
    }
    const completeLessonButton = event.target.closest("[data-complete-lesson]");
    if (completeLessonButton) {
      completeLesson(completeLessonButton.dataset.completeLesson);
      return;
    }
    const reviewLessonButton = event.target.closest("[data-review-lesson]");
    if (reviewLessonButton) {
      markLessonForReview(reviewLessonButton.dataset.reviewLesson);
      return;
    }
    const aiLessonButton = event.target.closest("[data-ai-lesson]");
    if (aiLessonButton) {
      openAiForLesson(aiLessonButton.dataset.aiLesson);
      return;
    }
    const todayLogButton = event.target.closest("[data-open-today-log]");
    if (todayLogButton) {
      openTodayLog(todayLogButton.dataset.openTodayLog);
      return;
    }
    const addTodayButton = event.target.closest("[data-add-today-unit]");
    if (addTodayButton) {
      addUnitToTodayMenu(addTodayButton.dataset.addTodayUnit);
      return;
    }
    if (event.target.closest("[data-open-analysis]")) {
      switchView("analysis");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (event.target.closest("[data-analysis-ai-consult]")) {
      openAiForAnalysisConsult();
      return;
    }
    const aiPracticeButton = event.target.closest("[data-ai-practice-log]");
    if (aiPracticeButton) {
      openAiForTarget("演習ログ", aiPracticeButton.dataset.aiPracticeLog, "誤答分析");
      return;
    }
    const aiPastExamButton = event.target.closest("[data-ai-past-exam-log]");
    if (aiPastExamButton) {
      openAiForTarget("過去問ログ", aiPastExamButton.dataset.aiPastExamLog, "過去問分析");
      return;
    }
    const aiPracticalButton = event.target.closest("[data-ai-practical-log]");
    if (aiPracticalButton) {
      openAiForTarget("実務ログ", aiPracticalButton.dataset.aiPracticalLog, "誤答分析");
      return;
    }
    const aiUnitButton = event.target.closest("[data-ai-unit]");
    if (aiUnitButton) {
      const unit = getActiveUnit();
      if (unit) collectFormIntoUnit(unit);
      openAiForTarget("単元", aiUnitButton.dataset.aiUnit, "単元理解チェック");
      return;
    }
    const showAiButton = event.target.closest("[data-show-ai-analysis]");
    if (showAiButton) {
      showAiAnalysis(showAiButton.dataset.showAiAnalysis);
      return;
    }
    const saveAiMemoButton = event.target.closest("[data-save-ai-result-memo]");
    if (saveAiMemoButton) {
      saveAiResultMemo(saveAiMemoButton.dataset.saveAiResultMemo);
      return;
    }
    const deleteAiButton = event.target.closest("[data-delete-ai-analysis]");
    if (deleteAiButton) {
      deleteAiAnalysis(deleteAiButton.dataset.deleteAiAnalysis);
      return;
    }
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
    const editPracticalButton = event.target.closest("[data-edit-practical-log]");
    if (editPracticalButton) {
      editPracticalLog(editPracticalButton.dataset.editPracticalLog);
      return;
    }
    const deletePracticalButton = event.target.closest("[data-delete-practical-log]");
    if (deletePracticalButton) {
      deletePracticalLog(deletePracticalButton.dataset.deletePracticalLog);
      return;
    }
    if (event.target.closest("#cancelPracticalEditButton")) {
      cancelPracticalEdit();
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
  document.body.addEventListener("change", (event) => {
    const understanding = event.target.closest("[data-lesson-understanding]");
    if (understanding) {
      setLessonUnderstanding(understanding.dataset.lessonUnderstanding, understanding.value);
      return;
    }
    const complete = event.target.closest("[data-today-complete]");
    if (!complete) return;
    toggleTodayCompleted(complete.dataset.todayComplete, complete.checked);
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
    localStorage.removeItem(STORAGE_KEYS.practicalLogs);
    localStorage.removeItem(STORAGE_KEYS.aiAnalyses);
    localStorage.removeItem(STORAGE_KEYS.studyPlans);
    localStorage.removeItem(STORAGE_KEYS.curriculumProgress);
    state.units = makeInitialUnits();
    state.practiceLogs = [];
    state.pastExamLogs = [];
    state.practicalLogs = [];
    state.aiAnalyses = [];
    state.studyPlans = [];
    state.curriculumProgress = [];
    state.editingPracticeLogId = null;
    state.editingPastExamLogId = null;
    state.editingPracticalLogId = null;
    state.practiceFormMessage = "";
    state.pastExamFormMessage = "";
    state.practicalFormMessage = "";
    closeDetail();
    saveUnits();
    render();
    showToast("初期データに戻しました。");
  });
}

loadState();
attachEvents();
render();
