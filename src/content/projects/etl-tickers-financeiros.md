---
order: 3
title:
  pt: ETL Tickers Financeiros
  en: Financial Tickers ETL
  es: ETL Tickers Financieros
summary:
  pt: Pipeline ETL que coleta dados históricos de ações de bancos brasileiros via yfinance, armazena em PostgreSQL e transforma com dbt.
  en: ETL pipeline collecting historical stock data of Brazilian banks via yfinance, storing in PostgreSQL and transforming with dbt.
  es: Pipeline ETL que recolecta datos históricos de acciones de bancos brasileños vía yfinance, almacena en PostgreSQL y transforma con dbt.
impact:
  pt: Dados de bancos brasileiros estruturados para análises financeiras.
  en: Brazilian bank data structured for financial analysis.
  es: Datos de bancos brasileños estructurados para análisis financieros.
flow: [yfinance, Pandas, PostgreSQL, dbt]
stack: [Python, yfinance, PostgreSQL, dbt]
github: https://github.com/anselmoaxo/ETL-TickersSQL-Python-DBT
metrics:
  - { value: "4", label: "Tickers monitorados" }
  - { value: "2 anos", label: "Histórico coletado" }
  - { value: "dbt", label: "Transformações SQL" }
---

## Descrição

Pipeline ETL para coleta de dados históricos de ações de **bancos brasileiros** pela API **yfinance**, com carga em **PostgreSQL** e transformações com **dbt**.

O projeto tem três partes: coleta dos preços de fechamento (ITUB, BBDC4, BBAS3, SANB11), processamento e carga no banco relacional, e a camada de transformação com dbt que prepara os dados para análises e visualizações.

## Arquitetura

```text
yfinance API             ITUB · BBDC4 · BBAS3 · SANB11
        │  Python + yfinance
        ▼
Processamento            Pandas · limpeza · SQLAlchemy
        │  INSERT / UPSERT
        ▼
PostgreSQL               raw.tickers_historico
        │  dbt run
        ▼
dbt                      staging · analytics · testes e docs
        │
        ▼
Análises e BI
```

## Stack

- **Python:** yfinance, Pandas e SQLAlchemy.
- **Banco:** PostgreSQL com schemas separados para raw e analytics.
- **Transformação:** dbt com modelos staging e analytics, testes e documentação.
- **Tickers:** ITUB (Itaú), BBDC4 (Bradesco), BBAS3 (Banco do Brasil), SANB11 (Santander).

## Código

Coleta com yfinance:

```python
import os
import yfinance as yf
from sqlalchemy import create_engine

TICKERS = ["ITUB", "BBDC4", "BBAS3", "SANB11"]
tickers_sa = [f"{t}.SA" for t in TICKERS]  # sufixo da B3

df = yf.download(tickers_sa, period="2y", interval="1d")

df_clean = df.stack(level=0).reset_index()
df_clean.columns = ["data", "ticker", "open", "high", "low", "close", "adj_close", "volume"]

engine = create_engine(os.getenv("DATABASE_URL"))
df_clean.to_sql("raw_tickers", engine, if_exists="append", index=False)
```

Modelo analytics com window functions:

```sql
-- models/analytics/metricas_diarias.sql
{{ config(materialized='table') }}

SELECT
    data,
    ticker,
    preco_fechamento,
    LAG(preco_fechamento) OVER w AS fechamento_anterior,
    ROUND(
        (preco_fechamento - LAG(preco_fechamento) OVER w)
        / NULLIF(LAG(preco_fechamento) OVER w, 0) * 100, 2
    ) AS variacao_pct,
    volume_negociado
FROM {{ ref('stg_tickers') }}
WINDOW w AS (PARTITION BY ticker ORDER BY data)
ORDER BY data DESC, ticker
```

## Desafios e soluções

**Sufixo .SA da B3.** Os tickers brasileiros exigem o sufixo `.SA` no yfinance. Uma função de mapeamento adiciona o sufixo e mantém o ticker original na tabela.

**Volume histórico.** Dois anos de dados diários para quatro tickers. Upsert com controle de data evita duplicação e permite execuções incrementais.

**Consistência.** Feriados e fins de semana geravam valores zerados ou nulos. O modelo staging do dbt filtra `close = 0` e datas inválidas.

## Entregáveis

- Pipeline Python para coleta automatizada de dados da B3.
- Modelo relacional em PostgreSQL com tabelas raw e analytics.
- Transformações dbt com métricas diárias e variação percentual.
- Base pronta para dashboards financeiros.

## Aprendizados

- Consumo de APIs financeiras e tratamento de dados da B3.
- Carga em PostgreSQL com Python e SQLAlchemy.
- Camadas staging e analytics com dbt.
- Window functions para métricas de variação.
