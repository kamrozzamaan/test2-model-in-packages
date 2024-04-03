const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {}
  City.init(
    {
      name: DataTypes.STRING,
      stateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'States',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'City',
      timestamps: false,
    }
  );
  return City;
};
