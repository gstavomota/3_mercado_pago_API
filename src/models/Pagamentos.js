const {Model, DataTypes, Sequelize} = require('sequelize');

class Pagamentos extends Model{
    static init(sequelize){
        super.init({
            id: DataTypes.INTEGER,
            topic: DataTypes.STRING,
            type: DataTypes.STRING,
            createdAt: {
                field: 'created_at',
                type: DataTypes.DATE,
            },
            updatedAt:{
                field: 'updated_at',
                type: DataTypes.DATE,
            },
        },{
            sequelize
        }) 
    }
}

module.exports = Pagamentos;