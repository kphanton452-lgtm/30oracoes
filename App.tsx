
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Heart, 
  Sunrise, 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  Clock, 
  Download, 
  Sparkles,
  ChevronDown,
  BookOpen,
  Anchor,
  Flame
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Constants ---
const CHECKOUT_LINK = "https://pay.cakto.com.br/33rbqk7?affiliate=dMrtSsNu";

// --- Components ---

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-stone-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-amber-100/50 rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-amber-600 fill-amber-600/20" />
          </div>
          <span className="font-serif font-bold text-xl text-stone-800 tracking-tight">30 Orações</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-stone-500 uppercase tracking-widest">
          <a href="#beneficios" className="hover:text-amber-600 transition-colors">O que é?</a>
          <a href="#depoimentos" className="hover:text-amber-600 transition-colors">Relatos</a>
          <a href={CHECKOUT_LINK} className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-all shadow-lg shadow-amber-200/50">Começar Agora</a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <section className="relative pt-32 pb-20 overflow-hidden bg-[#FDFCF7]">
    {/* Spiritual Glow Elements */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[600px] bg-gradient-to-b from-amber-100/30 via-sky-50/20 to-transparent rounded-[100%] blur-[120px] -z-10" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 bg-white border border-amber-100 px-4 py-1.5 rounded-full mb-8 shadow-sm"
      >
        <Sparkles className="w-4 h-4 text-amber-500" />
        <span className="text-amber-700 text-[10px] font-bold uppercase tracking-[0.2em]">Guia de Renovação Espiritual</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-4xl md:text-7xl font-serif font-bold text-stone-900 mb-6 leading-[1.1]"
      >
        30 Orações em 30 Dias 🙏<br />
        <span className="text-amber-600 italic">Transforme sua fé</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-2xl text-stone-500 mb-12 max-w-3xl leading-relaxed font-light"
      >
        Um momento diário de paz, esperança e conexão profunda com Deus. O guia definitivo para quem busca um novo fôlego para a alma.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center"
      >
        <a 
          href={CHECKOUT_LINK} 
          className="w-full sm:w-auto bg-stone-900 text-white px-10 py-6 rounded-2xl text-xl font-bold flex items-center justify-center gap-3 hover:bg-stone-800 transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0"
        >
          👉 Quero começar minha jornada agora
        </a>
      </motion.div>

      {/* Hero Visual Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="mt-20 relative px-4"
      >
        <div className="absolute inset-0 bg-amber-200/20 blur-[100px] rounded-full scale-75 -z-10" />
        <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-stone-100 rotate-1">
          <img 
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=80" 
            alt="Paz ao amanhecer" 
            className="w-full max-w-2xl mx-auto rounded-[2rem] shadow-inner"
          />
        </div>
        
        {/* Floating Social Proof Elements */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-4 md:-right-20 bg-white p-5 rounded-2xl shadow-xl border border-stone-50 hidden md:block"
        >
          <div className="flex gap-1 text-amber-400 mb-1">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
          </div>
          <p className="text-xs font-bold text-stone-800 uppercase tracking-tighter italic">Acesso Imediato no Celular</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const PainSection: React.FC = () => (
  <section className="py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-sky-100/50 rounded-full blur-3xl opacity-60" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
            Você anda cansado(a), ansioso(a) ou distante espiritualmente?
          </h2>
          <p className="text-xl text-stone-500 mb-10 leading-relaxed font-light">
            Sente que precisa de paz, direção e força todos os dias? A vida moderna pode sufocar nossa espiritualidade. Este livro foi criado para te acompanhar por 30 dias com orações poderosas que renovam a alma.
          </p>
          <div className="space-y-6">
            {[
              "Mente barulhenta e coração sobrecarregado",
              "Sensação de vazio ou falta de propósito diário",
              "Dificuldade em encontrar palavras para falar com Deus"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 text-stone-700 bg-stone-50 p-4 rounded-xl border border-stone-100">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <span className="text-amber-600 font-bold">!</span>
                </div>
                <p className="text-lg font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-[#FDFCF7] rounded-[3rem] p-12 flex flex-col justify-center items-center text-center shadow-inner border border-stone-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Anchor className="w-32 h-32 text-amber-900" />
            </div>
            <p className="text-2xl md:text-3xl italic font-serif text-amber-900 leading-[1.6] mb-8 relative z-10">
              "Encontre o descanso que sua alma procura no silêncio da oração."
            </p>
            <div className="w-16 h-[2px] bg-amber-200 mb-8" />
            <Sunrise className="w-16 h-16 text-amber-500 opacity-40 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Benefits: React.FC = () => {
  const list = [
    { title: "30 orações guiadas", desc: "Uma oração específica e profunda para cada dia da sua jornada.", icon: <BookOpen className="w-7 h-7" /> },
    { title: "Mensagens de fé e esperança", desc: "Palavras de conforto para os momentos de deserto e cansaço.", icon: <Sunrise className="w-7 h-7" /> },
    { title: "Fortalecimento espiritual", desc: "Crie o hábito de falar com Deus e sinta sua fé crescendo diariamente.", icon: <Flame className="w-7 h-7" /> },
    { title: "Conexão profunda", desc: "Orações que tocam o coração de Deus e trazem clareza mental.", icon: <Heart className="w-7 h-7" /> },
    { title: "Paz e clareza emocional", desc: "Reduza a ansiedade depositando suas preocupações aos pés do Criador.", icon: <Anchor className="w-7 h-7" /> },
    { title: "Acesso Vitalício", desc: "O material é seu para sempre. Leia no seu celular, tablet ou computador.", icon: <Download className="w-7 h-7" /> },
  ];

  return (
    <section id="beneficios" className="py-28 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">O que você vai receber</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {list.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-10 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials: React.FC = () => {
  const items = [
    { name: "Márcia R.", text: "Minha fé foi renovada em poucos dias. Nunca me senti tão próxima de Deus como agora.", job: "São Paulo, SP" },
    { name: "Ricardo G.", text: "Senti paz como não sentia há anos. Virou meu momento sagrado diário.", job: "Curitiba, PR" },
    { name: "Carla S.", text: "Virou meu momento sagrado diário. As orações são lindas e muito poderosas.", job: "Salvador, BA" },
  ];

  return (
    <section id="depoimentos" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-serif italic text-stone-400 mb-4">Depoimentos reais</h2>
          <h3 className="text-4xl font-serif font-bold text-stone-900">Vidas transformadas pela oração</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {items.map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-[#FDFCF7] p-10 rounded-[2rem] border border-stone-50 relative"
            >
              <div className="absolute -top-6 left-10 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-amber-400">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <p className="text-xl text-stone-700 italic mb-8 leading-relaxed font-serif">"{t.text}"</p>
              <div className="flex items-center gap-4 border-t border-stone-200/50 pt-6">
                <div className="w-12 h-12 bg-stone-200 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(https://i.pravatar.cc/150?u=${i})` }} />
                <div>
                  <h4 className="font-bold text-stone-900">{t.name}</h4>
                  <p className="text-xs text-stone-400 uppercase tracking-widest">{t.job}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Offer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour for urgency

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => (prev > 0 ? prev - 1 : 3600)), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="oferta" className="py-28 bg-stone-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-amber-500 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[3.5rem] p-8 md:p-20 shadow-2xl relative">
          
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white px-8 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 whitespace-nowrap animate-pulse">
            <Clock className="w-4 h-4" />
            OFERTA VÁLIDA SOMENTE HOJE
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold text-stone-400 uppercase tracking-[0.3em] mb-10">Investimento para sua fé</h2>
            
            <div className="flex flex-col items-center mb-12">
              <span className="text-stone-300 text-3xl line-through decoration-red-500 decoration-2 mb-2">De R$ 27,90</span>
              <div className="relative inline-block">
                <span className="text-amber-600 text-sm font-bold absolute -top-4 -right-4 bg-amber-50 px-2 py-1 rounded rotate-12">PROMOÇÃO</span>
                <span className="text-7xl md:text-9xl font-serif font-bold text-stone-900 tracking-tighter">
                  <span className="text-4xl align-top mr-2">R$</span>11,90
                </span>
              </div>
              <p className="text-stone-400 mt-4 font-medium uppercase tracking-widest text-sm">Pagamento único • Acesso imediato</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-lg mx-auto">
              <div className="flex items-center gap-3 text-stone-600 font-medium">
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
                Compra 100% Segura
              </div>
              <div className="flex items-center gap-3 text-stone-600 font-medium">
                <Download className="w-6 h-6 text-emerald-500" />
                Download Instantâneo
              </div>
            </div>

            <a 
              href={CHECKOUT_LINK} 
              className="block w-full bg-amber-600 text-white py-8 rounded-[2rem] text-2xl font-black hover:bg-amber-700 transition-all shadow-2xl shadow-amber-200/50 group"
            >
              QUERO RECEBER AS 30 ORAÇÕES AGORA 🙏
            </a>

            <div className="mt-8 flex items-center justify-center gap-3 text-stone-400 text-sm">
              <Clock className="w-4 h-4" />
              Esta oferta expira em {formatTime(timeLeft)} minutos
            </div>
          </div>
        </div>

        {/* Security badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="w-10 h-10 text-white" />
            <span className="text-white text-xs font-bold tracking-widest uppercase">Garantia Total</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Heart className="w-10 h-10 text-white" />
            <span className="text-white text-xs font-bold tracking-widest uppercase">Satisfação</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Sparkles className="w-10 h-10 text-white" />
            <span className="text-white text-xs font-bold tracking-widest uppercase">Premium</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="py-20 bg-stone-950 text-stone-500">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-3 mb-10">
        <div className="w-10 h-10 bg-amber-600/20 rounded-full flex items-center justify-center">
          <Heart className="w-5 h-5 text-amber-600 fill-amber-600" />
        </div>
        <span className="font-serif font-bold text-2xl text-white">30 Orações em 30 Dias</span>
      </div>
      <p className="text-sm max-w-md mx-auto mb-8 leading-relaxed">Este produto é digital. Após a confirmação do pagamento, você receberá o link de acesso no seu e-mail cadastrado.</p>
      <div className="flex justify-center gap-8 text-[10px] uppercase font-bold tracking-[0.2em] mb-12">
        <a href="#" className="hover:text-white transition-colors">Privacidade</a>
        <a href="#" className="hover:text-white transition-colors">Termos</a>
        <a href="#" className="hover:text-white transition-colors">Suporte</a>
      </div>
      <p className="text-[10px] opacity-30">© 2024 Jornada de Fé. Todos os direitos reservados.</p>
    </div>
  </footer>
);

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 1000);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 p-5 z-50 md:hidden"
        >
          <a 
            href={CHECKOUT_LINK} 
            className="w-full bg-stone-900 text-white flex items-center justify-center gap-3 py-5 rounded-2xl shadow-2xl font-bold text-lg"
          >
            Começar minha jornada agora 🙏
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF7] selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <Hero />
      <PainSection />
      <Benefits />
      <Testimonials />
      <Offer />
      <Footer />
      <FloatingCTA />
      
      {/* Scroll indicator for large screens */}
      <motion.div 
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="fixed bottom-10 right-10 flex flex-col items-center gap-3 opacity-20 hidden md:flex pointer-events-none"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.4em] rotate-90 translate-y-8 origin-center text-stone-900">Descobrir</span>
        <ChevronDown className="w-6 h-6 text-stone-900" />
      </motion.div>
    </div>
  );
};

export default App;
