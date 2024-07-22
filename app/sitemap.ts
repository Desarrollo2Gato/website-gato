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
        // portafolio
        const responseProjects = await axios.get(api_projects); 
        const dataProjects = responseProjects.data; 

        
        const projectUrls = dataProjects.map((project: any) => ({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/portafolio/${project.slug}`, 
        }));

        // blog categories
        const categories = ["marketing-digital", "diseno-web", "desarrollo-software", "branding", "desarrollo-movil",]

        const blogCategories = categories.map((category: string) => ({
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
            ...projectUrls,
            ...blogCategories,
            ...blogPostUrls,
            ...vacantesUrls,
        ];

        return allUrls; // Devolver el array completo de URLs para el sitemap
    } catch (error) {
        console.error('Error al obtener los datos desde las APIs:', error);
        return staticUrls; // Si falla alguna de las solicitudes a las APIs, retornar solo las URLs estáticas
    }
}


/* export default function sitemap(): MetadataRoute.Sitemap {
    // proyectos
    const ProjectResponse = await axios.get(api_projects);
    const { projects }: { projects: any[] } = ProjectResponse.data;

    const projectsDetails: MetadataRoute.Sitemap = projects.map(({ slug }) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/portafolio/${slug}`,
    }));

    // blog categories 
    const categories = ["marketing-digital", "diseno-web", "desarrollo-software", "branding", "desarrollo-movil",]

    const blogCategories: MetadataRoute.Sitemap = categories.map((category) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${category}`,
    }));
    // blog post
    const blogResponse = await axios.get(api_blog);
    const { posts }: { posts: any[] } = blogResponse.data;
    const blogPosts: MetadataRoute.Sitemap = posts.map(({ slug }) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
    }));

    //bolsa de trabajo
    const jobVacanciesResponse = await axios.get(api_vacantes);
    const { vacancies }: { vacancies: any[] } = jobVacanciesResponse.data;

    const jobVacancies: MetadataRoute.Sitemap = vacancies.map(({ slug }) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/bolsa-de-trabajo/${slug}`,
    }));
  return [
    {
      url: 'https://acme.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://acme.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
} */