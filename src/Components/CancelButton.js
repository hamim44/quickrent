import React from 'react';

const CancelButton = () => {
  return (
    <button className="cancel-button" onClick={() => alert('Cancel button clicked!')}>
      <i className="fa fa-times" aria-hidden="true"></i>
      Cancel
    </button>
  );
}
