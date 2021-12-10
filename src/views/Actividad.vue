<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure(data-aos="flip-down")
            img.yoyo(src="@/assets/template/emparejamiento.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo(data-aos="fade-left")
          h2 Afianzar algunos de los conceptos más importantes asociados a la construcción de una API REST
        p.mb-4(data-aos="zoom-in") La actividad planteada consiste en organizar dos columnas en una se deben poner las herramientas o recursos web para el desarrollo de la API REST y en otra columna aparte las definiciones o características, el objetivo es que el aprendiz haga la unión entre la tecnología y característica, de esta manera podrá hacer un repaso general del desarrollo de este segundo componente formativo.
        .tarjeta.tarjeta--azul.p-3(data-aos="fade-left")
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar el término con la definición que corresponde
            .col-auto(data-aos="fade-down")
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
