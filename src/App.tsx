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
  MessageSquare,
  Building2,
  LineChart,
  ShieldAlert,
  ArrowRight
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
  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-secondary text-primary p-4 rounded-full shadow-lg hover:bg-white hover:text-primary z-50 transition-transform hover:scale-110 shadow-secondary/20">
     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
     </svg>
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
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="bg-secondary text-primary px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-white transition-all shadow-lg shadow-secondary/20 font-sans tracking-wide">
            Agenda Ejecutiva
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
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-30 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20 pb-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-secondary font-sans font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
              Firma de Ingeniería Legal y Financiera
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-white leading-[1.1] mb-8">
              El escudo corporativo para empresas que <span className="text-secondary italic">escalan sin vértigo.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-6 max-w-3xl font-sans font-light leading-relaxed">
              Tu negocio ya genera valor; nuestro trabajo es blindarlo. Estructuración legal, tributaria y financiera para directivos estratégicos enfocados en resultados.
            </p>
            <p className="text-sm text-secondary/90 mb-12 max-w-3xl font-sans uppercase tracking-[0.1em] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span> Estudio Jurídico Boutique de Ingeniería Legal y Financiera.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="bg-secondary text-primary px-8 py-4 rounded-sm font-sans font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all duration-300">
                Agendar Consulta Ejecutiva
              </a>
              <button className="border border-white/20 text-white px-8 py-4 rounded-sm font-sans font-semibold hover:bg-white/5 transition-all duration-300">
                Conocer la Firma
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-primary/50 backdrop-blur-md">
         <div className="container mx-auto px-6 py-6 font-sans">
             <div className="flex flex-wrap justify-between items-center gap-6 text-sm text-white/60 tracking-wider">
                 <div className="flex items-center gap-2 font-semibold text-white/90"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> +15 Años de Experiencia</div>
                 <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Trujillo & Lima</div>
                 <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Integración Legal + Financiera</div>
                 <div className="flex items-center gap-2 hidden lg:flex"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Corporativo · Tributario · Minería · OxI</div>
             </div>
         </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="nosotros" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl relative z-10 w-full max-w-md mx-auto lg:mx-0">
              <img 
                src="https://res.cloudinary.com/dpo7kthwf/image/upload/q_auto/f_auto/v1778816586/KarenG_ipglgk.png" 
                alt="Karen Gamarra - CEO & Founder" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary z-0 rounded-sm" />
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-secondary/20 z-0 rounded-sm" />
            
            {/* Signature Badge */}
            <div className="absolute bottom-10 -right-6 lg:-right-12 z-20 bg-white p-6 shadow-xl w-64 border-l-4 border-secondary hidden sm:block">
               <span className="block font-display font-medium text-lg text-primary">Karen Gamarra</span>
               <span className="block font-sans text-xs uppercase tracking-widest text-carbon/60 mt-1">CEO & Founder</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 lg:pl-10 text-primary"
          >
            <span className="text-secondary font-sans font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">Liderazgo & Visión</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-8 leading-[1.1] text-primary">
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
  return (
    <section className="py-24 bg-carbon text-white relative border-y border-white/5">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center grayscale mix-blend-overlay" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-secondary font-sans font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
            El Problema del Crecimiento
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium leading-[1.2] mb-8">
            Tu empresa factura millones, pero tu <span className="text-secondary italic">estructura legal</span> es frágil.
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-sans font-light leading-relaxed mb-12">
            El mayor riesgo de un CEO no son las bajas ventas, es el crecimiento sin orden. 
            Contratos débiles, exposición ante SUNAT, accionistas desprotegidos y 
            contingencias que amenazan con destruir en meses lo que construiste en años.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 text-left border-t border-white/10 pt-12">
             <div>
                <h4 className="text-secondary font-display text-xl mb-3 font-medium">1. Fiscos y Multas</h4>
                <p className="text-white/60 text-sm font-light leading-relaxed">Una auditoría mal manejada o una estructura fiscal ineficiente puede asfixiar el flujo de caja corporativo.</p>
             </div>
             <div>
                <h4 className="text-secondary font-display text-xl mb-3 font-medium">2. Sociedades de Papel</h4>
                <p className="text-white/60 text-sm font-light leading-relaxed">Accionistas sin acuerdos claros terminan bloqueando las decisiones críticas y amenazando la operatividad.</p>
             </div>
             <div>
                <h4 className="text-secondary font-display text-xl mb-3 font-medium">3. Contratos Vacíos</h4>
                <p className="text-white/60 text-sm font-light leading-relaxed">Plantillas descargadas, o acuerdos sin rigor legal que exponen injustificadamente tu patrimonio personal.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
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
    <section id="servicios" className="py-32 bg-bg-sand">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-sans font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">Capacidades Estratégicas</span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">Blindaje y Estructuración</h2>
          <p className="text-carbon/70 text-lg font-sans font-light">
            Soluciones jurídicas y financieras de alta especialidad. Operamos como el escudo estratégico de su empresa frente a los escenarios corporativos más exigentes.
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
              className="bg-white border-t-2 border-transparent p-10 shadow-sm hover:shadow-xl hover:border-secondary transition-all duration-300 group flex flex-col h-full"
            >
              <div className="mb-6 mb-auto">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display font-medium mb-4 text-primary">{item.title}</h3>
              <p className="text-carbon/60 leading-relaxed font-sans font-light text-sm">
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
    <section className="py-32 bg-primary text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className="text-secondary font-sans font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">El Estándar Warmi</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-8 leading-[1.2]">
              ¿Por qué las empresas nos confían sus decisiones <span className="text-secondary italic">críticas</span>?
            </h2>
            <p className="text-lg text-white/70 font-sans font-light leading-relaxed mb-10">
              Transformamos la complejidad legal y tributaria en ventajas competitivas claras. Nuestro modelo elimina la burocracia tradicional de los grandes estudios.
            </p>
            <a href="https://wa.me/51932340282?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20en%20Warmi%20Kapital." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-secondary font-sans font-semibold uppercase tracking-wider text-sm hover:text-white transition-colors">
              Hablemos de negocios <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {points.map((pt, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="mb-6 bg-white/5 w-12 h-12 flex items-center justify-center rounded-sm">
                  {pt.icon}
                </div>
                <h3 className="text-xl font-display font-medium text-white mb-3">{pt.title}</h3>
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
  image: string;
};

const TeamProfile = ({ member, tier }: { member: TeamMemberData, tier: 'leadership' | 'consultant' | 'legal' }) => {
  if (tier === 'leadership') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group flex flex-col h-full"
      >
         <div className="overflow-hidden aspect-[4/5] w-full mb-8 relative bg-white border border-primary/5 group-hover:border-secondary/30 transition-colors duration-500 rounded-sm">
             <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 origin-bottom" referrerPolicy="no-referrer" />
         </div>
         <div className="flex-1 flex flex-col border-l-2 border-secondary pl-5 py-1">
             <h4 className="font-sans font-bold text-3xl text-primary mb-1">{member.name}</h4>
             <p className="text-secondary font-sans font-semibold text-xs uppercase tracking-[0.2em] mb-5">{member.role}</p>
             <p className="text-carbon/80 font-sans font-light leading-relaxed text-base">{member.bio}</p>
         </div>
      </motion.div>
    );
  }

  if (tier === 'consultant') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group flex flex-col h-full"
      >
         <div className="overflow-hidden aspect-[4/5] w-full mb-6 relative bg-white border border-primary/5 group-hover:border-secondary/20 transition-colors duration-500 rounded-sm">
             <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 origin-bottom" referrerPolicy="no-referrer" />
         </div>
         <div className="flex-1 flex flex-col border-l border-primary/20 pl-4 py-1 group-hover:border-secondary transition-colors duration-500">
             <h4 className="font-sans font-bold text-2xl text-primary mb-1">{member.name}</h4>
             <p className="text-carbon/50 font-sans font-semibold text-[10px] uppercase tracking-[0.15em] mb-4">{member.role}</p>
             <p className="text-carbon/70 font-sans font-light leading-relaxed text-sm">{member.bio}</p>
         </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col h-full"
    >
       <div className="overflow-hidden aspect-[4/5] w-full max-w-[240px] mb-5 relative bg-white border border-primary/5 group-hover:border-secondary/20 rounded-sm mx-auto transition-colors duration-500">
           <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale mix-blend-multiply opacity-70 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 origin-bottom" referrerPolicy="no-referrer" />
       </div>
       <div className="flex-1 flex flex-col text-center">
           <h4 className="font-sans font-bold text-lg text-primary mb-1">{member.name}</h4>
           <p className="text-carbon/40 font-sans font-semibold text-[9px] uppercase tracking-[0.15em] mb-3">{member.role}</p>
           <p className="text-carbon/60 font-sans font-light leading-relaxed text-xs max-w-xs mx-auto">{member.bio}</p>
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
      }
    ]
  };

  return (
    <section id="equipo" className="py-32 bg-bg-sand relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-secondary font-sans font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">Liderazgo Corporativo</span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">Capital Humano</h2>
          <p className="text-carbon/70 text-lg font-sans font-light">
            Un equipo estructurado bajo estándares de firmas globales. Integramos rigor jurídico, visión financiera y experiencia sectorial técnica.
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {teamData.leadership.map((member, idx) => (
              <TeamProfile key={idx} member={member} tier="leadership" />
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-primary/10 mb-20 max-w-6xl mx-auto"></div>

        {/* Specialist Consultants */}
        <div className="mb-24">
           <h3 className="font-display font-medium text-3xl text-primary mb-12 text-center">Consultoría Especializada</h3>
           <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
             {teamData.consultants.map((member, idx) => (
               <TeamProfile key={idx} member={member} tier="consultant" />
             ))}
           </div>
        </div>

        <div className="w-full max-w-lg mx-auto h-px bg-primary/10 mb-20"></div>

        {/* Legal Team */}
        <div>
           <h3 className="font-display font-medium text-2xl text-primary mb-12 text-center opacity-80">Soporte Legal</h3>
           <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
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
                <button type="submit" className="w-full bg-secondary text-primary py-4 rounded-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all shadow-lg shadow-secondary/20 uppercase tracking-[0.2em] text-sm mt-8 font-sans">
                  Solicitar Asesoría Ejecutiva <ArrowRight size={18} />
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
      <VulnerabilitySection />
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

