import { legacy_createStore as createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducer/rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxPromise, thunk))
);

export default store;
