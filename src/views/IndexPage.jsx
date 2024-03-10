import TopPage from './visualization/topPage'
import LeftPage from './visualization/leftPage'
import Centerpage from './visualization/centerPage'
import RightPage from './visualization/rightPage/index'
import { useAsync } from '@/store/action'
import  {useState,useEffect} from 'react'
import {Loading} from '@jiaminghi/data-view-react'
import './indexPage.less'


function IndexPage(){
    const [loading,setLoading] = useState(false)
    const { state } = useAsync()

    useEffect(()=>{
        // console.log(state.pageLoading,'===========')
        setLoading(state.pageLoading)

    },[state.pageLoading])
    return(
        <div className="index-page">
            <TopPage />
            <div className='index-buttom'>
                <LeftPage />
                <Centerpage />
                <RightPage />
            </div>
        </div>
    )
}

export default IndexPage