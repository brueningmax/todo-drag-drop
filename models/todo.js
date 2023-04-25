import { Model, DataTypes } from 'sequelize';
import { ClientModel } from './client.js';
import { UserModel } from './user.js';

export class TodoModel extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                },
                priority: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                type: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                notes: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                status: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                user: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                client: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                next_todo: {
                    type: DataTypes.INTEGER,
                },
                previous_todo: {
                    type: DataTypes.INTEGER,
                },
                month: {
                    type: DataTypes.ENUM(
                        'jan',
                        'feb',
                        'mar',
                        'apr',
                        'may',
                        'jun',
                        'jul',
                        'aug',
                        'sep',
                        'oct',
                        'nov',
                        'dec'
                    ),
                },
                year: {
                    type: DataTypes.INTEGER,
                }
            },
            {
                sequelize,
                tableName: 'todo',
                timestamps: false
            }
        )
    };
    static associate(models) {
        this.belongsTo(models.UserModel, {
            foreignKey: 'user',
        });
        this.belongsTo(models.ClientModel, {
            foreignKey: 'client',
        });
    }
};

