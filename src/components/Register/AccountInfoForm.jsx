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
            <span className="label-text">Tipo de Usuario</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={formData.tipoUsuario}
            onChange={(e) => updateFormData({ tipoUsuario: e.target.value })}
            required
          >
            <option value="estudiante">Estudiante</option>
            <option value="profesor">Profesor</option>
            <option value="administrativo">Administrativo</option>
          </select>
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