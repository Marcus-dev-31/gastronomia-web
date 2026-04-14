import Image from "next/image";
import { books } from "@/data/books";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Libros | Marcos Di Cesare",
  description:
    "Libros de Marcos Di Cesare: Anti Recetas y Sos infeliz y es tu culpa.",
};

export default function LibrosPage() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Libros"
          subtitle="Cocina, vida y honestidad. Dos libros que reflejan la filosofía de Marcos."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {books.map((book) => (
            <div
              key={book.slug}
              className="bg-brand-light rounded-2xl overflow-hidden shadow-sm border border-brand-dark/5"
            >
              <div className="relative aspect-3/4 w-full bg-brand-dark">
  <Image
    src={book.image}
    alt={book.name}
    fill
    className="object-contain p-4"
  />
</div>
              <div className="p-6">
                <h2 className="font-serif text-2xl text-brand-dark">
                  {book.name}
                </h2>
                <p className="mt-3 text-brand-gray leading-relaxed">
                  {book.description}
                </p>
                {book.price && (
                  <p className="mt-4 text-xl font-bold text-brand-dark">
                    ${book.price.toLocaleString("es-AR")}
                  </p>
                )}
                <div className="mt-4">
                  <Button href={book.purchaseLink}>Comprar</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}