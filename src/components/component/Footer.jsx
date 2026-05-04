import React from 'react';

import { Mail, Phone, MapPin,Mail as  Facebook, Globe,Mail as Linkedin,Mail as  Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Menu: ["Home", "About", "Services", "Projects", "Blog", "Review", "Contact"],
    Services: ["SEO", "Google Ads", "Website Design", "Social Media Marketing"],
    "Other Pages": ["Refund Policy", "Privacy Policy", "Cancellation Policy", "Terms & Conditions"]
  };

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 p-8 font-sans">
      {/* Top Section: Contacts and Links */}
      <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left: Contact Cards */}
        <div className="space-y-4">
          <ContactCard 
            icon={<Mail className="text-purple-500" size={24} />} 
            text="Hello@creative360pro.com" 
          />
          <ContactCard 
            icon={<Phone className="text-purple-500" size={24} />} 
            text="(973) 563-1729" 
          />
          <ContactCard 
            icon={<MapPin className="text-purple-500" size={24} />} 
            text="51 Frances St, Clifton, NJ 07014, US" 
          />
        </div>

        {/* Right: Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-purple-500 font-bold mb-6">{title}</h4>
              <ul className="space-y-4 text-sm">
                {links.map((link) => (
                  <li key={link} className="hover:text-white cursor-pointer transition-colors">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Socials */}
      <div className="max-w-7xl mx-auto mt-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 flex flex-col items-center">
        <p className="text-purple-500 font-semibold mb-6">Follow us:</p>
        <div className="flex gap-4">
          <SocialIcon icon={<Facebook size={20} />} />
          <SocialIcon icon={<Globe size={20} />} />
          <SocialIcon icon={<Linkedin size={20} />} />
          <SocialIcon icon={<Instagram size={20} />} />
        </div>
      </div>
    </footer>
  );
};

const ContactCard = ({ icon, text }) => (
  <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-all">
    <div className="p-2">{icon}</div>
    <span className="text-sm md:text-base">{text}</span>
  </div>
);

const SocialIcon = ({ icon }) => (
  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all cursor-pointer">
    {icon}
  </div>
);

export default Footer;