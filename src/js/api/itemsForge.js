// Opción 1: Usando URLSearchParams (recomendado)
function searchForge(text) {
    const params = new URLSearchParams();
    params.append('gameId', '432');
    params.append('index', '0');
    params.append('classId', '6');
    params.append('filterText', text);
    params.append('pageSize', '3');
    params.append('sortField', '1');
    params.append('gameFlavors', '1');
    params.append('gameVersion', '1.20.1');

    const url = `https://www.curseforge.com/api/v1/mods/search?${params.toString()}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.data.map(item => {
                // Determinar compatibilidad
                const client_side = item.isClientCompatible ? 'required' : 'unsupported';
                const server_side = 'unknown';

                return {
                    title: item.name,
                    id: item.id,
                    url: [`https://www.curseforge.com/minecraft/mc-mods/${item.slug}`],
                    client_side: client_side,
                    server_side: server_side
                };
            });
        });
}


