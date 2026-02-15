# Calendar Countdown - Project Structure Documentation

## 📊 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         Browser                                  │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                     index.html                            │  │
│  │  ┌────────────────┐  ┌─────────────────────────────────┐ │  │
│  │  │  CSS Loader    │  │   JavaScript ES6 Modules        │ │  │
│  │  │  styles.css    │  │   (app.js entry point)          │ │  │
│  │  └────────────────┘  └─────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              External Libraries                           │  │
│  │  • Google Identity Services (GSI)                        │  │
│  │  • Google API Client Library                             │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Application Layer (app.js)                    │
│                                                                   │
│  • Orchestrates all modules                                     │
│  • Handles application lifecycle                                │
│  • Manages event listeners                                      │
│  • Coordinates user interactions                                │
└─────────────────────────────────────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Module Layer                                │
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   config.js  │  │   theme.js   │  │    ui.js     │         │
│  │              │  │              │  │              │         │
│  │ • Constants  │  │ • Light/Dark │  │ • DOM Mgmt   │         │
│  │ • API Keys   │  │ • Gradients  │  │ • Messages   │         │
│  │ • Settings   │  │ • Persist    │  │ • Views      │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   auth.js    │  │ calendar.js  │  │ countdown.js │         │
│  │              │  │              │  │              │         │
│  │ • OAuth 2.0  │  │ • Fetch API  │  │ • Timer      │         │
│  │ • Tokens     │  │ • Events     │  │ • Updates    │         │
│  │ • Sessions   │  │ • Calculate  │  │ • Auto-Ref   │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    External Services                             │
│                                                                   │
│  ┌──────────────────────┐  ┌────────────────────────────────┐  │
│  │  Google OAuth 2.0    │  │  Google Calendar API           │  │
│  │  • Authentication    │  │  • Fetch Events                │  │
│  │  • Authorization     │  │  • Calendar Data               │  │
│  └──────────────────────┘  └────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## 🔄 Data Flow

### Authentication Flow
```
User Click          →  app.js
                    ↓
                  auth.js (authorize)
                    ↓
              Google OAuth 2.0
                    ↓
              Token Received
                    ↓
              localStorage (persist)
                    ↓
              calendar.js (fetch events)
                    ↓
              ui.js (display)
```

### Countdown Update Flow
```
setInterval (1s)    →  countdown.js
                    ↓
              calendar.js (calculate time)
                    ↓
              ui.js (update display)
                    ↓
              DOM Elements (render)
```

### Auto-Refresh Flow
```
setInterval (5m)    →  countdown.js
                    ↓
              calendar.js (fetch new events)
                    ↓
              Compare with current
                    ↓
              Update if changed
                    ↓
              ui.js (display)
```

## 📦 Module Dependencies

```
app.js
├── config.js (no dependencies)
├── theme.js
│   └── config.js
├── ui.js (no dependencies)
├── auth.js
│   ├── config.js
│   └── ui.js
├── calendar.js
│   ├── config.js
│   ├── ui.js
│   └── auth.js
└── countdown.js
    ├── config.js
    ├── ui.js
    └── calendar.js
```

## 🎯 Module Responsibilities

### config.js - Configuration Manager
**Purpose**: Centralized configuration and constants
**Exports**: `CONFIG` object
**Dependencies**: None
**Key Features**:
- Google OAuth credentials
- API endpoints
- Storage keys
- Timing intervals

### theme.js - Theme Manager
**Purpose**: Handle light/dark theme switching
**Exports**: `themeManager` singleton
**Dependencies**: config.js
**Key Features**:
- Toggle themes
- Persist preferences
- System preference detection
- Gradient animations

### ui.js - UI Manager
**Purpose**: DOM manipulation and display updates
**Exports**: `uiManager` singleton
**Dependencies**: None
**Key Features**:
- Show/hide sections
- Status messages
- Update countdown display
- Meeting info rendering

### auth.js - Authentication Manager
**Purpose**: Google OAuth 2.0 authentication
**Exports**: `authManager` singleton
**Dependencies**: config.js, ui.js
**Key Features**:
- OAuth flow management
- Token persistence
- Session handling
- API initialization

### calendar.js - Calendar Manager
**Purpose**: Google Calendar API integration
**Exports**: `calendarManager` singleton
**Dependencies**: config.js, ui.js, auth.js
**Key Features**:
- Fetch events
- Calculate time remaining
- Event data processing
- Error handling

### countdown.js - Countdown Controller
**Purpose**: Timer and auto-refresh logic
**Exports**: `countdownController` singleton
**Dependencies**: config.js, ui.js, calendar.js
**Key Features**:
- Real-time countdown
- Auto-refresh scheduling
- Timer lifecycle
- Update coordination

### app.js - Main Application
**Purpose**: Application orchestration
**Exports**: `app` instance
**Dependencies**: All modules
**Key Features**:
- Module initialization
- Event listeners
- User interactions
- Application lifecycle

## 🔐 Security Considerations

### Token Storage
- Access tokens stored in `localStorage`
- Read-only calendar scope
- Auto-expiration via Google
- Clear on sign out

### API Security
- Client-side OAuth 2.0
- No server-side secrets
- Origin validation
- HTTPS in production

### Data Privacy
- No data sent to external servers
- Calendar data stays in browser
- Token not shared
- User-controlled access

## 🚀 Performance Optimizations

### Module Loading
- ES6 modules enable tree-shaking
- Lazy evaluation
- Browser caching
- Minimal bundle size

### Timer Efficiency
- Single interval for countdown
- RAF for smooth updates
- Cleanup on unmount
- No memory leaks

### API Calls
- Cached event data
- Debounced refresh
- Error retry logic
- Minimal requests

## 🧪 Testing Strategy

### Unit Tests (Recommended)
```javascript
// Example test structure
describe('CalendarManager', () => {
  test('calculates time remaining correctly', () => {
    // Test time calculation
  });
  
  test('handles no events gracefully', () => {
    // Test empty calendar
  });
});
```

### Integration Tests
- OAuth flow
- API integration
- Timer updates
- UI transitions

### Manual Testing
- Connect/disconnect
- Theme switching
- Countdown accuracy
- Auto-refresh

## 📈 Scalability

### Adding Features
1. Create new module in `js/`
2. Export singleton or functions
3. Import in `app.js`
4. Update README

### Extending Functionality
- Add calendar selection
- Multiple timezones
- Event filtering
- Notification system
- Meeting reminders

### Code Organization
- Keep modules focused
- Single responsibility
- Clear interfaces
- Document changes

## 🛠️ Development Workflow

### Local Development
```bash
# Start server
python3 -m http.server 8000

# Open browser
open http://localhost:8000

# Watch for changes (manual refresh)
```

### Code Style
- ES6+ syntax
- JSDoc comments
- Consistent naming
- Modular structure

### Version Control
```bash
# Commit changes
git add .
git commit -m "feat: add new feature"

# Create feature branch
git checkout -b feature/new-feature
```

## 📚 Learning Resources

### ES6 Modules
- [MDN: JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [ES6 Import/Export](https://javascript.info/modules-intro)

### Google Calendar API
- [Calendar API Reference](https://developers.google.com/calendar/api/v3/reference)
- [OAuth 2.0 Guide](https://developers.google.com/identity/protocols/oauth2)

### Glassmorphism Design
- [CSS Glass Effect](https://css.glass/)
- [Backdrop Filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)

## 🎓 Best Practices

### Code Quality
✅ Use meaningful variable names
✅ Add JSDoc comments
✅ Handle errors gracefully
✅ Validate user input
✅ Clean up resources

### Architecture
✅ Single responsibility per module
✅ Clear module boundaries
✅ Minimal coupling
✅ Maximum cohesion
✅ Dependency injection

### Performance
✅ Lazy load when possible
✅ Cache API responses
✅ Debounce user input
✅ Clean up timers
✅ Optimize re-renders

## 🐛 Common Issues

### Module Not Found
**Problem**: `Failed to load module`
**Solution**: Check file paths and server is running

### CORS Errors
**Problem**: Cross-origin request blocked
**Solution**: Use HTTP server, not file://

### OAuth Errors
**Problem**: Access blocked/Invalid
**Solution**: Check test users and origins

### Timer Drift
**Problem**: Countdown becomes inaccurate
**Solution**: Calculate from timestamps, not intervals
