import React, { useState, useEffect } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');

  useEffect(() => {
    const words = text.split(/\s+/); 
    let foundCorrection = '';

    for (let word of words) {
      const lowerWord = word.toLowerCase();
      if (customDictionary[lowerWord]) {
        foundCorrection = `Did you mean: ${customDictionary[lowerWord]}?`;
        break;
      }
    }

    setCorrection(foundCorrection);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Spell Checker and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        rows="4"
        cols="50"
      />
      {correction && <p>{correction}</p>}
    </div>
  );
};

export default XSpellCheck;
