<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Herramientas y técnicas'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden.bg-3
    .bg-color-4.mb-5(data-aos="fade-up" style="background-color: #CFF7E4")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El uso de herramientas y técnicas en los procesos de innovación permite estructurar la creatividad, analizar problemas de forma integral y tomar decisiones fundamentadas. Estas metodologías ofrecen enfoques diversos que ayudan a abordar retos desde perspectivas amplias y colaborativas, maximizando el potencial innovador.
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/52.png', alt='')
    h3 Técnicas de generación de ideas
    p.mb-4 Las técnicas para generar ideas son esenciales en la fase inicial de cualquier proceso creativo. Estas fomentan la exploración de nuevas perspectivas, rompiendo patrones de pensamiento tradicionales y abriendo caminos hacia soluciones innovadoras.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Brainstorming estructurado" :icono="require('@/assets/curso/temas/icono2.svg')")
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-5.col-7.mb-lg-0.mb-3
            img(src="@/assets/curso/temas/53.png", style="max-width: 100%")
          .col-lg-7
            h4 Brainstorming estructurado
            p.mb-0 Promueve la generación ordenada de ideas, donde cada participante contribuye de forma secuencial. Variantes como el Brainwriting permiten escribir ideas en lugar de expresarlas oralmente, siendo especialmente útiles en equipos diversos o remotos (Perdomo Charry, 2020).
      .py-4.py-md-5(titulo="SCAMPER" :icono="require('@/assets/curso/temas/icono2.svg')")
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-5.col-7.mb-lg-0.mb-3
            img(src="@/assets/curso/temas/54.png", style="max-width: 100%")
          .col-lg-7
            h4 SCAMPER
            p.mb-0 Técnica estructurada que fomenta la transformación de productos, servicios o procesos existentes. Se basa en siete acciones: Sustituir, Combinar, Adaptar, Modificar, Poner en otros usos, Eliminar y Reordenar. Cada acción invita a explorar alternativas creativas específicas (Monagas Docasal, 2022).
      .py-4.py-md-5(titulo="Pensamiento lateral" :icono="require('@/assets/curso/temas/icono2.svg')")
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-5.col-7.mb-lg-0.mb-3
            img(src="@/assets/curso/temas/55.png", style="max-width: 100%")
          .col-lg-7
            h4 Pensamiento lateral
            p.mb-0 Basado en el concepto de Edward de Bono, busca romper con el pensamiento lineal tradicional. Facilita la generación de ideas disruptivas mediante la provocación, la entrada aleatoria y el desafío conceptual. Estas técnicas estimulan conexiones inesperadas y plantean nuevas soluciones a problemas complejos (Cavazos Arroyo, 2021).
    .bg-full-width.bg-color-1.p-5.mb-4(data-aos="fade-left" style="background-color: #D6F5FA")
      .row
        .col-lg-auto
          img(src="@/assets/curso/temas/56.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 El pensamiento lateral, como destaca Miranda González (2023), no sustituye al pensamiento lógico o vertical, sino que lo complementa. Mientras el pensamiento lógico profundiza en soluciones conocidas, el pensamiento lateral abre nuevas direcciones.
    h3 Herramientas específicas del pensamiento lateral
    p.mb-4 Las herramientas analíticas creativa0s combinan un enfoque estructurado con la exploración de ideas, facilitando la identificación de soluciones viables y su implementación.
    .bg-full-width.bg-slyder.p-5.mb-5
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Provocación (PO)
            p Utiliza afirmaciones ilógicas como puntos de partida para generar ideas innovadoras. Por ejemplo, "¿Qué pasaría si los autos no tuvieran ruedas?" puede inspirar conceptos disruptivos en movilidad.
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/57.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Entrada aleatoria
            p Introduce elementos aleatorios en el proceso creativo para romper patrones establecidos y descubrir conexiones inesperadas.
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/58.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Desafío conceptual
            p Cuestiona suposiciones fundamentales mediante preguntas como "¿Por qué se hace de esta manera?" o "¿Qué sucedería si...?".
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/59.png', alt='Texto que describa la imagen')
    p.mb-4 Estas técnicas son útiles para abordar problemas complejos, permitiendo explorar posibilidades más allá de lo evidente.
    h3 Herramientas analíticas creativas
    p.mb-4 Las herramientas analíticas creativa0s combinan un enfoque estructurado con la exploración de ideas, facilitando la identificación de soluciones viables y su implementación.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Seis sombreros para pensar" :icono="require('@/assets/curso/temas/icono3.svg')")
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-5.col-7.mb-lg-0.mb-3
            img(src="@/assets/curso/temas/60.png", style="max-width: 100%")
          .col-lg-7
            h4 Seis sombreros para pensar
            p.mb-0 Fomenta el análisis desde diferentes perspectivas: datos objetivos (sombrero blanco), emociones (sombrero rojo), riesgos (sombrero negro), oportunidades (sombrero amarillo), creatividad (sombrero verde) y gestión del proceso (sombrero azul). Permite evaluar problemas de manera integral y equilibrada (Martín Critikián et al., 2021).
      .py-4.py-md-5(titulo="Diagrama de Ishikawa" :icono="require('@/assets/curso/temas/icono3.svg')")
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-5.col-7.mb-lg-0.mb-3
            img(src="@/assets/curso/temas/61.png", style="max-width: 100%")
          .col-lg-7
            h4 Diagrama de Ishikawa
            p.mb-0 Herramienta gráfica para identificar causas raíz de problemas específicos. Organiza posibles factores en categorías como maquinaria, métodos, personal, materiales y entorno. Es útil para análisis de procesos y mejora continua (Suárez Mella y Acevedo Urquiaga, 2022).
    p.mb-4 Estas herramientas son particularmente valiosas para analizar problemas complejos y estructurar soluciones efectivas.
    h3 Herramientas digitales en la innovación
    p.mb-4 En la era digital, las herramientas tecnológicas amplían las posibilidades de innovación al facilitar la colaboración, el análisis y la implementación de soluciones.
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/62.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Software de apoyo
            p.mb-0.text-center Gestión de proyectos (Trello, Asana), mapas mentales digitales (MindMeister, XMind), plataformas colaborativas (Miro, Slack), herramientas de prototipado (Figma, Sketch).
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/63.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Aplicaciones específicas
            p.mb-0.text-center Visualización de datos (Tableau, Power BI), modelado 3D (AutoCAD, Blender), simulación virtual (Unity, Unreal Engine), análisis predictivo (SPSS, R, Python).
    .bg-full-width.bg-color-1.p-5.mb-4(data-aos="fade-left" style="background-color: #D6F5FA")
      .row
        .col-lg-auto
          img(src="@/assets/curso/temas/64.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Estas plataformas permiten a los equipos abordar problemas de manera más efectiva, potenciando la creatividad y optimizando los procesos.
    h3 Métodos analíticos para decisiones informadas
    p.mb-4 Además de fomentar la creatividad, los métodos analíticos son esenciales para evaluar y priorizar soluciones. Estas herramientas permiten tomar decisiones estratégicas basadas en evidencia.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 4. 
      span Herramientas para análisis y toma de decisiones
    .row.justify-content-center.mb-5
      .col-lg-10
        .tabla-a.mb-5
          table
            thead.border-0
              tr.text-center.text-white(style="background-color:#A530FE")
                th Análisis de problemas
                th Herramientas de decisión
                
            tbody(style="background-color: #EFF4FA")
              tr
                td Diagrama de Ishikawa
                td Matrices de priorización
              tr
                td Análisis de Pareto
                td Análisis multicriterio
              tr
                td Cinco ¿Por qué?
                td Árboles de decisión
              tr
                td Árbol de problemas
                td Análisis de riesgos
              tr
                td Análisis FODA
                td Evaluación ponderada
    .bg-full-width.bg-color-1.p-5.mb-4(data-aos="fade-left" style="background-color: #D6F5FA")
      .row
        .col-lg-auto
          img(src="@/assets/curso/temas/65.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Estas herramientas combinan enfoques creativos y analíticos, garantizando un equilibrio entre la generación de ideas y su evaluación práctica.
    h3 Importancia de combinar enfoques
    p.mb-4 Integrar técnicas de generación de ideas con herramientas analíticas asegura que las soluciones propuestas no solo sean innovadoras, sino también viables y alineadas con los objetivos estratégicos. Este enfoque combinado permite maximizar el impacto de las iniciativas de innovación y tomar decisiones fundamentadas en datos y creatividad.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .p-4(style="background-color: #E7EFF8")
          p.mb-4 Para ampliar tus conocimientos en los temas de innovación que has estudiado, te sugerimos explorar el siguiente vídeo:
          a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")(data-aos="flip-up")
            .anexo__icono(:style="{'background-color': '#FCDFDB'}")
              img(src="@/assets/curso/temas/bg-icono-video2.svg")
            .anexo__texto
              p <strong>Video. </strong>  Cómo resolver problemas con Creative Problem Solving
          p.mb-4 Para ampliar el aprendizaje sobre definiciones de innovación, su importancia y las tendencias actuales, se recomienda consultar el documento disponible en la página web:
          a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")(data-aos="flip-up")
            .anexo__icono(:style="{'background-color': '#DBE7FC'}")
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p <strong>Sitio web. </strong>  Reflexiones sobre definiciones de innovación, importancia y tendencias
          p.mb-4 Además, para reforzar los conocimientos adquiridos, es posible practicar a través de un juego interactivo, disponible en la siguiente página web:
          a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")(data-aos="flip-up")
            .anexo__icono(:style="{'background-color': '#DBE7FC'}")
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p <strong>Sitio web. </strong>  Reinvention iLab
      .col-lg-4.col-7: img(src='@/assets/curso/temas/66.png', alt='')
    p.mb-4 La innovación y la creatividad tienen el poder de transformar realidades al generar soluciones únicas y relevantes para los desafíos actuales. Estas cualidades permiten re imaginar procesos, productos y servicios, impulsando cambios positivos que impactan a las personas, las organizaciones y la sociedad. Al integrar nuevas ideas con enfoques estratégicos, se abren puertas hacia el progreso y la adaptación en un mundo en constante evolución.
    .bg-full-width.bg-color-2.mb-lg-5(style="background-color: #E7EFF8")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Casos de estudio aplicados
            p.mb-4(data-aos="fade-right") En el documento Casos de estudio aplicados , se aborda cómo la innovación y creatividad pueden transformar empresas y comunidades. A través de ejemplos concretos como Rappi, Bancolombia, y Vía Verde, se exploran metodologías como el Design Thinking y la economía circular, ilustrando su impacto en sostenibilidad e inclusión. Este material te invita a identificar casos que se relacionen con tu contexto profesional y a profundizar en su análisis para aplicar los conocimientos adquiridos en esta unidad. ¡Aproveche los recursos disponibles y fortalezca sus competencias para liderar cambios positivos! 

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Casos de estudio aplicados

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/67.png', alt='')




      
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
