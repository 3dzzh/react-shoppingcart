import React, { Component } from 'react';
class Product extends Component {
    addToCart = id => {
        // console.log(id)
        const { addToCart } = this.props
        addToCart(id)
        // 如何在组建内定义一个全局的属性 使用 this.xxx 定义
        console.log(this.inp)
        // console.log(document.getElementById('btn'))
      }
    render() {
        const {product } = this.props
        const ProductsList = product.map(goods =>(<li key={goods.id}>
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