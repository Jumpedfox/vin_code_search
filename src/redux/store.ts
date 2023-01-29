import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import storage from "../helpers/storageHelper";
import rootReducer, { RootState } from "./rootReducer";

const preloadedState = storage.getItem<RootState>("store") || {};

const composeEnhancers = composeWithDevTools({ trace: true });

const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware())
);

store.subscribe(() => {
  storage.setItem("store", store.getState());
});

export default store;