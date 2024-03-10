
import RightCenter from "./component/rightCenter" 
import RightTop from "./component/rightTop"   
import "./index.less"


function RightPage(){

    return(
        <div className="right_page">
            <RightTop />
            <RightCenter />
            
        </div>
    )
}


export default RightPage