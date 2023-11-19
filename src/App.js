// src/components/App.js
import React, { useState, useEffect } from 'react';
import Catalog from './components/Catalog';
import Header from './components/Header';

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/products.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(products); // Check if products are set

    return (
        <div className="app">
            <Header logoSrc="/images/logo.png" logoAlt="AC Mundo Fit Logo" />
            <div className="d-flex p-2 justify-content-center">
            </div>
            <Catalog products={products} />
        </div>
    );
};

export default App;
