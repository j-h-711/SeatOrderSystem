import React from "react";

interface CategoryBarProps {
  categories: string[];
}

const CategoryBar: React.FC<CategoryBarProps> = ({ categories }) => {
  const handleCategorySelect = (category: string) => {
    console.log(`Selected category: ${category}`);
  };

  return (
    <div className="category-bar">
      {categories.map((category) => (
        <button key={category} onClick={() => handleCategorySelect(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
