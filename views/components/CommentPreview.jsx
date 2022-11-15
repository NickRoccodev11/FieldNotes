import React from 'react';

export default function CommentPreview({ comment }) {
    return (
        <li className="col-6 justify-content-between mt-5">
            {comment}
    </li>
    )
}

