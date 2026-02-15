/**
 * UI Utilities Module
 * Handles status messages, loading states, and UI element visibility
 */

class UIManager {
  constructor() {
    this.elements = {
      authSection: null,
      countdownSection: null,
      loadingSection: null,
      statusMessage: null,
      setupInstructions: null,
      connectBtn: null,
      signOutBtn: null,
      refreshBtn: null,
      refreshIndicator: null,
      meetingTitle: null,
      meetingTime: null,
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
    };
  }

  /**
   * Initialize UI manager and cache DOM elements
   */
  init() {
    // Cache all DOM elements
    Object.keys(this.elements).forEach(key => {
      const elementId = key.charAt(0).toLowerCase() + key.slice(1);
      this.elements[key] = document.getElementById(elementId);
    });
  }

  /**
   * Show status message
   * @param {string} message - Message to display
   * @param {string} type - Message type: 'info', 'error', 'warning'
   */
  showStatus(message, type = 'info') {
    if (!this.elements.statusMessage) return;

    this.elements.statusMessage.textContent = message;
    this.elements.statusMessage.className = `status-message ${type}`;

    // Auto-hide after 5 seconds
    setTimeout(() => {
      this.hideStatus();
    }, 5000);
  }

  /**
   * Hide status message
   */
  hideStatus() {
    if (this.elements.statusMessage) {
      this.elements.statusMessage.className = 'status-message';
    }
  }

  /**
   * Show error message
   * @param {string} message
   */
  showError(message) {
    this.showStatus(message, 'error');
  }

  /**
   * Show warning message
   * @param {string} message
   */
  showWarning(message) {
    this.showStatus(message, 'warning');
  }

  /**
   * Show info message
   * @param {string} message
   */
  showInfo(message) {
    this.showStatus(message, 'info');
  }

  /**
   * Show authentication section
   */
  showAuthSection() {
    this.elements.authSection?.classList.remove('hidden');
    this.elements.countdownSection?.classList.add('hidden');
    this.elements.loadingSection?.classList.add('hidden');
  }

  /**
   * Show loading section
   */
  showLoadingSection() {
    this.elements.authSection?.classList.add('hidden');
    this.elements.countdownSection?.classList.add('hidden');
    this.elements.loadingSection?.classList.remove('hidden');
  }

  /**
   * Show countdown section
   */
  showCountdownSection() {
    this.elements.authSection?.classList.add('hidden');
    this.elements.loadingSection?.classList.add('hidden');
    this.elements.countdownSection?.classList.remove('hidden');
  }

  /**
   * Show setup instructions
   */
  showSetupInstructions() {
    this.elements.setupInstructions?.classList.remove('hidden');
  }

  /**
   * Hide setup instructions
   */
  hideSetupInstructions() {
    this.elements.setupInstructions?.classList.add('hidden');
  }

  /**
   * Enable button
   * @param {HTMLElement} button
   */
  enableButton(button) {
    if (button) {
      button.disabled = false;
    }
  }

  /**
   * Disable button
   * @param {HTMLElement} button
   */
  disableButton(button) {
    if (button) {
      button.disabled = true;
    }
  }

  /**
   * Update countdown display
   * @param {Object} time - Object containing days, hours, minutes, seconds
   */
  updateCountdown({ days, hours, minutes, seconds }) {
    if (this.elements.days) this.elements.days.textContent = days;
    if (this.elements.hours) this.elements.hours.textContent = hours;
    if (this.elements.minutes) this.elements.minutes.textContent = minutes;
    if (this.elements.seconds) this.elements.seconds.textContent = seconds;
  }

  /**
   * Reset countdown display to zeros
   */
  resetCountdown() {
    this.updateCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  }

  /**
   * Display meeting information
   * @param {Object} meeting - Meeting object with summary, start, end
   */
  displayMeetingInfo(meeting) {
    if (!meeting) return;

    const title = meeting.summary || 'Untitled Meeting';
    const startTime = meeting.start.dateTime || meeting.start.date;
    
    if (this.elements.meetingTitle) {
      this.elements.meetingTitle.textContent = title;
    }

    const startDate = new Date(startTime);
    const formatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    };

    const timeString = startDate.toLocaleString(undefined, formatOptions);
    
    if (this.elements.meetingTime) {
      this.elements.meetingTime.textContent = timeString;
    }
  }

  /**
   * Update refresh indicator text
   * @param {string} text
   */
  updateRefreshIndicator(text) {
    if (this.elements.refreshIndicator) {
      this.elements.refreshIndicator.textContent = text;
    }
  }

  /**
   * Set refresh button state
   * @param {boolean} loading - Whether button is in loading state
   */
  setRefreshButtonState(loading) {
    if (!this.elements.refreshBtn) return;

    this.elements.refreshBtn.disabled = loading;
    this.elements.refreshBtn.textContent = loading ? '🔄 Refreshing...' : '🔄 Refresh Now';
  }
}

// Export singleton instance
export const uiManager = new UIManager();
