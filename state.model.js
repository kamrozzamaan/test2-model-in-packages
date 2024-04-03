const { Model, Op } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    static async saveIfNotExist(stateData) {
      for (const state of stateData) {
        await State.findOrCreate({
          where: {
            [Op.and]: [{ name: { [Op.iLike]: state.name.toLowerCase() } }, { countryId: { [Op.eq]: state.countryId } }],
          },
          defaults: { ...state },
        });
      }
    }
  }

  State.init(
    {
      name: DataTypes.STRING,
      countryId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Countries',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'State',
      paranoid: true,
      timestamps: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return State;
};
