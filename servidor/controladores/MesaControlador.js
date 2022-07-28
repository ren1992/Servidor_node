/*==========================================================
 ***********************Importaciones************************** 
==========================================================*/
import MesaModelo from "../modelos/MesaModelo.js";
import OrdenModelo from "../modelos/OrdenModelo.js";
import FacturaModelo from "../modelos/FacturaModelo.js";
import TarifaModelo from "../modelos/TarifaModelo.js";
import { Op, Sequelize } from "sequelize";

/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/
 MesaModelo.belongsTo
 (
     OrdenModelo,
     {
         foreignKey:'orden_idorden', 
         targetKey:'idorden'
     }
 );

 MesaModelo.hasOne
 (
     FacturaModelo,
     {
         foreignKey:'mesa_idmesa', 
         targetKey:'idmesa'
     }
 );

/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllMesa=async(req,res)=>
{
    MesaModelo.findAll().then(Mesa =>
    {   
        res.json(Mesa);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getMesa=async(req,res)=>
{
    MesaModelo.findAll(
    {
        where:
        {
            idmesa: req.params.idmesa
        }
    }).then(mesa =>
    {   
        res.json(mesa);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createMesa=async(req,res)=>
{
    MesaModelo.create(req.body).then(Mesa =>
    {   
        res.json(
        {
            "message":"Mesa registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateMesa=async(req,res)=>
{
    MesaModelo.update(
    req.body, 
    {   
        where:
        {
            idmesa: req.params.idmesa
        }
    }).then(mesa =>
    {   
        res.json(
        {
            "message":"Mesa actualizada"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteMesa=async(req,res)=>
{
    MesaModelo.destroy(
    {   
        where:
        {
            idmesa: req.params.idMesa
        }
    }).then(Mesa =>
    {   
        res.json(
        {
            "message":"Mesa actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/

 export const getContarMesaPagada=async(req,res)=>
{
    console.log(req.params.idrestaurtante);
    MesaModelo.findAll(
    {
        where:
        {
            restaurante_idrestaurante: req.params.idrestaurtante
        },
        include: 
        [
            {
                model:OrdenModelo,
                where:
                {
                    estado: 'Pagado'
                },
                attributes:[]
            }
        ],
        attributes:
        [
            [Sequelize.fn('COALESCE',Sequelize.col('idmesa'),0,Sequelize.fn('count', Sequelize.col('idmesa'))), 'mesas']
        ] 
    }).then(mesa =>
    {   
        res.json(mesa);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getContarMesaNoPagada=async(req,res)=>
{
    console.log(req.params.idrestaurtante);
    MesaModelo.findAll(
    {
        where:
        {
            restaurante_idrestaurante: req.params.idrestaurtante
        },
        include: 
        [
            {
                model:OrdenModelo,
                where:
                {
                    estado: 'Pagado'
                },
                attributes:[]
            }
        ],
        attributes:
        [
            [Sequelize.fn('COALESCE',Sequelize.col('idmesa'),0,Sequelize.fn('count', Sequelize.col('idmesa'))), 'mesas']
        ] 
    }).then(mesa =>
    {   
        res.json(mesa);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getAllMesaRestaurante=async(req,res)=>
{
    console.log(req.params.idrestaurtante);
    MesaModelo.findAll(
    {
        where:
        {
            restaurante_idrestaurante: req.params.idrestaurtante
        },
        include: 
        [
            {
                model:OrdenModelo,
                where:
                {
                    estado: 'Pagado'
                },
                attributes:[]
            },
            {
                model:FacturaModelo,
                attributes:
                [
                ]      
            }
        ],
        attributes:
        [
            'idmesa', 
            'numero',
            [ Sequelize.col('orden.estado'), 'estado_orden'],
            [ Sequelize.col('mesa.estado'), 'estado_mesa'],
            [ Sequelize.col('factura.estado'), 'factura_mesa'],
            [Sequelize.fn('max', Sequelize.col('idfactura')), 'ifactura']
        ],
        group:'idmesa' 
    }).then(mesa =>
    {   
        res.json(mesa);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

export const createCompraMesa=async(req,res)=>
{    
    await TarifaModelo.findAll(
    {
        where:
        {
            producto: 'Mesa'
        }
    }).then(async tarifa =>
    { 
        let t= JSON.stringify(tarifa, null, 2);
        let t1=JSON.parse(t)
        await OrdenModelo.create
        (
            {
                tarifa_idtarifa: t1[0].idtarifa,
                empresa_idempresa: req.params.idempresa,
                precio_unitario: t1[0].valor,
                cantida: req.params.cantidad                                    
            }
        ).then(orden =>
        {  
            let o= JSON.stringify(orden, null, 2);
            let o1=JSON.parse(o);
            console.log(o1.idorden);          
            const listMesa = [];
            for(let i=0; i < req.params.cantidad;i++)
            {
                listMesa.push
                (
                    {                      
                        restaurante_idrestaurante:req.params.idrestaurtante,
                        orden_idorden:o1.idorden
                    }
                )
            } 
            MesaModelo.bulkCreate
            (
                listMesa
            ).then(mesa =>
            {   
                res.json(
                {
                    "message":"Orden agragada al carrito"
                }); 
            }).catch(error =>
            {
                res.json({message: error.message});
            });                                              
        }).catch(error =>
        {
            res.json({message: error.message});
        });        
    }).catch(error =>
    {
        res.json({message: error.message});
    });  
} 