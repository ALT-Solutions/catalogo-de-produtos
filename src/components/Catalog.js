// src/components/Catalog.js
import React, { useState } from 'react';
import Product from './Product';
import CategoryFilter from './CategoryFilter';
import './Catalog.css';

const Catalog = ({ products }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const categories = Array.from(new Set(products.map((product) => product.category)));

    const filteredProducts =
        selectedCategory !== ''
            ? products.filter((product) => product.category === selectedCategory)
            : products;

    return (


        <div>


            <div className="d-flex p-2 justify-content-center">
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
            </div>


            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="col">
                            <Product {...product} />
                        </div>
                    ))}
                </div>
            </div>


        </div>


    );
};

export default Catalog;
