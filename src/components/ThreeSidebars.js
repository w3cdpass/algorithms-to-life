import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { algorithms } from '../data/algorithm';
import '../styles/ThreeSidebars.css';

const ThreeSidebars = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const toggleCategory = (category) => {
    setExpandedCategories((prevExpandedCategories) => ({
      ...prevExpandedCategories,
      [category]: !prevExpandedCategories[category],
    }));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleSearchBlur = () => {
    if (!searchTerm) {
      setIsSearching(false);
    }
  };

  const filteredAlgorithms = algorithms.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="container">
      <div className="sidebar1">
        <div className="sticky-header">
          {!isSearching ? (
            <h2 className="search-title" onClick={handleSearchClick}>
              Algorithms <span className="search-icon">🔍</span>
            </h2>
          ) : (
            <input
              type="text"
              placeholder="Search Algorithms"
              value={searchTerm}
              onChange={handleSearch}
              onBlur={handleSearchBlur}
              autoFocus
            />
          )}
        </div>
        {filteredAlgorithms.map((category) => (
          <div key={category.category}>
            <h3 onClick={() => toggleCategory(category.category)} style={{ cursor: 'pointer' }}>
              {category.category}
            </h3>
            {expandedCategories[category.category] && (
              <ul>
                {category.items.map((item) => (
                  <li key={item.slug}>
                    <Link to={`/algorithm/${item.slug}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            )}
            {expandedCategories[category.category] && category.items.length === 0 && (
              <p>No algorithms found</p>
            )}
          </div>
        ))}
      </div>
      <div className="sidebar">
        <h2>Code</h2>
        <p>Content goes here...</p>
      </div>
      <div className="sidebar">
        <h2>Realtime</h2>
        <p>Content goes here...</p>
      </div>
    </div>
  );
};

export default ThreeSidebars;
