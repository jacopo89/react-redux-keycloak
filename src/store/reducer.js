import * as ActionTypes from "./actions";
const initialState = {keycloak:null, authenticated:false, username:null, expireTime:0};

const reducer = (state = initialState, action) =>{

    if(action){

        if(action.type === ActionTypes.LOGIN) {

            return {...state, keycloak: action.keycloak,username: action.result.username, authenticated:action.authenticated, expireTime: action.expireTime};
        }
    }

    return state;
}

export default reducer;