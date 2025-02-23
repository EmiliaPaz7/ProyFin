import { useState } from 'react';
import { Clock, ChevronDown } from 'lucide-react';

function NewsCard({ news, onDelete }) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <figure className="relative overflow-hidden">
                <img
                    src={news.newsimage?.url}
                    alt={news.newsimage?.name}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-300/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
        </div>
    );
}

export default NewsCard;