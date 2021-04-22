import router from "../../router";

export default {
    login(state, data) {
      state.token = data.token;
      state.user = data;
      state.login = true;
      // localStorage.setItem('token', data.token);
      router.push('/')
    },
    register(state, token){
      console.log(state,token);
    },
    logout(state){
      state.token = '';
      state.login = false;
    },
    errors(state, context){
      state.errors = context;
    }
};