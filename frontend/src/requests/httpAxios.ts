import axios from "axios"

const $api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:727",
})

$api.interceptors.request.use(config => {
  config.headers!.authorization = `Bearer ${localStorage.getItem("accessToken")}`
  return config
})

export default $api
