import React from 'react';
import Main from './components/Main.jsx'
import PostList from './components/postlist'


export default function Feed({ posts }) {
    return (
        <Main>
            <div className="container">˚
                <div className="row justify-content-center mt-5">
                    <PostList posts={posts} />
                </div>
            </div>
           
        </Main>
    )
}

