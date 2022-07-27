import CompraModelo from "../modelos/CompraModelo.js";

/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/

/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllCompra=async(req,res)=>
{
    CompraModelo.findAll().then(Compra =>
    {   
        res.json(Compra);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getCompra=async(req,res)=>
{
    CompraModelo.findAll(
    {
        where:
        {
            idCompra: req.params.idCompra
        }
    }).then(Compra =>
    {   
        res.json(Compras);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createCompra=async(req,res)=>
{
    CompraModelo.create(req.body).then(Compra =>
    {   
        res.json(
        {
            "message":"Compra registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateCompra=async(req,res)=>
{
    CompraModelo.update(
    req.body, 
    {   
        where:
        {
            idCompra: req.params.idCompra
        }
    }).then(Compra =>
    {   
        res.json(
        {
            "message":"Compra actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteCompra=async(req,res)=>
{
    CompraModelo.destroy(
    {   
        where:
        {
            idCompra: req.params.idCompra
        }
    }).then(Compra =>
    {   
        res.json(
        {
            "message":"Compra actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/