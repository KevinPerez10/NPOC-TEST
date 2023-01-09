module.exports = (sequelize, DataTypes) => {
    const Transactions = sequelize.define("Transactions", {
        tID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        deposit: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        balance: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        patientID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });

    return Transactions;
};