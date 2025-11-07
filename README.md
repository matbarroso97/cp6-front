# 🚀 Portfólio - Matheus Barroso

Portfólio pessoal desenvolvido com **React** e **Tailwind CSS** para apresentar meus projetos, habilidades e informações de contato.

## 📋 Sobre o Projeto

Este é um site de portfólio responsivo e moderno, desenvolvido como parte do **CP3 - Front-End** da FIAP. O projeto foi construído seguindo as melhores práticas de desenvolvimento web, com foco em:

- ✅ Design responsivo para todos os dispositivos
- ✅ SEO otimizado
- ✅ Microinterações e animações suaves
- ✅ Interface moderna e intuitiva

## 🛠️ Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces
- **Tailwind CSS 3.3.6** - Framework CSS utility-first
- **React Icons** - Biblioteca de ícones
- **React Type Animation** - Animação de texto digitado

## 📁 Estrutura do Projeto

```
CP-portfolio/
├── public/
│   ├── 1.png                          # Foto de perfil
│   ├── cloud.png                      # Badge AWS
│   ├── 0504.mp4                       # Vídeo projeto DynamoDB
│   ├── passaabolafinal.mp4            # Vídeo projeto Passa a Bola
│   ├── favicon.svg                    # Ícone do site
│   ├── Matheus_Barroso_CurriculoDev_ATS.docx
│   ├── Matheus_Barroso_Curriculo_dados.docx
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                 # Barra de navegação
│   │   ├── Hero.jsx                   # Seção principal
│   │   ├── About.jsx                  # Sobre mim
│   │   ├── Projects.jsx               # Lista de projetos
│   │   ├── Contact.jsx                # Formulário de contato
│   │   └── Footer.jsx                 # Rodapé
│   ├── App.jsx                        # Componente principal
│   ├── index.jsx                      # Ponto de entrada
│   └── index.css                      # Estilos globais
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Funcionalidades

### 🏠 Seção Hero
- Apresentação pessoal com animação de texto digitado
- Botões de ação (Ver Projetos, GitHub, Contato)
- Download de currículos (Dev e Dados)
- Foto de perfil com efeitos hover

### 👨‍💻 Sobre
- Descrição profissional
- Idiomas
- Competências técnicas organizadas por categorias

### 💼 Projetos
- Barra de pesquisa para filtrar projetos por:
- Cards padronizados com:
  - Descrição do projeto
  - Stack tecnológico
  - Links para repositório e demo
  - Vídeos demonstrativos

### 📧 Contato
- Links diretos para Email e LinkedIn
- Formulário de contato com validação
- Design responsivo


## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/matbarroso97/CP-portfolio.git
cd CP-portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm start
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `build/`.

## 🌐 Deploy

O projeto está hospedado na **Vercel**:

🔗 [Link do Site](https://cp6-front-mu.vercel.app/)
