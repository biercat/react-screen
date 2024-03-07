import BarEcharts from "@/components/BarEcharts"
import {
    BorderBox10
} from '@jiaminghi/data-view-react'
import  {useState,useEffect} from 'react'
import { BarOptions } from "../charts/option"
import { getCityList } from "@/request/leftApi"

function LeftTop(){
    const [cityCharts,setCityCharts] = useState({})
    useEffect(()=>{
        getdBarList()
    },[])

    const getdBarList = async ()=>{
        let res = await getCityList({})
        if(res.code === 'REQ001'){
            res.data.sort((a,b)=> {
                return b.sales - a.sales
            })
            let cityArr = res.data.map((item)=>{
                let obj = {
                    dataNmae:item.cityName,
                    series:item.sales,
                }
                return obj
            })
            let data = BarOptions(cityArr)
            console.log(data)
            setCityCharts(data)
        }
    }

    return(
        <div className='border_box_10'>
            <BorderBox10 >
                <div className='title_box'>
                    <div className='title_back_color'>各地区排名</div>
                </div>
                <BarEcharts className='bar_echarts' options={cityCharts} />
            </BorderBox10>
        </div>
    )
}

export default LeftTop