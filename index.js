const express = require( 'express' );
const mongoose = require( 'mongoose' );
require( 'dotenv/config' );

const app = express();
app.use( express.json() );

const PORT = process.env.PORT || 3000;

// Book Router
const bookRouter = require( './routes/books' );

app.get( "/", ( req, res ) => {
  res.json( { "message": "Success" } );
} );

app.use( "/books", bookRouter );

// MongoDB connection
mongoose.connect( process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log( 'Connected to mongoDB' );
} );

app.listen( PORT, () => {
  console.log( `Node mongo app is listening on ${ PORT }` );
} );