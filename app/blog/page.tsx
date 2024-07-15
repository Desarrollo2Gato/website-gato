import BlogComponent from "./blog";
import { Metadata } from "next";
import { Blog, WithContext } from "schema-dts";

const jsonLdBlog: WithContext<Blog> = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Nuestro Blog- GATO",
  url: "https://gato.pe/blog",
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
};
export const metadata: Metadata = {
  title: "Nuestro Blog",
  description:
    "Descubre quiénes somos en GATO. Conoce nuestro equipo, nuestra misión y nuestra pasión por transformar ideas en soluciones digitales innovadoras.",
  keywords: [
    "blog GATO",
    "noticias digitales",
    "tendencias digitales",
    "consejos de marketing",
    "desarrollo de software",
    "branding",
    "marketing digital",
    "innovación digital",
    "estrategias digitales",
  ],
  alternates: {
    canonical: "https://www.gato.pe/blog",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gato.pe/blog",
    title: "Blog - GATO",
    description:
      "Explora nuestro blog en GATO y mantente actualizado con noticias, tendencias y consejos sobre marketing digital, desarrollo de software y branding.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen del blog de GATO",
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
function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }}
      />
      <div className="w-full h-screen ">
        <BlogComponent></BlogComponent>
      </div>
    </>
  );
}

export default Page;
