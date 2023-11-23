<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Métodos de métricas e indicadores de monitoreo
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}", data-aos="fade-right", alt='Imagen decorativa'
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La adopción de métodos para la creación de métricas e indicadores de monitoreo está dirigido a la medición de la eficiencia, la efectividad y la eficacia de los componentes de gestión y de implementación, definidos en el plan estratégico de la seguridad y privacidad de la información. Estas métricas e indicadores ayudarán en la formulación de estrategias de mejora continua, permitiendo una mejor toma de decisiones.

    .h5.text-center.mb-5(data-aos="fade-right") Esta adopción de métricas e indicadores tiene como principales objetivos, los siguientes:

    .row.justify-content-center.align-items-end.mb-5
      .col-1.order-lg-1.order-2
      .col-lg-9.col-11.order-lg-2.order-3
        .tarjeta-avatar-b(data-aos="fade-right")
          .tarjeta-avatar-b__img(style="min-width: 5%; left: -7.5%")
            img(src='@/assets/curso/temas/img01.svg', alt='Imagen decorativa')
          .tarjeta.BGRT02.p-4
            .row
              .col-lg-9
                p.ms-4.mb-0 Evaluar la efectividad de la implementación de los controles de seguridad.
        .tarjeta-avatar-b(data-aos="fade-right")
          .tarjeta-avatar-b__img(style="min-width: 5%; left: -7.5%")
            img(src='@/assets/curso/temas/img02.svg', alt='Imagen decorativa')
          .tarjeta.BGR03.p-4
            .row
              .col-lg-9
                p.ms-4.mb-0 Evaluar la eficiencia del Modelo de Seguridad y Privacidad de la Información al interior de la entidad.
        .tarjeta-avatar-b(data-aos="fade-right")
          .tarjeta-avatar-b__img(style="min-width: 5%; left: -7.5%")
            img(src='@/assets/curso/temas/img01.svg', alt='Imagen decorativa')
          .tarjeta.BGR02.p-4
            .row
              .col-lg-9
                p.ms-4.mb-0 Proveer estados de seguridad que sirvan de guía en las revisiones del modelo de seguridad y privacidad de la información, facilitando mejoras en seguridad de la información y nuevas entradas a auditar.
        .tarjeta-avatar-b(data-aos="fade-right")
          .tarjeta-avatar-b__img(style="min-width: 5%; left: -7.5%")
            img(src='@/assets/curso/temas/img02.svg', alt='Imagen decorativa')
          .tarjeta.BGR03.p-4
            .row
              .col-lg-9
                p.ms-4.mb-0 Comunicar valores de seguridad al interior de la entidad.
        .tarjeta-avatar-b(data-aos="fade-right")
          .tarjeta-avatar-b__img(style="min-width: 5%; left: -7.5%")
            img(src='@/assets/curso/temas/img01.svg', alt='Imagen decorativa')
          .tarjeta.BGR02.p-4
            .row
              .col-lg-9
                p.ms-4.mb-0 Servir como insumos al plan de análisis y tratamiento de riesgos.
      .col-2.d-lg-flex.d-none.order-3
      .col-lg-4.col-6.img-01.px-5.order-lg-4.order-1(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img02.png', alt='Imagen decorativa')
    
    .BGM04.py-4.px-md-5.px-4.mb-4
      .row.justify-content-center
        .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img03.svg' alt="Imagen decorativa")
        .col-lg-6(data-aos="fade-left")
          p.mb-0 Para fundamentar los conceptos abordados, se le recomienda indagar los lineamientos de la #[b ISO/IEC 27001 - ISO 27004] y la #[b Guía 9 de Indicadores de gestión para la seguridad de la información del MINTIC], que encontrará en el material complementario.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Características de las métricas e indicadores
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img04.jpg')})`}" data-aos="fade-left" alt="Imagen decorativa"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 El escenario de la seguridad digital muestra cómo las amenazas cibernéticas evolucionan de manera permanente; el monitoreo de la seguridad de la información en las organizaciones ha de ser una rutina integral. Las métricas e indicadores orientadas a tal monitoreo, tienen una serie de características que vale la pena identificar, para una mejor aplicación y establecimiento de los mismos.

    p.mb-5(data-aos="fade-right") Esas características representativas son:

    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img05.svg' alt="Imagen decorativa")
          .tarjeta.BGR05.p-4
            .h4.text-center Evaluadores
            p.text-center.mb-0 Las métricas e indicadores son mecanismos o instrumentos utilizados para evaluar si se cumple o no con los objetivos estratégicos.
      .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img06.svg' alt="Imagen decorativa")
          .tarjeta.BGR06.p-4
            .h4.text-center Medidores
            p.text-center.mb-0 Las métricas e indicadores son una unidad de medida gerencial que evalúa resultados de una organización, frente a sus responsabilidades y objetivos.

      .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img07.svg' alt="Imagen decorativa")
          .tarjeta.BGR05.p-4
            .h4.text-center Generadores de información
            p.text-center.mb-0 Las métricas e indicadores son un generador de información que analiza el desempeño de cualquier proceso y verifica el cumplimiento, en términos de resultados.

      .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img08.svg' alt="Imagen decorativa")
          .tarjeta.BGR06.p-4
            .h4.text-center Generadores de alertas
            p.text-center.mb-0 Las métricas e indicadores son un generador de alertas que determinan desviaciones en el cumplimiento de los objetivos. 

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Tipos de indicadores
    
    .BG07.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p.text-white.mb-0 Con los lineamientos de las normas #[b ISO/IEC 27001, ISO/IEC 27004] y de la #[b Guía 9 de indicadores de gestión para la seguridad de la información del MINTIC], se adopta una serie de indicadores para medir la gestión y el cumplimiento en el avance del modelo de seguridad digital.
        .col-4.order-lg-2.d-lg-flex.d-none
        .col-lg-3.col-6.img-02.order-lg-3.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img09.png' alt="Imagen decorativa")

    .row.mb-5
      .col-auto.BG08.py-2.px-3(data-aos="fade-right")
        .h3.mb-0 Indicadores de gestión e indicadores de cumplimiento
    
    p(data-aos="fade-right") Tanto las normas ISO/IEC 27001 e ISO/IEC 27004, así como la Guía 9 de indicadores de gestión para la seguridad de la información del Ministerio de Tecnologías de la Información y las Comunicaciones , destacan la importancia de estos, para medir la gestión y el cumplimiento en el modelo de seguridad digital de las organizaciones. A continuación, algunas definiciones y orientaciones otorgadas por el MINTIC:
    p.mb-5(data-aos="fade-right") Se destacan, los tipos de indicadores que se enuncian y definen a continuación:

    .h4.tcp(data-aos="fade-right") <i class="fas fa-volleyball-ball fa-spin" style="padding-right: 5px"></i> Indicadores de Gestión

    p.mb-5(data-aos="fade-right") Están relacionados con las razones que permiten administrar un proceso o un sistema. Profundice a continuación sobre los indicadores de gestión:

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img10.png' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          div(numero="1" titulo="Organización De seguridad de la información")
            p Permite determinar y hacer seguimiento, al compromiso de la dirección, en cuanto a seguridad de la información, en lo relacionado con la asignación de personas y responsabilidades relacionadas con la seguridad de la información, al interior de la organización. 
            p.mb-0 #[b Objetivo]: hacer un seguimiento a la asignación de recursos y responsabilidades en gestión de seguridad de la información, por parte de la alta dirección.
          div(numero="2" titulo="Cubrimiento del SGSI En activos de información")
            p Permite determinar y hacer seguimiento al cubrimiento que se realiza al nivel de activos críticos de información de una organización y los controles aplicados.
            p.mb-0 #[b Objetivo]: hacer un seguimiento a la inclusión de nuevos activos críticos de información y su control, dentro del marco de seguridad y privacidad de la información.
          div(numero="3" titulo="Tratamientos de eventos relacionados en marco de seguridad y privacidad de la información")
            p Permite determinar la eficiencia en el tratamiento de eventos relacionados en la seguridad de la información. Los eventos serán reportados por los usuarios o determinados en las auditorías planeadas para el sistema.
            p.mb-0 #[b Objetivo]: reflejar la gestión y evolución del modelo de seguridad y privacidad de la información, al interior de la organización.
          div(numero="4" titulo="Plan de sensibilización")
            p Permite medir la aplicación de los temas sensibilizados en seguridad de la información por parte de los usuarios finales. Estas mediciones se podrán realizar por medio de auditorías especializadas en el tema o de forma aislada por parte de los responsables de la capacitación y sensibilización.
            p.mb-0 #[b Objetivo]: establecer la efectividad de un plan de capacitación y sensibilización, previamente definido como medio para el control de incidentes de seguridad.

    .h4.tcp(data-aos="fade-right") <i class="fas fa-volleyball-ball fa-spin" style="padding-right: 5px"></i> Indicadores de Cumplimiento
  
    p.mb-5(data-aos="fade-right") están relacionados con las razones que indican el grado de consecución de tareas. Revise a continuación más información sobre este tipo de indicadores:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-contenido
          div(numero="1" titulo="Cumplimiento de políticas de seguridad de la información en la organización")
            p.mb-0 #[b Objetivo]: identificar el nivel de estructuración de los procesos de la organización orientados a la seguridad de la información.
          div(numero="2" titulo="Identificación de lineamientos de seguridad de la organización")
            p Es el grado de la seguridad de la información y los equipos de cómputo.
            p.mb-0 #[b Objetivo]:  medir el nivel de preparación del recurso humano y su apropiación, en cuanto a la seguridad de la información y los equipos de cómputo.
          div(numero="3" titulo="Verificación del control de acceso")
            p Es el grado de control de acceso.
            p.mb-0 #[b Objetivo]: identificar la existencia de lineamientos, normas o estándares, en cuanto al control de acceso en la organización.
          div(numero="4" titulo="Aseguramiento en la adquisición y mantenimiento de <em>software</em>")
            p Es el grado de protección de los servicios de la organización.
            p.mb-0 #[b Objetivo]: identificar la existencia de lineamientos, normas o estándares en cuanto a la adquisición o desarrollo de aplicaciones.
          div(numero="5" titulo="Implementación de los procesos de registro y auditoría")
            p Es el grado de existencia de lineamientos, normas o estándares en cuanto registro y auditoría para la seguridad de la información.
            p.mb-0 #[b Objetivo]: identificar la existencia de lineamientos, normas o estándares en cuanto registro y auditoría para la seguridad de la información.
          div(numero="6" titulo="Implementación de los procesos de registro y auditoría")
            p Es el grado de implementación de los mecanismos encaminados a la detección de anomalías e irregularidades.
            p.mb-0 #[b Objetivo]: medir el nivel de mecanismos encaminados a la detección de anomalías e irregularidades.
          div(numero="7" titulo="Políticas de privacidad y confidencialidad")
            p Grado de implementación de políticas privacidad y confidencialidad.
            p.mb-0 #[b Objetivo]: identificar el nivel de implementación de políticas de privacidad y confidencialidad de la organización.
          div(numero="8" titulo="Verificación de las políticas de integridad de la información")
            p Es el grado de implementación de mecanismos para la integridad de la información y busca identificar el nivel de implementación de políticas privacidad y confidencialidad de la organización.
          div(numero="9" titulo="Políticas de disponibilidad del servicio Y la información")
            p Es el grado de cumplimiento de las políticas de disponibilidad del servicio y la información.
            p.mb-0 #[b Objetivo]: identificar el nivel de implementación de políticas de disponibilidad del servicio y la información.
          div(numero="10" titulo="Ataques informáticos a la organización")
            p Porcentaje de ataques informáticos recibidos en la organización que impidieron la prestación de alguno de sus servicios.
            p.mb-0 #[b Objetivo]: conocer el número de ataques informáticos recibidos.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img11.png' alt="Imagen decorativa")

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
