import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-base-300 text-base-content">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {/* Info Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-10 h-10 mask mask-hexagon bg-primary">
                  <img src="/logo.jpeg" alt="Logo" className="object-cover" />
                </div>
              </div>
              <h2 className="text-lg font-bold">Colegio Bernabé</h2>
            </div>
            <p className="text-sm text-base-content/70">
              Formando líderes innovadores con tecnología de vanguardia y valores eternos
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="footer-title text-primary">Contacto</h3>
            <div className="flex flex-col gap-3">
              <a href="https://maps.google.com" className="link link-hover flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" /> Calle Principal, Ciudad
              </a>
              <a href="tel:+123456789" className="link link-hover flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" /> (123) 456-7890
              </a>
              <a href="mailto:info@colegiobernabe.edu" className="link link-hover flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" /> info@colegiobernabe.edu
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="footer-title text-primary">Enlaces Rápidos</h3>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="link link-hover text-sm">Sobre Nosotros</Link>
              <Link to="/admissions" className="link link-hover text-sm">Admisiones</Link>
              <Link to="/calendar" className="link link-hover text-sm">Calendario Académico</Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="footer-title text-primary">Redes Sociales</h3>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com/colegiobernabe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-primary-content"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/colegiobernabe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-primary-content"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/colegiobernabe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-primary-content"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer footer-center p-4 border-t border-base-content/10 text-sm">
          <p>© {new Date().getFullYear()} Colegio Fiscomisional Bernabé de Larraul - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;