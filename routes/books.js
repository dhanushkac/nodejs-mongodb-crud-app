const express = require( 'express' );
const router = express.Router();

const Book = require( '../models/Book' );

router.get( '/', async ( req, res ) => {
  try {
    const data = await Book.find();
    res.json( data );
  } catch ( err ) {
    res.status( 500 ).send( err );
  }
} );

router.get( '/top', async ( req, res ) => {
  try {
    const data = await Book.find( { rating: { $gt: 4.5 } } );
    res.json( data );
  } catch ( err ) {
    res.status( 500 ).send( err );
  }
} );

router.get( '/:bookId', async ( req, res ) => {
  try {
    const data = await Book.find( { bookId: req.params.bookId } );
    res.json( data );
  } catch ( err ) {
    res.status( 500 ).send( err );
  }
} );

router.post( '/', async ( req, res ) => {
  const book = new Book( {
    name: req.body.name,
    category: req.body.category,
    rating: req.body.rating,
    bookId: req.body.bookId
  } );

  try {
    const data = await book.save();
    res.json( data );
  } catch ( err ) {
    res.status( 500 ).send( err );
  }
} );

router.delete( '/:bookId', async ( req, res ) => {
  try {
    const data = await Book.deleteOne( { bookId: req.params.bookId } );
    res.json( data );
  } catch ( err ) {
    res.status( 500 ).send( err );
  }
} );

router.put( '/:bookId', async ( req, res ) => {
  try {
    const data = await Book.updateOne( { bookId: req.params.bookId }, {
      $set: {
        ...req.body
      }
    } );
    res.json( data );
  } catch ( err ) {
    res.status( 500 ).send( err );
  }
} );

module.exports = router;