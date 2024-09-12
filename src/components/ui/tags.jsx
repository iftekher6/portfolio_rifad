'use client'

import React, { useState } from 'react';
// import './tag.css'; // For styling, add CSS file as required


const TagInput = ({label}) => {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState('')
  const [showSuggestion, setShowSuggestion] = useState([])

  const suggestionArray = ['figma', 'sketch', 'final cut pro']

  const handleChange = (event)=>{
    event.preventDefault()

    const query = event.target.value
    const filteredArr = suggestionArray.filter(word=> word.startsWith(query))
    setShowSuggestion(filteredArr)

    setInput(event.target.value)
  }

  const addToInput = (event)=> {
    // event.preventDefault()
    setInput(showSuggestion)
  }
 





 

  // const addTag = (event) => {
  //   if (event.key === 'Enter' && event.target.value !== '') {
  //     if (tags.length < 5) { // Limit to 5 tags
  //       setTags([...tags, event.target.value]);
  //       event.target.value = '';
  //     } else {
  //       alert('Maximum 5 tags allowed.');
  //     }
  //   }
  // };
  
 

 

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <> 
    <div className='tags-div'>
    <label htmlFor="keyword" className='keyword-label'>{label}</label>
        <div className="tag-input">
      <ul className="tags">
      
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
            <span className="tag-close-icon" onClick={() => removeTag(index)}>
              &times;
            </span>
          </li>
        ))}
      </ul>
      
    
      <input
        id='keyword'
        type="text"
        // onKeyDown={addTag}
        value={input}
        onChange={handleChange}
        placeholder="Press Enter to add keywords"
        maxLength={30} // Example limit for tag length
        className='input-tag'
        // 
      />
      {showSuggestion.length > 0 && showSuggestion.map((word, index)=> (
        <li onClick={addToInput}>{word}</li>
      ))}
    

    </div>
    </div>

    </>

  );
};

export default TagInput;
