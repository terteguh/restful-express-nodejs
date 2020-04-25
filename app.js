const express = require('express');

const app = express();

const bookRouter = express.Router();

const port = process.env.PORT || 3000;

bookRouter.route('/books')
  .get((req, res) => {
    const response = { hello: 'This is API Book'};
    res.json(response);
  });
app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send(`Wellcome to d API ${port}`);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Hello world! ${port}`);
});
