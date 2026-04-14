import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight">
              Aprendé a cocinar
              <span className="text-brand-gold"> de verdad</span>
            </h1>
            <p className="mt-6 text-lg text-brand-gray max-w-lg mx-auto md:mx-0">
              Cursos online y presenciales de panadería, cocina y gestión
              gastronómica. Más de 20 años de experiencia formando cocineros y
              emprendedores.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="/cursos">Ver Cursos</Button>
              <Button href="/asesoria" variant="outline">
                Asesoría Personalizada
              </Button>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex-1 relative w-full max-w-md md:max-w-none">
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
              <Image
                src="/images/hero.webp"
                alt="Marcos Di Cesare cocinando"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}