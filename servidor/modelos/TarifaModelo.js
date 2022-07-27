import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

const TarifaModelo= sequelize.define('tarifa', {
    idtarifa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    producto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tarifa',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idtarifa" },
        ]
      },
    ]
  });
export default TarifaModelo;
