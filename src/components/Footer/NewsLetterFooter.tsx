export default function NewsletterSection() {
  return (
    <div className="w-full mx-auto text-center flex flex-col md:flex-row justify-between items-center px-4 py-8 lg:py-12 gap-6">
      {/* Text Section */}
      <div className="flex flex-col md:w-1/2 lg:w-2/5 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          <span className="text-[#FF9F0D]">Still</span> Need Our Support?
        </h2>
        <p className="text-sm sm:text-base mb-4 lg:mb-6">
          Don’t wait, make a smart & logical quote here. It’s pretty easy.
        </p>
      </div>

      {/* Form Section */}
      <form className="w-full md:w-1/2 lg:w-3/5 flex items-center max-w-2xl mx-auto">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-grow bg-[#FF9F0D] text-white placeholder-white placeholder-opacity-70 px-4 py-3 rounded-l-md focus:outline-none text-sm sm:text-base"
        />
        <button
          type="submit"
          className="bg-white text-[#FF9F0D] px-6 py-3 rounded-r-md font-semibold hover:bg-[#FF9F0D] hover:text-white transition duration-300 text-sm sm:text-base"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
}
