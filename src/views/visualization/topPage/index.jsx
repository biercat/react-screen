import './index.less'
import {
    Decoration10,
    Decoration8,
    Decoration6
} from '@jiaminghi/data-view-react'
import commonFuc from '@/utils/commonFuc'
import  {useState,useEffect} from 'react'


function TopPage(){

    const [state, setState] = useState({
        title: '计算为了无法计算的价值',
        weekday: [
          '星期天',
          '星期一',
          '星期二',
          '星期三',
          '星期四',
          '星期五',
          '星期六',
        ],
    })
    const [timeStr,setTimeStr] = useState('')
    useEffect(()=>{
        const timing = setInterval(() => {
            let dateYear = commonFuc.formatTime(new Date(), 'yyyy-MM-dd');
            let dateDay = commonFuc.formatTime(new Date(), 'HH: mm: ss');
            let dateWeek = state.weekday[new Date().getDay()];
            setTimeStr(
                 `${dateYear} | ${dateDay} ${dateWeek}`,
            )
        }, 1000)
        return () =>{
            clearInterval(timing)
        }
    },[])
    
    return(
        <div className="top_page">
            <Decoration10 className='top_decoration10' />
            <div className='title-box'>
              <Decoration8
                className='top_decoration8'
                color={['#568aea', '#000000']}
              />
              <div className='title'>
                <span className='title-text'>{state.title}</span>
                <Decoration6
                  className='title-bototm top_decoration6'
                  reverse={true}
                  color={['#50e3c2', '#67a1e5']}
                />
              </div>
              <Decoration8
                reverse={true}
                className='top_decoration8'
                color={['#568aea', '#000000']}
              />
            </div>
            <Decoration10 className='top_decoration10 top_decoration10_reverse' />
            <div className='time-box'>
              <h3>{timeStr}</h3>
            </div>
        </div>
    )
}

export default TopPage