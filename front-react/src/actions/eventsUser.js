import { types } from "../types/types";
import axios from "axios";
/**
 * ACCIONES
 */
export const GestionUsuario = (event) => ({
  type: types.gestionUser,
  payload: event,
});




