// items.js - Instrumento de Validación de Cobertura (V1 a V43)
const checklistItems = [
    // ==========================================
    // 1. PRE-VIAJE
    // ==========================================
    {
        id: "V1",
        numero: 1,
        etapa: "pre-viaje",
        categoria: "Información y Reservas",
        dimension: "Cognitiva / Pragmática",
        texto: "La información general de los servicios turísticos está disponible, es atractiva, detallada y está actualizada."
    },
    {
        id: "V2",
        numero: 2,
        etapa: "pre-viaje",
        categoria: "Información y Reservas",
        dimension: "Pragmática",
        texto: "El prestador cuenta con materiales promocionales digitales (redes sociales, página web) y/o físicos (folletos)."
    },
    {
        id: "V3",
        numero: 3,
        etapa: "pre-viaje",
        categoria: "Información y Reservas",
        dimension: "Sensorial",
        texto: "Los materiales promocionales presentan un diseño intuitivo y visualmente atractivo."
    },
    {
        id: "V4",
        numero: 4,
        etapa: "pre-viaje",
        categoria: "Información y Reservas",
        dimension: "Relacional",
        texto: "Están disponibles testimonios y reseñas de otros turistas."
    },
    {
        id: "V5",
        numero: 5,
        etapa: "pre-viaje",
        categoria: "Información y Reservas",
        dimension: "Relacional",
        texto: "Existen canales para realizar preguntas previas y el prestador responde eficaz y oportunamente."
    },
    {
        id: "V6",
        numero: 6,
        etapa: "pre-viaje",
        categoria: "Información y Reservas",
        dimension: "Pragmática",
        texto: "Se ofrecen opciones de servicios (alojamiento, comida, etc.) para diferentes presupuestos y preferencias."
    },
    {
        id: "V7",
        numero: 7,
        etapa: "pre-viaje",
        categoria: "Información y Reservas",
        dimension: "Pragmática / Cognitiva",
        texto: "El proceso de reserva de servicios es sencillo, intuitivo y multicanal."
    },
    {
        id: "V8",
        numero: 8,
        etapa: "pre-viaje",
        categoria: "Información y Reservas",
        dimension: "Pragmática",
        texto: "Se ofrecen políticas de cancelación claras y flexibles."
    },
    {
        id: "V9",
        numero: 9,
        etapa: "pre-viaje",
        categoria: "Información y Reservas",
        dimension: "Cognitiva",
        texto: "Cuando el servicio y las condiciones de la zona lo requieren, se ofrecen sugerencias sobre vestimenta adecuada y/o costumbres locales."
    },
    {
        id: "V10",
        numero: 10,
        etapa: "pre-viaje",
        categoria: "Información y Reservas",
        dimension: "Relacional",
        texto: "Los turistas reciben recordatorios o confirmaciones antes de la salida."
    },

    // ==========================================
    // 2. DURANTE EL VIAJE
    // ==========================================
    {
        id: "V11",
        numero: 11,
        etapa: "durante-viaje",
        categoria: "Rutas y Transporte",
        dimension: "Emocional / Cognitiva",
        texto: "Se advierten las condiciones físicas de caminos y accesos mediante algún medio de verificación anticipado (ej. avisos en redes sociales, correos o mensajes)."
    },
    {
        id: "V12",
        numero: 12,
        etapa: "durante-viaje",
        categoria: "Rutas y Transporte",
        dimension: "Cognitiva",
        texto: "Se entrega información clara y oportuna sobre las alternativas de transporte o conectividad local disponibles."
    },
    {
        id: "V13",
        numero: 13,
        etapa: "durante-viaje",
        categoria: "Logística y Servicios",
        dimension: "Cognitiva",
        texto: "Se orienta al turista respecto a la logística de abastecimiento (combustible, disponibilidad de efectivo/cajeros) y de conectividad digital (señal móvil) considerando las condiciones de la zona."
    },
    {
        id: "V14",
        numero: 14,
        etapa: "durante-viaje",
        categoria: "Información y Reservas",
        dimension: "Pragmática / Cognitiva",
        texto: "Existen puntos de información turística que entregan información digital y/o en formato físico (offline)."
    },
    {
        id: "V15",
        numero: 15,
        etapa: "durante-viaje",
        categoria: "Seguridad y Clima",
        dimension: "Emocional / Cognitiva",
        texto: "Se proporcionan pautas claras sobre procedimientos de emergencia y las instalaciones cuentan con planes de evacuación marcados."
    },
    {
        id: "V16",
        numero: 16,
        etapa: "durante-viaje",
        categoria: "Logística y Servicios",
        dimension: "Pragmática",
        texto: "Los alojamientos cuentan con servicios básicos garantizados (limpieza, Wifi, seguridad y agua potable todo el año)."
    },
    {
        id: "V17",
        numero: 17,
        etapa: "durante-viaje",
        categoria: "Gastronomía",
        dimension: "Cultura local",
        texto: "La oferta gastronómica incluye una variedad de opciones que reflejan la cultura y las tradiciones culinarias del destino."
    },
    {
        id: "V18",
        numero: 18,
        etapa: "durante-viaje",
        categoria: "Gastronomía",
        dimension: "Pragmática / Relacional",
        texto: "En caso de incluir alimentación, se ofrecen opciones adaptadas para personas con restricciones dietéticas (ej. vegetariana, celiaquía)."
    },
    {
        id: "V19",
        numero: 19,
        etapa: "durante-viaje",
        categoria: "Actividades y Atractivos",
        dimension: "Novedad / Cognitiva",
        texto: "El destino incluye una combinación equilibrada de atracciones naturales, culturales e históricas."
    },
    {
        id: "V20",
        numero: 20,
        etapa: "durante-viaje",
        categoria: "Actividades y Atractivos",
        dimension: "Cognitiva / Sostenibilidad",
        texto: "El prestador orienta o facilita información actualizada sobre los accesos, horarios y normativas de los atractivos consolidados de la zona, como Parques y Reservas Nacionales."
    },
    {
        id: "V21",
        numero: 21,
        etapa: "durante-viaje",
        categoria: "Actividades y Atractivos",
        dimension: "Sensorial",
        texto: "El entorno natural es visualmente atractivo y único."
    },
    {
        id: "V22",
        numero: 22,
        etapa: "durante-viaje",
        categoria: "Rutas y Transporte",
        dimension: "Sensorial",
        texto: "Los accesos y el entorno físico del servicio presentan condiciones adecuadas de mantenimiento, señalización y aseo."
    },
    {
        id: "V23",
        numero: 23,
        etapa: "durante-viaje",
        categoria: "Rutas y Transporte",
        dimension: "Pragmática / Sensorial",
        texto: "Los senderos están bien conservados y señalizados."
    },
    {
        id: "V24",
        numero: 24,
        etapa: "durante-viaje",
        categoria: "Actividades y Atractivos",
        dimension: "Pragmática",
        texto: "Las actividades disponibles en las atracciones se adaptan a diferentes edades y niveles de experiencia."
    },
    {
        id: "V25",
        numero: 25,
        etapa: "durante-viaje",
        categoria: "Seguridad y Clima",
        dimension: "Emocional / Cognitiva",
        texto: "El servicio provee equipamiento físico de protección (ej. capas de agua, refugios) o planes de mitigación frente a condiciones climáticas que afecten la experiencia."
    },
    {
        id: "V26",
        numero: 26,
        etapa: "durante-viaje",
        categoria: "Actividades y Atractivos",
        dimension: "Cognitiva",
        texto: "Las actividades pueden ayudar al turista a aprender algo nuevo."
    },
    {
        id: "V27",
        numero: 27,
        etapa: "durante-viaje",
        categoria: "Sostenibilidad",
        dimension: "Sostenibilidad",
        texto: "Se promueve el respeto a la flora y fauna del lugar."
    },
    {
        id: "V28",
        numero: 28,
        etapa: "durante-viaje",
        categoria: "Sostenibilidad",
        dimension: "Sostenibilidad / Conductual",
        texto: "Se realizan actividades conservación y son comunicadas a los visitantes."
    },
    {
        id: "V29",
        numero: 29,
        etapa: "durante-viaje",
        categoria: "Sostenibilidad",
        dimension: "Sostenibilidad / Pragmática",
        texto: "Se gestiona el número de turistas para evitar la sobreexplotación del área."
    },
    {
        id: "V30",
        numero: 30,
        etapa: "durante-viaje",
        categoria: "Sostenibilidad",
        dimension: "Sostenibilidad",
        texto: "El destino implementa y promueve prácticas de sostenibilidad, reciclaje, uso consciente de recursos y energía renovable."
    },
    {
        id: "V31",
        numero: 31,
        etapa: "durante-viaje",
        categoria: "Sostenibilidad",
        dimension: "Relacional",
        texto: "Los proveedores de servicios y personal en general demuestran ser amables, atentos y profesionales."
    },
    {
        id: "V32",
        numero: 32,
        etapa: "durante-viaje",
        categoria: "Hospitalidad y Cultura",
        dimension: "Pragmática / Relacional",
        texto: "Se dispone de herramientas y recursos de traducción (guías, aplicaciones, señalización bilingüe/multilingüe)."
    },
    {
        id: "V33",
        numero: 33,
        etapa: "durante-viaje",
        categoria: "Hospitalidad y Cultura",
        dimension: "Cultura local",
        texto: "Se promueven actividades que reflejen las tradiciones y los valores culturales de la comunidad."
    },
    {
        id: "V34",
        numero: 34,
        etapa: "durante-viaje",
        categoria: "Hospitalidad y Cultura",
        dimension: "Relacional",
        texto: "La diversidad cultural se celebra y se respeta en las experiencias que se ofrecen."
    },
    {
        id: "V35",
        numero: 35,
        etapa: "durante-viaje",
        categoria: "Hospitalidad y Cultura",
        dimension: "Relacional / Cultura local",
        texto: "Los prestadores promueven interacciones culturales auténticas con la población local."
    },
    {
        id: "V36",
        numero: 36,
        etapa: "durante-viaje",
        categoria: "Descanso y Bienestar",
        dimension: "Novedad / Emocional",
        texto: "El entorno y el servicio integran elementos que propician la sensación de novedad y desconexión de la rutina."
    },
    {
        id: "V37",
        numero: 37,
        etapa: "durante-viaje",
        categoria: "Descanso y Bienestar",
        dimension: "Emocional",
        texto: "El servicio provee espacios o momentos libres de estrés que favorecen el descanso mental y la recarga de energías."
    },

    // ==========================================
    // 3. POST-VIAJE
    // ==========================================
    {
        id: "V38",
        numero: 38,
        etapa: "post-viaje",
        categoria: "Post-viaje",
        dimension: "Relacional",
        texto: "Se proporciona un canal claro y efectivo (ej. Teléfono, web o WhatsApp) para abordar asuntos pendientes (ej. facturación, reembolsos)."
    },
    {
        id: "V39",
        numero: 39,
        etapa: "post-viaje",
        categoria: "Post-viaje",
        dimension: "Relacional",
        texto: "El prestador cuenta con un protocolo o sistema para el seguimiento y fidelización post-viaje (ej. mensaje de agradecimiento)."
    },
    {
        id: "V40",
        numero: 40,
        etapa: "post-viaje",
        categoria: "Post-viaje",
        dimension: "Conductual",
        texto: "Se brindan oportunidades a los turistas para compartir comentarios o calificar los servicios."
    },
    {
        id: "V41",
        numero: 41,
        etapa: "post-viaje",
        categoria: "Post-viaje",
        dimension: "Relacional / Pragmática",
        texto: "Se tiene en cuenta los comentarios de los clientes para mejorar."
    },
    {
        id: "V42",
        numero: 42,
        etapa: "post-viaje",
        categoria: "Post-viaje",
        dimension: "Emocional",
        texto: "El servicio cumple lo que prometió en sus materiales promocionales."
    },
    {
        id: "V43",
        numero: 43,
        etapa: "post-viaje",
        categoria: "Post-viaje",
        dimension: "Cognitiva / Emocional",
        texto: "La relación precio/calidad del servicio prestado es coherente."
    }
];
