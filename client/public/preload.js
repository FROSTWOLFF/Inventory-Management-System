const { contextBridge, ipcRenderer } = require('electron');
const sequelize = require('../database/database');
const Product = require('../database/models/Product');

sequelize.sync().then(() => console.log('Database is ready'));

contextBridge.exposeInMainWorld('electron', {
  doThing: () => ipcRenderer.send('msg', 'Hello from render process'),
});

contextBridge.exposeInMainWorld('db', {
  createProduct: productData => {
    Product.create(productData);
  },

  findAll: (options = {}) => Product.findAll(options),
});
