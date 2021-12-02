<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="slide-down") Como regla general no es suficiente conocer y dominar las tecnologías que se involucran en la creación de una aplicación web, pues es preciso emplear técnicas y herramientas tecnológicas para agilizar el uso de esas tecnologías. En tal sentido, para todo proyecto software es recomendable alistar las herramientas necesarias y mínimas para iniciar con un desarrollo y, dependiendo del alcance, la tecnología y/o lenguaje, se sugiere definir muy bien este tipo de recursos para tal ejercicio; también se pueden adoptar marcos de trabajo que son una base de uso de buenas prácticas de código. A continuación, se podrán conocer los conceptos generales que se abordarán en este componente formativo. 
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-12(data-aos="fade-left")    
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
