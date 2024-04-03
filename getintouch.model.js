const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GetInTouch extends Model {}
  GetInTouch.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'GetInTouch',
    }
  );
  return GetInTouch;
};
