const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const errorHandler = require("./middlewares/authMiddleware");
const bookRoute = require("./routes/book.route");
const userRoute = require("./routes/user.route");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 10000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
 
  
  .then(() => {
    console.log("conneted to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/book", bookRoute);
app.use("/api/user", userRoute);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
