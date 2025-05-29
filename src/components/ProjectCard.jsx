import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, path, style, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67],
        delay: index * 0.25,
      }}
      className={`flex flex-col gap-4 ${style}`}
    >
      {/* Imagen con link */}
      <Link to={path} className="block relative overflow-hidden group h-full">
        <div
          className="w-full h-full bg-contain bg-no-repeat bg-center relative shadow-lg transition-all duration-700 group-hover:scale-105 group-hover:rotate-[-1deg] group-hover:contrast-125 group-hover:saturate-150"
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
