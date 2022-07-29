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
            idpedido: req.params.idpedido
        }
    }).then(pedido =>
    {   
        res.json(pedido);
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
    PedidoModelo.update
    (
        req.body, 
        {   
            where:
            {
                idpedido: req.params.idpedido
            }
        }).then(pedido =>
        {   
            res.json(
            {
                "message":"Pedido actualizado"
            });
        }).catch(error =>
        {
            res.json({message: error.message});
        }
    );
} 

export const deletePedido=async(req,res)=>
{
    PedidoModelo.destroy(
    {   
        where:
        {
            idpedido: req.params.idpedido
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
 export const pagarPedido=async(req,res)=>
{
    console.log(req.body.pedidos);
    await PedidoModelo.bulkCreate
    (        
        req.body.pedidos,
        {
            updateOnDuplicate: ["precio_pagado", "estado"],
        }
    ).then(pedido =>
    {   
        res.json
        (
            {
                "message":"Pedidos pagados"
            }
        );
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 