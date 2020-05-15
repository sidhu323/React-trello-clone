import React, { useState, useEffect } from 'react';
import {getCardsOnList,CreateCardOnList} from "../../Services/service";
import ListCard from './ListCard';
import "./ListCard.css"
const BoardList = (props) => {
    const {listData}=props;
    const [listCards, setListCards] = useState([]);


    const getCardsForList = (listId)=>{
        getCardsOnList(listId).then((res)=>{
            setListCards(res);
        });
    }
    const createCard=(id)=>{
        CreateCardOnList(id);
    }
  
    useEffect(() => {
        getCardsForList(listData.id);
      }, []);
    return ( 
        <React.Fragment>
            <div className="card particular-board-card">
                <div className="card-title">{listData && listData.name}</div>
                <div className="card-body">
                {listCards.map((card) => <ListCard cardData={card} key={card.id} />)}
                </div>
                <button type="button " onClick={() => createCard(listData.id)} className="add-card">
                        {listCards.length === 0 ? '+Add a card' : '+ Add another card'}
                </button>
    
               
            </div>
        </React.Fragment>
     );
}
 
export default BoardList;