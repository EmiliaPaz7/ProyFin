import React from 'react';
import RegisterLayout from '../components/Register/RegisterLayout';
import { GraduationCap } from 'lucide-react';

function Register() {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      {/* Header de la página de registro */}
      <div className="text-center pt-8">
        <div className="flex items-center justify-center gap-3">
          <GraduationCap className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent p-1">
            Colegio Bernabé de Larraul
          </h1>
        </div>
      </div>
      
      {/* Contenedor del formulario de registro */}
      <main className="flex-grow container mx-auto">
        <RegisterLayout />
      </main>

      {/* Footer simple */}
      <footer className="text-center text-sm text-base-content/60">
        <p>© {new Date().getFullYear()} Colegio Fiscomisional Bernabé de Larraul</p>
      </footer>
    </div>
  );
}

export default Register;