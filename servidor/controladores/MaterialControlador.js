import MaterialModelo from "../modelos/MaterialModelo.js";

/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/

/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllMaterial=async(req,res)=>
{
    MaterialModelo.findAll().then(Material =>
    {   
        res.json(Material);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getMaterial=async(req,res)=>
{
    MaterialModelo.findAll(
    {
        where:
        {
            idMaterial: req.params.idMaterial
        }
    }).then(Material =>
    {   
        res.json(Materials);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createMaterial=async(req,res)=>
{
    MaterialModelo.create(req.body).then(Material =>
    {   
        res.json(
        {
            "message":"Material registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateMaterial=async(req,res)=>
{
    MaterialModelo.update(
    req.body, 
    {   
        where:
        {
            idMaterial: req.params.idMaterial
        }
    }).then(Material =>
    {   
        res.json(
        {
            "message":"Material actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteMaterial=async(req,res)=>
{
    MaterialModelo.destroy(
    {   
        where:
        {
            idMaterial: req.params.idMaterial
        }
    }).then(Material =>
    {   
        res.json(
        {
            "message":"Material actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/