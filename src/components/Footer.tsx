const Footer = () => (
  <footer className="bg-warm-brown text-primary-foreground py-10">
    <div className="container mx-auto px-4 text-center">
      <h3 className="font-display text-xl font-bold mb-2">Casa dos Salgados</h3>
      <p className="text-primary-foreground/60 text-sm mb-4">
        Sabor que conquista, desde o primeiro pedaço.
      </p>
      <p className="text-primary-foreground/40 text-xs">
        © {new Date().getFullYear()} Casa dos Salgados. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
