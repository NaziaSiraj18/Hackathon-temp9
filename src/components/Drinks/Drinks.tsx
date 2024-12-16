import { Coffee } from 'lucide-react';
import Heading from '../Heading/Heading';
import Image from 'next/image';
import { DrinksItem } from '@/constant/Drink';

export default function Drink() {
  return (
    <section className="w-full mx-auto mt-8 sm:mt-12 px-4">
      <div className="container mx-auto py-8 sm:py-12 flex flex-col-reverse lg:flex-row gap-6 lg:gap-12">
        
        {/* Drink Menu Section */}
        <div className="w-full lg:w-2/3 lg:pl-8">
          <div className="flex flex-col mb-6">
            <Coffee className="text-[#FF9F0D] self-start" size={24} />
            <Heading text="Drinks" />
          </div>

          <div className="space-y-6 sm:space-y-8">
            {DrinksItem.map((item, index) => (
              <div
                key={index}
                className="border-b border-dashed border-gray-300 pb-4 sm:pb-6"
              >
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3
                    className={`text-base sm:text-lg md:text-xl font-bold ${
                      item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'
                    }`}
                  >
                    {item.name}
                  </h3>
                  <span className="text-base sm:text-lg md:text-xl font-bold text-[#FF9F0D]">
                    {item.price}$
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2">
                  {item.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {item.calories} CAL
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <Image
            src="/drinks.png"
            alt="Drinks image"
            width={448}
            height={626}
            className="w-full max-w-xs sm:max-w-md lg:max-w-none h-auto shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
