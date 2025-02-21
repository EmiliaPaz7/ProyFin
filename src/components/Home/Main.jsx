import { ChevronRight, Rocket, Brain, Laptop } from "lucide-react";

function Main() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="hero min-h-[70vh] bg-gradient-to-br from-primary to-accent text-primary-content">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold mb-6 animate-fade-up">
              Educación del Futuro
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Formando líderes innovadores con tecnología de vanguardia y valores eternos
            </p>
            <button className="btn btn-secondary glass">
              Descubre el Futuro
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Últimas Noticias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300">
                <figure>
                  <img
                    src={`/Logo.jpeg`}
                    alt={`Noticia ${i}`}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-primary">Innovación Educativa {i}</h3>
                  <p className="text-base-content/80">
                    Descubre las últimas tendencias en educación y tecnología que implementamos en nuestro programa.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-ghost btn-sm">
                      Leer más
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ventajas Innovadoras
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-12 h-12 text-primary" />,
                title: "Educación Futurista",
                description: "Metodologías innovadoras y tecnología de vanguardia.",
              },
              {
                icon: <Brain className="w-12 h-12 text-accent" />,
                title: "Desarrollo Cognitivo",
                description: "Programas personalizados para potenciar el aprendizaje.",
              },
              {
                icon: <Laptop className="w-12 h-12 text-secondary" />,
                title: "Tecnología Avanzada",
                description: "Plataformas digitales y laboratorios modernos.",
              },
            ].map((item, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="card-body items-center text-center">
                  {item.icon}
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