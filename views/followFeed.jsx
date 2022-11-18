import React from 'react';
import Main from './components/Main.jsx'
import PostList from './components/postlist'


export default function Feed({ posts, user }) {
    return (
        <Main>
            <form
                action={"/feed"}
                method="GET"
                className="col-3"
            >
                <span>Show posts from everyone:</span>
                <button className="btn btn-primary " type="submit"> show</button>
            </form>
            <div className="container">˚
                <div className="row justify-content-center mt-5">
                    <PostList posts={posts} />
                </div>
            </div>
        </Main>
    )
}
