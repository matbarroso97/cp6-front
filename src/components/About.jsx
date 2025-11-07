import React from 'react';
import { FaJava, FaPython, FaReact, FaDocker } from 'react-icons/fa';
import {
  SiJavascript,
  SiSpringboot,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiMicrosoftazure,
  SiAmazonaws,
  SiTerraform,
} from 'react-icons/si';

const skillBoxes = [
  {
    id: 'linguagens',
    title: '💻 Linguagens',
    colClass: 'lg:col-span-2',
    tags: [
      { name: 'Java', icon: FaJava, iconClass: 'text-orange-500' },
      { name: 'Python', icon: FaPython, iconClass: 'text-sky-500' },
      { name: 'JavaScript', icon: SiJavascript, iconClass: 'text-yellow-400' },
    ],
  },
  {
    id: 'frameworks',
    title: '🚀 Frameworks & Libs',
    colClass: 'lg:col-span-2',
    tags: [
      { name: 'Spring Boot', icon: SiSpringboot, iconClass: 'text-green-500' },
      { name: 'React', icon: FaReact, iconClass: 'text-cyan-400' },
      { name: 'Next.js', icon: SiNextdotjs, iconClass: 'text-gray-200' },
      { name: 'Tailwind', icon: SiTailwindcss, iconClass: 'text-sky-400' },
    ],
  },
  {
    id: 'cloud',
    title: '☁️ Cloud & DevOps',
    colClass: 'lg:col-span-2',
    tags: [
      { name: 'AWS Certified', icon: SiAmazonaws, iconClass: 'text-amber-400', badge: true },
      { name: 'Azure', icon: SiMicrosoftazure, iconClass: 'text-blue-500' },
      { name: 'Docker', icon: FaDocker, iconClass: 'text-sky-500' },
      { name: 'Terraform', icon: SiTerraform, iconClass: 'text-purple-400' },
    ],
  },
  {
    id: 'databases',
    title: '🗄️ Databases',
    colClass: 'lg:col-span-2',
    tags: [{ name: 'PostgreSQL', icon: SiPostgresql, iconClass: 'text-indigo-400' }],
  },
  {
    id: 'markup',
    title: '🎨 Markup & Styling',
    colClass: 'lg:col-span-2',
    tags: [
      { name: 'HTML5', icon: () => <span className="text-lg text-orange-500">🌐</span> },
      { name: 'CSS3', icon: () => <span className="text-lg text-blue-500">🎨</span> },
    ],
  },
];

function About() {
  return (
    <>
      <section id="sobre" className="py-14">
        <div className="mx-auto max-w-5xl px-5 text-gray-200">
          <h2 className="mb-4 text-[28px] font-semibold text-white sm:text-[32px]">Sobre</h2>
          <p className="max-w-3xl text-lg leading-relaxed">
            Desenvolvo APIs REST com <strong className="text-white">Java</strong>, <strong className="text-white">Spring Boot</strong> e <strong className="text-white">SQL</strong>, aplicando boas práticas em APIs REST, JPA/Hibernate e modelagem de dados. Em dados, atuo com <strong className="text-white">Python</strong> e <strong className="text-white">SQL</strong> para ETL/Análise, usando recursos de <strong className="text-white">AWS</strong> como S3, Athena e QuickSight. No Front-end, possuo base em <strong className="text-white">HTML/CSS/JavaScript</strong>, <strong className="text-white">React</strong>, <strong className="text-white">Tailwind</strong> e <strong className="text-white">Next.js</strong>. Sigo estudando computação em nuvem (<strong className="text-white">AWS</strong> e <strong className="text-white">Azure</strong>).
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-gray-700 bg-gray-900 px-4 py-2 text-sm">Inglês: Intermediário</span>
            <span className="rounded-full border border-gray-700 bg-gray-900 px-4 py-2 text-sm">Espanhol: Avançado</span>
          </div>
        </div>
      </section>

      <section id="competencias" className="py-14">
        <div className="mx-auto max-w-5xl px-5 text-gray-200">
          <h2 className="text-[28px] font-semibold text-white sm:text-[32px]">Competências</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {skillBoxes.flatMap((box) => box.tags).map((tag) => {
              const Icon = tag.icon;
              return (
                <div
                  key={tag.name}
                  className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900/80 px-3.5 py-2 text-sm font-medium text-gray-100 transition hover:-translate-y-[2px] hover:border-red-500 hover:bg-gray-800"
                >
                  {Icon && (
                    <span className={tag.iconClass ?? 'text-white'}>
                      <Icon className="text-lg" />
                    </span>
                  )}
                  <span>{tag.name}</span>
                  {tag.badge && (
                    <span className="rounded-full bg-red-600 px-2 text-xs font-semibold text-white">✓</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
