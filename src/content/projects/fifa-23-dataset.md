---
order: 4
title:
  pt: FIFA 23 Dataset
  en: FIFA 23 Dataset
  es: FIFA 23 Dataset
summary:
  pt: Aplicação Streamlit para explorar o dataset FIFA 23, com seleção de times e jogadores e visualização de estatísticas.
  en: Streamlit app to explore the FIFA 23 dataset, with team and player selection and stats visualization.
  es: Aplicación Streamlit para explorar el dataset FIFA 23, con selección de equipos y jugadores y visualización de estadísticas.
impact:
  pt: Exploração de mais de 17 mil jogadores com filtros interativos.
  en: Exploration of 17k+ players with interactive filters.
  es: Exploración de más de 17 mil jugadores con filtros interactivos.
flow: [Kaggle CSV, Pandas, Streamlit]
stack: [Python, Pandas, Streamlit]
github: https://github.com/anselmoaxo/dataset-fifa23
metrics:
  - { value: "17k+", label: "Jogadores no dataset" }
  - { value: "700+", label: "Times disponíveis" }
  - { value: "MIT", label: "Licença open source" }
---

## Descrição

Aplicação interativa feita com **Streamlit** para explorar o dataset **FIFA 23**, com estatísticas de **mais de 17 mil jogadores**. O usuário escolhe um time e um jogador para ver métricas como overall, pace, shooting, passing e valor de mercado.

Os dados vêm do Kaggle (FIFA Player Stats Database). O projeto mostra manipulação de dados com Pandas, construção de dashboards interativos e publicação de apps com Streamlit.

## Arquitetura

```text
Kaggle (CSV)             FIFA Player Stats Database
        │  pandas.read_csv()
        ▼
Processamento            limpeza · filtros · seleção
        │
        ▼
Streamlit App            time → jogador → cards de métricas
```

## Funcionalidades

- **Seleção de time:** dropdown com todos os clubes do dataset.
- **Seleção de jogador:** filtro reativo que mostra só os jogadores do clube escolhido.
- **Cards de estatísticas:** overall, pace, shooting, passing, dribbling, defending e valor de mercado.
- **Interface responsiva:** funciona em qualquer dispositivo.

## Código

```python
import streamlit as st
import pandas as pd

st.set_page_config(page_title="FIFA 23 Dataset", page_icon="⚽", layout="wide")
st.title("FIFA 2023 — Player Stats")

df = pd.read_csv("fifa_player_stats.csv", sep=";")

clube = st.selectbox("Selecione um time:", sorted(df["Club"].unique()))
jogadores_time = df[df["Club"] == clube]
jogador = st.selectbox("Selecione um jogador:", jogadores_time["Name"])

player = jogadores_time[jogadores_time["Name"] == jogador].iloc[0]
col1, col2, col3, col4 = st.columns(4)
col1.metric("Overall", player["Overall"])
col2.metric("Pace", player["Pace"])
col3.metric("Shooting", player["Shooting"])
col4.metric("Passing", player["Passing"])
```

Para rodar localmente:

```bash
git clone https://github.com/anselmoaxo/dataset-fifa23.git
pip install -r requirements.txt
streamlit run app.py
```

## Desafios e soluções

**Encoding do CSV.** O arquivo do Kaggle usa ponto e vírgula e encoding diferente de UTF-8. Encoding e separador são configurados na leitura com Pandas.

**Filtros encadeados.** O dropdown de jogador precisa acompanhar o time escolhido. O estado reativo do Streamlit com filtro encadeado no DataFrame resolve.

**Performance.** Com mais de 17 mil registros, a interface podia ficar lenta. Filtragem antecipada e cache do Streamlit mantêm a resposta rápida.

## Aprendizados

- Dashboards interativos rápidos com Streamlit.
- Leitura, limpeza e filtros de datasets reais do Kaggle com Pandas.
- Componentes reativos para filtros encadeados.
- Tratamento de encoding e formatos de arquivo.
