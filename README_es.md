# Plantilla de Currículum Web Minimalista – React + Tailwind CSS

[Demo](https://holasoymalva.github.io/minimal-resume/)

<img width="763" height="518" alt="Captura de pantalla" src="https://github.com/user-attachments/assets/09ba3973-4f9f-4fae-ab86-955b8cb11220" />

Un currículum web editable y minimalista construido con React y Tailwind CSS. Este proyecto te permite crear y personalizar tu CV directamente en el navegador de forma visual y sencilla.

> **🌐 Idioma**: [English](README.md) | Español

---

## 🚀 Características

- **Diseño limpio y profesional**
- **Edición en tiempo real**: actualiza tu currículum directamente en la interfaz
- **Totalmente responsive**: se adapta a cualquier dispositivo
- **Íconos de contacto clicables**: correo, teléfono, LinkedIn, GitHub
- **Tooltips al pasar el cursor**: muestra los datos de contacto
- **Sin base de datos**: toda la información se guarda en el estado de React
- **Fácil de personalizar**: modifica colores, tipografías y contenido

---

## 🛠️ Tecnologías utilizadas

- **React 19.1.0**
- **Tailwind CSS 4.1.11**
- **Lucide React** para íconos SVG
- **React Scripts** para ejecución y build

---

## 📋 Secciones incluidas

- **Información personal**  
  Nombre, título profesional, ubicación e íconos de contacto
- **Sobre mí**  
  Resumen personalizado sobre tu perfil profesional
- **Experiencia laboral**  
  Historial de empleos con descripciones detalladas
- **Educación**  
  Estudios académicos
- **Habilidades**  
  Lista de competencias técnicas
- **Proyectos**  
  Portafolio con etiquetas de tecnologías

---

## 🚀 Instalación y uso

### Requisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```bash
git clone https://github.com/holasoymalva/minimal-resume.git
cd minimal-resume
npm install
npm start
````

Luego abre `http://localhost:3000` en tu navegador.

---

## 📝 Personalización

### Editar tu información

1. Haz clic en el botón **"Edit"** (Editar)
2. Modifica directamente los campos visibles
3. Guarda tus cambios con **"Save"** (Guardar)

### Editar íconos de contacto

Dentro del componente `App.js`, puedes modificar el objeto `resumeData.personalInfo`:

```js
personalInfo: {
  email: "tu.email@ejemplo.com",
  phone: "+34 123 456 789",
  linkedin: "linkedin.com/in/tuusuario",
  github: "github.com/tuusuario"
}
```

* Cada ícono abrirá el enlace correspondiente (`mailto`, `tel`, o `https://`)
* Se muestra la información como **tooltip** al pasar el cursor
* Los íconos están estilizados dentro de contenedores cuadrados con borde

---

### Personalizar estilos

Puedes cambiar los estilos usando las clases de Tailwind CSS directamente en `src/App.js`.

Personaliza:

* Colores de fondo, texto y borde
* Espaciado y layout
* Comportamiento de íconos y botones

---

## 🎨 Capturas

![Vista previa](https://github.com/user-attachments/assets/2c9c70ce-fa40-4fd0-ad17-fefc519fff8c)

---

## 📦 Scripts disponibles

```bash
npm start       # Ejecuta en modo desarrollo
npm test        # Corre pruebas unitarias (si aplican)
npm run build   # Genera build de producción
npm run eject   # Expone configuración (no reversible)
```

---

## 🤝 Contribuciones

¡Se agradecen contribuciones!
Pasos recomendados:

```bash
1. Haz un fork del proyecto
2. Crea una nueva rama
3. Realiza tus cambios
4. Abre un Pull Request 🚀
```

---

## 📜 Licencia

Este proyecto está licenciado bajo la licencia MIT. Revisa el archivo `LICENSE`.

---

## 👨‍💻 Autor

**Malva** – [@holasoymalva](https://github.com/holasoymalva)

---

## 🙏 Agradecimientos

* Comunidad de React
* Tailwind CSS por su potencia y simplicidad
* Lucide Icons por los íconos de código abierto

---

⭐ ¡Dale una estrella si este proyecto te fue útil!
