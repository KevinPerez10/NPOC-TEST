module.exports = (sequelize, DataTypes) => {
    const Patients = sequelize.define("Patients", {
        patientID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              notEmpty: true  
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
              notEmpty: true  
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              notEmpty: true  
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              notEmpty: true  
            }
        },
        appt_Type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              notEmpty: true  
            }
        },
        appt_ID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              notEmpty: true  
            }
        }



    });

    return Patients;
};