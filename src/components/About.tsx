// src/components/About.tsx
import GlassCard from "./GlassCard";
import { Sparkles, Star } from "lucide-react";
import SkillsGrid from "./SkillsGrid";

const About = () => {
  return (
    <section id="sobre-mí" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Sobre{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mí
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <GlassCard className="md:col-span-2 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-purple-400" size={26} />
              <h3 className="text-2xl font-bold">Mi Historia</h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Soy una desarrolladora frontend apasionada por el diseño moderno,
              la experiencia del usuario y las interfaces bien hechas.
            </p>

            <p className="text-gray-300 leading-relaxed mt-4">
              Trabajo con React, TypeScript, TailwindCSS y metodologías de
              desarrollo profesional.
            </p>
          </GlassCard>

          <GlassCard className="p-8 flex flex-col items-center justify-center">
            <Star className="text-yellow-400 mb-2" size={40} />
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="text-gray-400">Satisfacción del Cliente</p>
          </GlassCard>

          <SkillsGrid />
        </div>
      </div>
    </section>
  );
};

export default About;
