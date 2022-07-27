import OrdenModelo from "../modelos/OrdenModelo.js";
import TarifaModelo from "../modelos/TarifaModelo.js";
import MesaModelo from "../modelos/MesaModelo.js";
import { BelongsToMany, Op, Sequelize } from "sequelize"
import RestauranteModelo from "../modelos/RestauranteModelo.js";
/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/

 OrdenModelo.belongsTo
 (
    TarifaModelo,
     {
         foreignKey:'tarifa_idtarifa', 
         targetKey:'idtarifa'
     }
 );

 OrdenModelo.hasMany 
 (
    MesaModelo,
     {
         foreignKey:'orden_idorden', 
         targetKey:'idorden'
     }
 );

 MesaModelo.belongsTo 
 (
    RestauranteModelo,
     {
         foreignKey:'restaurante_idrestaurante', 
         targetKey:'idrestaurante'
     }
 );
 OrdenModelo.belongsToMany(RestauranteModelo, {
    through: 'mesa4',
    as: 'restaurante',
    foreignKey: 'orden_idorden',
    otherKey: 'restaurante_idrestaurante', 
   });
  

/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllOrden=async(req,res)=>
{
    OrdenModelo.findAll().then(Orden =>
    {   
        res.json(Orden);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getOrden=async(req,res)=>
{
    OrdenModelo.findAll(
    {
        where:
        {
            idOrden: req.params.idOrden
        }
    }).then(Orden =>
    {   
        res.json(Orden);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createOrden=async(req,res)=>
{
    OrdenModelo.create(req.body).then(Orden =>
    {   
        res.json(
        {
            "message":"Orden registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateOrden=async(req,res)=>
{
    OrdenModelo.update(
    req.body, 
    {   
        where:
        {
            idOrden: req.params.idOrden
        }
    }).then(Orden =>
    {   
        res.json(
        {
            "message":"Orden actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteOrden=async(req,res)=>
{
    OrdenModelo.destroy(
    {   
        where:
        {
            idorden: req.params.idorden
        }
    }).then(Orden =>
    {   
        res.json(
        {
            "message":"Orden eliminda"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/

 export const getOrdenSinPagar=async(req,res)=>
{
    OrdenModelo.findAll(
    {
        where:
        {
            empresa_idempresa: req.params.idempresa,
            estado: 'Sin pagar'
        },
        include: 
        [
            {
                model:TarifaModelo,
                attributes:[]
            },
            {
                model:MesaModelo,
                include: 
                [
                    {
                        model:RestauranteModelo,
                        attributes:[]
                    }
                ],
                attributes:[]
            }
        ],
        attributes: 
        [
            'idorden',
            'fecha',
            'precio_unitario' ,
            'catidad',
            'estado',    
            [Sequelize.col('producto'), 'producto'],
            [Sequelize.col('nombre'), 'restaurante']
        ]
    }).then(Orden =>
    {   
        res.json(Orden);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 