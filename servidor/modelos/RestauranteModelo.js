import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

const RestauranteModelo= sequelize.define('restaurante', {
  idrestaurante: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  direccion: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  orden_idorden: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'orden',
      key: 'idorden'
    }
  }
}, {
  sequelize,
  tableName: 'restaurante',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "idrestaurante" },
      ]
    },
    {
      name: "fk_restaurante_orden1_idx",
      using: "BTREE",
      fields: [
        { name: "orden_idorden" },
      ]
    },
  ]
});
export default RestauranteModelo
