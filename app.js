const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://teguh:JIDYcrb7VOUdegxZ@cppi-shard-00-00-noe9p.mongodb.net:27017,cppi-shard-00-01-noe9p.mongodb.net:27017,cppi-shard-00-02-noe9p.mongodb.net:27017/test?ssl=true&replicaSet=Cppi-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const bookRouter = express.Router();

const port = process.env.PORT || 3000;

const Book = require('./models/bookModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

bookRouter.route('/books')
  .post((req, res) =>{
    const book = new Book(req.body);

    // eslint-disable-next-line no-console
    console.log(book);
    return res.json(book);
  })
  .get((req, res) => {
    // const { query } = req;
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);
    });
  });

bookRouter.route('/books/:bookId')
  .get((req, res) => {
    Book.findById(req.params.bookId, (err, book) => {
      if (err) {
        return res.send(err);
      }
      return res.json(book);
    });
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send(`Wellcome to d API ${port}`);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Hello world! ${port}`);
});
