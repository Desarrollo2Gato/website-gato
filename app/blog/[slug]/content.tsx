"use client";
import Banner from "@/app/components/blog/bannerSection";
import Entradas from "@/app/components/blog/entradasSection";
import axios from "axios";
import { useEffect, useState } from "react";
import { api_blog } from "@/app/data/enviroments/api.enviroment";

const content = ({ slug }: { slug: string }) => {
  const [posts, setPosts] = useState([]);
  const tagMap: Record<string, number> = {
    branding: 4,
    "desarrollo-movil": 7,
    "desarrollo-software": 6,
    "diseno-web": 5,
    "marketing-digital": 3,
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const tagId = tagMap[slug];
        if (tagId) {
          const response = await axios.get(`${api_blog}?tags=${tagId}`);
          setPosts(response.data);
        } else {
          console.error("Invalid slug:", slug);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [slug]);

  return (
    <div>
      <Banner name={slug} />
      <div className=" relative -top-[8%] md:-top-[5%] lg:-top-[10%]">
        <Entradas posts={posts} name={slug} />
      </div>
    </div>
  );
};

export default content;
