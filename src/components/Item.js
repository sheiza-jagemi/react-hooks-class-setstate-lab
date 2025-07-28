import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inCart: false
    };
  }

  handleAddToCart = () => {
    this.setState(prevState => ({
      inCart: !prevState.inCart
    }));
  };

  render() {
    const { name, category } = this.props;
    const { inCart } = this.state;
    
    return (
      <li className={inCart ? "in-cart" : ""}>
        {name} - {category}
        <button onClick={this.handleAddToCart}>
          {inCart ? "Remove From Cart" : "Add to Cart"}
        </button>
      </li>
    );
  }
}

export default Item;