import { GraduationCap } from 'lucide-react';

function LoginHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <GraduationCap className="w-8 h-8 text-primary" />
        </div>
      </div>
      <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Bienvenido de Nuevo
      </h2>
      <p className="text-base-content/70 mt-2">
        Ingresa a tu cuenta para continuar
      </p>
    </div>
  );
}

export default LoginHeader;