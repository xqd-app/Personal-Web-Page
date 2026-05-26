import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Mail, href: 'mailto:xingqide@example.com', label: 'Email' },
  { icon: Instagram, href: 'https://github.com/xqd-app', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Xing Qide</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Freelance creative with RANGE. Designing at the intersection of art and technology for artists who value craft.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 text-gray-400">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a>
              <a href="/showcase" className="text-gray-400 hover:text-white transition-colors text-sm">Work</a>
              <a href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a>
              <a href="/resume" className="text-gray-400 hover:text-white transition-colors text-sm">Resume</a>
            </nav>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 text-gray-400">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-gray-500 text-xs">
              Austin, TX
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-xs uppercase tracking-widest">
            2025 Xing Qide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}