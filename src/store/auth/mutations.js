import router from "../../router";

export default {
    login(state, data) {
      state.statusError = 200;
      state.token = data.token;
      state.user = data;
      state.login = true;
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
      state.errors = context.data;
      state.statusError = context.status;
    }
};