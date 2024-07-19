import { Metadata } from "next";
import Section from "./section";
import { BlogPosting, WithContext } from "schema-dts";


const capitalizeWords = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const getCategory = (slug: string  ) => {
  const formattedSlug = slug === "diseno-web"
    ? "Diseño Web"
    : slug.replace(/-/g, " ");
  return capitalizeWords(formattedSlug);
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = getCategory(params.slug);
  return {
    title: `Artículos sobre ${category} `,
    description: `Explora nuestros artículos sobre ${category} en el blog de Agencia Gato. Únete a nosotros y descubre más sobre ${category}.`,
    keywords: [category, "Agencia Gato", "Blog"].join(", "),
    alternates: {
      canonical: `https://www.gato.pe/blog/${params.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: `https://www.gato.pe/blog/${params.slug}`,
      title: `Artículos de ${category} - Agencia Gato`,
      description: `Explora nuestros artículos sobre ${category} en el blog de Agencia Gato. Únete a nosotros y descubre más sobre ${category}.`,
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: `Imagen del post sobre ${category} de GATO`,
        },
        {
          url: "/mstile-310x310.png",
          width: 310,
          height: 310,
          alt: "Logo Agencia GATO",
        },
      ],
    },
  };
}
/* export const metadata: Metadata = generateMetadata("diseno-web");
 */
const jsonLd: WithContext<BlogPosting> = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Título del post",
  description: "Descripción del post",
  image: "https://gato.pe/imagen-del-post.png",
  author: {
    "@type": "Person",
    name: "Agencia Gato",
  },
  publisher: {
    "@type": "Organization",
    name: "Agencia GATO",
    logo: {
      "@type": "ImageObject",
      url: "https://gato.pe/gato-icon.png",
      width: "60px",
      height: "60px",
    },
  },
  datePublished: "2024-01-01T08:00:00+08:00",
  dateModified: "2024-01-01T09:00:00+08:00",
};

export default function Page({ params }: { params: { slug: string } }) {

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section name={params.slug}></Section>
    </div>
  );
}
