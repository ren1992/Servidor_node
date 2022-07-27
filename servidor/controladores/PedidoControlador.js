import PedidoModelo from "../modelos/PedidoModelo.js";

/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/

/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllPedido=async(req,res)=>
{
    PedidoModelo.findAll().then(Pedido =>
    {   
        res.json(Pedido);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getPedido=async(req,res)=>
{
    PedidoModelo.findAll(
    {
        where:
        {
            idPedido: req.params.idPedido
        }
    }).then(Pedido =>
    {   
        res.json(Pedidos);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createPedido=async(req,res)=>
{
    PedidoModelo.create(req.body).then(Pedido =>
    {   
        res.json(
        {
            "message":"Pedido registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updatePedido=async(req,res)=>
{
    PedidoModelo.update(
    req.body, 
    {   
        where:
        {
            idPedido: req.params.idPedido
        }
    }).then(Pedido =>
    {   
        res.json(
        {
            "message":"Pedido actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deletePedido=async(req,res)=>
{
    PedidoModelo.destroy(
    {   
        where:
        {
            idPedido: req.params.idPedido
        }
    }).then(Pedido =>
    {   
        res.json(
        {
            "message":"Pedido actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/