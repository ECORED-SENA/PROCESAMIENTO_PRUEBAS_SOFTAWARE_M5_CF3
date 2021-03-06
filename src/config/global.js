export default {
  global: {
    componenteFormativo: 'Implementar un sistema de información web',
    descripcionCurso:
      'Se abordarán los conceptos de configuración del entorno de desarrollo como espacio de trabajo para el desarrollo de la API Rest. Seguidamente se revisan las buenas prácticas de estándares de codificación para el desarrollo de la API que será construida con las tecnologías de Node JS, Express, y MongoDB, asimismo, se abordará <i>tenting</i> de la API desarrollada con Postman.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Diseño y codificación de <i>frontend</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Prototipo (<i>mockups</i>, Sketch, <i>wireframe</i>)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Maquetación del sitio web',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Uso de estilos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Validación de interfaz de usuario',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Implementación de <i>backend</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'CRUD',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Definición de la base de datos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Instalación <i>Node JS</i>',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Api CRUD con <i>Node JS</i>',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'API de acceso a la base de datos',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Codificación',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Pruebas unitarias',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Manuales técnicos y de usuario',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Choque, J. C. (2016). Adición de estándares de codificación NodeJS (1ff84b6a) · Commits · Adrian / bolivia-libre. GitLab. ',
      link:
        'https://gitlab.agetic.gob.bo/dbarra/bolivia-libre/commit/1ff84b6ae70f0e9436f6e6ddc7f3e060bc9556ad',
    },
    {
      referencia: 'Chrome Web Store. (2021). Postman. ',
      link:
        'https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=es-419 ',
    },
    {
      referencia:
        'Colaboradores de los Proyectos Wikimedia. (2020). Framework para aplicaciones web. .',
      link:
        'https://es.wikipedia.org/w/index.php?title=Framework_para_aplicaciones_web&oldid=128980356',
    },
    {
      referencia: 'Express. (2021). Direccionamiento básico de Express. ',
      link: 'https://expressjs.com/es/starter/basic-routing.html ',
    },
    {
      referencia:
        'Fundéu BBV. (2012). Edición y maquetación de documentos web. ',
      link:
        'https://www.fundeu.es/escribireninternet/edicion-y-maquetacion-de-documentos-web ',
    },
    {
      referencia: 'Gómez, D. (2017). Nodemon. vortexbird. ',
      link:
        'https://vortexbird.com/nodemon/#:%7E:text=Nodemon%20es%20una%20utilidad%20que,desarrollo%20de%20aplicaciones%20en%20nodojs ',
    },
    {
      referencia:
        'Lázaro, G. (2015). Efecto Ripple de Material Design [HTML+CSS+JS]. ',
      link:
        'https://gersonlazaro.com/tutorial-efecto-ripple-de-material-design-html-css-js',
    },
    {
      referencia:
        'López, A. (2021). Qué es Postman y para qué sirve. OpenWebinars.net. ',
      link: 'https://openwebinars.net/blog/que-es-postman/ ',
    },
    {
      referencia: 'Material Design. (2021). The color system. ',
      link:
        'https://material.io/design/color/the-color-system.html#color-usage-and-palettes',
    },
    {
      referencia: 'MDN Web Docs. (2021). Introducción a Express/Node. ',
      link:
        'https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction ',
    },
    {
      referencia: 'Mozilla. (2021). Await - JavaScript | MDN. MDN Web Docs. ',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/await ',
    },
    {
      referencia: 'NodeJS.org. (2021). Acerca de Node.js. Node.js. ',
      link: 'https://nodejs.org/es/about/ ',
    },
    {
      referencia: 'Npm. (2021). npm About. ',
      link: 'https://www.npmjs.com/about ',
    },
    {
      referencia: 'Red Hat. (2021). El concepto de IDE. ',
      link: 'https://www.redhat.com/es/topics/middleware/what-is-ide',
    },
    {
      referencia:
        'Whyte, A. (2021). Google JavaScript Style Guide. Google JavaScript Style Guide. ',
      link: 'https://google.github.io/styleguide/javascriptguide.xml ',
    },
  ],
  glosario: [
    {
      termino: 'Identación',
      significado:
        'dentro del contexto del desarrollo <i>software</i>, identar es un término que significa mover un bloque de código hacia la derecha insertando espacios o tabulaciones, para así separarlo del margen izquierdo y distinguirlo mejor del texto adyacente, es decir de organizar mejor el código. La identificación se considera como principio fundamental de buena práctica de la programación <i>software</i>.',
    },
    {
      termino: 'JSON',
      significado:
        'JavaScript Object Notation (JSON). Es un formato basado en texto estándar que se utiliza para representar datos estructurados en la sintaxis de objetos de JavaScript. Se utiliza principalmente para transmitir datos en aplicaciones web (como es el caso de enviar algunos datos desde el servidor al cliente, por lo tanto, estos datos pueden ser mostrados en páginas web, o viceversa).',
    },
    {
      termino: '<i>Localhost</i>',
      significado:
        'en el contexto de las redes de computadoras, <i>localhost</i> es una computadora que ejecuta un programa. La computadora que se tiene al frente funciona también como un servidor virtual; este modo es comúnmente utilizado para realizar pruebas en el desarrollo web.',
    },
    {
      termino: 'Manejadores o <i>handlers</i> de eventos',
      significado:
        'en la programación con JavaScript un evento por sí mismo carece de utilidad. Para que los eventos resulten útiles o aplicables, se debe asociar funciones o código JavaScript a cada evento. De esta forma, cuando se produce un evento de manera inmediata se ejecuta el código indicado, por lo que la aplicación responde ante cualquier evento que se produzca durante su ejecución. Las funciones o código JavaScript que se realizan para cada evento se denominan "manejador de eventos”.',
    },
    {
      termino: '<i>Middleware</i>',
      significado:
        'bloque de código que se ejecuta entre la petición que hace el usuario (<i>request</i>) hasta que esa petición llega al servidor. De esta manera son funciones que tienen acceso al objeto de solicitud (req), el objeto de respuesta (res) y la siguiente función de middleware en el ciclo de solicitud-respuesta de la aplicación.',
    },
  ],
  complementario: [
    {
      texto:
        'Visual Studio Code. (s.f.) <i>Visual Studio Code. Instalación.</i>',
      tipo: 'Instructivo',
      descarga: '/downloads/Instalacion_Visual_Studio_Code.pdf',
    },
    {
      texto: 'Pinchao, P. (2021). <i>Maquetación en Bootstrap 3 columnas.</i> ',
      tipo: 'Página web',
      link: 'https://codepen.io/peter-emerson-pinchao/pen/xxLwPWJ',
    },
    {
      texto: 'Pinchao, P. (2021). <i>Estructura de una página.</i> ',
      tipo: 'Página web',
      link: 'https://codepen.io/peter-emerson-pinchao/pen/xxLwQOp',
    },
    {
      texto:
        'Gabriel Coding. (2020). <i>Cómo instalar Node JS en Windows 10.</i> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BgtB31gXkoA',
    },
    {
      texto:
        'Katie DiSimone. (2020). <i>mLab to Atlas for existing NS users.</i> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hXSLBACjYQo',
    },
    {
      texto:
        'Domini Code. (2018). <i>Como usar Postman, en español.</i> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qsejysrhJiU',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Peter Emerson Pinchao',
        cargo: 'Experto Temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de diseño y metrología - Regional distrito capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eulises Orduz Amezquita',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eulises Orduz Amezquita',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
