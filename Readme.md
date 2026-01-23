<div align="center">

![Banner](.github/banner.png)

# ✂️ URL Shortener

**Transform those monster URLs into sleek, shareable links**

[![Made with React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[Live Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 🎯 What's This About?

Ever tried sharing a URL that's longer than your grocery list? Yeah, we've all been there. This project is a clean, modern URL shortener that takes those unwieldy links and turns them into something you can actually remember (or at least copy-paste without breaking a sweat).

Built during late-night coding sessions with way too much coffee ☕

## ✨ Features That Actually Matter

- **Lightning Fast** - Shorten URLs faster than you can say "bit.ly"
- **Clean Dashboard** - See all your shortened links in one place
- **Copy with One Click** - Because who has time for Ctrl+C?
- **Analytics Ready** - Track how many times your links get clicked (coming soon™)
- **Responsive Design** - Works on your phone, tablet, or that ancient laptop you refuse to upgrade
- **Dark Mode** - Because your eyes deserve better

## 🏗️ How It Works

<div align="center">

![Workflow](.github/workflow.png)

</div>

1. **Paste** your ridiculously long URL
2. **Click** the shorten button
3. **Get** a nice, compact link
4. **Share** it anywhere without shame

The magic happens with nanoid generating unique short codes, MongoDB storing everything, and React making it all look pretty.

## 🛠️ Tech Stack

<div align="center">

![Tech Stack](.github/tech-stack.png)

</div>

**Frontend**
- React 19.2 with TypeScript
- Vite for blazing fast builds
- TailwindCSS 4.1 for styling
- React Router for navigation
- Axios for API calls

**Backend**
- Node.js + Express 5
- TypeScript (because we like our types)
- MongoDB with Mongoose
- nanoid for generating short codes
- CORS enabled for cross-origin requests

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:
- Node.js (v18 or higher)
- MongoDB (running locally or a cloud instance)
- npm or yarn (your choice, we don't judge)

### Installation

**1. Clone the repo**
```bash
git clone https://github.com/yourusername/url-shortner.git
cd url-shortner
```

**2. Set up the backend**
```bash
cd server-app
npm install
```

Create a `.env` file in the `server-app` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/url-shortener
NODE_ENV=development
```

**3. Set up the frontend**
```bash
cd ../client-app/url-shortner-app
npm install
```

**4. Fire it up!**

Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd server-app
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client-app/url-shortner-app
npm run dev
```

Visit `http://localhost:5173` and start shortening! 🎉

## 📁 Project Structure

```
url-shortner/
├── client-app/
│   └── url-shortner-app/
│       ├── src/
│       │   ├── components/      # Reusable UI components
│       │   ├── helpers/         # Utility functions
│       │   ├── interface/       # TypeScript interfaces
│       │   └── App.tsx          # Main app component
│       └── package.json
│
├── server-app/
│   ├── src/
│   │   ├── config/              # Database configuration
│   │   ├── controllers/         # Request handlers
│   │   ├── model/               # MongoDB schemas
│   │   ├── routes/              # API routes
│   │   └── server.ts            # Express server setup
│   └── package.json
│
└── README.md                    # You are here!
```

## 🎨 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/shorten` | Create a new short URL |
| `GET` | `/api/urls` | Get all shortened URLs |
| `GET` | `/:shortCode` | Redirect to original URL |
| `DELETE` | `/api/urls/:id` | Delete a shortened URL |

**Example Request:**
```bash
curl -X POST http://localhost:5000/api/shorten \
  -H "Content-Type: application/json" \
  -d '{"originalUrl": "https://example.com/very/long/url"}'
```

**Example Response:**
```json
{
  "shortUrl": "http://localhost:5000/abc123",
  "originalUrl": "https://example.com/very/long/url",
  "shortCode": "abc123"
}
```

## 🤝 Contributing

Found a bug? Have an idea? PRs are welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 To-Do List

- [ ] Add click analytics
- [ ] Custom short codes
- [ ] QR code generation
- [ ] Link expiration dates
- [ ] User authentication
- [ ] Rate limiting
- [ ] Link preview cards

## 🐛 Known Issues

- None yet! (But there probably are some lurking around)

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Questions?

Feel free to reach out or open an issue. I usually respond within 24 hours (unless I'm debugging something really annoying).

---

<div align="center">

**Made with ❤️ and lots of ☕**

If this helped you, consider giving it a ⭐

</div>
