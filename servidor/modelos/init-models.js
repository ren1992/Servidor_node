var DataTypes = require("sequelize").DataTypes;
var _mesa = require("./mesa");

function initModels(sequelize) {
  var mesa = _mesa(sequelize, DataTypes);

  mesa.belongsTo(orden, { as: "orden_idorden_orden", foreignKey: "orden_idorden"});
  orden.hasMany(mesa, { as: "mesas", foreignKey: "orden_idorden"});
  mesa.belongsTo(restaurante, { as: "restaurante_idrestaurante_restaurante", foreignKey: "restaurante_idrestaurante"});
  restaurante.hasMany(mesa, { as: "mesas", foreignKey: "restaurante_idrestaurante"});

  return {
    mesa,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
