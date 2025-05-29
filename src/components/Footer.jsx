const Footer = () => {
  return (
    <footer className="container w-full flex flex-col md:flex-row justify-between items-center px-6 py-4 text-sm text-neutral-600">
      {/* IZQUIERDA: enlaces externos */}
      <div className="font-francois text-lg flex space-x-4 mb-2 md:mb-0">
        <a href="/cv.pdf" download className="hover:underline">
          CV
        </a>
        <a
          href="https://github.com/Monzzi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/montsepilo/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>

      {/* DERECHA: copyright */}
      <div className="font-kurenaido text-lg text-neutral-500">
        © MonzziDev 2025
      </div>
    </footer>
  );
};

export default Footer;
