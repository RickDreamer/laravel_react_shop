import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import BlogSidebar from './BlogSidebar';

export default class BlogArticle extends Component {
	constructor (props) {
		super(props);
		this.state = {
			post: []
		}
		this.handler = this.handler.bind(this);
	}

	componentDidMount () { 
		axios.get('/api/post/'+this.props.match.params.slug).then(response => {
			this.setState({
				post: response.data
			})
		}).catch(errors => console.log(errors));
	}

	handler(slug) {
		this.props.match.params.slug = slug
        axios.get('/api/post/'+this.props.match.params.slug).then(response => {
			this.setState({
				post: response.data
			})
		}).catch(errors => console.log(errors));
    }
	
    render() {
        return (
        	<div>
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<Link to="/">Home</Link>
						</li>
						<li className="breadcrumb-item">
							<Link to="/blog">Blog</Link>
						</li>
						<li className="breadcrumb-item active" aria-current="page">{this.state.post.title}</li>
					</ol>
				</nav>
				<div className="row">
					<div className="col-md-8">
						<img src={"/storage/"+this.state.post.image} className="width100 mb-4" alt=""/>
						<h1>{this.state.post.title}</h1>
						<div dangerouslySetInnerHTML={{__html: this.state.post.body}} />
					</div>
					<div className="col-md-4">
						<BlogSidebar handler ={this.handler} />
					</div>
				</div>
            </div>
        );
    }
} 
  