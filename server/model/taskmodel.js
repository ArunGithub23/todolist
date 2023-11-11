const sequelize=require('../config/dbcon');
const {DataTypes} =require('sequelize')

const Task=sequelize.define('Tasks', {
    // Model attributes are defined here
    taskdescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      // allowNull defaults to true
    },
    duedate:{
      type: DataTypes.DATE,
      allowNull: false
    }
  }, );

   //sequelize.sync({ force: true }).then(
 // console.log("The table for the User model was just (re)created!"));

  module.exports=Task;

