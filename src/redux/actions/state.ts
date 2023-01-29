import { VariableData } from "../../types/types";
import {
  StoreActions,
  VARIABLES_DESCRIPTION_RESPONCE,
  CHOSEN_VIN_RESPONCE,
  CHOSEN_VARIABLE_ID_RESPONCE,
  VIN_MESSAGE_RESPONCE,
  LATEST_VINS_RESPONCE,
} from "../actionTypes/state";

export const variablesDescription = (
  payload: [VariableData]
): StoreActions => ({
  type: VARIABLES_DESCRIPTION_RESPONCE,
  payload,
});

export const chosenVINDescription = (payload: []): StoreActions => ({
  type: CHOSEN_VIN_RESPONCE,
  payload,
});

export const chosenVariableDescription = (payload: number): StoreActions => ({
  type: CHOSEN_VARIABLE_ID_RESPONCE,
  payload,
});

export const VINMessage = (payload: string): StoreActions => ({
  type: VIN_MESSAGE_RESPONCE,
  payload,
});

export const LatestVINs = (payload: string): StoreActions => ({
  type: LATEST_VINS_RESPONCE,
  payload,
});
