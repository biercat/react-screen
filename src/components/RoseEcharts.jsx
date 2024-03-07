import * as echarts from 'echarts';
import  {useState,useEffect,useRef } from 'react'

function RoseEcharts(){
    const refEcharts = useRef(null)

    useEffect(()=>{
        const chartDom = refEcharts.current
        var myChart = echarts.init(chartDom)
        var option

        option = {
            toolbox: {
                show: true,  
            },
            legend: {
                orient: 'horizontal',
                icon: 'circle',
                bottom: 0,
                x: 'center',
                // data: ['食品','食品','日用品','食品','食品','食品'],
                textStyle: {
                  color: '#fff',
                //   itemWidth:'30%',

                }
            },
            series: [
                {
                    name: '通过率统计',
                    type: 'pie',
                    radius: [20, 100],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 5
                    },
                    label: {
                        show: true,
                        color: "#fff",
                    },
                    emphasis: {
                        label: {
                            show: false
                        }
                    },
                    data: [
                        { value: 40, name: '食品' },
                        { value: 38, name: '日用品' },
                        { value: 32, name: '家居用品' },
                        { value: 30, name: '服装' },
                        { value: 28, name: '电子产品' },
                        { value: 26, name: '美容化妆品' },
                    ]
                }
            ]
        };
        option && myChart.setOption(option);

       
        // 绑定鼠标移出事件  
        myChart.on('mouseout', function (params) {  
            // 在这里处理鼠标移出事件  
            console.log('鼠标移出了数据项:', params.data);  
            // 你可以根据需要执行一些操作，比如隐藏提示框、恢复数据项的颜色等  
        })
        myChart.on('mouseover', function (params) {  
            // 在这里处理鼠标移入事件  
            console.log('鼠标移入了数据项:', params.data);  
        })
 
    })

    return(
        <div ref={refEcharts} className='rose_echarts'>
        </div>
    )
}

export default RoseEcharts