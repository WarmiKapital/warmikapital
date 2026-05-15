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
  Instagram
} from "lucide-react";
import { useState, useEffect } from "react";

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
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm">
            <span className="text-secondary font-display font-bold text-xl">WK</span>
          </div>
          <span className={`font-display font-bold text-xl tracking-tighter ${isScrolled ? "text-primary" : "text-primary md:text-white"}`}>
            WARMI <span className="text-secondary">KAPITAL</span>
          </span>
        </div>

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
          <button className="bg-secondary text-white px-6 py-2 rounded-sm text-sm font-semibold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20">
            Agenda una consulta
          </button>
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
            <button className="bg-primary text-white py-4 rounded-sm font-semibold">
              Agenda una consulta
            </button>
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
              <button className="bg-secondary text-white px-8 py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all group">
                Agenda una consulta <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
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
          >
            <span className="text-secondary font-display font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Quiénes somos</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
              Más que consultores, somos <span className="text-secondary font-accent italic font-normal">aliados estratégicos</span> de tu crecimiento.
            </h2>
            <div className="space-y-6 text-carbon/80 text-lg leading-relaxed">
              <p>
                En Warmi Kapital entendemos que cada decisión legal o financiera tiene un impacto profundo en la vida de las personas y el futuro de las empresas. Por ello, integramos el rigor técnico con una visión humana y corporativa.
              </p>
              <p>
                No solo resolvemos problemas legales; entendemos contextos, humanizamos las finanzas y traducimos lo complejo en claridad estratégica. Nuestro enfoque es preventivo, sólido e inteligente.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="border-l-2 border-secondary pl-6">
                <h4 className="text-2xl font-display font-bold text-primary mb-1">+10</h4>
                <p className="text-sm text-carbon/60 uppercase tracking-wider font-bold">Años de Criterio</p>
              </div>
              <div className="border-l-2 border-secondary pl-6">
                <h4 className="text-2xl font-display font-bold text-primary mb-1">100%</h4>
                <p className="text-sm text-carbon/60 uppercase tracking-wider font-bold">Enfoque Humano</p>
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
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1573164060897-425941c30241?q=80&w=2069&auto=format&fit=crop" 
                alt="Professional consultation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary z-0 rounded-sm opacity-10" />
            <div className="absolute -top-6 -left-6 border-2 border-secondary w-32 h-32 z-0 opacity-40" />
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
              className="card-premium group hover:bg-primary hover:text-white transition-all duration-500"
            >
              <div className="mb-6 bg-primary/5 w-16 h-16 flex items-center justify-center rounded-sm group-hover:bg-white/10">
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
              <p className="text-carbon/60 group-hover:text-white/70 leading-relaxed">
                {item.description}
              </p>
              <div className="mt-8 flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
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
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 translate-x-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md rounded-sm p-12 border border-white/10"
          >
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full border-2 border-secondary flex items-center justify-center text-secondary mb-4 italic font-accent text-lg">Legal</div>
                  <Scale size={32} className="text-white/20" />
                </div>
                <div className="text-4xl font-display font-bold text-secondary">+</div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full border-2 border-secondary flex items-center justify-center text-secondary mb-4 italic font-accent text-lg">Financiero</div>
                  <TrendingUp size={32} className="text-white/20" />
                </div>
              </div>
              
              <div className="h-px bg-white/10 w-full" />
              
              <div className="text-center">
                <h3 className="text-2xl font-display font-bold mb-2">Decisiones Inteligentes</h3>
                <p className="text-white/50 text-sm">El diferencial que asegura tu futuro.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
            size="lg" 
          />
          <TeamMember 
            name="Natali" 
            role="Socia · Ing. de Minas" 
            image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop" 
            size="lg" 
          />
        </div>

        {/* Support Team */}
        <div className="mb-20">
          <h5 className="text-center text-primary font-display font-bold mb-12 opacity-50 uppercase tracking-[0.3em] text-xs">Asistentes Junior</h5>
          <div className="grid grid-cols-2 md:grid-cols-2 max-w-2xl mx-auto gap-12">
            <TeamMember name="Belen" role="Asistente Junior" image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" />
            <TeamMember name="Stefani" role="Asistente Junior" image="https://images.unsplash.com/photo-1544005313-921f44a4ea06?q=80&w=1976&auto=format&fit=crop" />
          </div>
        </div>

        {/* External consultants */}
        <div>
          <h5 className="text-center text-primary font-display font-bold mb-12 opacity-50 uppercase tracking-[0.3em] text-xs">Consultoras Externas</h5>
          <div className="grid grid-cols-2 md:grid-cols-2 max-w-2xl mx-auto gap-12">
            <TeamMember name="Betsi" role="Especialista de OxI" image="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop" />
            <TeamMember name="Alexi" role="Especialista en OxI" image="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop" />
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
                  <div>
                    <h5 className="font-display font-bold text-secondary mb-1 uppercase tracking-widest text-xs">Ubicación</h5>
                    <p className="text-white/90">Sede Principal, Norte del País</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-secondary p-3 rounded-sm">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-secondary mb-1 uppercase tracking-widest text-xs">Teléfono</h5>
                    <p className="text-white/90">+51 900 000 000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-secondary p-3 rounded-sm">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-secondary mb-1 uppercase tracking-widest text-xs">Email</h5>
                    <p className="text-white/90">contacto@warmikapital.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 md:p-20">
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-primary/60 mb-2">Nombre Completo</label>
                  <input type="text" className="w-full border-b border-primary/10 py-3 focus:outline-none focus:border-secondary transition-colors" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-primary/60 mb-2">Email Corporativo</label>
                  <input type="email" className="w-full border-b border-primary/10 py-3 focus:outline-none focus:border-secondary transition-colors" placeholder="email@empresa.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-primary/60 mb-2">Mensaje</label>
                  <textarea rows={4} className="w-full border-b border-primary/10 py-3 focus:outline-none focus:border-secondary transition-colors resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>
                <button className="w-full bg-secondary text-white py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 uppercase tracking-[0.2em] text-sm mt-8">
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
              <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-sm">
                <span className="text-primary font-display font-bold text-xl">WK</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter">
                WARMI <span className="text-secondary">KAPITAL</span>
              </span>
            </div>
            <p className="text-white/50 leading-relaxed mb-8">
              Firma jurídico-financiera que combina rigor, visión y humanidad para acompañar decisiones que construyen futuro.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h5 className="font-display font-bold text-secondary mb-8 uppercase tracking-widest text-xs">Empresa</h5>
            <div className="flex flex-col gap-4 text-white/60">
              <a href="#" className="hover:text-white transition-colors">Nosotros</a>
              <a href="#" className="hover:text-white transition-colors">Servicios</a>
              <a href="#" className="hover:text-white transition-colors">Equipo</a>
              <a href="#" className="hover:text-white transition-colors">Decisión Estratégica</a>
            </div>
          </div>

          <div className="col-span-1">
            <h5 className="font-display font-bold text-secondary mb-8 uppercase tracking-widest text-xs">Especialidades</h5>
            <div className="flex flex-col gap-4 text-white/60">
              <a href="#" className="hover:text-white transition-colors">Derecho Financiero</a>
              <a href="#" className="hover:text-white transition-colors">Derecho Tributario</a>
              <a href="#" className="hover:text-white transition-colors">Propiedad Intelectual</a>
              <a href="#" className="hover:text-white transition-colors">Obras por Impuestos</a>
            </div>
          </div>

          <div className="col-span-1">
            <h5 className="font-display font-bold text-secondary mb-8 uppercase tracking-widest text-xs">Legal</h5>
            <div className="flex flex-col gap-4 text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
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
      <Footer />
    </div>
  );
}

