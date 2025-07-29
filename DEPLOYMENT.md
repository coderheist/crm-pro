# Production Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - No OneDrive Issues)
1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Production ready CRM"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to https://vercel.com
   - Connect your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy automatically

### Option 2: Local Production Build (OneDrive Workaround)
If you need to build locally, move your project outside OneDrive:

```bash
# Copy project to C:\dev (outside OneDrive)
xcopy "C:\Users\DELL\OneDrive\Desktop\india-ecommerce-crm" "C:\dev\india-ecommerce-crm" /E /I /Y

# Navigate to new location
cd C:\dev\india-ecommerce-crm

# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm run start
```

### Option 3: Docker Deployment
```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 🔧 Environment Variables for Production

Create these in your deployment platform:

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/crm-db

# Authentication
JWT_SECRET=your-super-secure-jwt-secret-here

# Firebase (get from Firebase Console)
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef

# Environment
NODE_ENV=production
```

## ✅ Pre-Deployment Checklist

- [x] Remove console.logs
- [x] Remove unused components
- [x] Environment variables configured
- [x] Database connection tested
- [x] Firebase authentication setup
- [x] Build configuration optimized
- [x] .gitignore updated
- [x] README documentation complete

## 🌐 Recommended Hosting Platforms

1. **Vercel** - Best for Next.js (no build issues)
2. **Netlify** - Good alternative
3. **Railway** - Simple deployment
4. **DigitalOcean App Platform** - Reliable hosting
5. **AWS Amplify** - Enterprise scale

## 🔍 Testing Production Build

If you move outside OneDrive:
```bash
npm run build
npm run start
# Test at http://localhost:3000
```

Your application is production-ready! 🎉
