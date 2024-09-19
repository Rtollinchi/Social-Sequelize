const { db, DataTypes, Model } = require("../db/connection");

class Like extends Model {}

Like.init(
  {
    reaction: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    sequelize: db,
    modelName: "Like",
  }
);

module.exports = Like;
