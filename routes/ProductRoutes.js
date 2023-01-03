const express = require("express");
const router = express.Router();

const {
  AddProduct,
  FetchAllProduct,
  UpdateProduct,
  DeleteProduct,
} = require("../controllers/ProductController");

router.route("/").get(FetchAllProduct).post(AddProduct);

router.route("/:id").put(UpdateProduct).delete(DeleteProduct);

module.exports = router;
