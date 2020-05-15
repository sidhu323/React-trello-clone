/* eslint-disable react/prop-types */
import React from 'react';

const ListCard = (props) => {
  const { cardData } = props;
  return (
    <>
     
        <div className="trello-list-card">
          {cardData && cardData.name}
        </div>
     
    </>
  );
};

export default ListCard;
