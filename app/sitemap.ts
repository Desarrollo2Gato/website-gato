import { MetadataRoute } from 'next'
 


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
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
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/servicios/marketing-digital`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/servicios/diseno-web`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/servicios/desarrollo-software`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/servicios/branding`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/servicios/desarrollo-movil`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/portafolio`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
        },
    ]
}


/* export default function sitemap(): MetadataRoute.Sitemap {
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