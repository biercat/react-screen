import axios from 'axios';


// 创建axios实例
const instance = axios.create({
    // headers: {  
    //     'Content-Type': 'application/json', // 默认的内容类型为 JSON  
    //     'Authorization': 'token', // 假设你有一个需要身份验证的令牌  
    // },  
    // 基本请求路径的抽取
    baseURL:"http://localhost:5173",
    // 这个时间是你每次请求的过期时间，这次请求认为20秒之后这个请求就是失败的
    timeout:20000
})
// 添加请求拦截器  
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么 
    return config;
}, function (error) {
    // 对请求错误做些什么  
    return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(res=>{

    return res.data
},err=>{
    return Promise.reject(err)
})

export default instance