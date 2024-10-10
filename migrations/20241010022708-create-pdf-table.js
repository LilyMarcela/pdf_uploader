// migration file for create-pdf-table.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pdfs", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users", // references the User table
          key: "id",
        },
        onDelete: "CASCADE",
      },
      parentPdfId: {
        type: Sequelize.UUID, // Points to the original or parent PDF
        allowNull: true,
        references: {
          model: "pdfs",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      file_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      file_path: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      file_size: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      manipulation_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "pending",
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("pdfs");
  },
};
