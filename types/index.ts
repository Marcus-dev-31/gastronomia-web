export type CategoriaOnline =
  | "Panadería"
  | "Cocina"
  | "Pastelería"
  | "Gestión";

export interface CursoOnline {
  slug: string;
  nombre: string;
  descripcion: string;
  descripcionLarga: string;
  precio: number;
  precioAnterior?: number;
  precioDolar?: number;
  categoria: CategoriaOnline;
  imagen: string;
  acceso: string;
  destacado: boolean;
  aprendizajes: string[];
  orientadoPara: string;
  requerimientos: string;
  temario: string[];
  recursos: string[];
}

export interface CursoPresencial {
  slug: string;
  nombre: string;
  descripcion: string;
  descripcionLarga: string;
  precio: number;
  precioDolar: number;
  imagen: string;
  fecha: string;
  horario: string;
  ubicacion: string;
  direccion: string;
  cupos: number;
  aprendizajes: string[];
  incluye: string[];
}

export interface Libro {
  slug: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  linkCompra: string;
  precio?: number;
}

export interface Testimonio {
  id: number;
  nombre: string;
  texto: string;
  estrellas: number;
  curso: string;
}

export interface VideoYouTube {
  id: string;
  titulo: string;
}

export interface StatItem {
  valor: string;
  label: string;
}