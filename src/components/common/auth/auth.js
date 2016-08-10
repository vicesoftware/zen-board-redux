// import { createStore, getActionIds } from '../redux/helpers.js';
// import { AuthActions } from '../actions/AuthActions';
// import { userRoles, accessLevels } from '../access';

// const actions = getActionIds(AuthActions);
// const initialState = {
//   accessLvl: userRoles.public
// };
//
// export const auth = createStore(initialState, {
//
//   [actions.authenticate.success]: (state, action) => {
//     return {
//       ...state,
//       accessLvl: action.result.accessLvl
//     };
//   },
//
// });

export function isAuthorized(state) {
  // return state.accessLvl.bitMask !== accessLevels.anon.bitMask;
  return false;
}
