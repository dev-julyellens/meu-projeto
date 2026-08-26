# Portfólio — @dev-julyellens

Site de portfólio pessoal em desenvolvimento, construído com **React**, **TypeScript** e **Vite**. O projeto acompanha uma série de videoaulas no YouTube, aplicando conceitos de componentes, estado com hooks e estilização com CSS ao longo das aulas.

## Sobre o projeto

Este repositório reúne o progresso do portfólio da desenvolvedora **@dev-julyellens**. A página apresenta uma introdução profissional, navegação principal e uma seção de conteúdo interativa com botão "Saiba mais", que exibe informações adicionais ao clique.

O objetivo é evoluir gradualmente o site até cobrir todas as seções planejadas no menu: Home, Sobre Mim, Projetos e Contato.

## Funcionalidades

- **Cabeçalho** com nome e links de navegação (Home, Sobre Mim, Projetos, Contato)
- **Seção principal** com título, subtítulo e imagem de apresentação
- **Botão interativo** "Saiba mais" que revela um texto sobre experiência e paixão por tecnologia (estado gerenciado com `useState`)
- **Rodapé** com créditos de autoria
- **Layout responsivo** com flexbox e paleta azul e branco

## Tecnologias

| Tecnologia   | Uso                          |
| ------------ | ---------------------------- |
| React 19     | Interface e componentes        |
| TypeScript   | Tipagem estática               |
| Vite 8       | Build tool e servidor de dev   |
| CSS          | Estilização dos componentes    |
| ESLint       | Qualidade e padronização de código |

## Estrutura do projeto

```
meu-projeto/
├── public/              # Arquivos estáticos servidos na raiz
├── src/
│   ├── assets/          # Imagens e outros recursos
│   ├── App.tsx          # Componente raiz da aplicação
│   ├── App.css          # Estilos globais e do layout principal
│   ├── Header.tsx       # Cabeçalho com navegação
│   ├── Header.css       # Estilos do cabeçalho
│   ├── Conteudo.tsx     # Seção principal com botão interativo
│   ├── Conteudo.css     # Estilos da seção de conteúdo
│   └── main.tsx         # Ponto de entrada da aplicação
├── index.html           # HTML base
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração do TypeScript
└── vite.config.ts       # Configuração do Vite
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (incluído com o Node.js)

## Como executar

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd meu-projeto
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local (geralmente `http://localhost:5173`). Abra esse link no navegador para ver o portfólio.

## Scripts disponíveis

| Comando           | Descrição                                      |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento com HMR   |
| `npm run build`   | Gera a versão de produção na pasta `dist/`     |
| `npm run preview` | Visualiza localmente o build de produção       |
| `npm run lint`    | Executa o ESLint no código                     |

## Build para produção

```bash
npm run build
```

Os arquivos otimizados serão gerados em `dist/`. Para testar o resultado antes do deploy:

```bash
npm run preview
```

## Contexto de aprendizado

Este projeto é desenvolvido seguindo videoaulas no YouTube, com foco em:

- Criação e composição de componentes React
- Uso de hooks (`useState`) para interatividade
- Organização de estilos por componente (CSS modules por arquivo)
- Configuração e uso do Vite em projetos React + TypeScript

Conforme as aulas avançam, novas seções e funcionalidades serão adicionadas ao portfólio.

## Autora

**@dev-julyellens** — Desenvolvedora de sistemas

---

Feito com React, TypeScript e Vite.
