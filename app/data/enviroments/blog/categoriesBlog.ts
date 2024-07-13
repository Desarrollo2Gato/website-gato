import {Category} from "@/app/interfaces/Icategories"

export const Categories: Category[] = [
    {
      name: "Marketing Digital",
      path: "marketing-digital",
      metadata: {
        title: "Gato - Blog - Marketing Digital",
        description: "Todo sobre marketing digital",
        keywords: ["marketing", "digital", "seo", "redes sociales"],
        openGraph: {
          title: "Marketing Digital",
          description: "Descubre estrategias y consejos sobre marketing digital.",
          type: "article",
          url: "https://gato.pe/blog/marketing-digital",
        },
      },
    },
    {
      name: "Diseño Web",
      path: "diseno-web",
      metadata: {
        title: "Gato - Blog - Diseño Web",
        description: "Las últimas tendencias en diseño web",
        keywords: ["diseño web", "ux", "ui", "responsive"],
        openGraph: {
          title: "Diseño Web",
          description: "Explora las tendencias y técnicas de diseño web moderno.",
          type: "article",
          url: "https://gato.pe/blog/diseno-web",
        },
      },
    },
    {
      name: "Desarrollo de Software",
      path: "desarrollo-software",
      metadata: {
        title: "Gato - Blog - Desarrollo de Software",
        description: "Conceptos y prácticas en desarrollo de software",
        keywords: [
          "desarrollo de software",
          "programación",
          "coding",
          "ingeniería de software",
        ],
        openGraph: {
          title: "Desarrollo de Software",
          description:
            "Aprende sobre las mejores prácticas en desarrollo de software.",
          type: "article",
          url: "https://gato.pe/blog/desarrollo-software",
        },
      },
    },
    {
      name: "Desarrollo Móvil",
      path: "desarrollo-movil",
      metadata: {
        title: "Gato - Blog - Desarrollo Móvil",
        description: "Todo lo que necesitas saber sobre desarrollo móvil",
        keywords: ["desarrollo móvil", "apps", "iOS", "Android"],
        openGraph: {
          title: "Desarrollo Móvil",
          description: "Descubre técnicas y herramientas para desarrollo móvil.",
          type: "article",
          url: "https://gato.pe/blog/desarrollo-movil",
        },
      },
    },
    {
      name: "Branding",
      path: "branding",
      metadata: {
        title: "Gato - Blog - Branding",
        description: "Estrategias y consejos sobre branding",
        keywords: [
          "branding",
          "marca",
          "identidad corporativa",
          "estrategia de marca",
        ],
        openGraph: {
          title: "Branding",
          description:
            "Aprende a construir y gestionar la identidad de tu marca.",
          type: "article",
          url: "https://gato.pe/blog/branding",
        },
      },
    },
  ];