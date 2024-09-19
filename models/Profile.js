const { db, DataTypes, Model } = require("../db/connection");

class Profile extends Model {}

Profile.init(
  {
    bio: {
      type: DataTypes.STRING,
    },
    profilePicture: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    sequelize: db,
    modelName: "Profile",
  }
);

module.exports = Profile;
