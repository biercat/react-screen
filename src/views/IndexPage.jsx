import TopPage from './visualization/topPage'
import LeftPage from './visualization/leftPage'
import Centerpage from './visualization/centerPage'
import RightPage from './visualization/rightPage/index'
import {Loading} from '@jiaminghi/data-view-react'
import './indexPage.less'


function IndexPage(){
    return(
        <div className="index-page">
            {/* <Loading> */}
            <TopPage />
            <div className='index-buttom'>
                <LeftPage />
                <Centerpage />
                <RightPage />
            </div>
            {/* </Loading> */}
        </div>
    )
}

export default IndexPage