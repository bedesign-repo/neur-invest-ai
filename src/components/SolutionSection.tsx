import { Brain, Target, Smartphone, BarChart3 } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Análise com IA",
      description: "IA elimina vieses emocionais com insights baseados em dados"
    },
    {
      icon: Target,
      title: "Insights Personalizados",
      description: "Recomendações adaptadas ao seu perfil de investimento"
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados",
      description: "Análise abrangente de ativos com insights acionáveis"
    },
    {
      icon: Smartphone,
      title: "Interface Simples",
      description: "Análises complexas acessíveis por meio de um design intuitivo"
    }
  ];

  return (
    <section id="solucao" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                NeurInvest <span className="gradient-brain">Democratiza</span> a Inteligência Financeira
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                NeurInvest é um aplicativo inovador que democratiza o acesso à análise de investimentos avançada. 
                Utilizamos inteligência artificial para processar e analisar grandes volumes de dados de mercado, oferecendo
                <span className="text-primary font-semibold"> recomendações personalizadas</span> and 
                <span className="text-primary font-semibold"> relatórios detalhados</span> sobre ativos, ajustados ao perfil de cada usuário.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Visual representation */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
              <div className="space-y-6">
                {/* Before vs After visualization */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-destructive/20 rounded-xl p-4 border border-destructive/20">
                    <h4 className="font-semibold text-destructive mb-2">Antes da NeurInvest</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>❌ Dados excessivos</div>
                      <div>❌ Decisões emocionais</div>
                      <div>❌ Perda de tempo</div>
                      <div>❌ Poucos insights</div>
                    </div>
                  </div>
                  <div className="bg-primary/20 rounded-xl p-4 border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2">Depois da NeurInvest</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>✅ Recomendações claras</div>
                      <div>✅ Insights baseados em dados</div>
                      <div>✅ Análise instantânea</div>
                      <div>✅ Abordagem personalizada</div>
                    </div>
                  </div>
                </div>
                
                {/* Flow visualization */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                      📊
                    </div>
                    <span className="text-sm">Dados Brutos</span>
                  </div>
                  <div className="text-primary text-2xl">→</div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 brain-pulse">
                      🧠
                    </div>
                    <span className="text-sm">Análise com IA</span>
                  </div>
                  <div className="text-primary text-2xl">→</div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      💡
                    </div>
                    <span className="text-sm">Recomendações Estratégicas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;