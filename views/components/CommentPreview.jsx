import React from 'react';

export default function CommentPreview({ comment }) {
    console.log(comment)
    return (
        <li className="col-6 justify-content-between mt-5">
           {comment.comment}
    </li>
    )
}

