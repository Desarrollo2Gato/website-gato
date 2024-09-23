"use client";

import Link from "next/link";

function InfoDrawer({ word }: { word: string }) {
  if (word === "Portafolio") {
    return (
      <div className="grid grid-cols-3 gap-8">
        <span className=" font-light animate-fade-up animate-duration-500 animate-ease-linear animate-normal col-span-3 text-lg">
        ¡Descubre la magia de nuestros proyectos realizados! Sumérgete en un mundo donde la creatividad y la excelencia se unen para dar vida a ideas innovadoras. Desde diseños sorprendentes hasta soluciones tecnológicas de vanguardia, cada proyecto es una historia de éxito esperando ser explorada. Únete a nosotros y sé testigo de cómo convertimos visiones en realidad.
        </span>
      </div>
      
    );
  } else if (word === "Nosotros") {
    return (
      <div className="grid grid-cols-3 gap-8">
        <span className=" font-light animate-fade-up animate-duration-500 animate-ease-linear animate-normal col-span-3 text-lg">
          En GATO, estamos comprometidos con la búsqueda de la excelencia en
          cada proyecto que emprendemos. Nos enorgullece trabajar con clientes
          que comparten nuestra pasión por el éxito y están dispuestos a
          desafiar los límites en busca de resultados extraordinarios.
        </span>
      </div>
    );
  } else if (word === "Servicios") {
    return (
      <div className="grid grid-cols-3 gap-8">
        <Link
          href={"/servicios/marketing-digital"}
          className="animate-fade-up animate-duration-500 animate-ease-linear animate-normal hover:font-semibold transition-all"
        >
          Marketing digital
        </Link>
        <Link
          href={"/servicios/desarrollo-software"}
          className="animate-fade-up animate-duration-700 animate-ease-linear animate-normal hover:font-semibold transition-all"
        >
          Desarrollo de software
        </Link>

        <Link
          href={"/servicios/diseno-web"}
          className="animate-fade-up animate-duration-900 animate-ease-linear animate-normal hover:font-semibold transition-all"
        >
          Diseño web
        </Link>
        <Link
          href={"/servicios/branding"}
          className="animate-fade-up animate-duration-900 animate-ease-linear animate-normal hover:font-semibold transition-all"
        >
          Branding
        </Link>
        <Link
          href={"/servicios/desarrollo-movil"}
          className="animate-fade-up animate-duration-900 animate-ease-linear animate-normal hover:font-semibold transition-all"
        >
          Desarrollo móvil
        </Link>
        <Link
          href={"/servicios/email-marketing"}
          className="animate-fade-up animate-duration-900 animate-ease-linear animate-normal hover:font-semibold transition-all"
        >
          E-mail Marketing
        </Link>
      </div>
    );
  } else if (word === "Blog") {
    return (
      <div className="grid grid-cols-3 gap-8">
        <span className=" font-light animate-fade-up animate-duration-500 animate-ease-linear animate-normal col-span-3 text-lg">
        Descubre un mundo de innovación y creatividad en el blog de GATO. Explora tendencias, consejos prácticos y conocimientos expertos diseñados para inspirar tu éxito empresarial. Únete a nosotros en un viaje emocionante hacia la excelencia y desata tu potencial ilimitado. ¡Bienvenido al blog de GATO, donde las ideas cobran vida!
        </span>
      </div>
    );
  } else {
    return <></>;
  }
}

export default InfoDrawer;
