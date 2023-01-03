const asynchandler = require("express-async-handler");
const Product = require("../models/ProductModel");

//Fetch all products in the database
const FetchAllProduct = asynchandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

//Adding of a product
const AddProduct = asynchandler(async (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    res.status(400);
    throw new Error("Please all required information");
  }

  const product = await Product.create({
    name,
    description,
    price,
  });

  res.status(200).json({
    message: "Product Is Successfully Added!",
  });
});

//Update Product
const UpdateProduct = asynchandler(async (req, res) => {
  const id = req.params.id;
  const { name, description, price } = req.body;

  if (!id || !name || !description || !price) {
    res.status(400);
    throw new Error("Updating is failed!");
  }

  const updateProduct = await Product.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        name,
        description,
        price,
      },
    }
  );

  res.status(200).json({
    message: "Product Is Successfully Updated!",
  });
});

//Deleting a product
const DeleteProduct = asynchandler(async (req, res) => {
  const id = req.params.id;

  const deleteProduct = await Product.deleteOne({ _id: id });

  res.status(200).json({
    message: "Product is Successfully Deleted!",
  });
});

module.exports = {
  AddProduct,
  FetchAllProduct,
  UpdateProduct,
  DeleteProduct,
};
