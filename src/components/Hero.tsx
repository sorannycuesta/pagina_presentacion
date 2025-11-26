// src/components/Hero.tsx
import ProfilePhoto from "./ProfilePhoto";
import { Award, Users, Coffee, Rocket, Mail } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-28">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Texto */}
        <div className="space-y-8">
          <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-gray-400">Hola, soy</span>
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Soranny
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-xl">
            Desarrolladora{" "}
            <span className="text-purple-400 font-semibold">Frontend</span>{" "}
            enfocada en crear interfaces modernas, rápidas y atractivas.
          </p>

          {/* Botones */}
          <div className="flex gap-4">
            <button
              onClick={() => scrollTo("#proyectos")}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center gap-3"
            >
              <Rocket size={20} /> Ver Proyectos
            </button>

            <button
              onClick={() => scrollTo("#contacto")}
              className="px-8 py-4 bg-white/10 border border-white/20 rounded-full flex items-center gap-3"
            >
              <Mail size={20} /> Contactar
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6">
            {[
              { icon: Award, value: "15+", label: "Proyectos" },
              { icon: Users, value: "10+", label: "Clientes" },
              { icon: Coffee, value: "2+", label: "Años Exp." },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="mx-auto text-purple-400" size={26} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FOTO CIRCULAR — TAMAÑO CONTROLADO */}
        <div className="flex justify-center">
          <ProfilePhoto children={undefined} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
