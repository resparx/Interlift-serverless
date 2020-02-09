module.exports = (sequelize, DataTypes) => {
    const Equipment = sequelize.define('details', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncreament: true
        },
        equipmentName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modelNumber: {
            type: DataTypes.STRING,
            allowNull:false
        }
    });
Equipment.associate = (models) => {
    Equipment.belongsTo(models.Company);
};

return Equipment;
}