import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import thumbnail from '../public/image-product-1-thumbnail.jpg';
import Image from 'next/image';
import trash from '../public/icon-delete.svg';

const Cart = () => {
  const [state, dispatch] = useContext(CartContext);

  const handleDelete = () => {
    dispatch({
      type: 'REMOVE',
    });
  };

  return (
    <div className="absolute z-30 w-[340px] min-h-[225px] bg-white top-[72px] lg:top-[100px] right-[25px] rounded-lg shadow-2xl flex flex-col animate-fadeIn">
      <div className="font-bold pb-6 border-b border-gray-blue p-5">Cart</div>
      {state.count === 0 ? (
        <div className="p-5 h-full text-dark-gray-blue font-bold flex items-center justify-center flex-1">
          Your cart is empty.
        </div>
      ) : (
        <div className="px-5 py-6">
          <div className="flex items-center">
            <span>
              <Image
                style={{ borderRadius: '4px' }}
                src={thumbnail}
                width={50}
                height={50}
              />
            </span>
            <div className="flex flex-col text-[14px] mr-auto ml-4 text-dark-gray-blue">
              <span className="mb-1 ">Autumn Limited Edition...</span>
              <span>
                $125.00 x 3{' '}
                <span className="font-bold text-dark-blue ml-1">$375.00</span>
              </span>
            </div>
            <span
              className="cursor-pointer hover:opacity-70"
              onClick={handleDelete}
            >
              <Image src={trash} />
            </span>
          </div>
          <button className="w-full text-center font-bold mt-4 bg-orange text-white p-4 rounded-xl shadow-orange hover:opacity-70 transition-opacity duration-300 ease-in-out">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
