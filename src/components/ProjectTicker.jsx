import { Link } from "react-router-dom";

const projects = [
  { name: "DVM Website", path: "/projects/DVMProject" },
  { name: "Berrifin", path: "/projects/berrifin" },
  { name: "Arabahub", path: "/projects/arabahub" },
  { name: "App del tiempo", path: "/projects/weather-app" },
  { name: "Fullstack Project", path: "/projects/fullstack" },
];

const ProjectTicker = () => {
  const repeated = [...projects, ...projects]; // duplicado para el loop visual

  return (
    <div className="overflow-hidden w-full mb-16">
      <div className="marquee gap-16 text-6xl font-kurenaido whitespace-nowrap">
        {repeated.map((project, index) => (
          <Link
            key={index}
            to={project.path}
            className="inline-block px-4 text-black"
          >
            {project.name} ↗
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectTicker;
