import type { Lang } from '../i18n/ui';

type L = Record<Lang, string>;

export const contact = {
  name: 'Anselmo Xavier',
  fullName: 'Anselmo Xavier de Oliveira',
  email: 'anselmo.cstecnologia@gmail.com',
  phone: '(11) 91579-6142',
  phoneE164: '+5511915796142',
  whatsapp: 'https://api.whatsapp.com/send?phone=5511915796142',
  linkedin: 'https://www.linkedin.com/in/anselmoaxo',
  github: 'https://github.com/anselmoaxo',
  repo: 'https://github.com/anselmoaxo/portifolio',
  cv: 'assets/anselmo_xavier_curriculo.pdf',
  city: 'Guarulhos',
  region: 'SP',
};

export const experience: {
  role: L;
  company: string;
  period: L;
  items: L[];
  tags: string[];
}[] = [
  {
    role: {
      pt: 'Analista de Desenvolvimento · Especialista ERP',
      en: 'Development Analyst · ERP Specialist',
      es: 'Analista de Desarrollo · Especialista ERP',
    },
    company: 'CSTecnologia',
    period: { pt: '2010 — atual', en: '2010 — present', es: '2010 — actual' },
    items: [
      {
        pt: 'Desenvolvimento, evolução e sustentação de sistemas ERP em processos críticos como faturamento (NF-e), estoque, financeiro e gestão administrativa.',
        en: 'Development, evolution and maintenance of ERP systems in critical processes such as invoicing, inventory, finance and administration.',
        es: 'Desarrollo, evolución y mantenimiento de sistemas ERP en procesos críticos como facturación, inventario, finanzas y gestión administrativa.',
      },
      {
        pt: 'Modelagem, administração e otimização de bancos PostgreSQL: modelagem relacional, indexação, tuning de consultas e melhorias de performance em produção.',
        en: 'PostgreSQL modeling, administration and optimization: relational modeling, indexing, query tuning and performance work in production.',
        es: 'Modelado, administración y optimización de PostgreSQL: modelado relacional, indexación, tuning de consultas y mejoras de rendimiento en producción.',
      },
      {
        pt: 'Consultas SQL para extração, consolidação e análise de dados, apoiando relatórios gerenciais, indicadores e tomada de decisão.',
        en: 'SQL queries for data extraction, consolidation and analysis, supporting management reports, KPIs and decision-making.',
        es: 'Consultas SQL para extracción, consolidación y análisis de datos, apoyando informes gerenciales, indicadores y toma de decisiones.',
      },
      {
        pt: 'Integrações entre sistemas e automação de processos, com mais confiabilidade e consistência das informações.',
        en: 'System integrations and process automation, improving reliability and consistency of information.',
        es: 'Integraciones entre sistemas y automatización de procesos, con mayor confiabilidad y consistencia de la información.',
      },
      {
        pt: 'Administração de servidores Linux e Windows, Apache Tomcat, monitoramento e suporte à infraestrutura on-premise.',
        en: 'Linux and Windows server administration, Apache Tomcat, monitoring and on-premise infrastructure support.',
        es: 'Administración de servidores Linux y Windows, Apache Tomcat, monitoreo y soporte de infraestructura on-premise.',
      },
      {
        pt: 'Levantamento de requisitos, documentação, treinamento de usuários e suporte técnico-funcional, fazendo a ponte entre negócio e tecnologia.',
        en: 'Requirements gathering, documentation, user training and functional support, bridging business and technology.',
        es: 'Levantamiento de requisitos, documentación, capacitación de usuarios y soporte técnico-funcional, uniendo negocio y tecnología.',
      },
    ],
    tags: ['PostgreSQL', 'SQL', 'Modelagem de dados', 'ERP', 'Linux', 'Windows Server', 'Apache Tomcat', 'Git'],
  },
];

export const stack = {
  solid: ['SQL avançado', 'PostgreSQL', 'Modelagem de dados', 'Sistemas ERP', 'Regras de negócio', 'Linux', 'Windows Server', 'Apache Tomcat'],
  practice: ['Python', 'Apache Airflow', 'dbt', 'ETL / ELT', 'Docker', 'Pandas', 'Git / GitHub', 'Looker Studio', 'Power BI', 'AWS (EC2, S3, RDS, Glue)'],
  learning: ['Inteligência Artificial', 'n8n', 'LangChain', 'Agentes autônomos', 'Databricks', 'Snowflake', 'BigQuery', 'GCP', 'Azure'],
};

export const courses = [
  { name: 'Python: Orientação a Objetos', hours: 22, topics: 'Primeira aplicação, OO aplicada e avançada, consumo de API' },
  { name: 'Django: Desenvolvimento Web em Python', hours: 36, topics: 'Templates, persistência, autenticação, CRUD e S3' },
  { name: 'AWS: Infraestrutura na Nuvem', hours: 46, topics: 'Lightsail, EC2, VPC, S3, RDS/DynamoDB, controle de custos' },
  { name: 'Engenharia de Analytics', hours: 34, topics: 'ETL com AWS Glue, Athena, pipeline automatizada, QuickSight' },
  { name: 'SQL com PostgreSQL', hours: 46, topics: 'Views, subconsultas, DML/DDL, PL/pgSQL, triggers, administração' },
  { name: 'AWS Data Lake', hours: 34, topics: 'Ingestão, AWS Glue, EMR, Athena e QuickSight' },
  { name: 'Engenharia de Dados', hours: 50, topics: 'Pipeline com Python, APIs, modelagem SQL, MongoDB, Airflow' },
];

export const immersions = [
  { name: 'Análise de Dados com Python', detail: 'Do Excel à Análise de Dados', hours: 5 },
  { name: 'Inteligência Artificial', detail: 'Imersão IA, 1ª edição', hours: 6 },
  { name: 'Inteligência Artificial', detail: 'Imersão IA, 2ª edição', hours: 6 },
  { name: 'Dados', detail: 'Imersão Dados', hours: 5 },
];
