import express  from "express";
import 
{ 
    getAllCliente,
    getCliente,
    createCliente,
    updateCliente ,
    deleteCliente 
} from "../controladores/ClienteControlador.js";

import 
{ 
    getAllCompra,
    getCompra,
    createCompra,
    updateCompra ,
    deleteCompra 
} from "../controladores/CompraControlador.js";

import 
{ 
    getAllEmpleado,
    getEmpleado,
    createEmpleado,
    updateEmpleado ,
    deleteEmpleado 
} from "../controladores/EmpleadoControlador.js";

import 
{ 
    getAllEmpresa,
    getEmpresa,
    createEmpresa,
    updateEmpresa ,
    deleteEmpresa, 
    consultarDatoEmpresa 
} from "../controladores/EmpresaControlador.js";

import 
{ 
    getAllFactura,
    getFactura,
    createFactura,
    updateFactura ,
    deleteFactura 
} from "../controladores/FacturaControlador.js";

import 
{ 
    getAllGerente,
    getGerente,
    createGerente,
    updateGerente ,
    deleteGerente 
} from "../controladores/GerenteControlador.js";

import 
{ 
    getAllInventario,
    getInventario,
    createInventario,
    updateInventario ,
    deleteInventario 
} from "../controladores/InventarioControlador.js";

import 
{ 
    getAllMaterial,
    getMaterial,
    createMaterial,
    updateMaterial ,
    deleteMaterial 
} from "../controladores/MaterialControlador.js";

import 
{ 
    getAllMenu,
    getMenu,
    createMenu,
    updateMenu ,
    deleteMenu,
    getAllMenuRestaurante 
} from "../controladores/MenuControlador.js";

import 
{ 
    getAllMesa,
    getMesa,
    createMesa,
    updateMesa ,
    deleteMesa,
    getContarMesaPagada,
    getContarMesaNoPagada,
    getAllMesaRestaurante,
    createCompraMesa, 
    
} from "../controladores/MesaControlador.js";

import 
{ 
    getAllNomina,
    getNomina,
    createNomina,
    updateNomina ,
    deleteNomina 
} from "../controladores/NominaControlador.js";

import 
{ 
    getAllPedido,
    getPedido,
    createPedido,
    updatePedido ,
    deletePedido 
} from "../controladores/PedidoControlador.js";

import 
{ 
    getAllPlato,
    getPlato,
    createPlato,
    updatePlato ,
    deletePlato,
    getBuscarPlatoEmpresa,
    getContaPlatoSinPagar 
} from "../controladores/PlatoControlador.js";

import 
{ 
    getAllProducto,
    getProducto,
    createProducto,
    updateProducto ,
    deleteProducto 
} from "../controladores/ProductoControlador.js";

import 
{ 
    getAllRestaurante,
    getRestaurante,
    createRestaurante,
    updateRestaurante ,
    deleteRestaurante     
} from "../controladores/RestauranteControlador.js";

import 
{ 
    getAllTurno,
    getTurno,
    createTurno,
    updateTurno ,
    deleteTurno 
} from "../controladores/TurnoControlador.js";

import 
{ 
    getAllUsuario,
    getUsuario,
    createUsuario,
    updateUsuario ,
    deleteUsuario, 
    buscarUsuario 
} from "../controladores/UsuarioControlador.js";

import 
{ 
    getAllOrden,
    getOrden,
    createOrden,
    updateOrden ,
    deleteOrden, 
    getOrdenSinPagar 
} from "../controladores/OrdenControlador.js";



const router=express.Router();

router.get('/cliente/',getAllCliente);
router.get('/cliente/:idcliente',getCliente);
router.post('/cliente/',createCliente);
router.put('/cliente/:idcliente',updateCliente);
router.delete('/cliente/:idcliente',deleteCliente);

router.get('/compra/',getAllCompra);
router.get('/compra/:idcompra',getCompra);
router.post('/compra/',createCompra);
router.put('/compra/:idcompra',updateCompra);
router.delete('/compra/:idcompra',deleteCompra);

router.get('/empleado/',getAllEmpleado);
router.get('/empleado/:idempleado',getEmpleado);
router.post('/empleado/',createEmpleado);
router.put('/empleado/:idempleado',updateEmpleado);
router.delete('/empleado/:idempleado',deleteEmpleado);

router.get('/empresa/',getAllEmpresa);
router.get('/empresa/:idempresa',getEmpresa);
router.post('/empresa/',createEmpresa);
router.put('/empresa/:idempresa',updateEmpresa);
router.delete('/empresa/:idempresa',deleteEmpresa);
router.get('/empresa/consultarEmpresa/:idgerente',consultarDatoEmpresa);

router.get('/factura/',getAllFactura);
router.get('/factura/:idfactura',getFactura);
router.post('/factura/',createFactura);
router.put('/factura/:idfactura',updateFactura);
router.delete('/factura/:idfactura',deleteFactura);

router.get('/gerente/',getAllGerente);
router.get('/gerente/:idgerente',getGerente);
router.post('/gerente/',createGerente);
router.put('/gerente/:idgerente',updateGerente);
router.delete('/gerente/:idgerente',deleteGerente);

router.get('/inventario/',getAllInventario);
router.get('/inventario/:idinventario',getInventario);
router.post('/inventario/',createInventario);
router.put('/inventario/:idinventario',updateInventario);
router.delete('/inventario/:idinventario',deleteInventario);

router.get('/material/',getAllMaterial);
router.get('/material/:idMaterial',getMaterial);
router.post('/material/',createMaterial);
router.put('/material/:idMaterial',updateMaterial);
router.delete('/material/:idMaterial',deleteMaterial);

router.get('/menu/',getAllMenu);
router.get('/menu/:idmenu',getMenu);
router.post('/menu/',createMenu);
router.put('/menu/:idmenu',updateMenu);
router.delete('/menu/:idmenu',deleteMenu);
router.get('/menu/listaMenu/:idrestaurante',getAllMenuRestaurante);

router.get('/mesa/',getAllMesa);
router.get('/mesa/:idmesa',getMesa);
router.post('/mesa/',createMesa);
router.put('/mesa/:idmesa',updateMesa);
router.delete('/mesa/:idmesa',deleteMesa);
router.get('/mesa/mesaPagada/:idrestaurtante',getContarMesaPagada);
router.get('/mesa/mesaNoPagada/:idrestaurtante',getContarMesaNoPagada);
router.get('/mesa/mesaResturante/:idrestaurtante',getAllMesaRestaurante);
router.post('/mesa/mesaCompra/:idempresa/:idrestaurtante/:cantidad',createCompraMesa);


router.get('/nomina/',getAllNomina);
router.get('/nomina/:idnomina',getNomina);
router.post('/nomina/',createNomina);
router.put('/nomina/:idnomina',updateNomina);
router.delete('/nomina/:idnomina',deleteNomina);

router.get('/pedido/',getAllPedido);
router.get('/pedido/:idpedido',getPedido);
router.post('/pedido/',createPedido);
router.put('/pedido/:idpedido',updatePedido);
router.delete('/pedido/:idpedido',deletePedido);

router.get('/plato/',getAllPlato);
router.get('/plato/:idplato',getPlato);
router.post('/plato/',createPlato);
router.put('/plato/:idplato',updatePlato);
router.delete('/plato/:idplato',deletePlato);
router.get('/plato/buscarPlatoEmpresa/:nombre/:idempresa',getBuscarPlatoEmpresa);
router.get('/plato/platoSinPagar/:idempresa',getContaPlatoSinPagar);



router.get('/producto/',getAllProducto);
router.get('/producto/:idproducto',getProducto);
router.post('/producto/',createProducto);
router.put('/producto/:idproducto',updateProducto);
router.delete('/producto/:idproducto',deleteProducto);

router.get('/restaurante/',getAllRestaurante);
router.get('/restaurante/:idrestaurante',getRestaurante);
router.post('/restaurante/',createRestaurante);
router.put('/restaurante/:idrestaurante',updateRestaurante);
router.delete('/restaurante/:idrestaurante',deleteRestaurante);

router.get('/turno/',getAllTurno);
router.get('/turno/:idturno',getTurno);
router.post('/turno/',createTurno);
router.put('/turno/:idturno',updateTurno);
router.delete('/turno/:idturno',deleteTurno);

router.get('/usuario/',getAllUsuario);
router.get('/usuario/:idUsuario',getUsuario);
router.post('/usuario/',createUsuario);
router.put('/usuario/:idUsuario',updateUsuario);
router.delete('/usuario/:idUsuario',deleteUsuario);
router.get('/usuario/login/:nickCorreo/:contrasena',buscarUsuario);

router.get('/orden/',getAllOrden);
router.get('/orden/:idorden',getOrden);
router.post('/orden/',createOrden);
router.put('/orden/:idorden',updateOrden);
router.delete('/orden/:idorden',deleteOrden);
router.get('/orden/buscarOrden/:idempresa',getOrdenSinPagar);







export default router;