import React from 'react';
import {Product} from '../../mocks/moke';

function Gallery() {
  return (
    <div>
      <img class="card-img-top" src={Product.src} alt={Product.name} />
    </div>
  );
}

export default Gallery;
