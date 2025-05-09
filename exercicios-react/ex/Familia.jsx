import React from "react";

import Filho from "./filho";



export default props => (
    <div>
        {React.Children.map(props.children, 
            child => React.cloneElement(child, { ...props }

            ))}
    </div>
)