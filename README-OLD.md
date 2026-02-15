# Calendar Countdown

A modern, real-time countdown application for your next Google Calendar meeting with glassmorphism design. Now deployable to Vercel with Node.js!

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env and add your Google Client ID

# Start development server
npm run dev
```

Visit `http://localhost:3000`

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment guide.

## 📁 Project Structure

```
calendar-countdown/
├── package.json              # Node.js project configuration
├── vite.config.js            # Vite bundler configuration
├── vercel.json               # Vercel deployment config
├── server.js                 # Express server
├── .env                      # Environment variables (local)
├── .env.example              # Environment template
├── .gitignore                # Git ignore rules
├── api/                      # Vercel serverless functions
│   ├── config.js             # Config API endpoint
│   └── health.js             # Health check endpoint
├── src/                      # Source files
│   ├── index.html            # Main HTML file
│   ├── css/
│   │   └── styles.css        # Glassmorphism styles
│   └── js/                   # JavaScript modules
│       ├── app.js            # Main orchestrator
│       ├── config.js         # Configuration (uses env vars)
│       ├── auth.js           # OAuth authentication
│       ├── calendar.js       # Calendar API integration
│       ├── countdown.js      # Timer controller
│       ├── theme.js          # Theme switcher
│       └── ui.js             # UI manager
├── dist/                     # Build output (auto-generated)
└── docs/                     # Documentation
    ├── README.md             # This file
    ├── DEPLOYMENT.md         # Deployment guide
    ├── QUICKSTART.md         # Quick start guide
    ├── ARCHITECTURE.md       # Technical architecture
    └── SUMMARY.md            # Implementation summary
```

## 🏗️ Architecture

### Modular Design

The application follows a modular architecture with clear separation of concerns:

1. **config.js** - Centralized configuration
   - Google OAuth credentials
   - API settings
   - Storage keys
   - Timing intervals

2. **auth.js** - Authentication Module
   - OAuth 2.0 flow management
   - Token persistence
   - Session handling

3. **calendar.js** - Calendar API Module
   - Fetch upcoming events
   - Calculate time remaining
   - Event data processing

4. **countdown.js** - Countdown Controller
   - Real-time timer updates
   - Auto-refresh scheduling
   - Timer lifecycle management

5. **theme.js** - Theme Manager
   - Light/dark mode switching
   - Gradient animations
   - Preference persistence

6. **ui.js** - UI Manager
   - DOM manipulation
   - Status messages
   - View transitions
   - Display updates

7. **app.js** - Main Application
   - Module orchestration
   - Event handling
   - Application lifecycle

## 🚀 Setup Instructions

### For Local Development

1. **Install Node.js 18+**
   - Download from [nodejs.org](https://nodejs.org/)

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your Google Client ID

4. **Get Google Calendar API Credentials** (5 min)
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create project and enable Google Calendar API
   - Create OAuth 2.0 credentials
   - Add `http://localhost:3000` to authorized JavaScript origins
   - Add test user (your email) in OAuth consent screen
   - Copy your Client ID to `.env` file

5. **Run Development Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`

### For Production (Vercel)

See complete guide in [DEPLOYMENT.md](DEPLOYMENT.md)

**Quick Deploy:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Go to production
vercel --prod
```

**Then:**
- Set `VITE_GOOGLE_CLIENT_ID` in Vercel dashboard
- Update Google OAuth origins with your Vercel URL

## 📋 Available Scripts

```bash
npm run dev       # Start Vite dev server (port 3000)
npm run build     # Build for production
npm run preview   # Preview production build
npm start         # Start Express server (port 3001)
```

## 🏗️ Architecture (Updated for Node.js)

## 🎨 Features

- **Real-time Countdown** - Updates every second
- **Glassmorphism Design** - Modern frosted glass effect
- **Gradient Background** - Beautiful animated gradients
- **Dark/Light Theme** - Toggle with smooth transitions
- **Auto-refresh** - Checks for new meetings every 5 minutes
- **OAuth Authentication** - Secure Google Calendar access
- **Responsive Design** - Works on desktop and mobile
- **Token Persistence** - Stays logged in across sessions

## 🔧 Development

### Adding New Features

1. **New Module**: Create a new file in `js/` directory
2. **Export Functions**: Use ES6 module syntax
3. **Import in app.js**: Add to main application
4. **Update UI**: Modify `ui.js` for display logic

### Modifying Styles

- **Colors/Theme**: Edit CSS variables in `styles.css`
- **Layout**: Modify grid/flex in respective sections
- **Animations**: Add keyframes in `styles.css`

### Configuration Changes

- **API Settings**: Update `config.js`
- **Timing**: Adjust intervals in `config.js`
- **Calendar**: Change calendar ID or query parameters

## 📦 Benefits of Modular Structure

### Maintainability
- Each module has a single responsibility
- Easy to locate and fix bugs
- Clear file organization

### Scalability
- Add new features without modifying existing code
- Modules can be tested independently
- Easy to extend functionality

### Reusability
- Modules can be used in other projects
- Singleton pattern prevents duplication
- Clean import/export structure

### Collaboration
- Multiple developers can work on different modules
- Reduced merge conflicts
- Clear code ownership

### Performance
- ES6 modules enable tree-shaking
- Lazy loading potential
- Better browser caching

## 🐛 Troubleshooting

### "Access blocked" Error
- Add your email as a test user in OAuth consent screen
- Verify authorized JavaScript origins match your URL
- Ensure OAuth consent screen is in "Testing" mode

### "Failed to load" Error
- Check if running on HTTP server (not file://)
- Verify CLIENT_ID is correctly configured
- Check browser console for specific errors

### Countdown Not Updating
- Ensure you have upcoming events in your calendar
- Check browser console for API errors
- Verify calendar API is enabled in Google Cloud

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork, modify, and enhance this project!
