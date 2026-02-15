# 📅 Calendar Countdown

<div align="center">

![Calendar Countdown](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![AI Generated](https://img.shields.io/badge/AI%20Generated-100%25-blueviolet?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel)

**Real-time countdown to your next Google Calendar meeting with beautiful glassmorphism design**

[🚀 Live Demo](https://calendar-countdown-steel.vercel.app) • [📚 Documentation](./DEPLOYMENT.md) • [🐛 Report Bug](../../issues)

</div>

---

## 🤖 100% AI Generated Code

This entire project was generated using **Cursor AI (Claude)** with **ZERO manual coding**. Every line of code, configuration, and documentation was created through AI assistance.

<div align="center">

```
┌─────────────────────────────────────────────────────┐
│  🧠 Built with Cursor AI + Claude                   │
│  ⚡ 0% Manual Coding                                │
│  🎯 100% AI-Powered Development                     │
│  ⏱️  Time to Production: ~2 hours                   │
└─────────────────────────────────────────────────────┘
```

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 **Beautiful UI**
- Glassmorphism design
- Smooth gradient backgrounds
- Dark/Light theme toggle
- Fully responsive layout

</td>
<td width="50%">

### ⚡ **Modern Stack**
- Node.js + Vite
- ES6 Modules
- Express API
- Vercel Deployment

</td>
</tr>
<tr>
<td width="50%">

### 📅 **Google Calendar**
- OAuth 2.0 authentication
- Real-time event fetching
- Auto-refresh every 5 minutes
- Persistent login sessions

</td>
<td width="50%">

### 🔒 **Secure & Fast**
- Environment variables
- Serverless functions
- CDN distribution
- HTTPS by default

</td>
</tr>
</table>

---

## 🎥 Demo

<div align="center">

### Desktop View
![Desktop Preview](https://via.placeholder.com/800x450/667eea/ffffff?text=Calendar+Countdown+Desktop)

### Mobile View
![Mobile Preview](https://via.placeholder.com/375x667/764ba2/ffffff?text=Calendar+Countdown+Mobile)

</div>

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Google Calendar API credentials
- Vercel account (optional, for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/calendar-countdown.git
cd calendar-countdown

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env and add your Google Client ID

# Start development server
npm run dev
```

Visit `http://localhost:3000` 🎉

---

## 📦 Project Structure

```
calendar-countdown/
├── 📄 package.json           # Node.js configuration
├── ⚙️  vite.config.js         # Vite build system
├── 🚀 vercel.json            # Vercel deployment
├── 🔒 .env.example           # Environment template
├── 📁 api/                   # Serverless functions
│   ├── config.js            # Config endpoint
│   └── health.js            # Health check
├── 📁 src/                   # Source files
│   ├── index.html           # Main HTML
│   ├── css/
│   │   └── styles.css       # Glassmorphism styles
│   └── js/                  # Modular JavaScript
│       ├── app.js           # Main orchestrator
│       ├── auth.js          # OAuth manager
│       ├── calendar.js      # Calendar API
│       ├── countdown.js     # Timer controller
│       ├── theme.js         # Theme switcher
│       └── ui.js            # UI manager
└── 📚 docs/                  # Documentation
```

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose | Version |
|------------|---------|---------|
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) | Runtime | 18+ |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white) | Build Tool | 5.0+ |
| ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white) | Server | 4.18+ |
| ![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white) | Hosting | Latest |
| ![Google](https://img.shields.io/badge/-Google_Calendar-4285F4?logo=google&logoColor=white) | API | v3 |

</div>

---

## 🔧 Configuration

### 1. Google Calendar API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable Google Calendar API
4. Create OAuth 2.0 credentials
5. Add authorized origins:
   - `http://localhost:3000` (development)
   - `https://calendar-countdown-steel.vercel.app` (production)
6. Copy your Client ID

### 2. Environment Variables

Create a `.env` file:

```env
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
NODE_ENV=development
PORT=3001
```

### 3. Vercel Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

Don't forget to set `VITE_GOOGLE_CLIENT_ID` in Vercel dashboard!

---

## 📝 Available Scripts

```bash
npm run dev       # Start Vite dev server (port 3000)
npm run build     # Build for production
npm run preview   # Preview production build
npm start         # Start Express server (port 3001)
```

---

## 🤖 AI Development Process

This project showcases the power of AI-assisted development:

### What AI Generated:

✅ **Complete Codebase**
- 7 modular JavaScript files
- Glassmorphism CSS design
- HTML structure with semantic markup
- Express server with API endpoints

✅ **Build & Deployment Configuration**
- Vite bundler setup
- Vercel serverless functions
- Environment variable management
- Production optimization

✅ **Comprehensive Documentation**
- 5 detailed documentation files
- Quick start guides
- Deployment instructions
- Architecture diagrams

✅ **Best Practices**
- Modular architecture
- ES6 modules
- Security patterns
- Error handling

### Development Timeline:

```
🕐 Hour 0-1:  Initial setup & core features
🕐 Hour 1-2:  Node.js conversion & deployment
📊 Total:     ~2 hours from concept to production
```

### No Manual Coding Required:

- ❌ No copy-pasting from Stack Overflow
- ❌ No debugging sessions
- ❌ No configuration headaches
- ✅ Just natural language instructions
- ✅ AI handles implementation details
- ✅ Production-ready code instantly

---

## 🎨 Features Showcase

### Real-time Countdown
```
┌─────────────────────────────────────┐
│     NEXT MEETING IN                 │
│                                     │
│   2   :   15  :   30  :   45       │
│  DAYS   HOURS   MINS    SECS       │
│                                     │
│  ▶ Team Standup Meeting             │
│    Monday, Feb 14, 2026 at 10:00AM │
└─────────────────────────────────────┘
```

### Modern Glassmorphism Design
- Translucent frosted glass cards
- Smooth backdrop blur effects
- Beautiful gradient backgrounds
- Hover animations and transitions

### Dark/Light Theme
- Automatic theme detection
- Smooth theme transitions
- Persistent preference storage
- Easy toggle button

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Complete deployment guide |
| [NODEJS-SETUP.md](./NODEJS-SETUP.md) | Node.js setup summary |
| [QUICK-REFERENCE.md](./QUICK-REFERENCE.md) | Quick command reference |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Technical architecture |

---

## 🐛 Troubleshooting

### Common Issues

<details>
<summary><b>OAuth Error: "Invalid client"</b></summary>

**Solution:**
- Verify Client ID in Vercel environment variables
- Check authorized origins in Google Console
- Ensure test user is added to OAuth consent screen
</details>

<details>
<summary><b>Environment variables not working</b></summary>

**Solution:**
- Variables must be prefixed with `VITE_`
- Redeploy after adding variables
- Clear browser cache
</details>

<details>
<summary><b>Build fails on Vercel</b></summary>

**Solution:**
- Check Vercel deployment logs
- Verify `package.json` dependencies
- Test build locally: `npm run build`
</details>

---

## 🤝 Contributing

This project was 100% AI-generated, but contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Cursor AI + Claude** - For generating 100% of this codebase
- **Google Calendar API** - For calendar integration
- **Vercel** - For hosting and serverless functions
- **Vite** - For blazing fast builds

---

## 📊 Project Stats

<div align="center">

```
📦 Total Files:        26
📝 Lines of Code:      ~2,000
📚 Documentation:      ~1,500 lines
⏱️  Development Time:  ~2 hours
🤖 AI Contribution:    100%
👨‍💻 Manual Coding:      0%
```

</div>

---

## 🌟 Star History

If you find this project interesting or useful, please give it a ⭐!

---

<div align="center">

**[⬆ back to top](#-calendar-countdown)**

Made with 🤖 by [Cursor AI + Claude](https://cursor.sh) | Deployed on [Vercel](https://vercel.com)

![AI Powered](https://img.shields.io/badge/Powered%20by-AI-blueviolet?style=for-the-badge)

</div>
