// models/ManipulationLog.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Pdf = require("./Pdf");

class ManipulationLog extends Model {}

ManipulationLog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pdfId: {
      type: DataTypes.INTEGER,
      references: {
        model: Pdf,
        key: "id",
      },
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      allowNull: false,
    },
    manipulation_type: {
      type: DataTypes.STRING, // Type of manipulation: split, merge, watermark, etc.
      allowNull: false,
    },
    details: {
      type: DataTypes.TEXT, // Detailed information about the manipulation
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pending", // Status of the manipulation (pending, completed, etc.)
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "ManipulationLog",
    tableName: "manipulation_logs",
  }
);

module.exports = ManipulationLog;
