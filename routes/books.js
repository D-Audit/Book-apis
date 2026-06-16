const express = require('express');
const router = express.Router();
const Book = require('../models/Book');


router.post('/', async (req, res) => {
  try {
    const { title, author, price } = req.body;

    if (!title || !author || price === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title, author, and price',
      });
    }

    
    const book = new Book({ title, author, price });
    const savedBook = await book.save();

    res.status(201).json({
      success: true,
      message: 'Book added successfully',
      data: savedBook,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});


router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        message: 'Invalid book ID',
      });
    }
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const { title, author, price } = req.body;


    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, price },
      { new: true, runValidators: true }
    );

    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: book,
    });
  } catch (error) {

    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        message: 'Invalid book ID',
      });
    }
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
      data: book,
    });
  } catch (error) {
    
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        message: 'Invalid book ID',
      });
    }
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
