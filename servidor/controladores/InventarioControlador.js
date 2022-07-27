import InventarioModelo from "../modelos/InventarioModelo.js";

/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/

/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllInventario=async(req,res)=>
{
    InventarioModelo.findAll().then(Inventario =>
    {   
        res.json(Inventario);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getInventario=async(req,res)=>
{
    InventarioModelo.findAll(
    {
        where:
        {
            idInventario: req.params.idInventario
        }
    }).then(Inventario =>
    {   
        res.json(Inventarios);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createInventario=async(req,res)=>
{
    InventarioModelo.create(req.body).then(Inventario =>
    {   
        res.json(
        {
            "message":"Inventario registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateInventario=async(req,res)=>
{
    InventarioModelo.update(
    req.body, 
    {   
        where:
        {
            idInventario: req.params.idInventario
        }
    }).then(Inventario =>
    {   
        res.json(
        {
            "message":"Inventario actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteInventario=async(req,res)=>
{
    InventarioModelo.destroy(
    {   
        where:
        {
            idInventario: req.params.idInventario
        }
    }).then(Inventario =>
    {   
        res.json(
        {
            "message":"Inventario actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/