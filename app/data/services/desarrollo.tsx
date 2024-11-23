import { dataService } from "@/app/types/services";
import { FaAward, FaChartLine, FaFingerprint, FaRegBuilding, FaRegHeart } from "react-icons/fa6";
import { IoExtensionPuzzle, IoReorderTwo } from "react-icons/io5";
export const InfoDesarrollo: dataService = {
  title: (
    <>
       Lleva tus ideas al siguiente nivel con  
       <span className="text-[#4608AD]"> soluciones de software a medida</span>
    </>
  ),
  img: {
    id: 1,
    url: "/img/cats/gato_lupa.png",
    width: 433,
    height: 500,
    alt: "Un post refenciando, vista de un dashboard y una app movil",
    title: "Un post refenciando, vista de un dashboard y una app movil",
  },
  description:
    "Desarrollamos soluciones de software a medida que se adaptan a tus necesidades, optimizando procesos y potenciando tu negocio.",
  subservices: [
    {
      name: "Sistemas para gestión (CRM, ERP).",
      id: "sistema-para-gestion",
      img: {
        id: 1,
        url: "/img/cats/gato_lupa.png",
        width: 433,
        height: 500,
        alt: "gato negro con una lupa buscando la imagen",
        title: "Gato negro con una lupa",
      },
      title: (
        <>
          Sistemas para gestión <span className="text-[#4608AD]">(CRM, ERP)</span>
        </>
      ),
      description:
        "Ofrecemos sistemas CRM y ERP personalizados para gestionar clientes, procesos y recursos de manera eficiente, mejorando la productividad y el control en tu negocio.",
      items: [
        "Gestión de clientes: Centraliza y optimiza la administración de tus relaciones comerciales.",
        "Control de procesos: Automatiza tareas y mejora la eficiencia operativa.",
        "Gestión de recursos: Optimiza la planificación y el uso de recursos clave en tu empresa.",
        "Personalización: Adaptamos cada sistema a las necesidades específicas de tu negocio.",
        "Análisis de datos: Obtén reportes detallados para decisiones basadas en información real.",
      ],
    },
    {
      name: "Automatización de procesos",
      id: "auto-procesos",
      img: {
        id: 1,
        url: "/img/cats/gato_lupa.png",
        width: 433,
        height: 500,
        alt: "gato negro con una lupa buscando la imagen",
        title: "Gato negro con una lupa",
      },
      title: (
        <>
          Automatización  <span className="text-[#4608AD]">de procesos</span>
        </>
      ),
      description:
        "Automatizamos procesos clave para optimizar recursos, reducir errores y permitir que tu equipo se enfoque en tareas estratégicas.",
      items: [
        "Reducción de tareas manuales: Ahorra tiempo y esfuerzo automatizando procesos repetitivos.",
        "Optimización de recursos: Mejora la productividad al simplificar flujos de trabajo.",
        "Integración eficiente: Conecta sistemas y herramientas para un funcionamiento continuo.",
        "Reducción de errores: Minimiza riesgos al automatizar procesos críticos.",
        "Enfoque estratégico: Libera a tu equipo para que se concentre en actividades de mayor impacto.",
      ],
    },
    {
      name: "Sistemas de evaluación de desempeño.",
      id: "sistema-evaluacion-desempanio",
      img: {
        id: 1,
        url: "/img/cats/gato_lupa.png",
        width: 433,
        height: 500,
        alt: "gato negro con una lupa buscando la imagen",
        title: "Gato negro con una lupa",
      },
      title: (
        <>
          Sistemas de evaluación {" "}
          <span className="text-[#4608AD]">de desempeño</span>
        </>
      ),
      description:
        "Diseñamos sistemas para evaluar el desempeño laboral, permitiendo recopilar y analizar información clave para mejorar el rendimiento y la toma de decisiones.",
      items: [
        "Evaluación personalizada: Adaptamos el sistema a las necesidades de tu empresa.",
        "Análisis de rendimiento: Identifica fortalezas y áreas de mejora en tu equipo.",
        "Informes detallados: Genera reportes claros y precisos sobre el desempeño laboral.",
        "Toma de decisiones: Facilita estrategias basadas en datos confiables.",
        "Mejora continua: Promueve el desarrollo y crecimiento profesional en tu organización.",
      ],
    },
    {
      name: "Integraciones y tomas de datos Móviles.",
      id: "integraciones-datos-moviles",
      img: {
        id: 1,
        url: "/img/cats/gato_lupa.png",
        width: 433,
        height: 500,
        alt: "gato negro con una lupa buscando la imagen",
        title: "Gato negro con una lupa",
      },
      title: (
        <>
          Community <span className="text-[#4608AD]">Manager</span>
        </>
      ),
      description:
        "Creamos soluciones móviles para integrar y recopilar datos en tiempo real, optimizando la comunicación y colaboración en tu organización.",
      items: [
        "Recopilación en tiempo real: Captura datos directamente desde dispositivos móviles.",
        "Integración efectiva: Conecta aplicaciones y sistemas para una mayor eficiencia.",
        "Seguridad garantizada: Protegemos la información con altos estándares de seguridad.",
        "Interfaz intuitiva: Diseños fáciles de usar para mejorar la experiencia del usuario.",
        "Colaboración mejorada: Facilita el intercambio de datos dentro de tu organización.",
      ],
    },
    {
      name: "Intranets (Desktop & Web)",
      id: "intranets",
      img: {
        id: 1,
        url: "/img/cats/gato_lupa.png",
        width: 433,
        height: 500,
        alt: "gato negro con una lupa buscando la imagen",
        title: "Gato negro con una lupa",
      },
      title: (
        <>
          Intranets <span className="text-[#4608AD]">(Desktop & Web)</span>
        </>
      ),
      description:
        "Desarrollamos intranets personalizadas para mejorar la comunicación, colaboración y eficiencia dentro de tu empresa.",
      items: [
        "Comunicación centralizada: Unifica la información y recursos en un solo lugar.",
        "Colaboración efectiva: Facilita el trabajo en equipo con herramientas integradas.",
        "Personalización total: Adaptamos la intranet a las necesidades de tu negocio.",
        "Acceso multiplataforma: Disponible en versiones web y de escritorio.",
        "Optimización del rendimiento: Impulsa la productividad de tu equipo.",
      ],
    },
    {
      name: "Desarrollo de plataformas IA",
      id: "desarrollo-plataformas",
      img: {
        id: 1,
        url: "/img/cats/gato_lupa.png",
        width: 433,
        height: 500,
        alt: "gato negro con una lupa buscando la imagen",
        title: "Gato negro con una lupa",
      },
      title: (
        <>
          Desarrollo de <span className="text-[#4608AD]">plataformas IA</span>
        </>
      ),
      description:
        "Creamos plataformas impulsadas por inteligencia artificial para optimizar procesos, analizar datos complejos y ofrecer soluciones avanzadas.",
      items: [
        "Procesamiento inteligente: Mejora el rendimiento con algoritmos avanzados.",
        "Análisis profundo: Extrae insights valiosos a partir de datos complejos.",
        "Automatización avanzada: Simplifica tareas mediante IA personalizada.",
        "Adaptabilidad continua: Sistemas que evolucionan con tus necesidades.",
        "Innovación tecnológica: Impulsa tu negocio con herramientas de última generación.",
      ],
    },
    {
      name: "Apps de Delivery y Tiendas virtuales",
      id: "app-delivery-tienda",
      img: {
        id: 1,
        url: "/img/cats/gato_lupa.png",
        width: 433,
        height: 500,
        alt: "gato negro con una lupa buscando la imagen",
        title: "Gato negro con una lupa",
      },
      title: (
        <>
          Apps de Delivery y <span className="text-[#4608AD]">Tiendas virtuales</span>
        </>
      ),
      description:
        "Desarrollamos aplicaciones de delivery y tiendas virtuales para que vendas tus productos o servicios de manera ágil y efectiva.",
      items: [
        "Venta online fácil: Apps diseñadas para maximizar tus ventas.",
        "Gestión integral: Administra productos, pedidos y clientes desde un solo lugar.",
        "Experiencia de usuario: Interfaces intuitivas para compradores y vendedores.",
        "Integración de pagos: Compatible con múltiples métodos de pago seguros.",
        "Escalabilidad: Soluciones adaptadas al crecimiento de tu negocio.",
      ],
    },
    {
      name: "Videojuegos",
      id: "videojuegos",
      img: {
        id: 1,
        url: "/img/cats/gato_lupa.png",
        width: 433,
        height: 500,
        alt: "gato negro con una lupa buscando la imagen",
        title: "Gato negro con una lupa",
      },
      title: (
        <>
          <span className="text-[#4608AD]">Videojuegos</span>
        </>
      ),
      description:
        "Desarrollamos videojuegos personalizados, desde la idea inicial hasta el lanzamiento, creando mundos virtuales únicos para tus jugadores.",
      items: [
        "Creación de mundos: Desarrollamos universos virtuales a medida.",
        "Jugabilidad fluida: Diseñamos experiencias inmersivas para el usuario.",
        "Desarrollo integral: Desde la concepción hasta el lanzamiento del juego.",
        "Personalización total: Adaptamos cada detalle a tu visión y necesidades.",
        "Innovación constante: Incorporamos tecnologías avanzadas para una experiencia de vanguardia.",
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
        <span className="text-[#4608AD]">Beneficios </span>de trabajar con
        nosotros{" "}
      </>
    ),
    description:
      "Descubre cómo nuestros servicios pueden transformar tu marca, mejorar tu presencia digital y generar resultados efectivos",
    benefitsItems: [
      {
        icon: <FaFingerprint />,
        title: "Identidad Única",
        description:
          "Creación de una identidad de marca única y memorable que te diferencie de la competencia.",
      },
      {
        icon: <FaRegHeart  />,
        title: "Lealtad del Cliente",
        description:
          "Fortalecemos la conexión emocional con tus clientes, aumentando su lealtad.",
      },
      {
        icon: <FaChartLine />,
        title: "Estrategia de Marca",
        description:
          "Desarrollamos estrategias de marca efectivas que alinean tu identidad con tus objetivos comerciales.",
      },
      {
        icon: <IoReorderTwo />,
        title: "Consistencia de Marca",
        description:
          "Aseguramos la coherencia de tu marca en todos los canales y materiales de comunicación.",
      },
      {
        icon: <FaAward />,
        title: "Reconocimiento de Marca",
        description:
          "Mejoramos el reconocimiento de tu marca, haciéndola más visible y recordada.",
      },
      {
        icon: <FaRegBuilding />,
        title: "Imagen Profesional",
        description:
          "Proyectamos una imagen profesional que inspira confianza y credibilidad en tus clientes.",
      },
    ],
  },
  gallery: [],
};
