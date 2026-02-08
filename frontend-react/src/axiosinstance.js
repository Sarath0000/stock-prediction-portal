import axios from "axios";



const baseURL = import.meta.env.VITE_BACKEND_BASE_API
// creating axios instance
const axiosinstance = axios.create({
    baseURL : baseURL,
    headers : {
        'Content-Type' : 'application/json',
    }
})

// request interceptor modifying with accesstoken
// using the created axios instance axiosinstance
axiosinstance.interceptors.request.use(
    function(config){
        const accessToken = localStorage.getItem('accessToken')
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

// response interceptors
axiosinstance.interceptors.response.use(
    function(response){

        return response;
    },
    // handle failde response
    async function(error){
        const originalrequest = error.config
        if(error.response.status === 401 && !originalrequest.retry){
            originalrequest.retry =true;
            const refreshToken = localStorage.getItem('refreshToken')
            try{
                const response = await axiosinstance.post('/token/refresh/', {refresh : refreshToken})
                localStorage.setItem('accessToken', response.data.access)
                originalrequest.headers['Autherization'] = `Bearer ${response.data.access}`
                return axiosinstance(originalrequest)
            }catch(error){
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
        
            }
        }
        return Promise.reject(error);
    }

)

export default axiosinstance;
