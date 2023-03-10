const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health:{
      type: DataTypes.STRING
    },
    attack:{
      type: DataTypes.INTEGER
    },
    defense:{
      type: DataTypes.INTEGER
    },
    speed:{
      type: DataTypes.INTEGER
    },
    height:{
      type: DataTypes.INTEGER
    },
    weight:{
      type: DataTypes.INTEGER
    },
    createdInDd:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },{
    timestamps: false
  });
};
