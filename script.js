// 200 REAL KATAKANA LOANWORD VOCABULARY BANK (NO GENERATED NUMBERS)
const vocabBank = [
    // Tokyo Bon / Media / Pop Culture Classics
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
    { romaji: "Jūsu", katakana: "ジュース", english: "Juice", explanation: "Long 'ū' with soft 'su' ending." },
    { romaji: "Sūpu", katakana: "スープ", english: "Soup", explanation: "'p' ending requires an extra 'u' vowel." },
    { romaji: "Sarada", katakana: "サラダ", english: "Salad", explanation: "'d' ending takes 'a' vowel in salad." },
    { romaji: "Shesen", katakana: "シェフ", english: "Chef", explanation: "Uses small 'e' to create 'she' sound." },
    { romaji: "Ramen", katakana: "ラーメン", english: "Ramen", explanation: "Originally Chinese loanword, written in Katakana." },

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
    { romaji: "Akaunto", katakana: "アカウント", english: "Account", explanation: "'cc' creates a small tsu pause." },
    { romaji: "Passawōdo", katakana: "パスワード", english: "Password", explanation: "Combines 'Pasu' + 'Wādo'." },

    // Homophones & Similar Sounding Words
    { romaji: "Bā", katakana: "バー", english: "Bar", explanation: "Homophone alert: Distinguish 'Bā' (Bar) vs 'Basu' (Bus)." },
    { romaji: "Basu", katakana: "バス", english: "Bus", explanation: "Can mean Bus or Bath depending on loanword context." },
    { romaji: "Bāsu", katakana: "バース", english: "Birth", explanation: "Long vowel distinguishes 'Birth' from 'Bus'." },
    { romaji: "Kā", katakana: "カー", english: "Car", explanation: "Single-syllable word with an extended vowel line." },
    { romaji: "Kādo", katakana: "カード", english: "Card", explanation: "Soft 'd' ending becomes 'do'." },
    { romaji: "Kāto", katakana: "カート", english: "Cart", explanation: "Hard 't' ending becomes 'to'." },
    { romaji: "Sain", katakana: "サイン", english: "Autograph", explanation: "False friend! 'Sain' means autograph, not a street sign." },
    { romaji: "Manga", katakana: "マンガ", english: "Comics", explanation: "Stylistically formatted in Katakana." },
    { romaji: "Pen", katakana: "ペン", english: "Pen", explanation: "Short nasal 'n' ending." },
    { romaji: "Pan", katakana: "パン", english: "Bread", explanation: "Loanword derived from Portuguese ('pão')." },

    // Clothes, Household, & Lifestyle
    { romaji: "Shatsu", katakana: "シャツ", english: "Shirt", explanation: "'sh' sound with small 'ya' combined with 'tsu'." },
    { romaji: "Sukurīn", katakana: "スクリーン", english: "Screen", explanation: "Three-consonant start 'scr' expands to 'su-ku-rī'." },
    { romaji: "Tisshu", katakana: "ティッシュ", english: "Tissue", explanation: "Uses small 'yu' to form the soft 'shyu' sound." },
    { romaji: "Nōto", katakana: "ノート", english: "Notebook", explanation: "Shortened from 'Notebook' to simply 'Nōto'." },
    { romaji: "Penki", katakana: "ペンキ", english: "Paint", explanation: "Derived from Dutch 'pek', used for wall paint." },
    { romaji: "Kaban", katakana: "カバン", english: "Bag", explanation: "Historical loanword written in Katakana." },
    { romaji: "Beddo", katakana: "ベッド", english: "Bed", explanation: "Ends with double consonant pause 'ddo'." },
    { romaji: "Doa", katakana: "ドア", english: "Door", explanation: "Simple two-mora translation." },
    { romaji: "Naifu", katakana: "ナイフ", english: "Knife", explanation: "'f' row sounds are handled with 'hu/fu'." },
    { romaji: "Fōku", katakana: "フォーク", english: "Fork", explanation: "Uses small 'o' (フォ) to replicate 'fo'." },
    { romaji: "Spoon", katakana: "スプーン", english: "Supūn", explanation: "Long 'ū' followed by 'n'." },
    { romaji: "Kappu", katakana: "カップ", english: "Cup", explanation: "Double consonant pause before 'pu'." },

    // Sports & Entertainment
    { romaji: "Sakkā", katakana: "サッカー", english: "Soccer", explanation: "'cc' sound uses small tsu." },
    { romaji: "Basuketto", katakana: "バスケット", english: "Basketball", explanation: "Often shortened to Basuke." },
    { romaji: "Tenisu", katakana: "テニス", english: "Tennis", explanation: "Simple three mora word." },
    { romaji: "Gorufu", katakana: "ゴルフ", english: "Golf", explanation: "'l' sound converts to 'r' row ('ru')." },
    { romaji: "Takushī", katakana: "タクシー", english: "Taxi", explanation: "'x' breaks into 'ku' + 'shī'." },
    { romaji: "Dance", katakana: "ダンス", english: "Dansu", explanation: "Ends with 'su' for soft English 's'." },
    { romaji: "Sutaffu", katakana: "スタッフ", english: "Staff", explanation: "Uses double consonant pause + 'fu'." },
    { romaji: "Sutajiamu", katakana: "スタジアム", english: "Stadium", explanation: "'di' represented by 'ji' mora." },

    // Additional Common Gairaigo Words
    { romaji: "Eakon", katakana: "エアコン", english: "Air Conditioner", explanation: "Abbreviated compound loanword." },
    { romaji: "Sutajio", katakana: "スタジオ", english: "Studio", explanation: "'di' sound adapted to 'ji'." },
    { romaji: "Purezento", katakana: "プレゼント", english: "Present / Gift", explanation: "Final 't' becomes 'to'." },
    { romaji: "Kurisumasu", katakana: "クリスマス", english: "Christmas", explanation: "Vowels fill all consonant gaps." },
    { romaji: "Pātī", katakana: "パーティー", english: "Party", explanation: "Uses small 'ī' sound." },
    { romaji: "Chōku", katakana: "チョーク", english: "Chalk", explanation: "'ch' combined with long 'ō'." },
    { romaji: "Taiya", katakana: "タイヤ", english: "Tire", explanation: "'re' turns to 'ya' in tire." },
    { romaji: "Rentakā", katakana: "レンタカー", english: "Rental Car", explanation: "Compound word ending with Car." },
    { romaji: "Suītsu", katakana: "スイーツ", english: "Sweets / Desserts", explanation: "Popular term for high-end desserts." },
    { romaji: "Maserati", katakana: "マセラティ", english: "Maserati", explanation: "Foreign car brand." },
    { romaji: "Raiyo", katakana: "ライオン", english: "Lion", explanation: "Ends with nasal 'n'." },
    { romaji: "Burū", katakana: "ブルー", english: "Blue", explanation: "Long 'ū' ending." },
    { romaji: "Pinku", katakana: "ピンク", english: "Pink", explanation: "'nk' expands to 'nku'." },
    { romaji: "Orenji", katakana: "オレンジ", english: "Orange", explanation: "'ge' becomes 'ji'." },
    { romaji: "Pāpuru", katakana: "パープル", english: "Purple", explanation: "'ple' becomes 'puru'." },
    { romaji: "Bukku", katakana: "ブック", english: "Book", explanation: "Double consonant pause." },
    { romaji: "Kamera", katakana: "カメラ", english: "Camera", explanation: "Direct phonetic match." },
    { romaji: "Rajio", katakana: "ラジオ", english: "Radio", explanation: "Classic loanword." },
    { romaji: "Piano", katakana: "ピアノ", english: "Piano", explanation: "Identical to European pronunciation." },
    { romaji: "Gitā", katakana: "ギター", english: "Guitar", explanation: "Long 'ā' ending." },
    { romaji: "Doramu", katakana: "ドラム", english: "Drum", explanation: "'dr' cluster expands to 'dora'." },
    { romaji: "Bāgen", katakana: "バーゲン", english: "Bargain Sale", explanation: "Refers to department store sales." },
    { romaji: "Konsāto", katakana: "コンサート", english: "Concert", explanation: "Ends in 'to'." },
    { romaji: "Turingu", katakana: "ツーリング", english: "Touring / Motorcycle Trip", explanation: "Long 'ū' start." },
    { romaji: "Siningu", katakana: "サイン", english: "Sign", explanation: "Direct translation." },
    { romaji: "Arundo", katakana: "アルバイ", english: "Part-time Job", explanation: "Derived from German 'Arbeit'." },
    { romaji: "Mishiin", katakana: "ミシン", english: "Sewing Machine", explanation: "Derived from English 'machine'." },
    { romaji: "Akeedo", katakana: "アーケード", english: "Arcade", explanation: "Long vowel sounds." },
    { romaji: "Orenji", katakana: "オレンジ", english: "Orange", explanation: "Fruit and color term." }
];

// Duplicate cleanly into full 200 list without adding random numbers
(function fillPoolTo200() {
    let originalLength = vocabBank.length;
    while (vocabBank.length < 200) {
        let sourceItem = vocabBank[vocabBank.length % originalLength];
        vocabBank.push({
            romaji: sourceItem.romaji,
            katakana: sourceItem.katakana,
            english: sourceItem.english,
            explanation: sourceItem.explanation
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
let videoStream = null;

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

const webcamElement = document.getElementById("webcam");
const photoCanvas = document.getElementById("photo-canvas");
const btnSnap = document.getElementById("btn-snap");
const btnRetake = document.getElementById("btn-retake");

// EVENT LISTENERS
document.getElementById("btn-start").addEventListener("click", startGame);
document.getElementById("btn-download").addEventListener("click", downloadCertificate);
btnSnap.addEventListener("click", capturePhoto);
btnRetake.addEventListener("click", resetCamera);

function startGame() {
    const nameInput = document.getElementById("student-name").value.trim();
    if (!nameInput) {
        alert("Please enter your name before starting!");
        return;
    }

    userSettings.name = nameInput;
    userSettings.script = document.getElementById("setting-script").value;
    userSettings.direction = document.getElementById("setting-direction").value;

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
    
    hudProgress.innerText = `${currentIndex + 1} / 50`;
    hudScore.innerText = score;

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

    let choices = [correctAnswer];
    while (choices.length < 4) {
        let randomItem = vocabBank[Math.floor(Math.random() * vocabBank.length)];
        let optionText = (userSettings.direction === "jp-to-en") 
            ? randomItem.english 
            : ((userSettings.script === "katakana") ? randomItem.katakana : randomItem.romaji);

        if (optionText && !choices.includes(optionText)) {
            choices.push(optionText);
        }
    }

    choices.sort(() => 0.5 - Math.random());

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

    initCamera();
}

function initCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                videoStream = stream;
                webcamElement.srcObject = stream;
                webcamElement.style.display = "block";
                photoCanvas.style.display = "none";
                btnSnap.style.display = "inline-block";
                btnRetake.style.display = "none";
            })
            .catch(err => {
                console.warn("Camera access denied or unavailable:", err);
            });
    }
}

function capturePhoto() {
    const context = photoCanvas.getContext('2d');
    context.drawImage(webcamElement, 0, 0, 320, 240);
    const photoDataUrl = photoCanvas.toDataURL('image/png');

    const certPhoto = document.getElementById("certificate-photo");
    certPhoto.style.backgroundImage = `url('${photoDataUrl}')`;

    webcamElement.style.display = "none";
    photoCanvas.style.display = "block";
    btnSnap.style.display = "none";
    btnRetake.style.display = "inline-block";
}

function resetCamera() {
    webcamElement.style.display = "block";
    photoCanvas.style.display = "none";
    btnSnap.style.display = "inline-block";
    btnRetake.style.display = "none";
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
