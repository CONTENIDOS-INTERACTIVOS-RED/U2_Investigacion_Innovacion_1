<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Herramientas y técnicas'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
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
    
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Brainstorming estructurado" :icon="require('@/assets/bullets/icon-tab-c-2.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Brainstorming estructurado
            p Promueve la generación ordenada de ideas, donde cada participante contribuye de forma secuencial. Variantes como el Brainwriting permiten escribir ideas en lugar de expresarlas oralmente, siendo especialmente útiles en equipos diversos o remotos (Perdomo Charry, 2020).
        
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/53.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="SCAMPER" :icon="require('@/assets/bullets/icon-tab-c-2.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 SCAMPER
            p Técnica estructurada que fomenta la transformación de productos, servicios o procesos existentes. Se basa en siete acciones: Sustituir, Combinar, Adaptar, Modificar, Poner en otros usos, Eliminar y Reordenar. Cada acción invita a explorar alternativas creativas específicas (Monagas Docasal, 2022).
        
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/54.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Pensamiento lateral" :icon="require('@/assets/bullets/icon-tab-c-2.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Pensamiento lateral
            p Basado en el concepto de Edward de Bono, busca romper con el pensamiento lineal tradicional. Facilita la generación de ideas disruptivas mediante la provocación, la entrada aleatoria y el desafío conceptual. Estas técnicas estimulan conexiones inesperadas y plantean nuevas soluciones a problemas complejos (Cavazos Arroyo, 2021).
        
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/55.png', alt='', style="width: 100%;")

    .bg-full-width.bg-color-1.px-5.py-4.mb-5(data-aos="fade-left" style="background-color: #D6F5FA")
      .row.align-items-center
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
    p.mb-5 Estas técnicas son útiles para abordar problemas complejos, permitiendo explorar posibilidades más allá de lo evidente.
    

    h3 Herramientas analíticas creativas
    p.mb-4 Las herramientas analíticas creativa0s combinan un enfoque estructurado con la exploración de ideas, facilitando la identificación de soluciones viables y su implementación.
    
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Seis sombreros para pensar" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Seis sombreros para pensar
            p Fomenta el análisis desde diferentes perspectivas: datos objetivos (sombrero blanco), emociones (sombrero rojo), riesgos (sombrero negro), oportunidades (sombrero amarillo), creatividad (sombrero verde) y gestión del proceso (sombrero azul). Permite evaluar problemas de manera integral y equilibrada (Martín Critikián et al., 2021).
        
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/60.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fuentes formales" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Diagrama de Ishikawa
            p Herramienta gráfica para identificar causas raíz de problemas específicos. Organiza posibles factores en categorías como maquinaria, métodos, personal, materiales y entorno. Es útil para análisis de procesos y mejora continua (Suárez Mella y Acevedo Urquiaga, 2022).
        
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/61.png', alt='')


    p Estas herramientas son particularmente valiosas para analizar problemas complejos y estructurar soluciones efectivas.

    .bg-full-width.bg-fondo-3.mb-5
      .p-4.p-md-5
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
    
    .bg-full-width.bg-color-1.px-5.py-4.mb-5(data-aos="fade-left" style="background-color: #D6F5FA")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/64.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Estas plataformas permiten a los equipos abordar problemas de manera más efectiva, potenciando la creatividad y optimizando los procesos.

    h3 Métodos analíticos para decisiones informadas
    p.mb-4 Además de fomentar la creatividad, los métodos analíticos son esenciales para evaluar y priorizar soluciones. Estas herramientas permiten tomar decisiones estratégicas basadas en evidencia.
    .titulo-figura.mb-2(data-aos='fade-right')
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

    .bg-full-width.bg-color-1.px-5.py-4.mb-5(data-aos="fade-left" style="background-color: #D6F5FA")
      .row.align-items-center
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
          a.anexo.mb-4.bg-white.w-fit(href="https://www.youtube.com/live/34p8Y3fCPCo" target="_blank")(data-aos="flip-up")
            .anexo__icono(:style="{'background-color': '#FCDFDB'}")
              img(src="@/assets/curso/temas/bg-icono-video2.svg")
            .anexo__texto
              p <strong>Video. </strong>  Cómo resolver problemas con Creative Problem Solving
          p.mb-4 Para ampliar el aprendizaje sobre definiciones de innovación, su importancia y las tendencias actuales, se recomienda consultar el documento disponible en la página web:
          a.anexo.mb-4.bg-white.w-fit(href="https://www.redalyc.org/journal/6378/637869114011/637869114011.pdf" target="_blank")(data-aos="flip-up")
            .anexo__icono(:style="{'background-color': '#DBE7FC'}")
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p <strong>Sitio web. </strong>  Reflexiones sobre definiciones de innovación, importancia y tendencias
          p.mb-4 Además, para reforzar los conocimientos adquiridos, es posible practicar a través de un juego interactivo, disponible en la siguiente página web:
          a.anexo.mb-4.bg-white.w-fit(href="https://ilab.net/juego-de-innovacion/" target="_blank")(data-aos="flip-up")
            .anexo__icono(:style="{'background-color': '#DBE7FC'}")
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p <strong>Sitio web. </strong>  Reinvention iLab
      .col-lg-4.col-7: img(src='@/assets/curso/temas/66.png', alt='')
    p.mb-4 La innovación y la creatividad tienen el poder de transformar realidades al generar soluciones únicas y relevantes para los desafíos actuales. Estas cualidades permiten re imaginar procesos, productos y servicios, impulsando cambios positivos que impactan a las personas, las organizaciones y la sociedad. Al integrar nuevas ideas con enfoques estratégicos, se abren puertas hacia el progreso y la adaptación en un mundo en constante evolución.
    .bg-full-width.bg-color-1
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Casos de estudio aplicados
            p.mb-4(data-aos="fade-right") En el documento Casos de estudio aplicados , se aborda cómo la innovación y creatividad pueden transformar empresas y comunidades. A través de ejemplos concretos como Rappi, Bancolombia, y Vía Verde, se exploran metodologías como el Design Thinking y la economía circular, ilustrando su impacto en sostenibilidad e inclusión. Este material te invita a identificar casos que se relacionen con tu contexto profesional y a profundizar en su análisis para aplicar los conocimientos adquiridos en esta unidad. ¡Aproveche los recursos disponibles y fortalezca sus competencias para liderar cambios positivos! 

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Casos de estudio aplicados

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/67.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            //- Referencias con enlace
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/189560" target="_blank" rel="noopener noreferrer") Cabrera Paniagua, D. (2020). Innovación: perspectivas multidisciplinarias. RIL editores.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/261664" target="_blank" rel="noopener noreferrer") Fontana, C. (2024). Superlíderes: los superpoderes de creatividad e innovación. Pluma Digital Ediciones.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/217705" target="_blank" rel="noopener noreferrer") Perdomo Charry, G. (2020). El Conocimiento y la innovación: desde las empresas a las redes sociales. Fondo Editorial CEIPA.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/IE0-mHKwTWo?si=VowezJFbjjeij6o7" target="_blank" rel="noopener noreferrer") Cultura 52. (2017). ¿Cómo Construir una Cultura de Innovación? [video]. YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/live/aDSH8D4xnTA?si=evP3oxEbR-izZJZa" target="_blank" rel="noopener noreferrer") Jorge Valencia. (2019). Propiedad intelectual, Colombiatex 2019 – Telemedellin [video]. YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/live/34p8Y3fCPCo?si=w1yzHAqzuW7drTos" target="_blank" rel="noopener noreferrer") TelmexHub. [TelmexHub]. (2019, 28 de marzo). Cómo resolver problemas con Creative Problem Solving

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

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

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Pensamiento estratégico y prospectivo',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'Según Pérez Calle (2023), ¿qué elemento proporciona el soporte fundamental para la implementación efectiva de las innovaciones?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'El capital humano', esCorrecta: false },
              { id: 'b', texto: 'La base tecnológica', esCorrecta: true },
              { id: 'c', texto: 'Los recursos financieros', esCorrecta: false },
              {
                id: 'd',
                texto: 'La estructura organizacional',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La base tecnológica es el soporte fundamental según Pérez Calle (2023).',
            mensaje_incorrecto:
              'Incorrecto. Revisa cuál es el soporte fundamental para la innovación según Pérez Calle (2023).',
          },
          {
            id: 2,
            texto:
              'La dimensión organizacional de la innovación se centra exclusivamente en la estructura formal de la empresa, sin considerar aspectos culturales.',
            imagen: '',
            barajarRespuestas: false,
            opciones: [
              { id: 'a', texto: 'Verdadero', esCorrecta: false },
              { id: 'b', texto: 'Falso', esCorrecta: true },
            ],
            mensaje_correcto:
              '¡Correcto! Es falso, también se consideran aspectos culturales.',
            mensaje_incorrecto:
              'Incorrecto. Recuerda que la dimensión organizacional no solo considera la estructura formal.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes elementos forma parte del proceso creativo según Cavazos Arroyo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Planificación lineal', esCorrecta: false },
              { id: 'b', texto: 'Pensamiento divergente', esCorrecta: true },
              { id: 'c', texto: 'Análisis financiero', esCorrecta: false },
              { id: 'd', texto: 'Control de calidad', esCorrecta: false },
            ],
            mensaje_correcto:
              '¡Correcto! El pensamiento divergente es clave en el proceso creativo.',
            mensaje_incorrecto:
              'Incorrecto. Revisa los elementos del proceso creativo según Cavazos Arroyo.',
          },
          {
            id: 4,
            texto:
              'En el modelo Lean Startup, ¿qué elemento es fundamental para la validación de hipótesis?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Plan de negocios detallado',
                esCorrecta: false,
              },
              { id: 'b', texto: 'Producto Mínimo Viable', esCorrecta: true },
              { id: 'c', texto: 'Investigación exhaustiva', esCorrecta: false },
              { id: 'd', texto: 'Análisis competitivo', esCorrecta: false },
            ],
            mensaje_correcto:
              '¡Correcto! El Producto Mínimo Viable es fundamental en Lean Startup.',
            mensaje_incorrecto:
              'Incorrecto. Revisa qué elemento es clave para validar hipótesis en Lean Startup.',
          },
          {
            id: 5,
            texto:
              'El modelo de innovación abierta amplía la colaboración a departamentos externos de la organización.',
            imagen: '',
            barajarRespuestas: false,
            opciones: [
              { id: 'a', texto: 'Verdadero', esCorrecta: true },
              { id: 'b', texto: 'Falso', esCorrecta: false },
            ],
            mensaje_correcto:
              '¡Correcto! La innovación abierta implica colaboración externa.',
            mensaje_incorrecto:
              'Incorrecto. Revisa el concepto de innovación abierta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
