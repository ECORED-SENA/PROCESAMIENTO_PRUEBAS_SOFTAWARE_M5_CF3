<template lang="pug">
.banner-principal
  
  .container.degrade.tarjeta
    
    .row.banner-principal__row.br-r(
      :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
    )
      .col-lg-7.col-xxl-5.ps-4.ps-sm-5.py-4.py-sm-5.banner-principal__info
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .banner-principal__descripcion
          p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton.bg-inicio(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1.text-white Iniciar
            i.fas.fa-angle-right.text-white

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        .contenedor-imagenes
          img(:src="globalData.imagenBannerPrincipal")
          .imagen_flotante_1: img(src="@/assets/curso/flotante-1.svg")
          .imagen_flotante_2: img(src="@/assets/curso/flotante-2.svg")            
          .imagen_flotante_3: img(src="@/assets/curso/flotante-3.svg")
          .imagen_flotante_4: img(src="@/assets/curso/flotante-4.svg")
          
</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">

.banner-principal__row
  background-size: cover
  background-position: center

.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important

  &__img
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important

.contenedor-imagenes
  position: relative

.imagen_flotante
  &_1
    animation: float1 10s ease-in-out infinite
    position: absolute
    top: 9%
    left: 47%
    width: 100px
  &_2
    animation: float2 10s ease-in-out infinite
    position: absolute
    top: 4%
    left: 75%
    width: 60px
  &_3
    animation: float2 12s ease-in-out infinite
    position: absolute
    top: 18%
    left: 75%
    width: 60px
  &_4
    animation: float2 14s ease-in-out infinite
    position: absolute
    top: 32%
    left: 75%
    width: 60px


@keyframes float1
  0%
    opacity: 0
  50%
    opacity: 1
  100%
    opacity: 0

@keyframes float2
  0%
    transform: translate(1px, 1px) rotate(-1deg)
  10%
    transform: translate(-1px, -2px) rotate(0deg)
  20%
    transform: translate(-3px, 0px) rotate(1deg)
  30%
    transform: translate(3px, 0px) rotate(-1deg)
  40%
    transform: translate(1px, -2px) rotate(0deg)
  50%
    transform: translate(-1px, 1px) rotate(-1deg)
  60%
    transform: translate(1px, -2px) rotate(0deg)
  70%
    transform: translate(-3px, 0px) rotate(-1deg)
  80%
    transform: translate(3px, 0px) rotate(0deg)
  90%
    transform: translate(1px, -2px) rotate(-1deg)
  100%
    transform: translate(1px, 1px) rotate(0deg)
</style>
