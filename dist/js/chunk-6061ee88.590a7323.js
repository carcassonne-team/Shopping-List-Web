(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6061ee88"],{2563:function(e,t,a){"use strict";a("c560")},3619:function(e,t,a){},3665:function(e,t,a){"use strict";a.r(t);var s=a("7a23");const r=Object(s["J"])("data-v-7434d766");Object(s["t"])("data-v-7434d766");const o=Object(s["h"])("h1",{class:"text-center pb-2"},"Register for free account",-1),c={class:"mb-3"},n=Object(s["h"])("label",{for:"nameInput",class:"form-label orange"},"Name",-1),l={class:"mb-3"},i=Object(s["h"])("label",{for:"EmailInput",class:"form-label orange"},"Email address",-1),d={class:"mb-3"},b=Object(s["h"])("label",{for:"PassInput",class:"form-label orange"},"Password",-1),u={class:"mb-3"},m=Object(s["h"])("label",{for:"ConfPassInput",class:"form-label orange"},"Confirm password",-1),p=Object(s["h"])("div",{class:"text-center"},[Object(s["h"])("button",{type:"submit",class:"btn btn-primary mt-3"},"Register")],-1);Object(s["r"])();const h=r((e,t,a,h,f,O)=>{const j=Object(s["y"])("auth");return Object(s["q"])(),Object(s["d"])(j,null,{default:r(()=>[Object(s["h"])("form",{onSubmit:t[5]||(t[5]=Object(s["I"])((...e)=>O.handleRegister&&O.handleRegister(...e),["prevent"])),method:"POST"},[o,Object(s["h"])("div",c,[n,Object(s["H"])(Object(s["h"])("input",{type:"text",class:"form-control",id:"nameInput","onUpdate:modelValue":t[1]||(t[1]=e=>f.name=e),required:""},null,512),[[s["E"],f.name]])]),Object(s["h"])("div",l,[i,Object(s["H"])(Object(s["h"])("input",{type:"email",class:"form-control",id:"EmailInput","onUpdate:modelValue":t[2]||(t[2]=e=>f.email=e),required:""},null,512),[[s["E"],f.email]])]),Object(s["h"])("div",d,[b,Object(s["H"])(Object(s["h"])("input",{type:"password",class:"form-control",id:"PassInput","onUpdate:modelValue":t[3]||(t[3]=e=>f.password=e),required:""},null,512),[[s["E"],f.password]])]),Object(s["h"])("div",u,[m,Object(s["H"])(Object(s["h"])("input",{type:"password",class:"form-control",id:"ConfPassInput","onUpdate:modelValue":t[4]||(t[4]=e=>f.confirmPassword=e),required:""},null,512),[[s["E"],f.confirmPassword]])]),p],32)]),_:1})});var f=a("ecf1"),O=a("e75f"),j={name:"Register",data(){return{name:"",email:"",password:"",confirmPassword:""}},components:{Auth:f["a"]},methods:{async handleRegister(){await this.$store.dispatch("register",{name:this.name,email:this.email,password:this.password,password_confirmation:this.confirmPassword}).then(()=>{400===this.$store.getters.statusError&&O["a"].AlertFail(this.$store.getters.errors)})}},mounted(){this.$store.dispatch("errors")}};a("2563");j.render=h,j.__scopeId="data-v-7434d766";t["default"]=j},a82f:function(e,t,a){"use strict";a("3619")},c560:function(e,t,a){},e75f:function(e,t,a){"use strict";var s=a("3d20"),r=a.n(s);window.Swal=r.a;var o={AlertFail:e=>{r.a.fire({title:"something wrong!",text:e,icon:"error"})}};t["a"]=o},ecf1:function(e,t,a){"use strict";var s=a("7a23");const r=Object(s["J"])("data-v-34a32ad2");Object(s["t"])("data-v-34a32ad2");const o={class:"containerBG"},c=Object(s["h"])("i",{class:"fas fa-arrow-left white fs-1 pt-3 px-3"},null,-1),n={class:"container"},l={class:"card position-absolute top-50 start-50 translate-middle"},i={class:"card-body"};Object(s["r"])();const d=r((e,t,a,d,b,u)=>{const m=Object(s["y"])("router-link");return Object(s["q"])(),Object(s["d"])("div",o,[Object(s["h"])(m,{to:"/"},{default:r(()=>[c]),_:1}),Object(s["h"])("div",n,[Object(s["h"])("div",l,[Object(s["h"])("div",i,[Object(s["x"])(e.$slots,"default")])])])])});var b={name:"Register",data(){return{email:"",password:""}},methods:{handleRegister(){console.log("register")}}};a("a82f");b.render=d,b.__scopeId="data-v-34a32ad2";t["a"]=b}}]);
//# sourceMappingURL=chunk-6061ee88.590a7323.js.map