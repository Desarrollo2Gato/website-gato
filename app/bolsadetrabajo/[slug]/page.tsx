import { Metadata } from "next";
import Detail from "./detail";
import axios from "axios";
import { api_vacantes } from "@/app/data/enviroments/api.enviroment";

const fetchVacanteData = async (name: string) => {
  try {
    const response = await axios.get(api_vacantes + "?slug=" + name);
    return response.data[0];
  } catch (error) {
    console.log("Error fetching project data:", error);
  }
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    console.log(params.slug);
    const post = await fetchVacanteData(params.slug);
    return {
      title: "Vacante: " + post.title.rendered,
      description: post.acf.descripcion_corta,
      keywords: [
        "vacante de " + post.title.rendered + " en lima",
        "vacante de " + post.title.rendered + " en jesus maria",
        "trabaja en agencia gato",
        "equipo de profesionales en agencia gato",
      ],
      openGraph: {
        title: post.title.rendered,
        description: post.acf.descripcion_corta,
        images: [{ url: post.acf["descripcion-imagen"] }],
      },
    };
  } catch (error) {
    return {};
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Detail name={params.slug} />
    </div>
  );
}
