import { types } from "../types/types";
import axios from 'axios'

export const gestionA├▒adirNombre = (event)=>({
    type:types.gestionNombreRestaurante,
    payload:event,
})

export const gestionA├▒adirNick = (event)=>({
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


