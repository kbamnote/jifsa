import axios from "axios";

const Api = axios.create({
    baseURL:'https://jifsa-backend.onrender.com/'
})


export const addDetail = (detail) => {
    return Api.post("form/create-form", detail);
}

export const addComplain = (detail) => {
    return Api.post("complaint/create-form", detail);
}


export const addAdmissionForm = (detail) => {
    return Api.post("admission-form/create-form", detail);
}

