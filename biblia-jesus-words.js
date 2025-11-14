// ============================================
// PALABRAS DE JESÚS - RED LETTER EDITION
// ============================================
// Este archivo contiene las referencias de los versículos
// donde Jesús habla directamente en la Biblia RV1960
//
// Para generar la lista completa de referencias:
// 1. Abre el archivo download-jesus-words.html en tu navegador
// 2. Haz clic en "Generar Código de Palabras de Jesús"
// 3. Copia el código generado
// 4. Reemplaza todo el contenido de este archivo con el código copiado
//
// Consulta INSTRUCCIONES-JESUS-WORDS.md para más detalles
// ============================================

const JESUS_WORDS = {
    // Formato: 'libro_capitulo': [versiculo1, versiculo2, ...]
    // Ejemplo: 'juan_3': [16, 17, 18]

    // Por defecto, incluimos algunos versículos conocidos como ejemplo
    'juan_3': [3, 5, 7, 10, 11, 12, 16, 17, 18, 19, 20, 21],
    'mateo_5': [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],
    'mateo_6': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
    'mateo_28': [18, 19, 20],
    'juan_14': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28,29,30,31],

    // IMPORTANTE: Para obtener la lista completa de ~3,000 versículos,
    // usa la herramienta download-jesus-words.html
};

// Verificar que el objeto esté disponible globalmente
if (typeof window !== 'undefined') {
    window.JESUS_WORDS = JESUS_WORDS;
}
