// import ToggleDislike from '../ToggleDislike/ToggleDislike';
// import ToggleLike from '../ToggleLike/ToggleLike';
import ToggleButton from '../ToggleButton/ToggleButton.jsx';
import { useState } from 'react';
import './DisplayPost.css';
const DisplayPost = (props) => {


    return (
        <div className="container"> 
            <h3>User Post</h3>
            <table >
                <thead>
                    <tr>   
                        <th>Name</th>
                        <th>Post</th> 
                        <th>Like or Dislike</th>
                    </tr>
                </thead>
                <tbody>
                    {props.parentPost.map((post, index) => {
                        return (
                            <tr key ={index}>
                                <td>{post.name}</td>
                                <td>{post.post}</td>
                                <td>
                                    <ToggleButton/>
                                </td>
                                
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayPost;