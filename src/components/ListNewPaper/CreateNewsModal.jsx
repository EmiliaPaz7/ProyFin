import { useState } from 'react';
import { X } from 'lucide-react';
import CreatNewPaper from '../../services/ApiCreatNoticia';

function CreateNewsModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        title: '',
        main: '',
        image: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleNewPaper();
        onClose();
    };

    if (!isOpen) return null;

    const handleNewPaper = async () => {
        try {
            await CreatNewPaper(formData);
        } catch (error) {
            console.error("Error en el registro:", error);
        }
    };

    return (
        <div className="modal modal-open">
            <div className="modal-box max-w-2xl">
                <button
                    className="btn btn-circle btn-ghost absolute right-2 top-2"
                    onClick={onClose}
                >
                    <X className="w-5 h-5" />
                </button>

                <h3 className="font-bold text-2xl mb-6">Crear Nueva Noticia</h3>

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
                            value={formData.main}
                            onChange={(e) => setFormData({ ...formData, main: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Imagen</span>
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-bordered w-full"
                            accept="image/*"
                            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                            required
                        />
                    </div>

                    <div className="modal-action">
                        <button type="button" className="btn btn-ghost" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Crear Noticia
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateNewsModal;
