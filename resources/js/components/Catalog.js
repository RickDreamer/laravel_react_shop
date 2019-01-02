import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';


export default class Catalog extends Component{
    constructor(){
        super()
        this.state = {
            products: [],
            flash: {
                active: false,
                message: ""
            }
        }
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount(){
        axios.get('/api/products').then(response => {
            this.setState({
                products: response.data
            })
        }).catch(errors => console.log(errors))
    }

    changeImageSize(image, size){
		let extens = image.replace(/^.*\./, '')
		let imageName = image.split(".", 1)
		let tImage = imageName[0]+"-"+size+"."+extens
		return tImage
    }
    
    addToCart(product){
        axios.post('/api/add-to-cart', product).then(response => {
            console.log(response)
            // this.flash.setState({
            //     active: response.data
            // })
        })
    }

    render() {
        return(
            <div>
                <h1 className="text-center">Catalog</h1>
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {this.state.products.map(product => 
                                <div key={product.id} className="col-md-4 mb-4">
                                    <Link to={"/catalog/"+product.slug}>
                                        <img src={"/storage/"+this.changeImageSize(product.image, "cropped")} className="width100" />
                                    </Link>
                                    <h4 className="pt-2 text-center">
                                        <Link to={"/catalog/"+product.slug}>{product.title}</Link>
                                    </h4>
                                    <div className="text-center">
                                        <span>Price: </span>
                                        <span>{product.price} </span>
                                        <s>
                                            <small>Old price:</small>
                                            <small>{product.old_price}</small>
                                        </s>
                                        <button onClick={this.addToCart(product.id)} className="btn btn-outline-danger">Add to cart</button>
                                    </div>
                                </div>    
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}