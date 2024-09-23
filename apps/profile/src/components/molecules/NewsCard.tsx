import classNames from "classnames";
import { Button } from "../atoms";

type Props = {
  backgroundImageUrl: string;
  title: string;
  onClick?: () => void;
};

export default function NewsCard({ backgroundImageUrl, title, onClick }: Props) {
  return (
    <article
      className={classNames(
        "rounded bg-cover object-cover bg-center relative w-full h-96 md:h-80 lg:h-96"
      )}
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_URL}${backgroundImageUrl})`,
      }}
      aria-label={title}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 blur-sm"></div>
      <div className="absolute bottom-5 left-5 right-5 flex flex-col items-start">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2 w-full whitespace-normal break-words">
          {title}
        </h3>
        <Button variants="default" size="sm" className="mt-2 md:mt-3 lg:mt-4" onClick={onClick}>
          Baca Berita
        </Button>
      </div>
    </article>
  );
}