import { Model, DataTypes } from 'sequelize';
import { TodoModel } from './todo.js';

export class ClientModel extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                address: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                contact: {
                    type: DataTypes.STRING,
                    allowNull: false,
                }
            },
            {
                sequelize,
                tableName: 'client',
                timestamps: false
            }
        );
    }
    static associate(models) {
        // A Client can have many Todos
        this.hasMany(models.TodoModel, { foreignKey: 'client', as: 'todos' });
    }
};
