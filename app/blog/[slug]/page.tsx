import Section from "./section";
import type { Metadata } from "next";

import {Categories} from "@/app/data/enviroments/blog/categoriesBlog"

/* export async function generateStaticParams() {
  const dataCategories = Categories;
  const slugs = dataCategories.map((category) => category.path);

  return slugs.map((slug) => ({ slug }));
} */

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const category = Categories.find((cat) => cat.path === params.slug);

    if (!category) {
      throw new Error("Categoría no encontrada");
    }

    return {
      title: category.metadata.title,
      description: category.metadata.description,
      keywords: category.metadata.keywords,
      openGraph: {
        title: category.metadata.openGraph.title,
        description: category.metadata.openGraph.description,
        type: category.metadata.openGraph.type,
        url: category.metadata.openGraph.url,
        images: category.metadata.openGraph.images,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Página no encontrada",
      description: "La página que buscas no está disponible.",
      keywords: [],
      openGraph: {
        title: "Página no encontrada",
        description: "La página que buscas no está disponible.",
        type: "website",
        url: "https://gato.pe",
      },
    };
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Section name={params.slug}></Section>
    </div>
  );
}