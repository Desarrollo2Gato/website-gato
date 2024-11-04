import { useEffect, useState } from "react";

type ImageSize = {
  width: number;
  height: number;
};

export const useImageSize = (url: string) => {
  const [size, setSize] = useState<ImageSize | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = url;

    img.onload = () => {
      setSize({ width: img.width, height: img.height });
    };

    img.onerror = () => {
      console.error("No se pudo cargar la imagen");
    };
  }, [url]);

  return size;
};
