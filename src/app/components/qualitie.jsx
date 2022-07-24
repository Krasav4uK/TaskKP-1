import React from "react";

const Qualitie = ({ color, name, _id}) => {
    let colorQualities = `badge bg-${color} m-1`;
    return (

        <span key={_id} className={colorQualities}>
            {name}
        </span>
    )
};

export default Qualitie;