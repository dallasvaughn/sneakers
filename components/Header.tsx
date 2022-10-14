import Image from 'next/image';
import menu from '../public/icon-menu.svg';
import logo from '../public/logo.svg';
import cart from '../public/icon-cart.svg';
import avatar from '../public/image-avatar.png';
import NavItem from './NavItem';
import { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';
import Cart from './Cart';

type Props = {
  toggleMenu: () => void;
};

const Header = ({ toggleMenu }: Props) => {
  const [showCart, setShowCart] = useState(false);
  const [state] = useContext(CartContext);

  return (
    <header className="fixed max-w-screen-xl z-20 h-16 top-0 w-full bg-white flex items-center px-6 lg:px-4 lg:h-32 lg:border-b lg:border-gray-blue">
      <div className="relative mr-auto h-full flex gap-5 lg:gap-10 items-center">
        <span className="lg:hidden" onClick={toggleMenu}>
          <Image src={menu} />
        </span>
        <span>
          <Image src={logo} />
        </span>
        <NavItem>Collection</NavItem>
        <NavItem>Men</NavItem>
        <NavItem>Women</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </div>
      <div className="h-full flex gap-5 lg:gap-10 items-center">
        <span
          className="h-full lg:pl-10 flex items-center"
          onMouseEnter={() => setShowCart(true)}
          onMouseLeave={() => setShowCart(false)}
        >
          <span className="relative">
            <Image style={{ cursor: 'pointer' }} src={cart} />
            {state.count > 0 && (
              <span className="absolute text-[8px] text-white font-bold bg-orange -top-1 -right-2 px-2 rounded-full animate-grow">
                {state.count}
              </span>
            )}
          </span>
          {showCart ? <Cart /> : null}
        </span>
        <span className="w-7 h-7 lg:w-12 lg:h-12 -translate-y-[2px] hover:border-2 border-orange rounded-full transition-all ease-in-out duration-100 cursor-pointer">
          <Image src={avatar} />
        </span>
      </div>
    </header>
  );
};

export default Header;
