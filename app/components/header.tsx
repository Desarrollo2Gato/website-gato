"use client";

function Header() {
  return (
    <header className="md:px-52 sm:px-28 px-8 flex justify-end text-[#7A7678] font-light py-4">
      <nav className="flex gap-8 items-center">
        <span>Home</span>
        <span>Equipo</span>
        <span>Servicio</span>
        <span>Experiencia</span>
        <button className="px-2 py-1 bg-[#0A86ED] text-white rounded-2xl">
          Get in touch
        </button>
      </nav>
    </header>
  );
}

export default Header;
