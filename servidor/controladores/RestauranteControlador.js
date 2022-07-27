import RestauranteModelo from "../modelos/RestauranteModelo.js";

/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/

/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllRestaurante=async(req,res)=>
{
    RestauranteModelo.findAll().then(Restaurante =>
    {   
        res.json(Restaurante);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getRestaurante=async(req,res)=>
{
    RestauranteModelo.findAll(
    {
        where:
        {
            idRestaurante: req.params.idRestaurante
        }
    }).then(Restaurante =>
    {   
        res.json(Restaurantes);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createRestaurante=async(req,res)=>
{
    RestauranteModelo.create(req.body).then(Restaurante =>
    {   
        res.json(
        {
            "message":"Restaurante registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateRestaurante=async(req,res)=>
{
    RestauranteModelo.update(
    req.body, 
    {   
        where:
        {
            idRestaurante: req.params.idRestaurante
        }
    }).then(Restaurante =>
    {   
        res.json(
        {
            "message":"Restaurante actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteRestaurante=async(req,res)=>
{
    RestauranteModelo.destroy(
    {   
        where:
        {
            idRestaurante: req.params.idRestaurante
        }
    }).then(Restaurante =>
    {   
        res.json(
        {
            "message":"Restaurante actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/


