import { Coffee, Sandwich, Users, ArrowRight } from "lucide-react";

const combos = [
  {
    icon: Coffee,
    title: "Combo Café da Manhã",
    description: "Comece o dia com energia!",
    items: ["1 Café 200ml", "1 Pão de Queijo"],
    priceFrom: "R$ 8,99",
    tag: "Café da Manhã",
    highlight: "Combinação perfeita para começar o dia",
  },
  {
    icon: Sandwich,
    title: "Combo Casal",
    description: "Ideal para dividir a dois!",
    items: ["1 Refrigerante 1L (Guaraná ou Coca)", "2 Salgados à escolha"],
    priceFrom: "a partir de R$ 19,97",
    tag: "Lanche",
    highlight: "Excelente para casal — Refri 1L serve até 2 pessoas",
    featured: true,
  },
];

const tips = [
  {
    title: "5 Ideias de Café da Manhã com Salgados",
    excerpt: "Combine pão de queijo com café, esfiha com suco de laranja, ou misto quente com suco de acerola. Perfeito para começar o dia!",
    tag: "Dica",
  },
  {
    title: "Como Montar um Kit Festa",
    excerpt: "Monte kits com coxinhas, pastéis e tortas para festas e reuniões. Peça pelo WhatsApp e encomende com antecedência!",
    tag: "Dica",
  },
];

const BlogSection = () => (
  <section id="blog" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
        Combos & Sugestões
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

      {/* Combos */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {combos.map((combo) => (
          <a
            key={combo.title}
            href={`https://api.whatsapp.com/send/?phone=556199945297&text=${encodeURIComponent("Olá! Gostaria de pedir o " + combo.title)}&type=phone_number&app_absent=0`}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-card rounded-lg overflow-hidden shadow-warm group cursor-pointer hover:shadow-warm-lg transition-shadow ${combo.featured ? "ring-2 ring-primary" : ""}`}
          >
            {combo.featured && (
              <div className="bg-primary text-primary-foreground text-center text-xs font-bold py-1.5 tracking-wider uppercase flex items-center justify-center gap-1">
                <Users size={14} /> Mais Pedido
              </div>
            )}
            <div className="p-6">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{combo.tag}</span>
              <div className="flex items-center gap-3 mt-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <combo.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {combo.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{combo.description}</p>
              <ul className="space-y-2 mb-4">
                {combo.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              {combo.highlight && (
                <p className="text-xs bg-primary/10 text-primary font-medium rounded-md px-3 py-2 mb-4">
                  💡 {combo.highlight}
                </p>
              )}
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold text-primary">{combo.priceFrom}</span>
                <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Pedir pelo WhatsApp <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Tips */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {tips.map((tip) => (
          <article key={tip.title} className="bg-card rounded-lg p-6 shadow-warm">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{tip.tag}</span>
            <h3 className="font-display text-base font-semibold mt-2 mb-2 text-foreground">{tip.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{tip.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
