const configuration = {
    realm: "react-keycloak",
    url: "http://localhost:8080/auth/",
    sslRequired: "external",
    clientId:"my-react-client",
    publicClient: true,
    confidentialPort: 0
};
export default configuration