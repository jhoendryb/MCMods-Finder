# Minecraft Mods Finder

Una aplicación web moderna que te permite buscar y comparar mods de Minecraft desde diferentes fuentes: Modrinth y CurseForge.

## Características

- Búsqueda unificada en Modrinth y CurseForge
- Visualización de compatibilidad (cliente y servidor)
- Mostrar comentarios relevantes
- Interfaz moderna y responsive
- Diseño oscuro con tema profesional
- Indicadores visuales de compatibilidad
- Búsqueda instantánea con debounce

## Requisitos

- Navegador web moderno
- Conexión a Internet
- Bootstrap 5.3.0 (se carga desde CDN)
- Bootstrap Icons 1.11.1 (se carga desde CDN)

## **Uso**

1. Abre el archivo `index.html` en tu navegador
2. Escribe el nombre del mod que deseas buscar
3. Presiona Enter o haz clic en el botón de búsqueda
4. Los resultados se mostrarán en dos secciones:
   - Modrinth (con compatibilidad cliente/servidor)
   - CurseForge
5. Los comentarios relevantes aparecerán automáticamente

## Estructura del Proyecto

```
apiComentForge/
├── src/              # Código fuente
│   ├── js/          # JavaScript
│   │   ├── api/     # Funciones de búsqueda
│   │   │   ├── itemsModrinth.js  # Búsqueda en Modrinth
│   │   │   ├── itemsForge.js     # Búsqueda en CurseForge
│   │   │   └── searchCF.js       # Búsqueda de comentarios
│   │   └── utils.js             # Funciones principales
│   └── css/           # Estilos
│       └── index.css  # Estilos principales
├── assets/           # Recursos
│   └── data/         # Datos
│       └── data.json # Datos de ejemplo
├── index.html        # Página principal
├── README.md         # Documentación
└── .gitignore        # Archivos ignorados por git
```

## Funcionalidades

### Búsqueda
- Búsqueda instantánea con debounce (800ms)
- Indicador de carga mientras se buscan resultados
- Resultados en tiempo real
- Búsqueda simultánea en Modrinth y CurseForge

### Visualización
- Tarjetas con información clara y organizada
- Indicadores de compatibilidad (cliente y servidor):
  - Modrinth: ✓ (requerido), ⚪ (opcional), ✗ (no compatible)
  - CurseForge: ✓ (requerido), ✗ (no compatible), ⚪ (desconocido)
- Botones para visitar las páginas originales
- Sección de comentarios relevantes:
  - Búsqueda automática de la palabra "servidor" en los comentarios
  - Resultados de comentarios de CurseForge
  - Ayuda a determinar compatibilidad del servidor cuando la información no está disponible en los metadatos

### Indicadores de Compatibilidad
- Requerido (✓ verde)
- Desconocido (⚪ azul)
- No compatible (✗ rojo)

### Fuentes de Datos
- Modrinth: Compatibilidad detallada (cliente/servidor)
- CurseForge: Compatibilidad básica (cliente) y desconocida para servidor
  - Se busca en los comentarios la palabra "servidor" para ayudar a determinar compatibilidad

### Tecnologías
- HTML5
- CSS3
- JavaScript (módulos ES6)
- Bootstrap 5.3.0 (CDN)
- Bootstrap Icons 1.11.1 (CDN)

### Compatibilidad
- Indicadores visuales para:
  - Requerido (✓ verde)
  - Desconocido (⚪ azul)
  - No compatible (✗ rojo)

### Fuentes de datos
- Modrinth: Compatibilidad detallada (cliente/servidor)
- CurseForge: Compatibilidad básica (cliente) y desconocida para servidor

### Tecnologías
- HTML5
- CSS3
- JavaScript (módulos ES6)
- Bootstrap 5.3.0 (CDN)
- Bootstrap Icons 1.11.1 (CDN)

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.0
- Bootstrap Icons

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

## Estructura de Carpetas

- `src/`: Código fuente principal
  - `js/`: Archivos JavaScript
    - `api/`: Funciones de búsqueda
    - `utils.js`: Funciones principales
  - `css/`: Estilos CSS
- `assets/`: Recursos
  - `data/`: Datos de ejemplo
- `index.html`: Página principal
- `README.md`: Documentación
- `.gitignore`: Archivos ignorados por git

## Requisitos del Sistema

- Navegador web moderno
- Conexión a Internet
- Git (para desarrollo)
- Node.js (opcional, para desarrollo local)

## Desarrollo Local

1. Clonar el repositorio:
```bash
git clone https://github.com/jhoendryb/MCMods-Finder.git
```

2. Abrir el proyecto en tu editor favorito

3. Para desarrollo, se recomienda usar un servidor local:
```bash
# Opción 1: Usar Python
python -m http.server 8000

# Opción 2: Usar Node.js
npx http-server
```

4. Abrir el navegador en `http://localhost:8000`

## Contribución

¡Siéntete libre de contribuir! Puedes:
- Reportar bugs
- Sugerir mejoras
- Enviar pull requests
