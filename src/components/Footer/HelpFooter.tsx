export default function HelpSection() {
  const links = [
    "FAQ",
    "Terms & Conditions",
    "Reporting",
    "Documentation",
    "Support Policy",
    "Privacy",
  ];

  return (
    <div className="w-full max-w-md mx-auto px-4 lg:px-0">
      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
        Help?
      </h3>
      <ul className="text-sm sm:text-base flex flex-col gap-3 sm:gap-4 leading-6">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="hover:text-[#FF9F0D] transition duration-300 block text-center sm:text-left"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
