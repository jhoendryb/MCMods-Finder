function searchCF(url, value) {
    return new Promise((resolve, reject) => {
        let coincidences = [];
        let respText = "";

        function searchPage(page) {
            fetch(`${url}&page=${page}`)
                .then(response => response.json())
                .then(data => {
                    (data.data || []).forEach(comment => {
                        if (comment.text.includes(value)) {
                            respText += comment.text + "\n";
                            coincidences.push({
                                text: comment.text,
                                page
                            });
                        }
                    });
                    if (page < (Math.round(data.pagination.totalCount / data.pagination.pageSize) - 1)) {
                        searchPage(page + 1);
                    } else {
                        resolve({ coincidences, respText });
                    }
                })
                .catch(reject);
        }
        searchPage(0);
    });
}

