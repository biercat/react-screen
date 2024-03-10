// 处理异步 
import { useContext } from 'react';
import { AppContext } from './context';
import { getCtegoryList } from '../request/leftApi';
import { getShopList } from '../request/rightApi';
import { message } from 'antd'

export const useAsync = () => {
    const { state, dispatch } = useContext(AppContext);

     // 添加异步操作函数  
    const getCtegoryListAsync = async (params) => {
        try {
            // 
            const res = await getCtegoryList(params);
            if(res.code === 'REQ001'){
                dispatch({ type: 'GET_CTEGORY_LIST', payload: res.data })
            }else{
                message.warning(res.msg || '请求失败')
            }
            
        } catch (error) {
            message.warning(error || '请求失败')
        }
        
    };

    const getShopListAsync = async (params) => {
        try {
            // console.log(params,'999999999999999999999999')
            if(!params.shopList){
                dispatch({ type: 'PAGE_LOADING',payload:true})
            }
            const res = await getShopList(params);
            if(!params.shopList){
                dispatch({ type: 'PAGE_LOADING',payload:false})
            }
            if(res.code === 'REQ001'){
                dispatch({ type: 'GET_SHOP_LIST', payload: res.data })
            }else{
                message.warning(res.msg || '请求失败')
            }
            
        } catch (error) {
            message.warning(error || '请求失败')
        }
        
    };

   


    return {
        state,
        getCtegoryListAsync,
        getShopListAsync,
    };
};