const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://teguh:JIDYcrb7VOUdegxZ@cppi-shard-00-00-noe9p.mongodb.net:27017,cppi-shard-00-01-noe9p.mongodb.net:27017,cppi-shard-00-02-noe9p.mongodb.net:27017/test?ssl=true&replicaSet=Cppi-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const bookRouter = express.Router();

const port = process.env.PORT || 3000;

const Book = require('./models/bookModel');

bookRouter.route('/books')
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
app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send(`Wellcome to d API ${port}`);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Hello world! ${port}`);
});
