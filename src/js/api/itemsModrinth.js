// Opción 1: Usando URLSearchParams (recomendado)
function searchModrinth(text) {
    const params = new URLSearchParams();
    params.append('limit', '10');
    params.append('index', 'relevance');
    params.append('query', text);
    params.append('facets', JSON.stringify([["project_type:mod"], ["categories:forge"], ["versions:1.20.1"]]));

    const url = `https://api.modrinth.com/v2/search?${params.toString()}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.hits.map(item => {
                return {
                    client_side: item.client_side,
                    server_side: item.server_side,
                    title: item.title,
                    url: [`https://modrinth.com/mod/${item.slug}`, `https://www.curseforge.com/minecraft/mc-mods/${item.slug}`]
                };
            });
        });
}


