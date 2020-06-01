/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { getListsOnBoard, getSingleBoard } from '../../Services/service';
import BorderHeading from './BorderHeading';
import BoardList from '../BoardLIst/BoardList';
import './SingleBoard.css';

const SingleBoard = (props) => {
  const [currentBoardId] = useState(props.match.params.boardId);
  const [boardData, setBoardData] = useState();
  const [boardLists, setBoardLists] = useState([]);

  const getBoardData = (boardId) => {
    console.log('hello world', props);
    getSingleBoard(boardId).then((res) => {
      setBoardData(res);
    }).catch((err) => console.log(err));
  };

  const getBoardList = (boardId) => {
    getListsOnBoard(boardId).then((res) => {
      setBoardLists(res);
    }).catch((err) => console.log(err));
  };

  useEffect(() => {
    getBoardData(currentBoardId);
    getBoardList(currentBoardId);
  }, []);

  return (
    <>
      <BorderHeading boardData={boardData} />
      <div className="main-container" style={{ backgroundColor: boardData && boardData.prefs.backgroundColor }}>
        <div className="d-flex flex-wrap">
          {boardLists.map((list) => <BoardList handleBoardUpate={() => getBoardList(currentBoardId)} listData={list} key={list.id}/>)}
        </div>
      </div>
    </>
  );
};
export default SingleBoard;
