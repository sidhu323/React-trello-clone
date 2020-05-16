import React , { useState, useEffect } from 'react'
import { getCardChecklists, updateCardCheckItem, createChecklistCheckItem } from "../../Services/service";
import './CardDialog.css';




const CardDialog = (props) => {
const { cardData } = props;
const [cardChecklists, setCardChecklists] = useState([])
const [addingItemToChecklist, setAddingItemToChecklist] =useState(false);
const [currentlyUpdatingChecklist, setCurrentlyUpdatingChecklist] = useState();
const [newAdditionItem, setNewAdditionItem] = useState('');


    const getChecklistsForCard=(cardId)=>{
    getCardChecklists(cardId)
    .then(res=>{
    console.log('res of checklist', res)
    setCardChecklists(res)});
    }

    useEffect(()=>{
    getChecklistsForCard(cardData.id);
    },[])
    const markChecklistItem=(cardId, itemId, completionState)=>{
    updateCardCheckItem(cardId, itemId, {state:completionState})
    .then(res=>console.log('mark complete response', res))
    .then(()=>getChecklistsForCard(cardId))
    }

    const createChecklistItem=(checklistId, name)=>{
    createChecklistCheckItem(checklistId, name)
    .then(()=>setNewAdditionItem(''))
    .then(()=>getChecklistsForCard(cardData.id))
    }

    const checklistNewAdditionState=(addingState, checklistId=undefined )=>{
    setNewAdditionItem('')
    setAddingItemToChecklist(addingState);
    checklistId&&setCurrentlyUpdatingChecklist(checklistId);
    }

    const handleNewAddItem=(e)=>{
    setNewAdditionItem(e.target.value);
    }

return (
    <React.Fragment>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">

    <h4 class="modal-title" id="exampleModalLabel">{cardData&&cardData.name}</h4>
   
    
   
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div class="modal-body">
    <div className="container-fluid">
    <form>
    <div className="row">
    <div className="col-lg-8">
    {cardChecklists.map((checklist)=>
    <>
    <div className="d-flex justify-content-between">
    <h5 className="mt-2 mb-2 "><i class="fa fa-check-square-o mr-2"
                aria-hidden="true"></i>{checklist.name}</h5>
                <button type="button" class="btn btn-sm trello-button">Delete</button>
    </div>
        

        {checklist.checkItems.map((checkItem)=>
        <>
            <div className="each-checklist-item-main-box">
            <div className="form-check">
                <label className="form-check-label"
                    style={{textDecoration:checkItem.state==='complete'?'line-through':'none'}}>
                    <input type="checkbox" class="form-check-input" name="" id=""
                        value="checkedValue" checked={(checkItem.state==='complete' )}
                        onChange={()=>markChecklistItem(cardData.id, checkItem.id,
                    (checkItem.state==='complete')?'incomplete':'complete')}
                    />
                    {checkItem.name}
                </label>
            </div>

            <div className="dropdown">
  
        <i className="fa fa-ellipsis-h" aria-hidden="true"id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
 
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Delete</a>
            </div>
        </div>
        </div>
           

        </>)}
        {addingItemToChecklist&&currentlyUpdatingChecklist===checklist.id?
        <div>
            <div className="form-group">

                <input type="text" className="form-control" name="" id=""
                    aria-describedby="helpId" placeholder="Add an item"
                    onChange={handleNewAddItem} value={newAdditionItem} />

            </div>

            <div className="d-flex add-item-area">
                <button type="button" className="btn btn-success  btn-sm"
                    onClick={()=>createChecklistItem(checklist.id,
                    newAdditionItem)}>Add</button>
                <i className="fa fa-times" onClick={()=>checklistNewAdditionState(false)}
                    aria-hidden="true"></i>
            </div>

        </div>
        :<button className="button btn-add-item mt-2"
            onClick={()=>checklistNewAdditionState(true,checklist.id)}>Add an
            item</button>}
    </>

    )}
    </div>
    <div className="col-lg-4 align-item-center">
           
    <button type="button" class="btn btn-md ml-4 trello-button d-content" >
    <i class="fa fa-check-square-o" aria-hidden="true"></i>Checklist </button>
       
    </div>
    </div>
    </form>
    </div>

    </div>

    </div>
    </div>
    </div>
    </React.Fragment>
);
}

export default CardDialog;