export const mockCityData = [
    {  
        id: '001',
        cityName: '浙江',
        sales:852486,
    },
    {  
        id: '002',
        cityName: '江苏',
        sales:723412,
    },
    {  
        id: '003',
        cityName: '广东',
        sales:987245,
    },
    {  
        id: '004',
        cityName: '北京',
        sales:853886,
    },
    {  
        id: '005',
        cityName: '上海',
        sales:625316,
    },
    {  
        id: '006',
        cityName: '广西',
        sales:510086,
    },
    {  
        id: '007',
        cityName: '河北',
        sales:415086,
    },
    {  
        id: '008',
        cityName: '黑龙江',
        sales:673086,
    },
    {  
        id: '009',
        cityName: '重庆',
        sales:732086,
    },
    {  
        id: '010',
        cityName: '湖北',
        sales:519081,
    },
]

export const mockcCategoryData = [  // numValue:表示销售的数量，sum:表示此类商品的总数，salesVolume：表示销售额
    { 
        id:'001',
        numValue: 18736, 
        sum:50000,
        salesVolume:238493,
        name: '食品' 
    },
    { 
        id:'002',
        numValue: 4736, 
        sum:50000,
        salesVolume:58493,
        name: '日用品' 
    },
    { 
        id:'003',
        numValue: 2736, 
        sum:50000,
        salesVolume:130491,
        name: '家居用品' 
    },
    { 
        id:'004',
        numValue: 31736, 
        sum:50000,
        salesVolume:718443,
        name: '服装' 
    },
    { 
        id:'005',
        numValue: 12738, 
        sum:50000,
        salesVolume:6438493,
        name: '电子产品' 
    },
    { 
        id:'006',
        numValue: 16738, 
        sum:50000,
        salesVolume:2438493,
        name: '美容化妆品' 
    },
]

export const moackShopData = {
    areas:['浙江','江苏','广东','北京','上海','广西','河北','黑龙江','重庆','湖北'],
    channel:['天猫','京东','淘宝','拼多多'],
    people:['张小姐','李先生','王先生','黄先生','刘女士','陈小姐','张三','李四','王五','李华','梅梅','小芳','芳芳','小花','赵丽','陈陈','李姐','素素','赵刚','笑笑','小美','丽丽','莉莉','赵六'],
    commodity:[
        {
            name:'食品',
            value:['谷物','薯类','豆类','蔬菜','水果','肉类','水产品及蛋类','乳类','糖果','零食','速冻食品','方便食品','休闲食品','膨化食品']
        },
        {
            name:'日用品',
            value:['洗衣粉','牙膏','洗洁精','洗发水', '餐具','炊具','墙纸','牙刷','沐浴露']
        },
        {
            name:'家居用品',
            value:['地毯','窗帘','家电','家具','床上用品','装饰画']
        },
        {
            name:'服装',
            value:['外套','夹克','毛衣','T恤','衬衫','裙子','裤子','西装']
        },
        {
            name:'电子产品',
            value:['手机','传真机','数码相机','平板电脑','笔记本电脑','电视机']
        },
        {
            name:'美容化妆品',
            value:['粉底','遮瑕膏','腮红','粉饼','眼线笔','眼线液','眼影','睫毛膏','唇膏','唇彩','唇釉','甲油','洗甲水','身体乳液','身体喷雾']
        },
    ]
}