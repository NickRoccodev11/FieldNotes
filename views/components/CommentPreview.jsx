import React from 'react';

export default function CommentPreview({comment, user, post}) {
    console.log(post)
    return (
        <>
        <li className="col-6 justify-content-between mt-5">
            {comment.createdBy} says: {comment.comment} 
            {comment.createdById.toString() == user.id.toString() && (
            <form 
                    action={`/comment/deleteComment/${post.id}/${comment._id}?_method=DELETE`}
                    method="POST"
                    className="col-3"
                >
                    <button className="btn btn-primary fa fa-trash" type="submit"></button>
                </form>
                 )}
            </li>
           
                
           
        </>
    )
}

