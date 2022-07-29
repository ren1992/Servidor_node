import PlatoModelo from "../modelos/PlatoModelo.js";
import OrdenModelo from "../modelos/OrdenModelo.js";
import { Op, Sequelize } from "sequelize";
import sharp from "sharp";
import fs from "fs";
import { createECDH } from "crypto";
 
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
const cargarImagen=async(file)=>
{
    if (file) 
    {
        const {path,originalname} = file;
        const ref = `${originalname.split('.')[0]}-${Date.now() }.webp`; 
        await sharp(path)
        .webp({ quality: 20 })
        .toFile(`./uploads/imagen/plato/${ref}`);
        fs.unlinkSync(file.path);
        return ref;
    } else {
        return "";
    }
} 

export const createPlato=async(req,res)=>
{  
    let ref=await cargarImagen(req.file);
    if (ref) 
    {
        req.body.imagen = `http://localhost:8000/${ref}`;   
    } 
    await PlatoModelo.create(req.body).then(plato =>
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
    let ref=cargarImagen(req.file);
    if (ref) 
    {
        console.log("hola mundo");
        req.body.imagen = `http://localhost:8000/${ref}`;   
    } 
    PlatoModelo.update
    (
        req.body, 
        {   
            where:
            {
                idPlato: req.params.idPlato
            }
        }).then(plato =>
        {   
            res.json
            (
                {
                    "message":"Plato actualizado"
                }
            );
        }).catch(error =>
        {
            res.json({message: error.message});
        }
    );
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

