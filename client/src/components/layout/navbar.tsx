import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import Logo from '../../images/LogoDesktop.svg'
import Logo from '../../images/Logo.png'
//@ts-ignore
import Translator from '../ui/Translator'
import ScrollProgress from "../common/ScrollProgress";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

// Add more menu items
const moreMenuItems = [
  { label: "FAQ", href: "/faq" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <header className="sticky top-0 w-full z-50 bg-background shadow-md">
      <nav className="navbar container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
            {/* <Leaf className="h-6 w-6" />
            <span>Mooropan</span> */}
            <img
              src={Logo}
              alt="Logo"
              className="h-14 "
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col justify-between items-end">

          <div className="flex items-center space-x-6 mb-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className=" relative text-xl text-orange-800 font-kanit font-medium hover:text-orange-400 transition-colors"
              >
                <div className="nav-text relative">
                {link.label}
                </div>
              </Link>
            ))}
            
            {/* <DropdownMenu>
              <DropdownMenuTrigger className="text-lg text-orange-800 font-kanit font-medium hover:text-primary transition-colors flex items-center gap-1">
                More <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {moreMenuItems.map((item) => (
                  <DropdownMenuItem key={item.href}>
                    <Link href={item.href} className="w-full">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu> */}

            <div>
            <div className="text-sm cursor-pointer flex items-center gap-2 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6z"/>
                <path d="m22 6-10 7L2 6"/>
              </svg>
              <span>contact@example.com</span>
            </div>
            <div className="text-sm cursor-pointer flex items-center gap-2 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>(555) 123-4567</span>
            </div>
            </div>

            <Translator
            />
          </div>
          
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background px-4 py-3 shadow-md">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading font-medium hover:text-primary transition-colors py-2 border-b border-muted last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      <ScrollProgress />
    </header>
  );
};

export default Navbar;
