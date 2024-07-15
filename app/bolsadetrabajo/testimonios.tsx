import React from "react";

const Testimonios = () => {
  return (
    <div className="relative bg-[#6D28D9] text-white rounded-2xl shadow-lg p-4">
      <div className="flex gap-4">
        <img
          className=" relative -translate-y-6 h-20 w-20 object-cover rounded-[100%] shadow-sm"
          src="https://i.pinimg.com/originals/c1/06/00/c106004d4e455cce80725708f73efce2.png"
          alt="profile"
          title="Perfil del testimonio"
        />
        <div>
          <div>
            <span className="text-xl">Alejandra Andia</span>{" "}
            <span>Diseñadora gráfica</span>
          </div>
          <span>
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_396_234)">
                <path
                  d="M10.3341 4.29465L7.72898 6.18727L8.72415 9.2497C8.778 9.41552 8.71883 9.59705 8.57804 9.69968C8.50725 9.7509 8.42447 9.77647 8.3413 9.77647C8.25827 9.77647 8.17524 9.75087 8.10499 9.69968L5.50005 7.80692L2.89525 9.69941C2.75394 9.80206 2.563 9.80206 2.42199 9.69941C2.2813 9.59705 2.22206 9.4155 2.27598 9.2497L3.27088 6.18714L0.666071 4.29465C0.525037 4.19215 0.465796 4.01066 0.519715 3.8448C0.57377 3.67896 0.728446 3.56675 0.902607 3.56675H4.12242L5.11732 0.504547C5.17124 0.33873 5.3258 0.226562 5.50021 0.226562C5.67462 0.226562 5.82891 0.33873 5.88276 0.504547L6.87766 3.56675H10.0977C10.2718 3.56675 10.4264 3.67899 10.4806 3.8448C10.534 4.01066 10.4747 4.19215 10.3341 4.29465Z"
                  fill="#FBD141"
                />
              </g>
              <defs>
                <clipPath id="clip0_396_234">
                  <rect
                    width="10"
                    height="10"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
      </div>
      <p>
        En Agencia GATO, encuentro un ambiente donde mi creatividad se potencia
        y mis ideas realmente importan. Es inspirador ser parte de un equipo tan
        colaborativo y dinámico.
      </p>
    </div>
  );
};

export default Testimonios;
