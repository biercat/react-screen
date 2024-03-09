const initialState = {    // 初始状态  
    ctegoryList:[],
    allVolume: 0,
    totalSales: 0,
};

const reducer = (state, action) => { 
    switch (action.type) {
        case 'GET_CTEGORY_LIST':
            let data = action.payload
            return { ...state, ctegoryList: data.dataList, allVolume: data.allVolume,totalSales:data.totalSales };
      
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export {reducer,initialState};