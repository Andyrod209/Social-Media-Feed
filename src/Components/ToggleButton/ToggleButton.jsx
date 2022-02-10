import React, { useState } from "react";
const ToggleButton = (props) => {

    const[like, setLike] = useState('normal')

    function handleClick (){
        if (like == 'normal'){
            setLike('like');
        }
        else {
            setLike('normal')
        }
    }
    return ( 
        <div>
            <button className={like} type='button' onClick={handleClick}>like</button> 
            
        </div>
     );
}
 
export default ToggleButton;