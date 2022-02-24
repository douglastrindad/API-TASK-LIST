const { Model, DataTypes } = require('sequelize');

class Task extends Model {
    static init(sequelize) {
      super.init(
        {
          task: DataTypes.STRING,
          check: DataTypes.BOOLEAN,
        },
        {
          sequelize,
        }
        );
      return this;
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
}

  module.exports = Task;