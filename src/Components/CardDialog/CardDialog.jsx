/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import {
  getCardChecklists,
  updateCardCheckItem,
  createChecklistCheckItem,
  addNewChecklist,
  deleteChecklist,
  deleteChecklistCheckItem,
} from '../../Services/service';
import './CardDialog.css';


const CardDialog = (props) => {
  const { cardData, show, onHide } = props;
  const [cardChecklists, setCardChecklists] = useState([]);
  const [addingItemToChecklist, setAddingItemToChecklist] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [titleName, setTitleName] = useState(cardData.name);
  const [currentlyUpdatingChecklist, setCurrentlyUpdatingChecklist] = useState();
  const [newAdditionItem, setNewAdditionItem] = useState('');
  const [newChecklist, setNewChecklist] = useState(false);
  const [newChecklistName, setNewChecklistName] = useState('');


  const getChecklistsForCard = (cardId) => {
    getCardChecklists(cardId)
      .then((res) => {
        console.log('res of checklist', res);
        setCardChecklists(res);
      });
  };

  useEffect(() => {
    getChecklistsForCard(cardData.id);
  }, []);

  const markChecklistItem = (cardId, itemId, completionState) => {
    updateCardCheckItem(cardId, itemId, { state: completionState })
      .then((res) => console.log('mark complete response', res))
      .then(() => getChecklistsForCard(cardId));
  };

  const createChecklistItem = (checklistId, name) => {
    createChecklistCheckItem(checklistId, name)
      .then(() => setNewAdditionItem(''))
      .then(() => getChecklistsForCard(cardData.id));
  };

  const checklistNewAdditionState = (addingState, checklistId = undefined) => {
    setNewAdditionItem('');
    setAddingItemToChecklist(addingState);
    checklistId && setCurrentlyUpdatingChecklist(checklistId);
  };

  const handleNewChecklistName = (e) => {
    setNewChecklistName(e.target.value);
  };

  const addNewChecklistToCard = (cardId, checklistName) => {
    addNewChecklist(cardId, checklistName)
      .then(() => getChecklistsForCard(cardId))
      .then(() => getCardChecklists(cardId))
      .then(() => setNewChecklist(false));
  };
  const handleNewAddItem = (e) => {
    setNewAdditionItem(e.target.value);
  };

  const deleteChecklistFromCard = (checklistId, cardId) => {
    deleteChecklist(checklistId).then(() => getChecklistsForCard(cardId));
  };

  const deleteChecklistItemFromChecklist = (checklistId, checkItemId, cardId) => {
    deleteChecklistCheckItem(checklistId, checkItemId).then(() => getChecklistsForCard(cardId));
  };

  const openInputText = () => {
    setShowInput(true);
  };

  const saveTitle = () => {
  };

  const updateTitle = (e) => {
    setTitleName(e.target.value);
  };


  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{cardData && cardData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <form>
              <div className="row">
                <div className="col-lg-8">
                  {cardChecklists.map((checklist) => (
                    <>
                      <div className="d-flex justify-content-between">
                        <h5 className="mt-2 mb-2 ">
                          <i
                            className="fa fa-check-square-o mr-2"
                            aria-hidden="true"
                          />
                          {checklist.name}
                        </h5>
                        <button type="button" className="btn btn-sm trello-button" onClick={() => deleteChecklistFromCard(checklist.id, cardData.id)}>Delete</button>
                      </div>


                      {checklist.checkItems.map((checkItem) => (
                        <>
                          <div className="each-checklist-item-main-box">
                            <div className="form-check">
                              <label
                                className="form-check-label"
                                style={{ textDecoration: checkItem.state === 'complete' ? 'line-through' : 'none' }}
                              >
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name=""
                                  id=""
                                  value="checkedValue"
                                  checked={(checkItem.state === 'complete')}
                                  onChange={() => markChecklistItem(cardData.id, checkItem.id,
                                    (checkItem.state === 'complete') ? 'incomplete' : 'complete')}
                                />
                                {checkItem.name}
                              </label>
                            </div>

                            <div className="dropdown vertical-dot">

                              <i className="fa fa-ellipsis-h" aria-hidden="true" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />

                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <span className="dropdown-item" onClick={() => deleteChecklistItemFromChecklist(checklist.id, checkItem.id, cardData.id)}>Delete</span>
                              </div>
                            </div>
                          </div>


                        </>
                      ))}
                      {addingItemToChecklist && currentlyUpdatingChecklist === checklist.id
                        ? (
                          <div>
                            <div className="form-group">

                              <input
                                type="text"
                                className="form-control"
                                name=""
                                id=""
                                aria-describedby="helpId"
                                placeholder="Add an item"
                                onChange={handleNewAddItem}
                                value={newAdditionItem}
                              />

                            </div>

                            <div className="d-flex add-item-area">
                              <button
                                type="button"
                                className="btn btn-success  btn-sm"
                                onClick={() => createChecklistItem(checklist.id,
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
                            className="button btn-add-item mt-2"
                            onClick={() => checklistNewAdditionState(true, checklist.id)}
                          >
                            Add an
                            item
                          </button>
                        )}
                    </>
                  ))}
                  {newChecklist
                        && (
                          <div>
                            <div className="form-group">

                              <textarea
                                type="text"
                                className="form-control add-card-text"
                                name=""
                                id=""
                                aria-describedby="helpId"
                                placeholder="Add new checklist"
                                rows="2"
                                onChange={handleNewChecklistName}
                                value={newChecklistName}
                              />

                            </div>


                            <div className="d-flex add-item-area">
                              <button
                                type="button"
                                className="btn btn-success  btn-sm"
                                onClick={() => addNewChecklistToCard(cardData.id, newChecklistName)}
                              >
                                Add
                              </button>
                              <i
                                className="fa fa-times"
                                onClick={() => setNewChecklist(false)}
                                aria-hidden="true"
                              />
                            </div>

                          </div>
                        )}
                </div>
                <div className="col-lg-4 align-item-center">

                  <button type="button" className="btn btn-md ml-4 trello-button d-content" onClick={() => setNewChecklist(true)}>
                    <i className="fa fa-check-square-o" aria-hidden="true" />
                    Checklist
                  </button>

                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardDialog;
