import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronDown, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  User,
  Send,
  Menu,
  X,
  Cpu,
  Zap,
  Activity
} from 'lucide-react';

const personalInfo = {
  name: "林彥良 (Lin Yen-Liang)",
  title: "硬體測試與訊號分析 | 韌體開發工程師",
  email: "daniel12312366@gmail.com",
  phone: "0934-014-332",
  location: "桃園市平鎮區",
  about: "擁有硬體測試、訊號分析與新產品驗證經驗，曾主導國營企業與國外產品之「破億元」大型專案驗收。具備強烈的學習動能，自修投入微處理器與韌體領域 (STM32/C語言)，致力於將除錯邏輯結合系統整合能力，為團隊貢獻技術戰力。",
  skills: {
    hardware: ["示波器訊號擷取", "雜訊分析", "150kV 高壓雷擊試驗", "IEEE/IEC 國際標準", "SOP 流程最佳化"],
    firmware: ["C 語言 (指標/記憶體管理)", "STM32 / HAL 函式庫", "資料結構", "嵌入式軟體基礎", "系統整合思考"],
    licenses: ["無人機專業操作證", "職業大客車駕照", "動力小船執照", "AutoCAD 國際認證", "堆高機操作技術士"]
  },
  experience: [
    {
      company: "巧力工業股份有限公司 (CIC)",
      role: "品保副組長 / 品質工程師",
      period: "2023/06 - 2025/05",
      description: "主導 150kV 高壓雷擊與全負載溫升極限電性試驗。建立全新 SOP 提升測試效能，並主導多次 4000 萬至億元級之國營企業專案技術收驗。"
    },
    {
      company: "聯新國際醫院",
      role: "高級助理工程師",
      period: "2021/01 - 2021/02",
      description: "負責疫情期間大門管控與第一線溝通，協助主管交辦行政事務與現場技術對接。"
    },
    {
      company: "知名旅行社",
      role: "學生領隊",
      period: "2020/01 - 2022/11",
      description: "負責突發狀況處理、需求滿足與行程管理，憑藉溝通與危機處理能力獲得客戶指名。"
    }
  ],
  education: [
    {
      school: "國立高雄科技大學",
      degree: "海事資訊科技系 四技畢業",
      period: "2018 - 2022"
    },
    {
      school: "國立內壢高中",
      degree: "普通科 畢業",
      period: "2015 - 2018"
    }
  ],
  projects: [
    {
      title: "億元級國營企業驗收專案",
      tags: ["專案管理", "技術收驗", "跨部門溝通"],
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?w=800&q=80",
      link: "#"
    },
    {
      title: "STM32 嵌入式系統實務開發",
      tags: ["C 語言", "STM32", "HAL"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      link: "#"
    },
    {
      title: "無人機系統整合與飛行操作",
      tags: ["無人機", "系統整合", "實機操作"],
      image: "https://images.unsplash.com/photo-1527977966376-1c8418f9f108?w=800&q=80",
      link: "#"
    }
  ]
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Intersection Observer to detect current section
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) sectionObserver.unobserve(el);
      });
    };
  }, []);

  const navItems = [
    { id: 'home', label: '首頁' },
    { id: 'about', label: '關於' },
    { id: 'experience', label: '經歷' },
    { id: 'skills', label: '技能' },
    { id: 'projects', label: '作品' },
    { id: 'contact', label: '聯絡' }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-tech-bg relative overflow-x-hidden text-tech-text">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-tech-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-tech-accent/5 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        <div className="scanline"></div>
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-tech-bg/90 backdrop-blur-xl border-b border-tech-primary/20 py-4 shadow-[0_0_30px_rgba(0,242,255,0.1)]' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollTo('home')}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-tech-primary/10 rounded-lg flex items-center justify-center border border-tech-primary/30 group-hover:border-tech-primary transition-all">
                <span className="text-tech-primary font-display font-bold text-lg">L</span>
              </div>
              <div className="absolute -inset-1 bg-tech-primary/20 blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-widest text-white group-hover:text-tech-primary transition-colors uppercase">Lin Yen-Liang</span>
              <span className="text-[8px] font-mono tracking-[0.3em] text-tech-muted uppercase">Hardware x Firmware</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-[10px] font-mono tracking-[0.2em] uppercase transition-all relative group ${activeSection === item.id ? 'text-tech-primary' : 'text-tech-muted hover:text-white'}`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-tech-primary transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => scrollTo('contact')}
            className="hidden md:block px-6 py-2 bg-transparent border border-tech-primary/30 text-tech-primary rounded-full text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-tech-primary hover:text-black transition-all"
          >
            Connect
          </button>

          {/* Mobile Toggle */}
          <button className="md:hidden text-tech-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-tech-bg pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col gap-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-4xl font-display font-bold text-white text-left hover:text-tech-primary transition-colors flex items-center justify-between group"
                >
                  {item.label}
                  <ChevronDown className="-rotate-90 text-tech-muted opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {/* Hero Section */}
        <header id="home" className="pt-32 pb-20 md:pt-64 md:pb-48 px-6 relative">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-10 overflow-hidden relative group">
                  <div className="w-2 h-2 bg-tech-primary rounded-full animate-pulse shadow-[0_0_10px_#00f2ff]"></div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-tech-primary">Status: Open for opportunities</p>
                  <div className="absolute inset-0 bg-tech-primary/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-display font-bold leading-none mb-8 tracking-tighter">
                  HELLO. I'M <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-primary via-white to-tech-accent glow-text">
                    LIN YEN-LIANG
                  </span>
                </h1>
                
                <div className="text-lg md:text-xl text-tech-muted max-w-xl mb-12 leading-relaxed font-light font-mono">
                  <p className="mb-2">&gt; {personalInfo.title}</p>
                  <div className="flex items-center gap-4 opacity-60 text-xs">
                    <span className="flex items-center gap-1"><Activity size={12}/> Hardware Validation</span>
                    <span className="flex items-center gap-1"><Zap size={12}/> Signal Analysis</span>
                    <span className="flex items-center gap-1"><Cpu size={12}/> Firmware Engineering</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                  <button 
                    onClick={() => scrollTo('projects')}
                    className="btn-tech"
                  >
                    View Stack
                  </button>
                  <button
                    onClick={() => scrollTo('contact')}
                    className="btn-tech-outline"
                  >
                    Get in Touch
                  </button>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[450px] md:w-[450px] aspect-square"
            >
              <div className="absolute inset-0 border border-tech-primary/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-tech-accent/20 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
              
              <div className="absolute inset-12 rounded-[60px] overflow-hidden border border-tech-border tech-card group">
                <div className="absolute inset-0 bg-gradient-to-t from-tech-bg/80 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>

              {/* Float Decorative Elements */}
              <div className="absolute top-1/4 -left-6 p-4 rounded-2xl tech-card border-tech-primary/40 animate-bounce shadow-lg shadow-tech-primary/10">
                <Cpu className="text-tech-primary" size={24} />
              </div>
              <div className="absolute bottom-1/4 -right-6 p-4 rounded-2xl tech-card border-tech-accent/40 animate-bounce [animation-delay:1s] shadow-lg shadow-tech-accent/10">
                <Activity className="text-tech-accent" size={24} />
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center mt-32 opacity-40 cursor-pointer group"
            onClick={() => scrollTo('about')}
          >
            <span className="text-[10px] font-mono tracking-widest uppercase mb-2 group-hover:text-tech-primary transition-colors">INIT_SEQUENCE_LOAD</span>
            <ChevronDown size={16} className="text-tech-primary" />
          </motion.div>
        </header>

        {/* About Section */}
        <section id="about" className="py-32 px-6 border-y border-tech-border bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-20 items-start">
              <div className="w-full md:w-1/3">
                <h2 className="text-4xl font-display font-bold mb-4 flex items-center gap-4">
                  <span className="text-tech-primary opacity-50 font-mono text-xl">01/</span> 核心概論
                </h2>
                <div className="h-[2px] w-12 bg-tech-primary mb-10"></div>
                
                <div className="space-y-8">
                  <div className="group">
                    <p className="text-[10px] font-mono text-tech-primary uppercase tracking-[0.2em] mb-2">IDENTIFIER</p>
                    <p className="text-xl font-display font-bold text-white uppercase tracking-tight">{personalInfo.name}</p>
                  </div>
                  <div className="group">
                    <p className="text-[10px] font-mono text-tech-primary uppercase tracking-[0.2em] mb-2">SECTOR_LOC</p>
                    <p className="text-xl font-display font-bold text-white uppercase tracking-tight">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 space-y-12">
                <p className="text-3xl text-white leading-tight font-light tracking-tight max-w-2xl font-display">
                  {personalInfo.about}
                </p>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-8 tech-card group">
                    <h3 className="text-4xl font-display font-bold text-tech-primary mb-2 tracking-tighter">5+</h3>
                    <p className="text-[10px] uppercase font-mono tracking-widest text-tech-muted group-hover:text-white transition-colors">TOTAL_EXP</p>
                  </div>
                  <div className="p-8 tech-card group">
                    <h3 className="text-4xl font-display font-bold text-tech-accent mb-2 tracking-tighter">20+</h3>
                    <p className="text-[10px] uppercase font-mono tracking-widest text-tech-muted group-hover:text-white transition-colors">PROJECTS_DONE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-6 mb-20">
              <h2 className="text-4xl font-display font-bold tracking-tight">歷史進程</h2>
              <div className="h-[1px] flex-1 bg-tech-border"></div>
              <span className="text-tech-primary font-mono text-xs tracking-widest overflow-hidden">02 // TIMELINE_LOGS</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] mb-12 text-tech-muted flex items-center gap-3 font-bold">
                  <Briefcase size={14} className="text-tech-primary" /> WORK_HISTORY
                </h3>
                <div className="space-y-6">
                  {personalInfo.experience.map((exp, idx) => (
                    <div key={idx} className="tech-card p-8 group relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Briefcase size={64} />
                      </div>
                      <span className="text-[10px] font-mono text-tech-primary mb-2 block uppercase tracking-tighter">{exp.period}</span>
                      <h4 className="font-display font-bold text-xl text-white mb-1 tracking-tight">{exp.company}</h4>
                      <p className="text-sm text-tech-accent font-medium mb-6 font-mono tracking-tight uppercase">{exp.role}</p>
                      <p className="text-sm text-tech-muted leading-relaxed font-light">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] mb-12 text-tech-muted flex items-center gap-3 font-bold">
                  <GraduationCap size={14} className="text-tech-accent" /> ACADEMIC_RECORDS
                </h3>
                <div className="space-y-6">
                  {personalInfo.education.map((edu, idx) => (
                    <div key={idx} className="tech-card p-8 group">
                      <span className="text-[10px] font-mono text-tech-accent mb-2 block uppercase tracking-tighter">{edu.period}</span>
                      <h4 className="font-display font-bold text-xl text-white mb-1 tracking-tight">{edu.school}</h4>
                      <p className="text-sm text-tech-muted font-mono uppercase tracking-tight">{edu.degree}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <p className="text-tech-primary font-mono text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">Technical Proficiency</p>
              <h2 className="text-6xl font-display font-bold tracking-tight">架構與指令集</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(personalInfo.skills).map(([category, skills], idx) => (
                <div key={idx} className="p-10 tech-card group border-tech-border/40">
                  <h3 className="text-[10px] uppercase font-mono tracking-[0.2em] mb-10 font-bold text-tech-muted flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-tech-primary shadow-[0_0_8px_#00f2ff]' : idx === 1 ? 'bg-tech-accent shadow-[0_0_8px_#7000ff]' : 'bg-white shadow-[0_0_8px_#fff]'}`}></span>
                    {category === 'hardware' ? 'HARDWARE_VALIDATION' : category === 'firmware' ? 'FIRMWARE_ENGINEERING' : 'MASTER_LICENSES'}
                  </h3>
                  <div className="flex flex-col gap-5">
                    {skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between group/item">
                        <span className="text-sm text-white/80 group-hover/item:text-tech-primary transition-colors font-medium capitalize">{skill}</span>
                        <div className="h-[1px] flex-1 mx-4 bg-white/5 group-hover/item:bg-tech-primary/20 transition-all"></div>
                        <span className="text-[8px] font-mono text-tech-muted group-hover/item:text-tech-primary transition-colors">READY</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 bg-white/[0.01] border-y border-tech-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
              <div>
                <p className="text-tech-accent font-mono text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">Case Studies</p>
                <h2 className="text-5xl font-display font-bold tracking-tight italic">特殊任務檔案</h2>
              </div>
              <button className="flex items-center gap-3 text-tech-primary font-mono text-[10px] font-bold uppercase tracking-widest border border-tech-primary/30 px-8 py-4 rounded-full hover:bg-tech-primary hover:text-black transition-all">
                Directory Access <ExternalLink size={14} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {personalInfo.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col gap-6 tech-card p-5 hover:translate-y-[-10px] border-tech-border/30"
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden relative border border-tech-border">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tech-bg to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[8px] font-mono font-bold uppercase tracking-widest text-tech-primary bg-tech-bg/90 border border-tech-primary/30 px-2.5 py-1.5 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-1 pb-2">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-tech-primary transition-colors mb-4 tracking-tight uppercase leading-tight">{project.title}</h3>
                    <div className="flex items-center justify-between mt-auto">
                      <a href={project.link} className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-tech-muted hover:text-white transition-colors">
                        Access Link <ExternalLink size={12} />
                      </a>
                      <span className="text-[8px] font-mono text-tech-border uppercase font-bold tracking-tighter">DATASET_REF_{2024 + idx}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="tech-card p-12 md:p-24 flex flex-col md:flex-row gap-20 relative overflow-hidden border-tech-primary/30">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tech-primary to-transparent"></div>
              
              <div className="flex-1 relative z-10">
                <p className="text-tech-primary font-mono text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">Initialize Communication</p>
                <h2 className="text-5xl font-display font-bold text-white mb-10 tracking-tight leading-none uppercase">建立通訊鏈路</h2>
                <p className="text-lg text-tech-muted mb-16 font-light leading-relaxed max-w-sm">
                  正在尋找具備硬體除錯與韌體研發能力的工程師？歡迎隨時建立連線或諮詢專案。
                </p>
                
                <div className="space-y-8">
                  <div className="group cursor-pointer">
                    <p className="text-[8px] font-mono uppercase tracking-[0.3em] text-tech-primary mb-2 font-bold">EMAIL_GATEWAY</p>
                    <p className="text-lg font-display text-white group-hover:text-tech-primary transition-colors border-b border-white/5 group-hover:border-tech-primary pb-1 inline-block font-bold">{personalInfo.email}</p>
                  </div>
                  <div className="group cursor-pointer">
                    <p className="text-[8px] font-mono uppercase tracking-[0.3em] text-tech-primary mb-2 font-bold">MOBILE_UPLINK</p>
                    <p className="text-lg font-display text-white group-hover:text-tech-primary transition-colors border-b border-white/5 group-hover:border-tech-primary pb-1 inline-block font-bold">{personalInfo.phone}</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative z-10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-tech-primary transition-all outline-none text-sm text-white peer" placeholder=" " />
                    <label className="absolute left-5 top-5 text-tech-muted text-[10px] uppercase tracking-widest font-mono font-bold transition-all pointer-events-none peer-focus:-top-3 peer-focus:left-4 peer-focus:text-tech-primary peer-focus:bg-tech-bg peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-tech-primary peer-[:not(:placeholder-shown)]:bg-tech-bg peer-[:not(:placeholder-shown)]:px-2">User_Name</label>
                  </div>
                  <div className="relative">
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-tech-primary transition-all outline-none text-sm text-white peer" placeholder=" " />
                    <label className="absolute left-5 top-5 text-tech-muted text-[10px] uppercase tracking-widest font-mono font-bold transition-all pointer-events-none peer-focus:-top-3 peer-focus:left-4 peer-focus:text-tech-primary peer-focus:bg-tech-bg peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-tech-primary peer-[:not(:placeholder-shown)]:bg-tech-bg peer-[:not(:placeholder-shown)]:px-2">Direct_Mail</label>
                  </div>
                  <div className="relative">
                    <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 h-40 focus:border-tech-primary transition-all outline-none resize-none text-sm text-white peer" placeholder=" " />
                    <label className="absolute left-5 top-5 text-tech-muted text-[10px] uppercase tracking-widest font-mono font-bold transition-all pointer-events-none peer-focus:-top-3 peer-focus:left-4 peer-focus:text-tech-primary peer-focus:bg-tech-bg peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-tech-primary peer-[:not(:placeholder-shown)]:bg-tech-bg peer-[:not(:placeholder-shown)]:px-2">Payload_Data</label>
                  </div>
                  <button className="btn-tech w-full py-6 flex items-center justify-center gap-4 group">
                    EXECUTE_SEND <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-tech-border relative overflow-hidden bg-tech-bg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-tech-primary/10 border border-tech-primary/40 rounded-xl flex items-center justify-center text-tech-primary font-display font-bold text-sm">
                L
              </div>
              <span className="font-display font-bold text-2xl tracking-widest text-white uppercase italic">Lin.Lab</span>
            </div>
            <p className="text-tech-muted text-[10px] font-mono font-bold uppercase tracking-[0.3em]">H/W Validation x F/W Ops</p>
          </div>
          
          <div className="text-center">
            <p className="text-tech-muted text-[8px] uppercase font-mono tracking-[0.4em] mb-3 font-bold opacity-40">System Core Version 1.0.4-Delta</p>
            <p className="text-tech-muted text-xs font-light">
              © {new Date().getFullYear()} Lin Yen-Liang. Integrated Security Active.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="p-4 tech-card !rounded-2xl hover:text-tech-primary hover:border-tech-primary transition-all active:scale-90"><Github size={20} /></a>
            <a href="#" className="p-4 tech-card !rounded-2xl hover:text-tech-primary hover:border-tech-primary transition-all active:scale-90"><Linkedin size={20} /></a>
            <a href="#" className="p-4 tech-card !rounded-2xl hover:text-tech-primary hover:border-tech-primary transition-all active:scale-90"><Mail size={20} /></a>
          </div>
        </div>
        
        {/* Decorative Grid Line */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-tech-primary/20 to-transparent"></div>
      </footer>
    </div>
  );
}
