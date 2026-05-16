const APP_VERSION = "v3.0";
const APP_NAME = "TSUKAN_YOBIKO";
const BACKUP_SCHEMA_VERSION = 2;
const AI_API_TIMEOUT_MS = 30000;
const AI_HEALTH_TIMEOUT_MS = 10000;
const STORAGE_KEYS = {
  units: "tsukanYobiko.units",
  version: "tsukanYobiko.version",
  practiceLogs: "tsukanYobiko.practiceLogs",
  pastExamLogs: "tsukanYobiko.pastExamLogs",
  practicalLogs: "tsukanYobiko.practicalLogs",
  aiAnalyses: "tsukanYobiko.aiAnalyses",
  aiSettings: "tsukanYobiko.aiSettings",
  lessonOverrides: "tsukanYobiko.lessonOverrides",
  studyPlans: "tsukanYobiko.studyPlans",
  curriculumProgress: "tsukanYobiko.curriculumProgress",
  mockExamResults: "tsukanYobiko.mockExamResults",
  drillResults: "tsukanYobiko.drillResults",
  userSettings: "tsukanYobiko.userSettings",
  pastExamMappings: "tsukanYobiko.pastExamMappings",
  importedPastExamQuestions: "tsukanYobiko.importedPastExamQuestions",
  lastBackupAt: "tsukanYobiko.lastBackupAt",
  restoreSafetySnapshot: "tsukanYobiko.restoreSafetySnapshot",
  autoSnapshots: "tsukanYobiko.autoSnapshots"
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
const PAST_MAPPING_COVERAGE_LEVELS = ["未判定", "A", "B", "C", "D"];
const PAST_MAPPING_REVIEW_PRIORITIES = ["未設定", "高", "中", "低"];
const PAST_EXAM_QUESTION_PRESETS = {
  "通関業法": ["第1問", "第2問", "第3問", "第4問", "第5問", "第6問", "第7問", "第8問", "第9問", "第10問"],
  "関税法等": ["第1問", "第2問", "第3問", "第4問", "第5問", "第6問", "第7問", "第8問", "第9問", "第10問", "第11問", "第12問", "第13問", "第14問", "第15問"],
  "通関実務": ["第1問 輸出申告", "第2問 輸入申告", "第3問", "第4問", "第5問", "第6問", "第7問", "第8問", "第9問", "第10問", "第11問", "第12問", "第13問", "第14問", "第15問"]
};
const PRACTICAL_PAST_FORMATS = ["申告書作成", "品目分類", "計算", "資料読み取り"];
const ANALYSIS_SUBJECTS = ["通関業法", "関税法等", "通関実務", "共通", "未設定"];
const AI_PROMPT_TYPES = [
  "回答添削",
  "誤答分析",
  "弱点抽出",
  "復習指示",
  "類似問題作成",
  "到達判定",
  "単元理解チェック",
  "過去問分析",
  "総合学習相談",
  "学習データ確認",
  "復習優先度整理",
  "バックアップJSON確認"
];
const AI_TARGET_TYPES = ["単元", "レッスン", "通関業法カリキュラム", "通関業法ドリル結果", "関税法等カリキュラム", "関税法等ドリル結果", "通関実務カリキュラム", "通関実務ドリル結果", "弱点別ドリル結果", "演習ログ", "過去問ログ", "実務ログ", "復習対象", "総合模試結果", "最新模試結果", "横断弱点", "全体サマリー"];
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
  "総合学習相談": ["現在の学習状況", "合格可能性を上げるうえでの優先課題", "科目別の危険度", "復習優先順位", "今週やるべきこと", "アプリへの記録方法の改善案"],
  "学習データ確認": ["TSUKAN YOBIKOの学習データ状況を確認してください", "進捗・ドリル・模試・ログに不自然な点がないか", "記録が不足している領域", "次に記録すべき情報"],
  "復習優先度整理": ["ドリル結果と模試結果から、次に何を復習すべきか整理してください", "科目別の優先順位", "弱点タグ別の危険度", "今日から3日間の復習順"],
  "バックアップJSON確認": ["バックアップJSONの内容を見て、不自然な点がないか確認してください", "件数の偏り", "欠損していそうなデータ", "復元前に注意すべき点"]
};
const AI_OUTPUT_FORMATS = {
  default: ["総評", "良い点", "問題点", "弱点タグ候補", "本試験での危険ポイント", "次に復習すべきこと", "A判定に上げる条件"],
  "類似問題作成": ["問題", "選択肢", "正答", "解説", "引っかけポイント", "復習すべき知識"],
  "復習指示": ["最優先", "通常復習", "余裕があれば", "30分メニュー", "1時間メニュー"]
};
const AI_TUTOR_TARGET_TYPES = ["現在のレッスン", "確認問題", "模試問題", "今日のメニュー", "弱点タグ", "弱点別ドリル結果", "自由質問"];
const AI_TUTOR_QUESTION_TYPES = ["やさしく説明", "本試験向けに説明", "なぜ間違えたか分析", "ひっかけポイント解説", "類似問題を出す", "暗記方法を教える", "30分復習メニューを作る", "A判定に上げる方法", "質問に直接回答"];
const AI_TUTOR_EXPLANATION_LEVELS = ["初学者向け", "標準", "本試験直前", "詳しめ", "一問一答風"];
const AI_TUTOR_OUTPUT_FORMATS = {
  "なぜ間違えたか分析": ["誤答原因", "不足している知識", "混同している論点", "本試験での危険ポイント", "次の復習メニュー"],
  "類似問題を出す": ["問題", "選択肢", "正答", "解説", "ひっかけポイント"],
  "30分復習メニューを作る": ["最優先", "10分", "20分", "30分", "余裕があれば"],
  "A判定に上げる方法": ["現状評価", "A判定に足りない点", "具体的にやること", "確認問題", "復習基準"],
  default: ["結論", "理由", "試験での問われ方", "ひっかけ注意", "次に復習すること"]
};
const AI_TUTOR_QUESTION_INSTRUCTIONS = {
  "やさしく説明": "初心者向けに、制度趣旨と全体像から説明してください。",
  "本試験向けに説明": "本試験の選択肢でどう問われるか、誤り選択肢を見抜く観点を説明してください。",
  "なぜ間違えたか分析": "誤答原因を、暗記不足・理解不足・用語混同・選択肢読解ミスに分けて分析してください。",
  "ひっかけポイント解説": "本試験で狙われる表現、混同ポイント、罰則・処分・手続の違いを説明してください。",
  "類似問題を出す": "同じ論点のオリジナル問題を1〜3問作ってください。市販教材や過去問本文を丸写ししないでください。",
  "暗記方法を教える": "単純な語呂合わせだけでなく、制度趣旨・対比表・判断軸で覚える方法を提案してください。",
  "30分復習メニューを作る": "現在の対象データから、30分で何をするかを具体化してください。",
  "A判定に上げる方法": "B/C判定または未判定からA判定に上げるための条件を示してください。",
  "質問に直接回答": "ユーザーの自由質問へ、通関士試験対策として簡潔に回答してください。"
};

const AI_SUGGESTION_TARGET_TYPES = ["レッスン確認問題", "レッスン理解度", "模試結果", "今日のメニュー", "弱点タグ", "弱点別ドリル結果", "通関業法カリキュラム", "通関業法ドリル結果", "関税法等カリキュラム", "関税法等ドリル結果", "通関実務カリキュラム", "通関実務ドリル結果", "自由入力"];
const AI_SUGGESTION_TYPES = ["回答添削", "誤答原因分析", "弱点タグ提案", "A/B/C判定提案", "復習対象提案", "次にやること提案", "総合診断", "類似問題提案"];
const AI_SUGGESTION_MARKER = "TSUKAN_YOBIKO_SUGGESTION:";
const AI_SUGGESTION_TYPE_INSTRUCTIONS = {
  "回答添削": "回答の正誤、理由づけ、用語、試験上の失点可能性を添削してください。",
  "誤答原因分析": "誤答原因を、暗記不足・理解不足・用語混同・選択肢読解・ケアレスミスに分けて分析してください。",
  "弱点タグ提案": "アプリに追加すべき弱点タグ候補を、既存タグと具体タグの両方で提案してください。",
  "A/B/C判定提案": "A/B/C理解度を提案し、その根拠とA判定に上げる条件を示してください。",
  "復習対象提案": "復習対象にすべきかを提案し、復習理由と優先度を示してください。",
  "次にやること提案": "次にやるべきレッスン、復習順、具体的アクションを優先順位つきで提案してください。",
  "総合診断": "現状、弱点、理解度、復習対象、次にやることを総合診断してください。",
  "類似問題提案": "市販教材や過去問本文を複製せず、論点だけを使って類似問題案と復習観点を提案してください。"
};

const CURRICULUM_STATUS = ["未着手", "学習中", "完了", "復習中"];
const CURRICULUM_UNDERSTANDING = ["未判定", "A", "B", "C"];

const DATA_FILE_STATUS = {
  lessons: Array.isArray(window.TSUKAN_LESSONS) && Array.isArray(window.TSUKAN_COURSES),
  questionBank: Array.isArray(window.TSUKAN_QUESTION_BANK),
  mockExams: Boolean(window.TSUKAN_MOCK_EXAM_MODES) && Array.isArray(window.TSUKAN_MOCK_EXAM_QUESTIONS),
  weaknessGroups: Array.isArray(window.TSUKAN_WEAKNESS_GROUPS)
};
const WEAKNESS_TAGS = Array.isArray(window.TSUKAN_WEAKNESS_TAGS) ? window.TSUKAN_WEAKNESS_TAGS : [];
const PRACTICAL_WEAKNESS_TAGS = Array.isArray(window.TSUKAN_PRACTICAL_WEAKNESS_TAGS) ? window.TSUKAN_PRACTICAL_WEAKNESS_TAGS : [];
const V24_WEAKNESS_TAG_CANDIDATES = Array.isArray(window.TSUKAN_V24_WEAKNESS_TAG_CANDIDATES) ? window.TSUKAN_V24_WEAKNESS_TAG_CANDIDATES : [];
const WEAKNESS_GROUPS = Array.isArray(window.TSUKAN_WEAKNESS_GROUPS) ? window.TSUKAN_WEAKNESS_GROUPS : [];
const MOCK_EXAM_MODES = window.TSUKAN_MOCK_EXAM_MODES && typeof window.TSUKAN_MOCK_EXAM_MODES === "object" ? window.TSUKAN_MOCK_EXAM_MODES : {};
const TRAP_WEAKNESS_TAGS = Array.isArray(window.TSUKAN_TRAP_WEAKNESS_TAGS) ? window.TSUKAN_TRAP_WEAKNESS_TAGS : [];
const CURRICULUM_COURSES = Array.isArray(window.TSUKAN_COURSES) ? window.TSUKAN_COURSES : [];
const CURRICULUM_LESSONS = Array.isArray(window.TSUKAN_LESSONS) ? window.TSUKAN_LESSONS : [];
const MOCK_EXAM_QUESTIONS = Array.isArray(window.TSUKAN_MOCK_EXAM_QUESTIONS) ? window.TSUKAN_MOCK_EXAM_QUESTIONS : [];
const QUESTION_BANK = Array.isArray(window.TSUKAN_QUESTION_BANK) ? window.TSUKAN_QUESTION_BANK : [];

Object.entries(DATA_FILE_STATUS).forEach(([name, ok]) => {
  if (!ok) console.error("教材データを読み込めませんでした: " + name);
});



const state = {
  units: [],
  practiceLogs: [],
  pastExamLogs: [],
  practicalLogs: [],
  mockExamResults: [],
  drillResults: [],
  aiAnalyses: [],
  lessonOverrides: [],
  aiSettings: {
    enabled: false,
    endpointUrl: "",
    lastTestedAt: "",
    lastStatus: "",
    lastError: ""
  },
  studyPlans: [],
  userSettings: {},
  pastExamMappings: [],
  importedPastExamQuestions: [],
  storageWarnings: [],
  pendingRestore: null,
  curriculumProgress: [],
  drill: {
    mode: "通関業法ドリル",
    currentQuestionId: "",
    selectedAnswer: "",
    graded: false,
    sessionQuestionIds: [],
    answers: [],
    startedAt: "",
    targetWeaknessTag: "",
    targetWeaknessGroup: ""
  },
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
  lessonFilters: {
    subject: "すべて",
    courseId: "すべて",
    status: "すべて",
    understanding: "すべて",
    reviewOnly: false
  },
  lessonActionMessage: {
    lessonId: "",
    message: ""
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
  pastMappingFilters: {
    examName: "すべて",
    year: "すべて",
    subject: "すべて",
    topic: "すべて",
    weakness: "すべて",
    coverage: "すべて",
    unmappedOnly: false
  },
  pendingPastExamImport: null,
  expandedPastQuestionId: "",
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
    currentAnalysisId: "",
    apiStatus: "未送信",
    apiResponseText: "",
    apiModel: "",
    apiUsage: {},
    apiError: "",
    sending: false,
    highlightSend: false
  },
  aiTutorForm: {
    targetType: "現在のレッスン",
    targetId: "",
    questionType: "質問に直接回答",
    explanationLevel: "標準",
    userQuestion: "",
    promptText: "",
    currentAnalysisId: "",
    apiStatus: "未送信",
    apiResponseText: "",
    apiModel: "",
    apiUsage: {},
    apiError: "",
    sending: false,
    sentViaApi: false
  },
  aiSuggestionForm: {
    targetType: "レッスン確認問題",
    targetId: "",
    suggestionType: "弱点タグ提案",
    memo: "",
    promptText: "",
    currentAnalysisId: "",
    apiStatus: "未送信",
    apiResponseText: "",
    apiModel: "",
    apiUsage: {},
    apiError: "",
    sending: false,
    sentViaApi: false,
    suggestionParsed: false,
    suggestionObject: null,
    rawSuggestionText: "",
    appliedFields: []
  },
  mockExam: {
    selectedMode: "light15",
    active: null,
    currentIndex: 0,
    lastResultId: "",
    lastReviewResult: null
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
  state.mockExamResults = normalizeArray(readJson(STORAGE_KEYS.mockExamResults)).map(normalizeMockExamResult);
  state.drillResults = normalizeArray(readJson(STORAGE_KEYS.drillResults)).map(normalizeDrillResult);
  state.aiAnalyses = normalizeArray(readJson(STORAGE_KEYS.aiAnalyses)).map(normalizeAiAnalysis);
  state.lessonOverrides = normalizeArray(readJson(STORAGE_KEYS.lessonOverrides)).map(normalizeLessonOverride);
  state.aiSettings = normalizeAiSettings(readJson(STORAGE_KEYS.aiSettings));
  state.studyPlans = normalizeArray(readJson(STORAGE_KEYS.studyPlans)).map(normalizeStudyPlan);
  state.curriculumProgress = normalizeArray(readJson(STORAGE_KEYS.curriculumProgress)).map(normalizeCurriculumProgress);
  state.userSettings = normalizePlainObject(readJson(STORAGE_KEYS.userSettings));
  state.pastExamMappings = normalizeArray(readJson(STORAGE_KEYS.pastExamMappings)).map(normalizePastExamMapping);
  state.importedPastExamQuestions = normalizeArray(readJson(STORAGE_KEYS.importedPastExamQuestions)).map(normalizeImportedPastExamQuestion);
  localStorage.setItem(STORAGE_KEYS.version, APP_VERSION);
}

function normalizeArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizePlainObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
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

function normalizeMockExamResult(result) {
  const normalized = {
    id: "",
    mode: "",
    title: "",
    startedAt: "",
    completedAt: "",
    totalQuestions: 0,
    correctCount: 0,
    scoreRate: 0,
    resultLevel: "未判定",
    answers: [],
    weaknessTags: [],
    subjectSummary: {},
    topicSummary: {},
    weaknessSummary: {},
    reviewNeeded: false,
    memo: "",
    ...(result || {})
  };
  if (!normalized.id) normalized.id = makeMockExamResultId();
  if (!normalized.startedAt) normalized.startedAt = new Date().toISOString();
  if (!normalized.completedAt) normalized.completedAt = normalized.startedAt;
  if (!["A", "B", "C", "未判定"].includes(normalized.resultLevel)) normalized.resultLevel = "未判定";
  normalized.answers = normalizeArray(normalized.answers).map((answer) => ({
    questionId: String(answer?.questionId || ""),
    userAnswer: String(answer?.userAnswer || ""),
    correct: Boolean(answer?.correct),
    subject: String(answer?.subject || ""),
    topic: String(answer?.topic || ""),
    difficulty: String(answer?.difficulty || ""),
    questionType: String(answer?.questionType || ""),
    weaknessTag: String(answer?.weaknessTag || ""),
    answeredAt: answer?.answeredAt || ""
  })).filter((answer) => answer.questionId);
  normalized.weaknessTags = normalizeArray(normalized.weaknessTags).map(String).filter(Boolean);
  normalized.subjectSummary = normalized.subjectSummary && typeof normalized.subjectSummary === "object" ? normalized.subjectSummary : {};
  normalized.topicSummary = normalized.topicSummary && typeof normalized.topicSummary === "object" ? normalized.topicSummary : {};
  normalized.weaknessSummary = normalized.weaknessSummary && typeof normalized.weaknessSummary === "object" ? normalized.weaknessSummary : {};
  if (!Object.keys(normalized.subjectSummary).length && normalized.answers.length) normalized.subjectSummary = buildMockSubjectSummary(normalized.answers);
  if (!Object.keys(normalized.topicSummary).length && normalized.answers.length) normalized.topicSummary = buildMockTopicSummary(normalized.answers);
  if (!Object.keys(normalized.weaknessSummary).length && normalized.answers.length) normalized.weaknessSummary = buildMockWeaknessSummary(normalized.answers);
  normalized.totalQuestions = Number(normalized.totalQuestions || normalized.answers.length || 0);
  normalized.correctCount = Number(normalized.correctCount || normalized.answers.filter((answer) => answer.correct).length || 0);
  normalized.scoreRate = Number(normalized.scoreRate || (normalized.totalQuestions ? Math.round((normalized.correctCount / normalized.totalQuestions) * 100) : 0));
  normalized.reviewNeeded = Boolean(normalized.reviewNeeded || normalized.resultLevel === "C");
  normalized.memo = String(normalized.memo || "");
  return normalized;
}

function normalizeDrillResult(result) {
  const normalized = {
    id: "",
    subject: "通関業法",
    mode: "通関業法10問",
    targetWeaknessTag: "",
    targetWeaknessGroup: "",
    startedAt: "",
    completedAt: "",
    totalQuestions: 0,
    correctCount: 0,
    scoreRate: 0,
    resultLevel: "未判定",
    answers: [],
    weaknessTags: [],
    reviewNeeded: false,
    ...(result || {})
  };
  if (!normalized.id) normalized.id = makeDrillResultId();
  normalized.subject = String(normalized.subject || "通関業法");
  normalized.mode = String(normalized.mode || "通関業法10問");
  normalized.targetWeaknessTag = String(normalized.targetWeaknessTag || "");
  normalized.targetWeaknessGroup = String(normalized.targetWeaknessGroup || "");
  normalized.startedAt = String(normalized.startedAt || "");
  normalized.completedAt = String(normalized.completedAt || "");
  normalized.answers = normalizeArray(normalized.answers).map((answer) => ({
    questionId: String(answer?.questionId || ""),
    userAnswer: String(answer?.userAnswer || ""),
    correct: Boolean(answer?.correct),
    subject: String(answer?.subject || ""),
    topic: String(answer?.topic || ""),
    weaknessTag: String(answer?.weaknessTag || "")
  })).filter((answer) => answer.questionId);
  normalized.totalQuestions = Number(normalized.totalQuestions || normalized.answers.length || 0);
  normalized.correctCount = Number(normalized.correctCount || normalized.answers.filter((answer) => answer.correct).length || 0);
  normalized.scoreRate = normalized.totalQuestions ? Math.round((normalized.correctCount / normalized.totalQuestions) * 100) : Number(normalized.scoreRate || 0);
  normalized.resultLevel = normalized.scoreRate >= 90 ? "A" : normalized.scoreRate >= 70 ? "B" : normalized.totalQuestions ? "C" : "未判定";
  normalized.weaknessTags = normalizeArray(normalized.weaknessTags).map(String).filter(Boolean);
  if (!normalized.weaknessTags.length) {
    normalized.weaknessTags = [...new Set(normalized.answers.filter((answer) => !answer.correct).map((answer) => answer.weaknessTag).filter(Boolean))];
  }
  normalized.reviewNeeded = Boolean(normalized.reviewNeeded || normalized.resultLevel === "C");
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
    responseText: "",
    resultMemo: "",
    questionType: "",
    explanationLevel: "",
    userQuestion: "",
    savedAsReviewMemo: false,
    markedAsWeaknessSuggestion: false,
    markedForNextReview: false,
    sentViaApi: false,
    model: "",
    usage: {},
    error: "",
    suggestionParsed: false,
    suggestionObject: null,
    rawSuggestionText: "",
    appliedAt: "",
    appliedFields: [],
    correctionType: "",
    ...(item || {})
  };
  if (!normalized.id) normalized.id = makeAiAnalysisId();
  if (!normalized.createdAt) normalized.createdAt = new Date().toISOString();
  if (!normalized.resultMemo) normalized.resultMemo = "";
  normalized.sentViaApi = Boolean(normalized.sentViaApi);
  normalized.savedAsReviewMemo = Boolean(normalized.savedAsReviewMemo);
  normalized.markedAsWeaknessSuggestion = Boolean(normalized.markedAsWeaknessSuggestion);
  normalized.markedForNextReview = Boolean(normalized.markedForNextReview);
  normalized.usage = normalized.usage && typeof normalized.usage === "object" ? normalized.usage : {};
  normalized.error = String(normalized.error || "");
  normalized.responseText = String(normalized.responseText || "");
  normalized.model = String(normalized.model || "");
  normalized.questionType = String(normalized.questionType || "");
  normalized.explanationLevel = String(normalized.explanationLevel || "");
  normalized.userQuestion = String(normalized.userQuestion || "");
  normalized.suggestionParsed = Boolean(normalized.suggestionParsed);
  normalized.suggestionObject = normalized.suggestionObject && typeof normalized.suggestionObject === "object" ? normalized.suggestionObject : null;
  normalized.rawSuggestionText = String(normalized.rawSuggestionText || "");
  normalized.appliedAt = String(normalized.appliedAt || "");
  normalized.appliedFields = normalizeArray(normalized.appliedFields).map(String).filter(Boolean);
  normalized.correctionType = String(normalized.correctionType || "");
  return normalized;
}

function normalizeLessonOverride(item) {
  return {
    id: String(item?.id || `lesson-override-${Date.now()}-${Math.random().toString(16).slice(2)}`),
    lessonId: String(item?.lessonId || item?.targetLessonId || ""),
    title: String(item?.title || item?.heading || "追加教材"),
    body: String(item?.body || item?.content || item?.text || ""),
    createdAt: String(item?.createdAt || "")
  };
}

function normalizeAiSettings(item) {
  return {
    enabled: false,
    endpointUrl: "",
    lastTestedAt: String(item?.lastTestedAt || ""),
    lastStatus: "v3.0でも廃止",
    lastError: ""
  };
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

function safeJsonParse(raw, fallback, label = "JSON") {
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn(`${label}を読み込めませんでした`, error);
    state.storageWarnings.push(`${label}を読み込めませんでした。`);
    return fallback;
  }
}

function readJson(key, fallback = null) {
  return safeJsonParse(localStorage.getItem(key), fallback, key);
}

function saveUnits() {
  localStorage.setItem(STORAGE_KEYS.units, JSON.stringify(state.units));
  localStorage.setItem(STORAGE_KEYS.practiceLogs, JSON.stringify(state.practiceLogs));
  localStorage.setItem(STORAGE_KEYS.pastExamLogs, JSON.stringify(state.pastExamLogs));
  localStorage.setItem(STORAGE_KEYS.practicalLogs, JSON.stringify(state.practicalLogs));
  localStorage.setItem(STORAGE_KEYS.mockExamResults, JSON.stringify(state.mockExamResults));
  localStorage.setItem(STORAGE_KEYS.drillResults, JSON.stringify(state.drillResults));
  localStorage.setItem(STORAGE_KEYS.aiAnalyses, JSON.stringify(state.aiAnalyses));
  localStorage.setItem(STORAGE_KEYS.lessonOverrides, JSON.stringify(state.lessonOverrides));
  localStorage.setItem(STORAGE_KEYS.aiSettings, JSON.stringify(sanitizeAiSettings(state.aiSettings)));
  localStorage.setItem(STORAGE_KEYS.studyPlans, JSON.stringify(state.studyPlans));
  localStorage.setItem(STORAGE_KEYS.curriculumProgress, JSON.stringify(state.curriculumProgress));
  localStorage.setItem(STORAGE_KEYS.userSettings, JSON.stringify(state.userSettings));
  localStorage.setItem(STORAGE_KEYS.pastExamMappings, JSON.stringify(state.pastExamMappings));
  localStorage.setItem(STORAGE_KEYS.importedPastExamQuestions, JSON.stringify(state.importedPastExamQuestions));
  localStorage.setItem(STORAGE_KEYS.version, APP_VERSION);
}

function sanitizeAiSettings(settings) {
  return {
    enabled: false,
    endpointUrl: "",
    lastTestedAt: "",
    lastStatus: "v3.0でも廃止",
    lastError: ""
  };
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

function makePastExamMappingId() {
  const random = Math.random().toString(36).slice(2, 10);
  return `mapping-${Date.now().toString(36)}-${random}`;
}

function normalizeImportedPastExamQuestion(question, wrapper = {}) {
  const normalized = {
    id: String(question?.id || "").trim(),
    year: question?.year ?? wrapper.year ?? "",
    examName: String(question?.examName || wrapper.examName || "").trim(),
    subject: String(question?.subject || "").trim(),
    questionNo: String(question?.questionNo || "").trim(),
    topic: String(question?.topic || "").trim(),
    questionType: String(question?.questionType || "").trim(),
    questionText: String(question?.questionText || question?.question || "").trim(),
    choices: Array.isArray(question?.choices) ? question.choices.map(String) : [],
    answer: String(question?.answer || "").trim(),
    explanation: String(question?.explanation || "").trim(),
    weaknessTag: String(question?.weaknessTag || "").trim(),
    importedAt: String(question?.importedAt || "").trim()
  };
  return normalized;
}

function normalizePastExamMapping(mapping) {
  const normalized = {
    id: String(mapping?.id || "").trim(),
    pastQuestionId: String(mapping?.pastQuestionId || "").trim(),
    mappedLessonIds: Array.isArray(mapping?.mappedLessonIds) ? mapping.mappedLessonIds.map(String).filter(Boolean) : [],
    mappedQuestionIds: Array.isArray(mapping?.mappedQuestionIds) ? mapping.mappedQuestionIds.map(String).filter(Boolean) : [],
    coverageLevel: String(mapping?.coverageLevel || "未判定").trim(),
    coverageReason: String(mapping?.coverageReason || "").trim(),
    missingContent: String(mapping?.missingContent || "").trim(),
    neededLesson: String(mapping?.neededLesson || "").trim(),
    neededQuestions: String(mapping?.neededQuestions || "").trim(),
    neededDrill: String(mapping?.neededDrill || "").trim(),
    weaknessTag: String(mapping?.weaknessTag || "").trim(),
    reviewPriority: String(mapping?.reviewPriority || "未設定").trim(),
    updatedAt: String(mapping?.updatedAt || "").trim()
  };
  if (!normalized.id) normalized.id = makePastExamMappingId();
  if (!PAST_MAPPING_COVERAGE_LEVELS.includes(normalized.coverageLevel)) normalized.coverageLevel = "未判定";
  if (!PAST_MAPPING_REVIEW_PRIORITIES.includes(normalized.reviewPriority)) normalized.reviewPriority = "未設定";
  normalized.mappedLessonIds = [...new Set(normalized.mappedLessonIds)];
  normalized.mappedQuestionIds = [...new Set(normalized.mappedQuestionIds)];
  return normalized;
}

function makeMockExamResultId() {
  const random = Math.random().toString(36).slice(2, 10);
  return `mock-${Date.now().toString(36)}-${random}`;
}

function makeDrillResultId() {
  const random = Math.random().toString(36).slice(2, 10);
  return `drill-${Date.now().toString(36)}-${random}`;
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
  if (lesson.id === "lesson-kanzeihou-mini-exam") {
    if (correct >= 13) return "A";
    if (correct >= 9) return "B";
    return "C";
  }
  if (lesson.id === "lesson-practical-mini-exam") {
    if (correct >= 13) return "A";
    if (correct >= 9) return "B";
    return "C";
  }
  if (lesson.id === "lesson-tsukangyoho-mini-exam") {
    if (correct >= 9) return "A";
    if (correct >= 6) return "B";
    return "C";
  }
  if (correct === lesson.questions.length) return "A";
  if (correct >= Math.ceil(lesson.questions.length * 0.66)) return "B";
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
  const wrongTags = getWrongLessonTags(lessonId);
  if (progress.understanding === "C") return "C判定のため最優先復習";
  if (progress.understanding === "B") return "B判定のため確認復習";
  if (lessonId === "lesson-practical-mini-exam" && wrongTags.length) return "ミニ模試で失点";
  if (wrongTags.some((tag) => /品目分類|統計品目番号|税率適用/.test(tag))) return "品目分類で誤答";
  if (wrongTags.some((tag) => /課税価格|加算要素|控除要素|為替換算/.test(tag))) return "課税価格で誤答";
  if (wrongTags.some((tag) => /申告書|インボイス|NACCS/.test(tag))) return "申告書作成で誤答";
  if (wrongTags.some((tag) => /関税額|消費税|税額計算|端数/.test(tag))) return "税額計算で誤答";
  if (wrongTags.some((tag) => /時間不足/.test(tag))) return "時間配分が未理解";
  if (lessonId === "lesson-kanzeihou-mini-exam" && wrongTags.length) return "ミニ模試で失点";
  if (wrongTags.some((tag) => /保税/.test(tag))) return "保税制度で誤答";
  if (wrongTags.some((tag) => /課税価格|加算要素|控除要素/.test(tag))) return "課税価格で誤答";
  if (wrongTags.some((tag) => /納税|申告|更正|期限|加算税/.test(tag))) return "納税・申告系で誤答";
  if (wrongTags.some((tag) => /罰則|処分|懲戒|監督|トラップ/.test(tag))) return "罰則トラップで誤答";
  if (lessonId === "lesson-tsukangyoho-mini-exam" && wrongTags.length) return "ミニ模試で失点";
  if (progress.status === "復習中") return "復習中に設定済み";
  if (progress.reviewNeeded) return "復習対象に設定済み";
  return "定期確認";
}

function getRecommendedLesson() {
  const practicalPriority = getPracticalPriorityLessons()[0];
  if (practicalPriority) return practicalPriority;
  const kanzeiPriority = getKanzeihouPriorityLessons()[0];
  if (kanzeiPriority) return kanzeiPriority;
  const tsukanPriority = getTsukangyohoPriorityLessons()[0];
  if (tsukanPriority) return tsukanPriority;
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

function getTsukangyohoLessons() {
  return getLessonsByCourse("course-tsukangyoho-basic");
}

function getKanzeihouLessons() {
  return getLessonsByCourse("course-kanzeihou-intro");
}

function getPracticalLessons() {
  return getLessonsByCourse("course-practical-intro");
}

function getTsukangyohoPriorityLessons() {
  const lessons = getTsukangyohoLessons();
  const candidates = [];
  lessons.forEach((lesson) => {
    const progress = getLessonProgress(lesson.id);
    const wrongTags = getWrongLessonTags(lesson.id);
    const isPenaltyWeakness = wrongTags.some((tag) => /罰則|処分|懲戒|監督|トラップ/.test(tag));
    if (progress.understanding === "C") {
      candidates.push({ lesson, progress, reason: "C判定のため復習", type: "レッスン復習", priorityScore: 100 });
    } else if (progress.reviewNeeded) {
      candidates.push({ lesson, progress, reason: "復習対象の通関業法レッスン", type: "レッスン復習", priorityScore: 90 });
    } else if (lesson.id === "lesson-tsukangyoho-mini-exam" && ["B", "C"].includes(progress.understanding)) {
      candidates.push({ lesson, progress, reason: "ミニ模試がB判定以下", type: "レッスン復習", priorityScore: 85 });
    } else if (isPenaltyWeakness) {
      candidates.push({ lesson, progress, reason: "罰則トラップで誤答あり", type: "レッスン復習", priorityScore: 80 });
    } else if (progress.lastStudiedAt && daysSinceIso(progress.lastStudiedAt) > 21) {
      candidates.push({ lesson, progress, reason: "最終学習日が古いレッスン", type: "レッスン復習", priorityScore: 55 - Math.min(daysSinceIso(progress.lastStudiedAt), 45) });
    }
  });
  const next = lessons.find((lesson) => getLessonProgress(lesson.id).status === "未着手");
  if (next) {
    candidates.push({ lesson: next, progress: getLessonProgress(next.id), reason: "未着手の次レッスン", type: "レッスン学習", priorityScore: 88 });
  }
  return candidates.sort((a, b) => (b.priorityScore || 0) - (a.priorityScore || 0) || a.lesson.order - b.lesson.order);
}

function getKanzeihouPriorityLessons() {
  const lessons = getKanzeihouLessons();
  const candidates = [];
  lessons.forEach((lesson) => {
    const progress = getLessonProgress(lesson.id);
    const wrongTags = getWrongLessonTags(lesson.id);
    const isBondedWeakness = wrongTags.some((tag) => /保税/.test(tag));
    const isTaxWeakness = wrongTags.some((tag) => /納税|申告|更正|期限|加算税/.test(tag));
    const isValueWeakness = wrongTags.some((tag) => /課税価格|加算要素|控除要素/.test(tag));
    if (progress.understanding === "C") {
      candidates.push({ lesson, progress, reason: "C判定のため復習", type: "レッスン復習", priorityScore: 110 });
    } else if (progress.reviewNeeded) {
      candidates.push({ lesson, progress, reason: "復習対象の関税法等レッスン", type: "レッスン復習", priorityScore: 95 });
    } else if (lesson.id === "lesson-kanzeihou-mini-exam" && ["B", "C"].includes(progress.understanding)) {
      candidates.push({ lesson, progress, reason: "ミニ模試がB判定以下", type: "レッスン復習", priorityScore: 92 });
    } else if (isBondedWeakness) {
      candidates.push({ lesson, progress, reason: "保税制度で誤答あり", type: "レッスン復習", priorityScore: 86 });
    } else if (isValueWeakness) {
      candidates.push({ lesson, progress, reason: "課税価格の加算要素で誤答あり", type: "レッスン復習", priorityScore: 84 });
    } else if (isTaxWeakness) {
      candidates.push({ lesson, progress, reason: "納税・申告系で誤答あり", type: "レッスン復習", priorityScore: 82 });
    } else if (progress.lastStudiedAt && daysSinceIso(progress.lastStudiedAt) > 21) {
      candidates.push({ lesson, progress, reason: "最終学習日が古いレッスン", type: "レッスン復習", priorityScore: 58 - Math.min(daysSinceIso(progress.lastStudiedAt), 45) });
    }
  });
  const next = lessons.find((lesson) => getLessonProgress(lesson.id).status === "未着手");
  if (next) {
    candidates.push({ lesson: next, progress: getLessonProgress(next.id), reason: "未着手の次レッスン", type: "レッスン学習", priorityScore: 90 });
  }
  return candidates.sort((a, b) => (b.priorityScore || 0) - (a.priorityScore || 0) || a.lesson.order - b.lesson.order);
}

function getPracticalPriorityLessons() {
  const lessons = getPracticalLessons();
  const candidates = [];
  lessons.forEach((lesson) => {
    const progress = getLessonProgress(lesson.id);
    const wrongTags = getWrongLessonTags(lesson.id);
    const relatedLogs = getRelatedPracticalLogsForLesson(lesson);
    const logWeak = relatedLogs.some((log) => ["×", "△"].includes(log.result) || log.retry || log.priority === "高");
    const frequentWeak = wrongTags.some((tag) => /品目分類|課税価格|加算要素|申告書|税額計算|時間不足/.test(tag));
    if (progress.understanding === "C") {
      candidates.push({ lesson, progress, reason: "C判定のため復習", type: "レッスン復習", priorityScore: 120 });
    } else if (progress.reviewNeeded) {
      candidates.push({ lesson, progress, reason: "復習対象の通関実務レッスン", type: "レッスン復習", priorityScore: 105 });
    } else if (lesson.id === "lesson-practical-mini-exam" && ["B", "C"].includes(progress.understanding)) {
      candidates.push({ lesson, progress, reason: "実務ミニ模試がB判定以下", type: "レッスン復習", priorityScore: 100 });
    } else if (frequentWeak) {
      const reason = wrongTags.some((tag) => /品目分類/.test(tag)) ? "品目分類で誤答あり"
        : wrongTags.some((tag) => /課税価格|加算要素/.test(tag)) ? "課税価格の加算要素で誤答あり"
        : wrongTags.some((tag) => /申告書/.test(tag)) ? "申告書作成で誤答あり"
        : wrongTags.some((tag) => /時間不足/.test(tag)) ? "時間配分レッスン未理解"
        : "頻出論点で誤答あり";
      candidates.push({ lesson, progress, reason, type: "レッスン復習", priorityScore: 94 });
    } else if (logWeak) {
      candidates.push({ lesson, progress, reason: "関連実務ログに×または△あり", type: "レッスン復習", priorityScore: 88 });
    } else if (progress.lastStudiedAt && daysSinceIso(progress.lastStudiedAt) > 14) {
      candidates.push({ lesson, progress, reason: "最終学習日が古いレッスン", type: "レッスン復習", priorityScore: 60 - Math.min(daysSinceIso(progress.lastStudiedAt), 45) });
    }
  });
  const next = lessons.find((lesson) => getLessonProgress(lesson.id).status === "未着手");
  if (next) {
    candidates.push({ lesson: next, progress: getLessonProgress(next.id), reason: "未着手の次レッスン", type: "レッスン学習", priorityScore: 98 });
  }
  return candidates.sort((a, b) => (b.priorityScore || 0) - (a.priorityScore || 0) || a.lesson.order - b.lesson.order);
}

function getRelatedPracticalLogsForLesson(lesson) {
  const keywords = [lesson.title, lesson.relatedUnitId, ...(lesson.keyPoints || []), ...(lesson.traps || []), ...(lesson.confusingPoints || [])].join(" ");
  return state.practicalLogs.filter((log) => {
    const haystack = [
      log.practicalType,
      log.relatedUnitId,
      log.relatedUnitTitle,
      log.declarationType,
      log.calculationType,
      log.classificationMemo,
      log.calculationMemo,
      log.invoiceMemo,
      log.exchangeRateMemo,
      log.taxRateMemo,
      log.nacssMemo,
      log.materialReadingMemo,
      log.mistakeField,
      log.mistakeReason,
      ...(log.weaknessTags || [])
    ].join(" ");
    return log.relatedUnitId === lesson.relatedUnitId ||
      (lesson.subject === "通関実務" && (log.weaknessTags || []).some((tag) => keywords.includes(tag) || haystack.includes(tag))) ||
      practicalLessonKeywordMatch(lesson.title, haystack);
  });
}

function practicalLessonKeywordMatch(title, text) {
  const pairs = [
    [/輸出申告/, /輸出申告|申告書作成/],
    [/輸入申告/, /輸入申告|課税価格|消費税/],
    [/インボイス/, /インボイス|資料読み取り/],
    [/品目分類|統計品目番号|税番/, /品目分類|統計品目番号|税率適用/],
    [/課税価格|加算|算入しない|運賃|保険料|無償|ロイヤルティ/, /課税価格|加算要素|控除要素|運賃|保険料/],
    [/関税額|消費税|端数|税率/, /関税額|消費税|地方消費税|端数|税率/],
    [/NACCS/, /NACCS入力/],
    [/時間配分/, /時間不足/]
  ];
  return pairs.some(([titlePattern, textPattern]) => titlePattern.test(title) && textPattern.test(text));
}

function getWrongLessonTags(lessonId) {
  const lesson = getLessonById(lessonId);
  const progress = getLessonProgress(lessonId);
  if (!lesson) return [];
  return progress.questionResults
    .filter((result) => !result.correct)
    .map((result) => lesson.questions.find((question) => question.id === result.questionId)?.weaknessTag)
    .filter(Boolean);
}

function daysSinceIso(isoString) {
  if (!isoString) return 999;
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return 999;
  return Math.floor((Date.now() - date.getTime()) / 86400000);
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
  const mockItems = buildTodayMockItems(duration);
  const crossReviewItems = buildTodayCrossReviewItems(duration);
  const drillItems = buildTodayDrillItems(duration);
  const weaknessItems = buildTodayWeaknessItems().slice(0, duration === "15分" ? 1 : duration === "30分" ? 1 : duration === "1時間" ? 2 : duration === "2時間" ? 2 : 3);
  const priorityItems = uniqueTodayItems([
    ...weaknessItems.filter((item) => item.priority === "最優先" || item.priority === "高"),
    ...drillItems.filter((item) => item.priority === "最優先" || item.priority === "高"),
    ...mockItems.filter((item) => item.priority === "最優先" || item.priority === "高"),
    ...crossReviewItems.filter((item) => item.priority === "最優先" || item.priority === "高"),
    ...lessonItems.filter((item) => item.priority === "最優先"),
    ...unitItems.filter((item) => item.priority === "最優先"),
    ...practiceItems.filter((item) => item.priority === "高"),
    ...pastExamItems.filter((item) => item.priority === "高"),
    ...practicalItems.filter((item) => item.priority === "高")
  ]).slice(0, Math.max(limits.priority, 3));
  const manualItems = normalizeArray(plan.manualItems).map(makeTodayMenuItem);
  const aiItems = duration === "じっくり" ? [makeTodayMenuItem({
    id: "today-ai-consult",
    type: "AI相談",
    title: "今日のメニューをAIに相談",
    description: "未完了項目と弱点タグを含めて、30分・1時間メニューを相談する。",
    reason: "じっくり学習では方針確認まで行う",
    priority: "通常",
    estimatedMinutes: 10
  })] : [];
  const recommended = uniqueTodayItems([
    ...manualItems,
    ...priorityItems,
    ...mockItems,
    ...crossReviewItems,
    ...drillItems,
    ...lessonItems,
    ...pastExamItems,
    ...practicalItems,
    ...practiceItems,
    ...weaknessItems,
    ...aiItems,
    ...unitItems
  ]).slice(0, limits.total);
  const allItems = uniqueTodayItems([...recommended, ...manualItems, ...priorityItems, ...mockItems, ...crossReviewItems, ...drillItems, ...lessonItems, ...practiceItems, ...pastExamItems, ...practicalItems, ...weaknessItems, ...aiItems]);
  return { duration, date: plan.date, plan, recommended, priorityItems, lessonItems, practiceItems, pastExamItems, practicalItems, mockItems, crossReviewItems, drillItems, weaknessItems, aiItems, manualItems, allItems };
}

function buildTodayDrillItems(duration) {
  const items = [];
  const latest = state.drillResults.find((result) => result.subject === "通関業法");
  const latestKanzeihou = state.drillResults.find((result) => result.subject === "関税法等");
  const latestJitsumu = state.drillResults.find((result) => result.subject === "通関実務");
  const weakTags = getDrillWeaknessTagRanking("通関業法");
  const kanzeihouWeakTags = getDrillWeaknessTagRanking("関税法等");
  const jitsumuWeakTags = getDrillWeaknessTagRanking("通関実務");
  const cLesson = getTsukangyohoLessons().some((lesson) => getLessonProgress(lesson.id).understanding === "C");
  const kanzeihouCLesson = getKanzeihouLessons().some((lesson) => getLessonProgress(lesson.id).understanding === "C");
  const jitsumuCLesson = getPracticalLessons().some((lesson) => getLessonProgress(lesson.id).understanding === "C");
  const stale = !latest || daysSinceIso(latest.completedAt) >= 7;
  const staleKanzeihou = !latestKanzeihou || daysSinceIso(latestKanzeihou.completedAt) >= 7;
  const staleJitsumu = !latestJitsumu || daysSinceIso(latestJitsumu.completedAt) >= 5;
  const hasPenaltyWeak = weakTags.some((item) => /罰則|処分|義務|信用|通関士|確認/.test(item.tag) && item.count >= 1);
  const hasKanzeihouCoreWeak = kanzeihouWeakTags.some((item) => /保税|納期限|法定納期限|課税価格|加算要素|延滞税|加算税|申告・許可/.test(item.tag) && item.count >= 1);
  const hasJitsumuCoreWeak = jitsumuWeakTags.some((item) => /インボイス|品目分類|課税価格|加算要素|消費税|端数処理|資料読取|為替換算/.test(item.tag) && item.count >= 1);
  if (cLesson || latest?.resultLevel === "C" || stale) {
    items.push(makeTodayMenuItem({
      id: "drill-tsukangyoho-10",
      type: "通関業法ドリル",
      title: "通関業法10問ドリル",
      description: latest ? `直近 ${latest.scoreRate}% / 判定${latest.resultLevel}` : "未実施",
      reason: latest?.resultLevel === "C" ? "通関業法ドリルC判定" : cLesson ? "通関業法レッスンにC判定あり" : "通関業法問題をしばらく解いていない",
      priority: latest?.resultLevel === "C" || cLesson ? "最優先" : "高",
      priorityScore: latest?.resultLevel === "C" ? 120 : cLesson ? 105 : 70,
      estimatedMinutes: 12
    }));
  }
  if (hasPenaltyWeak) {
    items.push(makeTodayMenuItem({
      id: "drill-tsukangyoho-trap",
      type: "通関業法ドリル",
      title: weakTags.some((item) => /監督処分|懲戒/.test(item.tag)) ? "通関士・確認制度復習" : "罰則トラップ復習",
      description: weakTags.slice(0, 3).map((item) => `${item.tag}${item.count}`).join(" / "),
      reason: "罰則・処分・義務系の弱点タグが多い",
      priority: "高",
      priorityScore: 95,
      estimatedMinutes: 10
    }));
  }
  if (duration !== "15分") {
    items.push(makeTodayMenuItem({
      id: "drill-tsukangyoho-hikkake",
      type: "通関業法ドリル",
      title: "通関業法ひっかけ確認",
      description: "主体・権限者・罰則混同を10問で確認",
      reason: "通関業法の失点しやすい表現確認",
      priority: hasPenaltyWeak ? "高" : "中",
      priorityScore: hasPenaltyWeak ? 90 : 55,
      estimatedMinutes: 10
    }));
  }
  if (kanzeihouCLesson || latestKanzeihou?.resultLevel === "C" || staleKanzeihou) {
    items.push(makeTodayMenuItem({
      id: "drill-kanzeihou-10",
      type: "関税法等ドリル",
      title: "関税法等10問ドリル",
      description: latestKanzeihou ? `直近 ${latestKanzeihou.scoreRate}% / 判定${latestKanzeihou.resultLevel}` : "未実施",
      reason: latestKanzeihou?.resultLevel === "C" ? "関税法等ドリルC判定" : kanzeihouCLesson ? "関税法等レッスンにC判定あり" : "関税法等問題をしばらく解いていない",
      priority: latestKanzeihou?.resultLevel === "C" || kanzeihouCLesson ? "最優先" : "高",
      priorityScore: latestKanzeihou?.resultLevel === "C" ? 118 : kanzeihouCLesson ? 103 : 72,
      estimatedMinutes: 12
    }));
  }
  if (hasKanzeihouCoreWeak) {
    const top = kanzeihouWeakTags[0]?.tag || "保税・納税・課税価格";
    const mode = /課税価格|加算要素/.test(top) ? "課税価格ドリル" : /納期限|延滞税|加算税/.test(top) ? "納期限・加算税ドリル" : /保税運送/.test(top) ? "保税運送ドリル" : "保税地域ドリル";
    items.push(makeTodayMenuItem({
      id: `drill-kanzeihou-${mode}`,
      type: "関税法等ドリル",
      title: mode,
      description: kanzeihouWeakTags.slice(0, 3).map((item) => `${item.tag}${item.count}`).join(" / "),
      reason: "保税・納税・課税価格系の弱点タグが多い",
      priority: "高",
      priorityScore: 97,
      estimatedMinutes: 10
    }));
  }
  if (jitsumuCLesson || latestJitsumu?.resultLevel === "C" || staleJitsumu) {
    items.push(makeTodayMenuItem({
      id: "drill-jitsumu-10",
      type: "通関実務ドリル",
      title: "通関実務10問ドリル",
      description: latestJitsumu ? `直近 ${latestJitsumu.scoreRate}% / 判定${latestJitsumu.resultLevel}` : "未実施",
      reason: latestJitsumu?.resultLevel === "C" ? "通関実務ドリルC判定" : jitsumuCLesson ? "通関実務レッスンにC判定あり" : "通関実務問題をしばらく解いていない",
      priority: latestJitsumu?.resultLevel === "C" || jitsumuCLesson ? "最優先" : "高",
      priorityScore: latestJitsumu?.resultLevel === "C" ? 122 : jitsumuCLesson ? 108 : 76,
      estimatedMinutes: 15
    }));
  }
  if (hasJitsumuCoreWeak) {
    const top = jitsumuWeakTags[0]?.tag || "インボイス読取";
    const mode = /品目分類|税番/.test(top) ? "品目分類ドリル"
      : /課税価格|加算要素|不算入/.test(top) ? "通関実務課税価格ドリル"
      : /消費税|地方消費税/.test(top) ? "消費税・地方消費税ドリル"
      : /端数/.test(top) ? "端数処理ドリル"
      : /資料読取/.test(top) ? "資料読取ドリル"
      : "インボイス読取ドリル";
    items.push(makeTodayMenuItem({
      id: `drill-jitsumu-${mode}`,
      type: "通関実務ドリル",
      title: mode,
      description: jitsumuWeakTags.slice(0, 3).map((item) => `${item.tag}${item.count}`).join(" / "),
      reason: "通関実務の弱点タグが多い",
      priority: "高",
      priorityScore: 99,
      estimatedMinutes: 12
    }));
  }
  if (duration !== "15分") {
    items.push(makeTodayMenuItem({
      id: "drill-jitsumu-process",
      type: "通関実務ドリル",
      title: "手順ドリル",
      description: "問題要求、資料読取、分類、価格、税額の順を確認",
      reason: "通関実務は処理順の固定が得点に直結する",
      priority: hasJitsumuCoreWeak ? "高" : "中",
      priorityScore: hasJitsumuCoreWeak ? 94 : 58,
      estimatedMinutes: 10
    }));
  }
  return uniqueTodayItems(items);
}

function buildTodayLessonItems() {
  const items = [];
  const practicalPriorityItems = getPracticalPriorityLessons().map(({ lesson, progress, reason, type, priorityScore }) => makeTodayMenuItem({
    id: `lesson-${lesson.id}`,
    type,
    title: lesson.title,
    description: `${lesson.subject} / ${lesson.estimatedMinutes}分 / 理解度 ${progress.understanding}`,
    reason,
    priority: progress.understanding === "C" || reason.includes("C判定") ? "最優先" : reason.includes("未着手") ? "中" : "高",
    priorityScore,
    estimatedMinutes: lesson.estimatedMinutes,
    relatedUnitId: lesson.relatedUnitId,
    relatedLessonId: lesson.id
  }));
  items.push(...practicalPriorityItems);
  const kanzeiPriorityItems = getKanzeihouPriorityLessons().map(({ lesson, progress, reason, type, priorityScore }) => makeTodayMenuItem({
    id: `lesson-${lesson.id}`,
    type,
    title: lesson.title,
    description: `${lesson.subject} / ${lesson.estimatedMinutes}分 / 理解度 ${progress.understanding}`,
    reason,
    priority: progress.understanding === "C" || reason.includes("C判定") ? "最優先" : reason.includes("未着手") ? "中" : "高",
    priorityScore,
    estimatedMinutes: lesson.estimatedMinutes,
    relatedUnitId: lesson.relatedUnitId,
    relatedLessonId: lesson.id
  }));
  items.push(...kanzeiPriorityItems);
  const tsukanPriorityItems = getTsukangyohoPriorityLessons().map(({ lesson, progress, reason, type, priorityScore }) => makeTodayMenuItem({
    id: `lesson-${lesson.id}`,
    type,
    title: lesson.title,
    description: `${lesson.subject} / ${lesson.estimatedMinutes}分 / 理解度 ${progress.understanding}`,
    reason,
    priority: progress.understanding === "C" || reason.includes("C判定") ? "最優先" : reason.includes("未着手") ? "中" : "高",
    priorityScore,
    estimatedMinutes: lesson.estimatedMinutes,
    relatedUnitId: lesson.relatedUnitId,
    relatedLessonId: lesson.id
  }));
  items.push(...tsukanPriorityItems);
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
  const weaknessDrills = getRecommendedWeaknessDrills().slice(0, 5).map((item) => makeTodayMenuItem({
    id: `weakness-drill-${item.type}-${item.name}`,
    type: "弱点別ドリル",
    title: `弱点別ドリル：${item.name}${item.questionCount >= 10 ? "10問" : "5問"}`,
    description: `危険度 ${item.risk.label} / 対応 ${item.questionCount}問 / 正答率 ${item.stats.total ? `${item.stats.rate}%` : "未実施"}`,
    reason: item.reason,
    priority: item.risk.label === "最優先" ? "最優先" : item.risk.label === "危険" ? "高" : "中",
    priorityScore: item.score,
    estimatedMinutes: item.questionCount >= 10 ? 18 : 10
  }));
  const tagChecks = buildWeaknessRanking().slice(0, 3).map((item) => makeTodayMenuItem({
    id: `weakness-${item.tag}`,
    type: "弱点確認",
    title: item.tag,
    description: `関連 ${item.count}件 / 単元${item.unitCount}・演習${item.practiceLogCount}・過去問${item.pastExamLogCount}・実務${item.practicalLogCount}`,
    reason: "弱点タグの出現回数が多い",
    priority: item.count >= 3 ? "高" : "中",
    priorityScore: item.count * 8,
    estimatedMinutes: 10
  }));
  return uniqueTodayItems([...weaknessDrills, ...tagChecks]);
}

function buildTodayMockItems(duration) {
  const latest = getLatestMockResult();
  const items = [];
  if (latest?.resultLevel === "C") {
    items.push(makeTodayMenuItem({
      id: `mock-review-${latest.id}`,
      type: "模試復習",
      title: `${latest.title}の誤答復習`,
      description: `${latest.correctCount}/${latest.totalQuestions}正解 / ${latest.scoreRate}% / 判定${latest.resultLevel}`,
      reason: "前回模試C判定",
      priority: "最優先",
      priorityScore: 140,
      estimatedMinutes: 25,
      relatedMockResultId: latest.id
    }));
    items.push(makeTodayMenuItem({
      id: "mock-weakness-today",
      type: "弱点集中模試",
      title: "弱点集中模試",
      description: "前回模試の弱点タグとC判定レッスンを優先して確認",
      reason: "前回模試で間違えた論点を再確認",
      priority: "高",
      priorityScore: 120,
      estimatedMinutes: 30,
      mockMode: "weakness"
    }));
  }
  if (latest && daysSince(latest.completedAt.slice(0, 10)) >= 7) {
    items.push(makeTodayMenuItem({
      id: "mock-weekly-refresh",
      type: "総合模試",
      title: duration === "2時間" || duration === "じっくり" ? "60問総合模試" : "30問標準模試",
      description: "最新模試から7日以上経過しています。",
      reason: "総合模試の再点検時期",
      priority: "高",
      priorityScore: 88,
      estimatedMinutes: duration === "2時間" || duration === "じっくり" ? 100 : 40,
      mockMode: duration === "2時間" || duration === "じっくり" ? "full60" : "standard30"
    }));
  }
  if (!state.mockExamResults.some((result) => result.mode === "light15")) {
    items.push(makeTodayMenuItem({
      id: "mock-light-untried",
      type: "総合模試",
      title: "15問ライト模試",
      description: "3科目を短時間で横断確認",
      reason: "未実施の総合模試",
      priority: duration === "30分" || duration === "1時間" ? "高" : "中",
      priorityScore: 70,
      estimatedMinutes: 20,
      mockMode: "light15"
    }));
  }
  if ((duration === "1時間" || duration === "2時間" || duration === "じっくり") && !state.mockExamResults.some((result) => result.mode === "standard30")) {
    items.push(makeTodayMenuItem({
      id: "mock-standard-untried",
      type: "総合模試",
      title: "30問標準模試",
      description: "本試験に近い横断演習",
      reason: "未実施の標準模試",
      priority: "高",
      priorityScore: 80,
      estimatedMinutes: 45,
      mockMode: "standard30"
    }));
  }
  if ((duration === "2時間" || duration === "じっくり") && !state.mockExamResults.some((result) => result.mode === "full60")) {
    items.push(makeTodayMenuItem({
      id: "mock-full-untried",
      type: "総合模試",
      title: "60問総合模試",
      description: "通関業法15問、関税法等25問、通関実務20問の総合演習",
      reason: "本番寄せの総合演習が未実施",
      priority: "高",
      priorityScore: 82,
      estimatedMinutes: 100,
      mockMode: "full60"
    }));
  }
  const trapLatest = [...state.mockExamResults].filter((result) => result.mode === "trap20").sort((a, b) => (b.completedAt || "").localeCompare(a.completedAt || ""))[0];
  if (!trapLatest || trapLatest.scoreRate < 70) {
    items.push(makeTodayMenuItem({
      id: "mock-trap-check",
      type: "ひっかけ総点検",
      title: duration === "15分" ? "ひっかけ弱点タグ5問" : "ひっかけ総点検模試",
      description: "選択肢読解・主体・手続区分・罰則の横断確認",
      reason: trapLatest ? "ひっかけ問題の正答率が低い" : "ひっかけ総点検が未実施",
      priority: "通常",
      priorityScore: 68,
      estimatedMinutes: duration === "15分" ? 15 : 30,
      mockMode: duration === "15分" ? "weakness" : "trap20"
    }));
  }
  return items;
}

function buildTodayCrossReviewItems(duration) {
  const limit = duration === "15分" ? 1 : duration === "30分" ? 2 : duration === "1時間" ? 2 : 3;
  return getCrossReviewItems().slice(0, limit).map((item, index) => makeTodayMenuItem({
    id: `today-${item.id}`,
    type: "横断復習",
    title: item.title,
    description: `${item.subject} / ${item.type} / ${item.weaknessTag || "タグなし"}`,
    reason: item.reason,
    priority: index === 0 && item.priorityScore >= 90 ? "最優先" : "高",
    priorityScore: item.priorityScore,
    estimatedMinutes: 12,
    relatedUnitId: item.relatedUnitId || "",
    relatedLessonId: item.relatedLessonId || "",
    relatedMockResultId: item.mockResultId || ""
  }));
}

function makeTodayMenuItem(item) {
  return {
    id: "",
    type: "",
    title: "",
    description: "",
    reason: "",
    priority: "通常",
    priorityScore: 0,
    estimatedMinutes: 10,
    relatedUnitId: "",
    relatedLogId: "",
    relatedLessonId: "",
    relatedMockResultId: "",
    mockMode: "",
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

function getLatestMockResult() {
  return [...state.mockExamResults].sort((a, b) => (b.completedAt || "").localeCompare(a.completedAt || ""))[0] || null;
}

function getMockQuestionById(questionId) {
  return QUESTION_BANK.find((question) => question.id === questionId) || MOCK_EXAM_QUESTIONS.find((question) => question.id === questionId);
}

function getSubjectMockQuestions(subject) {
  return QUESTION_BANK.filter((question) => question.subject === subject);
}

function startMockExam(modeId = state.mockExam.selectedMode) {
  const questions = buildMockExamQuestions(modeId);
  state.mockExam = {
    selectedMode: modeId,
    active: {
      mode: modeId,
      title: MOCK_EXAM_MODES[modeId]?.title || "総合模試",
      startedAt: new Date().toISOString(),
      questions,
      answers: {},
      shortageMessage: buildMockShortageMessage(modeId, questions)
    },
    currentIndex: 0,
    lastResultId: "",
    lastReviewResult: null
  };
  renderMockExamView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function buildMockExamQuestions(modeId) {
  const mode = MOCK_EXAM_MODES[modeId] || MOCK_EXAM_MODES.light15;
  if (!mode) {
    console.error("模試定義を読み込めませんでした。data/mock-exams.jsを確認してください。");
    return [];
  }
  if (mode.composition && !["weakness", "trap20"].includes(modeId)) {
    return shuffleQuestions(uniqueQuestions(Object.entries(mode.composition).flatMap(([subject, count]) => pickQuestionsBySubject(subject, count))));
  }
  if (modeId === "weakness") {
    return buildWeaknessMockQuestions(30);
  }
  if (modeId === "trap20") return pickTrapQuestions(20);
  if (!MOCK_EXAM_MODES.light15) return [];
  return shuffleQuestions(uniqueQuestions(Object.entries(MOCK_EXAM_MODES.light15.composition).flatMap(([subject, count]) => pickQuestionsBySubject(subject, count))));
}

function pickQuestionsBySubject(subject, count, excludeIds = new Set()) {
  return QUESTION_BANK
    .filter((question) => question.subject === subject && !excludeIds.has(question.id))
    .sort((a, b) => mockQuestionPriority(b) - mockQuestionPriority(a) || a.id.localeCompare(b.id))
    .slice(0, count);
}

function pickQuestionsByWeaknessTags(tags, count, excludeIds = new Set()) {
  const tagSet = new Set(tags.filter(Boolean));
  return QUESTION_BANK
    .filter((question) => tagSet.has(question.weaknessTag) && !excludeIds.has(question.id))
    .sort((a, b) => tags.indexOf(a.weaknessTag) - tags.indexOf(b.weaknessTag) || mockQuestionPriority(b) - mockQuestionPriority(a))
    .slice(0, count);
}

function pickTrapQuestions(count, excludeIds = new Set()) {
  return QUESTION_BANK
    .filter((question) => !excludeIds.has(question.id))
    .map((question, index) => ({
      question,
      index,
      score: (question.difficulty === "ひっかけ" ? 80 : 0) +
        (question.questionType === "trapCheck" ? 70 : 0) +
        (TRAP_WEAKNESS_TAGS.includes(question.weaknessTag) ? 60 : 0) +
        (String(question.trapExplanation || "").length >= 35 ? 25 : 0)
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map((item) => item.question)
    .slice(0, count);
}

function shuffleQuestions(questions) {
  return [...questions].sort((a, b) => seededScore(`${todayString()}-${a.id}`) - seededScore(`${todayString()}-${b.id}`));
}

function seededScore(value) {
  return String(value).split("").reduce((sum, char) => ((sum * 31) + char.charCodeAt(0)) % 100000, 7);
}

function buildWeaknessMockQuestions(count = 30) {
  const priorityTags = getWeaknessPriorityTags();
  const reviewLessonIds = new Set(getReviewLessons().map(({ lesson }) => lesson.id));
  const wrongQuestionIds = new Set(state.mockExamResults.flatMap((result) => result.answers.filter((answer) => !answer.correct).map((answer) => answer.questionId)));
  state.drillResults.forEach((result) => result.answers.filter((answer) => !answer.correct).forEach((answer) => wrongQuestionIds.add(answer.questionId)));
  const selected = [];
  const add = (questions) => questions.forEach((question) => {
    if (question && selected.length < count && !selected.some((item) => item.id === question.id)) selected.push(question);
  });
  add([...wrongQuestionIds].map(getMockQuestionById).filter(Boolean));
  add(pickQuestionsByWeaknessTags(priorityTags, count - selected.length, new Set(selected.map((question) => question.id))));
  add(QUESTION_BANK.filter((question) => reviewLessonIds.has(question.lessonId)));
  add(pickTrapQuestions(count - selected.length, new Set(selected.map((question) => question.id))));
  add(shuffleQuestions(QUESTION_BANK));
  return selected.slice(0, count);
}

function getWeaknessPriorityTags() {
  const tags = [];
  state.drillResults.forEach((result) => result.answers.filter((answer) => !answer.correct).forEach((answer) => tags.push(answer.weaknessTag)));
  state.mockExamResults.forEach((result) => result.answers.filter((answer) => !answer.correct).forEach((answer) => tags.push(answer.weaknessTag)));
  getReviewLessons().forEach(({ lesson, progress }) => {
    if (progress.understanding === "C" || progress.reviewNeeded) tags.push(...getWrongLessonTags(lesson.id), lesson.weaknessTag);
  });
  buildWeaknessTagStats().filter((item) => ["最優先", "危険"].includes(item.risk.label)).forEach((item) => tags.push(item.tag));
  return rankFromValues(tags.filter(Boolean)).map((item) => item.label);
}

function mockQuestionPriority(question) {
  return (question.difficulty === "ひっかけ" ? 8 : 0) + (question.questionType === "trapCheck" ? 6 : 0) + (question.difficulty === "標準" ? 3 : 0);
}

function buildMockShortageMessage(modeId, questions) {
  const mode = MOCK_EXAM_MODES[modeId];
  if (!mode || questions.length >= mode.totalQuestions) return "";
  return `${mode.title}は問題バンクから${questions.length}/${mode.totalQuestions}問を出題しています。問題バンク追加後は自動で増えます。`;
}

function uniqueQuestions(questions) {
  const map = new Map();
  questions.forEach((question) => {
    if (!map.has(question.id)) map.set(question.id, question);
  });
  return [...map.values()];
}

function answerMockQuestion(questionId, value) {
  if (!state.mockExam.active) return;
  state.mockExam.active.answers[questionId] = {
    value,
    answeredAt: new Date().toISOString()
  };
  renderMockExamView();
}

function moveMockQuestion(delta) {
  if (!state.mockExam.active) return;
  const max = state.mockExam.active.questions.length - 1;
  state.mockExam.currentIndex = Math.min(max, Math.max(0, state.mockExam.currentIndex + delta));
  renderMockExamView();
  document.querySelector("#mockExamPlayer")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function finishMockExamEarly() {
  if (!state.mockExam.active) return;
  const confirmed = window.confirm("この模試を途中終了しますか？履歴には保存しません。");
  if (!confirmed) return;
  state.mockExam.active = null;
  renderMockExamView();
  showToast("途中終了しました。");
}

function startMockWrongReview(resultId = "") {
  const source = state.mockExamResults.find((result) => result.id === resultId) || getLatestMockResult();
  if (!source) {
    showToast("復習できる模試結果がありません。");
    return;
  }
  const questions = source.answers.filter((answer) => !answer.correct).map((answer) => getMockQuestionById(answer.questionId)).filter(Boolean);
  if (!questions.length) {
    showToast("この模試に誤答はありません。");
    return;
  }
  state.mockExam = {
    selectedMode: "mockWrongReview",
    active: {
      mode: "mockWrongReview",
      title: `${source.title} 誤答復習`,
      startedAt: new Date().toISOString(),
      questions,
      answers: {},
      reviewSourceResultId: source.id,
      shortageMessage: ""
    },
    currentIndex: 0,
    lastResultId: source.id,
    lastReviewResult: null
  };
  switchView("mock");
  renderMockExamView();
  document.querySelector("#mockExamPlayer")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function saveMockWrongReviewResult(result) {
  state.drillResults.unshift(normalizeDrillResult({
    id: makeDrillResultId(),
    subject: "横断",
    mode: "模試誤答復習",
    startedAt: result.startedAt,
    completedAt: result.completedAt,
    totalQuestions: result.totalQuestions,
    correctCount: result.correctCount,
    scoreRate: result.scoreRate,
    answers: result.answers,
    weaknessTags: result.weaknessTags,
    reviewNeeded: result.scoreRate < 70
  }));
}

function gradeMockExam() {
  const active = state.mockExam.active;
  if (!active) return;
  const unanswered = active.questions.filter((question) => !active.answers[question.id]?.value).length;
  const confirmed = window.confirm(`未回答は${unanswered}問です。採点しますか？`);
  if (!confirmed) return;
  const completedAt = new Date().toISOString();
  const answers = active.questions.map((question) => {
    const userAnswer = active.answers[question.id]?.value || "";
    return {
      questionId: question.id,
      userAnswer,
      correct: userAnswer === question.answer,
      subject: question.subject,
      topic: question.topic,
      difficulty: question.difficulty || "",
      questionType: question.questionType || question.type || "",
      weaknessTag: question.weaknessTag,
      answeredAt: active.answers[question.id]?.answeredAt || completedAt
    };
  });
  const correctCount = answers.filter((answer) => answer.correct).length;
  const totalQuestions = active.questions.length;
  const scoreRate = totalQuestions ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const weaknessTags = rankFromValues(answers.filter((answer) => !answer.correct).map((answer) => answer.weaknessTag)).map((item) => item.label);
  const subjectSummary = buildMockSubjectSummary(answers);
  const topicSummary = buildMockTopicSummary(answers);
  const weaknessSummary = buildMockWeaknessSummary(answers);
  const resultLevel = judgeMockResultLevel(active.mode, correctCount, scoreRate);
  const result = normalizeMockExamResult({
    id: makeMockExamResultId(),
    mode: active.mode,
    title: active.title,
    startedAt: active.startedAt,
    completedAt,
    totalQuestions,
    correctCount,
    scoreRate,
    resultLevel,
    answers,
    weaknessTags,
    subjectSummary,
    topicSummary,
    weaknessSummary,
    reviewNeeded: resultLevel === "C" || (resultLevel === "B" && Object.values(weaknessSummary).some((item) => item.wrong >= 2)),
    memo: ""
  });
  if (active.mode === "mockWrongReview") {
    saveMockWrongReviewResult(result);
    state.mockExam.lastReviewResult = result;
  } else {
    state.mockExamResults.unshift(result);
    state.mockExam.lastReviewResult = null;
  }
  state.mockExam.active = null;
  state.mockExam.lastResultId = active.mode === "mockWrongReview" ? "" : result.id;
  saveUnits();
  createAutoSnapshot(active.mode === "mockWrongReview" ? "drill_saved" : "mock_exam_saved");
  render();
  showToast(active.mode === "mockWrongReview" ? "模試誤答復習をドリル結果に保存しました。" : "模試結果を保存しました。");
}

function buildMockSubjectSummary(answers) {
  return ["通関業法", "関税法等", "通関実務"].reduce((acc, subject) => {
    const rows = answers.filter((answer) => answer.subject === subject);
    const correct = rows.filter((answer) => answer.correct).length;
    acc[subject] = {
      total: rows.length,
      correct,
      rate: rows.length ? Math.round((correct / rows.length) * 100) : 0
    };
    return acc;
  }, {});
}

function buildMockTopicSummary(answers) {
  return answers.reduce((acc, answer) => {
    const key = answer.topic || "未設定";
    if (!acc[key]) acc[key] = { total: 0, correct: 0, rate: 0, wrong: 0 };
    acc[key].total += 1;
    if (answer.correct) acc[key].correct += 1;
    acc[key].wrong = acc[key].total - acc[key].correct;
    acc[key].rate = Math.round((acc[key].correct / acc[key].total) * 100);
    return acc;
  }, {});
}

function buildMockWeaknessSummary(answers) {
  return answers.reduce((acc, answer) => {
    const key = answer.weaknessTag || "タグなし";
    if (!acc[key]) acc[key] = { total: 0, correct: 0, wrong: 0, rate: 0 };
    acc[key].total += 1;
    if (answer.correct) acc[key].correct += 1;
    acc[key].wrong = acc[key].total - acc[key].correct;
    acc[key].rate = Math.round((acc[key].correct / acc[key].total) * 100);
    return acc;
  }, {});
}

function judgeMockResultLevel(mode, correctCount, scoreRate) {
  if (mode === "light15") {
    if (correctCount >= 13) return "A";
    if (correctCount >= 9) return "B";
    return "C";
  }
  if (mode === "standard30") {
    if (correctCount >= 26) return "A";
    if (correctCount >= 18) return "B";
    return "C";
  }
  if (mode === "full60") {
    if (correctCount >= 52) return "A";
    if (correctCount >= 40) return "B";
    return "C";
  }
  if (scoreRate >= 90) return "A";
  if (scoreRate >= 70) return "B";
  return "C";
}

function getCrossReviewItems() {
  const items = [];
  getReviewLessons().forEach(({ lesson, progress, reason }) => {
    items.push({
      id: `cross-lesson-${lesson.id}`,
      title: lesson.title,
      subject: lesson.subject,
      type: "レッスン",
      reason: progress.understanding === "C" ? "C判定レッスン" : reason,
      weaknessTag: getWrongLessonTags(lesson.id)[0] || lesson.weaknessTag || "",
      relatedLessonId: lesson.id,
      priorityScore: progress.understanding === "C" ? 100 : 70
    });
  });
  state.mockExamResults.forEach((result) => {
    result.answers.filter((answer) => !answer.correct).forEach((answer) => {
      const question = getMockQuestionById(answer.questionId);
      items.push({
        id: `cross-mock-${result.id}-${answer.questionId}`,
        title: question?.topic || answer.topic || "模試誤答",
        subject: answer.subject,
        type: "模試誤答",
        reason: `${result.title}で誤答`,
        weaknessTag: answer.weaknessTag,
        relatedLessonId: question?.lessonId || question?.relatedLessonId || "",
        mockResultId: result.id,
        priorityScore: result.resultLevel === "C" ? 95 : 75
      });
    });
  });
  [...state.practiceLogs, ...state.pastExamLogs, ...state.practicalLogs].forEach((log) => {
    if (!["×", "△"].includes(log.result) && !log.retry) return;
    const unitId = log.unitId || log.relatedUnitId || "";
    items.push({
      id: `cross-log-${log.id}`,
      title: log.unitTitle || log.relatedUnitTitle || log.topic || log.questionRef || "ログ見直し",
      subject: log.subject || "未設定",
      type: "ログ",
      reason: todayLogReason(log),
      weaknessTag: (log.weaknessTags || [])[0] || "",
      relatedUnitId: unitId,
      priorityScore: log.result === "×" ? 80 : 55
    });
  });
  getCrossWeaknessTagRanking().slice(0, 8).forEach((item) => {
    items.push({
      id: `cross-tag-${item.tag}`,
      title: item.tag,
      subject: "横断",
      type: "弱点タグ",
      reason: `横断弱点タグ上位 ${item.count}件`,
      weaknessTag: item.tag,
      priorityScore: item.count * 12
    });
  });
  return uniqueCrossReviewItems(items).sort((a, b) => b.priorityScore - a.priorityScore || a.title.localeCompare(b.title, "ja"));
}

function uniqueCrossReviewItems(items) {
  const map = new Map();
  items.forEach((item) => {
    if (!map.has(item.id)) map.set(item.id, item);
  });
  return [...map.values()];
}

function getCrossWeaknessTagRanking() {
  return rankFromValues(buildWeaknessRanking().flatMap((item) => Array(item.count).fill(item.tag)))
    .map((item) => ({ tag: item.label, count: item.count }));
}

function daysSince(dateString) {
  if (!dateString) return 999;
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return 999;
  return Math.floor((Date.now() - date.getTime()) / 86400000);
}

function daysSinceDateTime(value) {
  if (!value) return 999;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 999;
  return Math.floor((Date.now() - date.getTime()) / 86400000);
}

function getBackupRecommendation() {
  const lastBackupAt = localStorage.getItem(STORAGE_KEYS.lastBackupAt);
  const hasGrowingData = state.drillResults.length > 0 || state.mockExamResults.length > 0 || state.pastExamMappings.length > 0;
  if (!lastBackupAt) return "まだバックアップがありません";
  if (daysSinceDateTime(lastBackupAt) >= 7) return "バックアップをおすすめします";
  if (hasGrowingData) return "学習データが増えています。バックアップ推奨";
  return "直近のバックアップを確認済みです";
}

function renderBackupStatusSummary() {
  const lastBackupAt = localStorage.getItem(STORAGE_KEYS.lastBackupAt);
  return `
    <dl class="summary-list">
      <div><dt>最終バックアップ日時</dt><dd>${escapeHtml(lastBackupAt ? formatDateTime(lastBackupAt) : "まだバックアップがありません")}</dd></div>
      <div><dt>ドリル結果数</dt><dd>${state.drillResults.length}件</dd></div>
      <div><dt>模試結果数</dt><dd>${state.mockExamResults.length}件</dd></div>
      <div><dt>過去問マッピング数</dt><dd>${state.pastExamMappings.length}件</dd></div>
    </dl>
    <p class="inline-warning">${escapeHtml(getBackupRecommendation())}</p>
    <div class="form-actions">
      <button class="primary-button" type="button" data-view-shortcut="settings">設定でバックアップ</button>
    </div>
  `;
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
  renderDrillView();
  renderFilters();
  renderUnitList();
  renderPracticeView();
  renderPastExamView();
  renderPracticalView();
  renderMockExamView();
  renderAiView();
  renderAnalysisView();
  renderPastMappingView();
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
  const latestMock = getLatestMockResult();
  const curriculumStats = getCurriculumStats();
  const todayMenu = state.todayMenu || generateTodayMenu(getTodayPlan().selectedDuration);
  const topTask = todayMenu.recommended[0] || todayMenu.priorityItems[0];
  document.querySelector("#homeTodayDate").textContent = formatJapaneseDate(todayString());
  document.querySelector("#homeLearningState").textContent = `進捗 ${curriculumStats.rate}% / 完了 ${curriculumStats.completed}レッスン / 復習対象 ${curriculumStats.reviewCount}件`;
  document.querySelector("#homePriorityTask").textContent = topTask ? topTask.title : "今日のメニューを確認";
  const stats = [
    ["カリキュラム進捗", `${curriculumStats.rate}%`],
    ["今日の完了率", `${getTodayCompletion(todayMenu).rate}%`],
    ["復習レッスン", curriculumStats.reviewCount],
    ["最新模試", latestMock ? `${latestMock.scoreRate}% ${latestMock.resultLevel}` : "未実施"]
  ];

  document.querySelector("#dashboardStats").innerHTML = stats
    .map(([label, value]) => `<div class="stat-card"><span>${escapeHtml(label)}</span><strong>${value}</strong></div>`)
    .join("");

  renderHomeTodaySummary();
  renderHomeCurriculumSummary();

  document.querySelector("#lastUpdatedUnit").innerHTML = latestMock
    ? `<div class="mini-list">
        <div class="mini-item"><span>${escapeHtml(latestMock.title)}</span><small>${escapeHtml(formatDateTime(latestMock.completedAt))}</small></div>
        <dl class="summary-list">
          <div><dt>正答率</dt><dd>${latestMock.scoreRate}%</dd></div>
          <div><dt>判定</dt><dd>${escapeHtml(latestMock.resultLevel)}</dd></div>
        </dl>
        <button class="primary-button" type="button" data-show-mock-result="${escapeAttribute(latestMock.id)}">模試結果を見る</button>
      </div>`
    : `<div class="mini-list"><p class="muted">模試結果はまだありません。</p><button class="primary-button" type="button" data-open-mock>模試へ進む</button></div>`;

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
    <div class="action-card-list">
      <button class="record-link" type="button" data-open-mock><strong>総合模試</strong><span>15問・30問・60問・ひっかけ</span></button>
      <button class="record-link" type="button" data-start-mock="light15"><strong>15問ライト模試</strong><span>短時間で3科目確認</span></button>
      <button class="record-link" type="button" data-start-mock="weakness"><strong>弱点集中模試</strong><span>C判定と誤答タグを優先</span></button>
      <button class="record-link" type="button" data-start-mock="trap20"><strong>ひっかけ総点検模試</strong><span>選択肢読解と手続区分を確認</span></button>
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
      <div><dt>レッスン進捗</dt><dd>${curriculumStats.rate}%</dd></div>
      <div><dt>完了レッスン</dt><dd>${curriculumStats.completed}/${curriculumStats.total}</dd></div>
      <div><dt>復習対象</dt><dd>${curriculumStats.reviewCount}件</dd></div>
      <div><dt>模試回数</dt><dd>${state.mockExamResults.length}回</dd></div>
    </dl>
    <p class="muted mini-list-title">科目別ログ正答率</p>
    <p>${escapeHtml(subjectAccuracy || "未記録")}</p>
    <div class="form-actions">
      <button class="primary-button" type="button" data-open-analysis>分析を見る</button>
    </div>
  `;

  const pastMappingHost = document.querySelector("#homePastMappingSummary");
  if (pastMappingHost) {
    const mappingStats = getPastMappingStats();
    pastMappingHost.innerHTML = `
      <dl class="summary-list">
        <div><dt>インポート済み過去問数</dt><dd>${mappingStats.total}問</dd></div>
        <div><dt>マッピング済み数</dt><dd>${mappingStats.mapped}問</dd></div>
        <div><dt>A+B率</dt><dd>${escapeHtml(mappingStats.abRate)}</dd></div>
        <div><dt>C+D率</dt><dd>${escapeHtml(mappingStats.cdRate)}</dd></div>
        <div><dt>不足教材件数</dt><dd>${mappingStats.missingCount}件</dd></div>
      </dl>
      <p class="muted">${mappingStats.total ? "教材根拠率を確認できます。" : "まだ過去問は取り込まれていません。"}</p>
    `;
  }

  const backupHost = document.querySelector("#homeBackupSummary");
  if (backupHost) {
    backupHost.innerHTML = renderBackupStatusSummary();
  }

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
        <div><dt>問題バンク</dt><dd>${QUESTION_BANK.length}問</dd></div>
        <div><dt>通関業法</dt><dd>${QUESTION_BANK.filter((question) => question.subject === "通関業法").length}問</dd></div>
        <div><dt>関税法等</dt><dd>${QUESTION_BANK.filter((question) => question.subject === "関税法等").length}問</dd></div>
        <div><dt>通関実務</dt><dd>${QUESTION_BANK.filter((question) => question.subject === "通関実務").length}問</dd></div>
      </dl>
      <div class="action-card-list">
        <button class="record-link" type="button" data-view-shortcut="drill" data-drill-home="通関業法10問"><strong>通関業法ドリル</strong><span>義務・許可・罰則</span></button>
        <button class="record-link" type="button" data-view-shortcut="drill" data-drill-home="関税法等10問"><strong>関税法等ドリル</strong><span>保税・納税・課税価格</span></button>
        <button class="record-link" type="button" data-view-shortcut="drill" data-drill-home="通関実務10問"><strong>通関実務ドリル</strong><span>分類・価格・計算</span></button>
      </div>
    `;
  }

  const aiTutorItems = state.aiAnalyses.filter((item) => item.promptType === "AI講師" || item.promptType === "外部ChatGPT相談");
  const aiSuggestions = state.aiAnalyses.filter((item) => item.promptType === "AI添削・弱点提案");
  const recentTutor = [...aiTutorItems].sort(compareAiAnalyses)[0];
  const latestSuggestion = [...aiSuggestions].sort(compareAiAnalyses)[0];
  const pendingSuggestions = aiSuggestions.filter((item) => !item.appliedAt).length;
  const unsavedTutor = aiTutorItems.filter((item) => item.responseText && !item.savedAsReviewMemo && !item.markedAsWeaknessSuggestion && !item.markedForNextReview).length;
  const recentAi = [...state.aiAnalyses]
    .sort(compareAiAnalyses)
    .slice(0, 3);
  document.querySelector("#homeAiHistory").innerHTML = `
    <dl class="summary-list">
      <div><dt>作成方式</dt><dd>コピー専用</dd></div>
      <div><dt>外部相談履歴</dt><dd>${state.aiAnalyses.length}件</dd></div>
      <div><dt>過去の相談文メモ</dt><dd>${aiTutorItems.length + aiSuggestions.length}件</dd></div>
      <div><dt>通信</dt><dd>アプリ内では行いません</dd></div>
      <div><dt>最新メモ</dt><dd>${escapeHtml(latestSuggestion ? truncateText(latestSuggestion.targetTitle || latestSuggestion.correctionType, 42) : "なし")}</dd></div>
    </dl>
    <div class="action-card-list">
      <button class="record-link" type="button" data-ai-today-consult><strong>今日の相談文</strong><span>外部ChatGPTへ貼り付け</span></button>
      <button class="record-link" type="button" data-ai-quick="lesson"><strong>レッスン質問文</strong><span>講義・確認問題から作成</span></button>
      <button class="record-link" type="button" data-ai-quick="mock"><strong>模試相談文</strong><span>${latestMock ? `${latestMock.scoreRate}% ${latestMock.resultLevel}` : "模試未実施"}</span></button>
    </div>
    <div class="mini-list">
      ${recentAi.length ? recentAi.slice(0, 2).map((item) => `
        <div class="mini-item">
          <span>${escapeHtml(formatDateTime(item.createdAt))} / ${escapeHtml(item.promptType || "種別なし")}</span>
          <small>${escapeHtml(item.targetTitle || "対象なし")}</small>
        </div>
      `).join("") : `<p class="muted">相談文の生成履歴はまだありません。</p>`}
    </div>
  `;

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
      <div><dt>模試</dt><dd>${menu.mockItems.length}件</dd></div>
      <div><dt>横断復習</dt><dd>${menu.crossReviewItems.length}件</dd></div>
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
  document.querySelector("#todayPracticeMenu").innerHTML = renderTodayMiniItems([...menu.drillItems, ...menu.weaknessItems].slice(0, 6));
  document.querySelector("#todayPastExamMenu").innerHTML = renderTodayMiniItems(menu.mockItems.slice(0, 6));
  document.querySelector("#todayPracticalMenu").innerHTML = renderTodayMiniItems([...menu.crossReviewItems, ...menu.practiceItems, ...menu.pastExamItems, ...menu.practicalItems].slice(0, 6));
  document.querySelector("#todayCompletion").innerHTML = `
    <div class="today-progress">
      <strong>${completion.completed} / ${completion.total} 完了</strong>
      <span>${completion.rate}%</span>
    </div>
    <p class="muted">チェックした項目は今日のstudyPlanに保存されます。</p>
    <div class="form-actions">
      <button class="primary-button" type="button" data-ai-today-consult>外部ChatGPT相談文を作る</button>
      <button class="ghost-button" type="button" data-ai-today-review>30分メニュー相談文</button>
      <button class="ghost-button" type="button" data-ai-today-priority>優先順位相談文</button>
    </div>
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
          <span class="badge ${priorityClass(item.priority)}">${escapeHtml(normalizePriorityLabel(item.priority))}</span>
          <strong>${escapeHtml(item.title)}</strong>
        </span>
      </label>
      <p>${escapeHtml(item.description || item.type)}</p>
      <dl class="review-facts">
        <div><dt>種別</dt><dd>${escapeHtml(item.type)}</dd></div>
        <div><dt>理由</dt><dd>${escapeHtml(item.reason || "今日の候補")}</dd></div>
        <div><dt>優先度</dt><dd>${escapeHtml(normalizePriorityLabel(item.priority))}</dd></div>
        <div><dt>推定時間</dt><dd>${item.estimatedMinutes}分</dd></div>
      </dl>
      <div class="card-actions">
        ${item.relatedLessonId ? `<button class="primary-button" type="button" data-open-lesson="${escapeAttribute(item.relatedLessonId)}">開く</button>` : ""}
        ${item.relatedUnitId ? `<button class="ghost-button" type="button" data-open-unit="${escapeAttribute(item.relatedUnitId)}">開く</button>` : ""}
        ${item.relatedLogId ? `<button class="ghost-button" type="button" data-open-today-log="${escapeAttribute(item.type)}:${escapeAttribute(item.relatedLogId)}">ログを開く</button>` : ""}
        ${item.mockMode ? `<button class="primary-button" type="button" data-start-mock="${escapeAttribute(item.mockMode)}">開始</button>` : ""}
        ${item.type === "通関業法ドリル" ? `<button class="primary-button" type="button" data-start-drill-mode="${escapeAttribute(item.id.includes("hikkake") || item.id.includes("trap") ? "通関業法ひっかけ" : "通関業法10問")}">開始</button>` : ""}
        ${item.type === "関税法等ドリル" ? `<button class="primary-button" type="button" data-start-drill-mode="${escapeAttribute(item.title.includes("課税価格") ? "課税価格ドリル" : "関税法等10問")}">開始</button>` : ""}
        ${item.type === "通関実務ドリル" ? `<button class="primary-button" type="button" data-start-drill-mode="${escapeAttribute(getTodayJitsumuDrillMode(item))}">開始</button>` : ""}
        ${item.type === "弱点別ドリル" ? `<button class="primary-button" type="button" data-start-weakness-drill="${escapeAttribute(extractTodayWeaknessTarget(item.title))}" data-weakness-count="${item.title.includes("10問") ? "10" : "5"}">開始</button>` : ""}
        ${item.relatedMockResultId ? `<button class="ghost-button" type="button" data-show-mock-result="${escapeAttribute(item.relatedMockResultId)}">模試詳細</button>` : ""}
        <button class="ghost-button" type="button" data-ai-today-consult>外部ChatGPT相談文を作る</button>
      </div>
    </article>
  `;
}

function extractTodayWeaknessTarget(title) {
  return String(title || "").replace(/^弱点別ドリル：/, "").replace(/(?:5問|10問)$/, "");
}

function getTodayJitsumuDrillMode(item) {
  if (item.title.includes("手順")) return "手順ドリル";
  if (item.title.includes("計算過程")) return "計算過程ドリル";
  if (item.title.includes("資料読取")) return "資料読取ドリル";
  if (item.title.includes("インボイス")) return "インボイス読取ドリル";
  if (item.title.includes("品目分類")) return "品目分類ドリル";
  if (item.title.includes("課税価格")) return "通関実務課税価格ドリル";
  if (item.title.includes("消費税")) return "消費税・地方消費税ドリル";
  if (item.title.includes("端数")) return "端数処理ドリル";
  return "通関実務10問";
}

function renderTodayMiniItems(items) {
  return items.length ? items.map((item) => `
    <div class="mini-item">
      <span>${escapeHtml(item.title)}</span>
      <small>${escapeHtml(`${item.reason} / ${item.estimatedMinutes}分`)}</small>
    </div>
  `).join("") : `<p class="muted">対象はありません。</p>`;
}

function normalizePriorityLabel(priority) {
  if (priority === "中") return "通常";
  if (priority === "低") return "余裕があれば";
  return priority || "通常";
}

function priorityClass(priority) {
  const label = normalizePriorityLabel(priority);
  if (label === "最優先" || label === "高") return "priority";
  if (label === "通常") return "normal";
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

  if (!DATA_FILE_STATUS.lessons || !CURRICULUM_LESSONS.length || !CURRICULUM_COURSES.length) {
    const message = "教材データが読み込めませんでした。dataフォルダのファイルが存在するか確認してください。";
    console.error(message, DATA_FILE_STATUS);
    document.querySelector("#recommendedLesson").innerHTML = `<p class="muted">${escapeHtml(message)}</p>`;
    document.querySelector("#curriculumList").innerHTML = `<div class="empty-state"><p class="muted">${escapeHtml(message)}</p></div>`;
    document.querySelector("#lessonList").innerHTML = `<div class="empty-state"><p class="muted">${escapeHtml(message)}</p></div>`;
    document.querySelector("#learningProgressSummary").innerHTML = "";
    document.querySelector("#learningReviewLessons").innerHTML = "";
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

  renderLessonFilters();
  const filtered = filteredLessons();
  document.querySelector("#lessonList").innerHTML = CURRICULUM_COURSES
    .filter((course) => filtered.some((lesson) => lesson.courseId === course.id))
    .sort((a, b) => a.order - b.order)
    .map((course) => `
      <div class="lesson-course-block">
        <h3>${escapeHtml(course.title)}</h3>
        ${filtered.filter((lesson) => lesson.courseId === course.id).sort((a, b) => a.order - b.order).map(renderLessonListCard).join("")}
      </div>
    `).join("") || `<div class="empty-state"><p class="muted">条件に合うレッスンはありません。</p></div>`;

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
  renderDrillView();
}

function renderDrillView() {
  const hosts = ["#drillArea", "#drillAreaStandalone"].map((selector) => document.querySelector(selector)).filter(Boolean);
  if (!hosts.length) return;
  const modes = [
    "通関業法10問", "通関業法ランダム", "通関業法順番", "通関業法ひっかけ",
    "関税法等10問", "関税法等20問", "関税法等ランダム", "関税法等順番", "関税法等ひっかけ",
    "輸出入申告ドリル", "保税地域ドリル", "保税運送ドリル", "納税申告・更正ドリル", "納期限・加算税ドリル", "課税価格ドリル", "減免税ドリル", "輸入禁止貨物・原産地表示ドリル", "罰則ドリル",
    "弱点タグ別ドリル", "関税法等ドリル",
    "通関実務10問", "通関実務20問", "通関実務ランダム", "通関実務順番", "通関実務ひっかけ", "通関実務ドリル",
    "手順ドリル", "計算過程ドリル", "資料読取ドリル",
    "インボイス読取ドリル", "輸出申告ドリル", "輸入申告ドリル", "品目分類ドリル", "統計品目番号ドリル", "通関実務課税価格ドリル", "加算要素・不算入要素ドリル", "為替換算ドリル", "関税額計算ドリル", "消費税・地方消費税ドリル", "端数処理ドリル", "税率適用ドリル", "NACCS入力ドリル", "資料読取論点ドリル", "時間配分ドリル"
  ];
  if (!modes.includes(state.drill.mode) && !isWeaknessDrillMode(state.drill.mode)) state.drill.mode = "通関業法10問";
  ensureDrillSession();
  const questions = getDrillQuestions(state.drill.mode);
  const current = questions.find((question) => question.id === state.drill.currentQuestionId) || questions[0];
  if (current && state.drill.currentQuestionId !== current.id) {
    state.drill.currentQuestionId = current.id;
    state.drill.selectedAnswer = "";
    state.drill.graded = false;
  }
  const featuredModes = [
    { title: "通関業法ドリル", subject: "通関業法", mode: "通関業法10問", reason: "義務・許可・罰則を短時間で確認" },
    { title: "関税法等ドリル", subject: "関税法等", mode: "関税法等10問", reason: "保税・納税・課税価格を横断確認" },
    { title: "通関実務ドリル", subject: "通関実務", mode: "通関実務10問", reason: "分類・課税価格・税額計算を確認" },
    { title: "弱点別ドリル", subject: "横断", mode: "弱点タグ別ドリル", reason: "誤答タグとC判定に合わせて復習" },
    { title: "手順ドリル", subject: "通関実務", mode: "手順ドリル", reason: "申告書・資料読取の処理順を固定" },
    { title: "計算過程ドリル", subject: "通関実務", mode: "計算過程ドリル", reason: "課税価格、関税額、消費税の考え方を確認" },
    { title: "資料読取ドリル", subject: "通関実務", mode: "資料読取ドリル", reason: "インボイス・条件・レート表の読み落とし対策" },
    { title: "ひっかけ総点検", subject: "横断", mode: "通関業法ひっかけ", reason: "主体・期限・手続区分の読み違い対策" }
  ];
  const content = `
    <div class="drill-entry-grid">
      ${featuredModes.map((item) => {
        const questions = getDrillQuestions(item.mode);
        const recent = getLatestDrillResultForMode(item.mode, item.subject);
        return `
          <article class="drill-entry-card">
            <p class="eyebrow">${escapeHtml(item.subject)}</p>
            <h3>${escapeHtml(item.title)}</h3>
            <dl class="review-facts compact">
              <div><dt>問題数</dt><dd>${questions.length}問</dd></div>
              <div><dt>直近結果</dt><dd>${escapeHtml(recent ? `${recent.scoreRate}% / ${recent.resultLevel}` : "まだドリル結果がありません")}</dd></div>
              <div><dt>おすすめ理由</dt><dd>${escapeHtml(item.reason)}</dd></div>
            </dl>
            <button class="primary-button" type="button" data-start-drill-mode="${escapeAttribute(item.mode)}">開始</button>
          </article>
        `;
      }).join("")}
      <article class="drill-entry-card">
        <p class="eyebrow">Mock Exam</p>
        <h3>模試へ進む</h3>
        <p class="muted">15問、30問、弱点集中、ひっかけ総点検へ進みます。</p>
        <button class="primary-button" type="button" data-open-mock>模試へ進む</button>
      </article>
    </div>
    ${renderLatestDrillResult()}
    ${renderWeaknessDrillSection()}
    ${renderLatestWeaknessDrillResult()}
    <details class="details-panel drill-all-modes">
      <summary>すべてのドリルモード</summary>
      <div class="drill-controls details-body">
        ${modes.map((mode) => `<button class="duration-button ${state.drill.mode === mode ? "is-active" : ""}" type="button" data-drill-mode="${escapeAttribute(mode)}">${escapeHtml(mode)}</button>`).join("")}
      </div>
    </details>
    <div class="card-meta">
      <span class="badge">回答 ${state.drill.answers.length}/${questions.length}</span>
      <span class="badge">保存済み ${state.drillResults.length}回</span>
      ${isWeaknessDrillMode(state.drill.mode) ? `<span class="badge priority">${escapeHtml(state.drill.targetWeaknessGroup || state.drill.targetWeaknessTag || "弱点別")}</span>` : ""}
    </div>
    ${current ? renderDrillQuestion(current, questions) : `<div class="empty-state"><p class="muted">この条件のドリル問題はまだありません。</p></div>`}
  `;
  hosts.forEach((host) => {
    const isStandalone = host.id === "drillAreaStandalone";
    const shouldRenderFull = (state.activeView === "drill" && isStandalone) || (state.activeView !== "drill" && !isStandalone);
    host.innerHTML = shouldRenderFull ? content : "";
  });
}

function getLatestDrillResultForMode(mode, subject = "") {
  return [...state.drillResults]
    .filter((result) => result.mode === mode || (subject && result.subject === subject) || (mode.includes("弱点") && (result.mode.includes("弱点") || result.targetWeaknessTag || result.targetWeaknessGroup)))
    .sort((a, b) => (b.completedAt || "").localeCompare(a.completedAt || ""))[0];
}

function renderLatestDrillResult() {
  const result = [...state.drillResults].sort((a, b) => (b.completedAt || "").localeCompare(a.completedAt || ""))[0];
  if (!result) return `<div class="empty-state"><p class="muted">まだドリル結果がありません。</p></div>`;
  const wrongAnswers = (result.answers || []).filter((answer) => !answer.correct);
  const subjectRows = Object.entries(buildMockSubjectSummary(result.answers || [])).filter(([, item]) => item.total);
  return `
    <article class="drill-result-card">
      <div class="mock-score-hero">
        <div><span>正解数</span><strong>${result.correctCount}/${result.totalQuestions}</strong></div>
        <div><span>正答率</span><strong>${result.scoreRate}%</strong></div>
        <div><span>判定</span><strong>${escapeHtml(result.resultLevel)}</strong></div>
      </div>
      <dl class="summary-list">
        <div><dt>ドリル</dt><dd>${escapeHtml(result.mode)}</dd></div>
        <div><dt>実施日</dt><dd>${escapeHtml(formatDateTime(result.completedAt))}</dd></div>
        <div><dt>弱点タグ別誤答</dt><dd>${escapeHtml(result.weaknessTags.join(" / ") || "誤答なし")}</dd></div>
        <div><dt>次にやるべきこと</dt><dd>${escapeHtml(result.resultLevel === "C" ? "間違えた問題と弱点別ドリルを優先してください。" : result.resultLevel === "B" ? "誤答タグを5問だけ解き直してください。" : "A判定です。別科目へ進めます。")}</dd></div>
      </dl>
      ${subjectRows.length ? `<div class="analysis-card-grid three-col">${subjectRows.map(([subject, item]) => `<article class="analysis-card"><h4>${escapeHtml(subject)}</h4><p>${item.correct}/${item.total} / ${item.rate}%</p></article>`).join("")}</div>` : ""}
      <details class="details-panel">
        <summary>間違えた問題</summary>
        <div class="details-body">
          ${wrongAnswers.length ? wrongAnswers.map((answer) => {
            const question = QUESTION_BANK.find((item) => item.id === answer.questionId);
            return question ? `<article class="mock-explanation-card"><h5>${escapeHtml(question.question)}</h5><p>${escapeHtml(question.explanation)}</p><p class="trap-note">${escapeHtml(question.trapExplanation)}</p></article>` : "";
          }).join("") : `<p class="muted">間違えた問題はありません。</p>`}
        </div>
      </details>
      <div class="card-actions">
        <button class="primary-button" type="button" data-start-drill-mode="${escapeAttribute(result.mode)}">もう一度</button>
        <button class="ghost-button" type="button" data-view-shortcut="review">間違えた問題を復習</button>
        <button class="ghost-button" type="button" data-view-shortcut="drill" data-drill-home="弱点タグ別ドリル">弱点別ドリルへ</button>
        <button class="ghost-button" type="button" data-ai-quick="tags">外部ChatGPT相談文を作る</button>
        <button class="ghost-button" type="button" data-view-shortcut="home">ホームへ戻る</button>
      </div>
    </article>
  `;
}

function renderLatestWeaknessDrillResult() {
  const result = state.drillResults.find((item) => item.mode.includes("弱点別ドリル") || item.targetWeaknessTag || item.targetWeaknessGroup);
  if (!result) return "";
  const tagStats = buildWeaknessResultTagStats(result);
  return `
    <article class="drill-result">
      <div class="panel-heading"><h3>直近の弱点別ドリル結果</h3></div>
      <dl class="review-facts compact">
        <div><dt>対象</dt><dd>${escapeHtml(result.targetWeaknessGroup || result.targetWeaknessTag || result.mode)}</dd></div>
        <div><dt>正答率</dt><dd>${result.scoreRate}%（${result.correctCount}/${result.totalQuestions}）</dd></div>
        <div><dt>判定</dt><dd>${escapeHtml(result.resultLevel)}</dd></div>
        <div><dt>実施日</dt><dd>${escapeHtml(formatDateTime(result.completedAt))}</dd></div>
        <div><dt>タグ別正答率</dt><dd>${escapeHtml(tagStats.map((item) => `${item.tag}:${item.rate}%(${item.correct}/${item.total})`).join(" / ") || "なし")}</dd></div>
      </dl>
      <div class="card-actions">
        <button class="primary-button" type="button" data-start-weakness-drill="${escapeAttribute(result.targetWeaknessGroup || result.targetWeaknessTag || "")}" data-weakness-type="${result.targetWeaknessGroup ? "group" : "tag"}" data-weakness-count="${result.totalQuestions >= 10 ? "10" : "5"}">もう一度</button>
        <button class="ghost-button" type="button" data-view-shortcut="review">復習へ</button>
        <button class="ghost-button" type="button" data-view-shortcut="drill">別の弱点へ</button>
      </div>
    </article>
  `;
}

function buildWeaknessResultTagStats(result) {
  const map = new Map();
  (result.answers || []).forEach((answer) => {
    const question = QUESTION_BANK.find((item) => item.id === answer.questionId);
    const tag = answer.weaknessTag || question?.weaknessTag || "タグなし";
    const item = map.get(tag) || { tag, total: 0, correct: 0 };
    item.total += 1;
    if (answer.correct) item.correct += 1;
    map.set(tag, item);
  });
  return [...map.values()].map((item) => ({ ...item, rate: item.total ? Math.round((item.correct / item.total) * 100) : 0 }));
}

function getDrillQuestions(mode) {
  if (state.drill.sessionQuestionIds?.length) {
    const byId = new Map(QUESTION_BANK.map((question) => [question.id, question]));
    return state.drill.sessionQuestionIds.map((id) => byId.get(id)).filter(Boolean);
  }
  if (mode === "通関業法10問") return pickDrillQuestions(QUESTION_BANK.filter((question) => question.subject === "通関業法"), 10, true);
  if (mode === "通関業法ランダム") return pickDrillQuestions(QUESTION_BANK.filter((question) => question.subject === "通関業法"), 10, true);
  if (mode === "通関業法順番") return QUESTION_BANK.filter((question) => question.subject === "通関業法");
  if (mode === "通関業法ひっかけ") return pickDrillQuestions(QUESTION_BANK.filter((question) => question.subject === "通関業法" && (question.questionType === "trapCheck" || question.difficulty === "ひっかけ" || /ひっかけ|罰則|混同/.test(`${question.trapExplanation}${question.weaknessTag}`))), 10, true);
  if (mode === "通関業法ドリル") return QUESTION_BANK.filter((question) => question.subject === "通関業法");
  if (mode === "関税法等10問") return pickDrillQuestions(getKanzeihouQuestions(), 10, true);
  if (mode === "関税法等20問") return pickDrillQuestions(getKanzeihouQuestions(), 20, true);
  if (mode === "関税法等ランダム") return pickDrillQuestions(getKanzeihouQuestions(), 10, true);
  if (mode === "関税法等順番") return getKanzeihouQuestions();
  if (mode === "関税法等ひっかけ") return pickDrillQuestions(getKanzeihouQuestions().filter((question) => question.questionType === "trapCheck" || question.difficulty === "ひっかけ" || /ひっかけ|混同|誤り/.test(`${question.trapExplanation}${question.weaknessTag}`)), 10, true);
  if (mode === "輸出入申告ドリル") return pickKanzeihouTopicDrill(/輸出申告|輸入申告|輸入の許可|特例輸入|特例申告|申告・許可/);
  if (mode === "保税地域ドリル") return pickKanzeihouTopicDrill(/保税地域|保税蔵置場|保税工場|保税展示場|総合保税|外国貨物を置く場所/);
  if (mode === "保税運送ドリル") return pickKanzeihouTopicDrill(/保税運送|特定保税運送/);
  if (mode === "納税申告・更正ドリル") return pickKanzeihouTopicDrill(/納税申告|修正申告|更正|決定|賦課|確定方式/);
  if (mode === "納期限・加算税ドリル") return pickKanzeihouTopicDrill(/納期限|法定納期限|延滞税|加算税|無申告|重加算/);
  if (mode === "課税価格ドリル") return pickKanzeihouTopicDrill(/課税価格|加算要素|不算入|現実支払価格|運賃|保険料|ロイヤルティ/);
  if (mode === "減免税ドリル") return pickKanzeihouTopicDrill(/減免税|戻し税|免税|減税/);
  if (mode === "輸入禁止貨物・原産地表示ドリル") return pickKanzeihouTopicDrill(/輸入してはならない|輸入禁止|原産地|虚偽表示/);
  if (mode === "罰則ドリル") return pickKanzeihouTopicDrill(/罰則|没収|追徴|密輸/);
  if (mode === "関税法等ドリル") return QUESTION_BANK.filter((question) => question.subject === "関税法等");
  if (mode === "通関実務10問") return pickDrillQuestions(getJitsumuQuestions(), 10, true);
  if (mode === "通関実務20問") return pickDrillQuestions(getJitsumuQuestions(), 20, true);
  if (mode === "通関実務ランダム") return pickDrillQuestions(getJitsumuQuestions(), 10, true);
  if (mode === "通関実務順番") return getJitsumuQuestions();
  if (mode === "通関実務ひっかけ") return pickDrillQuestions(getJitsumuQuestions().filter((question) => question.questionType === "trapCheck" || question.difficulty === "ひっかけ" || /ひっかけ|誤り|混同|見落とし/.test(`${question.trapExplanation}${question.weaknessTag}`)), 10, true);
  if (mode === "通関実務ドリル") return getJitsumuQuestions();
  if (mode === "手順ドリル") return pickJitsumuTopicDrill(/申告書作成手順|問題要求|手順|時間配分/, "processChoice", 10);
  if (mode === "計算過程ドリル") return pickJitsumuTopicDrill(/課税価格|関税額|消費税|地方消費税|端数処理|税率適用|為替換算|加算要素/, "calculationCheck", 10);
  if (mode === "資料読取ドリル") return pickJitsumuTopicDrill(/資料読取|インボイス読取|価格条件|運賃・保険料|転記ミス/, "documentRead", 10);
  if (mode === "インボイス読取ドリル") return pickJitsumuTopicDrill(/インボイス読取|価格条件|運賃|保険料/);
  if (mode === "輸出申告ドリル") return pickJitsumuTopicDrill(/輸出申告/);
  if (mode === "輸入申告ドリル") return pickJitsumuTopicDrill(/輸入申告/);
  if (mode === "品目分類ドリル") return pickJitsumuTopicDrill(/品目分類|税番|統計品目番号|税率適用/);
  if (mode === "統計品目番号ドリル") return pickJitsumuTopicDrill(/統計品目番号|税番/);
  if (mode === "通関実務課税価格ドリル") return pickJitsumuTopicDrill(/課税価格|価格条件|加算要素|不算入要素|運賃・保険料/);
  if (mode === "加算要素・不算入要素ドリル") return pickJitsumuTopicDrill(/加算要素|不算入要素|無償提供物|ロイヤルティ|運賃|保険料/);
  if (mode === "為替換算ドリル") return pickJitsumuTopicDrill(/為替換算/);
  if (mode === "関税額計算ドリル") return pickJitsumuTopicDrill(/関税額計算|税率適用|端数処理/);
  if (mode === "消費税・地方消費税ドリル") return pickJitsumuTopicDrill(/消費税計算|地方消費税計算|消費税・地方消費税/);
  if (mode === "端数処理ドリル") return pickJitsumuTopicDrill(/端数処理/);
  if (mode === "税率適用ドリル") return pickJitsumuTopicDrill(/税率適用|税番/);
  if (mode === "NACCS入力ドリル") return pickJitsumuTopicDrill(/NACCS入力/);
  if (mode === "資料読取論点ドリル") return pickJitsumuTopicDrill(/資料読取|インボイス|レート表|税率表/);
  if (mode === "時間配分ドリル") return pickJitsumuTopicDrill(/時間配分|問題要求の確認/);
  if (mode === "弱点タグ別ドリル") {
    const tags = [...new Set([...getTopWeaknessTags(), ...getDrillWeaknessTagRanking().slice(0, 3).map((item) => item.tag)])];
    const matched = tags.length ? QUESTION_BANK.filter((question) => tags.some((tag) => question.weaknessTag.includes(tag) || tag.includes(question.weaknessTag))) : [];
    return pickDrillQuestions(matched.length ? matched : QUESTION_BANK.filter((question) => question.subject === "通関業法"), 10, true);
  }
  if (isWeaknessDrillMode(mode)) {
    const count = getWeaknessDrillLimit(mode);
    const matched = getWeaknessDrillQuestionPool(state.drill.targetWeaknessTag, state.drill.targetWeaknessGroup);
    return pickDrillQuestions(matched.length ? matched : QUESTION_BANK, count || QUESTION_BANK.length, true);
  }
  if (mode === "ひっかけ問題ドリル") return QUESTION_BANK.filter((question) => question.trapExplanation);
  return QUESTION_BANK;
}

function isWeaknessDrillMode(mode) {
  return String(mode || "").startsWith("弱点別ドリル");
}

function getWeaknessDrillLimit(mode) {
  if (String(mode).includes("5問")) return 5;
  if (String(mode).includes("10問")) return 10;
  return 0;
}

function getKanzeihouQuestions() {
  return QUESTION_BANK.filter((question) => question.subject === "関税法等");
}

function getJitsumuQuestions() {
  return QUESTION_BANK.filter((question) => question.subject === "通関実務");
}

function pickKanzeihouTopicDrill(pattern) {
  const matched = getKanzeihouQuestions().filter((question) => pattern.test(`${question.topic}${question.weaknessTag}${question.explanation}${question.trapExplanation}`));
  return pickDrillQuestions(matched, 10, true);
}

function pickJitsumuTopicDrill(pattern, questionType = "", limit = 10) {
  const matched = getJitsumuQuestions().filter((question) => {
    const haystack = `${question.topic}${question.weaknessTag}${question.explanation}${question.trapExplanation}`;
    return pattern.test(haystack) && (!questionType || question.questionType === questionType);
  });
  const fallback = questionType ? getJitsumuQuestions().filter((question) => question.questionType === questionType) : getJitsumuQuestions();
  return pickDrillQuestions(matched.length ? matched : fallback, limit, true);
}

function pickDrillQuestions(questions, limit, randomize = false) {
  const list = [...questions];
  if (randomize) {
    for (let index = list.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(Math.random() * (index + 1));
      [list[index], list[swap]] = [list[swap], list[index]];
    }
  }
  return list.slice(0, Math.min(limit, list.length));
}

function getWeaknessTagCandidates() {
  return [...new Set([
    ...V24_WEAKNESS_TAG_CANDIDATES,
    ...WEAKNESS_TAGS,
    ...QUESTION_BANK.map((question) => question.weaknessTag).filter(Boolean)
  ])].filter((tag) => getQuestionsByWeaknessTag(tag).length || V24_WEAKNESS_TAG_CANDIDATES.includes(tag));
}

function tagMatchesQuestion(tag, question) {
  const target = String(tag || "");
  const questionTag = String(question.weaknessTag || "");
  const haystack = [question.weaknessTag, question.topic, question.explanation, question.trapExplanation].join(" ");
  return Boolean(target && (haystack.includes(target) || (questionTag && target.includes(questionTag))));
}

function getQuestionsByWeaknessTag(tag) {
  return QUESTION_BANK.filter((question) => tagMatchesQuestion(tag, question));
}

function getWeaknessGroupByName(groupName) {
  return WEAKNESS_GROUPS.find((group) => group.name === groupName);
}

function getWeaknessDrillQuestionPool(tag = "", groupName = "") {
  if (groupName) {
    const group = getWeaknessGroupByName(groupName);
    if (!group) return [];
    return QUESTION_BANK.filter((question) => group.tags.some((tagName) => tagMatchesQuestion(tagName, question)));
  }
  return getQuestionsByWeaknessTag(tag);
}

function buildWeaknessTagStats() {
  const map = new Map();
  const ensure = (tag) => {
    if (!map.has(tag)) {
      map.set(tag, {
        tag,
        questionCount: getQuestionsByWeaknessTag(tag).length,
        total: 0,
        correct: 0,
        wrong: 0,
        latest: "",
        cCount: 0,
        recentAnswers: []
      });
    }
    return map.get(tag);
  };
  getWeaknessTagCandidates().forEach(ensure);
  state.drillResults.forEach((result) => {
    const resultTags = new Set([...(result.weaknessTags || []), result.targetWeaknessTag].filter(Boolean));
    if (result.resultLevel === "C") resultTags.forEach((tag) => ensure(tag).cCount += 1);
    (result.answers || []).forEach((answer) => {
      const question = QUESTION_BANK.find((item) => item.id === answer.questionId);
      const answerTags = [...new Set([answer.weaknessTag, question?.weaknessTag].filter(Boolean))];
      answerTags.forEach((tag) => {
        const item = ensure(tag);
        item.total += 1;
        if (answer.correct) item.correct += 1;
        else item.wrong += 1;
        item.latest = [item.latest, result.completedAt || result.startedAt || ""].sort().pop() || "";
        item.recentAnswers.push({ correct: answer.correct, date: result.completedAt || result.startedAt || "" });
      });
    });
  });
  state.mockExamResults.forEach((result) => {
    (result.answers || []).filter((answer) => !answer.correct && answer.weaknessTag).forEach((answer) => {
      const item = ensure(answer.weaknessTag);
      item.wrong += 1;
      item.total += 1;
      item.latest = [item.latest, result.completedAt || ""].sort().pop() || "";
      item.recentAnswers.push({ correct: false, date: result.completedAt || "" });
    });
  });
  return [...map.values()].map((item) => {
    const recent = [...item.recentAnswers].sort((a, b) => (b.date || "").localeCompare(a.date || "")).slice(0, 10);
    const recentCorrect = recent.filter((answer) => answer.correct).length;
    const rate = item.total ? Math.round((item.correct / item.total) * 100) : 0;
    const recentRate = recent.length ? Math.round((recentCorrect / recent.length) * 100) : null;
    const risk = judgeWeaknessRisk({ rate: recentRate ?? rate, wrong: item.wrong, cCount: item.cCount, total: item.total });
    return { ...item, rate, recentRate, risk };
  }).sort((a, b) => b.risk.weight - a.risk.weight || b.wrong - a.wrong || b.questionCount - a.questionCount || a.tag.localeCompare(b.tag, "ja"));
}

function judgeWeaknessRisk({ rate, wrong, cCount, total }) {
  if (!total) return { label: "未実施", className: "normal", weight: 0 };
  if (rate < 50 || wrong >= 5 || cCount >= 2) return { label: "最優先", className: "priority", weight: 4 };
  if (rate < 70 || wrong >= 3 || cCount >= 1) return { label: "危険", className: "danger", weight: 3 };
  if (rate < 90 || wrong >= 1) return { label: "注意", className: "medium", weight: 2 };
  return { label: "安定", className: "ok", weight: 1 };
}

function buildWeaknessGroupStats() {
  const tagStats = buildWeaknessTagStats();
  return WEAKNESS_GROUPS.map((group) => {
    const tags = tagStats.filter((item) => group.tags.some((tag) => item.tag === tag || item.tag.includes(tag) || tag.includes(item.tag)));
    const questionCount = getWeaknessDrillQuestionPool("", group.name).length;
    const total = tags.reduce((sum, item) => sum + item.total, 0);
    const correct = tags.reduce((sum, item) => sum + item.correct, 0);
    const wrong = tags.reduce((sum, item) => sum + item.wrong, 0);
    const cCount = tags.reduce((sum, item) => sum + item.cCount, 0);
    const latest = tags.map((item) => item.latest).filter(Boolean).sort().pop() || "";
    const rate = total ? Math.round((correct / total) * 100) : 0;
    const risk = judgeWeaknessRisk({ rate, wrong, cCount, total });
    return { group: group.name, tags: group.tags, questionCount, total, correct, wrong, rate, cCount, latest, risk };
  }).sort((a, b) => b.risk.weight - a.risk.weight || b.wrong - a.wrong || b.questionCount - a.questionCount);
}

function getRecommendedWeaknessDrills() {
  const tagStats = buildWeaknessTagStats();
  const groupStats = buildWeaknessGroupStats();
  const cLessonTags = getReviewLessons()
    .filter(({ progress }) => progress.understanding === "C")
    .flatMap(({ lesson }) => [lesson.weaknessTag, ...(lesson.questions || []).map((question) => question.weaknessTag)])
    .filter(Boolean);
  const recentWrongTags = state.drillResults.slice(0, 5).flatMap((result) => (result.answers || []).filter((answer) => !answer.correct).map((answer) => answer.weaknessTag)).filter(Boolean);
  const mockWrongTags = state.mockExamResults.flatMap((result) => result.answers.filter((answer) => !answer.correct).map((answer) => answer.weaknessTag)).filter(Boolean);
  const tagItems = tagStats.filter((item) => item.questionCount).map((item) => {
    const reasons = [];
    if (recentWrongTags.includes(item.tag)) reasons.push("直近ドリルで誤答");
    if (item.cCount) reasons.push("C判定ドリルに含まれる");
    if (cLessonTags.includes(item.tag)) reasons.push("C判定レッスンに関連");
    if (mockWrongTags.includes(item.tag)) reasons.push("模試で誤答");
    if (!item.latest && item.questionCount >= 5) reasons.push("問題数があり未実施");
    if (item.latest && daysSinceIso(item.latest) >= 14 && item.questionCount >= 5) reasons.push("最近解いていない");
    return {
      type: "tag",
      name: item.tag,
      stats: item,
      questionCount: item.questionCount,
      risk: item.risk,
      reason: reasons.join(" / ") || `${item.risk.label}タグの定期確認`,
      score: item.risk.weight * 40 + item.wrong * 8 + item.questionCount
    };
  });
  const groupItems = groupStats.filter((item) => item.questionCount).map((item) => ({
    type: "group",
    name: item.group,
    stats: item,
    questionCount: item.questionCount,
    risk: item.risk,
    reason: item.risk.label === "未実施" ? "横断問題数があり未実施" : `グループ内の誤答 ${item.wrong}件`,
    score: item.risk.weight * 35 + item.wrong * 7 + item.questionCount
  }));
  return [...tagItems, ...groupItems].sort((a, b) => b.score - a.score || b.questionCount - a.questionCount).slice(0, 10);
}

function renderWeaknessDrillSection() {
  const stats = buildWeaknessTagStats();
  const groups = buildWeaknessGroupStats();
  const recommended = getRecommendedWeaknessDrills().slice(0, 4);
  const cards = stats.filter((item) => item.questionCount).slice(0, 30);
  return `
    <section class="weakness-drill-section">
      <div class="panel-heading">
        <h3>弱点別ドリル</h3>
      </div>
      <div class="analysis-card-grid two-col">
        <article class="analysis-card">
          <h4>おすすめ弱点ドリル</h4>
          ${recommended.length ? recommended.map((item) => renderRecommendedWeaknessCard(item)).join("") : `<p class="muted">ドリル結果がたまるとおすすめを自動表示します。</p>`}
        </article>
        <article class="analysis-card">
          <h4>弱点グループ</h4>
          ${groups.map((item) => renderWeaknessGroupCard(item)).join("")}
        </article>
      </div>
      <h4 class="section-mini-title">弱点タグ一覧</h4>
      <div class="weakness-tag-grid">
        ${cards.map(renderWeaknessTagCard).join("")}
      </div>
    </section>
  `;
}

function renderRecommendedWeaknessCard(item) {
  return `
    <div class="weakness-mini-card">
      <strong>${escapeHtml(item.name)}</strong>
      <span class="badge ${item.risk.className}">${escapeHtml(item.risk.label)}</span>
      <p>${escapeHtml(item.reason)}</p>
      <dl class="review-facts compact">
        <div><dt>対応問題数</dt><dd>${item.questionCount}</dd></div>
        <div><dt>直近正答率</dt><dd>${item.stats.total ? `${item.stats.recentRate ?? item.stats.rate}%` : "未実施"}</dd></div>
      </dl>
      <div class="card-actions">
        <button class="primary-button" type="button" data-start-weakness-drill="${escapeAttribute(item.name)}" data-weakness-type="${escapeAttribute(item.type)}" data-weakness-count="${item.questionCount >= 10 ? "10" : "5"}">開始</button>
      </div>
    </div>
  `;
}

function renderWeaknessGroupCard(item) {
  return `
    <div class="weakness-mini-card">
      <strong>${escapeHtml(item.group)}</strong>
      <span class="badge ${item.risk.className}">${escapeHtml(item.risk.label)}</span>
      <dl class="review-facts compact">
        <div><dt>対応問題数</dt><dd>${item.questionCount}</dd></div>
        <div><dt>正答率</dt><dd>${item.total ? `${item.rate}%` : "未実施"}</dd></div>
        <div><dt>誤答数</dt><dd>${item.wrong}</dd></div>
      </dl>
      <div class="card-actions">
        <button class="primary-button" type="button" data-start-weakness-drill="${escapeAttribute(item.group)}" data-weakness-type="group" data-weakness-count="5">5問</button>
        <button class="ghost-button" type="button" data-start-weakness-drill="${escapeAttribute(item.group)}" data-weakness-type="group" data-weakness-count="10">10問</button>
        <button class="ghost-button" type="button" data-start-weakness-drill="${escapeAttribute(item.group)}" data-weakness-type="group" data-weakness-count="all">全問</button>
      </div>
    </div>
  `;
}

function renderWeaknessTagCard(item) {
  return `
    <article class="weakness-tag-card">
      <div class="card-meta">
        <span class="badge ${item.risk.className}">${escapeHtml(item.risk.label)}</span>
        <span class="badge">横断</span>
      </div>
      <h4>${escapeHtml(item.tag)}</h4>
      <dl class="review-facts compact">
        <div><dt>対応問題数</dt><dd>${item.questionCount}</dd></div>
        <div><dt>直近正答率</dt><dd>${item.total ? `${item.recentRate ?? item.rate}%` : "未実施"}</dd></div>
        <div><dt>誤答数</dt><dd>${item.wrong}</dd></div>
        <div><dt>最終実施日</dt><dd>${escapeHtml(item.latest ? formatDateTime(item.latest) : "未実施")}</dd></div>
      </dl>
      <div class="card-actions">
        <button class="primary-button" type="button" data-start-weakness-drill="${escapeAttribute(item.tag)}" data-weakness-type="tag" data-weakness-count="5">5問</button>
        <button class="ghost-button" type="button" data-start-weakness-drill="${escapeAttribute(item.tag)}" data-weakness-type="tag" data-weakness-count="10">10問</button>
        <button class="ghost-button" type="button" data-start-weakness-drill="${escapeAttribute(item.tag)}" data-weakness-type="tag" data-weakness-count="all">全問</button>
      </div>
    </article>
  `;
}

function ensureDrillSession() {
  if (state.drill.sessionQuestionIds?.length) return;
  const questions = getDrillQuestions(state.drill.mode);
  state.drill.sessionQuestionIds = questions.map((question) => question.id);
  state.drill.answers = [];
  state.drill.startedAt = new Date().toISOString();
}

function renderDrillQuestion(question, questions) {
  const index = questions.findIndex((item) => item.id === question.id);
  const selected = state.drill.selectedAnswer;
  const isCorrect = selected && selected === question.answer;
  const answered = state.drill.answers.find((answer) => answer.questionId === question.id);
  const documentParts = splitDocumentQuestion(question.question);
  const correctThinkingLabel = question.questionType === "processChoice" ? "正しい手順"
    : question.questionType === "calculationCheck" ? "正しい考え方"
    : question.questionType === "documentRead" ? "読み取るポイント"
    : "正答";
  const trapLabel = question.questionType === "documentRead" ? "読み落とし注意"
    : question.questionType === "processChoice" || question.questionType === "calculationCheck" ? "ミス防止ポイント"
    : "ひっかけ解説";
  return `
    <article class="drill-card">
      <div class="card-meta">
        <span class="badge">${escapeHtml(question.subject)}</span>
        <span class="badge">${escapeHtml(question.topic)}</span>
        <span class="badge">${escapeHtml(question.difficulty)}</span>
        <span class="badge">${escapeHtml(question.questionType)}</span>
        <span class="badge">${escapeHtml(question.weaknessTag)}</span>
        ${answered ? `<span class="badge ${answered.correct ? "ok" : "priority"}">${answered.correct ? "回答済み 正解" : "回答済み 不正解"}</span>` : ""}
      </div>
      <h4>問${index + 1} / ${questions.length}</h4>
      ${documentParts.material ? `
        <details class="drill-document-card" open>
          <summary>簡易資料</summary>
          <p>${escapeHtml(documentParts.material)}</p>
        </details>
      ` : ""}
      <p class="drill-question">${escapeHtml(documentParts.body)}</p>
      <div class="drill-choices">
        ${question.choices.map((choice) => `
          <label class="check-card">
            <input type="radio" name="drill-answer" value="${escapeAttribute(choice)}" ${selected === choice ? "checked" : ""}>
            ${escapeHtml(choice)}
          </label>
        `).join("")}
      </div>
      <div class="form-actions">
        <button class="primary-button" type="button" data-grade-drill>採点</button>
        <button class="ghost-button" type="button" data-next-drill>次の問題</button>
        <button class="ghost-button" type="button" data-finish-drill>結果を保存</button>
        <button class="ghost-button" type="button" data-open-lesson="${escapeAttribute(question.lessonId)}">関連レッスン</button>
      </div>
      ${state.drill.graded ? `
        <div class="drill-result ${isCorrect ? "is-correct" : "is-wrong"}">
          <strong>${isCorrect ? "正解" : "不正解"}</strong>
          <dl class="review-facts compact">
            <div><dt>あなたの回答</dt><dd>${escapeHtml(selected || "未回答")}</dd></div>
            <div><dt>${escapeHtml(correctThinkingLabel)}</dt><dd>${escapeHtml(question.answer)}</dd></div>
            <div><dt>弱点タグ</dt><dd>${escapeHtml(question.weaknessTag)}</dd></div>
          </dl>
          <h4>解説</h4>
          <p>${escapeHtml(question.explanation)}</p>
          <h4>${escapeHtml(trapLabel)}</h4>
          <p>${escapeHtml(question.trapExplanation)}</p>
        </div>
      ` : ""}
    </article>
  `;
}

function splitDocumentQuestion(text) {
  const value = String(text || "");
  const marker = "\n【問】";
  if (!value.startsWith("【簡易資料】") || !value.includes(marker)) {
    return { material: "", body: value };
  }
  const [material, body] = value.split(marker);
  return { material: material.replace(/^【簡易資料】\s*/, ""), body: `【問】${body || ""}` };
}

function setDrillMode(mode) {
  state.drill.mode = mode;
  state.drill.currentQuestionId = "";
  state.drill.selectedAnswer = "";
  state.drill.graded = false;
  state.drill.sessionQuestionIds = [];
  state.drill.answers = [];
  state.drill.startedAt = "";
  if (!isWeaknessDrillMode(mode)) {
    state.drill.targetWeaknessTag = "";
    state.drill.targetWeaknessGroup = "";
  }
  renderDrillView();
}

function startWeaknessDrill(targetName, type = "tag", count = "5") {
  const isGroup = type === "group" || Boolean(getWeaknessGroupByName(targetName));
  const label = count === "all" ? "全問" : `${count}問`;
  state.drill.mode = `弱点別ドリル ${label}`;
  state.drill.targetWeaknessTag = isGroup ? "" : targetName;
  state.drill.targetWeaknessGroup = isGroup ? targetName : "";
  state.drill.currentQuestionId = "";
  state.drill.selectedAnswer = "";
  state.drill.graded = false;
  state.drill.sessionQuestionIds = [];
  state.drill.answers = [];
  state.drill.startedAt = "";
  switchView("drill");
  renderDrillView();
  document.querySelector("#drillAreaStandalone")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function gradeCurrentDrill() {
  const selected = document.querySelector('input[name="drill-answer"]:checked')?.value || "";
  if (!selected) {
    showToast("回答を選択してください。");
    return;
  }
  state.drill.selectedAnswer = selected;
  state.drill.graded = true;
  const questions = getDrillQuestions(state.drill.mode);
  const question = questions.find((item) => item.id === state.drill.currentQuestionId);
  if (question) {
    const answer = {
      questionId: question.id,
      userAnswer: selected,
      correct: selected === question.answer,
      subject: question.subject,
      topic: question.topic,
      weaknessTag: question.weaknessTag
    };
    state.drill.answers = state.drill.answers.filter((item) => item.questionId !== question.id);
    state.drill.answers.push(answer);
  }
  if (questions.length && state.drill.answers.length >= questions.length) {
    finishCurrentDrill();
    return;
  }
  renderDrillView();
}

function moveNextDrill() {
  const questions = getDrillQuestions(state.drill.mode);
  if (!questions.length) return;
  const index = questions.findIndex((question) => question.id === state.drill.currentQuestionId);
  const next = questions[(index + 1 + questions.length) % questions.length];
  state.drill.currentQuestionId = next.id;
  state.drill.selectedAnswer = "";
  state.drill.graded = false;
  renderDrillView();
}

function finishCurrentDrill() {
  const questions = getDrillQuestions(state.drill.mode);
  if (!questions.length || !state.drill.answers.length) {
    showToast("保存するドリル結果がありません。");
    return;
  }
  const correctCount = state.drill.answers.filter((answer) => answer.correct).length;
  const scoreRate = Math.round((correctCount / questions.length) * 100);
  const wrongTags = [...new Set(state.drill.answers.filter((answer) => !answer.correct).map((answer) => answer.weaknessTag).filter(Boolean))];
  const subjects = [...new Set(questions.map((question) => question.subject).filter(Boolean))];
  const result = normalizeDrillResult({
    id: makeDrillResultId(),
    subject: isWeaknessDrillMode(state.drill.mode) ? "横断" : subjects.length === 1 ? subjects[0] : "共通",
    mode: state.drill.mode,
    targetWeaknessTag: state.drill.targetWeaknessTag,
    targetWeaknessGroup: state.drill.targetWeaknessGroup,
    startedAt: state.drill.startedAt || new Date().toISOString(),
    completedAt: new Date().toISOString(),
    totalQuestions: questions.length,
    correctCount,
    scoreRate,
    answers: state.drill.answers,
    weaknessTags: wrongTags,
    reviewNeeded: scoreRate < 70
  });
  state.drillResults.unshift(result);
  state.drill.currentQuestionId = "";
  state.drill.selectedAnswer = "";
  state.drill.graded = false;
  state.drill.sessionQuestionIds = [];
  state.drill.answers = [];
  state.drill.startedAt = "";
  state.drill.targetWeaknessTag = "";
  state.drill.targetWeaknessGroup = "";
  saveUnits();
  createAutoSnapshot("drill_saved");
  render();
  showToast(`ドリル結果を保存しました。判定${result.resultLevel}`);
}

function renderLessonFilters() {
  const subjects = ["すべて", ...new Set(CURRICULUM_LESSONS.map((lesson) => lesson.subject))];
  const courses = [{ value: "すべて", label: "すべて" }, ...CURRICULUM_COURSES.map((course) => ({ value: course.id, label: course.title }))];
  fillSelect("#lessonSubjectFilter", subjects, state.lessonFilters.subject);
  fillObjectSelect("#lessonCourseFilter", courses, state.lessonFilters.courseId);
  fillSelect("#lessonStatusFilter", ["すべて", "未着手", "学習中", "復習対象", "C判定", "完了"], state.lessonFilters.status);
  fillSelect("#lessonUnderstandingFilter", ["すべて", ...CURRICULUM_UNDERSTANDING], state.lessonFilters.understanding);
  document.querySelector("#lessonReviewOnlyFilter").checked = state.lessonFilters.reviewOnly;
}

function fillObjectSelect(selector, options, selected) {
  const element = document.querySelector(selector);
  element.innerHTML = options.map((option) => `<option value="${escapeAttribute(option.value)}">${escapeHtml(option.label)}</option>`).join("");
  element.value = selected;
}

function filteredLessons() {
  return CURRICULUM_LESSONS.filter((lesson) => {
    const progress = getLessonProgress(lesson.id);
    return (
      (state.lessonFilters.subject === "すべて" || lesson.subject === state.lessonFilters.subject) &&
      (state.lessonFilters.courseId === "すべて" || lesson.courseId === state.lessonFilters.courseId) &&
      (state.lessonFilters.status === "すべて" ||
        progress.status === state.lessonFilters.status ||
        (state.lessonFilters.status === "復習対象" && (progress.reviewNeeded || ["B", "C"].includes(progress.understanding))) ||
        (state.lessonFilters.status === "C判定" && progress.understanding === "C")) &&
      (state.lessonFilters.understanding === "すべて" || progress.understanding === state.lessonFilters.understanding) &&
      (!state.lessonFilters.reviewOnly || progress.reviewNeeded || ["B", "C"].includes(progress.understanding))
    );
  });
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
  const progresses = lessons.map((lesson) => getLessonProgress(lesson.id));
  const completed = progresses.filter((progress) => progress.status === "完了").length;
  const reviewCount = progresses.filter((progress) => progress.reviewNeeded || ["B", "C"].includes(progress.understanding)).length;
  const counts = progresses.reduce((acc, progress) => {
    acc[progress.understanding] = (acc[progress.understanding] || 0) + 1;
    return acc;
  }, {});
  const nextLesson = lessons.find((lesson) => getLessonProgress(lesson.id).status !== "完了") || lessons[0];
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
        <div><dt>完了数</dt><dd>${completed}</dd></div>
        <div><dt>進捗率</dt><dd>${rate}%</dd></div>
        <div><dt>A/B/C/未判定</dt><dd>${counts.A || 0}/${counts.B || 0}/${counts.C || 0}/${counts["未判定"] || 0}</dd></div>
        <div><dt>復習対象</dt><dd>${reviewCount}</dd></div>
      </dl>
      <div class="progress-bar"><span style="width:${rate}%"></span></div>
      <div class="card-actions">
        ${nextLesson ? `<button class="primary-button" type="button" data-open-lesson="${escapeAttribute(nextLesson.id)}">${completed ? "続きから" : "開始"}</button>` : ""}
        <button class="ghost-button" type="button" data-course-filter="${escapeAttribute(course.id)}">一覧を見る</button>
      </div>
    </article>
  `;
}

function renderLessonListCard(lesson) {
  const progress = getLessonProgress(lesson.id);
  const correct = lesson.questions.filter((question) => progress.questionResults.some((result) => result.questionId === question.id && result.correct)).length;
  return `
    <article class="lesson-card">
      <div>
        <p class="eyebrow">Lesson ${lesson.order} / ${escapeHtml(lesson.subject)} / ${escapeHtml(lesson.level)}</p>
        <h4>${escapeHtml(lesson.title)}</h4>
        <p>${escapeHtml(lesson.goal)}</p>
        <div class="badge-row">
          <span class="badge">科目 ${escapeHtml(lesson.subject)}</span>
          <span class="badge">${escapeHtml(progress.status)}</span>
          <span class="badge ${progress.understanding === "C" ? "priority" : progress.understanding === "B" ? "normal" : "ok"}">理解度 ${escapeHtml(progress.understanding)}</span>
          ${progress.reviewNeeded ? `<span class="badge priority">復習対象</span>` : ""}
        </div>
      </div>
      <dl class="review-facts compact">
        <div><dt>レッスン番号</dt><dd>${lesson.order}</dd></div>
        <div><dt>目安</dt><dd>${lesson.estimatedMinutes}分</dd></div>
        <div><dt>状態</dt><dd>${escapeHtml(progress.status)}</dd></div>
        <div><dt>理解度</dt><dd>${escapeHtml(progress.understanding)}</dd></div>
        <div><dt>復習対象</dt><dd>${progress.reviewNeeded ? "対象" : "対象外"}</dd></div>
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
  const actionMessage = state.lessonActionMessage?.lessonId === lesson.id ? state.lessonActionMessage.message : "";
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
            <button class="ghost-button" type="button" data-ai-lesson="${escapeAttribute(lesson.id)}">外部ChatGPT相談文を作る</button>
          </div>
        </section>
      </aside>
      <div class="lesson-reader-main">
        <section class="panel lesson-section">
          <p class="eyebrow">${escapeHtml(lesson.subject)} / ${escapeHtml(lesson.level)}</p>
          <h3>${escapeHtml(lesson.title)}</h3>
          <h4>まず結論</h4>
          <p>${escapeHtml(lesson.intro)}</p>
          <h4>学習目標</h4>
          <p>${escapeHtml(lesson.goal)}</p>
          <h4>講義</h4>
          ${lesson.lecture.split("\n").filter(Boolean).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
          ${renderLessonOverrides(lesson.id)}
          <div class="ai-tutor-inline-actions">
            <button class="primary-button" type="button" data-ai-lesson="${escapeAttribute(lesson.id)}">外部ChatGPT相談文を作る</button>
            <button class="ghost-button" type="button" data-ai-lesson-trap="${escapeAttribute(lesson.id)}">ひっかけ相談文を作る</button>
          </div>
        </section>
        ${renderLessonListSection("重要ポイント", lesson.keyPoints, "key-point-list")}
        ${renderLessonListSection("ひっかけ注意", lesson.traps, "trap-list")}
        ${renderLessonListSection("混同ポイント", lesson.confusingPoints, "confusing-list")}
        ${renderLessonListSection("解く手順", lesson.solveSteps || [], "procedure-list")}
        ${renderLessonListSection("原則と例外", lesson.principleExceptions || [], "principle-list")}
        ${renderLessonListSection("主体・期限・手続の区別", [...(lesson.distinctions || []), ...(lesson.timeLimits || [])], "distinction-list")}
        ${renderLessonListSection("試験で狙われる表現", lesson.examTips, "exam-tip-list")}
        ${renderLessonListSection("実務上の注意", lesson.practicalNotes || [], "practical-note-list")}
        ${renderLessonListSection(lesson.subject === "通関実務" ? "ミス防止メモ" : "罰則・処分・手続の区別", lesson.penaltyTips, "penalty-list")}
        ${lesson.subject === "通関実務" ? renderRelatedPracticalLogsForLesson(lesson) : ""}
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
          <p class="muted">${lesson.id === "lesson-kanzeihou-mini-exam" || lesson.id === "lesson-practical-mini-exam" ? "13〜15問正解:A / 9〜12問正解:B / 0〜8問正解:C。" : lesson.id === "lesson-tsukangyoho-mini-exam" ? "9〜10問正解:A / 6〜8問正解:B / 0〜5問正解:C。" : "全問正解:A / 約7割正解:B / それ未満:C。"}B/Cは自動で復習対象になります。</p>
          </div>
        </section>
        <section class="panel lesson-section lesson-finish-bar">
          <h4>完了・復習・次へ</h4>
          <div class="form-actions">
            <button class="primary-button" type="button" data-complete-lesson="${escapeAttribute(lesson.id)}">レッスン完了</button>
            <button class="ghost-button" type="button" data-review-lesson="${escapeAttribute(lesson.id)}">復習に回す</button>
            ${nextLesson ? `<button class="primary-button" type="button" data-open-lesson="${escapeAttribute(nextLesson.id)}">次のレッスンへ進む</button>` : ""}
          </div>
          ${actionMessage ? `<p class="lesson-action-message" role="status">${escapeHtml(actionMessage)}</p>` : ""}
        </section>
      </div>
    </div>
  `;
}

function renderLessonOverrides(lessonId) {
  const items = state.lessonOverrides.filter((item) => item.lessonId === lessonId && item.body.trim());
  if (!items.length) return "";
  return `
    <div class="lesson-extra-material">
      <h4>追加教材</h4>
      ${items.map((item) => `
        <article class="mini-item">
          <span>${escapeHtml(item.title || "追加教材")}</span>
          <small>${escapeHtml(item.createdAt ? formatDateTime(item.createdAt) : "保存済み")}</small>
          <p>${escapeHtml(item.body)}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function renderRelatedPracticalLogsForLesson(lesson) {
  const logs = getRelatedPracticalLogsForLesson(lesson).slice(0, 4);
  return `
    <section class="panel lesson-section related-practical-logs">
      <h4>関連する実務ログ</h4>
      ${logs.length ? `
        <div class="mini-list">
          ${logs.map((log) => `
            <button class="compact-item ghost-button" type="button" data-edit-practical-log="${escapeAttribute(log.id)}">
              <span>${escapeHtml([log.studiedAt, log.practicalType, log.questionRef].filter(Boolean).join(" / ") || "実務ログ")}</span>
              <span>${escapeHtml([log.result, log.mistakeField, (log.weaknessTags || []).slice(0, 2).join("・")].filter(Boolean).join(" / "))}</span>
            </button>
          `).join("")}
        </div>
      ` : `<p class="muted">関連する実務ログはまだありません。実務ログで×や△を記録すると、近いレッスンの復習判断に反映されます。</p>`}
    </section>
  `;
}

function renderLessonListSection(title, items, className) {
  if (!items.length) return "";
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
        <span class="badge">${escapeHtml(questionTypeLabel(question.type))}</span>
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
      ${["procedure", "判断メモ", "計算過程", "手順選択"].includes(question.type) ? `
        <details class="memo-support">
          <summary>判断メモを開く</summary>
          <label class="field-wide details-body">
            判断メモ
            <textarea placeholder="資料の見る順番、計算過程、迷った条件を短くメモできます。採点は選択肢で行います。"></textarea>
          </label>
        </details>
      ` : ""}
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
          <p><strong>通常解説：</strong>${escapeHtml(question.explanation)}</p>
          <p class="trap-note"><strong>ミス防止解説：</strong>${escapeHtml(question.trapExplanation)}</p>
          ${!result.correct ? `
            <div class="card-actions ai-tutor-inline-actions">
              <button class="ghost-button" type="button" data-ai-wrong-question="${escapeAttribute(lesson.id)}:${escapeAttribute(question.id)}">外部ChatGPT相談文を作る</button>
              <button class="primary-button" type="button" data-ai-suggest-wrong-question="${escapeAttribute(lesson.id)}:${escapeAttribute(question.id)}">弱点判定用の相談文を作る</button>
              <button class="ghost-button" type="button" data-ai-similar-question="${escapeAttribute(lesson.id)}:${escapeAttribute(question.id)}">同じ論点の類似問題を作る</button>
              <button class="ghost-button" type="button" data-ai-trap-question="${escapeAttribute(lesson.id)}:${escapeAttribute(question.id)}">本試験でのひっかけを確認する</button>
            </div>
          ` : ""}
        </div>
      ` : ""}
    </article>
  `;
}

function questionTypeLabel(type) {
  const labels = {
    single: "4択単一選択",
    truefalse: "正誤問題",
    procedure: "手順選択問題",
    "判断メモ": "判断メモ型",
    "計算過程": "計算過程確認",
    "手順選択": "手順選択問題"
  };
  return labels[type] || "確認問題";
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
  fillSelect("#reviewSubjectFilter", ["すべて", "通関業法", "関税法等", "通関実務"], state.reviewFilters.subject);
  fillSelect("#reviewStatusFilter", ["すべて", "レッスン", "ドリル", "模試", "弱点", "C判定", "最優先復習", "通常復習", "復習不要"], state.reviewFilters.review);
  fillSelect("#reviewImportanceFilter", ["すべて", ...IMPORTANCE], state.reviewFilters.importance);
  fillSelect("#reviewWeaknessFilter", ["すべて", "弱点タグあり", "弱点タグなし"], state.reviewFilters.weakness);
  document.querySelector("#reviewRedoOnlyFilter").checked = state.reviewFilters.redoOnly;
}

function fillSelect(selector, options, selected) {
  const element = document.querySelector(selector);
  if (!element) return;
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
        <button class="ghost-button" type="button" data-ai-practical-log="${escapeAttribute(log.id)}">外部ChatGPT相談文を作る</button>
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
  document.querySelector("#analysisMockExam").innerHTML = renderMockExamAnalysis();
  document.querySelector("#analysisQuestionBank").innerHTML = renderDrillBankAnalysis();
  document.querySelector("#analysisRetryTargets").innerHTML = renderRetryTargets(analysis.retryTargets);
  document.querySelector("#analysisAiUsage").innerHTML = renderAiUsage(analysis.aiUsage);
}

function renderPastMappingView() {
  const root = document.querySelector("#pastMappingSummary");
  if (!root) return;
  renderPastExamImportPreview();
  renderPastMappingFilters();
  root.innerHTML = renderPastMappingSummary();
  document.querySelector("#pastMappingQuestionList").innerHTML = renderPastMappingQuestionList();
  document.querySelector("#pastMappingMissingList").innerHTML = renderPastMappingMissingList();
}

function renderPastMappingFilters() {
  const questions = state.importedPastExamQuestions;
  fillSelect("#pastMapExamFilter", ["すべて", ...rankFromValues(questions.map((item) => item.examName)).map((item) => item.label)], state.pastMappingFilters.examName);
  fillSelect("#pastMapYearFilter", ["すべて", ...rankFromValues(questions.map((item) => item.year)).map((item) => item.label)], state.pastMappingFilters.year);
  fillSelect("#pastMapSubjectFilter", ["すべて", ...rankFromValues(questions.map((item) => item.subject)).map((item) => item.label)], state.pastMappingFilters.subject);
  fillSelect("#pastMapTopicFilter", ["すべて", ...rankFromValues(questions.map((item) => item.topic)).map((item) => item.label)], state.pastMappingFilters.topic);
  fillSelect("#pastMapWeaknessFilter", ["すべて", ...rankFromValues(questions.map((item) => item.weaknessTag)).map((item) => item.label)], state.pastMappingFilters.weakness);
  fillSelect("#pastMapCoverageFilter", ["すべて", ...PAST_MAPPING_COVERAGE_LEVELS], state.pastMappingFilters.coverage);
  const unmapped = document.querySelector("#pastMapUnmappedOnlyFilter");
  if (unmapped) unmapped.checked = state.pastMappingFilters.unmappedOnly;
}

function getPastExamMapping(questionId) {
  return state.pastExamMappings.find((mapping) => mapping.pastQuestionId === questionId) || null;
}

function isPastExamMappingComplete(mapping) {
  return Boolean(mapping && PAST_MAPPING_COVERAGE_LEVELS.includes(mapping.coverageLevel) && mapping.coverageLevel !== "未判定");
}

function getPastMappingStats() {
  const questions = state.importedPastExamQuestions;
  const mapped = questions.filter((question) => isPastExamMappingComplete(getPastExamMapping(question.id)));
  const counts = PAST_MAPPING_COVERAGE_LEVELS.reduce((acc, level) => ({ ...acc, [level]: 0 }), {});
  questions.forEach((question) => {
    const level = getPastExamMapping(question.id)?.coverageLevel || "未判定";
    counts[level] = (counts[level] || 0) + 1;
  });
  const total = questions.length;
  const pct = (value) => total ? `${Math.round((value / total) * 1000) / 10}%` : "0%";
  return {
    total,
    mapped: mapped.length,
    unmapped: total - mapped.length,
    counts,
    abRate: pct((counts.A || 0) + (counts.B || 0)),
    aRate: pct(counts.A || 0),
    cdRate: pct((counts.C || 0) + (counts.D || 0)),
    missingCount: state.pastExamMappings.filter((mapping) => ["C", "D"].includes(mapping.coverageLevel) || String(mapping.missingContent || "").trim()).length,
    bySubject: buildPastMappingCoverageGroups("subject"),
    byWeakness: buildPastMappingCoverageGroups("weaknessTag"),
    byYear: buildPastMappingCoverageGroups("year")
  };
}

function buildPastMappingCoverageGroups(key) {
  const groups = {};
  state.importedPastExamQuestions.forEach((question) => {
    const label = String(question[key] || "未設定").trim() || "未設定";
    if (!groups[label]) groups[label] = { label, total: 0, A: 0, B: 0, C: 0, D: 0, "未判定": 0 };
    const level = getPastExamMapping(question.id)?.coverageLevel || "未判定";
    groups[label].total += 1;
    groups[label][level] = (groups[label][level] || 0) + 1;
  });
  return Object.values(groups).sort((a, b) => b.total - a.total || a.label.localeCompare(b.label, "ja"));
}

function renderPastMappingSummary() {
  const stats = getPastMappingStats();
  return `
    <div class="analysis-stat-grid">
      ${[
        ["インポート済み", `${stats.total}問`],
        ["マッピング済み", `${stats.mapped}問`],
        ["未マッピング", `${stats.unmapped}問`],
        ["A判定", `${stats.counts.A || 0}問`],
        ["B判定", `${stats.counts.B || 0}問`],
        ["C判定", `${stats.counts.C || 0}問`],
        ["D判定", `${stats.counts.D || 0}問`],
        ["A+B率", stats.abRate],
        ["Aのみ率", stats.aRate],
        ["C+D率", stats.cdRate]
      ].map(([label, value]) => `<div class="analysis-stat"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}
    </div>
    <div class="analysis-card-grid three-col past-mapping-groups">
      ${renderCoverageGroupCard("科目別A/B/C/D", stats.bySubject)}
      ${renderCoverageGroupCard("弱点タグ別A/B/C/D", stats.byWeakness)}
      ${renderCoverageGroupCard("年度別A/B/C/D", stats.byYear)}
    </div>
  `;
}

function renderCoverageGroupCard(title, groups) {
  return `
    <article class="analysis-card">
      <h4>${escapeHtml(title)}</h4>
      ${groups.length ? groups.slice(0, 12).map((item) => `
        <div class="mini-item">
          <span>${escapeHtml(item.label)}</span>
          <small>A${item.A || 0} / B${item.B || 0} / C${item.C || 0} / D${item.D || 0} / 未${item["未判定"] || 0}</small>
        </div>
      `).join("") : `<p class="muted">過去問JSONをインポートしてください。</p>`}
    </article>
  `;
}

function getFilteredPastMappingQuestions() {
  return state.importedPastExamQuestions.filter((question) => {
    const mapping = getPastExamMapping(question.id);
    const level = mapping?.coverageLevel || "未判定";
    return (
      (state.pastMappingFilters.examName === "すべて" || question.examName === state.pastMappingFilters.examName) &&
      (state.pastMappingFilters.year === "すべて" || String(question.year || "") === state.pastMappingFilters.year) &&
      (state.pastMappingFilters.subject === "すべて" || question.subject === state.pastMappingFilters.subject) &&
      (state.pastMappingFilters.topic === "すべて" || question.topic === state.pastMappingFilters.topic) &&
      (state.pastMappingFilters.weakness === "すべて" || question.weaknessTag === state.pastMappingFilters.weakness) &&
      (state.pastMappingFilters.coverage === "すべて" || level === state.pastMappingFilters.coverage) &&
      (!state.pastMappingFilters.unmappedOnly || !isPastExamMappingComplete(mapping))
    );
  }).sort((a, b) => String(b.year || "").localeCompare(String(a.year || ""), "ja") || a.subject.localeCompare(b.subject, "ja") || a.questionNo.localeCompare(b.questionNo, "ja"));
}

function renderPastMappingQuestionList() {
  const questions = getFilteredPastMappingQuestions();
  const count = document.querySelector("#pastMappingResultCount");
  if (count) count.textContent = `${questions.length}問を表示中 / 全${state.importedPastExamQuestions.length}問`;
  if (!state.importedPastExamQuestions.length) return `<p class="muted">過去問JSONをインポートすると一覧に表示されます。</p>`;
  if (!questions.length) return `<p class="muted">条件に一致する過去問はありません。</p>`;
  return questions.map(renderPastMappingQuestionCard).join("");
}

function renderPastMappingQuestionCard(question) {
  const mapping = getPastExamMapping(question.id) || normalizePastExamMapping({ pastQuestionId: question.id, weaknessTag: question.weaknessTag });
  const expanded = state.expandedPastQuestionId === question.id;
  return `
    <article class="past-question-card">
      <div class="past-question-top">
        <div>
          <p class="eyebrow">${escapeHtml([question.examName, question.year].filter(Boolean).join(" / ") || "Imported")}</p>
          <h3>${escapeHtml([question.subject, question.questionNo, question.topic].filter(Boolean).join(" / "))}</h3>
        </div>
        <span class="coverage-badge coverage-${escapeAttribute(mapping.coverageLevel)}">${escapeHtml(mapping.coverageLevel || "未判定")}</span>
      </div>
      <dl class="analysis-facts compact">
        <div><dt>弱点タグ</dt><dd>${escapeHtml(question.weaknessTag || "未設定")}</dd></div>
        <div><dt>対応レッスン数</dt><dd>${mapping.mappedLessonIds.length}</dd></div>
        <div><dt>対応問題数</dt><dd>${mapping.mappedQuestionIds.length}</dd></div>
      </dl>
      <div class="card-actions">
        <button class="ghost-button" type="button" data-toggle-past-question="${escapeAttribute(question.id)}">${expanded ? "閉じる" : "詳細/マッピング"}</button>
      </div>
      ${expanded ? renderPastMappingDetail(question, mapping) : ""}
    </article>
  `;
}

function renderPastMappingDetail(question, mapping) {
  const lessonCandidates = getPastMappingLessonCandidates(question);
  const questionCandidates = getPastMappingQuestionCandidates(question);
  const lessonIds = new Set(mapping.mappedLessonIds);
  const mappedQuestionIds = new Set(mapping.mappedQuestionIds);
  const lessonOptions = CURRICULUM_LESSONS.filter((lesson) => lesson.subject === question.subject || lessonCandidates.some((candidate) => candidate.id === lesson.id)).slice(0, 80);
  const bankOptions = QUESTION_BANK.filter((item) => item.subject === question.subject || questionCandidates.some((candidate) => candidate.id === item.id)).slice(0, 120);
  return `
    <div class="past-question-detail">
      <div class="past-question-text">
        <p><strong>問題文</strong></p>
        <p>${escapeHtml(question.questionText)}</p>
        ${question.choices.length ? `<ol>${question.choices.map((choice) => `<li>${escapeHtml(choice)}</li>`).join("")}</ol>` : ""}
        <dl class="analysis-facts compact">
          <div><dt>正答</dt><dd>${escapeHtml(question.answer)}</dd></div>
          <div><dt>解説</dt><dd>${escapeHtml(question.explanation || "なし")}</dd></div>
        </dl>
      </div>
      <div class="candidate-box">
        <h4>自動候補</h4>
        <p class="muted">候補は自動確定されません。下のチェックを選んで保存してください。</p>
        <div class="mini-list">
          ${lessonCandidates.slice(0, 5).map((lesson) => `<button class="compact-item ghost-button" type="button" data-open-lesson="${escapeAttribute(lesson.id)}"><span>${escapeHtml(lesson.title)}</span><small>${escapeHtml(lesson.subject)}</small></button>`).join("") || `<p class="muted">対応レッスン候補なし</p>`}
          ${questionCandidates.slice(0, 5).map((item) => `<div class="mini-item"><span>${escapeHtml(item.id)} / ${escapeHtml(item.topic || item.weaknessTag || "")}</span><small>${escapeHtml(item.question || "")}</small></div>`).join("") || `<p class="muted">対応問題候補なし</p>`}
        </div>
      </div>
      <form class="past-mapping-form" data-past-mapping-form="${escapeAttribute(question.id)}">
        <div class="field-wide">
          <div class="field-label">対応レッスン</div>
          <div class="check-row past-map-checks">
            ${lessonOptions.map((lesson) => `
              <label class="check-card">
                <input type="checkbox" name="mappedLessonIds" value="${escapeAttribute(lesson.id)}" ${lessonIds.has(lesson.id) ? "checked" : ""}>
                ${escapeHtml(lesson.subject)} / ${escapeHtml(lesson.title)}
              </label>
            `).join("")}
          </div>
        </div>
        <label class="field-wide">
          対応レッスンID追加（カンマ区切り）
          <input name="mappedLessonIdsText" type="text" value="${escapeAttribute(mapping.mappedLessonIds.filter((id) => !lessonOptions.some((lesson) => lesson.id === id)).join(", "))}">
        </label>
        <div class="field-wide">
          <div class="field-label">対応問題バンク</div>
          <div class="check-row past-map-checks">
            ${bankOptions.map((item) => `
              <label class="check-card">
                <input type="checkbox" name="mappedQuestionIds" value="${escapeAttribute(item.id)}" ${mappedQuestionIds.has(item.id) ? "checked" : ""}>
                ${escapeHtml(item.id)} / ${escapeHtml(item.topic || item.weaknessTag || "")}
              </label>
            `).join("")}
          </div>
        </div>
        <label class="field-wide">
          対応問題ID追加（カンマ区切り）
          <input name="mappedQuestionIdsText" type="text" value="${escapeAttribute(mapping.mappedQuestionIds.filter((id) => !bankOptions.some((item) => item.id === id)).join(", "))}">
        </label>
        <label>
          教材根拠判定
          <select name="coverageLevel">${PAST_MAPPING_COVERAGE_LEVELS.map((level) => `<option value="${escapeAttribute(level)}" ${mapping.coverageLevel === level ? "selected" : ""}>${escapeHtml(level)}</option>`).join("")}</select>
        </label>
        <label>
          復習優先度
          <select name="reviewPriority">${PAST_MAPPING_REVIEW_PRIORITIES.map((level) => `<option value="${escapeAttribute(level)}" ${mapping.reviewPriority === level ? "selected" : ""}>${escapeHtml(level)}</option>`).join("")}</select>
        </label>
        <label class="field-wide">判定理由<textarea name="coverageReason">${escapeHtml(mapping.coverageReason)}</textarea></label>
        <label class="field-wide">不足教材<textarea name="missingContent">${escapeHtml(mapping.missingContent)}</textarea></label>
        <label class="field-wide">追加すべき講義<textarea name="neededLesson">${escapeHtml(mapping.neededLesson)}</textarea></label>
        <label class="field-wide">追加すべき問題<textarea name="neededQuestions">${escapeHtml(mapping.neededQuestions)}</textarea></label>
        <label class="field-wide">追加すべきドリル<textarea name="neededDrill">${escapeHtml(mapping.neededDrill)}</textarea></label>
        <label class="field-wide">弱点タグ<input name="weaknessTag" type="text" value="${escapeAttribute(mapping.weaknessTag || question.weaknessTag)}"></label>
        <div class="form-actions field-wide">
          <button class="primary-button" type="button" data-save-past-mapping="${escapeAttribute(question.id)}">保存</button>
          ${mapping.mappedLessonIds[0] ? `<button class="ghost-button" type="button" data-open-lesson="${escapeAttribute(mapping.mappedLessonIds[0])}">対応レッスンを開く</button>` : ""}
          ${question.weaknessTag ? `<button class="ghost-button" type="button" data-start-weakness-drill="${escapeAttribute(question.weaknessTag)}" data-weakness-type="tag" data-weakness-count="5">同じ弱点ドリル</button>` : ""}
          ${subjectDrillMode(question.subject) ? `<button class="ghost-button" type="button" data-start-drill-mode="${escapeAttribute(subjectDrillMode(question.subject))}">同じ科目のドリル</button>` : ""}
        </div>
      </form>
    </div>
  `;
}

function subjectDrillMode(subject) {
  if (subject === "通関業法") return "通関業法ドリル";
  if (subject === "関税法等") return "関税法等ドリル";
  if (subject === "通関実務") return "通関実務ドリル";
  return "";
}

function getPastMappingLessonCandidates(question) {
  const terms = [question.topic, question.weaknessTag].filter(Boolean).map((value) => String(value).toLowerCase());
  return CURRICULUM_LESSONS.map((lesson) => {
    const haystack = [lesson.title, lesson.topic, lesson.goal, lesson.intro, lesson.weaknessTag, ...(lesson.keyPoints || []), ...(lesson.traps || [])].join(" ").toLowerCase();
    let score = lesson.subject === question.subject ? 4 : 0;
    terms.forEach((term) => {
      if (term && haystack.includes(term)) score += 6;
    });
    if (question.topic && lesson.title?.includes(question.topic)) score += 8;
    if (question.weaknessTag && lesson.weaknessTag === question.weaknessTag) score += 8;
    return { ...lesson, score };
  }).filter((lesson) => lesson.score > 0).sort((a, b) => b.score - a.score || a.order - b.order);
}

function getPastMappingQuestionCandidates(question) {
  const terms = [question.topic, question.weaknessTag].filter(Boolean).map((value) => String(value).toLowerCase());
  return QUESTION_BANK.map((item) => {
    const haystack = [item.topic, item.weaknessTag, item.question, item.explanation, item.trapExplanation].join(" ").toLowerCase();
    let score = item.subject === question.subject ? 4 : 0;
    terms.forEach((term) => {
      if (term && haystack.includes(term)) score += 6;
    });
    if (question.topic && item.topic === question.topic) score += 8;
    if (question.weaknessTag && item.weaknessTag === question.weaknessTag) score += 8;
    return { ...item, score };
  }).filter((item) => item.score > 0).sort((a, b) => b.score - a.score || a.id.localeCompare(b.id, "ja"));
}

function parseIdList(value) {
  return String(value || "").split(",").map((item) => item.trim()).filter(Boolean);
}

function savePastExamMapping(questionId) {
  const question = state.importedPastExamQuestions.find((item) => item.id === questionId);
  const form = [...document.querySelectorAll("[data-past-mapping-form]")].find((item) => item.dataset.pastMappingForm === questionId);
  if (!question || !form) return;
  const formData = new FormData(form);
  const existing = getPastExamMapping(questionId);
  const mapping = normalizePastExamMapping({
    ...(existing || {}),
    id: existing?.id || makePastExamMappingId(),
    pastQuestionId: questionId,
    mappedLessonIds: [...formData.getAll("mappedLessonIds").map(String), ...parseIdList(formData.get("mappedLessonIdsText"))],
    mappedQuestionIds: [...formData.getAll("mappedQuestionIds").map(String), ...parseIdList(formData.get("mappedQuestionIdsText"))],
    coverageLevel: String(formData.get("coverageLevel") || "未判定"),
    coverageReason: String(formData.get("coverageReason") || "").trim(),
    missingContent: String(formData.get("missingContent") || "").trim(),
    neededLesson: String(formData.get("neededLesson") || "").trim(),
    neededQuestions: String(formData.get("neededQuestions") || "").trim(),
    neededDrill: String(formData.get("neededDrill") || "").trim(),
    weaknessTag: String(formData.get("weaknessTag") || question.weaknessTag || "").trim(),
    reviewPriority: String(formData.get("reviewPriority") || "未設定"),
    updatedAt: new Date().toISOString()
  });
  if (existing) {
    state.pastExamMappings = state.pastExamMappings.map((item) => item.pastQuestionId === questionId ? mapping : item);
  } else {
    state.pastExamMappings.unshift(mapping);
  }
  saveUnits();
  renderPastMappingView();
  showToast("過去問マッピングを保存しました。");
}

function renderPastMappingMissingList() {
  const rows = buildPastMappingMissingRows();
  if (!rows.length) return `<p class="muted">C/D判定、または不足メモがあるB判定はまだありません。</p>`;
  return `
    <div class="ranking-list">
      ${rows.map((row) => `
        <details class="past-missing-item">
          <summary>
            <span>${escapeHtml([row.subject, row.topic, row.weaknessTag].filter(Boolean).join(" / "))}</span>
            <span class="badge ${row.priority === "高" ? "priority" : row.priority === "中" ? "normal" : "ok"}">${escapeHtml(row.priority)}</span>
          </summary>
          <dl class="analysis-facts compact">
            <div><dt>対象過去問数</dt><dd>${row.count}</dd></div>
            <div><dt>不足内容</dt><dd>${escapeHtml(row.missingContent || "未記入")}</dd></div>
            <div><dt>必要な講義</dt><dd>${escapeHtml(row.neededLesson || "未記入")}</dd></div>
            <div><dt>必要な問題</dt><dd>${escapeHtml(row.neededQuestions || "未記入")}</dd></div>
            <div><dt>必要なドリル</dt><dd>${escapeHtml(row.neededDrill || "未記入")}</dd></div>
          </dl>
        </details>
      `).join("")}
    </div>
  `;
}

function buildPastMappingMissingRows() {
  const groups = {};
  state.importedPastExamQuestions.forEach((question) => {
    const mapping = getPastExamMapping(question.id);
    if (!mapping) return;
    const hasShortage = ["C", "D"].includes(mapping.coverageLevel) || (mapping.coverageLevel === "B" && String(mapping.missingContent || "").trim());
    if (!hasShortage) return;
    const key = [question.subject, question.topic, mapping.weaknessTag || question.weaknessTag].join("|");
    if (!groups[key]) {
      groups[key] = {
        subject: question.subject,
        topic: question.topic,
        weaknessTag: mapping.weaknessTag || question.weaknessTag,
        levels: [],
        missingContent: [],
        neededLesson: [],
        neededQuestions: [],
        neededDrill: [],
        count: 0
      };
    }
    groups[key].count += 1;
    groups[key].levels.push(mapping.coverageLevel);
    ["missingContent", "neededLesson", "neededQuestions", "neededDrill"].forEach((field) => {
      if (mapping[field]) groups[key][field].push(mapping[field]);
    });
  });
  const weights = { 高: 3, 中: 2, 低: 1 };
  return Object.values(groups).map((row) => {
    const priority = row.levels.includes("D") ? "高" : row.levels.includes("C") ? "中" : "低";
    return {
      ...row,
      priority,
      missingContent: [...new Set(row.missingContent)].join(" / "),
      neededLesson: [...new Set(row.neededLesson)].join(" / "),
      neededQuestions: [...new Set(row.neededQuestions)].join(" / "),
      neededDrill: [...new Set(row.neededDrill)].join(" / ")
    };
  }).sort((a, b) => weights[b.priority] - weights[a.priority] || b.count - a.count);
}

function parsePastExamImportJson(rawText) {
  const parsed = JSON.parse(rawText);
  const wrapper = !Array.isArray(parsed) && parsed && typeof parsed === "object" ? parsed : {};
  const rawQuestions = Array.isArray(parsed) ? parsed : Array.isArray(parsed?.questions) ? parsed.questions : null;
  if (!rawQuestions) throw new Error("配列形式、または questions 配列を持つラッパー形式のJSONを指定してください。");
  const normalized = rawQuestions.map((question) => normalizeImportedPastExamQuestion(question, wrapper));
  const existingIds = new Set(state.importedPastExamQuestions.map((question) => question.id));
  const seen = new Set();
  let duplicateInFile = 0;
  const rows = normalized.map((question) => {
    const missing = ["id", "subject", "questionNo", "questionText", "answer"].filter((field) => !String(question[field] || "").trim());
    const duplicateExisting = existingIds.has(question.id);
    const duplicateCurrent = question.id && seen.has(question.id);
    if (duplicateCurrent) duplicateInFile += 1;
    if (question.id) seen.add(question.id);
    return { question, missing, duplicateExisting, duplicateCurrent, importable: !missing.length && !duplicateExisting && !duplicateCurrent };
  });
  return {
    wrapper,
    rows,
    questions: rows.filter((row) => row.importable).map((row) => ({ ...row.question, importedAt: new Date().toISOString() })),
    summary: {
      examName: wrapper.examName || normalized.find((item) => item.examName)?.examName || "未設定",
      year: wrapper.year || normalized.find((item) => item.year)?.year || "未設定",
      total: normalized.length,
      bySubject: rankFromValues(normalized.map((item) => item.subject)),
      duplicateExisting: rows.filter((row) => row.duplicateExisting).length,
      duplicateInFile,
      missingRequired: rows.filter((row) => row.missing.length).length,
      importable: rows.filter((row) => row.importable).length
    }
  };
}

function previewPastExamImport(file) {
  const message = document.querySelector("#pastExamImportMessage");
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      state.pendingPastExamImport = parsePastExamImportJson(String(reader.result || ""));
      renderPastExamImportPreview();
      if (message) message.textContent = "プレビューを確認してください。まだ保存していません。";
    } catch (error) {
      state.pendingPastExamImport = null;
      renderPastExamImportPreview();
      if (message) message.textContent = error.message || "JSONを読み込めませんでした。";
    } finally {
      document.querySelector("#pastExamImportInput").value = "";
    }
  });
  reader.addEventListener("error", () => {
    if (message) message.textContent = "ファイルを読み込めませんでした。";
  });
  reader.readAsText(file);
}

function renderPastExamImportPreview() {
  const host = document.querySelector("#pastExamImportPreview");
  const button = document.querySelector("#executePastExamImportButton");
  if (!host || !button) return;
  const pending = state.pendingPastExamImport;
  button.disabled = !pending?.questions?.length;
  if (!pending) {
    host.innerHTML = `<p class="muted">JSONを選択すると、保存前に内容を確認できます。</p>`;
    return;
  }
  const summary = pending.summary;
  const warnings = [
    summary.duplicateExisting ? `既存idとの重複 ${summary.duplicateExisting}件はスキップします。` : "",
    summary.duplicateInFile ? `ファイル内id重複 ${summary.duplicateInFile}件はスキップします。` : "",
    summary.missingRequired ? `必須項目不足 ${summary.missingRequired}件はスキップします。` : ""
  ].filter(Boolean);
  host.innerHTML = `
    <dl class="info-list compact">
      <div><dt>試験名</dt><dd>${escapeHtml(summary.examName)}</dd></div>
      <div><dt>年度</dt><dd>${escapeHtml(summary.year)}</dd></div>
      <div><dt>問題数</dt><dd>${summary.total}問</dd></div>
      <div><dt>科目別問題数</dt><dd>${escapeHtml(summary.bySubject.map((item) => `${item.label}:${item.count}`).join(" / ") || "なし")}</dd></div>
      <div><dt>id重複数</dt><dd>既存${summary.duplicateExisting} / ファイル内${summary.duplicateInFile}</dd></div>
      <div><dt>必須項目不足数</dt><dd>${summary.missingRequired}件</dd></div>
      <div><dt>インポート可能件数</dt><dd>${summary.importable}件</dd></div>
    </dl>
    ${warnings.length ? `<div class="inline-warning">${warnings.map(escapeHtml).join("<br>")}</div>` : `<p class="muted">警告はありません。</p>`}
  `;
}

function executePastExamImport() {
  const pending = state.pendingPastExamImport;
  if (!pending?.questions?.length) return;
  state.importedPastExamQuestions = [...pending.questions, ...state.importedPastExamQuestions].map(normalizeImportedPastExamQuestion);
  state.pendingPastExamImport = null;
  saveUnits();
  renderPastExamImportPreview();
  renderPastMappingView();
  const message = document.querySelector("#pastExamImportMessage");
  if (message) message.textContent = "過去問JSONをインポートしました。";
  showToast("過去問をインポートしました。");
}

function buildPastMappingAiPrompt() {
  const stats = getPastMappingStats();
  const missing = buildPastMappingMissingRows().slice(0, 12);
  const subjects = stats.bySubject.map((item) => `${item.label}: A${item.A || 0}/B${item.B || 0}/C${item.C || 0}/D${item.D || 0}`).join("\n");
  return [
    "私は通関士試験を学習しています。",
    "TSUKAN YOBIKOというローカル教材アプリの過去問マッピング結果をもとに、教材不足を分析してください。",
    "",
    "【対象】",
    `${state.importedPastExamQuestions[0]?.examName || "インポート済み過去問"} ${state.importedPastExamQuestions[0]?.subject || ""}`.trim(),
    "",
    "【教材根拠率】",
    `インポート済み過去問数：${stats.total}`,
    `マッピング済み問題数：${stats.mapped}`,
    `A判定：${stats.counts.A || 0}`,
    `B判定：${stats.counts.B || 0}`,
    `C判定：${stats.counts.C || 0}`,
    `D判定：${stats.counts.D || 0}`,
    `A+B率：${stats.abRate}`,
    `Aのみ率：${stats.aRate}`,
    `C+D率：${stats.cdRate}`,
    "",
    "【科目別A/B/C/D】",
    subjects || "データなし",
    "",
    "【不足論点】",
    missing.length ? missing.map((item) => `・${[item.subject, item.topic, item.weaknessTag].filter(Boolean).join(" / ")}：${item.priority}、${item.missingContent || item.neededLesson || item.neededQuestions || item.neededDrill || "不足内容未記入"}`).join("\n") : "不足論点は未登録です。",
    "",
    "【相談したいこと】",
    "次にどの教材・問題・ドリルを追加すべきか、優先順位を提案してください。",
    "市販教材や過去問本文をそのまま複製せず、論点ベースで教材補強案を出してください。"
  ].join("\n");
}

function renderDrillBankAnalysis() {
  const renderSubjectBank = (subject, primaryMode, secondaryMode) => {
    const questions = QUESTION_BANK.filter((question) => question.subject === subject);
    const difficulty = rankFromValues(questions.map((question) => question.difficulty));
    const topics = rankFromValues(questions.map((question) => question.topic));
    const questionTypes = rankFromValues(questions.map((question) => question.questionType));
    const tags = rankFromValues(questions.map((question) => question.weaknessTag));
    const results = state.drillResults.filter((result) => result.subject === subject);
    const average = results.length ? Math.round(results.reduce((sum, result) => sum + result.scoreRate, 0) / results.length) : 0;
    const wrongTags = getDrillWeaknessTagRanking(subject);
    const topicRates = getDrillTopicAccuracy(subject);
    const cTopics = getDrillCLevelTopics(subject);
    const typeRate = (type) => getDrillQuestionTypeAccuracy(subject, type);
    return `
      <section class="panel analysis-section">
        <div class="panel-heading"><h3>${escapeHtml(subject)}問題バンク分析</h3></div>
        <div class="analysis-card-grid two-col">
          <article class="analysis-card">
            <h4>問題バンク</h4>
            <dl class="analysis-facts">
              <div><dt>${escapeHtml(subject)}問題数</dt><dd>${questions.length}</dd></div>
              <div><dt>難易度別問題数</dt><dd>${escapeHtml(difficulty.map((item) => `${item.label}:${item.count}`).join(" / "))}</dd></div>
              <div><dt>論点別問題数</dt><dd>${escapeHtml(topics.slice(0, 12).map((item) => `${item.label}:${item.count}`).join(" / "))}</dd></div>
              <div><dt>問題形式別問題数</dt><dd>${escapeHtml(questionTypes.map((item) => `${item.label}:${item.count}`).join(" / "))}</dd></div>
              <div><dt>弱点タグ別問題数</dt><dd>${escapeHtml(tags.slice(0, 12).map((item) => `${item.label}:${item.count}`).join(" / "))}</dd></div>
            </dl>
          </article>
          <article class="analysis-card">
            <h4>ドリル結果</h4>
            <dl class="analysis-facts">
              <div><dt>ドリル実施回数</dt><dd>${results.length}</dd></div>
              <div><dt>ドリル平均正答率</dt><dd>${results.length ? `${average}%` : "未実施"}</dd></div>
              <div><dt>論点別正答率</dt><dd>${escapeHtml(topicRates.slice(0, 10).map((item) => `${item.topic}:${item.rate}%(${item.correct}/${item.total})`).join(" / ") || "未実施")}</dd></div>
              ${subject === "通関実務" ? `
                <div><dt>手順ドリル正答率</dt><dd>${escapeHtml(typeRate("processChoice"))}</dd></div>
                <div><dt>計算過程ドリル正答率</dt><dd>${escapeHtml(typeRate("calculationCheck"))}</dd></div>
                <div><dt>資料読取ドリル正答率</dt><dd>${escapeHtml(typeRate("documentRead"))}</dd></div>
              ` : ""}
              <div><dt>よく間違える弱点タグ</dt><dd>${escapeHtml(wrongTags.slice(0, 8).map((item) => `${item.tag}:${item.count}`).join(" / ") || "なし")}</dd></div>
              <div><dt>C判定が多い論点</dt><dd>${escapeHtml(cTopics.map((item) => `${item.topic}:${item.count}`).join(" / ") || "なし")}</dd></div>
            </dl>
            <div class="card-actions">
              <button class="primary-button" type="button" data-start-drill-mode="${escapeAttribute(primaryMode)}">${escapeHtml(primaryMode)}</button>
              <button class="ghost-button" type="button" data-start-drill-mode="${escapeAttribute(secondaryMode)}">${escapeHtml(secondaryMode)}</button>
            </div>
          </article>
        </div>
      </section>
    `;
  };
  return `
    ${renderWeaknessTagAnalysis()}
    ${renderSubjectBank("通関業法", "通関業法10問", "通関業法ひっかけ")}
    ${renderSubjectBank("関税法等", "関税法等10問", "課税価格ドリル")}
    ${renderSubjectBank("通関実務", "通関実務10問", "手順ドリル")}
  `;
}

function renderWeaknessTagAnalysis() {
  const tagStats = buildWeaknessTagStats().filter((item) => item.questionCount || item.total).slice(0, 18);
  const groupStats = buildWeaknessGroupStats();
  const improving = tagStats.filter((item) => {
    const answers = [...item.recentAnswers].sort((a, b) => (a.date || "").localeCompare(b.date || ""));
    if (answers.length < 6) return false;
    const oldRows = answers.slice(0, -3);
    const recentRows = answers.slice(-3);
    const oldRate = oldRows.filter((answer) => answer.correct).length / oldRows.length;
    const recentRate = recentRows.filter((answer) => answer.correct).length / recentRows.length;
    return recentRate > oldRate;
  }).slice(0, 5);
  const worsening = tagStats.filter((item) => {
    const recent = [...item.recentAnswers].sort((a, b) => (b.date || "").localeCompare(a.date || "")).slice(0, 3);
    return recent.length >= 3 && Math.round((recent.filter((answer) => answer.correct).length / recent.length) * 100) < 50;
  }).slice(0, 5);
  const priority = tagStats.filter((item) => item.risk.label === "最優先").slice(0, 6);
  const danger = tagStats.filter((item) => item.risk.label === "危険").slice(0, 6);
  return `
    <section class="panel analysis-section">
      <div class="panel-heading"><h3>弱点別分析</h3></div>
      <div class="analysis-card-grid two-col">
        <article class="analysis-card">
          <h4>弱点タグ別正答率</h4>
          <dl class="analysis-facts">
            ${tagStats.slice(0, 12).map((item) => `
              <div><dt>${escapeHtml(item.tag)}</dt><dd>${item.total ? `${item.rate}% ${item.correct}/${item.total} 誤答${item.wrong} / ${item.risk.label}` : `未実施 / 対応${item.questionCount}問`}</dd></div>
            `).join("")}
          </dl>
        </article>
        <article class="analysis-card">
          <h4>弱点グループ別正答率</h4>
          <dl class="analysis-facts">
            ${groupStats.map((item) => `
              <div><dt>${escapeHtml(item.group)}</dt><dd>${item.total ? `${item.rate}% ${item.correct}/${item.total} 誤答${item.wrong} / ${item.risk.label}` : `未実施 / 対応${item.questionCount}問`}</dd></div>
            `).join("")}
          </dl>
        </article>
        <article class="analysis-card">
          <h4>優先弱点</h4>
          <dl class="analysis-facts">
            <div><dt>最優先弱点タグ</dt><dd>${escapeHtml(priority.map((item) => item.tag).join(" / ") || "なし")}</dd></div>
            <div><dt>危険弱点タグ</dt><dd>${escapeHtml(danger.map((item) => item.tag).join(" / ") || "なし")}</dd></div>
            <div><dt>出題数上位</dt><dd>${escapeHtml(tagStats.slice(0, 8).map((item) => `${item.tag}:${item.total}`).join(" / ") || "データ不足")}</dd></div>
            <div><dt>誤答数上位</dt><dd>${escapeHtml([...tagStats].sort((a, b) => b.wrong - a.wrong).slice(0, 8).map((item) => `${item.tag}:${item.wrong}`).join(" / ") || "データ不足")}</dd></div>
          </dl>
        </article>
        <article class="analysis-card">
          <h4>傾向</h4>
          <dl class="analysis-facts">
            <div><dt>改善傾向</dt><dd>${escapeHtml(improving.map((item) => item.tag).join(" / ") || "データ不足")}</dd></div>
            <div><dt>悪化・要注意</dt><dd>${escapeHtml(worsening.map((item) => item.tag).join(" / ") || "データ不足")}</dd></div>
          </dl>
        </article>
      </div>
    </section>
  `;
}

function getDrillWeaknessTagRanking(subject = "通関業法") {
  const counts = {};
  state.drillResults
    .filter((result) => result.subject === subject)
    .flatMap((result) => result.answers || [])
    .filter((answer) => !answer.correct && answer.weaknessTag)
    .forEach((answer) => {
      counts[answer.weaknessTag] = (counts[answer.weaknessTag] || 0) + 1;
    });
  return Object.entries(counts).map(([tag, count]) => ({ tag, count })).sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

function getDrillTopicAccuracy(subject) {
  const map = new Map();
  state.drillResults
    .filter((result) => result.subject === subject)
    .flatMap((result) => result.answers || [])
    .forEach((answer) => {
      const question = QUESTION_BANK.find((item) => item.id === answer.questionId);
      if (!question) return;
      const current = map.get(question.topic) || { topic: question.topic, total: 0, correct: 0 };
      current.total += 1;
      if (answer.correct) current.correct += 1;
      map.set(question.topic, current);
    });
  return [...map.values()]
    .map((item) => ({ ...item, rate: item.total ? Math.round((item.correct / item.total) * 100) : 0 }))
    .sort((a, b) => a.rate - b.rate || b.total - a.total || a.topic.localeCompare(b.topic, "ja"));
}

function getDrillQuestionTypeAccuracy(subject, questionType) {
  const rows = state.drillResults
    .filter((result) => result.subject === subject)
    .flatMap((result) => result.answers || [])
    .map((answer) => ({ answer, question: QUESTION_BANK.find((item) => item.id === answer.questionId) }))
    .filter((row) => row.question?.questionType === questionType);
  if (!rows.length) return "未実施";
  const correct = rows.filter((row) => row.answer.correct).length;
  return `${Math.round((correct / rows.length) * 100)}%（${correct}/${rows.length}）`;
}

function getDrillCLevelTopics(subject) {
  const counts = {};
  state.drillResults
    .filter((result) => result.subject === subject && result.resultLevel === "C")
    .flatMap((result) => result.answers || [])
    .filter((answer) => !answer.correct)
    .forEach((answer) => {
      const question = QUESTION_BANK.find((item) => item.id === answer.questionId);
      if (!question) return;
      counts[question.topic] = (counts[question.topic] || 0) + 1;
    });
  return Object.entries(counts).map(([topic, count]) => ({ topic, count })).sort((a, b) => b.count - a.count || a.topic.localeCompare(b.topic, "ja")).slice(0, 8);
}

function renderMockExamAnalysis() {
  const results = state.mockExamResults;
  const latest = getLatestMockResult();
  const average = results.length ? Math.round(results.reduce((sum, result) => sum + result.scoreRate, 0) / results.length) : 0;
  const best = results.length ? Math.max(...results.map((result) => result.scoreRate)) : 0;
  const subjectRows = ["通関業法", "関税法等", "通関実務"].map((subject) => {
    const rows = results.flatMap((result) => result.answers).filter((answer) => answer.subject === subject);
    const correct = rows.filter((answer) => answer.correct).length;
    return `${subject}:${rows.length ? Math.round((correct / rows.length) * 100) : 0}%`;
  }).join(" / ");
  const weakTags = getCrossWeaknessTagRanking().slice(0, 8).map((item) => `${item.tag}(${item.count})`).join(" / ");
  const wrongTopics = rankFromValues(results.flatMap((result) => result.answers.filter((answer) => !answer.correct).map((answer) => answer.topic))).slice(0, 8);
  const transitions = [...results].sort((a, b) => (a.completedAt || "").localeCompare(b.completedAt || "")).map((result) => `${formatDateTime(result.completedAt)}:${result.scoreRate}%/${result.resultLevel}`).join(" / ");
  const trapAnswers = results.flatMap((result) => result.answers).filter((answer) => answer.difficulty === "ひっかけ" || answer.questionType === "trapCheck" || TRAP_WEAKNESS_TAGS.includes(answer.weaknessTag));
  const trapRate = trapAnswers.length ? `${Math.round((trapAnswers.filter((answer) => answer.correct).length / trapAnswers.length) * 100)}%` : "データ不足";
  const doneModes = new Set(results.map((result) => result.mode));
  const untried = Object.values(MOCK_EXAM_MODES).filter((mode) => !doneModes.has(mode.id)).map((mode) => mode.title);
  const nextMode = latest?.resultLevel === "C" ? "弱点集中模試"
    : !doneModes.has("light15") ? "15問ライト模試"
    : !doneModes.has("standard30") ? "30問標準模試"
    : "弱点集中模試";
  return `
    <div class="analysis-card-grid two-col">
      <article class="analysis-card">
        <h4>総合模試集計</h4>
        <dl class="analysis-facts">
          <div><dt>模試実施回数</dt><dd>${results.length}</dd></div>
          <div><dt>最新模試判定</dt><dd>${escapeHtml(latest?.resultLevel || "未実施")}</dd></div>
          <div><dt>最新模試正答率</dt><dd>${latest ? `${latest.scoreRate}%` : "未実施"}</dd></div>
          <div><dt>模試平均正答率</dt><dd>${results.length ? `${average}%` : "未実施"}</dd></div>
          <div><dt>模試最高正答率</dt><dd>${results.length ? `${best}%` : "未実施"}</dd></div>
          <div><dt>科目別模試正答率</dt><dd>${escapeHtml(subjectRows)}</dd></div>
          <div><dt>模試別推移</dt><dd>${escapeHtml(transitions || "未実施")}</dd></div>
          <div><dt>ひっかけ問題正答率</dt><dd>${escapeHtml(trapRate)}</dd></div>
          <div><dt>未実施の模試モード</dt><dd>${escapeHtml(untried.join(" / ") || "なし")}</dd></div>
          <div><dt>次に受けるべき模試</dt><dd>${escapeHtml(nextMode)}</dd></div>
        </dl>
      </article>
      <article class="analysis-card">
        <h4>模試で多い弱点</h4>
        <dl class="analysis-facts">
          <div><dt>弱点タグ</dt><dd>${escapeHtml(weakTags || "データ不足")}</dd></div>
          <div><dt>間違えた論点ランキング</dt><dd>${escapeHtml(wrongTopics.map((item) => `${item.label}(${item.count})`).join(" / ") || "なし")}</dd></div>
        </dl>
        <div class="card-actions">
          <button class="primary-button" type="button" data-open-mock>模試を開く</button>
        </div>
      </article>
    </div>
  `;
}

function renderCurriculumAnalysis() {
  const stats = getCurriculumStats();
  const tsukan = buildTsukangyohoCurriculumAnalysis();
  const kanzei = buildKanzeihouCurriculumAnalysis();
  const practical = buildPracticalCurriculumAnalysis();
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
        <h4>通関実務カリキュラム分析</h4>
        <dl class="analysis-facts">
          <div><dt>レッスン総数</dt><dd>${practical.total}</dd></div>
          <div><dt>完了数</dt><dd>${practical.completed}</dd></div>
          <div><dt>未着手数</dt><dd>${practical.notStarted}</dd></div>
          <div><dt>復習対象数</dt><dd>${practical.reviewCount}</dd></div>
          <div><dt>A/B/C/未判定</dt><dd>${practical.understandingCounts.A || 0}/${practical.understandingCounts.B || 0}/${practical.understandingCounts.C || 0}/${practical.understandingCounts["未判定"] || 0}</dd></div>
          <div><dt>ミニ模試結果</dt><dd>${escapeHtml(practical.miniExamText)}</dd></div>
          <div><dt>ミスパターン問題の正答率</dt><dd>${escapeHtml(practical.trapAccuracy)}</dd></div>
          <div><dt>品目分類系レッスン正答率</dt><dd>${escapeHtml(practical.classificationAccuracy)}</dd></div>
          <div><dt>課税価格系レッスン正答率</dt><dd>${escapeHtml(practical.customsValueAccuracy)}</dd></div>
          <div><dt>税額計算系レッスン正答率</dt><dd>${escapeHtml(practical.taxCalculationAccuracy)}</dd></div>
          <div><dt>申告書作成系正答率</dt><dd>${escapeHtml(practical.declarationAccuracy)}</dd></div>
          <div><dt>時間配分系理解度</dt><dd>${escapeHtml(practical.timeManagementUnderstanding)}</dd></div>
          <div><dt>実務ログ連動</dt><dd>${escapeHtml(practical.logLinkText)}</dd></div>
        </dl>
      </article>
      <article class="analysis-card">
        <h4>関税法等カリキュラム分析</h4>
        <dl class="analysis-facts">
          <div><dt>レッスン総数</dt><dd>${kanzei.total}</dd></div>
          <div><dt>完了数</dt><dd>${kanzei.completed}</dd></div>
          <div><dt>未着手数</dt><dd>${kanzei.notStarted}</dd></div>
          <div><dt>復習対象数</dt><dd>${kanzei.reviewCount}</dd></div>
          <div><dt>A/B/C/未判定</dt><dd>${kanzei.understandingCounts.A || 0}/${kanzei.understandingCounts.B || 0}/${kanzei.understandingCounts.C || 0}/${kanzei.understandingCounts["未判定"] || 0}</dd></div>
          <div><dt>ミニ模試結果</dt><dd>${escapeHtml(kanzei.miniExamText)}</dd></div>
          <div><dt>ひっかけ問題正答率</dt><dd>${escapeHtml(kanzei.trapAccuracy)}</dd></div>
          <div><dt>保税制度レッスン正答率</dt><dd>${escapeHtml(kanzei.bondedAccuracy)}</dd></div>
          <div><dt>納税・申告系正答率</dt><dd>${escapeHtml(kanzei.taxDeclarationAccuracy)}</dd></div>
          <div><dt>課税価格系正答率</dt><dd>${escapeHtml(kanzei.customsValueAccuracy)}</dd></div>
        </dl>
      </article>
      <article class="analysis-card">
        <h4>通関業法カリキュラム分析</h4>
        <dl class="analysis-facts">
          <div><dt>レッスン総数</dt><dd>${tsukan.total}</dd></div>
          <div><dt>完了数</dt><dd>${tsukan.completed}</dd></div>
          <div><dt>未着手数</dt><dd>${tsukan.notStarted}</dd></div>
          <div><dt>復習対象数</dt><dd>${tsukan.reviewCount}</dd></div>
          <div><dt>A/B/C/未判定</dt><dd>${tsukan.understandingCounts.A || 0}/${tsukan.understandingCounts.B || 0}/${tsukan.understandingCounts.C || 0}/${tsukan.understandingCounts["未判定"] || 0}</dd></div>
          <div><dt>ミニ模試結果</dt><dd>${escapeHtml(tsukan.miniExamText)}</dd></div>
          <div><dt>ひっかけ問題正答率</dt><dd>${escapeHtml(tsukan.trapAccuracy)}</dd></div>
          <div><dt>罰則・処分系正答率</dt><dd>${escapeHtml(tsukan.penaltyAccuracy)}</dd></div>
        </dl>
      </article>
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
        <h4>通関実務 苦手レッスン上位</h4>
        ${practical.weakLessons.length ? practical.weakLessons.map(({ lesson, progress, correct, reason }) => `
          <button class="compact-item ghost-button" type="button" data-open-lesson="${escapeAttribute(lesson.id)}">
            <span>${escapeHtml(lesson.title)}</span>
            <span>${escapeHtml(`${progress.understanding} / ${correct}/${lesson.questions.length} / ${reason}`)}</span>
          </button>
        `).join("") : `<p class="muted">苦手レッスンはありません。</p>`}
      </article>
      <article class="analysis-card">
        <h4>関税法等 苦手レッスン上位</h4>
        ${kanzei.weakLessons.length ? kanzei.weakLessons.map(({ lesson, progress, correct, reason }) => `
          <button class="compact-item ghost-button" type="button" data-open-lesson="${escapeAttribute(lesson.id)}">
            <span>${escapeHtml(lesson.title)}</span>
            <span>${escapeHtml(`${progress.understanding} / ${correct}/${lesson.questions.length} / ${reason}`)}</span>
          </button>
        `).join("") : `<p class="muted">苦手レッスンはありません。</p>`}
      </article>
      <article class="analysis-card">
        <h4>通関業法 苦手レッスン上位</h4>
        ${tsukan.weakLessons.length ? tsukan.weakLessons.map(({ lesson, progress, correct, reason }) => `
          <button class="compact-item ghost-button" type="button" data-open-lesson="${escapeAttribute(lesson.id)}">
            <span>${escapeHtml(lesson.title)}</span>
            <span>${escapeHtml(`${progress.understanding} / ${correct}/${lesson.questions.length} / ${reason}`)}</span>
          </button>
        `).join("") : `<p class="muted">苦手レッスンはありません。</p>`}
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

function buildTsukangyohoCurriculumAnalysis() {
  const lessons = getTsukangyohoLessons();
  const progresses = lessons.map((lesson) => getLessonProgress(lesson.id));
  const countByUnderstanding = CURRICULUM_UNDERSTANDING.reduce((acc, value) => {
    acc[value] = progresses.filter((progress) => progress.understanding === value).length;
    return acc;
  }, {});
  const mini = getLessonById("lesson-tsukangyoho-mini-exam");
  const miniProgress = getLessonProgress("lesson-tsukangyoho-mini-exam");
  const miniCorrect = mini ? mini.questions.filter((question) => miniProgress.questionResults.some((result) => result.questionId === question.id && result.correct)).length : 0;
  const answeredQuestionRows = lessons.flatMap((lesson) => lesson.questions.map((question) => ({
    lesson,
    question,
    result: getLessonQuestionResult(lesson.id, question.id)
  }))).filter((row) => row.result);
  const trapRows = answeredQuestionRows.filter((row) => /ひっかけ|トラップ|主体|許可|届出|確認|欠格/.test(`${row.question.weaknessTag}${row.question.trapExplanation}`));
  const penaltyRows = answeredQuestionRows.filter((row) => /罰則|処分|懲戒|監督|秘密|名義|信用/.test(`${row.question.weaknessTag}${row.lesson.title}${row.question.explanation}`));
  const rate = (rows) => rows.length ? `${Math.round((rows.filter((row) => row.result.correct).length / rows.length) * 100)}%（${rows.filter((row) => row.result.correct).length}/${rows.length}）` : "未回答";
  const weakLessons = lessons.map((lesson) => {
    const progress = getLessonProgress(lesson.id);
    const correct = lesson.questions.filter((question) => progress.questionResults.some((result) => result.questionId === question.id && result.correct)).length;
    return { lesson, progress, correct, reason: getLessonReviewReason(lesson.id) };
  }).filter((item) => item.progress.understanding === "C" || item.progress.reviewNeeded || item.correct < item.lesson.questions.length)
    .sort((a, b) => {
      const order = { C: 3, B: 2, "未判定": 1, A: 0 };
      return (order[b.progress.understanding] || 0) - (order[a.progress.understanding] || 0) || a.correct - b.correct || a.lesson.order - b.lesson.order;
    })
    .slice(0, 5);
  return {
    total: lessons.length,
    completed: progresses.filter((progress) => progress.status === "完了").length,
    notStarted: progresses.filter((progress) => progress.status === "未着手").length,
    reviewCount: progresses.filter((progress) => progress.reviewNeeded || ["B", "C"].includes(progress.understanding)).length,
    understandingCounts: countByUnderstanding,
    miniExamText: mini ? `${miniCorrect}/${mini.questions.length} 正解 / 理解度 ${miniProgress.understanding}` : "未実装",
    trapAccuracy: rate(trapRows),
    penaltyAccuracy: rate(penaltyRows),
    weakLessons
  };
}

function buildKanzeihouCurriculumAnalysis() {
  const lessons = getKanzeihouLessons();
  const progresses = lessons.map((lesson) => getLessonProgress(lesson.id));
  const countByUnderstanding = CURRICULUM_UNDERSTANDING.reduce((acc, value) => {
    acc[value] = progresses.filter((progress) => progress.understanding === value).length;
    return acc;
  }, {});
  const mini = getLessonById("lesson-kanzeihou-mini-exam");
  const miniProgress = getLessonProgress("lesson-kanzeihou-mini-exam");
  const miniCorrect = mini ? mini.questions.filter((question) => miniProgress.questionResults.some((result) => result.questionId === question.id && result.correct)).length : 0;
  const rows = lessons.flatMap((lesson) => lesson.questions.map((question) => ({
    lesson,
    question,
    result: getLessonQuestionResult(lesson.id, question.id)
  }))).filter((row) => row.result);
  const rate = (targetRows) => targetRows.length ? `${Math.round((targetRows.filter((row) => row.result.correct).length / targetRows.length) * 100)}%（${targetRows.filter((row) => row.result.correct).length}/${targetRows.length}）` : "未回答";
  const weakLessons = lessons.map((lesson) => {
    const progress = getLessonProgress(lesson.id);
    const correct = lesson.questions.filter((question) => progress.questionResults.some((result) => result.questionId === question.id && result.correct)).length;
    return { lesson, progress, correct, reason: getLessonReviewReason(lesson.id) };
  }).filter((item) => item.progress.understanding === "C" || item.progress.reviewNeeded || item.correct < item.lesson.questions.length)
    .sort((a, b) => {
      const order = { C: 3, B: 2, "未判定": 1, A: 0 };
      return (order[b.progress.understanding] || 0) - (order[a.progress.understanding] || 0) || a.correct - b.correct || a.lesson.order - b.lesson.order;
    })
    .slice(0, 6);
  return {
    total: lessons.length,
    completed: progresses.filter((progress) => progress.status === "完了").length,
    notStarted: progresses.filter((progress) => progress.status === "未着手").length,
    reviewCount: progresses.filter((progress) => progress.reviewNeeded || ["B", "C"].includes(progress.understanding)).length,
    understandingCounts: countByUnderstanding,
    miniExamText: mini ? `${miniCorrect}/${mini.questions.length} 正解 / 理解度 ${miniProgress.understanding}` : "未実装",
    trapAccuracy: rate(rows.filter((row) => /ひっかけ|主体|許可|承認|届出|期限|原則|例外/.test(`${row.question.weaknessTag}${row.question.trapExplanation}`))),
    bondedAccuracy: rate(rows.filter((row) => /保税/.test(`${row.lesson.title}${row.question.weaknessTag}`))),
    taxDeclarationAccuracy: rate(rows.filter((row) => /納税|申告|更正|期限|加算税/.test(`${row.lesson.title}${row.question.weaknessTag}`))),
    customsValueAccuracy: rate(rows.filter((row) => /課税価格|加算要素|控除要素/.test(`${row.lesson.title}${row.question.weaknessTag}`))),
    weakLessons
  };
}

function buildPracticalCurriculumAnalysis() {
  const lessons = getPracticalLessons();
  const progresses = lessons.map((lesson) => getLessonProgress(lesson.id));
  const countByUnderstanding = CURRICULUM_UNDERSTANDING.reduce((acc, value) => {
    acc[value] = progresses.filter((progress) => progress.understanding === value).length;
    return acc;
  }, {});
  const mini = getLessonById("lesson-practical-mini-exam");
  const miniProgress = getLessonProgress("lesson-practical-mini-exam");
  const miniCorrect = mini ? mini.questions.filter((question) => miniProgress.questionResults.some((result) => result.questionId === question.id && result.correct)).length : 0;
  const rows = lessons.flatMap((lesson) => lesson.questions.map((question) => ({
    lesson,
    question,
    result: getLessonQuestionResult(lesson.id, question.id)
  }))).filter((row) => row.result);
  const rate = (targetRows) => targetRows.length ? `${Math.round((targetRows.filter((row) => row.result.correct).length / targetRows.length) * 100)}%（${targetRows.filter((row) => row.result.correct).length}/${targetRows.length}）` : "未回答";
  const lessonRate = (pattern) => rate(rows.filter((row) => pattern.test(`${row.lesson.title}${row.question.weaknessTag}${row.question.explanation}`)));
  const weakLessons = lessons.map((lesson) => {
    const progress = getLessonProgress(lesson.id);
    const correct = lesson.questions.filter((question) => progress.questionResults.some((result) => result.questionId === question.id && result.correct)).length;
    return { lesson, progress, correct, reason: getLessonReviewReason(lesson.id) };
  }).filter((item) => item.progress.understanding === "C" || item.progress.reviewNeeded || item.correct < item.lesson.questions.length || getRelatedPracticalLogsForLesson(item.lesson).some((log) => ["×", "△"].includes(log.result)))
    .sort((a, b) => {
      const order = { C: 3, B: 2, "未判定": 1, A: 0 };
      return (order[b.progress.understanding] || 0) - (order[a.progress.understanding] || 0) || a.correct - b.correct || a.lesson.order - b.lesson.order;
    })
    .slice(0, 6);
  const timeLesson = getLessonById("lesson-practical-time-management");
  const timeProgress = timeLesson ? getLessonProgress(timeLesson.id) : { understanding: "未判定" };
  const practicalLogWeakCount = state.practicalLogs.filter((log) => ["×", "△"].includes(log.result) || log.retry || log.priority === "高").length;
  return {
    total: lessons.length,
    completed: progresses.filter((progress) => progress.status === "完了").length,
    notStarted: progresses.filter((progress) => progress.status === "未着手").length,
    reviewCount: progresses.filter((progress) => progress.reviewNeeded || ["B", "C"].includes(progress.understanding)).length,
    understandingCounts: countByUnderstanding,
    miniExamText: mini ? `${miniCorrect}/${mini.questions.length} 正解 / 理解度 ${miniProgress.understanding}` : "未実装",
    trapAccuracy: rate(rows.filter((row) => /ミス|読み飛ばし|混同|誤|二重|端数|時間不足|ひっかけ/.test(`${row.question.trapExplanation}${row.question.weaknessTag}${row.lesson.traps.join(" ")}`))),
    classificationAccuracy: lessonRate(/品目分類|統計品目番号|税番|税率適用/),
    customsValueAccuracy: lessonRate(/課税価格|加算要素|控除要素|運賃|保険料|ロイヤルティ/),
    taxCalculationAccuracy: lessonRate(/関税額|消費税|地方消費税|端数|税額計算/),
    declarationAccuracy: lessonRate(/申告書|輸出申告|輸入申告|インボイス|NACCS/),
    timeManagementUnderstanding: timeProgress.understanding,
    logLinkText: `${state.practicalLogs.length}件中 ${practicalLogWeakCount}件が×・△・再演習・高優先度`,
    weakLessons
  };
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
    mockExamCount: state.mockExamResults.length,
    latestMockRate: getLatestMockResult()?.scoreRate ?? null,
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
  state.mockExamResults.forEach((result) => (result.weaknessTags || []).forEach((tag) => {
    const item = ensure(tag);
    item.count += 1;
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
  const suggestions = sorted.filter((item) => item.promptType === "AI添削・弱点提案");
  return {
    total: sorted.length,
    promptTypes: groupCount(sorted, "promptType"),
    targetTypes: groupCount(sorted, "targetType"),
    resultMemoCount: sorted.filter((item) => String(item.resultMemo || "").trim()).length,
    recentDate: sorted[0]?.createdAt || "",
    recentItems: sorted.slice(0, 3),
    suggestionTotal: suggestions.length,
    suggestionApplied: suggestions.filter((item) => item.appliedAt).length,
    suggestionPending: suggestions.filter((item) => !item.appliedAt).length,
    suggestionWeaknessTags: rankFromValues(suggestions.flatMap((item) => suggestionList(item.suggestionObject?.suggestedWeaknessTags))).slice(0, 6),
    suggestionNextLessons: rankFromValues(suggestions.flatMap((item) => suggestionList(item.suggestionObject?.suggestedNextLessons))).slice(0, 6)
  };
}

function renderAnalysisOverall(analysis) {
  const summary = analysis.summary;
  const curriculumStats = getCurriculumStats();
  const topWeakness = buildWeaknessTagStats().filter((item) => item.total || item.wrong).slice(0, 3).map((item) => item.tag).join(" / ") || "未実施";
  const mappingStats = getPastMappingStats();
  const todayMenu = state.todayMenu || generateTodayMenu(getTodayPlan().selectedDuration);
  const todayUnitIds = new Set(todayMenu.allItems.map((item) => item.relatedUnitId).filter(Boolean));
  const todayTags = getTodayMenuWeaknessTags(todayMenu);
  const todayLogCount = todayMenu.pastExamItems.length + todayMenu.practicalItems.length;
  const nextAction = curriculumStats.nextLesson?.lesson
    ? `次に「${curriculumStats.nextLesson.lesson.title}」を読む`
    : summary.reviewCount || curriculumStats.reviewCount
    ? "復習画面でC判定・誤答を直す"
    : state.mockExamResults.length
    ? "過去問マッピングで教材根拠率を確認する"
    : "総合模試で横断確認する";
  const rows = [
    ["レッスン進捗", `${curriculumStats.completed}/${curriculumStats.total}（${curriculumStats.rate}%）`],
    ["問題バンク総数", `${QUESTION_BANK.length}問`],
    ["ドリル実施回数", state.drillResults.length ? `${state.drillResults.length}回` : "未実施"],
    ["模試実施回数", state.mockExamResults.length ? `${state.mockExamResults.length}回` : "未実施"],
    ["過去問マッピング数", mappingStats.mapped ? `${mappingStats.mapped}件` : "未実施"],
    ["教材根拠率 A+B", mappingStats.total ? mappingStats.abRate : "未実施"],
    ["弱点トップ3", topWeakness],
    ["次にやるべきこと", nextAction]
  ];
  return `
    <div class="risk-summary-card risk-${summary.risk.className}">
      <div>
        <p class="eyebrow">総合危険度</p>
        <strong>${escapeHtml(summary.risk.label)}</strong>
        ${summary.risk.dataShortage ? `<span class="data-note">データ不足</span>` : ""}
      </div>
      <button class="ghost-button" type="button" data-analysis-ai-consult>外部ChatGPT相談文を作る</button>
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
            <div class="card-actions">
              <button class="ghost-button" type="button" data-ai-weakness-tag="${escapeAttribute(item.tag)}">外部ChatGPT相談文を作る</button>
            </div>
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
  return `
    <div class="analysis-card-grid two-col">
      <article class="analysis-card">
        <h4>過去AIメモ・相談文集計</h4>
        <dl class="analysis-facts">
          <div><dt>相談文・メモ数</dt><dd>${usage.total}</dd></div>
          <div><dt>種別別件数</dt><dd>${escapeHtml(formatGroupCounts(usage.promptTypes))}</dd></div>
          <div><dt>対象種別別件数</dt><dd>${escapeHtml(formatGroupCounts(usage.targetTypes))}</dd></div>
          <div><dt>外部回答メモあり件数</dt><dd>${usage.resultMemoCount}</dd></div>
          <div><dt>直近の保存日</dt><dd>${escapeHtml(formatDateTime(usage.recentDate))}</dd></div>
          <div><dt>過去提案件数</dt><dd>${usage.suggestionTotal}</dd></div>
          <div><dt>未反映提案件数</dt><dd>${usage.suggestionPending}</dd></div>
          <div><dt>反映済み提案件数</dt><dd>${usage.suggestionApplied}</dd></div>
          <div><dt>よく提案される弱点タグ</dt><dd>${escapeHtml(usage.suggestionWeaknessTags.map((item) => `${item.label}(${item.count})`).join(" / ") || "なし")}</dd></div>
          <div><dt>よく提案された次レッスン</dt><dd>${escapeHtml(usage.suggestionNextLessons.map((item) => `${item.label}(${item.count})`).join(" / ") || "なし")}</dd></div>
        </dl>
      </article>
      <article class="analysis-card">
        <h4>直近の履歴3件</h4>
        ${usage.recentItems.length ? usage.recentItems.map((item) => `
          <div class="mini-item">
            <span>${escapeHtml(formatDateTime(item.createdAt))} / ${escapeHtml(item.promptType || "種別なし")}</span>
            <small>${escapeHtml(item.targetTitle || "対象なし")}</small>
          </div>
        `).join("") : `<p class="muted">履歴はまだありません。</p>`}
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
        <button class="ghost-button" type="button" data-ai-past-exam-log="${escapeAttribute(log.id)}">外部ChatGPT相談文を作る</button>
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
        <button class="ghost-button" type="button" data-ai-practice-log="${escapeAttribute(log.id)}">外部ChatGPT相談文を作る</button>
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

function renderMockExamView() {
  const modeHost = document.querySelector("#mockModeSelector");
  if (!modeHost) return;
  const subjectMiniExams = [
    { title: "通関業法ミニ模試", questions: 10, minutes: 20, range: "通関業法 基礎編", lessonId: "lesson-tsukangyoho-mini-exam" },
    { title: "関税法等ミニ模試", questions: 15, minutes: 30, range: "関税法等 基礎編", lessonId: "lesson-kanzeihou-mini-exam" },
    { title: "通関実務ミニ模試", questions: 15, minutes: 35, range: "通関実務 基礎編", lessonId: "lesson-practical-mini-exam" }
  ];
  modeHost.innerHTML = Object.values(MOCK_EXAM_MODES).map((mode) => `
    <article class="mock-mode-card ${state.mockExam.selectedMode === mode.id ? "is-active" : ""}">
      <div>
        <p class="eyebrow">${mode.totalQuestions}問 / ${mode.estimatedMinutes}分</p>
        <h3>${escapeHtml(mode.title)}</h3>
        <p>${escapeHtml(mode.description)}</p>
        <dl class="review-facts compact">
          <div><dt>問題数</dt><dd>${mode.totalQuestions}</dd></div>
          <div><dt>目安時間</dt><dd>${mode.estimatedMinutes}分</dd></div>
          <div><dt>科目構成</dt><dd>${escapeHtml(formatMockComposition(mode))}</dd></div>
          <div><dt>前回結果</dt><dd>${escapeHtml(getLastMockModeText(mode.id))}</dd></div>
          <div><dt>前回実施日</dt><dd>${escapeHtml(getLastMockModeDate(mode.id))}</dd></div>
        </dl>
      </div>
      <div class="card-actions">
        <button class="ghost-button" type="button" data-select-mock="${escapeAttribute(mode.id)}">選択</button>
        <button class="primary-button" type="button" data-start-mock="${escapeAttribute(mode.id)}">開始</button>
      </div>
    </article>
  `).join("") + subjectMiniExams.map((mode) => `
    <article class="mock-mode-card">
      <div>
        <p class="eyebrow">${mode.questions}問 / ${mode.minutes}分</p>
        <h3>${escapeHtml(mode.title)}</h3>
        <p>科目別レッスン内の確認問題を模試形式で解きます。</p>
        <dl class="review-facts compact">
          <div><dt>問題数</dt><dd>${mode.questions}</dd></div>
          <div><dt>目安時間</dt><dd>${mode.minutes}分</dd></div>
          <div><dt>対象範囲</dt><dd>${escapeHtml(mode.range)}</dd></div>
          <div><dt>前回結果</dt><dd>${escapeHtml(getLessonProgress(mode.lessonId).understanding)}</dd></div>
        </dl>
      </div>
      <div class="card-actions">
        <button class="primary-button" type="button" data-open-lesson="${escapeAttribute(mode.lessonId)}">開始</button>
      </div>
    </article>
  `).join("");
  renderMockPlayer();
  renderMockResultArea();
  renderCrossReviewList("#crossReviewList", 10);
  renderMockHistory();
}

function getLastMockModeText(modeId) {
  const result = [...state.mockExamResults]
    .filter((item) => item.mode === modeId)
    .sort((a, b) => (b.completedAt || "").localeCompare(a.completedAt || ""))[0];
  return result ? `${result.scoreRate}% / ${result.resultLevel}` : "未実施";
}

function getLastMockModeDate(modeId) {
  const result = [...state.mockExamResults]
    .filter((item) => item.mode === modeId)
    .sort((a, b) => (b.completedAt || "").localeCompare(a.completedAt || ""))[0];
  return result ? formatDateTime(result.completedAt) : "未実施";
}

function formatMockComposition(mode) {
  return Object.entries(mode.composition || {})
    .map(([label, count]) => `${label}:${count}問`)
    .join(" / ") || "問題バンクから抽出";
}

function renderMockPlayer() {
  const host = document.querySelector("#mockExamPlayer");
  if (!host) return;
  const active = state.mockExam.active;
  if (!active) {
    host.innerHTML = `<div class="empty-state"><p class="muted">模試モードを選んで開始してください。採点後は結果・解説・履歴に保存されます。</p></div>`;
    return;
  }
  const total = active.questions.length;
  if (!total) {
    host.innerHTML = `<div class="empty-state"><p class="muted">出題できる問題がありません。問題バンクや復習データを確認してください。</p><button class="ghost-button" type="button" data-end-mock>閉じる</button></div>`;
    return;
  }
  const index = Math.min(state.mockExam.currentIndex, total - 1);
  const question = active.questions[index];
  const selected = active.answers[question.id]?.value || "";
  const answeredCount = active.questions.filter((item) => active.answers[item.id]?.value).length;
  const unanswered = total - answeredCount;
  host.innerHTML = `
    <div class="mock-progress-head">
      <div>
        <p class="eyebrow">${escapeHtml(active.title)}</p>
        <h3>${index + 1} / ${total}</h3>
      </div>
      <span class="badge ${unanswered ? "normal" : "ok"}">未回答 ${unanswered}</span>
    </div>
    <div class="progress-bar" aria-label="模試回答進捗"><span style="width:${Math.round((answeredCount / total) * 100)}%"></span></div>
    ${active.shortageMessage ? `<p class="form-message">${escapeHtml(active.shortageMessage)}</p>` : ""}
    <article class="mock-question-card">
      <div class="card-meta">
        <span class="badge">${escapeHtml(question.subject)}</span>
        <span class="badge">${escapeHtml(question.topic)}</span>
        <span class="badge">${escapeHtml(question.difficulty || "標準")}</span>
        <span class="badge">${escapeHtml(question.weaknessTag)}</span>
      </div>
      <h3>${escapeHtml(question.question)}</h3>
      <div class="mock-choice-list">
        ${question.choices.map((choice) => `
          <button class="mock-choice ${selected === choice ? "is-selected" : ""}" type="button" data-mock-answer="${escapeAttribute(question.id)}:${escapeAttribute(choice)}">
            ${escapeHtml(choice)}
          </button>
        `).join("")}
      </div>
    </article>
    <div class="mock-question-nav">
      <button class="ghost-button" type="button" data-mock-prev ${index === 0 ? "disabled" : ""}>前へ</button>
      <button class="ghost-button" type="button" data-mock-next ${index === total - 1 ? "disabled" : ""}>次へ</button>
      <button class="primary-button" type="button" data-grade-mock>採点する</button>
      <button class="danger-button" type="button" data-end-mock>途中終了</button>
    </div>
    <div class="mock-jump-list">
      ${active.questions.map((item, itemIndex) => `
        <button class="mock-jump ${itemIndex === index ? "is-active" : ""} ${active.answers[item.id]?.value ? "is-answered" : ""}" type="button" data-mock-jump="${itemIndex}">
          ${itemIndex + 1}
        </button>
      `).join("")}
    </div>
  `;
}

function renderMockResultArea(resultId = state.mockExam.lastResultId) {
  const host = document.querySelector("#mockResultSummary");
  if (!host) return;
  const result = state.mockExamResults.find((item) => item.id === resultId) || (!resultId ? state.mockExam.lastReviewResult : null) || getLatestMockResult();
  if (!result) {
    host.innerHTML = `<div class="empty-state"><p class="muted">採点済みの模試結果はまだありません。</p></div>`;
    return;
  }
  state.mockExam.lastResultId = result.id;
  const wrongAnswers = result.answers.filter((answer) => !answer.correct);
  const topicRows = Object.entries(result.topicSummary || {}).sort((a, b) => a[1].rate - b[1].rate || b[1].total - a[1].total).slice(0, 10);
  const weaknessRows = Object.entries(result.weaknessSummary || {}).filter(([, item]) => item.wrong > 0).sort((a, b) => b[1].wrong - a[1].wrong || a[0].localeCompare(b[0], "ja")).slice(0, 10);
  host.innerHTML = `
    <div class="mock-score-hero">
      <div><span>正答率</span><strong>${result.scoreRate}%</strong></div>
      <div><span>正解数</span><strong>${result.correctCount}/${result.totalQuestions}</strong></div>
      <div><span>判定</span><strong>${escapeHtml(result.resultLevel)}</strong></div>
    </div>
    <dl class="summary-list">
      <div><dt>模試</dt><dd>${escapeHtml(result.title)}</dd></div>
      <div><dt>実施日</dt><dd>${escapeHtml(formatDateTime(result.completedAt))}</dd></div>
      <div><dt>復習対象</dt><dd>${result.reviewNeeded ? "対象" : "対象外"}</dd></div>
      <div><dt>弱点タグ</dt><dd>${escapeHtml(result.weaknessTags.join(" / ") || "なし")}</dd></div>
    </dl>
    <div class="analysis-card-grid three-col">
      ${Object.entries(result.subjectSummary || {}).map(([subject, item]) => `
        <article class="analysis-card">
          <h4>${escapeHtml(subject)}</h4>
          <dl class="analysis-facts compact">
            <div><dt>正答</dt><dd>${item.correct}/${item.total}</dd></div>
            <div><dt>正答率</dt><dd>${item.rate}%</dd></div>
          </dl>
        </article>
      `).join("")}
    </div>
    <div class="analysis-card-grid two-col">
      <article class="analysis-card">
        <h4>論点別正答率</h4>
        <dl class="analysis-facts compact">
          ${topicRows.length ? topicRows.map(([topic, item]) => `<div><dt>${escapeHtml(topic)}</dt><dd>${item.correct}/${item.total} / ${item.rate}%</dd></div>`).join("") : `<div><dt>データ</dt><dd>データ不足</dd></div>`}
        </dl>
      </article>
      <article class="analysis-card">
        <h4>弱点タグ別誤答数</h4>
        <dl class="analysis-facts compact">
          ${weaknessRows.length ? weaknessRows.map(([tag, item]) => `<div><dt>${escapeHtml(tag)}</dt><dd>誤答${item.wrong} / ${item.total}問</dd></div>`).join("") : `<div><dt>誤答</dt><dd>なし</dd></div>`}
        </dl>
      </article>
    </div>
    ${result.mode === "trap20" ? renderTrapMockSummary(result) : ""}
    <div class="analysis-card">
      <h4>次にやるべきこと</h4>
      <p>${escapeHtml(getMockNextAction(result))}</p>
      <div class="card-actions">
        <button class="primary-button" type="button" data-review-mock-wrong="${escapeAttribute(result.id)}">間違えた問題を復習</button>
        <button class="ghost-button" type="button" data-view-shortcut="drill" data-drill-home="弱点タグ別ドリル">弱点別ドリルへ</button>
        ${MOCK_EXAM_MODES[result.mode] ? `<button class="ghost-button" type="button" data-start-mock="${escapeAttribute(result.mode)}">もう一度受ける</button>` : ""}
        <button class="ghost-button" type="button" data-ai-mock-result="${escapeAttribute(result.id)}">外部ChatGPT相談文を作る</button>
        <button class="ghost-button" type="button" data-view-shortcut="home">ホームへ戻る</button>
      </div>
    </div>
    <div class="mock-explanations">
      <h4>間違えた問題</h4>
      ${wrongAnswers.length ? wrongAnswers.map((answer) => renderMockAnswerExplanation(answer)).join("") : `<p class="muted">誤答はありません。</p>`}
      <h4>全問題の解説</h4>
      ${result.answers.map((answer) => renderMockAnswerExplanation(answer)).join("")}
    </div>
  `;
}

function renderTrapMockSummary(result) {
  const trapAnswers = result.answers.filter((answer) => answer.difficulty === "ひっかけ" || answer.questionType === "trapCheck" || TRAP_WEAKNESS_TAGS.includes(answer.weaknessTag));
  const correct = trapAnswers.filter((answer) => answer.correct).length;
  const rate = trapAnswers.length ? Math.round((correct / trapAnswers.length) * 100) : 0;
  const countByPattern = (pattern) => trapAnswers.filter((answer) => !answer.correct && pattern.test(`${answer.weaknessTag}${answer.topic}`)).length;
  return `
    <article class="analysis-card">
      <h4>ひっかけ総点検</h4>
      <dl class="analysis-facts compact">
        <div><dt>ひっかけ問題正答率</dt><dd>${trapAnswers.length ? `${rate}%（${correct}/${trapAnswers.length}）` : "データ不足"}</dd></div>
        <div><dt>選択肢読解ミス</dt><dd>${countByPattern(/選択肢読解/)}</dd></div>
        <div><dt>主体・権限者ミス</dt><dd>${countByPattern(/主体|権限者/)}</dd></div>
        <div><dt>手続区分ミス</dt><dd>${countByPattern(/申告|許可|承認|届出|手続/)}</dd></div>
        <div><dt>罰則・処分ミス</dt><dd>${countByPattern(/罰則|処分|懲戒|監督/)}</dd></div>
      </dl>
    </article>
  `;
}

function renderMockAnswerExplanation(answer) {
  const question = getMockQuestionById(answer.questionId);
  if (!question) return "";
  return `
    <details class="mock-explanation-card" ${answer.correct ? "" : "open"}>
      <summary>${answer.correct ? "正解" : "不正解"} / ${escapeHtml(answer.subject)} / ${escapeHtml(answer.topic)}</summary>
      <div class="card-meta">
        <span class="badge">${escapeHtml(answer.subject)}</span>
        <span class="badge">${escapeHtml(answer.topic)}</span>
        <span class="badge ${answer.correct ? "ok" : "danger"}">${answer.correct ? "正解" : "不正解"}</span>
      </div>
      <h5>${escapeHtml(question.question)}</h5>
      <dl class="analysis-facts compact">
        <div><dt>自分の回答</dt><dd>${escapeHtml(answer.userAnswer || "未回答")}</dd></div>
        <div><dt>正答</dt><dd>${escapeHtml(question.answer)}</dd></div>
        <div><dt>通常解説</dt><dd>${escapeHtml(question.explanation)}</dd></div>
        <div><dt>ひっかけ解説</dt><dd>${escapeHtml(question.trapExplanation)}</dd></div>
        <div><dt>関連弱点タグ</dt><dd>${escapeHtml(question.weaknessTag)}</dd></div>
      </dl>
      <div class="card-actions">
        ${question.lessonId || question.relatedLessonId ? `<button class="ghost-button" type="button" data-open-lesson="${escapeAttribute(question.lessonId || question.relatedLessonId)}">関連レッスン</button>` : ""}
      </div>
    </details>
  `;
}

function getMockNextAction(result) {
  if (result.resultLevel === "C") return "模試復習を最優先にし、誤答タグの関連レッスンと弱点集中模試に進んでください。";
  if (result.resultLevel === "B") return "誤答した論点を横断復習し、同じタグの問題でA判定を狙ってください。";
  return "A判定です。次は30問標準模試または苦手タグだけの短時間復習で維持します。";
}

function renderMockHistory() {
  const host = document.querySelector("#mockHistoryList");
  if (!host) return;
  const items = [...state.mockExamResults].sort((a, b) => (b.completedAt || "").localeCompare(a.completedAt || ""));
  host.innerHTML = items.length ? items.map((result) => `
    <article class="mock-history-card">
      <div>
        <p class="eyebrow">${escapeHtml(formatDateTime(result.completedAt))}</p>
        <h3>${escapeHtml(result.title)}</h3>
      </div>
      <dl class="review-facts compact">
        <div><dt>正解</dt><dd>${result.correctCount}/${result.totalQuestions}</dd></div>
        <div><dt>正答率</dt><dd>${result.scoreRate}%</dd></div>
        <div><dt>判定</dt><dd>${escapeHtml(result.resultLevel)}</dd></div>
        <div><dt>科目別</dt><dd>${escapeHtml(Object.entries(result.subjectSummary || {}).map(([subject, item]) => `${subject}:${item.rate}%`).join(" / ") || "なし")}</dd></div>
        <div><dt>弱点タグ上位</dt><dd>${escapeHtml(result.weaknessTags.slice(0, 3).join(" / ") || "なし")}</dd></div>
        <div><dt>復習対象</dt><dd>${result.reviewNeeded ? "対象" : "対象外"}</dd></div>
      </dl>
      <div class="card-actions">
        <button class="ghost-button" type="button" data-show-mock-result="${escapeAttribute(result.id)}">詳細</button>
        <button class="primary-button" type="button" data-review-mock-wrong="${escapeAttribute(result.id)}">誤答復習</button>
        <button class="ghost-button" type="button" data-ai-mock-result="${escapeAttribute(result.id)}">外部ChatGPT相談文を作る</button>
        <button class="danger-button" type="button" data-delete-mock-result="${escapeAttribute(result.id)}">削除</button>
      </div>
    </article>
  `).join("") : `<div class="empty-state"><p class="muted">模試履歴はまだありません。</p></div>`;
}

function renderCrossReviewList(selector, limit = 20) {
  const host = document.querySelector(selector);
  if (!host) return;
  const items = getCrossReviewItems().slice(0, limit);
  host.innerHTML = items.length ? items.map((item) => `
    <article class="cross-review-card">
      <div>
        <p class="eyebrow">${escapeHtml(item.subject)} / ${escapeHtml(item.type)}</p>
        <h4>${escapeHtml(item.title)}</h4>
      </div>
      <dl class="review-facts compact">
        <div><dt>理由</dt><dd>${escapeHtml(item.reason)}</dd></div>
        <div><dt>関連弱点タグ</dt><dd>${escapeHtml(item.weaknessTag || "なし")}</dd></div>
      </dl>
      <div class="card-actions">
        ${item.relatedLessonId ? `<button class="primary-button" type="button" data-open-lesson="${escapeAttribute(item.relatedLessonId)}">開く</button>` : ""}
        ${item.relatedUnitId ? `<button class="ghost-button" type="button" data-open-unit="${escapeAttribute(item.relatedUnitId)}">開く</button>` : ""}
        ${item.mockResultId ? `<button class="ghost-button" type="button" data-show-mock-result="${escapeAttribute(item.mockResultId)}">模試詳細</button>` : ""}
      </div>
    </article>
  `).join("") : `<div class="empty-state"><p class="muted">横断復習対象はまだありません。</p></div>`;
}

function deleteMockResult(resultId) {
  const result = state.mockExamResults.find((item) => item.id === resultId);
  if (!result) return;
  const confirmed = window.confirm(`${result.title}の履歴を削除しますか？`);
  if (!confirmed) return;
  state.mockExamResults = state.mockExamResults.filter((item) => item.id !== resultId);
  if (state.mockExam.lastResultId === resultId) state.mockExam.lastResultId = "";
  saveUnits();
  render();
  showToast("模試履歴を削除しました。");
}

function renderAiView() {
  fillSelect("#aiPromptTypeSelect", AI_PROMPT_TYPES, state.aiForm.promptType);
  fillSelect("#aiTargetTypeSelect", AI_TARGET_TYPES, state.aiForm.targetType);
  renderAiTargetSelect();
  document.querySelector("#aiAdditionalConditions").value = state.aiForm.additionalConditions;
  document.querySelector("#aiPromptResult").value = state.aiForm.promptText;
  renderAiTutorView();
  renderAiSuggestionView();
  renderAiResponse();
  renderAiApiLogSummary();
  renderAiHistory();
}

function renderAiSuggestionView() {
  fillSelect("#aiSuggestionTargetType", AI_SUGGESTION_TARGET_TYPES, state.aiSuggestionForm.targetType);
  fillSelect("#aiSuggestionType", AI_SUGGESTION_TYPES, state.aiSuggestionForm.suggestionType);
  renderAiSuggestionTargetSelect();
  const memo = document.querySelector("#aiSuggestionMemo");
  const prompt = document.querySelector("#aiSuggestionPromptResult");
  if (memo && document.activeElement !== memo) memo.value = state.aiSuggestionForm.memo;
  if (prompt && document.activeElement !== prompt) prompt.value = state.aiSuggestionForm.promptText;
  renderAiSuggestionModeHint();
  renderAiSuggestionResponse();
  renderAiSuggestionHistory();
}

function renderAiSuggestionTargetSelect() {
  const select = document.querySelector("#aiSuggestionTargetSelect");
  const label = document.querySelector("#aiSuggestionTargetSelectLabel");
  if (!select || !label) return;
  const options = getAiSuggestionTargetOptions(state.aiSuggestionForm.targetType);
  const needsSelect = !["今日のメニュー", "弱点別ドリル結果", "通関業法カリキュラム", "通関業法ドリル結果", "関税法等カリキュラム", "関税法等ドリル結果", "通関実務カリキュラム", "通関実務ドリル結果", "自由入力"].includes(state.aiSuggestionForm.targetType);
  label.classList.toggle("is-hidden", !needsSelect);
  if (!needsSelect) {
    select.innerHTML = `<option value="">自動選択</option>`;
    if (state.aiSuggestionForm.targetType !== "自由入力") state.aiSuggestionForm.targetId = "";
    return;
  }
  select.innerHTML = options.length
    ? options.map((option) => `<option value="${escapeAttribute(option.value)}">${escapeHtml(option.label)}</option>`).join("")
    : `<option value="">対象データがありません</option>`;
  if (!options.some((option) => option.value === state.aiSuggestionForm.targetId)) state.aiSuggestionForm.targetId = options[0]?.value || "";
  select.value = state.aiSuggestionForm.targetId;
}

function getAiSuggestionTargetOptions(targetType) {
  if (targetType === "レッスン確認問題") {
    return CURRICULUM_LESSONS.flatMap((lesson) => lesson.questions.map((question, index) => ({
      value: `${lesson.id}:${question.id}`,
      label: `${lesson.subject} / ${lesson.title} / 問${index + 1} / ${question.weaknessTag}`
    })));
  }
  if (targetType === "レッスン理解度") {
    return CURRICULUM_LESSONS.map((lesson) => {
      const progress = getLessonProgress(lesson.id);
      return { value: lesson.id, label: `${lesson.subject} / ${lesson.title} / ${progress.understanding}` };
    });
  }
  if (targetType === "模試結果") {
    return [...state.mockExamResults].sort((a, b) => (b.completedAt || "").localeCompare(a.completedAt || "")).map((result) => ({
      value: result.id,
      label: `${formatDateTime(result.completedAt)} / ${result.title} / ${result.scoreRate}% / ${result.resultLevel}`
    }));
  }
  if (targetType === "弱点タグ") {
    const ranked = buildWeaknessRanking();
    const tags = ranked.length ? ranked.map((item) => item.tag) : WEAKNESS_TAGS;
    return tags.map((tag) => ({ value: tag, label: tag }));
  }
  return [];
}

function renderAiSuggestionModeHint() {
  const host = document.querySelector("#aiSuggestionModeHint");
  if (!host) return;
  host.innerHTML = `<span class="badge priority">手動コピーのみ</span><span class="muted"> アプリ内通信は行わず、相談文のコピーだけを行います。</span>`;
}

function renderAiSuggestionResponse() {
  const meta = document.querySelector("#aiSuggestionResponseMeta");
  const text = document.querySelector("#aiSuggestionAnswerText");
  const parsedHost = document.querySelector("#aiSuggestionParsedView");
  const raw = document.querySelector("#aiSuggestionRawBlock");
  const error = document.querySelector("#aiSuggestionResponseError");
  const manual = document.querySelector("#aiSuggestionManualResponse");
  if (!meta || !text || !parsedHost || !raw || !error) return;
  const target = buildAiSuggestionTargetData();
  meta.innerHTML = `
    <div><dt>送信状態</dt><dd>${escapeHtml(state.aiSuggestionForm.apiStatus || "未送信")}</dd></div>
    <div><dt>対象</dt><dd>${escapeHtml(state.aiSuggestionForm.targetType)}</dd></div>
    <div><dt>添削タイプ</dt><dd>${escapeHtml(state.aiSuggestionForm.suggestionType)}</dd></div>
    <div><dt>対象名</dt><dd>${escapeHtml(target.title || "未選択")}</dd></div>
    <div><dt>使用モデル</dt><dd>${escapeHtml(state.aiSuggestionForm.apiModel || "未取得")}</dd></div>
    <div><dt>token使用量</dt><dd>${escapeHtml(formatUsage(state.aiSuggestionForm.apiUsage))}</dd></div>
  `;
  text.textContent = getAiSuggestionNaturalText(state.aiSuggestionForm.apiResponseText) || "外部ChatGPT回答メモはまだありません。下の手動コピー用プロンプトを使ってください。";
  if (manual && document.activeElement !== manual && state.aiSuggestionForm.apiResponseText) manual.value = state.aiSuggestionForm.apiResponseText;
  const suggestion = state.aiSuggestionForm.suggestionObject;
  parsedHost.innerHTML = suggestion ? renderSuggestionObject(suggestion) : `<div class="empty-state"><p class="muted">構造化提案は抽出できませんでした。AI回答本文を確認してください。</p></div>`;
  raw.textContent = state.aiSuggestionForm.rawSuggestionText || "構造化提案ブロックなし";
  error.textContent = state.aiSuggestionForm.apiError || "";
  document.querySelector("#runAiSuggestionButton")?.toggleAttribute("disabled", Boolean(state.aiSuggestionForm.sending));
}

function parseManualAiSuggestionResponse() {
  const value = document.querySelector("#aiSuggestionManualResponse")?.value.trim() || "";
  if (!value) {
    showToast("解析するAI回答を貼り付けてください。");
    return;
  }
  state.aiSuggestionForm.apiStatus = "手動回答解析済み";
  state.aiSuggestionForm.apiResponseText = value;
  state.aiSuggestionForm.apiError = "";
  state.aiSuggestionForm.sentViaApi = false;
  const extracted = extractAiSuggestion(value);
  state.aiSuggestionForm.suggestionParsed = extracted.parsed;
  state.aiSuggestionForm.suggestionObject = extracted.suggestionObject;
  state.aiSuggestionForm.rawSuggestionText = extracted.rawSuggestionText;
  saveAiSuggestionAnalysis({ sentViaApi: false });
  saveUnits();
  render();
  showToast(extracted.parsed ? "構造化提案を解析しました。" : "構造化提案は抽出できませんでした。");
}

function getAiSuggestionNaturalText(responseText) {
  const text = String(responseText || "");
  const index = text.indexOf(AI_SUGGESTION_MARKER);
  return (index >= 0 ? text.slice(0, index) : text).trim();
}

function renderSuggestionObject(suggestion) {
  const tags = suggestionList(suggestion.suggestedWeaknessTags);
  const lessons = suggestionList(suggestion.suggestedNextLessons);
  const actions = suggestionList(suggestion.suggestedActions);
  return `
    <div class="suggestion-card-grid">
      <article class="suggestion-card"><h4>提案理解度</h4><strong>${escapeHtml(suggestion.suggestedUnderstanding || "未提案")}</strong></article>
      <article class="suggestion-card"><h4>復習対象提案</h4><strong>${suggestion.suggestedReviewNeeded === true ? "対象" : suggestion.suggestedReviewNeeded === false ? "対象外" : "未提案"}</strong></article>
      <article class="suggestion-card"><h4>AIの自信度</h4><strong>${escapeHtml(suggestion.confidence || "未提案")}</strong></article>
      <article class="suggestion-card wide"><h4>弱点タグ候補</h4><p>${escapeHtml(tags.join(" / ") || "未提案")}</p></article>
      <article class="suggestion-card wide"><h4>次にやるべきレッスン</h4><p>${escapeHtml(lessons.join(" / ") || "未提案")}</p></article>
      <article class="suggestion-card wide"><h4>具体的アクション</h4><p>${escapeHtml(actions.join(" / ") || "未提案")}</p></article>
    </div>
  `;
}

function suggestionList(value) {
  if (Array.isArray(value)) return value.map(String).map((item) => item.trim()).filter(Boolean);
  const text = String(value || "").trim();
  return text ? text.split(/[、,\n]/).map((item) => item.trim()).filter(Boolean) : [];
}

function renderAiTutorView() {
  fillSelect("#aiTutorTargetType", AI_TUTOR_TARGET_TYPES, state.aiTutorForm.targetType);
  fillSelect("#aiTutorQuestionType", AI_TUTOR_QUESTION_TYPES, state.aiTutorForm.questionType);
  fillSelect("#aiTutorExplanationLevel", AI_TUTOR_EXPLANATION_LEVELS, state.aiTutorForm.explanationLevel);
  renderAiTutorTargetSelect();
  const questionInput = document.querySelector("#aiTutorQuestionInput");
  const promptInput = document.querySelector("#aiTutorPromptResult");
  if (questionInput && document.activeElement !== questionInput) questionInput.value = state.aiTutorForm.userQuestion;
  if (promptInput && document.activeElement !== promptInput) promptInput.value = state.aiTutorForm.promptText;
  renderAiTutorModeHint();
  renderAiTutorResponse();
  renderAiTutorHistory();
}

function renderAiTutorTargetSelect() {
  const select = document.querySelector("#aiTutorTargetSelect");
  if (!select) return;
  const options = getAiTutorTargetOptions(state.aiTutorForm.targetType);
  const needsSelect = state.aiTutorForm.targetType !== "自由質問";
  select.disabled = !needsSelect;
  select.innerHTML = needsSelect
    ? (options.length ? options.map((option) => `<option value="${escapeAttribute(option.value)}">${escapeHtml(option.label)}</option>`).join("") : `<option value="">対象データがありません</option>`)
    : `<option value="">自由質問</option>`;
  if (!needsSelect) {
    state.aiTutorForm.targetId = "";
    return;
  }
  if (!options.some((option) => option.value === state.aiTutorForm.targetId)) state.aiTutorForm.targetId = options[0]?.value || "";
  select.value = state.aiTutorForm.targetId;
}

function getAiTutorTargetOptions(targetType) {
  if (targetType === "現在のレッスン") {
    return CURRICULUM_LESSONS.map((lesson) => ({ value: lesson.id, label: `${lesson.subject} / ${lesson.title}` }));
  }
  if (targetType === "確認問題") {
    return CURRICULUM_LESSONS.flatMap((lesson) => lesson.questions.map((question, index) => ({
      value: `${lesson.id}:${question.id}`,
      label: `${lesson.subject} / ${lesson.title} / 問${index + 1} / ${question.weaknessTag}`
    })));
  }
  if (targetType === "模試問題") {
    const latest = getLatestMockResult();
    if (!latest) return state.mockExamResults.map((result) => ({ value: result.id, label: `${formatDateTime(result.completedAt)} / ${result.title}` }));
    const wrong = latest.answers.filter((answer) => !answer.correct);
    return (wrong.length ? wrong : latest.answers).map((answer, index) => {
      const question = getMockQuestionById(answer.questionId);
      return {
        value: `${latest.id}:${answer.questionId}`,
        label: `${latest.title} / ${answer.correct ? "正解" : "不正解"} / ${question?.topic || answer.topic || `問${index + 1}`}`
      };
    });
  }
  if (targetType === "今日のメニュー") return [{ value: "today", label: "今日の学習メニュー" }];
  if (targetType === "弱点タグ") {
    const ranked = buildWeaknessRanking();
    const tags = ranked.length ? ranked.map((item) => item.tag) : WEAKNESS_TAGS;
    return tags.map((tag) => ({ value: tag, label: tag }));
  }
  return [];
}

function renderAiTutorModeHint() {
  const host = document.querySelector("#aiTutorModeHint");
  if (!host) return;
  host.innerHTML = `<span class="badge priority">手動コピーのみ</span><span class="muted"> アプリ内通信は行わず、外部ChatGPT用の相談文を作成します。</span>`;
}

function renderAiTutorResponse() {
  const meta = document.querySelector("#aiTutorResponseMeta");
  const text = document.querySelector("#aiTutorResponseText");
  const error = document.querySelector("#aiTutorResponseError");
  if (!meta || !text || !error) return;
  meta.innerHTML = `
    <div><dt>送信状態</dt><dd>${escapeHtml(state.aiTutorForm.apiStatus || "未送信")}</dd></div>
    <div><dt>対象</dt><dd>${escapeHtml(state.aiTutorForm.targetType)}</dd></div>
    <div><dt>質問タイプ</dt><dd>${escapeHtml(state.aiTutorForm.questionType)}</dd></div>
    <div><dt>説明レベル</dt><dd>${escapeHtml(state.aiTutorForm.explanationLevel)}</dd></div>
    <div><dt>使用モデル</dt><dd>${escapeHtml(state.aiTutorForm.apiModel || "未取得")}</dd></div>
    <div><dt>token使用量</dt><dd>${escapeHtml(formatUsage(state.aiTutorForm.apiUsage))}</dd></div>
  `;
  text.textContent = state.aiTutorForm.apiResponseText || "外部ChatGPTの回答メモはまだありません。下の手動コピー用プロンプトを使ってください。";
  error.textContent = state.aiTutorForm.apiError || "";
  document.querySelector("#askAiTutorButton")?.toggleAttribute("disabled", Boolean(state.aiTutorForm.sending));
}

function renderAiTargetSelect() {
  const select = document.querySelector("#aiTargetSelect");
  const label = document.querySelector("#aiTargetSelectLabel");
  const hint = document.querySelector("#aiTargetHint");
  const options = getAiTargetOptions(state.aiForm.targetType);
  const needsSelect = ["単元", "レッスン", "演習ログ", "過去問ログ", "実務ログ", "総合模試結果"].includes(state.aiForm.targetType);
  label.classList.toggle("is-hidden", !needsSelect);
  hint.textContent = needsSelect ? "" : state.aiForm.targetType === "通関業法カリキュラム"
    ? "通関業法20レッスンの進捗、誤答、弱点タグ、ミニ模試、復習対象を使います。"
    : state.aiForm.targetType === "関税法等カリキュラム"
    ? "関税法等30レッスンの進捗、誤答、弱点タグ、ミニ模試、保税・納税・課税価格の苦手状況を使います。"
    : state.aiForm.targetType === "通関実務カリキュラム"
    ? "通関実務30レッスンの進捗、誤答、弱点タグ、ミニ模試、品目分類・課税価格・申告書・税額計算・時間配分の苦手状況を使います。"
    : state.aiForm.targetType === "復習対象"
    ? "現在の復習対象単元を最大10件まで使います。"
    : state.aiForm.targetType === "最新模試結果"
    ? "最新の総合模試結果、科目別正答率、誤答、弱点タグを使います。"
    : state.aiForm.targetType === "横断弱点"
    ? "模試、C判定レッスン、演習・過去問・実務ログをまたぐ弱点タグを使います。"
    : state.aiForm.targetType === "弱点別ドリル結果"
    ? "弱点タグ別・弱点グループ別ドリルの結果、正答率、誤答タグ、危険度を使います。"
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
  if (targetType === "総合模試結果") {
    return [...state.mockExamResults].sort((a, b) => (b.completedAt || "").localeCompare(a.completedAt || "")).map((result) => ({
      value: result.id,
      label: `${formatDateTime(result.completedAt)} / ${result.title} / ${result.scoreRate}% / ${result.resultLevel}`
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
          <span class="badge">${item.sentViaApi ? "旧版送信履歴" : "コピー用"}</span>
          <span class="badge">${escapeHtml(item.model || "ローカル保存")}</span>
          <span class="badge">${item.responseText ? "外部回答メモあり" : "外部回答メモなし"}</span>
          <span class="badge ${item.error ? "priority" : ""}">${item.error ? "エラーあり" : "エラーなし"}</span>
        </div>
        <p class="muted">${escapeHtml(truncateText(item.promptText, 120) || "プロンプト本文なし")}</p>
        <label>
          外部回答メモ
          <textarea data-ai-result-memo="${escapeAttribute(item.id)}" placeholder="ChatGPTなどから返ってきた解析結果を必要に応じて保存">${escapeHtml(item.resultMemo || "")}</textarea>
        </label>
        <div class="card-actions">
          <button class="ghost-button" type="button" data-show-ai-analysis="${escapeAttribute(item.id)}">プロンプト再表示</button>
          <button class="ghost-button" type="button" data-show-ai-response="${escapeAttribute(item.id)}">外部回答メモ再表示</button>
          <button class="primary-button" type="button" data-save-ai-result-memo="${escapeAttribute(item.id)}">メモ保存</button>
          <button class="danger-button" type="button" data-delete-ai-analysis="${escapeAttribute(item.id)}">削除</button>
        </div>
      </article>
    `).join("")
    : `<div class="empty-state"><p class="muted">相談文履歴はまだありません。</p></div>`;
}

function renderAiTutorHistory() {
  const host = document.querySelector("#aiTutorHistoryList");
  if (!host) return;
  const items = state.aiAnalyses
    .filter((item) => item.promptType === "AI講師" || item.promptType === "外部ChatGPT相談")
    .sort(compareAiAnalyses)
    .slice(0, 30);
  host.innerHTML = items.length
    ? items.map((item) => `
      <article class="ai-history-card ai-tutor-history-card">
        <div>
          <p class="eyebrow">${escapeHtml(formatDateTime(item.createdAt))}</p>
          <h3>${escapeHtml(item.targetTitle || item.targetType || "対象なし")}</h3>
        </div>
        <div class="card-meta">
          <span class="badge">${escapeHtml(item.targetType || "対象なし")}</span>
          <span class="badge">${escapeHtml(item.questionType || "質問タイプなし")}</span>
          <span class="badge">${escapeHtml(item.explanationLevel || "説明レベルなし")}</span>
          <span class="badge">手動コピー</span>
          <span class="badge">${item.responseText ? "回答あり" : "回答なし"}</span>
          ${item.savedAsReviewMemo ? `<span class="badge ok">復習メモ</span>` : ""}
          ${item.markedAsWeaknessSuggestion ? `<span class="badge normal">弱点提案</span>` : ""}
          ${item.markedForNextReview ? `<span class="badge priority">次回復習</span>` : ""}
        </div>
        <p class="muted">${escapeHtml(truncateText(item.userQuestion || item.promptText, 120) || "質問なし")}</p>
        <div class="card-actions">
          <button class="ghost-button" type="button" data-show-ai-tutor="${escapeAttribute(item.id)}">再表示</button>
          <button class="primary-button" type="button" data-repeat-ai-tutor="${escapeAttribute(item.id)}">同じ条件でもう一度質問</button>
          <button class="danger-button" type="button" data-delete-ai-analysis="${escapeAttribute(item.id)}">削除</button>
        </div>
      </article>
    `).join("")
    : `<div class="empty-state"><p class="muted">外部ChatGPT相談文の履歴はまだありません。</p></div>`;
}

function renderAiSuggestionHistory() {
  const host = document.querySelector("#aiSuggestionHistoryList");
  if (!host) return;
  const items = state.aiAnalyses
    .filter((item) => item.promptType === "AI添削・弱点提案")
    .sort(compareAiAnalyses)
    .slice(0, 30);
  host.innerHTML = items.length ? items.map((item) => {
    const suggestion = item.suggestionObject || {};
    const tags = suggestionList(suggestion.suggestedWeaknessTags).slice(0, 4).join(" / ");
    return `
      <article class="ai-history-card ai-suggestion-history-card">
        <div>
          <p class="eyebrow">${escapeHtml(formatDateTime(item.createdAt))}</p>
          <h3>${escapeHtml(item.targetTitle || item.targetType || "対象なし")}</h3>
        </div>
        <div class="card-meta">
          <span class="badge">${escapeHtml(item.targetType || "対象なし")}</span>
          <span class="badge">${escapeHtml(item.correctionType || "添削タイプなし")}</span>
          <span class="badge">${item.suggestionParsed ? "構造化済み" : "手動確認"}</span>
          <span class="badge ${item.appliedAt ? "ok" : "priority"}">${item.appliedAt ? "反映済み" : "未反映"}</span>
        </div>
        <dl class="review-facts compact">
          <div><dt>提案理解度</dt><dd>${escapeHtml(suggestion.suggestedUnderstanding || "未提案")}</dd></div>
          <div><dt>復習対象提案</dt><dd>${suggestion.suggestedReviewNeeded === true ? "対象" : suggestion.suggestedReviewNeeded === false ? "対象外" : "未提案"}</dd></div>
          <div><dt>弱点タグ候補</dt><dd>${escapeHtml(tags || "未提案")}</dd></div>
          <div><dt>反映項目</dt><dd>${escapeHtml((item.appliedFields || []).join(" / ") || "なし")}</dd></div>
        </dl>
        <div class="card-actions">
          <button class="ghost-button" type="button" data-show-ai-suggestion="${escapeAttribute(item.id)}">詳細を見る</button>
          <button class="primary-button" type="button" data-apply-ai-suggestion-history="${escapeAttribute(item.id)}">反映する</button>
          <button class="danger-button" type="button" data-delete-ai-analysis="${escapeAttribute(item.id)}">削除</button>
        </div>
      </article>
    `;
  }).join("") : `<div class="empty-state"><p class="muted">AI提案履歴はまだありません。</p></div>`;
}

function generateAiTutorPrompt() {
  const target = buildAiTutorTargetData();
  const promptText = buildAiTutorPromptText(target);
  state.aiTutorForm.promptText = promptText;
  state.aiTutorForm.currentAnalysisId = "";
  state.aiTutorForm.apiStatus = "未送信";
  state.aiTutorForm.apiResponseText = "";
  state.aiTutorForm.apiModel = "";
  state.aiTutorForm.apiUsage = {};
  state.aiTutorForm.apiError = "";
  state.aiTutorForm.sentViaApi = false;
  const promptInput = document.querySelector("#aiTutorPromptResult");
  if (promptInput) promptInput.value = promptText;
  renderAiTutorResponse();
  return { target, promptText };
}

function buildAiTutorPromptText(target) {
  const questionType = state.aiTutorForm.questionType;
  const output = AI_TUTOR_OUTPUT_FORMATS[questionType] || AI_TUTOR_OUTPUT_FORMATS.default;
  return [
    "【1. 役割】",
    "あなたは通関士試験のプロ講師です。",
    "私は通関士試験の独学者です。",
    "本アプリをメイン教材として学習しています。",
    "市販教材は辞書・補助演習として使っています。",
    "本試験で正答できる力をつけるために、以下の質問に答えてください。",
    "",
    "【2. 学習者の前提】",
    `説明レベル: ${state.aiTutorForm.explanationLevel}`,
    "目標: A/B/C到達判定を改善し、本試験の選択肢で正答できる状態にする。",
    "",
    "【3. 対象データ】",
    target.body,
    "",
    "【4. 質問タイプ】",
    `${questionType}: ${AI_TUTOR_QUESTION_INSTRUCTIONS[questionType] || "通関士試験対策として回答してください。"}`,
    "",
    "【5. ユーザーの質問】",
    state.aiTutorForm.userQuestion.trim() || "対象データについて、通関士試験で得点するために重要な点を教えてください。",
    "",
    "【6. 出力形式】",
    bulletLines(output),
    "",
    "【7. 注意事項】",
    bulletLines([
      "市販教材や過去問本文を丸写ししない",
      "通関士試験の本試験で使える形で説明する",
      "暗記不足と理解不足を分ける",
      "ひっかけ表現を明示する",
      "必要なら類似問題をオリジナルで作る",
      "条文・制度趣旨・試験上の問われ方を意識する",
      "最後に次にやるべきことを示す"
    ])
  ].join("\n");
}

function buildAiTutorTargetData() {
  const type = state.aiTutorForm.targetType;
  if (type === "現在のレッスン") {
    const lesson = getLessonById(state.aiTutorForm.targetId) || getLessonById(state.activeLessonId) || getRecommendedLesson()?.lesson || CURRICULUM_LESSONS[0];
    return { id: lesson?.id || "", title: lesson?.title || "現在のレッスン", body: lesson ? buildLessonPromptData(lesson) : "対象レッスンなし" };
  }
  if (type === "確認問題") {
    const [lessonId, questionId] = String(state.aiTutorForm.targetId || "").split(":");
    const lesson = getLessonById(lessonId) || getLessonById(state.activeLessonId) || CURRICULUM_LESSONS[0];
    const question = lesson?.questions.find((item) => item.id === questionId) || lesson?.questions[0];
    return { id: `${lesson?.id || ""}:${question?.id || ""}`, title: `${lesson?.title || "確認問題"} / ${question?.weaknessTag || ""}`, body: lesson && question ? buildAiTutorQuestionData(lesson, question) : "対象問題なし" };
  }
  if (type === "模試問題") {
    const [resultId, questionId] = String(state.aiTutorForm.targetId || "").split(":");
    const result = state.mockExamResults.find((item) => item.id === resultId) || getLatestMockResult();
    const answer = result?.answers.find((item) => item.questionId === questionId) || result?.answers.find((item) => !item.correct) || result?.answers[0];
    return { id: `${result?.id || ""}:${answer?.questionId || ""}`, title: `${result?.title || "模試問題"} / ${answer?.topic || ""}`, body: result && answer ? buildAiTutorMockQuestionData(result, answer) : "模試結果または対象問題なし" };
  }
  if (type === "今日のメニュー") {
    return { id: "today", title: "今日のメニュー", body: buildAiTutorTodayData() };
  }
  if (type === "弱点タグ") {
    const tag = state.aiTutorForm.targetId || buildWeaknessRanking()[0]?.tag || "";
    return { id: tag, title: tag || "弱点タグ", body: buildAiTutorWeaknessTagData(tag) };
  }
  if (type === "弱点別ドリル結果") {
    return { id: "weakness-drill", title: "弱点別ドリル結果", body: buildWeaknessDrillPromptSummary() };
  }
  return { id: "free", title: "自由質問", body: "自由質問です。通関士試験の学習支援として、質問内容を本試験対策に結びつけて回答してください。" };
}

function buildAiSuggestionTargetData() {
  const type = state.aiSuggestionForm.targetType;
  if (type === "レッスン確認問題") {
    const [lessonId, questionId] = String(state.aiSuggestionForm.targetId || "").split(":");
    const lesson = getLessonById(lessonId) || getLessonById(state.activeLessonId) || CURRICULUM_LESSONS[0];
    const question = lesson?.questions.find((item) => item.id === questionId) || lesson?.questions[0];
    return { id: `${lesson?.id || ""}:${question?.id || ""}`, title: `${lesson?.title || "確認問題"} / ${question?.weaknessTag || ""}`, body: lesson && question ? buildAiSuggestionLessonQuestionData(lesson, question) : "対象問題なし" };
  }
  if (type === "レッスン理解度") {
    const lesson = getLessonById(state.aiSuggestionForm.targetId) || CURRICULUM_LESSONS[0];
    return { id: lesson?.id || "", title: lesson?.title || "レッスン理解度", body: lesson ? buildAiSuggestionLessonUnderstandingData(lesson) : "対象レッスンなし" };
  }
  if (type === "模試結果") {
    const result = state.mockExamResults.find((item) => item.id === state.aiSuggestionForm.targetId) || getLatestMockResult();
    return { id: result?.id || "", title: result?.title || "模試結果", body: result ? buildAiSuggestionMockResultData(result) : "模試結果なし" };
  }
  if (type === "今日のメニュー") return { id: "today", title: "今日のメニュー", body: buildAiSuggestionTodayData() };
  if (type === "弱点タグ") {
    const tag = state.aiSuggestionForm.targetId || buildWeaknessRanking()[0]?.tag || "";
    return { id: tag, title: tag || "弱点タグ", body: buildAiTutorWeaknessTagData(tag) };
  }
  if (type === "弱点別ドリル結果") return { id: "weakness-drill", title: type, body: buildWeaknessDrillPromptSummary() };
  if (type === "通関業法カリキュラム") return { id: "course-tsukangyoho-basic", title: type, body: buildTsukangyohoCurriculumPromptData() };
  if (type === "通関業法ドリル結果") return { id: "drill-tsukangyoho", title: type, body: buildDrillPromptSummary() };
  if (type === "関税法等カリキュラム") return { id: "course-kanzeihou-intro", title: type, body: buildKanzeihouCurriculumPromptData() };
  if (type === "関税法等ドリル結果") return { id: "drill-kanzeihou", title: type, body: buildDrillPromptSummary() };
  if (type === "通関実務カリキュラム") return { id: "course-practical-intro", title: type, body: buildPracticalCurriculumPromptData() };
  if (type === "通関実務ドリル結果") return { id: "drill-jitsumu", title: type, body: buildDrillPromptSummary() };
  return { id: "free", title: "自由入力", body: state.aiSuggestionForm.memo || "自由入力の添削対象が未入力です。" };
}

function buildAiSuggestionLessonQuestionData(lesson, question) {
  const progress = getLessonProgress(lesson.id);
  const result = getLessonQuestionResult(lesson.id, question.id);
  const unit = state.units.find((item) => item.id === lesson.relatedUnitId);
  return keyValueLines([
    ["レッスン名", lesson.title],
    ["科目", lesson.subject],
    ["問題文", question.question],
    ["選択肢", question.choices.join(" / ")],
    ["自分の回答", result?.userAnswer || "未回答"],
    ["正答", question.answer],
    ["解説", question.explanation],
    ["ひっかけ解説", question.trapExplanation],
    ["現在の理解度", progress.understanding],
    ["現在の弱点タグ", [...(unit?.ai?.weaknessTags || []), question.weaknessTag].filter(Boolean).join(" / ") || "なし"]
  ]);
}

function buildAiSuggestionLessonUnderstandingData(lesson) {
  const progress = getLessonProgress(lesson.id);
  const wrong = lesson.questions.filter((question) => progress.questionResults.some((result) => result.questionId === question.id && !result.correct));
  const correct = lesson.questions.filter((question) => progress.questionResults.some((result) => result.questionId === question.id && result.correct)).length;
  return keyValueLines([
    ["レッスン名", lesson.title],
    ["科目", lesson.subject],
    ["確認問題結果", progress.questionResults.map((result) => `${result.questionId}:${result.correct ? "正解" : "不正解"}:${result.userAnswer}`).join(" / ") || "未回答"],
    ["正答数", `${correct}/${lesson.questions.length}`],
    ["誤答問題", wrong.map((question) => `${question.question} / 正答:${question.answer} / 弱点:${question.weaknessTag}`).join("\n") || "なし"],
    ["現在の理解度", progress.understanding],
    ["復習対象かどうか", progress.reviewNeeded ? "対象" : "対象外"]
  ]);
}

function buildAiSuggestionMockResultData(result) {
  return buildMockExamPromptData(result) + "\n" + keyValueLines([["復習対象かどうか", result.reviewNeeded ? "対象" : "対象外"]]);
}

function buildAiSuggestionTodayData() {
  const latest = getLatestMockResult();
  const menu = state.todayMenu || generateTodayMenu(getTodayPlan().selectedDuration);
  const incomplete = menu.recommended.filter((item) => !isTodayItemCompleted(item.id));
  return [
    buildTodayPromptSummary(),
    keyValueLines([
      ["未完了項目", incomplete.map((item) => `${item.type}:${item.title}`).join("\n") || "なし"],
      ["弱点タグ", getTopWeaknessTags().join(" / ") || "なし"],
      ["直近の模試結果", latest ? `${latest.title} / ${latest.scoreRate}% / ${latest.resultLevel}` : "未実施"]
    ])
  ].join("\n");
}

function buildAiSuggestionPromptText(target) {
  return [
    "【1. 役割】",
    "あなたは通関士試験の学習相談に答える講師です。",
    "回答は学習補助です。法令・試験情報の最終判断はユーザーが公式情報で確認します。",
    "",
    "【2. 添削対象】",
    `対象種別: ${state.aiSuggestionForm.targetType}`,
    `対象名: ${target.title}`,
    target.body,
    "",
    "【3. 添削タイプ】",
    `${state.aiSuggestionForm.suggestionType}: ${AI_SUGGESTION_TYPE_INSTRUCTIONS[state.aiSuggestionForm.suggestionType] || "通関士試験対策として提案してください。"}`,
    "",
    "【4. 追加メモ】",
    state.aiSuggestionForm.memo || "なし",
    "",
    "【5. 出力形式】",
    bulletLines(["AI総評", "提案理解度", "復習対象提案", "弱点タグ候補", "次にやるべきレッスン", "具体的アクション", "AIの自信度"]),
    "",
    "【6. 構造化提案】",
    `回答末尾に必ず ${AI_SUGGESTION_MARKER} から始まるJSON風ブロックを付けてください。`,
    "キーは suggestedUnderstanding, suggestedReviewNeeded, suggestedWeaknessTags, suggestedNextLessons, suggestedActions, confidence を使ってください。",
    "例:",
    AI_SUGGESTION_MARKER,
    "{",
    '  "suggestedUnderstanding": "B",',
    '  "suggestedReviewNeeded": true,',
    '  "suggestedWeaknessTags": ["罰則", "義務規定と罰則の混同"],',
    '  "suggestedNextLessons": ["信用失墜行為と罰則トラップ"],',
    '  "suggestedActions": ["罰則がある義務とない義務を比較する"],',
    '  "confidence": "中"',
    "}",
    "",
    "【7. 注意事項】",
    bulletLines(["市販教材や過去問本文を丸写ししない", "勝手に学習データへ反映済みのように書かない", "ユーザーが確認してから反映する前提で提案する"])
  ].join("\n");
}

function extractAiSuggestion(responseText) {
  const text = String(responseText || "");
  const index = text.indexOf(AI_SUGGESTION_MARKER);
  if (index < 0) return { parsed: false, suggestionObject: null, rawSuggestionText: "" };
  return parseAiSuggestionBlock(text.slice(index + AI_SUGGESTION_MARKER.length).trim());
}

function parseAiSuggestionBlock(blockText) {
  const raw = String(blockText || "").trim();
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  const candidate = start >= 0 && end > start ? raw.slice(start, end + 1) : raw;
  try {
    const parsed = JSON.parse(candidate);
    return { parsed: true, suggestionObject: parsed, rawSuggestionText: raw };
  } catch (error) {
    return { parsed: false, suggestionObject: null, rawSuggestionText: raw };
  }
}

function buildAiTutorQuestionData(lesson, question) {
  const result = getLessonQuestionResult(lesson.id, question.id);
  return keyValueLines([
    ["レッスン名", lesson.title],
    ["科目", lesson.subject],
    ["問題文", question.question],
    ["選択肢", question.choices.join(" / ")],
    ["自分の回答", result?.userAnswer || "未回答"],
    ["正答", question.answer],
    ["通常解説", question.explanation],
    ["ひっかけ解説", question.trapExplanation],
    ["弱点タグ", question.weaknessTag],
    ["確認問題結果", result ? (result.correct ? "正解" : "不正解") : "未回答"]
  ]);
}

function buildAiTutorMockQuestionData(result, answer) {
  const question = getMockQuestionById(answer.questionId);
  return keyValueLines([
    ["模試モード", result.title],
    ["科目", answer.subject || question?.subject],
    ["論点", answer.topic || question?.topic],
    ["問題文", question?.question],
    ["選択肢", (question?.choices || []).join(" / ")],
    ["自分の回答", answer.userAnswer || "未回答"],
    ["正答", question?.answer],
    ["解説", question?.explanation],
    ["ひっかけ解説", question?.trapExplanation],
    ["弱点タグ", answer.weaknessTag || question?.weaknessTag],
    ["模試判定", `${result.scoreRate}% / ${result.resultLevel}`]
  ]);
}

function buildAiTutorTodayData() {
  const menu = state.todayMenu || generateTodayMenu(getTodayPlan().selectedDuration);
  const latest = getLatestMockResult();
  return [
    buildTodayPromptSummary(),
    keyValueLines([
      ["復習候補", getCrossReviewItems().slice(0, 8).map((item) => `${item.type}:${item.title} / ${item.reason}`).join("\n") || "なし"],
      ["直近の模試結果", latest ? `${latest.title} / ${latest.scoreRate}% / ${latest.resultLevel}` : "未実施"]
    ])
  ].join("\n");
}

function buildAiTutorWeaknessTagData(tag) {
  const stats = buildWeaknessTagStats().find((item) => item.tag === tag);
  const relatedLessons = CURRICULUM_LESSONS.filter((lesson) => [
    lesson.title,
    lesson.focus,
    ...(lesson.keyPoints || []),
    ...(lesson.traps || []),
    ...(lesson.questions || []).map((question) => question.weaknessTag).join(" ")
  ].join(" ").includes(tag)).slice(0, 8);
  const mockMisses = state.mockExamResults.flatMap((result) => result.answers
    .filter((answer) => !answer.correct && (answer.weaknessTag === tag || getMockQuestionById(answer.questionId)?.weaknessTag === tag))
    .map((answer) => `${result.title} / ${answer.subject} / ${answer.topic} / 自分:${answer.userAnswer || "未回答"}`));
  return keyValueLines([
    ["選択した弱点タグ", tag || "未選択"],
    ["弱点別ドリル正答率", stats ? (stats.total ? `${stats.rate}%（${stats.correct}/${stats.total}）/ 危険度:${stats.risk.label}` : `未実施 / 対応問題${stats.questionCount}問`) : "データなし"],
    ["関連レッスン", relatedLessons.map((lesson) => `${lesson.subject} / ${lesson.title}`).join("\n") || "なし"],
    ["関連模試ミス", mockMisses.slice(0, 8).join("\n") || "なし"],
    ["関連演習ログ", state.practiceLogs.filter((log) => log.weaknessTags.includes(tag)).slice(0, 6).map((log) => `${log.studiedAt} / ${log.unitTitle} / ${log.result} / ${log.mistakeReason}`).join("\n") || "なし"],
    ["関連過去問ログ", state.pastExamLogs.filter((log) => log.weaknessTags.includes(tag)).slice(0, 6).map((log) => `${log.studiedAt} / ${log.examRound} / ${log.subject} / ${log.result} / ${log.topic}`).join("\n") || "なし"],
    ["関連実務ログ", state.practicalLogs.filter((log) => log.weaknessTags.includes(tag)).slice(0, 6).map((log) => `${log.studiedAt} / ${log.practicalType} / ${log.result} / ${log.mistakeField}`).join("\n") || "なし"]
  ]);
}

function renderAiResponse() {
  const meta = document.querySelector("#aiResponseMeta");
  const text = document.querySelector("#aiResponseText");
  const error = document.querySelector("#aiResponseError");
  if (!meta || !text || !error) return;
  meta.innerHTML = `
    <div><dt>送信状態</dt><dd>${escapeHtml(state.aiForm.apiStatus || "未送信")}</dd></div>
    <div><dt>使用モデル</dt><dd>${escapeHtml(state.aiForm.apiModel || "未取得")}</dd></div>
    <div><dt>token使用量</dt><dd>${escapeHtml(formatUsage(state.aiForm.apiUsage))}</dd></div>
  `;
  text.textContent = state.aiForm.apiResponseText || "AI応答はまだありません。";
  error.textContent = state.aiForm.apiError || "";
}

function renderAiApiLogSummary() {
  const summary = getAiApiLogSummary();
  const html = `
    <div><dt>直近の手動コピー日時</dt><dd>${escapeHtml(formatDateTime(summary.lastSentAt))}</dd></div>
    <div><dt>成功件数</dt><dd>${summary.successCount}件</dd></div>
    <div><dt>失敗件数</dt><dd>${summary.failureCount}件</dd></div>
    <div><dt>最後のエラー</dt><dd>${escapeHtml(summary.lastError || "なし")}</dd></div>
  `;
  const settingsHost = document.querySelector("#aiApiLogSummary");
  if (settingsHost) settingsHost.innerHTML = html;
}

function getAiApiLogSummary() {
  const apiItems = state.aiAnalyses.filter((item) => item.sentViaApi);
  const last = [...apiItems].sort(compareAiAnalyses)[0];
  const failures = apiItems.filter((item) => item.error);
  return {
    lastSentAt: last?.createdAt || "",
    successCount: apiItems.filter((item) => !item.error).length,
    failureCount: failures.length,
    lastError: [...failures].sort(compareAiAnalyses)[0]?.error || ""
  };
}

function applyAiQuickAction(kind) {
  if (kind === "today") {
    openAiForTodayConsult();
    return;
  }
  if (kind === "mock") {
    const latest = getLatestMockResult();
    if (latest) {
      openAiForMockResult(latest.id);
    } else {
      state.aiForm.promptType = "総合学習相談";
      state.aiForm.targetType = "全体サマリー";
      state.aiForm.targetId = "";
      state.aiForm.additionalConditions = "総合模試が未実施の場合に、最初に受けるべき模試と復習順を提案してください。";
      state.aiForm.promptText = "";
      switchView("ai");
      renderAiView();
    }
    return;
  }
  if (kind === "weak") {
    const lesson = getReviewLessons().find(({ progress }) => progress.understanding === "C")?.lesson || getRecommendedLesson()?.lesson;
    if (lesson) openAiForLesson(lesson.id);
    return;
  }
  if (kind === "tags") {
    state.aiForm.promptType = "復習指示";
    state.aiForm.targetType = "横断弱点";
    state.aiForm.targetId = "";
    state.aiForm.additionalConditions = "弱点タグ上位から、今日30分でやる復習計画と今週の復習計画を作ってください。";
    state.aiForm.promptText = "";
    prepareAiPromptDraft();
    switchView("ai");
    renderAiView();
    return;
  }
  if (kind === "lesson") {
    const lesson = getRecommendedLesson()?.lesson || CURRICULUM_LESSONS[0];
    if (lesson) openAiForLesson(lesson.id);
  }
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
  state.aiForm.apiStatus = "未送信";
  state.aiForm.apiResponseText = "";
  state.aiForm.apiModel = "";
  state.aiForm.apiUsage = {};
  state.aiForm.apiError = "";
  state.aiForm.highlightSend = Boolean(state.aiSettings.enabled);
  saveUnits();
  render();
  showToast("プロンプトを生成しました。");
}

function buildAiPromptText(promptType, target, additionalConditions) {
  const points = ["総合模試結果", "最新模試結果", "横断弱点"].includes(state.aiForm.targetType)
    ? ["模試モードと正答率の評価", "A/B/C判定の妥当性", "科目別正答率の弱い順", "間違えた問題の共通原因", "弱点タグの優先順位", "関連レッスンの復習順", "次に復習すべき候補", "30分・1時間での復習指示"]
    : state.aiForm.targetType === "通関業法カリキュラム"
    ? ["通関業法レッスン進捗の評価", "A/B/C判定の偏り", "間違えた確認問題から見える弱点", "弱点タグの優先順位", "ミニ模試結果の評価", "復習対象レッスンの優先順位", "罰則・処分系トラップへの耐性", "30分でできる通関業法復習メニュー"]
    : state.aiForm.targetType === "通関実務カリキュラム"
    ? ["通関実務レッスン進捗の評価", "A/B/C判定の偏り", "間違えた確認問題から見える弱点", "弱点タグの優先順位", "ミニ模試結果の評価", "復習対象レッスンの優先順位", "品目分類、課税価格、申告書、税額計算、時間配分の苦手状況", "30分でできる通関実務復習メニュー"]
    : state.aiForm.targetType === "実務ログ"
    ? ["申告書作成上のミス原因", "計算過程のどこで崩れたか", "品目分類・資料読み取りの弱点", "NACCS入力項目の理解不足", "時間配分の問題", "次に解くべき実務問題タイプ", "本試験で失点しやすいポイント", "30分でできる実務復習メニュー"]
    : state.aiForm.targetType === "弱点別ドリル結果"
    ? ["弱点タグ別正答率", "弱点グループ別正答率", "最優先で潰すタグ", "科目横断で混同している論点", "誤答が多いタグの原因", "次に解くべき5問・10問ドリル", "30分でできる復習順", "本試験でのひっかけ対策"]
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
  if (state.aiForm.targetType === "総合模試結果") {
    const result = state.mockExamResults.find((item) => item.id === state.aiForm.targetId) || state.mockExamResults[0];
    return result ? { id: result.id, title: result.title, body: buildMockExamPromptData(result) } : null;
  }
  if (state.aiForm.targetType === "最新模試結果") {
    const result = getLatestMockResult();
    return result ? { id: result.id, title: `最新模試結果 / ${result.title}`, body: buildMockExamPromptData(result) } : null;
  }
  if (state.aiForm.targetType === "横断弱点") {
    return { id: "cross-weakness", title: "横断弱点", body: buildCrossWeaknessPromptData() };
  }
  if (state.aiForm.targetType === "弱点別ドリル結果") {
    return { id: "weakness-drill", title: "弱点別ドリル結果", body: buildWeaknessDrillPromptSummary() };
  }
  if (state.aiForm.targetType === "復習対象") {
    return { id: "", title: "復習対象", body: buildReviewTargetsPromptData() };
  }
  if (state.aiForm.targetType === "通関業法カリキュラム") {
    return { id: "course-tsukangyoho-basic", title: "通関業法カリキュラム", body: buildTsukangyohoPromptData() };
  }
  if (state.aiForm.targetType === "通関業法ドリル結果") {
    return { id: "drill-tsukangyoho", title: "通関業法ドリル結果", body: buildDrillPromptSummary() };
  }
  if (state.aiForm.targetType === "関税法等ドリル結果") {
    return { id: "drill-kanzeihou", title: "関税法等ドリル結果", body: buildDrillPromptSummary() };
  }
  if (state.aiForm.targetType === "関税法等カリキュラム") {
    return { id: "course-kanzeihou-intro", title: "関税法等カリキュラム", body: buildKanzeihouPromptData() };
  }
  if (state.aiForm.targetType === "通関実務カリキュラム") {
    return { id: "course-practical-intro", title: "通関実務カリキュラム", body: buildPracticalCurriculumPromptData() };
  }
  if (state.aiForm.targetType === "通関実務ドリル結果") {
    return { id: "drill-jitsumu", title: "通関実務ドリル結果", body: buildDrillPromptSummary() };
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
    ["原則と例外", (lesson.principleExceptions || []).join(" / ")],
    ["主体・期限・手続の区別", [...(lesson.distinctions || []), ...(lesson.timeLimits || [])].join(" / ")],
    ["試験で狙われる表現", lesson.examTips.join(" / ")],
    ["罰則・処分・手続メモ", lesson.penaltyTips.join(" / ")],
    ["確認問題の結果", results],
    ["理解度判定", progress.understanding],
    ["復習対象かどうか", progress.reviewNeeded ? "復習対象" : "対象外"],
    ["状態", progress.status],
    ["最終学習日", progress.lastStudiedAt]
  ]);
}

function buildTsukangyohoPromptData() {
  const analysis = buildTsukangyohoCurriculumAnalysis();
  const lessons = getTsukangyohoLessons();
  const lessonLines = lessons.map((lesson) => {
    const progress = getLessonProgress(lesson.id);
    const wrongQuestions = lesson.questions
      .filter((question) => progress.questionResults.some((result) => result.questionId === question.id && !result.correct))
      .map((question) => `${question.question} / 正答:${question.answer} / 弱点:${question.weaknessTag}`);
    const correct = lesson.questions.filter((question) => progress.questionResults.some((result) => result.questionId === question.id && result.correct)).length;
    return `${lesson.order}. ${lesson.title} / 状態:${progress.status} / 理解度:${progress.understanding} / 正答:${correct}/${lesson.questions.length} / 復習:${progress.reviewNeeded ? "対象" : "対象外"} / 誤答:${wrongQuestions.join(" || ") || "なし"}`;
  }).join("\n");
  const wrongTags = lessons.flatMap((lesson) => getWrongLessonTags(lesson.id));
  const reviewLessons = getReviewLessons()
    .filter(({ lesson }) => lesson.courseId === "course-tsukangyoho-basic")
    .map(({ lesson, progress, reason }) => `${lesson.title}:${progress.understanding}/${reason}`)
    .join("\n") || "なし";
  return keyValueLines([
    ["対象", "通関業法カリキュラム"],
    ["レッスン総数", analysis.total],
    ["完了数", analysis.completed],
    ["未着手数", analysis.notStarted],
    ["復習対象数", analysis.reviewCount],
    ["A/B/C/未判定", `A:${analysis.understandingCounts.A || 0} / B:${analysis.understandingCounts.B || 0} / C:${analysis.understandingCounts.C || 0} / 未判定:${analysis.understandingCounts["未判定"] || 0}`],
    ["ミニ模試結果", analysis.miniExamText],
    ["ひっかけ問題正答率", analysis.trapAccuracy],
    ["罰則・処分系問題正答率", analysis.penaltyAccuracy],
    ["間違えた確認問題の弱点タグ", rankFromValues(wrongTags).map((item) => `${item.label}(${item.count})`).join(" / ") || "なし"],
    ["復習対象レッスン", reviewLessons],
    ["レッスン別進捗", lessonLines]
  ]);
}

function buildKanzeihouPromptData() {
  const analysis = buildKanzeihouCurriculumAnalysis();
  const lessons = getKanzeihouLessons();
  const lessonLines = lessons.map((lesson) => {
    const progress = getLessonProgress(lesson.id);
    const wrongQuestions = lesson.questions
      .filter((question) => progress.questionResults.some((result) => result.questionId === question.id && !result.correct))
      .map((question) => `${question.question} / 正答:${question.answer} / 弱点:${question.weaknessTag}`);
    const correct = lesson.questions.filter((question) => progress.questionResults.some((result) => result.questionId === question.id && result.correct)).length;
    return `${lesson.order}. ${lesson.title} / 状態:${progress.status} / 理解度:${progress.understanding} / 正答:${correct}/${lesson.questions.length} / 復習:${progress.reviewNeeded ? "対象" : "対象外"} / 誤答:${wrongQuestions.join(" || ") || "なし"}`;
  }).join("\n");
  const wrongTags = lessons.flatMap((lesson) => getWrongLessonTags(lesson.id));
  const reviewLessons = getReviewLessons()
    .filter(({ lesson }) => lesson.courseId === "course-kanzeihou-intro")
    .map(({ lesson, progress, reason }) => `${lesson.title}:${progress.understanding}/${reason}`)
    .join("\n") || "なし";
  return keyValueLines([
    ["対象", "関税法等カリキュラム"],
    ["レッスン総数", analysis.total],
    ["完了数", analysis.completed],
    ["未着手数", analysis.notStarted],
    ["復習対象数", analysis.reviewCount],
    ["A/B/C/未判定", `A:${analysis.understandingCounts.A || 0} / B:${analysis.understandingCounts.B || 0} / C:${analysis.understandingCounts.C || 0} / 未判定:${analysis.understandingCounts["未判定"] || 0}`],
    ["ミニ模試結果", analysis.miniExamText],
    ["ひっかけ問題正答率", analysis.trapAccuracy],
    ["保税制度レッスン正答率", analysis.bondedAccuracy],
    ["納税・申告系レッスン正答率", analysis.taxDeclarationAccuracy],
    ["課税価格系レッスン正答率", analysis.customsValueAccuracy],
    ["間違えた確認問題の弱点タグ", rankFromValues(wrongTags).map((item) => `${item.label}(${item.count})`).join(" / ") || "なし"],
    ["復習対象レッスン", reviewLessons],
    ["苦手状況", `保税:${analysis.bondedAccuracy} / 納税:${analysis.taxDeclarationAccuracy} / 課税価格:${analysis.customsValueAccuracy} / 減免税:${lessonLines.includes("減免税") ? "レッスンあり" : "未収録"}`],
    ["レッスン別進捗", lessonLines]
  ]);
}

function buildPracticalCurriculumPromptData() {
  const analysis = buildPracticalCurriculumAnalysis();
  const lessons = getPracticalLessons();
  const lessonLines = lessons.map((lesson) => {
    const progress = getLessonProgress(lesson.id);
    const wrongQuestions = lesson.questions
      .filter((question) => progress.questionResults.some((result) => result.questionId === question.id && !result.correct))
      .map((question) => `${question.question} / 正答:${question.answer} / 弱点:${question.weaknessTag}`);
    const correct = lesson.questions.filter((question) => progress.questionResults.some((result) => result.questionId === question.id && result.correct)).length;
    const relatedLogs = getRelatedPracticalLogsForLesson(lesson).filter((log) => ["×", "△"].includes(log.result) || log.retry || log.priority === "高");
    return `${lesson.order}. ${lesson.title} / 状態:${progress.status} / 理解度:${progress.understanding} / 正答:${correct}/${lesson.questions.length} / 復習:${progress.reviewNeeded ? "対象" : "対象外"} / 誤答:${wrongQuestions.join(" || ") || "なし"} / 関連実務ログ弱点:${relatedLogs.length}件`;
  }).join("\n");
  const wrongTags = lessons.flatMap((lesson) => getWrongLessonTags(lesson.id));
  const reviewLessons = getReviewLessons()
    .filter(({ lesson }) => lesson.courseId === "course-practical-intro")
    .map(({ lesson, progress, reason }) => `${lesson.title}:${progress.understanding}/${reason}`)
    .join("\n") || "なし";
  return keyValueLines([
    ["対象", "通関実務カリキュラム"],
    ["レッスン総数", analysis.total],
    ["完了数", analysis.completed],
    ["未着手数", analysis.notStarted],
    ["復習対象数", analysis.reviewCount],
    ["A/B/C/未判定", `A:${analysis.understandingCounts.A || 0} / B:${analysis.understandingCounts.B || 0} / C:${analysis.understandingCounts.C || 0} / 未判定:${analysis.understandingCounts["未判定"] || 0}`],
    ["ミニ模試結果", analysis.miniExamText],
    ["間違えた確認問題の弱点タグ", rankFromValues(wrongTags).map((item) => `${item.label}(${item.count})`).join(" / ") || "なし"],
    ["復習対象レッスン", reviewLessons],
    ["苦手状況", `品目分類:${analysis.classificationAccuracy} / 課税価格:${analysis.customsValueAccuracy} / 申告書:${analysis.declarationAccuracy} / 税額計算:${analysis.taxCalculationAccuracy} / 時間配分:${analysis.timeManagementUnderstanding}`],
    ["実務ログ連動", analysis.logLinkText],
    ["レッスン別進捗", lessonLines]
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

function buildMockExamPromptData(result) {
  const wrongAnswers = result.answers.filter((answer) => !answer.correct).map((answer) => {
    const question = getMockQuestionById(answer.questionId);
    return `${answer.subject} / ${answer.topic} / 自分の回答:${answer.userAnswer || "未回答"} / 正答:${question?.answer || ""} / 弱点:${answer.weaknessTag} / 関連レッスン:${question?.relatedLessonId || ""}`;
  }).join("\n") || "なし";
  const subjectRates = Object.entries(result.subjectSummary || {})
    .map(([subject, summary]) => `${subject}:${summary.correct}/${summary.total} (${summary.rate}%)`)
    .join(" / ");
  const relatedLessons = result.answers
    .filter((answer) => !answer.correct)
    .map((answer) => getMockQuestionById(answer.questionId)?.relatedLessonId)
    .filter(Boolean)
    .map((lessonId) => getLessonById(lessonId))
    .filter(Boolean)
    .map((lesson) => `${lesson.subject} / ${lesson.title}`)
    .join("\n") || "なし";
  const topicRates = Object.entries(result.topicSummary || {})
    .sort((a, b) => a[1].rate - b[1].rate)
    .slice(0, 8)
    .map(([topic, item]) => `${topic}:${item.correct}/${item.total} (${item.rate}%)`)
    .join(" / ");
  const weaknessRows = Object.entries(result.weaknessSummary || {})
    .filter(([, item]) => item.wrong > 0)
    .sort((a, b) => b[1].wrong - a[1].wrong)
    .slice(0, 8)
    .map(([tag, item]) => `${tag}:誤答${item.wrong}`)
    .join(" / ");
  const recentDrills = [...state.drillResults]
    .sort((a, b) => (b.completedAt || "").localeCompare(a.completedAt || ""))
    .slice(0, 5)
    .map((item) => `${item.mode}:${item.scoreRate}%/${item.resultLevel}/弱点${(item.weaknessTags || []).join("・") || "なし"}`)
    .join("\n") || "なし";
  return keyValueLines([
    ["模試モード", result.title],
    ["実施日", formatDateTime(result.completedAt)],
    ["正答率", `${result.scoreRate}%`],
    ["A/B/C判定", result.resultLevel],
    ["正解数", `${result.correctCount}/${result.totalQuestions}`],
    ["科目別正答率", subjectRates],
    ["論点別正答率", topicRates || "データ不足"],
    ["間違えた問題", wrongAnswers],
    ["弱点タグ上位", weaknessRows || result.weaknessTags.join(" / ") || "なし"],
    ["関連レッスン", relatedLessons],
    ["直近のドリル結果", recentDrills],
    ["次に復習すべき候補", getCrossReviewItems().slice(0, 8).map((item) => `${item.type}:${item.title} / ${item.reason} / ${item.weaknessTag || "タグなし"}`).join("\n") || "なし"]
  ]);
}

function buildCrossWeaknessPromptData() {
  const items = getCrossReviewItems().slice(0, 15);
  return keyValueLines([
    ["横断弱点タグ", getCrossWeaknessTagRanking().slice(0, 10).map((item) => `${item.tag}(${item.count})`).join(" / ") || "なし"],
    ["最新模試結果", getLatestMockResult() ? `${getLatestMockResult().title} / ${getLatestMockResult().scoreRate}% / ${getLatestMockResult().resultLevel}` : "未実施"],
    ["横断復習候補", items.map((item) => `${item.subject} / ${item.type} / ${item.title} / 理由:${item.reason} / 弱点:${item.weaknessTag || "なし"}`).join("\n") || "なし"],
    ["C判定レッスン", getReviewLessons().filter(({ progress }) => progress.understanding === "C").map(({ lesson, reason }) => `${lesson.subject} / ${lesson.title} / ${reason}`).join("\n") || "なし"]
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
    ["科目別ドリル結果", buildDrillPromptSummary()],
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
    ["弱点タグ上位", getTopWeaknessTags().join(" / ") || "なし"],
    ["科目別ドリル結果", buildDrillPromptSummary()],
    ["今日のメモ", menu.plan.memo || "未入力"]
  ]);
}

function buildDrillPromptSummary() {
  const results = state.drillResults.filter((result) => ["通関業法", "関税法等", "通関実務"].includes(result.subject));
  const latest = results[0];
  const tsukangyohoWrongTags = getDrillWeaknessTagRanking("通関業法").slice(0, 5).map((item) => `${item.tag}(${item.count})`).join(" / ");
  const kanzeihouWrongTags = getDrillWeaknessTagRanking("関税法等").slice(0, 8).map((item) => `${item.tag}(${item.count})`).join(" / ");
  const jitsumuWrongTags = getDrillWeaknessTagRanking("通関実務").slice(0, 8).map((item) => `${item.tag}(${item.count})`).join(" / ");
  const wrongQuestions = latest ? latest.answers
    .filter((answer) => !answer.correct)
    .map((answer) => {
      const question = QUESTION_BANK.find((item) => item.id === answer.questionId);
      return question ? `${question.topic}:${question.question} / 自分の回答:${answer.userAnswer} / 正答:${question.answer}` : "";
    })
    .filter(Boolean)
    .join("\n") : "";
  return keyValueLines([
    ["実施回数", results.length],
    ["直近結果", latest ? `${latest.mode} / ${latest.scoreRate}% / ${latest.resultLevel}` : "未実施"],
    ["通関業法でよく間違える弱点タグ", tsukangyohoWrongTags || "なし"],
    ["関税法等でよく間違える弱点タグ", kanzeihouWrongTags || "なし"],
    ["通関実務でよく間違える弱点タグ", jitsumuWrongTags || "なし"],
    ["通関実務手順ドリル正答率", getDrillQuestionTypeAccuracy("通関実務", "processChoice")],
    ["通関実務計算過程ドリル正答率", getDrillQuestionTypeAccuracy("通関実務", "calculationCheck")],
    ["通関実務資料読取ドリル正答率", getDrillQuestionTypeAccuracy("通関実務", "documentRead")],
    ["直近の誤答", wrongQuestions || "なし"],
    ["相談したい観点例", "通関実務ドリルの誤答分析をお願いします / インボイス読取で間違いが多いので見る順番を整理してください / 課税価格の加算要素と不算入要素を整理してください / 関税額、消費税、地方消費税の計算順序を整理してください / 品目分類の判断手順を確認したいです"]
  ]);
}

function buildWeaknessDrillPromptSummary() {
  const results = state.drillResults.filter((result) => result.mode.includes("弱点別ドリル") || result.targetWeaknessTag || result.targetWeaknessGroup);
  const latest = results[0];
  const tagStats = buildWeaknessTagStats().filter((item) => item.total || item.questionCount).slice(0, 12);
  const groupStats = buildWeaknessGroupStats();
  const recommended = getRecommendedWeaknessDrills().slice(0, 6);
  const latestWrong = latest ? latest.answers.filter((answer) => !answer.correct).map((answer) => {
    const question = QUESTION_BANK.find((item) => item.id === answer.questionId);
    return question ? `${question.subject} / ${question.topic} / ${question.weaknessTag} / 自分:${answer.userAnswer} / 正答:${question.answer}` : "";
  }).filter(Boolean).join("\n") : "";
  return keyValueLines([
    ["弱点別ドリル実施回数", results.length],
    ["直近の弱点別ドリル", latest ? `${latest.targetWeaknessGroup || latest.targetWeaknessTag || latest.mode} / ${latest.scoreRate}% / ${latest.resultLevel}` : "未実施"],
    ["おすすめ弱点ドリル", recommended.map((item) => `${item.name}:${item.reason}`).join(" / ") || "なし"],
    ["弱点タグ別正答率", tagStats.map((item) => `${item.tag}:${item.total ? `${item.rate}%(${item.correct}/${item.total})` : "未実施"} 危険度${item.risk.label}`).join(" / ") || "データ不足"],
    ["弱点グループ別正答率", groupStats.map((item) => `${item.group}:${item.total ? `${item.rate}%(${item.correct}/${item.total})` : "未実施"} 危険度${item.risk.label}`).join(" / ")],
    ["直近の誤答", latestWrong || "なし"],
    ["相談したい観点例", "弱点別ドリルの結果をもとに復習順を提案してください / 課税価格タグの誤答が多いので加算要素と不算入要素を整理してください / 罰則・処分グループを横断整理してください / 品目分類・資料読取グループの弱点を分析してください"]
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

function formatUsage(usage) {
  if (!usage || typeof usage !== "object") return "未取得";
  const input = usage.input_tokens ?? usage.inputTokens ?? "";
  const output = usage.output_tokens ?? usage.outputTokens ?? "";
  const total = usage.total_tokens ?? usage.totalTokens ?? "";
  if (input === "" && output === "" && total === "") return "未取得";
  return `input:${input || 0} / output:${output || 0} / total:${total || 0}`;
}

function showAiAnalysis(analysisId) {
  const item = state.aiAnalyses.find((analysis) => analysis.id === analysisId);
  if (!item) return;
  state.aiForm.promptType = item.promptType || state.aiForm.promptType;
  state.aiForm.targetType = item.targetType || state.aiForm.targetType;
  state.aiForm.targetId = item.targetId || "";
  state.aiForm.promptText = item.promptText || "";
  state.aiForm.currentAnalysisId = item.id;
  state.aiForm.apiResponseText = item.responseText || "";
  state.aiForm.apiModel = item.model || "";
  state.aiForm.apiUsage = item.usage || {};
  state.aiForm.apiError = item.error || "";
  state.aiForm.apiStatus = item.sentViaApi ? (item.error ? "接続失敗" : "応答取得済み") : "未送信";
  renderAiView();
  switchView("ai");
  document.querySelector("#aiPromptResult").scrollIntoView({ behavior: "smooth", block: "start" });
}

function showAiResponseAnalysis(analysisId) {
  const item = state.aiAnalyses.find((analysis) => analysis.id === analysisId);
  if (!item) return;
  showAiAnalysis(analysisId);
  document.querySelector("#aiResponseText")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
  showToast("相談文履歴として保存しました。");
}

function buildAiApiPayload(mode, promptText) {
  const target = buildAiTargetData();
  return {
    app: "TSUKAN_YOBIKO",
    version: APP_VERSION,
    mode,
    promptType: mode === "test" ? "接続テスト" : state.aiForm.promptType,
    targetType: mode === "test" ? "system" : state.aiForm.targetType,
    targetTitle: mode === "test" ? "接続テスト" : (target?.title || ""),
    prompt: promptText,
    metadata: {
      subject: resolveAiSubject(target),
      lessonId: state.aiForm.targetType === "レッスン" ? state.aiForm.targetId : "",
      unitId: state.aiForm.targetType === "単元" ? state.aiForm.targetId : "",
      createdAt: new Date().toISOString()
    }
  };
}

function buildAiTutorApiPayload(mode, promptText, target) {
  return {
    app: "TSUKAN_YOBIKO",
    version: APP_VERSION,
    mode,
    promptType: "外部ChatGPT相談",
    targetType: state.aiTutorForm.targetType,
    targetTitle: target?.title || "",
    prompt: promptText,
    metadata: {
      questionType: state.aiTutorForm.questionType,
      explanationLevel: state.aiTutorForm.explanationLevel,
      targetId: target?.id || state.aiTutorForm.targetId,
      createdAt: new Date().toISOString()
    }
  };
}

function resolveAiSubject(target) {
  if (state.aiForm.targetType === "レッスン") return getLessonById(state.aiForm.targetId)?.subject || "";
  if (state.aiForm.targetType === "単元") return state.units.find((unit) => unit.id === state.aiForm.targetId)?.subject || "";
  return target?.subject || "";
}

async function postAiApiRequest(payload) {
  throw new Error("v3.0ではアプリ内通信を行いません。相談文をコピーして外部ChatGPTに貼り付けてください。");
}

function buildAiConnectionHint(prefix) {
  if (String(prefix || "").includes("外部API設定は使いません。")) return prefix;
  return [
    prefix,
    "外部API設定は使いません。",
    "v3.0では外部通信を行わないため、相談文をコピーして外部ChatGPTに貼り付けてください。"
  ].join(" ");
}

function inferAiHealthUrl(endpointUrl) {
  try {
    const url = new URL(endpointUrl);
    url.pathname = "/health";
    url.search = "";
    url.hash = "";
    return url.toString();
  } catch (error) {
    return "";
  }
}

async function checkAiWorkerHealth() {
  const result = document.querySelector("#aiConnectionTestResult");
  state.aiSettings.lastStatus = "v3.0でも廃止";
  state.aiSettings.lastError = "";
  if (result) result.textContent = "v3.0ではアプリ内通信を行いません。";
  saveUnits();
  renderSettings();
}

async function sendCurrentAiPromptToApi() {
  const promptText = document.querySelector("#aiPromptResult").value.trim();
  state.aiForm.promptText = promptText;
  if (!promptText) {
    state.aiForm.apiStatus = "未送信";
    state.aiForm.apiError = "コピーする相談文を生成してください。";
    renderAiResponse();
    return;
  }
  state.aiForm.apiStatus = "コピー用";
  state.aiForm.apiError = "v3.0ではアプリ内通信は行いません。コピーして外部ChatGPTに貼り付けてください。";
  renderAiResponse();
  await copyAiPrompt();
}

async function askAiTutor() {
  state.aiTutorForm.userQuestion = document.querySelector("#aiTutorQuestionInput")?.value.trim() || "";
  const { target, promptText } = generateAiTutorPrompt();
  if (!promptText) return;
  state.aiTutorForm.apiStatus = "コピー用";
  state.aiTutorForm.apiError = "v3.0ではアプリ内通信は行いません。コピーして外部ChatGPTに貼り付けてください。";
  saveAiTutorAnalysis({ target, sentViaApi: false });
  renderAiTutorView();
  showToast("相談文を生成しました。");
}

function generateAiSuggestionPrompt() {
  const target = buildAiSuggestionTargetData();
  const promptText = buildAiSuggestionPromptText(target);
  state.aiSuggestionForm.promptText = promptText;
  state.aiSuggestionForm.currentAnalysisId = "";
  state.aiSuggestionForm.apiStatus = "未送信";
  state.aiSuggestionForm.apiResponseText = "";
  state.aiSuggestionForm.apiModel = "";
  state.aiSuggestionForm.apiUsage = {};
  state.aiSuggestionForm.apiError = "";
  state.aiSuggestionForm.sentViaApi = false;
  state.aiSuggestionForm.suggestionParsed = false;
  state.aiSuggestionForm.suggestionObject = null;
  state.aiSuggestionForm.rawSuggestionText = "";
  const promptInput = document.querySelector("#aiSuggestionPromptResult");
  if (promptInput) promptInput.value = promptText;
  renderAiSuggestionResponse();
  return { target, promptText };
}

async function runAiSuggestion() {
  state.aiSuggestionForm.memo = document.querySelector("#aiSuggestionMemo")?.value.trim() || "";
  const { target, promptText } = generateAiSuggestionPrompt();
  if (!promptText) return;
  state.aiSuggestionForm.apiStatus = "コピー用";
  state.aiSuggestionForm.apiError = "v3.0ではアプリ内通信は行いません。コピーして外部ChatGPTに貼り付けてください。";
  saveAiSuggestionAnalysis({ target, sentViaApi: false });
  renderAiSuggestionView();
  showToast("相談文を生成しました。");
}

function buildAiSuggestionApiPayload(mode, promptText, target) {
  return {
    app: "TSUKAN_YOBIKO",
    version: APP_VERSION,
    mode,
    promptType: "AI添削・弱点提案",
    targetType: state.aiSuggestionForm.targetType,
    targetTitle: target?.title || "",
    prompt: promptText,
    metadata: {
      correctionType: state.aiSuggestionForm.suggestionType,
      targetId: target?.id || state.aiSuggestionForm.targetId,
      createdAt: new Date().toISOString()
    }
  };
}

function saveAiSuggestionAnalysis({ target = null, sentViaApi = state.aiSuggestionForm.sentViaApi, error = state.aiSuggestionForm.apiError } = {}) {
  const resolvedTarget = target || buildAiSuggestionTargetData();
  const values = normalizeAiAnalysis({
    id: state.aiSuggestionForm.currentAnalysisId || makeAiAnalysisId(),
    createdAt: new Date().toISOString(),
    promptType: "AI添削・弱点提案",
    correctionType: state.aiSuggestionForm.suggestionType,
    targetType: state.aiSuggestionForm.targetType,
    targetId: resolvedTarget.id,
    targetTitle: resolvedTarget.title,
    promptText: state.aiSuggestionForm.promptText,
    responseText: state.aiSuggestionForm.apiResponseText,
    sentViaApi,
    model: state.aiSuggestionForm.apiModel,
    usage: state.aiSuggestionForm.apiUsage,
    error: error || "",
    resultMemo: "",
    suggestionParsed: state.aiSuggestionForm.suggestionParsed,
    suggestionObject: state.aiSuggestionForm.suggestionObject,
    rawSuggestionText: state.aiSuggestionForm.rawSuggestionText,
    appliedFields: state.aiSuggestionForm.appliedFields
  });
  const existing = state.aiAnalyses.find((item) => item.id === values.id);
  if (existing) Object.assign(existing, values, { appliedAt: existing.appliedAt, appliedFields: existing.appliedFields });
  else state.aiAnalyses.unshift(values);
  state.aiSuggestionForm.currentAnalysisId = values.id;
  return values;
}

function showAiSuggestionAnalysis(analysisId) {
  const item = state.aiAnalyses.find((analysis) => analysis.id === analysisId);
  if (!item) return;
  state.aiSuggestionForm.targetType = item.targetType || "自由入力";
  state.aiSuggestionForm.targetId = item.targetId || "";
  state.aiSuggestionForm.suggestionType = item.correctionType || "総合診断";
  state.aiSuggestionForm.memo = item.resultMemo || "";
  state.aiSuggestionForm.promptText = item.promptText || "";
  state.aiSuggestionForm.currentAnalysisId = item.id;
  state.aiSuggestionForm.apiStatus = item.sentViaApi ? (item.error ? "接続失敗" : "応答取得済み") : "手動";
  state.aiSuggestionForm.apiResponseText = item.responseText || "";
  state.aiSuggestionForm.apiModel = item.model || "";
  state.aiSuggestionForm.apiUsage = item.usage || {};
  state.aiSuggestionForm.apiError = item.error || "";
  state.aiSuggestionForm.sentViaApi = Boolean(item.sentViaApi);
  state.aiSuggestionForm.suggestionParsed = Boolean(item.suggestionParsed);
  state.aiSuggestionForm.suggestionObject = item.suggestionObject || null;
  state.aiSuggestionForm.rawSuggestionText = item.rawSuggestionText || "";
  state.aiSuggestionForm.appliedFields = item.appliedFields || [];
  switchView("ai");
  renderAiView();
  document.querySelector("#aiSuggestionParsedView")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function applyCurrentAiSuggestion() {
  if (!state.aiSuggestionForm.currentAnalysisId) saveAiSuggestionAnalysis();
  const item = state.aiAnalyses.find((analysis) => analysis.id === state.aiSuggestionForm.currentAnalysisId);
  if (!item) return;
  const confirmed = window.confirm("AI提案を学習データに反映します。内容を確認しましたか？");
  if (!confirmed) return;
  const suggestion = state.aiSuggestionForm.suggestionObject || item.suggestionObject || {};
  const applied = collectAiSuggestionApplyFields();
  const targetType = state.aiSuggestionForm.targetType || item.targetType;
  const targetId = state.aiSuggestionForm.targetId || item.targetId;
  if (applied.includes("understanding") || applied.includes("reviewNeeded") || applied.includes("weaknessTags") || applied.includes("nextReview")) {
    applySuggestionToTarget(targetType, targetId, suggestion, applied);
  }
  if (applied.includes("memo")) appendSuggestionMemo(targetType, targetId, suggestion, item.responseText);
  item.suggestionParsed = Boolean(state.aiSuggestionForm.suggestionObject);
  item.suggestionObject = state.aiSuggestionForm.suggestionObject;
  item.rawSuggestionText = state.aiSuggestionForm.rawSuggestionText;
  item.appliedAt = new Date().toISOString();
  item.appliedFields = applied;
  saveUnits();
  render();
  showToast("AI提案を反映しました。");
}

function collectAiSuggestionApplyFields() {
  return [
    document.querySelector("#applySuggestionUnderstanding")?.checked ? "understanding" : "",
    document.querySelector("#applySuggestionReviewNeeded")?.checked ? "reviewNeeded" : "",
    document.querySelector("#applySuggestionWeaknessTags")?.checked ? "weaknessTags" : "",
    document.querySelector("#applySuggestionNextReview")?.checked ? "nextReview" : "",
    document.querySelector("#applySuggestionMemo")?.checked ? "memo" : ""
  ].filter(Boolean);
}

function applySuggestionToTarget(targetType, targetId, suggestion, applied) {
  if (["レッスン確認問題", "レッスン理解度"].includes(targetType)) {
    const lessonId = targetType === "レッスン確認問題" ? String(targetId || "").split(":")[0] : targetId;
    const progress = getLessonProgress(lessonId);
    if (applied.includes("understanding") && CURRICULUM_UNDERSTANDING.includes(suggestion.suggestedUnderstanding)) progress.understanding = suggestion.suggestedUnderstanding;
    if (applied.includes("reviewNeeded") && typeof suggestion.suggestedReviewNeeded === "boolean") progress.reviewNeeded = suggestion.suggestedReviewNeeded;
    if (applied.includes("nextReview")) progress.reviewNeeded = true;
    progress.lastStudiedAt = new Date().toISOString();
    const lesson = getLessonById(lessonId);
    const unit = state.units.find((candidate) => candidate.id === lesson?.relatedUnitId);
    if (unit && applied.includes("weaknessTags")) addWeaknessTagsToUnit(unit, suggestion.suggestedWeaknessTags);
  }
  if (targetType === "模試結果") {
    const result = state.mockExamResults.find((candidate) => candidate.id === targetId);
    if (result) {
      if (applied.includes("reviewNeeded") && typeof suggestion.suggestedReviewNeeded === "boolean") result.reviewNeeded = suggestion.suggestedReviewNeeded;
      if (applied.includes("nextReview")) result.reviewNeeded = true;
      if (applied.includes("weaknessTags")) result.weaknessTags = uniqueStrings([...result.weaknessTags, ...suggestionList(suggestion.suggestedWeaknessTags)]);
    }
  }
}

function appendSuggestionMemo(targetType, targetId, suggestion, responseText) {
  const memo = [
    `[AI提案 ${formatDateTime(new Date().toISOString())}]`,
    `理解度:${suggestion.suggestedUnderstanding || "未提案"} / 復習:${suggestion.suggestedReviewNeeded === true ? "対象" : suggestion.suggestedReviewNeeded === false ? "対象外" : "未提案"}`,
    `弱点:${suggestionList(suggestion.suggestedWeaknessTags).join(" / ") || "未提案"}`,
    `次:${suggestionList(suggestion.suggestedNextLessons).join(" / ") || "未提案"}`,
    truncateText(responseText || "", 240)
  ].join("\n");
  if (targetType === "今日のメニュー") updateTodayPlan((plan) => { plan.memo = [plan.memo, memo].filter(Boolean).join("\n\n"); });
  if (["レッスン確認問題", "レッスン理解度"].includes(targetType)) {
    const lessonId = targetType === "レッスン確認問題" ? String(targetId || "").split(":")[0] : targetId;
    const lesson = getLessonById(lessonId);
    const unit = state.units.find((candidate) => candidate.id === lesson?.relatedUnitId);
    if (unit) unit.ai.analysisMemo = [unit.ai.analysisMemo, memo].filter(Boolean).join("\n\n");
  }
}

function addWeaknessTagsToUnit(unit, tags) {
  unit.ai.weaknessTags = uniqueStrings([...(unit.ai.weaknessTags || []), ...suggestionList(tags)]);
}

function uniqueStrings(values) {
  return [...new Set(normalizeArray(values).map((value) => String(value).trim()).filter(Boolean))];
}

function saveAiTutorAnalysis({ target = null, sentViaApi = state.aiTutorForm.sentViaApi, error = state.aiTutorForm.apiError } = {}) {
  const resolvedTarget = target || buildAiTutorTargetData();
  const values = normalizeAiAnalysis({
    id: state.aiTutorForm.currentAnalysisId || makeAiAnalysisId(),
    createdAt: new Date().toISOString(),
    promptType: "外部ChatGPT相談",
    questionType: state.aiTutorForm.questionType,
    explanationLevel: state.aiTutorForm.explanationLevel,
    targetType: state.aiTutorForm.targetType,
    targetId: resolvedTarget.id,
    targetTitle: resolvedTarget.title,
    promptText: state.aiTutorForm.promptText,
    responseText: state.aiTutorForm.apiResponseText,
    sentViaApi,
    model: state.aiTutorForm.apiModel,
    usage: state.aiTutorForm.apiUsage,
    error: error || "",
    userQuestion: state.aiTutorForm.userQuestion,
    savedAsReviewMemo: false,
    markedAsWeaknessSuggestion: false,
    markedForNextReview: false
  });
  const existing = state.aiAnalyses.find((item) => item.id === values.id);
  if (existing) {
    Object.assign(existing, values, {
      savedAsReviewMemo: existing.savedAsReviewMemo,
      markedAsWeaknessSuggestion: existing.markedAsWeaknessSuggestion,
      markedForNextReview: existing.markedForNextReview
    });
  } else {
    state.aiAnalyses.unshift(values);
  }
  state.aiTutorForm.currentAnalysisId = values.id;
  return values;
}

function saveCurrentAiTutorResponse() {
  if (!state.aiTutorForm.promptText) generateAiTutorPrompt();
  const item = saveAiTutorAnalysis();
  saveUnits();
  render();
  showToast(item.responseText || item.error ? "外部ChatGPT回答メモを保存しました。" : "外部ChatGPT相談文を履歴に保存しました。");
}

function setAiTutorFlag(flag) {
  if (!state.aiTutorForm.currentAnalysisId) saveCurrentAiTutorResponse();
  const item = state.aiAnalyses.find((analysis) => analysis.id === state.aiTutorForm.currentAnalysisId);
  if (!item) return;
  item[flag] = true;
  saveUnits();
  render();
  showToast("外部ChatGPT相談文の履歴に反映しました。");
}

function showAiTutorAnalysis(analysisId) {
  const item = state.aiAnalyses.find((analysis) => analysis.id === analysisId);
  if (!item) return;
  state.aiTutorForm.targetType = item.targetType || "自由質問";
  state.aiTutorForm.targetId = item.targetId || "";
  state.aiTutorForm.questionType = item.questionType || "質問に直接回答";
  state.aiTutorForm.explanationLevel = item.explanationLevel || "標準";
  state.aiTutorForm.userQuestion = item.userQuestion || "";
  state.aiTutorForm.promptText = item.promptText || "";
  state.aiTutorForm.currentAnalysisId = item.id;
  state.aiTutorForm.apiStatus = item.sentViaApi ? (item.error ? "接続失敗" : "応答取得済み") : "手動";
  state.aiTutorForm.apiResponseText = item.responseText || "";
  state.aiTutorForm.apiModel = item.model || "";
  state.aiTutorForm.apiUsage = item.usage || {};
  state.aiTutorForm.apiError = item.error || "";
  state.aiTutorForm.sentViaApi = Boolean(item.sentViaApi);
  switchView("ai");
  renderAiView();
  document.querySelector("#aiTutorResponseText")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function repeatAiTutorAnalysis(analysisId) {
  showAiTutorAnalysis(analysisId);
  state.aiTutorForm.currentAnalysisId = "";
  state.aiTutorForm.apiStatus = "未送信";
  state.aiTutorForm.apiResponseText = "";
  state.aiTutorForm.apiModel = "";
  state.aiTutorForm.apiUsage = {};
  state.aiTutorForm.apiError = "";
  generateAiTutorPrompt();
  document.querySelector("#aiTutorPromptResult")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function cancelAiSend() {
  if (state.aiAbortController) {
    state.aiAbortController.abort();
  }
}

function upsertCurrentAiApiAnalysis(error) {
  const target = buildAiTargetData();
  const existing = state.aiAnalyses.find((analysis) => analysis.id === state.aiForm.currentAnalysisId);
  const values = {
    promptType: state.aiForm.promptType,
    targetType: state.aiForm.targetType,
    targetId: target?.id || state.aiForm.targetId,
    targetTitle: target?.title || "",
    promptText: state.aiForm.promptText,
    responseText: state.aiForm.apiResponseText,
    resultMemo: existing?.resultMemo || "",
    sentViaApi: true,
    model: state.aiForm.apiModel,
    usage: state.aiForm.apiUsage,
    error: error || "",
    createdAt: new Date().toISOString()
  };
  if (existing) {
    Object.assign(existing, values);
  } else {
    const analysis = normalizeAiAnalysis({ id: makeAiAnalysisId(), ...values });
    state.aiAnalyses.unshift(analysis);
    state.aiForm.currentAnalysisId = analysis.id;
  }
}

function saveCurrentAiResponse() {
  if (state.aiForm.apiStatus === "未送信") {
    showToast("コピー後の回答メモだけを保存できます。");
    return;
  }
  if (!state.aiForm.apiResponseText && !state.aiForm.apiError) {
    showToast("保存するAI応答がありません。");
    return;
  }
  upsertCurrentAiApiAnalysis(state.aiForm.apiError);
  saveUnits();
  render();
  showToast("AI応答を履歴に保存しました。");
}

async function testAiConnection() {
  const result = document.querySelector("#aiConnectionTestResult");
  state.aiSettings.lastTestedAt = new Date().toISOString();
  state.aiSettings.lastStatus = "v3.0でも廃止";
  state.aiSettings.lastError = "";
  if (result) result.textContent = "v3.0ではアプリ内通信を行いません。";
  saveUnits();
  renderSettings();
}

function saveAiSettingsFromInputs(showMessage = true) {
  state.aiSettings = normalizeAiSettings(null);
  saveUnits();
  renderSettings();
  renderAiResponse();
  if (showMessage) showToast("外部相談文作成の設定を保存しました。");
}

function prepareAiPromptDraft() {
  const target = buildAiTargetData();
  if (!target) return false;
  const promptText = buildAiPromptText(state.aiForm.promptType, target, state.aiForm.additionalConditions);
  state.aiForm.promptText = promptText;
  state.aiForm.currentAnalysisId = "";
  state.aiForm.apiStatus = "未送信";
  state.aiForm.apiResponseText = "";
  state.aiForm.apiModel = "";
  state.aiForm.apiUsage = {};
  state.aiForm.apiError = "";
  state.aiForm.highlightSend = Boolean(state.aiSettings.enabled);
  return true;
}

function openAiForTarget(targetType, targetId, promptType) {
  state.aiForm.targetType = targetType;
  state.aiForm.targetId = targetId || "";
  state.aiForm.promptType = promptType;
  state.aiForm.promptText = "";
  state.aiForm.currentAnalysisId = "";
  state.aiForm.additionalConditions = state.aiForm.additionalConditions || "";
  prepareAiPromptDraft();
  switchView("ai");
  renderAiView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openAiTutorForTarget(targetType, targetId, questionType, explanationLevel = "標準", userQuestion = "") {
  state.aiTutorForm.targetType = targetType;
  state.aiTutorForm.targetId = targetId || "";
  state.aiTutorForm.questionType = questionType || "質問に直接回答";
  state.aiTutorForm.explanationLevel = explanationLevel;
  state.aiTutorForm.userQuestion = userQuestion;
  state.aiTutorForm.promptText = "";
  state.aiTutorForm.currentAnalysisId = "";
  state.aiTutorForm.apiStatus = "未送信";
  state.aiTutorForm.apiResponseText = "";
  state.aiTutorForm.apiModel = "";
  state.aiTutorForm.apiUsage = {};
  state.aiTutorForm.apiError = "";
  const { target, promptText } = generateAiTutorPrompt();
  state.aiForm.promptType = questionType || "総合学習相談";
  state.aiForm.targetType = targetType === "現在のレッスン" ? "レッスン" : targetType === "模試問題" ? "最新模試結果" : targetType;
  state.aiForm.targetId = target?.id || targetId || "";
  state.aiForm.promptText = promptText;
  state.aiForm.currentAnalysisId = "";
  state.aiForm.apiStatus = "コピー用";
  state.aiForm.apiError = "";
  switchView("ai");
  renderAiView();
  document.querySelector("#aiPromptResult")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
  state.lessonActionMessage = { lessonId, message: "完了しました。保存済みです。" };
  saveUnits();
  render();
}

function markLessonForReview(lessonId) {
  const progress = getLessonProgress(lessonId);
  progress.reviewNeeded = true;
  progress.status = "復習中";
  progress.lastStudiedAt = new Date().toISOString();
  state.lessonActionMessage = { lessonId, message: "復習対象にしました。" };
  saveUnits();
  render();
}

function setLessonUnderstanding(lessonId, understanding) {
  const progress = getLessonProgress(lessonId);
  if (!CURRICULUM_UNDERSTANDING.includes(understanding)) return;
  progress.understanding = understanding;
  progress.reviewNeeded = ["B", "C"].includes(understanding) || progress.reviewNeeded;
  progress.lastStudiedAt = new Date().toISOString();
  saveUnits();
  createAutoSnapshot("lesson_progress_updated");
  renderLessonDetail();
  renderHomeCurriculumSummary();
}

function openAiForLesson(lessonId) {
  openAiTutorForTarget("現在のレッスン", lessonId, "本試験向けに説明", "標準", "このレッスンを本試験で得点できる形で説明してください。");
}

function openAiForMockResult(resultId) {
  const result = state.mockExamResults.find((item) => item.id === resultId);
  const wrong = result?.answers.find((answer) => !answer.correct) || result?.answers[0];
  openAiTutorForTarget("模試問題", wrong ? `${result.id}:${wrong.questionId}` : resultId, "なぜ間違えたか分析", "本試験直前", "この模試結果から、間違えた問題を中心に追加解説してください。");
}

function openAiForWrongLessonQuestion(lessonId, questionId, questionType = "なぜ間違えたか分析", explanationLevel = "標準") {
  const lesson = getLessonById(lessonId);
  const question = lesson?.questions.find((item) => item.id === questionId);
  const result = getLessonQuestionResult(lessonId, questionId);
  if (!lesson || !question || !result) return;
  openAiTutorForTarget("確認問題", `${lessonId}:${questionId}`, questionType, explanationLevel, `自分の回答「${result.userAnswer}」がなぜ誤りか、本試験で同じミスを防ぐ観点で教えてください。`);
}

function openAiForAnalysisConsult() {
  const tag = buildWeaknessRanking()[0]?.tag || "";
  openAiTutorForTarget(tag ? "弱点タグ" : "今日のメニュー", tag || "today", "30分復習メニューを作る", "標準", "現在の弱点分析をもとに、優先順位付きの復習メニューを作ってください。");
}

function openAiForTodayConsult() {
  openAiTutorForTarget("今日のメニュー", "today", "30分復習メニューを作る", "標準", "今日のメニューの優先順位を見直して、30分でやる順番を提案してください。");
}

function openAiSuggestionForTarget(targetType, targetId = "", suggestionType = "総合診断", memo = "") {
  state.aiSuggestionForm.targetType = targetType;
  state.aiSuggestionForm.targetId = targetId || "";
  state.aiSuggestionForm.suggestionType = suggestionType;
  state.aiSuggestionForm.memo = memo;
  state.aiSuggestionForm.promptText = "";
  state.aiSuggestionForm.currentAnalysisId = "";
  state.aiSuggestionForm.apiStatus = "未送信";
  state.aiSuggestionForm.apiResponseText = "";
  state.aiSuggestionForm.apiModel = "";
  state.aiSuggestionForm.apiUsage = {};
  state.aiSuggestionForm.apiError = "";
  state.aiSuggestionForm.suggestionParsed = false;
  state.aiSuggestionForm.suggestionObject = null;
  state.aiSuggestionForm.rawSuggestionText = "";
  const { target, promptText } = generateAiSuggestionPrompt();
  state.aiForm.promptType = suggestionType || "総合学習相談";
  state.aiForm.targetType = targetType;
  state.aiForm.targetId = target?.id || targetId || "";
  state.aiForm.promptText = promptText;
  state.aiForm.currentAnalysisId = "";
  state.aiForm.apiStatus = "コピー用";
  state.aiForm.apiError = "";
  switchView("ai");
  renderAiView();
  document.querySelector("#aiPromptResult")?.scrollIntoView({ behavior: "smooth", block: "start" });
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

async function copyAiTutorPrompt() {
  if (!state.aiTutorForm.promptText) generateAiTutorPrompt();
  const textarea = document.querySelector("#aiTutorPromptResult");
  const text = textarea.value || state.aiTutorForm.promptText;
  if (!text.trim()) {
    showToast("コピーする外部ChatGPT相談文がありません。");
    return;
  }
  try {
    if (!navigator.clipboard?.writeText) throw new Error("clipboard unavailable");
    await navigator.clipboard.writeText(text);
    saveAiTutorAnalysis({ sentViaApi: false });
    saveUnits();
    renderAiTutorHistory();
    showToast("外部ChatGPT相談文をコピーしました。");
  } catch (error) {
    textarea.focus();
    textarea.select();
    showToast("コピーできませんでした。選択中の本文を手動でコピーしてください。");
  }
}

async function copyAiSuggestionPrompt() {
  if (!state.aiSuggestionForm.promptText) generateAiSuggestionPrompt();
  const textarea = document.querySelector("#aiSuggestionPromptResult");
  const text = textarea.value || state.aiSuggestionForm.promptText;
  if (!text.trim()) {
    showToast("コピーするAI添削プロンプトがありません。");
    return;
  }
  try {
    if (!navigator.clipboard?.writeText) throw new Error("clipboard unavailable");
    await navigator.clipboard.writeText(text);
    saveAiSuggestionAnalysis({ sentViaApi: false });
    saveUnits();
    renderAiSuggestionHistory();
    showToast("AI添削プロンプトをコピーしました。");
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
  const cLessons = getReviewLessons().filter(({ progress }) => progress.understanding === "C").length;
  const drillWrong = state.drillResults.reduce((sum, result) => sum + (result.answers || []).filter((answer) => !answer.correct).length, 0);
  const mockWrong = state.mockExamResults.reduce((sum, result) => sum + (result.answers || []).filter((answer) => !answer.correct).length, 0);
  const dangerousTags = buildWeaknessTagStats().filter((item) => ["最優先", "危険"].includes(item.risk.label)).slice(0, 3).map((item) => item.tag);
  const summaryHost = document.querySelector("#reviewSummary");
  if (summaryHost) {
    summaryHost.innerHTML = [
      ["最優先復習", units.filter((unit) => getReviewStatus(unit).label === "最優先復習").length],
      ["C判定レッスン", cLessons],
      ["ドリル誤答", drillWrong],
      ["模試誤答", mockWrong],
      ["危険な弱点タグ", dangerousTags.join(" / ") || "データ不足"]
    ].map(([label, value]) => `<div class="stat-card"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("");
  }
  document.querySelector("#reviewResultCount").textContent = `表示中：${units.length} / ${state.units.length}単元`;
  document.querySelector("#reviewCards").innerHTML = units.length
    ? units.map((unit) => reviewCard(unit)).join("")
    : `<div class="panel empty-state"><p class="muted">条件に合う復習単元はありません。</p></div>`;
  renderReviewMockCards();
  renderCrossReviewList("#reviewCrossCards", 12);
  const lessons = getReviewLessons();
  document.querySelector("#reviewLessonCards").innerHTML = lessons.length
    ? lessons.map(({ lesson, progress, reason }) => {
      const correct = lesson.questions.filter((question) => progress.questionResults.some((result) => result.questionId === question.id && result.correct)).length;
      return `
      <article class="lesson-card">
        <div>
          <p class="eyebrow">${escapeHtml(lesson.subject)}</p>
          <h4>${escapeHtml(lesson.title)}</h4>
          <dl class="review-facts compact">
            <div><dt>理解度</dt><dd>${escapeHtml(progress.understanding)}</dd></div>
            <div><dt>状態</dt><dd>${escapeHtml(progress.status)}</dd></div>
            <div><dt>正答数</dt><dd>${correct}/${lesson.questions.length}</dd></div>
            <div><dt>最終学習日</dt><dd>${escapeHtml(progress.lastStudiedAt ? formatDateTime(progress.lastStudiedAt) : "未学習")}</dd></div>
            <div><dt>復習理由</dt><dd>${escapeHtml(reason)}</dd></div>
          </dl>
        </div>
        <div class="card-actions">
          <button class="primary-button" type="button" data-open-lesson="${escapeAttribute(lesson.id)}">開く</button>
        </div>
      </article>
    `;
    }).join("")
    : `<div class="empty-state"><p class="muted">復習対象レッスンはありません。</p></div>`;
  document.querySelector("#reviewLessonCards").insertAdjacentHTML("beforeend", renderDrillReviewCards());
  document.querySelector("#reviewLessonCards").insertAdjacentHTML("beforeend", renderWeaknessReviewCards());
}

function renderDrillReviewCards() {
  const wrongMap = new Map();
  state.drillResults
    .filter((result) => ["通関業法", "関税法等", "通関実務"].includes(result.subject))
    .forEach((result) => {
      (result.answers || []).filter((answer) => !answer.correct).forEach((answer) => {
        const question = QUESTION_BANK.find((item) => item.id === answer.questionId);
        if (!question) return;
        const current = wrongMap.get(question.id) || { question, count: 0, latest: "", reasons: new Set() };
        current.count += 1;
        current.latest = result.completedAt || current.latest;
        current.reasons.add(question.subject === "通関実務" ? getJitsumuReviewReason(question) : question.subject === "関税法等" ? `${question.topic}で誤答` : `${question.subject}ドリルで誤答`);
        wrongMap.set(question.id, current);
      });
    });
  const items = [...wrongMap.values()].sort((a, b) => b.count - a.count || (b.latest || "").localeCompare(a.latest || "")).slice(0, 12);
  if (!items.length) return "";
  return `
    <section class="panel">
      <div class="panel-heading"><h3>ドリル誤答復習</h3></div>
      ${items.map(({ question, count, reasons }) => `
        <article class="lesson-card">
          <div>
            <p class="eyebrow">${escapeHtml(question.subject)} / ${escapeHtml(question.topic)} / ${escapeHtml(question.weaknessTag)}</p>
            <h4>${escapeHtml(question.question)}</h4>
            <dl class="review-facts compact">
              <div><dt>論点</dt><dd>${escapeHtml(question.topic)}</dd></div>
              <div><dt>弱点タグ</dt><dd>${escapeHtml(question.weaknessTag)}</dd></div>
              <div><dt>間違えた回数</dt><dd>${count}回</dd></div>
              <div><dt>復習理由</dt><dd>${escapeHtml([...reasons].join(" / ") || `${question.subject}ドリルで誤答`)}</dd></div>
            </dl>
          </div>
          <div class="card-actions">
            <button class="primary-button" type="button" data-start-drill-mode="${escapeAttribute(getReviewDrillModeForQuestion(question))}">解き直す</button>
            <button class="ghost-button" type="button" data-open-lesson="${escapeAttribute(question.lessonId)}">関連レッスン</button>
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

function renderWeaknessReviewCards() {
  const targets = getRecommendedWeaknessDrills()
    .filter((item) => ["最優先", "危険", "注意", "未実施"].includes(item.risk.label))
    .slice(0, 8);
  if (!targets.length) return "";
  return `
    <section class="panel">
      <div class="panel-heading"><h3>弱点別復習</h3></div>
      ${targets.map((item) => `
        <article class="lesson-card">
          <div>
            <p class="eyebrow">${item.type === "group" ? "弱点グループ" : "弱点タグ"}</p>
            <h4>${escapeHtml(item.name)}</h4>
            <dl class="review-facts compact">
              <div><dt>危険度</dt><dd><span class="badge ${item.risk.className}">${escapeHtml(item.risk.label)}</span></dd></div>
              <div><dt>正答率</dt><dd>${item.stats.total ? `${item.stats.rate}%` : "未実施"}</dd></div>
              <div><dt>誤答数</dt><dd>${item.stats.wrong}</dd></div>
              <div><dt>おすすめ理由</dt><dd>${escapeHtml(item.reason)}</dd></div>
            </dl>
          </div>
          <div class="card-actions">
            <button class="primary-button" type="button" data-start-weakness-drill="${escapeAttribute(item.name)}" data-weakness-type="${escapeAttribute(item.type)}" data-weakness-count="${item.questionCount >= 10 ? "10" : "5"}">弱点別ドリル開始</button>
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

function getJitsumuReviewReason(question) {
  if (/インボイス/.test(question.weaknessTag)) return "インボイス読取で誤答";
  if (/課税価格|加算要素|不算入要素/.test(question.weaknessTag)) return "課税価格で誤答";
  if (/関税額|消費税|地方消費税|端数/.test(question.weaknessTag) || question.questionType === "calculationCheck") return "計算過程で誤答";
  if (/品目分類|税番|統計品目番号/.test(question.weaknessTag)) return "品目分類で誤答";
  if (/資料読取/.test(question.weaknessTag) || question.questionType === "documentRead") return "資料読取で誤答";
  return "通関実務ドリルで誤答";
}

function getReviewDrillModeForQuestion(question) {
  if (question.subject === "関税法等") return "関税法等10問";
  if (question.subject !== "通関実務") return "弱点タグ別ドリル";
  if (question.questionType === "processChoice") return "手順ドリル";
  if (question.questionType === "calculationCheck") return "計算過程ドリル";
  if (question.questionType === "documentRead") return "資料読取ドリル";
  if (/インボイス/.test(question.weaknessTag)) return "インボイス読取ドリル";
  if (/品目分類|税番/.test(question.weaknessTag)) return "品目分類ドリル";
  if (/課税価格|加算要素|不算入/.test(question.weaknessTag)) return "通関実務課税価格ドリル";
  return "通関実務10問";
}

function renderReviewMockCards() {
  const host = document.querySelector("#reviewMockCards");
  if (!host) return;
  const targets = state.mockExamResults
    .filter((result) => result.reviewNeeded || ["B", "C"].includes(result.resultLevel) || result.answers.some((answer) => !answer.correct))
    .sort((a, b) => (b.completedAt || "").localeCompare(a.completedAt || ""))
    .slice(0, 10);
  host.innerHTML = targets.length ? targets.map((result) => {
    const weakSubjects = Object.entries(result.subjectSummary || {})
      .filter(([, summary]) => summary.total && summary.rate < 80)
      .map(([subject]) => `${subject}で失点`);
    const reasons = [
      result.resultLevel === "C" ? "総合模試C判定" : "",
      result.resultLevel === "B" ? "B判定以下の模試" : "",
      ...weakSubjects,
      ...result.weaknessTags.slice(0, 3).map((tag) => `${tag}タグで誤答`)
    ].filter(Boolean);
    return `
      <article class="lesson-card">
        <div>
          <p class="eyebrow">${escapeHtml(formatDateTime(result.completedAt))}</p>
          <h4>${escapeHtml(result.title)}</h4>
          <dl class="review-facts compact">
            <div><dt>結果</dt><dd>${result.correctCount}/${result.totalQuestions} / ${result.scoreRate}% / ${escapeHtml(result.resultLevel)}</dd></div>
            <div><dt>復習理由</dt><dd>${escapeHtml(reasons.join(" / ") || "模試誤答の確認")}</dd></div>
            <div><dt>弱点タグ</dt><dd>${escapeHtml(result.weaknessTags.join(" / ") || "なし")}</dd></div>
          </dl>
        </div>
        <div class="card-actions">
          <button class="primary-button" type="button" data-review-mock-wrong="${escapeAttribute(result.id)}">復習開始</button>
          <button class="ghost-button" type="button" data-show-mock-result="${escapeAttribute(result.id)}">詳細</button>
          <button class="ghost-button" type="button" data-ai-mock-result="${escapeAttribute(result.id)}">相談文</button>
        </div>
      </article>
    `;
  }).join("") : `<div class="empty-state"><p class="muted">模試由来の復習対象はまだありません。</p></div>`;
}

function filteredReviewUnits() {
  return [...state.units]
    .filter((unit) => {
      const review = getReviewStatus(unit).label;
      const hasWeakness = getWeaknessCount(unit) > 0;
      const reviewFilter = state.reviewFilters.review;
      return (
        (state.reviewFilters.subject === "すべて" || unit.subject === state.reviewFilters.subject) &&
        (reviewFilter === "すべて" || review === reviewFilter ||
          (reviewFilter === "C判定" && unit.level === "C") ||
          (reviewFilter === "弱点" && hasWeakness) ||
          (["レッスン", "ドリル", "模試"].includes(reviewFilter) && review !== "復習不要")) &&
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
    document.querySelector(".detail-header").insertAdjacentHTML("beforeend", `<button id="detailAiButton" class="ghost-button" type="button" data-ai-unit="${escapeAttribute(unit.id)}">外部ChatGPT相談文を作る</button>`);
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
  state.lessonActionMessage = { lessonId: "", message: "" };
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
  if (view === "drill") {
    renderDrillView();
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
  const summary = getBackupSummary(makeBackupData());
  const storageUsage = getLocalStorageUsage();
  const last = getLastUpdatedUnit();
  document.querySelector("#storageStatus").textContent = `${state.units.length}単元・${CURRICULUM_LESSONS.length}レッスン・模試${state.mockExamResults.length}件 / 約${storageUsage.sizeKb}KBをlocalStorageに保存`;
  const warningHost = document.querySelector("#storageWarning");
  if (warningHost) {
    warningHost.textContent = state.storageWarnings.length
      ? "一部の保存データを読み込めませんでした。バックアップから復元するか、設定画面で確認してください。"
      : "";
  }
  document.querySelector("#storageSummaryDetails").innerHTML = `
    <div><dt>保存中の単元数</dt><dd>${state.units.length}単元</dd></div>
    <div><dt>保存中の演習ログ数</dt><dd>${state.practiceLogs.length}件</dd></div>
    <div><dt>保存中の過去問ログ数</dt><dd>${state.pastExamLogs.length}件</dd></div>
    <div><dt>保存中の実務ログ数</dt><dd>${state.practicalLogs.length}件</dd></div>
    <div><dt>保存中の模試結果数</dt><dd>${state.mockExamResults.length}件</dd></div>
    <div><dt>保存中のドリル結果数</dt><dd>${state.drillResults.length}件</dd></div>
    <div><dt>保存中の相談文履歴数</dt><dd>${state.aiAnalyses.length}件</dd></div>
    <div><dt>保存中の追加教材数</dt><dd>${state.lessonOverrides.length}件</dd></div>
    <div><dt>保存中のインポート済み過去問数</dt><dd>${state.importedPastExamQuestions.length}件</dd></div>
    <div><dt>保存中の過去問マッピング数</dt><dd>${state.pastExamMappings.length}件</dd></div>
    <div><dt>保存中の学習メニュー数</dt><dd>${state.studyPlans.length}件</dd></div>
    <div><dt>保存中のレッスン進捗数</dt><dd>${state.curriculumProgress.length}件</dd></div>
    <div><dt>最終更新単元</dt><dd>${escapeHtml(last?.title || "未保存")}</dd></div>
    <div><dt>最終更新日</dt><dd>${escapeHtml(last?.updatedAt || "未保存")}</dd></div>
    <div><dt>最終バックアップ日時</dt><dd>${escapeHtml(localStorage.getItem(STORAGE_KEYS.lastBackupAt) ? formatDateTime(localStorage.getItem(STORAGE_KEYS.lastBackupAt)) : "まだバックアップがありません")}</dd></div>
    <div><dt>バックアップ推奨</dt><dd>${escapeHtml(getBackupRecommendation())}</dd></div>
    <div><dt>バージョン</dt><dd>${APP_VERSION}</dd></div>
  `;
  document.querySelector("#backupSummaryDetails").innerHTML = renderSummaryDetails(summary);
  const pastExamDataHost = document.querySelector("#pastExamDataStatusDetails");
  if (pastExamDataHost) {
    const mappingStats = getPastMappingStats();
    pastExamDataHost.innerHTML = `
      <div><dt>インポート済み過去問数</dt><dd>${mappingStats.total}問</dd></div>
      <div><dt>マッピング済み数</dt><dd>${mappingStats.mapped}問</dd></div>
      <div><dt>A+B率</dt><dd>${escapeHtml(mappingStats.abRate)}</dd></div>
      <div><dt>C+D率</dt><dd>${escapeHtml(mappingStats.cdRate)}</dd></div>
      <div><dt>不足教材件数</dt><dd>${mappingStats.missingCount}件</dd></div>
      <div><dt>状態</dt><dd>${mappingStats.total ? "過去問マッピングを利用できます" : "まだ過去問は取り込まれていません"}</dd></div>
    `;
  }
  document.querySelector("#storageDetails").innerHTML = `
    <div><dt>保存データ概算サイズ</dt><dd>約${storageUsage.sizeKb}KB</dd></div>
    <div><dt>localStorageキー数</dt><dd>${storageUsage.keys.length}件</dd></div>
    <div><dt>主なデータ件数</dt><dd>進捗${summary.curriculumProgressCount} / ドリル${summary.drillResultsCount} / 模試${summary.mockExamResultsCount}</dd></div>
    <div><dt>キー一覧</dt><dd>${escapeHtml(storageUsage.keys.join(" / ") || "なし")}</dd></div>
  `;
  renderSnapshotStatus();
  renderDataStatus();
  if (!saved) saveUnits();
}

function statusLabel(ok) {
  return ok ? "OK" : "NG";
}

function renderDataStatus() {
  const host = document.querySelector("#dataStatusDetails");
  if (!host) return;
  host.innerHTML = `
    <div><dt>レッスンデータ読み込み</dt><dd>${statusLabel(DATA_FILE_STATUS.lessons)}</dd></div>
    <div><dt>問題バンク読み込み</dt><dd>${statusLabel(DATA_FILE_STATUS.questionBank)}</dd></div>
    <div><dt>模試定義読み込み</dt><dd>${statusLabel(DATA_FILE_STATUS.mockExams)}</dd></div>
    <div><dt>弱点グループ読み込み</dt><dd>${statusLabel(DATA_FILE_STATUS.weaknessGroups)}</dd></div>
    <div><dt>レッスン数</dt><dd>${CURRICULUM_LESSONS.length}件</dd></div>
    <div><dt>問題数</dt><dd>${QUESTION_BANK.length}問</dd></div>
    <div><dt>模試問題数</dt><dd>${MOCK_EXAM_QUESTIONS.length}問</dd></div>
    <div><dt>弱点グループ数</dt><dd>${WEAKNESS_GROUPS.length}件</dd></div>
    <div><dt>インポート済み過去問数</dt><dd>${state.importedPastExamQuestions.length}問</dd></div>
    <div><dt>過去問マッピング数</dt><dd>${state.pastExamMappings.length}件</dd></div>
    <div><dt>現在のバージョン</dt><dd>${APP_VERSION}</dd></div>
  `;
}

function duplicateCount(values) {
  const seen = new Set();
  const duplicates = new Set();
  values.filter(Boolean).forEach((value) => {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  });
  return duplicates.size;
}

function validateDataIntegrity() {
  const lessonIds = new Set(CURRICULUM_LESSONS.map((lesson) => lesson.id).filter(Boolean));
  const bankQuestionIds = new Set(QUESTION_BANK.map((question) => question.id).filter(Boolean));
  const allQuestionIds = new Set([...QUESTION_BANK, ...MOCK_EXAM_QUESTIONS].map((question) => question.id).filter(Boolean));
  const lessonQuestionIds = CURRICULUM_LESSONS.flatMap((lesson) => (lesson.questions || []).map((question) => `${lesson.id}:${question.id}`));
  const questionIds = [
    ...QUESTION_BANK.map((question) => question.id),
    ...MOCK_EXAM_QUESTIONS.map((question) => question.id),
    ...lessonQuestionIds
  ];
  const bankAndMockQuestions = [...QUESTION_BANK, ...MOCK_EXAM_QUESTIONS];
  const unknownLessonIdCount = bankAndMockQuestions.filter((question) => {
    const lessonId = question.lessonId || question.relatedLessonId;
    return lessonId && !lessonIds.has(lessonId);
  }).length;
  const missingWeaknessTagCount = bankAndMockQuestions.filter((question) => !String(question.weaknessTag || "").trim()).length;
  const missingSubjectCount = bankAndMockQuestions.filter((question) => !String(question.subject || "").trim()).length;
  const invalidChoicesCount = bankAndMockQuestions.filter((question) => !Array.isArray(question.choices) || question.choices.length === 0).length;
  const missingAnswerCount = bankAndMockQuestions.filter((question) => !String(question.answer || "").trim()).length;
  const mockModeIds = Object.values(MOCK_EXAM_MODES).map((mode) => mode.id).filter(Boolean);
  const unknownDrillQuestionIds = state.drillResults.flatMap((result) => normalizeArray(result.answers).map((answer) => answer.questionId)).filter((id) => id && !bankQuestionIds.has(id));
  const unknownMockQuestionIds = state.mockExamResults.flatMap((result) => normalizeArray(result.answers).map((answer) => answer.questionId)).filter((id) => id && !allQuestionIds.has(id));
  const unknownProgressLessonIds = state.curriculumProgress.map((item) => item.lessonId).filter((id) => id && !lessonIds.has(id));
  const unknownOverrideLessonIds = state.lessonOverrides.map((item) => item.lessonId).filter((id) => id && !lessonIds.has(id));
  const missingDisplayFields = bankAndMockQuestions.filter((question) => !question.id || !question.question || !question.subject).slice(0, 10);
  const importedQuestionIds = new Set(state.importedPastExamQuestions.map((question) => question.id).filter(Boolean));
  const unknownPastMappingQuestionIds = state.pastExamMappings.map((mapping) => mapping.pastQuestionId).filter((id) => id && !importedQuestionIds.has(id));
  const unknownPastMappedLessonIds = state.pastExamMappings.flatMap((mapping) => mapping.mappedLessonIds || []).filter((id) => id && !lessonIds.has(id));
  const unknownPastMappedQuestionIds = state.pastExamMappings.flatMap((mapping) => mapping.mappedQuestionIds || []).filter((id) => id && !bankQuestionIds.has(id));
  const invalidPastCoverageLevels = state.pastExamMappings.filter((mapping) => !["A", "B", "C", "D", "未判定"].includes(mapping.coverageLevel));
  const missingPastQuestionSubjectCount = state.importedPastExamQuestions.filter((question) => !String(question.subject || "").trim()).length;
  const missingPastQuestionTextCount = state.importedPastExamQuestions.filter((question) => !String(question.questionText || "").trim()).length;
  return {
    dataFilesOk: Object.values(DATA_FILE_STATUS).every(Boolean),
    lessonCount: CURRICULUM_LESSONS.length,
    questionCount: QUESTION_BANK.length,
    mockQuestionCount: MOCK_EXAM_QUESTIONS.length,
    duplicateLessonIds: duplicateCount(CURRICULUM_LESSONS.map((lesson) => lesson.id)),
    duplicateQuestionIds: duplicateCount(questionIds),
    duplicateMockModeIds: duplicateCount(mockModeIds),
    unknownLessonIdCount,
    missingWeaknessTagCount,
    missingSubjectCount,
    invalidChoicesCount,
    missingAnswerCount,
    unknownDrillQuestionIds,
    unknownMockQuestionIds,
    unknownProgressLessonIds,
    unknownOverrideLessonIds,
    missingDisplayFields,
    duplicateImportedPastQuestionIds: duplicateCount(state.importedPastExamQuestions.map((question) => question.id)),
    unknownPastMappingQuestionIds,
    unknownPastMappedLessonIds,
    unknownPastMappedQuestionIds,
    invalidPastCoverageLevels,
    missingPastQuestionSubjectCount,
    missingPastQuestionTextCount
  };
}

function renderDataIntegrityResult() {
  const result = validateDataIntegrity();
  const host = document.querySelector("#dataIntegrityResult");
  if (!host) return;
  const warnings = [
    ["教材データ読み込みNG", result.dataFilesOk ? 0 : 1, "data/*.jsの読み込み順とファイル配置を確認してください。"],
    ["レッスンID重複", result.duplicateLessonIds, "data/lessons.jsのid重複を確認してください。"],
    ["問題ID重複", result.duplicateQuestionIds, "問題IDはドリル・模試・レッスン内で一意にしてください。"],
    ["question.lessonId不明", result.unknownLessonIdCount, "QUESTION_BANKのlessonIdがLESSONSに存在するか確認してください。"],
    ["drillResults内の不明questionId", result.unknownDrillQuestionIds.length, result.unknownDrillQuestionIds.slice(0, 5).join(" / ") || "保存済みドリル結果を確認してください。"],
    ["mockExamResults内の不明questionId", result.unknownMockQuestionIds.length, result.unknownMockQuestionIds.slice(0, 5).join(" / ") || "保存済み模試結果を確認してください。"],
    ["curriculumProgress内の不明lessonId", result.unknownProgressLessonIds.length, result.unknownProgressLessonIds.slice(0, 5).join(" / ") || "保存済み進捗を確認してください。"],
    ["lessonOverrides内の不明lessonId", result.unknownOverrideLessonIds.length, result.unknownOverrideLessonIds.slice(0, 5).join(" / ") || "追加教材の対象レッスンを確認してください。"],
    ["表示欠損候補", result.missingDisplayFields.length + result.invalidChoicesCount + result.missingAnswerCount + result.missingSubjectCount, "id/question/subject/choices/answerの欠損を確認してください。"],
    ["importedPastExamQuestionsのid重複", result.duplicateImportedPastQuestionIds, "インポート済み過去問のidを確認してください。"],
    ["pastExamMappings内の不明pastQuestionId", result.unknownPastMappingQuestionIds.length, result.unknownPastMappingQuestionIds.slice(0, 5).join(" / ") || "過去問マッピングを確認してください。"],
    ["pastExamMappings内の不明lessonId", result.unknownPastMappedLessonIds.length, result.unknownPastMappedLessonIds.slice(0, 5).join(" / ") || "対応レッスンIDを確認してください。"],
    ["pastExamMappings内の不明questionId", result.unknownPastMappedQuestionIds.length, result.unknownPastMappedQuestionIds.slice(0, 5).join(" / ") || "対応問題IDを確認してください。"],
    ["pastExamMappingsのcoverageLevel不正", result.invalidPastCoverageLevels.length, "A/B/C/D/未判定のいずれかにしてください。"],
    ["インポート過去問のsubject欠損", result.missingPastQuestionSubjectCount, "過去問JSONのsubjectを確認してください。"],
    ["インポート過去問のquestionText欠損", result.missingPastQuestionTextCount, "過去問JSONのquestionTextを確認してください。"]
  ].filter((item) => item[1] > 0);
  const warningCount = warnings.reduce((sum, item) => sum + item[1], 0);
  const verdict = warningCount === 0
    ? ["OK", "大きな問題は見つかりません"]
    : warnings.some(([label]) => /重複|不明|不正|読み込みNG/.test(label))
    ? ["警告", "データ不整合があります"]
    : ["注意", "一部の紐づけに確認が必要です"];
  const lessonIssueCount = result.duplicateLessonIds + result.unknownProgressLessonIds.length + result.unknownOverrideLessonIds.length;
  const questionIssueCount = result.duplicateQuestionIds + result.unknownLessonIdCount + result.unknownDrillQuestionIds.length + result.unknownMockQuestionIds.length + result.missingDisplayFields.length + result.invalidChoicesCount + result.missingAnswerCount + result.missingSubjectCount;
  const pastMappingIssueCount = result.duplicateImportedPastQuestionIds + result.unknownPastMappingQuestionIds.length + result.unknownPastMappedLessonIds.length + result.unknownPastMappedQuestionIds.length + result.invalidPastCoverageLevels.length + result.missingPastQuestionSubjectCount + result.missingPastQuestionTextCount;
  host.innerHTML = `
    <dl class="summary-list">
      <div><dt>総合判定</dt><dd><strong>${escapeHtml(verdict[0])}</strong>：${escapeHtml(verdict[1])}</dd></div>
      <div><dt>レッスンIDチェック</dt><dd>${lessonIssueCount ? `${lessonIssueCount}件確認` : "OK"}</dd></div>
      <div><dt>問題IDチェック</dt><dd>${questionIssueCount ? `${questionIssueCount}件確認` : "OK"}</dd></div>
      <div><dt>過去問マッピングチェック</dt><dd>${pastMappingIssueCount ? `${pastMappingIssueCount}件確認` : "OK"}</dd></div>
      <div><dt>localStorageチェック</dt><dd>${state.storageWarnings.length ? `${state.storageWarnings.length}件確認` : "OK"}</dd></div>
      <div><dt>警告件数</dt><dd>${warningCount}件</dd></div>
    </dl>
    <div class="analysis-card">
      <h4>詳細</h4>
      ${warnings.length
        ? `<ul class="note-list compact">${warnings.map(([label, count, hint]) => `<li>${escapeHtml(label)}：${count}件。${escapeHtml(hint)}</li>`).join("")}</ul>`
        : `<p class="muted">レッスン数 ${result.lessonCount} / 問題バンク ${result.questionCount}問 / 模試問題 ${result.mockQuestionCount}問。データ整合性に大きな問題は見つかりませんでした。</p>`}
    </div>
  `;
}

function getLastUpdatedUnit() {
  return [...state.units].filter((unit) => unit.updatedAt).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))[0];
}

function makeBackupData() {
  return {
    units: state.units,
    practiceLogs: state.practiceLogs,
    pastExamLogs: state.pastExamLogs,
    practicalLogs: state.practicalLogs,
    aiAnalyses: state.aiAnalyses,
    studyPlans: state.studyPlans,
    curriculumProgress: state.curriculumProgress,
    mockExamResults: state.mockExamResults,
    lessonOverrides: state.lessonOverrides,
    drillResults: state.drillResults,
    userSettings: state.userSettings,
    pastExamMappings: state.pastExamMappings,
    importedPastExamQuestions: state.importedPastExamQuestions
  };
}

function makeBackupPayload() {
  return {
    appName: APP_NAME,
    appVersion: APP_VERSION,
    exportedAt: new Date().toISOString(),
    schemaVersion: BACKUP_SCHEMA_VERSION,
    data: makeBackupData()
  };
}

function exportBackup() {
  const payload = makeBackupPayload();
  const json = JSON.stringify(payload, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `tsukan-yobiko-backup-${APP_VERSION}-${backupTimestamp()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  localStorage.setItem(STORAGE_KEYS.lastBackupAt, payload.exportedAt);
  const message = document.querySelector("#backupMessage");
  if (message) message.textContent = "バックアップを作成しました。ファイルを安全な場所に保存してください。";
  renderSettings();
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
      const parsed = safeJsonParse(String(reader.result || ""), undefined, "復元JSON");
      if (parsed === undefined) throw new SyntaxError("JSONとして読み込めません。");
      const normalized = normalizeBackupPayload(parsed);
      state.pendingRestore = normalized;
      renderRestorePreview(normalized);
      message.textContent = "復元プレビューを確認してください。まだ上書きしていません。";
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

function normalizeBackupPayload(value) {
  if (!value || typeof value !== "object") {
    throw new Error("想定外の形式のため復元できません。");
  }
  const appName = value.appName || value.app || "";
  if (appName && appName !== APP_NAME && appName !== "TSUKAN YOBIKO") {
    throw new Error("TSUKAN YOBIKOのバックアップではありません。");
  }
  const hasDataWrapper = value.data && typeof value.data === "object";
  const hasLegacyData = ["units", "practiceLogs", "pastExamLogs", "practicalLogs", "curriculumProgress", "mockExamResults", "drillResults"].some((key) => Object.prototype.hasOwnProperty.call(value, key));
  if (!hasDataWrapper && !hasLegacyData) {
    throw new Error("dataが存在しないため復元できません。");
  }
  const rawData = hasDataWrapper ? value.data : value;
  const data = {
    units: normalizeArray(rawData.units).map(normalizeUnit),
    practiceLogs: normalizeArray(rawData.practiceLogs).map(normalizePracticeLog),
    pastExamLogs: normalizeArray(rawData.pastExamLogs).map(normalizePastExamLog),
    practicalLogs: normalizeArray(rawData.practicalLogs).map(normalizePracticalLog),
    aiAnalyses: normalizeArray(rawData.aiAnalyses).map(normalizeAiAnalysis),
    studyPlans: normalizeArray(rawData.studyPlans).map(normalizeStudyPlan),
    curriculumProgress: normalizeArray(rawData.curriculumProgress).map(normalizeCurriculumProgress),
    mockExamResults: normalizeArray(rawData.mockExamResults).map(normalizeMockExamResult),
    lessonOverrides: normalizeArray(rawData.lessonOverrides).map(normalizeLessonOverride),
    drillResults: normalizeArray(rawData.drillResults).map(normalizeDrillResult),
    userSettings: normalizePlainObject(rawData.userSettings),
    pastExamMappings: normalizeArray(rawData.pastExamMappings).map(normalizePastExamMapping),
    importedPastExamQuestions: normalizeArray(rawData.importedPastExamQuestions).map(normalizeImportedPastExamQuestion)
  };
  if (!Array.isArray(data.units)) {
    throw new Error("unitsが配列ではないため復元できません。");
  }
  const schemaVersion = Number(value.schemaVersion || 1);
  return {
    appName: appName || APP_NAME,
    appVersion: value.appVersion || value.version || "不明",
    exportedAt: value.exportedAt || "",
    schemaVersion: Number.isFinite(schemaVersion) ? schemaVersion : 1,
    data,
    summary: getBackupSummary(data)
  };
}

function renderRestorePreview(backup) {
  const host = document.querySelector("#restorePreview");
  const executeButton = document.querySelector("#executeRestoreButton");
  if (!host) return;
  host.innerHTML = `
    <div class="inline-warning">現在の学習データが復元データで上書きされます。必要であれば先にバックアップを作成してください。</div>
    <dl class="info-list compact">
      <div><dt>バックアップ作成日時</dt><dd>${escapeHtml(formatDateTime(backup.exportedAt))}</dd></div>
      <div><dt>バックアップアプリバージョン</dt><dd>${escapeHtml(backup.appVersion)}</dd></div>
      <div><dt>schemaVersion</dt><dd>${backup.schemaVersion}</dd></div>
      ${renderSummaryDetails(backup.summary)}
    </dl>
  `;
  document.querySelector("#restoreBackupChecked").checked = false;
  document.querySelector("#restoreOverwriteChecked").checked = false;
  if (executeButton) executeButton.disabled = true;
}

function updateRestoreButtonState() {
  const executeButton = document.querySelector("#executeRestoreButton");
  if (!executeButton) return;
  executeButton.disabled = !state.pendingRestore
    || !document.querySelector("#restoreBackupChecked")?.checked
    || !document.querySelector("#restoreOverwriteChecked")?.checked;
}

function executePendingRestore() {
  if (!state.pendingRestore) return;
  if (!document.querySelector("#restoreBackupChecked")?.checked || !document.querySelector("#restoreOverwriteChecked")?.checked) return;
  createRestoreSafetySnapshot("before_restore");
  createAutoSnapshot("before_restore");
  applyBackupData(state.pendingRestore.data);
  state.pendingRestore = null;
  closeDetail();
  closeLessonDetail();
  saveUnits();
  render();
  const message = document.querySelector("#importMessage");
  if (message) message.textContent = "バックアップから復元しました。";
  showToast("復元しました。");
}

function applyBackupData(data) {
  state.units = data.units;
  state.practiceLogs = data.practiceLogs;
  state.pastExamLogs = data.pastExamLogs;
  state.practicalLogs = data.practicalLogs;
  state.mockExamResults = data.mockExamResults;
  state.drillResults = data.drillResults;
  state.aiAnalyses = data.aiAnalyses;
  state.lessonOverrides = data.lessonOverrides;
  state.aiSettings = normalizeAiSettings(null);
  state.studyPlans = data.studyPlans;
  state.curriculumProgress = data.curriculumProgress;
  state.userSettings = data.userSettings;
  state.pastExamMappings = data.pastExamMappings;
  state.importedPastExamQuestions = data.importedPastExamQuestions;
}

function getBackupSummary(data) {
  return {
    curriculumProgressCount: countItems(data.curriculumProgress),
    drillResultsCount: countItems(data.drillResults),
    mockExamResultsCount: countItems(data.mockExamResults),
    studyPlansCount: countItems(data.studyPlans),
    lessonOverridesCount: countItems(data.lessonOverrides),
    aiAnalysesCount: countItems(data.aiAnalyses),
    practiceLogsCount: countItems(data.practiceLogs),
    pastExamLogsCount: countItems(data.pastExamLogs),
    practicalLogsCount: countItems(data.practicalLogs),
    importedPastExamQuestionsCount: countItems(data.importedPastExamQuestions),
    pastExamMappingsCount: countItems(data.pastExamMappings),
    logCount: countItems(data.practiceLogs) + countItems(data.pastExamLogs) + countItems(data.practicalLogs)
  };
}

function countItems(value) {
  if (Array.isArray(value)) return value.length;
  if (value && typeof value === "object") return Object.keys(value).length;
  return 0;
}

function renderSummaryDetails(summary) {
  return `
    <div><dt>レッスン進捗数</dt><dd>${summary.curriculumProgressCount}件</dd></div>
    <div><dt>ドリル結果数</dt><dd>${summary.drillResultsCount}件</dd></div>
    <div><dt>模試結果数</dt><dd>${summary.mockExamResultsCount}件</dd></div>
    <div><dt>学習計画数</dt><dd>${summary.studyPlansCount}件</dd></div>
    <div><dt>レッスン追加教材数</dt><dd>${summary.lessonOverridesCount}件</dd></div>
    <div><dt>外部ChatGPT相談文履歴数</dt><dd>${summary.aiAnalysesCount}件</dd></div>
    <div><dt>演習ログ数</dt><dd>${summary.practiceLogsCount}件</dd></div>
    <div><dt>過去問ログ数</dt><dd>${summary.pastExamLogsCount}件</dd></div>
    <div><dt>実務ログ数</dt><dd>${summary.practicalLogsCount}件</dd></div>
    <div><dt>インポート済み過去問数</dt><dd>${summary.importedPastExamQuestionsCount || 0}件</dd></div>
    <div><dt>過去問マッピング数</dt><dd>${summary.pastExamMappingsCount || 0}件</dd></div>
  `;
}

function getLocalStorageUsage() {
  const keys = [];
  let size = 0;
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (!key || !key.startsWith("tsukanYobiko.")) continue;
    const value = localStorage.getItem(key) || "";
    keys.push(key);
    size += key.length + value.length;
  }
  return {
    keys: keys.sort(),
    sizeKb: Math.max(1, Math.ceil(size / 1024))
  };
}

function createRestoreSafetySnapshot(reason) {
  const snapshot = {
    createdAt: new Date().toISOString(),
    reason,
    data: makeBackupData()
  };
  localStorage.setItem(STORAGE_KEYS.restoreSafetySnapshot, JSON.stringify(snapshot));
}

function createAutoSnapshot(reason) {
  const snapshots = normalizeArray(readJson(STORAGE_KEYS.autoSnapshots));
  const data = makeBackupData();
  snapshots.unshift({
    id: `snapshot-${Date.now().toString(36)}`,
    createdAt: new Date().toISOString(),
    reason,
    summary: getBackupSummary(data),
    data
  });
  localStorage.setItem(STORAGE_KEYS.autoSnapshots, JSON.stringify(snapshots.slice(0, 3)));
}

function renderSnapshotStatus() {
  const snapshots = normalizeArray(readJson(STORAGE_KEYS.autoSnapshots));
  const latest = snapshots[0];
  const snapshotSummary = document.querySelector("#snapshotSummary");
  if (snapshotSummary) {
    snapshotSummary.innerHTML = `
      <div><dt>自動スナップショット件数</dt><dd>${snapshots.length}件</dd></div>
      <div><dt>最新スナップショット日時</dt><dd>${escapeHtml(formatDateTime(latest?.createdAt))}</dd></div>
    `;
  }
  const list = document.querySelector("#snapshotList");
  if (list) {
    list.innerHTML = snapshots.length
      ? snapshots.map((snapshot) => `
        <div class="snapshot-item">
          <p><strong>${escapeHtml(formatDateTime(snapshot.createdAt))}</strong> / ${escapeHtml(snapshot.reason)}</p>
          <p class="muted">進捗${snapshot.summary?.curriculumProgressCount || 0}・ドリル${snapshot.summary?.drillResultsCount || 0}・模試${snapshot.summary?.mockExamResultsCount || 0}・過去問${snapshot.summary?.importedPastExamQuestionsCount || 0}・マッピング${snapshot.summary?.pastExamMappingsCount || 0}</p>
          <button class="ghost-button" type="button" data-restore-auto-snapshot="${escapeAttribute(snapshot.id)}">このスナップショットから復元</button>
        </div>
      `).join("")
      : `<p class="muted">自動スナップショットはまだありません。</p>`;
  }
  const safety = readJson(STORAGE_KEYS.restoreSafetySnapshot);
  const safetySummary = document.querySelector("#restoreSafetySnapshotSummary");
  if (safetySummary) {
    const summary = safety?.data ? getBackupSummary(safety.data) : null;
    safetySummary.innerHTML = safety
      ? `
        <div><dt>作成日時</dt><dd>${escapeHtml(formatDateTime(safety.createdAt))}</dd></div>
        <div><dt>理由</dt><dd>${escapeHtml(safety.reason || "不明")}</dd></div>
        <div><dt>内容</dt><dd>進捗${summary?.curriculumProgressCount || 0}・ドリル${summary?.drillResultsCount || 0}・模試${summary?.mockExamResultsCount || 0}・過去問${summary?.importedPastExamQuestionsCount || 0}・マッピング${summary?.pastExamMappingsCount || 0}</dd></div>
      `
      : `<div><dt>状態</dt><dd>直前スナップショットはありません。</dd></div>`;
  }
}

function restoreAutoSnapshot(snapshotId) {
  const snapshot = normalizeArray(readJson(STORAGE_KEYS.autoSnapshots)).find((item) => item.id === snapshotId);
  if (!snapshot?.data) return;
  const confirmed = window.confirm("現在の学習データを、この自動スナップショットで上書きします。実行しますか？");
  if (!confirmed) return;
  createRestoreSafetySnapshot("before_auto_snapshot_restore");
  applyBackupData(normalizeBackupPayload({ appName: APP_NAME, data: snapshot.data }).data);
  saveUnits();
  render();
  showToast("スナップショットから復元しました。");
}

function restoreSafetySnapshot() {
  const snapshot = readJson(STORAGE_KEYS.restoreSafetySnapshot);
  if (!snapshot?.data) {
    showToast("直前スナップショットはありません。");
    return;
  }
  const confirmed = window.confirm("現在の学習データを、直前スナップショットで上書きします。実行しますか？");
  if (!confirmed) return;
  createAutoSnapshot("before_restore_safety_snapshot");
  applyBackupData(normalizeBackupPayload({ appName: APP_NAME, data: snapshot.data }).data);
  saveUnits();
  render();
  showToast("直前スナップショットから復元しました。");
}

function showSafetySnapshotSummary() {
  const snapshot = readJson(STORAGE_KEYS.restoreSafetySnapshot);
  const message = document.querySelector("#restoreSafetySnapshotMessage");
  if (!message) return;
  if (!snapshot?.data) {
    message.textContent = "直前スナップショットはありません。";
    return;
  }
  const summary = getBackupSummary(snapshot.data);
  message.textContent = `作成日時：${formatDateTime(snapshot.createdAt)} / 進捗${summary.curriculumProgressCount}件・ドリル${summary.drillResultsCount}件・模試${summary.mockExamResultsCount}件・過去問${summary.importedPastExamQuestionsCount || 0}件・マッピング${summary.pastExamMappingsCount || 0}件`;
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
  document.querySelector("#backToUnitsButton")?.addEventListener("click", closeDetail);
  document.querySelector("#backToLearningButton")?.addEventListener("click", closeLessonDetail);
  document.querySelector("#searchInput")?.addEventListener("input", (event) => {
    state.filters.search = event.target.value;
    renderUnitList();
  });
  document.querySelector("#subjectFilter")?.addEventListener("change", (event) => {
    state.filters.subject = event.target.value;
    renderUnitList();
  });
  document.querySelector("#importanceFilter")?.addEventListener("change", (event) => {
    state.filters.importance = event.target.value;
    renderUnitList();
  });
  document.querySelector("#levelFilter")?.addEventListener("change", (event) => {
    state.filters.level = event.target.value;
    renderUnitList();
  });
  document.querySelector("#reviewFilter")?.addEventListener("change", (event) => {
    state.filters.review = event.target.value;
    renderUnitList();
  });
  document.querySelector("#weaknessFilter")?.addEventListener("change", (event) => {
    state.filters.weakness = event.target.value;
    renderUnitList();
  });
  document.querySelector("#redoOnlyFilter")?.addEventListener("change", (event) => {
    state.filters.redoOnly = event.target.checked;
    renderUnitList();
  });
  document.querySelector("#reviewSubjectFilter")?.addEventListener("change", (event) => {
    state.reviewFilters.subject = event.target.value;
    renderReviewList();
  });
  document.querySelector("#reviewStatusFilter")?.addEventListener("change", (event) => {
    state.reviewFilters.review = event.target.value;
    renderReviewList();
  });
  document.querySelector("#reviewImportanceFilter")?.addEventListener("change", (event) => {
    state.reviewFilters.importance = event.target.value;
    renderReviewList();
  });
  document.querySelector("#reviewWeaknessFilter")?.addEventListener("change", (event) => {
    state.reviewFilters.weakness = event.target.value;
    renderReviewList();
  });
  document.querySelector("#reviewRedoOnlyFilter")?.addEventListener("change", (event) => {
    state.reviewFilters.redoOnly = event.target.checked;
    renderReviewList();
  });
  document.querySelector("#lessonSubjectFilter")?.addEventListener("change", (event) => {
    state.lessonFilters.subject = event.target.value;
    renderLearningView();
  });
  document.querySelector("#lessonCourseFilter")?.addEventListener("change", (event) => {
    state.lessonFilters.courseId = event.target.value;
    renderLearningView();
  });
  document.querySelector("#lessonStatusFilter")?.addEventListener("change", (event) => {
    state.lessonFilters.status = event.target.value;
    renderLearningView();
  });
  document.querySelector("#lessonUnderstandingFilter")?.addEventListener("change", (event) => {
    state.lessonFilters.understanding = event.target.value;
    renderLearningView();
  });
  document.querySelector("#lessonReviewOnlyFilter")?.addEventListener("change", (event) => {
    state.lessonFilters.reviewOnly = event.target.checked;
    renderLearningView();
  });
  document.querySelector("#practiceLogForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    savePracticeLogFromForm();
  });
  document.querySelector("#practiceSearchInput")?.addEventListener("input", (event) => {
    state.practiceFilters.search = event.target.value;
    renderPracticeLogList();
  });
  document.querySelector("#practiceSubjectFilter")?.addEventListener("change", (event) => {
    state.practiceFilters.subject = event.target.value;
    renderPracticeLogList();
  });
  document.querySelector("#practiceSourceTypeFilter")?.addEventListener("change", (event) => {
    state.practiceFilters.sourceType = event.target.value;
    renderPracticeLogList();
  });
  document.querySelector("#practiceQuestionTypeFilter")?.addEventListener("change", (event) => {
    state.practiceFilters.questionType = event.target.value;
    renderPracticeLogList();
  });
  document.querySelector("#practiceResultFilter")?.addEventListener("change", (event) => {
    state.practiceFilters.result = event.target.value;
    renderPracticeLogList();
  });
  document.querySelector("#practiceConfidenceFilter")?.addEventListener("change", (event) => {
    state.practiceFilters.confidence = event.target.value;
    renderPracticeLogList();
  });
  document.querySelector("#practiceUnitFilter")?.addEventListener("change", (event) => {
    state.practiceFilters.unitId = event.target.value;
    renderPracticeLogList();
  });
  document.querySelector("#practiceWeaknessFilter")?.addEventListener("change", (event) => {
    state.practiceFilters.weakness = event.target.value;
    renderPracticeLogList();
  });
  document.querySelector("#practiceRetryOnlyFilter")?.addEventListener("change", (event) => {
    state.practiceFilters.retryOnly = event.target.checked;
    renderPracticeLogList();
  });
  document.querySelector("#pastExamLogForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    savePastExamLogFromForm();
  });
  document.querySelector("#pastExamSearchInput")?.addEventListener("input", (event) => {
    state.pastExamFilters.search = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamRoundFilter")?.addEventListener("change", (event) => {
    state.pastExamFilters.examRound = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamSubjectFilter")?.addEventListener("change", (event) => {
    state.pastExamFilters.subject = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamQuestionTypeFilter")?.addEventListener("change", (event) => {
    state.pastExamFilters.questionType = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamResultFilter")?.addEventListener("change", (event) => {
    state.pastExamFilters.result = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamConfidenceFilter")?.addEventListener("change", (event) => {
    state.pastExamFilters.confidence = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamUnitFilter")?.addEventListener("change", (event) => {
    state.pastExamFilters.unitId = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamWeaknessFilter")?.addEventListener("change", (event) => {
    state.pastExamFilters.weakness = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamPriorityFilter")?.addEventListener("change", (event) => {
    state.pastExamFilters.priority = event.target.value;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamRetryOnlyFilter")?.addEventListener("change", (event) => {
    state.pastExamFilters.retryOnly = event.target.checked;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamAllCorrectOnlyFilter")?.addEventListener("change", (event) => {
    state.pastExamFilters.allCorrectOnly = event.target.checked;
    renderPastExamLogList();
  });
  document.querySelector("#pastExamPracticalOnlyFilter")?.addEventListener("change", (event) => {
    state.pastExamFilters.practicalOnly = event.target.checked;
    renderPastExamLogList();
  });
  document.querySelector("#practicalLogForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    savePracticalLogFromForm();
  });
  document.querySelector("#practicalSearchInput")?.addEventListener("input", (event) => {
    state.practicalFilters.search = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalTypeFilter")?.addEventListener("change", (event) => {
    state.practicalFilters.practicalType = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalSourceTypeFilter")?.addEventListener("change", (event) => {
    state.practicalFilters.sourceType = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalResultFilter")?.addEventListener("change", (event) => {
    state.practicalFilters.result = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalConfidenceFilter")?.addEventListener("change", (event) => {
    state.practicalFilters.confidence = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalUnitFilter")?.addEventListener("change", (event) => {
    state.practicalFilters.unitId = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalCalculationTypeFilter")?.addEventListener("change", (event) => {
    state.practicalFilters.calculationType = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalWeaknessFilter")?.addEventListener("change", (event) => {
    state.practicalFilters.weakness = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalPriorityFilter")?.addEventListener("change", (event) => {
    state.practicalFilters.priority = event.target.value;
    renderPracticalLogList();
  });
  document.querySelector("#practicalRetryOnlyFilter")?.addEventListener("change", (event) => {
    state.practicalFilters.retryOnly = event.target.checked;
    renderPracticalLogList();
  });
  document.querySelector("#practicalDeclarationOnlyFilter")?.addEventListener("change", (event) => {
    state.practicalFilters.declarationOnly = event.target.checked;
    renderPracticalLogList();
  });
  document.querySelector("#practicalCalculationOnlyFilter")?.addEventListener("change", (event) => {
    state.practicalFilters.calculationOnly = event.target.checked;
    renderPracticalLogList();
  });
  document.querySelector("#aiPromptTypeSelect")?.addEventListener("change", (event) => {
    state.aiForm.promptType = event.target.value;
  });
  document.querySelector("#aiTargetTypeSelect")?.addEventListener("change", (event) => {
    state.aiForm.targetType = event.target.value;
    state.aiForm.targetId = "";
    renderAiTargetSelect();
  });
  document.querySelector("#aiTargetSelect")?.addEventListener("change", (event) => {
    state.aiForm.targetId = event.target.value;
  });
  document.querySelector("#aiAdditionalConditions")?.addEventListener("input", (event) => {
    state.aiForm.additionalConditions = event.target.value;
  });
  document.querySelector("#generateAiPromptButton")?.addEventListener("click", generateAiPrompt);
  document.querySelector("#copyAiPromptButton")?.addEventListener("click", copyAiPrompt);
  document.querySelector("#clearAiPromptButton")?.addEventListener("click", () => {
    state.aiForm.promptText = "";
    state.aiForm.currentAnalysisId = "";
    state.aiForm.apiStatus = "未送信";
    state.aiForm.apiResponseText = "";
    state.aiForm.apiModel = "";
    state.aiForm.apiUsage = {};
    state.aiForm.apiError = "";
    document.querySelector("#aiPromptResult").value = "";
    renderAiResponse();
  });
  document.querySelector("#saveAiPromptMemoButton")?.addEventListener("click", saveCurrentAiPromptMemo);
  document.querySelector("#saveAiResponseButton")?.addEventListener("click", saveCurrentAiResponse);
  document.querySelector("#aiPromptResult")?.addEventListener("input", (event) => {
    state.aiForm.promptText = event.target.value;
  });
  document.querySelector("#aiTutorTargetType")?.addEventListener("change", (event) => {
    state.aiTutorForm.targetType = event.target.value;
    state.aiTutorForm.targetId = "";
    generateAiTutorPrompt();
    renderAiTutorView();
  });
  document.querySelector("#aiTutorTargetSelect")?.addEventListener("change", (event) => {
    state.aiTutorForm.targetId = event.target.value;
    generateAiTutorPrompt();
    renderAiTutorView();
  });
  document.querySelector("#aiTutorQuestionType")?.addEventListener("change", (event) => {
    state.aiTutorForm.questionType = event.target.value;
    generateAiTutorPrompt();
    renderAiTutorView();
  });
  document.querySelector("#aiTutorExplanationLevel")?.addEventListener("change", (event) => {
    state.aiTutorForm.explanationLevel = event.target.value;
    generateAiTutorPrompt();
    renderAiTutorView();
  });
  document.querySelector("#aiTutorQuestionInput")?.addEventListener("input", (event) => {
    state.aiTutorForm.userQuestion = event.target.value;
    generateAiTutorPrompt();
  });
  document.querySelector("#aiTutorPromptResult")?.addEventListener("input", (event) => {
    state.aiTutorForm.promptText = event.target.value;
  });
  document.querySelector("#askAiTutorButton")?.addEventListener("click", askAiTutor);
  document.querySelector("#copyAiTutorPromptButton")?.addEventListener("click", copyAiTutorPrompt);
  document.querySelector("#saveAiTutorResponseButton")?.addEventListener("click", saveCurrentAiTutorResponse);
  document.querySelector("#makeAiTutorSimilarButton")?.addEventListener("click", () => {
    state.aiTutorForm.questionType = "類似問題を出す";
    state.aiTutorForm.explanationLevel = "本試験直前";
    generateAiTutorPrompt();
    renderAiTutorView();
    showToast("類似問題作成用に切り替えました。");
  });
  document.querySelector("#saveAiTutorReviewMemoButton")?.addEventListener("click", () => setAiTutorFlag("savedAsReviewMemo"));
  document.querySelector("#holdAiTutorWeaknessButton")?.addEventListener("click", () => setAiTutorFlag("markedAsWeaknessSuggestion"));
  document.querySelector("#markAiTutorNextReviewButton")?.addEventListener("click", () => setAiTutorFlag("markedForNextReview"));
  document.querySelector("#aiSuggestionTargetType")?.addEventListener("change", (event) => {
    state.aiSuggestionForm.targetType = event.target.value;
    state.aiSuggestionForm.targetId = "";
    generateAiSuggestionPrompt();
    renderAiSuggestionView();
  });
  document.querySelector("#aiSuggestionType")?.addEventListener("change", (event) => {
    state.aiSuggestionForm.suggestionType = event.target.value;
    generateAiSuggestionPrompt();
    renderAiSuggestionView();
  });
  document.querySelector("#aiSuggestionTargetSelect")?.addEventListener("change", (event) => {
    state.aiSuggestionForm.targetId = event.target.value;
    generateAiSuggestionPrompt();
    renderAiSuggestionView();
  });
  document.querySelector("#aiSuggestionMemo")?.addEventListener("input", (event) => {
    state.aiSuggestionForm.memo = event.target.value;
  });
  document.querySelector("#aiSuggestionPromptResult")?.addEventListener("input", (event) => {
    state.aiSuggestionForm.promptText = event.target.value;
  });
  document.querySelector("#runAiSuggestionButton")?.addEventListener("click", runAiSuggestion);
  document.querySelector("#copyAiSuggestionPromptButton")?.addEventListener("click", copyAiSuggestionPrompt);
  document.querySelector("#parseAiSuggestionManualResponseButton")?.addEventListener("click", parseManualAiSuggestionResponse);
  document.querySelector("#applyAiSuggestionButton")?.addEventListener("click", applyCurrentAiSuggestion);
  document.querySelector("#analysisAiConsultButton")?.addEventListener("click", openAiForAnalysisConsult);
  document.querySelector("#pastExamImportInput")?.addEventListener("change", (event) => {
    previewPastExamImport(event.target.files[0]);
  });
  document.querySelector("#executePastExamImportButton")?.addEventListener("click", executePastExamImport);
  document.querySelector("#clearPastExamImportButton")?.addEventListener("click", () => {
    state.pendingPastExamImport = null;
    renderPastExamImportPreview();
    const message = document.querySelector("#pastExamImportMessage");
    if (message) message.textContent = "";
  });
  [
    ["#pastMapExamFilter", "examName"],
    ["#pastMapYearFilter", "year"],
    ["#pastMapSubjectFilter", "subject"],
    ["#pastMapTopicFilter", "topic"],
    ["#pastMapWeaknessFilter", "weakness"],
    ["#pastMapCoverageFilter", "coverage"]
  ].forEach(([selector, key]) => {
    document.querySelector(selector)?.addEventListener("change", (event) => {
      state.pastMappingFilters[key] = event.target.value;
      renderPastMappingView();
    });
  });
  document.querySelector("#pastMapUnmappedOnlyFilter")?.addEventListener("change", (event) => {
    state.pastMappingFilters.unmappedOnly = event.target.checked;
    renderPastMappingView();
  });
  document.querySelector("#pastMappingAiPromptButton")?.addEventListener("click", () => {
    const area = document.querySelector("#pastMappingAiPromptResult");
    if (area) area.value = buildPastMappingAiPrompt();
    showToast("相談文を作成しました。");
  });
  document.querySelector("#copyPastMappingAiPromptButton")?.addEventListener("click", async () => {
    const area = document.querySelector("#pastMappingAiPromptResult");
    if (!area) return;
    if (!area.value.trim()) area.value = buildPastMappingAiPrompt();
    try {
      if (!navigator.clipboard?.writeText) throw new Error("clipboard unavailable");
      await navigator.clipboard.writeText(area.value);
      showToast("相談文をコピーしました。");
    } catch (error) {
      area.focus();
      area.select();
      showToast("コピーできませんでした。選択中の本文を手動でコピーしてください。");
    }
  });
  document.querySelector("#todayAiConsultButton")?.addEventListener("click", openAiForTodayConsult);
  document.querySelector("#saveTodayMemoButton")?.addEventListener("click", saveTodayMemo);
  document.querySelector("#durationButtons")?.addEventListener("click", (event) => {
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
    const drillModeButton = event.target.closest("[data-drill-mode]");
    if (drillModeButton) {
      setDrillMode(drillModeButton.dataset.drillMode);
      return;
    }
    const startDrillButton = event.target.closest("[data-start-drill-mode]");
    if (startDrillButton) {
      switchView("drill");
      setDrillMode(startDrillButton.dataset.startDrillMode);
      document.querySelector("#drillAreaStandalone")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const startWeaknessDrillButton = event.target.closest("[data-start-weakness-drill]");
    if (startWeaknessDrillButton) {
      startWeaknessDrill(
        startWeaknessDrillButton.dataset.startWeaknessDrill,
        startWeaknessDrillButton.dataset.weaknessType || "tag",
        startWeaknessDrillButton.dataset.weaknessCount || "5"
      );
      return;
    }
    const courseFilterButton = event.target.closest("[data-course-filter]");
    if (courseFilterButton) {
      state.lessonFilters.courseId = courseFilterButton.dataset.courseFilter;
      renderLearningView();
      document.querySelector("#lessonList")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (event.target.closest("[data-grade-drill]")) {
      gradeCurrentDrill();
      return;
    }
    if (event.target.closest("[data-next-drill]")) {
      moveNextDrill();
      return;
    }
    if (event.target.closest("[data-finish-drill]")) {
      finishCurrentDrill();
      return;
    }
    if (event.target.closest("[data-open-ai-suggestions]")) {
      switchView("ai");
      document.querySelector("#aiSuggestionHistoryList")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (event.target.closest("[data-ai-suggest-today]")) {
      openAiSuggestionForTarget("今日のメニュー", "today", "次にやること提案", "今日の未完了項目と弱点から、現実的な順番に最適化してください。");
      return;
    }
    if (event.target.closest("[data-open-learning]")) {
      switchView("learning");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (event.target.closest("[data-ai-today-consult]")) {
      openAiForTodayConsult();
      return;
    }
    if (event.target.closest("[data-ai-today-review]")) {
      openAiTutorForTarget("今日のメニュー", "today", "30分復習メニューを作る", "標準", "今日のメニューを30分用に作り直してください。");
      return;
    }
    if (event.target.closest("[data-ai-today-priority]")) {
      openAiTutorForTarget("今日のメニュー", "today", "質問に直接回答", "標準", "未完了項目の優先順位を、得点に直結する順で教えてください。");
      return;
    }
    const aiQuickButton = event.target.closest("[data-ai-quick]");
    if (aiQuickButton) {
      applyAiQuickAction(aiQuickButton.dataset.aiQuick);
      return;
    }
    if (event.target.closest("[data-open-mock]")) {
      switchView("mock");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (event.target.closest("[data-open-cross-review]")) {
      switchView("review");
      document.querySelector("#reviewCrossCards")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const shortcut = event.target.closest("[data-view-shortcut]");
    if (shortcut) {
      if (shortcut.dataset.drillHome) setDrillMode(shortcut.dataset.drillHome);
      switchView(shortcut.dataset.viewShortcut);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const togglePastQuestion = event.target.closest("[data-toggle-past-question]");
    if (togglePastQuestion) {
      const id = togglePastQuestion.dataset.togglePastQuestion;
      state.expandedPastQuestionId = state.expandedPastQuestionId === id ? "" : id;
      renderPastMappingView();
      return;
    }
    const savePastMappingButton = event.target.closest("[data-save-past-mapping]");
    if (savePastMappingButton) {
      savePastExamMapping(savePastMappingButton.dataset.savePastMapping);
      return;
    }
    const lessonButton = event.target.closest("[data-open-lesson]");
    if (lessonButton) {
      openLesson(lessonButton.dataset.openLesson);
      return;
    }
    const selectMockButton = event.target.closest("[data-select-mock]");
    if (selectMockButton) {
      state.mockExam.selectedMode = selectMockButton.dataset.selectMock;
      renderMockExamView();
      return;
    }
    const startMockButton = event.target.closest("[data-start-mock]");
    if (startMockButton) {
      switchView("mock");
      startMockExam(startMockButton.dataset.startMock);
      return;
    }
    const mockAnswerButton = event.target.closest("[data-mock-answer]");
    if (mockAnswerButton) {
      const [questionId, ...answerParts] = mockAnswerButton.dataset.mockAnswer.split(":");
      answerMockQuestion(questionId, answerParts.join(":"));
      return;
    }
    if (event.target.closest("[data-mock-prev]")) {
      moveMockQuestion(-1);
      return;
    }
    if (event.target.closest("[data-mock-next]")) {
      moveMockQuestion(1);
      return;
    }
    const mockJumpButton = event.target.closest("[data-mock-jump]");
    if (mockJumpButton) {
      state.mockExam.currentIndex = Number(mockJumpButton.dataset.mockJump || 0);
      renderMockExamView();
      return;
    }
    if (event.target.closest("[data-grade-mock]")) {
      gradeMockExam();
      return;
    }
    if (event.target.closest("[data-end-mock]")) {
      finishMockExamEarly();
      return;
    }
    const reviewMockWrongButton = event.target.closest("[data-review-mock-wrong]");
    if (reviewMockWrongButton) {
      startMockWrongReview(reviewMockWrongButton.dataset.reviewMockWrong);
      return;
    }
    const showMockButton = event.target.closest("[data-show-mock-result]");
    if (showMockButton) {
      switchView("mock");
      state.mockExam.lastResultId = showMockButton.dataset.showMockResult;
      renderMockExamView();
      document.querySelector("#mockResultSummary")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const deleteMockButton = event.target.closest("[data-delete-mock-result]");
    if (deleteMockButton) {
      deleteMockResult(deleteMockButton.dataset.deleteMockResult);
      return;
    }
    const aiMockButton = event.target.closest("[data-ai-mock-result]");
    if (aiMockButton) {
      openAiForMockResult(aiMockButton.dataset.aiMockResult);
      return;
    }
    const aiSuggestMockTagsButton = event.target.closest("[data-ai-suggest-mock-tags]");
    if (aiSuggestMockTagsButton) {
      openAiSuggestionForTarget("模試結果", aiSuggestMockTagsButton.dataset.aiSuggestMockTags, "弱点タグ提案");
      return;
    }
    const aiSuggestMockNextButton = event.target.closest("[data-ai-suggest-mock-next]");
    if (aiSuggestMockNextButton) {
      openAiSuggestionForTarget("模試結果", aiSuggestMockNextButton.dataset.aiSuggestMockNext, "次にやること提案");
      return;
    }
    const aiMockWrongButton = event.target.closest("[data-ai-mock-wrong]");
    if (aiMockWrongButton) {
      openAiForMockResult(aiMockWrongButton.dataset.aiMockWrong);
      return;
    }
    const aiMockReviewButton = event.target.closest("[data-ai-mock-review]");
    if (aiMockReviewButton) {
      const result = state.mockExamResults.find((item) => item.id === aiMockReviewButton.dataset.aiMockReview);
      const wrong = result?.answers.find((answer) => !answer.correct) || result?.answers[0];
      openAiTutorForTarget("模試問題", wrong ? `${result.id}:${wrong.questionId}` : "", "30分復習メニューを作る", "本試験直前", "この模試結果から次の30分復習メニューを作ってください。");
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
    const aiLessonTrapButton = event.target.closest("[data-ai-lesson-trap]");
    if (aiLessonTrapButton) {
      openAiTutorForTarget("現在のレッスン", aiLessonTrapButton.dataset.aiLessonTrap, "ひっかけポイント解説", "本試験直前", "このレッスンのひっかけポイントを、本試験で狙われる表現に絞って説明してください。");
      return;
    }
    const wrongLessonAiButton = event.target.closest("[data-ai-wrong-question]");
    if (wrongLessonAiButton) {
      const [lessonId, questionId] = wrongLessonAiButton.dataset.aiWrongQuestion.split(":");
      openAiForWrongLessonQuestion(lessonId, questionId);
      return;
    }
    const wrongLessonSuggestionButton = event.target.closest("[data-ai-suggest-wrong-question]");
    if (wrongLessonSuggestionButton) {
      openAiSuggestionForTarget("レッスン確認問題", wrongLessonSuggestionButton.dataset.aiSuggestWrongQuestion, "弱点タグ提案");
      return;
    }
    const similarLessonAiButton = event.target.closest("[data-ai-similar-question]");
    if (similarLessonAiButton) {
      const [lessonId, questionId] = similarLessonAiButton.dataset.aiSimilarQuestion.split(":");
      openAiForWrongLessonQuestion(lessonId, questionId, "類似問題を出す", "本試験直前");
      return;
    }
    const trapLessonAiButton = event.target.closest("[data-ai-trap-question]");
    if (trapLessonAiButton) {
      const [lessonId, questionId] = trapLessonAiButton.dataset.aiTrapQuestion.split(":");
      openAiForWrongLessonQuestion(lessonId, questionId, "ひっかけポイント解説", "本試験直前");
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
    const aiWeaknessButton = event.target.closest("[data-ai-weakness-tag]");
    if (aiWeaknessButton) {
      openAiTutorForTarget("弱点タグ", aiWeaknessButton.dataset.aiWeaknessTag, "30分復習メニューを作る", "標準", "この弱点タグを本試験で落とさないための復習メニューを作ってください。");
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
    const showAiResponseButton = event.target.closest("[data-show-ai-response]");
    if (showAiResponseButton) {
      showAiResponseAnalysis(showAiResponseButton.dataset.showAiResponse);
      return;
    }
    const showTutorButton = event.target.closest("[data-show-ai-tutor]");
    if (showTutorButton) {
      showAiTutorAnalysis(showTutorButton.dataset.showAiTutor);
      return;
    }
    const showSuggestionButton = event.target.closest("[data-show-ai-suggestion]");
    if (showSuggestionButton) {
      showAiSuggestionAnalysis(showSuggestionButton.dataset.showAiSuggestion);
      return;
    }
    const applySuggestionHistoryButton = event.target.closest("[data-apply-ai-suggestion-history]");
    if (applySuggestionHistoryButton) {
      showAiSuggestionAnalysis(applySuggestionHistoryButton.dataset.applyAiSuggestionHistory);
      return;
    }
    const repeatTutorButton = event.target.closest("[data-repeat-ai-tutor]");
    if (repeatTutorButton) {
      repeatAiTutorAnalysis(repeatTutorButton.dataset.repeatAiTutor);
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
    if (complete) {
      toggleTodayCompleted(complete.dataset.todayComplete, complete.checked);
      return;
    }
    if (event.target.name === "drill-answer") {
      state.drill.selectedAnswer = event.target.value;
      state.drill.graded = false;
    }
  });
  document.querySelector("#saveUnitButton")?.addEventListener("click", () => {
    const unit = getActiveUnit();
    if (!unit) return;
    collectFormIntoUnit(unit);
    unit.updatedAt = todayString();
    saveUnits();
    render();
    showToast("保存しました。");
  });
  document.querySelector("#exportButton")?.addEventListener("click", exportBackup);
  document.querySelector("#validateDataButton")?.addEventListener("click", renderDataIntegrityResult);
  document.querySelector("#importInput")?.addEventListener("change", (event) => {
    importBackup(event.target.files[0]);
  });
  document.querySelector("#restoreBackupChecked")?.addEventListener("change", updateRestoreButtonState);
  document.querySelector("#restoreOverwriteChecked")?.addEventListener("change", updateRestoreButtonState);
  document.querySelector("#executeRestoreButton")?.addEventListener("click", executePendingRestore);
  document.querySelector("#showSafetySnapshotButton")?.addEventListener("click", showSafetySnapshotSummary);
  document.querySelector("#restoreSafetySnapshotButton")?.addEventListener("click", restoreSafetySnapshot);
  document.body.addEventListener("click", (event) => {
    const autoSnapshotButton = event.target.closest("[data-restore-auto-snapshot]");
    if (autoSnapshotButton) {
      restoreAutoSnapshot(autoSnapshotButton.dataset.restoreAutoSnapshot);
    }
  });
  document.querySelector("#resetButton")?.addEventListener("click", () => {
    const resetCheck = document.querySelector("#resetConfirmCheck");
    const resetText = document.querySelector("#resetConfirmText");
    const resetMessage = document.querySelector("#resetMessage");
    if (!resetCheck?.checked || !["RESET", "初期化"].includes(String(resetText?.value || "").trim())) {
      if (resetMessage) resetMessage.textContent = "チェックを入れ、RESET または 初期化 と入力すると初期化できます。";
      return;
    }
    const confirmed = window.confirm("学習進捗、ドリル結果、模試結果、学習計画、ログ、追加教材、相談履歴、インポート済み過去問、過去問マッピングを削除します。教材データ自体は削除されません。実行しますか？");
    if (!confirmed) return;
    createAutoSnapshot("before_reset");
    createRestoreSafetySnapshot("before_reset");
    localStorage.removeItem(STORAGE_KEYS.units);
    localStorage.removeItem(STORAGE_KEYS.practiceLogs);
    localStorage.removeItem(STORAGE_KEYS.pastExamLogs);
    localStorage.removeItem(STORAGE_KEYS.practicalLogs);
    localStorage.removeItem(STORAGE_KEYS.mockExamResults);
    localStorage.removeItem(STORAGE_KEYS.drillResults);
    localStorage.removeItem(STORAGE_KEYS.aiAnalyses);
    localStorage.removeItem(STORAGE_KEYS.lessonOverrides);
    localStorage.removeItem(STORAGE_KEYS.aiSettings);
    localStorage.removeItem(STORAGE_KEYS.studyPlans);
    localStorage.removeItem(STORAGE_KEYS.curriculumProgress);
    localStorage.removeItem(STORAGE_KEYS.userSettings);
    localStorage.removeItem(STORAGE_KEYS.pastExamMappings);
    localStorage.removeItem(STORAGE_KEYS.importedPastExamQuestions);
    state.units = makeInitialUnits();
    state.practiceLogs = [];
    state.pastExamLogs = [];
    state.practicalLogs = [];
    state.mockExamResults = [];
    state.drillResults = [];
    state.aiAnalyses = [];
    state.lessonOverrides = [];
    state.aiSettings = normalizeAiSettings(null);
    state.studyPlans = [];
    state.curriculumProgress = [];
    state.userSettings = {};
    state.pastExamMappings = [];
    state.importedPastExamQuestions = [];
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
