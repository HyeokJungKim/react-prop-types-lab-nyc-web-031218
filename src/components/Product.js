import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component{
  render(){
    return (
      <div>Product</div>
    )
  }
}

Product.defaultProps = {hasWatermark: false}

Product.propTypes ={
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,

  weight: (props, propsName) =>{
    if(props[propsName] == undefined){
      return new Error("Error")
    } else if(isNaN(props[propsName])){
      return new Error("Error 2")
    } else if(!(props[propsName] > 80 && props[propsName] < 300)){
      return new Error("Error 3")
    }
  }

}

export default Product;
