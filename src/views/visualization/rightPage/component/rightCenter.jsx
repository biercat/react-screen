import {ScrollBoard,BorderBox13} from '@jiaminghi/data-view-react'
import  {useState,useEffect} from 'react'
// import { getShopListAsync } from "@/request/rightApi"
import { useAsync } from '@/store/action'
import '../index.less'

function RightCenter(){
    const [shopData,setShopData] = useState({})

    const { state, getShopListAsync } = useAsync()

    useEffect(()=>{
        getShopListAsync({})
    },[])

    useEffect(()=>{
            let header = ['地区','渠道','成交信息','费用']
            let data = []
            let end = state.shopList.length
            let start = Math.max(end - 50, 0)
            let shopList = state.shopList.slice(start,end)
            shopList.forEach(element => {
                let arr = []
                arr[0] = element.province
                arr[1] = element.channel
                arr[2] = `${element.people}购买了${element.shop}`
                arr[3] = element.price
                data.push(arr)
            });

            setShopData({
                header,
                data,
                // carousel: 'page',
                rowNum:8,
            })
        const setTimeoutId = setTimeout(()=>{
            getShopListAsync({shopList:state.shopList,rankData:state.rankData})
        },10000)
        return () =>{
            clearTimeout(setTimeoutId) // 数据变化清除上一个定时器
        }
    },[state.shopList])

    // const getShopData = async () =>{
    //     let res = await getShopList({})

    //     if(res.code === 'REQ001'){
  

    //     }
    //   console.log(res,'77777')
    // }

    return(
        // <div>
            <BorderBox13 className='right_border_box_13'>
                <div className='title_box_nopadding'>
                    <div className='title_back_color'>订单数据</div>
                </div>
                <ScrollBoard className='scroll_echarts' config={shopData} ></ScrollBoard>
            </BorderBox13>
        // </div>
    )
}

export default RightCenter