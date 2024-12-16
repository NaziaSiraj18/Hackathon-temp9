import { menuItems } from '@/constant/menu';
import { Coffee } from 'lucide-react';
import Heading from '../Heading/Heading';
import Image from 'next/image';

export default function Dessert() {
  return (
    <section className="w-full mx-auto mt-8 sm:mt-12 px-4">
      <div className="container mx-auto py-8 sm:py-12 flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <Image
            src="/dessert.png"
            alt="Dessert dish"
            width={448}
            height={626}
            className="w-full max-w-xs sm:max-w-md lg:max-w-none h-auto shadow-lg"
          />
        </div>

        {/* Menu Items Section */}
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col mb-6">
            <Coffee className="text-[#FF9F0D] self-start" size={24} />
            <Heading text="Dessert" />
          </div>

          <div className="space-y-6 sm:space-y-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-dashed border-gray-300 pb-4 sm:pb-6"
              >
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <span className="text-lg sm:text-xl font-bold text-[#FF9F0D]">
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
      </div>
    </section>
  );
}
