import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMyBoards } from "../../Services/service";
import "./AllBoard.css";

const AllBoards = ()=>{
const [allBoards,setAllBoards] = useState([]);

const getAllBoards = ()=>{
getMyBoards().then((res)=>{
setAllBoards(res);

})
};

useEffect(()=>{
getAllBoards();
},[])

return (
<React.Fragment>
    <div className="container mt-5">
        <div className="row">
            <div className="col-lg-3">
                <div className="boardmenu">
                    <i className="fa fa-trello m-2" aria-hidden="true"></i> Boards
                </div>
            </div>

            <div className="col">
                <div className="heading">
                    <i className="fa fa-user m-1"></i>
                    <span>Personal Board</span>
                </div>
                <div className="row">

                    {allBoards.map((board)=>(
                    <div className="col-lg-3 col-sm-12 personal-board mt-2" key={board.id}>
                        <>
                            <Link to={`/boards/${board.id}`} style={{color: 'inherit', textDecoration: 'inherit'}}>
                            <div className="card all-board-card">
                                <div className="card-body" style={{
                         backgroundColor: board.prefs.backgroundColor,
                         backgroundImage: `url(${board.prefs.backgroundImage})`,
                         backgroundSize: "cover"
                      
                    }}>
                                    <h5 className="card-title">{board.name}</h5>

                                </div>
                            </div>
                            </Link>
                        </>
                    </div>

                    ))}

                </div>
            </div>
        </div>
    </div>

</React.Fragment>
);
};
export default AllBoards;