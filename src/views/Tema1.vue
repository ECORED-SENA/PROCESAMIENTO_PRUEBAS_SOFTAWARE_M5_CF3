<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Diseño y codificación de #[i frontend]
    .row.justify-content-center.align-items-center      
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.bloque-radius
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/ilustraciones/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p(data-aos="fade-down-right").mb-0 Antes de poner en marcha un sistema de información, es buena práctica prototipar el sistema para reducir la brecha entre lo que el cliente espera y lo que finalmente recibe. Este proceso también sirve para refinar los requerimientos justo antes de codificar un sistema informático. Para tal finalidad existen varias herramientas de prototipado y, precisamente para cumplir con este propósito, se abordará el prototipo (#[i mockups, sketch, wireframe]), la maquetación del sitio web y el uso de estilos.
            
    separador(data-aos="slide-left")

    #t_1_1.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 1.1  Prototipo (#[i mockup], Sketch, #[i wireframe])
      
    p(data-aos="fade-down-right") El proceso de prototipado consiste en elaborar una representación visual de los componentes del software y este proceso da como resultado la creación de subproductos según el nivel de fidelidad visual respecto al producto final, de esta forma podemos definir los prototipos de la siguiente forma: #[i mockups] (alta fidelidad) y #[i wireframe] (es una representación de baja o media fidelidad).  En algunos equipos de trabajo los desarrolladores usan el nombre “prototipado” para referirse a una simulación que ofrece algún tipo de interacción con el usuario, para todos los casos existen muchas herramientas que permiten la creación de alguno de estos subproductos tal vez el más popular para crear #[i mockups, wireframe] o prototipos con interacción, es Sketch, aunque  solo es para Mac, es la que mejor calidad de prototipados ofrece actualmente. 

    .cajon.color-primario.p-4.mt-5
      p(data-aos="fade-down-right").mb-0 Debido a que Sketch no es de libre distribución y no todos disponen de un Mac para realizar un prototipo, a continuación, se presentan unos pasos sencillos para elaborar un mockup, para lo cual de manera inicial se deberá crear una cuenta en el siguiente enlace: 
        a(href="https://balsamiq.cloud/ " target="_blank") https://balsamiq.cloud/       
    .row.justify-content-center.align-items-center      
      .col-lg-10  
        PasosA.color-primario.mt-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-lg-4
              h5(data-aos="fade-down-right") Proceso de registro. 
            .col-lg-8
              img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img2.jpg', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-8
              img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img3.jpg', alt='')            
            .col-lg-4
              h5(data-aos="fade-down-right") Creación del espacio de trabajo
          .row.justify-content-center.align-items-center
            .col-lg-4
              h5(data-aos="fade-down-right") Panel de creación de proyecto en Balsamiq Cloud. 
            .col-lg-8
              img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img4.jpg', alt='')  
          .row.justify-content-center.align-items-center
            .col-lg-8
              img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img5.jpg', alt='')           
            .col-lg-4
              h5(data-aos="fade-down-right") Creación de la estructura de las vistas.
                                    
    p(data-aos="fade-down-right").mt-5 Además, cada vez aparecen más sistemas para realizar estos prototipos como Canva, Adobe XD, entre otros.

    separador(data-aos="slide-left")

    #t_1_2.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 1.2  Maquetación del sitio web 
    p(data-aos="fade-down-right") El proceso de maquetación web es la transformación del diseño o prototipo a un producto web en un conjunto de archivos (HTML, CSS, JS) de manera que serán desplegados (renderizados) por un navegador. 
    .row.justify-content-center.align-items-center.mt-5      
      .col-lg-10.bg-card.p-5
        .row.justify-content-center.align-items-center      
          .col-lg-8
            p(data-aos="fade-down-right") La maquetación web es el proceso que consiste en tomar el prototipo gráfico también denominado layout (con los requisitos estructurales y estéticos definidos y aprobados en un análisis inicial) pasa a transformarse en código HTML, CSS y JS (estándares web) para que los navegadores puedan interpretarlo correctamente.
          .col-lg-4
            img.img-t.img-a.my-3.yoyo(data-aos="zoom-in")(src='@/assets/ilustraciones/img6.svg', alt='')

    separador(data-aos="slide-left")

    #t_1_3.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 1.3  Uso de estilos              
    p(data-aos="fade-down-right") El uso apropiado de propiedades de hojas estilos CSS sobre elementos del documento HTML permite realizar la maquetación o definición de un diseño, y es una de las propiedades fundamentales que ofrecen los #[i frameworks] (marcos de trabajo) de CSS. A lo largo de las últimas décadas los marcos de trabajo han tenido varios enfoques que se discutirán a continuación.

    .row.justify-content-start.align-items-center.my-4      
      .col-lg-5
        h5.title.especial.ps-3.pe-5.py-3 #[i Movie First Design vs. Responsive Web Design]

    p(data-aos="fade-down-right") En un principio, los #[i frameworks] CSS creaban estructurados en clases, con atributos para diseño o maquetación de páginas web que tuvieran la posibilidad de redimensionar sus contenidos a pantallas más pequeñas, a estos se les llama diseños adaptativos, es decir, al reducir la resolución se reduce el tamaño del contenido.
    .row.justify-content-center.align-items-center   
      .col-lg-12.bg-img.py-5    
        .row.justify-content-center.align-items-center  
          .col-lg-10.bg-card.p-5
            .row.justify-content-center.align-items-center      
              .col-lg-8
                p(data-aos="fade-down-right") #[i Mobile first] «los móviles primero», es la estrategia de diseño que refiere a una maquetación que tenga en cuenta, en primera instancia, el despliegue en dispositivos móviles. Pantallas reducidas en relación con las tablets o los monitores que usamos comúnmente con los ordenadores, y tras tener la maqueta preparada para móviles, realizar un escalado y hacer otra dimensión de pantallas, es decir, aumentar el tamaño y adaptarlo a una pantalla de escritorio.
              .col-lg-4
                img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img8.svg', alt='')     

    .row.justify-content-start.align-items-center.my-4      
      .col-lg-3
        h5.title.especial-red.ps-3.pe-5.py-3 #[i Bootstrap CSS]
    p(data-aos="fade-down-right") Bootstrap es un conjunto de herramientas de estilos CSS de código abierto, para que los desarrollos web se puedan usar con HTML, CSS y JavaScript. Con él se puede dar forma al sitio o páginas web usando sus librerías CSS y JavaScript. Incluye diferentes componentes: ventanas modales, menús, cuadros, botones, formulario, es decir, los elementos que se necesitan para maquetar una página. A continuación, se presenta la maquetación de un formulario. 

    .row.justify-content-center.align-items-center   
      .col-lg-12.bg-img.py-5    
        .row.justify-content-center.align-items-center  
          .col-lg-10.bg-card-red.p-5
            .row.justify-content-center.align-items-center      
              .col-lg-8
                p(data-aos="fade-down-right") Bootstrap permite crear interfaces de usuario limpias y totalmente adaptables a dispositivos y pantallas de cada tamaño, algunas de sus principales características son:
                .row.justify-content-center.align-items-center  
                  .col-lg-11                 
                    .list.mt-2(data-aos="fade-down-right")
                      .list__item
                          .list__item__icon
                              img(src="@/assets/ilustraciones/v1.svg", alt="")
                      .list__txt 
                          span Documentación y soporte amplio con HTML5 y CSS3, que permite un uso flexible.
                    .list.mt-2(data-aos="fade-down-right")
                      .list__item
                          .list__item__icon
                              img(src="@/assets/ilustraciones/v1.svg", alt="")
                      .list__txt 
                          span Un sistema grillas o (GRID) que permite diseñar usando unas grillas de 12 columnas donde se debe plasmar el contenido. Así permite diseñar y desarrollar responsive de forma mucho más fácil e intuitiva.
                    .list.mt-2(data-aos="fade-down-right")
                      .list__item
                          .list__item__icon
                              img(src="@/assets/ilustraciones/v1.svg", alt="")
                      .list__txt 
                          span Es compatible con la mayoría de los navegadores actuales.                 
              .col-lg-4
                img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img9.svg', alt='')      

    .row.justify-content-start.align-items-center.my-4      
      .col-lg-5
        h5.title.especial.ps-3.pe-5.py-3 #[i Material Desing]
    .row.justify-content-start.align-items-start
      .col-lg-7
        p(data-aos="fade-down-right") Material Design es un estilo de diseño creado por Google. Fue anunciado el 25 de junio del 2014 en la conferencia Google I/O. Se ha implementado en el sistema operativo para móviles Android desde la versión Lollipop y también en otros servicios gratuitos de Google como Docs, Calendar, Drive, etc. 
      .col-lg-5.d-none.d-lg-block   
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img10.svg', alt='')      

    .row.justify-content-start.align-items-center.color-row-green.p-2.pb-5.d-none.d-lg-block     
      .col-lg-7
        p(data-aos="fade-down-right") Google ha dispuesto al público una guía sobre el Material Design para que los diseñadores se animen a implementarlo en aplicaciones móviles y sitios web (disponible en 
          a(href="https://material.io/design" target="_blank") https://material.io/design)
          | . Los objetivos de esta propuesta son:      
        .list.mt-4(data-aos="fade-down-right")
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v1.svg", alt="")
          .list__txt 
              span Emplear un lenguaje visual combinando los principios de un buen diseño y las opciones disponibles en las nuevas tecnologías.
        .list.mt-2(data-aos="fade-down-right")
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v1.svg", alt="")
          .list__txt 
              span Ser un sistema que posibilite una experiencia uniforme en diferentes plataformas y dispositivos (como pantallas táctiles, control de voz, etc.). 

    .row.justify-content-start.align-items-center.color-row-green-movil.p-2.d-block.d-lg-none     
      .col-lg-7
        p(data-aos="fade-down-right") Google ha dispuesto al público una guía sobre el Material Design para que los diseñadores se animen a implementarlo en aplicaciones móviles y sitios web (disponible en 
          a(href="https://material.io/design" target="_blank") https://material.io/design)
          | . Los objetivos de esta propuesta son:      
        .list.mt-4(data-aos="fade-down-right")
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v1.svg", alt="")
          .list__txt 
              span Emplear un lenguaje visual combinando los principios de un buen diseño y las opciones disponibles en las nuevas tecnologías.
        .list.mt-2(data-aos="fade-down-right")
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v1.svg", alt="")
          .list__txt 
              span Ser un sistema que posibilite una experiencia uniforme en diferentes plataformas y dispositivos (como pantallas táctiles, control de voz, etc.).               
    p(data-aos="fade-down-right").mt-5 Google junto con los objetivos del Material Design, presenta también sus tres principios fundamentales:

    TabsA.color-primario.mt-5
      .tarjeta.color-primario--borde.p-4(titulo="Lo material como una metáfora")
        .row.justify-content-start.align-items-center    
          .col-lg-8 
            h5 Lo material como una metáfora
            p Como lo material está unido a la realidad fusionándose con el espacio, tiempo y movimiento, y se vuelve táctil, es por esto que se puede integrar con la tecnología haciendo uso de la creatividad e imaginación.
            p Los bordes y superficies de las cosas materiales entregan pistas visuales basadas en la realidad, y el uso de atributos familiares al mundo real ayuda al usuario a entender las posibilidades de lo que se puede hacer con cada elemento presente en la interfaz. Para lograr esto se deben presentar los principios superficie, luz y movimiento como elementos principales para transmitir cómo los objetos existen, están dispuestos e interactúan uno con el otro o con el usuario.    
          .col-lg-4 
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img11.svg', alt='')
            p.text-center #[b Materiales]  

      .tarjeta.color-primario--borde.p-4(titulo="Lo material como una metáfora")
        .row.justify-content-start.align-items-center    
          .col-lg-12
            h5 Llamativo e intencional
            p Todos los elementos visuales son diseñados por los conceptos de la teoría del diseño como el uso del color, los espacios en blanco, sombras, el sistema de tabla de datos, etc. Todos estos elementos ayudan a determinar la jerarquía y lectura visual.
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img12.svg', alt='')

      .tarjeta.color-primario--borde.p-4(titulo="Lo material como una metáfora")
        .row.justify-content-start.align-items-center    
          .col-lg-12
            h5 Sistema de color de material Design 
            p Ayuda a aplicar color a las interfaces de usuario de una manera simplificada. En este sistema, el diseñador define un color como primario y otro como secundario para representar el tema de su marca.
            p Las variaciones de oscuros y claros para cada color se aplican a la interfaz de usuario de diferentes maneras de manera preestablecida.
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img13.svg', alt='')

      .tarjeta.color-primario--borde.p-4(titulo="Lo material como una metáfora")
        .row.justify-content-start.align-items-center    
          .col-lg-12
            h5 El movimiento otorga significado
            p En una aplicación web o móvil una animación capta la atención de los usuarios, sin embargo, es deseable que estas animaciones no interrumpan la experiencia de usuario; así es deseable que exista relación entre las animaciones y la propia esencia del sitio web o aplicación, por ejemplo, el efecto de presionar el botón la experiencia real de desplazar un elemento.
            p Para Google, el movimiento enfatiza el papel del usuario como el actor principal de la interacción con la máquina y el que dirige los movimientos en dicha interacción; y las acciones del usuario tienen el poder de cambiar el diseño o disposición de los elementos. Es así como los elementos de la interfaz son presentados al usuario sin interferir con su experiencia, incluso cuando dichos elementos se transforman y reorganizan.
            p En conclusión, Material Design es una propuesta de diseño novedosa y que está incorporada en las nuevas versiones de Android. Los principios del Material Design van guiados a mejorar la experiencia de usuario teniendo en cuenta las últimas tecnologías. 
            
    .row.justify-content-start.align-items-center.my-4      
      .col-lg-3
        h5.title.especial-red.ps-3.pe-5.py-3 Maquetación
    .row.justify-content-center.align-items-center    
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p(data-aos="fade-down-right").mb-0 A continuación, se explicará cómo maquetar empleando Bootstrap, que es actualmente el más común de los <i>frameworks</i> de CSS.
    .row.justify-content-center.align-items-center.mt-5    
      .col-lg-10
        LineaTiempoD.color-primario
          .row.justify-content-center.align-items-center(numero="1" titulo="Maquetación en <i>framework</i>")
            .col-11
              p Para empezar a usar este <i>framework</i> basta con agregar dentro la etiqueta &lt; head &gt; del documento HTML la etiqueta: 
              .cajon.color-acento-botones.p-4.my-4
                p(data-aos="fade-down-right").mb-0 &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"&gt; 
              p Y si antes de finalizar la etiqueta &lt;body&gt; del documento HTML el código JavaScript:
              .cajon.color-acento-botones.p-4.my-4
                p(data-aos="fade-down-right").mb-0 &lt;script <br> src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"><br>&lt;/script &gt;

          .row.justify-content-center.align-items-center(numero="2" titulo="Ejemplo de documento HTML")
            .col-11
              .cajon.color-acento-botones.p-4.my-4
                p(data-aos="fade-down-right").mb-0 &lt;!doctype html> <br>&lt;html lang="es"><br>&lt;head><br>&lt;meta charset="utf-8"><br>&lt;meta name="viewport" content="width=device-width, initial-scale=1"><br>&lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><br><br>&lt;title>Hello, world!&lt;/title><br>&lt;/head><br>&lt;body><br>&lt;h1>Hello, world!&lt;/h1><br><br>&lt;script&lt; src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"> &lt; /script &gt;<br><br>&lt;/body&gt;<br>&lt;/html> 

          .row.justify-content-center.align-items-center(numero="3" titulo="Maquetación Bootstrap")
            .col-11
              p Bootstrap fundamenta su maquetación con base en grillas que son la división mediante líneas horizontales y verticales que son iguales en su separación y tamaño.
              p El esquema de página que nos propone Bootstrap está compuesto sistemas de grillas basadas en filas y columnas. En cada fila está definida en 12 columnas y cada columna posee un ancho relativo a ese número 12. Es decir, si el ancho total es de 564px el tamaño de cada columna es 560px/12 = 47px, por tanto, cada columna será de tamaño 47px. Este valor no es fijo, pues las columnas se redimensionarán siempre que se cambie el tamaño o disposición de la ventana o pantalla.
              p El sistema de grilla de Bootstrap puede adaptarse a los seis puntos de interrupción que representa las dimensiones de pantallas más usados. Los seis niveles de cuadrícula predeterminados son los siguientes:
              .list.mt-4
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="")
                .list__txt 
                    span Extrapequeño (xs):  para pantallas de dispositivos móviles
              .list.mt-3
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="")
                .list__txt 
                    span Pequeño (sm): óptimo para pantallas de tables
              .list.mt-3
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="")
                .list__txt 
                    span Medio (md):  óptimo para pantallas de monitores pequeños
              .list.mt-3
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="")
                .list__txt 
                    span Grande (lg):  para pantalla de mayor resolución.
              .list.mt-3
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="")
                .list__txt 
                    span Extragrande (xl): para pantallas grandes
              .list.mt-3
                .list__item
                    .list__item__icon
                        img(src="@/assets/ilustraciones/v1.svg", alt="")
                .list__txt 
                    span Extraextragrande (xxl): para monitores, smart-tv de alta resolución.                 

          .row.justify-content-center.align-items-center(numero="4" titulo="Creación de una fila para un contenedor la clase row")
            .col-11
              .cajon.color-acento-botones.p-4.my-4
                p(data-aos="fade-down-right").mb-0 &lt;div class="row"><br>&lt;/div>   
              p Cada divisor de clase row, puede contener cuantos divisores se deseen, solo que para dimensionar el tamaño que ocupa cada uno, en un sistema de 12 columnas, se deben usar las clases que definen el tamaño con número de 1 a 12, col-1, col-2, col-*, donde * va de 1 a 12.  Siempre es deseable que la suma de estos divisores columna sea 12 o múltiplos de 12.
              p A continuación, un ejemplo: 
              .cajon.color-acento-botones.p-4.my-4
                img(src='@/assets/ilustraciones/img14.svg', alt='')

          .row.justify-content-center.align-items-center(numero="5 " titulo="Fila de 3 columnas")
            .col-11
              img(src='@/assets/ilustraciones/img15.svg', alt='')

              p.mt-4 Como se puede ver, la fila contiene 4 elementos, cada uno de ellos tiene la clase col-4 , y al ser 3 completan los 12 elementos de la grilla.
              p Para que se los contenidos se visualicen de mejor manera en un navegador de dispositivo móvil, es deseable que cada columna se ocupe el 100% del ancho, es decir, tenga un tamaño 12 para cada elemento de la grilla, para lo cual se podría definir la fila de la siguiente forma:
              .cajon.color-acento-botones.p-4.my-4
                img(src='@/assets/ilustraciones/img16.svg', alt='')

          .row.justify-content-center.align-items-center(numero="6 " titulo="Tamaño normal de pantalla")
            .col-11
              p Con el código anterior puede probar cambiando el tamaño de la pantalla; las columnas se dimensionan según el tamaño del dispositivo.
              img.mt-4(src='@/assets/ilustraciones/img17.svg', alt='')

          .row.justify-content-center.align-items-center(numero="7 " titulo="Tamaño extrapequeño de pantalla")
            .col-11
              img(src='@/assets/ilustraciones/img18.svg', alt='')
              p.mt-4 La técnica hasta acá expuesta es la denominada Mobile First, primero define cómo se verán en móviles (tamaño col-x) y luego como se verán en otros dispositivos (col-sm-x, col-md-x, col-lg-x, col-xl-x, col-xxl-x). 

    .row.justify-content-start.align-items-center.my-4      
      .col-lg-5
        h5.title.especial.ps-3.pe-5.py-3 Estructura

    p Como se mencionó antes, existen etiquetas que definen la estructura de una página como lo son &lt;body>&lt;/body>, &lt;header>&lt;/header>, &lt;main>&lt;/main>, &lt;section>&lt;/section>, &lt;aside>&lt;/aside>, &lt;footer>&lt;/footer>, por mencionar los principales, la idea general es poder diseñar para diferentes pantallas como se muestra en la siguiente imagen:
    
    .row.justify-content-center.align-items-center   
      .col-lg-12.bg-img-1.py-5    
        .row.justify-content-center.align-items-center  
          .col-lg-10.bg-card.p-5
            .row.justify-content-center.align-items-center      
              .col-lg-5
                p(data-aos="fade-down-right") Si a los componentes de la imagen anterior se definen de la siguiente forma los elementos:
                .list.mt-4
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v1.svg", alt="")
                  .list__txt 
                      span Bloque azul: &lt;header>&lt;/header>
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v1.svg", alt="")
                  .list__txt 
                      span Bloque rojo: &lt;aside>&lt;/aside>
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v1.svg", alt="")
                  .list__txt 
                      span Bloque verde: &lt;main>&lt;/main>
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v1.svg", alt="")
                  .list__txt 
                      span Bloques naranjas: &lt;section>&lt;/section>
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v1.svg", alt="")
                  .list__txt 
                      span Bloque violeta: &lt;footer>&lt;/footer>                 
              .col-lg-7
                img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img19.png', alt='')

    p.mt-5(data-aos="fade-down-right") El resultado, aplicando las clases del Boostrap para los cuatro (4) tamaños presentado, seria: 
    img.img-t.img-a.mt-4(data-aos="zoom-in")(src='@/assets/ilustraciones/img21.svg', alt='')
    .row.justify-content-center.align-items-center   
      .col-lg-12.bg-img.py-5    
        .row.justify-content-center.align-items-center  
          .col-lg-10
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img22.svg', alt='')

    .row.justify-content-start.align-items-center.my-4      
      .col-lg-3
        h5.title.especial-red.ps-3.pe-5.py-3 Material Desing

    p Los formularios también son susceptibles a ser maquetados, de manera que se dimensionen adecuada y automáticamente de acuerdo con el tipo del dispositivo.

    img.img-t.img-a.mt-4(data-aos="zoom-in")(src='@/assets/ilustraciones/img23.svg', alt='')
    .row.justify-content-center.align-items-center   
      .col-lg-12.bg-img-1.py-5    
        .row.justify-content-center.align-items-center  
          .col-lg-10
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img24.svg', alt='') 

    p.mt-5(data-aos="fade-down-right") El formulario proyecta dos tipos de pantalla, una pequeña y la otra extrapequeña, tal como se muestra a continuación:  

    TabsC.color-primario.mt-5
      .py-3.py-md-4(titulo="Formulario para pantalla pequeña")
        .row.justify-content-center.align-items-center.tabs-color.p-5 
          img.img-t.img-a(src='@/assets/ilustraciones/img25.svg', alt='')

      .py-3.py-md-4(titulo="Formulario para pantalla extrapequeña")
        .row.justify-content-center.align-items-center.tabs-color.p-5 
          img.img-t.img-a(src='@/assets/ilustraciones/img26.svg', alt='')

    p.mt-5(data-aos="fade-down-right") En conclusión, dimensionar los elementos es importante para lograr una óptima visualización en diferentes dispositivos que se usan actualmente. 

    separador(data-aos="slide-left")

    #t_1_4.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 1.4  Validación de interfaz de usuario 

    .row.justify-content-center.align-items-stretch.mt-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/ilustraciones/img27.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h2.text-center En el análisis
              p Las interfaces deben responder a los requisitos funcionales definidos en el proceso de captura y análisis de requisitos.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/ilustraciones/img28.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h2.text-center En el diseño
              p Las interfaces diseñadas deben garantizar la calidad en la presentación, es decir, que sea fácilmente identificable la funcionalidad de cada componente presente, en especial aquellos que están dispuestos para lograr la interacción con el usuario.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/ilustraciones/img29.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h2.text-center En la funcionalidad
              p Durante las pruebas donde, básicamente, se ensayan ejecutando la aplicación.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-7
        .list
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v1.svg", alt="")
          .list__txt 
              span Las características que tiene la interfaz deben probarse para asegurar que las reglas del diseño, la estética y el contenido visual estén a disposición del usuario sin lugar a errores.

        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v1.svg", alt="")
          .list__txt 
              span Los elementos individuales de la interfaz deben probarse de forma unitaria (por ejemplo, se prueba HTML dinámico, CGI, carrito de compras, etc.) y con especial cuidado aquellos que manipula la presentación de datos y componentes visuales.

        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v1.svg", alt="")
          .list__txt 
              span La interfaz debe probarse frente a cada historia de usuario, o caso de uso, para descubrir errores de semánticos, y facilidad de uso por parte del usuario.

        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v1.svg", alt="")
          .list__txt 
              span La interfaz debe probarse dentro de una diversidad de ambientes para asegurar su compatibilidad (celular, tablets, pantallas, smart-tv, etc.). 
      .col-lg-5
        img.img-t.img-a.my-3(src='@/assets/ilustraciones/img30.svg', alt='')

    .row.justify-content-center.align-items-center   
      .col-lg-12.bg-img-1.py-5    
        .row.justify-content-center.align-items-center  
          .col-lg-10.bg-card-red-1.p-5
            .row.justify-content-center.align-items-center
              .col-lg-4
                img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img31.svg', alt='')                   
              .col-lg-8
                p(data-aos="fade-down-right") <i>Pruebas semánticas</i>: mientras se prueba cada historia de usuario o caso de uso, se revisa la información en pantalla o display que el usuario obtendrá (especialmente en los menús y formularios), que sea entendible y coherente con el usuario y el contexto en que este empleado el sistema.

                p(data-aos="fade-down-right") <i>Ejemplo</i>: el usuario-operador no vea información solo permitida para los administradores.

                p(data-aos="fade-down-right") Una vez probada cada historia de usuario o caso de uso de forma unitaria para cada mecanismo de la interfaz, se continúa con la prueba semántica, esta evalúa cuán bien el diseño se preocupa de los usuarios y su interacción con el sistema, ofreciendo una dirección clara al siguiente paso del proceso informático u opciones disponibles dentro del flujo de operaciones del sistema y manteniendo consistencia de lenguaje y enfoque.
        
    separador
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
