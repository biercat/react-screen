import {ScrollBoard,BorderBox13} from '@jiaminghi/data-view-react'
import  {useState,useEffect} from 'react'
import { getShopList } from "@/request/leftApi"
import '../index.less'

function LeftButtom(){
    const [shopData,setShopData] = useState({})
    useEffect(()=>{
        getShopData()
    },[])

    const getShopData = async () =>{
        let res = await getShopList({})

        if(res.code === 'REQ001'){
            let header = ['地区','渠道','成交信息','费用']
            let data = []
            res.data.forEach(element => {
                let arr = []
                arr[0] = element.province
                arr[1] = element.channel
                arr[2] = `${element.people}购买了${element.shop}`
                arr[3] = element.price
                data.push(arr)
            });

            setShopData({
                header,
                data
            })

        }
        // console.log(res,'77777')
    }

    return(
        <BorderBox13 className='border_box_13'>
            <div className='title_box_nopadding'>
                <div className='title_back_color'>订单数据</div>
            </div>
            <ScrollBoard className='bar_echarts' config={shopData} ></ScrollBoard>
        </BorderBox13>
    )
}

export default LeftButtom