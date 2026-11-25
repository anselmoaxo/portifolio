# Portfólio — Anselmo Xavier

Portfólio profissional de **Anselmo Xavier**, especialista em ERP, Engenharia de Dados e Analytics Engineering.

- Produção: <https://dev.anselmotech.online/>
- GitHub Pages: <https://anselmoaxo.github.io/portifolio/>

## Stack

- [Astro](https://astro.build) gerando site 100% estático
- Tailwind CSS 4
- Fontes self-hosted (Inter, Fraunces, JetBrains Mono), sem CDN externo
- Tema claro e escuro, três idiomas (PT, EN, ES)

## Rodar localmente

```bash
npm ci
npm run dev        # http://localhost:4321
npm run build      # gera dist/
npm run preview    # serve dist/
npm test           # astro check + build
```

## Estrutura

```
src/
├── pages/                 # rotas: /, /en/, /es/, /projetos/<slug>/
├── components/            # Header, Footer, Home (todas as seções)
├── layouts/Base.astro     # <head>, SEO, tema
├── content/projects/      # um arquivo .md por projeto
├── data/profile.ts        # contato, experiência, stack, cursos
├── i18n/ui.ts             # textos da interface em PT/EN/ES
└── styles/global.css      # cores e tipografia
public/
├── assets/                # currículo PDF/DOCX
└── projetos/projetoN.html # redirecionam os links antigos
```

## Como editar

- **Adicionar um projeto:** crie `src/content/projects/meu-projeto.md` copiando um existente. O cabeçalho (frontmatter) tem título, resumo e impacto nos três idiomas, stack, link do GitHub, métricas e a ordem. O corpo em Markdown vira a página de detalhe em `/projetos/meu-projeto/`.
- **Textos da página:** `src/i18n/ui.ts`.
- **Experiência, stack, cursos e contato:** `src/data/profile.ts`.
- **Cores:** variáveis em `src/styles/global.css` (`:root` para o tema claro e `[data-theme="dark"]` para o escuro).
- **Currículo:** substitua os arquivos em `public/assets/`.

## Deploy

### GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` roda `astro check`, compila com
`SITE_URL=https://anselmoaxo.github.io` e `BASE_PATH=/portifolio` e publica `dist/`.
Em **Settings > Pages**, a fonte deve ser **GitHub Actions**.

### EasyPanel (Docker)

```text
Build method: Dockerfile
Dockerfile: ./Dockerfile
Build context: .
Internal port: 80
Health check: /health
```

O Node existe só no estágio de build. A imagem final contém apenas Nginx e `dist/`.
Sem variáveis, o build usa `https://dev.anselmotech.online` na raiz.

## Licença

MIT
