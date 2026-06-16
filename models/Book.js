const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a book title'],
  },
  author: {
    type: String,
    required: [true, 'Please provide an author name'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
  },
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
