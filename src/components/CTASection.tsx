import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles, Play } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Pronto para investir <span className="gradient-text">de forma mais inteligente</span> com{" "}
              <span className="gradient-brain">NeurInvest</span>?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Button variant="glow" size="lg" className="w-full sm:w-auto">
                <Play className="w-5 h-5" />
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 glow-hover">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-3 gradient-text">
                Mantenha-se Informado. Esteja à Frente.
              </h3>
              <p className="text-muted-foreground">
                Receba insights semanais do mercado, atualizações da plataforma e dicas de investimentos inteligentes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Seu endereço de e-mail"
                className="flex-1 bg-background/50 border-border focus:border-primary transition-colors"
              />
              <Button variant="hero" className="group">
                Inscreva-se Agora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center mt-3">
              Sem spam. Cancele a inscrição a qualquer momento. Privacidade garantida.
            </p>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {["🏦", "📈", "🛡️", "⚡", "🎯"].map((icon, index) => (
              <div key={index} className="text-4xl filter grayscale hover:grayscale-0 transition-all">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
