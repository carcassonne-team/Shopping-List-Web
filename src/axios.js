import axios from "axios";

axios.defaults.baseURL = "http://projekt.shoplist.site:8080/api";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;