import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import carDumbReducer from "../reducer";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
};

const bigReducer = combineReducers({
  cars: carDumbReducer,
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
