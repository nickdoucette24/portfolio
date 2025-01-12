const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Theme = sequelize.define(
  "Theme",
  {
    themeName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    themeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isInt: true,
      },
    },
    first: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    second: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    third: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fourth: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fifth: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sixth: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Themes",
    timestamps: true,
  }
);

module.exports = Theme;
