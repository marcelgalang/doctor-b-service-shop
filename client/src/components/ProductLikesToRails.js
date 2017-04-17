import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { counterFunction } from '../redux/modules/Products'
import  *  as actions from '../redux/modules/Products'
import { store } from '../redux/store'
import { addLike } from '../redux/modules/Product'

class ProductLikesToRails extends Component {
  constructor(props) {
    super(props);

     this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    store.dispatch(addLike(id))
  }

  render() {

    return(
      <div><button
      onClick={this.handleClick(this.props.product.id)}>
      Likes to rails
      </button>
       {this.props.count}
      </div>
    )
  }
}




export default ProductLikesToRails
