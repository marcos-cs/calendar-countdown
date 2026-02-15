# 🚀 Quick Reference - Node.js Deployment

## 🎯 Start Here

Your Calendar Countdown app is now ready for Node.js deployment!

---

## ⚡ Quick Commands

### Local Development
```bash
cd calendar-countdown
npm install              # First time only
npm run dev              # Start dev server
```
→ Visit http://localhost:3000

### Deploy to Production
```bash
npm install -g vercel    # First time only
vercel --prod            # Deploy to production
```

### Build & Test
```bash
npm run build           # Build for production
npm run preview         # Test production build
```

---

## 📋 Setup Checklist

### Before First Deploy
- [ ] Run `npm install`
- [ ] Test with `npm run dev`
- [ ] Verify app works at localhost:3000
- [ ] Test build with `npm run build`

### After First Deploy
- [ ] Copy Vercel URL (e.g., https://your-app.vercel.app)
- [ ] Go to Vercel Dashboard → Settings → Environment Variables
- [ ] Add `VITE_GOOGLE_CLIENT_ID` = your Google Client ID
- [ ] Redeploy to apply environment variables

### Google OAuth Update
- [ ] Go to Google Cloud Console → Credentials
- [ ] Add Vercel URL to authorized JavaScript origins
- [ ] Test OAuth on production

---

## 🔑 Important Files

| File | What It Does |
|------|--------------|
| `package.json` | Defines project & dependencies |
| `vite.config.js` | Build system configuration |
| `vercel.json` | Deployment settings |
| `.env` | Local environment variables |
| `src/` | Your source code |
| `dist/` | Built files (auto-generated) |

---

## 📚 Full Documentation

| Guide | When to Read |
|-------|--------------|
| [NODEJS-SETUP.md](NODEJS-SETUP.md) | Start here! Quick overview |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Complete deployment guide |
| [README.md](README.md) | Project documentation |
| [IMPLEMENTATION-COMPLETE.md](IMPLEMENTATION-COMPLETE.md) | What was built |

---

## 🆘 Troubleshooting

### npm install fails
```bash
# macOS: Fix Node.js dependencies
brew reinstall icu4c

# Or try different Node version
nvm use 20
npm install
```

### Dev server won't start
```bash
# Clear and reinstall
rm -rf node_modules dist
npm install
npm run dev
```

### Deployment errors
1. Check Vercel logs in dashboard
2. Verify environment variables set
3. Test locally: `npm run build && npm run preview`

### Google OAuth errors
1. Add Vercel URL to authorized origins
2. Verify Client ID in Vercel environment variables
3. Check test user added in OAuth consent screen

---

## 💡 Tips

- Always `npm run build` before deploying
- Use `npm run dev` for hot reload during development
- Check Vercel dashboard for deployment status
- Environment variables require redeploy to take effect

---

## 🎯 Deployment Flow

```
1. Code → 2. Test → 3. Build → 4. Deploy → 5. Configure
   ↓         ↓          ↓          ↓            ↓
npm run   npm run   npm run    vercel     Set env vars
  dev       build     preview   --prod     in Vercel
```

---

## ✅ Success Indicators

You're ready when you see:
- ✅ `npm run dev` opens app at localhost:3000
- ✅ `npm run build` completes without errors
- ✅ `vercel --prod` deploys successfully
- ✅ Production app loads at Vercel URL
- ✅ Google OAuth works on production

---

**Quick Start Time:** 5 minutes
**Current Version:** 2.0.0 (Node.js + Vercel)
**Status:** ✅ Ready to Deploy
