import React from 'react'


const BorderHeading = (props)=>{

    const {boardData} = props;
   
    return(
        <React.Fragment>
            
        <div className="heading p-2" style={{ backgroundColor: boardData && boardData.prefs.backgroundColor }}>
            <h5 className="text-white font-weight-bold pl-2"> {boardData && boardData.name}</h5>
        </div>
        </React.Fragment>
    )
}
export default BorderHeading;