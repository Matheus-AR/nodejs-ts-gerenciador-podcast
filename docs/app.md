# Podcast Manager

# Descroão
Um app no estilo netflix, onde possa centralizar diferentes episódios de podcasts separados por categoria

# Domínio
Podcasts feito em vídeo

# Features
- Listar os podcasts em sessões por categorias
  - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

# Como

#### Listar os podcasts em sessões por categorias

### Como vou implementar
GET: (retorna lista de episódios). Vou retornar em uma api rest (json) nome do podcast, nome do episódio, imagem de capa e o link

```js
[
    {
        podcastName: "flow",
        episode: "CBUM - Flow #319",
        videoId: "id",
        cover: "link/da/imagem",
        link: "link/do/episódio",
        categories: ["saúde", "fitness"]
    },
        {
        podcastName: "flow",
        episode: "Rubens Barrichelo - Flow #320",
        videoId: "id",
        cover: "link/da/imagem",
        link: "link/do/episódio",
        categories: ["esporte", "corrida"]
    }
]
```