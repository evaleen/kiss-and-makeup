'use es6';

import React from 'react';

import Modal from 'react-modal';
import '../../../css/ProductInformationModal.css';

class ProductInformationModal extends React.Component {

  static maybeRenderPrice(price) {
    return price
      ? <div className="product-price">Price: {price}</div>
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
      return <div className="product-price">Brand: {linkToBrand}</div>;
    }
    return null;
  }

  static maybeRenderColours(colours) {
    if (colours) {
      console.log(colours);
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
      )
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
            className="modal-product-img"
            src={product.image_link}
            alt={product.name}
          />
          <div className="product-description">{product.description}</div>
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
