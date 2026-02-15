# Deployment Guide for Calendar Countdown

Complete guide for deploying the Calendar Countdown app to Vercel.

## Prerequisites

- Node.js 18+ installed
- Vercel account (free tier works)
- Google Cloud Console project with Calendar API enabled
- Git repository (optional but recommended)

## Quick Deployment

### 1. Install Vercel CLI (Optional)

```bash
npm install -g vercel
```

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# From the calendar-countdown directory
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? calendar-countdown (or your choice)
# - Directory? ./ (current directory)
# - Override settings? No

# Deploy to production
vercel --prod
```

#### Option B: Using GitHub Integration

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: setup Node.js deployment"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your Git repository
5. Vercel will auto-detect settings
6. Click "Deploy"

## Environment Variables Configuration

### Step 1: Get Your Deployment URL

After first deployment, Vercel will give you a URL like:
```
https://calendar-countdown-abc123.vercel.app
```

### Step 2: Update Google OAuth Settings

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Navigate to "APIs & Services" → "Credentials"
3. Click on your OAuth 2.0 Client ID
4. Under "Authorized JavaScript origins", add:
   ```
   https://calendar-countdown-abc123.vercel.app
   ```
   (Replace with your actual Vercel URL)
5. Click "Save"

### Step 3: Set Environment Variables in Vercel

1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Settings" → "Environment Variables"
3. Add the following variables:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `VITE_GOOGLE_CLIENT_ID` | Your Google OAuth Client ID | Production, Preview, Development |
| `NODE_ENV` | `production` | Production |

4. Click "Save"
5. Redeploy the project for changes to take effect

## Local Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Edit `.env` and add your Google Client ID:
```env
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
NODE_ENV=development
PORT=3001
```

### 3. Update Google OAuth for Local Development

Add `http://localhost:3000` to authorized JavaScript origins in Google Cloud Console.

### 4. Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### 5. Test Production Build

```bash
# Build the app
npm run build

# Preview the build
npm run preview
```

## Project Structure for Deployment

```
calendar-countdown/
├── package.json           # Node.js project configuration
├── vite.config.js         # Vite bundler settings
├── vercel.json            # Vercel deployment config
├── .env                   # Local environment variables (gitignored)
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore patterns
├── server.js              # Express server (for local dev)
├── api/                   # Vercel serverless functions
│   ├── config.js          # Config API endpoint
│   └── health.js          # Health check endpoint
├── src/                   # Source files
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── [modules]
└── dist/                  # Build output (auto-generated)
```

## Deployment Checklist

- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file configured with Google Client ID
- [ ] Google Calendar API enabled
- [ ] OAuth consent screen configured
- [ ] Test users added to OAuth consent screen
- [ ] Local development tested (`npm run dev`)
- [ ] Production build tested (`npm run build` && `npm run preview`)
- [ ] Deployed to Vercel
- [ ] Environment variables set in Vercel dashboard
- [ ] Google OAuth origins updated with Vercel URL
- [ ] Production app tested and working

## Build Process

When you deploy, Vercel automatically runs:

```bash
npm install           # Install dependencies
npm run vercel-build  # Build with Vite (generates dist/)
```

The `dist/` folder contains:
- Minified HTML
- Optimized CSS
- Bundled and tree-shaken JavaScript
- Static assets

## API Endpoints

Your deployed app will have these endpoints:

### `/api/config`
Returns the Google Client ID and environment info.

**Example:**
```bash
curl https://your-app.vercel.app/api/config
```

**Response:**
```json
{
  "clientId": "your-client-id",
  "environment": "production"
}
```

### `/api/health`
Health check endpoint for monitoring.

**Example:**
```bash
curl https://your-app.vercel.app/api/health
```

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "environment": "production",
  "version": "2.0.0",
  "platform": "vercel"
}
```

## Custom Domain (Optional)

### Add Custom Domain

1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Domains"
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait for DNS propagation (usually minutes)

### Update Google OAuth

After adding custom domain:
1. Add `https://yourdomain.com` to authorized JavaScript origins
2. Redeploy if needed

## Monitoring

### Vercel Analytics

Enable in Vercel Dashboard → Your Project → Analytics

### Check Deployment Logs

```bash
vercel logs <deployment-url>
```

Or view in Vercel Dashboard → Your Project → Deployments → Click deployment → Logs

## Troubleshooting

### Build Fails

**Problem:** Build errors during deployment

**Solutions:**
- Check build logs in Vercel dashboard
- Ensure `package.json` has correct scripts
- Verify all dependencies are listed
- Test build locally: `npm run build`

### "Invalid Client" Error

**Problem:** Google OAuth shows "Invalid client" error

**Solutions:**
- Verify Client ID in Vercel environment variables
- Check authorized JavaScript origins include your Vercel URL
- Ensure no typos in Client ID
- Redeploy after changing environment variables

### Environment Variables Not Working

**Problem:** App can't access environment variables

**Solutions:**
- Ensure variables are prefixed with `VITE_` for client-side access
- Check variables are set for correct environment (Production/Preview/Development)
- Redeploy after adding/changing variables
- Clear browser cache

### API Routes 404

**Problem:** `/api/*` routes return 404

**Solutions:**
- Check `vercel.json` is properly configured
- Ensure `api/` folder exists with function files
- Verify function exports are correct
- Check Vercel deployment logs

## Performance Optimization

### Enable Compression

Vercel automatically enables:
- Brotli compression
- HTTPS/2
- Edge caching
- Automatic CDN distribution

### Monitor Performance

- Use Vercel Analytics
- Check Web Vitals in dashboard
- Monitor function execution times

## Security Best Practices

1. **Never commit `.env` file**
   - Already in `.gitignore`
   - Use Vercel environment variables for production

2. **Use HTTPS only**
   - Vercel provides automatic HTTPS
   - Enforce HTTPS in Google OAuth settings

3. **Limit OAuth scopes**
   - Currently using `calendar.readonly` (read-only)
   - Don't request unnecessary permissions

4. **Keep dependencies updated**
   ```bash
   npm outdated
   npm update
   ```

## Cost

Vercel Free Tier includes:
- 100 GB bandwidth
- Unlimited static requests
- 100 GB-hours serverless function execution
- Automatic HTTPS
- Preview deployments

This is sufficient for most personal use cases.

## Rollback

If something goes wrong:

```bash
# List deployments
vercel ls

# Promote a previous deployment to production
vercel promote <deployment-url>
```

Or use Vercel Dashboard → Deployments → Click ⋯ → Promote to Production

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Google Calendar API](https://developers.google.com/calendar)
- [Express.js Guide](https://expressjs.com/)

## Support

For issues:
1. Check deployment logs in Vercel
2. Review Google Cloud Console logs
3. Test locally with `npm run dev`
4. Check browser console for errors

---

**Last Updated:** 2026-02-13
**Version:** 2.0.0
