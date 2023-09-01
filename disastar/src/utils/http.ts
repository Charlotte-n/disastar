import axios, {
    AxiosInstance,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from 'axios'

const http: AxiosInstance = axios.create({
    baseURL: 'http://www.disastar.edu.cn',
    timeout: 5000,
})

//请求拦截器
http.interceptors.request.use(
    function (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
        return config
    },
    function (error: any) {
        return Promise.reject(error)
    },
)

//相应拦截器
http.interceptors.response.use(
    function (response: AxiosResponse): AxiosResponse {
        return response
    },
    function (error: any) {
        return Promise.reject(error)
    },
)

export default http
