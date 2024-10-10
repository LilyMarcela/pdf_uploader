// models/Notification.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

class Notification extends Model {}

Notification.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT, // The notification message (e.g., "Your PDF has been processed")
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING, // Notification status: 'unread', 'read'
      allowNull: false,
      defaultValue: "unread",
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
    modelName: "Notification",
    tableName: "notifications",
  }
);

module.exports = Notification;
