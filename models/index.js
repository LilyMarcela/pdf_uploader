const User = require("./User");
const Pdf = require("./Pdf");
const ManipulationLog = require("./ManipulationLog");
const PdfContent = require("./PdfContent");
const Notification = require("./Notification");

// Associations

User.hasMany(Pdf, { foreignKey: "userId" });
Pdf.belongsTo(User, { foreignKey: "userId" });

Pdf.hasMany(ManipulationLog, { foreignKey: "pdfId" });
ManipulationLog.belongsTo(Pdf, { foreignKey: "pdfId" });

User.hasMany(ManipulationLog, { foreignKey: "userId" });
ManipulationLog.belongsTo(User, { foreignKey: "userId" });

Pdf.hasOne(PdfContent, { foreignKey: "pdfId" });
PdfContent.belongsTo(Pdf, { foreignKey: "pdfId" });

User.hasMany(Notification, { foreignKey: "userId" }),
  Notification.belongsTo(User, { foreignKey: "userId" });

module.exports = {
  User,
  Pdf,
  ManipulationLog,
  PdfContent,
  Notification,
};
