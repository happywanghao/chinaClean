import React from 'react';
import {connect} from 'react-redux'
import './category.css'
import fenlei01Img from '../../../images/lease/fenlei01.png'
import fenlei02Img from '../../../images/lease/fenlei02.png'
import fenlei03Img from '../../../images/lease/fenlei03.png'
import fenlei04Img from '../../../images/lease/fenlei04.png'
import fenlei05Img from '../../../images/lease/fenlei05.png'
import fenlei06Img from '../../../images/lease/fenlei06.png'
import fenlei07Img from '../../../images/lease/fenlei07.png'
import fenlei08Img from '../../../images/lease/fenlei08.png'
import fenlei09Img from '../../../images/lease/fenlei09.png'
import fenlei10Img from '../../../images/lease/fenlei10.png'
import fenlei11Img from '../../../images/lease/fenlei11.png'
import fenlei12Img from '../../../images/lease/fenlei12.png'
import fenlei13Img from '../../../images/lease/fenlei13.png'
import fenlei14Img from '../../../images/lease/fenlei14.png'
import fenlei15Img from '../../../images/lease/fenlei15.png'
import fenlei16Img from '../../../images/lease/fenlei16.png'
import fenlei17Img from '../../../images/lease/fenlei17.png'
import fenlei18Img from '../../../images/lease/fenlei18.png'
import fenlei19Img from '../../../images/lease/fenlei19.png'
import fenlei20Img from '../../../images/lease/fenlei20.png'
class Category extends React.Component{
  componentDidMount(){
    this.props.dispatch({type:'SHOWFOOTER',content:false})
    this.props.dispatch({type:'SHOWBACK',content:true})
    this.props.dispatch({type:'HEADERTITLE',content:'分类'})
  }
  componentWillUnmount(){
    this.props.dispatch({type:'SHOWFOOTER',content:true})
    this.props.dispatch({type:'SHOWBACK',content:false})
    this.props.dispatch({type:'HEADERTITLE',content:''})
  }
  render(){
    let categoryData=[fenlei01Img,
                      fenlei02Img,
                      fenlei03Img,
                      fenlei04Img,
                      fenlei05Img,
                      fenlei06Img,
                      fenlei07Img,
                      fenlei08Img,
                      fenlei09Img,
                      fenlei10Img,
                      fenlei11Img,
                      fenlei12Img,
                      fenlei13Img,
                      fenlei14Img,
                      fenlei15Img,
                      fenlei16Img,
                      fenlei17Img,
                      fenlei18Img,
                      fenlei19Img,
                      fenlei20Img
                    ]
    return (
      <div className="category">
       <ul>
         {categoryData.map((item,index)=>(
           <li key={Math.random()}><img alt='img' src={item}/></li>
         ))}
       </ul>
    </div>
    )
  }
}
const mapStateToProps=store=>({
})
export default connect(mapStateToProps)(Category)
