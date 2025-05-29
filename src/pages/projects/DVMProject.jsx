const DVMProject = () => {
  return (
    <section className="min-h-screen bg-white text-darkblue px-6 py-20 font-body">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Data Value Management</h1>
        <p className="mb-4 text-lg">
          Rediseño completo de la web corporativa de DVM como parte de mis
          prácticas profesionales. Usé React, Tailwind y Vite para crear una
          experiencia moderna, accesible y totalmente responsive.
        </p>
        <p className="mb-8">
          Implementé animaciones, optimización de rendimiento (Lighthouse 90+),
          y efectos visuales con Framer Motion. El resultado: una web profesional
          que refleja los valores de la empresa.
        </p>

        <a
          href="https://www.datavaluemanagement.es"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightblue underline hover:text-mediumblue"
        >
          Ver sitio web
        </a>
      </div>
    </section>
  );
};

export default DVMProject;
