import ClienteModelo from "../modelos/ClienteModelo.js";

/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/

/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllCliente=async(req,res)=>
{
    ClienteModelo.findAll().then(Cliente =>
    {   
        res.json(Cliente);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getCliente=async(req,res)=>
{
    ClienteModelo.findAll(
    {
        where:
        {
            idcliente: req.params.idcliente
        }
    }).then(cliente =>
    {   
        res.json(cliente);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createCliente=async(req,res)=>
{
    ClienteModelo.create(req.body).then(Cliente =>
    {   
        res.json(
        {
            "message":"Cliente registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateCliente=async(req,res)=>
{
    ClienteModelo.update(
    req.body, 
    {   
        where:
        {
            idCliente: req.params.idCliente
        }
    }).then(Cliente =>
    {   
        res.json(
        {
            "message":"Cliente actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteCliente=async(req,res)=>
{
    ClienteModelo.destroy(
    {   
        where:
        {
            idCliente: req.params.idCliente
        }
    }).then(Cliente =>
    {   
        res.json(
        {
            "message":"Cliente actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/