const ProductDescription = () => {
  return (
    <section className="w-full py-4 px-6 text-left lg:w-4/5">
      <h2 className="font-bold text-orange uppercase text-[13px] tracking-widest lg:text-[14px]">
        Sneaker Company
      </h2>
      <h3 className="font-bold text-dark-blue text-[28px] mt-2 lg:mt-6 leading-9 lg:text-[42px] lg:leading-none">
        Fall Limited Edition Sneakers
      </h3>
      <p className="text-dark-gray-blue mt-4 lg:mt-8 lg:leading-relaxed">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="mt-4 w-full flex items-center lg:flex-col">
        <div className="flex items-center mr-auto">
          <span className="text-dark-blue text-[28px] font-bold mr-5">
            $125.00
          </span>
          <span className="mr-auto text-orange font-bold bg-pale-orange px-2 rounded-md">
            50%
          </span>
        </div>
        <span className="text-gray-blue font-bold line-through lg:mr-auto">
          $250.00
        </span>
      </div>
    </section>
  );
};

export default ProductDescription;
