import React, { Component } from 'react';
import Header from '../Header/Header'
import Product from '../Product/Product' 
import ShoppingCart from '../ShoppingCart/ShoppingCart';
class App extends Component {
  state = {
    product: [
      {
        id: '112121',
        goodsName: 'iPad 4 Mini',
        price: 500.01,
        inventory: 1
      },
      {
        id: '116765',
        goodsName: 'T-shirt',
        price: 100,
        inventory: 10
      }
    ],
    cartProduct: [
      {
        id: '112121',
        goodsName: 'iPad 4 Mini',
        price: 500.01,
        inventory: 1,
        num: 1
      }
    ]
  }
  AddToCart = id => {
    const { products } = this.state
    this.setState({
      products: products.map(goods => {
        if (goods.id === id) {
          goods.inventory = goods.inventory > 0 ? goods.inventory - 1 : 0
        }
        return goods
      })
    })
  }
  render() {
    const {product , cartProduct} = this.state
    return (
      <div className="App">
      <h1>Shopping Cart Example</h1>
      <hr />
       <Header />
       <Product products={product} addToCart={this.addToCart} />
       <hr />
       <ShoppingCart cartProducts={cartProduct} />
      </div>
    );
  }
}

export default App;
