const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Theme = require("./Theme");

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    themeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Themes",
        key: "id",
      },
    },
  },
  {
    tableName: "Users",
    timestamps: true,
  }
);

module.exports = User;
