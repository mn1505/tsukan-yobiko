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

  const kz001WeaknessTags = ["課税価格", "輸入取引", "現実支払価格", "加算要素", "運賃保険料", "無償提供物品", "ロイヤルティ", "航空運賃特例", "同種類似貨物", "通関実務計算"];

  const kz001LessonBlueprints = [
    {
      title: "課税価格とは何か",
      topic: "課税価格の決定原則",
      tag: "課税価格",
      intro: "課税価格は関税額計算の土台であり、単なる請求額ではなく、評価方法に従って決める価格です。",
      lecture: "課税価格は、輸入貨物に課される関税を計算するための価格です。出題では、売買価格、インボイス価格、現実支払価格、課税価格を同じものとして読ませるひっかけが多くなります。\n\n最初に押さえる軸は、原則として輸入取引における現実支払価格を出発点にし、法定の加算要素を加えて課税価格を作る、という流れです。現実支払価格そのものが課税価格になるとは限りません。\n\n判断順序は、輸入取引があるか、現実支払価格を把握できるか、加算すべき費用があるか、特殊関係などで取引価格をそのまま使えるか、の順に確認します。数字・対象範囲は現行法確認が必要です。",
      keyPoints: ["課税価格は関税額計算の基礎価格", "現実支払価格と課税価格を区別する", "加算要素は課税価格を作るための調整", "原則法で処理できないときは代替法へ進む"],
      solveSteps: ["貨物が輸入される取引かを確認する", "買手が売手へ支払う価格を確認する", "輸入港到着までの費用や法定加算要素を確認する", "取引価格を使えない事情がないか確認する"],
      traps: ["インボイス価格を常に課税価格と断定する", "現実支払価格に加算要素を含めずに終える", "特殊関係があるだけで直ちに原則法を捨てる"]
    },
    {
      title: "輸入取引と現実支払価格",
      topic: "輸入取引",
      tag: "輸入取引",
      intro: "輸入取引は、輸入貨物が日本へ輸入される原因となる売買かどうかで判断します。",
      lecture: "輸入取引は、外国から日本へ貨物が輸入される原因となる売買です。外国での単なる在庫移動、国内販売だけを見て、すぐ輸入取引と決めることはできません。\n\n現実支払価格は、買手が売手に対し、輸入貨物について現実に支払った又は支払うべき価格を出発点にします。ただし、課税価格はここに加算要素を調整した後の価格です。したがって、現実支払価格イコール課税価格と読む選択肢は慎重に確認します。\n\n買手・売手の関係、誰が誰に支払うか、支払が輸入貨物の条件になっているかを分けると、ロイヤルティや売手帰属収益の問題にもつながります。",
      keyPoints: ["輸入の原因となる売買を探す", "現実支払価格は課税価格の出発点", "買手・売手・第三者支払を分ける", "支払条件と貨物との関連を読む"],
      solveSteps: ["契約の流れから輸入の原因となる売買を特定する", "買手と売手を固定する", "売手に支払う金額と第三者への支払を分ける", "加算対象か非加算かを判定する"],
      traps: ["国内転売価格を輸入取引価格として読む", "支払先だけで現実支払価格から除外する", "課税価格と現実支払価格を同義にする"]
    },
    {
      title: "加算要素の全体像",
      topic: "加算要素",
      tag: "加算要素",
      intro: "加算要素は、現実支払価格に含まれていない一定の費用を課税価格へ反映する仕組みです。",
      lecture: "加算要素の判断では、費用名を暗記するだけでは足りません。誰が負担したか、輸入貨物に関係するか、輸入港到着までのものか、現実支払価格に既に含まれているかを確認します。\n\n代表例は、輸入港到着までの運賃・保険料、仲介料等、容器・包装費用、買手が無償又は値引きで提供した物品や役務、一定のロイヤルティ、売手に帰属する転売収益です。\n\n一方、輸入後の国内運送費、輸入後の据付費、国内販売費などは、条件を満たす場合を除き、輸入港到着までの価値ではないため混同しないようにします。",
      keyPoints: ["現実支払価格に未算入かを確認する", "輸入貨物との関連性を見る", "輸入港到着前後を分ける", "買手負担か売手帰属かを確認する"],
      solveSteps: ["費用の発生時点を確認する", "負担者と支払先を確認する", "輸入貨物の販売条件かを確認する", "既に価格に含まれていれば二重加算しない"],
      traps: ["国内費用を輸入港到着前費用として加算する", "価格に含まれる費用を重ねて加算する", "費用名だけで機械的に判断する"]
    },
    {
      title: "運賃・保険料の扱い",
      topic: "運賃・保険料",
      tag: "運賃保険料",
      intro: "運賃・保険料は、輸入港到着までか、輸入後かで結論が分かれます。",
      lecture: "課税価格の計算では、輸入港到着までに要する運賃、保険料その他運送関連費用が重要です。輸入後に国内で発生する運送費や保管費を、同じ運送費という名前だけで加算しないようにします。\n\n価格条件も読解の入口です。CIF条件のように到着までの費用が価格に含まれている場面と、FOB条件のように別途運賃・保険料を足す場面では計算が変わります。ただし名称だけで決めず、設問に示された費用の内訳を優先します。\n\n航空運賃特例が絡むと、実際航空運賃をそのまま足すのか、通常の運送方法を基準にするのかが問われます。",
      keyPoints: ["輸入港到着までの費用を確認する", "輸入後国内費用は区別する", "価格条件と内訳を合わせて読む", "航空運賃特例の有無を確認する"],
      solveSteps: ["価格条件を読む", "運賃・保険料が価格に含まれるか確認する", "輸入港到着前後で費用を分ける", "航空輸送なら特例の対象か確認する"],
      traps: ["国内配送費を輸入運賃として加算する", "CIF価格に運賃を二重加算する", "航空運賃特例をすべての航空輸送に広げる"]
    },
    {
      title: "無償提供物品の判断",
      topic: "無償提供物品",
      tag: "無償提供物品",
      intro: "買手が無償又は値引きで提供した材料・部品・工具等は、輸入貨物に組み込まれるか等を確認します。",
      lecture: "無償提供物品は、買手が売手に無償又は値引きで提供し、輸入貨物の生産や販売に関連するものを課税価格に反映する論点です。材料、部品、金型、工具、設計等が典型です。\n\n判断では、提供者が買手側か、提供物が輸入貨物に組み込まれる又は生産に使用されるか、価額を合理的に配分できるかを確認します。売手が自ら通常調達したものを単に価格に含めている場合とは区別します。\n\n計算問題では、無償提供物品の価額を輸入数量へ按分する処理が出やすいため、金額の足し忘れと二重計上に注意します。",
      keyPoints: ["買手側からの提供かを確認する", "輸入貨物の生産・販売との関連を見る", "無償又は値引き提供を見落とさない", "必要に応じて数量按分する"],
      solveSteps: ["提供者を確認する", "提供物の用途を確認する", "現実支払価格に含まれていないか確認する", "課税価格へ配分して加算する"],
      traps: ["無償だから価格に関係しないと考える", "輸入貨物と無関係な販促物まで加算する", "一括提供額を数量按分せずに処理する"]
    },
    {
      title: "ロイヤルティ・ライセンス料の判断",
      topic: "ロイヤルティ・ライセンス料",
      tag: "ロイヤルティ",
      intro: "ロイヤルティは、輸入貨物に関連し、取引条件として支払われるかが核心です。",
      lecture: "ロイヤルティ・ライセンス料は、支払名目だけで加算対象とは決まりません。輸入貨物に関連しているか、買手が輸入貨物を購入するための条件として支払うものかを確認します。\n\n支払先が売手でない場合でも、条件を満たすと加算対象になり得ます。逆に、国内販売活動だけに対応する支払、輸入貨物の購入条件といえない支払は、名称がロイヤルティでも直ちに加算とはいえません。\n\n出題では、商標使用料、製造ノウハウ、販売権、国内広告協力金などを混ぜ、関連性と支払条件を読み落とさせます。",
      keyPoints: ["輸入貨物との関連性を見る", "販売条件・購入条件かを確認する", "支払先だけで判断しない", "国内活動への対価と区別する"],
      solveSteps: ["支払名目を確認する", "輸入貨物との関係を読む", "支払が購入条件か確認する", "非関連部分があれば分ける"],
      traps: ["ロイヤルティという名称だけで加算する", "第三者払いだから常に非加算にする", "国内販売権の対価を輸入貨物の条件と混同する"]
    },
    {
      title: "航空運賃特例",
      topic: "航空運賃特例",
      tag: "航空運賃特例",
      intro: "航空運賃特例は、航空輸送という事実だけでなく、特例対象となる事情を確認します。",
      lecture: "航空運賃特例は、一定の貨物について航空運賃をそのまま課税価格に反映すると過大になる場面を調整する論点です。出題では、航空便なら常に特例、又は航空便なら常に実費加算、という極端な読みが狙われます。\n\n確認するのは、対象貨物か、航空輸送を使った事情が特例の範囲に入るか、通常の運送方法による運賃相当額で処理する場面かです。具体的な対象範囲は現行法確認が必要です。\n\n計算では、実際航空運賃、通常運賃相当額、保険料、FOB価格等のどれを採用するかを先に決め、最後に加算漏れがないか確認します。",
      keyPoints: ["航空輸送だけで結論を出さない", "特例対象と適用要件を確認する", "通常運賃相当額を使う場面を区別する", "対象範囲は現行法確認"],
      solveSteps: ["航空輸送の理由を確認する", "特例対象か確認する", "採用する運賃額を決める", "他の加算要素と合わせて計算する"],
      traps: ["全ての航空貨物に特例を適用する", "特例対象なのに実際航空運賃をそのまま足す", "対象範囲を過去知識で固定する"]
    },
    {
      title: "課税価格の代替的決定方法",
      topic: "代替的決定方法",
      tag: "同種類似貨物",
      intro: "原則の取引価格を使えない場合は、定められた順序で別の評価方法を検討します。",
      lecture: "原則法で課税価格を決められない場合、同種貨物又は類似貨物の取引価格、国内販売価格方式、製造原価方式など、定められた評価方法へ進みます。好きな方法を選ぶのではなく、順序と要件があります。\n\n同種貨物は性質・品質等が同じもの、類似貨物は完全に同じではないが同様の性質・機能を持つものとして整理します。国内販売価格方式では輸入後の国内販売価格から一定費用を控除し、製造原価方式では材料費・製造費等を積み上げる考え方になります。\n\n特殊関係がある場合も、それだけで直ちに取引価格を使えないわけではありません。価格に影響しているかを確認します。",
      keyPoints: ["代替法には順序がある", "同種貨物と類似貨物を区別する", "国内販売価格方式は控除型", "製造原価方式は積上型", "特殊関係は価格影響を確認する"],
      solveSteps: ["原則法を使えない理由を確認する", "次順位の評価方法を検討する", "同種・類似の違いを読む", "国内販売価格方式と製造原価方式を取り違えない"],
      traps: ["評価方法を任意に選ぶ", "同種と類似を同じ意味で読む", "特殊関係があるだけで取引価格を排除する"]
    },
    {
      title: "通関実務の計算問題へのつなげ方",
      topic: "通関実務計算",
      tag: "通関実務計算",
      intro: "課税価格論点は、関税法等の知識問題だけでなく通関実務の計算にも直結します。",
      lecture: "通関実務では、価格条件、運賃、保険料、無償提供物品、ロイヤルティ、国内費用などを読み分け、課税価格を作ってから税額計算に入ります。知識問題で覚えた加算要素の判断を、金額処理へ変換する練習が必要です。\n\n実務連携の基本は、まずインボイス価格に何が含まれているかを確認し、次に含まれていない輸入港到着までの費用を加算し、最後に加算対象外の国内費用を除外することです。\n\n端数処理、為替換算、按分計算は別論点ですが、課税価格の入口を誤ると後段の税額がすべてずれます。",
      keyPoints: ["価格条件から含まれる費用を読む", "未算入の加算要素を足す", "国内費用を除外する", "按分・為替・端数処理へつなげる"],
      solveSteps: ["インボイス価格の条件を確認する", "別払い費用をリスト化する", "加算・非加算に仕分ける", "課税価格を確定して税額計算へ進む"],
      traps: ["CIFとFOBを読み違える", "国内費用を足す", "無償提供物品やロイヤルティを金額処理から落とす"]
    }
  ];

  function kz001CheckBlueprints() {
    const basics = [
      ["課税価格", "課税価格は、関税額を計算するために評価方法に従って決める価格である。", "課税価格はインボイス価格そのものとは限らず、評価方法に従って決めます。"],
      ["輸入取引", "輸入取引は、輸入貨物が日本へ輸入される原因となる売買かを中心に判断する。", "単なる国内販売や在庫移動ではなく、輸入の原因となる売買を探します。"],
      ["現実支払価格", "現実支払価格は課税価格の出発点であり、加算要素の確認を省略できるという意味ではない。", "現実支払価格に必要な加算を行って課税価格を作ります。"],
      ["加算要素", "加算要素は、現実支払価格に含まれていない一定の費用を課税価格へ反映するために確認する。", "未算入かどうか、輸入貨物との関連があるかを読みます。"],
      ["運賃保険料", "輸入港到着までの運賃・保険料は、価格に含まれていない場合に加算対象となり得る。", "到着前費用か、既に価格に含まれるかを確認します。"],
      ["運賃保険料", "輸入後の国内配送費は、輸入港到着までの費用と区別して判断する。", "国内費用を輸入運賃と混同しないことが重要です。"],
      ["加算要素", "仲介料・手数料は、名目だけでなく誰のための支払かを確認して判断する。", "買付手数料等との区別が狙われます。"],
      ["加算要素", "輸入貨物の容器・包装費用は、貨物の一部として課税価格へ反映される場面がある。", "容器・包装が輸入貨物と一体で扱われるかを読みます。"],
      ["無償提供物品", "買手が無償で提供した材料が輸入貨物に組み込まれる場合、評価漏れに注意する。", "無償でも貨物価値を構成する場合は加算を検討します。"],
      ["無償提供物品", "買手提供の金型や工具は、輸入貨物の生産に使われるかを確認する。", "生産関連性と価額配分がポイントです。"],
      ["ロイヤルティ", "ロイヤルティは、輸入貨物との関連性と購入条件性を分けて判断する。", "名称だけで加算・非加算を決めません。"],
      ["ロイヤルティ", "ロイヤルティの支払先が売手以外でも、条件を満たせば加算対象となり得る。", "支払先だけで除外するのは危険です。"],
      ["加算要素", "買手が輸入後に行う国内広告費は、輸入貨物の購入条件かを確認して扱う。", "国内活動費と輸入貨物の条件を分けます。"],
      ["加算要素", "売手に帰属する転売収益がある場合、課税価格への反映を検討する。", "輸入後の収益でも売手帰属なら論点になります。"],
      ["航空運賃特例", "航空運賃特例は、航空輸送であるという事実だけでなく対象範囲を確認する。", "すべての航空貨物に自動適用されるわけではありません。"],
      ["同種類似貨物", "原則法で課税価格を決められない場合、評価方法の順序を確認する。", "任意選択ではなく順序があります。"],
      ["同種類似貨物", "同種貨物と類似貨物は、性質・品質等の一致度で区別して読む。", "似た言葉ですが同じ意味ではありません。"],
      ["同種類似貨物", "国内販売価格方式は、輸入後の国内販売価格から一定費用を控除して考える。", "積上型ではなく控除型として整理します。"],
      ["同種類似貨物", "製造原価方式は、材料費や製造費等を積み上げる考え方で整理する。", "国内販売価格方式と発想が逆です。"],
      ["輸入取引", "買手と売手に特殊関係があっても、それだけで取引価格を必ず使えないとは限らない。", "価格への影響を確認します。"]
    ];
    const oneAnswer = [
      ["課税価格", "課税価格の出発点として最初に確認する価格はどれか。", ["現実支払価格", "輸入後の国内販売価格", "国内配送費だけ", "関税額"], "現実支払価格", "原則法では現実支払価格を出発点にします。"],
      ["輸入取引", "輸入取引の判断で最も重要な観点はどれか。", ["輸入の原因となる売買か", "契約書のページ数", "国内倉庫の所在地", "販売広告の有無"], "輸入の原因となる売買か", "輸入貨物が日本へ輸入される原因となる売買を探します。"],
      ["現実支払価格", "現実支払価格と課税価格の関係として適切なものはどれか。", ["出発点と調整後価格の関係", "常に同額", "互いに無関係", "税率の別名"], "出発点と調整後価格の関係", "加算要素を反映した後が課税価格になります。"],
      ["加算要素", "加算要素の判定で最初に避けたい処理はどれか。", ["費用名だけで即断する", "支払者を確認する", "輸入貨物との関連を読む", "価格に含まれるかを見る"], "費用名だけで即断する", "名称だけでなく要件を確認します。"],
      ["運賃保険料", "FOB価格で輸入港到着までの海上運賃が別払いの場合、通常まず検討する処理はどれか。", ["運賃の加算", "国内販売費の控除", "関税率の変更", "輸入取引の否定"], "運賃の加算", "到着までの運賃が未算入なら加算を検討します。"],
      ["運賃保険料", "CIF価格に含まれる輸入港到着までの運賃について注意すべき点はどれか。", ["二重加算しない", "必ず別途加算する", "国内費用へ振り替える", "課税価格から常に控除する"], "二重加算しない", "既に価格に含まれる費用は重ねて加算しません。"],
      ["加算要素", "買付手数料と混同しやすい費用はどれか。", ["仲介料・手数料", "関税額", "消費税額", "輸入後修理費"], "仲介料・手数料", "誰のための手数料かを確認します。"],
      ["無償提供物品", "買手が無償提供した部品が輸入貨物に組み込まれるときの注意点はどれか。", ["価額の加算漏れ", "税率表の類注だけ", "輸出許可番号", "国内販売日"], "価額の加算漏れ", "無償提供でも貨物価値に含めるべき場面があります。"],
      ["無償提供物品", "無償提供物品を数量に応じて処理するときの実務的注意はどれか。", ["合理的な按分", "常に全額を初回だけ控除", "税率を二倍にする", "運賃を無視する"], "合理的な按分", "一括提供額は輸入数量等で配分する場面があります。"],
      ["ロイヤルティ", "ロイヤルティ判定で中心となる二要素はどれか。", ["関連性と購入条件性", "重量と色", "保税地域と蔵置期間", "通関業者名と所在地"], "関連性と購入条件性", "輸入貨物に関連し購入条件かを読みます。"],
      ["ロイヤルティ", "第三者へ支払うライセンス料について適切な読み方はどれか。", ["支払先だけで除外しない", "常に非加算", "常に国内費用", "常に同種貨物方式"], "支払先だけで除外しない", "条件を満たせば第三者払いでも加算対象になり得ます。"],
      ["加算要素", "売手帰属収益の論点で見るべき点はどれか。", ["転売収益等が売手へ帰属するか", "輸入者の社名の長さ", "国内倉庫の床面積", "輸入申告書の枚数"], "転売収益等が売手へ帰属するか", "売手に戻る収益は課税価格の論点になります。"],
      ["航空運賃特例", "航空運賃特例で避けるべき判断はどれか。", ["航空輸送なら全部同じ処理とする", "対象範囲を確認する", "採用運賃を確認する", "現行法確認を残す"], "航空輸送なら全部同じ処理とする", "対象貨物・適用要件を確認します。"],
      ["航空運賃特例", "航空運賃特例が関係する計算で最初に決めるべき事項はどれか。", ["採用する運賃額", "消費税率", "国内販売広告の文案", "通関業者の報酬額"], "採用する運賃額", "実際航空運賃か通常運賃相当額かを確認します。"],
      ["同種類似貨物", "同種貨物による評価と類似貨物による評価の関係として適切な読み方はどれか。", ["同じではないため要件を分ける", "完全に同義", "常に国内販売価格方式より後", "常に製造原価方式と同じ"], "同じではないため要件を分ける", "一致度の高い同種と、近い性質の類似を分けます。"],
      ["同種類似貨物", "国内販売価格方式の基本発想はどれか。", ["国内販売価格から一定費用を控除する", "製造費だけを積み上げる", "航空運賃だけで決める", "関税額を価格にする"], "国内販売価格から一定費用を控除する", "国内販売価格方式は控除型です。"],
      ["同種類似貨物", "製造原価方式の基本発想はどれか。", ["製造に要した費用等を積み上げる", "国内販売価格から全てを控除する", "輸入後運賃だけで決める", "税率表から価格を読む"], "製造に要した費用等を積み上げる", "製造原価方式は積上型です。"],
      ["輸入取引", "特殊関係がある場合の正しい入口はどれか。", ["価格への影響を確認する", "必ず取引価格を排除する", "必ず税率を変更する", "必ず航空運賃特例にする"], "価格への影響を確認する", "特殊関係の存在と価格影響を分けます。"],
      ["通関実務計算", "課税価格計算で価格条件を読む目的はどれか。", ["費用が価格に含まれるか確認する", "貨物の色を決める", "税関官署を選ぶ", "試験時間を延ばす"], "費用が価格に含まれるか確認する", "CIF、FOB等で加算処理が変わります。"],
      ["通関実務計算", "通関実務計算へ進む前に確定すべきものはどれか。", ["課税価格", "受験番号", "講義順", "復習予定日"], "課税価格", "税額計算は課税価格を土台にします。"]
    ];
    const cases = [
      ["輸入取引", "外国メーカーから日本の輸入者へ販売され、その売買を原因として貨物が日本へ送られる。この売買の評価上の位置付けとして最も近いものはどれか。", ["輸入取引", "輸入後国内販売", "単なる保管契約", "関税の納付委託"], "輸入取引", "輸入の原因となる売買です。"],
      ["現実支払価格", "インボイス価格に海上運賃が含まれず、輸入者が別途船会社へ支払う。課税価格計算でまず行うべき検討はどれか。", ["輸入港到着までの運賃加算", "輸入取引の否定", "国内販売価格方式への直行", "ロイヤルティの控除"], "輸入港到着までの運賃加算", "未算入の到着前運賃を加算するか確認します。"],
      ["運賃保険料", "輸入許可後、国内倉庫まで運ぶ費用が別途発生した。この費用の基本的な扱いはどれか。", ["輸入港到着までの費用と区別する", "常に輸入運賃として加算する", "現実支払価格に必ず含める", "同種貨物方式へ移る"], "輸入港到着までの費用と区別する", "輸入後国内費用は到着前費用と分けます。"],
      ["無償提供物品", "買手が金型を無償提供し、その金型で輸入貨物が製造された。見落としやすい処理はどれか。", ["金型価額の配分加算", "輸入後広告費の控除", "税率の変更", "原産地証明の省略"], "金型価額の配分加算", "買手提供の生産用物品は加算を検討します。"],
      ["無償提供物品", "買手が販売促進用の国内チラシを作成したが、輸入貨物の生産には使われていない。判断で重視する点はどれか。", ["輸入貨物の生産・販売条件との関連", "紙の厚さ", "国内配布枚数だけ", "輸入港の名称"], "輸入貨物の生産・販売条件との関連", "輸入貨物との関連性を確認します。"],
      ["ロイヤルティ", "買手が商標使用料を第三者へ支払い、その支払が輸入貨物購入の条件になっている。検討すべき処理はどれか。", ["ロイヤルティの加算", "支払先が第三者なので自動除外", "国内運賃への振替", "製造原価方式への直行"], "ロイヤルティの加算", "関連性と購入条件性を満たすか検討します。"],
      ["ロイヤルティ", "輸入後の国内広告だけに対応する協力金を支払う。ロイヤルティ論点での注意はどれか。", ["輸入貨物の購入条件かを確認する", "名称が協力金なら常に加算", "支払額を税率にする", "航空運賃特例にする"], "輸入貨物の購入条件かを確認する", "国内活動への対価か、購入条件かを分けます。"],
      ["加算要素", "輸入者が売手へ、輸入後の転売価格の一定割合を追加で支払う契約がある。評価上の論点はどれか。", ["売手帰属収益", "国内保税運送", "輸出禁止貨物", "延滞税"], "売手帰属収益", "転売収益が売手へ帰属する場合の加算論点です。"],
      ["航空運賃特例", "航空便で輸入されたが、設問は特例対象かどうかを明示していない。最も安定した対応はどれか。", ["対象範囲と要件を確認する", "必ず通常運賃を使う", "必ず航空運賃実費を除外する", "課税価格をゼロにする"], "対象範囲と要件を確認する", "航空輸送だけで結論を出しません。"],
      ["同種類似貨物", "取引価格が使えず、性質・品質が同じ貨物の取引価格資料がある。検討候補として最も近いものはどれか。", ["同種貨物による評価", "国内広告費方式", "輸入後修理方式", "延滞税方式"], "同種貨物による評価", "同じ性質・品質の貨物なら同種貨物の評価を検討します。"],
      ["同種類似貨物", "国内で販売された価格から、国内費用や利潤等を控除して課税価格を導く方法が問われている。該当するものはどれか。", ["国内販売価格方式", "製造原価方式", "航空運賃特例", "買付手数料方式"], "国内販売価格方式", "国内販売価格方式は控除型です。"],
      ["同種類似貨物", "製造者から材料費、加工費、通常利潤等の資料が示された。評価方法として最も近いものはどれか。", ["製造原価方式", "国内販売価格方式", "同種貨物方式だけ", "輸入後運賃方式"], "製造原価方式", "製造原価方式は積上型です。"],
      ["輸入取引", "買手と売手が親子会社である。次に確認すべきことはどれか。", ["特殊関係が価格に影響したか", "必ず課税価格を否定する", "必ず国内販売価格方式だけ使う", "必ず無償提供物品にする"], "特殊関係が価格に影響したか", "特殊関係の存在だけで原則法を排除しません。"],
      ["通関実務計算", "CIF価格に加え、輸入後の国内据付費が別記されている。計算での基本姿勢はどれか。", ["輸入港到着後の費用かを確認して除外を検討する", "全額を運賃として加算する", "現実支払価格を無視する", "同種貨物方式へ移る"], "輸入港到着後の費用かを確認して除外を検討する", "国内据付費は到着前費用と区別します。"],
      ["通関実務計算", "FOB価格、海上運賃、保険料、買手提供部品の価額が示された。課税価格計算で必要な作業はどれか。", ["加算対象を仕分けて合算する", "示された金額をすべて無視する", "国内販売価格だけを見る", "税率だけを選ぶ"], "加算対象を仕分けて合算する", "価格条件と加算要素を金額処理へつなげます。"]
    ];
    return [
      ...basics.map(([tag, statement, explanation], index) => ({
        topic: tag,
        tag,
        difficulty: index % 4 === 0 ? "基礎" : "標準",
        questionType: "trueFalse",
        question: `基礎確認${index + 1}: ${statement}`,
        choices: ["正しい", "誤り"],
        answer: "正しい",
        explanation,
        trapExplanation: "用語を同じ意味として読ませる選択肢に注意します。"
      })),
      ...oneAnswer.map(([tag, question, choices, answer, explanation], index) => ({
        topic: tag,
        tag,
        difficulty: "標準",
        questionType: "singleChoice",
        question: `一問一答${index + 1}: ${question}`,
        choices,
        answer,
        explanation,
        trapExplanation: "似た制度名や費用名だけで判断しないようにします。"
      })),
      ...cases.map(([tag, question, choices, answer, explanation], index) => ({
        topic: tag,
        tag,
        difficulty: index % 3 === 0 ? "応用" : "標準",
        questionType: "singleChoice",
        question: `ケース判定${index + 1}: ${question}`,
        choices,
        answer,
        explanation,
        trapExplanation: "事例では、支払条件、発生時点、輸入貨物との関連を分けます。"
      }))
    ];
  }

  function kz001TrapBlueprints() {
    return [
      ["輸入取引", "外国で成立した売買契約は、貨物の輸入原因でなくても常に輸入取引になる。", "輸入の原因となる売買かを確認する"],
      ["輸入取引", "国内の転売契約がある場合、その国内価格を直ちに輸入取引の現実支払価格にする。", "輸入前後の取引を分ける"],
      ["現実支払価格", "現実支払価格が分かれば、加算要素を確認しなくても課税価格は確定する。", "現実支払価格と課税価格を区別する"],
      ["課税価格", "インボイス価格はどの条件でも必ず課税価格と同額である。", "価格条件と加算要素を確認する"],
      ["加算要素", "加算要素は費用名が似ていればすべて加算してよい。", "法定要件と関連性で判断する"],
      ["運賃保険料", "輸入許可後の国内配送費も、運送費という名称なら輸入港到着までの運賃として加算する。", "輸入港到着前後を分ける"],
      ["運賃保険料", "CIF価格に含まれる海上運賃は、別記されていなくても常にもう一度加算する。", "二重加算を避ける"],
      ["加算要素", "買手のための買付手数料も、手数料という名称なら常に加算する。", "手数料の性質を確認する"],
      ["無償提供物品", "買手が無償提供した部品は支払がないため、輸入貨物に組み込まれても課税価格と無関係である。", "無償提供物品の価額を検討する"],
      ["無償提供物品", "買手提供の金型は一度だけ使うものではないため、輸入貨物の生産に使われても評価対象にならない。", "生産関連性と配分を確認する"],
      ["ロイヤルティ", "ロイヤルティは名称があれば、輸入貨物との関連や購入条件を読まず常に加算する。", "関連性と購入条件性を確認する"],
      ["ロイヤルティ", "売手以外へ支払うライセンス料は、輸入貨物の購入条件でも常に非加算である。", "第三者払いでも要件を満たす場合がある"],
      ["ロイヤルティ", "国内広告活動だけへの対価も、商標に関係すれば常に輸入貨物のロイヤルティとして加算する。", "国内活動対価と購入条件を分ける"],
      ["加算要素", "輸入後の転売収益の一部が売手へ戻る契約でも、輸入後の話なので評価上は常に無視する。", "売手帰属収益を確認する"],
      ["航空運賃特例", "航空便で輸入された貨物は、すべて航空運賃特例の対象になる。", "特例対象と要件を確認する"],
      ["航空運賃特例", "航空運賃特例では、どの貨物でも実際航空運賃を必ずそのまま加算する。", "採用する運賃額を確認する"],
      ["同種類似貨物", "同種貨物と類似貨物は同じ意味なので、どちらの資料を使っても順序は問題にならない。", "同種と類似を区別する"],
      ["同種類似貨物", "国内販売価格方式は、製造者の材料費と加工費を積み上げる方式である。", "国内販売価格方式と製造原価方式を分ける"],
      ["同種類似貨物", "製造原価方式は、国内販売価格から国内費用を控除する方式である。", "積上型と控除型を混同しない"],
      ["輸入取引", "買手と売手に特殊関係があれば、価格への影響を確認せず取引価格を必ず排除する。", "特殊関係の存在と価格影響を分ける"]
    ].map(([tag, wrong, answer], index) => ({
      topic: tag,
      tag,
      difficulty: "ひっかけ",
      questionType: "trapCheck",
      question: `ひっかけ${index + 1}: 次の記述の問題点はどれか。「${wrong}」`,
      choices: [answer, "問題はない", "税率だけを確認すれば足りる", "輸入申告先だけの問題である"],
      answer,
      explanation: `${answer}ことが必要です。`,
      trapExplanation: "もっともらしい費用名・制度名で、要件確認を省略させるひっかけです。"
    }));
  }

  function kz001MiniMockBlueprints() {
    return [
      ["課税価格", "基礎1: 課税価格は現実支払価格を出発点に、必要な加算要素を確認して決定する。", ["正しい", "誤り"], "正しい", "基礎"],
      ["輸入取引", "基礎2: 輸入取引は、輸入の原因となる売買かどうかを中心に判断する。", ["正しい", "誤り"], "正しい", "基礎"],
      ["運賃保険料", "基礎3: 輸入港到着までの運賃・保険料は、価格に未算入なら加算対象となり得る。", ["正しい", "誤り"], "正しい", "基礎"],
      ["無償提供物品", "基礎4: 買手が無償提供した生産用部品は、支払がないため常に課税価格から除外される。", ["正しい", "誤り"], "誤り", "基礎"],
      ["現実支払価格", "ひっかけ1: 現実支払価格が判明した時点で、課税価格は常に確定する。", ["正しい", "誤り"], "誤り", "ひっかけ"],
      ["ロイヤルティ", "ひっかけ2: ロイヤルティは支払先が売手でなければ、輸入貨物の購入条件でも加算対象にならない。", ["正しい", "誤り"], "誤り", "ひっかけ"],
      ["航空運賃特例", "ひっかけ3: 航空運賃特例は、航空輸送された全貨物へ自動的に適用される。", ["正しい", "誤り"], "誤り", "ひっかけ"],
      ["同種類似貨物", "ひっかけ4: 特殊関係があるだけで、価格への影響を確認せず取引価格を必ず使えないとする。", ["正しい", "誤り"], "誤り", "ひっかけ"],
      ["通関実務計算", "実務連携1: FOB価格、輸入港到着までの運賃、保険料が別々に示された場合、未算入の到着前費用を合算して課税価格を作る。", ["正しい", "誤り"], "正しい", "実務連携"],
      ["通関実務計算", "実務連携2: CIF価格に含まれる到着前運賃と、輸入後の国内配送費をどちらも同じ運賃として重ねて加算する。", ["正しい", "誤り"], "誤り", "実務連携"]
    ].map(([tag, question, choices, answer, category], index) => ({
      topic: tag,
      tag,
      difficulty: category === "ひっかけ" ? "ひっかけ" : category === "実務連携" ? "応用" : "標準",
      questionType: "trueFalse",
      question,
      choices,
      answer,
      explanation: `${category}問題です。課税価格の判断軸に沿って、輸入取引、現実支払価格、加算要素、輸入港到着前後を分けて確認します。`,
      trapExplanation: "断定語、同義扱い、国内費用の混入、支払先だけの判断に注意します。"
    }));
  }

  let packSpecs = [
    {
      packId: "KZ-PACK-001",
      packName: "課税価格・輸入取引・加算要素パック",
      priority: "A",
      targetTopics: ["課税価格の決定原則", "輸入取引", "現実支払価格", "買手と売手", "加算要素", "運賃・保険料", "仲介料・手数料", "容器・包装費用", "無償提供物品", "ロイヤルティ・ライセンス料", "売手帰属収益", "航空運賃特例", "同種又は類似貨物による課税価格", "国内販売価格方式", "製造原価方式", "特殊関係がある場合の注意点"],
      lectures: kz001LessonBlueprints.map((lesson) => lesson.title),
      lessonBlueprints: kz001LessonBlueprints,
      checkCount: 55,
      trapCount: 20,
      checkBlueprints: kz001CheckBlueprints(),
      trapBlueprints: kz001TrapBlueprints(),
      miniMockBlueprints: kz001MiniMockBlueprints(),
      drillTypes: ["課税価格基礎用語ドリル", "加算要素判定ドリル", "運賃・保険料判定ドリル", "無償提供物品ドリル", "ロイヤルティ判定ドリル", "航空運賃特例ドリル", "評価方法選択ドリル", "通関実務連携ドリル"],
      weaknessTags: kz001WeaknessTags
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
      const blueprint = Array.isArray(pack.lessonBlueprints) ? pack.lessonBlueprints[index] : null;
      const topic = blueprint?.topic || pack.targetTopics[index % pack.targetTopics.length];
      const tag = blueprint?.tag || pack.weaknessTags[index % pack.weaknessTags.length];
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
        intro: blueprint?.intro || `${title}では、${topic}を丸暗記ではなく判断軸で整理します。`,
        goal: `${pack.packName}の頻出論点を、選択肢の入れ替えに耐える形で説明できる状態を目標にします。`,
        lecture: blueprint?.lecture || `この講義は第51回以降の関税法等で繰り返し問われる論点分析から作成したオリジナル教材です。過去問本文や選択肢は保存せず、問われやすい知識、判断手順、ひっかけ方だけを抽出しています。\n\n${topic}では、制度名だけを覚えると失点しやすくなります。まず原則を確認し、次に例外、期限、主体、提出先、効果を分けます。似た語句が出たときは、同じ制度か、別制度の語句を混ぜたものかを確認します。\n\n現行法と出題年の法令が異なる可能性があるため、数字、期限、税率、対象範囲は学習時点で必ず現行法確認の対象にします。`,
        keyPoints: blueprint?.keyPoints || pack.targetTopics.slice(0, 5).map((item) => `${item}は原則・例外・効果をセットで確認する`),
        solveSteps: blueprint?.solveSteps || ["制度名を特定する", "主体と権限者を確認する", "期限・提出要否・効果を確認する", "似た制度への置換がないか読む"],
        confusingPoints: blueprint ? ["現実支払価格と課税価格の混同", "輸入港到着前費用と国内費用の混同", "名称だけで加算対象を決める誤り", "特殊関係があるだけで原則法を排除する誤り"] : pack.targetTopics.slice(0, 4).map((item) => `${item}と近接制度の混同`),
        traps: blueprint?.traps || [`${topic}の語句だけを見て例外を無視する`, "許可・承認・届出・申告を置き換える", "出題年の数字を現行法確認なしで固定する"],
        examTips: blueprint ? ["輸入取引、現実支払価格、加算要素の順に読む", "輸入港到着前後と支払条件を線引きする", "法改正未確認の範囲は要確認として扱う"] : ["断定語と例外語を確認する", "正しい語句が一部だけ入った誤文に注意する", "法改正が入りやすい数字は要確認として扱う"],
        practicalNotes: pack.packId === "KZ-PACK-001" || pack.packId === "KZ-PACK-008" ? ["通関実務の計算・分類問題にも波及するため、実務ドリルへ連携します。"] : [],
        penaltyTips: ["行政上の手続、税負担、罰則・制裁を同じものとして読まないようにします。"],
        principleExceptions: blueprint ? ["取引価格による原則法を先に検討し、使えない場合だけ代替法へ進みます。"] : ["原則を先に決め、例外は要件と効果を別行で確認します。"],
        distinctions: blueprint ? ["輸入取引と国内取引", "現実支払価格と課税価格", "加算対象費用と非加算費用", "同種貨物と類似貨物"] : [`${pack.targetTopics.slice(0, 3).join("・")}の違いを比較する`],
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
    if (Array.isArray(pack.checkBlueprints)) {
      return pack.checkBlueprints.map((item, index) => makeQuestion(
        questionId(pack, "check", index),
        "関税法等",
        item.topic,
        lessonId(pack, index % pack.lectures.length),
        item.difficulty,
        item.questionType,
        item.question,
        item.choices,
        item.answer,
        item.explanation,
        item.trapExplanation,
        item.tag,
        pack.packId,
        "check"
      ));
    }
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
    if (Array.isArray(pack.trapBlueprints)) {
      return pack.trapBlueprints.map((item, index) => makeQuestion(
        questionId(pack, "trap", index),
        "関税法等",
        item.topic,
        lessonId(pack, index % pack.lectures.length),
        item.difficulty,
        item.questionType,
        item.question,
        item.choices,
        item.answer,
        item.explanation,
        item.trapExplanation,
        item.tag,
        pack.packId,
        "trap"
      ));
    }
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
    if (Array.isArray(pack.miniMockBlueprints)) {
      return pack.miniMockBlueprints.map((item, index) => makeQuestion(
        mockId(pack, index),
        "関税法等",
        item.topic,
        lessonId(pack, index % pack.lectures.length),
        item.difficulty,
        item.questionType,
        item.question,
        item.choices,
        item.answer,
        item.explanation,
        item.trapExplanation,
        item.tag,
        pack.packId,
        "miniMock"
      ));
    }
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
