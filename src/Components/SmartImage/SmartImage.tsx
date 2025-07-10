import React, { useEffect, useState } from "react";

interface SmartImageProps {
  src: string;
  alt?: string;

  className?: string;
}

const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt = "image",

  className = "",
}) => {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    const isBase64 = src.startsWith("data:image");

    if (isBase64) {
      setImageSrc(src); // already base64
    } else {
      // Convert external URL image to base64
      fetch(src)
        .then((res) => res.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            if (typeof reader.result === "string") {
              setImageSrc(reader.result);
            }
          };
          reader.readAsDataURL(blob);
        })
        .catch((err) => {
          console.error("Image conversion failed:", err);
        });
    }
  }, [src]);

  return <img src={imageSrc} alt={alt} className={className} />;
};

export default SmartImage;
