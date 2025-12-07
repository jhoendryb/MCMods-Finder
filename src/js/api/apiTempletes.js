const apiTemplete = {
    search: {
        limit: {
            type: "integer",
            priority: "opcional"
        },
        index: {
            type: "string",
            priority: "opcional"
        },
        query: {
            type: "string",
            priority: "opcional"
        },
        facets: {
            type: "string",
            priority: "opcional"
        },
        offset: {
            type: "integer",
            priority: "opcional"
        }
    },
    project: {
        id: {
            type: "string",
            priority: "opcional"
        },
        slug: {
            type: "string",
            priority: "opcional"
        }
    }
};

function fetchApi(url) {
    return fetch(url)
        .then(response => response.json())
        .then(response => response);
}
