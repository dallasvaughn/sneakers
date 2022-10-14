import ProductCarousel from './ProductCarousel';
import thumbnail1 from '../public/image-product-1-thumbnail.jpg';
import thumbnail2 from '../public/image-product-2-thumbnail.jpg';
import thumbnail3 from '../public/image-product-3-thumbnail.jpg';
import thumbnail4 from '../public/image-product-4-thumbnail.jpg';
import close from '../public/icon-close.svg';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

type Props = {
  toggleLightbox: () => void;
};

const ProductLightbox = ({ toggleLightbox }: Props) => {
  const [index, setIndex] = useState(0);
  const thumbnails: StaticImageData[] = [
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
  ];

  return (
    <div className="absolute flex flex-col justify-center items-center w-screen h-screen bg-transparent-black z-30 animate-slideRight">
      <span
        className="w-1/3 self-end mb-4 mr-4 cursor-pointer"
        onClick={toggleLightbox}
      >
        <Image src={close} width={20} height={20} />
      </span>
      <div className="w-1/3 mx-auto">
        <ProductCarousel lightboxIndex={index} setThumbnailIndex={setIndex} />
      </div>
      <div className="flex w-[375px] justify-between mt-6">
        {thumbnails.map((image, i) => {
          return (
            <span
              style={{
                border: index === i ? '2px solid hsl(26, 100%, 55%)' : 'none',
                borderRadius: '12px',
                width: '80px',
                height: '80px',
              }}
              onClick={() => setIndex(i)}
            >
              <Image
                style={{
                  borderRadius: '10px',
                  opacity: index === i ? '0.3' : '1',
                  cursor: 'pointer',
                }}
                src={image}
                width={80}
                height={80}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProductLightbox;
