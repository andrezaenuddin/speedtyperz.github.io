/**
 * SPEEDTYPER X - CORE ENGINE
 * Modern JS Architecture
 */

const CONFIG = {
    modes: {
        // NORMAL CATEGORY
        normal_easy: { time: 30, penalty: false },
        normal_medium: { time: 60, penalty: true },
        normal_hard: { time: 45, penalty: true },

        // ADVANCED CATEGORY
        advanced_easy: { time: 45, penalty: true },   // Short academic
        advanced_medium: { time: 60, penalty: true }, // Long academic
        advanced_hard: { time: 90, penalty: true },   // Coding/Complex

        // CUSTOM CATEGORY
        custom_easy: { time: 30, penalty: false },
        custom_medium: { time: 60, penalty: true },
        custom_hard: { time: 45, penalty: true }
    },
    levels: [20, 30, 40, 50, 60, 70, 80, 90, 100],
    texts: {
        // NORMAL TEXTS (Formerly easy/medium/hard)
        normal_easy: [
            "udara pagi ini terasa sangat sejuk. matahari bersinar terang menyambut hari.",
            "membaca buku membuka wawasan kita. buku adalah jendela dunia yang luas.",
            "hari minggu kami pergi ke taman kota. kami bermain sepeda dengan gembira.",
            "kucingku sangat lucu dan menggemaskan. bulunya lembut berwarna putih bersih.",
            "menjaga kebersihan itu sangat penting. lingkungan bersih membuat kita sehat.",
            "olahraga pagi membuat badan bugar. udara segar baik untuk paru-paru.",
            "ibu sedang memasak di dapur. aroma masakannya harum sekali.",
            "hujan turun membasahi bumi ini. tanaman terlihat segar kena air hujan.",
            "belajar bahasa asing itu seru. kita bisa punya teman baru dari luar.",
            "taman bunga di rumah sedang mekar. warnanya merah dan putih indah.",
            "angin bertiup kencang sore ini. layangan kami terbang tinggi sekali.",
            "aku membantu ayah mencuci mobil. mobilnya jadi bersih dan mengkilap.",
            "jangan lupa gosok gigi sebelum tidur. senyummu akan terlihat menawan.",
            "liburan nanti kita ke rumah nenek. di sana ada sungai yang jernih.",
            "makan buah sangat baik untuk tubuh. tubuh kita jadi kuat dan sehat.",
            "teman yang baik selalu ada saat susah. persahabatan itu indah dan berharga.",
            "keliling kompleks naik sepeda baru. pagi yang cerah untuk berolahraga.",
            "perpustakaan sekolah sangat nyaman. aku suka membaca di pojok ruangan.",
            "siramlah bunga setiap pagi dan sore. bunganya akan tumbuh subur.",
            "pelangi muncul setelah hujan reda. pemandangan yang sangat mempesona."
        ],
        normal_medium: [
            "teknologi informasi dan komunikasi telah berkembang dengan sangat pesat dalam dua dekade terakhir, mengubah secara drastis cara manusia berinteraksi, bekerja, dan menjalani kehidupan sehari-hari menjadi lebih efisien namun juga penuh tantangan baru.",
            "menjaga kesehatan tubuh adalah investasi jangka panjang yang sangat berharga, yang dapat dilakukan dengan menerapkan pola makan seimbang, rutin berolahraga minimal tiga puluh menit sehari, dan istirahat yang cukup setiap malam.",
            "literasi keuangan adalah kemampuan dasar yang sangat penting untuk dimiliki oleh setiap individu modern agar dapat mengelola pendapatan, merencanakan tabungan masa depan, dan menghindari jebakan utang yang merugikan kehidupan ekonomi keluarga.",
            "perubahan iklim global bukan lagi sekadar isu lingkungan semata, melainkan telah menjadi ancaman nyata bagi keberlangsungan hidup manusia yang menuntut aksi kolektif dari seluruh negara untuk mengurangi emisi karbon secara signifikan.",
            "keanekaragaman hayati indonesia merupakan aset bangsa yang tak ternilai harganya, menyimpan ribuan spesies flora dan fauna unik yang tidak dapat ditemukan di belahan dunia lain, sehingga wajib kita lestarikan bersama.",
            "pendidikan karakter di sekolah tidak hanya bertujuan untuk mencetak siswa yang cerdas secara akademis, tetapi juga membentuk pribadi yang memiliki moralitas tinggi, integritas, dan rasa tanggung jawab sosial terhadap sesama.",
            "media sosial bagaikan pedang bermata dua yang bisa memberikan manfaat besar untuk memperluas jaringan pertemanan dan bisnis, namun juga bisa menjadi sarana penyebaran informasi palsu atau hoaks yang memecah belah persatuan.",
            "pariwisata berkelanjutan adalah konsep wisata yang memperhitungkan dampak ekonomi, sosial, dan lingkungan saat ini dan masa depan, memenuhi kebutuhan pengunjung, industri, lingkungan, dan masyarakat tuan rumah.",
            "di era digital ini, kemampuan untuk bekerja secara jarak jauh atau remote working semakin diminati banyak perusahaan, memberikan fleksibilitas bagi karyawan namun menuntut disiplin diri dan manajemen waktu yang lebih ketat.",
            "penggunaan plastik sekali pakai telah menjadi masalah lingkungan serius yang mencemari lautan dan membahayakan biota laut, sehingga gerakan mengurangi sampah plastik perlu didukung oleh semua lapisan masyarakat.",
            "kesehatan mental sama pentingnya dengan kesehatan fisik, namun seringkali masih dianggap tabu untuk dibicarakan di beberapa kalangan masyarakat, padahal penanganan dini dapat mencegah masalah yang lebih berat.",
            "energi terbarukan seperti tenaga surya dan angin menawarkan solusi yang lebih bersih dan berkelanjutan untuk memenuhi kebutuhan energi dunia yang terus meningkat, mengurangi ketergantungan kita pada bahan bakar fosil.",
            "seni dan budaya adalah identitas suatu bangsa yang harus dijaga dan dilestarikan agar tidak tergerus oleh arus globalisasi yang membawa budaya asing, memperkaya khazanah peradaban umat manusia.",
            "konsep rumah pintar atau smart home kini semakin populer, memungkinkan pemilik rumah untuk mengontrol berbagai perangkat elektronik seperti lampu dan pengunci pintu hanya melalui aplikasi di smartphone mereka.",
            "pola tidur yang tidak teratur dapat berdampak buruk pada konsentrasi dan kinerja seseorang di siang hari, oleh karena itu menjaga ritme sirkadian tubuh sangatlah penting untuk produktivitas yang optimal.",
            "membaca berita dari sumber yang terpercaya adalah kunci untuk menghindari disinformasi di tengah banjirnya arus informasi di internet, melatih kita untuk berpikir kritis sebelum membagikan ulang suatu berita."
        ],
        normal_hard: [
            "kecerdasan buatan atau artificial intelligence kini telah merambah ke berbagai sektor vital kehidupan manusia, mulai dari diagnosis medis yang presisi, kendaraan otonom yang dapat menyetir sendiri, hingga asisten virtual yang mampu memahami bahasa alami manusia dengan sangat akurat.",
            "revolusi industri 4.0 menghadirkan tantangan sekaligus peluang baru bagi tenaga kerja global, di mana keterampilan digital, pemikiran kritis, dan kemampuan pemecahan masalah yang kompleks menjadi jauh lebih berharga dibandingkan pekerjaan repetitif yang dapat diotomatisasi oleh mesin.",
            "dalam teori relativitas umum, albert einstein menjelaskan bahwa gravitasi bukanlah gaya tarik menarik seperti yang digambarkan newton, melainkan konsekuensi dari kelengkungan ruang-waktu yang disebabkan oleh keberadaan massa dan energi yang sangat besar di alam semesta.",
            "ekosistem hutan hujan tropis amazon sering disebut sebagai paru-paru dunia karena kemampuannya yang luar biasa dalam menyerap karbon dioksida dari atmosfer dan melepaskan oksigen yang sangat dibutuhkan oleh seluruh makhluk hidup di planet bumi ini.",
            "sejarah peradaban manusia mencatat bahwa kejatuhan banyak kekaisaran besar sering kali disebabkan oleh kombinasi faktor internal seperti korupsi moral dan politik, serta faktor eksternal seperti invasi militer atau perubahan iklim yang drastis dan tak terduga.",
            "psikologi kognitif mempelajari proses mental internal seperti persepsi, memori, dan pemecahan masalah, berbeda dengan behaviorisme yang hanya fokus pada perilaku yang tampak, memberikan wawasan mendalam tentang bagaimana otak manusia memproses informasi kompleks.",
            "blockchain adalah teknologi buku besar terdistribusi yang mendasari mata uang kripto seperti bitcoin, menjamin keamanan dan transparansi transaksi tanpa perantara, menawarkan potensi revolusioner untuk sistem keuangan globar yang lebih adil dan efisien.",
            "teknologi crispr-cas9 telah membuka era baru dalam rekayasa genetika, memungkinkan ilmuwan untuk mengedit dna dengan presisi tinggi yang berpotensi menyembuhkan penyakit genetik, namun juga memicu perdebatan etis yang mendalam tentang batas-batas intervensi manusia.",
            "lubang hitam atau black hole adalah fenomena kosmik di mana gravitasi begitu kuat sehingga tidak ada partikel bahkan cahaya sekalipun yang dapat lolos darinya, menjadi salah satu objek paling misterius yang terus dipelajari oleh para astrofisikawan.",
            "perkembangan komputasi kuantum menjanjikan lompatan eksponensial dalam kecepatan pemrosesan data dibandingkan komputer klasik, dengan memanfaatkan prinsip superposisi dan keterikatan kuantum untuk memecahkan masalah matematika yang sebelumnya dianggap mustahil.",
            "neuroplastisitas otak membuktikan bahwa sistem saraf manusia memiliki kemampuan luar biasa untuk beradaptasi dan berubah struktur maupun fungsinya sebagai respons terhadap pengalaman baru, pembelajaran, atau pemulihan dari cedera otak.",
            "dalam ekonomi makro, kebijakan moneter yang ketat sering digunakan oleh bank sentral untuk mengendalikan inflasi yang tinggi, meskipun langkah ini berisiko memperlambat pertumbuhan ekonomi dan meningkatkan angka pengangguran dalam jangka pendek.",
            "studi tentang mikrobioma manusia mengungkapkan bahwa triliunan bakteri yang hidup di dalam tubuh kita, terutama di usus, memainkan peran krusial dalam mengatur sistem kekebalan tubuh, pencernaan, dan bahkan kesehatan mental seseorang.",
            "teori evolusi darwin melalui seleksi alam menjelaskan bagaimana spesies beradaptasi terhadap lingkungannya dari waktu ke waktu, di mana individu dengan sifat yang menguntungkan memiliki peluang lebih besar untuk bertahan hidup dan mewariskan sifat tersebut."
        ],

        // ADVANCED TEXTS
        advanced_easy: [
            "metode ilmiah dimulai dari observasi dan hipotesis. data empiris dikumpulkan untuk menguji kebenaran teori tersebut.",
            "atom adalah unit dasar materi yang terdiri dari inti bermuatan positif dan awan elektron bermuatan negatif yang mengelilinginya.",
            "gravitasi adalah gaya tarik-menarik antara semua benda yang memiliki massa atau energi. semakin besar massa, semakin kuat gayanya.",
            "sel adalah unit struktural dan fungsional terkecil dari makhluk hidup. semua organisme tersusun atas sel.",
            "hukum gerak newton menjelaskan hubungan antara gaya yang bekerja pada benda dan gerak yang disebabkannya.",
            "dna membawa instruksi genetik yang digunakan dalam pertumbuhan, perkembangan, fungsi, dan reproduksi semua organisme hidup.",
            "ekosistem adalah komunitas organisme hidup yang berinteraksi satu sama lain dan dengan lingkungan non-hidup mereka.",
            "tabel periodik mengelompokkan unsur-unsur kimia berdasarkan nomor atom, konfigurasi elektron, dan sifat kimia yang berulang.",
            "energi tidak dapat diciptakan atau dimusnahkan, hanya dapat diubah dari satu bentuk ke bentuk lainnya.",
            "bintang terbentuk dari runtuhnya awan gas dan debu raksasa di ruang angkasa akibat gravitasinya sendiri."
        ],
        advanced_medium: [
            "epistemologi merupakan cabang utama filsafat yang mengkaji tentang asal-usul, struktur, metode, dan validitas pengetahuan manusia; mempertanyakan bagaimana kita mengetahui apa yang kita ketahui.",
            "mekanika kuantum adalah teori dasar dalam fisika yang memberikan deskripsi sifat-sifat fisik alam pada skala atom dan partikel subatomik; teori ini membingungkan intuisi klasik.",
            "fotosintesis adalah proses fisio-kimia yang digunakan oleh tanaman, alga, dan bakteri tertentu untuk mengubah energi cahaya menjadi energi kimia; energi ini kemudian disimpan dalam ikatan molekul gula.",
            "paradoks fermi adalah kontradiksi yang jelas antara tingginya estimasi probabilitas keberadaan peradaban ekstraterestrial di alam semesta yang luas ini dengan kurangnya bukti kontak nyata.",
            "dalam sosiologi, stratifikasi sosial merujuk pada kategorisasi masyarakat ke dalam peringkat-peringkat berdasarkan faktor sosio-ekonomi seperti kekayaan, pendapatan, ras, pendidikan, dan kekuasaan.",
            "neuroplastisitas adalah kemampuan otak untuk melakukan reorganisasi dirinya sendiri dengan membentuk koneksi saraf baru sepanjang hidup; penemuan ini mematahkan dogma lama bahwa otak dewasa bersifat statis.",
            "eksistensialisme adalah aliran filsafat yang menekankan pada keberadaan individu, kebebasan, dan pilihan; manusia mendefinisikan makna hidup mereka sendiri melalui keputusan yang mereka buat.",
            "teori string mencoba mendamaikan mekanika kuantum dan relativitas umum dengan mengusulkan bahwa partikel dasar bukanlah titik nol dimensi, melainkan string satu dimensi yang bergetar.",
            "hipotesis sapir-whorf menyatakan bahwa struktur bahasa mempengaruhi cara penuturnya memandang dunia; perbedaan dalam tata bahasa dan kosakata dapat membentuk pola pikir dan budaya.",
            "utilitarianisme adalah teori etika yang menyatakan bahwa tindakan yang terbaik adalah tindakan yang memaksimalkan utilitas, biasanya didefinisikan sebagai memaksimalkan kebahagiaan.",
            "ontologi berfokus pada studi tentang keberadaan, menjadi, dan realitas; mengeksplorasi pertanyaan mendasar tentang apa entitas yang ada dan bagaimana mereka berhubungan.",
            "termokimia mempelajari perubahan energi panas yang menyertai reaksi kimia dan perubahan fase; hukum hess menyatakan bahwa total entalpi reaksi kimia adalah konstan."
        ],
        advanced_hard: [
            "const calculateFactorial = (n) => { if (n === 0 || n === 1) return 1; return n * calculateFactorial(n - 1); };",
            "document.addEventListener('DOMContentLoaded', () => { const app = document.getElementById('root'); app.innerHTML = '<h1>Hello Dynamic World</h1>'; });",
            "import React, { useState, useEffect } from 'react'; const App = () => { const [count, setCount] = useState(0); return <button onClick={() => setCount(c => c+1)}>{count}</button>; };",
            "function binaryDataSearch(arr, x) { let l = 0, r = arr.length - 1; while (l <= r) { let m = l + Math.floor((r - l) / 2); if (arr[m] == x) return m; if (arr[m] < x) l = m + 1; else r = m - 1; } return -1; }",
            ".grid-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; padding: 20px; background-color: #f0f0f0; }",
            "const fetchData = async (url) => { try { const response = await fetch(url); if (!response.ok) throw new Error('Network response was not ok'); return await response.json(); } catch (error) { console.error('Error:', error); } };",
            "@media screen and (max-width: 768px) { .sidebar { display: none; } .main-content { width: 100%; padding: 15px; } .header { font-size: 1.2rem; } }",
            "public class HelloWorld { public static void main(String[] args) { System.out.println('Hello, World!'); } }",
            "SELECT users.name, orders.amount FROM users INNER JOIN orders ON users.id = orders.user_id WHERE orders.amount > 100 ORDER BY orders.created_at DESC;",
            "def fibonacci(n): a, b = 0, 1; for _ in range(n): a, b = b, a + b; return a; print(fibonacci(10))",
            "<?php $fruits = array('Apple', 'Banana', 'Orange'); foreach ($fruits as $fruit) { echo 'I like ' . $fruit . '<br>'; } ?>",
            "$('.btn-submit').on('click', function(e) { e.preventDefault(); $(this).addClass('loading'); submitForm(); });",
            "docker build -t my-node-app . && docker run -p 3000:3000 -d my-node-app",
            "git commit -m 'feat: add new login page' && git push origin feature/login-page"
        ],

        // CUSTOM PLACEHOLDERS (Data comes from user input)
        custom_easy: [],
        custom_medium: [],
        custom_hard: []
    }
};

const state = {
    user: {
        level: 1,
        xp: 0,
        bestWpm: 0,
        unlocked: [] // Difficulties unlocked
    },
    game: {
        category: 'normal',
        difficulty: 'easy',
        timer: null,
        startTime: null,
        words: [],
        charIndex: 0,
        mistakes: 0,
        isTyping: false,
        timerRunning: false
    },
    settings: {
        sfx: true,
        theme: 'violet'
    }
};

const AUDIO = {
    ctx: null,
    enabled: true,
    init() {
        try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) { console.warn("Audio not supported"); }
    },
    playClick() {
        if (!this.enabled) return;
        if (!this.ctx) this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const now = this.ctx.currentTime;
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        // --- 1. THE "CLICK" (High Frequency Plastic Impact) ---
        const oscClick = this.ctx.createOscillator();
        oscClick.type = 'square';
        oscClick.frequency.setValueAtTime(1200 + Math.random() * 400, now);
        oscClick.frequency.exponentialRampToValueAtTime(100, now + 0.03);
        const clickGain = this.ctx.createGain();
        clickGain.gain.setValueAtTime(0.08, now);
        clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
        oscClick.connect(clickGain);
        clickGain.connect(filter);

        // --- 2. THE "CLACK" (Mid Frequency Body) ---
        const oscBody = this.ctx.createOscillator();
        oscBody.type = 'triangle';
        oscBody.frequency.setValueAtTime(400 + Math.random() * 100, now);
        oscBody.frequency.exponentialRampToValueAtTime(150, now + 0.06);
        const bodyGain = this.ctx.createGain();
        bodyGain.gain.setValueAtTime(0.12, now);
        bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        oscBody.connect(bodyGain);
        bodyGain.connect(filter);

        // --- 3. THE "THUD" (Low Resonance) ---
        const oscThud = this.ctx.createOscillator();
        oscThud.type = 'sine';
        oscThud.frequency.setValueAtTime(120 + Math.random() * 30, now);
        const thudGain = this.ctx.createGain();
        thudGain.gain.setValueAtTime(0.15, now);
        thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        oscThud.connect(thudGain);
        thudGain.connect(filter);

        // --- 4. THE NOISE (Mechanical Scrape) ---
        const bufferSize = this.ctx.sampleRate * 0.05;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.04, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
        noise.connect(noiseGain);
        noiseGain.connect(filter);

        // --- FILTER & ENVELOPE ---
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2500, now);
        filter.Q.value = 1;

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

        filter.connect(gain);
        gain.connect(this.ctx.destination);

        // --- START ALL ---
        oscClick.start(now);
        oscBody.start(now);
        oscThud.start(now);
        noise.start(now);

        oscClick.stop(now + 0.05);
        oscBody.stop(now + 0.08);
        oscThud.stop(now + 0.12);
    }
};

// DOM Query Helper
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// --- INIT SYSTEM ---
function init() {
    loadData();
    updateMenuStats();
    applySettings();
    setupEvents();
    hideLoading();
}

function applySettings() {
    // Theme
    document.documentElement.setAttribute('data-theme', state.settings.theme);
    $$('.theme-opt').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.theme === state.settings.theme);
    });

    // SFX
    AUDIO.enabled = state.settings.sfx;
    const checkSfx = $('#check-sfx');
    if (checkSfx) checkSfx.checked = state.settings.sfx;

    // Early init to "warm up" audio
    AUDIO.init();
}

function loadData() {
    const data = localStorage.getItem('speedtyper_x_save');
    if (data) {
        const parsed = JSON.parse(data);
        state.user = parsed.user || state.user;
        state.settings = parsed.settings || state.settings;
    }
}

function saveData() {
    localStorage.setItem('speedtyper_x_save', JSON.stringify({
        user: state.user,
        settings: state.settings
    }));
    updateMenuStats();
}

function updateMenuStats() {
    $('#menu-best-wpm').innerText = state.user.bestWpm;
    $('#menu-level').innerText = state.user.level;

    // Check unlocks
    // Lowered requirements for better UX
    if (state.user.level >= 2) unlockMode('medium');
    if (state.user.level >= 3) unlockMode('hard');
    if (state.user.level >= 4) unlockMode('advanced');
    if (state.user.level >= 5) unlockMode('coding');

    // Legacy / Persistence check
    state.user.unlocked.forEach(mode => unlockMode(mode));
}

function unlockMode(mode) {
    const wrapper = $(`#tab-${mode}-wrapper`);
    if (wrapper) {
        wrapper.classList.remove('disabled');
        const btn = wrapper.querySelector('button');
        btn.disabled = false;
        wrapper.querySelector('.lock-tooltip').style.display = 'none';

        if (!state.user.unlocked.includes(mode)) {
            state.user.unlocked.push(mode);
            saveData();
        }
    }
}

function hideLoading() {
    // Optional: Fade out preload if exists
}

// --- NAVIGATION ---
function showGame() {
    $('#menu-screen').classList.remove('active');
    setTimeout(() => {
        $('#menu-screen').classList.add('hidden');
        $('#game-screen').classList.remove('hidden');
        $('#game-screen').classList.add('active'); // fade in
        resetGame(false);
    }, 400); // Wait for transition
}

function showMenu() {
    $('#game-screen').classList.remove('active');
    clearInterval(state.game.timer);
    setTimeout(() => {
        $('#game-screen').classList.add('hidden');
        $('#menu-screen').classList.remove('hidden');
        // Force reflow
        void $('#menu-screen').offsetWidth;
        $('#menu-screen').classList.add('active');
        updateMenuStats();
    }, 400);
}

// --- HELPER WRAPPERS ---
function toggleModal(modal, show) {
    if (!modal) return;
    if (show) {
        modal.classList.add('visible');
        document.body.classList.add('modal-open');
    } else {
        modal.classList.remove('visible');
        // Only remove modal-open if NO other visible modals exist
        const visibleModals = $$('.modal-backdrop.visible, .modal-overlay.visible');
        if (visibleModals.length === 0) {
            document.body.classList.remove('modal-open');
        }
    }
}

// --- GAME LOGIC ---

function setupEvents() {
    // --- BASIC NAVIGATION ---
    const btnPlay = $('#btn-play');
    const modeSelectionModal = $('#mode-selection-modal');
    const btnNavTest = $('#btn-nav-test-v2');
    if (btnPlay && modeSelectionModal) {
        const openModal = (e) => {
            e.preventDefault();
            toggleModal(modeSelectionModal, true);
        };

        btnPlay.addEventListener('click', openModal);
        if (btnNavTest) btnNavTest.addEventListener('click', openModal);

        $('#btn-close-mode-sel').addEventListener('click', () => {
            toggleModal(modeSelectionModal, false);
        });

        modeSelectionModal.addEventListener('click', (e) => {
            if (e.target === modeSelectionModal) toggleModal(modeSelectionModal, false);
        });
    }

    $$('.mode-card').forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.dataset.catLink;
            toggleModal(modeSelectionModal, false);

            if (cat === 'custom') {
                state.game.category = 'custom';
                toggleModal($('#custom-text-modal'), true);
            } else {
                showGame();
                setTimeout(() => {
                    const catBtn = $(`.cat-btn[data-cat="${cat}"]`);
                    if (catBtn) catBtn.click();
                }, 300);
            }
        });
    });

    const btnRestart = $('#btn-restart');
    if (btnRestart) btnRestart.addEventListener('click', () => resetGame(true));

    // Handle all home/back buttons
    $$('.home-nav-btn, .side-home-btn, #btn-back-menu, #btn-home-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            // Close any open modals first
            $$('.modal-backdrop, .modal-overlay').forEach(m => m.classList.remove('visible'));
            document.body.classList.remove('modal-open');
            showMenu();
        });
    });

    // --- CATEGORY TABS ---
    $$('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.game.category = btn.dataset.cat;
            handleModeChange();
        });
    });

    // --- DIFFICULTY TABS ---
    $$('.tab-btn[data-diff]').forEach(btn => {
        btn.addEventListener('click', () => {
            const diff = btn.dataset.diff;
            // Check lock
            if (btn.disabled) return;

            $$('.tab-btn[data-diff]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.game.difficulty = diff;
            handleModeChange();
        });
    });

    // Dropdown Links Logic (Updated)
    $$('[data-cat-link]').forEach(link => {
        link.addEventListener('click', () => {
            const cat = link.dataset.catLink;
            if (cat === 'custom') {
                state.game.category = 'custom';
                toggleModal($('#custom-text-modal'), true);
            } else {
                showGame();
                setTimeout(() => {
                    const catBtn = $(`.cat-btn[data-cat="${cat}"]`);
                    if (catBtn) catBtn.click();
                }, 300);
            }
        });
    });

    // Static Info Content Database
    const INFO_CONTENT = {
        'how-to': `
            <div class="info-section">
                <div class="image-with-caption">
                    <img src="how-to.png" alt="How to Play" class="modal-banner-img">
                    <div class="img-caption"><i class='bx bx-info-circle'></i> Visualisasi: Posisi jari 'Home Row' yang benar (Transparan)</div>
                </div>
                <h3><i class='bx bx-book-open'></i> Panduan Bermain</h3>
                <div class="stepper">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-text">
                            <strong>Pilih Kategori:</strong> Klik tombol <strong>Tes</strong> untuk memilih mode (Normal, Advanced, atau Custom).
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-text">
                            <strong>Pilih Kesulitan:</strong> Tentukan tingkat Easy, Medium, atau Hard. Level lebih tinggi memberikan tantangan teks yang lebih kompleks.
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-text">
                            <strong>Mulai Mengetik:</strong> Klik area teks atau tombol "Mulai Mengetik", lalu ketik kata-kata yang muncul seakurat mungkin.
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-num">4</div>
                        <div class="step-text">
                            <strong>Indikator Warna:</strong> Huruf <strong>Hijau</strong> berarti benar, <strong>Merah</strong> berarti salah, dan <strong>Ungu</strong> adalah posisi kursor Anda.
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-num">5</div>
                        <div class="step-text">
                            <strong>Evaluasi Skor:</strong> Di akhir sesi, lihat statistik WPM, akurasi, dan jumlah XP yang didapat untuk menaikkan level Anda.
                        </div>
                    </div>
                </div>
            </div>
        `,
        'tips': `
            <div class="info-section">
                <div class="image-with-caption">
                    <img src="tips.png" alt="Typing Tips" class="modal-banner-img">
                    <div class="img-caption"><i class='bx bx-timer'></i> Analogi: Menguasai waktu melalui fokus neural (Fokus Mata)</div>
                </div>
                <h3><i class='bx bx-bulb'></i> Panduan & Teknik Master</h3>
                <ul class="tips-list">
                    <li>
                        <strong>Teknik Home Row:</strong> Letakkan jari Anda pada posisi dasar (ASDF - JKL;). Biarkan jempol bertugas untuk spasi. Ini adalah pondasi utama untuk mengetik buta.
                    </li>
                    <li>
                        <strong>Fokus Mata:</strong> Ikuti ritme seperti jam pasir di atas. Jangan melihat keyboard; biarkan memori otot bekerja memetakan letak tombol secara otomatis.
                    </li>
                    <li>
                        <strong>Postur Ergonomis:</strong> Duduk tegak dengan layar sejajar mata. Jaga pergelangan tangan tetap lurus untuk menghindari kelelahan saat mengetik durasi lama.
                    </li>
                    <li>
                        <strong>Irama Konsisten:</strong> Jangan terburu-buru. Kecepatan (WPM) akan meningkat secara alami jika Anda mengutamakan konsistensi irama ketikan.
                    </li>
                    <li>
                        <strong>Bonus Akurasi 100%:</strong> Raih akurasi sempurna untuk mendapatkan bonus progres level yang jauh lebih cepat dibandingkan biasanya.
                    </li>
                </ul>
            </div>
        `,
        'features': `
            <div class="info-section">
                <div class="image-with-caption">
                    <img src="features.png" alt="Features" class="modal-banner-img">
                    <div class="img-caption"><i class='bx bx-rocket'></i> Performa: Capai kecepatan roket dengan akurasi 100%</div>
                </div>
                <h3><i class='bx bx-star'></i> Ekosistem SpeedTyper Z</h3>
                <div class="feature-grid-modal">
                    <div class="f-item">
                        <i class='bx bx-category-alt'></i>
                        <h4>Multi-Category</h4>
                        <p>Mode Normal untuk harian, Advanced untuk teknis/koding, dan Custom untuk latihan teks bebas pilihan Anda.</p>
                    </div>
                    <div class="f-item">
                        <i class='bx bx-lock-open-alt'></i>
                        <h4>Dynamic Unlock</h4>
                        <p>Tantang diri Anda untuk membuka tingkat kesulitan Medium dan Hard melalui sistem pencapaian berbasis WPM.</p>
                    </div>
                    <div class="f-item">
                        <i class='bx bx-stats'></i>
                        <h4>Live Analytics</h4>
                        <p>Pantau WPM dan akurasi Anda secara real-time dengan grafik bar yang bereaksi terhadap setiap ketikan Anda.</p>
                    </div>
                    <div class="f-item">
                        <i class='bx bx-shield-quarter'></i>
                        <h4>Privasi Data</h4>
                        <p>Semua data progres dan rekor Anda tersimpan aman secara lokal di browser, tanpa pengiriman data ke server luar.</p>
                    </div>
                    <div class="f-item">
                        <i class='bx bx-trophy'></i>
                        <h4>RPG Progression</h4>
                        <p>Sistem level 1-10 yang menyimpan seluruh history pencapaian Anda untuk memotivasi peningkatan kemampuan.</p>
                    </div>
                </div>
            </div>
        `,
        'faq': `
            <div class="info-section">
                <h3><i class='bx bx-question-mark'></i> Pertanyaan Umum (FAQ)</h3>
                <div class="faq-list" style="display: grid; gap: 15px; margin-top: 15px;">
                    <div class="faq-item" style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 12px; border: 1px solid var(--border);">
                        <strong>T: Bagaimana cara menghitung WPM?</strong>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 5px;">J: WPM (Words Per Minute) dihitung berdasarkan jumlah karakter benar dibagi lima, lalu dibagi dengan durasi waktu dalam menit.</p>
                    </div>
                    <div class="faq-item" style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 12px; border: 1px solid var(--border);">
                        <strong>T: Mengapa mode Medium/Hard terkunci?</strong>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 5px;">J: Anda harus membuktikan kemampuan dengan mencapai target WPM tertentu di tingkat kesulitan yang lebih rendah sebelum tantangan yang lebih berat terbuka.</p>
                    </div>
                    <div class="faq-item" style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 12px; border: 1px solid var(--border);">
                        <strong>T: Apakah progres saya akan hilang jika browser ditutup?</strong>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 5px;">J: Tidak. Semua data Anda disimpan di <strong>Local Storage</strong> browser Anda. Data hanya akan hilang jika Anda menghapus cache browser atau menekan tombol 'Reset Data'.</p>
                    </div>
                    <div class="faq-item" style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 12px; border: 1px solid var(--border);">
                        <strong>T: Bisa bermain di HP/Smartphone?</strong>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 5px;">J: Bisa, namun SpeedTyper Z dioptimalkan untuk keyboard fisik (Laptop/PC) guna mendapatkan pengalaman latihan 10 jari yang maksimal.</p>
                    </div>
                    <div class="faq-item" style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 12px; border: 1px solid var(--border);">
                        <strong>T: Apa kegunaan Mode Custom?</strong>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 5px;">J: Anda bisa memasukkan teks sendiri (misal materi kuliah atau koding) untuk dilatih di dalam interface SpeedTyper Z.</p>
                    </div>
                </div>
            </div>
        `,
        'about': `
            <div class="info-section">
                <h3><i class='bx bx-info-circle'></i> Mengenal SpeedTyper Z</h3>
                <div style="line-height: 1.6;">
                    <p><strong>SpeedTyper Z</strong> adalah sebuah platform inovatif yang dirancang khusus untuk melatih kecepatan dan ketepatan mengetik dalam lingkungan digital yang kompetitif. Melalui pendekatan <em>Gamification</em>, kami mengubah latihan mengetik yang membosankan menjadi sebuah perjalanan level-up yang menantang.</p>
                    <br>
                    <p><strong>Visi Kami:</strong> Membantu setiap individu meningkatkan produktivitas digital mereka melalui penguasaan teknik <em>Touch Typing</em> yang sempurna.</p>
                    <br>
                    <div style="background: rgba(139, 92, 246, 0.1); padding: 15px; border-radius: 8px;">
                        <strong>Informasi Pengembang:</strong>
                        <ul style="list-style: none; margin-top: 8px;">
                            <li>• Developer: <strong>Andre Zaenuddin</strong></li>
                            <li>• Kontak: <strong>andrezaenuddin04@gmail.com</strong></li>
                            <li>• Status: <strong>Open Source Project</strong></li>
                        </ul>
                    </div>
                    <br>
                    <p style="font-size: 0.85rem; opacity: 0.7;"><em>Seluruh progres dan data statistik Anda dikelola secara lokal pada browser, memastikan pengalaman bermain yang privat, cepat, dan aman tanpa memerlukan server eksternal.</em></p>
                </div>
            </div>
        `,
    };

    // Nav Logic
    const infoModal = $('#info-modal');
    const infoBody = $('#info-body');
    const infoTitle = $('#info-title');

    $$('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            $$('.nav-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (target === 'home') {
                toggleModal(infoModal, false);
            } else if (target === 'test' || target === 'test-main') {
                // Ignore, handled by the specific openModal listener
            } else {
                infoTitle.innerText = btn.innerText;
                infoBody.innerHTML = INFO_CONTENT[target];
                toggleModal(infoModal, true);
            }
        });
    });

    $('#btn-close-info').addEventListener('click', () => {
        toggleModal(infoModal, false);
        $$('.nav-item').forEach(b => b.classList.remove('active'));
        $(`.nav-item[data-target="home"]`).classList.add('active');
    });



    // Reset Data Logic
    const btnReset = $('#btn-reset-menu');
    const confirmModal = $('#confirm-modal');
    if (btnReset && confirmModal) {
        btnReset.addEventListener('click', () => confirmModal.classList.add('visible'));
        $('#btn-confirm-cancel').addEventListener('click', () => confirmModal.classList.remove('visible'));
        $('#btn-confirm-yes').addEventListener('click', () => {
            localStorage.removeItem('speedtyper_x_save');
            state.user = { level: 1, xp: 0, bestWpm: 0, unlocked: [] };
            saveData();
            updateMenuStats();
            confirmModal.classList.remove('visible');
            location.reload();
        });
    }

    // Result Modal Buttons
    $('#btn-home-modal').addEventListener('click', () => {
        $('#result-modal').classList.remove('visible');
        showMenu();
    });

    // Typography Interactions
    $('#typing-area').addEventListener('click', () => $('#input-field').focus());
    $('#input-field').addEventListener('input', handleInput);

    // Global Audio Unlock (for browsers)
    const unlockAudio = () => {
        if (!AUDIO.ctx) AUDIO.init();
        else if (AUDIO.ctx.state === 'suspended') AUDIO.ctx.resume();
        document.removeEventListener('click', unlockAudio);
        document.removeEventListener('keydown', unlockAudio);
    };
    document.addEventListener('click', unlockAudio);
    document.addEventListener('keydown', unlockAudio);

    // Global Key Listener
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && $('#menu-screen').classList.contains('active')) {
            showGame();
        }
    });

    // Start Overlay Button (MISSING IN PREVIOUS VERSION)
    const startOverlayBtn = $('#btn-start-overlay');
    if (startOverlayBtn) {
        startOverlayBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            $('#input-field').focus();
            $('#typing-area').classList.add('active');
        });
    }

    // Modal Retry Button (MISSING IN PREVIOUS VERSION)
    $('#btn-retry-modal').addEventListener('click', () => {
        toggleModal($('#result-modal'), false);

        // Check availability of next difficulty
        if (state.game.lastResult?.isUnlock) {
            if (state.game.difficulty === 'easy') {
                const btn = $(`.tab-btn[data-diff="medium"]`);
                if (btn && !btn.disabled) { btn.click(); return; }
            } else if (state.game.difficulty === 'medium') {
                const btn = $(`.tab-btn[data-diff="hard"]`);
                if (btn && !btn.disabled) { btn.click(); return; }
            }
        }
        resetGame(true);
    });

    // Custom Modal Controls
    const customModal = $('#custom-text-modal');
    $('#btn-close-custom').addEventListener('click', () => {
        customModal.classList.remove('visible');
    });

    $('#btn-start-custom').addEventListener('click', () => {
        const text = $('#custom-input-area').value.trim();
        if (text && text.length >= 10) {
            // 1. Update internal state
            state.game.category = 'custom';
            const modeId = getModeId();
            CONFIG.texts[modeId] = [text];

            // 2. Hide modal and switch to game screen
            toggleModal(customModal, false);
            showGame();

            // 3. Sync UI after screen transition
            setTimeout(() => {
                // Remove active from all tabs
                $$('.cat-btn').forEach(b => b.classList.remove('active'));
                // Activate the custom tab visually
                const catBtn = $(`.cat-btn[data-cat="custom"]`);
                if (catBtn) catBtn.classList.add('active');

                // Refresh game with the new custom text
                resetGame(true);
            }, 450);
        } else {
            alert("Teks terlalu pendek! Minimal 10 karakter.");
        }
    });

    // --- SETTINGS EVENTS ---
    $('#btn-settings-toggle').addEventListener('click', () => {
        if (!AUDIO.ctx) AUDIO.init();
        toggleModal($('#settings-modal'), true);
    });

    $('#btn-close-settings').addEventListener('click', () => {
        toggleModal($('#settings-modal'), false);
    });

    $('#check-sfx').addEventListener('change', (e) => {
        state.settings.sfx = e.target.checked;
        AUDIO.enabled = state.settings.sfx;
        saveData();
    });

    $$('.theme-opt').forEach(opt => {
        opt.addEventListener('click', () => {
            const theme = opt.dataset.theme;
            state.settings.theme = theme;
            document.documentElement.setAttribute('data-theme', theme);

            $$('.theme-opt').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            saveData();
        });
    });

} // End of setupEvents

function handleModeChange() {
    if (state.game.category === 'custom') {
        const modeId = getModeId();
        // Only open modal if we don't have text for this specific modeId yet
        if (!CONFIG.texts[modeId] || CONFIG.texts[modeId].length === 0) {
            toggleModal($('#custom-text-modal'), true);
        }
    }
    resetGame(true);
}

function getModeId() {
    const cat = state.game.category || 'normal';
    const diff = state.game.difficulty || 'easy';
    return `${cat}_${diff}`;
}



function resetGame(full) {
    state.game.active = true;
    state.game.timerStarted = false;
    state.game.typed = 0;
    clearInterval(state.game.timer);

    // UI Reset
    const input = $('#input-field');
    input.value = '';
    input.blur();
    setTimeout(() => {
        input.value = '';
        input.focus();
    }, 10);

    $('#typing-area').classList.remove('active');
    $('#start-overlay').style.opacity = '1';

    $('#wpm-display').innerText = '0';
    $('#accuracy-text').innerText = '100% Akurasi';
    $('#accuracy-bar').style.width = '100%';
    $('#accuracy-bar').style.background = 'var(--success)';

    // Timer & Mode
    const modeId = getModeId();
    const config = CONFIG.modes[modeId] || { time: 60 };

    const duration = config.time;
    state.game.timeLeft = duration;
    updateTimerDisplay(duration, duration);

    // Text
    state.game.text = getRandomText(modeId);
    renderText(state.game.text);

    $('#game-level').innerText = state.user.level;
}

function getRandomText(modeId) {
    if (state.game.category === 'custom') {
        const textArr = CONFIG.texts[modeId];
        return (textArr && textArr.length > 0) ? textArr[0] : "Klik Custom/Mode lain untuk setup.";
    }

    const list = CONFIG.texts[modeId];
    if (!list || list.length === 0) return "Teks tidak ditemukan.";
    return list[Math.floor(Math.random() * list.length)].trim();
}

function renderText(text) {
    if (!text) text = "Teks belum siap. Pilih mode lain.";
    const display = $('#text-display');
    display.innerHTML = '';
    text.split('').forEach(char => {
        const span = document.createElement('span');
        span.className = 'char';
        span.innerText = char;
        display.appendChild(span);
    });
    if (display.firstChild) display.firstChild.classList.add('active');
}

function startTimer() {
    state.game.timerStarted = true;
    state.game.startTime = Date.now();
    const modeId = getModeId();
    const totalTime = (CONFIG.modes[modeId] || { time: 60 }).time;

    $('#typing-area').classList.add('active');
    $('#start-overlay').style.opacity = '0';

    state.game.timer = setInterval(() => {
        state.game.timeLeft--;
        updateTimerDisplay(state.game.timeLeft, totalTime);
        calculateLiveStats();

        if (state.game.timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function updateTimerDisplay(current, total) {
    $('#time-left').innerText = current;
    const circle = $('#timer-ring');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (current / total) * circumference;
    circle.style.strokeDashoffset = offset;
    if (current <= 5) circle.style.stroke = 'var(--error)';
    else circle.style.stroke = 'var(--primary)';
}

function handleInput() {
    if (!state.game.active) return;
    if (!state.game.timerStarted) startTimer();

    // Play SFX
    AUDIO.playClick();

    const input = $('#input-field').value;
    const chars = $$('.char');
    const inputArr = input.split('');

    state.game.typed = input.length;

    let errors = 0;

    chars.forEach((charSpan, index) => {
        const char = inputArr[index];

        if (char == null) {
            charSpan.classList.remove('correct', 'incorrect', 'active');
            if (index === input.length) charSpan.classList.add('active');
        } else if (char === charSpan.innerText) {
            charSpan.classList.add('correct');
            charSpan.classList.remove('incorrect', 'active');
        } else {
            charSpan.classList.add('incorrect');
            charSpan.classList.remove('correct', 'active');
            errors++;
        }
    });

    const accuracy = Math.max(0, 100 - (errors * 2));
    $('#accuracy-bar').style.width = `${accuracy}%`;
    if (accuracy < 50) $('#accuracy-bar').style.background = 'var(--error)';
    else $('#accuracy-bar').style.background = 'var(--success)';

    // Strict End Game Logic:
    // Only end if we reached the end of text.
    // OPTIONAL: You may want to force user to correct the last char?
    // user complaint suggests they want to correct errors.
    // Let's allow them to stay if length matches but last char is wrong?
    // No, standard is end on length. But let's ensure 'typed' didn't broken.
    if (input.length >= state.game.text.length) {
        endGame();
    }
}

function calculateLiveStats() {
    const modeId = getModeId();
    const totalTime = (CONFIG.modes[modeId] || { time: 60 }).time;
    const timePassed = totalTime - state.game.timeLeft;
    if (timePassed < 1) return;
    const correct = $$('.char.correct').length;
    const wpm = Math.round((correct / 5) / (timePassed / 60));
    $('#wpm-display').innerText = wpm;
}

function endGame() {
    clearInterval(state.game.timer);
    state.game.active = false;

    const modeId = getModeId();
    const totalTime = (CONFIG.modes[modeId] || { time: 60 }).time - Math.max(0, state.game.timeLeft);
    const minutes = Math.max(totalTime, 1) / 60;

    // SOURCE OF TRUTH: DOM Classes
    // This ensures if user backspaced, the 'incorrect' class is GONE, so it is NOT counted.
    const correct = $$('.char.correct').length;
    const incorrect = $$('.char.incorrect').length;

    const wpm = Math.round((correct / 5) / minutes);

    // Calculate accuracy based on VISIBLE chars only
    // (Correct / (Correct + Incorrect))
    // This ignores spaces that might not have classes, so better:
    // (Correct / Total Typed Length) where Total Typed is Correct + Incorrect matches

    const totalRated = correct + incorrect;
    const accuracy = totalRated > 0
        ? Math.round((correct / totalRated) * 100)
        : 0;

    const result = processResults(wpm, accuracy);

    $('#res-wpm').innerText = wpm;
    $('#res-acc').innerText = accuracy + '%';
    $('#res-correct').innerText = correct;
    $('#res-error').innerText = incorrect;
    $('#level-msg').innerText = result.msg;

    // Determine Button State (Dynamic)
    const retryBtn = $('#btn-retry-modal');
    // Save state for 'Next Level' logic
    state.game.lastResult = result;

    if (result.isLevelUp || result.isUnlock) {
        retryBtn.innerHTML = "<i class='bx bx-rocket'></i> Lanjutkan";
        retryBtn.classList.add('pulse-effect');
    } else {
        // High accuracy but slow speed -> "Lanjutkan" (encourage to keep going)
        // Only if accuracy is very bad -> "Coba Lagi"
        if (accuracy >= 95) {
            retryBtn.innerHTML = "<i class='bx bx-redo'></i> Lanjutkan";
        } else if (accuracy < 75) {
            retryBtn.innerHTML = "<i class='bx bx-refresh'></i> Coba Lagi";
        } else {
            retryBtn.innerHTML = "<i class='bx bx-redo'></i> Ulangi";
        }
        retryBtn.classList.remove('pulse-effect');
    }

    // Rank logic
    let rank = 'C';
    if (wpm > 60) rank = 'S';
    else if (wpm > 40) rank = 'A';
    else if (wpm > 20) rank = 'B';
    $('#modal-rank').innerText = rank;
    toggleModal($('#result-modal'), true);
}

// Attach listener for home button - REMOVED redundant handled in setupEvents


function processResults(wpm, accuracy) {
    let msg = '';
    let isLevelUp = false;
    let isUnlock = false;

    // Level Up Check - LOWERED DIFFICULTY to allow easier progression
    // Base Target: Level * 7
    let targetWpm = state.user.level * 7;

    // Bonus: If Accuracy is Perfect (100%), reduce WPM requirement by 20%
    // Reward precision over raw speed
    if (accuracy === 100) {
        targetWpm = Math.floor(targetWpm * 0.8);
    }

    // Pass condition: WPM met AND Accuracy decent (>60)
    // Reward 100% accuracy: Allow passing if WPM is at least 90% of target
    const passWpm = accuracy >= 100 ? targetWpm * 0.9 : targetWpm;
    const isPassing = (wpm >= passWpm) && (accuracy >= 60);

    if (isPassing) {
        if (state.user.level < 10) {
            state.user.level++;
            msg += `LEVEL UP! Anda naik ke Level ${state.user.level}. `;
            isLevelUp = true;
        } else {
            msg += "Level Maksimal! Anda Master. ";
            isLevelUp = true;
        }
    } else {
        msg += `Butuh ${targetWpm} WPM untuk naik level. `;
        if (accuracy < 60) msg += "Tingkatkan Akurasi!";
    }

    // Unlock System
    if (state.game.difficulty === 'easy' && wpm >= 20 && !state.user.unlocked.includes('medium')) {
        state.user.unlocked.push('medium');
        msg += 'Medium Terbuka! ';
        isUnlock = true;
    }
    if (state.game.difficulty === 'medium' && wpm >= 35 && !state.user.unlocked.includes('hard')) {
        state.user.unlocked.push('hard');
        msg += 'Hard Terbuka! ';
        isUnlock = true;
    }

    if (wpm > state.user.bestWpm) {
        state.user.bestWpm = wpm;
        if (!isLevelUp && !isUnlock) msg += 'Rekor Baru!';
    } else if (!isLevelUp && !isUnlock) {
        // If not failing horribly, give generic praise?
        // No, fail usually means retry.
    }

    saveData();
    updateMenuStats();
    return { msg, isLevelUp, isUnlock };
}

// --- IMAGE ZOOM LOGIC ---
function setupImageZoom() {
    const zoomOverlay = $('#image-zoom-overlay');
    const zoomedImg = $('#zoomed-image');

    if (!zoomOverlay || !zoomedImg) return;

    // Use delegation to catch clicks on any image even those in modals
    document.addEventListener('dblclick', (e) => {
        if (e.target.tagName === 'IMG' && (e.target.classList.contains('hero-img') || e.target.classList.contains('section-img') || e.target.classList.contains('modal-banner-img'))) {
            zoomedImg.src = e.target.src;
            toggleModal(zoomOverlay, true);
        }
    });

    zoomOverlay.addEventListener('click', () => {
        toggleModal(zoomOverlay, false);
    });
}

// Start
init();
setupImageZoom();
