(function(e){function t(t){for(var n,a,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);h&&h(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},a={app:0},r={app:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-181d8078":"e379c9f3","chunk-2d0c4d85":"f0a8724e","chunk-0165f97e":"c3d2133f","chunk-466c57b0":"4001cafb","chunk-6061ee88":"590a7323","chunk-65f2fff8":"520a237f","chunk-2d0e6685":"5aee000e","chunk-52bda599":"26bd2400","chunk-66b60477":"fb97f530"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o={"chunk-181d8078":1,"chunk-0165f97e":1,"chunk-466c57b0":1,"chunk-6061ee88":1,"chunk-65f2fff8":1,"chunk-52bda599":1,"chunk-66b60477":1};a[e]?t.push(a[e]):0!==a[e]&&o[e]&&t.push(a[e]=new Promise((function(t,o){for(var n="css/"+({}[e]||e)+"."+{"chunk-181d8078":"010fd9f2","chunk-2d0c4d85":"31d6cfe0","chunk-0165f97e":"1d7c3aef","chunk-466c57b0":"542569ec","chunk-6061ee88":"004362b4","chunk-65f2fff8":"0ca1f0de","chunk-2d0e6685":"31d6cfe0","chunk-52bda599":"069a22a7","chunk-66b60477":"9b11d870"}[e]+".css",r=i.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],h.parentNode.removeChild(h),o(s)},h.href=r;var g=document.getElementsByTagName("head")[0];g.appendChild(h)})).then((function(){a[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,o[1](d)}r[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Web/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function a(e,t,o,a,r,s){const c=Object(n["y"])("router-view");return Object(n["q"])(),Object(n["d"])(c)}var r={};r.render=a;var s=r,c=o("6c02");const i=[{path:"/",redirect:"/lists"},{path:"/lists",name:"Lists",component:()=>Promise.all([o.e("chunk-2d0c4d85"),o.e("chunk-466c57b0")]).then(o.bind(null,"63a9"))},{path:"/test",name:"Test",component:()=>o.e("chunk-2d0e6685").then(o.bind(null,"992a"))},{path:"/lists/:id",name:"List",component:()=>Promise.all([o.e("chunk-2d0c4d85"),o.e("chunk-0165f97e")]).then(o.bind(null,"e412")),meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:()=>Promise.all([o.e("chunk-2d0c4d85"),o.e("chunk-65f2fff8")]).then(o.bind(null,"c587")),beforeEnter:(e,t,o)=>{let n=localStorage.getItem("token");n?(o(),u.push("/")):o(!0)}},{path:"/settings",name:"Settings",component:()=>o.e("chunk-66b60477").then(o.bind(null,"4d78")),meta:{requiresAuth:!0}},{path:"/register",name:"Register",component:()=>Promise.all([o.e("chunk-2d0c4d85"),o.e("chunk-6061ee88")]).then(o.bind(null,"3665")),beforeEnter:(e,t,o)=>{let n=localStorage.getItem("token");n?(o(),u.push("/")):o(!0)}},{path:"/code",name:"Access Code",component:()=>o.e("chunk-52bda599").then(o.bind(null,"b7c9")),meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",component:()=>o.e("chunk-181d8078").then(o.bind(null,"3287"))}],u=Object(c["a"])({history:Object(c["b"])("/Web/"),routes:i});u.beforeEach((e,t,o)=>{document.title=e.name,o()}),u.beforeEach((e,t,o)=>e.matched.some(e=>e.meta.requiresAuth)?localStorage.getItem("token")?o():void o("/login"):o());var l=u,d=o("5502"),h=o("0e44"),g={getToken:e=>e.token,authStatus:e=>e.status,errors:e=>e.errors,login:e=>e.login,statusError:e=>e.statusError},m={status:"",token:"",user:{},errors:"",login:!1,statusError:200},p={login(e,t){e.statusError=200,e.token=t.token,e.user=t,e.login=!0,l.push("/")},register(e,t){console.log(e,t)},logout(e){e.token="",e.login=!1},errors(e,t){e.errors=t,e.statusError=400}},f=o("bc3a"),b=o.n(f),k={async login(e,t){await b.a.post("auth/login",{email:t.email,password:t.password}).then(t=>{localStorage.setItem("token",t.data.token),e.commit("login",t.data),setInterval(()=>{localStorage.removeItem("token"),e.commit("logout"),l.push("/login")},36e5)}).catch(t=>{console.log(t.response),localStorage.removeItem("token"),e.commit("errors",t.response.data.error)})},async register(e,t){await b.a.post("/auth/register",{name:t.name,email:t.email,password:t.password,password_confirmation:t.password_confirmation}).then(t=>{e.commit("register",t),l.push("/login")}).catch(t=>{console.log(t.response),e.commit("errors",t.response.data),window.sessionStorage.setItem("error",t.response.data.error)})},logout(e){localStorage.removeItem("token"),e.commit("logout")},errors(e){e.commit("errors","")}},y={plugins:[Object(h["a"])({storage:window.sessionStorage})],state:m,getters:g,mutations:p,actions:k},w={lists:e=>e.lists},v={lists:null},O={listCreate(e,t){e.lists+=t},getLists(e,t){e.lists=t},deleteList(e,t){e.lists.splice(t,1)},shareCode(e,t){console.log(t)}};b.a.defaults.baseURL="http://projekt.shoplist.site:8080/api",b.a.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("token");var j={async listCreate(e,t){await b.a.post("lists/create",{name:t}).then(t=>{e.commit("listCreate",t.data)}).catch(e=>{console.log(e)})},async getLists(e){await b.a.get("lists").then(t=>{e.commit("getLists",t.data)}).catch(e=>{console.log(e)})},async deleteList(e,t){await b.a.delete("lists/"+t).then(()=>{e.commit("deleteList",t)}).catch(e=>{console.log(e)})},async shareCode(e,t){console.log(t),await b.a.post("lists/share",{share_code:t}).then(t=>{e.commit("shareCode",t.data)}).catch(e=>{console.log(e)})}},P={plugins:[Object(h["a"])({storage:window.sessionStorage})],state:v,getters:w,mutations:O,actions:j},S={categories:e=>e.categories},L={categories:null},_={getCategories(e,t){e.categories=t},createCategory(e,t){console.log(t)}},C={async getCategories(e){await b.a.get("categories").then(t=>{e.commit("getCategories",t.data)}).catch(e=>console.log(e))},async createCategory(e,t){await b.a.post("categories/create",{name:t.name}).then(t=>{e.commit("createCategory",t.data)}).catch(e=>console.log(e))}},E={plugins:[Object(h["a"])({storage:window.sessionStorage})],state:L,getters:S,mutations:_,actions:C},T={products:e=>e.products,product:e=>e.product},A={products:null,product:null},I={products(e,t){e.products=t},getProduct(e,t){e.product=t},createProduct(e,t){console.log(e,t)}},q={async products(e){await b.a.get("products").then(t=>{e.commit("products",t.data)}).catch(e=>{console.log(e)})},async getProduct(e,t){await b.a.get("products/"+t.id).then(t=>{e.commit("getProduct",t.data)}).catch(e=>{console.log(e)})},async createProduct(e,t){await b.a.post("products/create",{name:t.name,category_id:t.category_id}).then(t=>{e.commit("createProduct",t.data)}).catch(e=>{console.log(e)})}},x={plugins:[Object(h["a"])({storage:window.sessionStorage})],state:A,getters:T,mutations:I,actions:q},M={basket:e=>e.basket,productStatus:e=>e.productStatus},N={basket:null,productStatus:null},B={addProductToList(e,t){console.log(t),e.productStatus=t.message,e.basket+=t},getProductOnList(e,t){e.basket=t},deleteProductFromList(e,t){e.basket.splice(t,1)}},F={async addProductToList(e,t){await b.a.post("list_content/add",{product_list_id:t.product_list_id,product_id:t.product_id}).then(t=>e.commit("addProductToList",t.data)).catch(t=>e.commit("addProductToList",t.status))},async getProductOnList(e,t){await b.a.get("/list_content/"+t).then(t=>e.commit("getProductOnList",t.data)).catch(e=>console.log(e))},async deleteProductFromList(e,t){await b.a.delete("/list_content/"+t).then(()=>e.commit("deleteProductFromList",t)).catch(e=>console.log(e))}},D={plugins:[Object(h["a"])({storage:window.sessionStorage})],state:N,getters:M,mutations:B,actions:F},J=Object(d["a"])({plugins:[Object(h["a"])({storage:window.sessionStorage})],modules:{auth:y,lists:P,categories:E,products:x,basket:D}});const R={class:"d-flex justify-content-center"},U=Object(n["h"])("div",{class:"spinner-border",role:"status"},[Object(n["h"])("span",{class:"visually-hidden"},"Loading...")],-1);function W(e,t){return Object(n["q"])(),Object(n["d"])("div",R,[U])}const z={};z.render=W;var H=z,K=(o("ab8b"),o("7b17"),o("5886"));o("4413");Object(n["c"])(s).use(J).use(l).use(K["a"]).component("loading",H).mount("#app")}});
//# sourceMappingURL=app.b4773437.js.map