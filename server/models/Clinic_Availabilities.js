module.exports = (sequelize, DataTypes) => {
    const Clinic_Availabilities = sequelize.define("Clinic_Availabilities", {
        aID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate:{
              notEmpty: true  
            }
        },
        availability: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              notEmpty: true  
            }
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              notEmpty: true  
            }
        }
    });

    return Clinic_Availabilities;
};