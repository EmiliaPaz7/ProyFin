import { useState } from 'react';
import { Edit2, Trash2, Clock, Loader2, ChevronDown } from 'lucide-react';
import EditNewsModal from './EditNewsModal';
import DeleteNewsPaper from '../../services/ApiDeleteNoticia';

function NewsCard({ news, onDelete }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleDelete = async () => {
        if (showDeleteConfirm) {
            try {
                setIsDeleting(true);
                await DeleteNewsPaper(news._id);
                onDelete(news._id);
            } catch (error) {
                console.error('Error deleting news:', error);
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
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <figure className="relative overflow-hidden">
                <img
                    src={news.newsimage?.url}
                    alt={news.newsimage?.name}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-300/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        className="btn btn-circle btn-sm glass backdrop-blur-sm text-base-100 hover:bg-primary hover:text-primary-content"
                        onClick={() => setIsEditModalOpen(true)}
                        disabled={isDeleting}
                    >
                        <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                        className={`btn btn-circle btn-sm glass backdrop-blur-sm
                            ${showDeleteConfirm ? 'bg-error text-error-content' : 'text-base-100'}
                            hover:bg-error hover:text-error-content`}
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
                <h2 className="card-title text-primary font-bold">
                    {news.title}
                </h2>
                <div className={`relative ${isExpanded ? '' : 'max-h-24 overflow-hidden'}`}>
                    <p className="text-base-content/80">{news.main}</p>
                    {!isExpanded && (
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-base-100 to-transparent" />
                    )}
                </div>
                <button
                    className="btn btn-ghost btn-sm w-full mt-2"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <ChevronDown className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                <div className="flex items-center gap-2 text-sm text-base-content/60 mt-2">
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