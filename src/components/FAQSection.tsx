import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O NeurInvest é seguro?",
      answer: "Sim. Usamos criptografia de nível bancário e protocolos rígidos de privacidade de dados. Seus dados são protegidos com medidas de segurança padrão do setor e nunca armazenamos suas credenciais financeiras."
    },
    {
      question: "É para iniciantes?",
      answer: "Com certeza. O NeurInvest foi projetado para todos os níveis de experiência. Nossa interface intuitiva e recursos educacionais o tornam perfeito para iniciantes, enquanto os recursos avançados satisfazem investidores experientes."
    },
    {
      question: "Preciso vincular minha conta bancária?",
      answer: "Não. Não exigimos acesso financeiro para oferecer recomendações. O NeurInvest fornece análises e insights sem a necessidade de acesso às suas contas reais ou dados financeiros pessoais."
    },
    {
      question: "Existem riscos de recomendações não serem positivas?",
      answer: "Todos os investimentos acarretam riscos, e sempre recomendamos a diversificação e a consulta a consultores financeiros."
    },
    {
      question: "Qual a diferença entre o plano gratuito e o premium?",
      answer: "Usuários gratuitos obtêm análises básicas e recomendações limitadas. Assinantes premium desfrutam de insights ilimitados da IA, alertas em tempo real, relatórios detalhados de ativos e suporte prioritário."
    },
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer: "Sim, você pode cancelar sua assinatura premium a qualquer momento. Não há compromissos de longo prazo e você manterá o acesso até o final do seu período de faturamento."
    },
    {
      question: "O NeurInvest executa negociações por mim?",
      answer: "Não, o NeurInvest fornece apenas análises e recomendações. Você mantém controle total sobre suas decisões de investimento e executa negociações através de sua corretora de preferência."
    },
    {
      question: "Quais mercados e ativos vocês cobrem?",
      answer: "Cobrimos os principais mercados globais, incluindo ações, ETFs, criptomoedas e commodities."
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Perguntas</span> Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo o que você precisa saber sobre o NeurInvest e investimentos inteligentes
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

        {/* Seção de ajuda adicional */}
        <div className="mt-16 text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe de suporte está aqui para ajudar você a aproveitar ao máximo o NeurInvest
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contatar Suporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
