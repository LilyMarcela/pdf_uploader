const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

class Pdf extends Model {}

Pdf.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "id",
      },
      allowNull: false,
    },
    parentPdfId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    file_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    file_path: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    file_size: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    manipulation_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.status,
      allowNull: false,
      defaultValue: "pending",
    },
  },
  { sequelize, modelName: "Pdf", tableName: "pdfs" }
);

module.exports = Pdf;
