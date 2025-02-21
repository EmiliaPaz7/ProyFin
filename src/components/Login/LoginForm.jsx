import { useState } from 'react';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

function LoginForm({ onForgotPassword }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Login attempt:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Correo Electrónico</span>
        </label>
        <input
          type="email"
          name="email"
          className="input input-bordered w-full"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Contraseña</span>
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="input input-bordered w-full pr-10"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/70 hover:text-primary"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="checkbox checkbox-primary checkbox-sm"
          />
          <span className="label-text ml-2">Recordarme</span>
        </label>
        <button
          type="button"
          className="text-sm text-primary hover:underline"
          onClick={onForgotPassword}
        >
          ¿Olvidaste tu contraseña?
        </button>
      </div>

      <div className="space-y-4">
        <button type="submit" className="btn btn-primary w-full">
          <LogIn className="w-4 h-4 mr-2" />
          Iniciar Sesión
        </button>
        
        <div className="divider">O</div>
        
        <p className="text-center text-sm">
          ¿No tienes una cuenta?{' '}
          <Link to="/register" className="text-primary hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;