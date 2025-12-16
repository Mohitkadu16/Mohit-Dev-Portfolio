# 🚀 Mohit Kadu - Developer Portfolio

A modern, fully-featured developer portfolio built with **React 19**, **TypeScript**, and **Vite**. Showcase your skills, projects, and connect with potential clients or employers through an interactive and responsive web application.

## ✨ Features

### 🎯 Core Sections
- **Header** - Smooth navigation with pill-styled design and glow effects
- **Hero** - Eye-catching introduction with animated typing effect and gradient text
- **About** - Professional profile with bullet points and social links (Instagram, Reddit, Discord)
- **Skills** - Interactive skill cards with professional logos and purple glow effects
  - Programming Languages (JavaScript, TypeScript, Python, HTML, CSS, C++)
  - Frameworks & Libraries (React, Next.js, Node.js, Npm)
  - AI & Tools (AI-assisted development, Genkit, Ollama, GitHub Copilot)
  - Platforms & Services (Git, GitHub, Firebase, Supabase)
  - Design & UI (Responsive Design, Wordpress, Figma)
- **Projects** - Responsive grid layout with image placeholders and tech stacks
- **Education** - Formal education credentials and certifications
- **Experience** - Work history and professional background
- **Achievements** - Accomplishments and awards
- **Contact** - Fully functional contact form with Formspree integration
- **Footer** - Social links and copyright information

### 🎨 Design & UX
- Dark theme (#181818) with purple accents (#a259ff)
- Smooth scroll behavior with anchor links
- Responsive design (mobile, tablet, desktop)
- Hover effects and animations
- Toast notifications for form submissions
- Interactive skill cards with glow effects

### 📱 Responsive Layout
- Mobile-first approach
- Fully responsive grid and flexbox layouts
- Touch-friendly buttons and navigation
- Optimized for all screen sizes

### 🔧 Form & Contact
- **Formspree Integration** - Email form submissions
- Form validation with error messages
- Success notifications (toast alerts)
- Auto-clearing form after submission

## 🛠️ Tech Stack

### Frontend
- **React** 19.2.0 - UI library
- **TypeScript** 5.9.3 - Type safety
- **Vite** 7.2.4 - Build tool
- **CSS Modules** - Component-scoped styling

### Libraries & Tools
- **react-icons** - Icon library (FontAwesome, SimpleIcons)
- **@formspree/react** 3.0.0 - Form submission service
- **@emailjs/browser** 4.4.1 - Email service

### Development
- **ESLint** - Code linting
- **TypeScript ESLint** - Type-aware linting

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone or Navigate to Project**
```bash
cd client
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start Development Server**
```bash
npm run dev
```
The portfolio will be available at `http://localhost:5173`

## 🚀 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx/css          # Navigation bar
│   ├── Hero.jsx/css            # Hero section with typing animation
│   ├── About.jsx/css           # About me section
│   ├── Skills.jsx/css          # Skills with logos
│   ├── Projects.jsx/css        # Portfolio projects
│   ├── Stats.jsx/css           # Statistics
│   ├── Education.jsx/css       # Education credentials
│   ├── Experience.jsx/css      # Work experience
│   ├── Achievements.jsx/css    # Awards and achievements
│   ├── Contact.jsx/css         # Contact form
│   └── Footer.jsx/css          # Footer
├── App.jsx                      # Main app component
├── App.css                      # Global styles
├── main.tsx                     # Entry point
└── index.css                    # Base styles

public/
├── github-pfp.png              # Profile picture
├── hero img.png                # Hero section image
├── project1.png, project2.png  # Project images
└── github-copilot.svg          # Custom SVG logos
```

## 🎨 Customization

### Update Personal Information
Edit component files to update:
- Name and title in `Hero.jsx`
- About description in `About.jsx`
- Skills in `Skills.jsx`
- Project details in `Projects.jsx`
- Contact info in `Contact.jsx`

### Colors & Theme
Main color variables:
- Primary Color: `#a259ff` (Purple)
- Background: `#181818` (Dark)
- Text: `#fff` / `#b9b9b9` (Light)

Edit colors in component CSS files or create a theme config.

### Add Your Images
Replace placeholder images in `/public` folder:
- Profile picture: `github-pfp.png`
- Hero image: `hero img.png`
- Project images: Update paths in `Projects.jsx`

### Configure Formspree
Update the Formspree ID in `Contact.jsx`:
```jsx
const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

### GitHub Pages
1. Update `vite.config.ts` with your repository name
2. Run `npm run build`
3. Push the `dist` folder to `gh-pages` branch

## 📋 Key Components

### Header Navigation
- Smooth scroll navigation
- Logo click returns to top
- Section links: About, Skills, Education, Experience, Projects, Achievements, Contact

### Hero Section
- **Animated Typing Effect** - Cycles through multiple statements
- **Gradient Text** - "Kadu" has gradient styling
- **Location Badge** - Mumbai, Maharashtra, India
- **CTA Button** - Download Resume

### Skills Section
- **Interactive Cards** - Hover effects with glow
- **Professional Logos** - SVG and icon-based logos
- **Categorized** - 5 skill categories
- **Responsive Grid** - Auto-fit layout

### Contact Form
- **Formspree Integration** - Direct email submissions
- **Form Validation** - Real-time error messages
- **Toast Notifications** - Success alerts
- **Social Links** - Instagram, Reddit, Discord

## 🔐 Environment Variables

Create `.env` file (if needed):
```env
VITE_FORMSPREE_ID=your_formspree_id
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Performance

- Fast load times with Vite
- Optimized images
- Lazy loading support
- Smooth animations with CSS transitions

## 📞 Contact & Support

**Social Links:**
- 📧 Email: mohitkadu@example.com
- 📱 Phone: +91 98765 43210
- 💼 LinkedIn: linkedin.com/in/mohitkadu
- 🐙 GitHub: github.com/mohitkadu
- 📸 Instagram: instagram.com/mohitkadu
- 🔴 Reddit: reddit.com/user/mohitkadu
- 💜 Discord: discord.com/users/mohitkadu

## 📄 License

This project is open source and available under the MIT License.

## ✅ Checklist for Deployment

- [ ] Update all personal information
- [ ] Add your images (profile, hero, projects)
- [ ] Configure Formspree form ID
- [ ] Update social media links
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Build for production: `npm run build`
- [ ] Deploy to hosting platform

## 🎯 Future Enhancements

- [ ] Dark/Light mode toggle
- [ ] Blog section
- [ ] Testimonials section
- [ ] Video testimonials
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Newsletter signup

---

**Built with ❤️ using React, TypeScript & Vite**
