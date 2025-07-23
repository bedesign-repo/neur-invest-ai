import { AlertTriangle, TrendingDown, Users, BookOpen } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Complex Information",
      description: "Overwhelming amount of market data and financial jargon"
    },
    {
      icon: TrendingDown,
      title: "Market Volatility",
      description: "Unpredictable market movements create fear and uncertainty"
    },
    {
      icon: Users,
      title: "Lack of Guidance",
      description: "Most people lack access to professional investment advice"
    },
    {
      icon: BookOpen,
      title: "Technical Knowledge",
      description: "Requires deep understanding of technical and fundamental analysis"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Investing is <span className="gradient-text">Overwhelming</span> for Most People
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Investing can be complex and intimidating for many people. The abundance of information, 
            market volatility, and the need for technical and fundamentalist knowledge drive away 
            potential investors or lead to ill-informed decisions.
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Even experienced investors can benefit from deeper and more impartial data analysis.
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