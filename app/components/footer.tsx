"use client";

import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-white h-auto  border-t">
      <div className="max-w-[1440px] mx-auto md:px-24 px-8 flex  pt-16  w-full flex-col">
        <div className="text-sm grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-16 gap-4 justify-between w-full mb-4">
          <Link href={"/"} className="">
            {/* <span className="text-3xl font-semibold">GATO</span> */}
            <img
              loading="lazy"
              className="w-24"
              src="https://i.pinimg.com/originals/73/fe/ce/73fece7ac631330d0dd4c1bd22325029.png"
              alt="GATO - Desarrollo Web, Marketing Digital, Software"
              title="GATO logo"
            />
          </Link>
          <div className="flex flex-col ">
            <span className="font-semibold mb-1">Visítanos </span>
            <span className="text-slate-600">Av. Brasil 2475, Jesús María</span>
          </div>
          <div className="flex flex-col ">
            <span className="font-semibold mb-1">Hablemos</span>
            <Link
              href={"tel:+51 980005257"}
              className="text-slate-600 md:text-sm text-xs
            hover:underline underline-offset-4 mb-1"
            >
              +51 946380310
            </Link>
            <Link
              href={"tel:+51 980005257"}
              className="text-slate-600 md:text-sm text-xs relative inline-block hover:underline underline-offset-4 mb-1"
            >
              +51 980005257
            </Link>
            <Link
              href={"tel:+51 952341679"}
              className="text-slate-600 md:text-sm text-xs
            hover:underline underline-offset-4 mb-1"
            >
              +51 952341679
            </Link>
          </div>
          <div className="flex flex-col ">
            <span className="font-semibold mb-1">Escríbenos</span>
            <Link
              href={"mailto:info@gato.com"}
              className="text-slate-600 md:text-sm text-xs
            hover:underline underline-offset-4 mb-1"
            >
              info@gato.com
            </Link>
            <Link
              href={"mailto:dortega@gato.com"}
              className="text-slate-600 md:text-sm text-xs
            hover:underline underline-offset-4 mb-1"
            >
              dortega@gato.com
            </Link>
            <Link
              href={"mailto:mjara@gato.com"}
              className="text-slate-600 md:text-sm text-xs
            hover:underline underline-offset-4 mb-1"
            >
              mjara@gato.com
            </Link>
          </div>

          <div className="flex flex-col ">
            <span className="font-semibold mb-1">Redes Sociales</span>
            <div className="flex gap-2">
              <Link
                href={"https://www.instagram.com/agenciagato2024/"}
                target="_blank"
                className="hover:scale-125 transition-all ease-in-out duration-00"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.0951 29.7432L9.92847 29.7566C6.8118 29.7595 4.25968 27.2123 4.25614 24.0956L4.24268 9.92896C4.23984 6.81229 6.78701 4.26017 9.90368 4.25662L24.0703 4.24317C27.187 4.24033 29.7391 6.7875 29.7427 9.90417L29.7561 24.0708C29.7597 27.1882 27.2118 29.7403 24.0951 29.7432Z"
                    fill="#4F4F4F"
                  />
                  <path
                    d="M23.8525 29.5L9.68579 29.5135C6.56913 29.5163 4.017 26.9691 4.01346 23.8525L4 9.68579C3.99717 6.56913 6.54434 4.017 9.661 4.01346L23.8277 4C26.9443 3.99717 29.4965 6.54434 29.5 9.661L29.5135 23.8277C29.517 26.945 26.9691 29.4972 23.8525 29.5Z"
                    fill="#4F4F4F"
                  />
                  <path
                    d="M16.9998 21.9587C14.2664 21.9587 12.0415 19.7345 12.0415 17.0003C12.0415 14.2662 14.2664 12.042 16.9998 12.042C19.7333 12.042 21.9582 14.2662 21.9582 17.0003C21.9582 19.7345 19.7333 21.9587 16.9998 21.9587ZM16.9998 13.4587C15.047 13.4587 13.4582 15.0475 13.4582 17.0003C13.4582 18.9532 15.047 20.542 16.9998 20.542C18.9527 20.542 20.5415 18.9532 20.5415 17.0003C20.5415 15.0475 18.9527 13.4587 16.9998 13.4587Z"
                    fill="white"
                  />
                  <path
                    d="M22.3125 12.75C22.8993 12.75 23.375 12.2743 23.375 11.6875C23.375 11.1007 22.8993 10.625 22.3125 10.625C21.7257 10.625 21.25 11.1007 21.25 11.6875C21.25 12.2743 21.7257 12.75 22.3125 12.75Z"
                    fill="white"
                  />
                  <path
                    d="M21.2498 26.2087H12.7498C10.0164 26.2087 7.7915 23.9845 7.7915 21.2503V12.7503C7.7915 10.0162 10.0164 7.79199 12.7498 7.79199H21.2498C23.9833 7.79199 26.2082 10.0162 26.2082 12.7503V21.2503C26.2082 23.9845 23.9833 26.2087 21.2498 26.2087ZM12.7498 9.20866C10.797 9.20866 9.20817 10.7975 9.20817 12.7503V21.2503C9.20817 23.2032 10.797 24.792 12.7498 24.792H21.2498C23.2027 24.792 24.7915 23.2032 24.7915 21.2503V12.7503C24.7915 10.7975 23.2027 9.20866 21.2498 9.20866H12.7498Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link
                href={"https://www.facebook.com/agenciagatope"}
                target="_blank"
                className="hover:scale-125 transition-all ease-in-out duration-00"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="28"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#4F4F4F"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </Link>

              <Link
                href={"https://www.linkedin.com/company/agenciagato/"}
                target="_blank"
                className="hover:scale-125 transition-all ease-in-out duration-00"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#4F4F4F"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center w-full my-4 col-span-4">
          <span className="text-slate-600">&copy; 2024 - Agencia Gato</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
