import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github, Linkedin, Twitter, Download, Check } from "lucide-react";
import developerImg from "@/assets/developer-portrait.svg";

const DownloadResumeButton = ({ size = "md" }: { size?: "sm" | "md" }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    const link = document.createElement("a");
    link.href = "/resume_mmateen_1.pdf";
    link.download = "Abdul_Mateen_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloaded(false), 2500);
  };

  const isSmall = size === "sm";

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden flex items-center gap-1.5 rounded-full border border-primary-foreground/30 text-primary-foreground font-medium transition-colors ${
        isSmall ? "px-3 py-1.5 text-[10px]" : "px-4 py-2 text-xs"
      } ${downloaded ? "bg-primary-foreground/20" : "hover:bg-primary-foreground/10"}`}
    >
      <AnimatePresence mode="wait">
        {downloaded ? (
          <motion.span
            key="done"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-1.5"
          >
            <Check size={isSmall ? 12 : 14} /> Downloaded
          </motion.span>
        ) : (
          <motion.span
            key="download"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-1.5"
          >
            <motion.span
              animate={{ y: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <Download size={isSmall ? 12 : 14} />
            </motion.span>
            Resume
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex flex-col overflow-hidden">
      {/* Lime curved background box */}
      <div className="absolute inset-3 sm:inset-4 md:inset-8 lg:inset-10 bottom-14 md:bottom-16 rounded-[1.5rem] md:rounded-[3rem] bg-primary overflow-hidden z-0">
        {/* Diagonal line texture */}
        <div className="absolute inset-0 opacity-15">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-[200%] -left-1/4 origin-center"
              style={{
                top: `${i * 9}%`,
                background: 'hsl(85, 40%, 8%)',
                transform: 'rotate(-25deg)',
              }}
            />
          ))}
        </div>
        {/* Faded repeated text */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-[0.07] pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <p
              key={i}
              className="text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[11rem] font-black uppercase leading-[0.9] tracking-tight whitespace-nowrap"
              style={{ fontFamily: 'var(--font-display)', color: 'hsl(85, 40%, 8%)' }}
            >
              ABDUL MATEEN
            </p>
          ))}
        </div>
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col h-full px-5 sm:px-6 md:px-12 lg:px-20 pt-5 md:pt-10">
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-[3rem] sm:text-[4rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-black uppercase leading-[0.85] tracking-tight"
          style={{ fontFamily: 'var(--font-display)', color: 'hsl(85, 40%, 8%)' }}
        >
          ABDUL MATEEN
        </motion.h1>

        {/* Middle: layout */}
        <div className="flex-1 flex items-end pb-2 md:pb-6">
          <div className="w-full flex flex-col md:flex-row items-end justify-between gap-3 md:gap-4">
            {/* Left col - visible on md+ */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hidden md:flex flex-col gap-4 max-w-[200px] lg:max-w-[240px] pb-4"
            >
              <p className="text-xs lg:text-sm leading-relaxed text-primary-foreground">
                What makes my development unique is the combination of technical expertise and a passion for clean, scalable architecture
              </p>
               <div className="flex gap-2 items-center">
                <a href="https://github.com/mateenqamar1122" target="_blank" rel="noopener noreferrer" className="social-icon !w-8 !h-8"><Github size={14} /></a>
                <a href="https://linkedin.com/in/mateenqamar" target="_blank" rel="noopener noreferrer" className="social-icon !w-8 !h-8"><Linkedin size={14} /></a>
                <a href="#" className="social-icon !w-8 !h-8"><Twitter size={14} /></a>
                <DownloadResumeButton />
              </div>
            </motion.div>

            {/* Mobile: text + social row above image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:hidden flex items-end justify-between w-full gap-3 mb-2"
            >
              <div className="max-w-[55%]">
                <p className="text-[10px] sm:text-xs leading-relaxed text-primary-foreground mb-2">
                  What makes my development unique is the combination of technical expertise and a passion for clean, scalable architecture
                </p>
                <div className="flex gap-2 items-center flex-wrap">
                  <a href="https://github.com/mateenqamar1122" target="_blank" rel="noopener noreferrer" className="social-icon !w-7 !h-7"><Github size={12} /></a>
                   <a href="https://linkedin.com/in/mateenqamar" target="_blank" rel="noopener noreferrer" className="social-icon !w-7 !h-7"><Linkedin size={12} /></a>
                  <a href="#" className="social-icon !w-7 !h-7"><Twitter size={12} /></a>
                  <DownloadResumeButton size="sm" />
                </div>
              </div>
              <div className="max-w-[40%]">
                <p className="text-[10px] sm:text-xs leading-relaxed text-right text-primary-foreground">
                  Immerse yourself in a world where each line of code tells a story, building bridges between ideas and reality
                </p>
              </div>
            </motion.div>

            {/* Center: developer image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0 mx-auto md:mx-0"
            >
              <img
                src={developerImg}
                alt="Developer portrait"
                className="h-[260px] sm:h-[320px] md:h-[400px] lg:h-[480px] xl:h-[540px] object-cover object-bottom block align-bottom"
              />
            </motion.div>

            {/* Right col - visible on md+ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hidden md:flex flex-col items-end gap-4 max-w-[220px] lg:max-w-[260px] pb-4"
            >
              <p className="text-xs lg:text-sm leading-relaxed text-right text-primary-foreground">
                Immerse yourself in a world where each line of code tells a story, building the bridges between ideas and digital reality
              </p>
              <a href="#about" className="scroll-indicator !w-8 !h-8">
                <ChevronDown size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 flex justify-center gap-6 sm:gap-8 md:gap-12 py-3 md:py-4"
      >
        <a href="#about" className="nav-link text-xs md:text-sm">About</a>
        <a href="#works" className="nav-link text-xs md:text-sm">Works</a>
        <a href="#skills" className="nav-link text-xs md:text-sm">Skills</a>
        <a href="#contact" className="nav-link text-xs md:text-sm">Contact</a>
      </motion.nav>
    </section>
  );
};

export default HeroSection;
