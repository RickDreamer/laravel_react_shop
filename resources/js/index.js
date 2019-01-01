import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog';
import BlogArticle from './components/BlogArticle';
import Home from './components/Home';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class Index extends Component {
    render() {
        return (
            <div className="container">
            	<Router>
            		<div>
            			<Link to="/">Home</Link>
            			<Link to="/blog">Blog</Link>
            			<Route path="/" exact component={Home} />
            			<Route path="/blog" exact component={Blog} />
            			<Route path="/blog/:slug" exact render={props => <BlogArticle{...props}/> }/>
            		</div>
            	</Router>
            </div>
        );
    }
} 

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
  