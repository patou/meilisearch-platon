# MeilisearchPlaton

Ce projet démontre l'utilisation de Meilisearch avec le framework angular.

# Créer l'index

```bash
curl --location --request POST 'http://localhost:7700//indexes' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer dev' \
--data-raw '{
	"uid": "sessions"
}'
```

## Indexer les données

```bash
curl \
  -X POST 'http://localhost:7700/indexes/sessions/documents?primaryKey=id' \
  -H 'Content-Type: application/json' \
  --data-binary @platon_extract.json 
```

## Settings 

```bash
curl --location --request POST 'http://localhost:7700//indexes/sessions/settings' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer dev' \
--data-binary @settings.json
```