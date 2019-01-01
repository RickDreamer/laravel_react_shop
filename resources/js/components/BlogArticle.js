import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class BlogArticle extends Component {
	constructor (props) {
		super(props);
		this.state = {
			post: []
		}
	}

	componentDidMount () { 
		axios.get('/api/post/'+this.props.match.params.slug).then(response => {
            console.log(response.data)
			this.setState({
				post: response.data
			})
		}).catch(errors => console.log(errors));
	}
	
    render() {
		var body = this.state.post.body
        return (
        	<div>
                <h1>{this.state.post.title}</h1>
                <img src={"/storage/"+this.state.post.image} class="width100 mb-4" alt=""/>
				<div dangerouslySetInnerHTML={{__html: this.state.post.body}} />
            </div>
        );
    }
} 
  