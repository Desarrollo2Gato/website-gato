import { dataService } from "@/app/types/services";
import { IoExtensionPuzzle } from "react-icons/io5";
export const InfoMk: dataService = {
  title: (
    <>
      Impulsa tu negocio con
      <span className="text-[#9353B6]"> Marketing digital</span>
    </>
  ),
  img: {
    id: 1,
    url: "/img/banner_home_new.png",
    width: 333,
    height: 329,
    alt: "Un post refenciando, vista de un dashboard y una app movil",
    title: "Un post refenciando, vista de un dashboard y una app movil",
  },
  description:
    "Desde estrategias visuales impactantes hasta campañas digitales efectivas, conectamos tu marca con el público adecuado para generar resultados medibles y un crecimiento real.",
  subservices: [
    {
      name: "Diseño Gráfico",
      id: "diseno-grafico",
      title: (
        <>
          Diseño <span className="text-[#9353B6]">Gráfico</span>
        </>
      ),
      description:
        "Creamos identidades visuales y contenido gráfico impactante que reflejan la esencia de tu marca, ayudándote a destacar en cada punto de contacto con tus clientes. ",
      items: [
        "Diseño de posts para redes sociales",
        "Anuncios publicitarios",
        "Flyers y folletos",
        "Presentaciones visuales",
        "Adaptación a múltiples formatos:",
      ],
      process: [
        "Seguimos una linea gráfica.",
        "Solicitamos aprobación antes de publicar.",
        "Redactamos copys enfatizando el call to action.",
      ],
    },
    {
      name: "Producción Audiovisual",
      id: "prduccion-audiovisual",
      title: (
        <>
          Producción <span className="text-[#9353B6]">Audiovisual</span>
        </>
      ),
      description:
        "Creamos identidades visuales y contenido gráfico impactante que reflejan la esencia de tu marca, ayudándote a destacar en cada punto de contacto con tus clientes. ",
      items: [
        "Sesiones fotográficas profesionales de productos o servicios",
        "Enfocamos y resaltamos los detalles de tu proyecto y transmitimos el mensaje de tu marca de forma clara",
        "Realizamos producciones de video adaptados a tus necesidades",
        "Te acompañamos desde la planificación hasta la grabación en locaciones claves.",
        "Desarrollamos contenido para redes, camapañas o eventos que comuniquen efectivamente tu historia.",
      ],
    },
    {
      name: "Edición y desarrollo audiovisual",
      id: "edicion-desarrollo-audiovisual",
      title: (
        <>
          Edición y Desarrollo{" "}
          <span className="text-[#9353B6]">Audiovisual</span>
        </>
      ),
      description:
        "Transformamos tu contenido en videos y fotografías impactantes, utilizando material propio, imágenes de stock o producciones originales. Cada pieza está diseñada para contar la historia de tu marca con profesionalismo y claridad.",
      items: [
        "Crea experiencias visuales únicas: Edición profesional que resalta lo mejor de tu contenido.",
        "Producción de alto impacto: Fotografía y video adaptados a tu historia de marca.",
        "Material a tu medida: Trabajamos con tus recursos o generamos contenido nuevo.",
        "Cuenta tu historia: Transforma ideas en piezas visuales claras y profesionales.",
        "Calidad garantizada: Videos y fotografías que destacan por su coherencia y estilo.",
        "Refleja tu esencia: Proyecciones visuales que conectan con tu público objetivo.",
      ],
      process: [
        "Se usa material proporcionado por el cliente, de stock o de nuestro servicio de producción.",
        "Se editan reels de impacto teniendo en cuenta la línea gráfica de la marca y el mensaje a transmitir.",
        "Se edita material fotográfico según el formato requerido.",
      ],
    },
    {
      name: "Community Manager",
      id: "community-manager",
      title: (
        <>
          Community <span className="text-[#9353B6]">Manager</span>
        </>
      ),
      description:
        "Potenciamos tu presencia en redes sociales con estrategias enfocadas en contenido, interacción y análisis para fortalecer tu comunidad y cuidar tu reputación.",
      items: [
        "Publicaciones estratégicas: Contenido diseñado para atraer y fidelizar a tu audiencia.",
        "Interacción activa: Fomentamos la participación y construimos una comunidad sólida.",
        "Monitoreo constante: Analizamos tendencias y conversaciones relevantes para tu marca.",
        "Reputación asegurada: Gestionamos tu imagen para mantenerla en lo más alto.",
        "Crecimiento orgánico: Estrategias que conectan con tu público de manera auténtica.",
      ],
    },
    {
      name: "Manejo de crisis",
      id: "manejo-crisis",
      title: (
        <>
          Manejo de <span className="text-[#9353B6]">crisis</span>
        </>
      ),
      description:
        "En el cambiante paisaje del marketing digital, las crisis pueden surgir en cualquier momento y tener un impacto significativo en la reputación y la percepción de una marca.  Es aquí donde entra en juego el servicio de manejo de crisis. Nos especializamos en ayudar a las marcas a navegar y superar situaciones adversas en línea, protegiendo su imagen y mitigando el daño potencial.",
      items: [
        "Evaluación de la Situación",
        "Desarrollo de Estrategias",
        "Comunicación Efectiva",
        "Monitoreo Continuo",
      ],
    },
    {
      name: "Content Manager",
      id: "content-manager",
      title: (
        <>
          Content <span className="text-[#9353B6]">Manager</span>
        </>
      ),
      description:
        "Nos encargamos de que cada pieza de contenido sea relevante, atractiva y fiel a la identidad de tu marca, asegurando su máximo impacto en todas las plataformas.",
      items: [
        "Programación estratégica: Contenido planificado para captar y retener audiencias.",
        " Monitoreo constante: Seguimiento en tiempo real para optimizar resultados.",
        "Coherencia de marca: Mensajes alineados con la identidad de tu empresa.",
        "Impacto multiplataforma: Adaptamos tu contenido para cada canal digital.",
        "Relevancia asegurada: Publicaciones diseñadas para conectar con tu público.",
      ],
    },
  ],
  benefits: {
    img: {
      id: 2,
      url: "/img/banner_home_new.png",
      width: 333,
      height: 329,
      alt: "Un post refenciando, vista de un dashboard y una app movil",
      title: "Un post refenciando, vista de un dashboard y una app movil",
    },
    title: (
      <>
        <span className="text-[#9353B6]">Beneficios </span>de trabajar con
        nosotros{" "}
      </>
    ),
    description:
      "Descubre cómo nuestros servicios pueden transformar tu marca, mejorar tu presencia digital y generar resultados efectivos",
    benefitsItems: [
      {
        icon: <IoExtensionPuzzle />,
        title: "Estrategias Personalizadas",
        description:
          "Diseñamos campañas a medida que se adaptan a las necesidades y objetivos específicos de tu negocio.",
      },
      {
        icon: <IoExtensionPuzzle />,
        title: "Análisis de Datos",
        description:
          "Utilizamos herramientas avanzadas para analizar el rendimiento y ajustar estrategias en tiempo real.",
      },
      {
        icon: <IoExtensionPuzzle />,
        title: "Presencia Multicanal",
        description:
          "Abarcamos diversos canales, desde redes sociales hasta email marketing, para maximizar tu alcance.",
      },
      {
        icon: <IoExtensionPuzzle />,
        title: "Incremento del ROI",
        description:
          "Optimizamos tus inversiones en marketing para garantizar el máximo retorno de inversión.",
      },
      {
        icon: <IoExtensionPuzzle />,
        title: "Creatividad e Innovación",
        description:
          "Campañas innovadoras que destacan tu marca y atraen a tu audiencia.",
      },
      {
        icon: <IoExtensionPuzzle />,
        title: "Mejora de la Visibilidad",
        description:
          "Aumentamos la visibilidad de tu marca y productos, atrayendo más tráfico y clientes potenciales.",
      },
    ],
  },
  gallery: [
    {
      id: 1,
      title: "img",
      alt: "img",
      width: 480,
      height: 480,
      url: "https://i.pinimg.com/enabled_lo_mid/736x/2b/04/47/2b04471c36079c90b9c3999d81d0f161.jpg",
    },
    {
      id: 2,
      title: "img",
      alt: "img",
      width: 624,
      height: 1114,
      url: "https://i.pinimg.com/enabled_lo_mid/736x/84/7f/e9/847fe98af13d049a78bf28738ea6e166.jpg",
    },
    {
      id: 3,
      title: "img",
      alt: "img",
      width: 736,
      height: 981,
      url: "https://i.pinimg.com/736x/60/16/ed/6016ede8877e0eb31f17b1f9aa15cbe2.jpg",
    },
    {
      id: 4,
      title: "img",
      alt: "img",
      width: 480,
      height: 480,
      url: "https://i.pinimg.com/enabled_lo_mid/736x/2b/04/47/2b04471c36079c90b9c3999d81d0f161.jpg",
    },
    {
      id: 5,
      title: "img",
      alt: "img",
      width: 624,
      height: 1114,
      url: "https://i.pinimg.com/enabled_lo_mid/736x/84/7f/e9/847fe98af13d049a78bf28738ea6e166.jpg",
    },
    {
      id: 6,
      title: "img",
      alt: "img",
      width: 736,
      height: 981,
      url: "https://i.pinimg.com/736x/60/16/ed/6016ede8877e0eb31f17b1f9aa15cbe2.jpg",
    },
  ],
};