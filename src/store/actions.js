import Keycloak from "keycloak-js";
import configuration from "../components/configuration";


export const LOGIN = "LOGIN";

export const login = () => {
    const date = Math.round(new Date().getTime()/1000);
        return function(dispatch, getState){
            if(getState().authenticated !== true || date > getState().expireTime ){

                console.log("Required authentication");
                const keycloak = Keycloak(configuration);
                keycloak.init({onLoad: 'login-required'}).success(
                    (authenticated) => {

                        keycloak.loadUserProfile().success(

                            result => {
                                dispatch(syncLogin(result,authenticated, keycloak));
                            }

                        )
                    });
            }else{
                console.log("Authentication not required");
            }


        }

};

const syncLogin = (result, authenticated, keycloak) => {
    return  {
        type: LOGIN,
        result:result,
        authenticated: authenticated,
        keycloak: keycloak,
        expireTime: keycloak.tokenParsed.exp,

    }
}