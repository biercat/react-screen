
// import BarEcharts from "@/components/BarEcharts"
import rainBg from '../charts/options'
import { useEffect, useState } from "react"
import { useAsync } from '@/store/action'
import '../index.less'

function Map(){
    const [totalSales,setTotalSales] = useState(0)
    const { state } = useAsync()
    // 加载完这个组件之后，加载背景
    useEffect(()=>{
        rainBg()
    },[])
    useEffect(()=>{
        setTotalSales(state.totalSales)
    },[state.totalSales])

    return(
       <>
        <div className="total">
           
            <div className="sphere">
                <div className="sphere-bg"></div>
                <div className="sum">
                    <span>销售总额</span>
                    <p>{totalSales}</p>
                </div>
            </div>
            <canvas className="rain"></canvas>
            <canvas className="dashed"></canvas>
            <div className="cicle3"></div>
            <div className="cicle4"></div>
            <div className="cicle5"></div>
            <div className="cicle6"></div>
            <div className="cicle7"></div>
            <div className="cicle8">
                <span>66%</span>
                <p>同比</p>
            </div>
            <div className="cicle9">
                <span>66%</span>
                <p>完成率</p>
            </div>
            <div className="cicle10">
                <span>66%</span>
                <p>售罄率</p>
            </div>
            <div className="cicle11">
                <span>66%</span>
                <p>折扣率</p>
            </div>
        </div>
       </>
    )
}

export default Map