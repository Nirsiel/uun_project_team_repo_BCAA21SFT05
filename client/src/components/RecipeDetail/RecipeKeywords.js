import React from 'react';

const RecipeKeywords = (props) => {
  let keywords = props.items.map((keyword) => {
    return <span className="keyword-badge badge">{keyword.value}</span>;
  });

  return (
      <div>
        {keywords}
      </div>
  );
};

export default RecipeKeywords;
