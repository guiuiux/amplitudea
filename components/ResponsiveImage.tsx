// components/ResponsiveImage.tsx
import { useEffect, useState } from "react";
import Image from "next/image";

interface ResponsiveImageProps {
  basePath: string;
  alt: string;
  className?: string;
}

const breakpoints = [
  { width: 640, suffix: "480w" }, // 640px and below will use 640w as the minimum resolution
  { width: 768, suffix: "768w" },
  { width: 1280, suffix: "1280w" },
  { width: 1920, suffix: "1920w" },
];

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  basePath,
  alt,
  className,
}) => {
  const [imageSrc, setImageSrc] = useState(`${basePath}/main-1920w.jpg`);

  const updateImageSrc = () => {
    const windowWidth = window.innerWidth;
    const bestFit =
      breakpoints.find((breakpoint) => windowWidth <= breakpoint.width) ||
      breakpoints[breakpoints.length - 1];
    setImageSrc(`${basePath}/main-${bestFit.suffix}.jpg`);
  };

  useEffect(() => {
    updateImageSrc(); // Set initial image source based on current window width
    window.addEventListener("resize", updateImageSrc);
    return () => window.removeEventListener("resize", updateImageSrc);
  });

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      className={className}
      sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1280px) 1280px, 1920px"
    />
  );
};

export default ResponsiveImage;
