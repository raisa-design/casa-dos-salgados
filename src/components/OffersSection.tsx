import { Tag } from "lucide-react";

const offers = [
  {
    title: "Combo Família",
    desc: "10 coxinhas + 10 pastéis + 1 litro de suco",
    badge: "Melhor Valor",
  },
  {
    title: "Lanche da Tarde",
    desc: "1 misto quente + 1 suco natural 300ml",
    badge: "Popular",
  },
  {
    title: "Kit Café da Manhã",
    desc: "3 pães de queijo + 1 bolo fatia + 1 suco",
    badge: "Novidade",
  },
];

const OffersSection = () => (
  <section id="ofertas" className="py-20 bg-section-warm">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
        Ofertas da Semana
      </h2>
      <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {offers.map((offer) => (
          <div
            key={offer.title}
            className="bg-card rounded-lg p-6 shadow-warm-lg border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-colors"
          >
            <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              {offer.badge}
            </span>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Tag className="text-primary" size={18} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{offer.title}</h3>
            <p className="text-muted-foreground text-sm">{offer.desc}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-muted-foreground text-sm mt-8">
        * Ofertas válidas enquanto durarem os estoques. Consulte condições na loja.
      </p>
    </div>
  </section>
);

export default OffersSection;
