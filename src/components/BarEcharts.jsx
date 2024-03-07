import * as echarts from 'echarts';
import commonFuc from '@/utils/commonFuc'
import  {useState,useEffect,useRef } from 'react'

function BarEcharts(props){
    const [myChart,setMyChart] = useState()
    const refEcharts = useRef(null)
    useEffect(()=>{
        window.addEventListener('resize', commonFuc.debounce(resize, 100));
        return () =>{
            window.removeEventListener('resize', commonFuc.debounce)
        }
    },[])
    const resize = () =>{
        // refEcharts.current.getEchartsInstance().resize()
        const chartDom = refEcharts.current
        var myChart = echarts.init(chartDom)
        myChart.resize()    //窗口变化重新计算
        // console.log(refEcharts.current.getEchartsInstance())
    }
    useEffect(()=>{
        const chartDom = refEcharts.current
        var myChart = echarts.init(chartDom)
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