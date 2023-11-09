import React from 'react';
import "./box.scss";


export default function Box ({id,title, content, children}) {
  return (
   <section className="info-box" id={id}>    
      <h2 data-testid="box-title">{title}</h2>    
      <span>
      {content}
      </span>
    {children}
   </section>
  );
};

