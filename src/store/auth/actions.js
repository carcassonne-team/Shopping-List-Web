import axios from 'axios';
import router from '../../router/index';
// import "../../axios.js";

export default {
    async login(context, user) {
      await axios.post('auth/login', {
          email: user.email,
          password: user.password,
        })
        .then(response => {
          localStorage.setItem('token',response.data.token);
          context.commit('login',response.data);

          setInterval(() => {
            localStorage.removeItem('token');
            context.commit('logout');
            router.push('/login');
          }, 3600000);
        })
        .catch(error => {
          console.log(error.response)
          localStorage.removeItem('token')
          context.commit('errors',error.response.data.error);
        });
    },
    async register(context, user){
      await axios.post('/auth/register', {
          name: user.name,
          email: user.email,
          password: user.password,
          password_confirmation: user.password_confirmation
        })
        .then(response => {
          context.commit('register',response);
          router.push('/login');
        })
        .catch(error => {
          console.log(error.response);
          context.commit('errors',error.response);
        });
    },
    logout(context){
      localStorage.removeItem('token');
      context.commit('logout');
    },
    errors(context){
      context.commit('errors','');
    }
}