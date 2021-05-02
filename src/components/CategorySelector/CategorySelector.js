import React from 'react';
import categories from '../../categories';
import './CategorySelector.css';

const CategorySelector = ({category, chooseCategory}) => {
  const categoryChoosing = (e) => {
    chooseCategory(e.target.value);
  }

  return (
    <div className="category-selector">
      <h2 className="category-selector__title">Select Category</h2>
      <select
        className="category-selector__select"
        value={category}
        onChange={categoryChoosing}>
        {categories.map((category, index) => (
          <option
            className="category-selector__option"
            key={index}
            value={category.id}
            dangerouslySetInnerHTML={{__html: category.name}}
          />
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;
