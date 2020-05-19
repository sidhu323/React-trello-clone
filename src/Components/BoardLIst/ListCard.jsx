/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import './ListCard.css';


const ListCard = (props) => {
  const { cardData, deleteCard, openCard } = props;
  return (
    <>

      <div className="trello-list-card">
        <div onClick={() => openCard(cardData)}>{cardData && cardData.name}</div>
        {/* <div class="edit"><a href="#"><i class="fa fa-pencil"></i></a></div>
          <div class="edit"><a href="#"><i class="fa fa-trash"></i></a></div> */}

        <div className="dropdown each-card-dot">

          <i className="fa fa-ellipsis-h fa-lg" aria-hidden="true" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />

          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <span className="dropdown-item">Edit</span>
            <span className="dropdown-item" onClick={() => deleteCard(cardData.id)}>Delete</span>
          </div>
        </div>

      </div>

    </>
  );
};

export default ListCard;
