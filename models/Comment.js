const { db, DataTypes, Model } = require("../db/connection");

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    sequelize: db,
    modelName: "Comment",
  }
);

module.exports = Comment;
