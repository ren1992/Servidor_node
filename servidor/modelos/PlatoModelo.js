import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

const PlatoModelo=  sequelize.define('plato', {
  idplato: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  categoria: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  precio: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  imagen: {
    type: DataTypes.TEXT,
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
  tableName: 'plato',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "idplato" },
      ]
    },
    {
      name: "fk_plato_orden1_idx",
      using: "BTREE",
      fields: [
        { name: "orden_idorden1" },
      ]
    },
  ]
});
export default PlatoModelo;
