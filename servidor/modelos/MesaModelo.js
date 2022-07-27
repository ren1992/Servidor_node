import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

const MesaModelo= sequelize.define('mesa', {
  idmesa: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  numero: {
    type: DataTypes.STRING(45),
    allowNull: true,
    defaultValue: "Mesa x"
  },
  restaurante_idrestaurante: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'restaurante',
      key: 'idrestaurante'
    }
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
  tableName: 'mesa',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "idmesa" },
      ]
    },
    {
      name: "fk_mesas_restaurante1_idx",
      using: "BTREE",
      fields: [
        { name: "restaurante_idrestaurante" },
      ]
    },
    {
      name: "fk_mesa_orden1_idx",
      using: "BTREE",
      fields: [
        { name: "orden_idorden" },
      ]
    },
  ]
});
export default MesaModelo;
