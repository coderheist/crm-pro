# 🚀 Vercel Environment Variables Setup

## Required Environment Variables for Vercel

Go to your Vercel project dashboard → Settings → Environment Variables and add these:

### Database
```
MONGODB_URI=mongodb+srv://jainarchit088:Password123@crm-pro.rtnay3k.mongodb.net/?retryWrites=true&w=majority&appName=crm-pro
```

### JWT Secret
```
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random-123456789
```

### Firebase Configuration
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBDlqbuTHskCiadBNfV0X23QTrKGYk9Muo
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=crm-heist.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=crm-heist
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=crm-heist.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=225081639985
NEXT_PUBLIC_FIREBASE_APP_ID=1:225081639985:web:76410e794a80c2a4d58110
```

### Application URL (update after deployment)
```
NEXT_PUBLIC_APP_URL=https://your-project-name.vercel.app
```

## Steps:
1. ✅ Code pushed to GitHub (main branch)
2. ⏳ Add environment variables in Vercel dashboard
3. ⏳ Redeploy from Vercel dashboard
4. ⏳ Update Firebase authorized domains with your Vercel URL

## Firebase Setup
After deployment, add your Vercel domain to Firebase:
1. Go to Firebase Console → Authentication → Settings
2. Add your Vercel domain to "Authorized domains"
3. Example: `your-project-name.vercel.app`

Your deployment should work after adding these environment variables! 🎉
