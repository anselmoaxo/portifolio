---
order: 2
title:
  pt: Data Lake Meteorologia
  en: Weather Data Lake
  es: Data Lake Meteorología
summary:
  pt: Pipeline que consome uma API pública de previsão do tempo, armazena em Data Lake particionado e é orquestrado semanalmente pelo Airflow.
  en: Pipeline consuming a public weather forecast API, storing in a partitioned Data Lake and orchestrated weekly by Airflow.
  es: Pipeline que consume una API pública de pronóstico del tiempo, almacena en un Data Lake particionado y se orquesta semanalmente con Airflow.
impact:
  pt: Coleta 100% automatizada, sem intervenção manual.
  en: 100% automated collection, no manual work.
  es: Recolección 100% automatizada, sin intervención manual.
stack: [Airflow, Python, API REST, Data Lake]
github: https://github.com/anselmoaxo/pipeline_meteorologia_airflow
metrics:
  - { value: "~30 s", label: "Tempo de execução" }
  - { value: "56", label: "Previsões por execução" }
  - { value: "100%", label: "Taxa de sucesso" }
---

## Descrição

Pipeline automatizado que coleta previsões meteorológicas de 7 dias via API pública, armazena os dados em um **Data Lake local** e os organiza para análises futuras.

O processo é orquestrado pelo **Apache Airflow** e roda **toda segunda-feira às 8h**, garantindo consistência e rastreabilidade dos dados climáticos ao longo do tempo.

## Objetivos

- **Automação:** eliminar a coleta manual, com dados atualizados toda semana.
- **Histórico:** construir uma base de previsões para analisar acurácia e tendências.
- **Escalabilidade:** arquitetura modular, fácil de expandir para novas localidades e fontes.
- **Aprendizado:** praticar ETL, orquestração, consumo de APIs e Data Lake.

## Arquitetura

```text
API pública (OpenWeatherMap)
        │  HTTP GET
        ▼
Apache Airflow           scheduler · extração · validação · transformação
        │  save JSON
        ▼
Data Lake (local)        /data/weather/YYYY-MM-DD/forecast.json
        │  read
        ▼
Pandas / Python          análises (futuro: BI)
```

1. **Agendamento:** a DAG roda toda segunda às 8h.
2. **Extração:** requisição GET para a API de previsão.
3. **Validação:** confere status 200 e estrutura do JSON.
4. **Transformação:** extrai campos relevantes e formata datas.
5. **Armazenamento:** salva o JSON particionado por data.
6. **Logging:** registra o status da execução.

## Código

```python
from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime, timedelta
import requests, json, os

default_args = {"owner": "data_team", "retries": 2, "retry_delay": timedelta(minutes=5)}

def extract_weather_data(**context):
    params = {"q": "Sao Paulo", "appid": os.getenv("WEATHER_API_KEY"), "units": "metric"}
    response = requests.get("https://api.openweathermap.org/data/2.5/forecast", params=params)
    response.raise_for_status()
    return response.json()

def save_to_datalake(**context):
    data = context["ti"].xcom_pull(task_ids="extract_weather")
    path = f"/opt/data_lake/weather/{datetime.now():%Y-%m-%d}"
    os.makedirs(path, exist_ok=True)
    with open(f"{path}/forecast.json", "w") as f:
        json.dump(data, f, indent=2)

with DAG(
    "weather_pipeline",
    default_args=default_args,
    schedule_interval="0 8 * * 1",
    start_date=datetime(2024, 1, 1),
    catchup=False,
) as dag:
    extract = PythonOperator(task_id="extract_weather", python_callable=extract_weather_data)
    save = PythonOperator(task_id="save_to_datalake", python_callable=save_to_datalake)
    extract >> save
```

## Desafios e soluções

**Rate limiting da API.** A API gratuita limita chamadas por minuto. Retry com backoff exponencial e cache local evitam chamadas redundantes no mesmo dia.

**Credenciais.** A API key não pode ficar no código. Airflow Variables e variáveis de ambiente resolvem o gerenciamento seguro.

**Organização do Data Lake.** O particionamento por data (YYYY-MM-DD) facilita a recuperação e as consultas futuras.

## Próximos passos

- Múltiplas cidades para comparação regional.
- Integração com PostgreSQL para consultas estruturadas.
- Dashboard com o histórico.
- Alertas para condições climáticas extremas.
- Análise de acurácia comparando previsão e dado real.

## Aprendizados

- Consumo confiável de APIs REST com tratamento de erros.
- Particionamento de dados para organização e performance.
- Uso de XComs do Airflow para passar dados entre tasks.
- Boas práticas de credenciais em pipelines.
