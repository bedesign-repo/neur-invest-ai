import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import logoImage from "@/assets/neurinvest-logo.png";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background mesh */}
      <div className="absolute inset-0 animated-mesh opacity-30" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <img 
                src={logoImage} 
                alt="NeurInvest Logo" 
                className="w-20 h-20 brain-pulse"
              />
            </div>
            
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">AI-Powered</span><br />
                <span className="text-foreground">Investing.</span><br />
                <span className="gradient-brain">Personalized.</span><br />
                <span className="text-muted-foreground">Simplified.</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                Welcome to NeurInvest — the intelligent investment app that transforms 
                complexity into clarity using real-time AI analysis.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                <Sparkles className="w-5 h-5" />
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glow" size="lg">
                Explore Features
              </Button>
            </div>
          </div>
          
          {/* Right side - Hero mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroMockup} 
                alt="NeurInvest App Interface" 
                className="max-w-lg w-full h-auto rounded-2xl shadow-elegant glow-hover"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full glow-blue animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-green rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;