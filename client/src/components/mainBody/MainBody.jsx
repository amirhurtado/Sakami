import { ProductBox } from "..";
import "./mainBody.css";

export const MainBody = ({ products }) => {
  return (
    <div className="mainBody">
        {Object.entries(products).map(([category, products]) => (
          <div key={category} className="category">
            <h1 className="title">{category}</h1>
            <div className="productsContainer">
              {products.map((product) => (
                <ProductBox key={product.title} category={category} product={product} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};
