const modrinthApiParams = async function (type, params) {
    const paramsString = new URLSearchParams();
    Object.keys(params).forEach(element => {
        if (element == "facets") {
            paramsString.append(element, JSON.stringify(params[element]));
        } else {
            paramsString.append(element, params[element]);
        }
    });

    const urlModrinth = `https://api.modrinth.com/v2/${type}?${paramsString.toString()}`;

    console.log(urlModrinth);

    return await fetchApi(urlModrinth);
};

console.log(modrinthApiParams("search", {
    facets: [["project_type:mod"], ["categories:forge"], ["versions:1.20.1"]]
}));

const modrinthApiPath = async function (type, input) {

    const urlModrinth = `https://api.modrinth.com/v2/${type}/${input}`;

    return await fetchApi(urlModrinth);
};

console.log(modrinthApiPath("project", "T9jPYVri"));