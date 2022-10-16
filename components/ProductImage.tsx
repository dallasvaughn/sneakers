import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import image1 from '../public/image-product-1.jpg';
import image2 from '../public/image-product-2.jpg';
import image3 from '../public/image-product-3.jpg';
import image4 from '../public/image-product-4.jpg';
import thumbnail1 from '../public/image-product-1-thumbnail.jpg';
import thumbnail2 from '../public/image-product-2-thumbnail.jpg';
import thumbnail3 from '../public/image-product-3-thumbnail.jpg';
import thumbnail4 from '../public/image-product-4-thumbnail.jpg';

type Props = {
  toggleLightbox: () => void;
};

const ProductImage = ({ toggleLightbox }: Props) => {
  const [index, setIndex] = useState(0);
  const images: StaticImageData[] = [image1, image2, image3, image4];
  const thumbnails: StaticImageData[] = [
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
  ];

  return (
    <div className="w-[400px]">
      <Image
        style={{ borderRadius: '20px', cursor: 'pointer' }}
        src={images[index]}
        onClick={toggleLightbox}
      />
      <div className="flex justify-between mt-6">
        {thumbnails.map((image, i) => {
          return (
            <span
              key={i}
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

export default ProductImage;
