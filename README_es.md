# Minimal Resume

<img width="763" height="518" alt="image" src="https://github.com/user-attachments/assets/09ba3973-4f9f-4fae-ab86-955b8cb11220" />

Un currículum web minimalista y editable construido con React y Tailwind CSS. Este proyecto te permite crear y personalizar tu currículum de manera sencilla directamente en el navegador.

## 🚀 Características

- **Diseño minimalista**: Interfaz limpia y profesional
- **Edición en tiempo real**: Edita tu información directamente en la página
- **Totalmente responsive**: Se adapta a cualquier dispositivo
- **Fácil personalización**: Modifica colores, fuentes y contenido fácilmente
- **Sin base de datos**: Toda la información se almacena en el estado de React

## 🛠️ Tecnologías utilizadas

- **React 19.1.0**: Framework principal
- **Tailwind CSS 4.1.11**: Para estilos
- **Lucide React**: Para iconos
- **React Scripts**: Para el build y desarrollo

## 📋 Secciones incluidas

- **Información personal**: Nombre, título, ubicación y contacto
- **Acerca de**: Descripción profesional personalizable
- **Experiencia laboral**: Historial de trabajo con descripciones detalladas
- **Educación**: Información académica
- **Habilidades**: Lista de competencias técnicas
- **Proyectos**: Portafolio de proyectos con etiquetas

## 🚀 Instalación y uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/holasoymalva/minimal-resume.git
cd minimal-resume
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Abre tu navegador en `http://localhost:3000`

## 📝 Personalización

### Editando tu información

1. Haz clic en el botón "Editar" en la parte superior derecha
2. Modifica cualquier campo directamente en la interfaz
3. Guarda los cambios haciendo clic en "Guardar"

### Personalizando estilos

Los estilos se pueden modificar editando las clases de Tailwind CSS en el archivo `src/App.js`. Algunos elementos que puedes personalizar:

- Colores de acento
- Tipografías
- Espaciado
- Disposición de elementos

### Añadiendo nuevas secciones

El componente es completamente modular. Puedes añadir nuevas secciones siguiendo el patrón existente:

```jsx
// Ejemplo de nueva sección
<section className="mb-12">
  <h2 className="text-xl font-bold mb-4">Nueva Sección</h2>
  {/* Contenido de la sección */}
</section>
```

## 🎨 Capturas de pantalla

### Modo Vista
![Vista del currículum](screenshot-view.png)

### Modo Edición
![Modo de edición](screenshot-edit.png)

## 📦 Scripts disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`
Ejecuta la aplicación en modo desarrollo.

### `npm test`
Ejecuta los tests en modo interactivo.

### `npm run build`
Construye la aplicación para producción en la carpeta `build`.

### `npm run eject`
**Nota: esta operación es irreversible.**

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Malva** - [@holasoymalva](https://github.com/holasoymalva)

## 🙏 Agradecimientos

- Gracias a la comunidad de React por las herramientas increíbles
- Tailwind CSS por hacer que el styling sea tan sencillo
- Lucide React por los iconos hermosos y consistentes

## 📞 Soporte

Si tienes algún problema o sugerencia, por favor:
- Abre un issue en GitHub
- Contáctame en mis redes sociales

---

⭐ ¡No olvides darle una estrella al proyecto si te fue útil!
