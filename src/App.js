import React from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
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
class App extends React.Component{
	componentWillMount(){
		this.props.dispatch(getInitializationData())
	}
	render(){
		return(
			this.props.initializationDate?
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
							</Switch>
						</div>
						<Footer/>
					</div>
			</Router>
			:
			<Loading/>

		)
	}
}
const mapStateToProps=(store)=>({
	initializationData:store.initializationData
})
export default connect(mapStateToProps)(App)
