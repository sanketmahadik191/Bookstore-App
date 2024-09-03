const Book = require("../models/book.model");
const User = require("../models/user.model");

const getBook = async (req, res, next) => {
  try {
    const books = await Book.find();

    if (!books) {
      throw { statusCode: 404, message: "Books not found" }; // Custom error
    }

    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const getFreeBook = async (req, res, next) => {  
  try {
    const books = await Book.find({ category: 'free' });

    if (!books) {
      throw { statusCode: 404, message: "Books Free Books Available" }; // Custom error
    }
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const addBook = async (req, res, next) => {
  try {
    const { name, image, category,price,description} = req.body;
    console.log(req.body);
    console.log(req.user);
    console.log(45);
    if (!name || !category || !description || !price) {
      return res.status(400).json({
        message: "Missing required fields: name, category, title, or price.",
      });
    }
    const newBook = new Book({
      name,
      image:"",
      category,
      userId:req.user,
      price,
      description,
    });

    await newBook.save();
    res.status(201).json({
      message: "Book added",
      book: newBook,
    });
  } catch (err) {
    next(err);
  }
};

const searchBook = async (req, res, next) => {
  try {
    let query = req.query.q || "";

    const books = await Book.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    });
    if (books.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }

    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

const userBooks = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const books = await Book.find({ userId: id });
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

const viewBooks = async (req, res, next) => {};

const editBooks = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, image, category, price } = req.body;
    console.log(id);

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { name, image, category, price },
      { new: true, runValidators: true } // Options to return the updated document and run validation
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(updatedBook);
  } catch (err) {
    next(err);
  }
};

const addToWishlist = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const bookId = req.body.bookId;

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { wishlist: bookId } }, // $addToSet ensures the book is added only if it's not already in the wishlist
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "Plase login" });
    }

    return res.status(200).json({
      message: "Book added to wishlist",
      wishlist: user.wishlist,
    });
  } catch (error) {
    next(error);
  }
};

const books = { getBook, addBook, searchBook, userBooks, editBooks ,getFreeBook };

module.exports = books;
