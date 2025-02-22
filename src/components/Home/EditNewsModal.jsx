import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

function EditNewsModal({ isOpen, onClose, news }) {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image: null
    });

    useEffect(() => {
        if (news) {
            setFormData({
                title: news.title,
                content: news.content,
                image: null
            });
        }
    }, [news]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí irá la lógica de actualización
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box max-w-2xl">
                <button
                    className="btn btn-circle btn-ghost absolute right-2 top-2"
                    onClick={onClose}
                >
                    <X className="w-5 h-5" />
                </button>

                <h3 className="font-bold text-2xl mb-6">Editar Noticia</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Título</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contenido</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered h-32"
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Nueva Imagen (opcional)</span>
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-bordered w-full"
                            accept="image/*"
                            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                        />
                    </div>

                    <div className="modal-action">
                        <button type="button" className="btn btn-ghost" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Guardar Cambios
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditNewsModal;