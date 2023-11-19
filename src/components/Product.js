// src/components/Product.js
import React, { useState } from 'react';
import './Product.css';
// src/components/Product.js

const Product = ({ name, description, affiliateLink, image, cupom }) => {
    const [copied, setCopied] = useState(false);

    const copyCupomToClipboard = () => {
        navigator.clipboard.writeText(cupom);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    };

    return (
        <div className="card mb-4">
            {cupom && <div className="coupon-message">Cupom disponível!</div>}

            <img
                src={`/images/${image}`}
                className="card-img-top mx-auto"
                alt={name}
                style={{ maxWidth: '50%', height: 'auto', paddingTop : "10px" }}
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer text-start">
                <a href={affiliateLink} className="btn btn-primary button" target="_blank" rel="noopener noreferrer">
                    Clique Aqui
                </a>
                {cupom && (
                    <button
                        className={`btn btn-outline-secondary copy-button ${copied ? 'highlighted' : ''}`}
                        onClick={copyCupomToClipboard}
                    >
                        {copied ? 'Copiado!' : 'Copiar Cupom'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Product;

// const Product = ({ name, description, affiliateLink, image, cupom }) => (
//
//     <div className="card mb-4">
//         <img
//             src={`/images/${image}`}
//             className="card-img-top mx-auto"
//             alt={name}
//             style={{ maxWidth: '50%', height: 'auto' }}
//         />
//         <div className="card-body">
//             <h5 className="card-title">{name}</h5>
//             <p className="card-text">{description}</p>
//         </div>
//
//         <div className="card-footer text-center">
//             <a href={affiliateLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
//                 Clique Aqui
//             </a>
//         </div>
//     </div>
// );

// const Product = ({ name, description, affiliateLink }) => (
//     <div className="card m-3" style={{ width: '18rem' }}>
//         <div className="card-body">
//             <h5 className="card-title">{name}</h5>
//             <p className="card-text">{description}</p>
//             <a href={affiliateLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
//                 Learn More
//             </a>
//         </div>
//     </div>
// );

// const Product = ({ name, description, affiliateLink, image }) => (
//     <div className="card mb-4">
//         <div className="card-img-container">
//             <img src={`/images/${image}`} className="card-img-top" alt={name} style={{ maxWidth: '50%', height: 'auto' }}/>
//         </div>
//         <div className="card-body">
//             <h5 className="card-title">{name}</h5>
//             <p className="card-text">{description}</p>
//             <a href={affiliateLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
//                 Clique Aqui
//             </a>
//         </div>
//     </div>
// );
// const Product = ({ name, description, affiliateLink }) => (
//     <div className="product">
//         <h3>{name}</h3>
//         <p>{description}</p>
//         <a href={affiliateLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
//             Clique Aqui
//         </a>
//     </div>
// );

