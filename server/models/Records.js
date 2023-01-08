module.exports = (sequelize, DataTypes) => {
    const Records = sequelize.define("Records", {
        rID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        od: {
            type: DataTypes.STRING,
            allowNull: true
        },
        os: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sphere1_1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sphere1_2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sphere2_1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sphere2_2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pd: {
            type: DataTypes.STRING,
            allowNull: true
        },
        addLP: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fr: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ln: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tn: {
            type: DataTypes.STRING,
            allowNull: true
        },
        patientID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    });

    return Records;
};