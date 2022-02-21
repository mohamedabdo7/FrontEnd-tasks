import { createStore, applyMiddleware, compose } from "redux";

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import thunk from "redux-thunk";

import rootReducer from "./reducers";

// let store: Store;

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// if (process.env.NODE_ENV === "production") {
//   store = createStore(rootReducer, applyMiddleware(thunk));
// } else {
//   store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// }

export default store;
