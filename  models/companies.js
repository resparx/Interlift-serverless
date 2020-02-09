module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('company',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncreamemnt: true
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
    
    Company.associate = (models) => {
      Company.hasMany(models.equipment);
    };

    return Company
}