import { useState } from 'react';

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
};

/**
 * Foto com fallback pastel elegante caso o arquivo ainda não exista
 * em /public/photos.
 */
export function Photo({ src, alt, className, caption }: PhotoProps) {
  return (
    <figure
      className={
        'group relative overflow-hidden rounded-2xl bg-muted ' + className
      }
    >
      <img
        src={src}
        alt={alt}
        loading='lazy'
        className='h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]'
      />
      {caption ? (
        <figcaption className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-800 to-transparent p-4 text-xs uppercase tracking-[0.2em] text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100'>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
