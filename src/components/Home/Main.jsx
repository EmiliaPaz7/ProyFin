import { useState, useEffect } from 'react';
import { Rocket, Brain, Laptop, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import NewsSkeletonLoader from "../ListNewPaper/NewsSkeletonLoader";
import Datos from "../../services/ApiDatos";

function Main() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await Datos('noticias');
        if (newsData) {
          setNews(newsData.slice(0, 3)); // Solo mostrar las 3 últimas noticias
        } else {
          setError('No se pudieron cargar las noticias');
        }
      } catch (err) {
        setError('Error al cargar las noticias: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className="flex-grow">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/school-bg.jpg')",
            filter: "brightness(0.3)",
          }}
        />
        <div className="relative container mx-auto px-4 text-center text-primary-content">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Formando el Futuro
            <span className="block text-2xl md:text-3xl mt-4 text-secondary-content/90">
              Colegio Fiscomisional Bernabé de Larraul
            </span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Educación innovadora con valores eternos para los líderes del mañana
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Últimas Noticias
            </h2>
            <Link to="/listuser" className="btn btn-ghost gap-2 group">
              Ver todas
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {loading ? (
            <NewsSkeletonLoader />
          ) : error ? (
            <div className="alert alert-error shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-bold">¡Oops!</h3>
                <div className="text-xs">{error}</div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((item) => (
                <div key={item._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <figure className="relative overflow-hidden aspect-video">
                    <img
                      src={item.newsimage?.url}
                      alt={item.newsimage?.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base-300/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title text-primary">{item.title}</h3>
                    <p className="text-base-content/80 line-clamp-3">{item.main}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Nuestra Propuesta Educativa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Innovación Continua",
                description: "Metodologías de enseñanza actualizadas y tecnología de vanguardia para un aprendizaje efectivo.",
              },
              {
                icon: <Brain className="w-12 h-12" />,
                title: "Desarrollo Integral",
                description: "Programas personalizados que potencian las capacidades individuales de cada estudiante.",
              },
              {
                icon: <Laptop className="w-12 h-12" />,
                title: "Infraestructura Digital",
                description: "Espacios modernos equipados con la última tecnología educativa.",
              },
            ].map((item, index) => (
              <div key={index} className="card bg-base-200 hover:bg-base-300 transition-all duration-300 hover:-translate-y-2">
                <div className="card-body items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h3 className="card-title text-primary">{item.title}</h3>
                  <p className="text-base-content/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;