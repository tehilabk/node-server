const Express = require('express');

const Middleware = require('./middlewares');
const Product = require('../models/product');
const { error } = require('console');

const router = Express.Router();
router.use(Middleware.errorMiddleware);

// GET operation - retrieve a specific product by ID
router.get('/products/:id', async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      console.error("Product not found");
      return res.status(400).send('Product not found');
    }
    res.status(200).send(product);
  } catch (error) {
    console.error('Error retrieving product:', error);
    next(error);
  }
});

// GET operation - retrieve all products
router.get('/products', (req, res, next) => {
  Product.find({})
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((error) => {
      console.error('Error retrieving products:', error);
      next(error);
    });
});

// POST operation - create a new product
router.post('/products', Middleware.validatePostSchema, async (req, res, next) => {
  try {
    console.log("Received a new POST /products request", req.body)
    const newProduct = req.body;
    const product = await Product.create(newProduct)
    console.log("Successfully created a product");
    res.status(200).send(product);
  } catch (error) {
    console.error('Error creating product:', error);
    next(error);
  }
});


// DELETE operation - delete a product
router.delete('/products/:id', async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      console.error("Product not found");
      return res.status(400).send('Product not found');
    }
    console.log("product deleted:", result);
    res.status(200).send('Product deleted');
  } catch (error) {
    console.error('Error deleting product:', error);
    next(error);
  }
});

// UPDATE operation - update a product
router.put('/products/:id', async (req, res, next) => {
  try {
    const productId = req.params.id;
    const updatedProduct = req.body;
    if (!productId) {
      console.error("Product not found");
      return res.status(400).send('Product not found');
    }
    const products = await Product.findByIdAndUpdate(productId, updatedProduct, { new: true })
    res.status(200).send(products);
  } catch (error) {
    console.error('Error updating product:', error);
    next(error);
  }
});


module.exports = router;