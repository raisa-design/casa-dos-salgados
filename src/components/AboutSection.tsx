import { Heart, MapPin, Utensils } from "lucide-react";

const features = [
  { icon: Heart, title: "Feito com Carinho", desc: "Ingredientes selecionados e receitas caprichadas" },
  { icon: MapPin, title: "Ponto de Encontro", desc: "Espaço acolhedor para famílias e amigos" },
  { icon: Utensils, title: "Qualidade", desc: "Salgados e lanches bem preparados todo dia" },
];

const AboutSection = () => (
  <section id="sobre" className="py-20 bg-section-warm">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
        Sobre Nós
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />

      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-muted-foreground leading-relaxed mb-4">
          A Casa dos Salgados nasceu com um propósito simples e especial: levar sabor, qualidade e aquele gostinho de comida feita com carinho para cada cliente. Criada recentemente, nossa lanchonete chegou para se tornar um novo ponto de encontro em São Joaquim – Januária, oferecendo opções deliciosas para qualquer momento do dia.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Estamos localizados na Av. Santo Antônio, nº 715, em um espaço acolhedor, pensado para receber famílias, amigos e todos que apreciam bons salgados e lanches bem preparados. Trabalhamos com ingredientes selecionados, receitas caprichadas e um atendimento próximo, porque acreditamos que comer bem vai muito além do sabor — é também sobre se sentir em casa.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Seja para um lanche rápido, uma pausa no dia ou para compartilhar bons momentos, a Casa dos Salgados está de portas abertas para receber você.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="bg-card rounded-lg p-6 text-center shadow-warm">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <f.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
