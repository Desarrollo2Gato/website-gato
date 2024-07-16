"use client";
import CardSubject from "../components/blog/cardSubject";
import CardNew from "../components/blog/cardNew";
import { useEffect, useState } from "react";
import { api_blog } from "@/app/data/enviroments/api.enviroment";
import axios from "axios";
import Pagination from "@/app/components/Pagination";

interface Post {
  id: number;
  slug: string;
  content: { rendered: string };
  acf: {
    secciones: string[];
    titulo: string;
    banner: string;
    fecha: string;
    "autor-name": string;
    "autor-profile": string;
    descripcion: string;
    "descripcion-imagen": string;
  };
}

const entradas = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>(api_blog);
        setPosts(response.data);
      } catch (err) {
        setError("Error al cargar los datos");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.acf.fecha).getTime() - new Date(a.acf.fecha).getTime()
  );

  const latestPosts = sortedPosts.slice(0, 3);
  const remainingPosts = sortedPosts.slice(3);
  const renderPost = (post: Post) => <CardSubject key={post.id} post={post} />;

  return (
    <div className="w-full max-w-[1440px] mx-auto px-8 pb-8 lg:px-16 md:pb-0 xl:px32">
      <div className=" relative mb-8  grid grid-cols-1 md:grid-cols-3 justify-between gap-4 md:gap-2 lg:gap-8 xl:gap-12">
        {latestPosts.map((post) => (
          <CardNew key={post.id} post={post} />
        ))}
      </div>
      <h2
        className="text-2xl md:text-3xl text-center
         text-[#3D3D3D] font-medium uppercase mb-8"
      >
        Otros temas
      </h2>

      <div className="w-full">
        <Pagination
          data={posts}
          itemsPerPageMobile={3}
          itemsPerPageTablet={4}
          itemsPerPageDesktop={6}
          itemsPerPageLargeDesktop={9}
          render={renderPost}
          gridClass="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 lg:gap-10 xl:gap-12"
          dataName="posts"
        />
      </div>
    </div>
  );
};

export default entradas;
