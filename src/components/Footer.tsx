import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a href="https://github.com/nikamshubham07" className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="www.linkedin.com/in/shubham-nikam03" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shubham Nikam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;