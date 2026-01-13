/**
 * SPEEDTYPER X - CORE ENGINE
 * Modern JS Architecture
 */

const CONFIG = {
    modes: {
        // NORMAL CATEGORY
        normal_easy: { time: 60, penalty: false },
        normal_medium: { time: 60, penalty: true },
        normal_hard: { time: 60, penalty: true },

        // ADVANCED CATEGORY
        advanced_easy: { time: 60, penalty: true },
        advanced_medium: { time: 60, penalty: true },
        advanced_hard: { time: 60, penalty: true },

        // CUSTOM CATEGORY
        custom_easy: { time: 60, penalty: false },
        custom_medium: { time: 60, penalty: true },
        custom_hard: { time: 60, penalty: true }
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
            "Pada tahun 1945, Indonesia memproklamasikan kemerdekaannya tepat pukul 10:00 WIB; sebuah momen bersejarah yang mengubah nasib 270 juta rakyat di seluruh nusantara dari Sabang sampai Merauke.",
            "Diskon besar-besaran hingga 70% di pusat perbelanjaan Grand Mall membuat antrean mengular sepanjang 500 meter; diperkirakan lebih dari 2.500 pengunjung memadati lokasi tersebut sejak pukul 08.00 pagi.",
            "Suhu rata-rata bumi telah meningkat sebesar 1.1°C sejak era pra-industri (1850-1900), memicu cuaca ekstrem di 5 benua; kita harus segera bertindak sebelum target 1.5°C terlampaui!",
            "Proyek pembangunan jembatan sepanjang 12.5 km itu menelan biaya Rp 4.5 triliun dan melibatkan lebih dari 1.200 pekerja; ditargetkan selesai pada akhir tahun 2026 mendatang.",
            "Kecepatan cahaya adalah sekitar 299,792,458 meter per detik; bayangkan jika kita bisa bergerak secepat itu, perjalanan ke Mars hanya akan memakan waktu kurang dari 20 menit!",
            "Resep kue bolu pandan: Siapkan 5 butir telur, 200 gram tepung terigu, 150 gram gula pasir, dan 1/2 sendok teh vanili; panggang dalam oven bersuhu 180°C selama 45 menit.",
            "Kode pos untuk wilayah Jakarta Pusat adalah 10110, sedangkan Jakarta Selatan memiliki variasi kode seperti 12190; pastikan alamat pengiriman Anda 100% akurat agar paket tidak nyasar.",
            "Dalam pertandingan sepak bola kemarin, Tim Garuda berhasil menang tipis 2-1 atas lawannya; gol penentu dicetak pada menit ke-89 melalui tendangan penalti yang sangat dramatis.",
            "Harga emas batangan hari ini tercatat naik 0.05% menjadi Rp 1.050.000 per gram; para analis memperkirakan tren ini akan bertahan hingga Q3 tahun 2025.",
            "Spesifikasi laptop baru itu sangat gahar: Prosesor i9-13900K, RAM 32GB DDR5, SSD 2TB, dan layar 4K 120Hz; harganya dibanderol mulai dari $2,499 (sekitar Rp 37 juta).",
            "Tahukah Anda? Jantung manusia berdetak rata-rata 60-100 kali per menit saat istirahat, atau sekitar 100.000 kali dalam sehari tanpa henti seumur hidup!",
            "Indeks Prestasi Kumulatif (IPK) minimum untuk beasiswa tersebut adalah 3.50 skala 4.00, ditambah skor TOEFL minimal 550 atau IELTS 6.5; persaingannya sangat ketat tahun ini.",
            "Gunung Semeru yang memiliki ketinggian 3.676 mdpl kembali erupsi pagi ini; status bahaya dinaikkan ke Level IV (Awas) dan warga dalam radius 5 km diminta segera mengungsi."
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
        timerRunning: false,
        lastLength: 0, // Track for no-backspace logic
        textChars: [] // Stores the actual target characters for comparison
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
        if (this.ctx) return;
        try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn("Audio Context failed to initialize", e);
        }
    },

    playClick() {
        if (!this.enabled) return;
        if (!this.ctx) this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const now = this.ctx.currentTime;
        const mainGain = this.ctx.createGain();
        // Volume slightly higher for "Cool" effect
        mainGain.gain.setValueAtTime(0.7, now);
        mainGain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        mainGain.connect(this.ctx.destination);

        // --- LAYER 1: THE SNAP (High Frequency Contact) ---
        const snap = this.ctx.createOscillator();
        const snapGain = this.ctx.createGain();
        snap.type = 'square';
        snap.frequency.setValueAtTime(2800 + (Math.random() * 600), now);
        snap.frequency.exponentialRampToValueAtTime(1200, now + 0.01);
        snapGain.gain.setValueAtTime(0.2, now);
        snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);
        snap.connect(snapGain);
        snapGain.connect(mainGain);
        snap.start(now); snap.stop(now + 0.02);

        // --- LAYER 2: THE CLACK (Keycap Resonance) ---
        const bufferSize = this.ctx.sampleRate * 0.1;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
        const noiseSource = this.ctx.createBufferSource();
        noiseSource.buffer = buffer;
        const clackFilter = this.ctx.createBiquadFilter();
        clackFilter.type = 'bandpass';
        // Mid-range resonance for that "plastic" feel
        clackFilter.frequency.setValueAtTime(1500 + (Math.random() * 400), now);
        clackFilter.Q.value = 6;
        const clackGain = this.ctx.createGain();
        clackGain.gain.setValueAtTime(0.4, now);
        clackGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
        noiseSource.connect(clackFilter);
        clackFilter.connect(clackGain);
        clackGain.connect(mainGain);
        noiseSource.start(now); noiseSource.stop(now + 0.1);

        // --- LAYER 3: THE THOCK (Housing Bottom-out) ---
        const thock = this.ctx.createOscillator();
        const thockGain = this.ctx.createGain();
        thock.type = 'sine';
        // Deep low-end for the premium "thock"
        thock.frequency.setValueAtTime(140 + (Math.random() * 30), now);
        thockGain.gain.setValueAtTime(0.5, now);
        thockGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        thock.connect(thockGain);
        thockGain.connect(mainGain);
        thock.start(now); thock.stop(now + 0.15);
    },

    playStart() {
        this.playClick();
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

    // Static Info Content Database (ULTRA DETAILED VERSION)
    const INFO_CONTENT = {
        'how-to': `
            <div class="info-section">
                <div class="image-with-caption">
                    <img src="panduan-bermain.png" alt="Panduan" class="section-img modal-banner-img">
                </div>
                <h3><i class='bx bx-play-circle'></i> Alur Permainan Profesional</h3>
                <div class="stepper">
                     <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-text"><strong>Inisialisasi:</strong> Pilih kategori teks (Normal, Advanced, Custom) dan tentukan tingkat kesulitan. Di <strong>Hard Mode</strong>, satu kesalahan kecil langsung menghentikan kemajuan.</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-text"><strong>Sinkronisasi Jari:</strong> Klik mulai. Sistem menunggu input pertama Anda sebelum memulai hitungan mundur. Kecepatan dihitung dalam WPM (5 karakter = 1 kata).</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-text"><strong>Umpan Balik Real-time:</strong> <span style="color:var(--success)">Hijau</span> berarti benar. <span style="color:var(--error)">Merah</span> berarti typo. Di level Easy, Anda wajib mengoreksi typo sebelum bisa lanjut ke kata berikutnya.</div>
                    </div>
                </div>
                
                <h3><i class='bx bx-fingerprint'></i> Standar Teknik 10 Jari</h3>
                <div class="faq-card-detailed">
                    <h4><i class='bx bx-check-double'></i> Posisi Dasar (Home Row)</h4>
                    <p>Pastikan telunjuk kiri di tombol 'F' dan kanan di 'J'. Tonjolan kecil pada tombol tersebut adalah panduan fisik Anda tanpa harus melihat ke bawah.</p>
                </div>
                <div class="faq-card-detailed">
                    <h4><i class='bx bx-bracket'></i> Pembagian Tombol</h4>
                    <p>Jari kelingking kiri mengontrol Q, A, Z, dan Shift kiri. Jempol hanya digunakan eksklusif untuk tombol Space. Latih setiap jari agar memiliki memori otot yang spesifik.</p>
                </div>
            </div>
        `,
        'tips': `
            <div class="info-section">
                <div class="image-with-caption">
                    <img src="tips-mengetik.png" alt="Tips" class="section-img modal-banner-img">
                </div>
                <h3><i class='bx bx-bulb'></i> Strategi Menjadi Master</h3>
                <div class="feature-detail-grid">
                    <div class="detail-item">
                        <i class='bx bxs-shield-check' style="color:var(--success)"></i>
                        <strong>Prinsip 1%:</strong> Fokuslah untuk meningkatkan kecepatan 1-2 WPM saja setiap harinya. Jangan paksa diri langsung ke 100 WPM.
                    </div>
                    <div class="detail-item">
                        <i class='bx bxs-brain' style="color:var(--primary)"></i>
                        <strong>Chunking:</strong> Berhenti membaca per huruf. Mulailah membaca satu kata atau frasa utuh. Otak akan mengirim sinyal gerakan sekaligus ke jari-jari.
                    </div>
                    <div class="detail-item">
                        <i class='bx bxs-hand' style="color:var(--accent)"></i>
                        <strong>Jangan Menekan Keras:</strong> Ketiklah dengan sentuhan ringan (feather touch). Ini mengurangi kelelahan dan mempercepat transisi antar tombol.
                    </div>
                    <div class="detail-item">
                        <i class='bx bxs-timer' style="color:var(--secondary)"></i>
                        <strong>Metronome Effect:</strong> Cobalah mengetik dengan ritme stabil seolah mengikuti detak metronom. Pengetik tercepat bukan yang paling agresif, tapi yang paling stabil.
                    </div>
                </div>
                
                <h3 style="margin-top:30px;"><i class='bx bx-window-alt'></i> Ergonomi Kerja</h3>
                <p>Kesehatan adalah kunci performa jangka panjang. Pastikan monitor setinggi mata, pergelangan tangan tidak menekuk ke atas, dan ambil istirahat setiap 30 menit sesi latihan intensif.</p>
            </div>
        `,
        'features': `
            <div class="info-section">
                <div class="image-with-caption">
                    <img src="fitur-unggulan.png" alt="Features" class="section-img modal-banner-img">
                </div>
                <h3><i class='bx bx-star'></i> Ekosistem SpeedTyper Z</h3>
                <div class="faq-list">
                    <div class="faq-card-detailed">
                        <h4><i class='bx bx-trending-up'></i> Leveling & Rank System</h4>
                        <p>Setiap keberhasilan tes memberikan XP. Naik level akan memberikan pangkat baru mulai dari 'Beginner', 'Typist', 'Expert', hingga 'Legendary'. Level Anda juga akan membuka tantangan Medium dan Hard.</p>
                    </div>
                    <div class="faq-card-detailed">
                        <h4><i class='bx bx-palette'></i> Kustomisasi Audio-Visual</h4>
                        <p>Akses menu kustomisasi untuk mengganti tema warna neon yang dinamis dan efek suara Mechanical Keyboard yang bisa diatur volumenya sesuai kenyamanan Anda.</p>
                    </div>
                    <div class="faq-card-detailed">
                        <h4><i class='bx bx-terminal'></i> Advanced Coding Mode</h4>
                        <p>Mode khusus bagi para developer untuk mensimulasikan pengetikan syntax pemrograman yang kaya akan simbol (@, #, $, {, }) yang jarang ditemukan di teks biasa.</p>
                    </div>
                    <div class="faq-card-detailed">
                        <h4><i class='bx bx-history'></i> Statistik Presisi</h4>
                        <p>Dapatkan analisis detail setelah sesi selesai: WPM bersih, WPM kotor, persentase akurasi, hingga jumlah kesalahan spesifik per karakter.</p>
                    </div>
                </div>
            </div>
        `,
        'faq': `
            <div class="info-section">
                <div class="image-with-caption">
                    <img src="tentang-aplikasi.png" alt="FAQ" class="section-img modal-banner-img">
                </div>
                <h3><i class='bx bx-question-mark'></i> Pertanyaan & Teknis</h3>
                <div class="faq-list">
                    <div class="faq-card-detailed">
                        <h4>Bagaimana WPM dihitung di SpeedTyper Z?</h4>
                        <p>Kami menggunakan standar industri: <strong>(Jumlah Karakter Benar / 5) / (Waktu dalam Detik / 60)</strong>. Spasi juga dihitung sebagai karakter untuk memastikan akurasi beban kerja jari.</p>
                    </div>
                    <div class="faq-card-detailed">
                        <h4>Mengapa data level saya tidak tersimpan?</h4>
                        <p>SpeedTyper Z menyimpan data di <strong>Local Storage</strong> browser Anda. Data mungkin hilang jika Anda membersihkan cache browser secara total atau berada dalam Mode Incognito.</p>
                    </div>
                    <div class="faq-card-detailed">
                        <h4>Apakah bisa menambahkan lagu saat mengetik?</h4>
                        <p>Saat ini fitur audio fokus pada efek mekanik keyboard. Namun, Anda tetap bisa mendengarkan musik eksternal sambil mengetik untuk meningkatkan fokus.</p>
                    </div>
                    <div class="faq-card-detailed">
                        <h4>Apa perbedaan mode Easy, Medium, dan Hard?</h4>
                        <p>Easy mengizinkan koreksi kesalahan. Medium melarang penggunaan Backspace (kesalahan permanen). Hard akan langsung menghentikan tes jika Anda melakukan satu typo saja.</p>
                    </div>
                </div>
            </div>
        `,
        'about': `
            <div class="info-section">
                <div class="image-with-caption">
                    <img src="tentang-aplikasi.png" alt="About" class="section-img modal-banner-img">
                </div>
                <h3><i class='bx bx-info-circle'></i> Informasi Akademik</h3>
                <div class="faq-card-detailed" style="background: rgba(var(--primary-raw), 0.05); padding: 20px;">
                    <table style="width: 100%; border-collapse: collapse; color: var(--text-muted); font-size: 0.9rem;">
                        <tr><td style="padding: 5px 0; font-weight: 700; color: var(--primary); width: 100px;">NAMA</td><td>: Andre Zaenuddin</td></tr>
                        <tr><td style="padding: 5px 0; font-weight: 700; color: var(--primary);">NIM</td><td>: 240601074</td></tr>
                        <tr><td style="padding: 5px 0; font-weight: 700; color: var(--primary);">KELAS</td><td>: 3C</td></tr>
                        <tr><td style="padding: 5px 0; font-weight: 700; color: var(--primary);">MATKUL</td><td>: Pemrograman Lanjutan Web</td></tr>
                    </table>
                </div>
                
                <h3 style="margin-top: 25px;"><i class='bx bx-code-alt'></i> Technical Specs</h3>
                <p style="margin-bottom: 20px;">Proyek ini dikembangkan secara mandiri menggunakan teknologi web murni tanpa framework tambahan untuk menjaga performa optimal.</p>
                <div class="faq-list">
                    <div class="faq-card-detailed">
                        <h4>Modular JavaScript</h4>
                        <p>Menggunakan ES6+ features untuk manajemen state game dan penanganan event secara asinkron.</p>
                    </div>
                    <div class="faq-card-detailed">
                        <h4>Responsive Fluid Design</h4>
                        <p>Tata letak menggunakan CSS Grid dan Flexbox yang adaptif terhadap berbagai ukuran layar.</p>
                    </div>
                </div>

                <div style="margin-top: 30px;">
                    <a href="https://github.com/andrezaenuddin/speedtyperz.github.io" target="_blank"
                        class="primary-btn"
                        style="padding: 15px; font-size: 0.9rem; justify-content: center; text-decoration: none; display: flex; width: 100%;">
                        <i class='bx bxl-github' style="font-size: 1.5rem; margin-right: 10px;"></i> Buka Repository GitHub
                    </a>
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

    const startOverlayBtn = $('#btn-start-overlay');
    if (startOverlayBtn) {
        startOverlayBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const overlay = $('#start-overlay');
            if (overlay) {
                overlay.style.opacity = '0';
                setTimeout(() => overlay.style.display = 'none', 400);
            }
            state.game.active = true;
            state.game.isTyping = true;
            state.game.timerStarted = false;

            const input = $('#input-field');
            input.focus();
            setTimeout(() => input.focus(), 10);

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
    state.game.lastLength = 0; // Reset last length
    updateTimerDisplay(duration, duration);

    // Generate LONG Text (Infinite Style)
    state.game.text = generateInfiniteText(modeId);
    renderText(state.game.text);

    $('#game-level').innerText = state.user.level;
}

// Utility to clean text from hidden gremlins
// Utility to clean text from hidden gremlins - SUPER ROBUST VERSION
function normalizeTextContent(str) {
    if (!str) return "";
    return str.replace(/[\u200B-\u200D\uFEFF]/g, '') // Remove zero-width chars
        .replace(/\u00A0/g, ' ') // Replace nbsp with space
        .replace(/[\t\n\r]/g, ' ') // Replace tabs/newlines
        .replace(/\s+/g, ' '); // Collapse multiple spaces
}

function generateInfiniteText(modeId) {
    const list = CONFIG.texts[modeId];
    if (!list || list.length === 0) return "Teks tidak ditemukan.";

    // Mix and match to create a massive buffer
    let longText = "";
    for (let i = 0; i < 15; i++) {
        const chunk = list[Math.floor(Math.random() * list.length)];
        longText += chunk + " ";
    }
    return normalizeTextContent(longText.trim());
}

function getRandomText(modeId) {
    if (state.game.category === 'custom') {
        const textArr = CONFIG.texts[modeId];
        return (textArr && textArr.length > 0) ? textArr[0] : "Klik Custom/Mode lain untuk setup.";
    }

    const list = CONFIG.texts[modeId];
    if (!list || list.length === 0) return "Teks tidak ditemukan.";
    return normalizeTextContent(list[Math.floor(Math.random() * list.length)].trim());
}


function renderText(text) {
    if (!text) text = "Teks belum siap. Pilih mode lain.";

    // Clear and store chars in state for reliable matching
    state.game.textChars = text.split('');

    const display = $('#text-display');
    display.innerHTML = '';
    display.style.marginTop = '0px';

    const words = text.split(' ');
    words.forEach((word, wordIdx) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word-wrapper';

        word.split('').forEach(char => {
            const span = document.createElement('span');
            span.className = 'char';
            span.textContent = char;
            wordSpan.appendChild(span);
        });

        display.appendChild(wordSpan);

        if (wordIdx < words.length - 1) {
            const spaceSpan = document.createElement('span');
            spaceSpan.className = 'char';
            spaceSpan.textContent = ' ';
            display.appendChild(spaceSpan);
        }
    });

    const firstChar = display.querySelector('.char');
    if (firstChar) firstChar.classList.add('active');
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

    const inputField = $('#input-field');
    const input = inputField.value;

    // Penalty check: Prevent backspace in non-easy modes
    const isEasy = state.game.difficulty === 'easy';
    if (!isEasy && input.length < state.game.lastLength) {
        inputField.value = state.game.lastTypedValue || "";
        return;
    }
    state.game.lastLength = input.length;
    state.game.lastTypedValue = input;

    // Start Timer on first interaction
    if (!state.game.timerStarted && input.length > 0) {
        startTimer();
    }
    AUDIO.playClick();

    const chars = $$('.char');
    const inputArr = input.split('');
    const currentIdx = input.length;
    let currentErrors = 0;

    // SINGLE PASS LOOP: Reset and Update colors
    for (let i = 0; i < chars.length; i++) {
        const charSpan = chars[i];

        // 1. Reset Classes
        charSpan.classList.remove('correct', 'incorrect', 'active');

        if (i < currentIdx) {
            // Already typed -> Compare
            const expected = state.game.textChars[i];
            const typed = inputArr[i];

            // Super robust normalization
            const cleanExp = expected.replace(/[\u00a0\u200b\u200c\u200d\ufeff]/g, ' ');
            const cleanTyp = typed.replace(/[\u00a0\u200b\u200c\u200d\ufeff]/g, ' ');

            if (cleanExp === cleanTyp) {
                charSpan.classList.add('correct');
            } else {
                charSpan.classList.add('incorrect');
                currentErrors++;
            }
        } else if (i === currentIdx) {
            // Next char to type
            charSpan.classList.add('active');
        }
    }

    // SCROLLING LOGIC (Optimized: Outside loop)
    const activeChar = chars[currentIdx] || chars[chars.length - 1];
    if (activeChar) {
        const textDisplay = $('#text-display');
        const offset = activeChar.offsetTop;
        const lineHeight = 48;
        const currentMargin = Math.abs(parseInt(textDisplay.style.marginTop || 0));

        if (offset >= currentMargin + (lineHeight * 2)) {
            textDisplay.style.marginTop = `-${currentMargin + lineHeight}px`;
        } else if (offset < currentMargin) {
            textDisplay.style.marginTop = `-${offset}px`;
        }
    }

    // Update Live Accuracy
    const accuracy = currentIdx > 0
        ? Math.round(((currentIdx - currentErrors) / currentIdx) * 100)
        : 100;

    $('#accuracy-bar').style.width = `${accuracy}%`;
    $('#accuracy-text').innerText = `${accuracy}% Akurasi`;

    if (accuracy < 80) $('#accuracy-bar').style.background = 'var(--error)';
    else $('#accuracy-bar').style.background = 'var(--success)';
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
    // This counts every single character correctly based on their final state
    const correct = $$('.char.correct').length;
    const incorrect = $$('.char.incorrect').length;
    const totalTyped = correct + incorrect;

    // Standard WPM = (Correct Chars / 5) / TimeInMinutes
    const wpm = totalTime > 0 ? Math.round((correct / 5) / minutes) : 0;

    // CPM (Characters Per Minute) - Good for high-speed tracking
    const cpm = totalTime > 0 ? Math.round(correct / minutes) : 0;

    // Accuracy relative to everything typed
    const accuracy = totalTyped > 0
        ? Math.round((correct / totalTyped) * 100)
        : 100;

    const result = processResults(wpm, accuracy);

    $('#res-wpm').innerText = wpm;
    $('#res-acc').innerText = accuracy + '%';
    $('#res-correct').innerText = correct;
    $('#res-error').innerText = incorrect;

    // Rank logic
    // Rank logic (Adjusted: 25 wpm = Minimal Requirement for solid grade)
    let rank = 'C';
    if (wpm > 60) rank = 'S';
    else if (wpm > 40) rank = 'A';
    else if (wpm > 30) rank = 'B';
    else if (wpm >= 25) rank = 'C'; // Explicitly catch 25-30 range as C if needed, or C is default < 30
    // Actually simplicity: Default C, but maybe D for very low?
    // Let's stick to C as base "Ok", B as "Good" (>30).
    // The user said "naik wpm 25 / nilai C".
    // I'll make sure C implies >= 25. If < 25, maybe 'D'?
    if (wpm < 25) rank = 'D';

    // Set Rank color and glow
    const rankEl = $('#modal-rank');
    if (rank === 'S') rankEl.style.color = 'var(--accent)';
    else if (rank === 'A') rankEl.style.color = '#2ecc71';
    else if (rank === 'B') rankEl.style.color = '#3498db';
    else rankEl.style.color = '#95a5a6';
    rankEl.innerText = rank;

    // Inject Title and Analysis into the Modal
    $('#level-msg').innerHTML = `
        <div style="margin-bottom: 10px;">
            <span style="display: block; font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;">Gelar Anda:</span>
            <span style="font-size: 1.5rem; font-weight: 800; color: var(--primary); display: block; margin: 4px 0;">${result.title}</span>
            <p style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 15px;">${result.analysis}</p>
            <div style="border-top: 1px solid var(--border); padding-top: 10px; color: var(--success); font-weight: 600;">
                ${result.msg}
            </div>
        </div>
    `;

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

    toggleModal($('#result-modal'), true);
}

// Attach listener for home button - REMOVED redundant handled in setupEvents


function processResults(wpm, accuracy) {
    let msg = '';
    let isLevelUp = false;
    let isUnlock = false;

    // We enforce a minimum pass of 25 WPM (Rank C start).
    let targetWpm = Math.max(25, state.user.level * 4);

    // If target based on level is somehow crazy high, cap logic applies,
    // but here we just want a strict floor of 25.
    if (targetWpm > 25 && state.user.level < 5) targetWpm = 25; // Gentle curve for early levels

    // Accuracy Bonus
    if (accuracy >= 90) {
        targetWpm = Math.floor(targetWpm * 0.8);
    }

    // Pass condition
    const passWpm = wpm >= targetWpm;
    // Lower accuracy req to 50% to prevent failing decent typers
    const isPassing = passWpm && (accuracy >= 50);

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

    // --- Title & Analysis System ---
    let title = 'Siput Pemula 🐌';
    let analysis = 'Masih lambat, semangat latihan lagi!';
    if (wpm > 85) { title = 'God Speed ⚡'; analysis = 'Luar biasa! Kecepatan master dunia.'; }
    else if (wpm > 65) { title = 'Elite Typist 🎖️'; analysis = 'Sangat cepat dan profesional!'; }
    else if (wpm > 45) { title = 'Pengetik Kilat 🚀'; analysis = 'Hebat! Anda jauh di atas rata-rata.'; }
    else if (wpm > 30) { title = 'Juru Tulis ✍️'; analysis = 'Cukup baik untuk standar kantoran.'; }
    else if (wpm > 15) { title = 'Pengetik Santai ☕'; analysis = 'Sudah oke, tapi bisa lebih cepat!'; }

    saveData();
    updateMenuStats();
    return { msg, isLevelUp, isUnlock, title, analysis };
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
