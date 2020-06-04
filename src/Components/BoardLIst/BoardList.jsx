/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  getCardsOnList, createCardOnList, getparticularCard, deleteCardFromList,
  updateListName,
} from '../../Services/service';

import ListCard from './ListCard';
import './ListCard.css';
import CardDialog from '../CardDialog/CardDialog';
import { createNewCard } from '../../actions/listActions';

const BoardList = (props) => {
  const { listData, handleBoardUpate, newCard } = props;
  const dispatch = useDispatch();
  const [listCards, setListCards] = useState([]);
  const [show, setShow] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [titleName, setTitleName] = useState(listData.name);

  const [addingCardToList, setAddingCardToList] = useState([]);
  const [currentlyUpdatingList, setCurrentlyUpdatingList] = useState([]);
  const [selectedCardData, setSelectedCardData] = useState();
  const [newAdditionItem, setNewAdditionItem] = useState('');

  const getCardsForList = (listId) => {
    getCardsOnList(listId).then((res) => {
      setListCards(res);
    });
  };


  const createCard = (idList, name) => {
    dispatch(createNewCard(idList, name));
  };

  const getCardInfo = (id) => {
    getparticularCard(id).then((data) => {
      console.log(data);
      // getCardsForList(id);
    });
  };

  const deleteCard = (cardId) => {
    setListCards(listCards.filter((card) => card.id !== cardId));
    deleteCardFromList(cardId);
    // .then(() => setListCards(listCards.filter((card) => card.id !== cardId)));
  };
  const openCard = (cardData) => {
    setSelectedCardData(cardData);
    setShow(true);
  };
  const checklistNewAdditionState = (addingState, listId = undefined) => {
    setNewAdditionItem('');
    setAddingCardToList(addingState);
    listId && setCurrentlyUpdatingList(listId);
  };
  const handleNewAddItem = (e) => {
    setNewAdditionItem(e.target.value);
  };
  const handleClose = () => {
    setShow(false);
    setSelectedCardData();
  };
  const openInputText = () => {
    setShowInput(true);
  };
  const saveTitle = (id) => {
    updateListName(id, titleName).then(() => {
      handleBoardUpate();
    });
    setShowInput(false);
  };
  const updateTitle = (e, id) => {
    if (e.key === 'Enter') {
      saveTitle(id);
    }
    setTitleName(e.target.value);
  };


  useEffect(() => {
    getCardsForList(listData.id);
    setListCards([...listCards, newCard]);
  }, [listData.id, newCard]);


  return (
    <>
      <div className="card particular-board-card" onClick={() => getCardInfo(listData.id)}>

        <div className="d-flex justify-content-between align-items-center">
          {(showInput)
            ? (
              <div className="form-group">
                <input
                  onBlur={() => saveTitle(listData.id)}
                  type="text"
                  className="form-control form-control-sm edit-form"
                  name=""
                  id=""
                  value={titleName}
                  onChange={(e) => updateTitle(e, listData.id)}
                  // onKeyDown={(e) => updateTitle(e, listData.id)}
                  aria-describedby="helpId"
                  placeholder=""
                />
              </div>
            )
            : (
              <div className="card-title" onClick={() => openInputText}>{listData && listData.name}</div>
            )}

          <div className="dropdown mr-3">

            <i
              className="fa fa-ellipsis-h "
              aria-hidden="true"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Edit</a>
              <a className="dropdown-item" href="#">Archive</a>
            </div>
          </div>
        </div>

        <div className="card-body particular-board-card-body">
          {listCards.map((card) => (
            // <div onClick={() => openCard(card)}>
            <ListCard cardData={card} key={card.id} deleteCard={deleteCard} openCard={openCard} />
            // </div>
          ))}
        </div>
        {addingCardToList && currentlyUpdatingList === listData.id
          ? (
            <div>
              <div className="form-group">

                <textarea
                  type="text"
                  className="form-control add-card-text"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Add card "
                  rows="2"
                  onChange={handleNewAddItem}
                  value={newAdditionItem}
                />

              </div>


              <div className="d-flex add-item-area">
                <button
                  type="button"
                  className="btn btn-success  btn-sm"
                  onClick={() => createCard(listData.id,
                    newAdditionItem)}
                >
                  Add
                </button>
                <i
                  className="fa fa-times"
                  onClick={() => checklistNewAdditionState(false)}
                  aria-hidden="true"
                />
              </div>

            </div>
          )
          : (
            <button
              type="button "
              onClick={
                () => {
                  checklistNewAdditionState(true, listData.id);
                  // createCard(true, listData.id);
                }
              }
              className="add-card"
            >
              {listCards.length === 0 ? '+ Add a card' : '+ Add another card'}
            </button>
          )}
      </div>
      {selectedCardData
        && <CardDialog handleCardUpdate={() => getCardInfo(listData.id)} cardData={selectedCardData} show={show} onHide={handleClose} />}
    </>

  );
};

const mapStateToProps = (state) => ({
  newCard: state.allLists.newCard,
});
export default connect(mapStateToProps)(BoardList);
