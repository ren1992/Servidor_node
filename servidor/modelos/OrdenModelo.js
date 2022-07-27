import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

const OrdenModelo=sequelize.define('orden', {
  idorden: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  precio_unitario: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  catidad: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  estado: {
    type: DataTypes.ENUM('Pagado','Sin pagar'),
    allowNull: true,
    defaultValue: "Sin pagar"
  },
  tarifa_idtarifa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'tarifa',
      key: 'idtarifa'
    }
  },
  empresa_idempresa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'empresa',
      key: 'idempresa'
    }
  },
  forma_pago_idforma_pago: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'forma_pago',
      key: 'idforma_pago'
    }
  }
}, {
  sequelize,
  tableName: 'orden',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "idorden" },
      ]
    },
    {
      name: "fk_orden_tarifa1_idx",
      using: "BTREE",
      fields: [
        { name: "tarifa_idtarifa" },
      ]
    },
    {
      name: "fk_orden_empresa1_idx",
      using: "BTREE",
      fields: [
        { name: "empresa_idempresa" },
      ]
    },
    {
      name: "fk_orden_forma_pago1_idx",
      using: "BTREE",
      fields: [
        { name: "forma_pago_idforma_pago" },
      ]
    },
  ]
});
export default  OrdenModelo;