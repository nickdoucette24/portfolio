require("dotenv").config();
const express = require("express");
const sequelize = require("./sequelize");
const User = require("./models/User");
const Theme = require("./models/Theme");

// Set up model associations
User.belongsTo(Theme, { foreignKey: "themeId", as: "theme" }); // Adds themeId to User table
Theme.hasMany(User, { foreignKey: "themeId", as: "members" }); // Adds a reference from Theme to User

const app = express();
app.use(express.json());

// Route to create a new team
app.post("/themes", async (req, res) => {
  try {
    const theme = await Theme.create(req.body);
    res.status(201).json(theme);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to create a new user
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Sync database and start server
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(
        `Server is running on http://localhost:${PORT}, press Control + C to stop.`
      );
    });
  })
  .catch((error) => {
    console.error("Unable to sync database:", error);
  });

module.exports = app;
