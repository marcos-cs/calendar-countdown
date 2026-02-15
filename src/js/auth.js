/**
 * Google API Authentication Module
 * Handles OAuth authentication and token management
 */

import { CONFIG } from './config.js';
import { uiManager } from './ui.js';

class AuthManager {
  constructor() {
    this.tokenClient = null;
    this.accessToken = null;
    this.gapiInited = false;
    this.gisInited = false;
    this.onAuthCallback = null;
  }

  /**
   * Initialize Google API client
   */
  async initGapiClient() {
    try {
      await gapi.client.init({
        apiKey: CONFIG.API_KEY,
        discoveryDocs: [CONFIG.DISCOVERY_DOC],
      });
      this.gapiInited = true;
      this.maybeEnableAuth();
    } catch (error) {
      console.error('Error initializing GAPI client:', error);
      uiManager.showError('Failed to initialize Google API client');
    }
  }

  /**
   * Initialize Google Identity Services
   */
  initGIS() {
    this.tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CONFIG.CLIENT_ID,
      scope: CONFIG.SCOPES,
      callback: '', // Will be set dynamically
    });
    this.gisInited = true;
    this.maybeEnableAuth();
  }

  /**
   * Check if both APIs are initialized and enable authentication
   */
  maybeEnableAuth() {
    if (this.gapiInited && this.gisInited) {
      const connectBtn = document.getElementById('connectBtn');
      
      if (connectBtn) {
        connectBtn.disabled = false;
      }

      // Check if CLIENT_ID is configured
      if (CONFIG.CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID_HERE') {
        uiManager.showSetupInstructions();
        if (connectBtn) {
          connectBtn.disabled = true;
        }
        return;
      }

      // Check for existing token
      this.checkExistingToken();
    }
  }

  /**
   * Check for existing token in localStorage
   */
  checkExistingToken() {
    try {
      const savedToken = localStorage.getItem(CONFIG.TOKEN_KEY);
      if (savedToken) {
        this.accessToken = savedToken;
        gapi.client.setToken({ access_token: this.accessToken });
        
        if (this.onAuthCallback) {
          this.onAuthCallback();
        }
      }
    } catch (error) {
      console.error('Error checking saved token:', error);
    }
  }

  /**
   * Handle authorization
   */
  authorize() {
    return new Promise((resolve, reject) => {
      this.tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) {
          uiManager.showError('Authorization failed: ' + resp.error);
          reject(resp);
          return;
        }

        this.accessToken = resp.access_token;

        // Save token to localStorage
        try {
          localStorage.setItem(CONFIG.TOKEN_KEY, this.accessToken);
        } catch (error) {
          console.error('Error saving token:', error);
        }

        resolve();
      };

      if (this.accessToken === null) {
        // Prompt the user to select a Google Account
        this.tokenClient.requestAccessToken({ prompt: 'consent' });
      } else {
        // Skip account chooser for existing session
        this.tokenClient.requestAccessToken({ prompt: '' });
      }
    });
  }

  /**
   * Sign out
   */
  signOut() {
    this.accessToken = null;

    try {
      localStorage.removeItem(CONFIG.TOKEN_KEY);
    } catch (error) {
      console.error('Error removing token:', error);
    }

    gapi.client.setToken(null);
    uiManager.showInfo('Signed out successfully');
  }

  /**
   * Check if user is authenticated
   * @returns {boolean}
   */
  isAuthenticated() {
    return this.accessToken !== null;
  }

  /**
   * Get access token
   * @returns {string|null}
   */
  getAccessToken() {
    return this.accessToken;
  }

  /**
   * Set callback for when authentication succeeds
   * @param {Function} callback
   */
  setAuthCallback(callback) {
    this.onAuthCallback = callback;
  }
}

// Export singleton instance
export const authManager = new AuthManager();

// Global functions for Google API scripts
window.gapiLoaded = () => {
  gapi.load('client', () => authManager.initGapiClient());
};

window.gisLoaded = () => {
  authManager.initGIS();
};
