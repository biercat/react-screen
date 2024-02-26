import request from "./index"
import MockAdapter from 'axios-mock-adapter';  
import { mockUserData } from './mockData';

const mock = new MockAdapter(request); 
// 请求中： 请求参数和返回值的类型都需要进行约束

mock.onPost("/api/login").reply((config)=>{
    let data = JSON.parse(config.data)

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  
    let token = '';  
    const charactersLength = characters.length;  
    for (let i = 0; i < 16; i++) {  //  生成长度为16的token
        token += characters.charAt(Math.floor(Math.random() * charactersLength));  
    }  
    for(let i = 0; i < mockUserData.length; i++){
        if(data.username == mockUserData[i].username && data.password  === mockUserData[i].password){
            return [200, {data:mockUserData[i],code:'REQ001',token:token}]
        }else if(data.username == mockUserData[i].username){
            return [200, {msg:'密码错误！',code:'REQ002'}]
        }
    }
    return [200, {msg:'账号不存在！',code:'REQ002'}]
})
// 验证码请求
// export const CaptchaAPI = () =>mock.onGet("/api/centerPageData");

// 登录请求
export const LoginAPI = (params) => request.post("/api/login",params).then((res)=>{
    console.log(res,'res---')
    return res
}).catch((err)=>{
    console.log(err,'err--')
    return err
})

// export const LoginAPI1 = () =>mock.onGet("/api/leftPageData");
