import Detail from "./detail";
import type { Metadata } from "next";
import { acf_format, api_projects } from "@/app/data/enviroments/api.enviroment";
import axios from "axios";
import { fetchYoastMeta } from "@/app/components/seo/fetchYoastMeta";
import { CreativeWork, WithContext } from "schema-dts";
import Script from "next/script";

const formatURL = (url: string) => {
  return url.replace(
    "https://palegreen-anteater-636608.hostingersite.com/proyecto",
    "https://www.gato.pe/portafolio"
  );
};

const cleanTitle = (title: string) => {
  const titleParts = title.split(" - ");
  return titleParts.length > 0 ? titleParts[0] : title;
};

interface Project {
  slug: string;
  title: { rendered: string };
  acf: {
    url: string;
    descripcion_corta: string;
    banner: string;
    "imagen-solucion": string;
    services: string;
    cliente: string;
    problema: string;
    necesidad: string;
    imagen_destacada: string;
    "cliente-slug": string;
    "solucion-analisis": string;
    "solucion-diseno": string;
    "solucion-desarrollo": string;
    "solucion-pruebas": string;
    "solucion-despliegue": string;
    "banner-descripcion": string;
    facebook: string;
    instagram: string;
    tiktok: string;
    linkedin: string;
    despliegue: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const yoastMeta = await fetchYoastMeta(api_projects, params.slug);

  if (!yoastMeta) {
    return {
      title: "Projects not found",
      description: "The project you are looking for could not be found.",
    };
  }

  const cleanedTitle = cleanTitle(yoastMeta.title);

  return {
    title: cleanedTitle,
    description: yoastMeta.og_description,

    alternates: {
      canonical: formatURL(yoastMeta.og_url),
    },
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
          alt:
            yoastMeta.og_image?.[0]?.alt ||
            `Imagen del proyecto sobre ${params.slug} de GATO`,
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

async function fetchProjectData(slug: string): Promise<Project> {
  try {
    const response = await axios.get(`${api_projects}?slug=${slug}&${acf_format}`);
    const projects: Project[] = response.data;

    if (!projects || projects.length === 0) {
      throw new Error("Project not found");
    }

    return projects[0];
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const project = await fetchProjectData(params.slug);
    const yoastMeta = await fetchYoastMeta(api_projects, params.slug);

    if (!yoastMeta) {
      return <div>Post not found</div>;
    }

    const cleanedTitle = cleanTitle(yoastMeta.title);

    const jsonLd: WithContext<CreativeWork> = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      headline: cleanedTitle,
      description: yoastMeta.og_description,
      image:
        yoastMeta.og_image?.[0]?.url || "https://gato.pe/imagen-del-post.png",
      author: {
        "@type": "Person",
        name: yoastMeta.author || "Agencia Gato",
        url:
          yoastMeta.schema?.["@graph"]?.find(
            (item: any) => item["@type"] === "Person"
          )?.url || "",
        image:
          yoastMeta.schema?.["@graph"]?.find(
            (item: any) => item["@type"] === "Person"
          )?.image?.url || "",
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
        "@id":
          yoastMeta.schema?.["@graph"]?.find(
            (item: any) => item["@type"] === "WebPage"
          )?.url || "",
      },
    };
    return (
      <>
        <Script
          id="jsonLdPortafolio"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Detail project={project} />
      </>
    );
  } catch {
    return <div>Proyecto no encontrado</div>;
  }
}
