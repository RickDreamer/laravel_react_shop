import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class Blog extends Component {
	constructor () {
		super();
		this.state = {
			posts: []
		}
	}

	componentWillMount () {
		axios.get('/api/home').then(response => {
			this.setState({
				posts: response.data
			})
		}).catch(errors => console.log(errors));
		
	}
	
    render() {
        return (
        	<div className="row">
            	{this.state.posts.map(post =>
					<div className="col-sm-4 mb-4" key={post.id}>
						<img src={"/storage/"+post.image} alt="" class="width100" />
						<h3 class="mb-2 mt-2"><Link to={"/blog/"+post.slug}>{post.title}</Link></h3>
						{post.body.replace(/<[^>]+>/g, '').slice(0,120)}
					</div>
				 )}
            </div>
        );
    }
} 
  