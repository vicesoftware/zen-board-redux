import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducers/rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

let store;

export function dispatch(action) {
  store.dispatch(action);
}

export function getState() {
  return store.getState();
}

export default function configureStore(initialState) {
  if (!store) {
    store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(thunk, reduxImmutableStateInvariant()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    );
  }

  return store;
}
