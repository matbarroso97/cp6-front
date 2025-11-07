import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1a1a1d] py-6 mt-12 text-center text-sm text-[#a7a7ad]">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Matheus Barroso | Desenvolvedor Back-End | FIAP</p>
          <div className="flex gap-3 text-lg text-[#eaeaf0]">
            <a
              href="https://github.com/matbarroso97"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#e60000]"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/matheusdcbarroso/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#e60000]"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/5511911536344"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#e60000]"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

