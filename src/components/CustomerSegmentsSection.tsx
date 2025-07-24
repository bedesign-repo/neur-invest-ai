import { Baby, Settings, DollarSign, Clock } from "lucide-react";

const CustomerSegmentsSection = () => {
  const segments = [
    {
      icon: Baby,
      title: "Investidores Iniciantes",
      description: "Acompanhamento simplificado e orientação com gestão de risco para quem está começando sua jornada de investimentos",
      features: ["Avaliação de risco", "Conteúdo educativo", "Tutoriais guiados", "Recomendações seguras"],
      gradient: "from-green-500/20 to-green-600/20"
    },
    {
      icon: Settings,
      title: "Investidores Intermediários", 
      description: "Aprimore sua estratégia com análises mais profundas e ferramentas avançadas para investidores experientes",
      features: ["Análises avançadas", "Otimização de portfólio", "Insights de mercado", "Refinamento de estratégia"],
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: DollarSign,
      title: "PMI (Pequenos e Médios Investidores)",
      description: "Ferramentas de nível profissional sem custos elevados, democratizando o acesso à análise sofisticada",
      features: ["Ferramentas profissionais", "Baixo custo", "Relatórios detalhados", "Insights de especialistas"],
      gradient: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: Clock,
      title: "Investidores Ocupados",
      description: "Deixe a IA analisar enquanto você vive — ideal para profissionais ocupados e empreendedores",
      features: ["Análise automatizada", "Alertas inteligentes", "Insights rápidos", "Mínimo esforço de tempo"],
      gradient: "from-orange-500/20 to-orange-600/20"
    }
  ];

  return (
    <section id="praquem" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Para Quem é a <span className="gradient-brain">NeurInvest</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esteja você começando agora ou buscando aprimorar sua estratégia de investimento, 
            a NeurInvest se adapta ao seu nível de experiência e objetivos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div 
                key={index}
                className="relative bg-card border border-border rounded-2xl p-8 glow-hover group overflow-hidden"
              >
                {/* Gradiente de fundo */}
                <div className={`absolute inset-0 bg-gradient-to-br ${segment.gradient} opacity-50 group-hover:opacity-70 transition-opacity`} />
                
                {/* Conteúdo */}
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-background/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {segment.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {segment.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {segment.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center space-x-2 bg-background/10 backdrop-blur-sm rounded-lg px-3 py-2"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomerSegmentsSection;