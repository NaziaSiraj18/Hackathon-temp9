import React from 'react';
import Link from 'next/link';

function Hero() {
  return (
    <section className="w-full bg-[url('/heropic.png')] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white font-bold text-center mb-4 sm:mb-6">
            Our Menu
          </h1>

          {/* Breadcrumb Navigation */}
          <div className="text-sm sm:text-base md:text-lg flex gap-2 text-center justify-center items-center">
            <Link
              href="/"
              className="text-white hover:text-[#FF9F0D] transition-colors duration-300"
            >
              Home
            </Link>
            <span className="text-white">{`>`}</span>
            <Link href="/menu" className="text-[#FF9F0D]">
              Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
