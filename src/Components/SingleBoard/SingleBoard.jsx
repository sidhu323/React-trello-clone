/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getSingleBoard } from '../../Services/service';
import BorderHeading from './BorderHeading';
import BoardList from '../BoardLIst/BoardList';
import { fetchLists } from '../../actions/listActions';
import { fetchBoardData } from '../../actions/boardActions';
import './SingleBoard.css';

const SingleBoard = (props) => {
  const { lists, particularBoard } = props;
  const [currentBoardId] = useState(props.match.params.boardId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBoardData(currentBoardId));
    dispatch(fetchLists(currentBoardId));
  }, [currentBoardId]);

  return (
    <>
      <BorderHeading boardData={particularBoard} />
      <div className="main-container" style={{ backgroundColor: particularBoard && particularBoard.prefs.backgroundColor }}>
        <div className="d-flex flex-wrap">
          {lists.map((list) => (
            <BoardList
              handleBoardUpate={() => fetchLists(currentBoardId)}
              listData={list}
              key={list.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  lists: state.allLists.lists,
  boards: state.allBoards.boards,
  particularBoard: state.allBoards.particularBoard,
});


export default connect(mapStateToProps)(SingleBoard);
