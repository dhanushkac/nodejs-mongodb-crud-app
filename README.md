# NodeJS MongoDB Example CRUD app

This sample project explains how to create REST API using node.js with mongoDB. 🍃

## Development

Create `.env` file in the root directory.

Add the mongoDB connection URI as `DB_URI` as follows.

```
DB_URI=<your url goes here>
```

Then install the dependencies.

```
npm install
```

### Run with dev

This command executes with nodemon.

```
npm run dev
```

### Endpoints

Fetch all books

```
GET /books
```

Fetch a book

```
GET /books/:bookId
```

Add a book

```
POST /books
```

```JSON
{
        "rating": 4.9,
        "name": "The Hobbit X",
        "category": "Action",
        "bookId": "OLKA-1"
}
```

Update a book

```
PUT /books/:bookId
```

```JSON
{
    "rating": 4.6
}
```

Delete a book

```
DELETE /books/:bookId
```

Fetch top books

```
GET /books/top
```

## <br>

Developed with 🧡 by [Dhanushka](http://dhanushka.dev/)
