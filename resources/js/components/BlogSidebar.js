import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class BlogSidebar extends Component{
    constructor(props) {
        super(props)
        this.state = {
            last_posts: []
        }
    }

    componentDidMount() {
        axios.get('/api/last-articles').then(response => {
            this.setState({
                last_posts: response.data
            }).catch((errors) => console.log(errors))
        })
    }

    render(){
        return(
            <div>
                <h3>Last posts</h3>
                {this.state.last_posts.map(last_post => 
                    <div className="media" key={last_post.id}>
                        <img src={"/storage/"+last_post.image} width="120" alt={last_post.title} className="media-object mr-3" />
                        <div className="media-body">
                            <h4 className="media-title">
                                <Link onClick={() => this.props.handler(last_post.slug)} to={"/blog/"+last_post.slug}>{last_post.title}</Link>
                            </h4>
                            <p>{last_post.body.replace(/<[^>]+>/g, '').slice(0,50)}</p>
                        </div>
                    </div>	
                )}
            </div>
        )
    }
}