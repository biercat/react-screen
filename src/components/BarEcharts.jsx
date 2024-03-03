import * as echarts from 'echarts';
import './style/BarEcharts.less'
import  {useState,useEffect,useRef } from 'react'

function BarEcharts(props){
    const refEcharts = useRef(null)

    useEffect(()=>{
        // console.log('chartData',props)
        const chartDom = refEcharts.current
        var myChart = echarts.init(chartDom)
        // const { options } = 

          
        if(props &&  props.options){
            myChart.setOption(props.options)
        }
    },[props.options])

    return(
        <div ref={refEcharts} className='bar_echarts'>
        </div>
    )
}

export default BarEcharts