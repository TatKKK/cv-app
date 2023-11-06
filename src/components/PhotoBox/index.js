import React from 'react';
import avatar from '../../assets/user/avatar.jpg';
import "./photobox.scss";

export default function PhotoBox({name, title, description, avatar}){
    return(
        <div className="photo-box">
        <figure>
          <div className="crop-photo">
            <img src={avatar} alt="user avatar" />
          </div>
          <figcaption>
            <strong>{name}</strong>
            <div className="title">{title}</div>
            <h5>{description}</h5>           
          </figcaption>
        </figure>
      </div>      
    )
}

