export default {
    getToken: state => state.token,
    authStatus: state => state.status,
    errors: state => state.errors,
    login: state => state.login,
    statusError: state => state.statusError,
};