export const personajes = [
    {
        id: 1,
        nombres: "Alex",
        apellidos: "Quiñónez",
        biografia: "Velocista esmeraldeño considerado el mejor de la historia de Ecuador. Llegó a la final de los 200 m en Londres 2012 y en 2019 vivió su mejor año, con oro panamericano y bronce mundial. Fue asesinado en Guayaquil en octubre de 2021, a los 32 años.",
        deporte: "Atletismo",
        especialidad: "Velocidad (200 m)",
        logros: [
            "Bronce en el Mundial de Atletismo de Doha 2019 (200 m)",
            "Oro en los Juegos Panamericanos de Lima 2019 (200 m)",
            "Finalista olímpico en Londres 2012 (7.º en los 200 m)"
        ],
        lugarNacimiento: "Esmeraldas, Ecuador",
        motivacion: "Volver a la élite tras quedarse fuera de Río 2016 y convertirse en un referente del atletismo sudamericano.",
        fechaNacimiento: 1989,
        stats: [
            { etiqueta: "Mundial Doha 2019 (200 m)", valor: "Bronce, 19.98 s" },
            { etiqueta: "Panamericanos Lima 2019 (200 m)", valor: "Oro, 20.41 s" },
            { etiqueta: "Olimpiadas Londres 2012 (200 m)", valor: "Final, 7.º lugar" },
            { etiqueta: "Liga Diamante Lausana 2019", valor: "2.º lugar" }
        ],
        imagen: {
            portada: "/deportistas/alex-quinonez-portada.png",
        }
    },
    {
        id: 2,
        nombres: "Ángela Gabriela",
        apellidos: "Tenorio Micolta",
        biografia: "Conocida como \"La Gacela\", nació en Lago Agrio y se formó en Quito. Es una de las velocistas ecuatorianas más destacadas: ganó medallas mundiales juveniles, plata en los Panamericanos de Toronto 2015 y ha competido en tres Juegos Olímpicos.",
        deporte: "Atletismo",
        especialidad: "Velocidad (100 m y 200 m)",
        logros: [
            "Plata en los 100 m de los Juegos Panamericanos de Toronto 2015",
            "Plata en 100 m y bronce en 200 m en el Mundial Juvenil de Oregón 2014",
            "Olímpica en Río 2016, Tokio 2020 y París 2024"
        ],
        lugarNacimiento: "Lago Agrio (Nueva Loja), Sucumbíos, Ecuador",
        motivacion: "Representar a Ecuador y al continente; reconoce a su entrenador Nelson Gutiérrez y dice que, pese a los triunfos, hay que mantener la humildad.",
        fechaNacimiento: 1996,
        stats: [
            { etiqueta: "Mejor marca 100 m", valor: "10.99 s (Toronto 2015, récord nacional)" },
            { etiqueta: "Mejor marca 200 m (legal)", valor: "22.84 s" },
            { etiqueta: "Participaciones olímpicas", valor: "3" },
            { etiqueta: "Mejor resultado olímpico", valor: "Semifinal 100 m, Río 2016" }
        ],
        imagen: {
            portada: "/deportistas/angela-tenorio-portada.png",
        }
    },
    {
        id: 3,
        nombres: "Narcisa Marizol",
        apellidos: "Landázuri Benítez",
        biografia: "Velocista esmeraldeña conocida como Marizol Landázuri y apodada \"La Pantera\". Compitió en los 100 m en Río 2016 y formó parte del relevo 4x100 m ecuatoriano que clasificó por primera vez a unos Juegos Olímpicos y marcó récord nacional en Tokio 2020.",
        deporte: "Atletismo",
        especialidad: "Velocidad (100 m y relevo 4x100 m)",
        logros: [
            "Oro en los 100 m de los Juegos Suramericanos de Cochabamba 2018",
            "Récord nacional de relevo 4x100 m (43.69 s) en los Juegos Olímpicos de Tokio 2020",
            "Olímpica en Río 2016 (100 m) y Tokio 2020 (relevo 4x100 m)"
        ],
        lugarNacimiento: "Esmeraldas, Ecuador",
        motivacion: "Competir por Ecuador en la velocidad y en los relevos junto a Ángela Tenorio, Anahí Suárez y Yuliana Angulo, con quienes batió el récord nacional.",
        fechaNacimiento: 1991,
        stats: [
            { etiqueta: "Mejor marca 100 m", valor: "11.12 s (Cochabamba 2018)" },
            { etiqueta: "Mejor marca 200 m", valor: "23.22 s (Quito 2017)" },
            { etiqueta: "Relevo 4x100 m (Tokio 2020)", valor: "43.69 s, récord nacional" },
            { etiqueta: "Participaciones olímpicas", valor: "2" }
        ],
        imagen: {
            portada: "/deportistas/narcisa-landazuri-portada.png",
        }
    },
    {
        id: 4,
        nombres: "Neisi Patricia",
        apellidos: "Dajomes Barrera",
        biografia: "Pesista amazónica nacida en Puyo, hija de refugiados colombianos. En Tokio 2020 se convirtió en la primera mujer ecuatoriana en ganar una medalla olímpica y en París 2024 sumó un bronce. Tras cumplir una suspensión de 14 meses, volvió a competir en 2026.",
        deporte: "Levantamiento de pesas (halterofilia)",
        especialidad: "Categorías de 76 kg y 81 kg",
        logros: [
            "Medalla de oro en los Juegos Olímpicos de Tokio 2020 (76 kg)",
            "Medalla de bronce en los Juegos Olímpicos de París 2024 (81 kg)",
            "Primera mujer ecuatoriana en ganar dos medallas olímpicas"
        ],
        lugarNacimiento: "Puyo, Pastaza, Ecuador",
        motivacion: "Dedicó su oro olímpico a su mamá y a su hermano fallecidos, a quienes escribió en la mano al subir al podio.",
        fechaNacimiento: 1998,
        stats: [
            { etiqueta: "París 2024 (81 kg)", valor: "Bronce, total 267 kg" },
            { etiqueta: "París 2024: arranque / envión", valor: "122 kg / 145 kg" },
            { etiqueta: "Participaciones olímpicas", valor: "3 (Río 2016: 7.ª)" },
            { etiqueta: "Medallas olímpicas", valor: "2 (1 oro, 1 bronce)" }
        ],
        imagen: {
            portada: "/deportistas/neisi-dajomes-portada.png",
        }
    },
    {
        id: 5,
        nombres: "Tamara Yajaira",
        apellidos: "Salazar Arce",
        biografia: "Pesista criada en la comunidad de Pusir Grande, en el valle del Chota. Practicó atletismo de niña y llegó a las pesas hacia los 13 años. Fue campeona nacional desde la adolescencia, subcampeona mundial en 2018 y medallista de plata en Tokio 2020.",
        deporte: "Levantamiento de pesas (halterofilia)",
        especialidad: "Categoría de 87 kg",
        logros: [
            "Medalla de plata en los Juegos Olímpicos de Tokio 2020 (87 kg)",
            "Plata en el Mundial Absoluto de Turkmenistán 2018",
            "Dos bronces en el Mundial de Tailandia 2019 (envión y total)"
        ],
        lugarNacimiento: "Pusir Grande, Carchi, Ecuador",
        motivacion: "Mostrar a los jóvenes de su comunidad en el valle del Chota que con esfuerzo todo es posible.",
        fechaNacimiento: 1997,
        stats: [
            { etiqueta: "Tokio 2020 (87 kg)", valor: "Plata, total 263 kg" },
            { etiqueta: "Mundial 2018", valor: "Plata" },
            { etiqueta: "Mundial 2019", valor: "2 bronces" },
            { etiqueta: "Juegos Panamericanos Lima 2019", valor: "Bronce" }
        ],
        imagen: {
            portada: "/deportistas/tamara-salazar-portada.png",
        }
    },
    {
        id: 6,
        nombres: "Lisseth",
        apellidos: "Ayoví",
        biografia: "Halterista de Machala, conocida como \"la sonrisa del Ecuador\". Empezó en el deporte a los 10 años, fue triple campeona panamericana en 2024 y en París 2024 terminó cuarta, logrando un diploma olímpico.",
        deporte: "Levantamiento de pesas (halterofilia)",
        especialidad: "Categoría +81 kg / +87 kg",
        logros: [
            "Diploma olímpico: 4.º lugar en París 2024 (+81 kg)",
            "Triple campeona panamericana en Caracas 2024 (+87 kg)",
            "Plata en los Juegos Panamericanos de Santiago 2023"
        ],
        lugarNacimiento: "Machala, El Oro, Ecuador",
        motivacion: "Aun cuando pensó en retirarse tras los obstáculos para clasificar, el apoyo de su entorno la hizo seguir hasta cumplir su sueño olímpico.",
        fechaNacimiento: 1998,
        stats: [
            { etiqueta: "París 2024 (+81 kg)", valor: "4.º lugar, total 283 kg" },
            { etiqueta: "París 2024: arranque / envión", valor: "123 kg / 160 kg" },
            { etiqueta: "Panamericano Caracas 2024", valor: "3 oros (118 / 151 / 269 kg)" },
            { etiqueta: "Panamericanos Santiago 2023", valor: "Plata (por 1 kg)" }
        ],
        imagen: {
            portada: "/deportistas/lisseth-ayovi-portada.png",
        }
    },
    {
        id: 7,
        nombres: "Brian Daniel",
        apellidos: "Pintado Álvarez",
        biografia: "Marchista cuencano que pasó del fútbol, la natación y el taekwondo a la marcha atlética. En París 2024 ganó el oro en los 20 km marcha y la plata en el relevo mixto, convirtiéndose en el primer ecuatoriano con dos medallas olímpicas en una misma edición.",
        deporte: "Atletismo",
        especialidad: "Marcha atlética (20 km y 35 km)",
        logros: [
            "Oro en los 20 km marcha de los Juegos Olímpicos de París 2024",
            "Plata en el relevo mixto de marcha, París 2024 (junto a Glenda Morejón)",
            "Plata en los 35 km del Mundial de Atletismo de Budapest 2023"
        ],
        lugarNacimiento: "Cuenca, Azuay, Ecuador",
        motivacion: "Siempre soñó con seguir los pasos de Jefferson Pérez y dedica sus triunfos a su familia y a sus hijos.",
        fechaNacimiento: 1995,
        stats: [
            { etiqueta: "20 km marcha, París 2024", valor: "Oro, 1:18:55" },
            { etiqueta: "Medallas olímpicas", valor: "2 (1 oro, 1 plata)" },
            { etiqueta: "Mundial Budapest 2023 (35 km)", valor: "Plata" },
            { etiqueta: "Participaciones olímpicas", valor: "3 (Río 2016: 37.º; Tokio 2020: 12.º)" }
        ],
        imagen: {
            portada: "/deportistas/bryan-daniel-portada.png",
        }
    },
    {
        id: 8,
        nombres: "Richard Antonio",
        apellidos: "Carapaz Montenegro",
        biografia: "Ciclista de ruta apodado \"La Locomotora\", criado en las montañas de Carchi. Fue el primer ecuatoriano en ganar una gran vuelta (Giro de Italia 2019) y en Tokio 2020 conquistó el oro olímpico en la prueba de ruta.",
        deporte: "Ciclismo",
        especialidad: "Ciclismo de ruta (escalador)",
        logros: [
            "Campeón del Giro de Italia 2019",
            "Medalla de oro olímpica en la prueba de ruta, Tokio 2020",
            "Ganador de la clasificación de montaña del Tour de Francia 2024"
        ],
        lugarNacimiento: "El Carmelo, Tulcán, Carchi, Ecuador",
        motivacion: "Cada invierno regresa a su comunidad de Carchi para ayudar a niños a iniciarse en el ciclismo.",
        fechaNacimiento: 1993,
        stats: [
            { etiqueta: "Podios en grandes vueltas", valor: "Giro, Tour y Vuelta" },
            { etiqueta: "Giro de Italia", valor: "1.º en 2019, 3.º en 2025" },
            { etiqueta: "Victorias profesionales", valor: "Más de 20" },
            { etiqueta: "Equipo actual", valor: "EF Education–EasyPost" }
        ],
        imagen: {
            portada: "/deportistas/richard-carapaz-portada.png",
        }
    },
    {
        id: 9,
        nombres: "Paola Bibiana",
        apellidos: "Pérez Saquipay",
        biografia: "Marchista cuencana conocida como \"Piru\". Compitió en tres Juegos Olímpicos (Londres 2012, Río 2016 y Tokio 2020) y fue una de las figuras de la marcha ecuatoriana durante más de dos décadas. Se retiró del alto rendimiento en 2025.",
        deporte: "Atletismo",
        especialidad: "Marcha atlética (20 km, 35 km y 50 km)",
        logros: [
            "Bronce en los 20 km marcha de los Juegos Panamericanos de Toronto 2015",
            "9.ª en los 20 km marcha de los Juegos Olímpicos de Tokio 2020",
            "Campeona del Mundial de Marcha por Equipos 2023 (35 km, por equipos)"
        ],
        lugarNacimiento: "Cuenca, Azuay, Ecuador",
        motivacion: "Tras una carrera de más de dos décadas, decidió dar prioridad a su familia y a su hijo, agradecida de lo que le dio el deporte.",
        fechaNacimiento: 1989,
        stats: [
            { etiqueta: "Mejor marca 20 km", valor: "1:29:06 (Sucúa, 2017)" },
            { etiqueta: "Mejor marca 35 km", valor: "2:48:27 (2022)" },
            { etiqueta: "Mejor marca 50 km", valor: "4:12:56 (2018)" },
            { etiqueta: "Tokio 2020 (20 km)", valor: "9.ª, 1:31:26" }
        ],
        imagen: {
            portada: "/deportistas/paola-perez-portada.png",
        }
    },
    {
        id: 10,
        nombres: "Gabriela Anahí",
        apellidos: "Suárez",
        biografia: "Velocista nacida en Imbabura y criada en Carchi, que antes practicó judo. Entrena en Quito y ha roto récords nacionales en los 200 m y los 400 m. Debutó en unos Juegos Olímpicos en Tokio 2020 con el relevo 4x100 m.",
        deporte: "Atletismo",
        especialidad: "Velocidad (100 m, 200 m y 400 m)",
        logros: [
            "Récord nacional de 200 m (22.74 s) en el Mundial de Oregón 2022",
            "Récord nacional de 400 m (52.24 s) en los Juegos Suramericanos de Asunción 2022",
            "Bronce en los 100 m de los Juegos Olímpicos de la Juventud, Buenos Aires 2018"
        ],
        lugarNacimiento: "Ibarra, Imbabura, Ecuador",
        motivacion: "Quiere ser el orgullo de su madre y de sus diez hermanos, y soñaba con ser entrenadora de atletismo y abogada.",
        fechaNacimiento: 2001,
        stats: [
            { etiqueta: "Récord nacional 200 m", valor: "22.74 s (2022)" },
            { etiqueta: "Récord nacional 400 m", valor: "52.24 s (2022)" },
            { etiqueta: "Relevo 4x100 m, Tokio 2020", valor: "43.69 s, récord nacional" },
            { etiqueta: "Sudamericano Sub-23 2022 (100 m)", valor: "Oro, 11.37 s" }
        ],
        imagen: {
            portada: "/deportistas/gabriela-suarez-portada.png",
        }
    },
    {
        id: 13,
        nombres: "Jorge Alberto",
        apellidos: "Miño Puga",
        biografia: "Tenimesista guayaquileño, apodado \"Tito\". Fue el primer ecuatoriano varón en competir en tenis de mesa en unos Juegos Olímpicos (Tokio 2020) y llegó a los dieciseisavos de final en París 2024. Juega en la Bundesliga de Alemania.",
        deporte: "Tenis de mesa",
        especialidad: "Individuales y dobles masculinos",
        logros: [
            "Primer ecuatoriano varón en tenis de mesa olímpico (Tokio 2020)",
            "Dieciseisavos de final en los Juegos Olímpicos de París 2024",
            "Oro individual en los Juegos Bolivarianos Ayacucho-Lima 2025"
        ],
        lugarNacimiento: "Guayaquil, Guayas, Ecuador",
        motivacion: "Cumplir el sueño de jugar unos Juegos Olímpicos; por eso se fue a Alemania, donde encontró el nivel competitivo que no hallaba en Ecuador.",
        fechaNacimiento: 1990,
        stats: [
            { etiqueta: "Participaciones olímpicas", valor: "2 (Tokio 2020 y París 2024)" },
            { etiqueta: "Bolivarianos 2025", valor: "4 medallas (1 oro, 3 bronces)" },
            { etiqueta: "Bolivarianos 2022", valor: "Oro en dobles + 2 bronces" },
            { etiqueta: "Liga actual", valor: "Bundesliga (Alemania)" }
        ],
        imagen: {
            portada: "/deportistas/jorge-mino-portada.png",
        }
    },
    {
        id: 14,
        nombres: "Julio César",
        apellidos: "Castillo Torres",
        biografia: "Boxeador esmeraldeño apodado \"La Yula\". Compitió en tres Juegos Olímpicos (Londres 2012, Río 2016 y Tokio 2020), donde fue abanderado de Ecuador. Su mayor éxito llegó en 2019 con la plata en el Mundial de Ekaterimburgo y en los Panamericanos de Lima.",
        deporte: "Boxeo",
        especialidad: "Peso pesado (81–91 kg)",
        logros: [
            "Subcampeón mundial de boxeo en Ekaterimburgo 2019",
            "Medalla de plata en los Juegos Panamericanos de Lima 2019 (91 kg)",
            "Olímpico en Londres 2012, Río 2016 y Tokio 2020"
        ],
        lugarNacimiento: "Esmeraldas, Ecuador",
        motivacion: "Dar un buen resultado para su país en el boxeo, con la ilusión de seguir compitiendo a pesar de su edad.",
        fechaNacimiento: 1988,
        stats: [
            { etiqueta: "Participaciones olímpicas", valor: "3" },
            { etiqueta: "Mundial 2019", valor: "Plata" },
            { etiqueta: "Panamericanos", valor: "Bronce 2007, plata 2011, plata 2019" },
            { etiqueta: "Categoría", valor: "81–91 kg" }
        ],
        imagen: {
            portada: "/deportistas/julio-castillo-portada.png",
        }
    },
    {
        id: 15,
        nombres: "Samantha Michelle",
        apellidos: "Arévalo Salinas",
        biografia: "Nadadora criada en Macas, junto al río Upano, y radicada en Cuenca. Debutó en Londres 2012 en piscina y luego se especializó en aguas abiertas. En 2017 se convirtió en la primera ecuatoriana subcampeona en un Mundial absoluto de natación y ha competido en tres Juegos Olímpicos.",
        deporte: "Natación",
        especialidad: "Aguas abiertas (10 km)",
        logros: [
            "Plata en los 10 km de aguas abiertas del Mundial de Budapest 2017",
            "Bronce en los 10 km de aguas abiertas de los Juegos Panamericanos de Toronto 2015",
            "Olímpica en Londres 2012, Río 2016 (9.ª) y Tokio 2020 (11.ª)"
        ],
        lugarNacimiento: "Cuenca, Azuay, Ecuador (criada en Macas, Morona Santiago)",
        motivacion: "Llevar el nombre de Ecuador al podio en las aguas abiertas, un deporte aún poco conocido en el país.",
        fechaNacimiento: 1994,
        stats: [
            { etiqueta: "Mundial Budapest 2017 (10 km)", valor: "Plata, 2:00:17" },
            { etiqueta: "Río 2016 (10 km)", valor: "9.º lugar" },
            { etiqueta: "Tokio 2020 (10 km)", valor: "11.º lugar, 2:01:30" },
            { etiqueta: "Londres 2012 (800 m libre)", valor: "29.ª en las series" }
        ],
        imagen: {
            portada: "/deportistas/samantha-arevalo-portada.png",
        }
    }
];
