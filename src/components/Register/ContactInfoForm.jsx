function ContactInfoForm({ formData, updateFormData, onNext, onPrev }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      onNext();
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            required
          />
        </div>
  
        <div className="form-control">
          <label className="label">
            <span className="label-text">Teléfono</span>
          </label>
          <input
            type="tel"
            className="input input-bordered w-full"
            value={formData.telefono}
            onChange={(e) => updateFormData({ telefono: e.target.value })}
            required
          />
        </div>
  
        <div className="form-control">
          <label className="label">
            <span className="label-text">Dirección</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={formData.direccion}
            onChange={(e) => updateFormData({ direccion: e.target.value })}
            required
          />
        </div>
  
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ciudad</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={formData.ciudad}
            onChange={(e) => updateFormData({ ciudad: e.target.value })}
            required
          />
        </div>
  
        <div className="card-actions justify-between">
          <button type="button" className="btn btn-ghost" onClick={onPrev}>
            Anterior
          </button>
          <button type="submit" className="btn btn-primary">
            Siguiente
          </button>
        </div>
      </form>
    );
  }
  
  export default ContactInfoForm;
  