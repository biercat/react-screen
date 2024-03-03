import echarts from 'echarts/lib/echarts';

//各地区排名
export const BarOptions = params => ({
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: params.map((item) => {
                return item.dataNmae
            }),
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: params.map((item) => {
                return item.series
            })
        }
    ]
})

export const RoseOptions = params => ({
    toolbox: {
        show: true,
    },
    legend: {
        orient: 'horizontal',
        icon: 'circle',
        bottom: 0,
        x: 'center',
        data: params.map((item) => {
            return item.name
        }),
        textStyle: {
            color: '#fff',
        }
    },
    series: [
        {
            name: '品类占比',
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
            data: params
        }
    ]
})

export const RadarOptions = params => ({   // 个人觉得这个雷达图设计有点不是很合理，但是先不管了
    title: {
        text: '销售量/总数',
        textStyle:{
            fontSize:'16px'
        }
    },
    legend: {
        data: ['销售数量'],
    },
    radar: {
        // shape: 'circle',
        indicator: params.map((item) => {
            let obj = {
                name:item.name,
                max:item.sum
            }
            return obj
        })
    },
   
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
                {
                    value: params.map((item)=>{
                        return item.numValue
                    }),
                    name: '销售数量'
                },
            ]
        }
    ]
})