# CONFIG_MAP — Desafio-Livros

## Política de Versionamento

Formato: `MAJOR.MINOR.PATCH`

- **MAJOR** → mudança incompatível (breaking change)
- **MINOR** → nova funcionalidade retrocompatível
- **PATCH** → correção de bug
- 
---
## Versão Baseline
````bash
v1.0.0
````
---

## Itens de Configuração

| IC-ID | Nome | Versão | Descrição |
|---|---|---|---|
| IC-ENV-001 | Node.js | 22.22.2 | Runtime para executar o projeto e as ferramentas de build. |
| IC-FW-001 | react | 19.1.0 | Framework principal de UI. |
| IC-FW-002 | react-scripts | 5.0.1 | Toolchain do Create React App (Webpack, Babel, ESLint). |
| IC-RT-001 | react-router-dom | 7.6.3 | Roteamento client-side entre as páginas Home e Favoritos. |
| IC-UI-001 | @chakra-ui/react | 2.7.1 | Design system com componentes prontos de interface. |
| IC-ST-001 | @tanstack/react-query | 5.83.0 | Cache e gerenciamento de requisições assíncronas. |
| IC-HTTP-001 | axios | 1.10.0 | Cliente HTTP para chamadas à Open Library API. |
| IC-SVC-001 | Open Library API | pública | API externa de busca de livros (`/search.json`). |
| IC-CFG-001 | .env | — | Variáveis de ambiente locais (não versionado no Git). |
| IC-CFG-002 | package-lock.json | — | Trava as versões exatas de todas as dependências. |
