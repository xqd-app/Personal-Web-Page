import { ArrowDown } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'dark' ? 'from-gray-900 via-gray-900/95 to-gray-900' : 'from-white via-white/95 to-white'}`} />
      
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in">
          Xing Qide
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light tracking-wide max-w-2xl mx-auto mb-12">
          Data Analyst & Programmer
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          <span className="px-4 py-2 border border-gray-300 rounded-full text-sm uppercase tracking-wider">BRAND DESIGN</span>
          <span className="px-4 py-2 border border-gray-300 rounded-full text-sm uppercase tracking-wider">UX/UI</span>
          <span className="px-4 py-2 border border-gray-300 rounded-full text-sm uppercase tracking-wider">WEB DESIGN</span>
          <span className="px-4 py-2 border border-gray-300 rounded-full text-sm uppercase tracking-wider">ILLUSTRATION</span>
        </div>
        
        <a
          href="#work"
          className="inline-flex flex-col items-center group"
        >
          <span className="text-xs uppercase tracking-widest mb-4 text-gray-500 group-hover:text-purple-600 transition-colors">
            View Work
          </span>
          <ArrowDown 
            size={24} 
            className="text-gray-400 animate-bounce group-hover:text-purple-600 transition-colors" 
          />
        </a>
      </div>

      <svg
        className="absolute bottom-20 right-10 w-24 h-24 opacity-30 animate-float text-gray-400"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 10 C30 25, 15 45, 15 65 C15 80, 25 90, 50 90 C75 90, 85 80, 85 65 C85 45, 70 25, 50 10 Z M50 30 C60 40, 65 55, 65 65 C65 75, 58 80, 50 80 C42 80, 35 75, 35 65 C35 55, 40 40, 50 30 Z" />
        <ellipse cx="50" cy="70" rx="8" ry="5" fill="white" />
        <path d="M50 20 Q55 15, 60 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M50 20 Q45 15, 40 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M15 50 Q5 45, 0 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M15 60 Q5 55, 0 60" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M85 50 Q95 45, 100 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M85 60 Q95 55, 100 60" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    </section>
  );
}