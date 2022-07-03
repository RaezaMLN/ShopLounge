import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducers from "./reducer";

const enhancer = compose(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducers, enhancer);

export { store };
