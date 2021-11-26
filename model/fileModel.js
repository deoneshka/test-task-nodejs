const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  return sequelize.define(
    'file',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      extension: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mimeType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'files',
      timestamps: true,
      createdAt: false,
      updatedAt: 'date',
    },
  );
};
