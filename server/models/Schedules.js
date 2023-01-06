module.exports = (sequelize, DataTypes) => {
    const Schedules = sequelize.define("Schedules", {
        pID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Schedule: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              notEmpty: true  
            }
        },
        dID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
              notEmpty: true  
            }
        },
        uID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
              notEmpty: true  
            }
        }
    });

    return Schedules;
};