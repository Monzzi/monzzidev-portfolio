// EntradaDemo.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const effects = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 500 },
    animate: { opacity: 1, y: 5 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 500 },
    animate: { opacity: 1, x: 0 },
  },
  zoom: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  },
  rotate: {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0 },
  },
  combo: {
    initial: { opacity: 0, scale: 0.8, y: 60 },
    animate: { opacity: 1, scale: 1, y: 0 },
  },
  flipX: {
    initial: { opacity: 0, rotateX: -90 },
    animate: { opacity: 1, rotateX: 0 },
  },
  flipY: {
    initial: { opacity: 0, rotateY: -90 },
    animate: { opacity: 1, rotateY: 0 },
  },
  blurIn: {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
  },
  popBounce: {
    initial: { scale: 0.3, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
  skewIn: {
    initial: { opacity: 0, skewY: -10 },
    animate: { opacity: 1, skewY: 0 },
  },
  morphShape: {
  initial: {
    opacity: 0,
    scale: 0.5,
    borderRadius: "100%",
  },
  animate: {
    opacity: 1,
    scale: 1,
    borderRadius: "10%",
  },
},
};

export default function EntradaDemo() {
  const [selected, setSelected] = useState("fade");
  const [key, setKey] = useState(0); // para reiniciar la animación

  return (
    <section className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Prueba de animaciones de entrada
      </h2>

      <select
        className="mb-6 p-2 border border-gray-300 rounded"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {Object.keys(effects).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <button
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setKey((prev) => prev + 1)}
      >
        Repetir
      </button>

      <motion.div
        key={key} // esto fuerza el reinicio
        initial={effects[selected].initial}
        animate={effects[selected].animate}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-10 w-full h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg flex items-center justify-center text-white text-xl font-semibold"
      >
        {selected.toUpperCase()}
      </motion.div>
    </section>
  );
}
