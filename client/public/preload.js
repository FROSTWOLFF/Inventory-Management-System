const { contextBridge } = require('electron');
const sequelize = require('../database/database');
const Product = require('../database/models/Product');

sequelize.sync().then(() => console.log('Database is ready'));

contextBridge.exposeInMainWorld('db', {
  createProduct: productData => {
    Product.create(productData);
  },

  findAll: (options = {}) => Product.findAll(options),
  getAttributes: () => Product.getAttributes(),
});
