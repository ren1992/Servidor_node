import UsuarioModelo from "../modelos/UsuarioModelo.js";
import EmpleadoModelo from "../modelos/EmpleadoModelo.js";
import GerenteModelo from "../modelos/GerenteModelo.js";
import { Op } from "sequelize";

/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/
 UsuarioModelo.hasOne(EmpleadoModelo,{foreignKey:'usuario_idusuario', targetKey:'idusuario'});
 UsuarioModelo.hasOne(GerenteModelo,{foreignKey:'usuario_idusuario', targetKey:'idusuario'});
/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllUsuario=async(req,res)=>
{
    UsuarioModelo.findAll().then(Usuario =>
    {   
        res.json(Usuario);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getUsuario=async(req,res)=>
{
    UsuarioModelo.findAll(
    {
        where:
        {
            idUsuario: req.params.idUsuario
        }
    }).then(Usuario =>
    {   
        res.json(Usuarios);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createUsuario=async(req,res)=>
{
    UsuarioModelo.create(req.body).then(Usuario =>
    {   
        res.json(
        {
            "message":"Usuario registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateUsuario=async(req,res)=>
{
    UsuarioModelo.update(
    req.body, 
    {   
        where:
        {
            idUsuario: req.params.idUsuario
        }
    }).then(Usuario =>
    {   
        res.json(
        {
            "message":"Usuario actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteUsuario=async(req,res)=>
{
    UsuarioModelo.destroy(
    {   
        where:
        {
            idUsuario: req.params.idUsuario
        }
    }).then(Usuario =>
    {   
        res.json(
        {
            "message":"Usuario actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/
export const buscarUsuario=async(req,res)=>
{
    await UsuarioModelo.findAll(
    {
        where: 
        {            
            [Op.and]:
            [
                {
                    [Op.or]: 
                    {
                        nick: req.params.nickCorreo,
                        correo: req.params.nickCorreo,                 
                    }, 
                    contrasena: req.params.contrasena
                }
            ]
        },
        attributes:
        [ 
            'idusuario',
            'foto',
            'tipo_identificacion',
            'identificacion',
            'nombres',
            'apellidos',
            'telefono',
            'correo',
            'rol',
            'nick'
        ], 
        include: 
        [
            {
                model:EmpleadoModelo,             
            },
            { 
                model:GerenteModelo,               
            }
        ]     
    }).then(usuario =>
    {   
        res.json(usuario);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

