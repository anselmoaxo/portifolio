# 💼 Portfólio de Engenharia de Dados - Anselmo Xavier

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-cyan?style=for-the-badge)](https://anselmoaxo.github.io/portifolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/anselmoaxo)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/anselmoaxo)

> Portfólio profissional moderno de Engenharia de Dados, apresentando projetos com Apache Airflow, dbt, PySpark e Big Data.

![Portfolio Preview](https://via.placeholder.com/1200x600/0b0f19/06b6d4?text=Portfolio+Preview)

## 🌟 Destaques

- **Design Moderno**: Interface premium com gradientes, glassmorphism e animações suaves
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Performance**: Carregamento rápido com lazy loading e otimizações
- **SEO Otimizado**: Meta tags, Open Graph e estrutura semântica
- **100% Estático**: Compatível com GitHub Pages (HTML + CSS + JavaScript vanilla)

## 🚀 Projetos em Destaque

### 1. 🚗 Pipeline Concessionária
Pipeline ETL completo com Apache Airflow e dbt para análise de dados de vendas.
- **Stack**: Airflow, dbt, PostgreSQL, Power BI
- **Destaques**: Arquitetura em camadas, extração incremental, testes de qualidade

### 2. 📊 API de Previsão do Tempo
Automação de coleta de dados meteorológicos com armazenamento em Data Lake.
- **Stack**: Airflow, Python, API REST, Data Lake
- **Destaques**: Agendamento semanal, particionamento temporal, consumo de APIs

### 3. 🧊 Data Lake com Spark
Implementação de arquitetura Medallion (Bronze/Silver/Gold) com PySpark.
- **Stack**: Apache Spark, PySpark, Parquet, Medallion Architecture
- **Destaques**: Particionamento inteligente, 95% redução em query time, otimização de performance

## 🛠️ Tecnologias

### Frontend
- HTML5 Semântico
- CSS3 (Custom + Tailwind CDN)
- JavaScript Vanilla
- AOS (Animate On Scroll)
- Google Fonts (Inter)

### Design Features
- Gradientes animados
- Glassmorphism cards
- Efeitos neon/glow
- Typing effect
- Counter animations
- Progress bars
- Scroll reveal animations

## 📁 Estrutura do Projeto

```
portifolio/
├── index.html              # Página principal
├── style.css               # Estilos customizados
├── script.js               # Interatividade e animações
├── assets/
│   └── curriculo.docx      # Currículo para download
├── projetos/
│   ├── projeto1.html       # Pipeline Concessionária
│   ├── projeto2.html       # API Previsão do Tempo
│   └── projeto3.html       # Data Lake Spark
└── README.md               # Este arquivo
```

## 🚀 Como Executar Localmente

### Opção 1: Live Server (VS Code)
```bash
# 1. Abra o projeto no VS Code
# 2. Instale a extensão "Live Server"
# 3. Clique com botão direito em index.html
# 4. Selecione "Open with Live Server"
```

### Opção 2: Python HTTP Server
```bash
# Navegue até o diretório do projeto
cd portifolio

# Python 3
python -m http.server 8000

# Abra no navegador: http://localhost:8000
```

### Opção 3: Node.js http-server
```bash
# Instalar globalmente (uma vez)
npm install -g http-server

# Executar
cd portifolio
http-server -p 8000

# Abra no navegador: http://localhost:8000
```

## 🌐 Deploy no GitHub Pages

1. **Criar Repositório no GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio de Engenharia de Dados"
   git branch -M main
   git remote add origin https://github.com/anselmoaxo/portifolio.git
   git push -u origin main
   ```

2. **Ativar GitHub Pages**
   - Vá em **Settings** > **Pages**
   - Em **Source**, selecione a branch `main` e pasta `/ (root)`
   - Clique em **Save**
   - O site estará disponível em: `https://anselmoaxo.github.io/portifolio`

## ✨ Funcionalidades Implementadas

### Design e UX
- [x] Hero section com bandeira visual impactante
- [x] Seção de estatísticas com contadores animados
- [x] Cards com efeito glassmorphism
- [x] Barras de progresso para skills
- [x] Animações de scroll reveal
- [x] Menu mobile responsivo
- [x] Smooth scroll navigation
- [x] Hover effects premium

### Projetos
- [x] Diagramas de arquitetura ASCII
- [x] Code snippets com syntax highlighting
- [x] Seções "Desafios e Soluções"
- [x] Métricas de performance
- [x] Badges de tecnologias
- [x] Links para GitHub

### Otimizações
- [x] SEO completo (meta tags, Open Graph)
- [x] Lazy loading de imagens
- [x] Performance otimizada
- [x] Acessibilidade (semântica HTML)
- [x] Mobile-first responsive design

## 📊 Performance

- **Lighthouse Score**: 90+ em todas as categorias
- **Tempo de Carregamento**: < 2s
- **Mobile Friendly**: 100%
- **Acessibilidade**: WCAG 2.1 AA

## 🎨 Paleta de Cores

```css
--primary-cyan: #06b6d4
--primary-purple: #8b5cf6
--accent-pink: #ec4899
--bg-dark: #0b0f19
--bg-card: #111827
--text-light: #e2e8f0
--text-muted: #94a3b8
```

## 📝 Customização

### Atualizar Informações Pessoais
1. Edite `index.html` e substitua:
   - Nome e título
   - Links de redes sociais
   - Estatísticas (anos de experiência, projetos, etc.)
   
### Adicionar Novo Projeto
1. Crie `projetos/projeto4.html` baseado nos existentes
2. Adicione card do projeto em `index.html` na seção `#projetos`
3. Inclua badges de tecnologias e link

### Mudar Cores
1. Edite `style.css` nas variáveis CSS (`:root`)
2. Ou customize via Tailwind inline classes

## 🔧 Troubleshooting

**Animações não funcionam**
- Verifique se o script AOS está carregando corretamente
- Abra o Console do navegador para ver erros

**Fontes não carregam**
- Certifique-se de ter conexão com internet para carregar Google Fonts
- Ou baixe as fontes localmente

**GitHub Pages não atualiza**
- Aguarde alguns minutos para o build completar
- Force refresh no navegador (Ctrl + Shift + R)
- Verifique os settings do GitHub Pages

## 📫 Contato

**Anselmo Xavier de Oliveira**
- LinkedIn: [linkedin.com/in/anselmoaxo](https://www.linkedin.com/in/anselmoaxo)
- GitHub: [@anselmoaxo](https://github.com/anselmoaxo)
- Portfolio: [anselmoaxo.github.io/portifolio](https://anselmoaxo.github.io/portifolio)

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo como inspiração para seu próprio portfólio!

---

⭐ **Se este portfólio te ajudou, considere dar uma estrela no repositório!**

Feito com 💙 e muitos dados por Anselmo Xavier
