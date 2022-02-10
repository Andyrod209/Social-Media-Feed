import React, { useState } from "react";
const ToggleButton = (props) => {

    const[like, setLike] = useState('normal')
    const[dislike, setDislike] = useState('normal')

    function handleLikeClick (){
        if (like === 'normal'){
            setLike('like');
        }
        else {
            setLike('normal')
        }
        if (dislike === "dislike"){
            setDislike("normal")
        }
    }
    function handleDislikeClick (){
        if (dislike === 'normal'){
            setDislike('dislike');
        }
        else {
            setDislike('normal')
        }
        if (like === 'like') {
            setLike('normal');
        }
    }

    return ( 
        <div>
            <button className={like} type='button' onClick={handleLikeClick}>like</button> 
            <button className={dislike} type='button' onClick={handleDislikeClick}>dislike</button> 
        </div>
     );
}
 
export default ToggleButton;