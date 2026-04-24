# Floka — Digital Agency Website

A responsive single-page website inspired by the [Floka](https://floka.casethemes.net/home-1-onepage/) digital agency template, built with React and Tailwind CSS. While the original design served as a visual reference, this project reflects my own creative interpretation with custom sections, layout choices, and a working contact form powered by EmailJS.

![Floka Preview](./src/assets/images/floka-home-replica.vercel.app_.png)

## 🔗 Links

- **Live Demo:** [https://floka-home-replica.vercel.app/](https://floka-home-replica.vercel.app/)
- **Repository:** [https://github.com/MahmudaJahan99/Floka-agency-clone](https://github.com/MahmudaJahan99/Floka-agency-clone)

---

## ✨ Features

- Fully responsive layout across all screen sizes
- CSS-based scroll and hover animations throughout
- Animated stat counters using `react-countup`
- Testimonial carousel built with Swiper.js
- Functional contact form — emails are delivered via **EmailJS**
- Clean section-based architecture for easy maintenance

---

## 🗂️ Sections

| Section | Description |
|---|---|
| Navbar | Sticky navigation with smooth scroll links |
| Hero | Full-screen intro with headline and CTA |
| About | Agency intro with stats and mission statement |
| Services | Accordion-style service listings |
| Testimonials | Swiper carousel with client feedback |
| Team | Team member cards with social links |
| Contact | Functional form powered by EmailJS |
| Footer | Links, contact info, and social media |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS v4 | Utility-first styling |
| DaisyUI | Tailwind component library |
| Swiper.js | Testimonial carousel |
| react-countup | Animated number counters |
| react-icons | Icon library |
| EmailJS | Contact form email delivery |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/MahmudaJahan99/Floka-agency-clone.git

# Navigate into the project
cd Floka-agency-clone

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📧 EmailJS Setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages directly to an inbox without a backend.

To use it in your own fork:

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create a service and an email template
3. Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## 📁 Project Structure

```
floka-replica/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🙋‍♀️ Author

**Mahmuda Jahan**
- GitHub: [@MahmudaJahan99](https://github.com/MahmudaJahan99)

---

## 📄 License

This project was built as a technical assessment for a Frontend Developer position. The original design concept belongs to [Floka / CaseThemes](https://floka.casethemes.net/). This implementation is for educational and portfolio purposes only.
