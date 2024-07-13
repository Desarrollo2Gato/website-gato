import Link from "next/link";


const NavSections = ({ name }: { name?:string }) => {
  const navLinks = [
    "marketing-digital",
    "diseno-web",
    "desarrollo-software",
    "branding",
    "desarrollo-movil",
  ];

  return (
    <div className="w-full">
      <Link
        href={"/blog"}
        className="text-3xl text-[#3D3D3D] font-medium uppercase "
      >
        Secciones
      </Link>
      <ul className="flex lg:flex-col gap-4 overflow-x-auto mt-4 lg:mt-8">
        {navLinks.map((navLink, index) => (
          <li
            key={index}
            className={`capitalize font-semibold transition-all duration-500 whitespace-nowrap ${
              name === navLink ? 'text-purple-500' : 'hover:text-purple-500'
            }`}
          >
            <Link href={"/blog/[slug]"} as={`/blog/${navLink}`}>
              {navLink === "diseno-web" ? "Diseño Web" : navLink.replace(/-/g, " ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavSections;
