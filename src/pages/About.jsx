import React from "react";

const socials = [
  { name: "LinkedIn", url: "https://linkedin.com/montsepilo" },
  { name: "GitHub", url: "https://github.com/Monzzi" },
];

const experience = [
  { name: "Stage en Data Value Management", url: "https://www.linkedin.com/company/data-value-management" },
  { name: "Bootcamp intensivo Albañiles Digitales", url: "https://veridas.com/es/albaniles-digitales/" },
  { name: "Proyecto frontend DVM", url: "https://dvm-website.vercel.app/" },
  { name: "Proyectos frontend Berrifin", url: "https://berrifin.eus/" },
];

const About = () => {
  return (
    <section className="max-h-screen w-full py-16">
      <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* IZQUIERDA: TEXTO + LISTAS */}
        <div>
          <p className="font-kurenaido text-3xl md:text-4xl font-light leading-snug mb-12">
            Aprendí a desarrollar como aprendo todo: con pasión, observando, practicando,
            afinando. Hoy diseño sitios que piensan en quien los usa, con
            estructuras limpias, estética cuidada y una claridad que nace de la
            empatía.
          </p>

          <div className="flex flex-col sm:flex-row gap-18">
            {/* Socials */}
            <div>
              <h2 className="text-xl font-francois mb-4">Socials</h2>
              <ul className="space-y-2">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-fancy"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xl font-francois mb-4">Experience</h2>
              <ul className="space-y-2">
                {experience.map((item, i) => (
                  <li key={i}>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-fancy"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <span className="link-fancy cursor-default">
                        {item.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* DERECHA: FOTO PRINCIPAL */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/Profile_2.png"
            alt="Montse perfil"
            className="w-80 h-80 md:w-120 md:h-120 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
