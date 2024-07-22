import { api_blog } from "@/app/data/enviroments/api.enviroment";
import axios from "axios";
import { useEffect, useState } from "react";
import MorePostCard from "@/app/components/blog/morePostCard";

interface Post {
  id: number;
  slug: string;
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

const MorePost = ({ currentPost }: { currentPost: string }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async (page: number = 1) => {
    try {
      const response = await axios.get(`${api_blog}?per_page=3&page=${page}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  };

  const loadMorePosts = async () => {
    let fetchedPosts: Post[] = [];
    let page = 1;

    while (fetchedPosts.length < 2) {
      const newPosts = await fetchPosts(page);
      fetchedPosts = [
        ...fetchedPosts,
        ...newPosts.filter((post:any) => post.slug !== currentPost)
      ];

      if (newPosts.length < 2) {
        break;
      }

      page++;
    }

    // Ensure only 3 posts are returned
    return fetchedPosts.slice(0, 2);
  };

  useEffect(() => {
    const fetchAndSetPosts = async () => {
      const morePosts = await loadMorePosts();
      setPosts(morePosts);
    };

    fetchAndSetPosts();
  }, [currentPost]);

  return (
    <div className="w-full mb-8 md:mb-0">
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-3xl text-[#3D3D3D] font-medium uppercase">
          Mas temas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {posts.map((post, index) => (
            <MorePostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MorePost;
