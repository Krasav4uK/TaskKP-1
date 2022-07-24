import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({user, ...rest}) => {
    console.log("user =",user);
    return (
            <tr>
                    
                    <td>{user.name}</td>
                    <td>
                        {user.qualities.map((qual) => (
                           <Qualitie
                                key={qual._id}
                                color={qual.color}
                                name={qual.name}
                                id={qual._id}
                           />
                        ))
                        }

                    </td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}/5</td>
                    <td>
                        <BookMark
                             status="true"
                            // id={user._id}
                            // {...rest}
                        />
                    </td>
                    <td><button type="button" className="btn btn-danger" onClick={() => rest.onDelete(user._id)}>delete</button></td>
            </tr>
    )
};

export default User;