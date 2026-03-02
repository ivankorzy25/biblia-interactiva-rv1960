const SECTION_TITLES = {
    // ============================================================
    // GÉNESIS (50 capítulos)
    // ============================================================
    'genesis_1': [{ verse: 1, title: 'La Creación' }, { verse: 26, title: 'Creación del Hombre' }],
    'genesis_2': [
        { verse: 1, title: 'El Día de Reposo' },
        { verse: 4, title: 'El Hombre en el Huerto de Edén' },
        { verse: 18, title: 'Institución del Matrimonio' }
    ],
    'genesis_3': [
        { verse: 1, title: 'La Tentación y Caída' },
        { verse: 14, title: 'Consecuencias del Pecado' },
        { verse: 22, title: 'Expulsión del Huerto' }
    ],
    'genesis_4': [
        { verse: 1, title: 'Caín y Abel' },
        { verse: 17, title: 'Descendientes de Caín' },
        { verse: 25, title: 'Set y Enós' }
    ],
    'genesis_5': [{ verse: 1, title: 'Descendientes de Adán' }],
    'genesis_6': [
        { verse: 1, title: 'La Maldad de los Hombres' },
        { verse: 8, title: 'Noé Halla Gracia' },
        { verse: 14, title: 'Construcción del Arca' }
    ],
    'genesis_7': [{ verse: 1, title: 'El Diluvio' }],
    'genesis_8': [
        { verse: 1, title: 'Las Aguas se Retiran' },
        { verse: 15, title: 'Noé Sale del Arca' },
        { verse: 20, title: 'El Pacto de Dios con Noé' }
    ],
    'genesis_9': [{ verse: 1, title: 'Pacto de Dios con Noé' }, { verse: 18, title: 'Embriaguez de Noé' }],
    'genesis_10': [{ verse: 1, title: 'Los Descendientes de Noé' }],
    'genesis_11': [
        { verse: 1, title: 'La Torre de Babel' },
        { verse: 10, title: 'Descendientes de Sem' },
        { verse: 27, title: 'Descendientes de Taré' }
    ],
    'genesis_12': [{ verse: 1, title: 'Llamamiento de Abram' }, { verse: 10, title: 'Abram en Egipto' }],
    'genesis_13': [{ verse: 1, title: 'Abram y Lot se Separan' }],
    'genesis_14': [{ verse: 1, title: 'Abram Libra a Lot' }, { verse: 17, title: 'Melquisedec Bendice a Abram' }],
    'genesis_15': [
        { verse: 1, title: 'Dios Promete un Hijo a Abram' },
        { verse: 7, title: 'El Pacto de Dios con Abram' }
    ],
    'genesis_16': [{ verse: 1, title: 'Agar e Ismael' }],
    'genesis_17': [
        { verse: 1, title: 'El Pacto de la Circuncisión' },
        { verse: 15, title: 'Promesa del Nacimiento de Isaac' }
    ],
    'genesis_18': [
        { verse: 1, title: 'Promesa del Nacimiento de Isaac' },
        { verse: 16, title: 'Abraham Intercede por Sodoma' }
    ],
    'genesis_19': [{ verse: 1, title: 'Destrucción de Sodoma y Gomorra' }, { verse: 30, title: 'Las Hijas de Lot' }],
    'genesis_20': [{ verse: 1, title: 'Abraham y Abimelec' }],
    'genesis_21': [
        { verse: 1, title: 'Nacimiento de Isaac' },
        { verse: 8, title: 'Expulsión de Agar e Ismael' },
        { verse: 22, title: 'Pacto con Abimelec' }
    ],
    'genesis_22': [{ verse: 1, title: 'Dios Prueba a Abraham' }, { verse: 20, title: 'Descendientes de Nacor' }],
    'genesis_23': [{ verse: 1, title: 'Muerte y Sepultura de Sara' }],
    'genesis_24': [{ verse: 1, title: 'Abraham Busca Esposa para Isaac' }, { verse: 62, title: 'Isaac y Rebeca' }],
    'genesis_25': [
        { verse: 1, title: 'Muerte de Abraham' },
        { verse: 19, title: 'Nacimiento de Jacob y Esaú' },
        { verse: 29, title: 'Esaú Vende su Primogenitura' }
    ],
    'genesis_26': [{ verse: 1, title: 'Isaac en Gerar' }, { verse: 26, title: 'Pacto con Abimelec' }],
    'genesis_27': [
        { verse: 1, title: 'Jacob Obtiene la Bendición de Isaac' },
        { verse: 41, title: 'Jacob Huye de Esaú' }
    ],
    'genesis_28': [
        { verse: 1, title: 'Jacob es Enviado a Padan-aram' },
        { verse: 10, title: 'El Sueño de Jacob en Bet-el' }
    ],
    'genesis_29': [{ verse: 1, title: 'Jacob Sirve a Labán por Raquel y Lea' }],
    'genesis_30': [{ verse: 1, title: 'Los Hijos de Jacob' }, { verse: 25, title: 'Jacob Prospera' }],
    'genesis_31': [{ verse: 1, title: 'Jacob Huye de Labán' }, { verse: 22, title: 'Labán Persigue a Jacob' }],
    'genesis_32': [
        { verse: 1, title: 'Jacob se Prepara para Encontrar a Esaú' },
        { verse: 22, title: 'Jacob Lucha con el Ángel' }
    ],
    'genesis_33': [{ verse: 1, title: 'Reconciliación de Jacob y Esaú' }],
    'genesis_34': [{ verse: 1, title: 'La Deshonra de Dina' }],
    'genesis_35': [
        { verse: 1, title: 'Jacob Vuelve a Bet-el' },
        { verse: 16, title: 'Muerte de Raquel' },
        { verse: 27, title: 'Muerte de Isaac' }
    ],
    'genesis_36': [{ verse: 1, title: 'Descendientes de Esaú' }],
    'genesis_37': [{ verse: 1, title: 'José es Vendido por sus Hermanos' }],
    'genesis_38': [{ verse: 1, title: 'Judá y Tamar' }],
    'genesis_39': [
        { verse: 1, title: 'José en Casa de Potifar' },
        { verse: 7, title: 'José y la Mujer de Potifar' },
        { verse: 19, title: 'José en la Cárcel' }
    ],
    'genesis_40': [{ verse: 1, title: 'José Interpreta Sueños en la Cárcel' }],
    'genesis_41': [
        { verse: 1, title: 'El Sueño de Faraón' },
        { verse: 25, title: 'José Interpreta el Sueño' },
        { verse: 37, title: 'José Gobernador de Egipto' }
    ],
    'genesis_42': [{ verse: 1, title: 'Los Hermanos de José Van a Egipto' }],
    'genesis_43': [{ verse: 1, title: 'Los Hermanos Regresan con Benjamín' }],
    'genesis_44': [{ verse: 1, title: 'La Copa de José' }, { verse: 18, title: 'Judá Intercede por Benjamín' }],
    'genesis_45': [{ verse: 1, title: 'José se Da a Conocer' }],
    'genesis_46': [{ verse: 1, title: 'Jacob y su Familia en Egipto' }],
    'genesis_47': [{ verse: 1, title: 'Jacob ante Faraón' }, { verse: 27, title: 'Últimos Días de Jacob' }],
    'genesis_48': [{ verse: 1, title: 'Jacob Bendice a Efraín y Manasés' }],
    'genesis_49': [{ verse: 1, title: 'Profecía de Jacob sobre sus Hijos' }, { verse: 29, title: 'Muerte de Jacob' }],
    'genesis_50': [{ verse: 1, title: 'Sepultura de Jacob' }, { verse: 15, title: 'Muerte de José' }],
    // ============================================================
    // ÉXODO (40 capítulos)
    // ============================================================
    'exodo_1': [{ verse: 1, title: 'Aflicción de Israel en Egipto' }],
    'exodo_2': [{ verse: 1, title: 'Nacimiento de Moisés' }, { verse: 11, title: 'Moisés Huye a Madián' }],
    'exodo_3': [{ verse: 1, title: 'Moisés y la Zarza Ardiente' }, { verse: 13, title: 'El Nombre de Dios' }],
    'exodo_4': [{ verse: 1, title: 'Señales para Moisés' }, { verse: 18, title: 'Moisés Regresa a Egipto' }],
    'exodo_5': [{ verse: 1, title: 'Moisés y Aarón ante Faraón' }],
    'exodo_6': [{ verse: 1, title: 'Dios Renueva su Promesa' }, { verse: 14, title: 'Genealogía de Moisés y Aarón' }],
    'exodo_7': [{ verse: 1, title: 'La Vara de Aarón' }, { verse: 14, title: 'Primera Plaga: Agua en Sangre' }],
    'exodo_8': [
        { verse: 1, title: 'Segunda Plaga: Ranas' },
        { verse: 16, title: 'Tercera Plaga: Piojos' },
        { verse: 20, title: 'Cuarta Plaga: Moscas' }
    ],
    'exodo_9': [
        { verse: 1, title: 'Quinta Plaga: Peste del Ganado' },
        { verse: 8, title: 'Sexta Plaga: Úlceras' },
        { verse: 13, title: 'Séptima Plaga: Granizo' }
    ],
    'exodo_10': [{ verse: 1, title: 'Octava Plaga: Langostas' }, { verse: 21, title: 'Novena Plaga: Tinieblas' }],
    'exodo_11': [{ verse: 1, title: 'Anuncio de la Última Plaga' }],
    'exodo_12': [
        { verse: 1, title: 'Institución de la Pascua' },
        { verse: 29, title: 'Décima Plaga: Muerte de los Primogénitos' },
        { verse: 37, title: 'El Éxodo' }
    ],
    'exodo_13': [
        { verse: 1, title: 'Consagración de los Primogénitos' },
        { verse: 17, title: 'La Columna de Nube y de Fuego' }
    ],
    'exodo_14': [{ verse: 1, title: 'El Paso del Mar Rojo' }],
    'exodo_15': [{ verse: 1, title: 'Cántico de Moisés' }, { verse: 22, title: 'Las Aguas Amargas de Mara' }],
    'exodo_16': [{ verse: 1, title: 'Dios Envía el Maná' }],
    'exodo_17': [{ verse: 1, title: 'Agua de la Roca' }, { verse: 8, title: 'Guerra con Amalec' }],
    'exodo_18': [{ verse: 1, title: 'Jetro Visita a Moisés' }, { verse: 13, title: 'Nombramiento de Jueces' }],
    'exodo_19': [{ verse: 1, title: 'Israel en el Sinaí' }],
    'exodo_20': [{ verse: 1, title: 'Los Diez Mandamientos' }, { verse: 22, title: 'Leyes sobre el Altar' }],
    'exodo_21': [{ verse: 1, title: 'Leyes sobre los Esclavos' }, { verse: 12, title: 'Leyes sobre la Violencia' }],
    'exodo_22': [{ verse: 1, title: 'Leyes sobre la Propiedad' }, { verse: 16, title: 'Leyes Humanitarias' }],
    'exodo_23': [
        { verse: 1, title: 'Leyes de Justicia y Misericordia' },
        { verse: 14, title: 'Las Tres Fiestas Anuales' },
        { verse: 20, title: 'El Ángel de Jehová' }
    ],
    'exodo_24': [{ verse: 1, title: 'Ratificación del Pacto' }, { verse: 12, title: 'Moisés en el Monte Sinaí' }],
    'exodo_25': [
        { verse: 1, title: 'La Ofrenda para el Tabernáculo' },
        { verse: 10, title: 'El Arca del Testimonio' },
        { verse: 23, title: 'La Mesa de los Panes' },
        { verse: 31, title: 'El Candelero de Oro' }
    ],
    'exodo_26': [{ verse: 1, title: 'El Tabernáculo' }],
    'exodo_27': [
        { verse: 1, title: 'El Altar de Bronce' },
        { verse: 9, title: 'El Atrio del Tabernáculo' },
        { verse: 20, title: 'El Aceite para las Lámparas' }
    ],
    'exodo_28': [{ verse: 1, title: 'Las Vestiduras Sacerdotales' }],
    'exodo_29': [
        { verse: 1, title: 'Consagración de Aarón y sus Hijos' },
        { verse: 38, title: 'Las Ofrendas Diarias' }
    ],
    'exodo_30': [
        { verse: 1, title: 'El Altar del Incienso' },
        { verse: 11, title: 'El Dinero del Rescate' },
        { verse: 17, title: 'La Fuente de Bronce' },
        { verse: 22, title: 'El Aceite de la Unción' },
        { verse: 34, title: 'El Incienso' }
    ],
    'exodo_31': [
        { verse: 1, title: 'Llamamiento de Bezaleel y Aholiab' },
        { verse: 12, title: 'La Ley del Día de Reposo' }
    ],
    'exodo_32': [{ verse: 1, title: 'El Becerro de Oro' }, { verse: 30, title: 'Moisés Intercede por el Pueblo' }],
    'exodo_33': [
        { verse: 1, title: 'La Presencia de Dios Prometida' },
        { verse: 12, title: 'Moisés Ve la Gloria de Dios' }
    ],
    'exodo_34': [
        { verse: 1, title: 'Nuevas Tablas de la Ley' },
        { verse: 10, title: 'Advertencia contra la Idolatría' },
        { verse: 29, title: 'El Rostro Resplandeciente de Moisés' }
    ],
    'exodo_35': [
        { verse: 1, title: 'El Día de Reposo' },
        { verse: 4, title: 'La Ofrenda para el Tabernáculo' },
        { verse: 30, title: 'Llamamiento de Bezaleel' }
    ],
    'exodo_36': [{ verse: 1, title: 'Construcción del Tabernáculo' }],
    'exodo_37': [{ verse: 1, title: 'El Arca, la Mesa y el Candelero' }],
    'exodo_38': [
        { verse: 1, title: 'El Altar de Bronce y la Fuente' },
        { verse: 21, title: 'Metales Usados en el Tabernáculo' }
    ],
    'exodo_39': [{ verse: 1, title: 'Las Vestiduras Sacerdotales' }, { verse: 32, title: 'La Obra Terminada' }],
    'exodo_40': [
        { verse: 1, title: 'Erección del Tabernáculo' },
        { verse: 34, title: 'La Nube sobre el Tabernáculo' }
    ],
    // ============================================================
    // LEVÍTICO (27 capítulos)
    // ============================================================
    'levitico_1': [{ verse: 1, title: 'Los Holocaustos' }],
    'levitico_2': [{ verse: 1, title: 'Las Ofrendas de Cereal' }],
    'levitico_3': [{ verse: 1, title: 'Las Ofrendas de Paz' }],
    'levitico_4': [{ verse: 1, title: 'Las Ofrendas por el Pecado' }],
    'levitico_5': [
        { verse: 1, title: 'Casos Específicos de Pecado' },
        { verse: 14, title: 'Las Ofrendas por la Culpa' }
    ],
    'levitico_6': [
        { verse: 1, title: 'Ofrendas por el Pecado y la Culpa' },
        { verse: 8, title: 'Ley del Holocausto' },
        { verse: 14, title: 'Ley de la Ofrenda de Cereal' },
        { verse: 24, title: 'Ley de la Ofrenda por el Pecado' }
    ],
    'levitico_7': [
        { verse: 1, title: 'Ley de la Ofrenda por la Culpa' },
        { verse: 11, title: 'Ley del Sacrificio de Paz' },
        { verse: 22, title: 'Prohibición de Comer Grasa y Sangre' },
        { verse: 28, title: 'Porción de los Sacerdotes' }
    ],
    'levitico_8': [{ verse: 1, title: 'Consagración de Aarón y sus Hijos' }],
    'levitico_9': [{ verse: 1, title: 'Los Sacrificios de Aarón' }, { verse: 23, title: 'La Gloria de Jehová' }],
    'levitico_10': [
        { verse: 1, title: 'El Pecado de Nadab y Abiú' },
        { verse: 8, title: 'Instrucciones para los Sacerdotes' }
    ],
    'levitico_11': [{ verse: 1, title: 'Animales Limpios e Inmundos' }],
    'levitico_12': [{ verse: 1, title: 'Purificación de la Mujer después del Parto' }],
    'levitico_13': [{ verse: 1, title: 'Leyes sobre la Lepra' }],
    'levitico_14': [{ verse: 1, title: 'Purificación del Leproso' }, { verse: 33, title: 'Lepra en las Casas' }],
    'levitico_15': [{ verse: 1, title: 'Impurezas Corporales' }],
    'levitico_16': [{ verse: 1, title: 'El Día de la Expiación' }],
    'levitico_17': [{ verse: 1, title: 'Lugar de los Sacrificios' }, { verse: 10, title: 'Prohibición de Comer Sangre' }],
    'levitico_18': [{ verse: 1, title: 'Relaciones Ilícitas' }],
    'levitico_19': [{ verse: 1, title: 'Leyes de Santidad' }],
    'levitico_20': [{ verse: 1, title: 'Penas por Desobediencia' }],
    'levitico_21': [{ verse: 1, title: 'Santidad de los Sacerdotes' }],
    'levitico_22': [{ verse: 1, title: 'Uso de las Cosas Sagradas' }, { verse: 17, title: 'Ofrendas Aceptables' }],
    'levitico_23': [
        { verse: 1, title: 'Las Fiestas Solemnes' },
        { verse: 4, title: 'La Pascua' },
        { verse: 9, title: 'La Fiesta de las Primicias' },
        { verse: 15, title: 'La Fiesta de Pentecostés' },
        { verse: 23, title: 'La Fiesta de las Trompetas' },
        { verse: 26, title: 'El Día de Expiación' },
        { verse: 33, title: 'La Fiesta de los Tabernáculos' }
    ],
    'levitico_24': [
        { verse: 1, title: 'El Aceite y el Pan del Tabernáculo' },
        { verse: 10, title: 'Castigo del Blasfemo' },
        { verse: 17, title: 'Ley del Talión' }
    ],
    'levitico_25': [
        { verse: 1, title: 'El Año Sabático' },
        { verse: 8, title: 'El Año del Jubileo' },
        { verse: 25, title: 'Leyes sobre la Redención' }
    ],
    'levitico_26': [
        { verse: 1, title: 'Bendiciones de la Obediencia' },
        { verse: 14, title: 'Consecuencias de la Desobediencia' },
        { verse: 40, title: 'Promesa de Restauración' }
    ],
    'levitico_27': [{ verse: 1, title: 'Los Votos y las Ofrendas' }],
    // ============================================================
    // NÚMEROS (36 capítulos)
    // ============================================================
    'numeros_1': [{ verse: 1, title: 'Censo de Israel en Sinaí' }],
    'numeros_2': [{ verse: 1, title: 'Orden de las Tribus en el Campamento' }],
    'numeros_3': [
        { verse: 1, title: 'Los Levitas' },
        { verse: 14, title: 'Censo de los Levitas' },
        { verse: 40, title: 'Rescate de los Primogénitos' }
    ],
    'numeros_4': [
        { verse: 1, title: 'Deberes de los Coatitas' },
        { verse: 21, title: 'Deberes de los Gersonitas' },
        { verse: 29, title: 'Deberes de los Meraritas' }
    ],
    'numeros_5': [
        { verse: 1, title: 'Los Impuros Fuera del Campamento' },
        { verse: 5, title: 'Ley sobre la Restitución' },
        { verse: 11, title: 'Ley de los Celos' }
    ],
    'numeros_6': [{ verse: 1, title: 'El Voto de los Nazareos' }, { verse: 22, title: 'La Bendición Sacerdotal' }],
    'numeros_7': [{ verse: 1, title: 'Ofrendas para la Dedicación del Altar' }],
    'numeros_8': [
        { verse: 1, title: 'Las Lámparas del Candelero' },
        { verse: 5, title: 'Consagración de los Levitas' }
    ],
    'numeros_9': [
        { verse: 1, title: 'Celebración de la Pascua' },
        { verse: 15, title: 'La Nube sobre el Tabernáculo' }
    ],
    'numeros_10': [{ verse: 1, title: 'Las Trompetas de Plata' }, { verse: 11, title: 'Israel Sale del Sinaí' }],
    'numeros_11': [
        { verse: 1, title: 'Queja del Pueblo en Taberá' },
        { verse: 4, title: 'El Pueblo Pide Carne' },
        { verse: 16, title: 'Los Setenta Ancianos' },
        { verse: 31, title: 'Las Codornices' }
    ],
    'numeros_12': [{ verse: 1, title: 'María y Aarón Murmuran contra Moisés' }],
    'numeros_13': [{ verse: 1, title: 'Los Doce Espías' }, { verse: 25, title: 'El Informe de los Espías' }],
    'numeros_14': [
        { verse: 1, title: 'Rebelión del Pueblo' },
        { verse: 11, title: 'Moisés Intercede' },
        { verse: 26, title: 'Castigo de la Rebelión' }
    ],
    'numeros_15': [
        { verse: 1, title: 'Leyes sobre las Ofrendas' },
        { verse: 22, title: 'Ofrendas por Pecados de Ignorancia' },
        { verse: 32, title: 'Castigo por Violar el Día de Reposo' },
        { verse: 37, title: 'Flecos en los Vestidos' }
    ],
    'numeros_16': [{ verse: 1, title: 'La Rebelión de Coré' }],
    'numeros_17': [{ verse: 1, title: 'La Vara de Aarón Florece' }],
    'numeros_18': [
        { verse: 1, title: 'Deberes de Sacerdotes y Levitas' },
        { verse: 8, title: 'Porción de los Sacerdotes' },
        { verse: 21, title: 'Los Diezmos para los Levitas' }
    ],
    'numeros_19': [{ verse: 1, title: 'La Vaca Alazana' }, { verse: 11, title: 'Purificación de los Inmundos' }],
    'numeros_20': [
        { verse: 1, title: 'Muerte de María' },
        { verse: 2, title: 'Agua de la Roca' },
        { verse: 14, title: 'Edom no Deja Pasar a Israel' },
        { verse: 22, title: 'Muerte de Aarón' }
    ],
    'numeros_21': [
        { verse: 1, title: 'Victoria sobre el Rey de Arad' },
        { verse: 4, title: 'La Serpiente de Bronce' },
        { verse: 10, title: 'Jornadas de Israel' },
        { verse: 21, title: 'Victoria sobre Sehón y Og' }
    ],
    'numeros_22': [{ verse: 1, title: 'Balac Envía por Balaam' }, { verse: 21, title: 'La Burra de Balaam' }],
    'numeros_23': [{ verse: 1, title: 'Primer Oráculo de Balaam' }, { verse: 13, title: 'Segundo Oráculo de Balaam' }],
    'numeros_24': [{ verse: 1, title: 'Tercer Oráculo de Balaam' }, { verse: 15, title: 'Cuarto Oráculo de Balaam' }],
    'numeros_25': [{ verse: 1, title: 'Israel en Baal-peor' }, { verse: 6, title: 'El Celo de Finees' }],
    'numeros_26': [{ verse: 1, title: 'Segundo Censo de Israel' }],
    'numeros_27': [
        { verse: 1, title: 'Petición de las Hijas de Zelofehad' },
        { verse: 12, title: 'Josué es Elegido Sucesor de Moisés' }
    ],
    'numeros_28': [
        { verse: 1, title: 'Las Ofrendas Diarias' },
        { verse: 9, title: 'Ofrendas del Día de Reposo' },
        { verse: 11, title: 'Ofrendas Mensuales' },
        { verse: 16, title: 'Ofrendas de la Pascua' }
    ],
    'numeros_29': [
        { verse: 1, title: 'Ofrendas de la Fiesta de las Trompetas' },
        { verse: 7, title: 'Ofrendas del Día de Expiación' },
        { verse: 12, title: 'Ofrendas de la Fiesta de los Tabernáculos' }
    ],
    'numeros_30': [{ verse: 1, title: 'Leyes sobre los Votos' }],
    'numeros_31': [{ verse: 1, title: 'Guerra contra Madián' }, { verse: 25, title: 'Reparto del Botín' }],
    'numeros_32': [{ verse: 1, title: 'Rubén, Gad y la Media Tribu de Manasés' }],
    'numeros_33': [
        { verse: 1, title: 'Jornadas de Israel desde Egipto' },
        { verse: 50, title: 'Instrucciones para la Conquista' }
    ],
    'numeros_34': [
        { verse: 1, title: 'Límites de la Tierra Prometida' },
        { verse: 16, title: 'Los Repartidores de la Tierra' }
    ],
    'numeros_35': [{ verse: 1, title: 'Ciudades de los Levitas' }, { verse: 9, title: 'Ciudades de Refugio' }],
    'numeros_36': [{ verse: 1, title: 'Herencia de las Hijas de Zelofehad' }],
    // ============================================================
    // DEUTERONOMIO (34 capítulos)
    // ============================================================
    'deuteronomio_1': [
        { verse: 1, title: 'Moisés Recuerda la Historia de Israel' },
        { verse: 19, title: 'Misión de los Espías' }
    ],
    'deuteronomio_2': [{ verse: 1, title: 'Los Años en el Desierto' }, { verse: 24, title: 'Victoria sobre Sehón' }],
    'deuteronomio_3': [
        { verse: 1, title: 'Victoria sobre Og' },
        { verse: 12, title: 'Distribución de la Tierra al Este del Jordán' },
        { verse: 23, title: 'Moisés No Entrará en Canaán' }
    ],
    'deuteronomio_4': [
        { verse: 1, title: 'Moisés Exhorta a la Obediencia' },
        { verse: 15, title: 'Advertencia contra la Idolatría' },
        { verse: 41, title: 'Ciudades de Refugio al Este del Jordán' }
    ],
    'deuteronomio_5': [
        { verse: 1, title: 'Los Diez Mandamientos Repetidos' },
        { verse: 22, title: 'El Pueblo Pide un Mediador' }
    ],
    'deuteronomio_6': [{ verse: 1, title: 'El Gran Mandamiento' }, { verse: 10, title: 'Exhortación a No Olvidar a Dios' }],
    'deuteronomio_7': [{ verse: 1, title: 'Un Pueblo Santo para Jehová' }, { verse: 12, title: 'Promesas de Bendición' }],
    'deuteronomio_8': [
        { verse: 1, title: 'No Solo de Pan Vive el Hombre' },
        { verse: 10, title: 'Advertencia contra el Olvido de Dios' }
    ],
    'deuteronomio_9': [{ verse: 1, title: 'No por la Justicia de Israel' }, { verse: 7, title: 'Recuerdo de la Rebelión' }],
    'deuteronomio_10': [
        { verse: 1, title: 'Las Nuevas Tablas de la Ley' },
        { verse: 12, title: 'Lo que Dios Pide de Israel' }
    ],
    'deuteronomio_11': [
        { verse: 1, title: 'Exhortación a Amar a Dios' },
        { verse: 13, title: 'Bendición y Maldición' },
        { verse: 26, title: 'Bendiciones en Gerizim, Maldiciones en Ebal' }
    ],
    'deuteronomio_12': [
        { verse: 1, title: 'El Lugar que Jehová Eligiere' },
        { verse: 29, title: 'Advertencia contra la Idolatría' }
    ],
    'deuteronomio_13': [{ verse: 1, title: 'Castigo de la Apostasía' }],
    'deuteronomio_14': [{ verse: 1, title: 'Animales Limpios e Inmundos' }, { verse: 22, title: 'Los Diezmos' }],
    'deuteronomio_15': [
        { verse: 1, title: 'El Año de Remisión' },
        { verse: 7, title: 'Generosidad con los Pobres' },
        { verse: 12, title: 'Leyes sobre los Esclavos' },
        { verse: 19, title: 'Consagración de los Primogénitos' }
    ],
    'deuteronomio_16': [
        { verse: 1, title: 'La Fiesta de la Pascua' },
        { verse: 9, title: 'La Fiesta de las Semanas' },
        { verse: 13, title: 'La Fiesta de los Tabernáculos' },
        { verse: 18, title: 'Administración de Justicia' }
    ],
    'deuteronomio_17': [
        { verse: 1, title: 'Castigo de la Idolatría' },
        { verse: 8, title: 'El Tribunal Supremo' },
        { verse: 14, title: 'Ley sobre el Rey' }
    ],
    'deuteronomio_18': [
        { verse: 1, title: 'Porción de los Levitas' },
        { verse: 9, title: 'Prohibición de Prácticas Paganas' },
        { verse: 15, title: 'El Profeta como Moisés' }
    ],
    'deuteronomio_19': [
        { verse: 1, title: 'Las Ciudades de Refugio' },
        { verse: 14, title: 'Leyes sobre los Linderos' },
        { verse: 15, title: 'Leyes sobre los Testigos' }
    ],
    'deuteronomio_20': [
        { verse: 1, title: 'Leyes sobre la Guerra' },
        { verse: 10, title: 'Trato a las Ciudades Conquistadas' }
    ],
    'deuteronomio_21': [
        { verse: 1, title: 'Expiación de un Homicidio No Resuelto' },
        { verse: 10, title: 'La Cautiva Tomada como Esposa' },
        { verse: 15, title: 'Derecho del Primogénito' },
        { verse: 18, title: 'El Hijo Rebelde' },
        { verse: 22, title: 'El Cuerpo del Ahorcado' }
    ],
    'deuteronomio_22': [{ verse: 1, title: 'Leyes Diversas' }, { verse: 13, title: 'Leyes sobre la Castidad' }],
    'deuteronomio_23': [
        { verse: 1, title: 'Los Excluidos de la Congregación' },
        { verse: 9, title: 'Leyes de Santidad en el Campamento' },
        { verse: 15, title: 'Leyes Diversas' }
    ],
    'deuteronomio_24': [{ verse: 1, title: 'Leyes sobre el Divorcio' }, { verse: 5, title: 'Leyes Humanitarias' }],
    'deuteronomio_25': [
        { verse: 1, title: 'Límite de los Azotes' },
        { verse: 5, title: 'Ley del Levirato' },
        { verse: 17, title: 'Orden de Destruir a Amalec' }
    ],
    'deuteronomio_26': [
        { verse: 1, title: 'Primicias y Diezmos' },
        { verse: 16, title: 'Privilegios de Israel como Pueblo de Dios' }
    ],
    'deuteronomio_27': [
        { verse: 1, title: 'La Ley Escrita en Piedras' },
        { verse: 11, title: 'Las Maldiciones desde el Monte Ebal' }
    ],
    'deuteronomio_28': [
        { verse: 1, title: 'Bendiciones por la Obediencia' },
        { verse: 15, title: 'Maldiciones por la Desobediencia' }
    ],
    'deuteronomio_29': [{ verse: 1, title: 'Renovación del Pacto en Moab' }],
    'deuteronomio_30': [
        { verse: 1, title: 'Condiciones para la Restauración' },
        { verse: 11, title: 'La Elección entre la Vida y la Muerte' }
    ],
    'deuteronomio_31': [
        { verse: 1, title: 'Josué Sucesor de Moisés' },
        { verse: 9, title: 'Lectura de la Ley Cada Siete Años' },
        { verse: 14, title: 'Predicción de la Rebelión de Israel' }
    ],
    'deuteronomio_32': [
        { verse: 1, title: 'Cántico de Moisés' },
        { verse: 48, title: 'Moisés Contempla la Tierra Prometida' }
    ],
    'deuteronomio_33': [{ verse: 1, title: 'Moisés Bendice a las Tribus de Israel' }],
    'deuteronomio_34': [{ verse: 1, title: 'Muerte de Moisés' }],
    // ============================================================
    // JOSUÉ (24 capítulos)
    // ============================================================
    'josue_1': [{ verse: 1, title: 'Dios da Ánimo a Josué' }],
    'josue_2': [{ verse: 1, title: 'Rahab y los Espías' }],
    'josue_3': [{ verse: 1, title: 'El Cruce del Jordán' }],
    'josue_4': [{ verse: 1, title: 'Las Doce Piedras del Jordán' }],
    'josue_5': [
        { verse: 1, title: 'La Circuncisión en Gilgal' },
        { verse: 10, title: 'La Pascua en Gilgal' },
        { verse: 13, title: 'El Príncipe del Ejército de Jehová' }
    ],
    'josue_6': [{ verse: 1, title: 'La Toma de Jericó' }],
    'josue_7': [{ verse: 1, title: 'El Pecado de Acán' }],
    'josue_8': [{ verse: 1, title: 'La Toma de Hai' }, { verse: 30, title: 'El Altar en el Monte Ebal' }],
    'josue_9': [{ verse: 1, title: 'Astucia de los Gabaonitas' }],
    'josue_10': [
        { verse: 1, title: 'Derrota de los Amorreos' },
        { verse: 12, title: 'El Sol se Detiene' },
        { verse: 28, title: 'Conquista del Sur de Canaán' }
    ],
    'josue_11': [{ verse: 1, title: 'Conquista del Norte de Canaán' }],
    'josue_12': [{ verse: 1, title: 'Reyes Derrotados por Israel' }],
    'josue_13': [
        { verse: 1, title: 'Tierra Aún Sin Conquistar' },
        { verse: 8, title: 'Territorio al Este del Jordán' }
    ],
    'josue_14': [
        { verse: 1, title: 'Reparto de la Tierra al Oeste del Jordán' },
        { verse: 6, title: 'Caleb Recibe Hebrón' }
    ],
    'josue_15': [{ verse: 1, title: 'Territorio de Judá' }],
    'josue_16': [{ verse: 1, title: 'Territorio de Efraín' }],
    'josue_17': [{ verse: 1, title: 'Territorio de Manasés' }],
    'josue_18': [{ verse: 1, title: 'El Tabernáculo en Silo' }, { verse: 11, title: 'Territorio de Benjamín' }],
    'josue_19': [{ verse: 1, title: 'Territorios de las Tribus Restantes' }],
    'josue_20': [{ verse: 1, title: 'Ciudades de Refugio' }],
    'josue_21': [{ verse: 1, title: 'Ciudades de los Levitas' }, { verse: 43, title: 'Jehová Cumple sus Promesas' }],
    'josue_22': [
        { verse: 1, title: 'Las Tribus del Este Regresan' },
        { verse: 10, title: 'El Altar Junto al Jordán' }
    ],
    'josue_23': [{ verse: 1, title: 'Discurso de Despedida de Josué' }],
    'josue_24': [{ verse: 1, title: 'Josué Renueva el Pacto en Siquem' }, { verse: 29, title: 'Muerte de Josué' }],
    // ============================================================
    // JUECES (21 capítulos)
    // ============================================================
    'jueces_1': [
        { verse: 1, title: 'Judá y Simeón Conquistan Territorios' },
        { verse: 22, title: 'Territorios No Conquistados' }
    ],
    'jueces_2': [
        { verse: 1, title: 'El Ángel de Jehová en Boquim' },
        { verse: 6, title: 'Muerte de Josué' },
        { verse: 11, title: 'Apostasía de Israel' }
    ],
    'jueces_3': [
        { verse: 1, title: 'Naciones que Quedaron en Canaán' },
        { verse: 7, title: 'Otoniel, Primer Juez' },
        { verse: 12, title: 'Aod Libra a Israel' },
        { verse: 31, title: 'Samgar' }
    ],
    'jueces_4': [{ verse: 1, title: 'Débora y Barac' }],
    'jueces_5': [{ verse: 1, title: 'Cántico de Débora y Barac' }],
    'jueces_6': [
        { verse: 1, title: 'Opresión de Madián' },
        { verse: 11, title: 'Llamamiento de Gedeón' },
        { verse: 25, title: 'Gedeón Destruye el Altar de Baal' },
        { verse: 36, title: 'La Señal del Vellón de Lana' }
    ],
    'jueces_7': [{ verse: 1, title: 'Gedeón Derrota a los Madianitas' }],
    'jueces_8': [
        { verse: 1, title: 'Gedeón Captura a los Reyes de Madián' },
        { verse: 22, title: 'El Efod de Gedeón' },
        { verse: 28, title: 'Muerte de Gedeón' }
    ],
    'jueces_9': [
        { verse: 1, title: 'Abimelec, Rey en Siquem' },
        { verse: 7, title: 'Parábola de Jotam' },
        { verse: 22, title: 'Caída de Abimelec' }
    ],
    'jueces_10': [{ verse: 1, title: 'Tola y Jaír' }, { verse: 6, title: 'Opresión de los Filisteos y Amonitas' }],
    'jueces_11': [{ verse: 1, title: 'Jefté, Juez de Israel' }, { verse: 29, title: 'El Voto de Jefté' }],
    'jueces_12': [{ verse: 1, title: 'Conflicto con Efraín' }, { verse: 8, title: 'Ibzán, Elón y Abdón' }],
    'jueces_13': [{ verse: 1, title: 'Nacimiento de Sansón' }],
    'jueces_14': [{ verse: 1, title: 'Sansón y la Mujer de Timnat' }],
    'jueces_15': [{ verse: 1, title: 'Sansón Derrota a los Filisteos' }],
    'jueces_16': [
        { verse: 1, title: 'Sansón en Gaza' },
        { verse: 4, title: 'Sansón y Dalila' },
        { verse: 23, title: 'Muerte de Sansón' }
    ],
    'jueces_17': [{ verse: 1, title: 'Las Imágenes de Micaía' }],
    'jueces_18': [{ verse: 1, title: 'Dan Conquista Lais' }],
    'jueces_19': [{ verse: 1, title: 'El Levita y su Concubina' }],
    'jueces_20': [{ verse: 1, title: 'Guerra contra Benjamín' }],
    'jueces_21': [{ verse: 1, title: 'Esposas para los Benjaminitas' }],
    // ============================================================
    // RUT (4 capítulos)
    // ============================================================
    'rut_1': [{ verse: 1, title: 'Noemí y Rut' }, { verse: 19, title: 'Rut y Noemí en Belén' }],
    'rut_2': [{ verse: 1, title: 'Rut Recoge Espigas en el Campo de Booz' }],
    'rut_3': [{ verse: 1, title: 'Rut y Booz en la Era' }],
    'rut_4': [
        { verse: 1, title: 'Booz Redime a Rut' },
        { verse: 13, title: 'Matrimonio de Booz y Rut' },
        { verse: 18, title: 'Genealogía de David' }
    ],
    // ============================================================
    // 1 SAMUEL (31 capítulos)
    // ============================================================
    '1samuel_1': [{ verse: 1, title: 'Nacimiento de Samuel' }],
    '1samuel_2': [
        { verse: 1, title: 'Cántico de Ana' },
        { verse: 12, title: 'La Impiedad de los Hijos de Elí' },
        { verse: 27, title: 'Profecía contra la Casa de Elí' }
    ],
    '1samuel_3': [{ verse: 1, title: 'Jehová Llama a Samuel' }],
    '1samuel_4': [{ verse: 1, title: 'Los Filisteos Capturan el Arca' }, { verse: 12, title: 'Muerte de Elí' }],
    '1samuel_5': [{ verse: 1, title: 'El Arca en Tierra de los Filisteos' }],
    '1samuel_6': [{ verse: 1, title: 'Los Filisteos Devuelven el Arca' }],
    '1samuel_7': [
        { verse: 1, title: 'Samuel Juzga a Israel' },
        { verse: 7, title: 'Victoria sobre los Filisteos en Mizpa' }
    ],
    '1samuel_8': [{ verse: 1, title: 'Israel Pide un Rey' }],
    '1samuel_9': [{ verse: 1, title: 'Saúl se Encuentra con Samuel' }],
    '1samuel_10': [{ verse: 1, title: 'Samuel Unge a Saúl' }, { verse: 17, title: 'Saúl Elegido Rey' }],
    '1samuel_11': [{ verse: 1, title: 'Victoria de Saúl sobre los Amonitas' }],
    '1samuel_12': [{ verse: 1, title: 'Discurso de Despedida de Samuel' }],
    '1samuel_13': [
        { verse: 1, title: 'Guerra contra los Filisteos' },
        { verse: 8, title: 'Saúl Ofrece Sacrificio Indebido' }
    ],
    '1samuel_14': [{ verse: 1, title: 'Jonatán Ataca a los Filisteos' }, { verse: 24, title: 'El Juramento de Saúl' }],
    '1samuel_15': [{ verse: 1, title: 'Saúl es Rechazado como Rey' }],
    '1samuel_16': [{ verse: 1, title: 'Samuel Unge a David' }, { verse: 14, title: 'David al Servicio de Saúl' }],
    '1samuel_17': [{ verse: 1, title: 'David y Goliat' }],
    '1samuel_18': [
        { verse: 1, title: 'Pacto de Jonatán y David' },
        { verse: 6, title: 'Saúl Tiene Celos de David' },
        { verse: 17, title: 'David Se Casa con Mical' }
    ],
    '1samuel_19': [
        { verse: 1, title: 'Saúl Intenta Matar a David' },
        { verse: 11, title: 'Mical Ayuda a David a Escapar' },
        { verse: 18, title: 'David Huye a Samuel' }
    ],
    '1samuel_20': [{ verse: 1, title: 'Amistad de David y Jonatán' }],
    '1samuel_21': [{ verse: 1, title: 'David en Nob' }, { verse: 10, title: 'David Finge Locura ante Aquis' }],
    '1samuel_22': [
        { verse: 1, title: 'David en la Cueva de Adulam' },
        { verse: 6, title: 'Saúl Mata a los Sacerdotes de Nob' }
    ],
    '1samuel_23': [
        { verse: 1, title: 'David Libra a Keila' },
        { verse: 14, title: 'Saúl Persigue a David' },
        { verse: 19, title: 'David en el Desierto de Zif' }
    ],
    '1samuel_24': [{ verse: 1, title: 'David Perdona la Vida a Saúl en En-gadi' }],
    '1samuel_25': [{ verse: 1, title: 'Muerte de Samuel' }, { verse: 2, title: 'David, Nabal y Abigaíl' }],
    '1samuel_26': [{ verse: 1, title: 'David Perdona la Vida a Saúl en Zif' }],
    '1samuel_27': [{ verse: 1, title: 'David entre los Filisteos' }],
    '1samuel_28': [{ verse: 1, title: 'Saúl y la Adivina de Endor' }],
    '1samuel_29': [{ verse: 1, title: 'Los Filisteos Desconfían de David' }],
    '1samuel_30': [{ verse: 1, title: 'David Destruye a los Amalecitas' }],
    '1samuel_31': [{ verse: 1, title: 'Muerte de Saúl y sus Hijos' }],
    // ============================================================
    // 2 SAMUEL (24 capítulos)
    // ============================================================
    '2samuel_1': [
        { verse: 1, title: 'David Oye de la Muerte de Saúl' },
        { verse: 17, title: 'Lamento de David por Saúl y Jonatán' }
    ],
    '2samuel_2': [{ verse: 1, title: 'David, Rey de Judá' }, { verse: 8, title: 'Guerra entre David e Is-boset' }],
    '2samuel_3': [{ verse: 1, title: 'Abner se Une a David' }, { verse: 22, title: 'Joab Mata a Abner' }],
    '2samuel_4': [{ verse: 1, title: 'Asesinato de Is-boset' }],
    '2samuel_5': [
        { verse: 1, title: 'David, Rey de Todo Israel' },
        { verse: 6, title: 'David Conquista Jerusalén' },
        { verse: 17, title: 'David Derrota a los Filisteos' }
    ],
    '2samuel_6': [
        { verse: 1, title: 'David Lleva el Arca a Jerusalén' },
        { verse: 16, title: 'Mical Desprecia a David' }
    ],
    '2samuel_7': [{ verse: 1, title: 'Pacto de Dios con David' }, { verse: 18, title: 'Oración de David' }],
    '2samuel_8': [{ verse: 1, title: 'Las Victorias de David' }],
    '2samuel_9': [{ verse: 1, title: 'David y Mefi-boset' }],
    '2samuel_10': [{ verse: 1, title: 'Guerra contra Amón y Siria' }],
    '2samuel_11': [{ verse: 1, title: 'David y Betsabé' }, { verse: 14, title: 'Muerte de Urías' }],
    '2samuel_12': [
        { verse: 1, title: 'Natán Amonesta a David' },
        { verse: 15, title: 'Muerte del Hijo de David' },
        { verse: 24, title: 'Nacimiento de Salomón' },
        { verse: 26, title: 'Toma de Rabá' }
    ],
    '2samuel_13': [{ verse: 1, title: 'Amnón y Tamar' }, { verse: 23, title: 'Absalón Mata a Amnón' }],
    '2samuel_14': [{ verse: 1, title: 'La Mujer Sabia de Tecoa' }, { verse: 21, title: 'Regreso de Absalón' }],
    '2samuel_15': [{ verse: 1, title: 'La Conspiración de Absalón' }, { verse: 13, title: 'David Huye de Jerusalén' }],
    '2samuel_16': [
        { verse: 1, title: 'David y Siba' },
        { verse: 5, title: 'Simei Maldice a David' },
        { verse: 15, title: 'El Consejo de Ahitofel' }
    ],
    '2samuel_17': [
        { verse: 1, title: 'El Consejo de Ahitofel y Husai' },
        { verse: 23, title: 'Muerte de Ahitofel' },
        { verse: 24, title: 'David en Mahanaim' }
    ],
    '2samuel_18': [{ verse: 1, title: 'Derrota y Muerte de Absalón' }, { verse: 19, title: 'David Llora por Absalón' }],
    '2samuel_19': [{ verse: 1, title: 'David Regresa a Jerusalén' }],
    '2samuel_20': [{ verse: 1, title: 'La Rebelión de Seba' }],
    '2samuel_21': [{ verse: 1, title: 'Los Gabaonitas Vengados' }, { verse: 15, title: 'Guerras contra los Filisteos' }],
    '2samuel_22': [{ verse: 1, title: 'Cántico de David' }],
    '2samuel_23': [{ verse: 1, title: 'Últimas Palabras de David' }, { verse: 8, title: 'Los Valientes de David' }],
    '2samuel_24': [
        { verse: 1, title: 'David Censa al Pueblo' },
        { verse: 10, title: 'El Castigo' },
        { verse: 18, title: 'David Edifica un Altar' }
    ],
    // ============================================================
    // 1 REYES (22 capítulos)
    // ============================================================
    '1reyes_1': [{ verse: 1, title: 'Adonías Usurpa el Trono' }, { verse: 28, title: 'David Hace Rey a Salomón' }],
    '1reyes_2': [
        { verse: 1, title: 'Últimas Instrucciones de David' },
        { verse: 10, title: 'Muerte de David' },
        { verse: 12, title: 'Salomón Afirma su Reino' }
    ],
    '1reyes_3': [{ verse: 1, title: 'Salomón Pide Sabiduría' }, { verse: 16, title: 'El Juicio de Salomón' }],
    '1reyes_4': [
        { verse: 1, title: 'Los Oficiales de Salomón' },
        { verse: 20, title: 'La Sabiduría y Prosperidad de Salomón' }
    ],
    '1reyes_5': [
        { verse: 1, title: 'Pacto de Salomón con Hiram' },
        { verse: 13, title: 'Preparativos para el Templo' }
    ],
    '1reyes_6': [{ verse: 1, title: 'Construcción del Templo' }],
    '1reyes_7': [{ verse: 1, title: 'El Palacio de Salomón' }, { verse: 13, title: 'Las Obras de Bronce del Templo' }],
    '1reyes_8': [
        { verse: 1, title: 'El Arca es Llevada al Templo' },
        { verse: 22, title: 'Oración de Dedicación de Salomón' },
        { verse: 62, title: 'La Fiesta de la Dedicación' }
    ],
    '1reyes_9': [
        { verse: 1, title: 'Dios Se Aparece a Salomón' },
        { verse: 10, title: 'Otras Actividades de Salomón' }
    ],
    '1reyes_10': [
        { verse: 1, title: 'La Reina de Sabá Visita a Salomón' },
        { verse: 14, title: 'Las Riquezas de Salomón' }
    ],
    '1reyes_11': [
        { verse: 1, title: 'Las Mujeres de Salomón' },
        { verse: 14, title: 'Adversarios de Salomón' },
        { verse: 26, title: 'Jeroboam se Rebela' },
        { verse: 41, title: 'Muerte de Salomón' }
    ],
    '1reyes_12': [{ verse: 1, title: 'División del Reino' }, { verse: 25, title: 'Los Becerros de Oro de Jeroboam' }],
    '1reyes_13': [{ verse: 1, title: 'El Varón de Dios de Judá' }],
    '1reyes_14': [{ verse: 1, title: 'Profecía contra Jeroboam' }, { verse: 21, title: 'Reinado de Roboam' }],
    '1reyes_15': [
        { verse: 1, title: 'Reinado de Abiam' },
        { verse: 9, title: 'Reinado de Asa' },
        { verse: 25, title: 'Reinado de Nadab' },
        { verse: 33, title: 'Reinado de Baasa' }
    ],
    '1reyes_16': [
        { verse: 1, title: 'Profecía contra Baasa' },
        { verse: 8, title: 'Reinados de Ela, Zimri y Omri' },
        { verse: 29, title: 'Reinado de Acab' }
    ],
    '1reyes_17': [{ verse: 1, title: 'Elías Predice la Sequía' }, { verse: 7, title: 'Elías y la Viuda de Sarepta' }],
    '1reyes_18': [
        { verse: 1, title: 'Elías y Abdías' },
        { verse: 20, title: 'Elías en el Monte Carmelo' },
        { verse: 41, title: 'Elías Ora por Lluvia' }
    ],
    '1reyes_19': [
        { verse: 1, title: 'Elías Huye a Horeb' },
        { verse: 9, title: 'Dios Habla a Elías' },
        { verse: 19, title: 'Llamamiento de Eliseo' }
    ],
    '1reyes_20': [{ verse: 1, title: 'Acab Derrota a Ben-adad' }, { verse: 35, title: 'Profecía contra Acab' }],
    '1reyes_21': [{ verse: 1, title: 'La Viña de Nabot' }, { verse: 17, title: 'Elías Condena a Acab' }],
    '1reyes_22': [
        { verse: 1, title: 'Micaías Profetiza contra Acab' },
        { verse: 29, title: 'Muerte de Acab' },
        { verse: 41, title: 'Reinado de Josafat' },
        { verse: 51, title: 'Reinado de Ocozías' }
    ],
    // ============================================================
    // 2 REYES (25 capítulos)
    // ============================================================
    '2reyes_1': [{ verse: 1, title: 'Muerte de Ocozías' }],
    '2reyes_2': [{ verse: 1, title: 'Elías es Arrebatado al Cielo' }, { verse: 13, title: 'Eliseo Sucede a Elías' }],
    '2reyes_3': [{ verse: 1, title: 'Reinado de Joram de Israel' }, { verse: 4, title: 'Guerra contra Moab' }],
    '2reyes_4': [
        { verse: 1, title: 'El Aceite de la Viuda' },
        { verse: 8, title: 'Eliseo y la Sunamita' },
        { verse: 38, title: 'Milagros de Eliseo' }
    ],
    '2reyes_5': [{ verse: 1, title: 'Naamán es Sanado de Lepra' }, { verse: 20, title: 'La Avaricia de Giezi' }],
    '2reyes_6': [
        { verse: 1, title: 'El Hacha que Flotó' },
        { verse: 8, title: 'Eliseo y los Sirios' },
        { verse: 24, title: 'El Sitio de Samaria' }
    ],
    '2reyes_7': [
        { verse: 1, title: 'Eliseo Profetiza el Fin del Sitio' },
        { verse: 3, title: 'Los Leprosos y el Campamento Sirio' }
    ],
    '2reyes_8': [
        { verse: 1, title: 'La Sunamita Recupera sus Bienes' },
        { verse: 7, title: 'Eliseo y Hazael' },
        { verse: 16, title: 'Reinado de Joram de Judá' },
        { verse: 25, title: 'Reinado de Ocozías de Judá' }
    ],
    '2reyes_9': [
        { verse: 1, title: 'Jehú es Ungido Rey' },
        { verse: 14, title: 'Jehú Mata a Joram y Ocozías' },
        { verse: 30, title: 'Muerte de Jezabel' }
    ],
    '2reyes_10': [
        { verse: 1, title: 'Jehú Extermina la Casa de Acab' },
        { verse: 18, title: 'Jehú Destruye el Culto a Baal' }
    ],
    '2reyes_11': [
        { verse: 1, title: 'Atalía Usurpa el Trono' },
        { verse: 4, title: 'Joás es Coronado Rey' },
        { verse: 17, title: 'Renovación del Pacto' }
    ],
    '2reyes_12': [{ verse: 1, title: 'Reinado de Joás' }, { verse: 4, title: 'Reparación del Templo' }],
    '2reyes_13': [
        { verse: 1, title: 'Reinado de Joacaz' },
        { verse: 10, title: 'Reinado de Joás de Israel' },
        { verse: 14, title: 'Muerte de Eliseo' }
    ],
    '2reyes_14': [{ verse: 1, title: 'Reinado de Amasías' }, { verse: 23, title: 'Reinado de Jeroboam II' }],
    '2reyes_15': [
        { verse: 1, title: 'Reinado de Azarías (Uzías)' },
        { verse: 8, title: 'Últimos Reyes de Israel' },
        { verse: 32, title: 'Reinado de Jotam' }
    ],
    '2reyes_16': [{ verse: 1, title: 'Reinado de Acaz' }, { verse: 10, title: 'El Altar Pagano de Acaz' }],
    '2reyes_17': [
        { verse: 1, title: 'Caída de Samaria' },
        { verse: 7, title: 'Causas de la Caída de Israel' },
        { verse: 24, title: 'Pueblos Extranjeros en Samaria' }
    ],
    '2reyes_18': [
        { verse: 1, title: 'Reinado de Ezequías' },
        { verse: 13, title: 'Senaquerib Invade Judá' },
        { verse: 17, title: 'El Rabsaces Amenaza a Jerusalén' }
    ],
    '2reyes_19': [
        { verse: 1, title: 'Ezequías Consulta a Isaías' },
        { verse: 14, title: 'Oración de Ezequías' },
        { verse: 20, title: 'Profecía de Isaías contra Senaquerib' },
        { verse: 35, title: 'Derrota de Senaquerib' }
    ],
    '2reyes_20': [{ verse: 1, title: 'Enfermedad de Ezequías' }, { verse: 12, title: 'Los Enviados de Babilonia' }],
    '2reyes_21': [{ verse: 1, title: 'Reinado de Manasés' }, { verse: 19, title: 'Reinado de Amón' }],
    '2reyes_22': [
        { verse: 1, title: 'Reinado de Josías' },
        { verse: 3, title: 'Hallazgo del Libro de la Ley' },
        { verse: 14, title: 'Profecía de Hulda' }
    ],
    '2reyes_23': [
        { verse: 1, title: 'Reformas de Josías' },
        { verse: 21, title: 'La Pascua de Josías' },
        { verse: 29, title: 'Muerte de Josías' },
        { verse: 31, title: 'Reinados de Joacaz y Joacim' }
    ],
    '2reyes_24': [
        { verse: 1, title: 'Reinado de Joacim' },
        { verse: 8, title: 'Reinado de Joaquín' },
        { verse: 10, title: 'Primera Deportación a Babilonia' },
        { verse: 18, title: 'Reinado de Sedequías' }
    ],
    '2reyes_25': [
        { verse: 1, title: 'Caída de Jerusalén' },
        { verse: 8, title: 'Destrucción del Templo' },
        { verse: 22, title: 'Gedalías, Gobernador de Judá' },
        { verse: 27, title: 'Joaquín es Liberado en Babilonia' }
    ],
    // ============================================================
    // 1 CRÓNICAS (29 capítulos)
    // ============================================================
    '1cronicas_1': [
        { verse: 1, title: 'Genealogía desde Adán hasta Abraham' },
        { verse: 28, title: 'Descendientes de Abraham' },
        { verse: 34, title: 'Descendientes de Esaú' }
    ],
    '1cronicas_2': [{ verse: 1, title: 'Descendientes de Israel' }, { verse: 3, title: 'Descendientes de Judá' }],
    '1cronicas_3': [{ verse: 1, title: 'Hijos de David' }, { verse: 10, title: 'Descendientes de Salomón' }],
    '1cronicas_4': [
        { verse: 1, title: 'Descendientes de Judá' },
        { verse: 9, title: 'La Oración de Jabes' },
        { verse: 24, title: 'Descendientes de Simeón' }
    ],
    '1cronicas_5': [
        { verse: 1, title: 'Descendientes de Rubén' },
        { verse: 11, title: 'Descendientes de Gad' },
        { verse: 23, title: 'La Media Tribu de Manasés' }
    ],
    '1cronicas_6': [
        { verse: 1, title: 'Descendientes de Leví' },
        { verse: 31, title: 'Los Cantores del Templo' },
        { verse: 54, title: 'Ciudades de los Levitas' }
    ],
    '1cronicas_7': [
        { verse: 1, title: 'Descendientes de Isacar' },
        { verse: 6, title: 'Descendientes de Benjamín' },
        { verse: 13, title: 'Descendientes de Neftalí' },
        { verse: 14, title: 'Descendientes de Manasés' },
        { verse: 20, title: 'Descendientes de Efraín' },
        { verse: 30, title: 'Descendientes de Aser' }
    ],
    '1cronicas_8': [{ verse: 1, title: 'Descendientes de Benjamín' }, { verse: 33, title: 'Genealogía de Saúl' }],
    '1cronicas_9': [
        { verse: 1, title: 'Habitantes de Jerusalén después del Exilio' },
        { verse: 17, title: 'Los Porteros del Templo' },
        { verse: 35, title: 'Genealogía de Saúl' }
    ],
    '1cronicas_10': [{ verse: 1, title: 'Muerte de Saúl' }],
    '1cronicas_11': [
        { verse: 1, title: 'David, Rey de Todo Israel' },
        { verse: 4, title: 'David Conquista Jerusalén' },
        { verse: 10, title: 'Los Valientes de David' }
    ],
    '1cronicas_12': [
        { verse: 1, title: 'Los Guerreros de David' },
        { verse: 23, title: 'Los Ejércitos que Ungieron a David' }
    ],
    '1cronicas_13': [{ verse: 1, title: 'David Intenta Llevar el Arca a Jerusalén' }],
    '1cronicas_14': [{ verse: 1, title: 'David en Jerusalén' }, { verse: 8, title: 'Victoria sobre los Filisteos' }],
    '1cronicas_15': [{ verse: 1, title: 'El Arca es Llevada a Jerusalén' }],
    '1cronicas_16': [
        { verse: 1, title: 'El Arca en la Tienda de David' },
        { verse: 7, title: 'Cántico de Acción de Gracias' }
    ],
    '1cronicas_17': [{ verse: 1, title: 'Pacto de Dios con David' }, { verse: 16, title: 'Oración de David' }],
    '1cronicas_18': [{ verse: 1, title: 'Las Victorias de David' }],
    '1cronicas_19': [{ verse: 1, title: 'Guerra contra Amón y Siria' }],
    '1cronicas_20': [{ verse: 1, title: 'Toma de Rabá' }, { verse: 4, title: 'Guerras contra los Filisteos' }],
    '1cronicas_21': [{ verse: 1, title: 'David Censa al Pueblo' }, { verse: 14, title: 'El Ángel y la Era de Ornán' }],
    '1cronicas_22': [{ verse: 1, title: 'Preparativos para el Templo' }],
    '1cronicas_23': [{ verse: 1, title: 'Los Levitas y sus Oficios' }],
    '1cronicas_24': [{ verse: 1, title: 'Distribución de los Sacerdotes' }],
    '1cronicas_25': [{ verse: 1, title: 'Los Cantores del Templo' }],
    '1cronicas_26': [{ verse: 1, title: 'Los Porteros y Tesoreros del Templo' }],
    '1cronicas_27': [{ verse: 1, title: 'Los Jefes Militares y Administradores' }],
    '1cronicas_28': [{ verse: 1, title: 'Instrucciones de David para el Templo' }],
    '1cronicas_29': [
        { verse: 1, title: 'Ofrendas para el Templo' },
        { verse: 10, title: 'Oración de David' },
        { verse: 21, title: 'Salomón es Coronado Rey' },
        { verse: 26, title: 'Muerte de David' }
    ],
    // ============================================================
    // 2 CRÓNICAS (36 capítulos)
    // ============================================================
    '2cronicas_1': [{ verse: 1, title: 'Salomón Pide Sabiduría' }],
    '2cronicas_2': [{ verse: 1, title: 'Preparativos para la Construcción del Templo' }],
    '2cronicas_3': [{ verse: 1, title: 'Construcción del Templo' }],
    '2cronicas_4': [{ verse: 1, title: 'El Mobiliario del Templo' }],
    '2cronicas_5': [{ verse: 1, title: 'El Arca es Llevada al Templo' }],
    '2cronicas_6': [{ verse: 1, title: 'Oración de Dedicación de Salomón' }],
    '2cronicas_7': [{ verse: 1, title: 'Dios Acepta el Templo' }, { verse: 11, title: 'Dios Se Aparece a Salomón' }],
    '2cronicas_8': [{ verse: 1, title: 'Otras Actividades de Salomón' }],
    '2cronicas_9': [
        { verse: 1, title: 'La Reina de Sabá Visita a Salomón' },
        { verse: 13, title: 'Riquezas de Salomón' },
        { verse: 29, title: 'Muerte de Salomón' }
    ],
    '2cronicas_10': [{ verse: 1, title: 'División del Reino' }],
    '2cronicas_11': [{ verse: 1, title: 'Reinado de Roboam' }],
    '2cronicas_12': [{ verse: 1, title: 'Sisac Invade Judá' }],
    '2cronicas_13': [{ verse: 1, title: 'Reinado de Abías' }, { verse: 3, title: 'Guerra entre Abías y Jeroboam' }],
    '2cronicas_14': [{ verse: 1, title: 'Reinado de Asa' }, { verse: 9, title: 'Victoria sobre los Etíopes' }],
    '2cronicas_15': [{ verse: 1, title: 'Reformas de Asa' }],
    '2cronicas_16': [{ verse: 1, title: 'Asa se Alía con Siria' }, { verse: 11, title: 'Muerte de Asa' }],
    '2cronicas_17': [{ verse: 1, title: 'Reinado de Josafat' }],
    '2cronicas_18': [{ verse: 1, title: 'Micaías Profetiza contra Acab' }],
    '2cronicas_19': [{ verse: 1, title: 'Josafat Nombra Jueces' }],
    '2cronicas_20': [
        { verse: 1, title: 'Victoria sobre Moab y Amón' },
        { verse: 31, title: 'Resumen del Reinado de Josafat' }
    ],
    '2cronicas_21': [{ verse: 1, title: 'Reinado de Joram' }],
    '2cronicas_22': [{ verse: 1, title: 'Reinado de Ocozías' }, { verse: 10, title: 'Atalía Usurpa el Trono' }],
    '2cronicas_23': [{ verse: 1, title: 'Joás es Coronado Rey' }],
    '2cronicas_24': [
        { verse: 1, title: 'Reinado de Joás' },
        { verse: 4, title: 'Reparación del Templo' },
        { verse: 17, title: 'Apostasía de Joás' }
    ],
    '2cronicas_25': [{ verse: 1, title: 'Reinado de Amasías' }],
    '2cronicas_26': [{ verse: 1, title: 'Reinado de Uzías' }, { verse: 16, title: 'La Lepra de Uzías' }],
    '2cronicas_27': [{ verse: 1, title: 'Reinado de Jotam' }],
    '2cronicas_28': [{ verse: 1, title: 'Reinado de Acaz' }],
    '2cronicas_29': [{ verse: 1, title: 'Reinado de Ezequías' }, { verse: 3, title: 'Purificación del Templo' }],
    '2cronicas_30': [{ verse: 1, title: 'Ezequías Celebra la Pascua' }],
    '2cronicas_31': [{ verse: 1, title: 'Reformas de Ezequías' }],
    '2cronicas_32': [
        { verse: 1, title: 'Senaquerib Invade Judá' },
        { verse: 20, title: 'Dios Libra a Jerusalén' },
        { verse: 24, title: 'Enfermedad de Ezequías' }
    ],
    '2cronicas_33': [
        { verse: 1, title: 'Reinado de Manasés' },
        { verse: 10, title: 'Arrepentimiento de Manasés' },
        { verse: 21, title: 'Reinado de Amón' }
    ],
    '2cronicas_34': [
        { verse: 1, title: 'Reinado de Josías' },
        { verse: 3, title: 'Reformas de Josías' },
        { verse: 14, title: 'Hallazgo del Libro de la Ley' }
    ],
    '2cronicas_35': [{ verse: 1, title: 'La Pascua de Josías' }, { verse: 20, title: 'Muerte de Josías' }],
    '2cronicas_36': [
        { verse: 1, title: 'Los Últimos Reyes de Judá' },
        { verse: 11, title: 'Caída de Jerusalén' },
        { verse: 22, title: 'El Decreto de Ciro' }
    ],
    // ============================================================
    // ESDRAS (10 capítulos)
    // ============================================================
    'esdras_1': [{ verse: 1, title: 'El Decreto de Ciro' }],
    'esdras_2': [{ verse: 1, title: 'Los que Regresaron con Zorobabel' }],
    'esdras_3': [{ verse: 1, title: 'Restauración del Altar' }, { verse: 7, title: 'Comienzan las Obras del Templo' }],
    'esdras_4': [{ verse: 1, title: 'Oposición a la Reconstrucción' }],
    'esdras_5': [{ verse: 1, title: 'Se Reanuda la Obra del Templo' }],
    'esdras_6': [
        { verse: 1, title: 'El Decreto de Darío' },
        { verse: 13, title: 'Terminación y Dedicación del Templo' },
        { verse: 19, title: 'Celebración de la Pascua' }
    ],
    'esdras_7': [{ verse: 1, title: 'Esdras Viaja a Jerusalén' }, { verse: 11, title: 'La Carta de Artajerjes' }],
    'esdras_8': [{ verse: 1, title: 'Los que Regresaron con Esdras' }, { verse: 15, title: 'El Viaje a Jerusalén' }],
    'esdras_9': [{ verse: 1, title: 'Oración de Esdras por el Pueblo' }],
    'esdras_10': [{ verse: 1, title: 'Reforma contra los Matrimonios Mixtos' }],
    // ============================================================
    // NEHEMÍAS (13 capítulos)
    // ============================================================
    'nehemias_1': [{ verse: 1, title: 'Oración de Nehemías por Jerusalén' }],
    'nehemias_2': [
        { verse: 1, title: 'Nehemías es Enviado a Jerusalén' },
        { verse: 11, title: 'Nehemías Inspecciona los Muros' }
    ],
    'nehemias_3': [{ verse: 1, title: 'Reparación de los Muros' }],
    'nehemias_4': [{ verse: 1, title: 'Oposición a la Reconstrucción' }],
    'nehemias_5': [{ verse: 1, title: 'Nehemías Defiende a los Pobres' }],
    'nehemias_6': [{ verse: 1, title: 'Conspiraciones contra Nehemías' }, { verse: 15, title: 'Terminación del Muro' }],
    'nehemias_7': [{ verse: 1, title: 'Lista de los que Regresaron' }],
    'nehemias_8': [{ verse: 1, title: 'Esdras Lee la Ley' }, { verse: 13, title: 'La Fiesta de los Tabernáculos' }],
    'nehemias_9': [{ verse: 1, title: 'Confesión del Pueblo' }],
    'nehemias_10': [{ verse: 1, title: 'Los que Sellaron el Pacto' }, { verse: 28, title: 'Compromisos del Pueblo' }],
    'nehemias_11': [{ verse: 1, title: 'Nuevos Habitantes de Jerusalén' }],
    'nehemias_12': [{ verse: 1, title: 'Sacerdotes y Levitas' }, { verse: 27, title: 'Dedicación del Muro' }],
    'nehemias_13': [{ verse: 1, title: 'Reformas de Nehemías' }],
    // ============================================================
    // ESTER (10 capítulos)
    // ============================================================
    'ester_1': [
        { verse: 1, title: 'El Banquete del Rey Asuero' },
        { verse: 10, title: 'La Reina Vasti es Destituida' }
    ],
    'ester_2': [
        { verse: 1, title: 'Ester es Elegida Reina' },
        { verse: 19, title: 'Mardoqueo Descubre una Conspiración' }
    ],
    'ester_3': [{ verse: 1, title: 'Amán Trama la Destrucción de los Judíos' }],
    'ester_4': [{ verse: 1, title: 'Mardoqueo Pide Ayuda a Ester' }],
    'ester_5': [
        { verse: 1, title: 'Ester Invita al Rey y a Amán' },
        { verse: 9, title: 'Amán Prepara la Horca para Mardoqueo' }
    ],
    'ester_6': [{ verse: 1, title: 'Amán Honra a Mardoqueo' }],
    'ester_7': [{ verse: 1, title: 'Caída de Amán' }],
    'ester_8': [{ verse: 1, title: 'El Decreto a Favor de los Judíos' }],
    'ester_9': [
        { verse: 1, title: 'Los Judíos Destruyen a sus Enemigos' },
        { verse: 20, title: 'La Fiesta de Purim' }
    ],
    'ester_10': [{ verse: 1, title: 'La Grandeza de Mardoqueo' }],
    // ============================================================
    // JOB (42 capítulos)
    // ============================================================
    'job_1': [
        { verse: 1, title: 'La Prosperidad de Job' },
        { verse: 6, title: 'Satanás Prueba a Job' },
        { verse: 13, title: 'Las Calamidades de Job' }
    ],
    'job_2': [{ verse: 1, title: 'Segunda Prueba de Job' }, { verse: 11, title: 'Los Tres Amigos de Job' }],
    'job_3': [{ verse: 1, title: 'Job Maldice el Día en que Nació' }],
    'job_4': [{ verse: 1, title: 'Primer Discurso de Elifaz' }],
    'job_5': [{ verse: 1, title: 'Elifaz Exhorta a Job' }],
    'job_6': [{ verse: 1, title: 'Job Responde a Elifaz' }],
    'job_7': [{ verse: 1, title: 'Job Lamenta su Condición' }],
    'job_8': [{ verse: 1, title: 'Primer Discurso de Bildad' }],
    'job_9': [{ verse: 1, title: 'Job Responde a Bildad' }],
    'job_10': [{ verse: 1, title: 'Job Clama a Dios' }],
    'job_11': [{ verse: 1, title: 'Primer Discurso de Zofar' }],
    'job_12': [{ verse: 1, title: 'Job Responde a Zofar' }],
    'job_13': [{ verse: 1, title: 'Job Defiende su Integridad' }],
    'job_14': [{ verse: 1, title: 'La Brevedad de la Vida' }],
    'job_15': [{ verse: 1, title: 'Segundo Discurso de Elifaz' }],
    'job_16': [{ verse: 1, title: 'Job Responde a Elifaz' }],
    'job_17': [{ verse: 1, title: 'Job Apela a Dios' }],
    'job_18': [{ verse: 1, title: 'Segundo Discurso de Bildad' }],
    'job_19': [{ verse: 1, title: 'Job Responde a Bildad' }, { verse: 25, title: 'Yo Sé que mi Redentor Vive' }],
    'job_20': [{ verse: 1, title: 'Segundo Discurso de Zofar' }],
    'job_21': [{ verse: 1, title: 'Job Responde a Zofar' }],
    'job_22': [{ verse: 1, title: 'Tercer Discurso de Elifaz' }],
    'job_23': [{ verse: 1, title: 'Job Desea Presentarse ante Dios' }],
    'job_24': [{ verse: 1, title: 'Job Habla de la Injusticia' }],
    'job_25': [{ verse: 1, title: 'Tercer Discurso de Bildad' }],
    'job_26': [{ verse: 1, title: 'Job Proclama el Poder de Dios' }],
    'job_27': [{ verse: 1, title: 'Job Afirma su Integridad' }],
    'job_28': [{ verse: 1, title: 'La Sabiduría No Tiene Precio' }],
    'job_29': [{ verse: 1, title: 'Job Recuerda su Pasada Prosperidad' }],
    'job_30': [{ verse: 1, title: 'Job Lamenta su Condición Presente' }],
    'job_31': [{ verse: 1, title: 'Job Afirma su Inocencia' }],
    'job_32': [{ verse: 1, title: 'Eliú Interviene' }],
    'job_33': [{ verse: 1, title: 'Primer Discurso de Eliú' }],
    'job_34': [{ verse: 1, title: 'Eliú Defiende la Justicia de Dios' }],
    'job_35': [{ verse: 1, title: 'Eliú Reprende a Job' }],
    'job_36': [{ verse: 1, title: 'Eliú Exalta la Grandeza de Dios' }],
    'job_37': [{ verse: 1, title: 'Eliú Habla del Poder de Dios en la Naturaleza' }],
    'job_38': [{ verse: 1, title: 'Dios Habla a Job desde un Torbellino' }],
    'job_39': [{ verse: 1, title: 'Dios Habla de las Maravillas de la Creación' }],
    'job_40': [{ verse: 1, title: 'Job Reconoce su Pequeñez' }, { verse: 6, title: 'Dios Habla de Behemot' }],
    'job_41': [{ verse: 1, title: 'Dios Habla de Leviatán' }],
    'job_42': [
        { verse: 1, title: 'Job se Arrepiente' },
        { verse: 7, title: 'Dios Reprende a los Amigos de Job' },
        { verse: 10, title: 'Restauración de Job' }
    ],
    // ============================================================
    // SALMOS (150 capítulos)
    // ============================================================
    'salmos_1': [{ verse: 1, title: 'El Justo y los Pecadores' }],
    'salmos_2': [{ verse: 1, title: 'El Reino del Ungido de Dios' }],
    'salmos_3': [{ verse: 1, title: 'Oración Matutina de Confianza' }],
    'salmos_4': [{ verse: 1, title: 'Oración Vespertina de Confianza' }],
    'salmos_5': [{ verse: 1, title: 'Plegaria Pidiendo Protección' }],
    'salmos_6': [{ verse: 1, title: 'Oración de un Angustiado' }],
    'salmos_7': [{ verse: 1, title: 'Plegaria Pidiendo Vindicación' }],
    'salmos_8': [{ verse: 1, title: 'La Gloria de Dios y la Dignidad del Hombre' }],
    'salmos_9': [{ verse: 1, title: 'Acción de Gracias por la Justicia de Dios' }],
    'salmos_10': [{ verse: 1, title: 'Oración Pidiendo la Destrucción del Malvado' }],
    'salmos_11': [{ verse: 1, title: 'Jehová, Refugio del Justo' }],
    'salmos_12': [{ verse: 1, title: 'Oración Pidiendo Ayuda contra el Mal' }],
    'salmos_13': [{ verse: 1, title: '¿Hasta Cuándo, Jehová?' }],
    'salmos_14': [{ verse: 1, title: 'La Necedad del Ateísmo' }],
    'salmos_15': [{ verse: 1, title: 'Los que Habitan en el Monte Santo' }],
    'salmos_16': [{ verse: 1, title: 'Una Herencia Escogida' }],
    'salmos_17': [{ verse: 1, title: 'Plegaria Pidiendo Protección Divina' }],
    'salmos_18': [{ verse: 1, title: 'Acción de Gracias por la Victoria' }],
    'salmos_19': [
        { verse: 1, title: 'La Gloria de Dios en la Creación' },
        { verse: 7, title: 'La Ley de Jehová es Perfecta' }
    ],
    'salmos_20': [{ verse: 1, title: 'Oración por la Victoria del Rey' }],
    'salmos_21': [{ verse: 1, title: 'Acción de Gracias por la Victoria del Rey' }],
    'salmos_22': [
        { verse: 1, title: 'Dios Mío, ¿Por Qué Me Has Desamparado?' },
        { verse: 22, title: 'Alabanza por la Liberación' }
    ],
    'salmos_23': [{ verse: 1, title: 'Jehová es Mi Pastor' }],
    'salmos_24': [{ verse: 1, title: 'El Rey de Gloria' }],
    'salmos_25': [{ verse: 1, title: 'Oración Pidiendo Dirección y Perdón' }],
    'salmos_26': [{ verse: 1, title: 'Oración de un Hombre Íntegro' }],
    'salmos_27': [{ verse: 1, title: 'Jehová es Mi Luz y Mi Salvación' }],
    'salmos_28': [{ verse: 1, title: 'Oración Pidiendo Ayuda' }],
    'salmos_29': [{ verse: 1, title: 'La Voz de Jehová en la Tempestad' }],
    'salmos_30': [{ verse: 1, title: 'Acción de Gracias por la Sanidad' }],
    'salmos_31': [{ verse: 1, title: 'En Ti, Oh Jehová, He Confiado' }],
    'salmos_32': [{ verse: 1, title: 'La Dicha del Perdón' }],
    'salmos_33': [{ verse: 1, title: 'Alabanza al Creador y Protector' }],
    'salmos_34': [{ verse: 1, title: 'La Protección Divina' }],
    'salmos_35': [{ verse: 1, title: 'Plegaria Pidiendo la Derrota de los Enemigos' }],
    'salmos_36': [{ verse: 1, title: 'La Misericordia de Dios' }],
    'salmos_37': [{ verse: 1, title: 'El Camino de los Malos y el de los Justos' }],
    'salmos_38': [{ verse: 1, title: 'Oración de un Penitente' }],
    'salmos_39': [{ verse: 1, title: 'La Brevedad de la Vida' }],
    'salmos_40': [{ verse: 1, title: 'Alabanza y Petición de Ayuda' }],
    'salmos_41': [{ verse: 1, title: 'Oración de un Enfermo' }],
    'salmos_42': [{ verse: 1, title: 'Como el Ciervo Brama por las Corrientes' }],
    'salmos_43': [{ verse: 1, title: 'Ruego por la Vindicación' }],
    'salmos_44': [{ verse: 1, title: 'Oración Pidiendo Socorro Nacional' }],
    'salmos_45': [{ verse: 1, title: 'Cántico de las Bodas del Rey' }],
    'salmos_46': [{ verse: 1, title: 'Dios es Nuestro Amparo y Fortaleza' }],
    'salmos_47': [{ verse: 1, title: 'Dios, Rey de Toda la Tierra' }],
    'salmos_48': [{ verse: 1, title: 'La Hermosura de Sion' }],
    'salmos_49': [{ verse: 1, title: 'La Insensatez de Confiar en las Riquezas' }],
    'salmos_50': [{ verse: 1, title: 'Dios Juzga a su Pueblo' }],
    'salmos_51': [{ verse: 1, title: 'Arrepentimiento y Súplica de Perdón' }],
    'salmos_52': [{ verse: 1, title: 'El Juicio sobre el Malvado' }],
    'salmos_53': [{ verse: 1, title: 'La Insensatez del Malvado' }],
    'salmos_54': [{ verse: 1, title: 'Plegaria Pidiendo Protección' }],
    'salmos_55': [{ verse: 1, title: 'Oración contra los Traidores' }],
    'salmos_56': [{ verse: 1, title: 'Oración de Confianza' }],
    'salmos_57': [{ verse: 1, title: 'Ten Misericordia de Mí, Oh Dios' }],
    'salmos_58': [{ verse: 1, title: 'Oración contra los Jueces Injustos' }],
    'salmos_59': [{ verse: 1, title: 'Oración Pidiendo Liberación de los Enemigos' }],
    'salmos_60': [{ verse: 1, title: 'Oración después de una Derrota' }],
    'salmos_61': [{ verse: 1, title: 'Oración del Desterrado' }],
    'salmos_62': [{ verse: 1, title: 'Solo en Dios Reposa Mi Alma' }],
    'salmos_63': [{ verse: 1, title: 'Mi Alma Tiene Sed de Dios' }],
    'salmos_64': [{ verse: 1, title: 'Oración Pidiendo Protección contra los Enemigos' }],
    'salmos_65': [{ verse: 1, title: 'Acción de Gracias por las Bendiciones de Dios' }],
    'salmos_66': [{ verse: 1, title: 'Aclamad a Dios con Alegría' }],
    'salmos_67': [{ verse: 1, title: 'Que Todas las Naciones Alaben a Dios' }],
    'salmos_68': [{ verse: 1, title: 'El Dios de Israel Da Poder a su Pueblo' }],
    'salmos_69': [{ verse: 1, title: 'Oración Pidiendo Liberación' }],
    'salmos_70': [{ verse: 1, title: 'Acude Pronto a Ayudarme' }],
    'salmos_71': [{ verse: 1, title: 'Oración de un Anciano' }],
    'salmos_72': [{ verse: 1, title: 'El Reinado del Rey Justo' }],
    'salmos_73': [{ verse: 1, title: 'La Prosperidad de los Malos' }],
    'salmos_74': [{ verse: 1, title: 'Oración en la Desolación del Templo' }],
    'salmos_75': [{ verse: 1, title: 'Dios Abate al Malo y Exalta al Justo' }],
    'salmos_76': [{ verse: 1, title: 'Dios es Temible en su Juicio' }],
    'salmos_77': [{ verse: 1, title: 'Meditación sobre las Obras de Dios' }],
    'salmos_78': [{ verse: 1, title: 'La Historia de Israel como Lección' }],
    'salmos_79': [{ verse: 1, title: 'Lamento por la Destrucción de Jerusalén' }],
    'salmos_80': [{ verse: 1, title: 'Oración por la Restauración de Israel' }],
    'salmos_81': [{ verse: 1, title: 'Bondad de Dios y Dureza de Israel' }],
    'salmos_82': [{ verse: 1, title: 'Dios Juzga a los Jueces' }],
    'salmos_83': [{ verse: 1, title: 'Oración contra los Enemigos de Israel' }],
    'salmos_84': [{ verse: 1, title: 'Anhelo por la Casa de Dios' }],
    'salmos_85': [{ verse: 1, title: 'Oración por la Restauración' }],
    'salmos_86': [{ verse: 1, title: 'Oración de David Pidiendo Misericordia' }],
    'salmos_87': [{ verse: 1, title: 'La Gloria de Sion' }],
    'salmos_88': [{ verse: 1, title: 'Oración de un Afligido' }],
    'salmos_89': [
        { verse: 1, title: 'Las Misericordias de Jehová' },
        { verse: 38, title: 'Lamento por el Pacto Olvidado' }
    ],
    'salmos_90': [{ verse: 1, title: 'La Eternidad de Dios y la Fragilidad del Hombre' }],
    'salmos_91': [{ verse: 1, title: 'El que Habita al Abrigo del Altísimo' }],
    'salmos_92': [{ verse: 1, title: 'Alabanza por la Bondad de Dios' }],
    'salmos_93': [{ verse: 1, title: 'Jehová Reina' }],
    'salmos_94': [{ verse: 1, title: 'Oración Clamando Justicia' }],
    'salmos_95': [{ verse: 1, title: 'Venid, Adoremos y Postrémonos' }],
    'salmos_96': [{ verse: 1, title: 'Cantad a Jehová Cántico Nuevo' }],
    'salmos_97': [{ verse: 1, title: 'Jehová Reina sobre Toda la Tierra' }],
    'salmos_98': [{ verse: 1, title: 'Alabanza por la Salvación de Dios' }],
    'salmos_99': [{ verse: 1, title: 'Jehová, el Rey Santo' }],
    'salmos_100': [{ verse: 1, title: 'Cantad Alegres a Dios' }],
    'salmos_101': [{ verse: 1, title: 'Promesa de Vivir Rectamente' }],
    'salmos_102': [{ verse: 1, title: 'Oración de un Afligido' }],
    'salmos_103': [{ verse: 1, title: 'Bendice, Alma Mía, a Jehová' }],
    'salmos_104': [{ verse: 1, title: 'La Gloria de Dios en la Creación' }],
    'salmos_105': [{ verse: 1, title: 'Las Maravillas de Dios en la Historia' }],
    'salmos_106': [{ verse: 1, title: 'La Rebelión de Israel' }],
    'salmos_107': [{ verse: 1, title: 'Dad Gracias a Jehová por su Misericordia' }],
    'salmos_108': [{ verse: 1, title: 'Oración de Victoria' }],
    'salmos_109': [{ verse: 1, title: 'Clamor contra los Calumniadores' }],
    'salmos_110': [{ verse: 1, title: 'Jehová Dijo a Mi Señor' }],
    'salmos_111': [{ verse: 1, title: 'Alabanza por las Obras de Dios' }],
    'salmos_112': [{ verse: 1, title: 'La Prosperidad del que Teme a Jehová' }],
    'salmos_113': [{ verse: 1, title: 'Alabanza por la Bondad de Dios' }],
    'salmos_114': [{ verse: 1, title: 'Las Maravillas del Éxodo' }],
    'salmos_115': [{ verse: 1, title: 'Sólo a Dios la Gloria' }],
    'salmos_116': [{ verse: 1, title: 'Acción de Gracias por la Liberación' }],
    'salmos_117': [{ verse: 1, title: 'Alabanza Universal' }],
    'salmos_118': [
        { verse: 1, title: 'Acción de Gracias por la Victoria' },
        { verse: 22, title: 'La Piedra que Desecharon los Edificadores' }
    ],
    'salmos_119': [{ verse: 1, title: 'Excelencias de la Ley de Dios' }],
    'salmos_120': [{ verse: 1, title: 'Oración Pidiendo Liberación de la Mentira' }],
    'salmos_121': [{ verse: 1, title: 'Jehová es Tu Guardador' }],
    'salmos_122': [{ verse: 1, title: 'Oración por la Paz de Jerusalén' }],
    'salmos_123': [{ verse: 1, title: 'Plegaria Pidiendo Misericordia' }],
    'salmos_124': [{ verse: 1, title: 'Nuestro Socorro Está en Jehová' }],
    'salmos_125': [{ verse: 1, title: 'La Protección de Jehová' }],
    'salmos_126': [{ verse: 1, title: 'La Alegría del Retorno' }],
    'salmos_127': [{ verse: 1, title: 'Si Jehová No Edificare la Casa' }],
    'salmos_128': [{ verse: 1, title: 'La Bendición del que Teme a Jehová' }],
    'salmos_129': [{ verse: 1, title: 'Oración contra los Enemigos de Sion' }],
    'salmos_130': [{ verse: 1, title: 'De lo Profundo Clamo a Ti' }],
    'salmos_131': [{ verse: 1, title: 'Oración de Humildad' }],
    'salmos_132': [{ verse: 1, title: 'Oración por la Casa de David' }],
    'salmos_133': [{ verse: 1, title: 'La Bendición de la Unidad Fraternal' }],
    'salmos_134': [{ verse: 1, title: 'Exhortación a los Guardas del Templo' }],
    'salmos_135': [{ verse: 1, title: 'Alabanza por la Bondad y el Poder de Dios' }],
    'salmos_136': [{ verse: 1, title: 'Porque para Siempre Es su Misericordia' }],
    'salmos_137': [{ verse: 1, title: 'Junto a los Ríos de Babilonia' }],
    'salmos_138': [{ verse: 1, title: 'Acción de Gracias por el Favor de Dios' }],
    'salmos_139': [{ verse: 1, title: 'Dios Omnisciente y Omnipresente' }],
    'salmos_140': [{ verse: 1, title: 'Oración Pidiendo Protección' }],
    'salmos_141': [{ verse: 1, title: 'Oración Pidiendo Ser Guardado del Mal' }],
    'salmos_142': [{ verse: 1, title: 'Oración desde la Prisión' }],
    'salmos_143': [{ verse: 1, title: 'Oración Pidiendo Dirección' }],
    'salmos_144': [{ verse: 1, title: 'Oración Pidiendo Liberación y Prosperidad' }],
    'salmos_145': [{ verse: 1, title: 'Alabanza por la Grandeza de Dios' }],
    'salmos_146': [{ verse: 1, title: 'Alabanza al Dios que Ayuda a los Necesitados' }],
    'salmos_147': [{ verse: 1, title: 'Alabanza al Dios Omnipotente' }],
    'salmos_148': [{ verse: 1, title: 'Toda la Creación Alabe a Dios' }],
    'salmos_149': [{ verse: 1, title: 'Alabanza por la Victoria de Dios' }],
    'salmos_150': [{ verse: 1, title: 'Que Todo lo que Respira Alabe a Jehová' }],
    // ============================================================
    // PROVERBIOS (31 capítulos)
    // ============================================================
    'proverbios_1': [
        { verse: 1, title: 'El Propósito de los Proverbios' },
        { verse: 7, title: 'El Temor de Jehová' },
        { verse: 8, title: 'Amonestación contra la Violencia' },
        { verse: 20, title: 'La Sabiduría Clama' }
    ],
    'proverbios_2': [{ verse: 1, title: 'Beneficios de la Sabiduría' }],
    'proverbios_3': [
        { verse: 1, title: 'Confía en Jehová con Todo Tu Corazón' },
        { verse: 11, title: 'La Disciplina de Jehová' },
        { verse: 13, title: 'El Valor de la Sabiduría' }
    ],
    'proverbios_4': [
        { verse: 1, title: 'Exhortación a Buscar la Sabiduría' },
        { verse: 14, title: 'El Camino de los Impíos' },
        { verse: 20, title: 'Guarda Tu Corazón' }
    ],
    'proverbios_5': [{ verse: 1, title: 'Advertencia contra la Mujer Ajena' }],
    'proverbios_6': [
        { verse: 1, title: 'Advertencia contra la Fianza' },
        { verse: 6, title: 'La Pereza y la Hormiga' },
        { verse: 12, title: 'El Hombre Malo' },
        { verse: 16, title: 'Las Siete Cosas que Dios Aborrece' },
        { verse: 20, title: 'Advertencia contra el Adulterio' }
    ],
    'proverbios_7': [{ verse: 1, title: 'La Astucia de la Ramera' }],
    'proverbios_8': [
        { verse: 1, title: 'La Sabiduría y sus Excelencias' },
        { verse: 22, title: 'La Sabiduría, Presente en la Creación' }
    ],
    'proverbios_9': [{ verse: 1, title: 'La Sabiduría y la Necedad' }],
    'proverbios_10': [{ verse: 1, title: 'Proverbios de Salomón' }],
    'proverbios_11': [{ verse: 1, title: 'Contrastes entre el Justo y el Impío' }],
    'proverbios_12': [{ verse: 1, title: 'La Sabiduría y la Necedad en la Vida Diaria' }],
    'proverbios_13': [{ verse: 1, title: 'Consejos de Sabiduría' }],
    'proverbios_14': [{ verse: 1, title: 'La Mujer Sabia y la Necia' }],
    'proverbios_15': [{ verse: 1, title: 'La Respuesta Blanda' }],
    'proverbios_16': [{ verse: 1, title: 'Proverbios sobre la Soberanía de Dios' }],
    'proverbios_17': [{ verse: 1, title: 'Proverbios sobre las Relaciones Humanas' }],
    'proverbios_18': [{ verse: 1, title: 'Proverbios sobre la Conducta' }],
    'proverbios_19': [{ verse: 1, title: 'Proverbios sobre la Pobreza y la Riqueza' }],
    'proverbios_20': [{ verse: 1, title: 'Proverbios sobre la Justicia' }],
    'proverbios_21': [{ verse: 1, title: 'Proverbios sobre el Rey y la Justicia' }],
    'proverbios_22': [
        { verse: 1, title: 'Proverbios sobre la Buena Fama' },
        { verse: 17, title: 'Palabras de los Sabios' }
    ],
    'proverbios_23': [{ verse: 1, title: 'Preceptos y Amonestaciones' }],
    'proverbios_24': [
        { verse: 1, title: 'Más Dichos de los Sabios' },
        { verse: 23, title: 'También Estos Son Dichos de los Sabios' }
    ],
    'proverbios_25': [{ verse: 1, title: 'Proverbios de Salomón Recopilados por Ezequías' }],
    'proverbios_26': [{ verse: 1, title: 'Contra los Necios, Perezosos y Chismosos' }],
    'proverbios_27': [{ verse: 1, title: 'Proverbios sobre la Amistad y la Prudencia' }],
    'proverbios_28': [{ verse: 1, title: 'Proverbios sobre el Justo y el Impío' }],
    'proverbios_29': [{ verse: 1, title: 'Proverbios sobre la Disciplina y la Justicia' }],
    'proverbios_30': [{ verse: 1, title: 'Palabras de Agur' }],
    'proverbios_31': [{ verse: 1, title: 'Palabras del Rey Lemuel' }, { verse: 10, title: 'La Mujer Virtuosa' }],
    // ============================================================
    // ECLESIASTÉS (12 capítulos)
    // ============================================================
    'eclesiastes_1': [{ verse: 1, title: 'Vanidad de Vanidades' }, { verse: 12, title: 'La Experiencia del Predicador' }],
    'eclesiastes_2': [
        { verse: 1, title: 'Vanidad de los Placeres' },
        { verse: 12, title: 'Vanidad de la Sabiduría Humana' },
        { verse: 18, title: 'Vanidad del Trabajo' }
    ],
    'eclesiastes_3': [{ verse: 1, title: 'Todo Tiene su Tiempo' }, { verse: 16, title: 'La Injusticia en el Mundo' }],
    'eclesiastes_4': [{ verse: 1, title: 'La Opresión y la Envidia' }, { verse: 9, title: 'El Valor de la Compañía' }],
    'eclesiastes_5': [{ verse: 1, title: 'El Temor de Dios' }, { verse: 8, title: 'Vanidad de las Riquezas' }],
    'eclesiastes_6': [{ verse: 1, title: 'Vanidad de la Vida sin Contentamiento' }],
    'eclesiastes_7': [{ verse: 1, title: 'Contrastes de la Vida' }, { verse: 15, title: 'La Sabiduría y la Justicia' }],
    'eclesiastes_8': [{ verse: 1, title: 'Obediencia a la Autoridad' }, { verse: 10, title: 'La Justicia de Dios' }],
    'eclesiastes_9': [
        { verse: 1, title: 'Un Mismo Fin para Todos' },
        { verse: 7, title: 'Goza de la Vida' },
        { verse: 13, title: 'La Sabiduría Menospreciada' }
    ],
    'eclesiastes_10': [{ verse: 1, title: 'El Valor de la Sabiduría' }],
    'eclesiastes_11': [
        { verse: 1, title: 'Echa Tu Pan sobre las Aguas' },
        { verse: 7, title: 'Alégrate, Joven, en Tu Juventud' }
    ],
    'eclesiastes_12': [
        { verse: 1, title: 'Acuérdate de Tu Creador en los Días de Tu Juventud' },
        { verse: 9, title: 'Resumen y Conclusión' }
    ],
    // ============================================================
    // CANTARES (8 capítulos)
    // ============================================================
    'cantares_1': [{ verse: 1, title: 'El Cantar de los Cantares' }, { verse: 2, title: 'La Esposa y el Esposo' }],
    'cantares_2': [{ verse: 1, title: 'El Amado y la Sulamita' }, { verse: 8, title: 'La Visita del Amado' }],
    'cantares_3': [{ verse: 1, title: 'El Sueño de la Esposa' }, { verse: 6, title: 'La Procesión Nupcial' }],
    'cantares_4': [{ verse: 1, title: 'El Esposo Alaba a la Esposa' }, { verse: 12, title: 'El Huerto Cerrado' }],
    'cantares_5': [
        { verse: 1, title: 'El Esposo en el Huerto' },
        { verse: 2, title: 'El Tormento de la Separación' },
        { verse: 10, title: 'La Esposa Describe al Esposo' }
    ],
    'cantares_6': [{ verse: 1, title: 'Mutua Alabanza del Esposo y la Esposa' }],
    'cantares_7': [{ verse: 1, title: 'Alabanza de la Esposa' }, { verse: 10, title: 'La Esposa Invita al Esposo' }],
    'cantares_8': [{ verse: 1, title: 'El Amor del Esposo y la Esposa' }, { verse: 5, title: 'El Poder del Amor' }],
    // ============================================================
    // ISAÍAS (66 capítulos)
    // ============================================================
    'isaias_1': [{ verse: 1, title: 'La Rebelión de Israel' }, { verse: 18, title: 'Llamamiento al Arrepentimiento' }],
    'isaias_2': [{ verse: 1, title: 'El Monte de la Casa de Jehová' }, { verse: 6, title: 'El Día de Jehová' }],
    'isaias_3': [
        { verse: 1, title: 'Juicio contra Judá y Jerusalén' },
        { verse: 16, title: 'Juicio contra las Mujeres de Sion' }
    ],
    'isaias_4': [{ verse: 1, title: 'El Renuevo de Jehová' }],
    'isaias_5': [{ verse: 1, title: 'Parábola de la Viña' }, { verse: 8, title: 'Ayes contra los Malvados' }],
    'isaias_6': [{ verse: 1, title: 'Visión y Llamamiento de Isaías' }],
    'isaias_7': [{ verse: 1, title: 'Mensaje a Acaz' }, { verse: 10, title: 'La Señal de Emanuel' }],
    'isaias_8': [{ verse: 1, title: 'Invasión Asiria Anunciada' }, { verse: 11, title: 'Temed a Jehová' }],
    'isaias_9': [{ verse: 1, title: 'Un Niño Nos es Nacido' }, { verse: 8, title: 'La Ira de Jehová contra Israel' }],
    'isaias_10': [
        { verse: 1, title: 'Ay de los Opresores' },
        { verse: 5, title: 'Asiria, Instrumento de Dios' },
        { verse: 20, title: 'El Remanente Volverá' }
    ],
    'isaias_11': [{ verse: 1, title: 'El Reinado del Renuevo de Isaí' }],
    'isaias_12': [{ verse: 1, title: 'Cántico de Alabanza' }],
    'isaias_13': [{ verse: 1, title: 'Profecía contra Babilonia' }],
    'isaias_14': [
        { verse: 1, title: 'Restauración de Israel' },
        { verse: 3, title: 'Escarnio contra el Rey de Babilonia' },
        { verse: 24, title: 'Profecía contra Asiria' },
        { verse: 28, title: 'Profecía contra Filistea' }
    ],
    'isaias_15': [{ verse: 1, title: 'Profecía contra Moab' }],
    'isaias_16': [{ verse: 1, title: 'Lamento por Moab' }],
    'isaias_17': [{ verse: 1, title: 'Profecía contra Damasco' }],
    'isaias_18': [{ verse: 1, title: 'Profecía contra Etiopía' }],
    'isaias_19': [{ verse: 1, title: 'Profecía contra Egipto' }],
    'isaias_20': [{ verse: 1, title: 'Profecía contra Egipto y Etiopía' }],
    'isaias_21': [
        { verse: 1, title: 'Profecía sobre la Caída de Babilonia' },
        { verse: 11, title: 'Profecía sobre Edom' },
        { verse: 13, title: 'Profecía sobre Arabia' }
    ],
    'isaias_22': [{ verse: 1, title: 'Profecía sobre Jerusalén' }, { verse: 15, title: 'Profecía contra Sebna' }],
    'isaias_23': [{ verse: 1, title: 'Profecía contra Tiro' }],
    'isaias_24': [{ verse: 1, title: 'El Juicio de Dios sobre la Tierra' }],
    'isaias_25': [{ verse: 1, title: 'Alabanza por las Victorias de Dios' }],
    'isaias_26': [{ verse: 1, title: 'Cántico de Confianza en Dios' }],
    'isaias_27': [{ verse: 1, title: 'Liberación y Restauración de Israel' }],
    'isaias_28': [{ verse: 1, title: 'Ay de Efraín' }, { verse: 14, title: 'Advertencia a Jerusalén' }],
    'isaias_29': [{ verse: 1, title: 'Ay de Ariel' }, { verse: 13, title: 'Ceguera Espiritual del Pueblo' }],
    'isaias_30': [
        { verse: 1, title: 'Ay de los que Buscan Ayuda en Egipto' },
        { verse: 18, title: 'Promesa de Misericordia' }
    ],
    'isaias_31': [{ verse: 1, title: 'Ay de los que Confían en Egipto' }],
    'isaias_32': [{ verse: 1, title: 'El Rey Justo' }, { verse: 9, title: 'Advertencia a las Mujeres Confiadas' }],
    'isaias_33': [
        { verse: 1, title: 'Oración Pidiendo Liberación' },
        { verse: 17, title: 'La Gloria del Reino Futuro' }
    ],
    'isaias_34': [{ verse: 1, title: 'El Juicio sobre las Naciones' }],
    'isaias_35': [{ verse: 1, title: 'El Gozo de los Redimidos' }],
    'isaias_36': [{ verse: 1, title: 'Senaquerib Amenaza a Jerusalén' }],
    'isaias_37': [
        { verse: 1, title: 'Ezequías Consulta a Isaías' },
        { verse: 14, title: 'Oración de Ezequías' },
        { verse: 21, title: 'Dios Libra a Jerusalén' }
    ],
    'isaias_38': [{ verse: 1, title: 'Enfermedad y Curación de Ezequías' }, { verse: 9, title: 'Cántico de Ezequías' }],
    'isaias_39': [{ verse: 1, title: 'Los Enviados de Babilonia' }],
    'isaias_40': [
        { verse: 1, title: 'Consolaos, Pueblo Mío' },
        { verse: 12, title: 'La Grandeza de Dios' },
        { verse: 27, title: 'Los que Esperan en Jehová' }
    ],
    'isaias_41': [{ verse: 1, title: 'Dios, Protector de Israel' }],
    'isaias_42': [
        { verse: 1, title: 'El Siervo de Jehová' },
        { verse: 10, title: 'Cántico Nuevo' },
        { verse: 18, title: 'La Ceguera de Israel' }
    ],
    'isaias_43': [{ verse: 1, title: 'Dios Promete Redimir a Israel' }],
    'isaias_44': [
        { verse: 1, title: 'Dios Bendice a Israel' },
        { verse: 6, title: 'La Necedad de la Idolatría' },
        { verse: 21, title: 'Promesa de Restauración' }
    ],
    'isaias_45': [{ verse: 1, title: 'Ciro, Instrumento de Dios' }, { verse: 20, title: 'No Hay Otro Dios' }],
    'isaias_46': [{ verse: 1, title: 'Los Ídolos de Babilonia' }],
    'isaias_47': [{ verse: 1, title: 'La Caída de Babilonia' }],
    'isaias_48': [{ verse: 1, title: 'Dios Revela sus Planes a Israel' }],
    'isaias_49': [
        { verse: 1, title: 'El Siervo de Jehová, Luz de las Naciones' },
        { verse: 14, title: 'Dios No Olvida a Sion' }
    ],
    'isaias_50': [{ verse: 1, title: 'El Siervo Obediente de Jehová' }],
    'isaias_51': [{ verse: 1, title: 'Palabras de Consuelo para Sion' }],
    'isaias_52': [{ verse: 1, title: 'Despierta, Sion' }, { verse: 13, title: 'El Siervo Sufriente' }],
    'isaias_53': [{ verse: 1, title: 'Sufrimiento y Gloria del Siervo de Jehová' }],
    'isaias_54': [{ verse: 1, title: 'La Futura Gloria de Sion' }],
    'isaias_55': [{ verse: 1, title: 'A Todos los Sedientos' }],
    'isaias_56': [
        { verse: 1, title: 'Salvación para Todos los Pueblos' },
        { verse: 9, title: 'Condenación de los Líderes Infieles' }
    ],
    'isaias_57': [
        { verse: 1, title: 'Condenación de la Idolatría' },
        { verse: 14, title: 'Consuelo para los Humildes' }
    ],
    'isaias_58': [{ verse: 1, title: 'El Verdadero Ayuno' }],
    'isaias_59': [{ verse: 1, title: 'El Pecado Separa de Dios' }, { verse: 15, title: 'El Redentor Vendrá a Sion' }],
    'isaias_60': [{ verse: 1, title: 'La Gloria Futura de Sion' }],
    'isaias_61': [{ verse: 1, title: 'Buenas Nuevas de Salvación' }],
    'isaias_62': [{ verse: 1, title: 'El Nuevo Nombre de Sion' }],
    'isaias_63': [
        { verse: 1, title: 'El Día de la Venganza de Dios' },
        { verse: 7, title: 'La Bondad de Dios para con Israel' }
    ],
    'isaias_64': [{ verse: 1, title: 'Oración Pidiendo Misericordia' }],
    'isaias_65': [{ verse: 1, title: 'Juicio y Salvación' }, { verse: 17, title: 'Cielos Nuevos y Tierra Nueva' }],
    'isaias_66': [{ verse: 1, title: 'El Juicio y la Gloria de Dios' }],
    // ============================================================
    // JEREMÍAS (52 capítulos)
    // ============================================================
    'jeremias_1': [{ verse: 1, title: 'Llamamiento de Jeremías' }],
    'jeremias_2': [{ verse: 1, title: 'Jehová Acusa a Israel de Infidelidad' }],
    'jeremias_3': [{ verse: 1, title: 'Jehová Exhorta a Israel al Arrepentimiento' }],
    'jeremias_4': [{ verse: 1, title: 'El Llamado al Arrepentimiento' }, { verse: 5, title: 'Invasión del Norte' }],
    'jeremias_5': [{ verse: 1, title: 'La Corrupción de Jerusalén' }],
    'jeremias_6': [{ verse: 1, title: 'El Enemigo del Norte' }],
    'jeremias_7': [{ verse: 1, title: 'El Sermón del Templo' }],
    'jeremias_8': [{ verse: 1, title: 'La Apostasía de Judá' }, { verse: 18, title: 'Lamento por el Pueblo' }],
    'jeremias_9': [
        { verse: 1, title: 'Jeremías Llora por su Pueblo' },
        { verse: 23, title: 'Gloriarse Solo en Jehová' }
    ],
    'jeremias_10': [{ verse: 1, title: 'La Necedad de la Idolatría' }, { verse: 17, title: 'La Destrucción Inminente' }],
    'jeremias_11': [{ verse: 1, title: 'La Violación del Pacto' }, { verse: 18, title: 'Complot contra Jeremías' }],
    'jeremias_12': [{ verse: 1, title: 'La Queja de Jeremías' }],
    'jeremias_13': [
        { verse: 1, title: 'La Señal del Cinto Podrido' },
        { verse: 12, title: 'La Señal de las Tinajas' },
        { verse: 15, title: 'Advertencia contra el Orgullo' }
    ],
    'jeremias_14': [{ verse: 1, title: 'La Gran Sequía' }, { verse: 10, title: 'Falsos Profetas' }],
    'jeremias_15': [{ verse: 1, title: 'El Juicio Inevitable' }, { verse: 10, title: 'Lamento de Jeremías' }],
    'jeremias_16': [{ verse: 1, title: 'Juicio y Restauración' }],
    'jeremias_17': [
        { verse: 1, title: 'El Pecado de Judá' },
        { verse: 5, title: 'Maldición y Bendición' },
        { verse: 19, title: 'Observancia del Día de Reposo' }
    ],
    'jeremias_18': [{ verse: 1, title: 'La Señal del Alfarero' }, { verse: 18, title: 'Complot contra Jeremías' }],
    'jeremias_19': [{ verse: 1, title: 'La Señal de la Vasija Rota' }],
    'jeremias_20': [{ verse: 1, title: 'Jeremías y Pasur' }, { verse: 7, title: 'Lamento de Jeremías' }],
    'jeremias_21': [{ verse: 1, title: 'Jerusalén Será Destruida' }],
    'jeremias_22': [{ verse: 1, title: 'Profecía contra los Reyes de Judá' }],
    'jeremias_23': [
        { verse: 1, title: 'Regreso del Remanente' },
        { verse: 5, title: 'El Renuevo Justo' },
        { verse: 9, title: 'Condenación de los Falsos Profetas' }
    ],
    'jeremias_24': [{ verse: 1, title: 'La Señal de los Higos Buenos y Malos' }],
    'jeremias_25': [
        { verse: 1, title: 'Los Setenta Años de Cautiverio' },
        { verse: 15, title: 'La Copa de la Ira de Dios' }
    ],
    'jeremias_26': [{ verse: 1, title: 'Jeremías Amenazado de Muerte' }],
    'jeremias_27': [{ verse: 1, title: 'La Señal de los Yugos' }],
    'jeremias_28': [{ verse: 1, title: 'El Falso Profeta Hananías' }],
    'jeremias_29': [{ verse: 1, title: 'Carta de Jeremías a los Cautivos' }],
    'jeremias_30': [{ verse: 1, title: 'Promesa de Restauración' }],
    'jeremias_31': [
        { verse: 1, title: 'El Amor Eterno de Dios' },
        { verse: 15, title: 'Raquel Llora por sus Hijos' },
        { verse: 31, title: 'El Nuevo Pacto' }
    ],
    'jeremias_32': [{ verse: 1, title: 'Jeremías Compra un Campo' }, { verse: 16, title: 'Oración de Jeremías' }],
    'jeremias_33': [{ verse: 1, title: 'Promesa de Restauración' }, { verse: 14, title: 'El Renuevo de Justicia' }],
    'jeremias_34': [
        { verse: 1, title: 'Profecía contra Sedequías' },
        { verse: 8, title: 'Violación del Pacto de Libertad' }
    ],
    'jeremias_35': [{ verse: 1, title: 'Obediencia de los Recabitas' }],
    'jeremias_36': [{ verse: 1, title: 'El Rollo de Jeremías' }, { verse: 20, title: 'El Rey Quema el Rollo' }],
    'jeremias_37': [{ verse: 1, title: 'Jeremías en la Cárcel' }],
    'jeremias_38': [
        { verse: 1, title: 'Jeremías en la Cisterna' },
        { verse: 14, title: 'Sedequías Consulta a Jeremías' }
    ],
    'jeremias_39': [{ verse: 1, title: 'Caída de Jerusalén' }, { verse: 11, title: 'Jeremías es Liberado' }],
    'jeremias_40': [{ verse: 1, title: 'Jeremías Queda en Judá' }, { verse: 7, title: 'Gedalías, Gobernador' }],
    'jeremias_41': [{ verse: 1, title: 'Asesinato de Gedalías' }],
    'jeremias_42': [{ verse: 1, title: 'El Pueblo Consulta a Jeremías' }],
    'jeremias_43': [{ verse: 1, title: 'El Pueblo Desobedece y Va a Egipto' }],
    'jeremias_44': [{ verse: 1, title: 'Jeremías Profetiza en Egipto' }],
    'jeremias_45': [{ verse: 1, title: 'Mensaje a Baruc' }],
    'jeremias_46': [{ verse: 1, title: 'Profecía contra Egipto' }],
    'jeremias_47': [{ verse: 1, title: 'Profecía contra los Filisteos' }],
    'jeremias_48': [{ verse: 1, title: 'Profecía contra Moab' }],
    'jeremias_49': [
        { verse: 1, title: 'Profecía contra Amón' },
        { verse: 7, title: 'Profecía contra Edom' },
        { verse: 23, title: 'Profecía contra Damasco' },
        { verse: 28, title: 'Profecía contra Cedar y Hazor' },
        { verse: 34, title: 'Profecía contra Elam' }
    ],
    'jeremias_50': [{ verse: 1, title: 'Profecía contra Babilonia' }],
    'jeremias_51': [
        { verse: 1, title: 'La Destrucción de Babilonia' },
        { verse: 59, title: 'El Rollo Arrojado al Éufrates' }
    ],
    'jeremias_52': [{ verse: 1, title: 'La Caída de Jerusalén' }, { verse: 31, title: 'Joaquín es Liberado' }],
    // ============================================================
    // LAMENTACIONES (5 capítulos)
    // ============================================================
    'lamentaciones_1': [{ verse: 1, title: 'La Desolación de Jerusalén' }],
    'lamentaciones_2': [{ verse: 1, title: 'La Ira de Dios contra Jerusalén' }],
    'lamentaciones_3': [
        { verse: 1, title: 'Esperanza en la Misericordia de Dios' },
        { verse: 22, title: 'Las Misericordias de Jehová Son Nuevas Cada Mañana' }
    ],
    'lamentaciones_4': [{ verse: 1, title: 'El Castigo de Sion' }],
    'lamentaciones_5': [{ verse: 1, title: 'Oración del Pueblo Afligido' }],
    // ============================================================
    // EZEQUIEL (48 capítulos)
    // ============================================================
    'ezequiel_1': [{ verse: 1, title: 'La Visión de la Gloria de Dios' }],
    'ezequiel_2': [{ verse: 1, title: 'Llamamiento de Ezequiel' }],
    'ezequiel_3': [{ verse: 1, title: 'Ezequiel Come el Rollo' }, { verse: 16, title: 'Ezequiel, Atalaya de Israel' }],
    'ezequiel_4': [{ verse: 1, title: 'Señales del Sitio de Jerusalén' }],
    'ezequiel_5': [{ verse: 1, title: 'La Señal de la Navaja' }, { verse: 5, title: 'Juicio contra Jerusalén' }],
    'ezequiel_6': [{ verse: 1, title: 'Profecía contra los Montes de Israel' }],
    'ezequiel_7': [{ verse: 1, title: 'El Fin Viene' }],
    'ezequiel_8': [{ verse: 1, title: 'Las Abominaciones en el Templo' }],
    'ezequiel_9': [{ verse: 1, title: 'La Matanza de los Culpables' }],
    'ezequiel_10': [{ verse: 1, title: 'La Gloria de Dios Abandona el Templo' }],
    'ezequiel_11': [{ verse: 1, title: 'Juicio contra los Líderes' }, { verse: 14, title: 'Promesa de Restauración' }],
    'ezequiel_12': [{ verse: 1, title: 'La Señal del Exilio' }],
    'ezequiel_13': [{ verse: 1, title: 'Condenación de los Falsos Profetas' }],
    'ezequiel_14': [
        { verse: 1, title: 'Condenación de los Idólatras' },
        { verse: 12, title: 'La Justicia de Noé, Daniel y Job' }
    ],
    'ezequiel_15': [{ verse: 1, title: 'Jerusalén, la Vid Inútil' }],
    'ezequiel_16': [{ verse: 1, title: 'La Infidelidad de Jerusalén' }],
    'ezequiel_17': [{ verse: 1, title: 'Parábola de las Dos Águilas y la Vid' }],
    'ezequiel_18': [{ verse: 1, title: 'La Responsabilidad Individual' }],
    'ezequiel_19': [{ verse: 1, title: 'Lamento por los Príncipes de Israel' }],
    'ezequiel_20': [{ verse: 1, title: 'La Rebelión de Israel' }, { verse: 33, title: 'Promesa de Restauración' }],
    'ezequiel_21': [{ verse: 1, title: 'La Espada de Jehová' }],
    'ezequiel_22': [{ verse: 1, title: 'Los Pecados de Jerusalén' }],
    'ezequiel_23': [{ verse: 1, title: 'Las Dos Hermanas: Ahola y Aholiba' }],
    'ezequiel_24': [{ verse: 1, title: 'La Olla Hirviente' }, { verse: 15, title: 'Muerte de la Esposa de Ezequiel' }],
    'ezequiel_25': [{ verse: 1, title: 'Profecía contra Amón, Moab, Edom y Filistea' }],
    'ezequiel_26': [{ verse: 1, title: 'Profecía contra Tiro' }],
    'ezequiel_27': [{ verse: 1, title: 'Lamento por Tiro' }],
    'ezequiel_28': [{ verse: 1, title: 'Profecía contra el Rey de Tiro' }, { verse: 20, title: 'Profecía contra Sidón' }],
    'ezequiel_29': [{ verse: 1, title: 'Profecía contra Egipto' }],
    'ezequiel_30': [{ verse: 1, title: 'Lamento por Egipto' }],
    'ezequiel_31': [{ verse: 1, title: 'La Caída de Asiria como Ejemplo para Egipto' }],
    'ezequiel_32': [{ verse: 1, title: 'Lamento por Faraón' }, { verse: 17, title: 'Egipto Desciende al Seol' }],
    'ezequiel_33': [
        { verse: 1, title: 'Ezequiel, Atalaya de Israel' },
        { verse: 10, title: 'Llamamiento al Arrepentimiento' },
        { verse: 21, title: 'Noticias de la Caída de Jerusalén' }
    ],
    'ezequiel_34': [
        { verse: 1, title: 'Profecía contra los Pastores de Israel' },
        { verse: 11, title: 'El Buen Pastor' }
    ],
    'ezequiel_35': [{ verse: 1, title: 'Profecía contra Edom' }],
    'ezequiel_36': [
        { verse: 1, title: 'Restauración de Israel' },
        { verse: 22, title: 'El Nuevo Corazón y el Nuevo Espíritu' }
    ],
    'ezequiel_37': [{ verse: 1, title: 'El Valle de los Huesos Secos' }, { verse: 15, title: 'Las Dos Varas Unidas' }],
    'ezequiel_38': [{ verse: 1, title: 'Profecía contra Gog' }],
    'ezequiel_39': [{ verse: 1, title: 'Derrota de Gog' }, { verse: 21, title: 'Restauración de Israel' }],
    'ezequiel_40': [{ verse: 1, title: 'Visión del Templo Futuro' }],
    'ezequiel_41': [{ verse: 1, title: 'El Interior del Templo' }],
    'ezequiel_42': [{ verse: 1, title: 'Los Aposentos del Templo' }],
    'ezequiel_43': [{ verse: 1, title: 'La Gloria de Dios Llena el Templo' }, { verse: 13, title: 'El Altar' }],
    'ezequiel_44': [{ verse: 1, title: 'La Puerta Oriental Cerrada' }, { verse: 15, title: 'Leyes para los Sacerdotes' }],
    'ezequiel_45': [
        { verse: 1, title: 'La Porción Santa de la Tierra' },
        { verse: 13, title: 'Las Ofrendas y las Fiestas' }
    ],
    'ezequiel_46': [{ verse: 1, title: 'Las Ofrendas del Príncipe' }],
    'ezequiel_47': [{ verse: 1, title: 'El Río que Sale del Templo' }, { verse: 13, title: 'Los Límites de la Tierra' }],
    'ezequiel_48': [
        { verse: 1, title: 'Reparto de la Tierra entre las Tribus' },
        { verse: 30, title: 'Las Puertas de la Ciudad' }
    ],
    // ============================================================
    // DANIEL (12 capítulos)
    // ============================================================
    'daniel_1': [{ verse: 1, title: 'Daniel y sus Compañeros en Babilonia' }],
    'daniel_2': [{ verse: 1, title: 'El Sueño de Nabucodonosor' }, { verse: 24, title: 'Daniel Interpreta el Sueño' }],
    'daniel_3': [{ verse: 1, title: 'El Horno de Fuego' }],
    'daniel_4': [{ verse: 1, title: 'La Locura de Nabucodonosor' }],
    'daniel_5': [{ verse: 1, title: 'La Escritura en la Pared' }],
    'daniel_6': [{ verse: 1, title: 'Daniel en el Foso de los Leones' }],
    'daniel_7': [
        { verse: 1, title: 'Visión de las Cuatro Bestias' },
        { verse: 9, title: 'El Anciano de Días y el Hijo del Hombre' }
    ],
    'daniel_8': [{ verse: 1, title: 'Visión del Carnero y el Macho Cabrío' }],
    'daniel_9': [{ verse: 1, title: 'Oración de Daniel' }, { verse: 20, title: 'Las Setenta Semanas' }],
    'daniel_10': [{ verse: 1, title: 'Visión de Daniel Junto al Río' }],
    'daniel_11': [{ verse: 1, title: 'Los Reyes del Norte y del Sur' }],
    'daniel_12': [{ verse: 1, title: 'El Tiempo del Fin' }],
    // ============================================================
    // OSEAS (14 capítulos)
    // ============================================================
    'oseas_1': [{ verse: 1, title: 'La Esposa Infiel de Oseas' }],
    'oseas_2': [
        { verse: 1, title: 'El Castigo de la Infidelidad de Israel' },
        { verse: 14, title: 'Dios Corteja a su Pueblo' }
    ],
    'oseas_3': [{ verse: 1, title: 'Oseas Redime a su Esposa' }],
    'oseas_4': [{ verse: 1, title: 'Jehová Acusa a Israel' }],
    'oseas_5': [{ verse: 1, title: 'Juicio contra Israel y Judá' }],
    'oseas_6': [{ verse: 1, title: 'Llamamiento al Arrepentimiento' }],
    'oseas_7': [{ verse: 1, title: 'La Iniquidad de Israel' }],
    'oseas_8': [{ verse: 1, title: 'Israel Siega la Tempestad' }],
    'oseas_9': [{ verse: 1, title: 'Castigo por la Idolatría de Israel' }],
    'oseas_10': [{ verse: 1, title: 'Israel, Vid Frondosa' }],
    'oseas_11': [{ verse: 1, title: 'Dios Amó a Israel desde su Niñez' }],
    'oseas_12': [{ verse: 1, title: 'La Infidelidad de Efraín' }],
    'oseas_13': [{ verse: 1, title: 'La Ira de Dios contra Israel' }],
    'oseas_14': [
        { verse: 1, title: 'Exhortación al Arrepentimiento' },
        { verse: 4, title: 'Promesa de Restauración' }
    ],
    // ============================================================
    // JOEL (3 capítulos)
    // ============================================================
    'joel_1': [{ verse: 1, title: 'La Plaga de Langostas' }, { verse: 13, title: 'Llamamiento al Arrepentimiento' }],
    'joel_2': [
        { verse: 1, title: 'El Día de Jehová' },
        { verse: 12, title: 'Llamamiento al Arrepentimiento' },
        { verse: 18, title: 'Promesa de Restauración' },
        { verse: 28, title: 'Derramamiento del Espíritu Santo' }
    ],
    'joel_3': [
        { verse: 1, title: 'Juicio de Dios sobre las Naciones' },
        { verse: 17, title: 'Bendiciones Futuras para Judá' }
    ],
    // ============================================================
    // AMÓS (9 capítulos)
    // ============================================================
    'amos_1': [{ verse: 1, title: 'Juicio contra las Naciones Vecinas' }],
    'amos_2': [
        { verse: 1, title: 'Juicio contra Moab' },
        { verse: 4, title: 'Juicio contra Judá' },
        { verse: 6, title: 'Juicio contra Israel' }
    ],
    'amos_3': [{ verse: 1, title: 'Dios Anuncia el Castigo de Israel' }],
    'amos_4': [{ verse: 1, title: 'El Castigo de Samaria' }, { verse: 6, title: 'Israel No Se Arrepiente' }],
    'amos_5': [
        { verse: 1, title: 'Lamento por Israel' },
        { verse: 14, title: 'Buscad a Jehová y Vivid' },
        { verse: 18, title: 'El Día de Jehová' }
    ],
    'amos_6': [{ verse: 1, title: 'Ay de los que Viven Confiados' }],
    'amos_7': [{ verse: 1, title: 'Tres Visiones de Juicio' }, { verse: 10, title: 'Amasías Acusa a Amós' }],
    'amos_8': [{ verse: 1, title: 'Visión de la Canasta de Fruta de Verano' }],
    'amos_9': [{ verse: 1, title: 'Juicio Inevitable' }, { verse: 11, title: 'Restauración de Israel' }],
    // ============================================================
    // ABDÍAS (1 capítulo)
    // ============================================================
    'abdias_1': [{ verse: 1, title: 'Juicio contra Edom' }, { verse: 15, title: 'El Día de Jehová' }],
    // ============================================================
    // JONÁS (4 capítulos)
    // ============================================================
    'jonas_1': [{ verse: 1, title: 'Jonás Huye de Jehová' }],
    'jonas_2': [{ verse: 1, title: 'Oración de Jonás' }],
    'jonas_3': [{ verse: 1, title: 'Nínive se Arrepiente' }],
    'jonas_4': [{ verse: 1, title: 'El Enojo de Jonás y la Misericordia de Dios' }],
    // ============================================================
    // MIQUEAS (7 capítulos)
    // ============================================================
    'miqueas_1': [{ verse: 1, title: 'Juicio contra Samaria y Jerusalén' }],
    'miqueas_2': [{ verse: 1, title: 'Ay de los Opresores' }, { verse: 12, title: 'Promesa de Restauración' }],
    'miqueas_3': [{ verse: 1, title: 'Condenación de los Líderes y Profetas' }],
    'miqueas_4': [{ verse: 1, title: 'El Reinado de Jehová en Sion' }],
    'miqueas_5': [{ verse: 1, title: 'El Gobernante Nacerá en Belén' }],
    'miqueas_6': [
        { verse: 1, title: 'La Queja de Jehová contra Israel' },
        { verse: 6, title: 'Lo que Dios Pide del Hombre' }
    ],
    'miqueas_7': [
        { verse: 1, title: 'Lamento por la Corrupción' },
        { verse: 7, title: 'Esperanza en Jehová' },
        { verse: 18, title: '¿Qué Dios como Tú?' }
    ],
    // ============================================================
    // NAHUM (3 capítulos)
    // ============================================================
    'nahum_1': [{ verse: 1, title: 'La Ira de Dios contra Nínive' }],
    'nahum_2': [{ verse: 1, title: 'La Destrucción de Nínive' }],
    'nahum_3': [{ verse: 1, title: 'Ay de Nínive, Ciudad Sanguinaria' }],
    // ============================================================
    // HABACUC (3 capítulos)
    // ============================================================
    'habacuc_1': [
        { verse: 1, title: 'La Queja de Habacuc' },
        { verse: 5, title: 'Respuesta de Dios: Los Caldeos' },
        { verse: 12, title: 'Segunda Queja de Habacuc' }
    ],
    'habacuc_2': [
        { verse: 1, title: 'El Justo por su Fe Vivirá' },
        { verse: 6, title: 'Cinco Ayes contra el Opresor' }
    ],
    'habacuc_3': [{ verse: 1, title: 'Oración de Habacuc' }],
    // ============================================================
    // SOFONÍAS (3 capítulos)
    // ============================================================
    'sofonias_1': [{ verse: 1, title: 'El Día de Jehová Está Cerca' }],
    'sofonias_2': [
        { verse: 1, title: 'Llamamiento al Arrepentimiento' },
        { verse: 4, title: 'Juicio contra las Naciones' }
    ],
    'sofonias_3': [
        { verse: 1, title: 'Ay de Jerusalén' },
        { verse: 8, title: 'El Juicio y la Restauración' },
        { verse: 14, title: 'Jehová en Medio de Ti' }
    ],
    // ============================================================
    // HAGEO (2 capítulos)
    // ============================================================
    'hageo_1': [{ verse: 1, title: 'Exhortación a Reedificar el Templo' }],
    'hageo_2': [
        { verse: 1, title: 'La Gloria del Nuevo Templo' },
        { verse: 10, title: 'Consulta a los Sacerdotes' },
        { verse: 20, title: 'Promesa a Zorobabel' }
    ],
    // ============================================================
    // ZACARÍAS (14 capítulos)
    // ============================================================
    'zacarias_1': [
        { verse: 1, title: 'Llamamiento al Arrepentimiento' },
        { verse: 7, title: 'Visión de los Caballos' },
        { verse: 18, title: 'Visión de los Cuernos y los Carpinteros' }
    ],
    'zacarias_2': [{ verse: 1, title: 'Visión del Hombre con el Cordel de Medir' }],
    'zacarias_3': [{ verse: 1, title: 'Visión del Sumo Sacerdote Josué' }],
    'zacarias_4': [{ verse: 1, title: 'Visión del Candelero de Oro y los Olivos' }],
    'zacarias_5': [{ verse: 1, title: 'Visión del Rollo Volante' }, { verse: 5, title: 'Visión de la Mujer en el Efa' }],
    'zacarias_6': [
        { verse: 1, title: 'Visión de los Cuatro Carros' },
        { verse: 9, title: 'Coronación Simbólica de Josué' }
    ],
    'zacarias_7': [{ verse: 1, title: 'El Ayuno y la Obediencia' }],
    'zacarias_8': [{ verse: 1, title: 'Promesa de Restauración para Jerusalén' }],
    'zacarias_9': [
        { verse: 1, title: 'Juicio contra las Naciones' },
        { verse: 9, title: 'El Rey Viene Montado sobre un Asno' }
    ],
    'zacarias_10': [{ verse: 1, title: 'Jehová Restaurará a su Pueblo' }],
    'zacarias_11': [{ verse: 1, title: 'Los Dos Pastores' }],
    'zacarias_12': [{ verse: 1, title: 'Liberación de Jerusalén' }, { verse: 10, title: 'Mirarán al que Traspasaron' }],
    'zacarias_13': [
        { verse: 1, title: 'La Fuente de Purificación' },
        { verse: 7, title: 'Herido el Pastor, se Dispersan las Ovejas' }
    ],
    'zacarias_14': [{ verse: 1, title: 'El Día de Jehová' }, { verse: 9, title: 'Jehová Reinará sobre Toda la Tierra' }],
    // ============================================================
    // MALAQUÍAS (4 capítulos)
    // ============================================================
    'malaquias_1': [
        { verse: 1, title: 'El Amor de Dios por Israel' },
        { verse: 6, title: 'Reprensión a los Sacerdotes' }
    ],
    'malaquias_2': [
        { verse: 1, title: 'Advertencia a los Sacerdotes' },
        { verse: 10, title: 'La Infidelidad del Pueblo' }
    ],
    'malaquias_3': [
        { verse: 1, title: 'El Mensajero de Jehová' },
        { verse: 6, title: 'Los Diezmos' },
        { verse: 13, title: 'El Día del Juicio' }
    ],
    'malaquias_4': [{ verse: 1, title: 'El Día de Jehová' }, { verse: 4, title: 'Elías Vendrá Antes del Día de Jehová' }],
    // ============================================================
    // MATEO (28 capítulos)
    // ============================================================
    'mateo_1': [{ verse: 1, title: 'Genealogía de Jesucristo' }, { verse: 18, title: 'Nacimiento de Jesucristo' }],
    'mateo_2': [
        { verse: 1, title: 'La Visita de los Magos' },
        { verse: 13, title: 'La Huida a Egipto' },
        { verse: 16, title: 'Matanza de los Inocentes' },
        { verse: 19, title: 'Regreso a Nazaret' }
    ],
    'mateo_3': [
        { verse: 1, title: 'Juan el Bautista Prepara el Camino' },
        { verse: 13, title: 'El Bautismo de Jesús' }
    ],
    'mateo_4': [
        { verse: 1, title: 'La Tentación de Jesús' },
        { verse: 12, title: 'Jesús Comienza su Ministerio en Galilea' },
        { verse: 18, title: 'Llamamiento de los Primeros Discípulos' }
    ],
    'mateo_5': [
        { verse: 1, title: 'El Sermón del Monte: Las Bienaventuranzas' },
        { verse: 13, title: 'La Sal de la Tierra y la Luz del Mundo' },
        { verse: 17, title: 'Jesús y la Ley' },
        { verse: 21, title: 'Jesús Enseña sobre la Ira, el Adulterio y el Juramento' },
        { verse: 38, title: 'El Amor a los Enemigos' }
    ],
    'mateo_6': [
        { verse: 1, title: 'La Limosna' },
        { verse: 5, title: 'La Oración y el Padre Nuestro' },
        { verse: 16, title: 'El Ayuno' },
        { verse: 19, title: 'Tesoros en el Cielo' },
        { verse: 25, title: 'No os Afanéis' }
    ],
    'mateo_7': [
        { verse: 1, title: 'No Juzguéis' },
        { verse: 7, title: 'Pedid y se Os Dará' },
        { verse: 13, title: 'La Puerta Estrecha' },
        { verse: 15, title: 'Por sus Frutos los Conoceréis' },
        { verse: 24, title: 'Los Dos Cimientos' }
    ],
    'mateo_8': [
        { verse: 1, title: 'Jesús Sana a un Leproso' },
        { verse: 5, title: 'La Fe del Centurión' },
        { verse: 14, title: 'Jesús Sana a la Suegra de Pedro' },
        { verse: 18, title: 'El Precio de Seguir a Jesús' },
        { verse: 23, title: 'Jesús Calma la Tempestad' },
        { verse: 28, title: 'Los Endemoniados Gadarenos' }
    ],
    'mateo_9': [
        { verse: 1, title: 'Jesús Sana a un Paralítico' },
        { verse: 9, title: 'Llamamiento de Mateo' },
        { verse: 14, title: 'La Pregunta sobre el Ayuno' },
        { verse: 18, title: 'La Hija de Jairo y la Mujer con Flujo de Sangre' },
        { verse: 27, title: 'Jesús Sana a Dos Ciegos' },
        { verse: 35, title: 'La Mies es Mucha' }
    ],
    'mateo_10': [
        { verse: 1, title: 'Envío de los Doce Apóstoles' },
        { verse: 16, title: 'Persecuciones Venideras' },
        { verse: 26, title: 'A Quién se Debe Temer' },
        { verse: 34, title: 'No Vine para Traer Paz, sino Espada' }
    ],
    'mateo_11': [
        { verse: 1, title: 'Los Mensajeros de Juan el Bautista' },
        { verse: 20, title: 'Ayes contra las Ciudades Impenitentes' },
        { verse: 25, title: 'Venid a Mí los que Estáis Trabajados' }
    ],
    'mateo_12': [
        { verse: 1, title: 'Los Discípulos Recogen Espigas en Sábado' },
        { verse: 9, title: 'El Hombre de la Mano Seca' },
        { verse: 22, title: 'La Blasfemia contra el Espíritu Santo' },
        { verse: 38, title: 'La Señal de Jonás' },
        { verse: 46, title: 'La Madre y los Hermanos de Jesús' }
    ],
    'mateo_13': [
        { verse: 1, title: 'Parábola del Sembrador' },
        { verse: 24, title: 'Parábola del Trigo y la Cizaña' },
        { verse: 31, title: 'Parábola del Grano de Mostaza' },
        { verse: 33, title: 'Parábola de la Levadura' },
        { verse: 44, title: 'Parábolas del Tesoro, la Perla y la Red' },
        { verse: 53, title: 'Jesús en Nazaret' }
    ],
    'mateo_14': [
        { verse: 1, title: 'Muerte de Juan el Bautista' },
        { verse: 13, title: 'Alimentación de los Cinco Mil' },
        { verse: 22, title: 'Jesús Camina sobre el Mar' }
    ],
    'mateo_15': [
        { verse: 1, title: 'La Tradición de los Ancianos' },
        { verse: 10, title: 'Lo que Contamina al Hombre' },
        { verse: 21, title: 'La Fe de la Mujer Cananea' },
        { verse: 32, title: 'Alimentación de los Cuatro Mil' }
    ],
    'mateo_16': [
        { verse: 1, title: 'La Señal de los Tiempos' },
        { verse: 5, title: 'La Levadura de los Fariseos' },
        { verse: 13, title: 'La Confesión de Pedro' },
        { verse: 21, title: 'Jesús Anuncia su Muerte' }
    ],
    'mateo_17': [
        { verse: 1, title: 'La Transfiguración' },
        { verse: 14, title: 'Jesús Sana a un Muchacho Lunático' },
        { verse: 22, title: 'Jesús Anuncia su Muerte Otra Vez' },
        { verse: 24, title: 'El Impuesto del Templo' }
    ],
    'mateo_18': [
        { verse: 1, title: '¿Quién es el Mayor en el Reino?' },
        { verse: 10, title: 'Parábola de la Oveja Perdida' },
        { verse: 15, title: 'Si Tu Hermano Peca contra Ti' },
        { verse: 21, title: 'Parábola del Siervo que No Perdonó' }
    ],
    'mateo_19': [
        { verse: 1, title: 'Jesús Enseña sobre el Divorcio' },
        { verse: 13, title: 'Jesús Bendice a los Niños' },
        { verse: 16, title: 'El Joven Rico' }
    ],
    'mateo_20': [
        { verse: 1, title: 'Parábola de los Obreros de la Viña' },
        { verse: 17, title: 'Jesús Anuncia su Muerte por Tercera Vez' },
        { verse: 20, title: 'Petición de la Madre de Jacobo y Juan' },
        { verse: 29, title: 'Dos Ciegos de Jericó' }
    ],
    'mateo_21': [
        { verse: 1, title: 'La Entrada Triunfal en Jerusalén' },
        { verse: 12, title: 'Purificación del Templo' },
        { verse: 18, title: 'La Higuera Maldecida' },
        { verse: 23, title: 'La Autoridad de Jesús' },
        { verse: 28, title: 'Parábola de los Dos Hijos' },
        { verse: 33, title: 'Parábola de los Labradores Malvados' }
    ],
    'mateo_22': [
        { verse: 1, title: 'Parábola de la Fiesta de Bodas' },
        { verse: 15, title: 'El Tributo al César' },
        { verse: 23, title: 'La Pregunta sobre la Resurrección' },
        { verse: 34, title: 'El Gran Mandamiento' },
        { verse: 41, title: '¿De Quién es Hijo el Cristo?' }
    ],
    'mateo_23': [
        { verse: 1, title: 'Jesús Acusa a los Escribas y Fariseos' },
        { verse: 37, title: 'Lamento sobre Jerusalén' }
    ],
    'mateo_24': [
        { verse: 1, title: 'Jesús Predice la Destrucción del Templo' },
        { verse: 3, title: 'Señales del Fin' },
        { verse: 29, title: 'La Venida del Hijo del Hombre' },
        { verse: 36, title: 'Nadie Sabe el Día ni la Hora' }
    ],
    'mateo_25': [
        { verse: 1, title: 'Parábola de las Diez Vírgenes' },
        { verse: 14, title: 'Parábola de los Talentos' },
        { verse: 31, title: 'El Juicio de las Naciones' }
    ],
    'mateo_26': [
        { verse: 1, title: 'Complot contra Jesús' },
        { verse: 6, title: 'Jesús es Ungido en Betania' },
        { verse: 17, title: 'La Última Cena' },
        { verse: 36, title: 'Getsemaní' },
        { verse: 47, title: 'Arresto de Jesús' },
        { verse: 57, title: 'Jesús ante el Concilio' },
        { verse: 69, title: 'Pedro Niega a Jesús' }
    ],
    'mateo_27': [
        { verse: 1, title: 'Jesús ante Pilato' },
        { verse: 3, title: 'Muerte de Judas' },
        { verse: 15, title: 'Jesús o Barrabás' },
        { verse: 27, title: 'Los Soldados se Burlan de Jesús' },
        { verse: 32, title: 'La Crucifixión' },
        { verse: 45, title: 'Muerte de Jesús' },
        { verse: 57, title: 'La Sepultura de Jesús' }
    ],
    'mateo_28': [{ verse: 1, title: 'La Resurrección' }, { verse: 16, title: 'La Gran Comisión' }],
    // ============================================================
    // MARCOS (16 capítulos)
    // ============================================================
    'marcos_1': [
        { verse: 1, title: 'Juan el Bautista Prepara el Camino' },
        { verse: 9, title: 'El Bautismo de Jesús' },
        { verse: 12, title: 'La Tentación de Jesús' },
        { verse: 14, title: 'Jesús Comienza su Ministerio' },
        { verse: 16, title: 'Llamamiento de los Primeros Discípulos' },
        { verse: 21, title: 'Jesús Enseña con Autoridad' },
        { verse: 29, title: 'Jesús Sana a Muchos' },
        { verse: 40, title: 'Jesús Sana a un Leproso' }
    ],
    'marcos_2': [
        { verse: 1, title: 'Jesús Sana a un Paralítico' },
        { verse: 13, title: 'Llamamiento de Leví' },
        { verse: 18, title: 'La Pregunta sobre el Ayuno' },
        { verse: 23, title: 'Los Discípulos Recogen Espigas en Sábado' }
    ],
    'marcos_3': [
        { verse: 1, title: 'El Hombre de la Mano Seca' },
        { verse: 7, title: 'La Multitud Sigue a Jesús' },
        { verse: 13, title: 'Elección de los Doce' },
        { verse: 20, title: 'La Blasfemia contra el Espíritu Santo' },
        { verse: 31, title: 'La Madre y los Hermanos de Jesús' }
    ],
    'marcos_4': [
        { verse: 1, title: 'Parábola del Sembrador' },
        { verse: 21, title: 'Parábola de la Lámpara' },
        { verse: 26, title: 'Parábola de la Semilla que Crece' },
        { verse: 30, title: 'Parábola del Grano de Mostaza' },
        { verse: 35, title: 'Jesús Calma la Tempestad' }
    ],
    'marcos_5': [
        { verse: 1, title: 'El Endemoniado Gadareno' },
        { verse: 21, title: 'La Hija de Jairo y la Mujer con Flujo de Sangre' }
    ],
    'marcos_6': [
        { verse: 1, title: 'Jesús en Nazaret' },
        { verse: 7, title: 'Envío de los Doce' },
        { verse: 14, title: 'Muerte de Juan el Bautista' },
        { verse: 30, title: 'Alimentación de los Cinco Mil' },
        { verse: 45, title: 'Jesús Camina sobre el Mar' }
    ],
    'marcos_7': [
        { verse: 1, title: 'La Tradición de los Ancianos' },
        { verse: 14, title: 'Lo que Contamina al Hombre' },
        { verse: 24, title: 'La Fe de la Mujer Sirofenicia' },
        { verse: 31, title: 'Jesús Sana a un Sordomudo' }
    ],
    'marcos_8': [
        { verse: 1, title: 'Alimentación de los Cuatro Mil' },
        { verse: 11, title: 'La Señal de los Fariseos' },
        { verse: 22, title: 'Jesús Sana a un Ciego en Betsaida' },
        { verse: 27, title: 'La Confesión de Pedro' },
        { verse: 31, title: 'Jesús Anuncia su Muerte' }
    ],
    'marcos_9': [
        { verse: 1, title: 'La Transfiguración' },
        { verse: 14, title: 'Jesús Sana a un Muchacho Endemoniado' },
        { verse: 30, title: 'Jesús Anuncia su Muerte Otra Vez' },
        { verse: 33, title: '¿Quién es el Mayor?' },
        { verse: 42, title: 'Ocasiones de Caer' }
    ],
    'marcos_10': [
        { verse: 1, title: 'Jesús Enseña sobre el Divorcio' },
        { verse: 13, title: 'Jesús Bendice a los Niños' },
        { verse: 17, title: 'El Joven Rico' },
        { verse: 32, title: 'Jesús Anuncia su Muerte por Tercera Vez' },
        { verse: 35, title: 'Petición de Jacobo y Juan' },
        { verse: 46, title: 'El Ciego Bartimeo' }
    ],
    'marcos_11': [
        { verse: 1, title: 'La Entrada Triunfal en Jerusalén' },
        { verse: 12, title: 'La Higuera Maldecida' },
        { verse: 15, title: 'Purificación del Templo' },
        { verse: 27, title: 'La Autoridad de Jesús' }
    ],
    'marcos_12': [
        { verse: 1, title: 'Parábola de los Labradores Malvados' },
        { verse: 13, title: 'El Tributo al César' },
        { verse: 18, title: 'La Pregunta sobre la Resurrección' },
        { verse: 28, title: 'El Gran Mandamiento' },
        { verse: 35, title: '¿De Quién es Hijo el Cristo?' },
        { verse: 38, title: 'Jesús Acusa a los Escribas' },
        { verse: 41, title: 'La Ofrenda de la Viuda' }
    ],
    'marcos_13': [
        { verse: 1, title: 'Jesús Predice la Destrucción del Templo' },
        { verse: 3, title: 'Señales del Fin' },
        { verse: 24, title: 'La Venida del Hijo del Hombre' },
        { verse: 32, title: 'Nadie Sabe el Día ni la Hora' }
    ],
    'marcos_14': [
        { verse: 1, title: 'Complot contra Jesús' },
        { verse: 3, title: 'Jesús es Ungido en Betania' },
        { verse: 12, title: 'La Última Cena' },
        { verse: 32, title: 'Getsemaní' },
        { verse: 43, title: 'Arresto de Jesús' },
        { verse: 53, title: 'Jesús ante el Concilio' },
        { verse: 66, title: 'Pedro Niega a Jesús' }
    ],
    'marcos_15': [
        { verse: 1, title: 'Jesús ante Pilato' },
        { verse: 6, title: 'Jesús o Barrabás' },
        { verse: 16, title: 'Los Soldados se Burlan de Jesús' },
        { verse: 21, title: 'La Crucifixión' },
        { verse: 33, title: 'Muerte de Jesús' },
        { verse: 42, title: 'La Sepultura de Jesús' }
    ],
    'marcos_16': [
        { verse: 1, title: 'La Resurrección' },
        { verse: 9, title: 'Jesús Se Aparece a María Magdalena' },
        { verse: 14, title: 'La Gran Comisión' },
        { verse: 19, title: 'La Ascensión' }
    ],
    // ============================================================
    // LUCAS (24 capítulos)
    // ============================================================
    'lucas_1': [
        { verse: 1, title: 'Prólogo' },
        { verse: 5, title: 'Anuncio del Nacimiento de Juan' },
        { verse: 26, title: 'Anuncio del Nacimiento de Jesús' },
        { verse: 39, title: 'María Visita a Elisabet' },
        { verse: 46, title: 'El Cántico de María' },
        { verse: 57, title: 'Nacimiento de Juan el Bautista' },
        { verse: 67, title: 'Profecía de Zacarías' }
    ],
    'lucas_2': [
        { verse: 1, title: 'Nacimiento de Jesús' },
        { verse: 8, title: 'Los Pastores y los Ángeles' },
        { verse: 21, title: 'Presentación de Jesús en el Templo' },
        { verse: 25, title: 'Simeón y Ana' },
        { verse: 41, title: 'El Niño Jesús en el Templo' }
    ],
    'lucas_3': [
        { verse: 1, title: 'Predicación de Juan el Bautista' },
        { verse: 21, title: 'El Bautismo de Jesús' },
        { verse: 23, title: 'Genealogía de Jesucristo' }
    ],
    'lucas_4': [
        { verse: 1, title: 'La Tentación de Jesús' },
        { verse: 14, title: 'Jesús en la Sinagoga de Nazaret' },
        { verse: 31, title: 'Jesús Enseña en Capernaum' },
        { verse: 38, title: 'Jesús Sana a la Suegra de Pedro' }
    ],
    'lucas_5': [
        { verse: 1, title: 'La Pesca Milagrosa' },
        { verse: 12, title: 'Jesús Sana a un Leproso' },
        { verse: 17, title: 'Jesús Sana a un Paralítico' },
        { verse: 27, title: 'Llamamiento de Leví' }
    ],
    'lucas_6': [
        { verse: 1, title: 'Los Discípulos Recogen Espigas en Sábado' },
        { verse: 6, title: 'El Hombre de la Mano Seca' },
        { verse: 12, title: 'Elección de los Doce' },
        { verse: 17, title: 'El Sermón del Llano' },
        { verse: 20, title: 'Bienaventuranzas y Ayes' },
        { verse: 27, title: 'El Amor a los Enemigos' },
        { verse: 37, title: 'No Juzguéis' },
        { verse: 46, title: 'Los Dos Cimientos' }
    ],
    'lucas_7': [
        { verse: 1, title: 'La Fe del Centurión' },
        { verse: 11, title: 'Jesús Resucita al Hijo de la Viuda de Naín' },
        { verse: 18, title: 'Los Mensajeros de Juan el Bautista' },
        { verse: 36, title: 'Jesús en Casa de Simón el Fariseo' }
    ],
    'lucas_8': [
        { verse: 1, title: 'Mujeres que Servían a Jesús' },
        { verse: 4, title: 'Parábola del Sembrador' },
        { verse: 22, title: 'Jesús Calma la Tempestad' },
        { verse: 26, title: 'El Endemoniado Gadareno' },
        { verse: 40, title: 'La Hija de Jairo y la Mujer con Flujo de Sangre' }
    ],
    'lucas_9': [
        { verse: 1, title: 'Envío de los Doce' },
        { verse: 7, title: 'Herodes y Jesús' },
        { verse: 10, title: 'Alimentación de los Cinco Mil' },
        { verse: 18, title: 'La Confesión de Pedro' },
        { verse: 22, title: 'Jesús Anuncia su Muerte' },
        { verse: 28, title: 'La Transfiguración' },
        { verse: 37, title: 'Jesús Sana a un Muchacho Endemoniado' },
        { verse: 46, title: '¿Quién es el Mayor?' },
        { verse: 51, title: 'Jesús se Dirige a Jerusalén' }
    ],
    'lucas_10': [
        { verse: 1, title: 'Envío de los Setenta' },
        { verse: 17, title: 'Regreso de los Setenta' },
        { verse: 25, title: 'El Buen Samaritano' },
        { verse: 38, title: 'Jesús en Casa de Marta y María' }
    ],
    'lucas_11': [
        { verse: 1, title: 'Jesús Enseña a Orar' },
        { verse: 14, title: 'Una Casa Dividida' },
        { verse: 29, title: 'La Señal de Jonás' },
        { verse: 37, title: 'Jesús Acusa a los Fariseos' }
    ],
    'lucas_12': [
        { verse: 1, title: 'La Levadura de los Fariseos' },
        { verse: 4, title: 'A Quién se Debe Temer' },
        { verse: 13, title: 'Parábola del Rico Insensato' },
        { verse: 22, title: 'No os Afanéis' },
        { verse: 35, title: 'Estad Preparados' },
        { verse: 49, title: 'Jesús, Causa de División' }
    ],
    'lucas_13': [
        { verse: 1, title: 'Arrepentíos o Pereceréis' },
        { verse: 6, title: 'Parábola de la Higuera Estéril' },
        { verse: 10, title: 'Jesús Sana a una Mujer en Sábado' },
        { verse: 18, title: 'Parábolas del Grano de Mostaza y la Levadura' },
        { verse: 22, title: 'La Puerta Estrecha' },
        { verse: 31, title: 'Lamento sobre Jerusalén' }
    ],
    'lucas_14': [
        { verse: 1, title: 'Jesús Sana a un Hidrópico en Sábado' },
        { verse: 7, title: 'Los Convidados a las Bodas' },
        { verse: 15, title: 'Parábola de la Gran Cena' },
        { verse: 25, title: 'El Costo de Ser Discípulo' }
    ],
    'lucas_15': [
        { verse: 1, title: 'Parábola de la Oveja Perdida' },
        { verse: 8, title: 'Parábola de la Moneda Perdida' },
        { verse: 11, title: 'Parábola del Hijo Pródigo' }
    ],
    'lucas_16': [{ verse: 1, title: 'Parábola del Mayordomo Infiel' }, { verse: 19, title: 'El Rico y Lázaro' }],
    'lucas_17': [
        { verse: 1, title: 'Ocasiones de Caer' },
        { verse: 5, title: 'El Poder de la Fe' },
        { verse: 7, title: 'Siervos Inútiles' },
        { verse: 11, title: 'Jesús Sana a Diez Leprosos' },
        { verse: 20, title: 'La Venida del Reino de Dios' }
    ],
    'lucas_18': [
        { verse: 1, title: 'Parábola de la Viuda y el Juez Injusto' },
        { verse: 9, title: 'Parábola del Fariseo y el Publicano' },
        { verse: 15, title: 'Jesús Bendice a los Niños' },
        { verse: 18, title: 'El Joven Rico' },
        { verse: 31, title: 'Jesús Anuncia su Muerte por Tercera Vez' },
        { verse: 35, title: 'Un Ciego de Jericó' }
    ],
    'lucas_19': [
        { verse: 1, title: 'Jesús y Zaqueo' },
        { verse: 11, title: 'Parábola de las Diez Minas' },
        { verse: 28, title: 'La Entrada Triunfal en Jerusalén' },
        { verse: 41, title: 'Jesús Llora sobre Jerusalén' },
        { verse: 45, title: 'Purificación del Templo' }
    ],
    'lucas_20': [
        { verse: 1, title: 'La Autoridad de Jesús' },
        { verse: 9, title: 'Parábola de los Labradores Malvados' },
        { verse: 19, title: 'El Tributo al César' },
        { verse: 27, title: 'La Pregunta sobre la Resurrección' },
        { verse: 41, title: '¿De Quién es Hijo el Cristo?' }
    ],
    'lucas_21': [
        { verse: 1, title: 'La Ofrenda de la Viuda' },
        { verse: 5, title: 'Jesús Predice la Destrucción del Templo' },
        { verse: 7, title: 'Señales del Fin' },
        { verse: 25, title: 'La Venida del Hijo del Hombre' }
    ],
    'lucas_22': [
        { verse: 1, title: 'Complot contra Jesús' },
        { verse: 7, title: 'La Última Cena' },
        { verse: 24, title: '¿Quién es el Mayor?' },
        { verse: 39, title: 'Getsemaní' },
        { verse: 47, title: 'Arresto de Jesús' },
        { verse: 54, title: 'Pedro Niega a Jesús' },
        { verse: 63, title: 'Jesús ante el Concilio' }
    ],
    'lucas_23': [
        { verse: 1, title: 'Jesús ante Pilato' },
        { verse: 6, title: 'Jesús ante Herodes' },
        { verse: 13, title: 'Jesús o Barrabás' },
        { verse: 26, title: 'La Crucifixión' },
        { verse: 44, title: 'Muerte de Jesús' },
        { verse: 50, title: 'La Sepultura de Jesús' }
    ],
    'lucas_24': [
        { verse: 1, title: 'La Resurrección' },
        { verse: 13, title: 'En el Camino a Emaús' },
        { verse: 36, title: 'Jesús Se Aparece a los Discípulos' },
        { verse: 50, title: 'La Ascensión' }
    ],
    // ============================================================
    // JUAN (21 capítulos)
    // ============================================================
    'juan_1': [
        { verse: 1, title: 'El Verbo Hecho Carne' },
        { verse: 19, title: 'Testimonio de Juan el Bautista' },
        { verse: 35, title: 'Los Primeros Discípulos' },
        { verse: 43, title: 'Jesús Llama a Felipe y Natanael' }
    ],
    'juan_2': [{ verse: 1, title: 'Las Bodas de Caná' }, { verse: 13, title: 'Purificación del Templo' }],
    'juan_3': [
        { verse: 1, title: 'Jesús y Nicodemo' },
        { verse: 16, title: 'De Tal Manera Amó Dios al Mundo' },
        { verse: 22, title: 'El Amigo del Esposo' }
    ],
    'juan_4': [
        { verse: 1, title: 'Jesús y la Mujer Samaritana' },
        { verse: 27, title: 'La Cosecha Espiritual' },
        { verse: 43, title: 'Jesús Sana al Hijo de un Noble' }
    ],
    'juan_5': [
        { verse: 1, title: 'Jesús Sana al Paralítico de Betesda' },
        { verse: 16, title: 'La Autoridad del Hijo' },
        { verse: 31, title: 'Testimonios sobre Jesús' }
    ],
    'juan_6': [
        { verse: 1, title: 'Alimentación de los Cinco Mil' },
        { verse: 16, title: 'Jesús Camina sobre el Mar' },
        { verse: 22, title: 'Jesús, el Pan de Vida' },
        { verse: 60, title: 'Muchos Discípulos Abandonan a Jesús' }
    ],
    'juan_7': [
        { verse: 1, title: 'Jesús en la Fiesta de los Tabernáculos' },
        { verse: 14, title: 'Jesús Enseña en el Templo' },
        { verse: 37, title: 'Ríos de Agua Viva' },
        { verse: 40, title: 'División entre el Pueblo' }
    ],
    'juan_8': [
        { verse: 1, title: 'La Mujer Adúltera' },
        { verse: 12, title: 'Jesús, la Luz del Mundo' },
        { verse: 21, title: 'Jesús y Abraham' },
        { verse: 31, title: 'La Verdad Os Hará Libres' }
    ],
    'juan_9': [
        { verse: 1, title: 'Jesús Sana a un Ciego de Nacimiento' },
        { verse: 13, title: 'Los Fariseos Interrogan al Ciego' }
    ],
    'juan_10': [{ verse: 1, title: 'El Buen Pastor' }, { verse: 22, title: 'Los Judíos Rechazan a Jesús' }],
    'juan_11': [
        { verse: 1, title: 'Muerte de Lázaro' },
        { verse: 17, title: 'Jesús, la Resurrección y la Vida' },
        { verse: 38, title: 'Jesús Resucita a Lázaro' },
        { verse: 45, title: 'Complot para Matar a Jesús' }
    ],
    'juan_12': [
        { verse: 1, title: 'Jesús es Ungido en Betania' },
        { verse: 12, title: 'La Entrada Triunfal en Jerusalén' },
        { verse: 20, title: 'Jesús Anuncia su Muerte' },
        { verse: 37, title: 'Incredulidad de los Judíos' }
    ],
    'juan_13': [
        { verse: 1, title: 'Jesús Lava los Pies a sus Discípulos' },
        { verse: 18, title: 'Jesús Anuncia la Traición de Judas' },
        { verse: 31, title: 'El Nuevo Mandamiento' },
        { verse: 36, title: 'Jesús Anuncia la Negación de Pedro' }
    ],
    'juan_14': [
        { verse: 1, title: 'Jesús, el Camino, la Verdad y la Vida' },
        { verse: 15, title: 'La Promesa del Espíritu Santo' },
        { verse: 27, title: 'La Paz de Jesús' }
    ],
    'juan_15': [
        { verse: 1, title: 'La Vid Verdadera' },
        { verse: 9, title: 'Permaneced en Mi Amor' },
        { verse: 18, title: 'El Odio del Mundo' }
    ],
    'juan_16': [
        { verse: 1, title: 'La Obra del Espíritu Santo' },
        { verse: 16, title: 'La Tristeza se Convertirá en Gozo' },
        { verse: 25, title: 'Yo He Vencido al Mundo' }
    ],
    'juan_17': [
        { verse: 1, title: 'Jesús Ora por Sí Mismo' },
        { verse: 6, title: 'Jesús Ora por sus Discípulos' },
        { verse: 20, title: 'Jesús Ora por Todos los Creyentes' }
    ],
    'juan_18': [
        { verse: 1, title: 'Arresto de Jesús' },
        { verse: 12, title: 'Jesús ante Anás y Caifás' },
        { verse: 15, title: 'Pedro Niega a Jesús' },
        { verse: 28, title: 'Jesús ante Pilato' }
    ],
    'juan_19': [
        { verse: 1, title: 'Jesús es Azotado y Condenado' },
        { verse: 17, title: 'La Crucifixión' },
        { verse: 28, title: 'Muerte de Jesús' },
        { verse: 38, title: 'La Sepultura de Jesús' }
    ],
    'juan_20': [
        { verse: 1, title: 'La Resurrección' },
        { verse: 11, title: 'Jesús Se Aparece a María Magdalena' },
        { verse: 19, title: 'Jesús Se Aparece a los Discípulos' },
        { verse: 24, title: 'Jesús y Tomás' }
    ],
    'juan_21': [
        { verse: 1, title: 'Jesús Se Aparece a Siete Discípulos' },
        { verse: 15, title: 'Apacienta Mis Ovejas' }
    ],
    // ============================================================
    // HECHOS (28 capítulos)
    // ============================================================
    'hechos_1': [{ verse: 1, title: 'La Ascensión de Jesús' }, { verse: 12, title: 'Elección de Matías' }],
    'hechos_2': [
        { verse: 1, title: 'La Venida del Espíritu Santo' },
        { verse: 14, title: 'El Sermón de Pedro' },
        { verse: 37, title: 'Los Primeros Convertidos' },
        { verse: 42, title: 'La Vida de los Primeros Cristianos' }
    ],
    'hechos_3': [
        { verse: 1, title: 'Un Cojo es Sanado' },
        { verse: 11, title: 'Discurso de Pedro en el Pórtico de Salomón' }
    ],
    'hechos_4': [
        { verse: 1, title: 'Pedro y Juan ante el Concilio' },
        { verse: 23, title: 'Oración de los Creyentes' },
        { verse: 32, title: 'Todas las Cosas en Común' }
    ],
    'hechos_5': [
        { verse: 1, title: 'Ananías y Safira' },
        { verse: 12, title: 'Señales y Prodigios de los Apóstoles' },
        { verse: 17, title: 'Los Apóstoles son Perseguidos' }
    ],
    'hechos_6': [{ verse: 1, title: 'Elección de los Siete Diáconos' }, { verse: 8, title: 'Arresto de Esteban' }],
    'hechos_7': [{ verse: 1, title: 'Discurso de Esteban' }, { verse: 54, title: 'Martirio de Esteban' }],
    'hechos_8': [
        { verse: 1, title: 'Saulo Persigue a la Iglesia' },
        { verse: 4, title: 'Felipe Predica en Samaria' },
        { verse: 9, title: 'Simón el Mago' },
        { verse: 26, title: 'Felipe y el Etíope' }
    ],
    'hechos_9': [
        { verse: 1, title: 'Conversión de Saulo' },
        { verse: 19, title: 'Saulo Predica en Damasco' },
        { verse: 26, title: 'Saulo en Jerusalén' },
        { verse: 32, title: 'Pedro Sana a Eneas y Resucita a Dorcas' }
    ],
    'hechos_10': [
        { verse: 1, title: 'Pedro y Cornelio' },
        { verse: 34, title: 'Pedro Predica a los Gentiles' },
        { verse: 44, title: 'Los Gentiles Reciben el Espíritu Santo' }
    ],
    'hechos_11': [
        { verse: 1, title: 'Pedro Explica su Visita a los Gentiles' },
        { verse: 19, title: 'La Iglesia en Antioquía' }
    ],
    'hechos_12': [{ verse: 1, title: 'Pedro es Encarcelado y Liberado' }, { verse: 20, title: 'Muerte de Herodes' }],
    'hechos_13': [
        { verse: 1, title: 'Bernabé y Saulo son Enviados' },
        { verse: 4, title: 'Primer Viaje Misionero: Chipre' },
        { verse: 13, title: 'Pablo Predica en Antioquía de Pisidia' }
    ],
    'hechos_14': [
        { verse: 1, title: 'Pablo y Bernabé en Iconio' },
        { verse: 8, title: 'Pablo y Bernabé en Listra y Derbe' },
        { verse: 21, title: 'Regreso a Antioquía de Siria' }
    ],
    'hechos_15': [
        { verse: 1, title: 'El Concilio de Jerusalén' },
        { verse: 22, title: 'La Carta a los Gentiles' },
        { verse: 36, title: 'Separación de Pablo y Bernabé' }
    ],
    'hechos_16': [
        { verse: 1, title: 'Timoteo se Une a Pablo y Silas' },
        { verse: 6, title: 'La Visión del Varón Macedonio' },
        { verse: 11, title: 'Conversión de Lidia' },
        { verse: 16, title: 'Pablo y Silas en la Cárcel' }
    ],
    'hechos_17': [
        { verse: 1, title: 'Pablo en Tesalónica' },
        { verse: 10, title: 'Pablo en Berea' },
        { verse: 16, title: 'Pablo en Atenas' },
        { verse: 22, title: 'Discurso en el Areópago' }
    ],
    'hechos_18': [
        { verse: 1, title: 'Pablo en Corinto' },
        { verse: 18, title: 'Pablo Regresa a Antioquía' },
        { verse: 24, title: 'Apolos en Éfeso' }
    ],
    'hechos_19': [
        { verse: 1, title: 'Pablo en Éfeso' },
        { verse: 11, title: 'Los Hijos de Esceva' },
        { verse: 21, title: 'El Alboroto en Éfeso' }
    ],
    'hechos_20': [
        { verse: 1, title: 'Pablo en Macedonia y Grecia' },
        { verse: 7, title: 'Eutico Resucitado' },
        { verse: 17, title: 'Discurso de Pablo a los Ancianos de Éfeso' }
    ],
    'hechos_21': [
        { verse: 1, title: 'Viaje de Pablo a Jerusalén' },
        { verse: 17, title: 'Pablo Llega a Jerusalén' },
        { verse: 27, title: 'Pablo es Arrestado en el Templo' }
    ],
    'hechos_22': [
        { verse: 1, title: 'Defensa de Pablo ante el Pueblo' },
        { verse: 22, title: 'Pablo Revela su Ciudadanía Romana' }
    ],
    'hechos_23': [
        { verse: 1, title: 'Pablo ante el Concilio' },
        { verse: 12, title: 'Complot contra Pablo' },
        { verse: 23, title: 'Pablo es Enviado a Cesarea' }
    ],
    'hechos_24': [{ verse: 1, title: 'Pablo ante Félix' }],
    'hechos_25': [{ verse: 1, title: 'Pablo Apela al César' }, { verse: 13, title: 'Pablo ante Agripa' }],
    'hechos_26': [{ verse: 1, title: 'Defensa de Pablo ante Agripa' }],
    'hechos_27': [
        { verse: 1, title: 'Pablo Navega hacia Roma' },
        { verse: 13, title: 'La Tempestad en el Mar' },
        { verse: 39, title: 'El Naufragio' }
    ],
    'hechos_28': [
        { verse: 1, title: 'Pablo en la Isla de Malta' },
        { verse: 11, title: 'Pablo Llega a Roma' },
        { verse: 17, title: 'Pablo Predica en Roma' }
    ],
    // ============================================================
    // ROMANOS (16 capítulos)
    // ============================================================
    'romanos_1': [
        { verse: 1, title: 'Saludo de Pablo' },
        { verse: 8, title: 'Deseo de Pablo de Visitar Roma' },
        { verse: 16, title: 'El Justo por la Fe Vivirá' },
        { verse: 18, title: 'La Culpa de la Humanidad' }
    ],
    'romanos_2': [{ verse: 1, title: 'El Juicio Justo de Dios' }, { verse: 17, title: 'Los Judíos y la Ley' }],
    'romanos_3': [
        { verse: 1, title: 'La Fidelidad de Dios' },
        { verse: 9, title: 'No Hay Justo' },
        { verse: 21, title: 'La Justificación por la Fe' }
    ],
    'romanos_4': [{ verse: 1, title: 'El Ejemplo de Abraham' }],
    'romanos_5': [{ verse: 1, title: 'Resultados de la Justificación' }, { verse: 12, title: 'Adán y Cristo' }],
    'romanos_6': [{ verse: 1, title: 'Muertos al Pecado' }, { verse: 15, title: 'Siervos de la Justicia' }],
    'romanos_7': [{ verse: 1, title: 'Analogía del Matrimonio' }, { verse: 7, title: 'La Lucha contra el Pecado' }],
    'romanos_8': [
        { verse: 1, title: 'La Vida en el Espíritu' },
        { verse: 18, title: 'La Gloria Venidera' },
        { verse: 28, title: 'Más que Vencedores' }
    ],
    'romanos_9': [
        { verse: 1, title: 'El Dolor de Pablo por Israel' },
        { verse: 6, title: 'La Elección Soberana de Dios' }
    ],
    'romanos_10': [{ verse: 1, title: 'La Salvación es para Todos' }, { verse: 14, title: 'La Fe Viene por el Oír' }],
    'romanos_11': [
        { verse: 1, title: 'El Remanente de Israel' },
        { verse: 11, title: 'El Olivo Silvestre y el Natural' },
        { verse: 25, title: 'La Salvación de Todo Israel' },
        { verse: 33, title: 'La Sabiduría de Dios' }
    ],
    'romanos_12': [
        { verse: 1, title: 'Sacrificios Vivos' },
        { verse: 3, title: 'Los Dones del Cuerpo de Cristo' },
        { verse: 9, title: 'Deberes Cristianos' }
    ],
    'romanos_13': [
        { verse: 1, title: 'Sumisión a las Autoridades' },
        { verse: 8, title: 'El Amor, Cumplimiento de la Ley' },
        { verse: 11, title: 'La Armadura de Luz' }
    ],
    'romanos_14': [{ verse: 1, title: 'Los Débiles y los Fuertes en la Fe' }],
    'romanos_15': [
        { verse: 1, title: 'Agradar al Prójimo' },
        { verse: 14, title: 'El Ministerio de Pablo' },
        { verse: 22, title: 'Planes de Pablo' }
    ],
    'romanos_16': [
        { verse: 1, title: 'Saludos Personales' },
        { verse: 17, title: 'Advertencias Finales' },
        { verse: 25, title: 'Doxología Final' }
    ],
    // ============================================================
    // 1 CORINTIOS (16 capítulos)
    // ============================================================
    '1corintios_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 10, title: 'Divisiones en la Iglesia' },
        { verse: 18, title: 'La Locura de la Predicación' }
    ],
    '1corintios_2': [{ verse: 1, title: 'La Sabiduría de Dios Revelada por el Espíritu' }],
    '1corintios_3': [{ verse: 1, title: 'Colaboradores de Dios' }, { verse: 10, title: 'El Fundamento es Cristo' }],
    '1corintios_4': [{ verse: 1, title: 'Los Apóstoles, Servidores de Cristo' }],
    '1corintios_5': [{ verse: 1, title: 'Un Caso de Inmoralidad' }],
    '1corintios_6': [
        { verse: 1, title: 'Litigios entre Hermanos' },
        { verse: 12, title: 'Glorificad a Dios en Vuestro Cuerpo' }
    ],
    '1corintios_7': [
        { verse: 1, title: 'El Matrimonio' },
        { verse: 17, title: 'Cada Uno como el Señor lo Llamó' },
        { verse: 25, title: 'Sobre los Solteros' }
    ],
    '1corintios_8': [{ verse: 1, title: 'Lo Sacrificado a los Ídolos' }],
    '1corintios_9': [{ verse: 1, title: 'Los Derechos del Apóstol' }, { verse: 24, title: 'La Carrera Cristiana' }],
    '1corintios_10': [
        { verse: 1, title: 'Advertencias de la Historia de Israel' },
        { verse: 14, title: 'Huir de la Idolatría' },
        { verse: 23, title: 'Hacedlo Todo para la Gloria de Dios' }
    ],
    '1corintios_11': [{ verse: 1, title: 'El Velo de la Mujer' }, { verse: 17, title: 'La Cena del Señor' }],
    '1corintios_12': [{ verse: 1, title: 'Los Dones Espirituales' }, { verse: 12, title: 'El Cuerpo de Cristo' }],
    '1corintios_13': [{ verse: 1, title: 'El Himno al Amor' }],
    '1corintios_14': [{ verse: 1, title: 'El Don de Profecía y el de Lenguas' }, { verse: 26, title: 'Orden en el Culto' }],
    '1corintios_15': [
        { verse: 1, title: 'La Resurrección de Cristo' },
        { verse: 12, title: 'La Resurrección de los Muertos' },
        { verse: 35, title: 'El Cuerpo Resucitado' },
        { verse: 50, title: 'La Victoria sobre la Muerte' }
    ],
    '1corintios_16': [
        { verse: 1, title: 'La Ofrenda para los Santos' },
        { verse: 5, title: 'Planes de Pablo' },
        { verse: 13, title: 'Exhortaciones Finales' }
    ],
    // ============================================================
    // 2 CORINTIOS (13 capítulos)
    // ============================================================
    '2corintios_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 3, title: 'El Dios de Toda Consolación' },
        { verse: 12, title: 'Los Planes de Pablo' }
    ],
    '2corintios_2': [{ verse: 1, title: 'Perdón para el Ofensor' }, { verse: 12, title: 'Triunfo en Cristo' }],
    '2corintios_3': [{ verse: 1, title: 'Ministros del Nuevo Pacto' }],
    '2corintios_4': [{ verse: 1, title: 'El Tesoro en Vasos de Barro' }],
    '2corintios_5': [
        { verse: 1, title: 'Nuestra Morada Celestial' },
        { verse: 11, title: 'El Ministerio de la Reconciliación' }
    ],
    '2corintios_6': [
        { verse: 1, title: 'Sufrimientos del Apóstol' },
        { verse: 14, title: 'No os Unáis en Yugo Desigual' }
    ],
    '2corintios_7': [{ verse: 1, title: 'El Gozo de Pablo por el Arrepentimiento de los Corintios' }],
    '2corintios_8': [
        { verse: 1, title: 'La Generosidad de las Iglesias de Macedonia' },
        { verse: 16, title: 'Los Mensajeros de las Iglesias' }
    ],
    '2corintios_9': [{ verse: 1, title: 'La Ofrenda para los Santos' }, { verse: 6, title: 'Dios Ama al Dador Alegre' }],
    '2corintios_10': [{ verse: 1, title: 'Pablo Defiende su Ministerio' }],
    '2corintios_11': [
        { verse: 1, title: 'Pablo y los Falsos Apóstoles' },
        { verse: 16, title: 'Los Sufrimientos de Pablo' }
    ],
    '2corintios_12': [
        { verse: 1, title: 'La Visión de Pablo y su Aguijón' },
        { verse: 11, title: 'Preocupación de Pablo por los Corintios' }
    ],
    '2corintios_13': [{ verse: 1, title: 'Advertencias Finales' }, { verse: 11, title: 'Saludos y Bendición' }],
    // ============================================================
    // GÁLATAS (6 capítulos)
    // ============================================================
    'galatas_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 6, title: 'No Hay Otro Evangelio' },
        { verse: 11, title: 'El Evangelio que Pablo Predica' }
    ],
    'galatas_2': [
        { verse: 1, title: 'Pablo es Aceptado por los Apóstoles' },
        { verse: 11, title: 'Pablo Reprende a Pedro' },
        { verse: 15, title: 'Justificados por la Fe' }
    ],
    'galatas_3': [
        { verse: 1, title: 'La Fe o las Obras de la Ley' },
        { verse: 15, title: 'La Ley y la Promesa' },
        { verse: 23, title: 'Hijos de Dios por la Fe' }
    ],
    'galatas_4': [
        { verse: 1, title: 'Herederos y No Esclavos' },
        { verse: 8, title: 'Preocupación de Pablo' },
        { verse: 21, title: 'Alegoría de Sara y Agar' }
    ],
    'galatas_5': [{ verse: 1, title: 'Firmes en la Libertad' }, { verse: 13, title: 'El Fruto del Espíritu' }],
    'galatas_6': [
        { verse: 1, title: 'Sobrellevad los Unos las Cargas de los Otros' },
        { verse: 11, title: 'Amonestación Final' }
    ],
    // ============================================================
    // EFESIOS (6 capítulos)
    // ============================================================
    'efesios_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 3, title: 'Bendiciones Espirituales en Cristo' },
        { verse: 15, title: 'Oración de Pablo por los Efesios' }
    ],
    'efesios_2': [
        { verse: 1, title: 'De Muerte a Vida' },
        { verse: 8, title: 'Salvos por Gracia' },
        { verse: 11, title: 'Reconciliados por la Cruz' }
    ],
    'efesios_3': [
        { verse: 1, title: 'El Ministerio de Pablo a los Gentiles' },
        { verse: 14, title: 'Oración por los Efesios' }
    ],
    'efesios_4': [
        { verse: 1, title: 'La Unidad del Cuerpo de Cristo' },
        { verse: 7, title: 'Los Dones de Cristo' },
        { verse: 17, title: 'La Nueva Vida en Cristo' },
        { verse: 25, title: 'Reglas de la Nueva Vida' }
    ],
    'efesios_5': [
        { verse: 1, title: 'Andad como Hijos de Luz' },
        { verse: 15, title: 'Sed Llenos del Espíritu' },
        { verse: 22, title: 'Los Esposos y las Esposas' }
    ],
    'efesios_6': [
        { verse: 1, title: 'Padres e Hijos' },
        { verse: 5, title: 'Siervos y Amos' },
        { verse: 10, title: 'La Armadura de Dios' },
        { verse: 21, title: 'Saludos Finales' }
    ],
    // ============================================================
    // FILIPENSES (4 capítulos)
    // ============================================================
    'filipenses_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 3, title: 'Oración de Pablo por los Filipenses' },
        { verse: 12, title: 'Para Mí el Vivir es Cristo' }
    ],
    'filipenses_2': [
        { verse: 1, title: 'La Humildad de Cristo' },
        { verse: 12, title: 'Luminares en el Mundo' },
        { verse: 19, title: 'Timoteo y Epafrodito' }
    ],
    'filipenses_3': [
        { verse: 1, title: 'La Meta del Apóstol' },
        { verse: 12, title: 'Prosigo hacia la Meta' },
        { verse: 17, title: 'Nuestra Ciudadanía Celestial' }
    ],
    'filipenses_4': [
        { verse: 1, title: 'Gozaos en el Señor Siempre' },
        { verse: 4, title: 'Regocijaos y No os Afanéis' },
        { verse: 10, title: 'Todo lo Puedo en Cristo' },
        { verse: 14, title: 'La Generosidad de los Filipenses' }
    ],
    // ============================================================
    // COLOSENSES (4 capítulos)
    // ============================================================
    'colosenses_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 3, title: 'Oración por los Colosenses' },
        { verse: 15, title: 'La Supremacía de Cristo' },
        { verse: 24, title: 'El Ministerio de Pablo' }
    ],
    'colosenses_2': [
        { verse: 1, title: 'Todos los Tesoros de la Sabiduría en Cristo' },
        { verse: 8, title: 'Plenitud de Vida en Cristo' },
        { verse: 16, title: 'Libertad de las Regulaciones Humanas' }
    ],
    'colosenses_3': [
        { verse: 1, title: 'La Vida Nueva en Cristo' },
        { verse: 5, title: 'Despojaos del Viejo Hombre' },
        { verse: 12, title: 'Vestíos del Nuevo Hombre' },
        { verse: 18, title: 'Deberes del Hogar Cristiano' }
    ],
    'colosenses_4': [
        { verse: 1, title: 'Amos y Siervos' },
        { verse: 2, title: 'Exhortaciones Finales' },
        { verse: 7, title: 'Saludos' }
    ],
    // ============================================================
    // 1 TESALONICENSES (5 capítulos)
    // ============================================================
    '1tesalonicenses_1': [{ verse: 1, title: 'Saludo' }, { verse: 2, title: 'Acción de Gracias por los Tesalonicenses' }],
    '1tesalonicenses_2': [
        { verse: 1, title: 'El Ministerio de Pablo en Tesalónica' },
        { verse: 17, title: 'Deseo de Pablo de Visitarlos' }
    ],
    '1tesalonicenses_3': [{ verse: 1, title: 'Timoteo es Enviado a Tesalónica' }],
    '1tesalonicenses_4': [
        { verse: 1, title: 'La Vida que Agrada a Dios' },
        { verse: 9, title: 'El Amor Fraternal' },
        { verse: 13, title: 'La Venida del Señor' }
    ],
    '1tesalonicenses_5': [{ verse: 1, title: 'El Día del Señor' }, { verse: 12, title: 'Exhortaciones Finales' }],
    // ============================================================
    // 2 TESALONICENSES (3 capítulos)
    // ============================================================
    '2tesalonicenses_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 3, title: 'Acción de Gracias' },
        { verse: 5, title: 'El Juicio Venidero' }
    ],
    '2tesalonicenses_2': [{ verse: 1, title: 'El Hombre de Pecado' }, { verse: 13, title: 'Estad Firmes' }],
    '2tesalonicenses_3': [{ verse: 1, title: 'Pedid por Nosotros' }, { verse: 6, title: 'El Deber de Trabajar' }],
    // ============================================================
    // 1 TIMOTEO (6 capítulos)
    // ============================================================
    '1timoteo_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 3, title: 'Advertencia contra Falsas Doctrinas' },
        { verse: 12, title: 'La Gracia de Dios hacia Pablo' }
    ],
    '1timoteo_2': [
        { verse: 1, title: 'Instrucciones sobre la Oración' },
        { verse: 8, title: 'La Conducta en el Culto' }
    ],
    '1timoteo_3': [
        { verse: 1, title: 'Requisitos para los Obispos' },
        { verse: 8, title: 'Requisitos para los Diáconos' },
        { verse: 14, title: 'El Misterio de la Piedad' }
    ],
    '1timoteo_4': [
        { verse: 1, title: 'La Apostasía de los Últimos Tiempos' },
        { verse: 6, title: 'Un Buen Ministro de Jesucristo' }
    ],
    '1timoteo_5': [
        { verse: 1, title: 'Deberes hacia los Demás' },
        { verse: 3, title: 'Las Viudas' },
        { verse: 17, title: 'Los Ancianos' }
    ],
    '1timoteo_6': [
        { verse: 1, title: 'Los Siervos y sus Amos' },
        { verse: 3, title: 'Falsas Enseñanzas y Amor al Dinero' },
        { verse: 11, title: 'Pelea la Buena Batalla de la Fe' }
    ],
    // ============================================================
    // 2 TIMOTEO (4 capítulos)
    // ============================================================
    '2timoteo_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 3, title: 'El Testimonio de Timoteo' },
        { verse: 6, title: 'No Te Avergüences del Evangelio' }
    ],
    '2timoteo_2': [{ verse: 1, title: 'Un Buen Soldado de Jesucristo' }, { verse: 14, title: 'Un Obrero Aprobado' }],
    '2timoteo_3': [
        { verse: 1, title: 'Los Peligros de los Últimos Días' },
        { verse: 10, title: 'Toda Escritura es Inspirada por Dios' }
    ],
    '2timoteo_4': [
        { verse: 1, title: 'Predica la Palabra' },
        { verse: 6, title: 'He Peleado la Buena Batalla' },
        { verse: 9, title: 'Instrucciones Personales' }
    ],
    // ============================================================
    // TITO (3 capítulos)
    // ============================================================
    'tito_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 5, title: 'Requisitos para los Ancianos' },
        { verse: 10, title: 'Contra los Falsos Maestros' }
    ],
    'tito_2': [{ verse: 1, title: 'La Sana Doctrina' }, { verse: 11, title: 'La Gracia de Dios' }],
    'tito_3': [
        { verse: 1, title: 'Conducta del Cristiano' },
        { verse: 3, title: 'Salvos por su Misericordia' },
        { verse: 8, title: 'Instrucciones Finales' }
    ],
    // ============================================================
    // FILEMÓN (1 capítulo)
    // ============================================================
    'filemon_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 4, title: 'El Amor y la Fe de Filemón' },
        { verse: 8, title: 'Pablo Intercede por Onésimo' }
    ],
    // ============================================================
    // HEBREOS (13 capítulos)
    // ============================================================
    'hebreos_1': [
        { verse: 1, title: 'Dios Ha Hablado por el Hijo' },
        { verse: 4, title: 'El Hijo, Superior a los Ángeles' }
    ],
    'hebreos_2': [
        { verse: 1, title: 'Una Salvación Grande' },
        { verse: 5, title: 'Jesús, Hecho Menor que los Ángeles' }
    ],
    'hebreos_3': [
        { verse: 1, title: 'Jesús, Superior a Moisés' },
        { verse: 7, title: 'Advertencia contra la Incredulidad' }
    ],
    'hebreos_4': [
        { verse: 1, title: 'El Reposo del Pueblo de Dios' },
        { verse: 14, title: 'Jesús, el Gran Sumo Sacerdote' }
    ],
    'hebreos_5': [
        { verse: 1, title: 'Jesús, Sumo Sacerdote' },
        { verse: 11, title: 'Advertencia contra la Apostasía' }
    ],
    'hebreos_6': [
        { verse: 1, title: 'Avancemos hacia la Madurez' },
        { verse: 13, title: 'La Certeza de las Promesas de Dios' }
    ],
    'hebreos_7': [
        { verse: 1, title: 'Melquisedec, Sacerdote del Dios Altísimo' },
        { verse: 11, title: 'Jesús, Sacerdote según el Orden de Melquisedec' }
    ],
    'hebreos_8': [{ verse: 1, title: 'El Mediador de un Mejor Pacto' }],
    'hebreos_9': [
        { verse: 1, title: 'El Tabernáculo Terrenal' },
        { verse: 11, title: 'La Sangre de Cristo' },
        { verse: 23, title: 'El Sacrificio de Cristo Quita el Pecado' }
    ],
    'hebreos_10': [
        { verse: 1, title: 'El Sacrificio Único de Cristo' },
        { verse: 19, title: 'Acerquémonos con Confianza' },
        { verse: 26, title: 'Advertencia contra el Pecado Voluntario' },
        { verse: 32, title: 'La Necesidad de la Perseverancia' }
    ],
    'hebreos_11': [{ verse: 1, title: 'La Fe' }, { verse: 4, title: 'Los Héroes de la Fe' }],
    'hebreos_12': [
        { verse: 1, title: 'Puestos los Ojos en Jesús' },
        { verse: 4, title: 'La Disciplina del Padre' },
        { verse: 14, title: 'Seguid la Paz y la Santidad' },
        { verse: 18, title: 'El Monte Sion' }
    ],
    'hebreos_13': [
        { verse: 1, title: 'Deberes Cristianos' },
        { verse: 7, title: 'Jesucristo es el Mismo' },
        { verse: 18, title: 'Bendición y Saludos Finales' }
    ],
    // ============================================================
    // SANTIAGO (5 capítulos)
    // ============================================================
    'santiago_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 2, title: 'La Prueba de la Fe' },
        { verse: 5, title: 'Pedir Sabiduría a Dios' },
        { verse: 12, title: 'La Tentación' },
        { verse: 19, title: 'Hacedores de la Palabra' }
    ],
    'santiago_2': [{ verse: 1, title: 'Contra la Parcialidad' }, { verse: 14, title: 'La Fe sin Obras es Muerta' }],
    'santiago_3': [{ verse: 1, title: 'El Dominio de la Lengua' }, { verse: 13, title: 'La Sabiduría de lo Alto' }],
    'santiago_4': [
        { verse: 1, title: 'La Amistad con el Mundo' },
        { verse: 7, title: 'Someteos a Dios' },
        { verse: 13, title: 'No os Jactéis del Mañana' }
    ],
    'santiago_5': [
        { verse: 1, title: 'Advertencia a los Ricos' },
        { verse: 7, title: 'Sed Pacientes' },
        { verse: 13, title: 'La Oración de Fe' }
    ],
    // ============================================================
    // 1 PEDRO (5 capítulos)
    // ============================================================
    '1pedro_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 3, title: 'Una Esperanza Viva' },
        { verse: 13, title: 'Sed Santos' }
    ],
    '1pedro_2': [
        { verse: 1, title: 'La Piedra Viva' },
        { verse: 9, title: 'Real Sacerdocio' },
        { verse: 11, title: 'Buena Conducta entre los Gentiles' },
        { verse: 18, title: 'El Ejemplo de Cristo en el Sufrimiento' }
    ],
    '1pedro_3': [
        { verse: 1, title: 'Deberes Conyugales' },
        { verse: 8, title: 'Buena Conducta' },
        { verse: 13, title: 'El Sufrimiento por Hacer el Bien' }
    ],
    '1pedro_4': [
        { verse: 1, title: 'Vivir para Dios' },
        { verse: 7, title: 'Buenas Obras al Servicio de Dios' },
        { verse: 12, title: 'Padeciendo como Cristiano' }
    ],
    '1pedro_5': [
        { verse: 1, title: 'Exhortación a los Ancianos' },
        { verse: 5, title: 'Humillaos bajo la Mano de Dios' },
        { verse: 12, title: 'Saludos Finales' }
    ],
    // ============================================================
    // 2 PEDRO (3 capítulos)
    // ============================================================
    '2pedro_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 3, title: 'Añadid a Vuestra Fe' },
        { verse: 12, title: 'La Verdad Presente' },
        { verse: 16, title: 'Testigos Presenciales de la Gloria de Cristo' }
    ],
    '2pedro_2': [{ verse: 1, title: 'Los Falsos Profetas y Maestros' }],
    '2pedro_3': [{ verse: 1, title: 'La Promesa de la Venida del Señor' }, { verse: 10, title: 'El Día del Señor' }],
    // ============================================================
    // 1 JUAN (5 capítulos)
    // ============================================================
    '1juan_1': [{ verse: 1, title: 'El Verbo de Vida' }, { verse: 5, title: 'Dios es Luz' }],
    '1juan_2': [
        { verse: 1, title: 'Cristo, Nuestro Abogado' },
        { verse: 7, title: 'El Mandamiento Nuevo' },
        { verse: 15, title: 'No Améis al Mundo' },
        { verse: 18, title: 'El Anticristo' }
    ],
    '1juan_3': [{ verse: 1, title: 'Hijos de Dios' }, { verse: 11, title: 'Amémonos Unos a Otros' }],
    '1juan_4': [{ verse: 1, title: 'Probad los Espíritus' }, { verse: 7, title: 'Dios es Amor' }],
    '1juan_5': [
        { verse: 1, title: 'La Fe que Vence al Mundo' },
        { verse: 6, title: 'El Testimonio del Espíritu' },
        { verse: 13, title: 'La Seguridad de la Vida Eterna' }
    ],
    // ============================================================
    // 2 JUAN (1 capítulo)
    // ============================================================
    '2juan_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 4, title: 'Andad en la Verdad y en el Amor' },
        { verse: 7, title: 'Cuidaos de los Engañadores' }
    ],
    // ============================================================
    // 3 JUAN (1 capítulo)
    // ============================================================
    '3juan_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 2, title: 'Elogio a Gayo' },
        { verse: 9, title: 'La Actitud de Diótrefes' },
        { verse: 11, title: 'Elogio a Demetrio' }
    ],
    // ============================================================
    // JUDAS (1 capítulo)
    // ============================================================
    'judas_1': [
        { verse: 1, title: 'Saludo' },
        { verse: 3, title: 'Contra los Falsos Maestros' },
        { verse: 17, title: 'Amonestaciones y Exhortaciones' },
        { verse: 24, title: 'Doxología' }
    ],
    // ============================================================
    // APOCALIPSIS (22 capítulos)
    // ============================================================
    'apocalipsis_1': [
        { verse: 1, title: 'Prólogo' },
        { verse: 4, title: 'Saludo a las Siete Iglesias' },
        { verse: 9, title: 'Visión del Hijo del Hombre' }
    ],
    'apocalipsis_2': [
        { verse: 1, title: 'Mensaje a Éfeso' },
        { verse: 8, title: 'Mensaje a Esmirna' },
        { verse: 12, title: 'Mensaje a Pérgamo' },
        { verse: 18, title: 'Mensaje a Tiatira' }
    ],
    'apocalipsis_3': [
        { verse: 1, title: 'Mensaje a Sardis' },
        { verse: 7, title: 'Mensaje a Filadelfia' },
        { verse: 14, title: 'Mensaje a Laodicea' }
    ],
    'apocalipsis_4': [{ verse: 1, title: 'El Trono en el Cielo' }],
    'apocalipsis_5': [{ verse: 1, title: 'El Libro y el Cordero' }],
    'apocalipsis_6': [{ verse: 1, title: 'Los Seis Primeros Sellos' }],
    'apocalipsis_7': [{ verse: 1, title: 'Los 144.000 Sellados' }, { verse: 9, title: 'La Multitud Vestida de Blanco' }],
    'apocalipsis_8': [{ verse: 1, title: 'El Séptimo Sello' }, { verse: 6, title: 'Las Primeras Cuatro Trompetas' }],
    'apocalipsis_9': [{ verse: 1, title: 'La Quinta Trompeta' }, { verse: 13, title: 'La Sexta Trompeta' }],
    'apocalipsis_10': [{ verse: 1, title: 'El Ángel con el Librito' }],
    'apocalipsis_11': [{ verse: 1, title: 'Los Dos Testigos' }, { verse: 15, title: 'La Séptima Trompeta' }],
    'apocalipsis_12': [
        { verse: 1, title: 'La Mujer y el Dragón' },
        { verse: 7, title: 'Miguel y sus Ángeles Luchan contra el Dragón' }
    ],
    'apocalipsis_13': [{ verse: 1, title: 'La Bestia del Mar' }, { verse: 11, title: 'La Bestia de la Tierra' }],
    'apocalipsis_14': [
        { verse: 1, title: 'El Cordero y los 144.000' },
        { verse: 6, title: 'Los Mensajes de los Tres Ángeles' },
        { verse: 14, title: 'La Cosecha de la Tierra' }
    ],
    'apocalipsis_15': [{ verse: 1, title: 'Los Ángeles con las Siete Plagas' }],
    'apocalipsis_16': [{ verse: 1, title: 'Las Siete Copas de la Ira de Dios' }],
    'apocalipsis_17': [{ verse: 1, title: 'La Gran Ramera' }],
    'apocalipsis_18': [{ verse: 1, title: 'La Caída de Babilonia' }],
    'apocalipsis_19': [
        { verse: 1, title: 'Aleluya en el Cielo' },
        { verse: 6, title: 'Las Bodas del Cordero' },
        { verse: 11, title: 'El Jinete del Caballo Blanco' }
    ],
    'apocalipsis_20': [
        { verse: 1, title: 'Los Mil Años' },
        { verse: 7, title: 'La Derrota de Satanás' },
        { verse: 11, title: 'El Juicio del Gran Trono Blanco' }
    ],
    'apocalipsis_21': [{ verse: 1, title: 'Cielo Nuevo y Tierra Nueva' }, { verse: 9, title: 'La Nueva Jerusalén' }],
    'apocalipsis_22': [
        { verse: 1, title: 'El Río de Agua de Vida' },
        { verse: 6, title: 'La Venida de Cristo' },
        { verse: 12, title: 'Advertencias Finales' }
    ]
};

if (typeof window !== 'undefined') {
    window.SECTION_TITLES = SECTION_TITLES;
}

    // =============================================
    // JEREMIAS (52 capitulos)
    // =============================================
    'jeremias_1': [
        { verse: 1, title: 'Llamamiento de Jeremias' },
        { verse: 11, title: 'Las dos visiones: la vara y la olla' },
    ],
    'jeremias_2': [
        { verse: 1, title: 'Israel abandona a Dios' },
        { verse: 20, title: 'La infidelidad de Israel' },
    ],
    'jeremias_3': [
        { verse: 1, title: 'La apostasia de Israel y Juda' },
        { verse: 14, title: 'Llamado al arrepentimiento' },
    ],
    'jeremias_4': [
        { verse: 1, title: 'Llamado a volver a Dios' },
        { verse: 5, title: 'Invasion del norte anunciada' },
    ],
    'jeremias_5': [
        { verse: 1, title: 'La corrupcion de Jerusalen' },
        { verse: 14, title: 'Juicio inminente' },
    ],
    'jeremias_6': [
        { verse: 1, title: 'Jerusalen sera sitiada' },
        { verse: 16, title: 'Israel rechaza el camino antiguo' },
    ],
    'jeremias_7': [
        { verse: 1, title: 'El sermon del templo' },
        { verse: 21, title: 'Obediencia, no sacrificio' },
    ],
    'jeremias_8': [
        { verse: 1, title: 'Castigo de la idolatria' },
        { verse: 18, title: 'Lamento de Jeremias' },
    ],
    'jeremias_9': [
        { verse: 1, title: 'Jeremias llora por su pueblo' },
        { verse: 23, title: 'Gloriese en conocer a Jehova' },
    ],
    'jeremias_10': [
        { verse: 1, title: 'La vanidad de los idolos' },
        { verse: 17, title: 'La destruccion se acerca' },
    ],
    'jeremias_11': [
        { verse: 1, title: 'El pacto violado' },
        { verse: 18, title: 'Conspiracion contra Jeremias' },
    ],
    'jeremias_12': [
        { verse: 1, title: 'Queja de Jeremias' },
        { verse: 7, title: 'Lamento de Dios por su heredad' },
    ],
    'jeremias_13': [
        { verse: 1, title: 'La senal del cinto podrido' },
        { verse: 15, title: 'Advertencia contra el orgullo' },
    ],
    'jeremias_14': [
        { verse: 1, title: 'La sequia' },
        { verse: 7, title: 'Oracion de Jeremias' },
        { verse: 13, title: 'Contra los falsos profetas' },
    ],
    'jeremias_15': [
        { verse: 1, title: 'El juicio es inevitable' },
        { verse: 10, title: 'Lamento de Jeremias' },
    ],
    'jeremias_16': [
        { verse: 1, title: 'Jeremias no debe casarse' },
        { verse: 14, title: 'Promesa de restauracion' },
    ],
    'jeremias_17': [
        { verse: 1, title: 'El pecado de Juda' },
        { verse: 5, title: 'Maldito el que confia en el hombre' },
        { verse: 19, title: 'Santificacion del dia de reposo' },
    ],
    'jeremias_18': [
        { verse: 1, title: 'La senal del alfarero' },
        { verse: 18, title: 'Conspiracion contra Jeremias' },
    ],
    'jeremias_19': [
        { verse: 1, title: 'La senal de la vasija rota' },
    ],
    'jeremias_20': [
        { verse: 1, title: 'Jeremias es puesto en el cepo' },
        { verse: 7, title: 'Lamento de Jeremias' },
    ],
    'jeremias_21': [
        { verse: 1, title: 'Mensaje a Sedequias durante el sitio' },
    ],
    'jeremias_22': [
        { verse: 1, title: 'Profecia contra los reyes de Juda' },
    ],
    'jeremias_23': [
        { verse: 1, title: 'Ay de los malos pastores' },
        { verse: 5, title: 'El Renuevo justo' },
        { verse: 9, title: 'Contra los falsos profetas' },
    ],
    'jeremias_24': [
        { verse: 1, title: 'La vision de las dos cestas de higos' },
    ],
    'jeremias_25': [
        { verse: 1, title: 'Setenta anos de cautiverio' },
        { verse: 15, title: 'La copa de la ira de Dios' },
    ],
    'jeremias_26': [
        { verse: 1, title: 'Jeremias amenazado de muerte' },
        { verse: 16, title: 'Jeremias es librado' },
    ],
    'jeremias_27': [
        { verse: 1, title: 'La senal de los yugos' },
    ],
    'jeremias_28': [
        { verse: 1, title: 'El falso profeta Hananias' },
    ],
    'jeremias_29': [
        { verse: 1, title: 'Carta de Jeremias a los cautivos' },
        { verse: 10, title: 'Promesa de restauracion despues de 70 anos' },
    ],
    'jeremias_30': [
        { verse: 1, title: 'Promesa de restauracion de Israel' },
        { verse: 18, title: 'La ciudad sera reedificada' },
    ],
    'jeremias_31': [
        { verse: 1, title: 'El amor eterno de Dios' },
        { verse: 15, title: 'Raquel llora por sus hijos' },
        { verse: 31, title: 'El nuevo pacto' },
    ],
    'jeremias_32': [
        { verse: 1, title: 'Jeremias compra un campo' },
        { verse: 16, title: 'Oracion de Jeremias' },
        { verse: 36, title: 'Promesa de restauracion' },
    ],
    'jeremias_33': [
        { verse: 1, title: 'Promesas de restauracion' },
        { verse: 14, title: 'El Renuevo de justicia' },
    ],
    'jeremias_34': [
        { verse: 1, title: 'Profecia contra Sedequias' },
        { verse: 8, title: 'Violacion del pacto de liberacion' },
    ],
    'jeremias_35': [
        { verse: 1, title: 'La obediencia de los recabitas' },
    ],
    'jeremias_36': [
        { verse: 1, title: 'El rollo de Jeremias' },
        { verse: 20, title: 'El rey quema el rollo' },
        { verse: 27, title: 'El rollo es reescrito' },
    ],
    'jeremias_37': [
        { verse: 1, title: 'Sedequias consulta a Jeremias' },
        { verse: 11, title: 'Jeremias es encarcelado' },
    ],
    'jeremias_38': [
        { verse: 1, title: 'Jeremias en la cisterna' },
        { verse: 7, title: 'Ebed-melec rescata a Jeremias' },
        { verse: 14, title: 'Ultima entrevista con Sedequias' },
    ],
    'jeremias_39': [
        { verse: 1, title: 'Caida de Jerusalen' },
        { verse: 11, title: 'Jeremias es protegido' },
    ],
    'jeremias_40': [
        { verse: 1, title: 'Jeremias queda en Juda con Gedalias' },
    ],
    'jeremias_41': [
        { verse: 1, title: 'Asesinato de Gedalias' },
    ],
    'jeremias_42': [
        { verse: 1, title: 'El pueblo consulta a Jeremias' },
        { verse: 7, title: 'Advertencia contra ir a Egipto' },
    ],
    'jeremias_43': [
        { verse: 1, title: 'El pueblo desobedece y va a Egipto' },
        { verse: 8, title: 'Profecia contra Egipto' },
    ],
    'jeremias_44': [
        { verse: 1, title: 'Jeremias reprende la idolatria en Egipto' },
    ],
    'jeremias_45': [
        { verse: 1, title: 'Mensaje de Dios a Baruc' },
    ],
    'jeremias_46': [
        { verse: 1, title: 'Profecia contra Egipto' },
    ],
    'jeremias_47': [
        { verse: 1, title: 'Profecia contra los filisteos' },
    ],
    'jeremias_48': [
        { verse: 1, title: 'Profecia contra Moab' },
    ],
    'jeremias_49': [
        { verse: 1, title: 'Profecia contra Amon' },
        { verse: 7, title: 'Profecia contra Edom' },
        { verse: 23, title: 'Profecia contra Damasco' },
        { verse: 34, title: 'Profecia contra Elam' },
    ],
    'jeremias_50': [
        { verse: 1, title: 'Profecia contra Babilonia' },
        { verse: 17, title: 'Restauracion de Israel' },
    ],
    'jeremias_51': [
        { verse: 1, title: 'Juicio sobre Babilonia' },
        { verse: 59, title: 'El rollo arrojado al Eufrates' },
    ],
    'jeremias_52': [
        { verse: 1, title: 'Caida de Jerusalen' },
        { verse: 12, title: 'Destruccion del templo' },
        { verse: 31, title: 'Joaquin es liberado' },
    ],

    // =============================================
    // LAMENTACIONES (5 capitulos)
    // =============================================
    'lamentaciones_1': [
        { verse: 1, title: 'La desolacion de Jerusalen' },
        { verse: 12, title: 'El sufrimiento de Jerusalen' },
    ],
    'lamentaciones_2': [
        { verse: 1, title: 'La ira de Dios contra Sion' },
        { verse: 11, title: 'Lamento por la destruccion' },
    ],
    'lamentaciones_3': [
        { verse: 1, title: 'El profeta afligido' },
        { verse: 22, title: 'La misericordia de Dios es nueva cada manana' },
        { verse: 40, title: 'Llamado al arrepentimiento' },
    ],
    'lamentaciones_4': [
        { verse: 1, title: 'Los horrores del sitio de Jerusalen' },
        { verse: 21, title: 'El castigo de Edom' },
    ],
    'lamentaciones_5': [
        { verse: 1, title: 'Oracion del pueblo afligido' },
    ],

    // =============================================
    // EZEQUIEL (48 capitulos)
    // =============================================
    'ezequiel_1': [
        { verse: 1, title: 'La vision de los seres vivientes' },
        { verse: 15, title: 'Las ruedas y la gloria de Dios' },
    ],
    'ezequiel_2': [
        { verse: 1, title: 'Llamamiento de Ezequiel' },
    ],
    'ezequiel_3': [
        { verse: 1, title: 'Ezequiel come el rollo' },
        { verse: 16, title: 'Ezequiel, atalaya de Israel' },
    ],
    'ezequiel_4': [
        { verse: 1, title: 'Senales del sitio de Jerusalen' },
    ],
    'ezequiel_5': [
        { verse: 1, title: 'Senal del cabello cortado' },
        { verse: 5, title: 'Juicio sobre Jerusalen' },
    ],
    'ezequiel_6': [
        { verse: 1, title: 'Profecia contra los montes de Israel' },
    ],
    'ezequiel_7': [
        { verse: 1, title: 'El fin ha llegado' },
    ],
    'ezequiel_8': [
        { verse: 1, title: 'Vision de las abominaciones en el templo' },
    ],
    'ezequiel_9': [
        { verse: 1, title: 'La vision de los verdugos de Jerusalen' },
    ],
    'ezequiel_10': [
        { verse: 1, title: 'La gloria de Dios sale del templo' },
    ],
    'ezequiel_11': [
        { verse: 1, title: 'Juicio contra los lideres de Jerusalen' },
        { verse: 14, title: 'Promesa de restauracion' },
        { verse: 22, title: 'La gloria de Dios se va de Jerusalen' },
    ],
    'ezequiel_12': [
        { verse: 1, title: 'Senal de la partida al exilio' },
        { verse: 17, title: 'Senal del temblor' },
    ],
    'ezequiel_13': [
        { verse: 1, title: 'Contra los falsos profetas' },
        { verse: 17, title: 'Contra las falsas profetisas' },
    ],
    'ezequiel_14': [
        { verse: 1, title: 'Contra los idolatras' },
        { verse: 12, title: 'Ni Noe, Daniel y Job podrian salvar' },
    ],
    'ezequiel_15': [
        { verse: 1, title: 'Jerusalen como vina inutil' },
    ],
    'ezequiel_16': [
        { verse: 1, title: 'La infidelidad de Jerusalen' },
        { verse: 59, title: 'Dios recordara su pacto' },
    ],
    'ezequiel_17': [
        { verse: 1, title: 'Parabola de las dos aguilas' },
        { verse: 22, title: 'La rama tierna del cedro' },
    ],
    'ezequiel_18': [
        { verse: 1, title: 'La justicia de Dios: el alma que pecare morira' },
        { verse: 30, title: 'Llamado al arrepentimiento' },
    ],
    'ezequiel_19': [
        { verse: 1, title: 'Lamento por los principes de Israel' },
    ],
    'ezequiel_20': [
        { verse: 1, title: 'Historia de la rebeldia de Israel' },
        { verse: 33, title: 'Juicio y restauracion' },
    ],
    'ezequiel_21': [
        { verse: 1, title: 'La espada de Jehova' },
    ],
    'ezequiel_22': [
        { verse: 1, title: 'Los pecados de Jerusalen' },
        { verse: 23, title: 'La corrupcion de todas las clases' },
    ],
    'ezequiel_23': [
        { verse: 1, title: 'Las dos hermanas infieles: Ohola y Oholiba' },
    ],
    'ezequiel_24': [
        { verse: 1, title: 'La parabola de la olla hirviente' },
        { verse: 15, title: 'Muerte de la esposa de Ezequiel' },
    ],
    'ezequiel_25': [
        { verse: 1, title: 'Profecia contra Amon' },
        { verse: 8, title: 'Profecia contra Moab, Edom y Filistea' },
    ],
    'ezequiel_26': [
        { verse: 1, title: 'Profecia contra Tiro' },
    ],
    'ezequiel_27': [
        { verse: 1, title: 'Lamento por Tiro' },
    ],
    'ezequiel_28': [
        { verse: 1, title: 'Profecia contra el rey de Tiro' },
        { verse: 11, title: 'Lamento sobre el rey de Tiro' },
        { verse: 20, title: 'Profecia contra Sidon' },
    ],
    'ezequiel_29': [
        { verse: 1, title: 'Profecia contra Egipto' },
    ],
    'ezequiel_30': [
        { verse: 1, title: 'Lamento por Egipto' },
    ],
    'ezequiel_31': [
        { verse: 1, title: 'La caida de Egipto comparada con Asiria' },
    ],
    'ezequiel_32': [
        { verse: 1, title: 'Lamento por Faraon' },
        { verse: 17, title: 'Egipto desciende al Seol' },
    ],
    'ezequiel_33': [
        { verse: 1, title: 'Ezequiel, atalaya de Israel' },
        { verse: 10, title: 'Dios no quiere la muerte del impío' },
        { verse: 21, title: 'Nuevas de la caida de Jerusalen' },
    ],
    'ezequiel_34': [
        { verse: 1, title: 'Contra los malos pastores de Israel' },
        { verse: 11, title: 'Dios, el buen pastor' },
        { verse: 23, title: 'Un pastor como David' },
    ],
    'ezequiel_35': [
        { verse: 1, title: 'Profecia contra Edom' },
    ],
    'ezequiel_36': [
        { verse: 1, title: 'Restauracion de Israel' },
        { verse: 22, title: 'Un corazon nuevo y un espiritu nuevo' },
    ],
    'ezequiel_37': [
        { verse: 1, title: 'El valle de los huesos secos' },
        { verse: 15, title: 'Las dos varas unidas' },
    ],
    'ezequiel_38': [
        { verse: 1, title: 'Profecia contra Gog' },
    ],
    'ezequiel_39': [
        { verse: 1, title: 'Derrota de Gog' },
        { verse: 21, title: 'Restauracion de Israel' },
    ],
    'ezequiel_40': [
        { verse: 1, title: 'Vision del templo futuro' },
        { verse: 5, title: 'Las puertas y atrios del templo' },
    ],
    'ezequiel_41': [
        { verse: 1, title: 'El templo interior' },
    ],
    'ezequiel_42': [
        { verse: 1, title: 'Las camaras del templo' },
        { verse: 15, title: 'Medidas exteriores del templo' },
    ],
    'ezequiel_43': [
        { verse: 1, title: 'La gloria de Dios vuelve al templo' },
        { verse: 13, title: 'El altar' },
    ],
    'ezequiel_44': [
        { verse: 1, title: 'La puerta oriental cerrada' },
        { verse: 9, title: 'Ordenanzas para los sacerdotes' },
    ],
    'ezequiel_45': [
        { verse: 1, title: 'La porcion santa de la tierra' },
        { verse: 13, title: 'Las ofrendas del principe' },
    ],
    'ezequiel_46': [
        { verse: 1, title: 'Adoracion en el templo futuro' },
    ],
    'ezequiel_47': [
        { verse: 1, title: 'Las aguas que salen del templo' },
        { verse: 13, title: 'Los limites de la tierra' },
    ],
    'ezequiel_48': [
        { verse: 1, title: 'Reparticion de la tierra entre las tribus' },
        { verse: 30, title: 'Las puertas de la ciudad: Jehova-sama' },
    ],

    // =============================================
    // DANIEL (12 capitulos)
    // =============================================
    'daniel_1': [
        { verse: 1, title: 'Daniel y sus companeros en Babilonia' },
        { verse: 8, title: 'Daniel rehusa contaminarse' },
    ],
    'daniel_2': [
        { verse: 1, title: 'El sueno de Nabucodonosor' },
        { verse: 19, title: 'Dios revela el sueno a Daniel' },
        { verse: 31, title: 'La estatua y su interpretacion' },
    ],
    'daniel_3': [
        { verse: 1, title: 'La estatua de oro de Nabucodonosor' },
        { verse: 8, title: 'Los tres jovenes en el horno de fuego' },
        { verse: 24, title: 'Liberados del horno' },
    ],
    'daniel_4': [
        { verse: 1, title: 'El sueno del arbol de Nabucodonosor' },
        { verse: 19, title: 'Daniel interpreta el sueno' },
        { verse: 28, title: 'La locura de Nabucodonosor' },
    ],
    'daniel_5': [
        { verse: 1, title: 'El festin de Belsasar' },
        { verse: 5, title: 'La escritura en la pared' },
        { verse: 13, title: 'Daniel interpreta la escritura' },
        { verse: 30, title: 'Caida de Babilonia' },
    ],
    'daniel_6': [
        { verse: 1, title: 'Daniel bajo Dario' },
        { verse: 4, title: 'La conspiracion contra Daniel' },
        { verse: 16, title: 'Daniel en el foso de los leones' },
        { verse: 25, title: 'Dario honra al Dios de Daniel' },
    ],
    'daniel_7': [
        { verse: 1, title: 'Vision de las cuatro bestias' },
        { verse: 9, title: 'El Anciano de dias y el Hijo del Hombre' },
    ],
    'daniel_8': [
        { verse: 1, title: 'Vision del carnero y del macho cabrio' },
        { verse: 15, title: 'Gabriel interpreta la vision' },
    ],
    'daniel_9': [
        { verse: 1, title: 'Oracion de Daniel por su pueblo' },
        { verse: 20, title: 'La profecia de las setenta semanas' },
    ],
    'daniel_10': [
        { verse: 1, title: 'Vision de Daniel junto al rio Tigris' },
        { verse: 10, title: 'El angel fortalece a Daniel' },
    ],
    'daniel_11': [
        { verse: 1, title: 'Profecias sobre Persia y Grecia' },
        { verse: 21, title: 'El rey del norte' },
        { verse: 36, title: 'El rey soberbio' },
    ],
    'daniel_12': [
        { verse: 1, title: 'El tiempo del fin' },
        { verse: 5, title: 'Las palabras selladas hasta el fin' },
    ],
