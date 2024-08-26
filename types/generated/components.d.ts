import type { Schema, Attribute } from '@strapi/strapi';

export interface CartAddToCart extends Schema.Component {
  collectionName: 'components_cart_add_to_carts';
  info: {
    displayName: 'Add to cart';
    icon: 'shoppingCart';
  };
  attributes: {
    ProductName: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cart.add-to-cart': CartAddToCart;
    }
  }
}
