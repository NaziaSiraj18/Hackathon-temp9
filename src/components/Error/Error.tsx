import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-10">
      {/* Error Code */}
      <h1 className="text-6xl sm:text-8xl font-bold text-[#FF9F0D] mb-4">
        404
      </h1>
      {/* Error Message */}
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 text-center">
        Oops! Looks like something went wrong
      </h2>
      {/* Description */}
      <p className="text-sm sm:text-base lg:text-lg text-gray-500 text-center mb-6 max-w-md">
        Page cannot be found! We will have it figured out in no time. <br />
        Meanwhile, check out these fresh ideas:
      </p>
      {/* Button */}
      <Link
        href="/"
        className="px-6 py-3 bg-[#FF9F0D] text-white font-medium rounded-md shadow hover:bg-[#e4890b] transition focus:outline-none focus:ring focus:ring-[#FF9F0D]/50"
      >
        Go to home
      </Link>
    </div>
  );
}
