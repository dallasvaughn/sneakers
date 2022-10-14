import Image from 'next/image';
import { useContext, useState } from 'react';
import minus from '../public/icon-minus.svg';
import plus from '../public/icon-plus.svg';
import cart from '../public/icon-cart-button.svg';
import { CartContext } from '../context/cartContext';

const AddCart = () => {
  const [count, setCount] = useState(0);
  const [, dispatch] = useContext(CartContext);

  const updateCount = (updatedCount: number) => {
    if (updatedCount < 0) {
      return;
    } else {
      setCount(updatedCount);
    }
  };

  const handleClick = () => {
    dispatch({
      type: 'ADD',
      payload: count,
    });
  };

  return (
    <>
      <div className="px-6 w-full mt-3 mb-20 lg:w-4/5 lg:mb-0 lg:flex lg:items-center lg:gap-4">
        <div className="w-full bg-light-gray-blue flex items-center px-5 py-[13px] rounded-xl lg:flex-[0.5]">
          <span
            className="flex items-center h-10 cursor-pointer"
            onClick={() => updateCount(count - 1)}
          >
            <Image src={minus} />
          </span>
          <span className="mx-auto font-bold text-dark-blue">{count}</span>
          <span
            className="flex items-center h-10 cursor-pointer"
            onClick={() => updateCount(count + 1)}
          >
            <Image src={plus} />
          </span>
        </div>
        <button
          className="w-full flex content-center mt-4 lg:mt-0 bg-orange text-white p-5 rounded-xl shadow-2xl lg:flex-1 hover:opacity-70"
          onClick={handleClick}
        >
          <span className="flex items-center mx-auto gap-4 font-bold">
            <Image src={cart} /> Add to cart
          </span>
        </button>
      </div>
    </>
  );
};

export default AddCart;
