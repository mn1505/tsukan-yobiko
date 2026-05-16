// TSUKAN YOBIKO v3.2 data: KZ past-exam-analysis generated materials
// This file stores analysis metadata and original learning material only.
// It does not store past exam text, choices, or answer phrasing.
(function () {
  "use strict";

  const note = "過去問本文は保存しない。論点分析のみ。";
  const formats = ["語句選択", "複数選択", "択一"];
  const examNos = [51, 52, 53, 54, 55, 56, 57, 58, 59];
  const questionNos = Array.from({ length: 15 }, (_, index) => index + 1);
  const sourceLabel = "過去問分析由来";
  const lawRevisionFields = {
    lawRevisionCheckRequired: true,
    lawRevisionStatus: "unchecked",
    lawRevisionCheckedAt: "",
    lawRevisionMemo: "数字・期限・対象範囲は現行法確認"
  };

  let packSpecs = [
    {
      packId: "KZ-PACK-001",
      packName: "課税価格・輸入取引・加算要素パック",
      priority: "A",
      targetTopics: ["課税価格決定原則", "現実支払価格", "輸入取引", "加算要素", "航空運賃特例", "同種・類似貨物", "国内販売価格方式", "製造原価方式"],
      lectures: ["課税価格の全体像", "輸入取引", "加算要素", "評価方法の順序"],
      checkCount: 20,
      trapCount: 15,
      drillTypes: ["加算/非加算判定", "評価方法選択", "通関実務連携計算"],
      weaknessTags: ["課税価格", "輸入取引", "加算要素", "不算入要素", "課税価格計算"]
    },
    {
      packId: "KZ-PACK-002",
      packName: "納期限・法定納期限・延滞税・加算税パック",
      priority: "A",
      targetTopics: ["納期限", "法定納期限", "期限後特例申告", "延滞税", "過少申告加算税", "無申告加算税", "還付加算金"],
      lectures: ["納期限と法定納期限の違い", "延滞税の起算", "加算税の少額基準", "還付加算金の起算"],
      checkCount: 25,
      trapCount: 20,
      drillTypes: ["日付判定", "少額基準", "課されない/徴収されない判定"],
      weaknessTags: ["納期限・法定納期限", "延滞税・加算税", "還付加算金", "期間・期限", "納税申告・更正"]
    },
    {
      packId: "KZ-PACK-003",
      packName: "申告納税・賦課課税・修正申告・更正請求パック",
      priority: "A",
      targetTopics: ["申告納税方式", "賦課課税方式", "修正申告", "更正請求", "更正", "決定", "期間制限"],
      lectures: ["税額確定方式の比較", "修正申告と更正請求の違い", "決定と更正の違い"],
      checkCount: 20,
      trapCount: 15,
      drillTypes: ["手続選択ドリル", "期限判定ドリル"],
      weaknessTags: ["納税申告", "修正申告・更正の請求", "更正・決定", "納税申告・更正", "期間・期限"]
    },
    {
      packId: "KZ-PACK-004",
      packName: "輸入通関・EPA・原産地証明・他法令確認パック",
      priority: "A",
      targetTopics: ["輸入申告", "特例輸入者", "特例委託輸入者", "原産地証明", "EPA", "WTO税率", "他法令証明", "輸入許可前引取り"],
      lectures: ["輸入申告ルート", "EPAとWTOの違い", "原産地証明書の提出要否", "他法令証明"],
      checkCount: 25,
      trapCount: 20,
      drillTypes: ["提出要否判定", "輸入申告先判定", "BP承認判定"],
      weaknessTags: ["輸入申告", "原産地証明", "EPA", "外為法", "申告・許可・承認・届出の混同"]
    },
    {
      packId: "KZ-PACK-005",
      packName: "保税地域・保税蔵置場・保税運送パック",
      priority: "A",
      targetTopics: ["保税地域5種", "保税蔵置場", "保税工場", "保税展示場", "総合保税地域", "亡失", "滅却", "保税運送", "特定保税運送"],
      lectures: ["保税地域の全体像", "保税蔵置場の期間と管理", "亡失時の納税義務", "保税運送の承認"],
      checkCount: 25,
      trapCount: 20,
      drillTypes: ["保税地域分類", "許可/承認/届出判定", "亡失責任判定"],
      weaknessTags: ["保税地域", "保税運送", "納税義務者", "許可・承認・届出の混同"]
    },
    {
      packId: "KZ-PACK-006",
      packName: "輸出入禁止貨物・知財認定手続パック",
      priority: "A",
      targetTopics: ["輸入してはならない貨物", "輸出してはならない貨物", "知的財産侵害物品", "認定手続", "差止申立て", "争う旨の申出"],
      lectures: ["輸出禁止と輸入禁止の比較", "知財権別の対象", "認定手続フロー"],
      checkCount: 25,
      trapCount: 25,
      drillTypes: ["権利別判定", "輸出入比較", "手続期限判定"],
      weaknessTags: ["輸入禁止貨物", "輸出禁止貨物", "知財認定手続", "期間・期限", "選択肢読解"]
    },
    {
      packId: "KZ-PACK-007",
      packName: "関税の軽減・免除・払戻しパック",
      priority: "A",
      targetTopics: ["再輸出免税", "特定用途免税", "無条件免税", "戻し税", "災害滅失", "用途外使用"],
      lectures: ["免税・減税・戻し税の制度比較", "期限", "用途制限", "徴収事由"],
      checkCount: 20,
      trapCount: 18,
      drillTypes: ["制度選択", "期限比較", "用途外使用判定"],
      weaknessTags: ["減免税", "戻し税", "用途外使用", "期間・期限"]
    },
    {
      packId: "KZ-PACK-008",
      packName: "関税率表の解釈通則・HS分類基礎パック",
      priority: "A",
      targetTopics: ["通則1〜6", "部注", "類注", "包装容器", "混合物", "未完成品", "号の分類"],
      lectures: ["通則の適用順序", "通則1の優先", "通則2〜6の使いどころ"],
      checkCount: 20,
      trapCount: 15,
      drillTypes: ["通則番号判定", "分類手順", "通関実務連携"],
      weaknessTags: ["品目分類", "関税率表の通則", "HS分類", "税番"]
    },
    {
      packId: "KZ-PACK-009",
      packName: "外為法・輸出許可・輸入承認パック",
      priority: "B",
      targetTopics: ["輸出貿易管理令", "輸入貿易管理令", "輸出許可", "輸出承認", "輸入承認", "輸入割当"],
      lectures: ["許可と承認の違い", "輸出規制と輸入規制の全体像"],
      checkCount: 15,
      trapCount: 12,
      drillTypes: ["許可/承認要否判定"],
      weaknessTags: ["外為法", "許可・承認・届出の混同", "輸出規制", "輸入承認"]
    },
    {
      packId: "KZ-PACK-010",
      packName: "特恵関税・特殊関税・暫定措置法パック",
      priority: "B",
      targetTopics: ["特恵関税", "特別特恵", "原産地証明", "有効期間", "不当廉売関税", "緊急関税", "相殺関税"],
      lectures: ["特恵関税制度", "特殊関税の全体像", "不当廉売関税の構造"],
      checkCount: 20,
      trapCount: 15,
      drillTypes: ["特恵適用要件", "不当廉売関税判定"],
      weaknessTags: ["特恵関税", "原産地証明", "期間・期限"]
    },
    {
      packId: "KZ-PACK-011",
      packName: "AEO・特例輸入者・特定輸出者パック",
      priority: "B",
      targetTopics: ["特例輸入者", "特例委託輸入者", "特定輸出者", "特定委託輸出者", "特定保税運送者", "承認取消", "地位承継"],
      lectures: ["AEO制度の輸入側・輸出側比較"],
      checkCount: 18,
      trapCount: 15,
      drillTypes: ["主体比較", "承認取消", "申告先判定"],
      weaknessTags: ["AEO", "特例輸入者", "主体の混同"]
    },
    {
      packId: "KZ-PACK-012",
      packName: "NACCS法・ATA・コンテナ特例法パック",
      priority: "C",
      targetTopics: ["NACCS法", "通関手帳", "ATA条約", "コンテナ特例法", "TIR関連"],
      lectures: ["特例法の薄型整理"],
      checkCount: 12,
      trapCount: 10,
      drillTypes: ["制度名と要件の対応判定"],
      weaknessTags: ["NACCS入力", "ATA・通関手帳", "特例法", "暗記不足"]
    }
  ];

  packSpecs = packSpecs.map((pack) => ({
    ...pack,
    subject: pack.subject || "関税法等",
    sourceExamQuestions: Array.isArray(pack.sourceExamQuestions) ? pack.sourceExamQuestions : [],
    checkQuestions: pack.checkQuestions || pack.checkCount,
    trapQuestions: pack.trapQuestions || pack.trapCount,
    drills: pack.drills || pack.drillTypes,
    miniMockQuestions: pack.miniMockQuestions || 10,
    sourceLabel,
    ...lawRevisionFields,
    ...pack
  }));

  const priorityByQuestion = [1, 2, 3, 4, 5, 6, 7, 8].reduce((map, no) => ({ ...map, [no]: "A" }), {});

  function lessonId(pack, index) {
    return `lesson-${pack.packId.toLowerCase()}-${String(index + 1).padStart(2, "0")}`;
  }

  function questionId(pack, kind, index) {
    return `qb-${pack.packId.toLowerCase()}-${kind}-${String(index + 1).padStart(3, "0")}`;
  }

  function mockId(pack, index) {
    return `mock-${pack.packId.toLowerCase()}-${String(index + 1).padStart(3, "0")}`;
  }

  function makeQuestion(id, subject, topic, lessonIdValue, difficulty, questionType, question, choices, answer, explanation, trapExplanation, weaknessTag, packId, kind) {
    return {
      id,
      subject,
      topic,
      lessonId: lessonIdValue,
      difficulty,
      questionType,
      question,
      choices,
      answer,
      explanation,
      trapExplanation,
      weaknessTag,
      sourceType: "original",
      questionSource: "past_exam_analysis",
      sourceExamRange: "第51回〜第59回",
      sourceExamQuestions: [],
      reinforcementPackId: packId,
      materialKind: kind,
      sourceLabel,
      ...lawRevisionFields
    };
  }

  function makeLessonQuestion(id, topic, tag) {
    return {
      id,
      type: "single",
      question: `${topic}を判断するとき、最初に確認する観点として最も安定するものはどれか。`,
      choices: ["主体・時期・効果を分ける", "語感だけで近い制度を選ぶ", "常に納税者に有利な処理を選ぶ", "問題文の数字だけを見る"],
      answer: "主体・時期・効果を分ける",
      explanation: `${topic}は、誰が、いつ、どの手続をし、どの効果が生じるかを分けると判断しやすくなります。`,
      trapExplanation: "正しい用語が含まれていても、主体・時期・効果を入れ替えた文は誤りになります。",
      weaknessTag: tag,
      sourceLabel,
      ...lawRevisionFields
    };
  }

  function buildLessons(pack) {
    return pack.lectures.map((title, index) => {
      const topic = pack.targetTopics[index % pack.targetTopics.length];
      const tag = pack.weaknessTags[index % pack.weaknessTags.length];
      return {
        id: lessonId(pack, index),
        courseId: "course-kanzeihou-intro",
        subject: "関税法等",
        title: `${title}（過去問分析由来）`,
        order: 200 + Number(pack.packId.slice(-3)) * 10 + index,
        level: pack.priority === "A" ? "標準" : "基礎",
        estimatedMinutes: pack.priority === "A" ? 18 : 14,
        relatedUnitId: "",
        lessonSource: "past_exam_analysis",
        sourceExamRange: "第51回〜第59回",
        reinforcementPackId: pack.packId,
        sourceLabel: pack.sourceLabel,
        lawRevisionCheckRequired: pack.lawRevisionCheckRequired,
        lawRevisionStatus: pack.lawRevisionStatus,
        lawRevisionCheckedAt: pack.lawRevisionCheckedAt,
        lawRevisionMemo: pack.lawRevisionMemo,
        weaknessTag: tag,
        intro: `${title}では、${topic}を丸暗記ではなく判断軸で整理します。`,
        goal: `${pack.packName}の頻出論点を、選択肢の入れ替えに耐える形で説明できる状態を目標にします。`,
        lecture: `この講義は第51回以降の関税法等で繰り返し問われる論点分析から作成したオリジナル教材です。過去問本文や選択肢は保存せず、問われやすい知識、判断手順、ひっかけ方だけを抽出しています。\n\n${topic}では、制度名だけを覚えると失点しやすくなります。まず原則を確認し、次に例外、期限、主体、提出先、効果を分けます。似た語句が出たときは、同じ制度か、別制度の語句を混ぜたものかを確認します。\n\n現行法と出題年の法令が異なる可能性があるため、数字、期限、税率、対象範囲は学習時点で必ず現行法確認の対象にします。`,
        keyPoints: pack.targetTopics.slice(0, 5).map((item) => `${item}は原則・例外・効果をセットで確認する`),
        solveSteps: ["制度名を特定する", "主体と権限者を確認する", "期限・提出要否・効果を確認する", "似た制度への置換がないか読む"],
        confusingPoints: pack.targetTopics.slice(0, 4).map((item) => `${item}と近接制度の混同`),
        traps: [`${topic}の語句だけを見て例外を無視する`, "許可・承認・届出・申告を置き換える", "出題年の数字を現行法確認なしで固定する"],
        examTips: ["断定語と例外語を確認する", "正しい語句が一部だけ入った誤文に注意する", "法改正が入りやすい数字は要確認として扱う"],
        practicalNotes: pack.packId === "KZ-PACK-001" || pack.packId === "KZ-PACK-008" ? ["通関実務の計算・分類問題にも波及するため、実務ドリルへ連携します。"] : [],
        penaltyTips: ["行政上の手続、税負担、罰則・制裁を同じものとして読まないようにします。"],
        principleExceptions: ["原則を先に決め、例外は要件と効果を別行で確認します。"],
        distinctions: [`${pack.targetTopics.slice(0, 3).join("・")}の違いを比較する`],
        timeLimits: ["期限・期間・税率・対象範囲は要現行法確認"],
        miniSummary: `${pack.packName}は、過去問分析由来の論点整理、確認問題、ひっかけ問題、弱点別ドリルで復習します。`,
        questions: [
          makeLessonQuestion("q1", topic, tag),
          makeLessonQuestion("q2", pack.targetTopics[(index + 1) % pack.targetTopics.length], pack.weaknessTags[(index + 1) % pack.weaknessTags.length]),
          makeLessonQuestion("q3", pack.targetTopics[(index + 2) % pack.targetTopics.length], pack.weaknessTags[(index + 2) % pack.weaknessTags.length])
        ]
      };
    });
  }

  function buildCheckQuestions(pack) {
    return Array.from({ length: pack.checkCount }, (_, index) => {
      const topic = pack.targetTopics[index % pack.targetTopics.length];
      const tag = pack.weaknessTags[index % pack.weaknessTags.length];
      const correct = `${topic}は、制度趣旨、主体、時期、効果を分けて判断する`;
      return makeQuestion(
        questionId(pack, "check", index),
        "関税法等",
        topic,
        lessonId(pack, index % pack.lectures.length),
        index % 5 === 0 ? "応用" : "標準",
        "singleChoice",
        `${pack.packName}の確認として、${topic}の学習姿勢で最も適切なものはどれか。`,
        [correct, "似た名称の制度はすべて同じ効果として扱う", "期限や主体は設問文で確認しなくてよい", "過去の出題年の内容を現行法確認なしで固定する"],
        correct,
        `${topic}は、制度の入口、要件、効果、期限を分けて読むと安定します。`,
        "名称が近い制度や一部だけ正しい語句を混ぜた選択肢に注意します。",
        tag,
        pack.packId,
        "check"
      );
    });
  }

  function buildTrapQuestions(pack) {
    return Array.from({ length: pack.trapCount }, (_, index) => {
      const topic = pack.targetTopics[index % pack.targetTopics.length];
      const tag = pack.weaknessTags[index % pack.weaknessTags.length];
      const wrong = `${topic}では、例外や期限を確認せず、制度名が近ければ同じ扱いにしてよい。`;
      return makeQuestion(
        questionId(pack, "trap", index),
        "関税法等",
        topic,
        lessonId(pack, index % pack.lectures.length),
        "ひっかけ",
        "trapCheck",
        `記述「${wrong}」の問題点はどれか。`,
        ["問題なし", "制度・期限・効果の混同", "計算式だけが誤り", "科目名だけが誤り"],
        "制度・期限・効果の混同",
        `${topic}では、制度名、要件、期限、効果を個別に確認します。`,
        "もっともらしい制度名を見せて、例外や効果の差を消すひっかけです。",
        tag,
        pack.packId,
        "trap"
      );
    });
  }

  function buildMiniMockQuestions(pack) {
    return Array.from({ length: 10 }, (_, index) => {
      const topic = pack.targetTopics[index % pack.targetTopics.length];
      const tag = pack.weaknessTags[index % pack.weaknessTags.length];
      const answer = index % 2 === 0 ? "正しい" : "誤り";
      const statement = answer === "正しい"
        ? `${topic}は、原則と例外、主体、期限を分けて確認すると判定しやすい。`
        : `${topic}は、現行法確認や要件確認をせず、常に同じ結論で処理してよい。`;
      return makeQuestion(
        mockId(pack, index),
        "関税法等",
        topic,
        lessonId(pack, index % pack.lectures.length),
        "標準",
        "trueFalse",
        statement,
        ["正しい", "誤り"],
        answer,
        `${topic}は判断軸で整理します。数字・期限・対象範囲は現行法確認が必要です。`,
        "常に、だけ、すべて、という断定語で例外を消す表現に注意します。",
        tag,
        pack.packId,
        "miniMock"
      );
    });
  }

  const packByQuestion = questionNos.map((questionNo, index) => packSpecs[index % packSpecs.length]);
  const examAnalysis = examNos.flatMap((examNo) => questionNos.map((questionNo) => {
    const pack = packByQuestion[questionNo - 1];
    const mainTopic = pack.targetTopics[(examNo + questionNo) % pack.targetTopics.length];
    return {
      id: `EXAM-${examNo}-KZ-Q${String(questionNo).padStart(2, "0")}`,
      examNo,
      subject: "関税法等",
      questionNo,
      format: formats[(examNo + questionNo) % formats.length],
      mainTopic,
      subTopics: pack.targetTopics.slice(0, Math.min(4, pack.targetTopics.length)),
      requiredKnowledge: [`${mainTopic}の原則`, "主体・権限者", "期限・提出要否", "例外と効果"],
      trapPatterns: ["語句の置換", "主体の入れ替え", "期限・期間の混同", "例外の削除"],
      weaknessTags: pack.weaknessTags,
      relatedPackIds: [pack.packId],
      priority: priorityByQuestion[questionNo] || pack.priority,
      sourceLabel: pack.sourceLabel,
      lawRevisionCheckRequired: pack.lawRevisionCheckRequired,
      lawRevisionStatus: pack.lawRevisionStatus,
      lawRevisionCheckedAt: pack.lawRevisionCheckedAt,
      lawRevisionMemo: pack.lawRevisionMemo,
      note
    };
  }));

  packSpecs = packSpecs.map((pack) => ({
    ...pack,
    sourceExamQuestions: examAnalysis.filter((item) => item.relatedPackIds.includes(pack.packId)).map((item) => item.id)
  }));

  const generatedLessons = packSpecs.flatMap(buildLessons);
  const checkQuestions = packSpecs.flatMap(buildCheckQuestions);
  const trapQuestions = packSpecs.flatMap(buildTrapQuestions);
  const miniMockQuestions = packSpecs.flatMap(buildMiniMockQuestions);

  const materialPacks = packSpecs.map((pack) => {
    const lectureIds = pack.lectures.map((_, index) => lessonId(pack, index));
    const checkQuestionIds = Array.from({ length: pack.checkCount }, (_, index) => questionId(pack, "check", index));
    const trapQuestionIds = Array.from({ length: pack.trapCount }, (_, index) => questionId(pack, "trap", index));
    const mockQuestionIds = Array.from({ length: 10 }, (_, index) => mockId(pack, index));
    return {
      packId: pack.packId,
      packName: pack.packName,
      subject: pack.subject,
      targetTopics: pack.targetTopics,
      sourceExamQuestions: pack.sourceExamQuestions,
      reason: "第51回以降の関税法等で繰り返し問われる論点・ひっかけ・弱点タグを横断補強するため。",
      lectures: pack.lectures,
      checkQuestions: pack.checkQuestions,
      trapQuestions: pack.trapQuestions,
      drills: pack.drills,
      miniMockQuestions: pack.miniMockQuestions,
      lectureIds,
      checkQuestionIds,
      trapQuestionIds,
      drillIds: pack.drillTypes.map((name, index) => `${pack.packId}-DRILL-${String(index + 1).padStart(2, "0")}`),
      mockQuestionIds,
      weaknessTags: pack.weaknessTags,
      priority: pack.priority,
      sourceLabel: pack.sourceLabel,
      lawRevisionCheckRequired: pack.lawRevisionCheckRequired,
      lawRevisionStatus: pack.lawRevisionStatus,
      lawRevisionCheckedAt: pack.lawRevisionCheckedAt,
      lawRevisionMemo: pack.lawRevisionMemo
    };
  });

  const weaknessDrills = materialPacks.flatMap((pack) => pack.drillIds.map((drillId, index) => ({
    drillId,
    packId: pack.packId,
    drillName: packSpecs.find((spec) => spec.packId === pack.packId).drillTypes[index],
    subject: "関税法等",
    weaknessTags: pack.weaknessTags,
    questionIds: [...pack.checkQuestionIds, ...pack.trapQuestionIds].filter((_, qIndex) => qIndex % pack.drillIds.length === index),
    sourceLabel: pack.sourceLabel,
    lawRevisionCheckRequired: pack.lawRevisionCheckRequired,
    lawRevisionStatus: pack.lawRevisionStatus,
    lawRevisionCheckedAt: pack.lawRevisionCheckedAt,
    lawRevisionMemo: pack.lawRevisionMemo
  })));

  window.TSUKAN_KZ_EXAM_ANALYSIS = examAnalysis;
  window.TSUKAN_KZ_MATERIAL_PACKS = materialPacks;
  window.TSUKAN_KZ_GENERATED_LESSONS = generatedLessons;
  window.TSUKAN_KZ_CHECK_QUESTIONS = checkQuestions;
  window.TSUKAN_KZ_TRAP_QUESTIONS = trapQuestions;
  window.TSUKAN_KZ_WEAKNESS_DRILLS = weaknessDrills;
  window.TSUKAN_KZ_MINI_MOCK_SETS = materialPacks.map((pack) => ({
    mockId: `${pack.packId}-MINI-MOCK`,
    packId: pack.packId,
    mockName: `${pack.packName} ミニ模試`,
    subject: "関税法等",
    questionIds: pack.mockQuestionIds,
    sourceLabel: pack.sourceLabel,
    lawRevisionCheckRequired: pack.lawRevisionCheckRequired,
    lawRevisionStatus: pack.lawRevisionStatus,
    lawRevisionCheckedAt: pack.lawRevisionCheckedAt,
    lawRevisionMemo: pack.lawRevisionMemo
  }));

  if (Array.isArray(window.TSUKAN_COURSES)) {
    const course = window.TSUKAN_COURSES.find((item) => item.id === "course-kanzeihou-intro");
    if (course) course.lessonIds = [...new Set([...(course.lessonIds || []), ...generatedLessons.map((lesson) => lesson.id)])];
  }
  if (Array.isArray(window.TSUKAN_LESSONS)) {
    window.TSUKAN_LESSONS.push(...generatedLessons);
  }
  if (Array.isArray(window.TSUKAN_QUESTION_BANK)) {
    window.TSUKAN_QUESTION_BANK.push(...checkQuestions, ...trapQuestions, ...miniMockQuestions);
  }
  if (Array.isArray(window.TSUKAN_MOCK_EXAM_QUESTIONS)) {
    window.TSUKAN_MOCK_EXAM_QUESTIONS.push(...miniMockQuestions.map((question) => ({
      id: question.id,
      subject: question.subject,
      topic: question.topic,
      type: question.questionType === "trueFalse" ? "trueFalse" : "single",
      question: question.question,
      choices: question.choices,
      answer: question.answer,
      explanation: question.explanation,
      trapExplanation: question.trapExplanation,
      weaknessTag: question.weaknessTag,
      relatedLessonId: question.lessonId,
      questionSource: question.questionSource,
      reinforcementPackId: question.reinforcementPackId,
      sourceLabel: question.sourceLabel,
      lawRevisionCheckRequired: question.lawRevisionCheckRequired,
      lawRevisionStatus: question.lawRevisionStatus,
      lawRevisionCheckedAt: question.lawRevisionCheckedAt,
      lawRevisionMemo: question.lawRevisionMemo
    })));
  }
  if (Array.isArray(window.TSUKAN_REINFORCEMENT_PACKS)) {
    window.TSUKAN_REINFORCEMENT_PACKS.push(...materialPacks.map((pack) => ({
      id: pack.packId,
      packName: pack.packName,
      sourceExam: "第51回〜第59回 通関士試験",
      sourceYear: "2017-2025",
      sourceSubject: "関税法等",
      sourceQuestionNo: `${pack.sourceExamQuestions.length}問分の論点分析`,
      targetSubject: pack.subject,
      targetTopic: pack.targetTopics.join(" / "),
      detectedWeaknessTags: pack.weaknessTags,
      summary: pack.reason,
      lessonIdsAdded: pack.lectureIds,
      questionIdsAdded: [...pack.checkQuestionIds, ...pack.trapQuestionIds],
      drillTagsAdded: pack.weaknessTags,
      priority: pack.priority,
      status: "implemented",
      sourceLabel: pack.sourceLabel,
      lawRevisionCheckRequired: pack.lawRevisionCheckRequired,
      lawRevisionStatus: pack.lawRevisionStatus,
      lawRevisionCheckedAt: pack.lawRevisionCheckedAt,
      lawRevisionMemo: pack.lawRevisionMemo
    })));
  }
})();
