import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, toggleAvailability } from "./productsSlice";


export function ProductList() {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();


    return (
        <div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <div>
                            {product.name} - {product.description} - ${product.price} - {" "}
                            {product.available ? "Available" : "Not Available"}
                        </div>
                        <div>
                            <button onClick={() => dispatch(toggleAvailability(product.id))}>Toggle Availability</button>
                            <button onClick={() => dispatch(deleteProduct(product.id))}>Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}