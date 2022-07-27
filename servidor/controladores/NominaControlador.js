import NominaModelo from "../modelos/NominaModelo.js";

/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/

/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllNomina=async(req,res)=>
{
    NominaModelo.findAll().then(Nomina =>
    {   
        res.json(Nomina);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getNomina=async(req,res)=>
{
    NominaModelo.findAll(
    {
        where:
        {
            idNomina: req.params.idNomina
        }
    }).then(Nomina =>
    {   
        res.json(Nominas);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createNomina=async(req,res)=>
{
    NominaModelo.create(req.body).then(Nomina =>
    {   
        res.json(
        {
            "message":"Nomina registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateNomina=async(req,res)=>
{
    NominaModelo.update(
    req.body, 
    {   
        where:
        {
            idNomina: req.params.idNomina
        }
    }).then(Nomina =>
    {   
        res.json(
        {
            "message":"Nomina actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteNomina=async(req,res)=>
{
    NominaModelo.destroy(
    {   
        where:
        {
            idNomina: req.params.idNomina
        }
    }).then(Nomina =>
    {   
        res.json(
        {
            "message":"Nomina actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/