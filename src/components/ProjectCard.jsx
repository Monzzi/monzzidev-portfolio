import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, path, style, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} // Solo una vez, cuando se ve un 20% del componente
      transition={{
        duration: 0.9,
        ease: "easeOut",
        delay: index * 0.25,
      }}
      className={`flex flex-col gap-4 ${style}`}
    >
      {/* Imagen con link */}
      <Link to={path} className="block relative overflow-hidden group h-full">
        <div
          className="w-full h-full bg-contain bg-no-repeat bg-center relative shadow-5xl transition-all duration-700"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </Link>

      {/* Bloque de texto debajo */}
      <Link to={path} className="px-2 text-start block group">
        <p className="font-kurenaido text-gray text-2xl leading-relaxed mb-4">
          {description}
        </p>
        <h2 className="font-francois text-gray text-1xl leading-relaxed">
          {title}
        </h2>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
