import './index.less'
import  {useState,useEffect} from 'react'
import LeftTop from "./component/top"
import LeftCenter from './component/center'
import LeftTitle from './component/leftTitle'


function LeftPage(){
    

    return(
        <div className='left_page'>
            <LeftTitle />
            <LeftTop />          
            <LeftCenter />
            
        </div>
    )
}


export default LeftPage