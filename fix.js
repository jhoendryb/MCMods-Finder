// Función para mostrar los detalles del mod
async function showModDetails(modId) {
    const modal = new bootstrap.Modal(document.getElementById('modDetailsModal'));
    const modalTitle = document.getElementById('modDetailsTitle');
    const modalBody = document.getElementById('modDetailsBody');
    const modDownloadLink = document.getElementById('modDownloadLink');

    try {
        // Mostrar indicador de carga
        modalBody.innerHTML = `
            <div class="text-center py-4">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Cargando...</span>
                </div>
            </div>`;

        // Obtener detalles del mod
        const modDetails = await modrinthApiPath("project", modId);

        // Formatear fecha
        const date = new Date(modDetails.updated || modDetails.published);
        const formattedDate = date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        // Construir el contenido HTML
        let htmlContent = `
            <div class="mod-details-container">
                <div class="row">
                    <div class="col-md-4 text-center mb-3 mb-md-0">
                        <img src="${modDetails.icon_url || 'https://via.placeholder.com/200'}" 
                             class="img-fluid rounded mb-3" 
                             alt="${modDetails.title || 'Icono del mod'}"
                             style="max-height:200px; width:auto;">
                    </div>
                    <div class="col-md-8">
                        <h4>${modDetails.title || 'Sin título'}</h4>
                        <p class="text-muted">${modDetails.description || 'Sin descripción disponible.'}</p>
                        
                        <div class="row g-2 mb-3">
                            <div class="col-6">
                                <div class="p-2 bg-dark rounded">
                                    <div class="text-muted small">Descargas</div>
                                    <div class="fw-bold">${modDetails.downloads ? modDetails.downloads.toLocaleString() : 'N/A'}</div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="p-2 bg-dark rounded">
                                    <div class="text-muted small">Última actualización</div>
                                    <div class="fw-bold">${formattedDate}</div>
                                </div>
                            </div>
                            ${modDetails.license ? `
                            <div class="col-6">
                                <div class="p-2 bg-dark rounded">
                                    <div class="text-muted small">Licencia</div>
                                    <div class="fw-bold">${modDetails.license.name || modDetails.license.id || 'N/A'}</div>
                                </div>
                            </div>` : ''}
                            <div class="col-6">
                                <div class="p-2 bg-dark rounded">
                                    <div class="text-muted small">Tipo</div>
                                    <div class="fw-bold">${modDetails.project_type || 'Mod'}</div>
                                </div>
                            </div>
                        </div>

                        ${modDetails.versions && modDetails.versions.length > 0 ? `
                        <h6 class="mt-3 mb-2">Versiones soportadas</h6>
                        <div class="d-flex flex-wrap gap-1 mb-3">
                            ${modDetails.versions.slice(0, 10).map(version =>
            `<span class="badge bg-secondary">${version}</span>`
        ).join('')}
                            ${modDetails.versions.length > 10 ?
                    `<span class="badge bg-dark">+${modDetails.versions.length - 10} más</span>` : ''
                }
                        </div>` : ''}

                        ${modDetails.categories && modDetails.categories.length > 0 ? `
                        <h6 class="mt-3 mb-2">Categorías</h6>
                        <div class="d-flex flex-wrap gap-1">
                            ${modDetails.categories.map(cat =>
                    `<span class="badge bg-info text-dark">${cat}</span>`
                ).join('')}
                        </div>` : ''}
                    </div>
                </div>
            </div>`;

        // Insertar el contenido en el modal
        modalBody.innerHTML = htmlContent;
        modalTitle.textContent = modDetails.title || 'Detalles del mod';

        // Configurar el botón de descarga si existe
        if (modDownloadLink) {
            modDownloadLink.href = `https://modrinth.com/project/${modDetails.id}`;
            modDownloadLink.target = '_blank';
            modDownloadLink.style.display = 'inline-block';
        }

        // Mostrar el modal
        modal.show();

    } catch (error) {
        console.error('Error cargando detalles del mod:', error);
        modalBody.innerHTML = `
            <div class="alert alert-danger">
                <i class="bi bi-exclamation-triangle-fill"></i>
                Error al cargar los detalles del mod: ${error.message || 'Error desconocido'}
            </div>`;

        if (modDownloadLink) {
            modDownloadLink.style.display = 'none';
        }

        modal.show();
    }
}
