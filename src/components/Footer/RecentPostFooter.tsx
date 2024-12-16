import Image from "next/image";

export default function RecentPostsSection() {
  const posts = [
    { title: "Is fast food good for your body?", date: "February 28, 2022", image: "/recentPost.png" },
    { title: "Change your food habit with organic food", date: "February 28, 2022", image: "/recentPost.png" },
    { title: "Do you like fast food for your life?", date: "February 28, 2022", image: "/recentPost.png" },
  ];

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-0">
      {/* Section Title */}
      <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
        Recent Posts
      </h3>

      {/* Posts List */}
      <div className="space-y-4 sm:space-y-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white shadow-sm rounded-md p-3 hover:shadow-md transition duration-300"
          >
            {/* Post Image */}
            <Image
              src={post.image}
              alt={post.title}
              width={64}
              height={64}
              className="w-16 h-16 rounded-md object-cover"
            />
            {/* Post Details */}
            <div className="flex-1">
              <h4 className="text-sm sm:text-base font-semibold mb-1 text-gray-800 line-clamp-2">
                {post.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
