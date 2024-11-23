import { dataService } from "@/app/types/services";
import { IoConstruct, IoExtensionPuzzle, IoHelpCircle, IoLink, IoReload, IoShieldCheckmark, IoTrendingUp } from "react-icons/io5";
export const InfoBranding: dataService = {
  title: (
    <>
      Transforma tu identidad visual con un
      <span className="text-[#4608AD]"> un branding profesional</span>
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
    "Desarrollamos una identidad de marca única y coherente, creando experiencias visuales que conectan emocionalmente con tu audiencia y fortalecen tu presencia en el mercado.",
  subservices: [
    {
      name: "Diseños de logos",
      id: "diseno-logos",
      title: (
        <>
          Diseños de <span className="text-[#4608AD]">Logo</span>
        </>
      ),
      description:
        "Creamos logos únicos y alineados a la identidad de tu marca para lograr una representación visual profesional y memorable.",
      items: [
        "Propuestas iniciales: Entregamos hasta 6 propuestas de diseño únicas y personalizadas.",
        "Modificaciones: Si deseas ajustes, los realizaremos en un plazo de 48 horas desde la solicitud.",
        "Nuevas propuestas: Si se requieren conceptos adicionales, estos se entregarán en un máximo de 72 horas.",
      ],
    },
    {
      name: "Diseño de manual de marca",
      id: "diseno-manual-marca",
      title: (
        <>
          Diseño de manual <span className="text-[#4608AD]">de marca</span>
        </>
      ),
      description:
        "Nuestro manual de marca define cada aspecto de la identidad visual de tu empresa.",
      items: [
        "Presentación de la Marca: Definimos los valores, misión y visión para fortalecer la identidad de tu marca.",
        "Marca Gráfica: Diseñamos tu logo, tipografía y paleta de colores para una comunicación visual coherente.",
        "Elementos Gráficos: Creamos iconos y estilo fotográfico que refuerzan la personalidad de tu marca.",
        "Aplicaciones de la Marca: Mostramos cómo aplicar la identidad visual en productos y redes sociales para una implementación efectiva.",
      ],
    },
    {
      name: "Diseño de papelería corporativa",
      id: "diseno-papeleria-corporativa",
      title: (
        <>
          Diseño de papelería{" "}
          <span className="text-[#4608AD]">corporativa</span>
        </>
      ),
      description:
        "Creamos papelería corporativa que refleja profesionalismo y se adapta a las necesidades específicas de tu marca. Este servicio incluye:",
      items: [
        "Tarjetas Corporativas: Diseños únicos para fortalecer tu presencia en cada contacto.",
        "Brochure de hasta 5 páginas: Presentación visualmente atractiva y alineada a la identidad de tu marca.",
        "Formularios, sellos, cartas corporativas, firmas de correo, cartas de consumo, etc.",
        "NOTA: La papelería se adapta a las necesidades del rubro de tu marca.",
      ],
    },
    {
      name: "Diseño de Merchandising",
      id: "community-manager",
      title: (
        <>
          Community <span className="text-[#4608AD]">Manager</span>
        </>
      ),
      description:
        "Creamos diseños personalizados para productos de merchandising que refuerzan y destacan la identidad de tu marca, adaptados a tus necesidades específicas.",
      items: [
        "Tazas: Diseños únicos que reflejan tu marca en cada sorbo.",
        "Tarjetas: Diseño creativo para una presentación profesional.",
        "Polos: Camisetas personalizadas que destacan tu imagen de marca.",
        "Fotochecks: Identificación corporativa con estilo.",
        "Sobres y Sellos: Personaliza tu correspondencia con diseño exclusivo.",
        "Lapiceros: Herramientas de oficina que transmiten tu marca.",
        "Tote-bags: Bolsas personalizadas para una mayor visibilidad.",
        "Stickers: Adhesivos que refuerzan tu identidad de forma creativa.",
        "El servicio es exclusivamente de diseño; no realizamos la impresión de los productos. Este formato te ofrece una descripción clara y frases específicas para cada producto.",
      ],
    },
    {
      name: "Sesión de fotos y videos",
      id: "sesion-fotos-videos",
      title: (
        <>
          Sesión de fotos <span className="text-[#4608AD]">y videos</span>
        </>
      ),
      description:
        "Capturamos la esencia de tu marca con fotos y videos profesionales que destacan tus productos o servicios, creando contenido visual impactante.",
      items: [
        "Preproducción detallada: Te enviamos un guion, moodboard y recomendaciones para una sesión bien planificada",
        "Versatilidad en capturas: Fotografiamos y grabamos videos de productos y servicios, resaltando sus mejores características.",
        "Alta calidad visual: Creamos contenido visual que potencia tu presencia y comunicación en todos tus canales.",
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
        icon: <IoConstruct />,
        title: "Soluciones a Medida",
        description:
          "Desarrollamos software personalizado que se adapta perfectamente a las necesidades de tu negocio.",
      },
      {
        icon: <IoShieldCheckmark  />,
        title: "Seguridad",
        description:
          "Implementamos las últimas tecnologías y prácticas para garantizar la seguridad de tus datos y sistemas.",
      },
      {
        icon: <IoReload />,
        title: "Optimización de Procesos",
        description:
          "Automatizamos y optimizamos procesos para aumentar la eficiencia y reducir costos operativos.",
      },
      {
        icon: <IoTrendingUp />,
        title: "Escalabilidad",
        description:
          "Nuestras soluciones están diseñadas para crecer junto con tu empresa, facilitando futuras expansiones.",
      },
      {
        icon: <IoLink />,
        title: "Integración Perfecta",
        description:
          "Aseguramos que el nuevo software se integre perfectamente con tus sistemas existentes.",
      },
      {
        icon: <IoHelpCircle />,
        title: "Soporte Continuo",
        description:
          "Ofrecemos soporte continuo para garantizar que tu software funcione de manera óptima en todo momento.",
      },
    ],
  },
  gallery: [],
};
