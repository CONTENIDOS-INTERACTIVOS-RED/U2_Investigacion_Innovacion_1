export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Proceso de Innovación',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Creatividad e innovación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Innovación y creatividad: elementos fundamentales y aplicaciones prácticas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de innovación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de investigación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Identificación de oportunidades',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Metodologías para identificar oportunidades',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Ideación: Generación, evaluación y selección de ideas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas y técnicas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cavazos Arroyo, J. (2021). Creatividad e innovación social: Conceptos, procesos y desafíos. Revista Iberoamericana de Contaduría, Economía y Administración, 10(19), 43-59.',
      link: '',
    },
    {
      referencia:
        'Castro Martínez, E., & Fernández de Lucio, I. (2020). Innovación abierta: Retos y oportunidades para la empresa. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Chesbrough, H. (2020). Innovación abierta: Nuevos imperativos para la creación y el aprovechamiento de la tecnología. Harvard Business Review Press.',
      link: '',
    },
    {
      referencia:
        'Guilera, L., & Garrell, A. (2021). Creatividad e innovación: Modelos, métodos y herramientas. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Herrera Lemus, A., & Lazcano Herrera, C. (2020). Innovación abierta: Claves para una estrategia exitosa. Editorial ESIC.',
      link: '',
    },
    {
      referencia:
        'Martínez-Gómez, V. (2024). Metodologías ágiles para la innovación. Editorial ESIC.',
      link: '',
    },
    {
      referencia:
        'Miranda González, F. J. (2023). Gestión estratégica de la innovación en las organizaciones. Editorial McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Pérez Calle, F. (2023). Innovación tecnológica y desarrollo organizacional. Editorial Universidad Nacional de Colombia.',
      link: '',
    },
    {
      referencia:
        'Suárez Mella, R., & Acevedo Urquiaga, A. J. (2022). Gestión de la innovación: Procesos, modelos y aplicaciones. Editorial EcuRed.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Apps (<em>applications</em>)',
      significado:
        'programas de <em>software</em> diseñados para realizar funciones específicas en dispositivos electrónicos como teléfonos móviles, tabletas, computadoras y otros.',
    },
    {
      termino: '<em>Benchmark</em>',
      significado:
        'proceso de evaluación comparativa basado en mejores prácticas.',
    },
    {
      termino: '<em>Brainstorming</em>',
      significado:
        'técnica avanzada de generación de ideas que sigue un proceso sistemático y organizado para maximizar la creatividad grupal.',
    },
    {
      termino: '<em>Design Thinking</em>',
      significado:
        'metodología de innovación centrada en el usuario que consta de cinco fases: empatía, definición, ideación, prototipado y evaluación.',
    },
    {
      termino: '<em>Feedback</em>',
      significado:
        'retroalimentación o información de retorno sobre un proceso o producto.',
    },
    {
      termino: 'Innovación abierta (<em>Open Innovation</em>)',
      significado:
        'modelo que utiliza flujos de conocimiento interno y externo para acelerar la innovación interna y expandir mercados.',
    },
    {
      termino: '<em>Lean Startup</em>',
      significado:
        'enfoque sistemático para la creación y gestión de <em>startups</em> basado en el aprendizaje validado y la experimentación científica.',
    },
    {
      termino: '<em>MVP - Minimum Viable Product</em>',
      significado:
        'versión inicial de un producto con características mínimas necesarias para validar aprendizajes fundamentales sobre el mercado.',
    },
    {
      termino: 'Pensamiento lateral (<em>Lateral Thinking</em>)',
      significado:
        'técnica de resolución de problemas que busca aproximarse a las soluciones desde enfoques no convencionales.',
    },
    {
      termino: '<em>TRIZ - Theory of Inventive Problem Solving</em>',
      significado:
        'teoría basada en patrones predecibles en la evolución de sistemas técnicos.',
    },
  ],
}
