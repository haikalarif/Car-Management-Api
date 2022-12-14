'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.operations, { foreignKey: "iduser" });
      users.belongsTo(models.typeusers, { foreignKey: "idtype" });
    }
  }
  users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    idtype: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};