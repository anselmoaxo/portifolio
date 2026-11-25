---
order: 1
title:
  pt: Pipeline Concessionária
  en: Dealership Pipeline
  es: Pipeline Concesionaria
summary:
  pt: Pipeline ETL completo com extração do PostgreSQL, transformação em 3 camadas com dbt e dashboards no Looker Studio.
  en: Complete ETL pipeline with PostgreSQL extraction, 3-layer transformation with dbt and Looker Studio dashboards.
  es: Pipeline ETL completo con extracción de PostgreSQL, transformación en 3 capas con dbt y dashboards en Looker Studio.
impact:
  pt: Extração incremental que reduziu o tempo de geração dos relatórios.
  en: Incremental extraction that cut report generation time.
  es: Extracción incremental que redujo el tiempo de generación de informes.
flow: [PostgreSQL, Airflow, dbt, Looker Studio]
stack: [Airflow, dbt, PostgreSQL, Looker Studio]
github: https://github.com/anselmoaxo/etl_vendas
metrics:
  - { value: "~15 min", label: "Execução diária" }
  - { value: "500k+", label: "Registros por dia" }
  - { value: "99,5%", label: "Taxa de sucesso" }
---

## Descrição

Pipeline completo de ETL para análise de dados de uma **concessionária de veículos**. O projeto extrai dados operacionais de vendas, clientes, produtos e categorias de um banco de produção **PostgreSQL**, realiza transformações com **dbt** seguindo arquitetura de camadas e disponibiliza os dados em um Data Warehouse para visualização no **Looker Studio**.

Toda a orquestração é feita via **Apache Airflow**, com agendamento automático, monitoramento e retry de falhas.

## Arquitetura

```text
PostgreSQL (produção)        vendas · clientes · produtos
        │  extract
        ▼
Apache Airflow (DAG)         extração · validação · trigger dbt
        │  load
        ▼
PostgreSQL (Data Warehouse)  staging
        │  transform
        ▼
dbt                          staging → dimensions → analytics
        │
        ▼
Looker Studio                vendas · clientes · produtos
```

1. **Extração:** o Airflow conecta ao banco de produção e extrai os dados via SQL.
2. **Carga:** os dados brutos vão para a camada staging do DW.
3. **Transformação:** o dbt aplica 3 camadas (staging → dimensions → analytics).
4. **Visualização:** o Looker Studio consome as tabelas finais.

## Stack

- **Orquestração:** Apache Airflow 2.5+, DAG diária com retry automático.
- **Transformação:** dbt com camadas staging, dimensions e analytics, e testes de qualidade.
- **Armazenamento:** PostgreSQL como origem e DW, com schemas separados por camada.
- **Visualização:** Looker Studio com conexão direta ao PostgreSQL e refresh automático.

## Código

DAG do Airflow:

```python
from airflow import DAG
from airflow.providers.postgres.operators.postgres import PostgresOperator
from airflow.operators.bash import BashOperator
from datetime import datetime, timedelta

default_args = {
    "owner": "data_team",
    "retries": 3,
    "retry_delay": timedelta(minutes=5),
}

with DAG(
    "concessionaria_etl",
    default_args=default_args,
    schedule_interval="0 2 * * *",
    start_date=datetime(2024, 1, 1),
    catchup=False,
) as dag:
    extract = PostgresOperator(task_id="extract_vendas", sql="sql/extract_vendas.sql")
    run_dbt = BashOperator(task_id="run_dbt", bash_command="dbt run --models analytics")

    extract >> run_dbt
```

Modelo dbt `fact_vendas.sql`:

```sql
-- models/analytics/fact_vendas.sql
{{ config(materialized='table', schema='analytics') }}

WITH vendas_enriched AS (
    SELECT
        v.venda_id, v.data_venda, v.valor_total,
        c.nome_cliente, c.cidade,
        p.modelo, p.categoria
    FROM {{ ref('stg_vendas') }} v
    LEFT JOIN {{ ref('dim_clientes') }} c ON v.cliente_id = c.cliente_id
    LEFT JOIN {{ ref('dim_produtos') }} p ON v.produto_id = p.produto_id
)
SELECT * FROM vendas_enriched
```

## Desafios e soluções

**Performance na extração.** A extração completa levava mais de 2 horas e pesava no banco de produção. A extração incremental baseada em timestamps reduziu o tempo para cerca de 15 minutos e a carga no banco em 85%.

**Qualidade de dados.** Nulos e duplicatas quebravam o pipeline. Testes dbt de unicidade, não-nulidade e integridade referencial fazem o pipeline falhar rápido, com alertas claros.

**Monitoramento.** Falhas silenciosas demoravam a ser percebidas. Callbacks do Airflow passaram a enviar alertas por e-mail com logs detalhados.

## Impacto

- Dashboards atualizados diariamente.
- Redução de 85% no tempo de geração de relatórios gerenciais.
- Visibilidade de vendas, estoque e performance.
- Base sólida para expansão futura (ML, previsões).

## Aprendizados

- Testes de qualidade desde o início do projeto.
- Extração incremental para reduzir carga na origem.
- Monitoramento proativo em pipelines de produção.
- Transformações organizadas em camadas lógicas.
