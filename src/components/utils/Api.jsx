import axios from "axios";

const Api = axios.create({
    baseURL:'https://jifsa-backend.onrender.com/'
})


export const addDetail = (detail) => {
    return Api.post("form/create-form", detail);
}

export const addComplain = (detail) => {
    return Api.post("complain/create-form", detail);
}

export const deleteComplain = (detail) => {
    return Api.post("complain/create-form", detail);
}

