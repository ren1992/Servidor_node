import MenuModelo from "../modelos/MenuModelo.js";
import PlatoModelo from "../modelos/PlatoModelo.js";

/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/

 MenuModelo.belongsTo
 (
    PlatoModelo,
    {
        foreignKey:'plato_idplato', 
        targetKey:'idplato'
    }
);
 
/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllMenu=async(req,res)=>
{
    MenuModelo.findAll().then(Menu =>
    {   
        res.json(Menu);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getMenu=async(req,res)=>
{
    MenuModelo.findAll(
    {
        where:
        {
            idMenu: req.params.idMenu
        }
    }).then(Menu =>
    {   
        res.json(Menus);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createMenu=async(req,res)=>
{
    console.log(req.body);
    MenuModelo.create(req.body).then(Menu =>
    {   
        res.json(
        {
            "message":"Menu registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateMenu=async(req,res)=>
{
    MenuModelo.update(
    req.body, 
    {   
        where:
        {
            idmenu: req.params.idmenu
        }
    }).then(Menu =>
    {   
        res.json(
        {
            "message":"Menu actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteMenu=async(req,res)=>
{
    MenuModelo.destroy(
    {   
        where:
        {
            idMenu: req.params.idMenu
        }
    }).then(Menu =>
    {   
        res.json(
        {
            "message":"Menu actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/
 export const getAllMenuRestaurante=async(req,res)=>
 {
     await MenuModelo.findAll(
     {
         where: 
         {  
            restaurante_idrestaurante: req.params.idrestaurante                  
         }, 
         include: 
         [                   
            {
                model:PlatoModelo                                 
            }                         
         ],
         attributes:
         [
            'estado'
         ]
     }).then(restaurante =>
     {   
         res.json(restaurante);
     }).catch(error =>
     {
         res.json({message: error.message});
     });
 } 