const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Wellcome to my API ${port}`);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Hello world! ${port}`);
});
