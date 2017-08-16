import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux';
import {getInitializationData} from './redux/actions/actions.js'
import Loading from './components/loading/Loading.js'
import Footer from './components/footer/Footer.js'
import Header from './components/header/Header.js'
import Home from './components/main/home/Home.js'
import Business from './components/main/business/Business.js'
import Special from './components/main/special/Special.js'
import Search from './components/main/search/Search.js'
import Mine from './components/main/mine/Mine.js'
import Article from './components/main/article/Article.js'
import ArticleList from './components/main/articleList/ArticleList.js'
import GoodsDetails from './components/main/goodsDetails/GoodsDetails.js'
class App extends React.Component{
	componentWillMount(){
		this.props.dispatch(getInitializationData())
	}
	render(){
		return(
			this.props.initializationData?
			<Router>
					<div id="app">
						<Header/>
						<div className="main">
							<Switch>
								<Route exact path='/' component={Home} />
								<Route path="/business" component={Business} />
								<Route path="/special" component={Special} />
								<Route path="/search" component={Search} />
								<Route path='/mine' component={Mine} />
								<Route path='/article/:id' component={Article} />
								<Route path='/articlelist/:catid' component={ArticleList}/>
								<Route path='/goodsdetails/:id' component={GoodsDetails}/>
							</Switch>
						</div>
						{this.props.showFooter ? <Footer/> : <div></div>}
					</div>
			</Router>
			:
			<Loading/>
		)
	}
}
const mapStateToProps=(store)=>({
	initializationData:store.initializationData,
	showFooter:store.showFooter
})
export default connect(mapStateToProps)(App)
