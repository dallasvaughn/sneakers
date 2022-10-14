import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const NavItem = ({ children }: Props) => {
  return (
    <span className="hidden lg:flex text-dark-gray-blue relative items-center h-full cursor-pointer transition ease-in-out hover:text-dark-blue hover:after:absolute after:bg-orange after:h-1 after:w-full after:bottom-0 after:left-0 after:origin-left hover:after:animate-slideRight">
      {children}
    </span>
  );
};

export default NavItem;
