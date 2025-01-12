const sequelize = require("../sequelize");
const User = require("../models/User");

async function removeUser() {
  try {
    // Delete user by email
    await User.destroy({
      where: {
        email: "nickdoucette24@hotmail.com",
      },
    });
    console.log("User has been removed successfully");
    process.exit();
  } catch (error) {
    console.error("Failed to remove user:", error);
    process.exit(1);
  }
}

removeUser();
