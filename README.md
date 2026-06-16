# 📚 Mugisha's Bookstore API

A simple REST API for managing books in Mugisha's bookstore in Kigali, built with Express.js, MongoDB, and Mongoose.

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root folder:
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.sgtantr.mongodb.net/bookstore?appName=Cluster0
PORT=3000
```

### 4. Run the server
```bash
# Development
npm run dev

# Production
npm start
```

Server runs at: `http://localhost:3000`

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/books` | Add a new book |
| GET | `/api/books` | Get all books |
| GET | `/api/books/:id` | Get a single book by ID |
| PUT | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |

---

## 📝 Example Requests

### Add a Book
```
POST /api/books
Content-Type: application/json

{
  "title": "Things Fall Apart",
  "author": "Chinua Achebe",
  "price": 12.99
}
```

### Get All Books
```
GET /api/books
```

### Get One Book
```
GET /api/books/:id
```

### Update a Book
```
PUT /api/books/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "author": "Updated Author",
  "price": 15.00
}
```

### Delete a Book
```
DELETE /api/books/:id
```

---

## 📁 Project Structure

```
mugisha-bookstore/
├── config/
│   └── database.js      # MongoDB connection
├── models/
│   └── Book.js          # Book schema
├── routes/
│   └── books.js         # API routes
├── Express.js           # Main server file
├── .env                 # Environment variables (not pushed)
├── .env.example         # Environment template
└── package.json
```

---

**Built for Mugisha's Bookstore in Kigali 🇷🇼**