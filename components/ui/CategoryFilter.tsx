"use client";

import { CourseCategory } from "@/types";

interface CategoryFilterProps {
  categories: CourseCategory[];
  activeCategory: CourseCategory | "Todos";
  onCategoryChange: (category: CourseCategory | "Todos") => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <button
        onClick={() => onCategoryChange("Todos")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeCategory === "Todos"
            ? "bg-brand-gold text-white"
            : "bg-brand-dark/5 text-brand-gray hover:bg-brand-dark/10"
        }`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category
              ? "bg-brand-gold text-white"
              : "bg-brand-dark/5 text-brand-gray hover:bg-brand-dark/10"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}