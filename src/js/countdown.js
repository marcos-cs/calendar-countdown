/**
 * Countdown Controller Module
 * Manages countdown timer and auto-refresh functionality
 */

import { CONFIG } from './config.js';
import { uiManager } from './ui.js';
import { calendarManager } from './calendar.js';

class CountdownController {
  constructor() {
    this.countdownInterval = null;
    this.autoRefreshInterval = null;
  }

  /**
   * Start the countdown timer
   */
  start() {
    // Clear any existing interval
    this.stop();

    // Initial update
    this.update();

    // Start updating every second
    this.countdownInterval = setInterval(() => {
      this.update();
    }, CONFIG.COUNTDOWN_UPDATE_INTERVAL);
  }

  /**
   * Stop the countdown timer
   */
  stop() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
  }

  /**
   * Update countdown display
   */
  update() {
    const meeting = calendarManager.getNextMeeting();
    if (!meeting) {
      this.stop();
      uiManager.resetCountdown();
      return;
    }

    const timeRemaining = calendarManager.calculateTimeRemaining(meeting);

    if (!timeRemaining) {
      // Meeting has started or passed
      uiManager.showInfo('Meeting is starting now or has already started!');
      this.stop();

      // Fetch next meeting after a short delay
      setTimeout(async () => {
        const nextMeeting = await calendarManager.fetchNextMeeting();
        if (nextMeeting) {
          uiManager.displayMeetingInfo(nextMeeting);
          this.start();
        } else {
          uiManager.resetCountdown();
        }
      }, 3000);

      return;
    }

    uiManager.updateCountdown(timeRemaining);
  }

  /**
   * Start auto-refresh interval
   */
  startAutoRefresh(onRefresh) {
    // Clear any existing interval
    this.stopAutoRefresh();

    this.autoRefreshInterval = setInterval(async () => {
      uiManager.updateRefreshIndicator('Checking for updates...');
      
      if (onRefresh) {
        await onRefresh();
      }

      setTimeout(() => {
        uiManager.updateRefreshIndicator(
          'Auto-refresh: checking for updates every 5 minutes'
        );
      }, 2000);
    }, CONFIG.AUTO_REFRESH_INTERVAL);
  }

  /**
   * Stop auto-refresh interval
   */
  stopAutoRefresh() {
    if (this.autoRefreshInterval) {
      clearInterval(this.autoRefreshInterval);
      this.autoRefreshInterval = null;
    }
  }

  /**
   * Stop all timers
   */
  stopAll() {
    this.stop();
    this.stopAutoRefresh();
  }
}

// Export singleton instance
export const countdownController = new CountdownController();
