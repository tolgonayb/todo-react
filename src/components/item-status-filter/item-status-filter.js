import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({onToggleStatus}) => {
  return (
    <div className="btn-group">
      <button type="button"
              onClick={() => {onToggleStatus('all')}}
              className="btn btn-info">All</button>
      <button type="button"
               onClick={() => {onToggleStatus('active')}}
              className="btn btn-outline-secondary">Active</button>
      <button type="button"
               onClick={() => {onToggleStatus('done')}}
              className="btn btn-outline-secondary">Done</button>
    </div>
  );
};

export default ItemStatusFilter;
