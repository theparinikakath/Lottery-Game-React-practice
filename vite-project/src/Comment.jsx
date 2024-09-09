import { useState } from "react";
import "./Comment.css";

export default function Comments(){
    let [comments, setComments]=useState([{
        username:"pk",
        rem:"great",
        rating:5,
    }])
    let addNewComment = (comment)=>{
        setComments((currComments)=>[...currComments,comment]);
    };
    return(
        <>
        <div>
            <h3>All Comments</h3>
            {comments.map((comment, idx) => (
                <div className="comment" key={idx}>
                    <span>{comment.rem}</span>
                    &nbsp;
                    <span>(rating={comment.rating})</span>
                    <p> -- {comment.username}</p>
                </div>
            ))}
        </div><hr></hr><CommentsForm addNewComment={addNewComment} /></>

    );
}