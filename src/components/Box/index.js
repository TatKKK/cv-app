import React from 'react';
import "./box.scss";


export default function Box ({title, content, children}) {
  return (
   <section className="info-box">    
      <h2 data-testid="box-title">{title}</h2>    
      <span>
      {content}
      </span>
    {children}
   </section>
  );
};

