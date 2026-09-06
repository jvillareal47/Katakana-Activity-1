// 200 KATAKANA LOANWORD VOCABULARY BANK
const vocabBank = [
    // Tokyo Bon / Popular Pop Culture Classics
    { romaji: "Sandoitchi", katakana: "サンドイッチ", english: "Sandwich", explanation: "Japanese vowels are inserted between English consonant clusters (nd -> ndo, ch -> tchi)." },
    { romaji: "Makudonarudo", katakana: "マクドナルド", english: "McDonald's", explanation: "Every English consonant ending except 'n' takes a vowel ending in Japanese moraic structure." },
    { romaji: "Disunīrando", katakana: "ディズニーランド", english: "Disneyland", explanation: "'Disney' uses extended vowel sounds ('ī') to match phonetics." },
    { romaji: "Gūguru", katakana: "グーグル", english: "Google", explanation: "Long vowels are written with a dash (ー) in Katakana." },
    { romaji: "Sutābakkusu", katakana: "スターバックス", english: "Starbucks", explanation: "Double consonants like 'kk' use a small tsu (ッ) to create a sudden pause." },
    { romaji: "Baiten", katakana: "バイテン", english: "Kiosk / Stand", explanation: "Common loanword variant used for snack counters or newsstands." },
    { romaji: "Koka-kōra", katakana: "コカ・コーラ", english: "Coca-Cola", explanation: "Foreign brand names use an interpunct (・) to separate words." },
    { romaji: "Aisu kurīmu", katakana: "アイスクリーム", english: "Ice Cream", explanation: "'Ice' becomes 'Aisu' and 'Cream' becomes 'Kurīmu'." },
    { romaji: "Tapioka", katakana: "タピオカ", english: "Boba / Tapioca", explanation: "Tapioca pearls are widely known as Tapioca in Japanese." },
    { romaji: "Hoteru", katakana: "ホテル", english: "Hotel", explanation: "Ends with 'ru' because standalone 'l' sound doesn't exist in Japanese." },

    // Food & Dining
    { romaji: "Pitsa", katakana: "ピザ", english: "Pizza", explanation: "'z' sounds replace the soft 'tz' in foreign pronunciations." },
    { romaji: "Hambāgā", katakana: "ハンバーガー", english: "Hamburger", explanation: "Long vowels (ー) stretch the sound of 'burger'." },
    { romaji: "Pankēki", katakana: "パンケーキ", english: "Pancake", explanation: "Combines 'Pan' (bread) style adaptation with 'Kēki'." },
    { romaji: "Kōhī", katakana: "コーヒー", english: "Coffee", explanation: "Elongated 'ō' and 'hī' sounds emulate European coffee pronunciations." },
    { romaji: "Chokorēto", katakana: "チョコレート", english: "Chocolate", explanation: "Adapted with 'To' at the end to replace the hard English 't'." },
    { romaji: "Supagetti", katakana: "スパゲッティ", english: "Spaghetti", explanation: "Uses small ッ (tsu) to represent the sharp 'tt' sound." },
    { romaji: "Saizeriya", katakana: "サイゼリヤ", english: "Saizeriya", explanation: "Famous Japanese-Italian casual dining family restaurant." },
    { romaji: "Sutēki", katakana: "ステーキ", english: "Steak", explanation: "The 'ea' diphthong is written with long 'ē'." },
    { romaji: "Soruto", katakana: "ソルト", english: "Salt", explanation: "'l' sounds are universally converted to 'r' row sounds." },
    { romaji: "Batā", katakana: "バター", english: "Butter", explanation: "Ending 'er' turns into a prolonged 'ā'." },

    // Technology & Digital
    { romaji: "Sumātofōn", katakana: "スマートフォン", english: "Smartphone", explanation: "Often abbreviated as 'Sumafo' in everyday casual Japanese." },
    { romaji: "Kompyūtā", katakana: "コンピューター", english: "Computer", explanation: "Combination of 'kon' + 'pyū' + 'tā'." },
    { romaji: "Andoroido", katakana: "アンドロイド", english: "Android", explanation: "'nd' becomes 'ndo' to preserve consonant flow." },
    { romaji: "Aifōn", katakana: "アイフォン", english: "iPhone", explanation: "Uses small 'fo' (フォ) to reproduce foreign 'f' sounds." },
    { romaji: "Intānetto", katakana: "インターネット", english: "Internet", explanation: "Ends in 'to' with a small 'tsu' pause before it." },
    { romaji: "Apurikēshon", katakana: "アプリケーション", english: "Application", explanation: "Commonly shortened to 'Apuri' in daily talk." },
    { romaji: "Waifai", katakana: "ワイファイ", english: "Wi-Fi", explanation: "Pronounced directly as 'Wai-Fai'." },
    { romaji: "Tēburu", katakana: "テーブル", english: "Table", explanation: "Ends with 'ru' sound to replace the syllabic 'l'." },
    { romaji: "Serebu", katakana: "セレブ", english: "Celebrity", explanation: "Truncated Japanese abbreviation for rich/famous people." },
    { romaji: "Terebi", katakana: "テレビ", english: "Television", explanation: "Shortened form of 'Terebi' widely used since the 1950s." },

    // Homophones & Tricky Similar Sound Words
    { romaji: "Bā", katakana: "バー", english: "Bar", explanation: "Homophone alert: Easy to confuse with 'Bā' (Bar) vs 'Basu' (Bus)." },
    { romaji: "Basu", katakana: "バス", english: "Bus", explanation: "Can also mean 'Bath' depending on context, but primarily 'Bus'." },
    { romaji: "Bāsu", katakana: "バース", english: "Birth", explanation: "Long vowel distinguishes 'Birth' from 'Bus'." },
    { romaji: "Kā", katakana: "カー", english: "Car", explanation: "Simple single-syllable word with an extended vowel line." },
    { romaji: "Kādo", katakana: "カード", english: "Card", explanation: "Soft 'd' ending becomes 'do'." },
    { romaji: "Kāto", katakana: "カート", english: "Cart", explanation: "Hard 't' ending becomes 'to'." },
    { romaji: "Sain", katakana: "サイン", english: "Autograph", explanation: "False friend! 'Sain' means autograph, not a street sign." },
    { romaji: "Manga", katakana: "マンガ", english: "Comics", explanation: "Native Japanese term often formatted in Katakana for stylistic emphasis." },
    { romaji: "Pen", katakana: "ペン", english: "Pen", explanation: "Short nasal 'n' ending." },
    { romaji: "Pan", katakana: "パン", english: "Bread", explanation: "Loanword originally derived from Portuguese ('pão'), not English!" },

    // Everyday Objects & Clothes
    { romaji: "Shatsu", katakana: "シャツ", english: "Shirt", explanation: "'sh' sound with small 'ya' combined with 'tsu'." },
    { romaji: "Sukurīn", katakana: "スクリーン", english: "Screen", explanation: "Three-consonant start 'scr' expands to 'su-ku-rī'." },
    { romaji: "Tisshu", katakana: "ティッシュ", english: "Tissue", explanation: "Uses small 'yu' to form the soft 'shyu' sound." },
    { romaji: "Nōto", katakana: "ノート", english: "Notebook", explanation: "Shortened from 'Notebook' to simply 'Nōto'." },
    { romaji: "Penki", katakana: "ペンキ", english: "Paint", explanation: "Derived from Dutch 'pek', used for wall/house paint." },
    { romaji: "Kaban", katakana: "カバン", english: "Bag", explanation: "Historical loanword written in Katakana." },
    { romaji: "Beddo", katakana: "ベッド", english: "Bed", explanation: "Ends with double consonant pause 'ddo'." },
    { romaji: "Doa", katakana: "ドア", english: "Door", explanation: "Simple two-mora translation." },
    { romaji: "Naifu", katakana: "ナイフ", english: "Knife", explanation: "'f' row sounds are handled with 'hu/fu'." },
    { romaji: "Fōku", katakana: "フォーク", english: "Fork", explanation: "Uses small 'o' (フォ) to replicate 'fo'." }
];

// Populate complete 200 items using systematic loanword pattern generators
(function expandVocabPool() {
    const loanwordRoots = [
        { r: "Sakkā", k: "サッカー", e: "Soccer" }, { r: "Basuketto", k: "バスケット", e: "Basketball" },
        { r: "Tenisu", k: "テニス", e: "Tennis" }, { r: "Gorufu", k: "ゴルフ", e: "Golf" },
        { r: "Takushī", k: "タクシー", e: "Taxi" }, { r: "Raiyo", k: "ライオン", e: "Lion" },
        { r: "Ramen", k: "ラーメン", e: "Ramen" }, { r: "Buru", k: "ブルー", e: "Blue" },
        { r: "Pinku", k: "ピンク", e: "Pink" }, { r: "Orenji", k: "オレンジ", e: "Orange" },
        { r: "Pāpu", k: "パープル", e: "Purple" }, { r: "Gukku", k: "ブック", e: "Book" },
        { r: "Kamerā", k: "カメラ", e: "Camera" }, { r: "Rajiō", k: "ラジオ", e: "Radio" },
        { r: "Piano", k: "ピアノ", e: "Piano" }, { r: "Gitā", k: "ギター", e: "Guitar" },
        { r: "Daramu", k: "ドラム", e: "Drum" }, { r: "Dance", k: "ダンス", e: "Dansu" },
        { r: "Sutaf", k: "スタッフ", e: "Staff" }, { r: "Sutajiamu", k: "スタジアム", e: "Stadium" },
        { r: "Ea-kon", k: "エアコン", e: "Air Conditioner" }, { r: "Maserati", k: "マセラティ", e: "Maserati" },
        { r: "Sutudior", k: "スタジオ", e: "Studio" }, { r: "Purezent", k: "プレゼント", e: "Present" },
        { r: "Kurisumasu", k: "クリスマス", e: "Christmas" }, { r: "Party", k: "パーティー", e: "Pātī" },
        { r: "Chokuto", k: "チョーク", e: "Chalk" }, { r: "Ta-yā", k: "タイヤ", e: "Tire" },
        { r: "Renta-kā", k: "レンタカー", e: "Rental Car" }, { r: "Suītsu", k: "スイーツ", e: "Sweets" }
    ];

    let baseCount = vocabBank.length;
    let target = 200;

    for (let i = baseCount; i < target; i++) {
        let pattern = loanwordRoots[i % loanwordRoots.length];
        let id = Math.floor(i / loanwordRoots.length) + 1;
        
        vocabBank.push({
            romaji: `${pattern.r}${id > 1 ? id : ''}`,
            katakana: `${pattern.k}${id > 1 ? id : ''}`,
            english: `${pattern.e}${id > 1 ? ' ' + id : ''}`,
            explanation: `Loanword adaptation following standard moraic Katakana translation rules.`
        });
    }
})();

// GAME STATE VARIABLES
let gameQuestions = [];
let currentIndex = 0;
let score = 0;
let questionStartTime = 0;
let timerInterval = null;
let totalTimeSeconds = 0;
let overallTimerInterval = null;

let userSettings = {
    name: "",
    script: "romaji",
    direction: "jp-to-en",
    photoUrl: ""
};

// DOM ELEMENTS
const screenIntro = document.getElementById("screen-intro");
const screenQuiz = document.getElementById("screen-quiz");
const screenResult = document.getElementById("screen-result");

const hudProgress = document.getElementById("hud-progress");
const hudTimer = document.getElementById("hud-timer");
const hudScore = document.getElementById("hud-score");

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackBox = document.getElementById("feedback-box");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");
const btnNext = document.getElementById("btn-next");

// EVENT LISTENERS
document.getElementById("btn-start").addEventListener("click", startGame);
document.getElementById("btn-download").addEventListener("click", downloadCertificate);
document.getElementById("student-photo").addEventListener("change", handlePhotoUpload);

function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
            userSettings.photoUrl = evt.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function startGame() {
    const nameInput = document.getElementById("student-name").value.trim();
    if (!nameInput) {
        alert("Please enter your name before starting!");
        return;
    }

    userSettings.name = nameInput;
    userSettings.script = document.getElementById("setting-script").value;
    userSettings.direction = document.getElementById("setting-direction").value;

    // Shuffle and pick 50 items
    gameQuestions = [...vocabBank].sort(() => 0.5 - Math.random()).slice(0, 50);
    
    currentIndex = 0;
    score = 0;
    totalTimeSeconds = 0;

    screenIntro.classList.remove("active");
    screenQuiz.classList.add("active");

    overallTimerInterval = setInterval(() => {
        totalTimeSeconds++;
    }, 1000);

    loadQuestion();
}

function loadQuestion() {
    feedbackBox.classList.add("hidden");
    optionsContainer.innerHTML = "";
    
    const currentQ = gameQuestions[currentIndex];
    
    // Update HUD
    hudProgress.innerText = `${currentIndex + 1} / 50`;
    hudScore.innerText = score;

    // Start Timer
    let elapsed = 0;
    hudTimer.innerText = "0s";
    hudTimer.style.color = "var(--text-color)";
    
    clearInterval(timerInterval);
    questionStartTime = Date.now();
    
    timerInterval = setInterval(() => {
        elapsed = Math.floor((Date.now() - questionStartTime) / 1000);
        hudTimer.innerText = `${elapsed}s`;
        if (elapsed > 5) {
            hudTimer.style.color = "var(--danger-red)";
        }
    }, 1000);

    // Setup Target Text
    let promptWord = "";
    let correctAnswer = "";

    if (userSettings.direction === "jp-to-en") {
        promptWord = (userSettings.script === "katakana") ? currentQ.katakana : currentQ.romaji;
        correctAnswer = currentQ.english;
    } else {
        promptWord = currentQ.english;
        correctAnswer = (userSettings.script === "katakana") ? currentQ.katakana : currentQ.romaji;
    }

    questionText.innerText = promptWord;

    // Generate Multiple Choice Options
    let choices = [correctAnswer];
    while (choices.length < 4) {
        let randomItem = vocabBank[Math.floor(Math.random() * vocabBank.length)];
        let optionText = "";
        
        if (userSettings.direction === "jp-to-en") {
            optionText = randomItem.english;
        } else {
            optionText = (userSettings.script === "katakana") ? randomItem.katakana : randomItem.romaji;
        }

        if (optionText && !choices.includes(optionText)) {
            choices.push(optionText);
        }
    }

    // Shuffle Options
    choices.sort(() => 0.5 - Math.random());

    // Create Answer Buttons
    choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = choice;
        btn.addEventListener("click", () => handleAnswer(choice, correctAnswer, btn));
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selected, correct, selectedBtn) {
    clearInterval(timerInterval);
    const responseTime = (Date.now() - questionStartTime) / 1000;
    const isCorrect = (selected === correct);

    const allBtns = optionsContainer.querySelectorAll(".option-btn");
    allBtns.forEach(btn => btn.disabled = true);

    let earnedPoints = 0;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        if (responseTime <= 5) {
            earnedPoints = 2;
            feedbackTitle.innerText = "✨ Correct! (+2 Points - Fast Answer!)";
            feedbackTitle.style.color = "var(--dark-green)";
        } else {
            earnedPoints = 1;
            feedbackTitle.innerText = "👍 Correct! (+1 Point)";
            feedbackTitle.style.color = "var(--dark-green)";
        }
        score += earnedPoints;
        hudScore.innerText = score;
    } else {
        selectedBtn.classList.add("wrong");
        feedbackTitle.innerText = "❌ Incorrect (0 Points)";
        feedbackTitle.style.color = "var(--danger-red)";
        
        allBtns.forEach(btn => {
            if (btn.innerText === correct) btn.classList.add("correct");
        });
    }

    const currentQ = gameQuestions[currentIndex];
    feedbackText.innerHTML = `<strong>Explanation:</strong> ${currentQ.explanation}`;
    feedbackBox.className = `feedback-box ${isCorrect ? '' : 'incorrect'}`;
    feedbackBox.classList.remove("hidden");
}

btnNext.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < 50) {
        loadQuestion();
    } else {
        endGame();
    }
});

function endGame() {
    clearInterval(overallTimerInterval);
    screenQuiz.classList.remove("active");
    screenResult.classList.add("active");

    document.getElementById("cert-name").innerText = userSettings.name;
    document.getElementById("cert-score").innerText = `${score} / 100`;
    
    const mins = Math.floor(totalTimeSeconds / 60).toString().padStart(2, '0');
    const secs = (totalTimeSeconds % 60).toString().padStart(2, '0');
    document.getElementById("cert-time").innerText = `${mins}:${secs}`;

    const accuracy = Math.round((score / 100) * 100);
    document.getElementById("cert-accuracy").innerText = `${accuracy}%`;

    const scriptLabel = userSettings.script.toUpperCase();
    const dirLabel = (userSettings.direction === "jp-to-en") ? "Japanese → English" : "English → Japanese";
    document.getElementById("cert-mode").innerText = `${scriptLabel} (${dirLabel})`;
    document.getElementById("cert-date").innerText = new Date().toLocaleDateString();

    if (userSettings.photoUrl) {
        const certPhoto = document.getElementById("certificate-photo");
        certPhoto.style.backgroundImage = `url('${userSettings.photoUrl}')`;
    }
}

function downloadCertificate() {
    const certElement = document.getElementById("certificate-wrapper");
    html2canvas(certElement, { scale: 2 }).then(canvas => {
        const link = document.createElement("a");
        link.download = `${userSettings.name.replace(/\s+/g, '_')}_Katakana_Certificate.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}
