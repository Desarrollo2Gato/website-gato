import { api_clients } from "@/app/data/enviroments/api.enviroment";
import Detail from "./detail";
import { Metadata } from "next";

export async function generateMetadata(parent: any): Promise<Metadata> {
  try {
    const [response] = await fetch(api_clients + "?slug=social-commerce").then(
      (res) => res.json()
    );
    return {
      title: "Cliente " + response.title.rendered,
      description:
        "Cliente " + response.title.rendered + response.acf.descripcion_corta,
      openGraph: {
        title: response.title.rendered,
        description: response.acf.descripcion_corta,
        images: response.acf.imagen_url,
      },
    };
  } catch (error) {
    return {};
  }
}

function Page() {
  return (
    <div className="w-full  ">
      <Detail></Detail>
    </div>
  );
}

export default Page;
