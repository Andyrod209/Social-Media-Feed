import { useState } from 'react';
import ToggleDislike from '../../ToggleDislike/ToggleDislike';
import ToggleButton from '../ToggleButton/ToggleButton';
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
                                    <ToggleButton />
                                    <ToggleDislike />
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