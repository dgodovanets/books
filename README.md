## Installation

```bash
$ npm install
```

Rename `src/config/config.example.ts` to `src/config/config.ts`.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Manual test

Post one book
`curl -XPOST -H "Content-type: application/json" -d '{ "books": [{ "author": "J. K. Rowling", "title": "Harry Potter", "pages": 317, "publishedAt": "1997" }] }' 'http://localhost:3000/api/books'`

Post 4 books
`curl -XPOST -H "Content-type: application/json" -d '{ "books": [{ "author": "J. K. Rowling", "title": "Harry Potter: Chamber of Secrets", "pages": 503, "publishedAt": "1998" }, { "author": "J. K. Rowling", "title": "Harry Potter: Prisoner of Azkaban", "pages": 402, "publishedAt": "1999" }, { "author": "J. K. Rowling", "title": "Harry Potter: Goblet of Fire", "pages": 317, "publishedAt": "2000" }, { "author": "J. K. Rowling", "title": "Harry Potter: Order of the Phoenix", "pages": 698, "publishedAt": "2003" }] }' 'http://localhost:3000/api/books'`

Get all books
`curl -XGET 'http://localhost:3000/api/books'`

Get 3 books skipping first
`curl -XGET 'http://localhost:3000/api/books?limit=3&start=1'`

## Test (NOT IMPLEMENTED)

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```