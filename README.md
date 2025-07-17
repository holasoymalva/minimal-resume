# Minimal Resume - [Demo](https://holasoymalva.github.io/minimal-resume/)

<img width="763" height="518" alt="image" src="https://github.com/user-attachments/assets/09ba3973-4f9f-4fae-ab86-955b8cb11220" />

A minimalist and editable web resume built with React and Tailwind CSS. This project allows you to create and customize your resume easily directly in the browser.

> **🌐 Language**: [Español](README_es.md) | English

## 🚀 Features

- **Minimalist design**: Clean and professional interface
- **Real-time editing**: Edit your information directly on the page
- **Fully responsive**: Adapts to any device
- **Easy customization**: Modify colors, fonts, and content easily
- **No database**: All information is stored in React state

## 🛠️ Technologies used

- **React 19.1.0**: Main framework
- **Tailwind CSS 4.1.11**: For styling
- **Lucide React**: For icons
- **React Scripts**: For build and development

## 📋 Included sections

- **Personal information**: Name, title, location, and contact
- **About**: Customizable professional description
- **Work experience**: Job history with detailed descriptions
- **Education**: Academic information
- **Skills**: List of technical competencies
- **Projects**: Project portfolio with tags

## 🚀 Installation and usage

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/holasoymalva/minimal-resume.git
cd minimal-resume
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser at `http://localhost:3000`

## 📝 Customization

### Editing your information

1. Click the "Edit" button in the top right
2. Modify any field directly in the interface
3. Save changes by clicking "Save"

### Customizing styles

Styles can be modified by editing the Tailwind CSS classes in the `src/App.js` file. Some elements you can customize:

- Accent colors
- Typography
- Spacing
- Element layout

### Adding new sections

The component is fully modular. You can add new sections following the existing pattern:

```jsx
// Example of new section
<section className="mb-12">
  <h2 className="text-xl font-bold mb-4">New Section</h2>
  {/* Section content */}
</section>
```

## 🎨 Screenshots

### View Mode
![Resume view](screenshot-view.png)

### Edit Mode
![Edit mode](screenshot-edit.png)

## 📦 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## 🤝 Contributing

Contributions are welcome. To contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 👨‍💻 Author

**Malva** - [@holasoymalva](https://github.com/holasoymalva)

## 🙏 Acknowledgments

- Thanks to the React community for the incredible tools
- Tailwind CSS for making styling so simple
- Lucide React for the beautiful and consistent icons

## 📞 Support

If you have any problems or suggestions, please:
- Open an issue on GitHub
- Contact me on my social media

---

⭐ Don't forget to give the project a star if it was useful to you!
