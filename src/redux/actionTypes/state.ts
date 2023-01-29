import { VariableData } from "../../types/types";

export const VARIABLES_DESCRIPTION_RESPONCE = "VARIABLES_DESCRIPTION_RESPONCE";
export const CHOSEN_VIN_RESPONCE = "CHOSEN_VIN_RESPONCE";
export const CHOSEN_VARIABLE_ID_RESPONCE = "CHOSEN_VARIABLE_ID_RESPONCE";
export const VIN_MESSAGE_RESPONCE = "VIN_MESSAGE_RESPONCE";
export const LATEST_VINS_RESPONCE = "LATEST_VINS_RESPONCE";

export type VariablesDescriptionDataAction = {
  type: typeof VARIABLES_DESCRIPTION_RESPONCE;
  payload: [VariableData];
};

export type ChosenVinDataAction = {
  type: typeof CHOSEN_VIN_RESPONCE;
  payload: [];
};

export type ChosenVariableIDDataAction = {
  type: typeof CHOSEN_VARIABLE_ID_RESPONCE;
  payload: number;
};

export type VINMessageAction = {
  type: typeof VIN_MESSAGE_RESPONCE;
  payload: string;
};

export type LatestVINsAction = {
  type: typeof LATEST_VINS_RESPONCE;
  payload: string;
};

export type StoreActions =
  | VariablesDescriptionDataAction
  | ChosenVinDataAction
  | ChosenVariableIDDataAction
  | VINMessageAction
  | LatestVINsAction;
