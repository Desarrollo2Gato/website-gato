import NavSections from "@/app/components/blog/navSections";
import Link from "next/link";
import MorePost from "./morePost";
import Form from "@/app/components/form";
import Image from "next/image";
import "@/app/components/post.css";
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
    <div className="w-full  text-[#3d3d3d] ">
      <div className="bg-gray-50 max-w-[1440px] mx-auto flex flex-col lg:flex-row sm:px-12 py-16 px-8 pb-8 lg:px-16 pt-8 lg:px16 lg:py-16">
        <div className="flex flex-col w-full lg:w-3/4 h-fit">
          <div className="w-full pr-4 flex-1 text-[1rem] 2xl:text-[1.2rem]">
            <p className="pb-4 ">{post.acf.introducion}</p>
            <Image
              width={670}
              height={670}
              loading="lazy"
              className="float-left mr-4 mb-4 w-full md:w-1/3 xl:w-2/4 aspect-square object-cover"
              src={post.acf["descripcion-imagen"]}
              alt={"Imagen de " + post.acf.titulo}
              title={"Imagen de " + post.acf.titulo}
            />
            <div
              className="mb-4 content-post"
              dangerouslySetInnerHTML={createMarkup(post.content.rendered)}
            />
          </div>
          <div>
            <div className="flex flex-wrap gap-1 pb-8 lg:pb-0 ">
              {post?.acf?.secciones.map((tag, index) => (
                <Link
                  href="/blog/[slug]/"
                  as={`/blog/${tag}`}
                  title= {tag === "diseno-web"
                    ? "Diseño Web"
                    : tag.replace(/-/g, " ")}
                    aria-label="Ver categoría"
                  key={index}
                  rel="tag"
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
          <MorePost currentPost={post.slug}></MorePost>
        </div>
      </div>
      <Form color="#4608AD"></Form>
    </div>
  );
};

export default ContentPost;
