// This is a duck: https://github.com/erikras/ducks-modular-redux
import {beginAjaxCall} from "../app/ajaxStatus";
import initialState from "../../reducers/initialState";

// actions
const GET_RESPONSE = "zen/reducer/GET_RESPONSE";

// reducer
export default function reducer(state = initialState.reducer, action) {
    switch (action.type) {

        case GET_RESPONSE:
            return action.payload.reducer;

        default:
            return state;
    }
}

// action creators
function getreducerResponse(projects) {
    return {
        type: GET_RESPONSE,
        payload: {
            projects
        }
    };
}

export function getreducer(by) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return projectApi.reducer(by)
            .then(projects => {
                dispatch(getreducerResponse(projects));
            })
            .catch(error => {
                throw(error);
            }); // real error handling coming soon :)
    };
}
