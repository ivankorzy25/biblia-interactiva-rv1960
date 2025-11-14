// ============================================
// TÍTULOS DE SECCIÓN PARA CAPÍTULOS BÍBLICOS
// ============================================
// Este archivo contiene los títulos de las secciones
// para facilitar la lectura y navegación
//
// Formato: 'libro_capitulo': [ { verse: numero, title: 'Título' }, ... ]
// ============================================

const SECTION_TITLES = {
    // GÉNESIS
    'genesis_1': [
        { verse: 1, title: 'La Creación' },
        { verse: 26, title: 'Creación del Hombre' }
    ],
    'genesis_2': [
        { verse: 1, title: 'El Día de Reposo' },
        { verse: 4, title: 'El Hombre en el Huerto del Edén' }
    ],
    'genesis_3': [
        { verse: 1, title: 'La Tentación y Caída del Hombre' },
        { verse: 14, title: 'Consecuencias del Pecado' }
    ],
    'genesis_6': [
        { verse: 1, title: 'La Maldad de los Hombres' },
        { verse: 8, title: 'Noé Halla Gracia' }
    ],
    'genesis_22': [
        { verse: 1, title: 'Dios Prueba a Abraham' }
    ],

    // ÉXODO
    'exodo_3': [
        { verse: 1, title: 'Moisés y la Zarza Ardiente' }
    ],
    'exodo_12': [
        { verse: 1, title: 'Institución de la Pascua' },
        { verse: 21, title: 'Celebración de la Pascua' },
        { verse: 29, title: 'Muerte de los Primogénitos' }
    ],
    'exodo_20': [
        { verse: 1, title: 'Los Diez Mandamientos' }
    ],

    // SALMOS
    'salmos_1': [
        { verse: 1, title: 'El Justo y el Impío' }
    ],
    'salmos_23': [
        { verse: 1, title: 'Jehová es mi Pastor' }
    ],
    'salmos_51': [
        { verse: 1, title: 'Arrepentimiento de David' }
    ],
    'salmos_91': [
        { verse: 1, title: 'Morando Bajo la Sombra del Omnipotente' }
    ],
    'salmos_100': [
        { verse: 1, title: 'Exhortación a la Gratitud' }
    ],
    'salmos_121': [
        { verse: 1, title: 'Jehová es Nuestro Guardador' }
    ],
    'salmos_139': [
        { verse: 1, title: 'Omnipresencia y Omnisciencia de Dios' }
    ],

    // PROVERBIOS
    'proverbios_1': [
        { verse: 1, title: 'Motivo de los Proverbios' },
        { verse: 7, title: 'El Temor de Jehová' }
    ],
    'proverbios_3': [
        { verse: 1, title: 'Exhortación a la Obediencia' },
        { verse: 5, title: 'Confianza en Jehová' }
    ],

    // ISAÍAS
    'isaias_53': [
        { verse: 1, title: 'El Siervo Sufriente' }
    ],

    // MATEO
    'mateo_1': [
        { verse: 1, title: 'Genealogía de Jesucristo' },
        { verse: 18, title: 'Nacimiento de Jesucristo' }
    ],
    'mateo_2': [
        { verse: 1, title: 'La Visita de los Magos' },
        { verse: 13, title: 'Huida a Egipto' },
        { verse: 19, title: 'Regreso de Egipto' }
    ],
    'mateo_3': [
        { verse: 1, title: 'Predicación de Juan el Bautista' },
        { verse: 13, title: 'Bautismo de Jesús' }
    ],
    'mateo_4': [
        { verse: 1, title: 'Tentación de Jesús' },
        { verse: 12, title: 'Jesús Principia su Ministerio' },
        { verse: 18, title: 'Llamamiento de los Primeros Discípulos' }
    ],
    'mateo_5': [
        { verse: 1, title: 'El Sermón del Monte: Las Bienaventuranzas' },
        { verse: 13, title: 'La Sal y la Luz' },
        { verse: 17, title: 'Jesús y la Ley' },
        { verse: 21, title: 'La Ira y el Homicidio' },
        { verse: 27, title: 'El Adulterio' },
        { verse: 31, title: 'El Divorcio' },
        { verse: 33, title: 'Los Juramentos' },
        { verse: 38, title: 'El Amor hacia los Enemigos' }
    ],
    'mateo_6': [
        { verse: 1, title: 'La Limosna en Secreto' },
        { verse: 5, title: 'La Oración en Secreto' },
        { verse: 9, title: 'El Padre Nuestro' },
        { verse: 16, title: 'El Ayuno en Secreto' },
        { verse: 19, title: 'Tesoros en el Cielo' },
        { verse: 25, title: 'El Afán y la Ansiedad' }
    ],
    'mateo_7': [
        { verse: 1, title: 'No Juzguéis' },
        { verse: 7, title: 'La Oración Contestada' },
        { verse: 13, title: 'La Puerta Estrecha' },
        { verse: 24, title: 'Los Dos Cimientos' }
    ],
    'mateo_13': [
        { verse: 1, title: 'Parábola del Sembrador' },
        { verse: 24, title: 'Parábola del Trigo y la Cizaña' },
        { verse: 31, title: 'Parábola de la Semilla de Mostaza' },
        { verse: 33, title: 'Parábola de la Levadura' },
        { verse: 44, title: 'Parábola del Tesoro Escondido' },
        { verse: 45, title: 'Parábola de la Perla de Gran Precio' },
        { verse: 47, title: 'Parábola de la Red' }
    ],
    'mateo_14': [
        { verse: 1, title: 'Muerte de Juan el Bautista' },
        { verse: 13, title: 'Alimentación de los Cinco Mil' },
        { verse: 22, title: 'Jesús Anda sobre el Mar' }
    ],
    'mateo_16': [
        { verse: 13, title: 'La Confesión de Pedro' },
        { verse: 21, title: 'Jesús Anuncia su Muerte' }
    ],
    'mateo_26': [
        { verse: 1, title: 'El Complot para Prender a Jesús' },
        { verse: 6, title: 'Jesús es Ungido en Betania' },
        { verse: 14, title: 'Judas Ofrece Entregar a Jesús' },
        { verse: 17, title: 'La Última Cena' },
        { verse: 36, title: 'Jesús en Getsemaní' },
        { verse: 47, title: 'Arresto de Jesús' },
        { verse: 57, title: 'Jesús ante el Concilio' },
        { verse: 69, title: 'Pedro Niega a Jesús' }
    ],
    'mateo_27': [
        { verse: 1, title: 'Jesús ante Pilato' },
        { verse: 11, title: 'Pilato Interroga a Jesús' },
        { verse: 27, title: 'Jesús es Escarnecido' },
        { verse: 32, title: 'Crucifixión de Jesús' },
        { verse: 45, title: 'Muerte de Jesús' },
        { verse: 57, title: 'Sepultura de Jesús' }
    ],
    'mateo_28': [
        { verse: 1, title: 'La Resurrección' },
        { verse: 16, title: 'La Gran Comisión' }
    ],

    // MARCOS
    'marcos_1': [
        { verse: 1, title: 'Predicación de Juan el Bautista' },
        { verse: 9, title: 'Bautismo de Jesús' },
        { verse: 12, title: 'Tentación de Jesús' },
        { verse: 14, title: 'Jesús Principia su Ministerio' },
        { verse: 16, title: 'Llamamiento de los Primeros Discípulos' }
    ],
    'marcos_16': [
        { verse: 1, title: 'La Resurrección' },
        { verse: 9, title: 'Jesús Aparece a María Magdalena' },
        { verse: 14, title: 'Jesús Aparece a los Apóstoles' },
        { verse: 19, title: 'La Ascensión' }
    ],

    // LUCAS
    'lucas_1': [
        { verse: 1, title: 'Dedicatoria a Teófilo' },
        { verse: 5, title: 'Anuncio del Nacimiento de Juan' },
        { verse: 26, title: 'Anuncio del Nacimiento de Jesús' },
        { verse: 39, title: 'María Visita a Elisabet' },
        { verse: 46, title: 'El Magnificat' }
    ],
    'lucas_2': [
        { verse: 1, title: 'Nacimiento de Jesús' },
        { verse: 8, title: 'Los Ángeles y los Pastores' },
        { verse: 21, title: 'Presentación de Jesús en el Templo' },
        { verse: 41, title: 'El Niño Jesús en el Templo' }
    ],
    'lucas_10': [
        { verse: 25, title: 'Parábola del Buen Samaritano' },
        { verse: 38, title: 'Jesús Visita a Marta y María' }
    ],
    'lucas_15': [
        { verse: 1, title: 'Parábola de la Oveja Perdida' },
        { verse: 8, title: 'Parábola de la Moneda Perdida' },
        { verse: 11, title: 'Parábola del Hijo Pródigo' }
    ],
    'lucas_24': [
        { verse: 1, title: 'La Resurrección' },
        { verse: 13, title: 'Camino a Emaús' },
        { verse: 36, title: 'Jesús Aparece a los Discípulos' },
        { verse: 50, title: 'La Ascensión' }
    ],

    // JUAN
    'juan_1': [
        { verse: 1, title: 'El Verbo Hecho Carne' },
        { verse: 19, title: 'Testimonio de Juan el Bautista' },
        { verse: 35, title: 'Primeros Discípulos de Jesús' }
    ],
    'juan_3': [
        { verse: 1, title: 'Jesús y Nicodemo' },
        { verse: 22, title: 'Nuevo Testimonio de Juan' }
    ],
    'juan_4': [
        { verse: 1, title: 'Jesús y la Samaritana' },
        { verse: 43, title: 'Jesús Sana al Hijo de un Noble' }
    ],
    'juan_6': [
        { verse: 1, title: 'Alimentación de los Cinco Mil' },
        { verse: 16, title: 'Jesús Anda sobre el Mar' },
        { verse: 22, title: 'Jesús, el Pan de Vida' }
    ],
    'juan_11': [
        { verse: 1, title: 'Muerte de Lázaro' },
        { verse: 17, title: 'Jesús, la Resurrección y la Vida' },
        { verse: 38, title: 'Resurrección de Lázaro' }
    ],
    'juan_13': [
        { verse: 1, title: 'Jesús Lava los Pies de los Discípulos' },
        { verse: 21, title: 'Jesús Anuncia la Traición de Judas' },
        { verse: 31, title: 'El Nuevo Mandamiento' }
    ],
    'juan_14': [
        { verse: 1, title: 'Jesús, el Camino al Padre' },
        { verse: 15, title: 'La Promesa del Espíritu Santo' }
    ],
    'juan_15': [
        { verse: 1, title: 'Jesús, la Vid Verdadera' },
        { verse: 12, title: 'El Amor de los Unos por los Otros' }
    ],
    'juan_17': [
        { verse: 1, title: 'Jesús Ora por sí Mismo' },
        { verse: 6, title: 'Jesús Ora por sus Discípulos' },
        { verse: 20, title: 'Jesús Ora por Todos los Creyentes' }
    ],
    'juan_20': [
        { verse: 1, title: 'La Resurrección' },
        { verse: 19, title: 'Jesús Aparece a los Discípulos' },
        { verse: 24, title: 'Incredulidad de Tomás' }
    ],

    // HECHOS
    'hechos_1': [
        { verse: 1, title: 'La Promesa del Espíritu Santo' },
        { verse: 9, title: 'La Ascensión' },
        { verse: 15, title: 'Elección del Sucesor de Judas' }
    ],
    'hechos_2': [
        { verse: 1, title: 'La Venida del Espíritu Santo' },
        { verse: 14, title: 'Primer Discurso de Pedro' },
        { verse: 37, title: 'Tres Mil Almas Añadidas' },
        { verse: 42, title: 'La Vida de los Primeros Cristianos' }
    ],
    'hechos_9': [
        { verse: 1, title: 'Conversión de Saulo' },
        { verse: 19, title: 'Saulo Predica en Damasco' }
    ],

    // ROMANOS
    'romanos_1': [
        { verse: 1, title: 'Salutación' },
        { verse: 16, title: 'El Poder del Evangelio' }
    ],
    'romanos_3': [
        { verse: 21, title: 'La Justicia por Medio de la Fe' }
    ],
    'romanos_5': [
        { verse: 1, title: 'Resultados de la Justificación' }
    ],
    'romanos_8': [
        { verse: 1, title: 'Viviendo en el Espíritu' },
        { verse: 28, title: 'Más que Vencedores' }
    ],
    'romanos_12': [
        { verse: 1, title: 'Sacrificios Vivos' },
        { verse: 9, title: 'El Amor Fraternal' }
    ],

    // 1 CORINTIOS
    '1corintios_13': [
        { verse: 1, title: 'El Amor, Don Supremo' }
    ],
    '1corintios_15': [
        { verse: 1, title: 'La Resurrección de Cristo' },
        { verse: 12, title: 'La Resurrección de los Muertos' },
        { verse: 35, title: 'El Cuerpo Resucitado' }
    ],

    // GÁLATAS
    'galatas_5': [
        { verse: 1, title: 'La Libertad Cristiana' },
        { verse: 16, title: 'Las Obras de la Carne y el Fruto del Espíritu' }
    ],

    // EFESIOS
    'efesios_1': [
        { verse: 1, title: 'Salutación' },
        { verse: 3, title: 'Bendiciones Espirituales en Cristo' }
    ],
    'efesios_2': [
        { verse: 1, title: 'Salvos por Gracia' }
    ],
    'efesios_6': [
        { verse: 10, title: 'La Armadura de Dios' }
    ],

    // FILIPENSES
    'filipenses_2': [
        { verse: 1, title: 'Humildad y Exaltación de Cristo' }
    ],
    'filipenses_4': [
        { verse: 4, title: 'Regocijaos en el Señor Siempre' }
    ],

    // HEBREOS
    'hebreos_11': [
        { verse: 1, title: 'La Fe: Ejemplos del Antiguo Testamento' }
    ],

    // SANTIAGO
    'santiago_1': [
        { verse: 1, title: 'Salutación' },
        { verse: 2, title: 'La Sabiduría que Viene de Dios' },
        { verse: 12, title: 'Soportando la Tentación' }
    ],

    // 1 PEDRO
    '1pedro_1': [
        { verse: 1, title: 'Salutación' },
        { verse: 3, title: 'Una Esperanza Viva' }
    ],

    // 1 JUAN
    '1juan_1': [
        { verse: 1, title: 'El Verbo de Vida' },
        { verse: 5, title: 'Dios es Luz' }
    ],
    '1juan_4': [
        { verse: 7, title: 'Dios es Amor' }
    ],

    // APOCALIPSIS
    'apocalipsis_1': [
        { verse: 1, title: 'La Revelación de Jesucristo' },
        { verse: 9, title: 'Visión del Hijo del Hombre' }
    ],
    'apocalipsis_21': [
        { verse: 1, title: 'El Cielo Nuevo y la Tierra Nueva' }
    ],
    'apocalipsis_22': [
        { verse: 1, title: 'El Río de la Vida' },
        { verse: 12, title: 'Yo Vengo Pronto' }
    ]
};

// Verificar que el objeto esté disponible globalmente
if (typeof window !== 'undefined') {
    window.SECTION_TITLES = SECTION_TITLES;
}
