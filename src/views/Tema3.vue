<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Manuales técnicos y de usuario

    .row.justify-content-center.align-items-center      
      .col-lg-12.bg-img-2.p-5
        .row.justify-content-center.align-items-center.mt-5.pt-5      
          .col-lg-5.p-0.mx-0
            img.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img60.svg', alt='')
          .col-lg-7.bg-color-1.p-5.mt-4
            p(data-aos="fade-down-right").mb-0 Una de las cosas menos valoradas o probadas es la validación de la documentación del proyecto software, esto es respecto al manual de usuario, el manual técnico y la documentación presente en la codificación de los algoritmos.  Es importante que los procedimientos informativos descritos en el manual de usuario correspondan al flujo de los procesos y al procesamiento de datos confirme se han validado; es común que sean los mismos testers quienes realicen los manuales de usuario. Para el manual técnico, se ha probado es un poco más difícil, ya que requiere más de las competencias de administración de servicios (servidores, bases de datos, sistemas operativos, etc.).
    p(data-aos="fade-down-right") El manual técnico es un documento de un determinado sistema que intenta dar asistencia a sus usuarios y va dirigido a la dirección de IT, al administrador de los sistemas o servidores y a otros desarrolladores de software para que puedan darle mantenimiento en caso de que se requiera. Un manual técnico debe contener como mínimo:

    .row.justify-content-center.align-items-center      
      .col-lg-10.time-line-color.p-5
        LineaTiempoB.color-primario(:datos="datosLineaTiempoB")

    p(data-aos="fade-down-right").mt-5 En cuanto al manual de usuario, debe ser entendido por cualquier usuario principiante y serles de utilidad a los usuarios avanzados; así va dirigido a un público más general que no necesariamente debe tener conocimientos específicos en el área de interés.
    p(data-aos="fade-down-right") Así, este manual tiene como objetivo instruir al usuario en el uso del sistema y la solución de los problemas que puedan suceder en la operación. A continuación, se indica la información que debe tener.

    .row.justify-content-center.align-items-center      
      .col-lg-10  
        PasosA.color-primario.mt-5(tipo="n")
          .row.justify-content-start.align-items-center.py-5
            .col-lg-auto
              h5(data-aos="fade-down-right") Un índice
            .col-lg-4
              img.img-t.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img71.svg', alt='')  
          .row.justify-content-end.align-items-center.py-5
            .col-lg-auto
              img.img-t.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img72.svg', alt='')          
            .col-lg-8
              h5(data-aos="fade-down-right") Una guía rápida sobre cómo cada una utiliza las funciones principales del sistema
          .row.justify-content-start.align-items-center.py-5
            .col-lg-auto
              h5(data-aos="fade-down-right") Una sección para la resolución de problemas
            .col-lg-4
              img.img-t.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img73.svg', alt='')  
          .row.justify-content-end.align-items-center.py-5
            .col-lg-auto
              img.img-t.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img74.svg', alt='')          
            .col-lg-2
              h5(data-aos="fade-down-right") Una FAQ
          .row.justify-content-start.align-items-center.py-5
            .col-lg-auto
              h5(data-aos="fade-down-right") Información de contacto y canales de soporte
            .col-lg-4
              img.img-t.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img75.svg', alt='')  
          .row.justify-content-end.align-items-center.py-5
            .col-lg-auto
              img.img-t.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img76.svg', alt='')          
            .col-lg-2
              h5(data-aos="fade-down-right") Un glosario   

    .row.justify-content-center.align-items-center.mt-5   
      .col-lg-12.bg-img-1.py-5
        .row.justify-content-start.align-items-center   
          .col-lg-3.p-0
            img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img77.svg', alt='')          

          .col-lg-8
            p(data-aos="fade-down-right") El manual de usuario tiene como objetivo instruir al usuario en el uso del sistema y la solución de los problemas que puedan surgir en la operación. Este resuelve nuestras dudas como usuario, todas las posibles opciones que puede realizar el usuario con estas aplicaciones de manera detallada y mediante el uso de capturas de pantalla (imágenes).
            .cajon.color-acento-botones.p-4.mt-5
              p(data-aos="fade-down-right").mb-0 En conclusión, el componente formativo posibilita abordar los conceptos de configuración de un entorno de desarrollo de software, a partir del conocimiento de API Rest, integrado con las tecnologías de Node JS, express, y MongoDB, desarrollando la API desarrollada a través de la herramienta Postman. 
    separador                        
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosLineaTiempoB: [
      {
        texto: 'Objetivo y alcances del sistema.',
        icono: require('@/assets/ilustraciones/img61.svg'),
      },
      {
        texto:
          'Normas, políticas y procedimientos de la organización en las que se basa el sistema para su implementación.',
        icono: require('@/assets/ilustraciones/img62.svg'),
      },
      {
        texto:
          'Requisitos de la infraestructura y de dependencias de otros softwares o plataformas.',
        icono: require('@/assets/ilustraciones/img63.svg'),
      },
      {
        texto: 'Descripción de bases de datos y diagramas de relación.',
        icono: require('@/assets/ilustraciones/img64.svg'),
      },
      {
        texto: 'Diseño de reportes y pantallas.',
        icono: require('@/assets/ilustraciones/img65.svg'),
      },
      {
        texto: 'Diccionario de datos.',
        icono: require('@/assets/ilustraciones/img66.svg'),
      },
      {
        texto:
          'Lista de directorios a los que debe hacer copias recurrentes para asegurar la no pérdida de información.',
        icono: require('@/assets/ilustraciones/img67.svg'),
      },
      {
        texto: 'Procedimientos.',
        icono: require('@/assets/ilustraciones/img68.svg'),
      },
      {
        texto: 'Procedimiento de mantenimiento del sistema.',
        icono: require('@/assets/ilustraciones/img69.svg'),
      },
      {
        texto:
          'Procedimiento de instalación y configuración del sistema y sus dependencias.',
        icono: require('@/assets/ilustraciones/img70.svg'),
      },
    ],
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
