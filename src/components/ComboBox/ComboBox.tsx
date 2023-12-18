import React, { useState, useRef, useEffect } from 'react';
import './ComboBox.css';

interface Fruit {
  name: string;
  icon: string;
}

interface ComboBoxProps {
  fruits: Fruit[];
}

const ComboBox: React.FC<ComboBoxProps> = ({ fruits }) => {
  const [inputValue, setInputValue] = useState('');
  const [isListVisible, setListVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setListVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredFruits = fruits.filter(fruit =>
    fruit.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setListVisible(true);
  };

  const handleOptionClick = (fruitName: string) => {
    setInputValue(fruitName);
    setListVisible(false);
  };

  return (
    <div ref={wrapperRef} className="combo-box">
      <div className={`input-wrapper ${isListVisible ? 'active' : ''}`}>
        <input
          aria-label="Select a fruit"
          aria-haspopup="listbox"
          type="text"
          placeholder="Choose a Fruit"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setListVisible(true)}
          onBlur={() => setListVisible(false)}
        />
      </div>
      {isListVisible && (
        <ul className="combo-box-options">
          {filteredFruits.map((fruit, index) => (
            <li
              key={index}
              className="option"
              onMouseDown={() => handleOptionClick(fruit.name)} 
            >
              <span role="img" aria-label={fruit.name} className="icon">{fruit.icon}</span>
              {fruit.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;
