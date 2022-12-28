import axios from "axios"

const $api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:727",
})

export default $api
