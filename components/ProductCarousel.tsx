import Image, { StaticImageData } from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import image1 from '../public/image-product-1.jpg';
import image2 from '../public/image-product-2.jpg';
import image3 from '../public/image-product-3.jpg';
import image4 from '../public/image-product-4.jpg';
import next from '../public/icon-next.svg';
import prev from '../public/icon-previous.svg';

type Props = {
  lightboxIndex?: number;
  setThumbnailIndex?: Dispatch<SetStateAction<number>>;
};

const ProductCarousel = ({ lightboxIndex, setThumbnailIndex }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images: StaticImageData[] = [image1, image2, image3, image4];

  useEffect(() => {
    if (typeof lightboxIndex === 'number') {
      setActiveIndex(lightboxIndex);
    }
  }, [lightboxIndex]);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
    setThumbnailIndex && setThumbnailIndex(newIndex);
  };

  return (
    <div className="mt-16 lg:mt-0 overflow-hidden relative">
      <div
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        className="whitespace-nowrap transition duration-300"
      >
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="inline-flex items-center content-center"
            >
              <Image src={image} />
            </div>
          );
        })}
      </div>
      <div className="absolute top-0 z-10 h-full w-full flex items-center -translate-y-[6px] px-4">
        <span
          className="bg-white h-10 w-10 rounded-full flex cursor-pointer items-center pl-[11px]"
          onClick={() => updateIndex(activeIndex - 1)}
        >
          <Image src={prev} />
        </span>
        <span
          className="ml-auto bg-white h-10 w-10 rounded-full flex cursor-pointer items-center pl-[14px]"
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <Image src={next} />
        </span>
      </div>
    </div>
  );
};

export default ProductCarousel;
