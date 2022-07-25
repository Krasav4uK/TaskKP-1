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
        // console.log("dsfsd", id);
        setUsers(users.map((user) => {
            if (user._id === id) { user.bookmark = (!user.bookmark) }
            return user
        }))

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