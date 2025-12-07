import { fetchApi } from './apiTempletes';

const modrinthApi = async function (type, params) {
    const paramsString = new URLSearchParams();
    Object.keys(params).forEach(element => {
        if (element === "facets") {
            paramsString.append(element, JSON.stringify(params[element]));
        } else {
            paramsString.append(element, params[element]);
        }
    });

    const urlModrinth = `https://api.modrinth.com/v2/${type}?${paramsString.toString()}`;

    console.log(urlModrinth);

    // return await fetchApi(urlModrinth);
};

// export default modrinthApi;

console.log(modrinthApi("search", {
    facets: [["project_type:mod"], ["categories:forge"], ["versions:1.20.1"]]
}));