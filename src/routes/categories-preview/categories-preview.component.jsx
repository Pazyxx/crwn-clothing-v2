import { useContext, Fragment} from 'react';


import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';
import { Link } from 'react-router-dom';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

 
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
          <Fragment key={title}>
            
            <Link to={`/shop/${title}`}>
              <h2 >{title.toUpperCase()}</h2>
            </Link>
            <div className='products-container'>
              {categoriesMap[title].slice(0, 4).map((product) => (
                <ProductCard key={product.id} title={title} product={product} />
              ))}
            </div>
          </Fragment>
        ))}
    </Fragment>
  );
};

export default CategoriesPreview;
