import React from 'react';
import PostPreview from './postpreview';

export default function PostList({ posts }) {
    return (
        <ul className="row list-unstyled">
            {posts.map(post => <PostPreview key={post._id} post={post} />)}
        </ul>
    )
}


