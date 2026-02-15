/**
 * Calendar API Module
 * Handles fetching and processing calendar events
 */

import { CONFIG } from './config.js';
import { uiManager } from './ui.js';
import { authManager } from './auth.js';

class CalendarManager {
  constructor() {
    this.nextMeeting = null;
  }

  /**
   * Fetch next meeting from Google Calendar
   * @returns {Promise<Object|null>} Next meeting or null
   */
  async fetchNextMeeting() {
    try {
      const now = new Date().toISOString();
      const response = await gapi.client.calendar.events.list({
        'calendarId': CONFIG.CALENDAR_ID,
        'timeMin': now,
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': CONFIG.MAX_RESULTS,
        'orderBy': 'startTime'
      });

      const events = response.result.items;

      if (!events || events.length === 0) {
        uiManager.showWarning('No upcoming meetings found');
        uiManager.displayMeetingInfo({ 
          summary: 'No upcoming meetings', 
          start: {}, 
          end: {} 
        });
        return null;
      }

      // Return the first (next) event
      this.nextMeeting = events[0];
      return this.nextMeeting;

    } catch (error) {
      console.error('Error fetching calendar events:', error);

      if (error.status === 401) {
        uiManager.showError('Authorization expired. Please sign in again.');
        authManager.signOut();
      } else {
        uiManager.showError(
          'Failed to fetch calendar events: ' + 
          (error.result?.error?.message || error.message)
        );
      }

      return null;
    }
  }

  /**
   * Get the currently stored next meeting
   * @returns {Object|null}
   */
  getNextMeeting() {
    return this.nextMeeting;
  }

  /**
   * Clear stored next meeting
   */
  clearNextMeeting() {
    this.nextMeeting = null;
  }

  /**
   * Calculate time remaining until meeting
   * @param {Object} meeting - Meeting object
   * @returns {Object|null} Object with days, hours, minutes, seconds or null if meeting passed
   */
  calculateTimeRemaining(meeting) {
    if (!meeting) return null;

    const startTime = meeting.start.dateTime || meeting.start.date;
    const meetingDate = new Date(startTime);
    const now = new Date();
    const diff = meetingDate - now;

    if (diff <= 0) {
      return null; // Meeting has started or passed
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }
}

// Export singleton instance
export const calendarManager = new CalendarManager();
