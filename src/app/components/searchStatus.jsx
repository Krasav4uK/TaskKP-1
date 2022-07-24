import React from "react";

const SearchStatus = ({ length }) => {
    console.log("length ",length);
    return (length===0)
    ? <div className='badge bg-danger'><h3>Никто с тобой не тусанет</h3></div>
    : (length===2 || length===3 || length===4) 
    ? <div className='badge bg-primary'><h3>{length} человека тусанут с тобой сегодня</h3></div>
    : <div className="badge bg-primary"><h3>{length} человек тусанет с тобой сегодня</h3></div>
};

export default SearchStatus;