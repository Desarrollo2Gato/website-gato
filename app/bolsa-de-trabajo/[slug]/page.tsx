import { Metadata } from "next";
import Detail from "./detail";
import axios from "axios";
import { api_vacantes } from "@/app/data/enviroments/api.enviroment";
import { fetchYoastMeta } from "@/app/components/seo/fetchYoastMeta";
import { WebPage, WithContext } from "schema-dts";

const formatURL = (url: string) => {
  return url.replace("https://palegreen-anteater-636608.hostingersite.com/vacante", "https://www.gato.pe/bolsa-de-trabajo");
};

const cleanTitle = (title: string) => {
  const titleParts = title.split(' - ');
  return titleParts.length > 0 ? titleParts[0] : title;
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const yoastMeta = await fetchYoastMeta(api_vacantes, params.slug);

  if (!yoastMeta) {
    return {
      title: "Job application not found",
      description: "The job application you are looking for could not be found.",
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
          alt: yoastMeta.og_image?.[0]?.alt || `Imagen de la vacante sobre ${params.slug} de GATO`,
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
  const yoastMeta = await fetchYoastMeta(api_vacantes, params.slug);

    if (!yoastMeta) {
      return <div>Post not found</div>;
    }

    const cleanedTitle = cleanTitle(yoastMeta.title);

    const jsonLd: WithContext<WebPage> = {
      "@context": "https://schema.org",
      "@type": "WebPage",
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
    <div>
      <Detail name={params.slug} />
    </div>
  );
}
