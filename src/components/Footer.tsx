import { Heart, Linkedin, Twitter, Instagram } from "lucide-react";
import logoImage from "@/assets/neurinvest-logo.png";

const Footer = () => {
  const links = {
    company: [
      { name: "Sobre", href: "#hero" },
      { name: "Problema", href: "#problema" },
      { name: "Solução", href: "#solucao" },
      { name: "Por que NeurInvest?", href: "#why" }
    ],
    product: [
      { name: "Para Quem é a NeurInvest?", href: "#praquem" },
      { name: "Mantenha-se Informado", href: "#contato" },
      { name: "Perguntas Frequentes", href: "#faq" }
    ],
    legal: [
      { name: "Política de Privacidade", href: "#" },
      { name: "Termos de Uso", href: "#" },
      { name: "Política de Cookies", href: "#" },
      { name: "Aviso Legal", href: "#" }
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* Conteúdo principal do rodapé */}
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Logo e descrição */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="NeurInvest" className="w-10 h-10" />
              <span className="text-2xl font-bold gradient-text">NeurInvest</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Seu parceiro de investimentos inteligente. Transformando dados complexos de mercado em 
              insights claros e acionáveis através do poder da IA.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors glow-hover"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>© 2025 NeurInvest</span>
              {links.legal.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
