import React from 'react';
import Info from '../Info';
import data from "../../data/feedback.json";
import "./feedback.scss";

function Feedback ({ data })  {
  return (
   <div className="feedback">
     <ul>
      {data.map((feedbackItem, index) => (
        <li key={index} className="feedback-entry">
          <Info text={feedbackItem.feedback}/>
         
            <div className="feedback-reporter">
              <div className="feedback-reporter-photo">
                <img src={feedbackItem.reporter.photoUrl} alt={feedbackItem.reporter.name} />
              </div>
              <p className="reporter-name">{feedbackItem.reporter.name}, </p>
              <p className="cite-link">
               <a href={feedbackItem.reporter.citeUrl} target="_blank">
               {feedbackItem.reporter.citeUrl}
              </a>
            </p>
            </div>             
        </li>
      ))}
    </ul>
   </div>
  );
};

export default Feedback;

