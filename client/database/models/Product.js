const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database.js');

class Product extends Model {}

Product.init(
  {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: 'product' }
);

module.exports = Product;
