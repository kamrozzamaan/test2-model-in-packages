const { Model, Op } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static async saveIfNotExist(countryData) {
      for (const country of countryData) {
        await Country.findOrCreate({
          where: { name: { [Op.iLike]: country.name.toLowerCase() } },
          defaults: { ...country },
        });
      }
    }
  }
  Country.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Country',
      paranoid: true,
      timestamps: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return Country;
};
