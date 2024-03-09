import request from "./index"
// import MockAdapter from 'axios-mock-adapter'; 
import {mock} from './mock'
import {moackShopData} from './rightMockData'

// const mock = new MockAdapter(request)    // 因为同时在两个js文件使用这个方法报错，所以改了一种方式，但是不知道为什么在api.js文件里面使用又没事
                                            // 猜测是在一个路由页面只可以mock一次
mock.onPost("/api/right/shop/list").reply((config)=>{   

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
export const getShopList = (params) => request.post("/api/right/shop/list",params).then((res)=>{
    return res
}).catch((err)=>{
    return err
})