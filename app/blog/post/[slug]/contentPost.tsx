import NavSections from "@/app/components/blog/navSections";
import Link from "next/link";
import MorePost from "./morePost";
import Form from "@/app/components/form";

interface PostProps {
  post: Posts;
}

interface Posts {
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
    descripcion_corta: string;
    "descripcion-imagen": string;
  };
}

const ContentPost = ({ post }: PostProps) => {
  const createMarkup = (htmlString: string) => {
    return { __html: htmlString };
  };
  return (
    <div className="w-full   ">
      <div className="bg-gray-50 max-w-[1920px] mx-auto flex flex-col lg:flex-row pt-8 px-8 lg:px16 lg:py-16 xl:px-32">
        <div className="flex flex-col w-full lg:w-3/4 h-fit">
          <div className="w-full pr-4 flex-1 text-[1rem] 2xl:text-[1.2rem]">
            <p className="pb-4">{post.acf.introducion}</p>
            <img
              loading="lazy"
              className="float-left mr-4 mb-4 w-full md:w-1/3 xl:w-2/4 aspect-square object-cover"
              src={post.acf["descripcion-imagen"]}
              alt={"Imagen de " + post.acf.titulo}
              title={"Imagen de " + post.acf.titulo}
            />
            <div
              className="mb-4"
              dangerouslySetInnerHTML={createMarkup(post.content.rendered)}
            />
          </div>
          <div>
            <div className="flex flex-wrap gap-1 pb-8 lg:pb-0 ">
              {post?.acf?.secciones.map((tag) => (
                <Link
                  href="/blog/[slug]/"
                  as={`/blog/${tag}`}
                  key={tag}
                  className="text-xs px-2 py-1  text-gray-400 font-medium capitalize bg-gray-300"
                >
                  {tag === "diseno-web" ? "Diseño Web" : tag.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col gap-4 lg:w-1/4 lg:pl-4 pb-8 lg:pb-0 lg:border-l">
          <NavSections />
          <MorePost></MorePost>
        </div>
      </div>
      <Form color="#6D28D9"></Form>
    </div>
  );
};

export default ContentPost;
