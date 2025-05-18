// Funciones principales
function showLoading(show) {
    const spinner = document.getElementById('loadingSpinner');
    const buttonText = document.getElementById('buttonText');

    if (show) {
        spinner.classList.remove('d-none');
        buttonText.textContent = 'Buscando...';
    } else {
        spinner.classList.add('d-none');
        buttonText.textContent = 'Buscar';
    }
}

function createModCard(mod, source) {
    const card = document.createElement('div');
    card.className = 'col-12 mb-3';

    // Determinar los iconos para client_side y server_side
    const clientIcon = mod.client_side === 'required' ? 'bi-check-circle-fill' :
        mod.client_side === 'optional' ? 'bi-circle' :
            'bi-x-circle-fill';
    const serverIcon = mod.server_side === 'required' ? 'bi-check-circle-fill' :
        mod.server_side === 'optional' ? 'bi-circle' :
            'bi-x-circle-fill';

    // Colores para los iconos
    const clientColor = mod.client_side === 'required' ? 'success' :
        mod.client_side === 'optional' ? 'warning' :
            'danger';
    const serverColor = mod.server_side === 'required' ? 'success' :
        mod.server_side === 'optional' ? 'warning' :
            'danger';

    card.innerHTML = `
        <div class="mod-card">
            <h4 class="mod-title">${mod.title}</h4>
            <div class="mod-info">
                <div class="compatibility">
                    <span class="badge bg-${clientColor}">
                        <i class="bi ${clientIcon}"></i>
                    </span>
                    <span class="badge bg-${serverColor}">
                        <i class="bi ${serverIcon}"></i>
                    </span>
                </div>
                <a href="${mod.url[0]}" class="btn btn-view" target="_blank">Ver en ${source}</a>
            </div>
        </div>
    `;

    return card;
}

function printJSONModrinth(data) {
    const container = document.getElementById("result-modrinth");
    container.innerHTML = '';

    if (data && data.length > 0) {
        data.forEach(mod => {
            container.appendChild(createModCard(mod, 'Modrinth'));
        });
    }
}

function printJSONForge(data) {
    const container = document.getElementById("result-forge");
    container.innerHTML = '';

    if (data && data.length > 0) {
        data.forEach(mod => {
            container.appendChild(createModCard(mod, 'CurseForge'));
        });
    }
}

function printJSONCommentForge(data) {
    const container = document.getElementById("result-commentForge");

    if (data && data.coincidences && data.coincidences.length > 0) {
        container.innerHTML = '';
        data.coincidences.slice(0, 5).forEach(comment => {
            const commentCard = document.createElement('div');
            commentCard.className = 'comment-card';
            commentCard.innerHTML = `
                <div class="comment-header">
                    <img src="${comment.avatarUrl}" class="comment-avatar" alt="${comment.author.username}">
                    <div class="comment-info">
                        <h5>${comment.author.username}</h5>
                        <p class="comment-date">${new Date(comment.dateCreated).toLocaleDateString()}</p>
                    </div>
                </div>
                <div class="comment-content">
                    <p>${comment.text}</p>
                </div>
            `;
            container.appendChild(commentCard);
        });
    }
}

function performSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.trim();

    if (searchTerm.length < 2) {
        return;
    }

    // Mostrar estado de carga
    showLoading(true);

    // Limpiar resultados anteriores
    document.getElementById("result-modrinth").innerHTML = '';
    document.getElementById("result-forge").innerHTML = '';
    document.getElementById("result-commentForge").innerHTML = '';

    // Realizar búsquedas en paralelo
    Promise.all([
        searchModrinth(searchTerm).then(printJSONModrinth),
        searchForge(searchTerm).then(printJSONForge)
    ]).finally(() => {
        showLoading(false);
    });
}
