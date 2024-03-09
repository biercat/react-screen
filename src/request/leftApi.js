import request from "./index"
// import MockAdapter from 'axios-mock-adapter'; 
import {mockCityData,mockcCategoryData} from './leftMockData'
import {mock} from './mock'

// const mock = new MockAdapter(request)

mock.onPost("/api/left/city/list").reply((config)=>{   
    return [200,{data:mockCityData,code:'REQ001'}]
})
export const getCityList = (params) => request.post("/api/left/city/list",params).then((res)=>{
    return res
}).catch((err)=>{
    return err
})


mock.onPost("/api/left/category/list").reply((config)=>{  
    // 
    let totalSales = 0
    let allVolume = 0

    let data = JSON.parse(config.data)
    if(data.data.length > 0){
        for(let i = 0; i < 10; i++){// 每次调接口购买十件商品
            let index =  Math.floor(Math.random() * 6)   //随机购买商品
            let value = Math.floor(Math.random() * (1000 - 50 + 1)) + 50 // 商品的价格是50-1000
            console.log(index,'-------------------',value,)
            if(data.data[index].numValue < data.data[index].sum){  //  销售量小于库存才可以购买
                data.data[index].numValue += 1
                data.data[index].salesVolume += value
            }
        }
    }

    let resData =( data.data && data.data.length > 0) ? data.data : mockcCategoryData
    resData.forEach((item)=>{
        totalSales += item.salesVolume
        allVolume += item.numValue
    })
    
    return [200,{data:{dataList:resData,totalSales,allVolume},msg:'请求成功',code:'REQ001'}]
})
export const getCtegoryList = (params) => request.post("/api/left/category/list",params).then((res)=>{
    return res
}).catch((err)=>{
    return err
})




