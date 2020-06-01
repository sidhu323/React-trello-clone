import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBoards } from '../../actions/boardActions';
// import { getMyBoards } from '../../Services/service';
import './AllBoard.css';

const AllBoards = (props) => {
  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="boardmenu">
              <i className="fa fa-trello m-2" aria-hidden="true" />
              {' '}
              Boards
            </div>
          </div>

          <div className="col">
            <div className="heading">
              <i className="fa fa-user m-1" />
              <span>Personal Board</span>
            </div>
            <div className="row">

              {props.boards.map((board) => (
                <div className="col-lg-3 col-sm-12 personal-board mt-2" key={board.id}>
                  <>
                    <Link to={`/boards/${board.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                      <div className="card all-board-card">
                        <div
                          className="card-body"
                          style={{
                            backgroundColor: board.prefs.backgroundColor,
                            backgroundImage: `url(${board.prefs.backgroundImage})`,
                            backgroundSize: 'cover',
                          }}
                        >
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

    </>
  );
};

const mapStateToProps = (state) => ({
  boards: state.allBoards.boards,
});
export default connect(mapStateToProps, fetchBoards)(AllBoards);
