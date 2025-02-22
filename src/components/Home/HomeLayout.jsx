import { useState } from 'react';
import NewsGrid from './NewsGrid';
import CreateNewsModal from './CreateNewsModal';
import { Plus } from 'lucide-react';

function HomeLayout() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-base-200 py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Noticias y Anuncios
                    </h1>
                    <button
                        className="btn btn-primary"
                        onClick={() => setIsCreateModalOpen(true)}
                    >
                        <Plus className="w-5 h-5 mr-2" />
                        Nueva Noticia
                    </button>
                </div>

                <NewsGrid />

                <CreateNewsModal
                    isOpen={isCreateModalOpen}
                    onClose={() => setIsCreateModalOpen(false)}
                />
            </div>
        </div>
    );
}

export default HomeLayout;