# Minimalist Web Resume Template – React + Tailwind CSS

[Demo](https://holasoymalva.github.io/minimal-resume/)

<img width="763" height="518" alt="image" src="https://github.com/user-attachments/assets/09ba3973-4f9f-4fae-ab86-955b8cb11220" />

A minimalist and editable web resume built with React and Tailwind CSS. This project allows you to create and customize your resume easily directly in the browser.

> **🌐 Language**: [Español](README_es.md) | English

---

## 🚀 Features

- **Minimalist design**: Clean and professional interface
- **Real-time editing**: Edit your information directly on the page
- **Fully responsive**: Adapts to any device
- **Clickable contact icons**: Links to email, phone, LinkedIn, GitHub
- **Tooltips on hover**: Contact details shown when hovering icons
- **Easy customization**: Modify colors, fonts, and content easily
- **No database**: All information is stored in React state

---

## 🛠️ Technologies used

- **React 19.1.0**
- **Tailwind CSS 4.1.11**
- **Lucide React** (for icons)
- **React Scripts**

---

## 📋 Included sections

- **Personal Information**  
  Displays name, title, location, and contact icons (with tooltips + links)
- **About**  
  A customizable summary of your experience and values
- **Work Experience**  
  Job history with editable roles, descriptions, and periods
- **Education**  
  Academic background and dates
- **Skills**  
  A list of your technologies and competencies
- **Projects**  
  Portfolio with description and technology tags

---

## 🚀 Installation and usage

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
git clone https://github.com/holasoymalva/minimal-resume.git
cd minimal-resume
npm install
npm start
````

Then open [http://localhost:3000](http://localhost:3000)

---

## 📝 Customization

### Editing your information

1. Click the **"Edit"** button at the top
2. Modify fields directly in the browser
3. Save your changes by clicking **"Save"**

### Updating contact icons

In the **`App.js`** component, the `resumeData` object contains:

```js
personalInfo: {
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  linkedin: "linkedin.com/in/yourprofile",
  github: "github.com/yourusername"
}
```

Each icon will:

* Open the appropriate link when clicked (e.g., `mailto:`, `tel:`, or `https://`)
* Show the data on hover as a tooltip
* Be styled inside a bordered square similar to the avatar style

### Customizing styles

You can update styling by modifying Tailwind CSS classes in the `src/App.js` file.

Editable areas include:

* Colors
* Typography
* Layout and spacing
* Icon behavior and transitions

---

## 🎨 Screenshots

![Preview Screenshot](https://github.com/user-attachments/assets/2c9c70ce-fa40-4fd0-ad17-fefc519fff8c)

---

## 📦 Available Scripts

```bash
npm start       # Development server
npm test        # Run tests
npm run build   # Build for production
npm run eject   # Eject React config (irreversible)
```

---

## 🤝 Contributing

Contributions are welcome!

```bash
# Steps
1. Fork the project
2. Create a new branch
3. Make your changes
4. Push and open a Pull Request
```

---

## 📜 License

MIT License — see `LICENSE` file.

---

## 👨‍💻 Author

**Malva** – [@holasoymalva](https://github.com/holasoymalva)

---

## 🙏 Acknowledgments

* React and Tailwind CSS communities
* Lucide Icons for the visuals

---

⭐ Star this project if you found it useful!
