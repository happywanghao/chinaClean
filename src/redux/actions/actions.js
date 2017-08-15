import axios from 'axios';
const getInitializationData=()=>(
  dispatch=>{
    if(localStorage.initializationData){
      dispatch({type:'INITIALIZATIONDATA',content:JSON.parse(localStorage.initializationData)})
    }
    axios.get('http://cms.5i71.org/invoke.php/business/initialize?v=2')
    .then(data=>{
      dispatch({type:'INITIALIZATIONDATA',content:data})
      localStorage.setItem("initializationData",JSON.stringify(data))
    })
    .catch(err=>{alert(err)})
  }
)

const getLeasesData=()=>(
  dispatch=>{
    axios.get('http://business.5i71.org/rest.php?r=product/hot')
    .then(data=>{
      dispatch({type:'LEASESDATA',content:data})
    })
    .catch(err=>{alert(err)})
  }
)




export {getInitializationData,getLeasesData};
