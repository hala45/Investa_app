<<<<<<< HEAD
'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TransactionType extends Model {}

  TransactionType.init({
    position: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transactiontype'
  });
  TransactionType.associate = function(models) {
    // associations can be defined here
    TransactionType.hasMany(models.Transaction);
  };
  return TransactionType;
};
=======
const Sequelize = require('sequelize');
const db = require('../config/database');

const TransactionType = db.define('transactiontype', {
    position: {
        type: Sequelize.STRING
    }
})

module.exports = TransactionType;
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
