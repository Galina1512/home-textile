import React from 'react';
import { useState } from 'react';
import done from "./done-100.jpg";
import close from "./close-100.jpg";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
 <div className="accordion-item">
    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
    <div className='title'>{title}</div>
    <div>{isActive ? <img src={close} className="done"/> : <img src={done} className="done"/>}</div>
    </div>
    {isActive && <div className="accordion-content">{content}</div>}
 </div>
  );
};

export default Accordion;