// ============================================
// BIBLIA INTERACTIVA RV1960 - App Principal v2
// Con: Dark Mode, Favoritos, Notas, Resaltado,
// Compartir, Versículo del Día, Historial,
// Progreso de lectura, PWA
// ============================================

class BibliaApp {
    constructor() {
        this.currentBook = null;
        this.currentChapter = null;
        this.currentBookData = null;
        this.selectedVerse = null;

        // Features state
        this.referencesVisible = false;
        this.concordanceEnabled = false;
        this.concordanceCache = {};
        this.commonWords = this.buildCommonWordsList();
        this.currentFontSize = 'lg';
        this.searchTimeout = null;
        this.searchIndex = null;

        // User data (localStorage)
        this.favorites = this.loadData('biblia_favorites') || {};
        this.notes = this.loadData('biblia_notes') || {};
        this.highlights = this.loadData('biblia_highlights') || {};
        this.history = this.loadData('biblia_history') || [];
        this.readChapters = this.loadData('biblia_read_chapters') || {};

        this.init();
    }

    // ==========================================
    // INITIALIZATION
    // ==========================================
    init() {
        this.setupTheme();
        this.populateBookDropdown();
        this.setupNavigation();
        this.setupSearch();
        this.buildSearchIndex();
        this.setupToolbar();
        this.setupFontSize();
        this.setupVerseActions();
        this.setupNoteEditor();
        this.setupSidebars();
        this.setupKeyboardShortcuts();
        this.setupSwipeGestures();
        this.setupVerseOfDay();
        this.showWelcomeScreen();
        this.registerServiceWorker();
    }

    // ==========================================
    // THEME (Dark Mode)
    // ==========================================
    setupTheme() {
        const saved = localStorage.getItem('biblia_theme') || 'light';
        document.documentElement.setAttribute('data-theme', saved);
        this.updateThemeIcon(saved);

        document.getElementById('themeToggle').addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('biblia_theme', next);
            this.updateThemeIcon(next);
            this.toast(next === 'dark' ? 'Modo oscuro activado' : 'Modo claro activado');
        });
    }

    updateThemeIcon(theme) {
        const btn = document.getElementById('themeToggle');
        btn.innerHTML = theme === 'dark' ? '&#9788;' : '&#9790;';
    }

    // ==========================================
    // BOOK DROPDOWN
    // ==========================================
    populateBookDropdown() {
        const dropdown = document.getElementById('bookDropdown');
        const btn = document.getElementById('bookSelectorBtn');

        let html = '<div class="testament-label">Antiguo Testamento</div><div class="book-grid">';
        let switchedTestament = false;

        BIBLE_BOOKS.forEach(book => {
            if (book.testament === 'new' && !switchedTestament) {
                html += '</div><div class="testament-label">Nuevo Testamento</div><div class="book-grid">';
                switchedTestament = true;
            }
            html += `<div class="book-item" data-id="${book.id}">${book.name}</div>`;
        });
        html += '</div>';
        dropdown.innerHTML = html;

        // Toggle dropdown
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdown.classList.contains('active');
            this.closeAllDropdowns();
            if (!isOpen) {
                dropdown.classList.add('active');
                btn.classList.add('open');
            }
        });

        // Book selection
        dropdown.addEventListener('click', (e) => {
            const item = e.target.closest('.book-item');
            if (!item) return;
            const bookId = item.dataset.id;
            this.selectBook(bookId);
            dropdown.classList.remove('active');
            btn.classList.remove('open');
        });

        // Close on outside click
        document.addEventListener('click', () => this.closeAllDropdowns());
    }

    selectBook(bookId) {
        const book = BIBLE_BOOKS.find(b => b.id === bookId);
        if (!book) return;

        this.currentBook = book;
        this.currentBookData = typeof BIBLE_DATA !== 'undefined' ? BIBLE_DATA[bookId] : null;

        // Update button label
        document.getElementById('bookSelectorLabel').textContent = book.name;

        // Update active state
        document.querySelectorAll('.book-item').forEach(el => {
            el.classList.toggle('active', el.dataset.id === bookId);
        });

        // Build chapter dropdown
        this.buildChapterDropdown(book.chapters);
        this.loadChapter(1);
    }

    buildChapterDropdown(count) {
        const dropdown = document.getElementById('chapterDropdown');
        let html = '<div class="chapter-grid">';
        for (let i = 1; i <= count; i++) {
            const isRead = this.readChapters[`${this.currentBook.id}_${i}`];
            html += `<div class="chapter-item${isRead ? ' read' : ''}" data-ch="${i}">${i}</div>`;
        }
        html += '</div>';
        dropdown.innerHTML = html;

        dropdown.addEventListener('click', (e) => {
            const item = e.target.closest('.chapter-item');
            if (!item) return;
            this.loadChapter(parseInt(item.dataset.ch));
            dropdown.classList.remove('active');
        });
    }

    // ==========================================
    // NAVIGATION
    // ==========================================
    setupNavigation() {
        const chapterBtn = document.getElementById('chapterBtn');
        const chapterDropdown = document.getElementById('chapterDropdown');

        chapterBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = chapterDropdown.classList.contains('active');
            this.closeAllDropdowns();
            if (!isOpen) chapterDropdown.classList.add('active');
        });

        // Prev/Next
        document.getElementById('prevChapter').addEventListener('click', () => this.prevChapter());
        document.getElementById('nextChapter').addEventListener('click', () => this.nextChapter());
        document.getElementById('mobilePrev').addEventListener('click', () => this.prevChapter());
        document.getElementById('mobileNext').addEventListener('click', () => this.nextChapter());
    }

    prevChapter() {
        if (!this.currentBook) return;
        if (this.currentChapter > 1) {
            this.loadChapter(this.currentChapter - 1);
        } else {
            // Previous book
            const idx = BIBLE_BOOKS.findIndex(b => b.id === this.currentBook.id);
            if (idx > 0) {
                const prevBook = BIBLE_BOOKS[idx - 1];
                this.selectBook(prevBook.id);
                this.loadChapter(prevBook.chapters);
            }
        }
    }

    nextChapter() {
        if (!this.currentBook) return;
        if (this.currentChapter < this.currentBook.chapters) {
            this.loadChapter(this.currentChapter + 1);
        } else {
            // Next book
            const idx = BIBLE_BOOKS.findIndex(b => b.id === this.currentBook.id);
            if (idx < BIBLE_BOOKS.length - 1) {
                this.selectBook(BIBLE_BOOKS[idx + 1].id);
            }
        }
    }

    closeAllDropdowns() {
        document.querySelectorAll('.book-dropdown, .chapter-dropdown, .search-results').forEach(el => {
            el.classList.remove('active');
        });
        const btn = document.getElementById('bookSelectorBtn');
        if (btn) btn.classList.remove('open');
    }

    // ==========================================
    // CHAPTER LOADING
    // ==========================================
    loadChapter(chapterNum) {
        if (!this.currentBook || !this.currentBookData) return;

        this.currentChapter = chapterNum;
        const bookId = this.currentBook.id;
        const chapterData = this.currentBookData[chapterNum];

        if (!chapterData) return;

        // Update UI
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('chapterContent').style.display = 'block';
        document.getElementById('mobileNav').style.display = '';
        document.getElementById('chapterTitle').textContent = `${this.currentBook.name} ${chapterNum}`;
        document.getElementById('chapterSubtitle').textContent = `${Object.keys(chapterData).length} versículos`;
        document.getElementById('chapterBtn').textContent = `Cap ${chapterNum}`;

        // Update chapter grid active state
        document.querySelectorAll('.chapter-item').forEach(el => {
            el.classList.toggle('active', parseInt(el.dataset.ch) === chapterNum);
        });

        // Update nav buttons
        document.getElementById('prevChapter').disabled = (chapterNum === 1 && BIBLE_BOOKS.findIndex(b => b.id === bookId) === 0);
        document.getElementById('nextChapter').disabled = (chapterNum === this.currentBook.chapters && BIBLE_BOOKS.findIndex(b => b.id === bookId) === BIBLE_BOOKS.length - 1);

        // Render verses
        this.renderVerses(chapterData, bookId, chapterNum);

        // Mark as read
        this.readChapters[`${bookId}_${chapterNum}`] = true;
        this.saveData('biblia_read_chapters', this.readChapters);
        this.updateReadingProgress();

        // Add to history
        this.addToHistory(bookId, chapterNum);

        // Save last position
        localStorage.setItem('biblia_last_position', JSON.stringify({ book: bookId, chapter: chapterNum }));

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    renderVerses(chapterData, bookId, chapterNum) {
        const container = document.getElementById('verseContainer');
        const key = `${bookId}_${chapterNum}`;

        // Get section titles
        const sectionTitles = (typeof SECTION_TITLES !== 'undefined' && SECTION_TITLES[key]) || [];

        // Get jesus words
        const jesusVerses = (typeof JESUS_WORDS !== 'undefined' && JESUS_WORDS[key]) || [];

        // Get references
        const refs = (typeof CROSS_REFERENCES !== 'undefined' && CROSS_REFERENCES[key]) || {};

        let html = '';
        const verseNums = Object.keys(chapterData).map(Number).sort((a, b) => a - b);

        verseNums.forEach(vNum => {
            // Section title
            const sectionTitle = sectionTitles.find(s => s.verse === vNum);
            if (sectionTitle) {
                html += `<span class="section-title">${sectionTitle.title}</span>`;
            }

            const verseText = chapterData[vNum];
            const verseKey = `${key}_${vNum}`;
            const isJesus = jesusVerses.includes(vNum);
            const isFav = this.favorites[verseKey];
            const hasNote = this.notes[verseKey];
            const highlightColor = this.highlights[verseKey];

            let classes = ['verse'];
            if (isJesus) classes.push('jesus-words');
            if (isFav) classes.push('favorite');
            if (hasNote) classes.push('has-note');
            if (highlightColor) classes.push(`highlight-${highlightColor}`);

            // Process text for concordance
            let processedText = verseText;
            if (this.concordanceEnabled) {
                processedText = this.addConcordanceMarkup(verseText);
            }

            // Add reference indicator
            let refHtml = '';
            if (refs[vNum] && refs[vNum].length > 0) {
                refHtml = `<span class="cross-ref" data-verse="${vNum}" title="${refs[vNum].length} referencias">+</span>`;
            }

            html += `<span class="${classes.join(' ')}" data-verse="${vNum}" data-book="${bookId}" data-chapter="${chapterNum}">`;
            html += `<span class="verse-num">${vNum}</span>`;
            html += processedText;
            html += refHtml;
            html += `</span> `;
        });

        container.innerHTML = html;

        // Setup verse click handlers
        container.querySelectorAll('.verse').forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.target.classList.contains('cross-ref') || e.target.classList.contains('concordance-word')) return;
                this.showVerseActions(el, e);
            });
        });

        // Cross reference handlers
        container.querySelectorAll('.cross-ref').forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                const vNum = parseInt(el.dataset.verse);
                this.showReferences(bookId, chapterNum, vNum);
            });
        });

        // Concordance word handlers
        container.querySelectorAll('.concordance-word').forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showConcordance(el.textContent);
            });
        });
    }

    // ==========================================
    // VERSE ACTIONS (Favorite, Copy, Share, Note, Highlight)
    // ==========================================
    setupVerseActions() {
        const menu = document.getElementById('verseActions');

        // Favorite
        document.getElementById('actionFavorite').addEventListener('click', () => {
            if (!this.selectedVerse) return;
            this.toggleFavorite();
            menu.classList.remove('active');
        });

        // Copy
        document.getElementById('actionCopy').addEventListener('click', () => {
            if (!this.selectedVerse) return;
            this.copyVerse();
            menu.classList.remove('active');
        });

        // Share
        document.getElementById('actionShare').addEventListener('click', () => {
            if (!this.selectedVerse) return;
            this.shareVerse();
            menu.classList.remove('active');
        });

        // Note
        document.getElementById('actionNote').addEventListener('click', () => {
            if (!this.selectedVerse) return;
            this.openNoteEditor();
            menu.classList.remove('active');
        });

        // Highlight colors
        document.querySelectorAll('.highlight-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                if (!this.selectedVerse) return;
                const color = dot.dataset.color;
                this.setHighlight(color);
                menu.classList.remove('active');
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.verse-actions') && !e.target.closest('.verse')) {
                menu.classList.remove('active');
            }
        });
    }

    showVerseActions(verseEl, event) {
        const menu = document.getElementById('verseActions');
        const vNum = parseInt(verseEl.dataset.verse);
        const bookId = verseEl.dataset.book;
        const chapter = parseInt(verseEl.dataset.chapter);
        const book = BIBLE_BOOKS.find(b => b.id === bookId);

        this.selectedVerse = { el: verseEl, verse: vNum, book: bookId, chapter, bookName: book ? book.name : bookId };
        const verseKey = `${bookId}_${chapter}_${vNum}`;

        // Update header
        document.getElementById('verseActionHeader').textContent = `${this.selectedVerse.bookName} ${chapter}:${vNum}`;

        // Update favorite button
        const favBtn = document.getElementById('actionFavorite');
        favBtn.innerHTML = this.favorites[verseKey]
            ? '<span class="icon">&#9829;</span> Quitar favorito'
            : '<span class="icon">&#9825;</span> Favorito';

        // Update highlight dots
        const currentHighlight = this.highlights[verseKey];
        document.querySelectorAll('.highlight-dot').forEach(dot => {
            dot.classList.toggle('active', dot.dataset.color === currentHighlight);
        });

        // Position menu
        const rect = verseEl.getBoundingClientRect();
        menu.style.left = Math.min(event.clientX, window.innerWidth - 220) + 'px';
        menu.style.top = Math.min(rect.bottom + 5, window.innerHeight - 280) + 'px';
        menu.classList.add('active');
    }

    toggleFavorite() {
        const { book, chapter, verse, bookName } = this.selectedVerse;
        const key = `${book}_${chapter}_${verse}`;
        const verseText = this.getVerseText(book, chapter, verse);

        if (this.favorites[key]) {
            delete this.favorites[key];
            this.selectedVerse.el.classList.remove('favorite');
            this.toast('Favorito eliminado');
        } else {
            this.favorites[key] = { book, chapter, verse, bookName, text: verseText.substring(0, 100), date: Date.now() };
            this.selectedVerse.el.classList.add('favorite');
            this.toast('Agregado a favoritos');
        }
        this.saveData('biblia_favorites', this.favorites);
    }

    copyVerse() {
        const { bookName, chapter, verse } = this.selectedVerse;
        const text = this.getVerseText(this.selectedVerse.book, chapter, verse);
        const formatted = `"${text}" — ${bookName} ${chapter}:${verse} (RV1960)`;

        navigator.clipboard.writeText(formatted).then(() => {
            this.toast('Versículo copiado');
        }).catch(() => {
            // Fallback
            const ta = document.createElement('textarea');
            ta.value = formatted;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            this.toast('Versículo copiado');
        });
    }

    shareVerse() {
        const { bookName, chapter, verse } = this.selectedVerse;
        const text = this.getVerseText(this.selectedVerse.book, chapter, verse);
        const formatted = `"${text}"\n— ${bookName} ${chapter}:${verse} (RV1960)`;

        if (navigator.share) {
            navigator.share({
                title: `${bookName} ${chapter}:${verse}`,
                text: formatted
            }).catch(() => {});
        } else {
            // Fallback: copy and suggest sharing
            navigator.clipboard.writeText(formatted).then(() => {
                this.toast('Texto copiado. Pégalo donde quieras compartir.');
            });
        }
    }

    setHighlight(color) {
        const { book, chapter, verse } = this.selectedVerse;
        const key = `${book}_${chapter}_${verse}`;
        const el = this.selectedVerse.el;

        // Remove existing highlights
        el.className = el.className.replace(/highlight-\w+/g, '').trim();

        if (color === 'none') {
            delete this.highlights[key];
            this.toast('Resaltado eliminado');
        } else {
            this.highlights[key] = color;
            el.classList.add(`highlight-${color}`);
            this.toast('Versículo resaltado');
        }
        this.saveData('biblia_highlights', this.highlights);
    }

    getVerseText(bookId, chapter, verse) {
        if (this.currentBookData && this.currentBookData[chapter]) {
            return this.currentBookData[chapter][verse] || '';
        }
        if (typeof BIBLE_DATA !== 'undefined' && BIBLE_DATA[bookId] && BIBLE_DATA[bookId][chapter]) {
            return BIBLE_DATA[bookId][chapter][verse] || '';
        }
        return '';
    }

    // ==========================================
    // NOTE EDITOR
    // ==========================================
    setupNoteEditor() {
        document.getElementById('noteSave').addEventListener('click', () => this.saveNote());
        document.getElementById('noteDelete').addEventListener('click', () => this.deleteNote());
        document.getElementById('noteCancel').addEventListener('click', () => this.closeNoteEditor());
    }

    openNoteEditor() {
        const { book, chapter, verse, bookName } = this.selectedVerse;
        const key = `${book}_${chapter}_${verse}`;
        const editor = document.getElementById('noteEditor');
        const textarea = document.getElementById('noteTextarea');

        document.getElementById('noteEditorTitle').textContent = `Nota: ${bookName} ${chapter}:${verse}`;
        textarea.value = this.notes[key] ? this.notes[key].text : '';

        // Show/hide delete button
        document.getElementById('noteDelete').style.display = this.notes[key] ? '' : 'none';

        // Position editor
        const rect = this.selectedVerse.el.getBoundingClientRect();
        editor.style.left = Math.min(rect.left, window.innerWidth - 340) + 'px';
        editor.style.top = Math.min(rect.bottom + 10, window.innerHeight - 250) + 'px';
        editor.classList.add('active');
        textarea.focus();
    }

    saveNote() {
        const { book, chapter, verse, bookName } = this.selectedVerse;
        const key = `${book}_${chapter}_${verse}`;
        const text = document.getElementById('noteTextarea').value.trim();

        if (text) {
            this.notes[key] = { book, chapter, verse, bookName, text, date: Date.now() };
            this.selectedVerse.el.classList.add('has-note');
            this.toast('Nota guardada');
        } else {
            delete this.notes[key];
            this.selectedVerse.el.classList.remove('has-note');
        }

        this.saveData('biblia_notes', this.notes);
        this.closeNoteEditor();
    }

    deleteNote() {
        const { book, chapter, verse } = this.selectedVerse;
        const key = `${book}_${chapter}_${verse}`;
        delete this.notes[key];
        this.selectedVerse.el.classList.remove('has-note');
        this.saveData('biblia_notes', this.notes);
        this.closeNoteEditor();
        this.toast('Nota eliminada');
    }

    closeNoteEditor() {
        document.getElementById('noteEditor').classList.remove('active');
    }

    // ==========================================
    // SIDEBARS
    // ==========================================
    setupSidebars() {
        const overlay = document.getElementById('overlay');

        // Close buttons
        document.getElementById('closeRefSidebar').addEventListener('click', () => this.closeSidebar('refSidebar'));
        document.getElementById('closeConcSidebar').addEventListener('click', () => this.closeSidebar('concordanceSidebar'));
        document.getElementById('closeUserSidebar').addEventListener('click', () => this.closeSidebar('userSidebar'));

        overlay.addEventListener('click', () => this.closeAllSidebars());

        // User sidebar tabs
        document.querySelectorAll('.sidebar-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.sidebar-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.renderUserSidebarTab(tab.dataset.tab);
            });
        });
    }

    openSidebar(id) {
        this.closeAllSidebars();
        document.getElementById(id).classList.add('active');
        document.getElementById('overlay').classList.add('active');
    }

    closeSidebar(id) {
        document.getElementById(id).classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
    }

    closeAllSidebars() {
        document.querySelectorAll('.sidebar').forEach(s => s.classList.remove('active'));
        document.getElementById('overlay').classList.remove('active');
    }

    // ==========================================
    // REFERENCES
    // ==========================================
    showReferences(bookId, chapter, verse) {
        const key = `${bookId}_${chapter}`;
        const refs = (typeof CROSS_REFERENCES !== 'undefined' && CROSS_REFERENCES[key] && CROSS_REFERENCES[key][verse]) || [];
        const body = document.getElementById('refSidebarBody');
        const book = BIBLE_BOOKS.find(b => b.id === bookId);

        if (refs.length === 0) {
            body.innerHTML = '<div class="sidebar-empty"><div class="sidebar-empty-icon">&#128279;</div>No hay referencias para este versículo</div>';
        } else {
            let html = `<div style="margin-bottom:12px;font-size:0.85em;color:var(--text-tertiary)">${book ? book.name : bookId} ${chapter}:${verse} — ${refs.length} referencias</div>`;
            refs.forEach(ref => {
                html += `<div class="ref-item" data-ref="${ref}">
                    <div class="ref-item-header">${ref}</div>
                </div>`;
            });
            body.innerHTML = html;

            // Click to navigate
            body.querySelectorAll('.ref-item').forEach(item => {
                item.addEventListener('click', () => {
                    const refText = item.dataset.ref;
                    this.navigateToReference(refText);
                });
            });
        }

        this.openSidebar('refSidebar');
    }

    navigateToReference(refText) {
        // Parse reference like "Gn 1:1" or "1 Co 3:16"
        const abbrMap = {};
        BIBLE_BOOKS.forEach(b => { abbrMap[b.abbr.toLowerCase()] = b; });

        // Try to match
        const match = refText.match(/^(.+?)\s+(\d+):?(\d+)?/);
        if (!match) return;

        let abbr = match[1].trim().toLowerCase();
        const chapter = parseInt(match[2]);

        // Find book by abbreviation
        let book = null;
        for (const [key, val] of Object.entries(abbrMap)) {
            if (key === abbr || key.replace(/\s/g, '') === abbr.replace(/\s/g, '')) {
                book = val;
                break;
            }
        }

        if (book) {
            this.closeSidebar('refSidebar');
            this.selectBook(book.id);
            this.loadChapter(chapter);
            if (match[3]) {
                setTimeout(() => {
                    const verseEl = document.querySelector(`.verse[data-verse="${match[3]}"]`);
                    if (verseEl) {
                        verseEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        verseEl.classList.add('selected');
                        setTimeout(() => verseEl.classList.remove('selected'), 2000);
                    }
                }, 300);
            }
        }
    }

    // ==========================================
    // CONCORDANCE
    // ==========================================
    addConcordanceMarkup(text) {
        return text.replace(/\b([A-ZÁÉÍÓÚÑa-záéíóúñ]{4,})\b/g, (match) => {
            if (this.commonWords.has(match.toLowerCase())) return match;
            return `<span class="concordance-word">${match}</span>`;
        });
    }

    showConcordance(word) {
        const normalizedWord = word.toLowerCase();
        const body = document.getElementById('concordanceSidebarBody');

        // Check cache
        if (!this.concordanceCache[normalizedWord]) {
            this.concordanceCache[normalizedWord] = this.searchWordInBible(normalizedWord);
        }

        const results = this.concordanceCache[normalizedWord];
        let html = `<div class="concordance-word-title">"${word}"</div>`;
        html += `<div class="concordance-count">${results.length} apariciones encontradas</div>`;

        results.slice(0, 100).forEach(r => {
            html += `<div class="concordance-item" data-book="${r.book}" data-chapter="${r.chapter}">
                <div class="concordance-item-ref">${r.bookName} ${r.chapter}:${r.verse}</div>
                <div class="concordance-item-text">${r.context}</div>
            </div>`;
        });

        if (results.length > 100) {
            html += `<div style="padding:10px;text-align:center;color:var(--text-tertiary);font-size:0.85em">... y ${results.length - 100} apariciones más</div>`;
        }

        body.innerHTML = html;

        // Click to navigate
        body.querySelectorAll('.concordance-item').forEach(item => {
            item.addEventListener('click', () => {
                this.closeSidebar('concordanceSidebar');
                this.selectBook(item.dataset.book);
                this.loadChapter(parseInt(item.dataset.chapter));
            });
        });

        this.openSidebar('concordanceSidebar');
    }

    searchWordInBible(word) {
        const results = [];
        if (typeof BIBLE_DATA === 'undefined') return results;

        const regex = new RegExp(`\\b${word}\\b`, 'i');

        for (const book of BIBLE_BOOKS) {
            const bookData = BIBLE_DATA[book.id];
            if (!bookData) continue;

            for (const [ch, verses] of Object.entries(bookData)) {
                for (const [v, text] of Object.entries(verses)) {
                    if (regex.test(text)) {
                        // Extract context
                        const idx = text.toLowerCase().indexOf(word);
                        const start = Math.max(0, idx - 30);
                        const end = Math.min(text.length, idx + word.length + 30);
                        let context = (start > 0 ? '...' : '') + text.substring(start, end) + (end < text.length ? '...' : '');

                        results.push({ book: book.id, bookName: book.name, chapter: parseInt(ch), verse: parseInt(v), context });
                    }
                }
            }
        }
        return results;
    }

    buildCommonWordsList() {
        const words = ['que', 'los', 'las', 'del', 'por', 'para', 'con', 'una', 'como', 'pero', 'sus',
            'son', 'todo', 'esto', 'esta', 'fue', 'ser', 'hay', 'les', 'desde', 'cuando', 'sobre',
            'dijo', 'ellos', 'ella', 'entre', 'tiene', 'todos', 'sino', 'porque', 'también',
            'será', 'muy', 'hasta', 'hizo', 'después', 'puede', 'casa', 'ante', 'eran', 'este',
            'otros', 'otra', 'más', 'dios', 'señor', 'hijos', 'había', 'tierra', 'jehová',
            'pueblo', 'hijo', 'israel', 'hombre', 'hombres', 'rey', 'entonces', 'cada',
            'tiempo', 'ahora', 'aquel', 'ellas', 'modo', 'allí', 'así', 'donde', 'aquí', 'algo',
            'tras', 'hacer', 'cosas', 'dicho', 'sido', 'tienen', 'parte', 'mismo', 'todas',
            'pues', 'estaba', 'bien', 'decir', 'estos', 'estas'];
        return new Set(words);
    }

    // ==========================================
    // SEARCH
    // ==========================================
    setupSearch() {
        const input = document.getElementById('searchInput');
        const results = document.getElementById('searchResults');

        input.addEventListener('input', () => {
            clearTimeout(this.searchTimeout);
            const query = input.value.trim();

            if (query.length < 3) {
                results.classList.remove('active');
                return;
            }

            this.searchTimeout = setTimeout(() => {
                this.performSearch(query);
            }, 300);
        });

        input.addEventListener('focus', () => {
            if (input.value.trim().length >= 3) {
                results.classList.add('active');
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                results.classList.remove('active');
                input.blur();
            }
        });
    }

    buildSearchIndex() {
        // Build a lightweight index for faster searching
        this.searchIndex = [];
        if (typeof BIBLE_DATA === 'undefined') return;

        for (const book of BIBLE_BOOKS) {
            const bookData = BIBLE_DATA[book.id];
            if (!bookData) continue;
            for (const [ch, verses] of Object.entries(bookData)) {
                for (const [v, text] of Object.entries(verses)) {
                    this.searchIndex.push({
                        book: book.id,
                        bookName: book.name,
                        chapter: parseInt(ch),
                        verse: parseInt(v),
                        text: text.toLowerCase()
                    });
                }
            }
        }
    }

    performSearch(query) {
        const results = document.getElementById('searchResults');
        const normalizedQuery = query.toLowerCase();
        const matches = [];

        // Check for reference pattern first (e.g., "Juan 3:16")
        const refMatch = query.match(/^(\d?\s*[a-záéíóúñ]+)\s+(\d+):?(\d+)?$/i);
        if (refMatch) {
            const bookQuery = refMatch[1].trim().toLowerCase();
            const chapter = parseInt(refMatch[2]);
            const verse = refMatch[3] ? parseInt(refMatch[3]) : null;

            const book = BIBLE_BOOKS.find(b =>
                b.name.toLowerCase().startsWith(bookQuery) ||
                b.id.toLowerCase() === bookQuery ||
                b.abbr.toLowerCase() === bookQuery
            );

            if (book) {
                this.closeAllDropdowns();
                this.selectBook(book.id);
                this.loadChapter(chapter);
                if (verse) {
                    setTimeout(() => {
                        const verseEl = document.querySelector(`.verse[data-verse="${verse}"]`);
                        if (verseEl) {
                            verseEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            verseEl.classList.add('selected');
                            setTimeout(() => verseEl.classList.remove('selected'), 2000);
                        }
                    }, 300);
                }
                return;
            }
        }

        // Text search
        for (const entry of this.searchIndex) {
            if (entry.text.includes(normalizedQuery)) {
                matches.push(entry);
                if (matches.length >= 30) break;
            }
        }

        if (matches.length === 0) {
            results.innerHTML = '<div class="search-no-results">No se encontraron resultados</div>';
        } else {
            let html = '';
            matches.forEach(m => {
                const idx = m.text.indexOf(normalizedQuery);
                const start = Math.max(0, idx - 40);
                const end = Math.min(m.text.length, idx + normalizedQuery.length + 40);
                let snippet = m.text.substring(start, end);
                snippet = snippet.replace(new RegExp(normalizedQuery, 'gi'), '<mark>$&</mark>');

                html += `<div class="search-result-item" data-book="${m.book}" data-chapter="${m.chapter}" data-verse="${m.verse}">
                    <div class="search-result-ref">${m.bookName} ${m.chapter}:${m.verse}</div>
                    <div class="search-result-text">${start > 0 ? '...' : ''}${snippet}${end < m.text.length ? '...' : ''}</div>
                </div>`;
            });
            results.innerHTML = html;

            results.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    this.selectBook(item.dataset.book);
                    this.loadChapter(parseInt(item.dataset.chapter));
                    results.classList.remove('active');
                    document.getElementById('searchInput').value = '';

                    setTimeout(() => {
                        const verseEl = document.querySelector(`.verse[data-verse="${item.dataset.verse}"]`);
                        if (verseEl) {
                            verseEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            verseEl.classList.add('selected');
                            setTimeout(() => verseEl.classList.remove('selected'), 2000);
                        }
                    }, 300);
                });
            });
        }

        results.classList.add('active');
    }

    // ==========================================
    // TOOLBAR
    // ==========================================
    setupToolbar() {
        document.getElementById('toggleRefs').addEventListener('click', () => {
            this.referencesVisible = !this.referencesVisible;
            document.getElementById('toggleRefs').classList.toggle('active', this.referencesVisible);
            if (this.currentBook && this.currentChapter) {
                this.loadChapter(this.currentChapter);
            }
        });

        document.getElementById('toggleConcordance').addEventListener('click', () => {
            this.concordanceEnabled = !this.concordanceEnabled;
            document.getElementById('toggleConcordance').classList.toggle('active', this.concordanceEnabled);
            localStorage.setItem('biblia_concordance', this.concordanceEnabled);
            if (this.currentBook && this.currentChapter) {
                this.loadChapter(this.currentChapter);
            }
            this.toast(this.concordanceEnabled ? 'Concordancias activadas' : 'Concordancias desactivadas');
        });

        document.getElementById('toggleFavorites').addEventListener('click', () => {
            this.renderUserSidebarTab('favorites');
            document.querySelectorAll('.sidebar-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'favorites'));
            this.openSidebar('userSidebar');
        });

        document.getElementById('toggleNotes').addEventListener('click', () => {
            this.renderUserSidebarTab('notes');
            document.querySelectorAll('.sidebar-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'notes'));
            this.openSidebar('userSidebar');
        });

        document.getElementById('toggleHistory').addEventListener('click', () => {
            this.renderUserSidebarTab('history');
            document.querySelectorAll('.sidebar-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'history'));
            this.openSidebar('userSidebar');
        });

        // Restore concordance state
        if (localStorage.getItem('biblia_concordance') === 'true') {
            this.concordanceEnabled = true;
            document.getElementById('toggleConcordance').classList.add('active');
        }
    }

    // ==========================================
    // FONT SIZE
    // ==========================================
    setupFontSize() {
        const saved = localStorage.getItem('biblia_fontsize') || 'lg';
        this.setFontSize(saved);

        document.querySelectorAll('.font-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setFontSize(btn.dataset.size);
            });
        });
    }

    setFontSize(size) {
        this.currentFontSize = size;
        document.body.className = document.body.className.replace(/font-\w+/g, '').trim();
        document.body.classList.add(`font-${size}`);
        document.querySelectorAll('.font-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.size === size);
        });
        localStorage.setItem('biblia_fontsize', size);
    }

    // ==========================================
    // USER SIDEBAR (Favorites, Notes, History)
    // ==========================================
    renderUserSidebarTab(tab) {
        const body = document.getElementById('userSidebarBody');
        const title = document.getElementById('userSidebarTitle');

        if (tab === 'favorites') {
            title.innerHTML = '&#9829; Favoritos';
            this.renderFavoritesList(body);
        } else if (tab === 'notes') {
            title.innerHTML = '&#9998; Notas';
            this.renderNotesList(body);
        } else if (tab === 'history') {
            title.innerHTML = '&#128340; Historial';
            this.renderHistoryList(body);
        }
    }

    renderFavoritesList(container) {
        const entries = Object.entries(this.favorites).sort((a, b) => (b[1].date || 0) - (a[1].date || 0));

        if (entries.length === 0) {
            container.innerHTML = '<div class="sidebar-empty"><div class="sidebar-empty-icon">&#9829;</div>No tienes favoritos aún. Toca un versículo para agregarlo.</div>';
            return;
        }

        let html = '<ul class="favorites-list">';
        entries.forEach(([key, fav]) => {
            html += `<li data-key="${key}" data-book="${fav.book}" data-chapter="${fav.chapter}" data-verse="${fav.verse}">
                <button class="fav-remove" data-key="${key}" title="Eliminar">&#10005;</button>
                <div class="fav-ref">${fav.bookName} ${fav.chapter}:${fav.verse}</div>
                <div class="fav-text">${fav.text || ''}</div>
            </li>`;
        });
        html += '</ul>';
        container.innerHTML = html;

        // Navigate on click
        container.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', (e) => {
                if (e.target.classList.contains('fav-remove')) return;
                this.closeSidebar('userSidebar');
                this.selectBook(li.dataset.book);
                this.loadChapter(parseInt(li.dataset.chapter));
                setTimeout(() => {
                    const verseEl = document.querySelector(`.verse[data-verse="${li.dataset.verse}"]`);
                    if (verseEl) {
                        verseEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        verseEl.classList.add('selected');
                        setTimeout(() => verseEl.classList.remove('selected'), 2000);
                    }
                }, 300);
            });
        });

        // Remove favorite
        container.querySelectorAll('.fav-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                delete this.favorites[btn.dataset.key];
                this.saveData('biblia_favorites', this.favorites);
                this.renderFavoritesList(container);
                if (this.currentBook && this.currentChapter) this.loadChapter(this.currentChapter);
                this.toast('Favorito eliminado');
            });
        });
    }

    renderNotesList(container) {
        const entries = Object.entries(this.notes).sort((a, b) => (b[1].date || 0) - (a[1].date || 0));

        if (entries.length === 0) {
            container.innerHTML = '<div class="sidebar-empty"><div class="sidebar-empty-icon">&#9998;</div>No tienes notas aún. Toca un versículo y selecciona "Nota".</div>';
            return;
        }

        let html = '<ul class="notes-list">';
        entries.forEach(([key, note]) => {
            html += `<li data-key="${key}" data-book="${note.book}" data-chapter="${note.chapter}" data-verse="${note.verse}">
                <button class="note-remove" data-key="${key}" title="Eliminar">&#10005;</button>
                <div class="note-ref">${note.bookName} ${note.chapter}:${note.verse}</div>
                <div class="note-text">${note.text}</div>
            </li>`;
        });
        html += '</ul>';
        container.innerHTML = html;

        // Navigate
        container.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', (e) => {
                if (e.target.classList.contains('note-remove')) return;
                this.closeSidebar('userSidebar');
                this.selectBook(li.dataset.book);
                this.loadChapter(parseInt(li.dataset.chapter));
            });
        });

        // Remove note
        container.querySelectorAll('.note-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                delete this.notes[btn.dataset.key];
                this.saveData('biblia_notes', this.notes);
                this.renderNotesList(container);
                if (this.currentBook && this.currentChapter) this.loadChapter(this.currentChapter);
                this.toast('Nota eliminada');
            });
        });
    }

    renderHistoryList(container) {
        if (this.history.length === 0) {
            container.innerHTML = '<div class="sidebar-empty"><div class="sidebar-empty-icon">&#128340;</div>Tu historial de lectura aparecerá aquí.</div>';
            return;
        }

        let html = '<ul class="history-list">';
        this.history.slice(0, 50).forEach(h => {
            const book = BIBLE_BOOKS.find(b => b.id === h.book);
            const bookName = book ? book.name : h.book;
            const date = new Date(h.date);
            const dateStr = date.toLocaleDateString('es', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

            html += `<li data-book="${h.book}" data-chapter="${h.chapter}">
                <div class="history-ref">${bookName} ${h.chapter}</div>
                <div class="history-date">${dateStr}</div>
            </li>`;
        });
        html += '</ul>';
        container.innerHTML = html;

        container.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => {
                this.closeSidebar('userSidebar');
                this.selectBook(li.dataset.book);
                this.loadChapter(parseInt(li.dataset.chapter));
            });
        });
    }

    // ==========================================
    // READING HISTORY & PROGRESS
    // ==========================================
    addToHistory(bookId, chapter) {
        const entry = { book: bookId, chapter, date: Date.now() };

        // Avoid duplicate consecutive entries
        if (this.history.length > 0 && this.history[0].book === bookId && this.history[0].chapter === chapter) {
            this.history[0].date = Date.now();
        } else {
            this.history.unshift(entry);
        }

        // Keep last 200 entries
        if (this.history.length > 200) this.history = this.history.slice(0, 200);
        this.saveData('biblia_history', this.history);
    }

    updateReadingProgress() {
        const totalChapters = BIBLE_BOOKS.reduce((sum, b) => sum + b.chapters, 0); // 1189
        const readCount = Object.keys(this.readChapters).length;
        const percentage = (readCount / totalChapters * 100).toFixed(1);
        document.getElementById('readingProgress').style.width = `${percentage}%`;
    }

    // ==========================================
    // VERSE OF THE DAY
    // ==========================================
    setupVerseOfDay() {
        const votdVerses = [
            { book: 'juan', chapter: 3, verse: 16, text: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.' },
            { book: 'salmos', chapter: 23, verse: 1, text: 'Jehová es mi pastor; nada me faltará.' },
            { book: 'filipenses', chapter: 4, verse: 13, text: 'Todo lo puedo en Cristo que me fortalece.' },
            { book: 'romanos', chapter: 8, verse: 28, text: 'Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.' },
            { book: 'isaias', chapter: 41, verse: 10, text: 'No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.' },
            { book: 'jeremias', chapter: 29, verse: 11, text: 'Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.' },
            { book: 'proverbios', chapter: 3, verse: 5, text: 'Fíate de Jehová de todo tu corazón, Y no te apoyes en tu propia prudencia.' },
            { book: 'salmos', chapter: 46, verse: 1, text: 'Dios es nuestro amparo y fortaleza, Nuestro pronto auxilio en las tribulaciones.' },
            { book: 'mateo', chapter: 11, verse: 28, text: 'Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.' },
            { book: 'josue', chapter: 1, verse: 9, text: 'Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.' },
            { book: 'salmos', chapter: 27, verse: 1, text: 'Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?' },
            { book: 'romanos', chapter: 12, verse: 2, text: 'No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento.' },
            { book: 'salmos', chapter: 119, verse: 105, text: 'Lámpara es a mis pies tu palabra, Y lumbrera a mi camino.' },
            { book: 'efesios', chapter: 2, verse: 8, text: 'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.' },
            { book: 'hebreos', chapter: 11, verse: 1, text: 'Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.' },
            { book: 'salmos', chapter: 91, verse: 1, text: 'El que habita al abrigo del Altísimo Morará bajo la sombra del Omnipotente.' },
            { book: '1corintios', chapter: 13, verse: 4, text: 'El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece.' },
            { book: 'galatas', chapter: 5, verse: 22, text: 'Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe.' },
            { book: 'juan', chapter: 14, verse: 6, text: 'Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.' },
            { book: 'salmos', chapter: 37, verse: 4, text: 'Deléitate asimismo en Jehová, Y él te concederá las peticiones de tu corazón.' },
            { book: 'mateo', chapter: 6, verse: 33, text: 'Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.' },
            { book: 'romanos', chapter: 5, verse: 8, text: 'Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros.' },
            { book: '2timoteo', chapter: 1, verse: 7, text: 'Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.' },
            { book: 'salmos', chapter: 121, verse: 1, text: 'Alzaré mis ojos a los montes; ¿De dónde vendrá mi socorro?' },
            { book: 'isaias', chapter: 40, verse: 31, text: 'Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.' },
            { book: '1pedro', chapter: 5, verse: 7, text: 'Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.' },
            { book: 'santiago', chapter: 1, verse: 5, text: 'Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.' },
            { book: 'salmos', chapter: 139, verse: 14, text: 'Te alabaré; porque formidables, maravillosas son tus obras; Estoy maravillado, Y mi alma lo sabe muy bien.' },
            { book: 'juan', chapter: 1, verse: 1, text: 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.' },
            { book: 'apocalipsis', chapter: 21, verse: 4, text: 'Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor; porque las primeras cosas pasaron.' },
            { book: 'salmos', chapter: 100, verse: 5, text: 'Porque Jehová es bueno; para siempre es su misericordia, Y su verdad por todas las generaciones.' }
        ];

        // Pick based on day of year
        const now = new Date();
        const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
        const todayVerse = votdVerses[dayOfYear % votdVerses.length];
        const bookInfo = BIBLE_BOOKS.find(b => b.id === todayVerse.book);
        const bookName = bookInfo ? bookInfo.name : todayVerse.book;

        document.getElementById('votdText').textContent = `"${todayVerse.text}"`;
        document.getElementById('votdRef').textContent = `— ${bookName} ${todayVerse.chapter}:${todayVerse.verse}`;

        // Click to navigate
        document.getElementById('verseOfDay').addEventListener('click', (e) => {
            if (e.target.id === 'shareVotd') return;
            this.selectBook(todayVerse.book);
            this.loadChapter(todayVerse.chapter);
            setTimeout(() => {
                const verseEl = document.querySelector(`.verse[data-verse="${todayVerse.verse}"]`);
                if (verseEl) {
                    verseEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    verseEl.classList.add('selected');
                    setTimeout(() => verseEl.classList.remove('selected'), 2000);
                }
            }, 300);
        });

        // Share verse of the day
        document.getElementById('shareVotd').addEventListener('click', (e) => {
            e.stopPropagation();
            const shareText = `Versículo del día:\n"${todayVerse.text}"\n— ${bookName} ${todayVerse.chapter}:${todayVerse.verse} (RV1960)`;
            if (navigator.share) {
                navigator.share({ title: 'Versículo del Día', text: shareText }).catch(() => {});
            } else {
                navigator.clipboard.writeText(shareText).then(() => this.toast('Versículo copiado'));
            }
        });
    }

    // ==========================================
    // WELCOME SCREEN
    // ==========================================
    showWelcomeScreen() {
        const lastPosition = this.loadData('biblia_last_position');
        const resumeBtn = document.getElementById('resumeReading');

        if (lastPosition) {
            const book = BIBLE_BOOKS.find(b => b.id === lastPosition.book);
            if (book) {
                resumeBtn.textContent = `\u25B6 Continuar: ${book.name} ${lastPosition.chapter}`;
                resumeBtn.style.display = '';
                resumeBtn.addEventListener('click', () => {
                    this.selectBook(lastPosition.book);
                    this.loadChapter(lastPosition.chapter);
                });
            }
        }

        // Reading stats
        const totalChapters = BIBLE_BOOKS.reduce((sum, b) => sum + b.chapters, 0);
        const readCount = Object.keys(this.readChapters).length;
        const favCount = Object.keys(this.favorites).length;
        const noteCount = Object.keys(this.notes).length;

        document.getElementById('readingStats').innerHTML = `
            <div class="stat-card"><div class="stat-number">${readCount}</div><div class="stat-label">de ${totalChapters} capítulos</div></div>
            <div class="stat-card"><div class="stat-number">${favCount}</div><div class="stat-label">favoritos</div></div>
            <div class="stat-card"><div class="stat-number">${noteCount}</div><div class="stat-label">notas</div></div>
        `;

        this.updateReadingProgress();
    }

    // ==========================================
    // KEYBOARD SHORTCUTS
    // ==========================================
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ignore if typing in input/textarea
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            if (e.key === 'Escape') {
                this.closeAllDropdowns();
                this.closeAllSidebars();
                document.getElementById('verseActions').classList.remove('active');
                document.getElementById('noteEditor').classList.remove('active');
                return;
            }

            if (e.key === 'ArrowLeft') { e.preventDefault(); this.prevChapter(); }
            if (e.key === 'ArrowRight') { e.preventDefault(); this.nextChapter(); }
            if (e.key === 'f' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                document.getElementById('searchInput').focus();
            }
            if (e.key === 'd') {
                document.getElementById('themeToggle').click();
            }
        });
    }

    // ==========================================
    // SWIPE GESTURES (Mobile)
    // ==========================================
    setupSwipeGestures() {
        let startX = 0;
        let startY = 0;

        const readingArea = document.getElementById('readingArea');

        readingArea.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });

        readingArea.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = endX - startX;
            const diffY = endY - startY;

            // Only horizontal swipe (more horizontal than vertical, min 80px)
            if (Math.abs(diffX) > 80 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
                if (diffX > 0) {
                    this.prevChapter();
                } else {
                    this.nextChapter();
                }
            }
        }, { passive: true });
    }

    // ==========================================
    // SERVICE WORKER (PWA)
    // ==========================================
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js').catch(() => {});
        }
    }

    // ==========================================
    // UTILITIES
    // ==========================================
    loadData(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch { return null; }
    }

    saveData(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch { /* localStorage full */ }
    }

    toast(message) {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => { if (toast.parentNode) toast.remove(); }, 3000);
    }
}

// ==========================================
// Initialize app
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    window.bibliaApp = new BibliaApp();
});
