import axios from 'axios';
import $ from 'jquery'

const getInitializationData=()=>(
  dispatch=>{
    $.ajax({
      url:'http://cms.5i71.org/invoke.php/business/initialize?v=2',
      type: 'GET',
      dataType: 'JSONP',//here
      success: data=>{
        // dispatch({type:'POSITION',content:{...data.result.addressComponent}})
        console.log(data);
      },
      // error:
    })
  }
)





export {getInitializationData};
