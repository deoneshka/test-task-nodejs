const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  return sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      access_token: {
        type: DataTypes.STRING,
      },
      refresh_token: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: 'users',
    },
  );
};
