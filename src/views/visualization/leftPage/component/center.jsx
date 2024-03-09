import BarEcharts from "@/components/BarEcharts"
import { RoseOptions,RadarOptions } from "../charts/option"
import { BorderBox10 } from '@jiaminghi/data-view-react'
import  {useState,useEffect,useContext} from 'react'
 
import { useAsync } from '@/store/action'


function LeftCenter(){
    const [ctegorydata,setCtegoryData] = useState({})
    const [allRoseData,setAllRoseData] = useState({
        title:'所有',
        numValue:0,
        salesVolume:0,
    })
    const [allRoseState,setAllRoseState] = useState(true)
    const [roseData,setRoseData] = useState({})

    const { state, getCtegoryListAsync } = useAsync()


    useEffect( ()=>{   //调玫瑰图的接口
        getCtegoryListAsync({})
    },[])

    useEffect(()=>{
        let dataList =  state.ctegoryList || []
        dataList.sort((a,b)=> { 
            return b.salesVolume - a.salesVolume
        })
        let obj = {
            numValue:state.allVolume,
            salesVolume:state.totalSales,
        }
        let ctegoryArr = dataList.map((item)=>{    // numValue:表示销售的数量，sum:表示此类商品的总数，salesVolume：表示销售额
            item.value = item.salesVolume
            return item
        })
        setAllRoseData({...allRoseData,...obj})
        let data = RoseOptions(ctegoryArr)  // 玫瑰图
        setCtegoryData(data) 
    },[state.allVolume,state.ctegoryList,state.totalSales])

    
    const onChangeRoseData = (belstate,data) =>{
        console.log(belstate,data)
        setAllRoseState(belstate)
        setRoseData({...data})
    }

    return(
        <div  className='border_box_10'>
        <BorderBox10>
            <div className='title_box'>
                <div className='title_back_color'>品类占比</div>
            </div>
            <div className='Box_10_bottom'>
            <div className='border_box_10_left'>
                <BarEcharts className='bar_echarts' onChangeRoseData={onChangeRoseData} roseEcharts={true} options={ctegorydata} />
            </div>
            <div className='border_box_10_right'>
                {/* <BarEcharts className='bar_echarts' options={rabarData} /> */}
                {
                    <div>
                        <div className="box_10_right_test">
                            品类：{allRoseState ? allRoseData.title : roseData.name}
                        </div>
                        <div className="box_10_right_test">
                            销售量：{allRoseState ? allRoseData.numValue : roseData.numValue}
                        </div>
                        <div className="box_10_right_test">
                            销售额：{allRoseState ? allRoseData.salesVolume : roseData.salesVolume}
                        </div>
                    </div> 
                }
                
            </div>
            </div>
        </BorderBox10>
        </div>
    )
}

export default LeftCenter