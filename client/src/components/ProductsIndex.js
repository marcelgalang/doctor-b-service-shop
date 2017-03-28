import React, { PropTypes } from 'react'
import ProductItem from './ProductItem'
import ProductDetail from './ProductDetail'
import Product from './Product'


import ProductForIndex from './ProductForIndex'

import { Link, Route } from 'react-router-dom'


const ProductsIndex = ({ title, children, product }) => (
  <Root>
    <Sidebar>
      <h3>{title}</h3>
      <SidebarItem>
        <div>
          {children.map(product => (
            <Link to={`/products/${product.id}`} >
            <ProductForIndex
              key={product.id}
              title={product.title}
              price={product.price}
              />
            </Link>
          ))}
        </div>
      </SidebarItem>

    </Sidebar>
    <Main>
    <Route path="/products/:productId" render={({  match }) => (
      <ProductDetail product={children.find(product => product.id == match.params.productId)}/>
    )}/>
    </Main>
  </Root>
)

ProductsIndex.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

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

export default ProductsIndex
