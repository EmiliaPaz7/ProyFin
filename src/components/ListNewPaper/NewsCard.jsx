import { useState } from 'react';
import { Edit2, Trash2, Clock, Loader2 } from 'lucide-react';
import EditNewsModal from './EditNewsModal';
import DeleteNewsPaper from '../../services/ApiDeleteNoticia';

function NewsCard({ news, onDelete }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (showDeleteConfirm) {
            try {
                setIsDeleting(true);
                await DeleteNewsPaper(news._id); // Asumiendo que el ID está en news._id
                onDelete(news._id);
            } catch (error) {
                console.error('Error deleting news:', error);
                // Aquí podrías agregar una notificación de error si lo deseas
            } finally {
                setIsDeleting(false);
                setShowDeleteConfirm(false);
            }
        } else {
            setShowDeleteConfirm(true);
            setTimeout(() => setShowDeleteConfirm(false), 3000);
        }
    };

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <figure className="relative">
                <img
                    src={news.newsimage?.url}
                    alt={news.newsimage?.name}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                    <button
                        className="btn btn-circle btn-sm btn-ghost bg-base-100/80 hover:bg-primary"
                        onClick={() => setIsEditModalOpen(true)}
                        disabled={isDeleting}
                    >
                        <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                        className={`btn btn-circle btn-sm btn-ghost 
                            ${showDeleteConfirm ? 'bg-error text-white' : 'bg-base-100/80'}
                            hover:bg-error hover:text-white`}
                        onClick={handleDelete}
                        disabled={isDeleting}
                    >
                        {isDeleting ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <Trash2 className="w-4 h-4" />
                        )}
                    </button>
                </div>
            </figure>

            <div className="card-body">
                <h2 className="card-title text-primary">{news.title}</h2>
                <p className="text-base-content/70">{news.main}</p>
                <div className="flex items-center gap-2 text-sm text-base-content/60 mt-4">
                    <Clock className="w-4 h-4" />
                    <span>{new Date(news.createdAt).toLocaleDateString()}</span>
                </div>
            </div>

            <EditNewsModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                news={news}
            />
        </div>
    );
}

export default NewsCard;