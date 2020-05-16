/* eslint-disable react/prop-types */
import React from 'react';
import "./ListCard.css";


const ListCard = (props) => {
  const { cardData } = props;
  return (
    <>
     
        <div className="trello-list-card">
          {cardData && cardData.name}
          {/* <div class="edit"><a href="#"><i class="fa fa-pencil"></i></a></div> 
          <div class="edit"><a href="#"><i class="fa fa-trash"></i></a></div> */}

 <div className="dropdown each-card-dot">
  
  <i className="fa fa-ellipsis-h fa-lg" aria-hidden="true"id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
 
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Edit</a>
    <a className="dropdown-item" href="#">Delete</a>
  </div>
</div>
           
        </div>
     
    </>
  );
};

export default ListCard;
