import React from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export default function LazyImage({ src, alt, className, ...rest }: Props) {
  return (
    <img src={src} alt={alt} className={className} loading="lazy" decoding="async" {...rest} />
  );
}
