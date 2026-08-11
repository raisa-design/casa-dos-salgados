import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => (
  <section id="contato" className="py-20 bg-section-warm">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
        Contato & Localização
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Endereço */}
        <div className="bg-card rounded-lg p-6 shadow-warm text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <MapPin className="text-primary" size={22} />
          </div>
          <h3 className="font-display text-lg font-semibold mb-2 text-foreground">Endereço</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Av. Santo Antônio, Nº 715<br />
            São Joaquim – Januária, MG
          </p>
        </div>

        {/* Horário */}
        <div className="bg-card rounded-lg p-6 shadow-warm text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Clock className="text-primary" size={22} />
          </div>
          <h3 className="font-display text-lg font-semibold mb-2 text-foreground">Horário</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Segunda a Sábado<br />
            07:00 – 20:00<br />
            <span className="text-xs">Domingo: 07:00 – 13:00</span>
          </p>
        </div>

        {/* Contato */}
        <div className="bg-card rounded-lg p-6 shadow-warm text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Phone className="text-primary" size={22} />
          </div>
          <h3 className="font-display text-lg font-semibold mb-2 text-foreground">Fale Conosco</h3>
          <a
            href="https://api.whatsapp.com/send/?phone=556199945297&text=&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 bg-olive text-primary-foreground font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
