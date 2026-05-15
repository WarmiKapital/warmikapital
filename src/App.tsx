/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Scale, 
  TrendingUp, 
  Briefcase, 
  Pickaxe, 
  ShieldCheck, 
  FileCheck,
  Users,
  Award,
  Lightbulb,
  Menu,
  X,
  Linkedin,
  Instagram,
  MessageSquare
} from "lucide-react";
import { useState, useEffect } from "react";

// Helper for WhatsApp
const getWhatsAppUrl = (data?: { name?: string, message?: string }) => {
    const phoneNumber = "51932340282";
    let message = "Hola, me gustaría agendar una consulta en Warmi Kapital.";
    if (data?.name && data?.message) {
        message += `\n\nNombre: ${data.name}\nMensaje: ${data.message}`;
    }
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

const WhatsAppFloatingButton = () => (
  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50 transition-transform hover:scale-110 shadow-green-500/20">
     <MessageSquare size={24} />
  </a>
);

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Equipo", href: "#equipo" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2">
          <img 
            src="https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1778816751/Recurso_9_hkq6bi.png" 
            alt="Warmi Kapital Logo" 
            className={`h-12 md:h-16 w-auto transition-all ${isScrolled ? "brightness-100" : "md:brightness-0 md:invert"}`}
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-secondary ${isScrolled ? "text-carbon" : "text-white"}`}
            >
              {link.name}
            </a>
          ))}
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-6 py-2 rounded-sm text-sm font-semibold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20">
            Agenda una consulta
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-carbon hover:text-secondary"
              >
                {link.name}
              </a>
            ))}
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="bg-secondary text-white py-4 rounded-sm font-semibold text-center">
              Agenda una consulta
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Estudio jurídico, financiero y corporativo con <span className="text-secondary italic font-accent font-normal">visión humana.</span>
            </h1>
            <p className="text-lg md:text-xl text-bg-sand/90 mb-10 max-w-2xl font-light leading-relaxed">
              Acompañamos a personas y empresas con soluciones estratégicas en derecho, finanzas y gestión corporativa para impulsar decisiones inteligentes, seguras y sostenibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-8 py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all group">
                Agenda una consulta <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="border border-white/30 text-white px-8 py-4 rounded-sm font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                Conoce nuestros servicios
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical rail text */}
      <div className="hidden lg:block absolute right-12 bottom-24 rotate-90 origin-right">
        <p className="text-secondary tracking-[0.3em] font-display text-[10px] uppercase font-bold whitespace-nowrap opacity-50">
          Estrategia · Confianza · Resultados
        </p>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-bg-sand">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary text-white p-12 rounded-sm"
          >
            <span className="text-secondary font-display font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Karen Gamarra - CEO & Founder</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              Construyendo una <span className="text-secondary font-accent italic font-normal">consultora humana</span>, sólida y estratégica para el Norte del país.
            </h2>
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                "Mi visión con Warmi Kapital siempre ha sido clara: romper la frialdad del sector legal y corporativo. Creo firmemente que las decisiones más importantes del ser humano y las empresas requieren un acompañamiento técnico de alto nivel, pero profundamente humano."
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="border-l-2 border-secondary pl-6">
                <h4 className="text-2xl font-display font-bold text-white mb-1">+5</h4>
                <p className="text-sm text-white/60 uppercase tracking-wider font-bold">Años de Criterio</p>
              </div>
              <div className="border-l-2 border-secondary pl-6">
                <h4 className="text-2xl font-display font-bold text-white mb-1">100%</h4>
                <p className="text-sm text-white/60 uppercase tracking-wider font-bold">Enfoque Humano</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1778816586/KarenG_ipglgk.png" 
                alt="Karen Gamarra" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary z-0 rounded-sm opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Derecho Financiero",
      description: "Asesoría para decisiones, operaciones y estructuras con impacto económico y legal estratégico.",
      icon: <TrendingUp className="text-secondary" size={32} />,
    },
    {
      title: "Derecho Tributario",
      description: "Prevención, orden y estrategia integral frente a obligaciones y contingencias fiscales.",
      icon: <ShieldCheck className="text-secondary" size={32} />,
    },
    {
      title: "Derecho Comercial",
      description: "Soporte legal robusto para contratos, negocios y el crecimiento sostenible de tu empresa.",
      icon: <Briefcase className="text-secondary" size={32} />,
    },
    {
      title: "Derecho Minero",
      description: "Acompañamiento jurídico especializado y técnico en el sector minero de alto nivel.",
      icon: <Pickaxe className="text-secondary" size={32} />,
    },
    {
      title: "Marcas y Patentes",
      description: "Protección integral de activos intangibles y propiedad intelectual en el mercado global.",
      icon: <Award className="text-secondary" size={32} />,
    },
    {
      title: "OxI (Obras por Impuestos)",
      description: "Estructuración y asesoría en proyectos de impacto social con enfoque estratégico y fiscal.",
      icon: <FileCheck className="text-secondary" size={32} />,
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-display font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Especialidades</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Nuestros Servicios</h2>
          <p className="text-carbon/60 text-lg">
            Soluciones integradas para los desafíos más complejos del entorno corporativo actual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-primary/10 p-8 rounded-sm shadow-sm group hover:bg-primary transition-colors duration-500"
            >
              <div className="mb-6 bg-primary/5 w-16 h-16 flex items-center justify-center rounded-sm group-hover:bg-white/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-primary group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-carbon/60 group-hover:text-white/90 leading-relaxed transition-colors">
                {item.description}
              </p>
              <div className="mt-8 flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                Saber más <ChevronRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentiator = () => {
  return (
    <section className="py-0 overflow-hidden relative min-h-[500px] flex items-center">
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" 
            alt="Estrategia financiera" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
         />
         <div className="absolute inset-0 bg-primary/90" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <span className="text-secondary font-display font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Nuestra Fórmula</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Legal + Financiero = Decisiones Inteligentes
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Nuestro valor diferencial radica en la integración. No miramos el derecho como una isla, sino como un engranaje fundamental de tu estructura financiera y corporativa.
            </p>
            <ul className="space-y-4">
              {[
                "Visión 360° de contingencias y oportunidades.",
                "Estructuras legales con eficiencia económica.",
                "Tratamiento técnico de alta especialidad.",
                "Claridad y acompañamiento en cada etapa."
              ].map((text) => (
                <li key={text} className="flex items-center gap-4 text-white/90">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ name, role, image, size = "md" }: { name: string, role: string, image: string, size?: "lg" | "md" | "sm" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group"
  >
    <div className={`overflow-hidden rounded-sm mb-6 ${size === "lg" ? "aspect-[4/5]" : "aspect-square"}`}>
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        referrerPolicy="no-referrer"
      />
    </div>
    <h4 className={`font-display font-bold text-primary ${size === "lg" ? "text-2xl" : "text-xl"} mb-1`}>{name}</h4>
    <p className="text-secondary font-medium tracking-wide text-sm">{role}</p>
  </motion.div>
);

const Team = () => {
  return (
    <section id="equipo" className="py-24 bg-bg-sand">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-secondary font-display font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Nuestro Capital Humano</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Talento y Experiencia</h2>
          <p className="text-carbon/60 text-lg max-w-2xl mx-auto">
            Un equipo multidisciplinario enfocado en la excelencia y el acompañamiento personalizado.
          </p>
        </div>

        {/* Founders / Main Partners */}
        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto mb-20 border-b border-carbon/5 pb-20">
          <TeamMember 
            name="Karen Gamarra" 
            role="CEO & Founder" 
            image="https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1778816586/KarenG_ipglgk.png" 
            size="lg" 
          />
          <TeamMember 
            name="Natali" 
            role="Socia · Ing. de Minas" 
            image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop" 
            size="lg" 
          />
        </div>

        {/* Support Team */}
        <div className="mb-20">
          <h5 className="text-center text-primary font-display font-bold mb-12 opacity-50 uppercase tracking-[0.3em] text-xs">Asistentes Junior</h5>
          <div className="grid grid-cols-2 md:grid-cols-2 max-w-2xl mx-auto gap-12">
            <TeamMember name="Belen" role="Asistente Junior" image="https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1778816584/WhatsApp_Image_2026-05-13_at_8.14.01_PM_1_xcejlh.jpg" />
            <TeamMember name="Stefani" role="Asistente Junior" image="https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1778816585/WhatsApp_Image_2026-05-13_at_8.13.59_PM_3_hkepw6.jpg" />
          </div>
        </div>

        {/* External consultants */}
        <div>
          <h5 className="text-center text-primary font-display font-bold mb-12 opacity-50 uppercase tracking-[0.3em] text-xs">Equipo de consultoría</h5>
          <div className="grid grid-cols-2 md:grid-cols-2 max-w-2xl mx-auto gap-12">
            <TeamMember name="Betsi" role="Especialista de OxI" image="https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1778816585/BetsyM_jrzhyw.png" />
            <TeamMember name="Alexi" role="Especialista en OxI" image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Vision = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center mb-10">
            <Lightbulb className="text-secondary" size={48} />
          </div>
          <span className="text-secondary font-display font-bold text-sm uppercase tracking-[0.4em] mb-6 block">Visión de Futuro</span>
          <h2 className="text-4xl md:text-7xl font-display font-bold text-primary mb-12 leading-tight max-w-5xl mx-auto">
            Ser la mayor consultora <span className="italic font-accent font-normal text-secondary">jurídico-financiera</span> del norte del país.
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </motion.div>
      </div>

      {/* Decorative text watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-black text-primary/[0.02] uppercase pointer-events-none whitespace-nowrap">
        WARMI KAPITAL
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleWhatsappFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(getWhatsAppUrl({ name: formData.name, message: formData.message }), "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-bg-sand">
      <div className="container mx-auto px-6">
        <div className="bg-primary rounded-sm shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-20 text-white">
              <h2 className="text-4xl font-display font-bold mb-8">
                Hablemos de tu siguiente decisión estratégica.
              </h2>
              <p className="text-white/70 text-lg mb-12">
                Estamos listos para escucharte y diseñar la ruta inteligente que tu empresa necesita.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-secondary p-3 rounded-sm">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div className="space-y-4">
                    <h5 className="font-display font-bold text-secondary mb-1 uppercase tracking-widest text-xs">Ubícanos en</h5>
                    <div className="text-white/90 space-y-2 text-sm">
                       <p><span className="font-bold text-secondary">Trujillo:</span> Calle Cavero y Muñoz #735, Las Quintanas</p>
                       <p><span className="font-bold text-secondary">Trujillo:</span> Los Cipreses 468, Víctor Larco Herrera 13009</p>
                       <p><span className="font-bold text-secondary">Lima:</span> Av. Emilio Cavenecia #151, Piso 7, Miraflores</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-secondary p-3 rounded-sm">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-secondary mb-1 uppercase tracking-widest text-xs">Teléfono</h5>
                    <p className="text-white/90">+51 932 340 282</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-secondary p-3 rounded-sm">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-secondary mb-1 uppercase tracking-widest text-xs">Email</h5>
                    <p className="text-white/90">contacto@warmikapital.com.pe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 md:p-20">
              <form className="space-y-6" onSubmit={handleWhatsappFormSubmit}>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-primary/60 mb-2">Nombre Completo</label>
                  <input type="text" required className="w-full border-b border-primary/10 py-3 focus:outline-none focus:border-secondary transition-colors" placeholder="Tu nombre" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-primary/60 mb-2">Email Corporativo</label>
                  <input type="email" required className="w-full border-b border-primary/10 py-3 focus:outline-none focus:border-secondary transition-colors" placeholder="email@empresa.com" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-primary/60 mb-2">Mensaje</label>
                  <textarea rows={4} required className="w-full border-b border-primary/10 py-3 focus:outline-none focus:border-secondary transition-colors resize-none" placeholder="¿En qué podemos ayudarte?" onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                <button type="submit" className="w-full bg-secondary text-white py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 uppercase tracking-[0.2em] text-sm mt-8">
                  Agendar asesoría <Calendar size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-white">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img 
                src="https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1778816751/Recurso_9_hkq6bi.png" 
                alt="Warmi Kapital Logo" 
                className="h-12 w-auto brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-white/50 leading-relaxed mb-8">
              Firma jurídico-financiera que combina rigor, visión y humanidad para acompañar decisiones que construyen futuro.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/warmi-kapital/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h5 className="font-display font-bold text-secondary mb-8 uppercase tracking-widest text-xs">Empresa</h5>
            <div className="flex flex-col gap-4 text-white/60">
              <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
              <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
              <a href="#equipo" className="hover:text-white transition-colors">Equipo</a>
            </div>
          </div>

          <div className="col-span-1">
            <h5 className="font-display font-bold text-secondary mb-8 uppercase tracking-widest text-xs">Especialidades</h5>
            <div className="flex flex-col gap-4 text-white/60">
              <a href="#servicios" className="hover:text-white transition-colors">Derecho Financiero</a>
              <a href="#servicios" className="hover:text-white transition-colors">Derecho Tributario</a>
              <a href="#servicios" className="hover:text-white transition-colors">Propiedad Intelectual</a>
              <a href="#servicios" className="hover:text-white transition-colors">Obras por Impuestos</a>
            </div>
          </div>

          <div className="col-span-1">
            <h5 className="font-display font-bold text-secondary mb-8 uppercase tracking-widest text-xs">Legal</h5>
            {/* Removed internal legal links */}
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Warmi Kapital. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-xs font-display tracking-[0.2em] uppercase">
            Visión · Inteligencia · Humanidad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Differentiator />
      <Team />
      <Vision />
      <Contact />
      <WhatsAppFloatingButton />
      <Footer />
    </div>
  );
}

