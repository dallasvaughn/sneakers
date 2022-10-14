import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import AddCart from '../components/AddCart';
import Header from '../components/Header';
import Menu from '../components/Menu';
import ProductCarousel from '../components/ProductCarousel';
import ProductDescription from '../components/ProductDescription';
import ProductImage from '../components/ProductImage';
import ProductLightbox from '../components/ProductLightbox';
import { CartProvider } from '../context/cartContext';

const Home: NextPage = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayLightbox, setDisplayLightbox] = useState(false);

  const toggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  const toggleLightbox = () => {
    setDisplayLightbox(!displayLightbox);
  };

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>Sneakers</title>
      </Head>
      <CartProvider>
        <Header toggleMenu={toggleMenu} />
        {displayMenu ? <Menu toggleMenu={toggleMenu} /> : null}
        {displayLightbox ? (
          <ProductLightbox toggleLightbox={toggleLightbox} />
        ) : null}
        <div className="lg:mt-64 lg:flex lg:items-center lg:pl-28 lg:gap-28">
          <div className="lg:hidden">
            <ProductCarousel />
          </div>
          <div className="hidden lg:block">
            <ProductImage toggleLightbox={toggleLightbox} />
          </div>
          <div>
            <ProductDescription />
            <AddCart />
          </div>
        </div>
      </CartProvider>
    </div>
  );
};

export default Home;
