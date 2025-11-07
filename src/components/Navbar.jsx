import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-900 bg-gray-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <nav className="flex w-full items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3"
            aria-label="Ir para início"
          >
            <span className="grid place-items-center text-red-600" aria-hidden="true">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 8l-4 4 4 4M17 8l4 4-4 4M10 19l4-14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-semibold leading-none text-white">Matheus Barroso</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-5 text-sm font-medium text-gray-300 md:flex">
            <button
              onClick={() => scrollToSection('sobre')}
              className="transition hover:text-red-400"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('competencias')}
              className="transition hover:text-red-400"
            >
              Competências
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="transition hover:text-red-400"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="transition hover:text-red-400"
            >
              Contato
            </button>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-2 rounded-lg border border-gray-700 bg-gray-800 p-2 text-yellow-400 transition hover:bg-gray-700"
              aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
              title={darkMode ? 'Modo Claro' : 'Modo Escuro'}
            >
              {darkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden bg-transparent border-0 text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="site-menu"
            aria-label="Abrir menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="site-menu"
            className="absolute right-5 top-16 flex min-w-[200px] flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900 md:hidden"
          >
            {['sobre', 'competencias', 'projetos', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="border-b border-gray-800 px-4 py-3 text-left text-gray-200 transition hover:text-red-400"
              >
                {item === 'competencias' ? 'Competências' : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            
            {/* Dark Mode Toggle Mobile */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-between px-4 py-3 text-left text-gray-200 transition hover:text-red-400"
            >
              <span>{darkMode ? 'Modo Claro' : 'Modo Escuro'}</span>
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;

