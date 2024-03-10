import request from "./index"
// import MockAdapter from 'axios-mock-adapter'; 
import {mock} from './mock'
import {moackShopData} from './rightMockData'

// const mock = new MockAdapter(request)    // 因为同时在两个js文件使用这个方法报错，所以改了一种方式，但是不知道为什么在api.js文件里面使用又没事
                                            // 猜测是在一个路由页面只可以mock一次
mock.onPost("/api/right/shop/list").reply((config)=>{   

    let shopList = []
    let rank = {}
    let data = JSON.parse(config.data)
    if(data.shopList && data.shopList.length > 0){
        shopList = data.shopList
        rank = data.rankData
        for(let i = 0; i < 20; i++){
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
    
            if(rank[moackShopData.commodity[typeIndex].name]){
                rank[moackShopData.commodity[typeIndex].name] += obj.price   // 用中文作为对象的key是不合理的，在实际开发中一般不会有这种情况，
            }else{                                                           //不过这个项目只是作为自己练手的第一个react项目就先这样
                rank[moackShopData.commodity[typeIndex].name] = obj.price    //因为在实际的开发中接口的数据也不需要前端来处理
            }
            shopList.push(obj)
        }
    }else{
        for(let i = 0; i < 1000; i++){
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
    
            if(rank[moackShopData.commodity[typeIndex].name]){
                rank[moackShopData.commodity[typeIndex].name] += obj.price
            }else{
                rank[moackShopData.commodity[typeIndex].name] = obj.price
            }
            shopList.push(obj)
        }
    }

    return [200,{data:{shopList:shopList,rankData:rank},code:'REQ001'}]
})
export const getShopList = (params) => request.post("/api/right/shop/list",params).then((res)=>{
    return res
}).catch((err)=>{
    return err
})