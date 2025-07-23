import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is NeurInvest secure?",
      answer: "Yes. We use bank-level encryption and strict data privacy protocols. Your data is protected with industry-standard security measures, and we never store your financial credentials."
    },
    {
      question: "Is this for beginners?",
      answer: "Absolutely. NeurInvest is designed for all experience levels. Our intuitive interface and educational resources make it perfect for beginners, while advanced features satisfy experienced investors."
    },
    {
      question: "Do I need to link my bank account?",
      answer: "No — we do not require financial access to offer recommendations. NeurInvest provides analysis and insights without needing access to your actual accounts or personal financial data."
    },
    {
      question: "How accurate are the AI recommendations?",
      answer: "Our AI analyzes vast amounts of market data with a 95% accuracy rate in trend prediction. However, all investments carry risk, and we always recommend diversification and consulting with financial advisors."
    },
    {
      question: "What's the difference between free and premium?",
      answer: "Free users get basic analysis and limited recommendations. Premium subscribers enjoy unlimited AI insights, real-time alerts, detailed asset reports, and priority support."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your premium subscription at any time. There are no long-term commitments, and you'll retain access until the end of your billing period."
    },
    {
      question: "Does NeurInvest execute trades for me?",
      answer: "No, NeurInvest provides analysis and recommendations only. You maintain full control over your investment decisions and execute trades through your preferred broker."
    },
    {
      question: "What markets and assets do you cover?",
      answer: "We cover major global markets including stocks, ETFs, cryptocurrencies, and commodities. Our coverage includes US, European, and Asian markets with over 50,000 tracked assets."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Common</span> Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about NeurInvest and intelligent investing
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl px-6 glow-hover"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional help section */}
        <div className="mt-16 text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you get the most out of NeurInvest
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg hover:bg-accent transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;