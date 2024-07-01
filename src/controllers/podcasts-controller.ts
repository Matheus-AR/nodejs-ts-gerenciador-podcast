import { IncomingMessage, ServerResponse } from 'http';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify([
        {
            podcastName: "flow",
            episode: "CBUM - Flow #319",
            videoId: "id",
            categories: ["saúde", "fitness"]
        },
            {
            podcastName: "flow",
            episode: "Rubens Barrichelo - Flow #320",
            videoId: "id",
            categories: ["esporte", "corrida"]
        }
    ]))
}