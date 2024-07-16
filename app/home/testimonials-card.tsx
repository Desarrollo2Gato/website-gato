"use client";

function TestimonialsCards() {
  return (
    <section className="xl:  md:px-24  px-8 bg-gray-100  pb-24 pt-8">
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="bg-white rounded-lg shadow-small p-4">
          <div className="flex gap-2">
            <img
              loading="lazy"
              className="rounded-full w-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIikjoCF-c8UtN5zp0sk_baxDD-pJNIhRuSNXEddfKFg&s"
              alt="GATO - Testimonio cliente Evadry"
            />
            <div className="flex flex-col gap-1">
              {/* <h4 className="">HANS MELCHOR</h4> */}
              <span className="text-violet-700 text-sm font-semibold">
                Director General
              </span>
              <span className="text-gray-600">Evadry</span>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-sm text-gray-600">
              Estamos muy satisfechos con la gestión de nuestras redes sociales
              realizada por GATO. Su equipo ha demostrado un gran talento y
              compromiso, logrando resultados excepcionales que han impulsado
              nuestra presencia online.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-small p-4">
          <div className="flex gap-2">
            <img
              loading="lazy"
              className="rounded-full w-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIikjoCF-c8UtN5zp0sk_baxDD-pJNIhRuSNXEddfKFg&s"
              alt="GATO - Testimonio cliente Flowers Travel"
            />
            <div className="flex flex-col gap-1">
              {/* <h4 className="">HANS MELCHOR</h4> */}
              <span className="text-violet-700 text-sm font-semibold">
                Director General
              </span>
              <span className="text-gray-600">Flowers Travel</span>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-sm text-gray-600">
              Su equipo de expertos en branding nos guió a través de un proceso
              creativo y colaborativo que nos permitió capturar la esencia única
              de Flowers Travel. El resultado ha sido una transformación
              notable.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-small p-4">
          <div className="flex gap-2">
            <img
              loading="lazy"
              className="rounded-full w-20 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIikjoCF-c8UtN5zp0sk_baxDD-pJNIhRuSNXEddfKFg&s"
              alt="GATO - Testimonio cliente CR Motors"
            />
            <div className="flex flex-col gap-1">
              {/* <h4 className="">HANS MELCHOR</h4> */}
              <span className="text-violet-700 text-sm font-semibold">
                Director General
              </span>
              <span className="text-gray-600">CR Motors</span>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-sm text-gray-600">
              Su equipo de expertos en redes sociales comprendió rápidamente
              nuestras necesidades y objetivos, y desarrolló una estrategia
              personalizada que nos ha permitido alcanzar resultados
              excepcionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCards;
