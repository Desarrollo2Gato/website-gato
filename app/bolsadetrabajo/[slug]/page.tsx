import Detail from "./detail";

/* interface Vacante {
  id: number;
  title: {rendered: string}
  content: { rendered: string };
  slug: string;
  acf: {
    area: number[];
    imagen_url: string;
    job_position: string;
    description: string;
    salary: string;
  };
}
 */
/* 
export async function generateStaticParams() {
  try {
    const response = await axios.get(
      `${api_vacantes}?per_page=100`
    );

    const vacante: Vacante[] = response.data;
    const slugs = vacante.map((vac) => vac.slug);

    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error("Error fetching project data:", error);
    return [];
  }
} */

/* export async function generateMetadata({
    params,
  }: {
    params: { slug: string };
  }): Promise<Metadata> {
    try {
      const post = await fetchVacanteData(params.slug);
      return {
        title: "Gato - Blog: " + post.title.rendered,
        description: post.acf.descripcion_corta,
        openGraph: {
          title: post.title.rendered,
          description: post.acf.descripcion_corta,
          images: [{ url: post.acf["descripcion-imagen"] }],
        },
      };
    } catch (error) {
      return {};
    }
  } */

export default function Page({ params }: { params: { slug: string } }) {
  /* console.log(params.slug); */
  return (
    <div>
      <Detail name={params.slug} />
    </div>
  );
}