let store;

export function dispatch(action) {
  store.dispatch(action);
}

export function getState() {
  return store.getState();
}

export function setStore(newStore) {
  store = newStore;
}
