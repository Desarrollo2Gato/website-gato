import Section from "./section";
import type { Metadata } from "next";
import {BlogPosting, WithContext } from "schema-dts";

const jsonLd: WithContext<BlogPosting> = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Título del post',
  description: 'Descripción del post',
  image: 'https://gato.pe/imagen-del-post.png',
  author: {
    '@type': 'Person',
    name: 'Nombre del autor'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Agencia GATO',
    logo: {
      '@type': 'ImageObject',
      url: 'https://gato.pe/gato-icon.png',
      width: '60px',
      height: '60px'
    }
  },
  datePublished: '2023-01-01T08:00:00+08:00',
  dateModified: '2023-01-01T09:00:00+08:00'
};


export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section name={params.slug}></Section>
    </div>
  );
}