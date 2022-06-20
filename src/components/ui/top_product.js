import React from 'react';
import Gallery from '../ui/gallery';
import Price from './price';
import OldPrice from '../ui/old-price';
import {Product} from '../../mocks/moke';
import '../app/styles.css';
import Name from './name';


function TopProduct() {
	return (
			 <section>
         <Name />
				 <section>
					<Gallery src={Product.src} alt={Product.name}/>
				 </section>
						<p>
							Цена: <OldPrice  />{' '}
							<Price />
						</p>
			 </section>
		);
	}

export default TopProduct;
