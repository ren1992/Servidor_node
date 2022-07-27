import ProductoModelo from "../modelos/ProductoModelo.js";

/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/

/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllProducto=async(req,res)=>
{
    ProductoModelo.findAll().then(Producto =>
    {   
        res.json(Producto);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getProducto=async(req,res)=>
{
    ProductoModelo.findAll(
    {
        where:
        {
            idProducto: req.params.idProducto
        }
    }).then(Producto =>
    {   
        res.json(Productos);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createProducto=async(req,res)=>
{
    ProductoModelo.create(req.body).then(Producto =>
    {   
        res.json(
        {
            "message":"Producto registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateProducto=async(req,res)=>
{
    ProductoModelo.update(
    req.body, 
    {   
        where:
        {
            idProducto: req.params.idProducto
        }
    }).then(Producto =>
    {   
        res.json(
        {
            "message":"Producto actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteProducto=async(req,res)=>
{
    ProductoModelo.destroy(
    {   
        where:
        {
            idProducto: req.params.idProducto
        }
    }).then(Producto =>
    {   
        res.json(
        {
            "message":"Producto actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/