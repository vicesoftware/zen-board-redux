import { isAuthorized } from './auth';
import { checkAccess } from './authHelpers';

/**
 * Creates requireAccess function and binds it to redux.
 *
 * @param redux Redux instance
 * @param {Function} notAuthorizedHandler called when access is denied and user is not authorized (eq 401 code)
 * @param {Function} accessDeniedHandler called when access is denied for current user (eq 403 code)
 * @returns {Function} Return function with signature requireAuth(accessLevel, [checkAccessHandler]).
 *  checkAccessHandler is optional, by default checkAccessHandler = checkAccess (from access-helpers.js)
 */
export default function bindCheckAuth(
  getUserProfile,
  notAuthorizedHandler,
  accessDeniedHandler) {
  return (accessLevel, callback, checkAccessHandler = checkAccess) =>
    (nextState, replace) => {
      const userProfile = getUserProfile();
      let currentAccessLvl; //= state.accessLvl;

      if (checkAccessHandler(accessLevel, userProfile)) {
        // Access granted
        return;
      }

      if (!isAuthorized(userProfile)) {
        notAuthorizedHandler(nextState, replace);
        return;
      }

      accessDeniedHandler(nextState, replace);
    };
}
