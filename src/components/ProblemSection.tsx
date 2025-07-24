import { AlertTriangle, TrendingDown, Users, BookOpen } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Complexidade",
      description: "Excesso de informações técnicas dificulta a tomada de decisão"
    },
    {
      icon: TrendingDown,
      title: "Volatilidade",
      description: "Mercado imprevisível gera ansiedade e decisões emocionais"
    },
    {
      icon: Users,
      title: "Falta de Orientação",
      description: "Poucas pessoas têm acesso a aconselhamento profissional"
    },
    {
      icon: BookOpen,
      title: "Conhecimento",
      description: "Barreira de entrada alta afasta novos investidores"
    }
  ];

  return (
    <section id="problema" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Investir Ainda É <span className="gradient-text">Complicado Demais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
           Investir pode ser complexo e intimidador para muitas pessoas. A grande quantidade de informações, a volatilidade do mercado e a necessidade de conhecimento técnico afasta potenciais investidores, ou leva a decisões mal-informadas.
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Até mesmo investidores experientes se beneficiam de análises mais profundas e imparciais.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index} 
                className="bg-card border border-border rounded-xl p-6 glow-hover text-center group"
              >
                <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-destructive/30 transition-colors">
                  <Icon className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;