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
        {/* <div>
          <svg
            data-testid="geist-icon"
            height="16"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width="16"
          >
            <path
              className="fill-black"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.75 2H1V3.5H1.75H14.25H15V2H14.25H1.75ZM6 7.25H6.75H14.25H15V8.75H14.25H6.75H6V7.25ZM4 12.5H4.75H14.25H15V14H14.25H4.75H4V12.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </div> */}
      </nav>
    </header>
  );
}

export default Header;
