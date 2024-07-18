import type { Metadata } from "next";
import Post from "./post";
import axios from "axios";
import { api_blog } from "@/app/data/enviroments/api.enviroment";

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
async function fetchPostData(slug: string): Promise<Post> {
  try {
    const response = await axios.get(`${api_blog}?slug=${slug}`);
    const posts: Post[] = response.data;

    if (!posts || posts.length === 0) {
      throw new Error("Post not found");
    }

    return posts[0];
  } catch (error) {
    console.error("Error fetching post data:", error);
    throw error;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const post = await fetchPostData(params.slug);
    return {
      title: post.title.rendered,
      description: post.acf["descripcion-corta"],
      openGraph: {
        title: post.title.rendered,
        description: post.acf["descripcion-corta"],
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
      <Post slug={params.slug}></Post>
    </div>
  );
}
