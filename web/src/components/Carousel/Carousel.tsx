import { Fragment } from "react";

interface CarouselImage {
  id: string;
  image: string;
  alt: string;
}

interface CarouselProps {
  images: CarouselImage[];
}

const Carousel = (carousel: CarouselProps) => {
  return (
    <>
      <div className="carousel w-full">
        {carousel.images.map((element) => (
          <Fragment key={element.id}>
            <div id={element.id} className="carousel-item w-full">
              <img src={element.image} alt={element.alt} className="w-full" />
            </div>
          </Fragment>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {carousel.images.map((element, index) => (
          <a href={`#${element.id}`} className="btn btn-xs" key={element.id}>
            {index + 1}
          </a>
        ))}
      </div>
    </>
  );
};

export default Carousel;
