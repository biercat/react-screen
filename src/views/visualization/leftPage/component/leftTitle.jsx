import { BorderBox6,Decoration9 } from '@jiaminghi/data-view-react'
import { useEffect, useState } from "react"
import { useAsync } from '@/store/action'


function LeftTitle(){
    const [stateData,setStateData] = useState({
        totalSales:0,
        scale:0,
        target:20000000,
    })
    const { state } = useAsync()

    useEffect(()=>{
        let scale = (( state.totalSales/stateData.target ) * 100).toFixed(2)
        setStateData({...stateData,totalSales:state.totalSales,scale})
    },[state.totalSales])

    return (
        <div className = 'left_title_box6'>
            <BorderBox6>
                <div className='box6'>
                    <div className='left_title_box6_text'>
                        <p >实时销售额：{stateData.totalSales}</p>
                        <p>目标销售额：<span>{stateData.target}</span></p>
                    </div>
                    <p>完成率：&nbsp;</p>
                    <Decoration9 className='decoration9'>{stateData.scale}%</Decoration9>
                   
                </div>
            </BorderBox6>
        </div>
  
    )

}


export default LeftTitle;