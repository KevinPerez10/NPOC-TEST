module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              notEmpty: true  
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              notEmpty: true  
            }
        },
        birthday: {
            type: DataTypes.DATE,
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              notEmpty: true  
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              notEmpty: true  
            }
        }



    });

    return Users;
};