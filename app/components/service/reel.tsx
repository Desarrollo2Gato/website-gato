import React, { useEffect } from "react";

interface InstagramEmbedProps {
  url: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
  useEffect(() => {
    // Verifica si el script de Instagram ya está en el documento
    if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(script);

      // Limpieza al desmontar el componente
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div className="w-fit mx-auto">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="12"
      >
        <a href={url}></a>
      </blockquote>
    </div>
  );
};

export default InstagramEmbed;
