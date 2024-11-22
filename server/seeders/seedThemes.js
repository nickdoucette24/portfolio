const sequelize = require("../sequelize");
const Theme = require("../models/Theme");

// Define the teams data
const themesData = [
  {
    themeName: "Winter",
    themeId: 1,
    first: "#012A4A",
    second: "#013A63",
    third: "#014F86",
    fourth: "#2A6F97",
    fifth: "#61A5C2",
    sixth: "#A9D6E5",
  },
];

// Seed function to insert themes data
async function seedThemes() {
  try {
    await sequelize.sync({ force: true });
    await Team.bulkCreate(themesData);
    console.log("Themes table has been seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Failed to seed Themes table:", error);
    process.exit(1);
  }
}

seedThemes();
