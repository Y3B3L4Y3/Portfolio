# Professional Portfolio Website

A modern, responsive, scroll-based personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Outfit & Space Grotesk fonts

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Button.jsx      # Custom button component
│   ├── Card.jsx        # Card variants (Project, Skill)
│   ├── Navbar.jsx      # Navigation component
│   └── SectionWrapper.jsx  # Section layout wrapper
├── sections/           # Page sections
│   ├── Hero.jsx        # Landing/hero section
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Skills/tech stack section
│   ├── Projects.jsx    # Projects showcase
│   ├── Contact.jsx     # Contact/CTA section
│   └── Footer.jsx      # Footer component
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles & Tailwind
```

## ✨ Features

- **Responsive Design:** Mobile-first approach, works on all devices
- **Smooth Animations:** Scroll-based animations with Framer Motion
- **Modern UI:** Clean, professional design with gradient accents
- **Accessibility:** Semantic HTML and ARIA labels
- **Performance:** Optimized for speed and SEO

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/sections/Hero.jsx` - Name, title, description
- `src/sections/About.jsx` - Bio and highlights
- `src/sections/Skills.jsx` - Your tech stack
- `src/sections/Projects.jsx` - Your projects
- `src/sections/Contact.jsx` - Contact info and social links

### Colors & Theme
Customize colors in `src/index.css`:
```css
:root {
  --color-primary: #0f172a;
  --color-accent: #6366f1;
  /* ... more variables */
}
```

### Typography
Fonts can be changed in `index.html` (Google Fonts link) and `src/index.css`.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
