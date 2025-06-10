import React from "react";
import { Link } from "react-router-dom";
import ProjectTicker from "../../components/ProjectTicker";

const DVMProject = () => {
  return (
    <main>
      {/* Imagen grande destacada */}
      <section className="relative w-full h-[80vh] mb-16">
        <img
          src="/DVM_project.png" // Asegúrate de tener esta imagen en public/
          alt="Portada del proyecto DVM"
          className="w-full h-full object-cover opacity-80"
        />
      </section>

      {/* Bloque doble: año y título a la izquierda, descripción a la derecha */}
      <section className="container font-kurenaido flex flex-col grid md:grid-cols-2 gap-10 items-start">
        {/* Columna izquierda: año y nombre */}
        <div className="text-xl text-gray-500 leading-relaxed">
          <p>2025 – Frontend Development</p>
          <p className="mt-2 font-semibold text-lg text-black">DVM Website</p>
        </div>

        {/* Columna derecha: descripción general */}
        <div className="text-lg leading-relaxed text-gray max-w-prose">
          Durante mis prácticas en Data Value Management, lideré el rediseño
          completo de su web corporativa. Mi objetivo fue construir una
          presencia digital que reflejara solidez, profesionalidad y un enfoque
          claro en datos.
          <br />
          <br />
          El trabajo incluyó la migración tecnológica desde Mantine a Tailwind,
          la organización de los componentes, animaciones con Framer Motion y la
          mejora del rendimiento general del sitio.
        </div>
      </section>

      <section className="container flex flex-col items-center md:flex-row justify-center gap-30 mt-16">
        {/* Imagen izquierda más ancha */}
        <div className="w-full md:w-[50%] h-[520px] overflow-hidden rounded-lg shadow-lg">
          <img
            src="/DVM_project.png"
            alt="Versión grande"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen derecha más estrecha */}
        <div className="w-full md:w-[25%] h-[520px] overflow-hidden rounded-lg shadow-lg">
          <img
            src="/DVM_movil.svg"
            alt="Versión móvil"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <div className="mt-16 mx-auto px-6 max-w-4xl leading-relaxed text-gray">
        Durante mis prácticas en Data Value Management, lideré el rediseño
        completo de su web corporativa. Mi objetivo fue construir una presencia
        digital que reflejara solidez, profesionalidad y un enfoque claro en
        datos. <br />
        <br />
        El trabajo incluyó la migración tecnológica desde Mantine a Tailwind, la
        organización de los componentes, animaciones con Framer Motion y la
        mejora del rendimiento general del sitio.
      </div>

      <section className="relative w-full h-[80vh] mt-16 mb-16">
        <img
          src="/DVM_project.png" // Asegúrate de tener esta imagen en public/
          alt="Portada del proyecto DVM"
          className="w-full h-full object-cover opacity-80"
        />
      </section>

      <div className="mt-16 mx-auto px-6 max-w-4xl text-lg leading-relaxed text-gray">
        Durante mis prácticas en Data Value Management, lideré el rediseño
        completo de su web corporativa. Mi objetivo fue construir una presencia
        digital que reflejara solidez, profesionalidad y un enfoque claro en
        datos. <br />
        <br />
        El trabajo incluyó la migración tecnológica desde Mantine a Tailwind, la
        organización de los componentes, animaciones con Framer Motion y la
        mejora del rendimiento general del sitio.
      </div>

      <section className="container mt-16">
        <ProjectTicker />
      </section>
    </main>
  );
};

export default DVMProject;
