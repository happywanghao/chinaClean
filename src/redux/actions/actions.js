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
    if(localStorage.leasesData){
      dispatch({type:'LEASESDATA',content:JSON.parse(localStorage.leasesData)})
    }
    axios.get('http://business.5i71.org/rest.php?r=product/hot')
    .then(data=>{
      dispatch({type:'LEASESDATA',content:data})
      localStorage.setItem("leasesData",JSON.stringify(data))
    })
    .catch(err=>{alert(err)})
  }
)

const getArticleContent=(id)=>(
  dispatch=>{
    let arr=id.split('c')
    let catid=arr[0]
    let _id=arr[1]
    axios.get(`http://cms.5i71.org/invoke.php/business/content?do=info&catid=${catid}&id=${_id}`)
    .then(data=>{
      dispatch({type:'NOWARTICLECONTENT',content:data.data.content})
    })
    .catch(err=>{alert(err)})
  }
)

const getArticleList=(catid,page)=>(
  dispatch=>{
    axios.get(`http://cms.5i71.org/invoke.php/business/content?do=list&catid=${catid}&page=${page}`)
    .then(data=>{
      if(data.data.contents){
        dispatch({type:'NOWARTICLELISTCONTENT',content:data.data})
      }else{
        dispatch({type:'ARTICLELISTISTOTHEEND',content:true})
      }
    })
    .catch(err=>{alert(err)})
  }
)

const getGoodsDetails=(id)=>(
  dispatch=>{
    axios.get(`http://business.5i71.org/rest.php?r=product/item&id=${id}`)
    .then(data=>{
      dispatch({type:"NOWGOODSDETAILS",content:data.data.data})
    })
    .catch(err=>{alert(err)})
  }
)


export {
  getInitializationData,
  getLeasesData,
  getArticleContent,
  getArticleList,
  getGoodsDetails
};
