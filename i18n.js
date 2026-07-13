// ========================================
// PORTFOLIO INTERNATIONALIZATION (i18n)
// ========================================

if (typeof window !== 'undefined' && typeof document !== 'undefined') {

const I18N = {
  currentLang: 'pt',
  supportedLangs: ['pt', 'en', 'es'],

  translations: {
    // ==========================================
    // PT-BR
    // ==========================================
    pt: {
      // SEO
      'page.title': 'Anselmo Xavier | Especialista em ERP e Engenharia de Dados',
      'meta.desc': 'Portfólio de Anselmo Xavier, profissional de Tecnologia com mais de 16 anos de experiência em ERP, SQL e bancos de dados, atualmente especializado em Engenharia de Dados, Analytics Engineering, automação e Inteligência Artificial.',
      'meta.keywords': 'Especialista ERP, Engenharia de Dados, Analytics Engineering, SQL, PostgreSQL, Apache Airflow, dbt, Python, ETL, modelagem de dados, n8n, LangChain, IA, automação, pipeline de dados',
      'og.title': 'Anselmo Xavier | Especialista em ERP e Engenharia de Dados',
      'og.desc': 'Profissional de Tecnologia com mais de 16 anos de experiência em ERP, SQL e bancos de dados. Especializado em Engenharia de Dados, Analytics Engineering, automação e Inteligência Artificial.',
      'twitter.title': 'Anselmo Xavier | Especialista em ERP e Engenharia de Dados',

      // Nav
      'nav.sobre': 'Sobre',
      'nav.experiencia': 'Experiência',
      'nav.stack': 'Stack',
      'nav.projetos': 'Projetos',
      'nav.formacao': 'Formação',
      'nav.contato': 'Contato',

      // Hero
      'hero.badge': 'Disponível para oportunidades · São Paulo · Remoto · Híbrido · Presencial',
      'hero.role': 'Especialista em ERP | Engenharia de Dados | Analytics Engineering',
      'hero.tagline': 'Profissional de Tecnologia com mais de 16 anos de experiência em desenvolvimento de sistemas, bancos de dados, SQL e processos de ERP. Atualmente aplico essa bagagem na construção de pipelines de dados, automações e soluções de Inteligência Artificial que apoiam decisões de negócio.',
      'hero.expertise.consolidated': 'Experiência consolidada',
      'hero.expertise.tech': '16+ anos em Tecnologia',
      'hero.expertise.dev': 'Desenvolvimento de Sistemas',
      'hero.expertise.db': 'Banco de Dados',
      'hero.expertise.erp': 'ERP',
      'hero.expertise.sql': 'SQL',
      'hero.expertise.specialization': 'Especialização atual',
      'hero.expertise.dataeng': 'Engenharia de Dados',
      'hero.expertise.analytics': 'Analytics Engineering',
      'hero.expertise.ai': 'Inteligência Artificial',
      'hero.cta.projects': 'Conheça meus projetos',
      'hero.cta.cv': 'Baixar Currículo PDF',
      'hero.pipeline.filename': 'etl_pipeline.py',
      'hero.pipeline.comment1': '# 1. Extrair dados do ERP e DBs',
      'hero.pipeline.comment2': '# 2. Validar e transformar',
      'hero.pipeline.comment3': '# 3. Publicar dashboards',

      // Stats
      'stats.years': 'Anos de XP',
      'stats.projects': 'Projetos',
      'stats.hours': 'Horas de Cursos',
      'stats.techs': 'Tecnologias',

      // Stack Section
      'stack.label': 'Habilidades Técnicas',
      'stack.title': 'Stack & Ferramentas',
      'stack.orchestration': 'Orquestração & ETL',
      'stack.orchestration.desc': 'Camadas Bronze / Silver / Gold',
      'stack.languages': 'Linguagens',
      'stack.sql.level': 'Avançado',
      'stack.python.level': 'Intermediário',
      'stack.ai': 'IA & Automação',
      'stack.ai.desc': 'Em estudo e desenvolvimento',
      'stack.databases': 'Bancos de Dados',
      'stack.cloud': 'Cloud & Infra',
      'stack.erp': 'ERP & Negócios',
      'stack.viz': 'Visualização',

      // About
      'about.label': 'Resumo Profissional',
      'about.title': 'Sobre Mim',
      'about.p1': 'Com mais de <strong class="text-[var(--text-primary)]">16 anos de experiência em Tecnologia da Informação</strong>, construí minha carreira no ecossistema de sistemas ERP, atuando no desenvolvimento de soluções, modelagem de bancos de dados, SQL, integrações, automação de processos e implementação de regras de negócio. Essa vivência me proporcionou uma visão ampla dos processos empresariais e da importância dos dados para apoiar decisões estratégicas.',
      'about.p2': 'Hoje direciono essa bagagem para <strong class="text-[var(--accent-secondary)]">Engenharia de Dados e Analytics Engineering</strong>, desenvolvendo pipelines ETL/ELT, automações e soluções com <strong class="text-[var(--text-primary)]">Python, PostgreSQL, Apache Airflow, dbt e Inteligência Artificial</strong>. Meu objetivo é transformar dados brutos em informações confiáveis, automatizar processos e construir soluções escaláveis que gerem valor para o negócio.',
      'about.chip.sql': 'SQL Avançado',
      'about.chip.erp': 'ERP & NF-e',
      'about.chip.etl': 'ETL/ELT',
      'about.chip.medallion': 'Medallion Architecture',
      'about.chip.ai': 'IA & Agentes',

      // Experience
      'exp.label': 'Trajetória',
      'exp.title': 'Experiência Profissional',
      'exp.role': 'Analista de Desenvolvimento | Especialista ERP',
      'exp.company': 'CSTecnologia',
      'exp.date1': '2010 — Atual',
      'exp.item1': 'Desenvolvimento, evolução e sustentação de sistemas ERP, atuando em processos críticos de negócio como faturamento (NF-e), controle de estoque, financeiro e gestão administrativa.',
      'exp.item2': 'Modelagem, administração e otimização de bancos de dados PostgreSQL, realizando modelagem relacional, indexação, tuning de consultas SQL e melhorias de performance em ambientes de produção.',
      'exp.item3': 'Desenvolvimento de consultas SQL para extração, consolidação e análise de dados, apoiando relatórios gerenciais, indicadores de desempenho e tomada de decisão.',
      'exp.item4': 'Implementação de integrações entre sistemas e automação de processos, garantindo maior confiabilidade, consistência e disponibilidade das informações.',
      'exp.item5': 'Administração de servidores Linux e Windows, incluindo gerenciamento de Apache Tomcat, monitoramento de ambientes e suporte à infraestrutura on-premise.',
      'exp.item6': 'Levantamento de requisitos, documentação técnica, treinamento de usuários e suporte técnico-funcional, atuando como elo entre as áreas de negócio e tecnologia.',

      // Projects
      'projects.label': 'Portfólio',
      'projects.title': 'Projetos em Destaque',
      'projects.status.concluded': 'Concluído',
      'projects.role.dataeng': 'Engenheiro de Dados',
      'projects.role.dev': 'Desenvolvedor de Dados',
      'projects.btn.details': 'Ver detalhes',

      // Project 1
      'p1.title': 'Pipeline Concessionária',
      'p1.desc': 'Pipeline ETL completo com extração do PostgreSQL, transformação em 3 camadas com dbt e dashboards no Looker Studio.',
      'p1.impact': 'Pipeline incremental desenvolvido para <strong class="text-[var(--text-primary)]">reduzir o tempo</strong> de geração dos relatórios',

      // Project 2
      'p2.title': 'Data Lake Meteorologia',
      'p2.desc': 'Pipeline automatizado que consome API pública de previsão do tempo, armazena em Data Lake particionado e orquestra via Airflow semanalmente.',
      'p2.impact': 'Coleta <strong class="text-[var(--text-primary)]">100% automatizada</strong> — zero intervenção manual',

      // Project 3
      'p3.title': 'ETL Tickers Financeiros',
      'p3.desc': 'Pipeline ETL que coleta dados históricos de ações de bancos brasileiros via yfinance, armazena em PostgreSQL e transforma com dbt.',
      'p3.impact': 'Dados de <strong class="text-[var(--text-primary)]">bancos brasileiros</strong> estruturados para análises financeiras',

      // Project 4
      'p4.title': 'FIFA 23 Dataset',
      'p4.desc': 'Aplicação Streamlit interativa para explorar o dataset FIFA 23 com seleção de times, jogadores e visualização de estatísticas.',
      'p4.impact': 'Exploração de dados de <strong class="text-[var(--text-primary)]">+17k jogadores</strong> com filtros interativos',

      // Education
      'edu.label': 'Qualificação',
      'edu.title': 'Formação & Certificações',
      'edu.bsc': 'Bacharelado em Ciência da Computação',
      'edu.uni': 'Universidade de Guarulhos',
      'edu.date2': '2007 — 2010',
      'edu.ai': 'Engenharia de Agentes de IA',
      'edu.ai.desc': 'LLMs e Sistemas Autônomos',
      'edu.ai.badge': 'Em andamento',
      'edu.courses': 'Trilhas Concluídas • Alura',
      'edu.immersions': 'Imersões Concluídas',
      'edu.total': 'Total de horas estudadas:',
      'edu.total.desc': 'de cursos, trilhas e imersões concluídas',
      'edu.period': 'Período: 25/03/2024 a 28/06/2026',

      // Contact
      'contact.title': 'Vamos conversar',
      'contact.desc': 'Disponível para oportunidades em Engenharia de Dados, Analytics Engineering e Inteligência Artificial.',
      'contact.btn': 'Entrar em contato',
      'contact.cv': 'Baixar currículo em PDF',

      // Footer
      'footer.text': '© 2026 Anselmo Xavier de Oliveira · Especialista em ERP · Engenharia de Dados · Analytics Engineering',

      // WhatsApp
      'whatsapp.tooltip': 'Fale comigo',

      // Project detail pages - shared
      'project.back': 'Voltar',
      'project.view.github': 'Ver no GitHub',
      'project.view.projects': 'Ver Outros Projetos',
      'project.desc.title': 'Descrição do Projeto',
      'project.arch.title': 'Arquitetura',
      'project.stack.title': 'Stack Utilizada',
      'project.code.title': 'Exemplo de Código',
      'project.challenges.title': 'Desafios e Soluções',
      'project.results.title': 'Resultados',
      'project.learnings.title': 'Aprendizados',
      'project.footer': 'Projeto por',
    },

    // ==========================================
    // EN
    // ==========================================
    en: {
      'page.title': 'Anselmo Xavier | ERP Specialist & Data Engineering',
      'meta.desc': "Anselmo Xavier's portfolio — Technology professional with 16+ years in ERP, SQL and databases, currently specialized in Data Engineering, Analytics Engineering, automation and AI.",
      'meta.keywords': 'ERP Specialist, Data Engineering, Analytics Engineering, SQL, PostgreSQL, Apache Airflow, dbt, Python, ETL, data modeling, n8n, LangChain, AI, automation, data pipeline',
      'og.title': 'Anselmo Xavier | ERP Specialist & Data Engineering',
      'og.desc': '16+ years in tech. ERP, SQL, databases and modern data pipelines with Airflow, dbt, Python and applied AI.',
      'twitter.title': 'Anselmo Xavier | ERP Specialist & Data Engineering',

      'nav.sobre': 'About',
      'nav.experiencia': 'Experience',
      'nav.stack': 'Stack',
      'nav.projetos': 'Projects',
      'nav.formacao': 'Education',
      'nav.contato': 'Contact',

      'hero.badge': 'Open to opportunities · São Paulo · Remote · Hybrid · On-site',
      'hero.role': 'ERP Specialist | Data Engineering | Analytics Engineering',
      'hero.tagline': 'Technology professional with over 16 years of experience in systems development, databases, SQL and ERP processes. Currently applying this background to build data pipelines, automations and Artificial Intelligence solutions that support business decisions.',
      'hero.expertise.consolidated': 'Solid experience',
      'hero.expertise.tech': '16+ years in Technology',
      'hero.expertise.dev': 'Systems Development',
      'hero.expertise.db': 'Databases',
      'hero.expertise.erp': 'ERP',
      'hero.expertise.sql': 'SQL',
      'hero.expertise.specialization': 'Current focus',
      'hero.expertise.dataeng': 'Data Engineering',
      'hero.expertise.analytics': 'Analytics Engineering',
      'hero.expertise.ai': 'Artificial Intelligence',
      'hero.cta.projects': 'View my projects',
      'hero.cta.cv': 'Download Resume PDF',
      'hero.pipeline.filename': 'etl_pipeline.py',
      'hero.pipeline.comment1': '# 1. Extract data from ERP and DBs',
      'hero.pipeline.comment2': '# 2. Validate and transform',
      'hero.pipeline.comment3': '# 3. Publish dashboards',

      'stats.years': 'Years of XP',
      'stats.projects': 'Projects',
      'stats.hours': 'Course Hours',
      'stats.techs': 'Technologies',

      'stack.label': 'Technical Skills',
      'stack.title': 'Stack & Tools',
      'stack.orchestration': 'Orchestration & ETL',
      'stack.orchestration.desc': 'Bronze / Silver / Gold Layers',
      'stack.languages': 'Languages',
      'stack.sql.level': 'Advanced',
      'stack.python.level': 'Intermediate',
      'stack.ai': 'AI & Automation',
      'stack.ai.desc': 'Studying and developing',
      'stack.databases': 'Databases',
      'stack.cloud': 'Cloud & Infra',
      'stack.erp': 'ERP & Business',
      'stack.viz': 'Visualization',

      'about.label': 'Professional Summary',
      'about.title': 'About Me',
      'about.p1': 'With over <strong class="text-[var(--text-primary)]">16 years of experience in Information Technology</strong>, I built my career in the ERP systems ecosystem, developing solutions, database modeling, SQL, integrations, process automation and business rule implementation. This experience gave me a broad view of business processes and the importance of data to support strategic decisions.',
      'about.p2': 'Today I channel this background into <strong class="text-[var(--accent-secondary)]">Data Engineering and Analytics Engineering</strong>, developing ETL/ELT pipelines, automations and solutions with <strong class="text-[var(--text-primary)]">Python, PostgreSQL, Apache Airflow, dbt and Artificial Intelligence</strong>. My goal is to transform raw data into reliable information, automate processes and build scalable solutions that generate business value.',
      'about.chip.sql': 'Advanced SQL',
      'about.chip.erp': 'ERP & Invoicing',
      'about.chip.etl': 'ETL/ELT',
      'about.chip.medallion': 'Medallion Architecture',
      'about.chip.ai': 'AI & Agents',

      'exp.label': 'Career Path',
      'exp.title': 'Professional Experience',
      'exp.role': 'Development Analyst | ERP Specialist',
      'exp.company': 'CSTecnologia',
      'exp.date1': '2010 — Present',
      'exp.item1': 'Development, evolution and maintenance of ERP systems, working on critical business processes such as invoicing, inventory control, financial and administrative management.',
      'exp.item2': 'PostgreSQL database modeling, administration and optimization, performing relational modeling, indexing, SQL query tuning and performance improvements in production environments.',
      'exp.item3': 'Development of SQL queries for data extraction, consolidation and analysis, supporting management reports, performance indicators and decision-making.',
      'exp.item4': 'Implementation of system integrations and process automation, ensuring greater reliability, consistency and availability of information.',
      'exp.item5': 'Linux and Windows server administration, including Apache Tomcat management, environment monitoring and on-premise infrastructure support.',
      'exp.item6': 'Requirements gathering, technical documentation, user training and technical-functional support, acting as a bridge between business and technology areas.',

      'projects.label': 'Portfolio',
      'projects.title': 'Featured Projects',
      'projects.status.concluded': 'Completed',
      'projects.role.dataeng': 'Data Engineer',
      'projects.role.dev': 'Data Developer',
      'projects.btn.details': 'View details',

      'p1.title': 'Dealership Pipeline',
      'p1.desc': 'Complete ETL pipeline with PostgreSQL extraction, 3-layer transformation with dbt and Looker Studio dashboards.',
      'p1.impact': 'Incremental pipeline developed to <strong class="text-[var(--text-primary)]">reduce report generation time</strong>',

      'p2.title': 'Weather Data Lake',
      'p2.desc': 'Automated pipeline consuming a public weather forecast API, storing in a partitioned Data Lake and orchestrating via Airflow weekly.',
      'p2.impact': '<strong class="text-[var(--text-primary)]">100% automated</strong> collection — zero manual intervention',

      'p3.title': 'Financial Tickers ETL',
      'p3.desc': 'ETL pipeline collecting historical stock data from Brazilian banks via yfinance, storing in PostgreSQL and transforming with dbt.',
      'p3.impact': 'Data from <strong class="text-[var(--text-primary)]">Brazilian banks</strong> structured for financial analysis',

      'p4.title': 'FIFA 23 Dataset',
      'p4.desc': 'Interactive Streamlit app to explore the FIFA 23 dataset with team selection, player stats and data visualization.',
      'p4.impact': 'Data exploration of <strong class="text-[var(--text-primary)]">+17k players</strong> with interactive filters',

      'edu.label': 'Qualifications',
      'edu.title': 'Education & Certifications',
      'edu.bsc': "Bachelor's in Computer Science",
      'edu.uni': 'University of Guarulhos',
      'edu.date2': '2007 — 2010',
      'edu.ai': 'AI Agent Engineering',
      'edu.ai.desc': 'LLMs and Autonomous Systems',
      'edu.ai.badge': 'In progress',
      'edu.courses': 'Completed Learning Paths • Alura',
      'edu.immersions': 'Completed Immersions',
      'edu.total': 'Total study hours:',
      'edu.total.desc': 'of courses, paths and immersions completed',
      'edu.period': 'Period: 03/25/2024 to 06/28/2026',

      'contact.title': "Let's talk",
      'contact.desc': 'Open to opportunities in Data Engineering, Analytics Engineering and Artificial Intelligence.',
      'contact.btn': 'Get in touch',
      'contact.cv': 'Download resume PDF',

      'footer.text': '© 2026 Anselmo Xavier de Oliveira · ERP Specialist · Data Engineering · Analytics Engineering',

      'whatsapp.tooltip': 'Chat with me',

      'project.back': 'Back',
      'project.view.github': 'View on GitHub',
      'project.view.projects': 'View Other Projects',
      'project.desc.title': 'Project Description',
      'project.arch.title': 'Architecture',
      'project.stack.title': 'Tech Stack',
      'project.code.title': 'Code Sample',
      'project.challenges.title': 'Challenges & Solutions',
      'project.results.title': 'Results',
      'project.learnings.title': 'Learnings',
      'project.footer': 'Project by',
    },

    // ==========================================
    // ES
    // ==========================================
    es: {
      'page.title': 'Anselmo Xavier | Especialista en ERP e Ingeniería de Datos',
      'meta.desc': 'Portafolio de Anselmo Xavier, profesional de Tecnología con más de 16 años de experiencia en ERP, SQL y bases de datos, actualmente especializado en Ingeniería de Datos, Analytics Engineering, automatización e Inteligencia Artificial.',
      'meta.keywords': 'Especialista ERP, Ingeniería de Datos, Analytics Engineering, SQL, PostgreSQL, Apache Airflow, dbt, Python, ETL, modelado de datos, n8n, LangChain, IA, automatización, pipeline de datos',
      'og.title': 'Anselmo Xavier | Especialista en ERP e Ingeniería de Datos',
      'og.desc': 'Más de 16 años en tecnología. ERP, SQL, bases de datos y pipelines de datos modernos con Airflow, dbt, Python e IA aplicada.',
      'twitter.title': 'Anselmo Xavier | Especialista en ERP e Ingeniería de Datos',

      'nav.sobre': 'Sobre mí',
      'nav.experiencia': 'Experiencia',
      'nav.stack': 'Stack',
      'nav.projetos': 'Proyectos',
      'nav.formacao': 'Formación',
      'nav.contato': 'Contacto',

      'hero.badge': 'Disponible para oportunidades · São Paulo · Remoto · Híbrido · Presencial',
      'hero.role': 'Especialista en ERP | Ingeniería de Datos | Analytics Engineering',
      'hero.tagline': 'Profesional de Tecnología con más de 16 años de experiencia en desarrollo de sistemas, bases de datos, SQL y procesos de ERP. Actualmente aplico esta experiencia en la construcción de pipelines de datos, automatizaciones y soluciones de Inteligencia Artificial que apoyan decisiones de negocio.',
      'hero.expertise.consolidated': 'Experiencia consolidada',
      'hero.expertise.tech': '16+ años en Tecnología',
      'hero.expertise.dev': 'Desarrollo de Sistemas',
      'hero.expertise.db': 'Bases de Datos',
      'hero.expertise.erp': 'ERP',
      'hero.expertise.sql': 'SQL',
      'hero.expertise.specialization': 'Especialización actual',
      'hero.expertise.dataeng': 'Ingeniería de Datos',
      'hero.expertise.analytics': 'Analytics Engineering',
      'hero.expertise.ai': 'Inteligencia Artificial',
      'hero.cta.projects': 'Conoce mis proyectos',
      'hero.cta.cv': 'Descargar Currículo PDF',
      'hero.pipeline.filename': 'etl_pipeline.py',
      'hero.pipeline.comment1': '# 1. Extraer datos del ERP y BD',
      'hero.pipeline.comment2': '# 2. Validar y transformar',
      'hero.pipeline.comment3': '# 3. Publicar dashboards',

      'stats.years': 'Años de XP',
      'stats.projects': 'Proyectos',
      'stats.hours': 'Horas de Cursos',
      'stats.techs': 'Tecnologías',

      'stack.label': 'Habilidades Técnicas',
      'stack.title': 'Stack & Herramientas',
      'stack.orchestration': 'Orquestación & ETL',
      'stack.orchestration.desc': 'Capas Bronze / Silver / Gold',
      'stack.languages': 'Lenguajes',
      'stack.sql.level': 'Avanzado',
      'stack.python.level': 'Intermedio',
      'stack.ai': 'IA & Automatización',
      'stack.ai.desc': 'En estudio y desarrollo',
      'stack.databases': 'Bases de Datos',
      'stack.cloud': 'Cloud & Infra',
      'stack.erp': 'ERP & Negocios',
      'stack.viz': 'Visualización',

      'about.label': 'Resumen Profesional',
      'about.title': 'Sobre Mí',
      'about.p1': 'Con más de <strong class="text-[var(--text-primary)]">16 años de experiencia en Tecnología de la Información</strong>, construí mi carrera en el ecosistema de sistemas ERP, actuando en el desarrollo de soluciones, modelado de bases de datos, SQL, integraciones, automatización de procesos e implementación de reglas de negocio. Esta experiencia me proporcionó una visión amplia de los procesos empresariales y de la importancia de los datos para apoyar decisiones estratégicas.',
      'about.p2': 'Hoy dirijo esta experiencia hacia <strong class="text-[var(--accent-secondary)]">Ingeniería de Datos y Analytics Engineering</strong>, desarrollando pipelines ETL/ELT, automatizaciones y soluciones con <strong class="text-[var(--text-primary)]">Python, PostgreSQL, Apache Airflow, dbt e Inteligencia Artificial</strong>. Mi objetivo es transformar datos brutos en información confiable, automatizar procesos y construir soluciones escalables que generen valor para el negocio.',
      'about.chip.sql': 'SQL Avanzado',
      'about.chip.erp': 'ERP & Facturación',
      'about.chip.etl': 'ETL/ELT',
      'about.chip.medallion': 'Arquitectura Medallion',
      'about.chip.ai': 'IA & Agentes',

      'exp.label': 'Trayectoria',
      'exp.title': 'Experiencia Profesional',
      'exp.role': 'Analista de Desarrollo | Especialista ERP',
      'exp.company': 'CSTecnologia',
      'exp.date1': '2010 — Actual',
      'exp.item1': 'Desarrollo, evolución y mantenimiento de sistemas ERP, actuando en procesos críticos de negocio como facturación, control de inventario, financiero y gestión administrativa.',
      'exp.item2': 'Modelado, administración y optimización de bases de datos PostgreSQL, realizando modelado relacional, indexación, tuning de consultas SQL y mejoras de rendimiento en entornos de producción.',
      'exp.item3': 'Desarrollo de consultas SQL para extracción, consolidación y análisis de datos, apoyando informes gerenciales, indicadores de desempeño y toma de decisiones.',
      'exp.item4': 'Implementación de integraciones entre sistemas y automatización de procesos, garantizando mayor confiabilidad, consistencia y disponibilidad de la información.',
      'exp.item5': 'Administración de servidores Linux y Windows, incluyendo gestión de Apache Tomcat, monitoreo de entornos y soporte a infraestructura on-premise.',
      'exp.item6': 'Levantamiento de requisitos, documentación técnica, capacitación de usuarios y soporte técnico-funcional, actuando como puente entre las áreas de negocio y tecnología.',

      'projects.label': 'Portafolio',
      'projects.title': 'Proyectos Destacados',
      'projects.status.concluded': 'Completado',
      'projects.role.dataeng': 'Ingeniero de Datos',
      'projects.role.dev': 'Desarrollador de Datos',
      'projects.btn.details': 'Ver detalles',

      'p1.title': 'Pipeline Concesionaria',
      'p1.desc': 'Pipeline ETL completo con extracción de PostgreSQL, transformación en 3 capas con dbt y dashboards en Looker Studio.',
      'p1.impact': 'Pipeline incremental desarrollado para <strong class="text-[var(--text-primary)]">reducir el tiempo</strong> de generación de informes',

      'p2.title': 'Data Lake Meteorología',
      'p2.desc': 'Pipeline automatizado que consume API pública de pronóstico del tiempo, almacena en Data Lake particionado y orquesta vía Airflow semanalmente.',
      'p2.impact': 'Recolección <strong class="text-[var(--text-primary)]">100% automatizada</strong> — cero intervención manual',

      'p3.title': 'ETL Tickers Financieros',
      'p3.desc': 'Pipeline ETL que recolecta datos históricos de acciones de bancos brasileños vía yfinance, almacena en PostgreSQL y transforma con dbt.',
      'p3.impact': 'Datos de <strong class="text-[var(--text-primary)]">bancos brasileños</strong> estructurados para análisis financieros',

      'p4.title': 'FIFA 23 Dataset',
      'p4.desc': 'Aplicación Streamlit interactiva para explorar el dataset FIFA 23 con selección de equipos, jugadores y visualización de estadísticas.',
      'p4.impact': 'Exploración de datos de <strong class="text-[var(--text-primary)]">+17k jugadores</strong> con filtros interactivos',

      'edu.label': 'Calificaciones',
      'edu.title': 'Formación & Certificaciones',
      'edu.bsc': 'Licenciatura en Ciencias de la Computación',
      'edu.uni': 'Universidad de Guarulhos',
      'edu.date2': '2007 — 2010',
      'edu.ai': 'Ingeniería de Agentes de IA',
      'edu.ai.desc': 'LLMs y Sistemas Autónomos',
      'edu.ai.badge': 'En curso',
      'edu.courses': 'Rutas Completadas • Alura',
      'edu.immersions': 'Inmersiones Completadas',
      'edu.total': 'Total de horas estudiadas:',
      'edu.total.desc': 'de cursos, rutas e inmersiones completadas',
      'edu.period': 'Período: 25/03/2024 a 28/06/2026',

      'contact.title': 'Hablemos',
      'contact.desc': 'Disponible para oportunidades en Ingeniería de Datos, Analytics Engineering e Inteligencia Artificial.',
      'contact.btn': 'Ponte en contacto',
      'contact.cv': 'Descargar currículo en PDF',

      'footer.text': '© 2026 Anselmo Xavier de Oliveira · Especialista en ERP · Ingeniería de Datos · Analytics Engineering',

      'whatsapp.tooltip': 'Háblame',

      'project.back': 'Volver',
      'project.view.github': 'Ver en GitHub',
      'project.view.projects': 'Ver Otros Proyectos',
      'project.desc.title': 'Descripción del Proyecto',
      'project.arch.title': 'Arquitectura',
      'project.stack.title': 'Stack Utilizado',
      'project.code.title': 'Ejemplo de Código',
      'project.challenges.title': 'Desafíos y Soluciones',
      'project.results.title': 'Resultados',
      'project.learnings.title': 'Aprendizajes',
      'project.footer': 'Proyecto por',
    },
  },

  // ==========================================
  // METHODS
  // ==========================================

  init() {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved && this.supportedLangs.includes(saved)) {
      this.currentLang = saved;
    } else {
      this.currentLang = 'pt';
    }
    this.applyLanguage(this.currentLang);
    this.setupSwitcher();
    this.updateActiveFlag();
  },

  switchTo(lang) {
    if (!this.supportedLangs.includes(lang)) return;
    this.currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    this.applyLanguage(lang);
    this.updateActiveFlag();
  },

  applyLanguage(lang) {
    const dict = this.translations[lang];
    if (!dict) return;

    // 1. Page title
    if (dict['page.title']) {
      document.title = dict['page.title'];
    }

    // 2. Meta tags
    const metaMap = {
      'meta.desc': 'name="description"',
      'meta.keywords': 'name="keywords"',
      'og.desc': 'property="og:description"',
      'og.title': 'property="og:title"',
      'twitter.title': 'name="twitter:title"',
    };
    for (const [key, selector] of Object.entries(metaMap)) {
      if (dict[key]) {
        const meta = document.querySelector(`meta[${selector}]`);
        if (meta) meta.setAttribute('content', dict[key]);
      }
    }

    // 3. Elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // 4. Elements with data-i18n-html (for complex HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // 5. Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // 6. Aria labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key]) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    // 7. Title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key]) {
        el.setAttribute('title', dict[key]);
      }
    });

    // 8. HTML lang attribute
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-br' : lang);
  },

  setupSwitcher() {
    document.querySelectorAll('.lang-flag').forEach(flag => {
      flag.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = flag.getAttribute('data-lang');
        this.switchTo(lang);
      });
    });
  },

  updateActiveFlag() {
    document.querySelectorAll('.lang-flag').forEach(flag => {
      const lang = flag.getAttribute('data-lang');
      flag.classList.toggle('lang-active', lang === this.currentLang);
    });
  },

  t(key) {
    const dict = this.translations[this.currentLang];
    return dict && dict[key] ? dict[key] : key;
  },
};

document.addEventListener('DOMContentLoaded', () => {
  I18N.init();
});

}
