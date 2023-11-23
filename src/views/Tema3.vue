<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 #[em Software]
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.jpg')})`}", data-aos="fade-right", alt='Imagen decorativa'
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Proteger la empresa u organización es más posible cuando se cuenta con herramientas de seguridad digital. Subestimar la importancia de una estrategia de ciberseguridad robusta, es un error que puede costar caro a las organizaciones.<br><br>Las estrategias de seguridad digital fortalecidas y desarrolladas bajo normas y estándares son la herramienta que garantiza la protección de las organizaciones.

    .h5.text-center.mb-5(data-aos="fade-right") Conozca, a continuación, algunos de los #[em softwares] que contribuyen a la seguridad digital, desde la prevención o la mitigación de amenazas :

    .tarjeta.BG11.p-5.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.px-lg-4.px-2
          .col-lg-8.order-lg-1.order-2
            .h4 Nagios Network Analyzer
            p Otorga un análisis extenso de su red y fuentes de tráfico en unión con las amenazas a la seguridad.
            p.mb-0 El #[em software] cuenta con una potente interfaz web que es fácil de usar y permite consolidar notificaciones y alertas, a continuación, se enseña un video que ayuda a ampliar el conocimiento.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img02.png' alt="Imagen decorativa")
        .row.justify-content-center.px-lg-4.px-2
          .col-lg-8.order-lg-1.order-2
            .h4 Ntopng
            p.mb-0 Es una de las mejores herramientas de monitoreo de trafico de red, cuenta con una interfaz web inteligente para explorar información sobre el tráfico histórico y en tiempo real, junto con los hosts activos.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img03.png' alt="Imagen decorativa")
        .row.justify-content-center.px-lg-4.px-2
          .col-lg-8.order-lg-1.order-2
            .h4 SolarWinds
            p.mb-0 Cuenta con variedad de funciones y herramientas útiles diseñadas para traducir detalles finos en informes y gráficos completos.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img04.png' alt="Imagen decorativa")
        .row.justify-content-center.px-lg-4.px-2
          .col-lg-8.order-lg-1.order-2
            .h4 PRTG #[em Network Monitor]
            p.mb-0 Tiene la capacidad de monitorear de manera eficiente sus dispositivos, sistemas y aplicaciones de red.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img05.png' alt="Imagen decorativa")
        .row.justify-content-center.px-lg-4.px-2
          .col-lg-8.order-lg-1.order-2
            .h4 Pandora FMS
            p.mb-0 Sirve para supervisar cientos y miles de dispositivos, sistemas, aplicaciones y redes.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img06.png' alt="Imagen decorativa")

</template>

<script>
export default {
  name: 'Tema3',
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
