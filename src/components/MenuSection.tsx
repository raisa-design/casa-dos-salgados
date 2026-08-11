import { Beef, CakeSlice, GlassWater, Coffee, Users } from "lucide-react";
import coxinhaImg from "@/assets/menu/coxinha.jpg";
import pastelImg from "@/assets/menu/pastel.jpg";
import paoQueijoImg from "@/assets/menu/pao-queijo.jpg";
import cachorroQuenteImg from "@/assets/menu/cachorro-quente.jpg";
import sucoLaranjaImg from "@/assets/menu/suco-laranja.jpg";
import boloChocolateImg from "@/assets/menu/bolo-chocolate.jpg";

const salgados = [
  { name: "Coxinha", price: "R$ 5,99", img: coxinhaImg },
  { name: "Pastel", price: "R$ 6,99", img: pastelImg },
  { name: "Pão Pizza", price: "R$ 4,99" },
  { name: "Pão de Queijo", price: "R$ 3,99", img: paoQueijoImg },
  { name: "Cachorro-Quente", price: "R$ 7,99", img: cachorroQuenteImg },
  { name: "Enroladinho de Salsicha", price: "R$ 4,99" },
  { name: "Misto Quente", price: "R$ 5,99" },
  { name: "Esfiha de Carne", price: "R$ 5,99" },
  { name: "Panqueca de Carne", price: "R$ 11,99" },
  { name: "Panqueca de Frango", price: "R$ 11,99" },
];

const doces = [
  { name: "Bolo de Milho", price: "R$ 4,99" },
  { name: "Bolo de Mandioca", price: "R$ 5,49" },
  { name: "Bolo de Chocolate", price: "R$ 5,99", img: boloChocolateImg },
  { name: "Torta de Frango", price: "R$ 6,99" },
  { name: "Torta de Carne", price: "R$ 6,99" },
];

const bebidas = [
  { name: "Café", detail: "200ml", price: "R$ 5,00", category: "quente" },
  { name: "Suco de Laranja", detail: "300ml natural", price: "R$ 5,99", category: "suco", img: sucoLaranjaImg },
  { name: "Suco de Acerola", detail: "300ml natural", price: "R$ 5,99", category: "suco" },
  { name: "Suco de Goiaba", detail: "300ml natural", price: "R$ 5,99", category: "suco" },
  { name: "Suco de Maracujá", detail: "300ml natural", price: "R$ 6,49", category: "suco" },
  { name: "Guaraná", detail: "1 Litro", price: "R$ 7,99", category: "refri", serves: "Serve até 2 pessoas" },
  { name: "Coca-Cola", detail: "1 Litro", price: "R$ 8,99", category: "refri", serves: "Serve até 2 pessoas" },
  { name: "Água Mineral", detail: "500ml", price: "R$ 2,99", category: "agua" },
];

const CategoryTitle = ({ icon: Icon, title }: { icon: typeof Beef; title: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
      <Icon className="text-primary" size={20} />
    </div>
    <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
  </div>
);

const MenuSection = () => (
  <section id="cardapio" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
        Cardápio
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

      {/* Featured items with images */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-12">
        {[
          { img: coxinhaImg, name: "Coxinha", price: "R$ 5,99" },
          { img: pastelImg, name: "Pastel", price: "R$ 6,99" },
          { img: paoQueijoImg, name: "Pão de Queijo", price: "R$ 3,99" },
          { img: cachorroQuenteImg, name: "Cachorro-Quente", price: "R$ 7,99" },
          { img: boloChocolateImg, name: "Bolo de Chocolate", price: "R$ 5,99" },
          { img: sucoLaranjaImg, name: "Suco Natural", price: "a partir de R$ 5,99" },
        ].map((item) => (
          <div key={item.name} className="bg-card rounded-lg overflow-hidden shadow-warm group">
            <div className="aspect-square overflow-hidden">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="p-3 text-center">
              <p className="font-display text-sm font-semibold text-foreground">{item.name}</p>
              <p className="text-primary font-bold text-sm">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {/* Salgados */}
        <div className="bg-card rounded-lg p-6 shadow-warm">
          <CategoryTitle icon={Beef} title="Salgados" />
          <ul className="space-y-3">
            {salgados.map((item) => (
              <li key={item.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item.name}
                </span>
                <span className="font-semibold text-primary">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bolos & Tortas */}
        <div className="bg-card rounded-lg p-6 shadow-warm">
          <CategoryTitle icon={CakeSlice} title="Bolos & Tortas" />
          <p className="text-xs text-muted-foreground mb-4 -mt-4">Preço por fatia</p>
          <ul className="space-y-3">
            {doces.map((item) => (
              <li key={item.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item.name}
                </span>
                <span className="font-semibold text-primary">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bebidas */}
        <div className="bg-card rounded-lg p-6 shadow-warm">
          <CategoryTitle icon={GlassWater} title="Bebidas" />
          <ul className="space-y-3">
            {bebidas.map((item) => (
              <li key={item.name} className="text-sm">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive flex-shrink-0" />
                    {item.name}
                  </span>
                  <span className="font-semibold text-primary">{item.price}</span>
                </div>
                <div className="ml-4 flex items-center gap-2">
                  <span className="text-muted-foreground text-xs">{item.detail}</span>
                  {item.serves && (
                    <span className="text-[10px] bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Users size={10} /> {item.serves}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default MenuSection;
