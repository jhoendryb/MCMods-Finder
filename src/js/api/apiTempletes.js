const apiTemplete = {
    search: {
        limit: {
            type: "integer",
            priority: "opcional",
            value: ''
        },
        index: {
            type: "string",
            priority: "opcional",
            value: ''
        },
        query: {
            type: "string",
            priority: "opcional",
            value: ''
        },
        facets: {
            type: "string",
            priority: "opcional",
            value: ''
        },
        offset: {
            type: "integer",
            priority: "opcional",
            value: ''
        }
    }
};

function fetchApi(url) {
    return fetch(url)
        .then(response => response.json())
        .then(response => response);
}
