import BarEcharts from "@/components/BarEcharts"
import { RoseOptions,RadarOptions } from "../charts/option"
import {
    BorderBox10
} from '@jiaminghi/data-view-react'
import  {useState,useEffect} from 'react'
import { getCtegoryList } from "@/request/leftApi"


function LeftCenter(){
    const [ctegorydata,setCtegoryData] = useState({})
    const [rabarData,setRadarData] = useState({})

    useEffect(()=>{
        getdBarList()
    },[])

    const getdBarList = async () => {
        let res = await getCtegoryList({})
        if(res.code === 'REQ001'){

            
            res.data.sort((a,b)=> {
                return b.salesVolume - a.salesVolume
            })
            let ctegoryArr = res.data.map((item)=>{
                item.value = item.salesVolume
                return item
            })
            let data = RoseOptions(ctegoryArr)  // 玫瑰图
            setCtegoryData(data) 
            
            let data2 = RadarOptions(ctegoryArr)  // 雷达图
            // console.log(data2,'6666')
            setRadarData(data2)
        }

    }

    return(
        <div  className='border_box_10'>
        <BorderBox10>
            <div className='title_box'>
                <div className='title_back_color'>品类占比</div>
            </div>
            <div className='Box_10_bottom'>
            <div className='border_box_10_half'>
                <BarEcharts className='bar_echarts' options={ctegorydata} />
            </div>
            <div className='border_box_10_half'>
                <BarEcharts className='bar_echarts' options={rabarData} />
            </div>
            </div>
        </BorderBox10>
        </div>
    )
}

export default LeftCenter