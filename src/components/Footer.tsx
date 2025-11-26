import { Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="text-center">
        <div className="flex justify-center items-center gap-2 text-2xl font-bold mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg rotate-45" />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Soranny
          </span>
        </div>

        <p className="text-gray-400">Desarrollando el futuro ✨</p>

        <div className="flex justify-center items-center gap-2 mt-4 text-gray-400">
          <span>Hecho con</span>
          <span className="text-red-500">❤️</span>
          <span>y mucho</span>
          <Coffee className="text-yellow-500" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
