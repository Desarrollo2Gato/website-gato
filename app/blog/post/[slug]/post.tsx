"use client";

import Navigation from "@/app/components/navigation";
import Drawer from "@/app/components/drawer";
import Footer from "@/app/components/footer";
import WhatsappContact from "@/app/components/whatsapp-contact";
import { useEffect, useState } from "react";
import Banner from "./banner";
import ContentPost from "./contentPost";
import axios from "axios";
import { api_blog } from "@/app/data/enviroments/api.enviroment";

interface PostProps {
  slug: string;
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

const Post: React.FC<PostProps> = ({ slug }) => {
  const [isDrawer, setIsDrawer] = useState(false);
  const [infoPost, setInfoPost] = useState<Posts>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`${api_blog}?slug=${slug}`);
      if (response.data.length > 0) {
        setInfoPost(response.data[0]);
      } else {
        setError("Post not found");
      }
    } catch (err) {
      setError("Failed to fetch post");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPost();
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        setIsDrawer(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="relative bg-white flex">
      <WhatsappContact />
      <div
        className={`fixed top-0 left-0 ${
          isDrawer ? "w-screen h-screen" : "w-screen lg:w-16"
        } h-[60px] lg:h-screen z-10 flex flex-col lg:flex-row`}
      >
        <Navigation isDrawer={isDrawer} setIsDrawer={setIsDrawer} />
        {isDrawer && <Drawer />}
      </div>
      <main className="min-w-screen flex flex-col w-full pt-[60px] lg:pl-[80px] lg:pt-0">
        {infoPost && (
          <>
            <Banner post={infoPost} />
            <ContentPost post={infoPost} />
          </>
        )}
        <Footer />
      </main>
    </div>
  );
};

export default Post;
