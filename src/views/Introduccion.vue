<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .row.justify-content-center.mb-5
      .col-lg-2.d-none.d-lg-block
        img(src="@/assets/curso/temas/1.svg", alt="Introducción")
      .col-lg-10
        p.mb-0 En el dinámico mundo laboral la capacidad de innovar se ha convertido en una habilidad clave para el éxito. Se enfrentará a un entorno en constante cambio, donde la adaptación y la transformación continua son la norma. Esta unidad lo sumerge en el campo de la innovación, brindándole las herramientas y metodologías necesarias para desarrollar soluciones creativas y efectivas a los desafíos actuales.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .p-4.mb-4(style="background-color: #ECD4FE")
          p.mb-0 Al finalizar esta unidad, podrá reconocer y aplicar los fundamentos del proceso de innovación mediante un enfoque organizado, que abarca desde la generación de ideas hasta su implementación. Desarrollará habilidades esenciales para identificar oportunidades, generar ideas innovadoras, crear prototipos funcionales y llevar tus innovaciones al mercado. Este conjunto de competencias no solo enriquecerá su perfil profesional, sino que también le permitirá contribuir de manera significativa al desarrollo y la competitividad de las organizaciones donde se desempeñe.
        p.mb-0 La unidad está estructurada en tres bloques temáticos. Comenzará explorando los conceptos de creatividad e innovación, entendiendo su relación y los diferentes tipos y modelos existentes. Luego, se sumergirá en las etapas del proceso de innovación, desde la detección de oportunidades hasta la evaluación de resultados. Finalmente, aprenderá metodologías y herramientas prácticas para la resolución creativa de problemas, que podrá aplicar en casos reales. 
      .col-lg-5.col-7: img(src="@/assets/curso/temas/2.png", alt="Introducción")

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
