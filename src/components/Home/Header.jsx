import { Link } from "react-router-dom";
import { Moon, Sun, Menu, Newspaper} from "lucide-react";
import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const localLogin = localStorage.getItem('isLoggedIn');
      const sessionLogin = sessionStorage.getItem('isLoggedIn');
      setIsLoggedIn(localLogin === 'true' || sessionLogin === 'true');
    };

    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <header className="bg-base-100 shadow-lg backdrop-blur-sm bg-opacity-90 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="avatar">
              <div className="w-10 h-10 mask mask-hexagon bg-primary">
                <img src="/logo.jpeg" alt="Logo" className="object-cover" />
              </div>
            </div>
            <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Colegio Bernabé
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              {isLoggedIn ? (
                <>
                  <Link to="/listnewpaper" className="btn btn-ghost btn-sm gap-2">
                    <Newspaper className="w-4 h-4" />
                    Noticias
                  </Link>
                  <button onClick={handleLogout} className="btn btn-ghost btn-sm">
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-ghost btn-sm">
                    Iniciar Sesión
                  </Link>
                  <Link to="/register" className="btn btn-primary btn-sm">
                    Registrarse
                  </Link>
                </>
              )}
              <label className="swap swap-rotate btn btn-ghost btn-sm btn-circle">
                <input type="checkbox" className="theme-controller" value="dark" />
                <Sun className="swap-on w-4 h-4" />
                <Moon className="swap-off w-4 h-4" />
              </label>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <label className="swap swap-rotate btn btn-ghost btn-sm btn-circle">
              <input type="checkbox" className="theme-controller" value="dark" />
              <Sun className="swap-on w-4 h-4" />
              <Moon className="swap-off w-4 h-4" />
            </label>
            <button className="btn btn-ghost btn-circle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-base-200">
            <ul className="flex flex-col space-y-2">
              <li><Link to="/about" className="btn btn-ghost btn-sm btn-block justify-start">Nosotros</Link></li>
              <li><Link to="/programs" className="btn btn-ghost btn-sm btn-block justify-start">Programas</Link></li>
              <li><Link to="/admissions" className="btn btn-ghost btn-sm btn-block justify-start">Admisiones</Link></li>
              {isLoggedIn ? (
                <>
                  <li>
                    <Link to="/listnewpaper" className="btn btn-ghost btn-sm btn-block justify-start gap-2">
                      <Newspaper className="w-4 h-4" />
                      Noticias
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="btn btn-ghost btn-sm btn-block justify-start">
                      Cerrar Sesión
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li><Link to="/login" className="btn btn-ghost btn-sm btn-block justify-start">Iniciar Sesión</Link></li>
                  <li><Link to="/register" className="btn btn-primary btn-sm btn-block justify-start">Registrarse</Link></li>
                </>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;