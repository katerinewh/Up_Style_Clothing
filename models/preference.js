module.exports = function (sequelize, DataTypes) {
    var Preference = sequelize.define("Preference", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        height: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        minPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        maxPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        occasion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Preference.associate = function (models) {
        models.Preference.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Preference;
}