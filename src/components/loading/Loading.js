import React from 'react';
import Spin from 'antd/lib/spin';
class Loading extends React.Component{
  render(){
    return (
      <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
				<Spin tip="Loading..." size="large">
			  </Spin>
      </div>
    )
  }
}
export default Loading
