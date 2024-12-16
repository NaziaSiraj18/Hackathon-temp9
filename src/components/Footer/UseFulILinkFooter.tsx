export default function UsefulLinksSection() {
  const links = ['About', 'News', 'Partners', 'Team', 'Menu', 'Contact'];

  return (
    <div className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md">
      <h3 className="text-xl font-bold mb-6 text-center sm:text-left">Useful Links</h3>
      <ul className="text-[16px] leading-6 flex flex-col gap-3 sm:gap-4">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="block text-center sm:text-left hover:text-[#FF9F0D] transition duration-300"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
