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
├── index.html         # Interfaz principal
├── index.css          # Estilos CSS
├── itemsModrinth.js   # Búsqueda en Modrinth
├── itemsForge.js      # Búsqueda en CurseForge
└── searchCF.js       # Búsqueda de comentarios
```

## Funcionalidades

### Búsqueda
- Búsqueda instantánea con debounce (800ms)
- Indicador de carga mientras se buscan resultados
- Resultados en tiempo real

### Visualización
- Tarjetas con información clara y organizada
- Badges de compatibilidad (cliente y servidor)
- Botones para visitar las páginas originales
- Sección de comentarios relevantes

### Compatibilidad
- Indicadores visuales para:
  - Requerido (✓ verde)
  - Opcional (⚪ amarillo)
  - No compatible (✗ rojo)

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.0
- Bootstrap Icons

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contribución

¡Siéntete libre de contribuir! Puedes:
- Reportar bugs
- Sugerir mejoras
- Enviar pull requests
