"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-brand-dark py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-cream">
          Recibí una receta gratis
        </h2>
        <p className="mt-4 text-brand-cream/60">
          Suscribite y te envío una receta exclusiva de pan de masa madre
          directo a tu email. Además vas a recibir novedades, promociones
          y contenido que no comparto en redes.
        </p>

        {submitted ? (
          <div className="mt-8 bg-brand-gold/10 border border-brand-gold/30 rounded-lg p-6">
            <p className="text-brand-gold font-semibold">
              ¡Gracias por suscribirte! Revisá tu email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email"
              required
              className="flex-1 px-4 py-3 rounded bg-white/10 border border-brand-cream/20 text-brand-cream placeholder:text-brand-cream/40 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand-gold text-white font-semibold rounded hover:bg-brand-gold/90 transition-colors"
            >
              Suscribirme
            </button>
          </form>
        )}
      </div>
    </section>
  );
}