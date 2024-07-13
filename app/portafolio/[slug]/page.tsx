import Detail from "./detail";
import type { Metadata } from "next";
import { api_projects } from "@/app/data/enviroments/api.enviroment";
import axios from "axios";


interface Project {
  slug: string;
  title: { rendered: string };
  acf: {
    descripcion_corta: string;
    banner: string;
    "imagen-solucion": string;
    cliente: string;
    problema: string;
    necesidad: string;
    imagen: string;
    "cliente-slug": string;
    "solucion-analisis": string;
    "solucion-diseno": string;
    "solucion-desarrollo": string;
    "solucion-pruebas": string;
    "solucion-despliegue": string;
    "banner-descripcion": string;
  };
}

async function fetchProjectData(slug: string): Promise<Project> {
  try {
    const response = await axios.get(`${api_projects}?slug=${slug}`);
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

/* export async function generateStaticParams() {
  try {
    const response = await axios.get(
      "https://palegreen-anteater-636608.hostingersite.com/wp-json/wp/v2/proyecto?per_page=100"
    );

    const projects: Project[] = response.data;
    const slugs = projects.map((project) => project.slug);

    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error("Error fetching project data:", error);
    return [];
  }
} */

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const project = await fetchProjectData(params.slug);
    return {
      title: "Proyecto " + project.title.rendered,
      description: project.acf.descripcion_corta,
      openGraph: {
        title: project.title.rendered,
        description: project.acf.descripcion_corta,
        images: [{ url: project.acf.imagen }],
      },
    };
  } catch (error) {
    return {};
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const project = await fetchProjectData(params.slug);
    return (
      <div>
        <Detail project={project} />
      </div>
    );
  } catch {
    return <div>Proyecto no encontrado</div>;
  }
}
