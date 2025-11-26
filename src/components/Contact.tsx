// src/components/Contact.tsx
import { useState } from "react";
import GlassCard from "./GlassCard";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const validateEmail = (email: string) => {
    if (!email.includes("@") || !email.includes(".com")) {
      return "El correo debe contener @ y .com";
    }
    return "";
  };

  const validatePhone = (phone: string) => {
    if (!/^[0-9]{10,}$/.test(phone)) {
      return "Debe tener mínimo 10 números";
    }
    return "";
  };

  const handleSubmit = () => {
    const emailError = validateEmail(form.email);
    const phoneError = validatePhone(form.phone);

    if (emailError || phoneError) {
      setErrors({ email: emailError, phone: phoneError });
      return;
    }

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contacto" className="py-32">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Trabajemos{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Juntos
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* INFORMACIÓN */}
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold">soranny@ejemplo.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Teléfono</p>
                  <p className="font-semibold">+57 300 000 0000</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Ubicación</p>
                  <p className="font-semibold">Colombia</p>
                </div>
              </div>
            </div>

            {/* Redes */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/tuusuario"
                target="_blank"
                className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:scale-110 transition"
              >
                <Github />
              </a>

              <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:scale-110 transition"
              >
                <Linkedin />
              </a>

              <a
                href="https://wa.me/573000000000"
                target="_blank"
                className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:scale-110 transition"
              >
                <MessageCircle />
              </a>

              <a
                href="https://instagram.com/tuusuario"
                target="_blank"
                className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:scale-110 transition"
              >
                <Instagram />
              </a>
            </div>

          </GlassCard>

          {/* FORMULARIO */}
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-6">Envíame un Mensaje</h3>

            {sent && (
              <div className="p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-300 mb-4">
                ¡Mensaje enviado exitosamente!
              </div>
            )}

            <div className="space-y-6">

              {/* Nombre */}
              <div>
                <label className="block mb-2">Nombre</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full p-3 bg-white/10 rounded-xl"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    setErrors({ ...errors, email: "" });
                  }}
                  className="w-full p-3 bg-white/10 rounded-xl"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label className="block mb-2">Teléfono</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => {
                    if (/^[0-9]*$/.test(e.target.value)) {
                      setForm({ ...form, phone: e.target.value });
                      setErrors({ ...errors, phone: "" });
                    }
                  }}
                  className="w-full p-3 bg-white/10 rounded-xl"
                  placeholder="10 o más números"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-2">{errors.phone}</p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label className="block mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full p-3 bg-white/10 rounded-xl"
                  placeholder="Cuéntame tu idea..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center gap-2"
              >
                <Send /> Enviar Mensaje
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
