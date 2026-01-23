# Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

### Step 1: Clone & Install
```bash
git clone https://github.com/yourusername/url-shortner.git
cd url-shortner
```

### Step 2: Setup MongoDB
Make sure MongoDB is running on your machine:
```bash
# Check if MongoDB is running
mongosh

# Or start MongoDB service
# Windows: net start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod
```

### Step 3: Backend Setup
```bash
cd server-app
npm install

# Create .env file
echo "PORT=5000
MONGODB_URI=mongodb://localhost:27017/url-shortener
NODE_ENV=development" > .env

# Start the server
npm run dev
```

Server should be running on `http://localhost:5000` ✅

### Step 4: Frontend Setup
Open a new terminal:
```bash
cd client-app/url-shortner-app
npm install

# Start the dev server
npm run dev
```

Frontend should be running on `http://localhost:5173` ✅

### Step 5: Test It Out!
1. Open `http://localhost:5173` in your browser
2. Paste a long URL
3. Click "Shorten"
4. Copy and share your new short link!

## 🔧 Common Issues

**MongoDB Connection Error?**
- Make sure MongoDB is running
- Check your `MONGODB_URI` in `.env`

**Port Already in Use?**
- Change the port in `.env` (backend) or `vite.config.ts` (frontend)

**Dependencies Not Installing?**
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
- Make sure you're using Node.js v18 or higher

## 📚 Next Steps

- Check out the [full README](README.md) for detailed documentation
- Read the [Contributing Guide](CONTRIBUTING.md) to start contributing
- Explore the API endpoints and build something cool!

---

**Happy shortening! ✂️**
