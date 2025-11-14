// Aplicación de Biblia Interactiva - Nueva Versión
class BibliaApp {
    constructor() {
        this.currentBook = null;
        this.currentChapter = null;
        this.currentBookData = null;
        this.referencesVisible = true;
        this.lastScrollTop = 0;
        this.currentFontSize = 'xl'; // Default font size
        this.searchTimeout = null;
        this.searchIndex = null; // Índice de búsqueda preconstruido

        // Concordancias
        this.concordanceEnabled = false;
        this.concordanceCache = {};
        this.commonWords = this.buildCommonWordsList();

        // Mobile nav state
        this.mobileNavCollapsed = false;

        this.init();
    }

    init() {
        this.populateBookSelect();
        this.setupScrollBehavior();
        this.setupKeyboardShortcuts();
        this.loadFontSizePreference();
        this.setupSearch();
        this.buildSearchIndex();
        this.loadConcordancePreference();
        this.setupConcordanceClickHandler();
    }

    // Configurar atajos de teclado
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Cerrar resultados de búsqueda
                const searchResults = document.getElementById('searchResults');
                if (searchResults && searchResults.classList.contains('active')) {
                    searchResults.classList.remove('active');
                    return;
                }

                // Cerrar dropdown personalizado si está abierto
                const customDropdown = document.getElementById('customBookDropdown');
                const customOverlay = document.getElementById('customBookOverlay');
                const customTrigger = document.getElementById('customBookTrigger');

                if (customDropdown && customDropdown.classList.contains('active')) {
                    customOverlay.classList.remove('active');
                    customDropdown.classList.remove('active');
                    customTrigger.classList.remove('active');
                    return;
                }

                // Cerrar modal de capítulo si está abierto
                const modalOverlay = document.getElementById('chapterModalOverlay');
                if (modalOverlay && modalOverlay.classList.contains('active')) {
                    this.closeChapterModal();
                }
            }

            // Atajo Ctrl+F o Cmd+F para enfocar búsqueda
            if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
                e.preventDefault();
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.focus();
                    searchInput.select();
                }
            }
        });
    }

    // Configurar comportamiento de scroll para las flechas flotantes
    setupScrollBehavior() {
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            const floatPrevBtn = document.getElementById('floatPrevBtn');
            const floatNextBtn = document.getElementById('floatNextBtn');

            if (!floatPrevBtn || !floatNextBtn) return;
            if (!this.currentBook || !this.currentChapter) return;

            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Ocultar flechas al hacer scroll
            floatPrevBtn.style.opacity = '0.3';
            floatNextBtn.style.opacity = '0.3';

            // Mostrar flechas completamente después de dejar de hacer scroll
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                floatPrevBtn.style.opacity = '';
                floatNextBtn.style.opacity = '';
            }, 500);

            this.lastScrollTop = scrollTop;
        });
    }

    // Poblar el dropdown de libros personalizado
    populateBookSelect() {
        const oldTestamentContainer = document.getElementById('oldTestamentBooks');
        const newTestamentContainer = document.getElementById('newTestamentBooks');
        const customTrigger = document.getElementById('customBookTrigger');
        const customOverlay = document.getElementById('customBookOverlay');
        const customDropdown = document.getElementById('customBookDropdown');
        const backToBooks = document.getElementById('backToBooksBtn');

        // Poblar libros del Antiguo Testamento
        BIBLE_BOOKS.filter(book => book.testament === 'old').forEach(book => {
            const bookOption = document.createElement('div');
            bookOption.className = 'book-option';
            bookOption.textContent = book.name;
            bookOption.dataset.bookId = book.id;
            bookOption.dataset.chapters = book.chapters;
            bookOption.addEventListener('click', () => this.showChapters(book));
            oldTestamentContainer.appendChild(bookOption);
        });

        // Poblar libros del Nuevo Testamento
        BIBLE_BOOKS.filter(book => book.testament === 'new').forEach(book => {
            const bookOption = document.createElement('div');
            bookOption.className = 'book-option new-testament';
            bookOption.textContent = book.name;
            bookOption.dataset.bookId = book.id;
            bookOption.dataset.chapters = book.chapters;
            bookOption.addEventListener('click', () => this.showChapters(book));
            newTestamentContainer.appendChild(bookOption);
        });

        // Event listeners para abrir/cerrar dropdown
        customTrigger.addEventListener('click', () => {
            customOverlay.classList.toggle('active');
            customDropdown.classList.toggle('active');
            customTrigger.classList.toggle('active');
            // Siempre volver a la vista de libros al abrir
            this.showBooksView();
        });

        customOverlay.addEventListener('click', () => {
            customOverlay.classList.remove('active');
            customDropdown.classList.remove('active');
            customTrigger.classList.remove('active');
        });

        // Botón volver a libros
        backToBooks.addEventListener('click', () => {
            this.showBooksView();
        });
    }

    // Mostrar vista de libros
    showBooksView() {
        document.getElementById('booksView').style.display = 'block';
        document.getElementById('chaptersView').style.display = 'none';
    }

    // Mostrar capítulos de un libro
    showChapters(book) {
        const selectedBookTitle = document.getElementById('selectedBookTitle');
        const chaptersGrid = document.getElementById('chaptersGrid');

        // Actualizar título
        selectedBookTitle.textContent = `${book.name} - Selecciona un capítulo`;

        // Limpiar grid de capítulos
        chaptersGrid.innerHTML = '';

        // Crear botones para cada capítulo
        for (let i = 1; i <= book.chapters; i++) {
            const chapterOption = document.createElement('div');
            chapterOption.className = 'chapter-option';
            chapterOption.textContent = i;
            chapterOption.addEventListener('click', () => this.selectBookAndChapter(book, i));
            chaptersGrid.appendChild(chapterOption);
        }

        // Mostrar vista de capítulos
        document.getElementById('booksView').style.display = 'none';
        document.getElementById('chaptersView').style.display = 'block';
    }

    // Seleccionar libro y capítulo
    selectBookAndChapter(book, chapter) {
        const customLabel = document.getElementById('customBookLabel');
        const customOverlay = document.getElementById('customBookOverlay');
        const customDropdown = document.getElementById('customBookDropdown');
        const customTrigger = document.getElementById('customBookTrigger');

        // Actualizar label
        customLabel.textContent = `${book.name} ${chapter}`;

        // Cerrar dropdown
        customOverlay.classList.remove('active');
        customDropdown.classList.remove('active');
        customTrigger.classList.remove('active');

        // Actualizar estado y cargar capítulo
        this.currentBook = book.id;
        this.currentBookData = book;
        this.currentChapter = chapter;

        // Poblar el dropdown de capítulos
        this.populateChapterSelect(book.chapters);
        document.getElementById('chapterSelect').value = chapter;

        // Cargar el capítulo seleccionado
        this.loadChapter();
    }

    // Cuando se selecciona un libro
    onBookChange() {
        const bookSelect = document.getElementById('bookSelect');
        const bookId = bookSelect.value;

        if (!bookId) {
            this.resetChapterSelect();
            return;
        }

        this.currentBook = bookId;
        this.currentBookData = BIBLE_BOOKS.find(b => b.id === bookId);

        // Poblar el dropdown de capítulos
        this.populateChapterSelect(this.currentBookData.chapters);

        // Cargar el primer capítulo automáticamente
        this.currentChapter = 1;
        document.getElementById('chapterSelect').value = 1;
        this.loadChapter();
    }

    // Poblar el dropdown de capítulos
    populateChapterSelect(numChapters) {
        const chapterSelect = document.getElementById('chapterSelect');
        chapterSelect.innerHTML = '';
        chapterSelect.disabled = false;

        for (let i = 1; i <= numChapters; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Capítulo ${i}`;
            chapterSelect.appendChild(option);
        }

        this.updateNavigationButtons();
    }

    // Cuando se selecciona un capítulo
    onChapterChange() {
        const chapterSelect = document.getElementById('chapterSelect');
        const chapter = parseInt(chapterSelect.value);

        if (chapter) {
            this.currentChapter = chapter;
            this.loadChapter();

            // Auto-colapsar nav en móvil después de seleccionar capítulo
            if (window.innerWidth <= 768 && !this.mobileNavCollapsed) {
                setTimeout(() => {
                    this.collapseMobileNav();
                }, 500);
            }
        }
    }

    // Cargar y mostrar el capítulo actual
    loadChapter() {
        if (!this.currentBook || !this.currentChapter) return;

        const chapterKey = `${this.currentBook}_${this.currentChapter}`;
        const verses = BIBLE_TEXT[chapterKey];

        const readerContent = document.getElementById('readerContent');

        if (!verses) {
            readerContent.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">⚠️</div>
                    Capítulo no disponible
                </div>
            `;
            return;
        }

        // Construir el HTML del capítulo
        let html = `
            <div class="chapter-header">
                <div class="chapter-title">${this.currentBookData.name} ${this.currentChapter}</div>
                <div class="chapter-subtitle">Reina Valera 1960</div>
            </div>
            <div class="verses-container">
        `;

        // Obtener títulos de sección si existen
        const sectionTitles = (typeof SECTION_TITLES !== 'undefined' && SECTION_TITLES[chapterKey]) ? SECTION_TITLES[chapterKey] : [];

        verses.forEach(verseData => {
            const verseNumber = verseData.verse;
            let verseText = verseData.text;
            const references = verseData.references || [];

            // Agregar título de sección si existe para este versículo
            const sectionTitle = sectionTitles.find(st => st.verse === verseNumber);
            if (sectionTitle) {
                html += `<div class="section-title">${sectionTitle.title}</div>`;
            }

            // Resaltar palabras de Jesús
            if (this.isJesusVerse(this.currentBook, this.currentChapter, verseNumber)) {
                verseText = '<span class="jesus-words">' + verseText + '</span>';
            }

            let verseHtml = `
                <span class="verse" data-verse="${verseNumber}">
                    <span class="verse-number">${verseNumber}</span>${verseText}`;

            // Agregar referencias cruzadas
            if (references.length > 0) {
                const validRefs = references.filter(ref => ref && ref.trim() !== '');
                validRefs.forEach((ref, index) => {
                    verseHtml += `<a href="#" class="cross-reference"
                        data-ref="${ref}"
                        onclick="app.showReference('${ref}', event)">${ref}</a>`;

                    // Agregar separador si no es la última referencia
                    if (index < validRefs.length - 1) {
                        verseHtml += '<span class="ref-separator">-</span>';
                    }
                });
            }

            verseHtml += '</span>';
            html += verseHtml;
        });

        html += '</div>';

        // Procesar palabras para concordancias si está activado
        html = this.processConcordanceWords(html);

        readerContent.innerHTML = html;

        // Aplicar el estado de visibilidad de referencias
        if (!this.referencesVisible) {
            const allRefs = document.querySelectorAll('.cross-reference');
            const allSeparators = document.querySelectorAll('.ref-separator');
            allRefs.forEach(ref => ref.style.display = 'none');
            allSeparators.forEach(sep => sep.style.display = 'none');
        }

        // Scroll al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Actualizar botones de navegación
        this.updateNavigationButtons();
    }

    // Verificar si un versículo contiene palabras de Jesús
    isJesusVerse(bookId, chapter, verseNumber) {
        if (typeof JESUS_WORDS === 'undefined') {
            return false;
        }

        const chapterKey = `${bookId}_${chapter}`;

        if (!JESUS_WORDS[chapterKey]) {
            return false;
        }

        return JESUS_WORDS[chapterKey].includes(verseNumber);
    }

    // Mostrar una referencia en el panel lateral
    showReference(reference, event) {
        if (event) event.preventDefault();

        const refData = this.parseReference(reference);
        if (!refData) {
            console.warn('No se pudo parsear la referencia:', reference);
            return;
        }

        const { bookId, chapter, verseStart, verseEnd } = refData;
        const chapterKey = `${bookId}_${chapter}`;
        const verses = BIBLE_TEXT[chapterKey];

        if (!verses) {
            this.showReferenceError(reference);
            return;
        }

        const book = BIBLE_BOOKS.find(b => b.id === bookId);
        const referencesContent = document.getElementById('referencesContent');

        let html = '';

        // Obtener los versículos del rango
        const relevantVerses = verses.filter(v => {
            const vNum = v.verse;
            return vNum >= verseStart && vNum <= verseEnd;
        });

        if (relevantVerses.length > 0) {
            // Usar el primer versículo para la navegación
            const firstVerse = relevantVerses[0].verse;

            relevantVerses.forEach(verseData => {
                html += `
                    <div class="reference-item">
                        <div class="reference-title">${book.name} ${chapter}:${verseData.verse}</div>
                        <div class="reference-text">${verseData.text}</div>
                    </div>
                `;
            });

            // Agregar un solo botón al final si hay múltiples versículos
            html += `
                <div style="text-align: center; margin-top: 15px;">
                    <button class="reference-nav-btn" onclick="app.navigateToReference('${bookId}', ${chapter}, ${verseStart}, ${verseEnd})">
                        📖 Ver capítulo completo
                    </button>
                </div>
            `;
        } else {
            html += '<div class="empty-state">Versículo no encontrado</div>';
        }

        referencesContent.innerHTML = html;

        // Abrir el panel
        this.openReferences();
    }

    // Parsear una referencia (ej: "Is 40:3" o "Mt 3:1-3")
    parseReference(ref) {
        const refLower = ref.trim().toLowerCase();

        // Encontrar el libro por abreviatura
        const book = BIBLE_BOOKS.find(b => {
            return b.abbr.toLowerCase() === refLower.split(' ')[0] ||
                   b.id.toLowerCase() === refLower.split(' ')[0];
        });

        if (!book) return null;

        // Extraer capítulo y versículos
        const match = ref.match(/(\d+):(\d+)(?:-(\d+))?/);
        if (!match) return null;

        const chapter = parseInt(match[1]);
        const verseStart = parseInt(match[2]);
        const verseEnd = match[3] ? parseInt(match[3]) : verseStart;

        return {
            bookId: book.id,
            chapter,
            verseStart,
            verseEnd
        };
    }

    showReferenceError(reference) {
        const referencesContent = document.getElementById('referencesContent');
        referencesContent.innerHTML = `
            <div class="reference-item">
                <div class="reference-title">Error</div>
                <div class="reference-text">No se pudo cargar la referencia: ${reference}</div>
            </div>
        `;
        this.openReferences();
    }

    // Abrir el panel de referencias
    openReferences() {
        document.getElementById('referencesOverlay').classList.add('active');
        document.getElementById('referencesPanel').classList.add('active');

        // Ocultar flechas flotantes cuando el panel está abierto
        document.getElementById('floatPrevBtn').style.opacity = '0';
        document.getElementById('floatNextBtn').style.opacity = '0';
    }

    // Cerrar el panel de referencias
    closeReferences() {
        document.getElementById('referencesOverlay').classList.remove('active');
        document.getElementById('referencesPanel').classList.remove('active');

        // Mostrar flechas flotantes cuando el panel se cierra
        document.getElementById('floatPrevBtn').style.opacity = '';
        document.getElementById('floatNextBtn').style.opacity = '';
    }

    // Actualizar estado de botones de navegación
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevChapterBtn');
        const nextBtn = document.getElementById('nextChapterBtn');
        const floatPrevBtn = document.getElementById('floatPrevBtn');
        const floatNextBtn = document.getElementById('floatNextBtn');

        if (!this.currentBook || !this.currentChapter) {
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            floatPrevBtn.classList.remove('active');
            floatNextBtn.classList.remove('active');
            return;
        }

        // Mostrar flechas flotantes cuando hay un capítulo cargado
        floatPrevBtn.classList.add('active');
        floatNextBtn.classList.add('active');

        // Habilitar/deshabilitar botón anterior
        const hasPrev = this.currentChapter > 1;
        prevBtn.disabled = !hasPrev;
        floatPrevBtn.disabled = !hasPrev;

        // Habilitar/deshabilitar botón siguiente
        const hasNext = this.currentChapter < this.currentBookData.chapters;
        nextBtn.disabled = !hasNext;
        floatNextBtn.disabled = !hasNext;
    }

    // Capítulo anterior
    prevChapter() {
        if (this.currentChapter > 1) {
            this.currentChapter--;
            document.getElementById('chapterSelect').value = this.currentChapter;
            this.loadChapter();
        }
    }

    // Capítulo siguiente
    nextChapter() {
        if (this.currentChapter < this.currentBookData.chapters) {
            this.currentChapter++;
            document.getElementById('chapterSelect').value = this.currentChapter;
            this.loadChapter();
        }
    }

    resetChapterSelect() {
        const chapterSelect = document.getElementById('chapterSelect');
        chapterSelect.innerHTML = '<option value="">Capítulo</option>';
        chapterSelect.disabled = true;
        this.updateNavigationButtons();
    }

    // Toggle visibilidad de referencias cruzadas
    toggleReferencesVisibility() {
        this.referencesVisible = !this.referencesVisible;

        const allRefs = document.querySelectorAll('.cross-reference');
        const allSeparators = document.querySelectorAll('.ref-separator');
        const toggleIcon = document.getElementById('refToggleIcon');
        const toggleBtn = document.getElementById('toggleReferencesBtn');

        if (this.referencesVisible) {
            // Mostrar referencias
            allRefs.forEach(ref => ref.style.display = 'inline');
            allSeparators.forEach(sep => sep.style.display = 'inline');
            toggleIcon.textContent = '👁️';
            toggleBtn.style.background = 'white';
            toggleBtn.style.color = '#555';
            toggleBtn.style.borderColor = '#e0e0e0';
        } else {
            // Ocultar referencias
            allRefs.forEach(ref => ref.style.display = 'none');
            allSeparators.forEach(sep => sep.style.display = 'none');
            toggleIcon.textContent = '👁️‍🗨️';
            toggleBtn.style.background = '#667eea';
            toggleBtn.style.color = 'white';
            toggleBtn.style.borderColor = '#667eea';
        }
    }

    // Navegar a una referencia y resaltar el versículo (ahora en modal)
    navigateToReference(bookId, chapter, verseStart, verseEnd = null) {
        // Cerrar el panel de referencias antes de abrir el modal
        this.closeReferences();
        // Si verseEnd no se proporciona, usar verseStart como valor
        const endVerse = verseEnd !== null ? verseEnd : verseStart;
        this.openChapterModal(bookId, chapter, verseStart, endVerse);
    }

    // Abrir modal con capítulo completo
    openChapterModal(bookId, chapter, verseStart, verseEnd) {
        const book = BIBLE_BOOKS.find(b => b.id === bookId);
        const chapterKey = `${bookId}_${chapter}`;
        const verses = BIBLE_TEXT[chapterKey];

        if (!verses || !book) {
            alert('Capítulo no disponible');
            return;
        }

        // Actualizar título del modal
        document.getElementById('chapterModalTitle').textContent = `${book.name} ${chapter}`;

        // Obtener títulos de sección si existen
        const sectionTitles = (typeof SECTION_TITLES !== 'undefined' && SECTION_TITLES[chapterKey]) ? SECTION_TITLES[chapterKey] : [];

        // Construir HTML del capítulo
        let html = '';
        verses.forEach(verseData => {
            const vNum = verseData.verse;
            let verseText = verseData.text;

            // Agregar título de sección si existe para este versículo
            const sectionTitle = sectionTitles.find(st => st.verse === vNum);
            if (sectionTitle) {
                html += `<div class="section-title">${sectionTitle.title}</div>`;
            }

            // Resaltar palabras de Jesús
            if (this.isJesusVerse(bookId, chapter, vNum)) {
                verseText = '<span class="jesus-words">' + verseText + '</span>';
            }

            // Marcar los versículos en el rango de referencia para resaltarlos
            const highlightClass = (vNum >= verseStart && vNum <= verseEnd) ? ' highlight' : '';

            html += `
                <span class="verse${highlightClass}" data-verse="${vNum}">
                    <span class="verse-number">${vNum}</span>${verseText}
                </span>
            `;
        });

        // Insertar contenido en el modal
        document.getElementById('chapterModalContent').innerHTML = html;

        // Prevenir scroll del body cuando el modal está abierto
        document.body.style.overflow = 'hidden';

        // Mostrar el modal
        document.getElementById('chapterModalOverlay').classList.add('active');

        // Hacer scroll al versículo resaltado
        setTimeout(() => {
            const highlightedVerse = document.querySelector('.chapter-modal-content .verse.highlight');
            if (highlightedVerse) {
                highlightedVerse.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }, 100);
    }

    // Cerrar modal de capítulo
    closeChapterModal() {
        document.getElementById('chapterModalOverlay').classList.remove('active');
        // Restaurar scroll del body
        document.body.style.overflow = '';
    }

    // Resaltar un versículo específico
    highlightVerse(verseNumber) {
        // Buscar todos los versículos
        const verses = document.querySelectorAll('.verse');

        verses.forEach(verse => {
            const verseNumElement = verse.querySelector('.verse-number');
            if (verseNumElement && parseInt(verseNumElement.textContent) === verseNumber) {
                // Agregar clase de resaltado
                verse.classList.add('highlight');

                // Scroll suave hasta el versículo con un pequeño offset
                setTimeout(() => {
                    verse.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 100);

                // Remover el resaltado después de 5 segundos
                setTimeout(() => {
                    verse.classList.remove('highlight');
                }, 5000);
            }
        });
    }

    // Cargar preferencia de tamaño de fuente desde localStorage
    loadFontSizePreference() {
        const savedSize = localStorage.getItem('bibliaFontSize');
        if (savedSize) {
            this.setFontSize(savedSize);
        } else {
            // Aplicar tamaño por defecto
            this.setFontSize('xl');
        }
    }

    // Cambiar tamaño de fuente
    setFontSize(size) {
        // Tamaños válidos: xl, large, medium, small
        const validSizes = ['xl', 'large', 'medium', 'small'];
        if (!validSizes.includes(size)) {
            size = 'xl';
        }

        this.currentFontSize = size;

        // Remover todas las clases de tamaño
        document.body.classList.remove('font-size-xl', 'font-size-large', 'font-size-medium', 'font-size-small');

        // Agregar la clase correspondiente
        document.body.classList.add(`font-size-${size}`);

        // Actualizar botones activos
        const fontBtns = document.querySelectorAll('.font-size-btn');
        fontBtns.forEach(btn => {
            if (btn.dataset.size === size) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Guardar preferencia
        localStorage.setItem('bibliaFontSize', size);
    }

    // ============================================
    // BÚSQUEDA INTELIGENTE
    // ============================================

    setupSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchClear = document.getElementById('searchClear');
        const searchResults = document.getElementById('searchResults');
        const searchIcon = document.getElementById('searchIcon');

        if (!searchInput) return;

        // Event listener para búsqueda en tiempo real
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();

            // Mostrar/ocultar botón de limpiar
            if (query) {
                searchClear.classList.add('active');
                searchIcon.style.display = 'none';
            } else {
                searchClear.classList.remove('active');
                searchIcon.style.display = 'block';
                searchResults.classList.remove('active');
                return;
            }

            // Debounce - esperar 300ms después de que el usuario deje de escribir
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                this.performSearch(query);
            }, 300);
        });

        // Botón limpiar búsqueda
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchClear.classList.remove('active');
            searchIcon.style.display = 'block';
            searchResults.classList.remove('active');
            searchInput.focus();
        });

        // Cerrar resultados al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.remove('active');
            }
        });

        // Reabrir resultados al hacer focus si hay búsqueda
        searchInput.addEventListener('focus', () => {
            if (searchInput.value.trim()) {
                searchResults.classList.add('active');
            }
        });

        // Atajos de teclado para navegación en resultados
        let selectedIndex = -1;
        searchInput.addEventListener('keydown', (e) => {
            const items = searchResults.querySelectorAll('.search-result-item');

            if (e.key === 'Escape') {
                searchResults.classList.remove('active');
                searchInput.blur();
                selectedIndex = -1;
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (items.length > 0) {
                    selectedIndex = (selectedIndex + 1) % items.length;
                    this.highlightSearchResult(items, selectedIndex);
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (items.length > 0) {
                    selectedIndex = selectedIndex <= 0 ? items.length - 1 : selectedIndex - 1;
                    this.highlightSearchResult(items, selectedIndex);
                }
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (selectedIndex >= 0 && items[selectedIndex]) {
                    items[selectedIndex].click();
                    selectedIndex = -1;
                }
            }
        });

        // Reset selection cuando cambie el input
        searchInput.addEventListener('input', () => {
            selectedIndex = -1;
        });
    }

    // Resaltar resultado seleccionado con teclado
    highlightSearchResult(items, selectedIndex) {
        items.forEach((item, index) => {
            if (index === selectedIndex) {
                item.style.background = 'rgba(102, 126, 234, 0.2)';
                item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            } else {
                item.style.background = '';
            }
        });
    }

    buildSearchIndex() {
        console.log('📚 Construyendo índice de búsqueda optimizado...');

        this.searchIndex = {
            titles: []
            // NO indexamos versículos completos para ahorrar memoria
            // Los buscaremos on-demand cuando sea necesario
        };

        // Indexar solo títulos de secciones (lightweight)
        if (typeof SECTION_TITLES !== 'undefined') {
            for (const [bookChapter, titles] of Object.entries(SECTION_TITLES)) {
                const [bookId, chapter] = bookChapter.split('_');
                const book = BIBLE_BOOKS.find(b => b.id === bookId);

                if (book) {
                    titles.forEach(titleData => {
                        this.searchIndex.titles.push({
                            bookId,
                            bookName: book.name,
                            chapter: parseInt(chapter),
                            verse: titleData.verse,
                            title: titleData.title,
                            searchText: this.normalizeText(titleData.title)
                        });
                    });
                }
            }
        }

        console.log(`✅ Índice optimizado: ${this.searchIndex.titles.length} títulos`);
        console.log('💡 Versículos se buscan on-demand para ahorrar memoria');
    }

    normalizeText(text) {
        // Normalizar texto para búsqueda (sin acentos, minúsculas)
        return text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, ''); // Eliminar acentos
    }

    performSearch(query) {
        const searchResults = document.getElementById('searchResults');

        if (!query || query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }

        // Mostrar indicador de carga
        searchResults.innerHTML = '<div class="search-loading">🔍 Buscando...</div>';
        searchResults.classList.add('active');

        const normalizedQuery = this.normalizeText(query);
        const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 1);

        // FASE 1: Buscar en títulos (indexados en memoria)
        let titleResults = [];
        if (this.searchIndex.titles) {
            titleResults = this.searchIndex.titles
                .filter(item => queryWords.every(word => item.searchText.includes(word)))
                .slice(0, 10); // Máximo 10 títulos
        }

        // FASE 2: Buscar en versículos ON-DEMAND (más eficiente)
        let verseResults = [];
        if (titleResults.length < 5 && typeof BIBLE_TEXT !== 'undefined') {
            const maxVerses = 20 - titleResults.length;
            verseResults = this.searchVersesOnDemand(queryWords, maxVerses);
        }

        // Mostrar resultados
        this.displaySearchResults(titleResults, verseResults, query);
    }

    // Búsqueda on-demand de versículos (no indexa todo en memoria)
    searchVersesOnDemand(queryWords, maxResults) {
        const results = [];
        let count = 0;

        // Iterar sobre BIBLE_TEXT directamente sin indexar todo
        for (const [bookChapter, verses] of Object.entries(BIBLE_TEXT)) {
            if (count >= maxResults) break;

            const [bookId, chapter] = bookChapter.split('_');
            const book = BIBLE_BOOKS.find(b => b.id === bookId);

            if (!book || !Array.isArray(verses)) continue;

            for (const verseData of verses) {
                if (count >= maxResults) break;

                const normalizedText = this.normalizeText(verseData.text);

                // Verificar si todas las palabras están en el versículo
                if (queryWords.every(word => normalizedText.includes(word))) {
                    results.push({
                        bookId,
                        bookName: book.name,
                        chapter: parseInt(chapter),
                        verse: verseData.verse,
                        text: verseData.text
                    });
                    count++;
                }
            }
        }

        return results;
    }

    displaySearchResults(titleResults, verseResults, query) {
        const searchResults = document.getElementById('searchResults');
        const totalResults = titleResults.length + verseResults.length;

        if (totalResults === 0) {
            searchResults.innerHTML = `
                <div class="search-no-results">
                    <div class="search-no-results-icon">😔</div>
                    <div>No se encontraron resultados para "<strong>${this.escapeHtml(query)}</strong>"</div>
                    <div style="font-size: 0.85em; margin-top: 10px; color: #999;">
                        Intenta con otras palabras clave
                    </div>
                </div>
            `;
            return;
        }

        let html = '';

        // Contador de resultados
        html += `<div class="search-results-header" style="background: #667eea; color: white; font-weight: 700;">
            ✨ ${totalResults} resultado${totalResults !== 1 ? 's' : ''} encontrado${totalResults !== 1 ? 's' : ''}
        </div>`;

        // Mostrar resultados de títulos
        if (titleResults.length > 0) {
            html += '<div class="search-results-header">📋 TÍTULOS DE SECCIONES</div>';
            titleResults.forEach(result => {
                const highlightedTitle = this.highlightTextImproved(result.title, query);
                html += `
                    <div class="search-result-item" onclick="app.navigateToVerse('${result.bookId}', ${result.chapter}, ${result.verse})">
                        <div class="search-result-title">${highlightedTitle}</div>
                        <div class="search-result-reference">${result.bookName} ${result.chapter}:${result.verse}</div>
                    </div>
                `;
            });
        }

        // Mostrar resultados de versículos
        if (verseResults.length > 0) {
            html += '<div class="search-results-header">📖 VERSÍCULOS</div>';
            verseResults.forEach(result => {
                const highlightedText = this.highlightTextImproved(result.text, query);
                // Truncar texto si es muy largo
                const truncatedText = highlightedText.length > 150
                    ? highlightedText.substring(0, 150) + '...'
                    : highlightedText;

                html += `
                    <div class="search-result-item" onclick="app.navigateToVerse('${result.bookId}', ${result.chapter}, ${result.verse})">
                        <div class="search-result-reference">${result.bookName} ${result.chapter}:${result.verse}</div>
                        <div class="search-result-text">${truncatedText}</div>
                    </div>
                `;
            });
        }

        searchResults.innerHTML = html;
    }

    highlightText(text, query) {
        return this.highlightTextImproved(text, query);
    }

    // Método mejorado que maneja acentos correctamente
    highlightTextImproved(text, query) {
        const words = query.trim().split(/\s+/).filter(w => w.length > 1);
        let result = this.escapeHtml(text);

        words.forEach(word => {
            // Crear patrón que ignore acentos para cada palabra
            const pattern = this.createAccentInsensitivePattern(word);
            const regex = new RegExp(pattern, 'gi');

            result = result.replace(regex, match =>
                `<span class="search-result-highlight">${match}</span>`
            );
        });

        return result;
    }

    // Crear patrón regex que ignore acentos
    createAccentInsensitivePattern(word) {
        const accentMap = {
            'a': '[aáàäâ]', 'e': '[eéèëê]', 'i': '[iíìïî]',
            'o': '[oóòöô]', 'u': '[uúùüû]', 'n': '[nñ]',
            'A': '[AÁÀÄÂ]', 'E': '[EÉÈËÊ]', 'I': '[IÍÌÏÎ]',
            'O': '[OÓÒÖÔ]', 'U': '[UÚÙÜÛ]', 'N': '[NÑ]'
        };

        return word.split('').map(char => {
            // Si el caracter tiene variantes con acento, usar el patrón
            const normalChar = char.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            if (accentMap[normalChar]) {
                return accentMap[normalChar];
            }
            // Si ya tiene acento, crear patrón para ese caracter
            if (char !== normalChar && /[a-záéíóúñ]/i.test(normalChar)) {
                return accentMap[normalChar] || char;
            }
            // Para otros caracteres, escapar si es necesario
            return char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }).join('');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    navigateToVerse(bookId, chapter, verse) {
        // Cerrar resultados de búsqueda
        const searchResults = document.getElementById('searchResults');
        searchResults.classList.remove('active');

        // Buscar el libro
        const book = BIBLE_BOOKS.find(b => b.id === bookId);
        if (!book) {
            console.error('Libro no encontrado:', bookId);
            return;
        }

        // Navegar al libro y capítulo
        this.currentBook = bookId;
        this.currentBookData = book;
        this.currentChapter = chapter;

        // Actualizar UI del libro
        document.getElementById('customBookLabel').textContent = `${book.name} ${chapter}`;

        // Poblar el dropdown de capítulos y seleccionar el capítulo actual
        this.populateChapterSelect(book.chapters);
        document.getElementById('chapterSelect').value = chapter;

        // Cargar capítulo
        this.loadChapter();

        // Scroll al versículo específico después de un pequeño delay
        setTimeout(() => {
            const verseElement = document.querySelector(`[data-verse="${verse}"]`);
            if (verseElement) {
                verseElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                verseElement.classList.add('highlight');

                // Remover highlight después de 5 segundos
                setTimeout(() => {
                    verseElement.classList.remove('highlight');
                }, 5000);
            } else {
                // Si no se encuentra el elemento, scroll al inicio
                console.warn('Versículo no encontrado en DOM:', verse);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 500);
    }

    // ============================================
    // SISTEMA DE CONCORDANCIAS BÍBLICAS
    // ============================================

    buildCommonWordsList() {
        // Lista de palabras comunes a ignorar en español
        return new Set([
            'a', 'al', 'ante', 'bajo', 'con', 'contra', 'de', 'del', 'desde', 'durante',
            'en', 'entre', 'hacia', 'hasta', 'para', 'por', 'según', 'sin', 'sobre', 'tras',
            'el', 'la', 'lo', 'los', 'las', 'un', 'una', 'unos', 'unas',
            'y', 'e', 'ni', 'que', 'o', 'u', 'pero', 'mas', 'sino',
            'yo', 'tú', 'él', 'ella', 'nosotros', 'vosotros', 'ellos', 'ellas',
            'me', 'te', 'se', 'nos', 'os', 'le', 'les', 'mi', 'tu', 'su', 'mis', 'tus', 'sus',
            'este', 'esta', 'estos', 'estas', 'ese', 'esa', 'esos', 'esas', 'aquel', 'aquella', 'aquellos', 'aquellas',
            'muy', 'más', 'menos', 'poco', 'mucho', 'todo', 'toda', 'todos', 'todas',
            'algún', 'alguna', 'algunos', 'algunas', 'ningún', 'ninguna', 'ningunos', 'ningunas',
            'cuando', 'donde', 'como', 'cual', 'cuales', 'quien', 'quienes', 'cuanto', 'cuanta', 'cuantos', 'cuantas',
            'si', 'no', 'ni', 'tampoco', 'también',
            'ser', 'estar', 'haber', 'tener', 'hacer', 'poder', 'decir', 'ir', 'ver', 'dar', 'saber', 'querer',
            'es', 'son', 'era', 'fueron', 'fue', 'ha', 'han', 'había', 'habían',
            'tiene', 'tienen', 'tenía', 'tenían', 'tuvo', 'tuvieron',
            'hace', 'hacen', 'hacía', 'hacían', 'hizo', 'hicieron',
            'puede', 'pueden', 'podía', 'podían', 'pudo', 'pudieron',
            'dice', 'dicen', 'decía', 'decían', 'dijo', 'dijeron',
            'va', 'van', 'iba', 'iban', 'vio', 'vieron',
            'da', 'dan', 'daba', 'daban', 'dio', 'dieron',
            'sabe', 'saben', 'sabía', 'sabían', 'supo', 'supieron',
            'quiere', 'quieren', 'quería', 'querían', 'quiso', 'quisieron'
        ]);
    }

    loadConcordancePreference() {
        const saved = localStorage.getItem('concordanceEnabled');
        if (saved !== null) {
            this.concordanceEnabled = saved === 'true';
            this.updateConcordanceButton();
        }
    }

    setupConcordanceClickHandler() {
        // Event delegation: escuchar clicks en el contenedor padre
        document.addEventListener('click', (e) => {
            // Verificar si el click fue en una palabra de concordancia
            const target = e.target;
            if (target && target.classList && target.classList.contains('concordance-word')) {
                e.stopPropagation();
                const word = target.getAttribute('data-word');
                if (word) {
                    this.showConcordance(word);
                }
            }
        });
    }

    toggleConcordanceMode() {
        this.concordanceEnabled = !this.concordanceEnabled;
        localStorage.setItem('concordanceEnabled', this.concordanceEnabled);
        this.updateConcordanceButton();

        // Recargar capítulo actual para aplicar/quitar concordancias
        if (this.currentBook && this.currentChapter) {
            this.loadChapter();
        }
    }

    updateConcordanceButton() {
        const btn = document.getElementById('toggleConcordanceBtn');
        const icon = document.getElementById('concordanceToggleIcon');

        if (this.concordanceEnabled) {
            btn.style.background = '#667eea';
            btn.style.color = 'white';
            btn.style.borderColor = '#667eea';
            icon.textContent = '📖';
        } else {
            btn.style.background = 'white';
            btn.style.color = '#555';
            btn.style.borderColor = '#e0e0e0';
            icon.textContent = '📕';
        }
    }

    isValidConcordanceWord(word) {
        // Limpiar puntuación
        const cleaned = word.replace(/[.,;:!?¿¡()""«»]/g, '').toLowerCase();

        // Ignorar palabras cortas o comunes
        if (cleaned.length < 4 || this.commonWords.has(cleaned)) {
            return false;
        }

        // Ignorar números
        if (/^\d+$/.test(cleaned)) {
            return false;
        }

        return true;
    }

    processConcordanceWords(html) {
        if (!this.concordanceEnabled) {
            return html;
        }

        // Parsear HTML temporal
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        // Procesar cada verso
        const verses = tempDiv.querySelectorAll('.verse');

        verses.forEach(verseElement => {
            // Obtener el texto del versículo (excluyendo número de verso y referencias)
            const verseNumber = verseElement.querySelector('.verse-number');
            const references = verseElement.querySelectorAll('.cross-reference, .ref-separator');

            // Clonar para trabajar con texto sin modificar estructura
            const textNodes = this.getTextNodes(verseElement);

            textNodes.forEach(textNode => {
                const text = textNode.textContent;
                const words = text.split(/(\s+)/); // Mantener espacios

                const fragment = document.createDocumentFragment();

                words.forEach(word => {
                    if (/^\s+$/.test(word)) {
                        // Es un espacio, mantenerlo
                        fragment.appendChild(document.createTextNode(word));
                    } else if (this.isValidConcordanceWord(word)) {
                        // Es una palabra válida, hacerla clickable
                        const span = document.createElement('span');
                        span.className = 'concordance-word';
                        span.textContent = word;
                        span.setAttribute('data-word', word.replace(/[.,;:!?¿¡()""«»]/g, ''));
                        // NO agregamos onclick aquí - se maneja con event delegation
                        fragment.appendChild(span);
                    } else {
                        // Palabra no válida, mantener como texto
                        fragment.appendChild(document.createTextNode(word));
                    }
                });

                textNode.parentNode.replaceChild(fragment, textNode);
            });
        });

        return tempDiv.innerHTML;
    }

    getTextNodes(element) {
        const textNodes = [];
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: (node) => {
                    // Excluir nodos dentro de elementos especiales
                    const parent = node.parentNode;
                    if (parent.classList && (
                        parent.classList.contains('verse-number') ||
                        parent.classList.contains('cross-reference') ||
                        parent.classList.contains('ref-separator') ||
                        parent.classList.contains('concordance-word')
                    )) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        let node;
        while (node = walker.nextNode()) {
            if (node.textContent.trim()) {
                textNodes.push(node);
            }
        }

        return textNodes;
    }

    showConcordance(word) {
        const wordNormalized = this.normalizeText(word);

        // Mostrar panel
        document.getElementById('concordanceOverlay').classList.add('active');
        document.getElementById('concordancePanel').classList.add('active');

        // Actualizar header
        document.getElementById('concordanceWordTitle').textContent = word;
        document.getElementById('concordanceCount').textContent = 'Buscando...';

        const contentDiv = document.getElementById('concordanceContent');
        contentDiv.innerHTML = `
            <div class="concordance-loading">
                <div class="concordance-loading-icon">📖</div>
                <div>Buscando "${word}" en toda la Biblia...</div>
            </div>
        `;

        // Buscar en caché o hacer búsqueda
        setTimeout(() => {
            if (this.concordanceCache[wordNormalized]) {
                this.displayConcordanceResults(word, this.concordanceCache[wordNormalized]);
            } else {
                const results = this.searchConcordance(wordNormalized);
                this.concordanceCache[wordNormalized] = results;
                this.displayConcordanceResults(word, results);
            }
        }, 100);
    }

    searchConcordance(wordNormalized) {
        const results = [];
        const maxResults = 100;

        for (const [bookChapter, verses] of Object.entries(BIBLE_TEXT)) {
            if (results.length >= maxResults) break;

            const [bookId, chapter] = bookChapter.split('_');
            const book = BIBLE_BOOKS.find(b => b.id === bookId);

            if (!book || !Array.isArray(verses)) continue;

            for (const verseData of verses) {
                if (results.length >= maxResults) break;

                const normalizedText = this.normalizeText(verseData.text);

                // Buscar palabra completa (con límites de palabra)
                const regex = new RegExp(`\\b${wordNormalized}\\b`, 'i');

                if (regex.test(normalizedText)) {
                    results.push({
                        bookId,
                        bookName: book.name,
                        chapter: parseInt(chapter),
                        verse: verseData.verse,
                        text: verseData.text
                    });
                }
            }
        }

        return results;
    }

    displayConcordanceResults(word, results) {
        const contentDiv = document.getElementById('concordanceContent');
        const countDiv = document.getElementById('concordanceCount');

        if (results.length === 0) {
            countDiv.textContent = 'No se encontraron resultados';
            contentDiv.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">😔</div>
                    <div>No se encontró "${word}" en la Biblia</div>
                </div>
            `;
            return;
        }

        const displayCount = Math.min(results.length, 100);
        countDiv.textContent = `${displayCount} ${displayCount === 1 ? 'versículo encontrado' : 'versículos encontrados'}${results.length > 100 ? ' (mostrando primeros 100)' : ''}`;

        let html = '';
        results.forEach(result => {
            const highlightedText = this.highlightTextImproved(result.text, word);

            html += `
                <div class="concordance-item" onclick="app.navigateToConcordanceVerse('${result.bookId}', ${result.chapter}, ${result.verse})">
                    <div class="concordance-reference">${result.bookName} ${result.chapter}:${result.verse}</div>
                    <div class="concordance-text">${highlightedText}</div>
                </div>
            `;
        });

        contentDiv.innerHTML = html;
    }

    navigateToConcordanceVerse(bookId, chapter, verse) {
        // Cerrar panel de concordancias
        this.closeConcordance();

        // Navegar al versículo
        this.navigateToVerse(bookId, chapter, verse);
    }

    closeConcordance() {
        document.getElementById('concordanceOverlay').classList.remove('active');
        document.getElementById('concordancePanel').classList.remove('active');
    }

    // === FUNCIONES PARA MÓVIL ===

    // Toggle del nav en móvil
    toggleMobileNav() {
        if (this.mobileNavCollapsed) {
            this.expandMobileNav();
        } else {
            this.collapseMobileNav();
        }
    }

    // Colapsar nav en móvil
    collapseMobileNav() {
        const navBar = document.querySelector('.nav-bar');
        const toggleBtn = document.getElementById('mobileNavToggle');
        const toggleIcon = document.getElementById('navToggleIcon');

        if (navBar) {
            navBar.classList.add('collapsed');
            document.body.classList.add('nav-collapsed');
            this.mobileNavCollapsed = true;

            if (toggleBtn) {
                toggleBtn.classList.add('active');
            }
            if (toggleIcon) {
                // Mostrar icono de menú cuando está colapsado
                toggleIcon.textContent = '☰';
            }
        }
    }

    // Expandir nav en móvil
    expandMobileNav() {
        const navBar = document.querySelector('.nav-bar');
        const toggleBtn = document.getElementById('mobileNavToggle');
        const toggleIcon = document.getElementById('navToggleIcon');

        if (navBar) {
            navBar.classList.remove('collapsed');
            document.body.classList.remove('nav-collapsed');
            this.mobileNavCollapsed = false;

            if (toggleBtn) {
                toggleBtn.classList.remove('active');
            }
            if (toggleIcon) {
                // Mostrar X cuando está expandido
                toggleIcon.textContent = '×';
            }
        }
    }
}

// Inicializar la aplicación cuando el DOM esté listo
let app;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        app = new BibliaApp();
    });
} else {
    app = new BibliaApp();
}
