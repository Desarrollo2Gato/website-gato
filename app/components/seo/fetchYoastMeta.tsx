import axios from 'axios';

export const fetchYoastMeta = async (api:string, slug: string) => {
  try {
    const response = await axios.get(`${api}?slug=${slug}`);
    const post = response.data[0];

    if (!post) {
      throw new Error('Post not found');
    }

    return post.yoast_head_json;
  } catch (error) {
    console.error('Error fetching Yoast SEO data:', error);
    return null;
  }
};