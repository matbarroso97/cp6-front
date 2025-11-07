import React from 'react';
import { FaGithub, FaFileAlt, FaChartBar, FaPhone } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projetos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex min-h-[72vh] items-center justify-center bg-gradient-to-br from-gray-950 to-gray-900 py-16 text-gray-200">
      <div className="mx-auto grid w-full max-w-5xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-[32px] font-semibold leading-tight text-red-600 md:text-[36px]">
              <TypeAnimation
                sequence={[
                  'Olá, eu sou Matheus Barroso',
                  2000,
                  'Engenheiro de Software',
                  2000,
                  'Desenvolvedor Back-end',
                  2000,
                  'Desenvolvedor Front-end',
                  2000,
                ]}
                wrapper="span"
                cursor
                repeat={Infinity}
                className="inline-block"
              />
            </h1>
          </div>

          <p>
            Estudante de Engenharia de Software na FIAP, com foco em <strong className="text-white">Back-end</strong>, atuando também em <strong className="text-white">Fullstack</strong> e <strong className="text-white">Dados</strong>.
          </p>

          <p className="text-gray-400">
            Aprofundando <strong className="text-white">Java</strong>, <strong className="text-white">SQL</strong>, <strong className="text-white">Spring Boot</strong> e fundamentos de <strong className="text-white">AWS</strong> e <strong className="text-white">Azure</strong> para cloud.
          </p>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-2">
            <button
              onClick={scrollToProjects}
              className="col-span-2 flex items-center justify-center rounded-lg border border-red-700 bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-[2px] hover:bg-red-500 lg:col-span-1 lg:row-span-2"
            >
              Ver projetos
            </button>

            <a
              href="https://github.com/matbarroso97"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-medium text-gray-100 transition hover:-translate-y-[2px] hover:border-red-600 hover:bg-gray-800"
            >
              <FaGithub /> GitHub
            </a>

            <button
              onClick={scrollToContact}
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-medium text-gray-100 transition hover:-translate-y-[2px] hover:border-red-600 hover:bg-gray-800"
            >
              <FaPhone /> Contato
            </button>

            <a
              href="/Matheus_Barroso_CurriculoDev_ATS.docx"
              download
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-medium text-gray-100 transition hover:-translate-y-[2px] hover:border-red-600 hover:bg-gray-800"
            >
              <FaFileAlt /> Currículo Dev
            </a>

            <a
              href="/Matheus_Barroso_Curriculo_dados.docx"
              download
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-medium text-gray-100 transition hover:-translate-y-[2px] hover:border-red-600 hover:bg-gray-800"
            >
              <FaChartBar /> Currículo Dados
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/1.png"
            alt="Foto de perfil de Matheus Barroso"
            className="h-auto w-full max-w-[260px] rounded-xl border border-gray-800 shadow-lg transition hover:scale-[1.03] hover:shadow-2xl lg:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

