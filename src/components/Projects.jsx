import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaVideo, FaSearch } from 'react-icons/fa';

function Projects() {
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      title: 'Passa a Bola — Plataforma de Futebol Feminino',
      description: 'Plataforma fullstack para acompanhar futebol feminino com tabelas, jogos, notícias e um sistema de Fantasy com ranking. Autenticação com tokens e bcrypt; API Node/Express com proteções de segurança.',
      tags: ['React', 'Tailwind', 'Express'],
      category: 'Fullstack',
      type: 'Acadêmico',
      github: 'https://github.com/matbarroso97/passa-a-bola-project',
      demo: 'https://passa-a-bola-project.vercel.app/',
      video: '/passaabolafinal.mp4',
      icon: '⚽'
    },
    {
      title: 'CRUD de Funcionários (Spring Boot + DynamoDB)',
      description: 'API REST para gerenciamento de funcionários, construída com Spring Boot 3 e Amazon DynamoDB (NoSQL). Integração com serviços AWS via SDK oficial, demonstrando operações CRUD e boas práticas.',
      tags: ['Java', 'Spring Boot', 'AWS'],
      category: 'Back-end',
      type: 'Acadêmico',
      github: 'https://github.com/matbarroso97/springboot-dynamodb-crud',
      video: '/0504.mp4',
      icon: '🗃️'
    },
    {
      title: 'Instituto Balbino Fé com Obras',
      description: 'Site completo desenvolvido como projeto voluntário. Front-end responsivo com HTML, CSS e JavaScript, incluindo criação da identidade visual (logotipo e banner).',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: 'Front-end',
      type: 'Voluntário',
      demo: 'https://institutobalbino.com.br',
      icon: '🏛️'
    },
    {
      title: 'Media Kit Interativo',
      description: 'Landing page responsiva para apresentar a influencer, com métricas, marcas, galeria, vídeos e meios de contato.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: 'Front-end',
      type: 'Freelance',
      demo: 'https://www.isasilveiramkp.com/',
      icon: '💄'
    },
    {
      title: 'CRUD de Clientes (Spring Boot)',
      description: 'API REST completa para gerenciamento de clientes com Spring Boot 3.5.5, JPA, validação de dados e tratamento robusto de exceções. Sistema com paginação, DTOs personalizados e banco H2 para demonstração.',
      tags: ['Java', 'Spring Boot'],
      category: 'Back-end',
      type: 'Acadêmico',
      github: 'https://github.com/matbarroso97/springboot-client-crud',
      icon: '👥'
    },
    {
      title: 'CRUD com JPA + Hibernate + PostgreSQL',
      description: 'Aplicação CRUD da entidade Pessoa usando JPA (Hibernate) e PostgreSQL. Boas práticas de EntityManager, transações e estruturação para estudo e portfólio.',
      tags: ['Java', 'PostgreSQL'],
      category: 'Back-end',
      type: 'Acadêmico',
      github: 'https://github.com/matbarroso97/jpa-hibernate-postgresql',
      icon: '🗃️'
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (!searchTerm) return true;
    
    return (
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <section id="projetos" className="py-16 bg-gray-950 text-gray-200">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-[28px] font-semibold text-white sm:text-[32px] mb-8">
          Projetos
        </h2>

        {/* Search Bar */}
        <div className="mb-10">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar projetos por nome, tecnologia, categoria..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-gray-800 bg-gray-900 py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">
              Nenhum projeto encontrado para "{searchTerm}".
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition hover:-translate-y-[2px] hover:border-red-500"
              >
                {/* Card Header */}
                <div className="border-b border-gray-800 p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <span className="text-3xl">{project.icon}</span>
                    <div className="flex flex-wrap justify-end gap-2">
                      <span className={`px-3 py-1 text-xs font-bold rounded ${
                        project.category === 'Fullstack' ? 'bg-purple-500/20 text-purple-300' :
                        project.category === 'Back-end' ? 'bg-orange-500/20 text-orange-300' :
                        'bg-sky-500/20 text-sky-300'
                      }`}>
                        {project.category.toUpperCase()}
                      </span>
                      <span className={`px-3 py-1 text-xs font-bold rounded ${
                        project.type === 'Acadêmico' ? 'bg-blue-500/20 text-blue-400' :
                        project.type === 'Freelance' ? 'bg-green-500/20 text-green-400' :
                        'bg-teal-500/20 text-teal-400'
                      }`}>
                        {project.type.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Description */}
                  <p className="mb-4 min-h-[84px] text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="mb-4 min-h-[60px]">
                    <p className="mb-2 text-xs font-semibold text-gray-500">STACK:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="flex items-center gap-1 rounded border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links - Botões com largura uniforme */}
                  <div className="mt-auto flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-1 rounded-md border border-gray-700 bg-gray-800 px-2 py-2 text-xs font-medium text-white transition hover:bg-gray-700 min-w-0"
                        aria-label={`Ver repositório do projeto ${project.title}`}
                      >
                        <FaGithub className="flex-shrink-0" /> 
                        <span className="hidden sm:inline">Repo</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-1 rounded-md bg-red-600 px-2 py-2 text-xs font-semibold text-white transition hover:bg-red-500 min-w-0"
                        aria-label={`Ver site do projeto ${project.title}`}
                      >
                        <FaExternalLinkAlt className="flex-shrink-0" /> 
                        <span className="hidden sm:inline">Site</span>
                      </a>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-1 rounded-md bg-red-600 px-2 py-2 text-xs font-medium text-white transition hover:bg-red-500 min-w-0"
                        aria-label={`Ver vídeo do projeto ${project.title}`}
                      >
                        <FaVideo className="flex-shrink-0" /> 
                        <span className="hidden sm:inline">Vídeo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;

