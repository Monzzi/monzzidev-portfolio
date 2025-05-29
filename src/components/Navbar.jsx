import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="container w-full flex justify-between items-center px-6 py-4">
      {/* Enlaces a la izquierda */}
      <div className="font-francois flex space-x-6 text-2xl">
        <Link
          to="/"
          className={`hover:underline ${
            location.pathname.startsWith("/projects") ? "font-semibold" : ""
          }`}
        >
          Work
        </Link>

        <Link
          to="/about"
          className={`hover:underline ${
            location.pathname === "/about" ? "font-semibold" : ""
          }`}
        >
          About
        </Link>
      </div>

      {/* Marca personal a la derecha */}
      <div>
        <Link
          to="/"
          className="text-2xl font-francois font-bold tracking-wide hover:opacity-80"
        >
          MonzziDev
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
