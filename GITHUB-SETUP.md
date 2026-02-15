# 🚀 Subir a GitHub - Guía Rápida

## 📋 Archivos Preparados

✅ **README.md** - README profesional para GitHub
✅ **LICENSE** - Licencia MIT
✅ **.gitignore** - Archivos a ignorar
✅ **.github/AI-GENERATED.md** - Documentación sobre generación con IA

## 🎯 Pasos para Subir a GitHub

### 1. Inicializa Git (si no lo has hecho)

```bash
cd /Users/mcsuarez/cursor-ai/demo-cursor-ai/calendar-countdown
git init
```

### 2. Agrega los Archivos

```bash
git add .
git commit -m "feat: initial commit - 100% AI generated calendar countdown app

- Real-time countdown to Google Calendar meetings
- Glassmorphism UI design with dark/light theme
- OAuth 2.0 authentication
- Auto-refresh functionality
- Deployed on Vercel with Node.js + Vite
- 100% generated with Cursor AI (Claude)
- Zero manual coding"
```

### 3. Crea el Repositorio en GitHub

**Opción A: Desde la Web**
1. Ve a [github.com/new](https://github.com/new)
2. Nombre: `calendar-countdown`
3. Descripción: `🤖 AI-Generated: Real-time countdown to your next Google Calendar meeting | 100% created with Cursor AI`
4. **NO** inicialices con README, .gitignore o license (ya los tenemos)
5. Haz clic en "Create repository"

**Opción B: Desde CLI (requiere GitHub CLI)**
```bash
gh repo create calendar-countdown --public --description "🤖 AI-Generated: Real-time countdown to your next Google Calendar meeting"
```

### 4. Conecta y Sube

```bash
# Conecta con tu repositorio (reemplaza con tu usuario)
git remote add origin https://github.com/TU-USUARIO/calendar-countdown.git

# Renombra la rama a main
git branch -M main

# Sube el código
git push -u origin main
```

## 🎨 Personaliza tu README

Antes de subir, actualiza estos valores en `README.md`:

1. **Línea 13:** Cambia `https://your-app.vercel.app` por tu URL de Vercel
2. **Línea 13:** Actualiza el link de "Report Bug" si quieres
3. **Línea 71 y 74:** Reemplaza los placeholders de imágenes con screenshots reales
4. **Línea 87:** Cambia `your-username` por tu usuario de GitHub

## 📸 Agregar Screenshots (Opcional)

1. Toma screenshots de tu app
2. Crea una carpeta `screenshots/` o `.github/images/`
3. Sube las imágenes
4. Actualiza las URLs en el README:
   ```markdown
   ![Desktop Preview](./screenshots/desktop.png)
   ![Mobile Preview](./screenshots/mobile.png)
   ```

## 🏷️ Agrega Topics en GitHub

Después de crear el repo, agrega estos topics:

```
ai-generated
cursor-ai
claude
google-calendar
countdown-timer
vite
nodejs
vercel
oauth2
glassmorphism
calendar-api
serverless
```

## 📌 Configura GitHub Pages (Opcional)

Para documentación adicional:

1. Settings → Pages
2. Source: Deploy from branch `main`
3. Folder: `/docs`

## 🎯 Badges Sugeridos

Ya incluí estos badges en el README:
- ✅ Status (Live/Demo)
- ✅ AI Generated 100%
- ✅ Node.js version
- ✅ Vite version
- ✅ Deployed on Vercel

## 🔗 Conecta con Vercel

Después de subir a GitHub:

1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Import Project → Import Git Repository
3. Selecciona tu repo de GitHub
4. Vercel auto-detectará la configuración
5. ¡Auto-deploy en cada push!

## ✨ Resultado Final

Tu repositorio tendrá:

```
📦 calendar-countdown/
├── 📄 README.md          ← README profesional con badges
├── 📄 LICENSE            ← Licencia MIT
├── 📁 .github/           ← Metadata de AI
│   └── AI-GENERATED.md
├── 📁 src/               ← Código fuente
├── 📁 api/               ← Serverless functions
├── 📄 package.json
├── 📄 vite.config.js
├── 📄 vercel.json
└── 📚 docs/              ← Documentación completa
```

## 🎉 ¡Listo!

Ahora tu proyecto estará en GitHub con:
- ✅ README profesional
- ✅ Badges llamativos
- ✅ Documentación completa
- ✅ Destacando que es 100% AI-generated
- ✅ Auto-deploy configurado

---

**Comando Completo:**

```bash
cd /Users/mcsuarez/cursor-ai/demo-cursor-ai/calendar-countdown
git init
git add .
git commit -m "feat: initial commit - 100% AI generated app"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/calendar-countdown.git
git push -u origin main
```

¡Eso es todo! 🚀
