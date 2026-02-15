/**
 * Calendar Countdown - Main Application
 * Orchestrates all modules and handles user interactions
 */

import { CONFIG } from './config.js';
import { themeManager } from './theme.js';
import { uiManager } from './ui.js';
import { authManager } from './auth.js';
import { calendarManager } from './calendar.js';
import { countdownController } from './countdown.js';

class CalendarCountdownApp {
  constructor() {
    this.initialized = false;
  }

  /**
   * Initialize the application
   */
  async init() {
    if (this.initialized) return;

    // Initialize all managers
    themeManager.init();
    uiManager.init();

    // Set up event listeners
    this.setupEventListeners();

    // Set auth callback
    authManager.setAuthCallback(() => this.handleAuthSuccess());

    // Wait for Google API scripts to load
    await this.waitForGoogleAPIs();

    this.initialized = true;
  }

  /**
   * Wait for Google API scripts to load
   */
  async waitForGoogleAPIs() {
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (typeof gapi !== 'undefined' && typeof google !== 'undefined') {
          clearInterval(checkInterval);
          
          // Initialize APIs
          if (typeof window.gapiLoaded === 'function') {
            window.gapiLoaded();
          }
          
          if (typeof window.gisLoaded === 'function') {
            window.gisLoaded();
          }
          
          resolve();
        }
      }, 100);

      // Timeout after 10 seconds
      setTimeout(() => {
        clearInterval(checkInterval);
        if (!authManager.gapiInited || !authManager.gisInited) {
          uiManager.showError('Failed to load Google API scripts. Please refresh the page.');
        }
        resolve();
      }, 10000);
    });
  }

  /**
   * Set up event listeners
   */
  setupEventListeners() {
    const connectBtn = document.getElementById('connectBtn');
    const signOutBtn = document.getElementById('signOutBtn');
    const refreshBtn = document.getElementById('refreshBtn');

    connectBtn?.addEventListener('click', () => this.handleConnect());
    signOutBtn?.addEventListener('click', () => this.handleSignOut());
    refreshBtn?.addEventListener('click', () => this.handleRefresh());
  }

  /**
   * Handle connect button click
   */
  async handleConnect() {
    try {
      await authManager.authorize();
      await this.handleAuthSuccess();
    } catch (error) {
      console.error('Authorization error:', error);
    }
  }

  /**
   * Handle successful authentication
   */
  async handleAuthSuccess() {
    uiManager.showLoadingSection();
    await this.fetchAndDisplayMeeting();
  }

  /**
   * Fetch and display next meeting
   */
  async fetchAndDisplayMeeting() {
    const meeting = await calendarManager.fetchNextMeeting();

    if (meeting) {
      uiManager.showCountdownSection();
      uiManager.displayMeetingInfo(meeting);
      countdownController.start();
      countdownController.startAutoRefresh(() => this.fetchAndDisplayMeeting());
    } else {
      uiManager.showCountdownSection();
      uiManager.resetCountdown();
    }
  }

  /**
   * Handle sign out
   */
  handleSignOut() {
    authManager.signOut();
    countdownController.stopAll();
    calendarManager.clearNextMeeting();
    uiManager.showAuthSection();
  }

  /**
   * Handle manual refresh
   */
  async handleRefresh() {
    uiManager.setRefreshButtonState(true);

    try {
      await this.fetchAndDisplayMeeting();
      uiManager.showInfo('Calendar refreshed');
    } catch (error) {
      console.error('Refresh error:', error);
      uiManager.showError('Failed to refresh calendar');
    } finally {
      uiManager.setRefreshButtonState(false);
    }
  }
}

// Create and initialize app when DOM is ready
const app = new CalendarCountdownApp();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}

// Export for debugging
window.calendarApp = app;
