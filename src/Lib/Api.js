import axios from "axios";

let mainApi = axios.create({
    baseURL:"https://api.escuelajs.co/api/v1"
})


export {mainApi}