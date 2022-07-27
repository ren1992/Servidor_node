import Registro_errorModelo from "../modelos/Registro_errorModelo.js";

/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/

/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllRegistro_error=async(req,res)=>
{
    Registro_errorModelo.findAll().then(Registro_error =>
    {   
        res.json(Registro_error);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getRegistro_error=async(req,res)=>
{
    Registro_errorModelo.findAll(
    {
        where:
        {
            idRegistro_error: req.params.idRegistro_error
        }
    }).then(Registro_error =>
    {   
        res.json(Registro_errors);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createRegistro_error=async(req,res)=>
{
    Registro_errorModelo.create(req.body).then(Registro_error =>
    {   
        res.json(
        {
            "message":"Registro_error registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateRegistro_error=async(req,res)=>
{
    Registro_errorModelo.update(
    req.body, 
    {   
        where:
        {
            idRegistro_error: req.params.idRegistro_error
        }
    }).then(Registro_error =>
    {   
        res.json(
        {
            "message":"Registro_error actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteRegistro_error=async(req,res)=>
{
    Registro_errorModelo.destroy(
    {   
        where:
        {
            idRegistro_error: req.params.idRegistro_error
        }
    }).then(Registro_error =>
    {   
        res.json(
        {
            "message":"Registro_error actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/