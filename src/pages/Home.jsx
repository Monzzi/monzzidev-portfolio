import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectsData";

const Home = () => {
  return (
    <section className="min-h-screen w-full pt-10 pb-10">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Texto descriptivo ocupando todo el ancho */}
        <div className="mb-25">
          <p className="text-3xl ml-80 text-start leading-relaxed font-kurenaido">
            Frontend developer. Combino lógica, diseño y sensibilidad para crear
            aplicaciones con alma y que resuelven problemas.
          </p>
        </div>

        {/* Layout escritorio tipo collage */}
        <div className="relative hidden md:block min-h-[1800px]">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              title={project.title}
              description={project.description}
              path={project.path}
              style={project.style} // 👈 con estilo personalizado
              image={project.image}
            />
          ))}
        </div>

        {/* Layout móvil: una debajo de otra, sin estilos personalizados */}
        <div className="md:hidden flex flex-col gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              title={project.title}
              description={project.description}
              path={project.path}
              style="" // 👈 estilo vacío, para que se vea normal en móvil
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
