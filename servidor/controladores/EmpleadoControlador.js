import EmpleadoModelo from "../modelos/EmpleadoModelo.js";

/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/

/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllEmpleado=async(req,res)=>
{
    EmpleadoModelo.findAll().then(Empleados =>
    {   
        res.json(Empleados);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getEmpleado=async(req,res)=>
{
    EmpleadoModelo.findAll(
    {
        where:
        {
            idEmpleado: req.params.idEmpleado
        }
    }).then(Empleados =>
    {   
        res.json(Empleados);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createEmpleado=async(req,res)=>
{
    EmpleadoModelo.create(req.body).then(Empleados =>
    {   
        res.json(
        {
            "message":"Empleado registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateEmpleado=async(req,res)=>
{
    EmpleadoModelo.update(
    req.body, 
    {   
        where:
        {
            idEmpleado: req.params.idEmpleado
        }
    }).then(Empleados =>
    {   
        res.json(
        {
            "message":"Empleado actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteEmpleado=async(req,res)=>
{
    EmpleadoModelo.destroy(
    {   
        where:
        {
            idEmpleado: req.params.idEmpleado
        }
    }).then(Empleados =>
    {   
        res.json(
        {
            "message":"Empleado actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 ********************Consultas relacionadas***************** 
 ==========================================================*/