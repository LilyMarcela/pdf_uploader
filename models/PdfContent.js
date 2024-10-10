const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Pdf = require("./Pdf");

class PdfContent extends Model {}

PdfContent.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    pdfIf: {
      type: DataTypes.UUID,
      references: {
        model: Pdf,
        key: "id",
      },
      allowNull: false,
    },
    textContent: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: "PdfContent",
    tableName: "pdf_contents",
  }
);

module.exports = PdfContent;
