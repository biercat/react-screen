// 处理异步 
import { useContext } from 'react';
import { AppContext } from './context';
import { getCtegoryList } from '../request/leftApi';
import { message } from 'antd'

export const useAsync = () => {
    const { state, dispatch } = useContext(AppContext);

     // 添加异步操作函数  
    const getCtegoryListAsync = async (params) => {
        try {
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

   


    return {
        state,
        getCtegoryListAsync,
    };
};