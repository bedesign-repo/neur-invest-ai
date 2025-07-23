import { Baby, Settings, DollarSign, Clock } from "lucide-react";

const CustomerSegmentsSection = () => {
  const segments = [
    {
      icon: Baby,
      title: "Beginning Investors",
      description: "Simplified onboarding and risk-managed guidance for those just starting their investment journey",
      features: ["Risk assessment", "Educational content", "Guided tutorials", "Safe recommendations"],
      gradient: "from-green-500/20 to-green-600/20"
    },
    {
      icon: Settings,
      title: "Intermediate Investors", 
      description: "Power up your strategy with deeper analysis and advanced tools for more experienced investors",
      features: ["Advanced analytics", "Portfolio optimization", "Market insights", "Strategy refinement"],
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: DollarSign,
      title: "SMI (Small & Medium Investors)",
      description: "Pro-level tools without pro-level fees, democratizing access to sophisticated analysis",
      features: ["Professional tools", "Cost-effective", "Detailed reports", "Expert insights"],
      gradient: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: Clock,
      title: "Time-Savers",
      description: "Let AI analyze while you live your life - perfect for busy professionals and entrepreneurs",
      features: ["Automated analysis", "Smart alerts", "Quick insights", "Minimal time investment"],
      gradient: "from-orange-500/20 to-orange-600/20"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Who Is <span className="gradient-brain">NeurInvest</span> For?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're just starting out or looking to enhance your investment strategy, 
            NeurInvest adapts to your experience level and goals
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
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${segment.gradient} opacity-50 group-hover:opacity-70 transition-opacity`} />
                
                {/* Content */}
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

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10K+", label: "Active Users" },
            { number: "95%", label: "Success Rate" },
            { number: "24/7", label: "AI Monitoring" },
            { number: "50+", label: "Supported Assets" }
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold gradient-text">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSegmentsSection;