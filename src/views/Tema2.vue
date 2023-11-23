<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 #[em Testing] y monitoreo de la seguridad digital
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}", data-aos="fade-right", alt='Imagen decorativa'
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La finalidad de las pruebas de efectividad, frente a la metodología, es comprobar o medir la eficiencia de la ejecución del modelo de seguridad en las entidades; la cual facilita a las entidades la comprensión del desarrollo de las pruebas, los objetivos y el beneficio que se gana al identificar sus etapas y gestionarlas.

    p.text-center.mb-5(data-aos="fade-right") Algunas generalidades del #[em testing] que se deben tener en cuenta, dado su nivel de importancia e implicación, estas son:

    .row.justify-content-center.mb-5
      .col-xl-4.col-md-6.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-secundario.h-100.p-5
          .tarjeta-numerada__numero
            .h2 1
          .h5 Valoración múltiple y por etapas
          p.mb-0 Se desarrolla la metodología en etapas diferentes, que permiten definir qué tanto ha avanzado la organización con la implementación del modelo. Por medio de la valoración de diferentes aspectos, se podrán identificar vulnerabilidades y amenazas a las cuales está expuesta la entidad.
      .col-xl-4.col-md-6.mb-4(data-aos="flip-up")
        .tarjeta-numerada.color-acento-botones.h-100.p-5
          .tarjeta-numerada__numero
            .h2 2
          .h5 Identificación de eventos
          p Se podrán identificar, al igual que las amenazas, las posibles debilidades en los controles implementados.
          .row.justify-content-center
            .col-lg-4.col-6
              img(src='@/assets/curso/tema2/img02.svg' alt="Imagen decorativa")
      .col-xl-4.col-md-6.mb-4(data-aos="fade-left")
        .tarjeta-numerada.color-acento-contenido.h-100.p-5
          .tarjeta-numerada__numero
            .h2 3
          .h5 Intención y necesidad
          p.mb-0 Los procedimientos de #[em testing] y monitoreo del modelo de seguridad y privacidad de la información, tienen como objetivo fundamental, proteger la integridad, disponibilidad y confidencialidad de la información de la organización.
      .col-xl-4.col-md-6.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-secundario.h-100.p-5
          .tarjeta-numerada__numero
            .h2 4
          .h5 Implicaciones de la alta dirección
          p.mb-0 Los intereses de la alta dirección, son un factor externo de gran impacto, que se alinean con las pruebas de seguridad y privacidad y sus resultados, que en este caso se relacionan con los directivos de las entidades del estado, esto se demuestra en la capacidad que tengan las organizaciones para llevar a buen término la implementación del modelo de seguridad.
      .col-xl-4.col-md-6.mb-4(data-aos="fade-left")
        .tarjeta-numerada.color-acento-contenido.h-100.p-5
          .tarjeta-numerada__numero
            .h2 5
          .h5 Cumplimiento, aseguramiento e imagen
          p Cumplir con la normatividad vigente y llevar a la organización al siguiente nivel de seguridad, permite que sus procesos y atención al ciudadano brinden una buena imagen en la sociedad.
          .row.justify-content-center
            .col-lg-4.col-6
              img(src='@/assets/curso/tema2/img03.svg' alt="Imagen decorativa")
    
    .BGM04.py-4.px-md-5.px-4.mb-4
      .row.justify-content-center
        .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img03.svg' alt="Imagen decorativa")
        .col-lg-6(data-aos="fade-left")
          .titulo-segundo.color-primario(data-aos="fade-right")
            .h3 Guía No 1 (Guía metodológica de pruebas de efectividad) del MINTIC
          p Afiance sus conocimientos en lo relacionado con Testing y monitoreo, visitando y leyendo, responsablemente, la guía.
          a.boton.color-acento-botones.text-white.me-3(href="https://www.mintic.gov.co/gestionti/615/articles-5482_G1_Metodologia_pruebas_efectividad.pdf" target="_blank")
            span Descargar
            i.fas.fa-file-download

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Tipos de pruebas de efectividad
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img04.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p.mb-0 No existe una sola forma de hacer pruebas de efectividad ni tampoco un solo tipo de pruebas; esto significa que no habría marcos de referencia de los niveles de seguridad que se estarían evaluando. Entre otras cosas, un solo tipo de pruebas sería insuficiente para cubrir los diferentes tipos de comprobaciones existentes al interior de la organización. Una sola prueba o tipo de prueba, no tendría arqueo suficiente para evaluar todas las necesidades y eventos de la seguridad y privacidad de la información, que tuviera la entidad. (MINTIC, s.f.).

    .h5.text-center.mb-5(data-aos="fade-right") Se pueden determinar tres tipos de pruebas de efectividad, teniendo en cuenta el nivel de conocimiento del entorno de la organización, esto es:        

    .row.justify-content-center.mb-5
      .col-xl-10
        .tarjeta.color-primario.px-4.py-2.mb-2(data-aos="fade-right")
          .row.justify-content-center.align-items-center
            .col-lg-10.order-lg-1.order-2
              .h3.text-white.text-center.mb-0 Tipos de pruebas de efectividad del MINTIC
            .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img05.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-4.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
            .BG09.px-0.h-100
              .BGRT10.py-2.px-4
                .h5.text-center.mb-0 Pruebas con conocimiento nulo del entorno
              figure.w-100.mb-4
                img(src='@/assets/curso/tema2/img06.jpg' alt="Imagen decorativa")
              .p-4
                p.mb-0 Es una prueba que hace creer un atacante real, debido a que tiene muy poco, o nulo, conocimiento del objetivo.
          .col-lg-4.col-md-6.mb-lg-0.mb-4(data-aos="flip-up")
            .BG09.px-0.h-100
              .BGRT10.py-2.px-4
                .h5.text-center.mb-0 Pruebas con conocimiento medio del entorno
              figure.w-100.mb-4
                img(src='@/assets/curso/tema2/img07.jpg' alt="Imagen decorativa")
              .p-4
                p.mb-0 Aplica en el caso donde se tiene más información sobre el ambiente que será atacado, para la prueba de #[em pentesting]; por ejemplo, direcciones IP, sistemas operativos, arquitectura de red, etc., sin embargo, es información limitada. Esto, imita a alguna persona dentro de la red, con conocimiento básico de la misma.
          .col-lg-4.col-md-6.mb-lg-0.mb-4(data-aos="fade-left")
            .BG09.px-0.h-100
              .BGRT10.py-2.px-4
                .h5.text-center.mb-0 Pruebas con conocimiento completo del entorno
              figure.w-100.mb-4
                img(src='@/assets/curso/tema2/img08.jpg' alt="Imagen decorativa")
              .p-4
                p.mb-0 Se presenta cuando la información relacionada al sistema objetivo del ataque ya está clara para el #[em hacker]. Principalmente se aplica para temas de auditoría.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Alcance de las pruebas de efectividad
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
        p La metodología de pruebas, desde el inicio de la ejecución, se enfoca en implementar una línea base del estado de seguridad de la organización, con el fin de facilitar la identificación de la brecha en la implementación del modelo de seguridad, teniendo como concepto de línea base, la primera medición.
        p.mb-0 Estos son algunos alcances de las pruebas de medición en las organizaciones, en relación con el plan de seguridad y privacidad de la información, otorgadas por el ministerio de tecnologías de la información y comunicaciones:
      .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img09.png' alt="Imagen decorativa")
    
    .tarjeta.BG11.p-5.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.px-lg-4.px-2
          .col-lg-6.order-lg-1.order-2
            .h4.mb-5 ¿Qué ofrecen las pruebas?
            p Las mediciones otorgan a la entidad, una percepción de seguridad que se presenta en la ejecución del modelo de seguridad.
            p.ta.mb-0 MINTIC (s.f.).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img10.png' alt="Imagen decorativa")
        .row.justify-content-center.px-lg-4.px-2
          .col-lg-6.order-lg-1.order-2
            .h4.mb-5 Seguridad de la información: ecosistema
            p La seguridad de la información ha de ser concebida como ecosistema, la cual presenta varios principios básicos que deberían ser valiosos en el momento de realizar pruebas para comprobar los avances en la implementación del modelo de seguridad y privacidad. 
            p.ta.mb-0 MINTIC (s.f.).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img11.png' alt="Imagen decorativa")
        .row.justify-content-center.px-lg-4.px-2
          .col-lg-6.order-lg-1.order-2
            .h4.mb-5 ¿Soluciones definitivas en seguridad?
            p En términos figurativos, no existe una bala de plata para los inconvenientes de seguridad que pueda tener una organización. Un modelo de protección y seguridad, por más adecuado, nunca será 100% determinante.
            p.ta.mb-0 MINTIC (s.f.).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img12.png' alt="Imagen decorativa")
        .row.justify-content-center.px-lg-4.px-2
          .col-lg-6.order-lg-1.order-2
            .h4.mb-5 La seguridad: proceso, no producto
            p Una evaluación de seguridad es útil como primera fase, pero no es efectiva en evaluaciones más profundas, requeridas por una organización para mejorar sus niveles de seguridad en todas las áreas. La seguridad digital es un proceso, no un producto.
            p.ta.mb-0  MINTIC (s.f.).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img13.png' alt="Imagen decorativa")

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Procedimiento de las pruebas
    
    p.mb-5(data-aos="fade-right") De la aplicación procedente, responsable y oportuna de las pruebas, depende en gran medida su efectividad y su potencial aprovechamiento. Las pruebas de efectividad han de realizarse por fases, siendo cada una de estas, una acción vinculada consecuentemente con las anteriores o con las posteriores.

    .row.justify-content-center.mb-5
      .col-lg-6
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img14.svg' alt="Imagen decorativa")
          figcaption.text-center Nota. <a style="color: #3F51B5; text-decoration: underline #3F51B5" href="https://www.mintic.gov.co/gestionti/615/articles-5482_G1_Metodologia_pruebas_efectividad.pdf" target="_blank">Guía metodológica de pruebas de efectividad</a>
    
    p.mb-5(data-aos="fade-right") Repase las fases secuenciales de aplicación de las pruebas de efectividad, en procesos de seguridad de la información, como lo propone MINTIC, explorando la información que se expone a continuación:

    .BGM12.py-4.px-md-5.px-4.mb-4
      .row.justify-content-center(data-aos="zoom-in")
        .col-lg-8
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/img15.svg', alt='Imagen decorativa')
            .tarjeta.BGRY09.p-3(x="49.8%" y="26%" numero="+")
              p.mb-0 Esta fase se basa en identificar los alcances reales de las pruebas y de los procedimientos a ejecutar con base a las necesidades identificadas.
            .tarjeta.BGRY09.p-3(x="64%" y="35%" numero="+")
              p.mb-0 Una vez se definen los alcances y necesidades, se procede con la fase de reconocimiento. Esta fase tiene por objetivo obtener tanta información del objetivo como sea posible para poder ser empleada en las fases de evaluación de vulnerabilidades y la fase de explotación.
            .tarjeta.BGRY09.p-3(x="67.5%" y="55%" numero="+")
              p.mb-0 Esta fase maneja la relación atacante vs activo, es decir, el atacante que beneficio puede obtener si logra su objetivo de penetrar el sistema y modificar, borrar, copiar o destruir algún activo de información.
            .tarjeta.BGRY09.p-3(x="57.5%" y="70%" numero="+")
              p.mb-0 Es el proceso de descubrir falencias en los sistemas y aplicaciones que pueden llegar a ser aprovechados por un atacante. Dichas falencias pueden ser descubiertas a nivel del host o en la administración o configuración o diseño del mismo.
            .tarjeta.BGRY09.p-3(x="42.2%" y="70%" numero="+")
              p.mb-0 Esta fase se centra puramente en obtener acceso al sistema, apalancando las debilidades identificadas en la etapa anterior o sobrepasando los controles de seguridad existentes.
            .tarjeta.BGRY09.p-3(x="32%" y="55%" numero="+")
              p.mb-0 Una vez se encuentra comprometido el sistema o host (fase anterior), se procederá a identificar qué tipo de información puede obtenerse, qué otros sistemas de información se puedan ingresar desde el sistema capturado, identificar opciones de configuración, información de red (direccionamiento IP de VLAN, servidores vecinos, direcciones físicas, etc.), todo esto con el objetivo principal de determinar el valor de la máquina para la organización.
            .tarjeta.BGRY09.p-3(x="36%" y="35%" numero="+")
              p.mb-0 Es necesario documentar todos los resultados obtenidos en cada fase, para tener soportes de las labores realizadas y a su vez la respectiva justificación de los resultados finales.

    .row.mb-5
      .col-auto.BG08.py-2.px-3(data-aos="fade-right")
        .h3.mb-0 Fase de contextualización

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        p.mb-5(data-aos="fade-right") La fase de contextualización se soporta en la identificación de alcances reales de las pruebas y de los procedimientos a ejecutar, con base en las necesidades identificadas.
        .h5(data-aos="fade-right") Tal identificación puede darse por medio de preguntas como:
        ol.lista-ol.ms-4
          li(data-aos="fade-right") 
            span.tcp.text-bold a.
            | ¿Cuáles serán los objetivos a evaluar?
          li(data-aos="fade-right") 
            span.tcp.text-bold b.
            | ¿Qué quiere alcanzar la entidad específicamente con estas pruebas?
          li(data-aos="fade-right") 
            span.tcp.text-bold c.
            | ¿Si desea realizarlo en horas hábiles, no hábiles o fines de semana?
          li(data-aos="fade-right") 
            span.tcp.text-bold d.
            | ¿Qué direcciones IP internas o externas serán objetivo de las pruebas? (Si aplica).
          li(data-aos="fade-right") 
            span.tcp.text-bold e.
            | En caso de poderse vulnerar el sistema, ¿qué tipo de acciones posteriores solicita realizar? (Pueden ser pruebas de vulnerabilidades en la máquina comprometida, escalamiento de privilegios, etc.).
          li(data-aos="fade-right") 
            span.tcp.text-bold f.
            | ¿Qué fechas de inicio y finalización de las actividades?
          li(data-aos="fade-right") 
            span.tcp.text-bold g.
            | ¿Se incluirán temas de ingeniería social?
          li(data-aos="fade-right") 
            span.text-bold h.
            | ¿Qué temas de ingeniería social pueden ser válidos para ejecutar estos procedimientos?
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img16.png' alt="Imagen decorativa")  

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img17.png' alt="Imagen decorativa")
      .col-lg-8
        .h5(data-aos="fade-left") Estos son algunos aspectos de suma importancia, desde el ministerio de las TIC, y que se deben tener en cuenta en la fase de contextualización, esto es:
        p(data-aos="fade-left") Ha de tenerse en cuenta que estas pruebas no identifican, solamente, una vulnerabilidad sobre un sistema específico o algún sistema desactualizado; su meta principal es identificar riesgos de seguridad de información.
        p(data-aos="fade-left") La identificación de riesgos de seguridad que logran estas pruebas, la hacen a través de controles que serán evaluados. Así, tomar las medidas proactivas/preventivas para mitigar riesgos encontrados.
        p(data-aos="fade-left") Otros aspectos importantes para la contextualización del procedimiento son:
        ul.lista-ul--color.lista-ul--separador.ms-4
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-check-circle.tac
            | Establecer líneas de comunicación con administradores de cada sistema a evaluar.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-check-circle.tac
            | Reportes parciales de avance de las pruebas, con una frecuencia definida.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-check-circle.tac
            | Manejo de evidencias o soportes de las actividades.
        p.mb-0(data-aos="fade-left") Estas pruebas también miden la efectividad de un sistema de monitoreo o detección, es decir que, si se están realizando actividades de escaneo, ataques, infiltración, alteración de la información, exista una respuesta eficaz.

    .row.mb-5
      .col-auto.BG08.py-2.px-3(data-aos="fade-right")
        .h3.mb-0 Fase de reconocimiento del objetivo

    p(data-aos="fade-right") Entre más información pueda obtenerse, más puntos de explotación podrían encontrarse y aprovecharse en las siguientes fases. Para realizar este levantamiento de información pueden utilizarse los tres métodos denominados: pasivo, semi-pasivo y activo (enfocado a los sistemas de información).
    p.mb-5(data-aos="fade-right") Conozca, según la orientación del ministerio de tecnologías de la información y las comunicaciones, las especificaciones y aspectos particulares de los tres métodos para el levantamiento de información en la fase de reconocimiento del objetivo:

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        TabsA.color-acento-contenido
          .tarjeta.BG13.p-4(titulo="Método pasivo")
            p.mb-0 Aplica, si la recolección de la información no implica acceder a ningún sistema de la entidad o generar tráfico que pueda ser detectado por alguno de sus sistemas. Generalmente es información que está disponible en otros sitios y puede estar desactualizada, sin embargo, puede llegar a ser útil. #[span.ta MINTIC (s.f.).]
          .tarjeta.BG13.p-4(titulo="Método semi-pasivo")
            p.mb-0 En esta instancia, se apunta hacia los sistemas de la entidad, simulando ser tráfico normal proveniente de internet, sin emplear ningún método que pueda considerarse sospechoso por parte de los sistemas, es “camuflar el tráfico”. Como por ejemplo consultas DNS simples para verificar los servidores públicos. #[span.ta MINTIC (s.f.).]
          .tarjeta.BG13.p-4(titulo="Método activo")
            p.mb-0 Este método de obtención de información es el más propenso a ser detectado por los sistemas de detección y monitoreo, comprenden actividades como: escaneo de puertos, análisis de vulnerabilidad a puertos abiertos y búsqueda de directorios, archivos o servidores adicionales que no estén públicamente disponibles. #[span.ta MINTIC (s.f.).]
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img18.png' alt="Imagen decorativa")
    
    .row.mb-5
      .col-auto.BG08.py-2.px-3(data-aos="fade-right")
        .h3.mb-0 Fase de modelado de amenazas
    
    p(data-aos="fade-right") “Esta fase maneja la relación “#[b Atacante Versus activo]”; es decir, el beneficio que el atacante puede obtener si logra su objetivo de penetrar el sistema y modificar, borrar, copiar o destruir algún activo de información”. #[span.ta (MINTIC, s.f.).]
    .h5.text-center.mb-5(data-aos="fade-right") A continuación, podrá identificar de manera más detallada esta relación, esto es:

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        LineaTiempoD.color-acento-contenido
          .row.justify-content-center(numero="1" titulo="Enfocado en la entidad: qué pasa si…")
            .col-lg-8.order-lg-1.order-2
              p Gestión del riesgo para determinar el apetito de riesgo de la entidad y para identificar los activos más críticos (o los que mayor impacto negativo pueden causar en caso de verse afectados). Este análisis busca resolver la incógnita “Que pasa si”, por ejemplo, que pasa si se divulga la información de mis sistemas de información, ¿si se vulnera la confidencialidad?, ¿Qué impacto tendría dicha divulgación?.
              p.ta.mb-0 MINTIC (s.f.).
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img19.png' alt="Imagen decorativa")
          .row.justify-content-center(numero="2" titulo="Enfocado en la entidad: considerar los activos…")
            .col-lg-8.order-lg-1.order-2
              p Datos De Empleados y datos de clientes.
              ul.lista-ul--color.lista-ul--separador.ms-4
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Sistemas De Información e información financiera.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Información De Mercadeo.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Políticas, Planes y Procedimientos.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Información Técnica (Diseños de infraestructura, información de configuración del sistema, cuentas de usuarios, cuentas de usuarios privilegiados).
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Personas.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Información generada a través de los diferentes procesos de negocio.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Información de producto (Investigación y desarrollo, patentes, entre otros.)
              p.ta.mb-0 MINTIC (s.f.).
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img20.png' alt="Imagen decorativa")
          .row.justify-content-center(numero="3" titulo="Enfocado en la entidad: normas y estándares")
            .col-lg-8.order-lg-1.order-2
              p Para realizar una gestión de riesgos adecuada, se debe acudir a la “#[b Guía de gestión de riesgos de seguridad de la información]” del modelo de seguridad y privacidad de la información. Si la entidad cuenta con este análisis, es importante revisarlo, ya que puede permitir identificar y perfilar ataques posibles y si los controles implementados sí son suficientes.
              p.ta.mb-0 MINTIC (s.f.).
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img21.png' alt="Imagen decorativa")
          .row.justify-content-center(numero="4" titulo="Enfocado en el atacante: agentes")
            .col-lg-8.order-lg-1.order-2
              p Identificando los posibles agentes o grupos que podrían llegar a perpetrar algún tipo de ataque hacia la entidad. Dicha identificación está centrada en los siguientes grupos: Agentes de ataque internos y Agentes de ataque externo. Dentro de las poblaciones que más ataques pueden llegar a generar se encuentran los empleados inconformes y los empleados a nivel ejecutivo, que pueden llegar a aprovechar sus usuarios con privilegios adicionales para vulnerar el sistema para sus propios fines.
              p.ta.mb-0 MINTIC (s.f.).
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img22.png' alt="Imagen decorativa")
          .row.justify-content-center(numero="5" titulo="Enfocado en el atacante:  agentes Internos")
            .col-lg-8.order-lg-1.order-2
              p Los atacantes o agentes de ataque, internos, pueden llegar a ser:
              ul.lista-ul--color.lista-ul--separador.ms-4
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Administradores, ejecutivos
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Administradores de infraestructura
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Desarrolladores
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Ingenieros
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Técnicos
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Contratistas
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Soporte remoto
              p.ta.mb-0 MINTIC (s.f.).
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img23.png' alt="Imagen decorativa")
          .row.justify-content-center(numero="6" titulo="Enfocado en el atacante:  agentes externos")
            .col-lg-8.order-lg-1.order-2
              p Los atacantes o agentes de ataque, externos, pueden llegar a ser:
              ul.lista-ul--color.lista-ul--separador.ms-4
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Sociedades.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Competidores.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Contratistas.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Proveedores.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Crimen organizado.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  | Hacktivistas.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle.tac
                  p.mb-0 #[em Hackers] tipo #[em Script Kiddies].
              p.ta.mb-0 MINTIC (s.f.).
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img24.png' alt="Imagen decorativa")

    .row.mb-5
      .col-auto.BG08.py-2.px-3(data-aos="fade-right")
        .h3.mb-0 Fase de análisis de vulnerabilidades

    p(data-aos="fade-right") Dependiendo de la amplitud de los alcances propuestos, el análisis de vulnerabilidad puede variar desde analizar un servicio o host específico o a un inventario completo de máquinas.
    .h5.text-center.mb-5(data-aos="fade-right") Estos procesos de análisis pueden ejecutarse también de las siguientes maneras o métodos:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img25.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          div(numero="1" titulo="Análisis activo")
            p El análisis activo involucra tener un contacto directo con el objetivo a probar. Puede hacerse de manera automática o de manera manual bajo diversas actividades conjuntas.
            p.ta.mb-0 MINTIC (s.f.).
          div(numero="2" titulo="Método automatizado")
            p Utiliza un #[em software] que interactúa con el objetivo; realiza varios procedimientos de análisis simultáneamente, dando ventajas significativas de tiempo y esfuerzos, respecto a los métodos manuales. Una ventaja es, por ejemplo, ejecutar un telnet hacia un puerto para verificar si este responde o está abierto, repetir este proceso para los más de 60 mil puertos es una labor tediosa y un #[em software] puede ejecutarla.
            p.ta.mb-0 MINTIC (s.f.).
          div(numero="3" titulo="Ejecutan el método automático")
            p Escáneres de puertos.
            ul.lista-ul--color.lista-ul--separador.ms-4
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle.tac
                | Escáneres basados en servicios.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle.tac
                | Lectura de Banners.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle.tac
                | Escáneres específicos para servicios web.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle.tac
                p.mb-0 #[em Software] para ataques o escaneo de fuerza bruta.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle.tac
                | Escáneres de red.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle.tac
                | Escáneres para tráfico de voz.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle.tac
                | Múltiples nodos de ataque.
            p.ta.mb-0 MINTIC (s.f.).
          div(numero="4" titulo="Investigación")
            p Una vez se realiza la verificación de las vulnerabilidades con base en los métodos anteriores, es necesario investigar en las diferentes bases de datos para comprobar la veracidad de lo que se ha encontrado y las posibles maneras de apalancar o aprovechar las fallas identificadas. 
            p.ta.mb-0 MINTIC (s.f.).
          div(numero="5" titulo="Fuentes de información del método investigación")
            p Bases de datos de vulnerabilidades (CVE)
            ul.lista-ul--color.lista-ul--separador.ms-4
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle.tac
                | Alertas o publicaciones de proveedores de plataformas.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle.tac
                | Bases de datos de exploits.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle.tac
                | Passwords por defecto de plataformas específicas.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle.tac
                | Guías de hardening (endurecimiento) para plataformas.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle.tac
                | Investigación propia (empleando virtualización o duplicación de máquinas por ejemplo).
            p.ta.mb-0 MINTIC (s.f.).
          div(numero="6" titulo="Consolidado de investigación")
            p Una vez se realiza la investigación, se deben confirmar las vulnerabilidades encontradas en un archivo consolidado, con su respectiva justificación y los tipos de ataque que podrían ejecutarse con base a los mismos.
            p.ta.mb-0 MINTIC (s.f.).

    .cajon.color-secundario.p-4.mb-5(data-aos="fade-right")
      p.mb-0 La fase de análisis de vulnerabilidades implica, además, métodos como análisis de metadatos en archivos publicados en internet, que pueden contener información sobre el tipo de servidor, nombres de dominio, direccionamiento IP, etc. También incluye el monitoreo de tráfico o copiado de tráfico (espejo de puertos) para captura y posterior análisis. #[span.ta (MINTIC, s.f.).]

    .row.mb-5
      .col-auto.BG08.py-2.px-3(data-aos="fade-right")
        .h3.mb-0 Fase de explotación
    
    p(data-aos="fade-right") Esta fase se centra en obtener acceso al sistema, apalancando las debilidades identificadas en la etapa anterior o sobrepasando los controles de seguridad existentes.
    .h5.text-center.mb-5(data-aos="fade-right") Dentro de las técnicas de explotación más utilizadas se encuentran las siguientes:

    .BGM14.py-4.px-md-5.px-4.mb-5
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido.mb-5(tipo="n")
            div(data-aos="fade-right")
              .h5.tcp Evasión
              p.mb-0 Implica realizar las pruebas de penetración escapando de los sistemas de detección, pueden implicar desde seguridad física (evadir una cámara) hasta evadir un sistema tipo IDS/IPS.
            div.text-start(data-aos="fade-left")
              .h5.tcp Ataques de precisión
              p.mb-0 Uso de ataques bien focalizados, es decir, no empezar a atacar objetivos de manera indiscriminada sino bien estructurada y puntual.
            div(data-aos="fade-right")
              .h5.tcp Ataques personalizados
              p.mb-0 Con base a tecnologías/medios de transmisión: Dependiendo del medio de transmisión (cableado, vía Wifi).
            div.text-start(data-aos="fade-left")
              .h5.tcp #[em Exploits] adaptados o complementados
              p.mb-0 Tomar #[em exploits] ya existentes y adaptarlos para las plataformas o sistemas objetivos.
            div(data-aos="fade-right")
              .h5.tcp #[em Exploits] communes
              p.mb-0 #[em Buffer overflow], SEH (Structured Exception Handler), ROP (Return Oriented Programming)
            div.text-start(data-aos="fade-left")
              .h5.tcp Crackeo De SSID (WIFI)
              p.mb-0 Movimientos enfocados a apalancar vulnerabilidades sobre este medio y sus protocolos de encriptación como (WEB, WPA, EAP-FAST, entre otros).
            div(data-aos="fade-right")
              .h5.tcp Ataques al usuario (Ingeniería social)
              p.mb-0 Con base en los temas encontrados en la fase de modelado de amenazas, emplear los ataques de ingeniería social al personal de la organización para obtener #[em passwords], documentación adicional etc.
            div.text-start(data-aos="fade-left")
              .h5.tcp Hombre en el medio (Man In-The-Middle)
              p.mb-0 Ataques de interceptación de tráfico, donde se suplanta el direccionamiento bien sea físico o IP.
            div(data-aos="fade-right")
              .h5.tcp VLAN Hopping
              p.mb-0 Este método de ataque consiste en engañar a dispositivos conmutadores (switches) con el fin de ganar acceso a la red como un dispositivo confiable, los métodos más comunes son VLAN HOPPING y Switch Spoofing.

          .cajon.color-secundario.p-4(data-aos="fade-right")
            p.mb-0 Existen aún más métodos de ataque, con los cuales se puede intentar lograr el objetivo de vulnerar o acceder a los sistemas. Una vez se logre el objetivo de ingreso, deberán documentarse los hallazgos de una manera evidente y concreta para utilizar la información como herramienta de mejora. #[span.ta (MINTIC, s.f.).]

    .row.mb-5
      .col-auto.BG08.py-2.px-3(data-aos="fade-right")
        .h3.mb-0 Fase de post-explotación 
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img26.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        .bloque-texto-b.color-secundario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="color: #8F52F5; font-size: 2em")
            p Es importante tener en cuenta que, a este punto, ya se vulnera el sistema y no es necesario dañarlo o desestabilizar gravemente (a menos que el plan desde el principio así lo indique).
            i.fas.fa-quote-right(style="color: #8F52F5; font-size: 2em")
          .bloque-texto-d__autor 
            .h5 (MINTIC, s.f.).
        .h5.mb-0 Por lo tanto, se debe definir un alcance máximo a ejecutar para las siguientes acciones:

    .BGM15.py-4.px-md-5.px-4.mb-5
      .row.justify-content-center
        .col-lg-10
          ul.lista-ul--color.lista-ul--separador.ms-4
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle.tac
              p.mb-0 Escalamiento de privilegios.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle.tac
              p.mb-0 Acceso a datos específicos (bases de datos, repositorios, #[em fileservers], ftp).
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle.tac
              p.mb-0 Denegación de servicios (CRÍTICO).
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle.tac
              p.mb-0 Obtención de #[em passwords] para otros sistemas.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle.tac
              p.mb-0 Acceso a #[em logs] de dispositivos.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle.tac
              p.mb-0 Ingreso a servidores Web, DNS, proxy, servidores de impresión.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle.tac
              p.mb-0 Acceso a directorios activos o LDAP, para obtener información de usuarios (cuentas de correo electrónico, extensiones o dependencias donde trabajan), información que puede emplearse para posteriores ataques de ingeniería social.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle.tac
              p.mb-0 Ingreso a las entidades certificadoras, que podría afectar la creación de certificados, revocación e incluso la inscripción de dichos certificados si se llega a comprometer la llave.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle.tac
              p.mb-0 Acceso a los sistemas de almacenamiento, para verificar información sobre tipos de #[em backup], medios empleados etc.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle.tac
              p.mb-0 #[em Ping Sweeps] (Barridos A VLANS para identificar hosts).
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle.tac
              p.mb-0 Instalación de #[em exploits] remotos.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle.tac
              p.mb-0 Instalación de #[em backdoors] para posterior ingreso y que no se afecten por los reinicios de los hosts.
            li(style="margin-bottom: 2px" data-aos="fade-right")
              i.fas.fa-check-circle.tac
              p.mb-0 Modificación de los servicios.

    .row.mb-5
      .col-auto.BG08.py-2.px-3(data-aos="fade-right")
        .h3.mb-0 Fase de reporte
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .bloque-texto-b.color-secundario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="color: #8F52F5; font-size: 2em")
            p Es necesario documentar todos los resultados obtenidos en cada fase, para tener soportes de las labores realizadas y a su vez la respectiva justificación de los resultados finales.
            i.fas.fa-quote-right(style="color: #8F52F5; font-size: 2em")
          .bloque-texto-d__autor 
            .h5 (MINTIC, s.f.).
        p.mb-0 Por lo anterior, es importante tener en cuenta las audiencias a las cuales se les presentará el reporte, dado que no es conveniente entrar en demasiados detalles cuando la audiencia será de tipo administrativo y así mismo cuando la audiencia es de tipo técnico, no se disponga de un reporte más preciso y específico.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img27.png' alt="Imagen decorativa")

    .row.mb-5
      .col-auto.BG08.py-2.px-3(data-aos="fade-right")
        .h3.mb-0 Tipos de Reporte
    
    .BGRB09.mb-5(data-aos="fade-right")
      .h3.mb-0 Reporte gerencial

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img28.png' alt="Imagen decorativa")
      .col-lg-8
        .bloque-texto-b.color-secundario.p-4.mb-4(data-aos="fade-left")
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="color: #8F52F5; font-size: 2em")
            p El reporte gerencial enfoca un plan de trabajo para solucionar todas las falencias encontradas, pueden manejarse plazos trimestrales, semestrales y anuales para determinadas labores que requieran ejecutarse.
            i.fas.fa-quote-right(style="color: #8F52F5; font-size: 2em")
          .bloque-texto-d__autor 
            .h5 (MINTIC, s.f.).
        .h5.mb-5(data-aos="fade-left") Según las mismas orientaciones de MINTIC, este tipo de reporte debe contener la siguiente información:
        ul.lista-ul--color.lista-ul--separador
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-check-circle.tac
            | Introducción, justificación y objetivos alcanzados durante las pruebas.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-check-circle.tac
            | Calificación de riesgo, ubicando los activos que mayor riesgo pueden traer a la organización con base al criterio del ejecutor de la prueba de efectividad de los controles.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-check-circle.tac
            | Motivos o causa raíz de las vulnerabilidades encontradas, entre las cuales se pueden encontrar razones como:
        ul.lista-ul--color.ms-4
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-play-circle.tcs
            | Máquinas sin parches.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-play-circle.tcs
            p.mb-0 Sistemas operativos sin el #[em hardening] adecuado.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-play-circle.tcs
            | Máquinas con servicios activos no utilizados.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-play-circle.tcs
            | Contraseñas débiles o fáciles de adivinar.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-play-circle.tcs
            p.mb-0 Diseños o arquitecturas de sistemas inseguros, servicios de red sin #[em hardening].
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-play-circle.tcs
            | Firmware de dispositivos obsoleto. 

    .BGRB09.mb-5(data-aos="fade-right")
      .h3.mb-0 Reporte técnico
    
    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2
        .bloque-texto-b.color-secundario.p-4.mb-4(data-aos="fade-right")
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="color: #8F52F5; font-size: 2em")
            p Este reporte puede contener la información anterior, pero incluyendo los aspectos más importantes a nivel técnico, dado que quienes reciban esta información serían quienes ejecuten las acciones de mejora para cada vulnerabilidad encontrada.
            i.fas.fa-quote-right(style="color: #8F52F5; font-size: 2em")
          .bloque-texto-d__autor 
            .h5 (MINTIC, s.f.).
        .h5.mb-5(data-aos="fade-right") Lo anterior, teniendo en cuenta:
        ul.lista-ul--color.lista-ul--separador
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle.tac
            | Recolección de información basada en recursos publicados por la propia entidad.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle.tac
            | Información recolectada en plataformas como google, bing, páginas de referencia, etc.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle.tac
            | Información que pudo ser recolectada en las plataformas publicadas como, estructura de la organización, unidades de negocio, mercados, proveedores etc.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle.tac
            | Inteligencia con el personal interno, donde se evidencia la información que pudo obtenerse por medio de ingeniería social (solo en primera instancia, no para solicitar claves o accesos).
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle.tac
            | Vulnerabilidades encontradas (clasificadas bien sea por los servicios, plataformas o hosts).
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle.tac
            | Explotación de las vulnerabilidades (cuales fueron apalancadas o pudieron ser aprovechadas en cada host y cuáles no).
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle.tac
            | Actividades de POST-Explotación efectuadas en cada host comprometido con la prueba.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle.tac
            | Una vez se finaliza el reporte, se espera que la entidad inicie con las actividades propuestas para cerrar las brechas y aumentar la efectividad de los controles implementados o se implementen otros que cumplan con las expectativas de seguridad de la información.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img29.png' alt="Imagen decorativa")

    .BGRB09.mb-5(data-aos="fade-right")
      .h3.mb-0 Informes y recomendaciones
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img30.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        .bloque-texto-b.color-secundario.p-4.mb-4(data-aos="fade-left")
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="color: #8F52F5; font-size: 2em")
            p En esta fase ya se cuenta con la información resultante del levantamiento de información, pruebas, análisis y evidencias recolectados se han evidenciado las vulnerabilidades técnicas explotables y la línea base de seguridad de la entidad evaluada, su brecha frente a la norma ISO 27001 y en relación con mejores prácticas.
            i.fas.fa-quote-right(style="color: #8F52F5; font-size: 2em")
          .bloque-texto-d__autor 
            .h5 (MINTIC, s.f.).
        p.mb-0 Estos son algunos aspectos clave que, sobre los informes, deben tenerse en cuenta y ser aplicados, según lo orientado y estipulado por el ministerio de las TIC:
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-6.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-acento-contenido.p-4.h-100
          .row.mb-4
            .col-lg-3.col-6
              img(src='@/assets/curso/tema2/img31.svg', alt='Imagen decorativa')
          .h4 Documentar las recomendaciones
          p.mb-0 En cada uno de los análisis se han documentado las recomendaciones para mejorar o subsanar las debilidades y hallazgos. Ello permitirá determinar el nivel de madurez y construir los informes de las pruebas técnicas y administrativas. #[span.ta MINTIC (s.f.).]
      .col-xl-4.col-md-6.mb-xl-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-contenido.p-4.h-100
          .row.mb-4
            .col-lg-3.col-6
              img(src='@/assets/curso/tema2/img32.svg', alt='Imagen decorativa')
          .h4 Requerimientos técnicos
          p.mb-0 Un informe del análisis realizado en la entidad, donde se refleje el estado de lo avanzado frente a los requerimientos de la norma ISO 27001, Gobierno en Línea y el Modelo de Seguridad y Privacidad de la Información del Ministerio TIC. Este informe también incluirá las recomendaciones a nivel de estrategia de implementación y coordinación para el fortalecimiento de la seguridad de la información en las entidades. #[span.ta MINTIC (s.f.).]
      .col-xl-4.col-md-6.mb-xl-0.mb-4(data-aos="fade-left")
        .tarjeta--boton.color-acento-contenido.p-4.h-100
          .row.mb-4
            .col-lg-3.col-6
              img(src='@/assets/curso/tema2/img33.svg', alt='Imagen decorativa')
          .h4 Resultados de las pruebas que incluyan
          p.mb-0 Categorización de cada tipo de vulnerabilidad, la amenaza a la seguridad que se expone, la causa del problema de seguridad, la técnica de prueba usada para encontrarla, la remediación de la vulnerabilidad, la calificación de riesgo de la vulnerabilidad (alta, media, baja). #[span.ta MINTIC (s.f.).]

</template>

<script>
export default {
  name: 'Tema2',
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
