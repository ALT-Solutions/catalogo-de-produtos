// src/components/CategoryFilter.js
import React from 'react';
import './CategoryFilter.css';


// const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => (
//     <div className="category-filter form-inline mb-3">
//         <label className="mr-2">Filter by Category:</label>
//         <select
//             className="form-control"
//             value={selectedCategory}
//             onChange={(e) => onSelectCategory(e.target.value)}
//         >
//             <option value="">All Categories</option>
//             {categories.map((category, index) => (
//                 <option key={index} value={category}>
//                     {category}
//                 </option>
//             ))}
//         </select>
//     </div>
// );
const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => (
    <div className="category-filter">
        <label>Filter by Category:</label>
        <select value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map((category, index) => (
                <option key={index} value={category}>
                    {category}
                </option>
            ))}
        </select>
    </div>
);

export default CategoryFilter;
