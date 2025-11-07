import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contato" className="py-14">
      <div className="mx-auto max-w-[1100px] px-5">
        <h2 className="mb-8 text-[28px] font-semibold text-white sm:text-[32px]">Contato</h2>

        <p className="mb-10 text-center text-lg text-gray-200">Vamos trabalhar juntos?</p>

        <div className="flex flex-col gap-8 md:flex-row md:gap-10">
          {/* Contato (Email & LinkedIn) */}
          <div className="flex flex-1 flex-col justify-between gap-5">
            <a
              href="mailto:matheusbarroso.dev@gmail.com"
              className="flex items-center gap-5 rounded-xl border border-gray-800 bg-gray-900 p-6 transition hover:-translate-y-1 hover:border-red-500 hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
                <FaEnvelope className="text-2xl" />
              </div>
              <div>
                <h3 className="mb-1 text-xl font-semibold text-white">Email</h3>
                <p className="text-base text-gray-400">matheusbarroso.dev@gmail.com</p>
              </div>
            </a>

            <div className="relative my-5 flex items-center justify-center">
              <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            </div>

            <a
              href="https://www.linkedin.com/in/matheusdcbarroso/"
              className="flex items-center gap-5 rounded-xl border border-gray-800 bg-gray-900 p-6 transition hover:-translate-y-1 hover:border-red-500 hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">
                <FaLinkedin className="text-2xl" />
              </div>
              <div>
                <h3 className="mb-1 text-xl font-semibold text-white">LinkedIn</h3>
                <p className="text-base text-gray-400">@matheusdcbarroso</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-white">Envie uma Mensagem</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-1 hover:bg-red-500 hover:shadow-lg"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

