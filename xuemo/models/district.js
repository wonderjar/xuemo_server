"use strict";

module.exports = function(sequelize, DataTypes) {
  var District = sequelize.define("District", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    code: DataTypes.INTEGER,
    name: DataTypes.STRING,
    full_name:DataTypes.STRING
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        District.belongsTo(District, {as: "parent"});
        District.belongsToMany(models.Course, {as: "courses", through: "CourseDistricts"});
      }
    }
  });

  return District;
};