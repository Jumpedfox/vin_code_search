import { combineReducers } from "redux";
import { stateReducer } from "./reducers/state";

const RootReducer = combineReducers({
  state: stateReducer,
});
export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
