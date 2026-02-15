#!/bin/bash

# 🚀 Script para Subir Calendar Countdown a GitHub
# Copia y pega estos comandos en tu terminal

# ===================================
# PASO 1: Navega al proyecto
# ===================================
cd /Users/mcsuarez/cursor-ai/demo-cursor-ai/calendar-countdown

# ===================================
# PASO 2: Inicializa Git
# ===================================
git init

# ===================================
# PASO 3: Agrega todos los archivos
# ===================================
git add .

# ===================================
# PASO 4: Primer commit
# ===================================
git commit -m "feat: initial commit - 100% AI generated calendar countdown app

✨ Features:
- Real-time countdown to Google Calendar meetings
- Glassmorphism UI with dark/light theme toggle
- OAuth 2.0 authentication with token persistence
- Auto-refresh every 5 minutes
- Fully responsive design
- Node.js + Vite + Express stack
- Deployed on Vercel with serverless functions

🤖 Generated with:
- Cursor AI (Claude)
- 100% AI-assisted development
- Zero manual coding

🚀 Stack:
- Node.js 18+
- Vite 5.0
- Express 4.18
- Google Calendar API v3
- Vercel deployment"

# ===================================
# PASO 5: Configura la rama main
# ===================================
git branch -M main

# ===================================
# PASO 6: Conecta con GitHub
# ===================================
# ⚠️ IMPORTANTE: Reemplaza 'TU-USUARIO' con tu usuario de GitHub
echo ""
echo "⚠️  IMPORTANTE: Ejecuta este comando manualmente"
echo "Reemplaza 'TU-USUARIO' con tu nombre de usuario de GitHub:"
echo ""
echo "git remote add origin https://github.com/TU-USUARIO/calendar-countdown.git"
echo ""
read -p "Presiona Enter después de crear el repositorio en GitHub y ejecutar el comando anterior..."

# ===================================
# PASO 7: Sube el código
# ===================================
git push -u origin main

# ===================================
# ✅ ¡LISTO!
# ===================================
echo ""
echo "✅ ¡Proyecto subido exitosamente a GitHub!"
echo ""
echo "📋 Próximos pasos:"
echo "1. Ve a tu repositorio en GitHub"
echo "2. Agrega topics: ai-generated, cursor-ai, claude, google-calendar, vite, nodejs"
echo "3. Actualiza la URL de Vercel en README.md (línea 13)"
echo "4. Conecta el repo con Vercel para auto-deploy"
echo ""
echo "🎉 ¡Tu proyecto 100% AI-generado está ahora en GitHub!"
