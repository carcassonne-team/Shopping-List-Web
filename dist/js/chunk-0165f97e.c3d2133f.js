(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0165f97e"],{"0c58":function(t,e,a){},"1d6f":function(t,e,a){"use strict";a("38b0")},"38b0":function(t,e,a){},"4e5d":function(t,e,a){"use strict";a("6f1b")},5419:function(t,e,a){"use strict";var c=a("3d20"),s=a.n(c);window.Swal=s.a;var o={successAlert:t=>{s.a.fire({title:"Good job!",text:t,icon:"success"})}};e["a"]=o},5618:function(t,e,a){"use strict";a("f6d9")},"6f1b":function(t,e,a){},"730c":function(t,e,a){"use strict";a("0c58")},7644:function(t,e,a){"use strict";a("e5e7")},"7c08":function(t,e,a){"use strict";var c=a("7a23");const s=Object(c["J"])("data-v-74cbe8d0");Object(c["t"])("data-v-74cbe8d0");const o={class:"bg-light border-right",id:"sidebar-wrapper"},i=Object(c["h"])("div",{class:"sidebar-heading"},"Start",-1),d={class:"list-group list-group-flush"},r={id:"page-content-wrapper"},l={class:"navbar navbar-expand-lg navbar-light bg-success border-bottom"},n=Object(c["h"])("i",{class:"fas fa-bars"},null,-1),b=Object(c["g"])("Shopping List ZMP"),u={class:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent"},h={key:0,type:"button",class:"btn btn-primary"},O=Object(c["g"])("Log In"),j=Object(c["g"])("Log Out"),p={class:""};Object(c["r"])();const g=s((t,e,a,g,m,f)=>{const v=Object(c["y"])("is-not-logged"),y=Object(c["y"])("side-menu"),k=Object(c["y"])("router-link");return Object(c["q"])(),Object(c["d"])("div",{class:["d-flex",{toggled:m.isActive}],id:"wrapper"},[Object(c["h"])("div",o,[i,Object(c["h"])("div",d,[f.userAuth?(Object(c["q"])(),Object(c["d"])(y,{key:1})):(Object(c["q"])(),Object(c["d"])(v,{key:0}))])]),Object(c["h"])("div",r,[Object(c["h"])("nav",l,[Object(c["h"])("button",{class:"btn",id:"menu-toggle",onClick:e[1]||(e[1]=(...t)=>f.switchBar&&f.switchBar(...t))},[n]),Object(c["h"])(k,{class:"navbar-brand fs-3 text-center white",to:"/"},{default:s(()=>[b]),_:1}),Object(c["h"])("div",u,[f.userAuth?(Object(c["q"])(),Object(c["d"])("button",{key:1,type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=(...t)=>f.handleLogout&&f.handleLogout(...t))},[Object(c["h"])(k,{to:"/",class:"btn white"},{default:s(()=>[j]),_:1})])):(Object(c["q"])(),Object(c["d"])("button",h,[Object(c["h"])(k,{to:"/login",class:"btn white"},{default:s(()=>[O]),_:1})]))])]),Object(c["h"])("div",p,[Object(c["x"])(t.$slots,"default")])])],2)}),m=Object(c["J"])("data-v-00c72a18");Object(c["t"])("data-v-00c72a18");const f={class:"card text-dark bg-primary mb-3 mt-3",style:{"max-width":"18rem"}},v=Object(c["h"])("div",{class:"card-header text-center white"}," Chcesz skorzystać z wszystkich funkcji Shopping List ZMP? ",-1),y={class:"card-body text-center"},k={type:"button",class:"btn btn-success text-center"},w=Object(c["g"])("ZAŁÓŻ KONTO"),L={type:"button",class:"btn btn-primary text-center pt-3"},I=Object(c["g"])("ZALOGUJ SIĘ");Object(c["r"])();const x=m((t,e)=>{const a=Object(c["y"])("router-link");return Object(c["q"])(),Object(c["d"])("div",f,[v,Object(c["h"])("div",y,[Object(c["h"])("button",k,[Object(c["h"])(a,{to:"/register",class:"white routerBtn"},{default:m(()=>[w]),_:1})]),Object(c["h"])("button",L,[Object(c["h"])(a,{to:"/login",class:"white routerBtn"},{default:m(()=>[I]),_:1})])])])});a("1d6f");const C={};C.render=x,C.__scopeId="data-v-00c72a18";var _=C;const $=Object(c["J"])("data-v-33d20ce3");Object(c["t"])("data-v-33d20ce3");const A=Object(c["h"])("i",{class:"fas fa-shopping-cart"},null,-1),P=Object(c["g"])(" Lista Zakupów"),q=Object(c["h"])("i",{class:"fas fa-share-alt"},null,-1),z=Object(c["g"])(" Kod Dostępu"),M=Object(c["h"])("i",{class:"fas fa-cog"},null,-1),B=Object(c["g"])(" Ustawienia"),J=Object(c["h"])("i",{class:"fas fa-outdent"},null,-1),S=Object(c["g"])(" Log Out");Object(c["r"])();const V=$((t,e,a,s,o,i)=>{const d=Object(c["y"])("router-link");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["h"])(d,{to:"/",class:"list-group-item list-group-item-action bg-light"},{default:$(()=>[A,P]),_:1}),Object(c["h"])(d,{to:"/code",class:"list-group-item list-group-item-action bg-light"},{default:$(()=>[q,z]),_:1}),Object(c["h"])(d,{to:"/settings",class:"list-group-item list-group-item-action bg-light"},{default:$(()=>[M,B]),_:1}),Object(c["h"])(d,{to:"/",class:"list-group-item list-group-item-action bg-light",onClick:i.handleLogout},{default:$(()=>[J,S]),_:1},8,["onClick"])],64)});var D={methods:{async handleLogout(){await this.$store.dispatch("logout")}}};D.render=V,D.__scopeId="data-v-33d20ce3";var N=D,U={data(){return{isActive:!1}},components:{isNotLogged:_,sideMenu:N},methods:{switchBar(){this.isActive=!this.isActive},async handleLogout(){await this.$store.dispatch("logout")}},computed:{userAuth(){return this.$store.getters.login}}};a("730c");U.render=g,U.__scopeId="data-v-74cbe8d0";e["a"]=U},e412:function(t,e,a){"use strict";a.r(e);var c=a("7a23");function s(t,e,a,s,o,i){const d=Object(c["y"])("edit-list"),r=Object(c["y"])("nav-bar");return Object(c["q"])(),Object(c["d"])(r,null,{default:Object(c["G"])(()=>[Object(c["h"])(d)]),_:1})}var o=a("7c08");const i=Object(c["J"])("data-v-3efb18f2");Object(c["t"])("data-v-3efb18f2");const d={key:0},r={key:1},l={class:"card m-auto mt-5"},n={class:"card-body"},b={class:"form-group form-inline"},u=Object(c["h"])("h2",{class:"text-center"},"Sortowanie",-1),h=Object(c["h"])("option",{value:"categories"},"Wg kategorii",-1),O=Object(c["h"])("option",{value:"alphabetically"},"Alfabetycznie",-1),j=Object(c["h"])("option",{value:"own"},"Własne",-1),p={class:"card m-auto mt-3"},g={class:"form-check form-check-inline"},m=Object(c["h"])("h2",{class:"form-check-inline"},"Nazwa Listy",-1),f={class:"dropdown mt-2 form-check-inline float-end"},v=Object(c["h"])("i",{class:"fas fa-ellipsis-v float-end fs-5 mt-2 mx-2 dropdown-toggle",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false"},null,-1),y={class:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},k=Object(c["h"])("li",null,[Object(c["h"])("a",{class:"dropdown-item",href:"#"},"Wyczyść kupione")],-1),w={class:"list-group list-group-flush"},L=Object(c["g"])(" Wybierz Produkt: ");Object(c["r"])();const I=i((t,e,a,s,o,I)=>{const x=Object(c["y"])("loading"),C=Object(c["y"])("input-option");return o.loading?(Object(c["q"])(),Object(c["d"])("div",d,[Object(c["h"])(x)])):(Object(c["q"])(),Object(c["d"])("div",r,[Object(c["h"])("div",l,[Object(c["h"])("div",n,[Object(c["h"])("div",b,[u,Object(c["H"])(Object(c["h"])("select",{class:"form-control input-lg","onUpdate:modelValue":e[1]||(e[1]=t=>o.filterValue=t)},[h,O,j],512),[[c["D"],o.filterValue]])])])]),Object(c["h"])("div",p,[Object(c["h"])("div",g,[m,Object(c["h"])("div",f,[v,Object(c["h"])("ul",y,[Object(c["h"])("li",null,[Object(c["h"])("a",{class:"dropdown-item",href:"#",onClick:e[2]||(e[2]=(...t)=>I.deleteList&&I.deleteList(...t))},"Usuń Liste")]),k])])]),Object(c["h"])("ul",w,[Object(c["h"])(C,{onItemName:I.addProduct,listItem:I.products},{default:i(()=>[L]),_:1},8,["onItemName","listItem"]),(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(I.basket,(t,a)=>(Object(c["q"])(),Object(c["d"])("li",{class:"list-group-item py-3 fs-5 listItem",key:a},[Object(c["H"])(Object(c["h"])("input",{class:"form-check-input",type:"checkbox",value:t.id,"onUpdate:modelValue":e[3]||(e[3]=t=>o.productInBasket=t)},null,8,["value"]),[[c["C"],o.productInBasket]]),Object(c["g"])(" "+Object(c["A"])(t.product.name)+" ",1),Object(c["h"])("i",{class:"fas fa-trash float-end IconCursor",onClick:e=>I.deleteItem(t.id)},null,8,["onClick"])]))),128))])])]))}),x=Object(c["J"])("data-v-29b6307a");Object(c["t"])("data-v-29b6307a");const C={class:"list-group-item"},_={for:"browser"},$=Object(c["h"])("option",{selected:"",disabled:""},"produkty...",-1),A=Object(c["h"])("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},[Object(c["h"])("i",{class:"fas fa-plus"})],-1);Object(c["r"])();const P=x((t,e,a,s,o,i)=>{const d=Object(c["y"])("basketModal");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["h"])("li",C,[Object(c["h"])("label",_,[Object(c["x"])(t.$slots,"default")]),Object(c["h"])("form",{onSubmit:e[2]||(e[2]=Object(c["I"])(()=>{},["prevent"])),class:"input-group"},[Object(c["h"])("select",{class:"form-control",onChange:e[1]||(e[1]=t=>i.selectCategory(t))},[$,(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(a.listItem,(t,e)=>(Object(c["q"])(),Object(c["d"])("option",{key:e,value:t.id},Object(c["A"])(t.name),9,["value"]))),128))],32),A],32)]),Object(c["h"])(d)],64)}),q=Object(c["J"])("data-v-3db9a9d7");Object(c["t"])("data-v-3db9a9d7");const z={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},M={class:"modal-dialog modal-lg"},B={class:"modal-content"},J=Object(c["h"])("div",{class:"modal-header"},[Object(c["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},"Dodawanie Produktu"),Object(c["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),S={class:"modal-body"},V={class:"row"},D={class:"col-sm-6"},N={class:"card"},U={class:"card-body"},W=Object(c["h"])("h5",{class:"card-title"},"Dodaj kategorie",-1),Z={class:"input-group mb-3"},H=Object(c["h"])("span",{class:"input-group-text",id:"basic-addon1"},[Object(c["h"])("i",{class:"fab fa-cuttlefish"})],-1),E={class:"col-sm-6"},G={class:"card"},K={class:"card-body"},T=Object(c["h"])("h5",{class:"card-title"},"Dodaj produkt",-1),F=Object(c["h"])("option",{selected:"",disabled:""},"Wybierz kategorie",-1),Q={class:"input-group mt-3"},R=Object(c["h"])("span",{class:"input-group-text",id:"basic-addon1"},[Object(c["h"])("i",{class:"fab fa-product-hunt"})],-1),X=Object(c["h"])("div",{class:"modal-footer"},[Object(c["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close")],-1);Object(c["r"])();const Y=q((t,e,a,s,o,i)=>(Object(c["q"])(),Object(c["d"])("div",z,[Object(c["h"])("div",M,[Object(c["h"])("div",B,[J,Object(c["h"])("div",S,[Object(c["h"])("div",V,[Object(c["h"])("div",D,[Object(c["h"])("div",N,[Object(c["h"])("div",U,[W,Object(c["h"])("div",Z,[H,Object(c["H"])(Object(c["h"])("input",{type:"text",class:"form-control",placeholder:"kategoria","onUpdate:modelValue":e[1]||(e[1]=t=>o.category=t)},null,512),[[c["E"],o.category]])]),Object(c["h"])("a",{href:"#",class:"btn btn-primary d-flex justify-content-center",onClick:e[2]||(e[2]=(...t)=>i.addCategory&&i.addCategory(...t))},"Dodaj")])])]),Object(c["h"])("div",E,[Object(c["h"])("div",G,[Object(c["h"])("div",K,[T,Object(c["h"])("select",{class:"form-select","aria-label":"Default select example",onChange:e[3]||(e[3]=t=>i.setProductId(t))},[F,(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(i.categories,(t,e)=>(Object(c["q"])(),Object(c["d"])("option",{key:e,value:t.id},Object(c["A"])(t.name),9,["value"]))),128))],32),Object(c["h"])("div",Q,[R,Object(c["H"])(Object(c["h"])("input",{type:"text",class:"form-control",placeholder:"nazwa produktu","onUpdate:modelValue":e[4]||(e[4]=t=>o.name=t)},null,512),[[c["E"],o.name,void 0,{trim:!0}]])]),Object(c["h"])("a",{href:"#",class:"btn btn-primary mt-3 d-flex justify-content-center",onClick:e[5]||(e[5]=(...t)=>i.addProduct&&i.addProduct(...t))},"Dodaj")])])])])]),X])])])));var tt=a("5419"),et={name:"Basket Modal",data(){return{category:"",categoryId:null,name:""}},methods:{addCategory(){this.category&&(this.$store.dispatch("createCategory",{name:this.category}),tt["a"].successAlert("Kategoria została dodana"),this.getCategories())},addProduct(){this.categoryId,this.name&&(this.$store.dispatch("createProduct",{name:this.name,category_id:this.categoryId}),tt["a"].successAlert("Produkt został dodany"),this.$store.dispatch("products"))},setProductId(t){this.categoryId=t.target.value},getCategories(){this.$store.dispatch("getCategories")}},computed:{categories(){return this.$store.getters.categories}},created(){this.getCategories()}};a("7644");et.render=Y,et.__scopeId="data-v-3db9a9d7";var at=et,ct={name:"InputOption",components:{basketModal:at},data(){return{itemName:"",loading:!0}},props:["listItem"],methods:{selectCategory(t){this.$emit("item-name",t.target.value),this.itemName=""}}};a("5618");ct.render=P,ct.__scopeId="data-v-29b6307a";var st=ct,ot={name:"ListView",data(){return{filterValue:"categories",productInBasket:[],id:parseInt(this.$route.params.id),loading:!1}},components:{InputOption:st},methods:{async deleteItem(t){await this.$store.dispatch("deleteProductFromList",t),tt["a"].successAlert("Produkt został usunięty"),this.$store.dispatch("getProductOnList",this.id)},async deleteList(){await this.$store.dispatch("deleteList",this.id),tt["a"].successAlert("Lista została usunięta usunięty"),this.$router.push("/")},async addProduct(t){await this.$store.dispatch("addProductToList",{product_list_id:this.id,product_id:t}),tt["a"].successAlert(this.$store.getters.productStatus),this.$store.dispatch("getProductOnList",this.id)}},computed:{categories(){return this.$store.getters.categories},products(){return this.$store.getters.products},basket(){return this.$store.getters.basket}},created(){this.loading=!0,this.$store.dispatch("getCategories"),this.$store.dispatch("products"),this.$store.dispatch("getProductOnList",this.id),setTimeout(()=>{this.loading=!1},1e3)}};a("4e5d");ot.render=I,ot.__scopeId="data-v-3efb18f2";var it=ot,dt={name:"ListView",components:{NavBar:o["a"],EditList:it}};dt.render=s;e["default"]=dt},e5e7:function(t,e,a){},f6d9:function(t,e,a){}}]);
//# sourceMappingURL=chunk-0165f97e.c3d2133f.js.map