/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getSingleBoard } from '../../Services/service';
import BorderHeading from './BorderHeading';
import BoardList from '../BoardLIst/BoardList';
import { fetchLists } from '../../actions/listActions';
import './SingleBoard.css';

const SingleBoard = (props) => {
  const [currentBoardId] = useState(props.match.params.boardId);
  const dispatch = useDispatch();
  const [boardData, setBoardData] = useState();
  const getBoardData = (boardId) => {
    getSingleBoard(boardId).then((res) => {
      setBoardData(res);
    }).catch((err) => console.log(err));
  };

  // const getBoardList = (boardId) => {
  //   getListsOnBoard(boardId).then((res) => {
  //     setBoardLists(res);
  //   }).catch((err) => console.log(err));
  // };

  useEffect(() => {
    getBoardData(currentBoardId);
    dispatch(fetchLists(currentBoardId));
  }, []);

  return (
    <>
      <BorderHeading boardData={boardData} />
      <div className="main-container" style={{ backgroundColor: boardData && boardData.prefs.backgroundColor }}>
        <div className="d-flex flex-wrap">
          {props.lists.map((list) => <BoardList handleBoardUpate={() => fetchLists(currentBoardId)} listData={list} key={list.id} />)}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  lists: state.allLists.lists,
});


export default connect(mapStateToProps)(SingleBoard);
