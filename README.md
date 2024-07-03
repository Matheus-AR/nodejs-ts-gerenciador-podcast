# Gerenciador de Podcast

## Sobre
Um gerenciador de podcast usando nodejs, typescript e sem framework.

## Aprendizado
- criar server http na prática usando um pacote pronto do nodejs

## Introdução
Uma api rest com o que o node oferece. Sem usar algum framework.

Api com uma organização madura.

## Pré-requisitp
- trabalhar com node
- configurar o typescript
- instalar dependencias
- saber o que é http
- saber o que é uma api

## Arquitetura Básica do Projeto
- Server 
    - nodejs
- Port: 
    - 3333 (entrar na aplicação)
- controlador: 
    - podcastController (requisições e responses)
    - comunica com a camada de serviço
- serviços: 
    - listar episódios, filtrar episódios 
    - camada de serviço acessa a camada de dados
- data: 
    - repositório de dados 
    - repositórios de episódios cadastrados

## Dependências
1. typescript
2. http module (nativo do nodejs)
3. tsx
4. tsup

## Camadas da aplicação
- controllers
- services
- data