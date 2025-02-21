import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function RegistrationSuccess() {
  return (
    <div className="text-center py-8">
      <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
      <h3 className="text-2xl font-bold mb-4">¡Registro Exitoso!</h3>
      <p className="text-base-content/70 mb-8">
        Tu cuenta ha sido creada correctamente. Ya puedes iniciar sesión en el sistema.
      </p>
      <Link to="/login" className="btn btn-primary">
        Ir a Iniciar Sesión
      </Link>
    </div>
  );
}

export default RegistrationSuccess;