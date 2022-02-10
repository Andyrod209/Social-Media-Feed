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
                                    <button type="submit">Like</button> 
                                    <button type="checkbox" >Dislike</button>
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