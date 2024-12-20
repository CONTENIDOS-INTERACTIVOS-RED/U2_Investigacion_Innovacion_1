<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Tipos de investigación'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 Cuando se adentra en el proceso de innovación, es esencial comprender que enfrenta una serie de etapas interconectadas y estructuradas diseñadas para transformar ideas iniciales en soluciones concretas y valiosas. Aunque podrías considerar este proceso como lineal, en la práctica moderna se revela como un sistema altamente iterativo y dinámico, en el que las diferentes fases se retroalimentan constantemente. Al trabajar en innovación, notará que es posible desarrollar varias etapas de manera simultánea o cíclica, lo cual facilita la adaptación rápida a los cambios del entorno. Las fases generales del proceso de innovación se ilustran en el Figura 2.
        .tarjeta.bg-color-1.p-4.mb-5(data-aos="fade-left" style="background-color: #ECD4FE")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/26.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En este contexto, como señalan Chesbrough (2020) y Miranda González (2023), el proceso de innovación va más allá de la simple generación de ideas. En un mundo marcado por la transformación digital y los nuevos escenarios globales, descritos por Pérez Calle (2023), es necesario adoptar un enfoque sistemático que permita navegar por las distintas fases del proceso innovador. Tal como destacan Cavazos Arroyo (2021) y Martínez-Gómez (2024), la innovación contemporánea requiere una perspectiva multidisciplinaria que integre elementos técnicos, sociales y organizacionales.
      .col-lg-4.col-7: img(src="@/assets/curso/temas/27.png", style="max-width: 100%")
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 2.
      span Fases del proceso de innovación
    img.mb-5(src='@/assets/curso/temas/28.svg', alt='')
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Identificación de oportunidades
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src="@/assets/curso/temas/29.png", )
      .col-lg-8
        .tarjeta.bg-color-1.p-4.mb-4(data-aos="fade-left" style="background-color: #D6F5FA")
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/30.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El proceso de identificar oportunidades representa el punto de partida en cualquier iniciativa de innovación. En esta etapa, es crucial adoptar una perspectiva amplia que permita captar tendencias emergentes, necesidades no satisfechas y áreas con potencial de mejora. Según Castro Martínez y Fernández de Lucio (2020), el análisis del entorno debe combinar métodos cuantitativos y cualitativos para lograr una comprensión profunda y contextualizada.
        p.mb-0 Además, la identificación de oportunidades requiere herramientas específicas que sistematicen este proceso, así como una visión estratégica para priorizar aquellas áreas con mayor impacto potencial. Esto incluye tanto el análisis del mercado como la evaluación de aspectos tecnológicos, sociales y culturales.
    
</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
