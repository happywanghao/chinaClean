import React from 'react';
import Carousel from 'antd/lib/carousel';

class Home extends React.Component{
  render(){
    return (
      <div className="Home">
        <Carousel autoplay>
          <div><img alt='img' src=''/></div>
          <div><img alt='img' src=''/></div>
          <div><img alt='img' src=''/></div>
          <div><img alt='img' src=''/></div>
        </Carousel>
      </div>
    )
  }
}
export default Home
