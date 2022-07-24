import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import API from "./api";



function App() {
    const [users, setUsers] = useState(API.users.fetchAll());
    console.log(users);

    const handleDelete = (userId) => {
        setUsers((prevState) => prevState.filter((user) => user._id !== userId));
    }

    const handleToggleBookMark = (id) => {
        //         console.log("dsfsd", id);
        //         setUsers(users.map((user)=>{
        //             if(user.id===id) <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
        //   <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
        //             )}   
        //         ))
    }


    if (users.length === 0)
        return (
            <>
                <SearchStatus
                    length={users.length}
                />
            </>
        );
    return (
        <div>
            <SearchStatus
                length={users.length}
            />

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <Users

                        users={users}
                        onDelete={handleDelete}
                        onToggleBookMark={handleToggleBookMark}
                    />
                </tbody>
            </table>

        </div>
    )
}

export default App;