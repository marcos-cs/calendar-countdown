/**
 * Calendar Countdown - Configuration
 * 
 * Configuration is now loaded from environment variables.
 * 
 * Local Development:
 * 1. Copy .env.example to .env
 * 2. Add your Google Client ID to .env
 * 3. Run `npm run dev`
 * 
 * Production (Vercel):
 * 1. Set VITE_GOOGLE_CLIENT_ID in Vercel environment variables
 * 2. Deploy via `vercel` or git push
 */

export const CONFIG = {
  // Google OAuth Configuration (loaded from environment variables)
  CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID || '384527602669-ogjhra4agiu3jomrvaph9oip854hloeq.apps.googleusercontent.com',
  API_KEY: '', // Optional: Add API key if needed
  SCOPES: 'https://www.googleapis.com/auth/calendar.readonly',
  DISCOVERY_DOC: 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  
  // Storage Keys
  TOKEN_KEY: 'gcal_access_token',
  THEME_KEY: 'calendar-theme',
  
  // Auto-refresh Settings
  AUTO_REFRESH_INTERVAL: 5 * 60 * 1000, // 5 minutes in milliseconds
  COUNTDOWN_UPDATE_INTERVAL: 1000, // 1 second
  
  // Calendar Settings
  CALENDAR_ID: 'primary',
  MAX_RESULTS: 10,
};
