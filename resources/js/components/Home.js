import React, { Component } from 'react';
import Slider from 'react-slick';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

export default class Home extends Component{
	constructor(){
		super();
		this.state = {
			slides: [],
			posts: []
		}
		this.next = this.next.bind(this);
    	this.previous = this.previous.bind(this);
	}

	next() {
		this.slider.slickNext();
	}
	previous() {
		this.slider.slickPrev();
	}

	componentDidMount(){
		axios.get('/api/main-slider').then(response => {
			this.setState({
				slides: response.data
			}).catch(errors => console.log(errors))
		})

		axios.get('/api/last-articles').then(response => {
			this.setState({
				posts: response.data
			}).catch(errors => console.log(errors))
		})
	}

	changeImageSize(image, size){
		let extens = image.replace(/^.*\./, '')
		let imageName = image.split(".", 1)
		let tImage = imageName[0]+"-"+size+"."+extens
		return tImage
	}

	render(){
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true
		};
		return(
				<div>
					<div className="position-relative">
						<Slider ref={c => (this.slider = c)} {...settings}>
							{this.state.slides.map(slide =>
								<div key={slide.id} className="slide_container">
									<img src={"/storage/"+this.changeImageSize(slide.image, "slider")} className="width100" />
									<h3 className="position-absolute slide-title">{slide.title}</h3>
									<Link to={"/blog/"+slide.slug} className="btn btn-primary btn-slider position-absolute">Read more</Link>
								</div>
							)}
						</Slider>
						<div className='position-absolute mainArrows nextArr' onClick={this.next}>&#8594;</div>
						<div className='position-absolute mainArrows prevArr' onClick={this.previous}>&#8592;</div>
					</div>
					<div className="section_new_in_blog pt-4">
						<h3 className="text-center">New in blog</h3>
						<div className="row">
							{this.state.posts.map(post => 
								<div key={post.id} className="col-md-6 col-lg-3">
									<Link to={"/blog/"+post.slug}>
										<img src={"/storage/"+this.changeImageSize(post.image, 'cropped')} className="width100"/>
									</Link>
									<h4 className="pt-3 pb-4">
										<Link to={"/blog/"+post.slug}>{post.title}</Link>
									</h4>
								</div>	
							)}
						</div>
					</div>
				</div>
			)
	}
}