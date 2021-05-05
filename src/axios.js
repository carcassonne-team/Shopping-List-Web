import axios from "axios";

axios.defaults.baseURL = "https://projekt.shoplist.site/api";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;