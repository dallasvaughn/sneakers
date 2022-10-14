import Image from 'next/image';
import close from '../public/icon-close.svg';

type Props = {
  toggleMenu: () => void;
};

const Menu = ({ toggleMenu }: Props) => {
  return (
    <div className="absolute z-20 h-screen w-screen bg-transparent-black">
      <div className="h-full w-[275px] bg-white animate-slideRight origin-left p-5">
        <span className="cursor-pointer" onClick={toggleMenu}>
          <Image src={close} />
        </span>
        <div className="flex flex-col gap-4 font-bold text-[18px] mt-10 text-dark-blue">
          <span>Collections</span>
          <span>Men</span>
          <span>Women</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
