import Image from "next/image";
import Link from "next/link";
import { CourseCategory } from "@/types";

interface CourseCardProps {
  slug: string;
  name: string;
  description: string;
  price: number;
  previousPrice?: number;
  category: CourseCategory;
  image: string;
  imagePosition?: string;
}

export default function CourseCard({
  slug,
  name,
  description,
  price,
  previousPrice,
  category,
  image,
  imagePosition = "top",
}: CourseCardProps) {
  return (
    <Link
      href={`/cursos/${slug}`}
      className="group bg-white rounded-lg overflow-hidden shadow-sm border border-brand-dark/5 hover:shadow-md transition-shadow"
    >
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          style={{ objectPosition: imagePosition || "top" }}
        />
        <span className="absolute top-3 left-3 bg-brand-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <h3 className="font-serif text-lg text-brand-dark font-semibold">
          {name}
        </h3>
        <p className="mt-2 text-sm text-brand-gray line-clamp-2">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-lg font-bold text-brand-dark">
            ${price.toLocaleString("es-AR")}
          </span>
          {previousPrice && (
            <span className="text-sm text-brand-gray line-through">
              ${previousPrice.toLocaleString("es-AR")}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
