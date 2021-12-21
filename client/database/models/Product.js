const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database.js');

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    addedIn: {
      type: DataTypes.STRING,
    },
    modified: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: 'product', timestamps: false }
);

module.exports = Product;
