# Hyde Premier League Website

A modern, static website for the Hyde Premier League - showcasing local football tournaments including the Premier League, FA Cup, Champions League, and Summer League competitions.

## 🎯 Features

- **Modern Marketing Homepage**: Engaging hero section with tournament highlights and app promotion
- **Tournament Pages**: Dedicated pages for each competition with season history
  - Premier League
  - FA Cup
  - Champions League
  - Summer League
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Static Export**: Optimized for Azure Static Web Apps hosting
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Fast Performance**: Pre-rendered static pages for optimal loading

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## 🏗️ Build & Deployment

### Build for Production

```bash
npm run build
```

This generates static files in the `/out` directory, ready for deployment.

### Deploy to Azure Static Web Apps

See [AZURE_DEPLOYMENT.md](AZURE_DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy:**

1. Create a Static Web App in Azure Portal
2. Connect your GitHub repository
3. Set build configuration:
   - App location: `/`
   - Output location: `out`
4. Azure automatically deploys on push to main

## 📁 Project Structure

```
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles
│   └── tournaments/
│       ├── premier-league/     # Premier League page
│       ├── fa-cup/            # FA Cup page
│       ├── champions-league/  # Champions League page
│       └── summer-league/     # Summer League page
├── public/                     # Static assets
├── out/                       # Build output (generated)
├── next.config.ts            # Next.js configuration
├── staticwebapp.config.json  # Azure Static Web Apps config
└── package.json
```

## 🎨 Design Inspiration

The design is inspired by:
- **PowerLeague UK**: Professional sports league website aesthetics
- **Hyde Premier League Instagram**: Brand colors and community feel

### Color Scheme

- Primary Green: `#16a34a` (Green-600)
- Dark Green: `#15803d` (Green-700)
- Secondary colors for each tournament:
  - Premier League: Purple (`#9333ea`)
  - FA Cup: Red (`#dc2626`)
  - Champions League: Blue (`#2563eb`)
  - Summer League: Orange (`#ea580c`)

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Deployment**: Azure Static Web Apps
- **Export Mode**: Static HTML generation

## 📱 Responsive Breakpoints

- Mobile: Default (< 640px)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Large Desktop: `xl:` (1280px+)

## 🎯 Future Enhancements

- [ ] Tournament results and statistics
- [ ] Team profiles and player stats
- [ ] Photo galleries from matches
- [ ] Mobile app integration
- [ ] Live score updates
- [ ] Historical match archives by year
- [ ] News and blog section

## 📞 Contact

Follow us on Instagram: [@hydepremierleague](https://www.instagram.com/hydepremierleague/)

## 📄 License

This project is created for the Hyde Premier League community.
