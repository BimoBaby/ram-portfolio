import { Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/ray-andrew-manila-2126b4275", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100092542480793", label: "Facebook" },
];

const footerLinks = [
  { to: "/ram-about", label: "About" },
  { to: "/ram-projects", label: "Projects" },
  { to: "/ram-exp", label: "Experience" },
  { to: "/ram-contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-xl font-bold tracking-tight">
              RAM<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Ray Andrew Manila. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
