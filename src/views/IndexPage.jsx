import TopPage from './visualization/topPage'
import LeftPage from './visualization/leftPage'
import './indexPage.less'


function IndexPage(){
    return(
        <div className="index-page">
            <TopPage />
            <LeftPage />
        </div>
    )
}

export default IndexPage