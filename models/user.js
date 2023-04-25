import { Model, DataTypes } from 'sequelize';
import { TodoModel } from './todo.js';

export class UserModel extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        role: {
          type: DataTypes.INTEGER,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'user',
        timestamps: false
      }
    );
  }
  static associate(models) {
    // A User can have many Todos
    this.hasMany(models.TodoModel, { foreignKey: 'user', as: 'todos' });
  }
}
