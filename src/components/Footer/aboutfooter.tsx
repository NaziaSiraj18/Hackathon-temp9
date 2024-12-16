import { Clock } from 'lucide-react';

export default function AboutUsSection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 lg:py-16">
      {/* Section Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
        About Us
      </h3>

      {/* Description */}
      <p className="text-base sm:text-lg leading-relaxed text-gray-700 text-center mb-8 lg:mb-12">
        Corporate clients and leisure travelers have been relying on Groundlink
        for dependable, safe, and professional chauffeured car service in major
        cities across the World.
      </p>

      {/* Opening Hours */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-center gap-6 lg:gap-8">
        {/* Icon Section */}
        <div className="bg-[#FF9F0D] p-4 sm:p-6 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center">
          <Clock className="text-white w-10 h-10 sm:w-12 sm:h-12" />
        </div>

        {/* Text Section */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg sm:text-xl font-semibold mb-2">
            Opening Hours
          </h4>
          <p className="text-sm sm:text-base text-gray-600">
            Mon - Sat (8.00 AM - 6.00 PM)
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            Sunday - Closed
          </p>
        </div>
      </div>
    </div>
  );
}
