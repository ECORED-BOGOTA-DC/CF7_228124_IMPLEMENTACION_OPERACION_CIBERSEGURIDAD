<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") Toda empresa u organización debe propender por establecer una política que permita identificar, gestionar e implementar las acciones necesarias que permitan prevenir y mitigar los riesgos de seguridad digital, esto a través de monitoreos, métodos e indicadores que permitan su seguimiento constante acorde a las métricas establecidas por la organización que generen seguridad digital.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esta síntesis resume los temas y subtemas abordados en este componente formativo como son las métricas e indicadores de monitoreo con sus tipos y características, de otra parte se aborda el monitoreo de la seguridad digital y su objetivo, y finalmente el software y su manera de contribuir a la mitigación de amenazas.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
