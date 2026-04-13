import Image from "next/image";
import Button from "../ui/Button";

export default function Advisory() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">
              Asesoría Gastronómica
            </h2>
            <p className="mt-6 text-brand-gray max-w-lg mx-auto md:mx-0">
              ¿Tenés un proyecto gastronómico y no sabés cómo llevarlo a cabo?
              ¿Tenés dudas sobre costos, producción o equipo? Nos encontramos
              en una videollamada 1 a 1 y seguimos en contacto por WhatsApp.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
              <div>
                <p className="text-2xl font-bold text-brand-dark">$130.000</p>
                <p className="text-sm text-brand-gray">Pesos argentinos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-dark">U$S100</p>
                <p className="text-sm text-brand-gray">Dólares estadounidenses</p>
              </div>
            </div>
            <div className="mt-8 flex justify-center md:justify-start">
              <Button href="/asesoria">Más información</Button>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex-1 relative w-full max-w-md md:max-w-none">
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
              <Image
                src="/images/asesoria.webp"
                alt="Marcos Di Cesare - Asesoría Gastronómica"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}