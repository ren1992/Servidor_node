import { types } from "../types/types";
import axios from 'axios'

export const gestionAñadirNombre = (event)=>({
    type:types.gestionNombreRestaurante,
    payload:event,
})

export const gestionAñadirNick = (event)=>({
    type:types.gestionNickUsuario,
    payload:event,
})

export const OpenUiServicioMesa = (event)=>({
    type:types.uiServiciosMesa,
    payload:event,
})




/*
Api inciar Sesion
*/


