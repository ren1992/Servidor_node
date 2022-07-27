import { types } from "../types/types";

const initialState = {};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.gestionNombreRestaurante:
      return {
        ...state,
        nombreRestaurante: action.payload,
      };

    case types.gestionNickUsuario:
      return {
        ...state,
        nick: action.payload,
      };

      case types.uiServiciosMesa:
        return {
          ...state,
          servicioMesa: action.payload,
        };

        case types.gestionUser:
          return {
            ...state,
            user: action.payload,
          };

      
    default:
      return state;
  }
};
