// items.js - Checklist de Validación de Cobertura (V1 a V43)
const checklistItems = [
    // ==========================================
    // 1. PRE-VIAJE
    // ==========================================
    {
        id: "V1",
        etapa: "pre-viaje",
        dimension: "Cognitiva / Pragmática",
        texto: "La información general de los servicios turísticos está disponible, es atractiva, detallada y está actualizada."
    },
    {
        id: "V2",
        etapa: "pre-viaje",
        dimension: "Pragmática",
        texto: "El prestador cuenta con materiales promocionales digitales (redes sociales, página web) y/o físicos (folletos)."
    },
    {
        id: "V3",
        etapa: "pre-viaje",
        dimension: "Sensorial",
        texto: "Los materiales promocionales presentan un diseño intuitivo y visualmente atractivo."
    },
    {
        id: "V4",
        etapa: "pre-viaje",
        dimension: "Relacional",
        texto: "Están disponibles testimonios y reseñas de otros turistas."
    },
    {
        id: "V5",
        etapa: "pre-viaje",
        dimension: "Relacional",
        texto: "Existen canales para realizar preguntas previas y el prestador responde eficaz y oportunamente."
    },
    {
        id: "V6",
        etapa: "pre-viaje",
        dimension: "Pragmática",
        texto: "Se ofrecen opciones de servicios (alojamiento, comida, etc.) para diferentes presupuestos y preferencias."
    },
    {
        id: "V7",
        etapa: "pre-viaje",
        dimension: "Pragmática / Cognitiva",
        texto: "El proceso de reserva de servicios es sencillo, intuitivo y multicanal."
    },
    {
        id: "V8",
        etapa: "pre-viaje",
        dimension: "Pragmática",
        texto: "Se ofrecen políticas de cancelación claras y flexibles."
    },
    {
        id: "V9",
        etapa: "pre-viaje",
        dimension: "Cognitiva",
        texto: "Cuando el servicio y las condiciones de la zona lo requieren, se ofrecen sugerencias sobre vestimenta adecuada y/o costumbres locales."
    },
    {
        id: "V10",
        etapa: "pre-viaje",
        dimension: "Relacional",
        texto: "Los turistas reciben recordatorios o confirmaciones antes de la salida."
    },

    // ==========================================
    // 2. DURANTE EL VIAJE
    // ==========================================
    {
        id: "V11",
        etapa: "durante-viaje",
        dimension: "Emocional / Cognitiva",
        texto: "Se advierten las condiciones físicas de caminos y accesos mediante algún medio de verificación anticipado (ej. avisos en redes sociales, correos o mensajes)."
    },
    {
        id: "V12",
        etapa: "durante-viaje",
        dimension: "Cognitiva",
        texto: "Se entrega información clara y oportuna sobre las alternativas de transporte o conectividad local disponibles."
    },
    {
        id: "V13",
        etapa: "durante-viaje",
        dimension: "Cognitiva",
        texto: "Se orienta al turista respecto a la logística de abastecimiento (combustible, disponibilidad de efectivo/cajeros) y de conectividad digital (señal móvil) considerando las condiciones de la zona."
    },
    {
        id: "V14",
        etapa: "durante-viaje",
        dimension: "Pragmática / Cognitiva",
        texto: "Existen puntos de información turística que entregan información digital y/o en formato físico (offline)."
    },
    {
        id: "V15",
        etapa: "durante-viaje",
        dimension: "Emocional / Cognitiva",
        texto: "Se proporcionan pautas claras sobre procedimientos de emergencia y las instalaciones cuentan con planes de evacuación marcados."
    },
    {
        id: "V16",
        etapa: "durante-viaje",
        dimension: "Pragmática",
        texto: "Los alojamientos cuentan con servicios básicos garantizados (limpieza, Wifi, seguridad y agua potable todo el año)."
    },
    {
        id: "V17",
        etapa: "durante-viaje",
        dimension: "Cultura local",
        texto: "La oferta gastronómica incluye una variedad de opciones que reflejan la cultura y las tradiciones culinarias del destino."
    },
    {
        id: "V18",
        etapa: "durante-viaje",
        dimension: "Pragmática / Relacional",
        texto: "En caso de incluir alimentación, se ofrecen opciones adaptadas para personas con restricciones dietéticas (ej. vegetariana, celiaquía)."
    },
    {
        id: "V19",
        etapa: "durante-viaje",
        dimension: "Novedad / Cognitiva",
        texto: "El destino incluye una combinación equilibrada de atracciones naturales, culturales e históricas."
    },
    {
        id: "V20",
        etapa: "durante-viaje",
        dimension: "Cognitiva / Sostenibilidad",
        texto: "El prestador orienta o facilita información actualizada sobre los accesos, horarios y normativas de los atractivos consolidados de la zona, como Parques y Reservas Nacionales."
    },
    {
        id: "V21",
        etapa: "durante-viaje",
        dimension: "Sensorial",
        texto: "El entorno natural es visualmente atractivo y único."
    },
    {
        id: "V22",
        etapa: "durante-viaje",
        dimension: "Sensorial",
        texto: "Los accesos y el entorno físico del servicio presentan condiciones adecuadas de mantenimiento, señalización y aseo."
    },
    {
        id: "V23",
        etapa: "durante-viaje",
        dimension: "Pragmática / Sensorial",
        texto: "Los senderos están bien conservados y señalizados."
    },
    {
        id: "V24",
        etapa: "durante-viaje",
        dimension: "Pragmática",
        texto: "Las actividades disponibles en las atracciones se adaptan a diferentes edades y niveles de experiencia."
    },
    {
        id: "V25",
        etapa: "durante-viaje",
        dimension: "Emocional / Cognitiva",
        texto: "El servicio provee equipamiento físico de protección (ej. capas de agua, refugios) o planes de mitigación frente a condiciones climáticas que afecten la experiencia."
    },
    {
        id: "V26",
        etapa: "durante-viaje",
        dimension: "Cognitiva",
        texto: "Las actividades pueden ayudar al turista a aprender algo nuevo."
    },
    {
        id: "V27",
        etapa: "durante-viaje",
        dimension: "Sostenibilidad",
        texto: "Se promueve el respeto a la flora y fauna del lugar."
    },
    {
        id: "V28",
        etapa: "durante-viaje",
        dimension: "Sostenibilidad / Conductual",
        texto: "Se realizan actividades conservación y son comunicadas a los visitantes."
    },
    {
        id: "V29",
        etapa: "durante-viaje",
        dimension: "Sostenibilidad / Pragmática",
        texto: "Se gestiona el número de turistas para evitar la sobreexplotación del área."
    },
    {
        id: "V30",
        etapa: "durante-viaje",
        dimension: "Sostenibilidad",
        texto: "El destino implementa y promueve prácticas de sostenibilidad, reciclaje, uso consciente de recursos y energía renovable."
    },
    {
        id: "V31",
        etapa: "durante-viaje",
        dimension: "Relacional",
        texto: "Los proveedores de servicios y personal en general demuestran ser amables, atentos y profesionales."
    },
    {
        id: "V32",
        etapa: "durante-viaje",
        dimension: "Pragmática / Relacional",
        texto: "Se dispone de herramientas y recursos de traducción (guías, aplicaciones, señalización bilingüe/multilingüe)."
    },
    {
        id: "V33",
        etapa: "durante-viaje",
        dimension: "Cultura local",
        texto: "Se promueven actividades que reflejen las tradiciones y los valores culturales de la comunidad."
    },
    {
        id: "V34",
        etapa: "durante-viaje",
        dimension: "Relacional",
        texto: "La diversidad cultural se celebra y se respeta en las experiencias que se ofrecen."
    },
    {
        id: "V35",
        etapa: "durante-viaje",
        dimension: "Relacional / Cultura local",
        texto: "Los prestadores promueven interacciones culturales auténticas con la población local."
    },
    {
        id: "V36",
        etapa: "durante-viaje",
        dimension: "Novedad / Emocional",
        texto: "El entorno y el servicio integran elementos que propician la sensación de novedad y desconexión de la rutina."
    },
    {
        id: "V37",
        etapa: "durante-viaje",
        dimension: "Emocional",
        texto: "El servicio provee espacios o momentos libres de estrés que favorecen el descanso mental y la recarga de energías."
    },

    // ==========================================
    // 3. POST-VIAJE
    // ==========================================
    {
        id: "V38",
        etapa: "post-viaje",
        dimension: "Relacional",
        texto: "Se proporciona un canal claro y efectivo (ej. Teléfono, web o WhatsApp) para abordar asuntos pendientes (ej. facturación, reembolsos)."
    },
    {
        id: "V39",
        etapa: "post-viaje",
        dimension: "Relacional",
        texto: "El prestador cuenta con un protocolo o sistema para el seguimiento y fidelización post-viaje (ej. mensaje de agradecimiento)."
    },
    {
        id: "V40",
        etapa: "post-viaje",
        dimension: "Conductual",
        texto: "Se brindan oportunidades a los turistas para compartir comentarios o calificar los servicios."
    },
    {
        id: "V41",
        etapa: "post-viaje",
        dimension: "Relacional / Pragmática",
        texto: "Se tiene en cuenta los comentarios de los clientes para mejorar."
    },
    {
        id: "V42",
        etapa: "post-viaje",
        dimension: "Emocional",
        texto: "El servicio cumple lo que prometió en sus materiales promocionales."
    },
    {
        id: "V43",
        etapa: "post-viaje",
        dimension: "Cognitiva / Emocional",
        texto: "La relación precio/calidad del servicio prestado es coherente."
    }
];
