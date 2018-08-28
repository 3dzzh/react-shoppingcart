import React, { Component } from 'react';
class Product extends Component {
    state={
        Product:[
            {
                id:10,
                goodsName:'ipad',
                price:300,
                inventory:3
            },
            {
                id:11,
                goodsName:'ipone',
                price:500,
                inventory:2
            }
        ]
    }
    AddToCart  = id=>{
        const {Product} = this.state
        this.setState({
            Product: Product.map(goods =>{
                if(goods.id === id){
                    goods.inventory = goods.inventory > 0 ? goods.inventory-1 : 0
                }
                return goods
            })
        })
        const  AddToCart= this.props
        AddToCart(id) 
    }
    render() {
        const {Product } = this.state
        const ProductsList = Product.map(goods =>(<li key={goods.id}>
        <p style={{marginBottom:0}}>{goods.goodsName} - ${goods.price.toFixed(2)} x {goods.inventory}</p>
        <button disabled={!goods.inventory} onClick={this.AddToCart}>add to cart</button>
       </li>))
        return (
            <div>
                <h2>Products</h2>
                <ul>{ProductsList}</ul>
            </div>
        );
    }
}

export default Product;