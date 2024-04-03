const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class HireDevelopers extends Model {}
  HireDevelopers.init(
    {
      clientType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectStage: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contactNumber: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      projectDescription: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'HireDevelopers',
    }
  );
  return HireDevelopers;
};
