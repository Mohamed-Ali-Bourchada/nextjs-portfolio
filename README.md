# Full-Stack Developer Portfolio

A modern Single Page Application (SPA) portfolio for a Full-Stack Web & Mobile Developer built with Next.js and Tailwind CSS.

## Features

- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- 🎨 Modern UI inspired by admin dashboards
- 🚀 Smooth scroll navigation
- ✨ Subtle animations with Framer Motion
- 📊 Skills visualization
- 📁 Project showcase
- 📝 Contact form

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mohamed-Ali-Bourchada/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio/
├── public/            # Static assets
├── src/
│   ├── app/           # App router pages
│   ├── components/    # React components
│   │   ├── layout/    # Layout components
│   │   ├── sections/  # Page sections
│   │   
│   |
├── tailwind.config.ts # Tailwind configuration
└── README.md          # Project documentation
```

## Customization

1. Update personal information in the components
2. Replace project images in the `public/projects` directory
3. Add your own profile picture as `public/profile.jpg`
4. Customize colors in `tailwind.config.ts` and `globals.css`

## Deployment

This project can be easily deployed to Vercel:

```bash
npm install -g vercel
vercel
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
