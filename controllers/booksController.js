function booksController(Book) {
  // eslint-disable-next-line no-unused-vars
  function post(req, res) {
    const book = new Book(req.body);

    book.save();
    return res.status(201).json(book);
  }
}

module.exports = booksController;
