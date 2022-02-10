import React, { useState } from "react";
const ToggleLike = (props) => {


    function handleClick (){
        //Call passed-in function, say it's a "like" click
        props.handleToggle('like');
        // if (like === 'normal'){
        //     setLike('like');
        // }
        // else {
        //     setLike('normal')
        // }
    }
    return ( 
        <div>
            <button className={props.like} type='button' onClick={handleClick}>like</button> 
            
        </div>
     );
}
 
export default ToggleLike;