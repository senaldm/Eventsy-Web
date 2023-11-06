import React from 'react';
import './FeedBack.css';
const FeedBack = () => {
  return (
    <div className="feedback-container">
      <h2 className="feedback-header">Customer Feedback</h2>
      <form className="feedback-form">
        <div className="form-group2">
          <label htmlFor="feedback">Feedback:</label>
          <textarea id="feedback" name="feedback" required></textarea>
        </div>
        <button type="submit" className="submit-button" style={{backgroundColor:'grey'}}>Submit</button>
      </form>
    </div>
  );
};

export default FeedBack;
