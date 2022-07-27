import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

const ProductoModelo= sequelize.define('producto', {
  idproducto: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  codigo: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  stock_minimo: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: 0
  },
  Pagado: {
    type: DataTypes.ENUM('Pagado','Sin pagar'),
    allowNull: true
  },
  orden_idorden: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  orden_idorden1: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'orden',
      key: 'idorden'
    }
  }
}, {
  sequelize,
  tableName: 'producto',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "idproducto" },
      ]
    },
    {
      name: "fk_producto_orden1_idx",
      using: "BTREE",
      fields: [
        { name: "orden_idorden" },
      ]
    },
  ]
});
export default ProductoModelo;
