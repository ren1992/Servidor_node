import PlatoModelo from "../modelos/PlatoModelo.js";
import OrdenModelo from "../modelos/OrdenModelo.js";
import { Op, Sequelize } from "sequelize";
 
/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/
 PlatoModelo.belongsTo
 (    
    OrdenModelo,
    {
        foreignKey:'orden_idorden', 
        targetKey:'idorden'
    }
 );
/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllPlato=async(req,res)=>
{
    PlatoModelo.findAll().then(Plato =>
    {   
        res.json(Plato);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getPlato=async(req,res)=>
{
    PlatoModelo.findAll(
    {
        where:
        {
            idPlato: req.params.idPlato
        }
    }).then(plato =>
    {   
        res.json(plato);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createPlato=async(req,res)=>
{
    PlatoModelo.create(req.body).then(Plato =>
    {   
        res.json(
        {
            "message":"Plato registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updatePlato=async(req,res)=>
{
    PlatoModelo.update(
    req.body, 
    {   
        where:
        {
            idPlato: req.params.idPlato
        }
    }).then(Plato =>
    {   
        res.json(
        {
            "message":"Plato actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deletePlato=async(req,res)=>
{
    PlatoModelo.destroy(
    {   
        where:
        {
            idPlato: req.params.idPlato
        }
    }).then(Plato =>
    {   
        res.json(
        {
            "message":"Plato actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/

 export const getBuscarPlatoEmpresa=async(req,res)=>
 {
     PlatoModelo.findAll(
     {
        where:
        {            
            nombre:
            {
                 [Op.like]: '%'+req.params.nombre+'%'
            }
        },
        include: 
        [
            {
                model:OrdenModelo,
                where:
                {    
                    empresa_idempresa: req.params.idempresa,
                    estado:'Pagado'
                },
                attributes:[]
            }
        ],
        attributes:
        [
            'idplato',
            'categoria',
            'nombre',
            'descripcion',
            'precio',
            'imagen',
            [ Sequelize.col('orden.estado'), 'estado']
        ] 
     }).then(Plato =>
     {   
         res.json(Plato);
     }).catch(error =>
     {
         res.json({message: error.message});
     });
 } 

 export const getContaPlatoSinPagar=async(req,res)=>
 {
     PlatoModelo.findAll(
     {        
        include: 
        [
            {
                model:OrdenModelo,
                where:
                {    
                    empresa_idempresa: req.params.idempresa,
                    estado:'Sin pagar'
                },
                attributes:[]
            }
        ],
        attributes:
        [
            [Sequelize.fn('COALESCE',Sequelize.col('idplato'),0,Sequelize.fn('count', Sequelize.col('idplato'))), 'platos_sin_pagar']
        ]
     }).then(Plato =>
     {   
         res.json(Plato);
     }).catch(error =>
     {
         res.json({message: error.message});
     });
 } 

