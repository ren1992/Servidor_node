/*==========================================================
 ***********************Importaciones************************** 
==========================================================*/
import EmpresaModelo from "../modelos/EmpresaModelo.js";
import NominaModelo from "../modelos/NominaModelo.js";
import MenuModelo from "../modelos/MenuModelo.js";
import RestauranteModelo from "../modelos/RestauranteModelo.js";
import MesaModelo from "../modelos/MesaModelo.js";
import EmpleadoModelo from "../modelos/EmpleadoModelo.js";
import { Op, Sequelize } from "sequelize";
/*==========================================================
 ***********************Relaciones************************** 
==========================================================*/
EmpresaModelo.hasMany
(
    RestauranteModelo,
    {
        foreignKey:'empresa_idempresa', 
        targetKey:'idempresa'
    }
);

RestauranteModelo.hasOne
(
    NominaModelo,
    {
        foreignKey:'restaurante_idrestaurante', 
        targetKey:'idrestaurante'
    }
);

RestauranteModelo.hasOne
(
    MesaModelo,
    {
        foreignKey:'restaurante_idrestaurante', 
        targetKey:'idrestaurante'
    }
);

RestauranteModelo.hasOne
(
    MenuModelo,
    {
        foreignKey:'restaurante_idrestaurante', 
        targetKey:'idrestaurante'
    }
);
 
NominaModelo.hasOne
(
    EmpleadoModelo,
    {
        foreignKey:'nomina_idnomina', 
        targetKey:'idnomina'
    }
);

/*==========================================================
 ********************Consultas básicas********************** 
==========================================================*/
export const getAllEmpresa=async(req,res)=>
{
    EmpresaModelo.findAll().then(Empresa =>
    {   
        res.json(Empresa);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getEmpresa=async(req,res)=>
{
    EmpresaModelo.findAll(
    {
        where:
        {
            idEmpresa: req.params.idEmpresa
        }
    }).then(Empresa =>
    {   
        res.json(Empresas);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createEmpresa=async(req,res)=>
{
    EmpresaModelo.create(req.body).then(Empresa =>
    {   
        res.json(
        {
            "message":"Empresa registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateEmpresa=async(req,res)=>
{
    EmpresaModelo.update(
    req.body, 
    {   
        where:
        {
            idEmpresa: req.params.idEmpresa
        }
    }).then(Empresa =>
    {   
        res.json(
        {
            "message":"Empresa actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteEmpresa=async(req,res)=>
{
    EmpresaModelo.destroy(
    {   
        where:
        {
            idEmpresa: req.params.idEmpresa
        }
    }).then(Empresa =>
    {   
        res.json(
        {
            "message":"Empresa actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/

export const consultarDatoEmpresa=async(req,res)=>
{
    await EmpresaModelo.findAll(
    {
        where: 
        {  
            gerente_idgerente: req.params.idgerente                             
        }, 
        include: 
        [
            {
                model:RestauranteModelo,
                include: 
                [
                    {
                        model:NominaModelo,
                        include:
                        [
                            {
                                model:EmpleadoModelo
                            }
                        ],
                        attributes:[]                                     
                    },
                    {
                        model:MesaModelo,
                        attributes:[]           
                    },
                    {
                        model:MenuModelo,
                        attributes:[]                           
                    }                    
                ],
                attributes:
                [
                    'idrestaurante',
                    'nombre',
                    'direccion',
                    [Sequelize.fn('COALESCE',Sequelize.col('idmenu'),0,Sequelize.fn('count', Sequelize.col('idmenu'))), 'platos'],
                    [Sequelize.fn('COALESCE',Sequelize.col('idmesa'),0,Sequelize.fn('count', Sequelize.col('idmesa'))), 'mesas'],
                    [Sequelize.fn('COALESCE',Sequelize.col('idempleado'),0,Sequelize.fn('count', Sequelize.col('idempleado'))), 'empleados']
                ]              
            }            
        ],
        attributes:['nombre'], 
        group:'idrestaurante'       
    }).then(empresa =>
    {   
        res.json(empresa);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 


export const consultarDatoEmpresaCopia=async(req,res)=>
{
    await EmpresaModelo.findAll(
    {
        where: 
        {  
            gerente_idgerente: req.params.idgerente                  
        }, 
        include: 
        [
            {
                model:RestauranteModelo,
                include: 
                [
                    {
                        model:NominaModelo,
                        include:
                        [
                            {
                                model:EmpleadoModelo,
                                attributes: 
                                [
                                    [Sequelize.fn('COALESCE',Sequelize.col('idempleado'),0,Sequelize.fn('count', Sequelize.col('idempleado'))), 'empleados']
                                ] 
                            }
                        ],
                        attributes:['idnomina']                                     
                    },
                    {
                        model:MesaModelo,
                        attributes: 
                        [
                            [Sequelize.fn('COALESCE',Sequelize.col('idmesa'),0,Sequelize.fn('count', Sequelize.col('idmesa'))), 'mesas']
                        ]              
                    },
                    {
                        model:MenuModelo,
                        attributes: 
                        [
                            [Sequelize.fn('COALESCE',Sequelize.col('idmenu'),0,Sequelize.fn('count', Sequelize.col('idmenu'))), 'platos']
                        ]                             
                    }                    
                ],
                attributes:['idrestaurante','nombre','direccion']              
            }            
        ],
        attributes:['nombre'], 
        group:'idrestaurante'       
    }).then(empresa =>
    {   
        res.json(empresa);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

