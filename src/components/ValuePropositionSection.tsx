import { Microscope, Target, BarChart3, Puzzle, Radio, GraduationCap } from "lucide-react";

const ValuePropositionSection = () => {
  const values = [
    {
      icon: Microscope,
      title: "Análise Abrangente e Imparcial",
      description: "Insights livres de emoções com análise técnica e fundamental baseada em IA",
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      icon: Target,
      title: "Recomendações Personalizadas", 
      description: "Alinhadas aos seus objetivos, perfil de risco e horizonte de investimento",
      color: "bg-green-500/20 text-green-400"
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados de Ativos",
      description: "Tome decisões com base em dados completos de cada ativo",
      color: "bg-purple-500/20 text-purple-400"
    },
    {
      icon: Puzzle,
      title: "Simplicidade e Acessibilidade",
      description: "Feito para iniciantes e profissionais",
      color: "bg-yellow-500/20 text-yellow-400"
    },
    {
      icon: Radio,
      title: "Monitoramento em Tempo Real",
      description: "Fique à frente com alertas e sugestões de estratégia adaptativa",
      color: "bg-red-500/20 text-red-400"
    },
    {
      icon: GraduationCap,
      title: "Educação Financeira",
      description: "Aprenda enquanto investe com recursos educativos integrados",
      color: "bg-indigo-500/20 text-indigo-400"
    }
  ];

  return (
    <section id="why" className="py-20 relative mesh-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Por que <span className="gradient-text">NeurInvest</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experimente o futuro dos investimentos inteligentes com nossa plataforma completa movida por IA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 glow-hover group transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 ${value.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-foreground group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Elemento visual adicional */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-card/30 backdrop-blur-sm border border-border rounded-full px-8 py-4">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground">Impulsionado por tecnologia de IA avançada</span>
            <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
