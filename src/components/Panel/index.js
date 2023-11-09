import React, { useState } from 'react';
import Navigation from '../Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import PhotoBox from '../PhotoBox';
import Button from '../Button';
import avatar from '../../assets/user/avatar.jpg';
import "./panel.scss";

export default function Panel({ isCollapsed, onCollapse }) {

  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
    onCollapse(); 
    
    const main = document.querySelector('#main-inner');
    main.classList.toggle('nav-hide');
  };

  return (
      <nav className={`panel ${collapsed ? 'collapsed' : ''}`}>
        <button onClick={handleCollapse} className="button-slider">
          &#8801;
        </button>
        <PhotoBox avatar={avatar} name="Tamar Kaldani" />
        
        <Navigation />        
        
        <Button  id="back-button"      
        icon={<FontAwesomeIcon icon={faChevronLeft} />} text="Go back" to="/">  </Button>  
      
      </nav>
  );
}
