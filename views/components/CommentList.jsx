import React from 'react';
import CommentPreview from './CommentPreview';

export default function CommentList({ comments }) {
    return (
        <ul className="row list-unstyled">
            {comments.map((comment, idx) => <CommentPreview key={idx} comment={comment} />)}
        </ul>
    )
}


