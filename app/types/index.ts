export interface IProject {
  id: string;
  slug: string;
  title: { rendered: string };
  acf: {
    descripcion_corta: string;
    banner: string;
    "imagen-solucion": string;
    services: string;
    cliente: string;
    problema: string;
    necesidad: string;
    imagen_destacada: string;
    "cliente-slug": string;
    "solucion-analisis": string;
    "solucion-diseno": string;
    "solucion-desarrollo": string;
    "solucion-pruebas": string;
    "solucion-despliegue": string;
    "banner-descripcion": string;
    url: string;
    facebook: string;
    instagram: string;
    tiktok: string;
    linkedin: string;
    despliegue: string;
    services_gato: {
      description: string;
      services: string[];
    };
    testimonial_client: {
      xp_gato: string;
      author: string;
    };
    service_result: {
      item: string;
    }[];
    galery_1: {
      img_1: string;
      img_2: string;
      img_3: string;
      img_4: string;
      description_1: string;
      description_2: string;
      description_3: string;
      description_4: string;
    };
    galery_2: {
      img_1: string;
      img_2: string;
      description_1: string;
      description_2: string;
    };
    client_color: string;
  };
}
