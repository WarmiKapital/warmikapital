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
  ChevronDown,
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
  MessageSquare,
  Building2,
  LineChart,
  ShieldAlert,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

// Helper for WhatsApp
const getWhatsAppUrl = (data?: { name?: string, email?: string, message?: string }) => {
    const phoneNumber = "51932340282";
    let message = "Hola, me gustaría agendar una consulta en Warmi Kapital.";
    
    if (data?.name || data?.email || data?.message) {
        message += "\n";
        if (data.name) message += `\nNombre: ${data.name}`;
        if (data.email) message += `\nEmail: ${data.email}`;
        if (data.message) message += `\nMensaje: ${data.message}`;
    }
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

// Sound and Animation helpers
const playPremiumPop = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.type = "sine";
    // Warm organic UI bubble-pop: start mid-high (520Hz) and sweep down to 80Hz very rapidly
    osc.frequency.setValueAtTime(520, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.08);
    
    gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.11);
  } catch (error) {
    // Elegant ignore if blocked
  }
};

const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(media.matches);
    const listener = (e: MediaQueryListEvent) => setReduced(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);
  return reduced;
};

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100] bg-transparent pointer-events-none">
      <div 
        className="h-full bg-secondary transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

const ElegantDivider = () => (
  <div className="flex items-center justify-center my-24 opacity-30 max-w-lg mx-auto select-none pointer-events-none">
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-secondary"></div>
    <div className="w-1.5 h-1.5 rotate-45 border border-secondary mx-4 bg-transparent"></div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-secondary"></div>
  </div>
);

const WhatsAppFloatingButton = () => {
  return (
    <motion.a 
      href={getWhatsAppUrl()} 
      target="_blank" 
      rel="noopener noreferrer" 
      onClick={playPremiumPop}
      className="fixed bottom-6 right-6 bg-secondary text-primary p-4 rounded-full shadow-lg z-50 transition-all shadow-secondary/20 hover:bg-white hover:text-primary cursor-pointer"
      animate={{
        scale: [1, 1.06, 1],
        boxShadow: [
          "0 10px 25px -5px rgba(181, 160, 114, 0.4)",
          "0 10px 25px 12px rgba(181, 160, 114, 0.15)",
          "0 10px 25px -5px rgba(181, 160, 114, 0.4)"
        ]
      }}
      transition={{
        repeat: Infinity,
        repeatDelay: 5,
        duration: 2.5,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
    >
       <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
       </svg>
    </motion.a>
  );
};

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
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header>
      <ScrollProgressBar />
      <nav aria-label="Navegación principal" className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#inicio" aria-label="Warmi Kapital - Ir al inicio" className="flex items-center gap-2 transition-transform active:scale-95 duration-200">
            <img 
              src="https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1778816751/Recurso_9_hkq6bi.png" 
              alt="Warmi Kapital Logo" 
              className={`h-12 md:h-16 w-auto transition-all ${isScrolled ? "brightness-100" : "md:brightness-0 md:invert"}`}
              referrerPolicy="no-referrer"
              width="180"
              height="64"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors relative py-1.5 group ${isScrolled ? "text-carbon" : "text-white"}`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <motion.a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={playPremiumPop}
              whileHover={{ scale: 1.05, y: -1, boxShadow: "0 10px 20px -5px rgba(181, 160, 114, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-secondary text-primary px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-white transition-all shadow-lg shadow-secondary/20 font-sans tracking-wide cursor-pointer"
            >
              Agenda Ejecutiva
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button 
            type="button"
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden text-primary transition-transform active:scale-90 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
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
                  className="text-lg font-medium text-carbon hover:text-secondary py-1 border-b border-gray-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={getWhatsAppUrl()} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={playPremiumPop}
                className="bg-secondary text-white py-4 rounded-sm font-semibold text-center transition-transform active:scale-95 duration-150"
              >
                Agenda una consulta
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

const Hero = () => {
  const reduced = useReducedMotion();

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants: any = {
    hidden: { 
      opacity: 0, 
      y: reduced ? 0 : 25, 
      filter: reduced ? "none" : "blur(4px)" 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "none",
      transition: { duration: 0.9, ease: "easeOut" } 
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Warmi Kapital - Firma Jurídico Financiera" 
          className="w-full h-full object-cover opacity-30 grayscale"
          referrerPolicy="no-referrer"
          animate={reduced ? {} : { scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />

        {/* Ambient floating lights */}
        {!reduced && (
          <>
            <motion.div 
              animate={{ 
                scale: [1, 1.15, 1], 
                opacity: [0.15, 0.25, 0.15],
                x: [0, 20, 0],
                y: [0, -15, 0]
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-secondary/35 blur-[120px] pointer-events-none mix-blend-screen"
            />
            <motion.div 
              animate={{ 
                scale: [1.1, 0.95, 1.1], 
                opacity: [0.1, 0.18, 0.1],
                x: [0, -30, 0],
                y: [0, 20, 0]
              }}
              transition={{ 
                duration: 16, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute bottom-1/3 left-10 w-[350px] h-[350px] rounded-full bg-secondary/25 blur-[100px] pointer-events-none mix-blend-screen"
            />
          </>
        )}
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20 pb-32">
        <div className="max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariants} className="text-secondary font-sans font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
              Boutique Legal y Financiera
            </motion.span>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-display font-medium text-white leading-[1.1] mb-8">
              El escudo corporativo para empresas que <span className="text-secondary italic">escalan sin vértigo.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/80 mb-6 max-w-3xl font-sans font-light leading-relaxed">
              Tu negocio ya genera valor; nuestro trabajo es blindarlo. Estructuración legal, tributaria y financiera para directivos estratégicos enfocados en resultados.
            </motion.p>
            <motion.p variants={itemVariants} className="text-sm text-secondary/90 mb-12 max-w-3xl font-sans uppercase tracking-[0.1em] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span> Estudio Jurídico Especializado en Derecho y Finanzas Corporativas.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
              <motion.a 
                href={getWhatsAppUrl()} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={playPremiumPop}
                whileHover={{ scale: 1.04, y: -2, boxShadow: "0 20px 35px -10px rgba(181, 160, 114, 0.45)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-secondary text-primary px-8 py-4 rounded-sm font-sans font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all duration-300 shadow-xl shadow-secondary/10 cursor-pointer text-center"
              >
                Agendar Consulta Ejecutiva
              </motion.a>
              <motion.a 
                href="#nosotros" 
                whileHover={{ scale: 1.03, y: -1, backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(255, 255, 255, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="border border-white/20 text-white px-8 py-4 rounded-sm font-sans font-semibold flex items-center justify-center transition-all duration-300"
              >
                Conocer la Firma
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-primary/50 backdrop-blur-md">
         <div className="container mx-auto px-6 py-6 font-sans">
             <div className="flex flex-wrap justify-between items-center gap-6 text-xs md:text-sm text-white/60 tracking-wider">
                 <div className="flex items-center gap-3 font-semibold text-white/90"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> +15 Años de Experiencia</div>
                 <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Trujillo & Lima</div>
                 <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Integración Legal + Financiera</div>
                 <div className="flex items-center gap-3 hidden lg:flex"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Corporativo · Tributario · Minería · OxI</div>
             </div>
         </div>
      </div>
    </section>
  );
};

const About = () => {
  const reduced = useReducedMotion();

  return (
    <section id="nosotros" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: reduced ? 0 : 30, filter: reduced ? "none" : "blur(4px)" }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "none" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={reduced ? {} : { y: -6, scale: 1.01 }}
            className="lg:col-span-5 relative group"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl relative z-10 w-full max-w-md mx-auto lg:mx-0 bg-white">
              <img 
                src="https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1778870973/KarenG_eo2cyd.png" 
                alt="Karen Gamarra - CEO & Founder" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary z-0 rounded-sm transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2" />
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-secondary/20 z-0 rounded-sm transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
            
            {/* Signature Badge */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="absolute bottom-10 -right-6 lg:-right-12 z-20 bg-white p-6 shadow-xl w-64 border-l-4 border-secondary hidden sm:block"
            >
               <span className="block font-display font-medium text-lg text-primary">Karen Gamarra</span>
               <span className="block font-sans text-xs uppercase tracking-widest text-carbon/60 mt-1">CEO & Founder</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reduced ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 lg:pl-10 text-primary"
          >
            <span className="text-secondary font-sans font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">Liderazgo & Visión</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-8 leading-[1.1] text-primary tracking-tight">
              Construyendo la <span className="text-secondary italic">consultora del futuro</span> para el norte del país.
            </h2>
            <div className="space-y-6 text-carbon/80 text-lg leading-relaxed font-sans font-light">
              <p>
                "Mi visión con Warmi Kapital siempre ha sido clara: transformar el paradigma de la consultoría tradicional. El sector legal y financiero a menudo peca de ser frío, distante y poco empático con la realidad operativa del empresario."
              </p>
              <p>
                "Creé esta firma para que las empresas y líderes del mid-market peruano, especialmente en el norte del país, tengan acceso a una estructuración técnica de nivel corporativo global, pero entregada con la cercanía, la claridad y el trato humano que las decisiones críticas exigen. Actuamos como verdaderos socios estratégicos para su negocio."
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-primary/10 pt-10">
              <div>
                <h4 className="text-4xl font-display font-medium text-primary mb-2">+15</h4>
                <p className="text-xs text-carbon/50 uppercase tracking-widest font-semibold font-sans">Años de Expertise</p>
              </div>
              <div>
                <h4 className="text-4xl font-display font-medium text-primary mb-2">100%</h4>
                <p className="text-xs text-carbon/50 uppercase tracking-widest font-semibold font-sans">Enfoque Humano</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VulnerabilitySection = () => {
  const reduced = useReducedMotion();

  return (
    <section className="py-24 bg-carbon text-white relative border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center grayscale mix-blend-overlay" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: reduced ? 0 : 35, filter: reduced ? "none" : "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "none" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-secondary font-sans font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
            El Problema del Crecimiento
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium leading-[1.2] mb-8 tracking-tight !text-white">
            Tu empresa factura millones, pero tu <span className="!text-secondary italic">estructura legal</span> es frágil.
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-sans font-light leading-relaxed mb-12">
            El mayor riesgo de un CEO no son las bajas ventas, es el crecimiento sin orden. 
            Contratos débiles, exposición ante SUNAT, accionistas desprotegidos y 
            contingencias que amenazan con destruir en meses lo que construiste en años.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 text-left border-t border-white/10 pt-12">
             <motion.div whileHover={{ y: -4 }} className="transition-transform duration-300">
                <h4 className="text-secondary font-display text-xl mb-3 font-medium">1. Fiscos y Multas</h4>
                <p className="text-white/60 text-sm font-light leading-relaxed">Una auditoría mal manejada o una estructura fiscal ineficiente puede asfixiar el flujo de caja corporativo.</p>
             </motion.div>
             <motion.div whileHover={{ y: -4 }} className="transition-transform duration-300">
                <h4 className="text-secondary font-display text-xl mb-3 font-medium">2. Sociedades de Papel</h4>
                <p className="text-white/60 text-sm font-light leading-relaxed">Accionistas sin acuerdos claros terminan bloqueando las decisiones críticas y amenazando la operatividad.</p>
             </motion.div>
             <motion.div whileHover={{ y: -4 }} className="transition-transform duration-300">
                <h4 className="text-secondary font-display text-xl mb-3 font-medium">3. Contratos Vacíos</h4>
                <p className="text-white/60 text-sm font-light leading-relaxed">Plantillas descargadas, o acuerdos sin rigor legal que exponen injustificadamente tu patrimonio personal.</p>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const reduced = useReducedMotion();
  const services = [
    {
      title: "Arquitectura Corporativa y M&A",
      description: "Construimos empresas y blindamos patrimonios. Estructuras societarias, acuerdos de accionistas y operaciones de fusiones con máxima seguridad corporativa.",
      icon: <Building2 className="text-secondary" size={32} />,
    },
    {
      title: "Defensa y Escudo Tributario",
      description: "Rentabilidad protegida. Planeamiento fiscal corporativo, prevención de contingencias y defensa frontal y agresiva ante auditorías de SUNAT.",
      icon: <ShieldCheck className="text-secondary" size={32} />,
    },
    {
      title: "Ingeniería Financiera",
      description: "Estructuración de flujos, reestructuración estratégica de deuda pesada y modelado financiero para asegurar tu liquidez al crecer.",
      icon: <LineChart className="text-secondary" size={32} />,
    },
    {
      title: "Minería y Energía",
      description: "Desbloqueo de concesiones y blindaje de contratos a prueba de fallas. Seguridad jurídica implacable para operaciones de alto CAPEX.",
      icon: <Pickaxe className="text-secondary" size={32} />,
    },
    {
      title: "Protección de Intangibles",
      description: "El valor real de tu negocio. Auditamos, protegemos y monetizamos tus marcas, patentes y know-how técnico a nivel global.",
      icon: <ShieldAlert className="text-secondary" size={32} />,
    },
    {
      title: "Obras por Impuestos (OxI)",
      description: "Transforma impuestos en influencia. Acompañamiento técnico, financiero y legal desde el diseño de pre-inversión hasta la ejecución.",
      icon: <FileCheck className="text-secondary" size={32} />,
    },
  ];

  return (
    <section id="servicios" className="py-32 bg-bg-sand overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: reduced ? 0 : 30, filter: reduced ? "none" : "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "none" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-secondary font-sans font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">Capacidades Estratégicas</span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6 tracking-tight">Blindaje y Estructuración</h2>
          <p className="text-carbon/70 text-lg font-sans font-light">
            Soluciones jurídicas y financieras de alta especialidad. Operamos como el escudo estratégico de su empresa frente a los escenarios corporativos más exigentes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: reduced ? 0 : 40, filter: reduced ? "none" : "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "none" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: reduced ? 0 : idx * 0.1, ease: "easeOut" }}
              whileHover={reduced ? {} : { y: -8, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(13, 43, 94, 0.08)" }}
              className="bg-white border text-left p-10 lg:p-12 border-primary/5 hover:border-secondary/30 transition-all duration-500 group flex flex-col h-full rounded-sm"
            >
              <motion.div 
                whileHover={reduced ? {} : { scale: 1.1, rotate: 3 }}
                className="mb-8 mb-auto opacity-80 group-hover:opacity-100 transition-all duration-300 w-fit"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl font-display font-medium mb-4 text-primary tracking-tight group-hover:text-secondary transition-colors">{item.title}</h3>
              <p className="text-carbon/70 leading-relaxed font-sans font-light text-sm lg:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentiator = () => {
  const reduced = useReducedMotion();
  const points = [
    {
      title: "Rigor Corporativo, Trato Local",
      desc: "Metodologías de firmas globales adaptadas a la realidad del mid-market y empresas peruanas.",
      icon: <Building2 className="text-secondary" size={24} />
    },
    {
      title: "Intelectualidad Financiera",
      desc: "Alineamos la estrategia legal con el desempeño económico empresarial. Entendemos los márgenes y la estructura de capital detrás de cada decisión corporativa.",
      icon: <LineChart className="text-secondary" size={24} />
    },
    {
      title: "Visión Preventiva Total",
      desc: "Gestión anticipada de contingencias. Solucionamos el problema antes de que afecte la operatividad o reputación de su empresa.",
      icon: <ShieldAlert className="text-secondary" size={24} />
    },
    {
      title: "Partnership Auténtico",
      desc: "Nos involucramos en su negocio. Somos asesores que responden claramente y se sientan en su mesa de directorio.",
      icon: <Users className="text-secondary" size={24} />
    }
  ];

  return (
    <section className="py-32 bg-primary text-white border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: reduced ? 0 : -35, filter: reduced ? "none" : "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "none" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="text-secondary font-sans font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">El Estándar Warmi</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-8 leading-[1.2] tracking-tight !text-white">
              ¿Por qué las empresas nos confían sus decisiones <span className="!text-secondary italic">críticas</span>?
            </h2>
            <p className="text-lg text-white/70 font-sans font-light leading-relaxed mb-10">
              Transformamos la complejidad legal y tributaria en ventajas competitivas claras. Nuestro modelo elimina la burocracia tradicional de los grandes estudios.
            </p>
            <motion.a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={playPremiumPop}
              whileHover={{ x: 6, color: "#fff" }}
              className="inline-flex items-center gap-3 text-secondary font-sans font-semibold uppercase tracking-widest text-xs hover:gap-4 transition-all duration-300 mt-4 cursor-pointer"
            >
              Iniciar estructuración estratégica <ArrowRight size={16} />
            </motion.a>
          </motion.div>
          
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {points.map((pt, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: reduced ? 0 : 25, filter: reduced ? "none" : "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "none" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: reduced ? 0 : idx * 0.1 }}
                whileHover={reduced ? {} : { y: -4 }}
                className="group cursor-default"
              >
                <div className="mb-6 bg-white/5 w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-300 group-hover:bg-secondary group-hover:text-primary text-secondary">
                  {pt.icon}
                </div>
                <h3 className="text-xl font-display font-medium mb-3 !text-white group-hover:!text-secondary transition-colors">{pt.title}</h3>
                <p className="text-white/60 font-sans font-light leading-relaxed text-sm">
                  {pt.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type TeamMemberData = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  initials?: string;
  credentials?: string;
};

const TeamProfile = ({ member, tier }: { member: TeamMemberData, tier: 'leadership' | 'consultant' | 'public_procurement' | 'legal' }) => {
  const reduced = useReducedMotion();

  const renderImageOrInitials = () => {
    if (member.image) {
      return (
        <img 
          src={member.image} 
          alt={member.imageAlt || member.name} 
          className={`w-full h-full object-cover ${member.imagePosition || 'object-top'} grayscale mix-blend-multiply opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out origin-top`} 
          loading="lazy" 
          referrerPolicy="no-referrer" 
        />
      );
    }
    return (
      <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary/40 font-display font-medium text-4xl sm:text-5xl mix-blend-multiply group-hover:bg-secondary/10 group-hover:text-secondary/80 transition-colors duration-500">
        {member.initials}
      </div>
    );
  };

  const nameSize = tier === 'leadership' 
    ? "text-2xl sm:text-3xl" 
    : tier === 'legal' 
    ? "text-lg sm:text-xl" 
    : "text-xl sm:text-2xl";

  const bioSize = tier === 'leadership' ? "text-sm sm:text-base" : "text-sm";

  return (
    <motion.div 
      initial={{ opacity: 0, y: reduced ? 0 : 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={reduced ? {} : { y: -4 }}
      className="group flex flex-col h-full bg-white/50 hover:bg-white border border-primary/5 hover:border-secondary/30 p-4 sm:p-5 rounded-[6px] shadow-2xs hover:shadow-md transition-all duration-500"
    >
      <div className="overflow-hidden aspect-[4/5] w-full mb-5 relative bg-white border border-primary/10 group-hover:border-secondary/40 transition-all duration-500 rounded-[4px] shadow-xs group-hover:shadow-md">
        {renderImageOrInitials()}
      </div>
      <div className="flex-1 flex flex-col border-l-2 border-secondary/60 group-hover:border-secondary pl-4 sm:pl-5 py-1 transition-colors duration-300">
        <h4 className={`font-sans font-bold ${nameSize} text-primary mb-1 tracking-tight`}>
          {member.name}
        </h4>
        <p className="text-secondary font-sans font-semibold text-xs uppercase tracking-[0.18em] mb-2">
          {member.role}
        </p>
        {member.credentials && (
          <p className="text-primary/80 font-sans font-medium text-xs tracking-wide mb-3 bg-primary/5 px-2.5 py-1 rounded-xs w-fit border border-primary/10">
            {member.credentials}
          </p>
        )}
        <p className={`text-carbon/80 font-sans font-light leading-relaxed ${bioSize} mt-1`}>
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
};

const CriminalComplianceBlock = () => {
  const reduced = useReducedMotion();

  const formacion = [
    "Doctorando en Derecho.",
    "Maestro en Derecho Penal y Ciencias Criminológicas.",
    "Abogado por la Universidad Nacional de Trujillo.",
    "Especialista en Criminal Compliance por la Universidad de Granada, España."
  ];

  const trayectoria = [
    "Más de 12 años de experiencia en litigación penal.",
    "Docente universitario.",
    "Autor del libro “Delitos contra la Administración Pública”.",
    "Investigador RENACYT Nivel VII."
  ];

  const areas = [
    "Derecho Penal Económico",
    "Derecho Penal Empresarial",
    "Delitos contra la Administración Pública",
    "Criminal Compliance",
    "Litigio penal de alta complejidad"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: reduced ? 0 : 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-[1160px] mx-auto my-16 bg-[#FAF8F5] border border-primary/10 rounded-[6px] shadow-sm overflow-hidden group hover:border-secondary/30 transition-all duration-500"
    >
      <div className="grid lg:grid-cols-12 items-stretch">
        {/* Columna izquierda: Fotografía (~36%) */}
        <div className="lg:col-span-5 xl:col-span-4 relative min-h-[380px] sm:min-h-[440px] lg:min-h-full bg-primary/5 overflow-hidden">
          <img 
            src="https://res.cloudinary.com/dpo7kthwf/image/upload/f_auto,q_auto/v1785800495/IMG-20260414-WA0083.jpg_ywjewq.jpg" 
            alt="Godofredo André García León - Consultor especializado en Derecho Penal Económico y Criminal Compliance" 
            className="w-full h-full object-cover object-top grayscale mix-blend-multiply opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out origin-top" 
            loading="lazy" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
            <span className="text-secondary font-sans font-semibold text-[10px] uppercase tracking-[0.2em] block mb-1">
              INCORPORACIÓN ESTRATÉGICA
            </span>
            <h3 className="font-display font-medium text-xl text-white">
              Godofredo André García León
            </h3>
          </div>
        </div>

        {/* Columna derecha: Información Profesional (~64%) */}
        <div className="lg:col-span-7 xl:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            {/* Tag superior */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span className="text-secondary font-sans font-semibold text-xs uppercase tracking-[0.2em]">
                INCORPORACIÓN ESTRATÉGICA
              </span>
            </div>

            {/* Nombre */}
            <h3 className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight mb-1">
              Godofredo André García León
            </h3>

            {/* Línea dorada interactiva */}
            <div className="w-12 group-hover:w-28 h-0.5 bg-secondary/80 transition-all duration-500 mb-3" />

            {/* Cargo */}
            <p className="text-secondary font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.12em] mb-4">
              Consultor especializado en Derecho Penal Económico y Criminal Compliance
            </p>

            {/* Introducción */}
            <p className="text-carbon/90 font-sans font-normal text-sm sm:text-base leading-relaxed mb-6 bg-white/80 p-4 rounded-sm border-l-2 border-secondary shadow-2xs">
              Su incorporación fortalece el área penal estratégica y de cumplimiento de Warmi Kapital, completando una propuesta de protección integral para empresas, directivos y organizaciones.
            </p>

            {/* Credenciales (Organizadas en dos grupos) */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {/* Formación */}
              <div className="space-y-2.5">
                <h4 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-primary/80 flex items-center gap-1.5 pb-1 border-b border-primary/10">
                  <span className="w-1 h-3 bg-secondary rounded-full inline-block"></span>
                  Formación Académica
                </h4>
                <ul className="space-y-2">
                  {formacion.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-carbon/80 leading-snug">
                      <span className="text-secondary text-xs mt-0.5 font-bold">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trayectoria */}
              <div className="space-y-2.5">
                <h4 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-primary/80 flex items-center gap-1.5 pb-1 border-b border-primary/10">
                  <span className="w-1 h-3 bg-secondary rounded-full inline-block"></span>
                  Trayectoria y Reconocimiento
                </h4>
                <ul className="space-y-2">
                  {trayectoria.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-carbon/80 leading-snug">
                      <span className="text-secondary text-xs mt-0.5 font-bold">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Áreas de Experiencia */}
            <div className="mb-2">
              <h4 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-primary/80 mb-2.5">
                Áreas de Experiencia
              </h4>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-primary/90 font-sans">
                {areas.map((area, idx) => (
                  <span key={idx} className="inline-flex items-center gap-2 border-b border-primary/10 pb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cierre Estratégico (Banda horizontal azul institucional al pie) */}
      <div className="bg-primary text-white p-4 sm:p-5 text-xs sm:text-sm font-sans font-light leading-relaxed border-t border-secondary/20 flex items-center gap-3">
        <span className="w-1.5 h-8 bg-secondary shrink-0 rounded-full hidden sm:block"></span>
        <p className="text-white/90">
          <strong className="text-secondary font-medium">Con su incorporación</strong>, Warmi Kapital integra la dimensión penal a sus capacidades corporativas, financieras y regulatorias, fortaleciendo la protección integral de las empresas.
        </p>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const teamData = {
    leadership: [
      {
        name: "Karen Gamarra",
        role: "CEO & Founder",
        bio: "Abogada con más de 18 años de experiencia en derecho corporativo, financiero y regulatorio, con trayectoria en el sector público y privado. Ha liderado asuntos vinculados a mercado de valores, compliance, PLAFT, banca y estructuración corporativa, además de desempeñarse como docente universitaria y árbitra en arbitraje comercial.",
        image: "https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1778870973/KarenG_eo2cyd.png"
      },
      {
        name: "Natali Evangelista",
        role: "Socia",
        bio: "Ingeniera de minas y socia de Warmi Kapital. Aporta experiencia en gestión contractual y operación del sector minero, con una mirada técnica clave para proyectos vinculados a minería, estructuración y desarrollo empresarial.",
        image: "https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1778870975/Natali_Evangelista_-_Topaz_Gigapixel_escala_2x_qg3uhj.png"
      }
    ],
    consultants: [
      {
        name: "Betsy Mori Rojas",
        role: "Consultora Especialista en Obras por Impuestos",
        bio: "Especialista en Obras por Impuestos y articulación público-privada. Cuenta con experiencia en estructuración, monitoreo e implementación de proyectos OxI para empresas, entidades públicas y organismos multilaterales.",
        image: "https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1778870943/BetsyM_hj6flc.png"
      },
      {
        name: "Alexi Berrú More",
        role: "Consultor Especialista en Comunicaciones para Proyectos OxI",
        bio: "Ingeniero electrónico y de telecomunicaciones con experiencia en diseño, gestión y supervisión de proyectos de inversión pública y Obras por Impuestos en salud, educación y seguridad ciudadana.",
        image: "https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1778870939/Alexi_vsbqbq.png"
      },
      {
        name: "Neimy Hernández Ortiz",
        role: "Consultora en gestión operativa, logística y seguridad ocupacional",
        bio: "Ingeniera Industrial colegiada y habilitada, con formación en sistemas integrados de gestión, logística, compras y seguridad ocupacional. Aporta experiencia en procesos operativos, mejora continua y gestión de riesgos laborales, con enfoque en orden, control y eficiencia para proyectos empresariales e industriales.",
        image: "https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1779301825/Neymi_zs2tyc.png"
      },
      {
        name: "Dra. Giovanna Ramos",
        role: "CONTADORA PÚBLICA COLEGIADA Y ABOGADA",
        bio: "Contadora pública colegiada y abogada, maestra en Gestión Pública y Desarrollo Local. Cuenta con experiencia en planeamiento y presupuesto, control gubernamental, tesorería, gestión administrativa y cumplimiento normativo, tanto en entidades públicas como en el sector privado.",
        image: "https://res.cloudinary.com/dpo7kthwf/image/upload/v1788399653/DSC00276_liyca9.jpg",
        imageAlt: "Dra. Giovanna Ramos, contadora pública colegiada y abogada de Warmi Kapital."
      }
    ],
    publicProcurement: [
      {
        name: "Juan Miguel Rojas Ascón",
        role: "Jefe del Área de Licitaciones y Contrataciones con el Estado",
        credentials: "Árbitro RNA – OSCE · Máster en Contratación Pública, Castilla La Mancha",
        initials: "JR",
        image: "https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1779120447/Juan_Miguel_Rojas_Asc%C3%B3n_z4yriz.png",
        bio: "Abogado especializado en contratación pública, derecho de la construcción y arbitraje de infraestructura. Máster en Contratación Pública por la Universidad de Castilla La Mancha – España y maestrías en Derecho Civil y Gerencia de Proyectos. Ex abogado de la Dirección de Arbitraje Administrativo del OSCE. Árbitro activo en la CCL, PUCP, Colegio de Ingenieros y demás centros arbitrales del Perú. Especialista en contratos FIDIC y NEC. Docente en la Universidad ESAN y la UNHEVAL."
      },
      {
        name: "Roberto Lara Bravo",
        role: "Consultor Especialista en Contrataciones con el Estado y Derecho de la Construcción",
        credentials: "Gerente de Contratos · Maestría MDI CENTRUM–PUCP",
        initials: "RL",
        image: "https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1779120448/Roberto_Lara_Bravo_kwnx9e.png",
        bio: "Abogado colegiado (UNMSM) con más de 15 años de experiencia en contratación pública, administración de contratos de infraestructura y resolución de controversias. Maestría en Dirección y Gestión de Empresas Constructoras e Inmobiliarias – CENTRUM PUCP. Ha liderado áreas legales en proyectos de infraestructura que superan los 1,700 millones de soles bajo contratos FIDIC, NEC, Ley de Contrataciones del Estado y Obras por Impuestos."
      }
    ],
    legal: [
      {
        name: "María Belén Cubas Díaz",
        role: "Equipo Legal",
        bio: "Estudiante de Derecho en la UPAO, perteneciente al tercio superior y pasante en Warmi Kapital. Brinda soporte en la organización y seguimiento de tareas del área legal.",
        image: "https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1778870943/Belen_h1htt7.jpg"
      },
      {
        name: "Adriana Stefany Tuesta Carrión",
        role: "Equipo Legal",
        bio: "Bachiller egresada de la Facultad de Derecho de la UPAO y perteneciente al tercio superior. Acompaña procesos de soporte jurídico y gestión documental dentro del equipo.",
        image: "https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1778870944/Stefany_zno2ce.jpg"
      },
      {
        name: "Brisa Becerra Pérez",
        role: "PRACTICANTE PREPROFESIONAL",
        bio: "Inicia sus prácticas preprofesionales en Warmi Kapital, participando en actividades de apoyo y fortaleciendo su formación dentro de un entorno corporativo multidisciplinario.",
        image: "https://res.cloudinary.com/dpo7kthwf/image/upload/v1788399695/DSC00434_o9fova.jpg",
        imageAlt: "Brisa Becerra Pérez, practicante preprofesional de Warmi Kapital."
      }
    ]
  };

  return (
    <section id="equipo" className="py-24 sm:py-32 bg-bg-sand relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-secondary font-sans font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">Liderazgo Corporativo</span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6 tracking-tight">Capital Humano</h2>
          <p className="text-carbon/70 text-base sm:text-lg font-sans font-light">
            Un equipo estructurado bajo estándares de firmas globales. Integramos rigor jurídico, visión financiera y experiencia sectorial técnica.
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-16 sm:mb-20">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
            {teamData.leadership.map((member, idx) => (
              <TeamProfile key={idx} member={member} tier="leadership" />
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-primary/10 mb-16 max-w-6xl mx-auto"></div>

        {/* Highlighted Block: Criminal Compliance (Godofredo) */}
        <CriminalComplianceBlock />

        <div className="w-full h-px bg-primary/10 my-16 max-w-6xl mx-auto"></div>

        {/* Specialist Consultants */}
        <div className="mb-16 sm:mb-20">
           <h3 className="font-display font-medium text-2xl sm:text-3xl text-primary mb-10 sm:mb-12 text-center">Consultoría Especializada</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
             {teamData.consultants.map((member, idx) => (
               <TeamProfile key={idx} member={member} tier="consultant" />
             ))}
           </div>
        </div>

        <div className="w-full max-w-lg mx-auto h-px bg-primary/10 mb-16 sm:mb-20"></div>

        {/* Public Procurement Area */}
        <div className="mb-16 sm:mb-20">
           <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
             <h3 className="font-display font-medium text-3xl sm:text-4xl text-primary mb-4 tracking-tight">Área de Licitaciones y Contrataciones con el Estado</h3>
             <p className="text-carbon/70 text-sm sm:text-base font-sans font-light">Especialistas en contratación pública, administración de contratos de obra e infraestructura, y solución de controversias arbitrales con el Estado.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
             {teamData.publicProcurement.map((member, idx) => (
               <TeamProfile key={idx} member={member} tier="public_procurement" />
             ))}
           </div>
        </div>

        <div className="w-full max-w-lg mx-auto h-px bg-primary/10 mb-16 sm:mb-20"></div>

        {/* Legal Team */}
        <div>
           <h3 className="font-display font-medium text-2xl text-primary mb-10 sm:mb-12 text-center opacity-80">Soporte Legal</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {teamData.legal.map((member, idx) => (
                <TeamProfile key={idx} member={member} tier="legal" />
              ))}
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
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-primary mb-12 leading-[1.1] max-w-5xl mx-auto tracking-tight">
            Ser la firma jurídico-financiera de <span className="text-secondary italic">mayor influencia corporativa</span> en el norte del país.
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "¿Qué es Warmi Kapital?",
      answer: "Warmi Kapital es una firma boutique de consultoría legal, financiera y corporativa orientada a empresas en Perú, con especial presencia en Lima y Trujillo. Integramos una perspectiva jurídica preventiva con visión financiera estratégica, acompañando a directivos y organizaciones en sus decisiones corporativas más complejas con rigor técnico, agilidad operativa y trato cercano."
    },
    {
      question: "¿Qué servicios ofrece Warmi Kapital a las empresas?",
      answer: "Ofrecemos una propuesta integral de protección y estructuración empresarial. Nuestras especialidades incluyen arquitectura corporativa, M&A, defensa y planeamiento tributario, ingeniería financiera, asesoría en minería y energía, protección de intangibles, Obras por Impuestos (OxI), contrataciones con el Estado, así como consultoría en Derecho Penal Económico y Criminal Compliance."
    },
    {
      question: "¿Cómo ayuda Warmi Kapital a prevenir riesgos legales y financieros?",
      answer: "Trabajamos mediante un enfoque preventivo integral que identifica vulnerabilidades operativas, fiscales y corporativas antes de que se conviertan en contingencias graves. Auditamos contratos, estructuramos esquemas societarios sólidos, implementamos programas de cumplimiento normativo y diseñamos estrategias financieras que protegen el patrimonio de la empresa y de sus accionistas."
    },
    {
      question: "¿Warmi Kapital asesora proyectos de Obras por Impuestos?",
      answer: "Sí, brindamos acompañamiento técnico, financiero y legal completo en el mecanismo de Obras por Impuestos (OxI). Asesoramos a empresas privadas desde la etapa de preinversión y priorización de proyectos públicos hasta su ejecución y entrega formal, transformando el pago de impuestos en inversión de alto impacto social e institucional."
    },
    {
      question: "¿Brinda asesoría en Derecho Penal Económico y Criminal Compliance?",
      answer: "Sí, contamos con consultoría especializada en Derecho Penal Económico, delitos empresariales y Criminal Compliance. Desarrollamos e implementamos modelos de prevención de delitos ajustados a la realidad corporativa, protegiendo a la empresa, a su directorio y a sus ejecutivos frente a riesgos de responsabilidad penal y fiscal."
    },
    {
      question: "¿Dónde atiende Warmi Kapital?",
      answer: "Warmi Kapital atiende a empresas a nivel nacional en Perú, con sedes corporativas en Trujillo (Calle Cavero y Muñoz #735, Las Quintanas y Los Cipreses 468, Víctor Larco) y en Lima (Av. Emilio Cavenecia #151, Piso 7, Miraflores). Realizamos atenciones presenciales y sesiones ejecutivas virtuales para clientes de todo el país."
    },
    {
      question: "¿Cómo puedo solicitar una consulta con la firma?",
      answer: "Puede solicitar una sesión ejecutiva confidencial enviando sus datos a través de nuestro formulario de contacto en la web, escribiendo al correo electrónico contacto@warmikapital.com.pe o comunicándose vía WhatsApp al número +51 932 340 282. Nuestro equipo analizará su requerimiento para agendar un diagnóstico inicial."
    }
  ];

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-primary/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-secondary font-sans font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">
            Claridad &amp; Respuestas
          </span>
          <h2 id="faq-heading" className="text-3xl md:text-5xl font-display font-medium text-primary tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="text-carbon/70 text-base sm:text-lg font-sans font-light mt-4 max-w-2xl mx-auto">
            Información clave sobre nuestro modelo de consultoría, áreas de especialización y formas de atención estratégica.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-primary/10 rounded-sm bg-bg-sand/50 overflow-hidden transition-all duration-300 hover:border-secondary/30"
              >
                <button
                  type="button"
                  id={`faq-q-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${idx}`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 text-primary font-display font-medium text-lg md:text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-secondary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${idx}`}
                      role="region"
                      aria-labelledby={`faq-q-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-carbon/80 font-sans font-light text-base leading-relaxed border-t border-primary/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleWhatsappFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(getWhatsAppUrl({ name: formData.name, email: formData.email, message: formData.message }), "_blank");
  };

  return (
    <section id="contacto" aria-labelledby="contact-heading" className="py-24 bg-bg-sand">
      <div className="container mx-auto px-6">
        <div className="bg-primary rounded-sm shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
             <div className="p-12 md:p-20 text-white flex flex-col justify-center">
              <span className="text-secondary font-sans font-semibold text-xs uppercase tracking-[0.2em] mb-6 block">Diagnóstico Inicial</span>
              <h2 id="contact-heading" className="text-4xl md:text-5xl font-display font-medium mb-8 tracking-tight leading-[1.1] !text-white">
                Hablemos de tu siguiente <span className="!text-secondary italic">decisión crítica.</span>
              </h2>
              <p className="text-white/60 text-lg mb-16 font-light leading-relaxed max-w-md">
                Agenda una sesión ejecutiva para analizar la exposición legal y financiera de tu empresa, con absoluta reserva profesional.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-secondary p-3 rounded-sm">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-secondary mb-1 uppercase tracking-widest text-xs">Ubícanos en</h3>
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
                    <h3 className="font-display font-bold text-secondary mb-1 uppercase tracking-widest text-xs">Teléfono</h3>
                    <p className="text-white/90">+51 932 340 282</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-secondary p-3 rounded-sm">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-secondary mb-1 uppercase tracking-widest text-xs">Email</h3>
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
                <button type="submit" className="w-full bg-secondary text-primary py-4 rounded-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary hover:text-white hover:border-white border border-transparent transition-all hover:shadow-2xl hover:shadow-primary/20 uppercase tracking-[0.2em] text-sm mt-8 font-sans">
                  Solicitar Sesión Confidencial <ArrowRight size={18} />
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20 text-white">
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
            <h3 className="font-display font-bold !text-secondary mb-8 uppercase tracking-widest text-xs">Empresa</h3>
            <div className="flex flex-col gap-4 text-white/60">
              <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
              <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
              <a href="#equipo" className="hover:text-white transition-colors">Equipo</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-display font-bold !text-secondary mb-8 uppercase tracking-widest text-xs">Especialidades</h3>
            <div className="flex flex-col gap-4 text-white/60">
              <a href="#servicios" className="hover:text-white transition-colors">Derecho Financiero</a>
              <a href="#servicios" className="hover:text-white transition-colors">Derecho Tributario</a>
              <a href="#servicios" className="hover:text-white transition-colors">Propiedad Intelectual</a>
              <a href="#servicios" className="hover:text-white transition-colors">Obras por Impuestos</a>
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
    <div className="min-h-screen bg-bg-sand">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VulnerabilitySection />
        <Services />
        <Differentiator />
        <Team />
        <ElegantDivider />
        <Vision />
        <FAQ />
        <Contact />
      </main>
      <WhatsAppFloatingButton />
      <Footer />
    </div>
  );
}

