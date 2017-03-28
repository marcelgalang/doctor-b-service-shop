import React, { PropTypes } from 'react'
import ProductItem from '../components/ProductItem'
import ProductForIndex from '../components/ProductForIndex'
import { products } from './ProductsContainer'
import { addToCart } from '../actions'
import {  Route, Link } from 'react-router-dom'
import Product from './Product'



const ProductsList = ({ title, children }) =>(
  <Root>
  <Sidebar>
    <div>
      <h3>{title}</h3>
      <div>{children.map((product) => (
          <SidebarItem key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.title}
            </Link>
          </SidebarItem>

      ))}</div>
    </div>
  </Sidebar>
  <Main>

    <Route path="/products/:productId"  render={({match}) => (
      <Product product=
        {children.find(product => product.id == match.params.productId)}/>
    )}/>
  </Main>
  </Root>
)

const ProductX= ({match}) => (
  <div>
    {match.params.productId}
    {match.params.product}
  </div>
)



const Root = (props) => (
  <div style={{
    display: 'flex'
  }} {...props}/>
)

const Sidebar = (props) => (
  <div style={{
    width: '33vw',
    height: '100vh',
    overflow: 'auto',
    background: '#eee'
  }} {...props}/>
)

const SidebarItem = (props) => (
  <div style={{
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    padding: '5px 10px'
  }} {...props}/>
)

const Main = (props) => (
  <div style={{
    flex: 1,
    height: '100vh',
    overflow: 'auto'
  }}>
    <div style={{ padding: '20px'}} {...props}/>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
