import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <img
      src={heroBg}
      alt="Salgados deliciosos da Casa dos Salgados"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-warm-overlay" />
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
      <p className="text-warm-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
        Bem-vindo à
      </p>
      <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
        Casa dos Salgados
      </h1>
      <p className="text-primary-foreground/80 text-lg md:text-xl font-body mb-8 max-w-xl mx-auto">
        Sabor que conquista, desde o primeiro pedaço.
      </p>
      <a
        href="#cardapio"
        className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm tracking-wide"
      >
        Ver Cardápio
      </a>
    </div>
  </section>
);

export default HeroSection;
