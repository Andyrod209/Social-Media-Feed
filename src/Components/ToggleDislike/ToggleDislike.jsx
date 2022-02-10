import React, { useState } from "react";
const ToggleDislike = (props) => {

    const[dislike, setDislike] = useState('normal')

    function handleDislikeClick (){
        if (dislike === 'normal'){
            setDislike('dislike');
        }
        else {
            setDislike('normal')
        }
    }
    return ( 
        <div>
            <button className={dislike} type='button' onClick={handleDislikeClick}>dislike</button> 
        </div>
     );
}
 
export default ToggleDislike;