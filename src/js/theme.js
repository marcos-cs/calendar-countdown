/**
 * Theme Manager Module
 * Handles light/dark theme switching with localStorage persistence
 */

import { CONFIG } from './config.js';

class ThemeManager {
  constructor() {
    this.themeToggle = null;
    this.themeLabel = null;
    this.iconSun = null;
    this.iconMoon = null;
  }

  /**
   * Initialize theme manager
   */
  init() {
    this.themeToggle = document.getElementById('themeToggle');
    this.themeLabel = this.themeToggle?.querySelector('.theme-label');
    this.iconSun = this.themeToggle?.querySelector('.icon-sun');
    this.iconMoon = this.themeToggle?.querySelector('.icon-moon');

    // Set up event listener
    this.themeToggle?.addEventListener('click', () => this.toggle());

    // Initialize theme from localStorage or system preference
    this.initTheme();
  }

  /**
   * Check if dark theme is active
   * @returns {boolean}
   */
  isDark() {
    return document.body.classList.contains('dark-theme');
  }

  /**
   * Apply theme
   * @param {boolean} dark - Whether to apply dark theme
   */
  applyTheme(dark) {
    document.body.classList.toggle('dark-theme', dark);
    
    if (this.themeLabel) {
      this.themeLabel.textContent = dark ? 'Light' : 'Dark';
    }
    
    if (this.iconSun) {
      this.iconSun.style.display = dark ? 'none' : 'block';
    }
    
    if (this.iconMoon) {
      this.iconMoon.style.display = dark ? 'block' : 'none';
    }
    
    if (this.themeToggle) {
      this.themeToggle.setAttribute(
        'aria-label',
        dark ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }

    // Update gradient for dark theme
    if (dark) {
      document.body.style.background = 
        'linear-gradient(135deg, #1e3a8a 0%, #581c87 25%, #7c2d12 50%, #0c4a6e 100%)';
    } else {
      document.body.style.background = 
        'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 100%)';
    }

    // Save to localStorage
    try {
      localStorage.setItem(CONFIG.THEME_KEY, dark ? 'dark' : 'light');
    } catch (error) {
      console.warn('Failed to save theme preference:', error);
    }
  }

  /**
   * Toggle theme
   */
  toggle() {
    this.applyTheme(!this.isDark());
  }

  /**
   * Initialize theme from saved preference or system default
   */
  initTheme() {
    try {
      const saved = localStorage.getItem(CONFIG.THEME_KEY);
      
      if (saved === 'dark') {
        this.applyTheme(true);
      } else if (saved === 'light') {
        this.applyTheme(false);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.applyTheme(true);
      }
    } catch (error) {
      console.warn('Failed to load theme preference:', error);
    }
  }
}

// Export singleton instance
export const themeManager = new ThemeManager();
