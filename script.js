const STORAGE_KEY = "jp-mn-tech-flashcards-state-v1";

const vocabulary = [
  {
    id: 1,
    category: "General Development",
    jp: "機能",
    reading: "きのう",
    mn: "функц, боломж",
  },
  {
    id: 2,
    category: "General Development",
    jp: "開発",
    reading: "かいはつ",
    mn: "хөгжүүлэлт",
  },
  {
    id: 3,
    category: "General Development",
    jp: "要件",
    reading: "ようけん",
    mn: "шаардлага",
  },
  {
    id: 4,
    category: "General Development",
    jp: "曖昧",
    reading: "あいまい",
    mn: "тодорхой бус",
  },
  {
    id: 5,
    category: "General Development",
    jp: "改善",
    reading: "かいぜん",
    mn: "сайжруулалт",
  },
  {
    id: 6,
    category: "General Development",
    jp: "原因",
    reading: "げんいん",
    mn: "шалтгаан",
  },
  {
    id: 7,
    category: "General Development",
    jp: "仕様",
    reading: "しよう",
    mn: "тодорхойлолт, хэрэгжүүлэх дүрэм, системийн шаардлагын нарийвчилсан тайлбар",
  },
  {
    id: 8,
    category: "General Development",
    jp: "満足",
    reading: "まんぞく",
    mn: "сэтгэл ханамж",
  },
  {
    id: 9,
    category: "General Development",
    jp: "目的",
    reading: "もくてき",
    mn: "зорилго",
  },
  {
    id: 10,
    category: "General Development",
    jp: "判断",
    reading: "はんだん",
    mn: "шийдвэр гаргах, дүгнэх, үнэлэх",
  },

  {
    id: 11,
    category: "Agile / Management",
    jp: "MVP",
    reading: "エムブイピー",
    mn: "хамгийн бага ажиллах бүтээгдэхүүн",
  },
  {
    id: 12,
    category: "Agile / Management",
    jp: "KPI",
    reading: "ケーピーアイ",
    mn: "гүйцэтгэлийн үндсэн үзүүлэлт",
  },
  {
    id: 13,
    category: "Agile / Management",
    jp: "スプリント",
    reading: "",
    mn: "богино хөгжүүлэлтийн цикл",
  },
  {
    id: 14,
    category: "Agile / Management",
    jp: "進捗",
    reading: "しんちょく",
    mn: "явц, ахиц",
  },
  {
    id: 15,
    category: "Agile / Management",
    jp: "見積もり",
    reading: "みつもり",
    mn: "урьдчилсан тооцоо, хугацаа болон нөөцийн үнэлгээ",
  },
  {
    id: 16,
    category: "Agile / Management",
    jp: "依存関係",
    reading: "いぞんかんけい",
    mn: "хамаарал",
  },
  {
    id: 17,
    category: "Agile / Management",
    jp: "優先度",
    reading: "ゆうせんど",
    mn: "эрэмбэ, түрүүнд хийх түвшин",
  },
  {
    id: 18,
    category: "Agile / Management",
    jp: "トレードオフ",
    reading: "",
    mn: "харилцан зөрчилтэй сонголт",
  },
  {
    id: 19,
    category: "Agile / Management",
    jp: "定義",
    reading: "ていぎ",
    mn: "тодорхойлолт",
  },

  {
    id: 20,
    category: "Architecture / System Design",
    jp: "フロントエンド",
    reading: "",
    mn: "хэрэглэгчийн тал",
  },
  {
    id: 21,
    category: "Architecture / System Design",
    jp: "バックエンド",
    reading: "",
    mn: "сервер тал",
  },
  {
    id: 22,
    category: "Architecture / System Design",
    jp: "設計",
    reading: "せっけい",
    mn: "төлөвлөлт, зохион байгуулалт, системийн бүтэц гаргах",
  },
  {
    id: 23,
    category: "Architecture / System Design",
    jp: "分離",
    reading: "ぶんり",
    mn: "тусгаарлалт",
  },
  {
    id: 24,
    category: "Architecture / System Design",
    jp: "関心の分離",
    reading: "かんしんのぶんり",
    mn: "хариуцлагыг тусгаарлах, үүргийг салгах зарчим",
  },
  {
    id: 25,
    category: "Architecture / System Design",
    jp: "モノリス",
    reading: "",
    mn: "нэг бүхэл систем",
  },
  {
    id: 26,
    category: "Architecture / System Design",
    jp: "マイクロサービス",
    reading: "",
    mn: "жижиг тусдаа үйлчилгээ",
  },
  {
    id: 27,
    category: "Architecture / System Design",
    jp: "キャッシュ",
    reading: "",
    mn: "түр хадгалалт",
  },
  {
    id: 28,
    category: "Architecture / System Design",
    jp: "非同期",
    reading: "ひどうき",
    mn: "дараалал хамаарахгүй зэрэг ажиллах, асинхрон",
  },
  {
    id: 29,
    category: "Architecture / System Design",
    jp: "同期",
    reading: "どうき",
    mn: "дарааллаар зэрэгцэн ажиллах, нэг хэмнэлтэй ажиллах, синхрон",
  },

  {
    id: 30,
    category: "Web / Frontend",
    jp: "ブラウザ",
    reading: "",
    mn: "хөтөч",
  },
  {
    id: 31,
    category: "Web / Frontend",
    jp: "画面",
    reading: "がめん",
    mn: "дэлгэц",
  },
  {
    id: 32,
    category: "Web / Frontend",
    jp: "表示",
    reading: "ひょうじ",
    mn: "дэлгэцэнд гаргах, харуулах",
  },
  {
    id: 33,
    category: "Web / Frontend",
    jp: "要素",
    reading: "ようそ",
    mn: "бүрэлдэхүүн хэсэг, элемент",
  },
  {
    id: 34,
    category: "Web / Frontend",
    jp: "開発者ツール",
    reading: "かいはつしゃツール",
    mn: "хөгжүүлэгчийн шалгах хэрэгсэл",
  },
  {
    id: 35,
    category: "Web / Frontend",
    jp: "レスポンシブ",
    reading: "",
    mn: "дэлгэцийн хэмжээнд зохицон өөрчлөгдөх",
  },
  {
    id: 36,
    category: "Web / Frontend",
    jp: "イベントリスナー",
    reading: "",
    mn: "үйлдэл сонсогч",
  },
  {
    id: 37,
    category: "Web / Frontend",
    jp: "非同期処理",
    reading: "ひどうきしょり",
    mn: "дараалал хамаарахгүй зэрэг гүйцэтгэх боловсруулалт",
  },
  {
    id: 38,
    category: "Web / Frontend",
    jp: "状態",
    reading: "じょうたい",
    mn: "төлөв, одоогийн байдал",
  },

  {
    id: 39,
    category: "Backend / API / Security",
    jp: "API",
    reading: "エーピーアイ",
    mn: "API",
  },
  {
    id: 40,
    category: "Backend / API / Security",
    jp: "エンドポイント",
    reading: "",
    mn: "хандах төгсгөлийн цэг, холболтын хаяг",
  },
  {
    id: 41,
    category: "Backend / API / Security",
    jp: "リクエスト",
    reading: "",
    mn: "хүсэлт",
  },
  {
    id: 42,
    category: "Backend / API / Security",
    jp: "レスポンス",
    reading: "",
    mn: "хариу",
  },
  {
    id: 43,
    category: "Backend / API / Security",
    jp: "認証",
    reading: "にんしょう",
    mn: "баталгаажуулалт",
  },
  {
    id: 44,
    category: "Backend / API / Security",
    jp: "認可",
    reading: "にんか",
    mn: "эрх олголт",
  },
  {
    id: 45,
    category: "Backend / API / Security",
    jp: "トークン",
    reading: "",
    mn: "токен",
  },
  {
    id: 46,
    category: "Backend / API / Security",
    jp: "ログ",
    reading: "",
    mn: "лог",
  },
  {
    id: 47,
    category: "Backend / API / Security",
    jp: "ミドルウェア",
    reading: "",
    mn: "хоёр системийн хооронд зуучлан ажиллах давхарга",
  },
  {
    id: 48,
    category: "Backend / API / Security",
    jp: "バリデーション",
    reading: "",
    mn: "өгөгдлийг шалгах, зөв эсэхийг баталгаажуулах",
  },

  {
    id: 49,
    category: "Database",
    jp: "データベース",
    reading: "",
    mn: "өгөгдлийн сан",
  },
  {
    id: 50,
    category: "Database",
    jp: "主キー",
    reading: "しゅキー",
    mn: "гол түлхүүр, давтагдахгүй таних утга",
  },
  {
    id: 51,
    category: "Database",
    jp: "外部キー",
    reading: "がいぶキー",
    mn: "гадаад түлхүүр, өөр хүснэгттэй холбох утга",
  },
  {
    id: 52,
    category: "Database",
    jp: "インデックス",
    reading: "",
    mn: "индекс",
  },
  {
    id: 53,
    category: "Database",
    jp: "トランザクション",
    reading: "",
    mn: "нэг бүхэл ажиллагаа, бүхэлд нь амжилттай эсвэл буцаагдах үйлдэл",
  },
  {
    id: 54,
    category: "Database",
    jp: "クエリ",
    reading: "",
    mn: "өгөгдөл асуух, хайх команд",
  },
  {
    id: 55,
    category: "Database",
    jp: "マイグレーション",
    reading: "",
    mn: "schema өөрчлөлт",
  },
  {
    id: 56,
    category: "Database",
    jp: "整合性",
    reading: "せいごうせい",
    mn: "өгөгдлийн нийцэл",
  },

  {
    id: 57,
    category: "DevOps / Infra",
    jp: "デプロイ",
    reading: "",
    mn: "системийг серверт байршуулж ажиллуулах",
  },
  {
    id: 58,
    category: "DevOps / Infra",
    jp: "サーバー",
    reading: "",
    mn: "сервер",
  },
  {
    id: 59,
    category: "DevOps / Infra",
    jp: "クラウド",
    reading: "",
    mn: "интернэтээр дамжуулан сервер ашиглах орчин",
  },
  {
    id: 60,
    category: "DevOps / Infra",
    jp: "ドメイン",
    reading: "",
    mn: "домэйн",
  },
  {
    id: 61,
    category: "DevOps / Infra",
    jp: "HTTPS",
    reading: "",
    mn: "аюулгүй холбоо",
  },
  {
    id: 62,
    category: "DevOps / Infra",
    jp: "バックアップ",
    reading: "",
    mn: "нөөцлөлт",
  },
  {
    id: 63,
    category: "DevOps / Infra",
    jp: "権限",
    reading: "けんげん",
    mn: "эрх",
  },

  { id: 64, category: "Test / QA", jp: "テスト", reading: "", mn: "тест" },
  {
    id: 65,
    category: "Test / QA",
    jp: "自動化",
    reading: "じどうか",
    mn: "автоматжуулалт",
  },
  { id: 66, category: "Test / QA", jp: "バグ", reading: "", mn: "алдаа" },
  {
    id: 67,
    category: "Test / QA",
    jp: "不具合",
    reading: "ふぐあい",
    mn: "доголдол, гажиг, хэвийн бус ажиллагаа",
  },
  {
    id: 68,
    category: "Test / QA",
    jp: "回帰テスト",
    reading: "かいきテスト",
    mn: "өмнөх үйлдэл эвдрэлгүй эсэхийг дахин шалгах туршилт",
  },
  {
    id: 69,
    category: "Test / QA",
    jp: "境界値",
    reading: "きょうかいち",
    mn: "хязгаарын утга, хил заагийн утга",
  },

  {
    id: 70,
    category: "Security",
    jp: "脆弱性",
    reading: "ぜいじゃくせい",
    mn: "эмзэг байдал",
  },
  {
    id: 71,
    category: "Security",
    jp: "攻撃",
    reading: "こうげき",
    mn: "халдлага",
  },
  {
    id: 72,
    category: "Security",
    jp: "ハッシュ化",
    reading: "ハッシュか",
    mn: "буцаан сэргээх боломжгүй хэлбэрт хувиргах",
  },
  {
    id: 73,
    category: "Security",
    jp: "暗号",
    reading: "あんごう",
    mn: "шифрлэл",
  },
  {
    id: 74,
    category: "Security",
    jp: "セキュリティ",
    reading: "",
    mn: "аюулгүй байдал",
  },

  {
    id: 75,
    category: "Git / Development Workflow",
    jp: "コミット",
    reading: "",
    mn: "өөрчлөлтийг хадгалж тэмдэглэх",
  },
  {
    id: 76,
    category: "Git / Development Workflow",
    jp: "ブランチ",
    reading: "",
    mn: "салбарласан хөгжүүлэлтийн шугам",
  },
  {
    id: 77,
    category: "Git / Development Workflow",
    jp: "マージ",
    reading: "",
    mn: "өөрчлөлтүүдийг нэгтгэх",
  },
  {
    id: 78,
    category: "Git / Development Workflow",
    jp: "コンフリクト",
    reading: "",
    mn: "зөрчил",
  },
  {
    id: 79,
    category: "Git / Development Workflow",
    jp: "プルリクエスト",
    reading: "",
    mn: "өөрчлөлтөө нэгтгэхийг хүссэн санал",
  },
  {
    id: 80,
    category: "Git / Development Workflow",
    jp: "履歴",
    reading: "りれき",
    mn: "түүх",
  },
  // --- NEW WORDS START ---
  {
    id: 81,
    category: "Product / Requirements",
    jp: "追加",
    reading: "ついか",
    mn: "нэмэлт оруулах",
  },
  {
    id: 82,
    category: "Product / Requirements",
    jp: "開発",
    reading: "かいはつ",
    mn: "хөгжүүлэлт",
  },
  {
    id: 83,
    category: "Product / Requirements",
    jp: "要件",
    reading: "ようけん",
    mn: "шаардлага",
  },
  {
    id: 84,
    category: "Product / Requirements",
    jp: "曖昧",
    reading: "あいまい",
    mn: "тодорхой бус",
  },
  {
    id: 85,
    category: "Product / Requirements",
    jp: "進める",
    reading: "すすめる",
    mn: "урагшлуулах, ахиулах",
  },
  {
    id: 86,
    category: "Product / Requirements",
    jp: "判断",
    reading: "はんだん",
    mn: "шийдвэр гаргах",
  },
  {
    id: 87,
    category: "Product / Requirements",
    jp: "目的",
    reading: "もくてき",
    mn: "зорилго",
  },
  {
    id: 88,
    category: "Product / Requirements",
    jp: "含める",
    reading: "ふくめる",
    mn: "багтаах, оруулах",
  },
  {
    id: 89,
    category: "Product / Requirements",
    jp: "除外",
    reading: "じょがい",
    mn: "хасах",
  },
  {
    id: 90,
    category: "Product / Requirements",
    jp: "基準",
    reading: "きじゅん",
    mn: "шалгуур",
  },

  {
    id: 91,
    category: "Analysis / Problem Solving",
    jp: "原因",
    reading: "げんいん",
    mn: "шалтгаан",
  },
  {
    id: 92,
    category: "Analysis / Problem Solving",
    jp: "特定",
    reading: "とくてい",
    mn: "яг тодорхойлох, онцлон тогтоох",
  },
  {
    id: 93,
    category: "Analysis / Problem Solving",
    jp: "改善",
    reading: "かいぜん",
    mn: "сайжруулах",
  },
  {
    id: 94,
    category: "Analysis / Problem Solving",
    jp: "方針",
    reading: "ほうしん",
    mn: "чиглэл, бодлого, баримтлах арга",
  },
  {
    id: 95,
    category: "Analysis / Problem Solving",
    jp: "危険",
    reading: "きけん",
    mn: "эрсдэл",
  },
  {
    id: 96,
    category: "Analysis / Problem Solving",
    jp: "適切",
    reading: "てきせつ",
    mn: "зохистой, тохиромжтой",
  },
  {
    id: 97,
    category: "Analysis / Problem Solving",
    jp: "満足",
    reading: "まんぞく",
    mn: "сэтгэл ханамж",
  },
  {
    id: 98,
    category: "Analysis / Problem Solving",
    jp: "対処",
    reading: "たいしょ",
    mn: "арга хэмжээ авах, шийдвэрлэх",
  },

  {
    id: 99,
    category: "Project / Management",
    jp: "報告",
    reading: "ほうこく",
    mn: "тайлагнах",
  },
  {
    id: 100,
    category: "Project / Management",
    jp: "共有",
    reading: "きょうゆう",
    mn: "хуваалцах",
  },
  {
    id: 101,
    category: "Project / Management",
    jp: "遅れる",
    reading: "おくれる",
    mn: "хоцрох",
  },
  {
    id: 102,
    category: "Project / Management",
    jp: "段階",
    reading: "だんかい",
    mn: "үе шат",
  },
  {
    id: 103,
    category: "Project / Management",
    jp: "定義",
    reading: "ていぎ",
    mn: "тодорхойлолт",
  },
  {
    id: 104,
    category: "Project / Management",
    jp: "依存関係",
    reading: "いぞんかんけい",
    mn: "хамаарал",
  },
  {
    id: 105,
    category: "Project / Management",
    jp: "見積もり",
    reading: "みつもり",
    mn: "тооцоолол",
  },
  {
    id: 106,
    category: "Project / Management",
    jp: "要素",
    reading: "ようそ",
    mn: "бүрэлдэхүүн хэсэг",
  },
  {
    id: 107,
    category: "Project / Management",
    jp: "仕組み",
    reading: "しくみ",
    mn: "дотоод бүтэц, ажиллах зарчим, механизм",
  },
  {
    id: 108,
    category: "Project / Management",
    jp: "進捗",
    reading: "しんちょく",
    mn: "явц",
  },
];

const elements = {
  modeSelect: document.getElementById("modeSelect"),
  categorySelect: document.getElementById("categorySelect"),
  progressText: document.getElementById("progressText"),
  progressFill: document.getElementById("progressFill"),
  totalCount: document.getElementById("totalCount"),
  studiedCount: document.getElementById("studiedCount"),
  knownCount: document.getElementById("knownCount"),
  reviewCount: document.getElementById("reviewCount"),
  remainingCount: document.getElementById("remainingCount"),
  flashcard: document.getElementById("flashcard"),
  categoryBadge: document.getElementById("categoryBadge"),
  cardStatePill: document.getElementById("cardStatePill"),
  promptLabel: document.getElementById("promptLabel"),
  promptText: document.getElementById("promptText"),
  readingText: document.getElementById("readingText"),
  answerPanel: document.getElementById("answerPanel"),
  answerLabel: document.getElementById("answerLabel"),
  answerText: document.getElementById("answerText"),
  knowButton: document.getElementById("knowButton"),
  againButton: document.getElementById("againButton"),
  restartButton: document.getElementById("restartButton"),
  completionState: document.getElementById("completionState"),
  restartCompleteButton: document.getElementById("restartCompleteButton"),
};

const baseState = {
  mode: "jp-to-mn",
  category: "All",
  activeQueue: [],
  reviewPool: [],
  knownIds: [],
  currentCardId: null,
  revealed: false,
  studiedCount: 0,
  newCardsSinceReview: 0,
  nextReviewThreshold: 2,
  currentPromptSide: "jp",
};

let state = { ...baseState };

function getCategories() {
  return ["All", ...new Set(vocabulary.map((word) => word.category))];
}

function getFilteredWords(category = state.category) {
  if (category === "All") {
    return vocabulary.slice();
  }

  return vocabulary.filter((word) => word.category === category);
}

function getDeckIds(category = state.category) {
  return getFilteredWords(category).map((word) => word.id);
}

function shuffle(array) {
  const copy = array.slice();

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getWordById(id) {
  return vocabulary.find((word) => word.id === id) || null;
}

function getCurrentWord() {
  return getWordById(state.currentCardId);
}

function isComplete() {
  const total = getFilteredWords().length;
  return total > 0 && state.knownIds.length >= total;
}

function buildDefaultSession(category = state.category) {
  const deckIds = getDeckIds(category);

  return {
    ...baseState,
    mode: state.mode,
    category,
    activeQueue: shuffle(deckIds),
    nextReviewThreshold: randomInt(2, 4),
  };
}

function sanitizeSavedState(savedState) {
  if (!savedState || typeof savedState !== "object") {
    return null;
  }

  const category = getCategories().includes(savedState.category)
    ? savedState.category
    : "All";
  const deckIds = new Set(getDeckIds(category));
  const dedupe = (items) =>
    [...new Set(Array.isArray(items) ? items : [])].filter((id) =>
      deckIds.has(id),
    );

  const knownIds = dedupe(savedState.knownIds);
  const reviewPool = dedupe(savedState.reviewPool).filter(
    (id) => !knownIds.includes(id),
  );
  const activeQueue = (
    Array.isArray(savedState.activeQueue) ? savedState.activeQueue : []
  ).filter(
    (id) =>
      deckIds.has(id) && !knownIds.includes(id) && !reviewPool.includes(id),
  );
  const currentCardId =
    deckIds.has(savedState.currentCardId) &&
    !knownIds.includes(savedState.currentCardId)
      ? savedState.currentCardId
      : null;
  const missingActive = [...deckIds].filter(
    (id) =>
      !knownIds.includes(id) &&
      !reviewPool.includes(id) &&
      !activeQueue.includes(id) &&
      id !== currentCardId,
  );
  const currentPromptSide = savedState.currentPromptSide === "mn" ? "mn" : "jp";
  const nextReviewThreshold = Number.isFinite(savedState.nextReviewThreshold)
    ? Math.min(5, Math.max(1, savedState.nextReviewThreshold))
    : randomInt(2, 4);

  return {
    ...baseState,
    mode: ["jp-to-mn", "mn-to-jp", "random"].includes(savedState.mode)
      ? savedState.mode
      : "jp-to-mn",
    category,
    activeQueue: activeQueue.concat(shuffle(missingActive)),
    reviewPool,
    knownIds,
    currentCardId,
    revealed: Boolean(savedState.revealed && currentCardId),
    studiedCount: Number.isFinite(savedState.studiedCount)
      ? Math.max(0, savedState.studiedCount)
      : 0,
    newCardsSinceReview: Number.isFinite(savedState.newCardsSinceReview)
      ? Math.max(0, savedState.newCardsSinceReview)
      : 0,
    nextReviewThreshold,
    currentPromptSide,
  };
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const restored = sanitizeSavedState(parsed);

    if (restored) {
      state = restored;
      return;
    }
  } catch (error) {
    console.warn("Unable to restore flashcard state.", error);
  }

  state = buildDefaultSession(baseState.category);
}

function saveState() {
  const serializableState = {
    mode: state.mode,
    category: state.category,
    activeQueue: state.activeQueue,
    reviewPool: state.reviewPool,
    knownIds: state.knownIds,
    currentCardId: state.currentCardId,
    revealed: state.revealed,
    studiedCount: state.studiedCount,
    newCardsSinceReview: state.newCardsSinceReview,
    nextReviewThreshold: state.nextReviewThreshold,
    currentPromptSide: state.currentPromptSide,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(serializableState));
}

function populateCategoryOptions() {
  elements.categorySelect.innerHTML = "";

  getCategories().forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    elements.categorySelect.append(option);
  });
}

function getSidesForWord(word) {
  const showJapaneseFirst =
    state.mode === "jp-to-mn"
      ? true
      : state.mode === "mn-to-jp"
        ? false
        : state.currentPromptSide === "jp";

  return showJapaneseFirst
    ? {
        promptLabel: "Japanese",
        promptText: word.jp,
        readingText: "",
        answerLabel: "Mongolian",
        answerText: word.mn,
        answerReading: word.reading ? word.reading : "",
      }
    : {
        promptLabel: "Mongolian",
        promptText: word.mn,
        readingText: "",
        answerLabel: "Japanese",
        answerText: word.reading ? `${word.jp} ・ ${word.reading}` : word.jp,
        answerReading: "",
      };
}

function choosePromptSide() {
  if (state.mode === "jp-to-mn") {
    return "jp";
  }

  if (state.mode === "mn-to-jp") {
    return "mn";
  }

  return Math.random() < 0.5 ? "jp" : "mn";
}

function removeId(list, id) {
  return list.filter((item) => item !== id);
}

function maybeUseReviewCard() {
  if (!state.reviewPool.length) {
    return false;
  }

  if (!state.activeQueue.length) {
    return true;
  }

  return state.newCardsSinceReview >= state.nextReviewThreshold;
}

function pickReviewCardId(excludeId = null) {
  const candidates = state.reviewPool.filter((id) => id !== excludeId);
  const source = candidates.length ? candidates : state.reviewPool;
  const index = Math.floor(Math.random() * source.length);
  return source[index];
}

// Select the next card by mixing fresh cards with delayed review cards.
function drawNextCard(previousCardId = null) {
  if (isComplete()) {
    state.currentCardId = null;
    state.revealed = false;
    return;
  }

  let nextCardId = null;

  if (maybeUseReviewCard()) {
    nextCardId = pickReviewCardId(previousCardId);
    state.newCardsSinceReview = 0;
    state.nextReviewThreshold = randomInt(2, 4);
  } else if (state.activeQueue.length) {
    nextCardId = state.activeQueue.shift();
    state.newCardsSinceReview += 1;
  } else if (state.reviewPool.length) {
    nextCardId = pickReviewCardId(previousCardId);
  }

  state.currentCardId = nextCardId;
  state.currentPromptSide = choosePromptSide();
  state.revealed = false;
}

function updateProgress() {
  const total = getFilteredWords().length;
  const known = state.knownIds.length;
  const remaining = Math.max(total - known, 0);
  const percent = total ? (known / total) * 100 : 0;

  elements.progressText.textContent = `${known} / ${total}`;
  elements.progressFill.style.width = `${percent}%`;
  elements.totalCount.textContent = String(total);
  elements.studiedCount.textContent = String(state.studiedCount);
  elements.knownCount.textContent = String(known);
  elements.reviewCount.textContent = String(state.reviewPool.length);
  elements.remainingCount.textContent = String(remaining);
}

function updateActionState() {
  const hasCard = Boolean(state.currentCardId);
  const enabled = hasCard && state.revealed && !isComplete();

  elements.knowButton.disabled = !enabled;
  elements.againButton.disabled = !enabled;
}

function renderCompletion() {
  const complete = isComplete();

  elements.completionState.hidden = !complete;
  elements.flashcard.hidden = complete;
  elements.flashcard.classList.toggle("is-dimmed", complete);
  elements.flashcard.setAttribute("aria-hidden", complete ? "true" : "false");
  updateActionState();
}

function renderCard() {
  updateProgress();
  renderCompletion();

  if (isComplete()) {
    saveState();
    return;
  }

  const word = getCurrentWord();

  if (!word) {
    drawNextCard();
    return renderCard();
  }

  const cardSides = getSidesForWord(word);

  elements.categoryBadge.textContent = word.category;
  elements.cardStatePill.textContent = state.revealed ? "Revealed" : "Reveal";
  elements.promptLabel.textContent = cardSides.promptLabel;
  elements.promptText.textContent = cardSides.promptText;
  elements.readingText.textContent = cardSides.readingText;
  elements.answerLabel.textContent = cardSides.answerLabel;
  elements.answerText.textContent = cardSides.answerText;

  if (cardSides.answerReading) {
    elements.answerText.append(document.createElement("br"));
    elements.answerText.append(
      document.createTextNode(cardSides.answerReading),
    );
  }

  elements.answerPanel.hidden = !state.revealed;
  elements.flashcard.classList.toggle("is-revealed", state.revealed);
  elements.flashcard.setAttribute(
    "aria-pressed",
    state.revealed ? "true" : "false",
  );
  updateActionState();
  saveState();
}

function revealCard() {
  if (!state.currentCardId || state.revealed || isComplete()) {
    return;
  }

  state.revealed = true;
  renderCard();
}

// Marking a card as known permanently removes it from the current session.
function markKnown() {
  if (!state.currentCardId || !state.revealed) {
    return;
  }

  const currentId = state.currentCardId;

  if (!state.knownIds.includes(currentId)) {
    state.knownIds = [...state.knownIds, currentId];
  }

  state.reviewPool = removeId(state.reviewPool, currentId);
  state.activeQueue = removeId(state.activeQueue, currentId);
  state.studiedCount += 1;

  drawNextCard(currentId);
  renderCard();
}

// Unknown cards stay in the review pool and reappear after a few other cards.
function markAgain() {
  if (!state.currentCardId || !state.revealed) {
    return;
  }

  const currentId = state.currentCardId;

  if (!state.reviewPool.includes(currentId)) {
    state.reviewPool = [...state.reviewPool, currentId];
  }

  state.studiedCount += 1;
  drawNextCard(currentId);
  renderCard();
}

function restartSession(category = state.category) {
  state = buildDefaultSession(category);
  elements.modeSelect.value = state.mode;
  elements.categorySelect.value = state.category;
  drawNextCard();
  renderCard();
}

function handleModeChange() {
  state.mode = elements.modeSelect.value;

  if (state.currentCardId && !state.revealed) {
    state.currentPromptSide = choosePromptSide();
  }

  renderCard();
}

function handleCategoryChange() {
  restartSession(elements.categorySelect.value);
}

function isTypingTarget(target) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT", "OPTION", "BUTTON"].includes(target.tagName)
  );
}

function handleKeyboardShortcuts(event) {
  if (isTypingTarget(event.target)) {
    return;
  }

  if (event.code === "Space") {
    if (!state.revealed && !isComplete()) {
      event.preventDefault();
      revealCard();
    }
    return;
  }

  if (event.key === "Enter") {
    if (state.revealed && !isComplete()) {
      event.preventDefault();
      markKnown();
    }
    return;
  }

  if (event.key === "Backspace" || event.key.toLowerCase() === "n") {
    if (state.revealed && !isComplete()) {
      event.preventDefault();
      markAgain();
    }
  }
}

function bindEvents() {
  elements.flashcard.addEventListener("click", revealCard);
  elements.flashcard.addEventListener("keydown", (event) => {
    if (event.code === "Space" || (!state.revealed && event.key === "Enter")) {
      event.preventDefault();
      event.stopPropagation();
      revealCard();
    }
  });

  elements.knowButton.addEventListener("click", markKnown);
  elements.againButton.addEventListener("click", markAgain);
  elements.restartButton.addEventListener("click", () =>
    restartSession(state.category),
  );
  elements.restartCompleteButton.addEventListener("click", () =>
    restartSession(state.category),
  );
  elements.modeSelect.addEventListener("change", handleModeChange);
  elements.categorySelect.addEventListener("change", handleCategoryChange);
  document.addEventListener("keydown", handleKeyboardShortcuts);
}

function syncControls() {
  elements.modeSelect.value = state.mode;
  elements.categorySelect.value = state.category;
}

function init() {
  populateCategoryOptions();
  loadState();
  syncControls();

  if (!isComplete() && !state.currentCardId) {
    drawNextCard();
  }

  bindEvents();
  renderCard();
}

init();
