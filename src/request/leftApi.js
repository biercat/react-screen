import request from "./index"
import MockAdapter from 'axios-mock-adapter'; 
import {mockCityData,mockcCategoryData,moackShopData} from './leftMockData'


const mock = new MockAdapter(request)

mock.onPost("/api/left/city/list").reply((config)=>{   
    return [200,{data:mockCityData,code:'REQ001'}]
})
export const getCityList = (params) => request.post("/api/left/city/list",params).then((res)=>{
    return res
}).catch((err)=>{
    return err
})


mock.onPost("/api/left/category/list").reply((config)=>{  
    // console.log(config,'=======9990009999')
    let totalSales = 0
    let allVolume = 0
    mockcCategoryData.forEach((item)=>{
        totalSales += item.salesVolume
        allVolume += item.numValue
    })
    
    return [200,{data:{dataList:mockcCategoryData,totalSales,allVolume},msg:'请求成功',code:'REQ001'}]
})
export const getCtegoryList = (params) => request.post("/api/left/category/list",params).then((res)=>{
    return res
}).catch((err)=>{
    return err
})


mock.onPost("/api/left/shop/list").reply((config)=>{   

    console.log(moackShopData)
    let data = []
    for(let i = 0; i < 100; i++){
        let obj = {}
        obj.id = '00' + i

        let channelIndex = Math.floor(Math.random() * moackShopData.channel.length)
        let provinceIndex = Math.floor(Math.random() * moackShopData.areas.length)
        let peopleIndex = Math.floor(Math.random() * moackShopData.people.length)
        let typeIndex = Math.floor(Math.random() * moackShopData.commodity.length)
        let shopIndex = Math.floor(Math.random() * moackShopData.commodity[typeIndex].value.length)
        
        obj.channel = moackShopData.channel[channelIndex]
        obj.province = moackShopData.areas[provinceIndex]
        obj.people =  moackShopData.people[peopleIndex]
        obj.type = moackShopData.commodity[typeIndex].name
        obj.shop = moackShopData.commodity[typeIndex].value[shopIndex]
        obj.price =  Math.floor(Math.random() * (1000 - 10 ) + 10)

        data.push(obj)
    }

    return [200,{data:data,code:'REQ001'}]
})
export const getShopList = (params) => request.post("/api/left/shop/list",params).then((res)=>{
    return res
}).catch((err)=>{
    return err
})


