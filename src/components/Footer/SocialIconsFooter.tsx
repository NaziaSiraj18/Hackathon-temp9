import { Facebook, Twitter, Instagram, Youtube, PinIcon } from "lucide-react";

export default function SocialIcons() {
  const icons = [
    { Icon: Facebook, color: "text-[#1E1E1E]" },
    { Icon: Twitter, color: "text-[#1E1E1E]" },
    { Icon: Instagram, color: "text-[#1E1E1E]" },
    { Icon: Youtube, color: "text-[#FF9F0D]" },
    { Icon: PinIcon, color: "text-[#1E1E1E]" },
  ];

  return (
    <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-6 md:space-x-8">
      {icons.map(({ Icon, color }, index) => (
        <a
          key={index}
          href="#"
          className={`bg-white p-3 rounded-full flex items-center justify-center ${color} hover:bg-[#FF9F0D] hover:text-white transition duration-300`}
          aria-label={`Social icon ${index + 1}`}
        >
          <Icon size={20} className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
