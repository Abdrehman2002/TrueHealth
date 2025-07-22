import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-trust-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">True Cycle Health</h3>
                <p className="text-sm text-blue-200">Revenue Cycle Management</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              We offer top-tier revenue cycle management solutions tailored for the healthcare industry across the United States. With a focus on efficiency and precision, our team is dedicated to delivering outstanding results that exceed expectations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-blue-100 hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-blue-100 hover:text-accent transition-colors">
                About True Cycle Health
              </Link>
              <Link to="/services" className="block text-blue-100 hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/specialties" className="block text-blue-100 hover:text-accent transition-colors">
                Our Specialties
              </Link>
              <Link to="/blog" className="block text-blue-100 hover:text-accent transition-colors">
                Blog
              </Link>
              <Link to="/careers" className="block text-blue-100 hover:text-accent transition-colors">
                Careers
              </Link>
              <Link to="/contact" className="block text-blue-100 hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <nav className="space-y-2">
              <Link to="/services" className="block text-blue-100 hover:text-accent transition-colors">
                Front Desk & Administrative Support
              </Link>
              <Link to="/services" className="block text-blue-100 hover:text-accent transition-colors">
                Back-End RCM Solutions
              </Link>
              <Link to="/services" className="block text-blue-100 hover:text-accent transition-colors">
                Credentialing and Payer Enrollment
              </Link>
              <Link to="/services" className="block text-blue-100 hover:text-accent transition-colors">
                Revenue Cycle Audit & Analysis
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-blue-100">Phone</p>
                  <a href="https://wa.me/923191982228" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
                    (214) 555-7890
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-blue-100">Email</p>
                  <a href="mailto:info@truecyclehealth.com" className="hover:text-accent transition-colors">
                    info@truecyclehealth.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-blue-100">Location</p>
                  <p>Dallas, TX - Nationwide Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400/20 mt-12 pt-8 text-center">
          <p className="text-blue-100">
            © Copyright 2025 | All Rights Reserved True Cycle Health
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;