import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog';
import BlogArticle from './components/BlogArticle';
import Home from './components/Home';
import Catalog from './components/Catalog';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

export default class Index extends Component {
    render() {
        return (
            <div className="container">
            	<Router>
					<div>
						<nav className="navbar navbar-dark navbar-expand-lg bg-primary mb-4">
							<div className="collapse navbar-collapse" id="navbarNavDropdown">	
								<ul className="navbar-nav">
									<li className="nav-item">
										<Link className="nav-link" to="/">Home</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/blog">Blog</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/catalog">Catalog</Link>
									</li>
								</ul>
							</div>
						</nav>
						<div>
							<Switch>
								<Route path="/" exact component={Home} />
								<Route path="/blog" exact component={Blog} />
								<Route path={`/blog/:slug`} exact={true} render={props => <BlogArticle{...props}/> }/>
								<Route path="/catalog" exact component={Catalog} />
							</Switch>
						</div>
						<footer className="text-white bg-primary mt-4">
							<div className="text-center pt-2 pb-2">Laravel & ReactJs App</div>
						</footer>
					</div>
            	</Router>
            </div>
        );
    }
} 

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
  