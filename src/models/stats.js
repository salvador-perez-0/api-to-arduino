"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stats extends Model {
    static associate(models) {
      // define association here
    }
  }
  Stats.init(
    {
      id: DataTypes.INTEGER,
      rmp: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Stats",
    }
  );
  return Stats;
};
