function AccountInfoForm({ formData, updateFormData, onNext, onPrev }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Nombre de Usuario</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full"
          value={formData.usuario}
          onChange={(e) => updateFormData({ usuario: e.target.value })}
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Contraseña</span>
        </label>
        <input
          type="password"
          className="input input-bordered w-full"
          value={formData.password}
          onChange={(e) => updateFormData({ password: e.target.value })}
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Confirmar Contraseña</span>
        </label>
        <input
          type="password"
          className="input input-bordered w-full"
          value={formData.confirmPassword}
          onChange={(e) => updateFormData({ confirmPassword: e.target.value })}
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Código de Registro</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full"
          value={formData.registrationCode}
          onChange={(e) => updateFormData({ registrationCode: e.target.value })}
          required
          placeholder="Ingrese su código de autorización"
        />
      </div>

      <div className="card-actions justify-between">
        <button type="button" className="btn btn-ghost" onClick={onPrev}>
          Anterior
        </button>
        <button type="submit" className="btn btn-primary">
          Finalizar
        </button>
      </div>
    </form>
  );
}

export default AccountInfoForm;