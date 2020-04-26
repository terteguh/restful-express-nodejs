const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log('this is dev');
  const db = mongoose.connect('mongodb://teguh:JIDYcrb7VOUdegxZ@cppi-shard-00-00-noe9p.mongodb.net:27017,cppi-shard-00-01-noe9p.mongodb.net:27017,cppi-shard-00-02-noe9p.mongodb.net:27017/test?ssl=true&replicaSet=Cppi-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
} else {
  // eslint-disable-next-line no-console
  console.log('this is Prod');
  const db = mongoose.connect('mongodb://teguh:JIDYcrb7VOUdegxZ@cppi-shard-00-00-noe9p.mongodb.net:27017,cppi-shard-00-01-noe9p.mongodb.net:27017,cppi-shard-00-02-noe9p.mongodb.net:27017/test1?ssl=true&replicaSet=Cppi-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
}


// const bookRouter = express.Router();

const port = process.env.PORT || 3000;

const Book = require('./models/bookModel');

const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send(`Wellcome to d API ${port}`);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Hello world! ${port}`);
});

module.exports = app;
