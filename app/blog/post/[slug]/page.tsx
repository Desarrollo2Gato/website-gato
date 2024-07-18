import type { Metadata } from "next";
import Post from "./post";
import { fetchYoastMeta } from '@/app/components/seo/fetchYoastMeta';
import { BlogPosting, WithContext } from "schema-dts";
import { api_blog } from "@/app/data/enviroments/api.enviroment";

const formatURL = (url: string) => {
  return url.replace("https://palegreen-anteater-636608.hostingersite.com", "https://www.gato.pe/blog/post/");
};

const cleanTitle = (title: string) => {
  const titleParts = title.split(' - ');
  return titleParts.length > 0 ? titleParts[0] : title;
};

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
  acf: {
    introducion: string;
    secciones: string[];
    titulo: string;
    banner: string;
    fecha: string;
    "autor-name": string;
    "autor-profile": string;
    descripcion: string;
    "descripcion-corta": string;
    "descripcion-imagen": string;
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const yoastMeta = await fetchYoastMeta(api_blog, params.slug);

  if (!yoastMeta) {
    return {
      title: "Post not found",
      description: "The post you are looking for could not be found.",
    };
  }

  const cleanedTitle = cleanTitle(yoastMeta.title);

  return {
    title: cleanedTitle,
    description: yoastMeta.og_description,

    alternates: {
      canonical: formatURL(yoastMeta.og_url),
    },
    /* robots: {
      index: false,
      follow: true,
    }, */
    openGraph: {
      type: yoastMeta.og_type,
      locale: yoastMeta.og_locale,
      url: formatURL(yoastMeta.og_url),
      title: cleanedTitle,
      description: yoastMeta.og_description,
      images: [
        {
          url: yoastMeta.og_image?.[0]?.url || "/opengraph-image.png",
          width: yoastMeta.og_image?.[0]?.width || 1200,
          height: yoastMeta.og_image?.[0]?.height || 630,
          alt: yoastMeta.og_image?.[0]?.alt || `Imagen del post sobre ${params.slug} de GATO`,
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

export default async function Page({ params }: { params: { slug: string } }) {
  const yoastMeta = await fetchYoastMeta(api_blog, params.slug);

  if (!yoastMeta) {
    return <div>Post not found</div>;
  }

  const cleanedTitle = cleanTitle(yoastMeta.title);

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: cleanedTitle,
    description: yoastMeta.og_description,
    image: yoastMeta.og_image?.[0]?.url || "https://gato.pe/imagen-del-post.png",
    author: {
      "@type": "Person",
      name: yoastMeta.author || "Agencia Gato",
      url: yoastMeta.schema?.["@graph"]?.find((item:any) => item["@type"] === "Person")?.url || "",
      image: yoastMeta.schema?.["@graph"]?.find((item:any) => item["@type"] === "Person")?.image?.url || "",
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
    datePublished: yoastMeta.article_published_time,
    dateModified: yoastMeta.article_modified_time,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": yoastMeta.schema?.["@graph"]?.find((item:any) => item["@type"] === "WebPage")?.url || "",
    },
    /* breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: yoastMeta.schema?.["@graph"]?.find(item => item["@type"] === "BreadcrumbList")?.itemListElement || [],
    }, */
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Post slug={params.slug} />
    </>
  );
}
