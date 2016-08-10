import _ from "lodash";


export function checkAccess(requiredLevel, currentLevel) {
  return true;
}

export function accessEquals(requiredLevel, currentLevel) {
  return requiredLevel.bitMask === currentLevel.bitMask;
}

export class NotAuthorizedException {
  constructor(to = "/sign-in") {
    this.redirectTo = to;
  }
}

export class AccessDeniedException {
  constructor(to = "/403") {
    this.redirectTo = to;
  }
}

/*
 Method to build a distinct bit mask for each role
 It starts off with "1" and shifts the bit to the left for each element in the
 roles array parameter
 */
export function buildRoles(roles) {
  let bitMask = "01";

  // dbg
  const userRoles = _.reduce(roles, (result, role) => {
    const intCode = parseInt(bitMask, 2);
    result[role] = {
      bitMask: intCode,
      title: role
    };
    bitMask = (intCode << 1 ).toString(2);
    return result;
  }, {});

  return userRoles;
}

/*
 This method builds access level bit masks based on the accessLevelDeclaration parameter which must
 contain an array for each access level containing the allowed user roles.
 */
export function buildAccessLevels(accessLevelDeclarations, userRoles) {

  /*
   Zero step - transform
   { level1Name: level1, level2Name: level2 } object
   =>
   [ { name: level1Name, level: level1 }, { name: level2Name, level: level2 } ] array
   */
  const declarationsArr = _.map(accessLevelDeclarations, (level, name) => ({ name, level }));

  /*
   First step: filter access levels like:
   "public": "*",
   That means every user role enabled, so bitMask => sum of all bit masks
   */
  let accessLevels = _
      .filter(declarationsArr, ({ level }) => typeof level === "string") // eslint-disable-line no-shadow
      .reduce((result, { level, name }) => { // eslint-disable-line no-shadow

        const resultBitMask = _.reduce(userRoles, (result) => result + "1", ""); // eslint-disable-line no-shadow

        result[name] = {
          bitMask: parseInt(resultBitMask, 2)
        };

        return result;
      }, {})
    ;

  /*
   Second step: filter access levels like:
   "user": ["user", "admin"],
   That means we need to iterate on ["user", "admin"] array and summ bit mask for "user" and "admin"
   */
  accessLevels = _
    .filter(declarationsArr, ({ level }) => typeof level !== "string") // eslint-disable-line no-shadow
    .reduce((result, { level, name }) => { // eslint-disable-line no-shadow
      const levelName = name;
      const levelsArr = level;
      const resultBitMask = _.reduce(levelsArr, (resultBitMask, roleName) => { // eslint-disable-line no-shadow

        return resultBitMask | userRoles[roleName].bitMask;
      }, 0);


      result[name] = {
        bitMask: resultBitMask
      };
      return result;
    }, accessLevels)
  ;
  return accessLevels;
}
