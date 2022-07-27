import TurnoModelo from "../modelos/TurnoModelo.js";

/*==========================================================
 ***********************Relaciones************************** 
 ==========================================================*/

/*==========================================================
 ********************Consultas básicas********************** 
 ==========================================================*/
export const getAllTurno=async(req,res)=>
{
    TurnoModelo.findAll().then(Turno =>
    {   
        res.json(Turno);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const getTurno=async(req,res)=>
{
    TurnoModelo.findAll(
    {
        where:
        {
            idTurno: req.params.idTurno
        }
    }).then(Turno =>
    {   
        res.json(Turnos);
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const createTurno=async(req,res)=>
{
    TurnoModelo.create(req.body).then(Turno =>
    {   
        res.json(
        {
            "message":"Turno registrado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const updateTurno=async(req,res)=>
{
    TurnoModelo.update(
    req.body, 
    {   
        where:
        {
            idTurno: req.params.idTurno
        }
    }).then(Turno =>
    {   
        res.json(
        {
            "message":"Turno actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
} 

export const deleteTurno=async(req,res)=>
{
    TurnoModelo.destroy(
    {   
        where:
        {
            idTurno: req.params.idTurno
        }
    }).then(Turno =>
    {   
        res.json(
        {
            "message":"Turno actualizado"
        });
    }).catch(error =>
    {
        res.json({message: error.message});
    });
}

/*==========================================================
 *******************Consultas relacionadas****************** 
 ==========================================================*/