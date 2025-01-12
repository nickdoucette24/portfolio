const sequelize = require("../sequelize");
const User = require("../models/User");

// Define initial user data
const userData = {
  firstName: "Nick",
  lastName: "Doucette",
  email: "nickdoucette24@hotmail.com",
  themeId: 1,
};

// Seed function to insert initial user
async function seedUsers() {
  try {
    await sequelize.sync();
    await User.create(userData);
    console.log("User has been seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Failed to seed user:", error);
    process.exit(1);
  }
}

seedUsers();
