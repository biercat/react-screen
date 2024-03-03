import './index.less'
import  {useState,useEffect} from 'react'
import LeftTop from "./component/top"
import LeftCenter from './component/center'
import LeftButtom from './component/buttom'


function LeftPage(){
    

    return(
        <div className='left_page'>
           
            <LeftTop />          
            <LeftCenter />
            <LeftButtom />
        </div>
    )
}


export default LeftPage