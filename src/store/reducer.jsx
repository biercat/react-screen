const initialState = {    // 初始状态  
    ctegoryList:[],
    allVolume: 0,
    totalSales: 0,
    pageLoading:false,
    shopList:[],
    rankData:{},
};

const reducer = (state, action) => { 
    switch (action.type) {
        case 'PAGE_LOADING':
            // console.log(action,'============')
            return {...state,pageLoading: action.payload}
        case 'GET_CTEGORY_LIST':
            let data = action.payload
            return { ...state, ctegoryList: data.dataList, allVolume: data.allVolume,totalSales:data.totalSales };
        case 'GET_SHOP_LIST':
            let shopList = action.payload.shopList ? action.payload.shopList : []
            let rankData = action.payload.rankData ? action.payload.rankData : {}
            return { ...state,shopList, rankData};
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export {reducer,initialState};