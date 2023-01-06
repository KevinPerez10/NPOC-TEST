module.exports = (sequelize, DataTypes) => {
    const Clinic_Availability = sequelize.define("Clinic_Availability", {
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
        }
    });

    return Clinic_Availability;
};