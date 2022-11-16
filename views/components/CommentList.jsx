import React from 'react';
import CommentPreview from './CommentPreview';

export default function CommentList({ comments, user, post }) {
    return (
        <ul className="row list-unstyled">
            {comments.map((comment, idx) => <CommentPreview
                key={comment._id}
                comment={comment}
                user={user}
                post={post}
            />
            )}
        </ul>
    )
}


