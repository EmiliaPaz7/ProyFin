import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-base-300 text-base-content">
      <div className="container mx-auto px-4">
        <div className="footer py-10">
          <div>
            <span className="footer-title text-primary">Contacto</span>
            <a href="https://maps.google.com" className="link link-hover flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Calle Principal, Ciudad
            </a>
            <a href="tel:+123456789" className="link link-hover flex items-center gap-2">
              <Phone className="w-4 h-4" /> (123) 456-7890
            </a>
            <a href="mailto:info@colegiobernabe.edu" className="link link-hover flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@colegiobernabe.edu
            </a>
          </div>
          <div>
            <span className="footer-title text-primary">Enlaces Rápidos</span>
            <Link to="/about" className="link link-hover">Sobre Nosotros</Link>
            <Link to="/admissions" className="link link-hover">Admisiones</Link>
            <Link to="/calendar" className="link link-hover">Calendario Académico</Link>
          </div>
          <div>
            <span className="footer-title text-primary">Redes Sociales</span>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/colegiobernabe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-ghost btn-circle"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://twitter.com/colegiobernabe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-ghost btn-circle"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://instagram.com/colegiobernabe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-ghost btn-circle"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer footer-center p-4 border-t border-base-content/10">
          <p>© {new Date().getFullYear()} Colegio Fiscomisional Bernabé de Larraul - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;