'use es6';

import React from 'react';

import { isEmpty } from 'underscore';

import Modal from 'react-modal';
import '../../../css/ProductInformationModal.css';

class ProductInformationModal extends React.Component {

  static maybeRenderDescription(description) {
    if (description) {
      const ingredientsIndex = description.match(/ingredients|directions|how to|tip/i);
      console.log(ingredientsIndex);
      if (ingredientsIndex) {
        description = description.slice(0, ingredientsIndex.index);
      }
      return (<div className="product-description product-attribute">{description}</div>);
    }
    return null;
  }

  static maybeRenderPrice(price) {
    return price
      ? <div className="product-price product-attribute">Price: {price}</div>
      : null;
  }

  static maybeRenderBrandLink(brandName, link) {
    if (brandName || link) {
      const label = !brandName ? link : brandName;
      const linkToBrand = link ?
      (<a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>)
      : label;
      return <div className="product-brand product-attribute">Brand: {linkToBrand}</div>;
    }
    return null;
  }

  static maybeRenderColours(colours) {
    if (!isEmpty(colours)) {
      const colourBlocks = colours.map((colour) => {
        const style = { 'background-color': colour.hex_value };
        return (
          <div
            key={colour.hex_value}
            id={colour.hex_value}
            className="colour-block"
            style={style}
          />
        );
      });
      return (
        <div className="colour-blocks product-attribute">
          {colourBlocks}
        </div>
      );
    }
    return null;
  }

  static maybeRenderProductLink(link) {
    if (link) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to product
        </a>
      );
    }
    return null;
  }
  render() {
    const { product, closeModal } = this.props;
    return (
      <Modal
        isOpen
        onRequestClose={closeModal}
        className="product-info-modal"
        contentLabel="Modal"
      >
        <div className="modal-header">
          <h3 className="modal-name">{product.name}</h3>
          <button
            className="close-button"
            onClick={closeModal}
          >
              X
          </button>
        </div>
        <div className="modal-body">
          <img
            className="modal-product-img product-attribute"
            src={product.image_link}
            alt={product.name}
          />
          {ProductInformationModal.maybeRenderDescription(product.description)}
          {ProductInformationModal.maybeRenderPrice(product.price)}
          {ProductInformationModal.maybeRenderBrandLink(product.brand, product.website_link)}
          {ProductInformationModal.maybeRenderColours(product.product_colors)}
          {ProductInformationModal.maybeRenderProductLink(product.product_link)}
        </div>
      </Modal>
    );
  }
}

ProductInformationModal.propTypes = {
  product: React.PropTypes.shape({
    brand: React.PropTypes.string,
    category: React.PropTypes.string,
    description: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired,
    image_link: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.string,
    product_colors: React.PropTypes.array.isRequired,
    product_link: React.PropTypes.string.isRequired,
    product_type: React.PropTypes.string.isRequired,
    rating: React.PropTypes.number,
    website_link: React.PropTypes.string.isRequired,
  }).isRequired,
  closeModal: React.PropTypes.func.isRequired,
};
export default ProductInformationModal;
