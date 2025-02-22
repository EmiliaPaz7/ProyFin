import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import NewsSkeletonLoader from './NewsSkeletonLoader';

function NewsGrid() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    // Simulación de carga de noticias
    useEffect(() => {
        // Aquí irá tu llamada a la API
        setTimeout(() => {
            setNews([
                {
                    id: 1,
                    title: 'Nuevo Laboratorio de Ciencias',
                    content: 'Inauguramos nuestro nuevo laboratorio...',
                    image: '/placeholder.svg?height=200&width=400',
                    date: '2024-02-22',
                    author: 'Admin'
                },
                // Más noticias...
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    const handleDelete = async (id) => {
        // Aquí irá la lógica de eliminación
        setNews(news.filter(item => item.id !== id));
    };

    if (loading) {
        return <NewsSkeletonLoader />;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
                <NewsCard
                    key={item.id}
                    news={item}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
}

export default NewsGrid;