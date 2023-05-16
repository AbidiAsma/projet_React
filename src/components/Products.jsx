
import Counter from "./Counter";
import Product from "./Product";
import { useState } from "react";

function Products() {
    let title = "Learn How To Create ReactJs";
    let showList = true;
    const [products, setProduct] = useState([
            {
                id: 1,
                label: "IPone 13 pro max",
                price: 3000 
            },
            {
                id: 2,
                label: "Samsung",
                price: 1500 
            },
            {
                id: 3,
                label: "nokia",
                price: 1000 
            }
        ]
    )
    
    const deleteProduct = (id) => {
        let myList = products.filter(product => product.id !== id);
        setProduct((prev) => {
            console.log(prev)
            return myList;
        });
    };
    
return (
    <>
        <h1>{title}</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa aut voluptatum laborum maxime reprehenderit. Pariatur ipsa sed laudantium deleniti aspernatur repudiandae mollitia aliquam quos.
            Pariatur ipsa sed laudantium deleniti aspernatur repudiandae mollitia aliquam quos. 
        </p>
        <Counter />
        { showList && (
            <div>
               {products.map((product, index) =>(
               <div key={index}>
                  <Product id={product.id} onDeleteProduct={deleteProduct}>
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit.</p>
                        <h4 className="card-title">{product.label}</h4>
                        <p className="card-text">
                        <button className="btn btn-danger">{product.price}</button>
                        </p>
                    </div>
                  </Product>
               </div>))}
            </div>
        )}
    </>
  );
}

export default Products