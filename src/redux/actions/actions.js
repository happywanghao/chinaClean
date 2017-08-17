import axios from 'axios';
//预加载
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
//获取首页租赁商品信息
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
//获取文章详情
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
//获取文章列表
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
//获取商品详情
const getGoodsDetails=(id)=>(
  dispatch=>{
    axios.get(`http://business.5i71.org/rest.php?r=product/item&id=${id}`)
    .then(data=>{
      dispatch({type:"NOWGOODSDETAILS",content:data.data.data})
    })
    .catch(err=>{alert(err)})
  }
)
//获取搜索列表
const getSearchList=(val,page=1)=>(
  dispatch=>{
    axios.get(`http://www.5i71.com/search.aspx?act=list&key=${val}&page=${page}&v=2`)
    .then(data=>{
      if(data.data.constructor === String){
        data.data=JSON.parse(data.data.replace(/[\r\n\f\t\v]/g,''))
      }
      if(data.data.searchs){
        dispatch({type:"NOWSEARCHLIST",content:data.data})
      }else{
        dispatch({type:'ARTICLELISTISTOTHEEND',content:true})
      }
    })
    .catch(err=>{alert(err)})
  }
)
//获取搜索文章详情
const getSearchviewContent=(id)=>(
  dispatch=>{
    axios.get(`http://www.5i71.com/search.aspx?act=info&id=${id}`)
    .then(data=>{
      dispatch({type:"SEARCHVIEWCONTENT",content:data.data})
    })
    .catch(err=>{alert(err)})
  }
)


export {
  getInitializationData,
  getLeasesData,
  getArticleContent,
  getArticleList,
  getGoodsDetails,
  getSearchList,
  getSearchviewContent
};
