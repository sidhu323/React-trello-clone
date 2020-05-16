import React, { useState, useEffect } from 'react';
import {getCardsOnList,CreateCardOnList,getparticularCard} from "../../Services/service";
import ListCard from './ListCard';
import "./ListCard.css"
import CardDialog from '../CardDialog/CardDialog';
const BoardList = (props) => {
const {listData}=props;
const [listCards, setListCards] = useState([]);
const [addingCardToList,setAddingCardToList]=useState([]);
const [currentlyUpdatingList,setCurrentlyUpdatingList] = useState([]);
const [selectedCardData, setSelectedCardData] = useState();
const [newAdditionItem, setNewAdditionItem] = useState('');

const getCardsForList = (listId)=>{
getCardsOnList(listId).then((res)=>{
setListCards(res);
});
}


const createCard=(idList, name)=>{
CreateCardOnList(idList, name)
.then((res)=>{
getCardsForList(idList);
})
}

const getCardInfo=(id)=>{
getparticularCard(id).then((res)=>{
getCardsForList(id);
})
}
const openCard = (cardData) =>{
console.log('opencard clidked')
setSelectedCardData(cardData);
console.log(cardData)

}
const checklistNewAdditionState=(addingState, listId=undefined )=>{
setNewAdditionItem('')
setAddingCardToList(addingState);
listId&&setCurrentlyUpdatingList(listId);
}
const handleNewAddItem=(e)=>{
setNewAdditionItem(e.target.value);
}

useEffect(() => {
getCardsForList(listData.id);

}, []);
return (
<React.Fragment>
    <div className="card particular-board-card" onClick={()=>getCardInfo(listData.id)}>

        <div className="d-flex justify-content-between align-items-center">
            <div className="card-title">{listData && listData.name}</div>
            <div className="dropdown mr-3">

                <i className="fa fa-ellipsis-h " aria-hidden="true" id="dropdownMenuButton" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false"></i>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Edit</a>
                    <a className="dropdown-item" href="#">Delete</a>
                </div>
            </div>
        </div>

   <div className="card-body particular-board-card-body">
            {listCards.map((card) =><div onClick={()=>openCard(card)} data-toggle="modal" data-target="#exampleModal">
                <ListCard cardData={card} key={card.id} />
            </div>)}
        </div>
        {addingCardToList && currentlyUpdatingList===listData.id?
        <div>
            <div class="form-group">

                <textarea type="text" class="form-control add-card-text" name="" id="" aria-describedby="helpId"
                    placeholder="Add card " rows="2" onChange={handleNewAddItem} value={newAdditionItem}></textarea>

            </div>


            <div className="d-flex add-item-area">
                <button type="button" className="btn btn-success  btn-sm" onClick={()=>createCard(listData.id,
                    newAdditionItem)}>Add</button>
                <i className="fa fa-times" onClick={()=>checklistNewAdditionState(false)}
                    aria-hidden="true"></i>
            </div>

        </div>:
        <button type="button " onClick={()=>{checklistNewAdditionState(true,listData.id); createCard(true,listData.id)}}
            className="add-card">
            {listCards.length === 0 ? '+Add a card' : '+ Add another card'}
        </button>
        }
    </div>
    {selectedCardData&&
    <CardDialog cardData={selectedCardData} />}
</React.Fragment>
);
}

export default BoardList;