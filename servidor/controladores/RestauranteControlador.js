import RestauranteModelo from "../modelos/RestauranteModelo.js";
import TarifaModelo from "../modelos/TarifaModelo.js";
import OrdenModelo from "../modelos/OrdenModelo.js";
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
 export const createCompraRestaurante=async(req,res)=>
 {    
     await TarifaModelo.findAll(
     {
         where:
         {
             producto: 'Restaurante'
         }
     }).then(async tarifa =>
     { 
         let t= JSON.stringify(tarifa, null, 2);
         let t1=JSON.parse(t)
         await OrdenModelo.create
         (
             {
                 tarifa_idtarifa: t1[0].idtarifa,
                 empresa_idempresa: req.params.idempresa,
                 precio_unitario: t1[0].valor,
                 cantida: req.params.cantidad                                    
             }
         ).then(orden =>
         {  
             let o= JSON.stringify(orden, null, 2);
             let o1=JSON.parse(o);
             console.log(o1.idorden);          
             const listaRestaurante = [];
             for(let i=0; i < req.params.cantidad;i++)
             {
                 listaRestaurante.push
                 (
                     {                      
                         orden_idorden:o1.idorden
                     }
                 )
             } 
             RestauranteModelo.bulkCreate
             (
                 listaRestaurante
             ).then(restuarante =>
             {   
                 res.json(
                 {
                     "message":"Orden agragada al carrito"
                 }); 
             }).catch(error =>
             {
                 res.json({message: error.message});
             });                                              
         }).catch(error =>
         {
             res.json({message: error.message});
         });        
     }).catch(error =>
     {
         res.json({message: error.message});
     });  
 } 

