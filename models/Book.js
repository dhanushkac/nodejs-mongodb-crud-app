const mongoose = require( 'mongoose' );

// Schema definition
const bookSchema = mongoose.Schema( {
  bookId: {
    type: String,
    requied: true
  },
  name: {
    type: String,
    required: true
  },
  category: String,
  rating: {
    type: Number,
    default: 0.0
  },
  date: {
    type: Date,
    default: Date.now
  },
} );

module.exports = mongoose.model( 'Books', bookSchema );