# react-redux-keycloak

The project shows how to configure keycloak with a simple react project using redux.

This project assumes an existing keycloak server working on port 8080

The web application has three routes:
- /public
- /secured
- /2secured

The /public route can be reached by any user. The /secured and /2secured may be reached only by authorized users.
The application stores in the store the user infos after authentication on keycloak. This allows to navigate between routes of the application without asking keycloak the authorization every time. When the token expires, the application asks the user to authenticate on keycloak once again.


