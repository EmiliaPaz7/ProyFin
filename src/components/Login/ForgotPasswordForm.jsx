import { ArrowLeft, Send } from 'lucide-react';

function ForgotPasswordForm({ onBack }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para recuperar contraseña
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Recuperar Contraseña</h3>
        <p className="text-base-content/70 text-sm">
          Ingresa tu correo electrónico y te enviaremos las instrucciones para recuperar tu contraseña.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Correo Electrónico</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="space-y-4">
          <button type="submit" className="btn btn-primary w-full">
            <Send className="w-4 h-4 mr-2" />
            Enviar Instrucciones
          </button>
          
          <button
            type="button"
            className="btn btn-ghost w-full"
            onClick={onBack}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;