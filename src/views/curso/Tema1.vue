<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Creatividad e innovación'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .bg-color-4.mb-5(data-aos="fade-up" style="background-color: #C2F1F8")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En su trabajo, es fundamental entender a fondo los conceptos de innovación y creatividad. Aunque están interrelacionados, poseen características únicas que es importante reconocer. De acuerdo con Miranda González, “conocer a fondo el método y el surgimiento de la innovación y la creatividad es crucial para la adopción adecuada de estos procesos en los contextos de la organización”. Por lo tanto, al dominar esta base conceptual, podrá impulsar la innovación y la creatividad de manera estratégica en su lugar de trabajo. 
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/3.png', alt='')
    .titulo-figura.mb-2(data-aos='fade-right')
      h5 Figura 1.
      span Fundamentos de innovación
    img(src='@/assets/curso/temas/4.svg', alt='')

    #t_1_3.titulo-segundo(data-aos="flip-up").my-5
      h2 #[span 1.1] Innovación y creatividad: elementos fundamentales y aplicaciones prácticas

    .bg-color-4.mb-5(data-aos="fade-up" style="background-color: #C2F1F8")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La innovación y la creatividad son pilares esenciales para el progreso y la adaptación de las organizaciones en un mundo dinámico y competitivo. Estas nociones incluyen dimensiones estructurales, estratégicas y contextuales, así como aplicaciones prácticas en diversos sectores.
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/5.png', alt='')

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        h3 Elementos estructurales
        p.mb-4 La innovación se fundamenta en la infraestructura tecnológica y el talento humano. Pérez Calle (2023) y Herrera Lemus y Lazcano Herrera (2020) destacan su importancia en términos de capacidades técnicas, herramientas y competencias.
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/temas/6.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2 Base tecnológica	
                p.mb-0 Infraestructura tecnológica, capacidades técnicas, herramientas de desarrollo, sistemas de gestión, plataformas de innovación
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/temas/7.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2 Capital humano
                p.mb-0 Competencias clave, pensamiento innovador, capacidad de adaptación, trabajo colaborativo, gestión del cambio.
    h3 Dimensiones de la innovación
    p.mb-4 Las dimensiones de la innovación abordan distintos aspectos organizativos, tecnológicos y sociales que fortalecen el desarrollo y la sostenibilidad.
    .bg-full-width.bg-slyder.p-5.mb-5
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Estratégica
            p Alineación con objetivos organizacionales, planificación a largo plazo, medición de impacto.
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/8.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Tecnológica
            p Plataformas tecnológicas, gestión de datos, seguridad digital.
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/9.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Organizacional
            p Cultura innovadora, diseño organizacional, tolerancia al error, aprendizaje continuo.
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/10.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Humana
            p Pensamiento creativo, programas de formación, mentoring, evaluación continua.
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/11.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 De mercado
            p  Orientación al cliente, investigación de mercado, ventajas competitivas, escalabilidad.
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/12.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Social
            p Ética empresarial, impacto ambiental, equidad social, gobernanza responsable.
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/13.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 De procesos
            p Optimización, automatización, mejora continua.
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/14.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 De conocimiento
            p Gestión y desarrollo del conocimiento, transferencia de aprendizajes, validación de conceptos.
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/15.png', alt='Texto que describa la imagen')
    h3 Creatividad: dimensiones clave
    p.mb-4 La creatividad complementa la innovación al generar ideas y soluciones que promueven cambios organizativos y sociales. Según Cavazos Arroyo (2021), la creatividad es un fenómeno multidimensional.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-mb-3
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Cognitiva") Pensamiento divergente, flexibilidad cognitiva, resolución de problemas, fluidez de ideas.
          p.text-small(numero="2" titulo="Emocional") Motivación intrínseca, resiliencia emocional, regulación de emociones.
          p.text-small(numero="3" titulo="Social") Colaboración efectiva, retroalimentación constructiva, intercambio de ideas.
          p.text-small(numero="4" titulo="Cultural") Diversidad de perspectivas, sensibilidad cultural, integración de saberes.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/16.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/17.png', alt='')
      .col-lg-8
        LineaTiempoD.color-secundario
          p.text-small(numero="5" titulo="Organizacional") Clima creativo, recursos adecuados, liderazgo facilitador, espacios de experimentación. 
          p.text-small(numero="6" titulo="Personal") Curiosidad, independencia de pensamiento, autorreflexión, autoeficacia creativa.
          p.text-small(numero="7" titulo="Técnica") Dominio de herramientas, conocimientos específicos, habilidades especializadas.
          p.text-small(numero="8" titulo="Temporal") Gestión del tiempo, momentos de inspiración, fases del proceso creativo.
    
    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        h3 Aplicaciones de la innovación y creatividad
        p.mb-4 A continuación, se presentan ejemplos prácticos que ilustran cómo la innovación y la creatividad impulsan soluciones en diversos sectores.
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/temas/18.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Educación
              p.mb-0.text-center Laboratorios virtuales, evaluación adaptativa, tutorías personalizadas, actividades colaborativas en línea.
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/temas/19.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Banca
              p.mb-0.text-center Soluciones móviles personalizadas, seguridad biométrica, interfaces centradas en el usuario.
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/temas/20.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Salud
              p.mb-0.text-center Telemedicina, diagnóstico asistido por IA, dispositivos wearables , plataformas de gestión integral de salud.
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/temas/21.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Industria
              p.mb-0.text-center Automatización de procesos, mantenimiento predictivo, trazabilidad, gestión inteligente de inventarios.
    p.mb-4 La innovación y la creatividad son herramientas transformadoras que permiten a las organizaciones enfrentar desafíos y adaptarse a un entorno cambiante. Sus múltiples dimensiones ofrecen una base sólida para el desarrollo sostenible, la competitividad y el impacto social, promoviendo una visión integrada del progreso organizacional y cultural.
    .bg-full-width.bg-color-2.mb-lg-5(style="background-color: #E7EFF8")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Relación entre creatividad e innovación
            p.mb-4(data-aos="fade-right") La creatividad y la innovación, como se describe en el documento Relación entre creatividad e innovación , funcionan de manera interdependiente. La creatividad genera ideas originales, mientras que la innovación las transforma en soluciones viables y aplicables. Este proceso dinámico impacta en los niveles estratégico, táctico y operativo de las organizaciones, fomentando el desarrollo y el avance competitivo. Se invita a explorar cómo aplicar esta interacción en contextos prácticos para impulsar la innovación en diversos sectores. ¡Conoce más sobre esta conexión esencial y su impacto organizacional!

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Relación entre creatividad e innovación

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/2.png', alt='')


    #t_1_2.titulo-segundo(data-aos='fade-right').my-5
      h2 #[span 1.2] Tipos de innovación
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/22.png', alt='')
      .col-lg-8
        .bg-color-1.p-4.mb-4(data-aos="fade-left" style="background-color: #ECD4FE")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/temas/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La clasificación de los tipos de innovación refleja las distintas áreas donde las organizaciones pueden implementar cambios significativos. Esta diversidad permite adaptar estrategias a necesidades específicas, ofreciendo soluciones enfocadas y efectivas.
        p.mb-0 El análisis detallado de estos tipos es fundamental para comprender cómo se generan, aplican y maximizan las oportunidades de mejora en productos, procesos, mercados y modelos organizacionales.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Innovación en productos o servicios") Implica la creación o mejora significativa de bienes o servicios, introduciendo funcionalidades novedosas, especificaciones técnicas avanzadas o diseños centrados en el usuario. Ejemplo: Incorporación de tecnologías sostenibles en productos electrónicos.
          p.text-small(numero="2" titulo="Innovación en procesos") Se enfoca en optimizar métodos de producción o distribución, mejorando la calidad, eficiencia y reduciendo costos operativos. Ejemplo: Automatización de cadenas de suministro mediante inteligencia artificial.
          p.text-small(numero="3" titulo="Innovación en modelos de negocio") Representa una transformación en cómo una organización crea, entrega y captura valor. Incluye cambios en la propuesta de valor, estructura de costos y relaciones estratégicas. Ejemplo: Modelos de suscripción en servicios digitales.
          p.text-small(numero="4" titulo="Innovación en mercados") Se centra en introducir métodos innovadores para comercializar productos, ya sea a través de nuevos canales, estrategias de precio o comunicación con el cliente. Ejemplo: Uso de realidad aumentada para promocionar productos.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/24.png', alt='')
    
    .bg-full-width.bg-color-1.px-5.py-4.mb-5(data-aos="fade-left" style="background-color: #D6F5FA")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/25c.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Cada tipo de innovación responde a desafíos específicos y se adapta a las características del entorno competitivo, permitiendo a las organizaciones posicionarse de manera estratégica en su sector.

    h2.mb-5 Modelos de innovación

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/K21MaHaQ2cU?si=p1_h-gjUHSrNo1gY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-4 La implementación de modelos de innovación permite estructurar y gestionar el proceso creativo de manera sistemática. Estos modelos ofrecen marcos teóricos y prácticos que guían a las organizaciones en la transformación de ideas en soluciones reales.
    ImagenInfografica.color-primario.mb-0
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/25.svg', alt='Texto que describa la imagen')
      .tarjeta.bg-white.p-3(x="37%" y="80%" numero="+")
        .h5.mb-2 Innovación abierta
        p Este modelo combina ideas internas y externas para generar valor, promoviendo la colaboración entre empresas, academia y sociedad. Ejemplo: Desarrollo de vacunas mediante consorcios internacionales.
      .tarjeta.bg-white.p-3(x="37%" y="40%" numero="+")
        .h5.mb-2 Innovación cerrada
        p Se enfoca en procesos internos, controlando todo el ciclo de innovación para proteger la propiedad intelectual y desarrollar capacidades exclusivas. Ejemplo: Investigación farmacéutica propia para nuevos medicamentos.
      .tarjeta.bg-white.p-3(x="47%" y="24%" numero="+")
        .h5.mb-2 Innovación incremental
        p Busca mejoras continuas y graduales en productos, servicios o procesos, minimizando riesgos y maximizando eficiencia. Ejemplo: Mejora de empaques con materiales biodegradables.
      .tarjeta.bg-white.p-3(x="53%" y="24%" numero="+")
        .h5.mb-2 Innovación radical
        p Introduce cambios disruptivos que transforman sectores completos. Requiere altas inversiones y tolerancia al riesgo. Ejemplo: Desarrollo de tecnología cuántica aplicada a la computación.
      .tarjeta.bg-white.p-3(x="63%" y="40%" numero="+")
        .h5.mb-2 Lean Startup
        p Modelo enfocado en startups , que prioriza experimentación rápida mediante productos mínimos viables (MVP) y validación continua de hipótesis. Ejemplo: Apps lanzadas con funcionalidades básicas para pruebas de mercado.
      .tarjeta.bg-white.p-3(x="62%" y="80%" numero="+")
        .h5.mb-2 Triple Hélice
        p Integra universidad, empresa y gobierno, fomentando sinergias entre investigación académica, aplicaciones prácticas y políticas públicas. Ejemplo: Parques tecnológicos para promover la innovación regional.
    
    .bg-full-width.bg-fondo-4.mb-5
      .p-4.p-md-5
        p.mb-4 La selección de un modelo adecuado depende de los objetivos estratégicos, los recursos disponibles y el contexto de implementación. Cada enfoque aporta herramientas para abordar desafíos específicos y fomentar el desarrollo sostenible.
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-9

            .bg-color-white.shadow-soft.py-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 ¿Qué tipos de innovación existen?
                      p Para ampliar los conocimientos en los temas de innovación que has estudiado, le sugerimos explorar el siguiente vídeo:
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://youtu.be/8sJvf0NSk9g?si=nZ62Zj94srkCgsJ9" target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/164720" target="_blank" rel="noopener noreferrer") Chesbrough, H. (2020). Innovación abierta: Nuevos imperativos para la creación y el aprovechamiento de la tecnología. Harvard Business Press.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/21810" target="_blank" rel="noopener noreferrer") Cordovés Torres Gómez de Cádiz, L. (2022). Indicadores de innovación organizacional: Conceptos y aplicaciones. Editorial ESIC.

            //- Referencias con enlace
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/189560" target="_blank" rel="noopener noreferrer") Cabrera Paniagua, D. (2020). Innovación: perspectivas multidisciplinarias. RIL editores.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/261664" target="_blank" rel="noopener noreferrer") Fontana, C. (2024). Superlíderes: los superpoderes de creatividad e innovación. Pluma Digital Ediciones.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/269634?page=1" target="_blank" rel="noopener noreferrer") Germán García, E. Campo González, D. & Solarte, M. C. (2022). Conocimiento científico y educación ambiental para la formación de profesores. Programa Editorial Universidad del Valle.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/116307?page=1" target="_blank" rel="noopener noreferrer") López Cantos, F. J. (2018). Cultura visual y conocimiento científico: comunicación transmedia de la ciencia en la era Big Data. Editorial UOC.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/218623?page=3" target="_blank" rel="noopener noreferrer") Marín Marín, J. A. & Boffo, A. (2021). Retos de la investigación y la innovación en la sociedad del conocimiento. Dykinson.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/232623" target="_blank" rel="noopener noreferrer") Morales Cevallos, M. B. (Coord.), Vargas Serrano, A. (Coord.) & Álvarez Martínez-Iglesias, J. M. (Coord.). (2023). Innovación y transferencias de conocimientos. Dykinson.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/217705" target="_blank" rel="noopener noreferrer") Perdomo Charry, G. (2020). El Conocimiento y la innovación: desde las empresas a las redes sociales. Fondo Editorial CEIPA.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/g9aQUC-Pqu4?si=iRMSDyFTyk17lRT9" target="_blank" rel="noopener noreferrer") Ministerio TIC Colombia. (2021). Talleres de socialización del MECE [video]. YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/LcsLi5Xhb4Y?si=TRE4XEZNfPEHkMIW" target="_blank" rel="noopener noreferrer") EAFIT- Centro de Excelencia [Juan Diego Ramos]. (2013, 6 de agosto). Ciclo de Creatividad - Creatividad vs. innovación

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/8sJvf0NSk9g?si=nZ62Zj94srkCgsJ9" target="_blank" rel="noopener noreferrer") Negocios En Tu Mundo. [Negocios en Tm]. (2018, 21 de mayo). ¿Qué tipos de innovación existen?

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
