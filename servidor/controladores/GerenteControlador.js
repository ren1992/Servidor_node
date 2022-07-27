import GerenteModelo from "../modelos/GerenteModelo.js";

/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/

/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllGerente=async(req,res)=>
{
    GerenteModelo.findAll().then(Gerente =>
    {   
        res.json(Gerente);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getGerente=async(req,res)=>
{
    GerenteModelo.findAll(
    {
        where:
        {
            idGerente: req.params.idGerente
        }
    }).then(Gerente =>
    {   
        res.json(Gerente);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createGerente=async(req,res)=>
{
    GerenteModelo.create(req.body).then(Gerente =>
    {   
        res.json(
        {
            "message":"Gerente registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateGerente=async(req,res)=>
{
    GerenteModelo.update(
    req.body, 
    {   
        where:
        {
            idGerente: req.params.idGerente
        }
    }).then(Gerentes =>
    {   
        res.json(
        {
            "message":"Gerente actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteGerente=async(req,res)=>
{
    GerenteModelo.destroy(
    {   
        where:
        {
            idGerente: req.params.idGerente
        }
    }).then(Gerentes =>
    {   
        res.json(
        {
            "message":"Gerente actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 ********************Consultas relacionadas***************** 
 ==========================================================*/