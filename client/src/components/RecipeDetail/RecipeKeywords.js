import React, {useCallback, useEffect, useState} from 'react';
import KeywordsService from '../../services/KeywordsService';

const RecipeKeywords = (props) => {
  const [keywords, setKeywords] = useState([]);

  // const loadKeywordsHandler = useCallback(async () => {
  //   props.items.map(async (keywordId) => {
  //     let data = await KeywordsService.getKeywordById(keywordId);
  //     setKeywords((prevState => {
  //       return [...prevState, data];
  //     }));
  //   });
  // });

  const loadKeywords = useCallback(() => {
    let kw = [];
    props.items.map(async (keywordId) => {
      kw.push(await KeywordsService.getKeywordById(keywordId));
    });
    setKeywords(kw);
  }, [props.items]);

  useEffect(() => {
    loadKeywords();
  }, [loadKeywords]);

  console.log(keywords);

  const renderKeywords = () => {
    let spans = [];
    keywords.map((keyword) => {
      spans.push(<span className="keyword-badge badge">{keyword.value}</span>);
    });
    return spans;
  };

  return (
      <div>
        <span className="keyword-badge badge">Long</span>
        <span className="keyword-badge badge">Easy</span>
        <span className="keyword-badge badge">Just one ingredient</span>
        <span className="keyword-badge badge">Cucumber power</span>
        <span className="keyword-badge badge">juicy</span>
      </div>
  );
};

export default RecipeKeywords;
