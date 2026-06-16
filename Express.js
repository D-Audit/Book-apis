const express = require('express');
require('dotenv').config();
const connectDB = require('./config/database');
const booksRouter = require('./routes/books');


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api/books', booksRouter);

app.get('/', (req, res) => {
  res.json({
    message: '✓ Welcome to Mugisha\'s Bookstore API in Kigali',
    version: '1.0.0',
    endpoints: {
      createBook: 'POST /api/books',
      getAllBooks: 'GET /api/books',
      getBookById: 'GET /api/books/:id',
      updateBook: 'PUT /api/books/:id',
      deleteBook: 'DELETE /api/books/:id',
    },
  });
});


app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('');
  console.log('╔══════════════════════════════════════════╗');
  console.log('║  🏪 MUGISHA\'S BOOKSTORE API              ║');
  console.log('╠══════════════════════════════════════════╣');
  console.log(`║  ✓ Server running on port ${PORT}           ║`);
  console.log('║  ✓ MongoDB connected                     ║');
  console.log('║  📚 Ready to manage books in Kigali!      ║');
  console.log('╚══════════════════════════════════════════╝');
  console.log('');
  console.log(`Open: http://localhost:${PORT}`);
  console.log('');
});
