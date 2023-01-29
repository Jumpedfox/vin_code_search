import { VariableData } from "../../types/types";
import {
  StoreActions,
  VARIABLES_DESCRIPTION_RESPONCE,
  CHOSEN_VIN_RESPONCE,
  CHOSEN_VARIABLE_ID_RESPONCE,
  VIN_MESSAGE_RESPONCE,
  LATEST_VINS_RESPONCE,
} from "../actionTypes/state";

interface State {
  variablesDescription: [VariableData];
  chosenVIN: [];
  chosenVariableID: number;
  VINMessage: string;
  latestVINs: string[];
}

const initialState: State = {
  variablesDescription: [{ Name: "", Description: "", ID: 0 }],
  chosenVIN: [],
  chosenVariableID: 0,
  VINMessage: "",
  latestVINs: [],
};

export const stateReducer = (
  state = initialState,
  action: StoreActions
): State => {
  switch (action.type) {
    case VARIABLES_DESCRIPTION_RESPONCE:
      return {
        ...state,
        variablesDescription: action.payload,
      };
    case CHOSEN_VIN_RESPONCE:
      return {
        ...state,
        chosenVIN: action.payload,
      };
    case CHOSEN_VARIABLE_ID_RESPONCE:
      return {
        ...state,
        chosenVariableID: action.payload,
      };
    case VIN_MESSAGE_RESPONCE:
      return {
        ...state,
        VINMessage: action.payload,
      };
    case LATEST_VINS_RESPONCE:
      return {
        ...state,
        latestVINs:
          state.latestVINs.length < 5
            ? [...state.latestVINs, action.payload]
            : [...state.latestVINs.slice(1), action.payload],
      };
    default:
      return state;
  }
};
