import * as echarts from 'echarts';
import commonFuc from '@/utils/commonFuc'
import  {useState,useEffect,useRef } from 'react'

function BarEcharts(props){
    const [myChart,setMyChart] = useState()
    const refEcharts = useRef(null)
    useEffect(()=>{
        const chartDom = refEcharts.current
        var myChart = echarts.init(chartDom)
        window.addEventListener('resize',resize(myChart));

        if(props && props.roseEcharts){
            // 绑定鼠标移出事件  
            myChart.on('mouseout', function (params) {  
                // 在这里处理鼠标移出事件  
                props.onChangeRoseData(true,params.data)
            })
            myChart.on('mouseover', function (params) {  
                // 在这里处理鼠标移入事件  
                props.onChangeRoseData(false,params.data)
            })
        }
        return () =>{
            window.removeEventListener('resize', resize)
        }
    },[])
    const resize = (myChart) =>{ 
        myChart.resize()    //窗口变化重新计算
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