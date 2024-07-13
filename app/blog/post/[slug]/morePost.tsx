import { api_blog } from "@/app/data/enviroments/api.enviroment";
import axios from "axios";
import { useEffect, useState } from "react";
import MorePostCard from "@/app/components/blog/morePostCard";

const MorePost = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await axios.get(`${api_blog}?per_page=2`);
            setPosts(response.data);
          } catch (error) {
            console.error('Error fetching posts:', error);
            setPosts([]);
          }
        };
    
        fetchPosts();
      }, []);
  return (
    <div className="w-full mb-8 md:mb-0">
      <div className="wfull flex flex-col gap-4">
        <h2 className="text-3xl 
         text-[#3D3D3D] font-medium uppercase ">Mas temas</h2>
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
