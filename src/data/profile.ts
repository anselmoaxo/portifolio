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
      pt: 'Analista de Desenvolvimento, Especialista ERP',
      en: 'Development Analyst, ERP Specialist',
      es: 'Analista de Desarrollo, Especialista ERP',
    },
    company: 'CSTecnologia',
    period: { pt: '2010 — atual', en: '2010 — present', es: '2010 — actual' },
    items: [
      {
        pt: 'Participação na construção de um ERP próprio em plataforma low-code, junto com o proprietário da empresa, da concepção até a operação em uso hoje.',
        en: 'Helped build an in-house ERP on a low-code platform with the company owner, from concept to the operation in use today.',
        es: 'Participación en la construcción de un ERP propio en plataforma low-code, junto con el dueño de la empresa, desde la concepción hasta la operación en uso hoy.',
      },
      {
        pt: 'Customização e desenvolvimento de rotinas e relatórios em processos como faturamento (NF-e), estoque, financeiro e gestão administrativa.',
        en: 'Customization and development of routines and reports for processes such as invoicing, inventory, finance and administration.',
        es: 'Personalización y desarrollo de rutinas e informes en procesos como facturación, inventario, finanzas y gestión administrativa.',
      },
      {
        pt: 'Modelagem e administração de bancos PostgreSQL, com SQL avançado (DML/DDL), indexação e tuning de consultas em produção.',
        en: 'PostgreSQL modeling and administration, with advanced SQL (DML/DDL), indexing and query tuning in production.',
        es: 'Modelado y administración de bases PostgreSQL, con SQL avanzado (DML/DDL), indexación y tuning de consultas en producción.',
      },
      {
        pt: 'Integração entre sistemas via APIs e web services.',
        en: 'System integrations through APIs and web services.',
        es: 'Integración entre sistemas vía APIs y web services.',
      },
      {
        pt: 'Automação de processos com Python.',
        en: 'Process automation with Python.',
        es: 'Automatización de procesos con Python.',
      },
      {
        pt: 'Suporte técnico a usuários, levantamento de requisitos e treinamento, fazendo a ponte entre negócio e tecnologia.',
        en: 'User support, requirements gathering and training, bridging business and technology.',
        es: 'Soporte técnico a usuarios, levantamiento de requisitos y capacitación, uniendo negocio y tecnología.',
      },
    ],
    tags: ['ERP low-code', 'PostgreSQL', 'SQL (DML/DDL)', 'APIs e web services', 'Python', 'Linux', 'Windows Server', 'Apache Tomcat'],
  },
];

export const stack = {
  solid: ['Sistemas ERP', 'Plataforma low-code', 'PostgreSQL', 'SQL avançado (DML/DDL)', 'Modelagem de dados', 'Rotinas e relatórios', 'APIs e web services', 'Linux', 'Windows Server', 'Apache Tomcat'],
  practice: ['Python', 'Apache Airflow', 'dbt', 'AWS', 'PySpark', 'ETL / ELT', 'Docker', 'Pandas', 'Git / GitHub', 'Looker Studio', 'Power BI'],
  learning: ['Inteligência Artificial', 'n8n', 'LangChain', 'Databricks', 'Snowflake', 'BigQuery', 'GCP', 'Azure'],
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
