# Pesquisa Avançada com IA

[![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Pesquisa Avançada com Inteligência Artificial (PAIA)** é um sistema de código aberto que combina a praticidade de uma interface de pesquisa avançada (inspirada no [Google Advanced Search](https://www.google.com/advanced_search)) com o poder de modelos de linguagem (LLMs) que possuem acesso à web.

O usuário define filtros de busca por meio de uma interface gráfica, escolhe um modelo de IA e, opcionalmente, formula uma pergunta. O sistema monta um prompt estruturado que instrui o LLM a adotar a [personalidade da PAIA](https://advanced-research-ai.vercel.app/persona) e a aplicar o [filtro de busca](https://advanced-research-ai.vercel.app/ai-search-filter) antes de responder.

> **Site em produção:** [https://advanced-research-ai.vercel.app](https://advanced-research-ai.vercel.app)  
> **Idioma padrão:** Português (Brasil) (`pt-BR`)

---

## Como funciona

1. O usuário preenche os campos de filtros de pesquisa disponíveis na interface gráfica.
2. Opcionalmente adiciona filtros extras (referência e parâmetros/operadores adicionais).
3. Seleciona um dos modelos de IA disponíveis ou mantém o que já foi definido por padrão.
4. Pode incluir uma pergunta ou instrução personalizada.
5. Ao enviar, o sistema gera um prompt contendo:
   - Links para a documentação da **persona** e do **filtro de busca**
   - Os parâmetros de filtro no formato `AI Search Filter` / `AI Extra Search Filter`
   - A instrução para o LLM adotar a personalidade da PAIA antes de responder
6. O prompt é aberto diretamente no chat do modelo escolhido (via URL) ou pode ser copiado para a área de transferência.

### Fluxo esperado do LLM (persona PAIA)

1. **Fase 1** — Interpreta os parâmetros e operadores recebidos **sem realizar busca**. Explica o que será filtrado e pede confirmação explícita do usuário.
2. **Fase 2** — Após a autorização, executa **exatamente uma** busca na web e responde **exclusivamente** com base nos resultados obtidos.

---

## Funcionalidades

- Interface de pesquisa avançada inspirada no Google
- Campos nativos: todas as palavras, frase exata, exclusões, site/domínio, tipo de arquivo, idioma, região e intervalo de datas
- Campos extras para parâmetros e operadores personalizados
- Seleção de múltiplos modelos de IA com suporte a web search
- Geração automática de prompt estruturado com persona + filtro
- Botão para copiar o prompt ou abrir diretamente no chat do modelo
- Páginas de documentação da [persona](/persona) e do [filtro de busca](/ai-search-filter) (via Nuxt Content)
- Página [Sobre](/about)
- Tema claro/escuro (Nuxt UI)
- Pré-renderização das páginas de conteúdo

---

## Stack Tecnológica

| Categoria             | Tecnologia                             |
| --------------------- | -------------------------------------- |
| Framework             | Nuxt 4                                 |
| UI Framework          | Vue 3                                  |
| Componentes de UI     | @nuxt/ui                               |
| Conteúdo              | @nuxt/content                          |
| Estilização           | Tailwind CSS 4                         |
| Tipagem               | TypeScript                             |
| Linting               | ESLint + @nuxt/eslint                  |
| Formatação            | Prettier + prettier-plugin-tailwindcss |
| Git Hooks             | Husky + lint-staged + Commitlint       |
| Banco local (Content) | better-sqlite3                         |

---

## Pré-requisitos

- **Node.js** — **22.x ou superior** (recomenda-se a versão **LTS ativa**). Prefira versões pares (22, 24, etc.)
- **Git**

---

## Começando

### 1. Clone o repositório

```bash
git clone https://github.com/Erick-Leite/Advanced-Research-with-AI.git
cd Advanced-Research-with-AI
```

### 2. Instale as dependências

```bash
npm ci
```

> O script `postinstall` executa automaticamente `nuxt prepare`.

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev -- -o
```

Uma janela do navegador deverá abrir automaticamente em `http://localhost:3000` (ou na porta definida pelo ambiente).

### 4. Build de produção

```bash
npm run build
```

### 5. Preview da build

```bash
npm run preview
```

### 6. Geração estática (SSG)

```bash
npm run generate
```

---

## Scripts Disponíveis

| Script     | Descrição                                 |
| ---------- | ----------------------------------------- |
| `dev`      | Inicia o servidor de desenvolvimento      |
| `build`    | Gera a build de produção                  |
| `generate` | Gera site estático                        |
| `preview`  | Visualiza a build de produção localmente  |
| `format`   | Formata arquivos com Prettier             |
| `lint:fix` | Corrige problemas de lint automaticamente |
| `prepare`  | Configura os hooks do Husky               |

---

## Estrutura do Projeto

```
.
├── app/                          # Código-fonte da aplicação (Nuxt 4)
│   ├── assets/                   # Recursos estáticos da aplicação
│   │   └── css/                  # Folhas de estilo globais
│   ├── components/               # Componentes Vue
│   ├── composables/              # Lógica reutilizável de montagem de prompt e execução de busca
│   ├── constants/                # Constantes de opções de busca e modelos de IA
│   ├── layouts/                  # Layouts da aplicação
│   ├── pages/                    # Rotas e páginas
│   ├── types/                    # Tipagens TypeScript
│   │   └── search-options/       # Tipagens específicas das opções de busca
│   └── utils/                    # Funções utilitárias
├── content/                      # Conteúdo em Markdown gerenciado pelo Nuxt Content
├── docs/                         # Documentação interna do projeto
│   └── design/                   # Documentação e prompts de design
├── public/                       # Arquivos estáticos públicos
├── .husky/                       # Git hooks
├── .idx/                         # Configuração do ambiente de desenvolvimento IDX
├── .vscode/                      # Configurações do editor
├── README.md                     # Documentação principal do projeto
├── nuxt.config.ts                # Configuração principal do Nuxt
├── package.json                  # Dependências e scripts do projeto
├── package-lock.json             # Lockfile do npm
├── commitlint.config.ts          # Regras de Conventional Commits
├── eslint.config.mjs             # Configuração do ESLint
├── .prettierrc.json              # Configuração do Prettier
├── tsconfig.json                 # Configuração do TypeScript
├── LICENSE                       # Licença do projeto
└── .gitignore                    # Arquivos e diretórios ignorados pelo Git
```

---

## Configuração Principal (`nuxt.config.ts`)

- **Módulos:** `@nuxt/content`, `@nuxt/eslint`, `@nuxt/ui`
- **CSS global:** `~/assets/css/main.css`
- **Idioma do HTML:** `pt-BR`
- **Favicon:** SVG
- **Pré-renderização:** `/persona` e `/ai-search-filter`
- **DevTools:** habilitado

---

## Qualidade de Código e Git Hooks

O projeto utiliza:

- **ESLint** integrado ao Nuxt + Prettier
- **Prettier** com plugin do Tailwind CSS
- **Husky** + **lint-staged**:
  - Formata arquivos `*.{json,css,md}`
  - Executa `eslint --fix` nos demais arquivos
- **Commitlint** com Conventional Commits

Exemplos de mensagens de commit aceitas:

```
feat(AI_ASSISTANT_MODELS): add DeepSeek
fix(svg-icon-generation-prompt): correct spelling errors
docs(README): update project documentation
chore(package): update dependencies
```

---

## Convenções e Boas Práticas

1. **Idioma:** Conteúdo voltado ao usuário em português brasileiro.
2. **Componentes:** Preferir componentes do `@nuxt/ui`.
3. **Estilos:** Utilizar classes utilitárias do Tailwind CSS.
4. **Tipagem:** Aproveitar o TypeScript gerado pelo Nuxt.
5. **Conteúdo:** Páginas de documentação via `@nuxt/content` (Markdown/MDC).
6. **Commits:** Seguir Conventional Commits (validado automaticamente).

---

## Links Úteis

- **Site:** [https://advanced-research-ai.vercel.app](https://advanced-research-ai.vercel.app)
- **Persona:** [https://advanced-research-ai.vercel.app/persona](https://advanced-research-ai.vercel.app/persona)
- **Filtro de busca:** [https://advanced-research-ai.vercel.app/ai-search-filter](https://advanced-research-ai.vercel.app/ai-search-filter)
- **Sobre:** [https://advanced-research-ai.vercel.app/about](https://advanced-research-ai.vercel.app/about)
- **Repositório:** [https://github.com/Erick-Leite/Advanced-Research-with-AI](https://github.com/Erick-Leite/Advanced-Research-with-AI)

---

## Licença

Este projeto está licenciado sob a licença **MIT**.

---

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch a partir de `main` (`git checkout -b feat/new-feature`)
3. Faça commits seguindo Conventional Commits
4. Abra um Pull Request descrevendo claramente as mudanças

---

## Autor

**Pedro Erick**

- **Email:** [erickleite338@gmail.com](mailto:erickleite338@gmail.com)
- **Blog Pessoal:** [https://thematic-universe-blog.com/author/pedro-erick](https://thematic-universe-blog.com/author/pedro-erick)
