import { Link } from "react-router-dom";
import { Moon, Sun, Menu } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-base-100 shadow-lg backdrop-blur-sm bg-opacity-90 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="avatar">
              <div className="w-12 h-12 mask mask-hexagon bg-primary">
                <img
                  src="/logo.jpeg"
                  alt="Logo del Colegio"
                  className="object-cover"
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Colegio Bernabé de Larraul
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li>
                <Link 
                  to="/about" 
                  className="link link-hover text-base-content hover:text-primary transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link 
                  to="/programs" 
                  className="link link-hover text-base-content hover:text-primary transition-colors"
                >
                  Programas
                </Link>
              </li>
              <li>
                <Link 
                  to="/login" 
                  className="btn btn-ghost btn-sm"
                >
                  Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link 
                  to="/register" 
                  className="btn btn-primary btn-sm"
                >
                  Registrarse
                </Link>
              </li>
              <li>
                <label className="swap swap-rotate">
                  <input type="checkbox" className="theme-controller" value="dark" />
                  <Sun className="swap-on w-5 h-5" />
                  <Moon className="swap-off w-5 h-5" />
                </label>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="btn btn-ghost md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  to="/about" 
                  className="block link link-hover text-base-content hover:text-primary"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link 
                  to="/programs" 
                  className="block link link-hover text-base-content hover:text-primary"
                >
                  Programas
                </Link>
              </li>
              <li>
                <Link 
                  to="/login" 
                  className="btn btn-ghost btn-block"
                >
                  Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link 
                  to="/register" 
                  className="btn btn-primary btn-block"
                >
                  Registrarse
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
export default Header;