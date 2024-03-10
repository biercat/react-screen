import { useAsync } from '@/store/action'
import {Decoration7,Decoration9} from '@jiaminghi/data-view-react'
import  {useState,useEffect} from 'react'


function RightTop(){
    const [rankData,setRankData] = useState([])
    const { state } = useAsync()

    useEffect(()=>{

        let data = []
        for(let key in state.rankData){
            let obj = {}
            obj.key = key
            obj.value = state.rankData[key]
            data.push(obj)
        }

        data.sort((a,b)=>{
            return b.value - a.value
        })

     
        let rankList = data.slice(0,3)
        setRankData([...rankList])

        // console.log(rankData,'=====99988888',state.rankData)


    },[state.rankData])
    return(
        <div className='right_center_page'>
            <Decoration7 className='right_center_top'>销售额TOP3</Decoration7>
            <div className='right_center_top_box'>
                <div className='top_box_title'>
                    <div className='top_box_top1'>TOP1：{rankData.length > 0 ? rankData[0].key : ''}</div>
                    <div className='top_box_num'>
                        {rankData.length > 0 &&
                        <div>{rankData[0].value}元</div>
                        }
                    </div>
                    <Decoration9 style={{width: '250px', height: '20px'}}></Decoration9>
                </div>
                <div className='top_box_items'>
                {rankData.length > 0 &&
                    rankData.map((item,index)=>(
                        <div className='right_center_top_item' key={index}>
                            <Decoration9 className='right_top_item_action9'></Decoration9>
                            <div>{item.key}：{item.value}元</div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default RightTop