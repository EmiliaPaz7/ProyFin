import React from 'react';
import LoginLayout from '../components/Login/LoginLayout';
import { GraduationCap } from 'lucide-react';

function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      {/* Header de la página */}
      <div className="text-center py-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <GraduationCap className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent p-1">
            Colegio Bernabé de Larraul
          </h1>
        </div>
      </div>

      {/* Contenedor del formulario de login */}
      <main className="flex-grow container mx-auto px-4 pb-12">
        <LoginLayout />
      </main>

      {/* Footer simple */}
      <footer className="py-4 text-center text-sm text-base-content/60">
        <p>© {new Date().getFullYear()} Colegio Fiscomisional Bernabé de Larraul</p>
      </footer>
    </div>
  );
}

export default Login;