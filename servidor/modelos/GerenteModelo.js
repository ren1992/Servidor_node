import sequelize from "../mundo/DataBase.js";
import {DataTypes} from "sequelize";

const GerenteModelo= sequelize.define('gerente', {
    idgerente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    }
  }, {
    sequelize,
    tableName: 'gerente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idgerente" },
        ]
      },
      {
        name: "fk_gerente_usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "usuario_idusuario" },
        ]
      },
    ]
  });
export default GerenteModelo;