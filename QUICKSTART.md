# 🚀 Quick Start Guide

Get your Calendar Countdown app running in 5 minutes!

## Prerequisites

- Google account
- Web browser (Chrome, Firefox, Safari, Edge)
- Python 3 (or any HTTP server)

## Step 1: Get Google Calendar API Credentials (5 min)

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com
   - Sign in with your Google account

2. **Create a Project**
   - Click "Select a project" → "New Project"
   - Name it "Calendar Countdown"
   - Click "Create"

3. **Enable Calendar API**
   - Go to "APIs & Services" → "Library"
   - Search for "Google Calendar API"
   - Click on it and click "Enable"

4. **Configure OAuth Consent Screen**
   - Go to "APIs & Services" → "OAuth consent screen"
   - Choose "External" user type
   - Fill in:
     - App name: `Calendar Countdown`
     - User support email: Your email
     - Developer contact: Your email
   - Click "Save and Continue"
   - Skip scopes (click "Save and Continue")
   - **Add Test Users**: Click "Add Users" and add your email
   - Click "Save and Continue"

5. **Create OAuth Credentials**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - Choose "Web application"
   - Name: `Calendar Countdown Web Client`
   - Under "Authorized JavaScript origins":
     - Click "Add URI"
     - Enter: `http://localhost:8000`
   - Click "Create"
   - **Copy your Client ID** (looks like: `123456789-abc...googleusercontent.com`)

## Step 2: Configure the App (30 sec)

1. **Open `js/config.js`**
   
2. **Replace the CLIENT_ID**:
   ```javascript
   export const CONFIG = {
     CLIENT_ID: 'YOUR_CLIENT_ID_HERE', // ← Paste your Client ID here
     // ... rest stays the same
   };
   ```

3. **Save the file**

## Step 3: Run the Server (10 sec)

Open terminal in the `calendar-countdown` folder and run:

```bash
python3 -m http.server 8000
```

You should see:
```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

## Step 4: Open in Browser (5 sec)

Open your browser and go to:
```
http://localhost:8000
```

## Step 5: Connect Your Calendar (15 sec)

1. Click the **"Connect to Google Calendar"** button
2. Choose your Google account
3. Click "Continue" on the authorization screen
4. ✨ Your countdown should now appear!

---

## 🎉 You're Done!

You should now see:
- Your next meeting countdown updating every second
- Meeting title and time
- Beautiful gradient background
- Theme toggle button (top right)

---

## 🔧 Troubleshooting

### Problem: "Access blocked" error

**Solution**: Make sure you added your email as a test user in OAuth consent screen (Step 1.4)

### Problem: "Invalid client" error

**Solution**: Double-check your Client ID in `js/config.js` matches exactly

### Problem: Page doesn't load

**Solution**: Make sure you're using `http://localhost:8000` not `file://`

### Problem: "No upcoming meetings"

**Solution**: Add a test event to your Google Calendar in the future

---

## 🎨 Customize

### Change Colors
Edit `css/styles.css` - look for the gradient:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 100%);
```

### Change Refresh Interval
Edit `js/config.js`:
```javascript
AUTO_REFRESH_INTERVAL: 5 * 60 * 1000, // Change 5 to any number (minutes)
```

### Change Theme
Click the "Theme" button in the top right corner

---

## 📚 Learn More

- **README.md** - Full documentation
- **ARCHITECTURE.md** - Technical deep dive
- **SUMMARY.md** - Implementation details

---

## 🆘 Need Help?

Common issues and solutions:

| Issue | Solution |
|-------|----------|
| Can't access Google Cloud Console | Use account admin privileges |
| OAuth screen setup unclear | Follow Step 1.4 carefully |
| Server won't start | Try `python -m http.server 8000` or use another port |
| Changes don't show | Hard refresh (Ctrl+Shift+R or Cmd+Shift+R) |

---

## ✅ Checklist

- [ ] Created Google Cloud project
- [ ] Enabled Calendar API
- [ ] Configured OAuth consent screen
- [ ] Added test user (your email)
- [ ] Created OAuth credentials
- [ ] Copied Client ID
- [ ] Updated `js/config.js`
- [ ] Started HTTP server
- [ ] Opened browser to localhost:8000
- [ ] Clicked connect button
- [ ] Authorized calendar access
- [ ] Seeing countdown! 🎉

---

**Estimated Total Time**: 5-7 minutes

**Difficulty**: Easy ⭐

**Result**: Working calendar countdown app!
