function PersonalInfoForm({ formData, updateFormData, onNext }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      onNext();
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Nombres</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={formData.nombres}
            onChange={(e) => updateFormData({ nombres: e.target.value })}
            required
          />
        </div>
  
        <div className="form-control">
          <label className="label">
            <span className="label-text">Apellidos</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={formData.apellidos}
            onChange={(e) => updateFormData({ apellidos: e.target.value })}
            required
          />
        </div>
  
        <div className="form-control">
          <label className="label">
            <span className="label-text">Fecha de Nacimiento</span>
          </label>
          <input
            type="date"
            className="input input-bordered w-full"
            value={formData.fechaNacimiento}
            onChange={(e) => updateFormData({ fechaNacimiento: e.target.value })}
            required
          />
        </div>
  
        <div className="form-control">
          <label className="label">
            <span className="label-text">Género</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={formData.genero}
            onChange={(e) => updateFormData({ genero: e.target.value })}
            required
          >
            <option value="">Seleccionar</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
  
        <div className="card-actions justify-end">
          <button type="submit" className="btn btn-primary">
            Siguiente
          </button>
        </div>
      </form>
    );
  }
  
  export default PersonalInfoForm;
  