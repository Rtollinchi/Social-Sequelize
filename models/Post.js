const { db, DataTypes, Model } = require("../db/connection");

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    sequelize: db,
    modelName: "Post",
  }
);

module.exports = Post;
