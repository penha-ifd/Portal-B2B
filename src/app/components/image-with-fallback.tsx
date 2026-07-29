import { useState } from 'react';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA4OCA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijg4IiBoZWlnaHQ9Ijg4IiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik00NCA1MkM0OC40MTgzIDUyIDUyIDQ4LjQxODMgNTIgNDRDNTIgMzkuNTgxNyA0OC40MTgzIDM2IDQ0IDM2QzM5LjU4MTcgMzYgMzYgMzkuNTgxNyAzNiA0NEMzNiA0OC40MTgzIDM5LjU4MTcgNTIgNDQgNTJaIiBmaWxsPSIjQ0NDQ0NDIi8+Cjwvc3ZnPgo=';

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export function ImageWithFallback(props: Props) {
  const [didError, setDidError] = useState(false);
  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div className={`inline-block bg-muted text-center align-middle ${className ?? ''}`} style={style}>
      <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={() => setDidError(true)} />
  );
}
