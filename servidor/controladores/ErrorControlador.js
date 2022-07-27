import ErorrModelo from "../modelos/ErorrModelo.js";

/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/

/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllErorr=async(req,res)=>
{
    ErorrModelo.findAll().then(Erorr =>
    {   
        res.json(Erorr);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getErorr=async(req,res)=>
{
    ErorrModelo.findAll(
    {
        where:
        {
            idErorr: req.params.idErorr
        }
    }).then(Erorr =>
    {   
        res.json(Erorrs);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createErorr=async(req,res)=>
{
    ErorrModelo.create(req.body).then(Erorr =>
    {   
        res.json(
        {
            "message":"Erorr registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateErorr=async(req,res)=>
{
    ErorrModelo.update(
    req.body, 
    {   
        where:
        {
            idErorr: req.params.idErorr
        }
    }).then(Erorr =>
    {   
        res.json(
        {
            "message":"Erorr actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteErorr=async(req,res)=>
{
    ErorrModelo.destroy(
    {   
        where:
        {
            idErorr: req.params.idErorr
        }
    }).then(Erorr =>
    {   
        res.json(
        {
            "message":"Erorr actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/