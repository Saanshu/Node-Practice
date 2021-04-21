const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();


// /admin/add-product => GET method
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET method
router.get('/products', adminController.getProducts);


// /admin/add-product => POST method
router.post('/add-product', adminController.postAddProduct);

module.exports = router;