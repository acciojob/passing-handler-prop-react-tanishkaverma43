import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button className={`color-button ${background}`} onClick={() => selectNextBackground({background: background})}>
      {/* label should come here */}
    </button>
  )
}
export default ColourSelector;
