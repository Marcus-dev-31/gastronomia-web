import Image from "next/image";

export default function AboutMarcos() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Imagen */}
          <div className="flex-1 relative w-full max-w-md md:max-w-none">
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
              <Image
                src="/images/hero.webp"
                alt="Marcos Di Cesare"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Texto */}
        <div className="flex-1 text-center md:text-left">
  <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">
    Hola, soy Marcos Di Cesare
  </h2>
  <div className="mt-6 flex flex-col gap-4 text-brand-gray max-w-lg mx-auto md:mx-0">
    <p>
      Desde hace más de dos décadas me dedico a la cocina y la gestión
      gastronómica. Me formé con maestros panaderos en Madrid y
      Barcelona, y experimenté lo que es emprender desde cero.
    </p>
    <p>
      Soy egresado del Instituto Argentino de Gastronomía, donde
      también fui docente durante varios años. Trabajé como chef
      ejecutivo en cadenas de restaurantes y hoy dirijo Carbo Bakery,
      mi panadería de masa madre.
    </p>
    <p>
      Mi misión es ayudar a otros cocineros y emprendedores a evitar
      los obstáculos que yo mismo atravesé, brindando herramientas
      claras y sencillas para profesionalizar su propuesta.
    </p>
    <p>
      Si buscás una mirada honesta, práctica y aplicada sobre la
      gastronomía, estás en el lugar correcto.
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}