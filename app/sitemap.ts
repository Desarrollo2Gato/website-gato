import { MetadataRoute } from 'next'
import { api_blog, api_projects, api_vacantes } from './data/enviroments/api.enviroment'
import axios from 'axios'
 


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
     // URLs estáticas definidas manualmente
     const staticUrls = [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/home`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/nosotros`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/servicios`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/portafolio`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/contactanos`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/bolsa-de-trabajo`,
        },
    ];

    try {
        const categories = ["marketing-digital", "diseno-web", "desarrollo-software", "branding", "desarrollo-movil",]
        // services 
        const servicesUrls = categories.map((category: string) => ({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/servicios/${category}`,
        }));
       
        // portafolio
        const responseProjects = await axios.get(api_projects); 
        const dataProjects = responseProjects.data; 
        
        const projectUrls = dataProjects.map((project: any) => ({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/portafolio/${project.slug}`, 
        }));

        // blog categories
        const blogCategoriesUrls = categories.map((category: string) => ({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${category}`,
        }));

        // blog post
        const responseBlog = await axios.get(api_blog); 
        const dataBlog = responseBlog.data; 

        
        const blogPostUrls = dataBlog.map((blogPost: any) => ({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/post/${blogPost.slug}`, 
        }));

        // vacantes
        const responseVacantes = await axios.get(api_vacantes);  
        const dataVacantes = responseVacantes.data; 

       
        const vacantesUrls = dataVacantes.map((vacante: any) => ({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/bolsa-de-trabajo/${vacante.slug}`, 
        }));

        
        const allUrls = [
            ...staticUrls,
            ...servicesUrls,
            ...projectUrls,
            ...blogCategoriesUrls,
            ...blogPostUrls,
            ...vacantesUrls,
        ];

        return allUrls; 
    } catch (error) {
        console.error('Error al obtener los datos desde las APIs:', error);
        return staticUrls; 
    }
}
