export default {
  global: {
    componenteFormativo: 'Seguimiento de la seguridad digital',
    descripcionCurso:
      'Con el desarrollo de este componente, el aprendiz estará altamente capacitado en establecer indicadores, métricas y alcance de seguimiento de la seguridad digital, según estándares y metodologías nacionales e internacionales; de igual manera, en realizar el monitoreo de la seguridad digital de acuerdo con los indicadores y métricas establecidos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Métodos de métricas e indicadores de monitoreo ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características de las métricas e indicadores',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de Indicadores',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<em>Testing</em> y monitoreo de la seguridad digital ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de pruebas de efectividad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Alcance de las pruebas de efectividad',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Procedimiento de las pruebas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '<em>Software</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Métodos de métricas e indicadores de monitoreo',
      referencia:
        'Organización Internacional de Normalización (ISO). (2013). <em>Seguridad de la información, ciberseguridad y protección de la privacidad.</em> (ISO 27001). ',
      tipo: 'Otro: Norma técnica',
      link: 'https://www.iso.org/standard/54534.html',
    },
    {
      tema: '1. Métodos de métricas e indicadores de monitoreo',
      referencia:
        'Organización Internacional de Normalización (ISO). (2016). <em>Tecnología de la información - Técnicas de seguridad - Gestión de la seguridad de la información - Seguimiento, medición, análisis y evaluación.</em> (ISO27004).',
      tipo: 'Otro: Norma técnica',
      link: 'https://www.iso.org/standard/64120.html',
    },
    {
      tema: '1. Métodos de métricas e indicadores de monitoreo',
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones (MINTIC). (2015). <em>Guía de indicadores de gestión para la seguridad de la información.</em>',
      tipo: 'Otro: Guía técnica',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G9_Indicadores_Gestion_Seguridad.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'cualquier cosa que tenga valor para la organización. [NTC 5411-1:2006].',
    },
    {
      termino: 'Amenaza',
      significado:
        'es toda aquella acción o serie de acciones, que aprovechan las vulnerabilidades para romper la seguridad de los sistemas.',
    },
    {
      termino: 'Control',
      significado:
        'medios para gestionar el riesgo, incluyendo políticas, procedimientos, directrices, prácticas o estructuras de la organización que pueden ser de naturaleza administrativa, técnica, de gestión o legal.',
    },
    {
      termino: 'Política',
      significado:
        'toda intención y directriz expresada formalmente por la Dirección.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'te trata de aquella debilidad o fallo de seguridad que se presenta en un sistema de información, que puede estar compuesto por software, hardware y otros componentes y servicios tecnológicos, generando riesgos de seguridad de la información.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones (MINTIC). (s.f.). Guía de indicadores de gestión para la seguridad de la información.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G9_Indicadores_Gestion_Seguridad.pdf ',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones (MINTIC). (s.f.). Guía Metodológica de Pruebas de Efectividad.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G1_Metodologia_pruebas_efectividad.pdf',
    },
    {
      referencia:
        'Organización Internacional de Normalización (ISO). (2013). Seguridad de la información, ciberseguridad y protección de la privacidad. (ISO 27001).',
      link: 'https://www.iso.org/standard/54534.html',
    },
    {
      referencia:
        'Organización Internacional de Normalización (ISO). (2016). Tecnología de la información - Técnicas de seguridad - Gestión de la seguridad de la información - Seguimiento, medición, análisis y evaluación. (ISO27004).',
      link: 'https://www.iso.org/standard/64120.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Pablo Cesar Pardo Ortiz',
          cargo: 'Experto Temático',
          centro:
            'Regional Cauca - Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro agropecuario La Granja',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor Metodológico y pedagógico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Revisión y corrección de estilo',
          centro: 'Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuadora Instruccional',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información.',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesora Metodológica',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amezquita',
          cargo: 'Diseñador web',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
