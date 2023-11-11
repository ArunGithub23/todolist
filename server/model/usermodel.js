const sequelize=require('../config/dbcon');
const {DataTypes} =require('sequelize')

const User=sequelize.define('user', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, );

   //User.sync({ force: true }).then(
  //console.log("The table for the User model was just (re)created!"));

  module.exports=User;

