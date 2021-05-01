import React from 'react';
import categories from '../../categories';
import './CategorySelector.css';

const CategorySelector = () => {
  return (
    <div className="category-selector">
      <h2 className="category-selector__title">Select Category</h2>
      <select className="category-selector__select">
        {categories.map((category, index) => (
          <option className="category-selector__option" key={index} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;
