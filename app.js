const sequelize = require("./config/database");
const {
  User,
  Pdf,
  ManipulationLog,
  PdfContent,
  Notification,
} = require("./models");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synced!!");
  })
  .catch((err) => {
    console.error("Error syncing", err);
  });
